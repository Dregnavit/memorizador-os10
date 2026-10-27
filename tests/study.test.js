import test from 'node:test';
import assert from 'node:assert/strict';
import { TEMARIO } from '../src/temario.js';
import { buildCards, chooseQuestion, DAY, nextSRS, shuffle, typingResult, words } from '../src/study.js';

test('SRS keeps existing learning intervals and calculates due dates from the grading time', () => {
  const time = 1800000000000;
  assert.deepEqual(nextSRS(undefined, 5, time), { ease: 2.6, interval: 1, reps: 1, due: time + DAY });
  assert.equal(nextSRS({ ease: 2.5, interval: 3, reps: 2 }, 4, time).due, time + 8 * DAY);
  const failed = nextSRS({ ease: 1.3, interval: 21, reps: 5 }, 1, time);
  assert.equal(failed.reps, 0);
  assert.equal(failed.ease, 1.3);
  assert.equal(failed.due, time + DAY);
});

test('all 103 answers work as typing, cloze and reorder word pools', () => {
  for (const card of buildCards(TEMARIO)) {
    assert.ok(words(card.a).length, card.id);
    assert.equal(typingResult(card.a, card.a).score, 1, card.id);
    assert.equal(typingResult(card.a, '').score, 0, card.id);
    const pool = words(card.a);
    const copy = [...pool];
    const shuffled = shuffle(pool, () => 0.5);
    assert.deepEqual(pool, copy);
    assert.deepEqual(shuffled.toSorted(), pool.toSorted());
  }
});

test('typing handles repeated words, punctuation, missing and extra words', () => {
  assert.equal(typingResult('La ley y la ley.', 'la ley y la ley').score, 1);
  assert.equal(typingResult('uno dos tres cuatro', 'uno tres').score, 0.5);
  assert.deepEqual(typingResult('uno dos', 'uno otro dos').extra, ['otro']);
});

test('exam respects the source order inside each category and varies the exercise', () => {
  for (const category of TEMARIO) {
    const pool = buildCards([category]);
    for (let i = 0; i < pool.length; i++) {
      for (const random of [0, 0.4, 0.99]) {
        const selected = chooseQuestion(pool, i, () => random);
        assert.equal(selected.card.id, pool[i].id);
        assert.equal(selected.mode, Math.floor(random * 3));
      }
    }
    assert.equal(chooseQuestion(pool, pool.length).card, null);
  }
});
