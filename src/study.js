export const DAY = 864e5;
export const norm = (w) => w.toLowerCase().replace(/[.,;:()¿?¡!]/g, '');
export const words = (text) => text.split(/\s+/).filter(Boolean);
export function shuffle(array, random = Math.random) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function nextSRS(s, q, now = Date.now()) {
  let { ease = 2.5, interval = 0, reps = 0 } = s || {};
  if (q < 3) { reps = 0; interval = 1; }
  else { reps += 1; interval = reps === 1 ? 1 : reps === 2 ? 3 : Math.round(interval * ease); }
  ease = Math.max(1.3, ease + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  return { ease, interval, reps, due: now + interval * DAY };
}
export const level = (s) => (!s || !s.reps ? 0 : s.interval < 3 ? 1 : s.interval < 7 ? 2 : s.interval < 21 ? 3 : 4);
export const buildCards = (temario) => temario.flatMap((c) => c.preguntas.map((p) => ({ ...p, cat: c.id, category: c.categoria })));
// Follow the order of the temario; randomize only the exercise type.
export function chooseQuestion(pool, index, random = Math.random) {
  return { card: pool[index] ?? null, mode: Math.floor(random() * 3) };
}
export function typingResult(answer, typed) {
  const A = words(answer), B = words(typed);
  const L = Array.from({ length: A.length + 1 }, () => Array(B.length + 1).fill(0));
  for (let i = 1; i <= A.length; i++) for (let j = 1; j <= B.length; j++)
    L[i][j] = norm(A[i - 1]) === norm(B[j - 1]) ? L[i - 1][j - 1] + 1 : Math.max(L[i - 1][j], L[i][j - 1]);
  const hitA = new Set(), hitB = new Set();
  for (let i = A.length, j = B.length; i > 0 && j > 0;) {
    if (norm(A[i - 1]) === norm(B[j - 1])) { hitA.add(i - 1); hitB.add(j - 1); i--; j--; }
    else if (L[i - 1][j] >= L[i][j - 1]) i--; else j--;
  }
  return { A, extra: B.filter((_, j) => !hitB.has(j)), hitA, score: L[A.length][B.length] / A.length };
}
