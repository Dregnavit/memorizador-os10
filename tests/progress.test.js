import test from 'node:test';
import assert from 'node:assert/strict';
import { LEGACY_IDS } from '../src/legacy-ids.js';
import { LEGACY_KEY, PROGRESS_KEY, loadProgress, migrateProgress, recordGrade } from '../src/progress.js';
import { buildCards } from '../src/study.js';
import { TEMARIO } from '../src/temario.js';
import { readFileSync } from 'node:fs';
const original = JSON.parse(readFileSync(new URL('./fixtures/temario-original.json', import.meta.url)));
const schedule = { ease: 2.6, interval: 21, reps: 5, due: 1800000000000 };
function storage(entries = {}) {
  const map = new Map(Object.entries(entries));
  return { getItem: (k) => map.get(k) ?? null, setItem: (k, v) => map.set(k, v) };
}

test('immutable mapping covers the 103 original questions in all 20 categories', () => {
  assert.equal(original.length, 20);
  assert.equal(Object.keys(LEGACY_IDS).length, 103);
  const cards = buildCards(TEMARIO);
  assert.equal(cards.length, 103);
  assert.equal(new Set(cards.map((c) => c.id)).size, 103);
  assert.equal(new Set(TEMARIO.map((c) => c.id)).size, 20);
  original.forEach((c, ci) => c.preguntas.forEach((p, i) => {
    const id = LEGACY_IDS[`${ci}-${i}`];
    assert.ok(cards.some((card) => card.id === id), `Missing legacy card ${p.q}`);
  }));
});

test('all legacy schedules survive exactly; legacy raw bytes are never overwritten', () => {
  const old = Object.fromEntries(Object.keys(LEGACY_IDS).map((k, i) => [k, { ...schedule, due: schedule.due + i }]));
  const raw = JSON.stringify(old, null, 2);
  const store = storage({ [LEGACY_KEY]: raw });
  const state = loadProgress(store);
  assert.equal(state.error, null);
  for (const [key, id] of Object.entries(LEGACY_IDS)) assert.deepEqual(state.data.cards[id], old[key]);
  assert.equal(store.getItem(LEGACY_KEY), raw);
  assert.deepEqual(loadProgress(store), JSON.parse(JSON.stringify(state))); // Idempotent, even under StrictMode.
});

test('editing or moving cards and categories does not reset any schedule', () => {
  const moved = structuredClone(TEMARIO).reverse();
  moved.forEach((c) => c.preguntas.reverse());
  moved[0].preguntas[0].a = 'Texto corregido sin cambiar su identidad.';
  const legacy = Object.fromEntries(Object.keys(LEGACY_IDS).map((k) => [k, schedule]));
  const data = migrateProgress(legacy);
  buildCards(moved).forEach((c) => assert.deepEqual(data.cards[c.id], schedule));
});

test('existing stable schedules win over old backup; grading never touches the legacy backup', () => {
  const store = storage({ [LEGACY_KEY]: JSON.stringify({ '0-0': schedule }) });
  const first = loadProgress(store);
  const changed = { ...schedule, interval: 60, due: schedule.due + 1000 };
  const next = recordGrade(first, LEGACY_IDS['0-0'], changed, store);
  assert.deepEqual(next.data.cards[LEGACY_IDS['0-0']], changed);
  assert.deepEqual(loadProgress(store).data.cards[LEGACY_IDS['0-0']], changed);
  assert.deepEqual(JSON.parse(store.getItem(LEGACY_KEY))['0-0'], schedule);
});

test('unknown and malformed legacy records are retained without becoming active schedules', () => {
  const raw = JSON.parse('{"99-9":{"reps":2},"0-0":null,"__proto__":{"ease":2.6,"interval":21,"reps":5,"due":1800000000000}}');
  const data = migrateProgress(raw);
  assert.equal(Object.keys(data.cards).length, 0);
  assert.deepEqual(JSON.parse(JSON.stringify(data.unmapped)), raw);
});

test('invalid JSON, invalid shapes and future versions cannot be overwritten, including after grading', () => {
  for (const raw of ['{', 'null', '[]', '{"version":3,"cards":{},"unmapped":{}}', '{"version":2,"cards":{"x":null},"unmapped":{}}']) {
    const store = storage({ [PROGRESS_KEY]: raw, [LEGACY_KEY]: JSON.stringify({ '0-0': schedule }) });
    const state = loadProgress(store);
    assert.ok(state.error);
    const next = recordGrade(state, LEGACY_IDS['0-0'], schedule, store);
    assert.deepEqual(next.data.cards[LEGACY_IDS['0-0']], schedule);
    assert.equal(store.getItem(PROGRESS_KEY), raw);
  }
  for (const raw of ['{', 'null', '[]', 'false']) {
    const store = storage({ [LEGACY_KEY]: raw });
    assert.ok(loadProgress(store).error);
    assert.equal(store.getItem(LEGACY_KEY), raw);
    assert.equal(store.getItem(PROGRESS_KEY), null);
  }
});

test('quota failure retains the migrated in-memory schedules and does not destroy originals', () => {
  const raw = JSON.stringify({ '0-0': schedule });
  const store = storage({ [LEGACY_KEY]: raw });
  store.setItem = () => { throw new Error('QuotaExceededError'); };
  const state = loadProgress(store);
  assert.ok(state.error);
  assert.deepEqual(state.data.cards[LEGACY_IDS['0-0']], schedule);
  assert.equal(store.getItem(LEGACY_KEY), raw);
  assert.equal(store.getItem(PROGRESS_KEY), null);
});

test('denied storage access degrades to memory and a warning', () => {
  const store = { getItem: () => { throw new Error('SecurityError'); } };
  const state = loadProgress(store);
  assert.ok(state.error);
  assert.deepEqual(recordGrade(state, 'seguridad-definicion', schedule, store).data.cards['seguridad-definicion'], schedule);
});

test('two tabs preserve each other’s different grades and unknown IDs', () => {
  const store = storage();
  const a = loadProgress(store), b = loadProgress(store);
  recordGrade(a, 'seguridad-definicion', schedule, store);
  recordGrade(b, 'future-question', schedule, store);
  const data = loadProgress(store).data;
  assert.deepEqual(data.cards['seguridad-definicion'], schedule);
  assert.deepEqual(data.cards['future-question'], schedule);
});

test('corruption introduced after loading is preserved on the next grade', () => {
  const store = storage();
  const state = loadProgress(store);
  store.setItem(PROGRESS_KEY, 'broken');
  assert.ok(recordGrade(state, 'seguridad-definicion', schedule, store).error);
  assert.equal(store.getItem(PROGRESS_KEY), 'broken');
});
