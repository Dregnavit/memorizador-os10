import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { TEMARIO } from '../src/temario.js';
import { CORTE_LEGISLATIVO } from '../src/fuentes.js';
import { LEGACY_IDS } from '../src/legacy-ids.js';
import { buildCards } from '../src/study.js';
const read = (p) => JSON.parse(readFileSync(new URL(p, import.meta.url)));
const original = read('./fixtures/temario-original.json');
const audit = read('../docs/auditoria-2026-10-26.json');
const manifest = read('../docs/fuentes/manifest.json');
const cards = buildCards(TEMARIO);

test('audit covers each original question and matches the final bank and immutable migration map', () => {
  assert.equal(audit.preguntas.length, 103);
  assert.equal(new Set(audit.preguntas.map((r) => r.id)).size, 103);
  const classes = new Set(['Vigente y correcta', 'Vigente, pero necesita precisiones', 'Desactualizada o jurídicamente incorrecta', 'Ambigua o carente de fundamento verificable']);
  for (const r of audit.preguntas) {
    assert.ok(classes.has(r.clasificacion));
    const [ci, i] = r.idAntiguo.split('-').map(Number);
    assert.equal(r.id, LEGACY_IDS[r.idAntiguo]);
    assert.equal(r.preguntaOriginal, original[ci].preguntas[i].q);
    assert.equal(r.respuestaOriginal, original[ci].preguntas[i].a);
    const card = cards.find((c) => c.id === r.id);
    assert.equal(card.q, r.preguntaActual);
    assert.equal(card.a, r.respuestaActual);
    assert.deepEqual(card.fuentes ?? [], r.fundamentos);
    assert.equal(r.cambioAplicado, card.q !== r.preguntaOriginal || card.a !== r.respuestaOriginal);
  }
});

test('every published legal reference has an official dated source, matching evidence and no future version', () => {
  assert.equal(CORTE_LEGISLATIVO, '2026-10-26');
  for (const c of cards) for (const f of c.fuentes ?? []) {
    const url = new URL(f.url);
    assert.equal(url.hostname, 'www.bcn.cl');
    assert.equal(url.searchParams.get('idVersion'), CORTE_LEGISLATIVO);
    assert.equal(f.fechaRevision, CORTE_LEGISLATIVO);
    assert.ok(f.articulo?.length);
    assert.ok(f.versionDesde <= CORTE_LEGISLATIVO);
    assert.ok(!f.versionHasta || f.versionHasta >= CORTE_LEGISLATIVO);
    const evidence = manifest.find((m) => m.url === f.url);
    assert.ok(evidence, f.fuente);
    assert.equal(evidence.versionDesde, f.versionDesde);
    assert.equal(evidence.versionHasta, f.versionHasta);
    assert.match(evidence.sha256Respuesta, /^[a-f\d]{64}$/);
    assert.ok(readFileSync(new URL(`../docs/fuentes/${evidence.extracto}`, import.meta.url)).length > 500);
  }
});

test('the security law snapshot excludes the 1 November future version and includes the 2026 transitional amendments', () => {
  const evidence = manifest.find((m) => m.clave === 'seguridad');
  assert.equal(evidence.versionDesde, '2026-05-28');
  assert.equal(evidence.versionHasta, '2026-10-31');
  const authorisation = cards.find((c) => c.id === 'seguridad-autorizacion').a;
  assert.match(authorisation, /Transitoriamente/);
  assert.match(authorisation, /Prefecturas/);
  assert.match(authorisation, /plataforma/);
});

test('all eleven requested priority provisions are present in the source excerpts', () => {
  for (const [key, required] of [['seguridad', [46, 49, 50, 53, 60]], ['reglamento', [27, 88, 89, 90, 92, 107]]]) {
    const record = manifest.find((m) => m.clave === key);
    for (const article of required) assert.ok(record.articulosExtraidos.includes(`Artículo ${article}`), `${key} art. ${article}`);
  }
});

test('unambiguous correct original answers are retained without editorial churn', () => {
  const correct = audit.preguntas.filter((r) => r.clasificacion === 'Vigente y correcta');
  assert.ok(correct.length > 0);
  for (const r of correct) assert.equal(r.respuestaActual, r.respuestaOriginal, r.id);
});
