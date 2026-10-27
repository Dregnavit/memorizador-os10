import { test, expect } from '@playwright/test';
import { TEMARIO } from '../../src/temario.js';
import { LEGACY_IDS } from '../../src/legacy-ids.js';
import { buildCards, shuffle, words } from '../../src/study.js';

const oldSchedule = { ease: 2.6, reps: 4, interval: 21, due: 1 };

test.beforeEach(async ({ page }) => {
  // Tests exercise the application without depending on remote font services.
  await page.route('https://fonts.googleapis.com/**', (route) => route.abort());
});

test('old progress migrates, sources toggle within four study steps, grading survives reload', async ({ page }) => {
  await page.addInitScript(({ schedule }) => {
    if (!localStorage.getItem('os10-srs')) localStorage.setItem('os10-srs', JSON.stringify({ '1-0': schedule }));
  }, { schedule: oldSchedule });
  await page.goto('/');
  await expect(page.getByText('1 repasos pendientes hoy · 103 preguntas')).toBeVisible();
  const rawBackup = await page.evaluate(() => localStorage.getItem('os10-srs'));
  await page.getByRole('button', { name: 'Repasar hoy', exact: true }).click();
  await expect(page.getByRole('heading', { level: 2 })).toHaveText('¿Qué disposiciones legales regulan la seguridad privada en Chile?');
  for (let step = 1; step <= 4; step++) {
    await expect(page.getByText(`Paso ${step}/4`, { exact: false })).toBeVisible();
    await page.getByText('Consultar fundamento normativo', { exact: true }).click();
    await expect(page.getByRole('link', { name: 'Ley 21.659 sobre Seguridad Privada' })).toBeVisible();
    await page.getByText('Consultar fundamento normativo', { exact: true }).click();
    await expect(page.getByText(`Paso ${step}/4`, { exact: false })).toBeVisible();
    if (step < 4) await page.getByRole('button', { name: 'Siguiente', exact: true }).click();
  }
  await page.getByRole('button', { name: 'Bien', exact: true }).click();
  await expect(page.getByText('¡Sesión terminada!')).toBeVisible();
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('os10-srs-v2')));
  expect(after.cards[LEGACY_IDS['1-0']].reps).toBe(5);
  expect(after.cards[LEGACY_IDS['1-0']].interval).toBe(55);
  await page.reload();
  await expect(page.getByText('0 repasos pendientes hoy · 103 preguntas')).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem('os10-srs'))).toBe(rawBackup);
});

for (const [mode, random] of [[0, 0.01], [1, 0.4], [2, 0.99]]) {
  test(`exam mode ${mode} keeps its question when grading, and resets the next exercise`, async ({ page }) => {
    await page.addInitScript((value) => { Math.random = () => value; }, random);
    await page.goto('/');
    const expectedCard = buildCards(TEMARIO)[0];
    await page.getByRole('button', { name: 'Examinar', exact: true }).first().click();
    await expect(page.getByRole('heading', { level: 2 })).toHaveText(expectedCard.q);
    if (mode === 0) {
      const ws = words(expectedCard.a);
      const hidden = shuffle(ws.map((_, i) => i), () => random)
        .slice(0, Math.max(1, Math.round(ws.length * 0.3))).sort((a, b) => a - b);
      await expect(page.locator('input')).toHaveCount(hidden.length);
      for (let i = 0; i < hidden.length; i++) await page.locator('input').nth(i).fill(ws[hidden[i]]);
      await page.getByRole('button', { name: 'Comprobar', exact: true }).click();
      await expect(page.getByText('Puntaje: 100%')).toBeVisible();
    } else if (mode === 1) {
      await page.locator('textarea').fill(expectedCard.a);
      await page.getByRole('button', { name: 'Comprobar', exact: true }).click();
      await expect(page.getByText('Puntaje: 100%')).toBeVisible();
    } else {
      // Locate by text, not by shuffle order; repeated words remain distinct chips.
      for (const word of words(expectedCard.a)) await page.getByRole('button', { name: word, exact: true }).first().click();
      await expect(page.getByText('Puntaje: 100%')).toBeVisible();
    }
    await expect(page.getByRole('heading', { level: 2 })).toHaveText(expectedCard.q);
    await page.getByRole('button', { name: 'Siguiente pregunta', exact: true }).click();
    await expect(page.getByRole('heading', { level: 2 })).toHaveText(buildCards(TEMARIO)[1].q);
    await expect(page.getByText('Pregunta 2 de 103', { exact: false })).toBeVisible();
    await expect(page.getByText('Puntaje:', { exact: false })).toHaveCount(0);
    if (mode === 1) await expect(page.locator('textarea')).toHaveValue('');
    if (mode === 2) await expect(page.locator('.chip')).toHaveCount(words(buildCards(TEMARIO)[1].a).length);
  });
}

test('category exam only selects questions from that category', async ({ page }) => {
  await page.goto('/');
  const category = page.locator('.grid > .card').filter({ has: page.getByRole('heading', { name: 'Legítima Defensa', exact: true }) });
  await category.getByRole('button', { name: 'Examinar', exact: true }).click();
  const questions = TEMARIO.find((c) => c.id === 'legitima-defensa').preguntas;
  await expect(page.getByRole('heading', { level: 2 })).toHaveText(questions[0].q);
  await expect(page.getByText(`Pregunta 1 de ${questions.length}`, { exact: false })).toBeVisible();
});

test('phone, tablet and desktop widths have no horizontal page overflow', async ({ page }) => {
  for (const width of [320, 390, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
      root: document.getElementById('root').getBoundingClientRect().width,
    }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport + 1);
    expect(dimensions.root).toBeGreaterThanOrEqual(width - 1);
  }
});

test('corrupt saved data remains untouched and a warning is visible after studying', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('os10-srs-v2', '{broken'));
  await page.goto('/');
  await expect(page.getByRole('alert')).toBeVisible();
  await page.getByRole('button', { name: 'Estudiar', exact: true }).first().click();
  for (let step = 1; step < 4; step++) await page.getByRole('button', { name: 'Siguiente', exact: true }).click();
  await page.getByRole('button', { name: 'Bien', exact: true }).click();
  expect(await page.evaluate(() => localStorage.getItem('os10-srs-v2'))).toBe('{broken');
  await expect(page.getByRole('alert')).toBeVisible();
});
