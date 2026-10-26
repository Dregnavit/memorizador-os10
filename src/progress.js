import { LEGACY_IDS } from './legacy-ids.js';

export const LEGACY_KEY = 'os10-srs';
export const PROGRESS_KEY = 'os10-srs-v2';
const object = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const own = (value, key) => Object.hasOwn(value, key);
export const validSchedule = (s) => object(s) &&
  ['ease', 'interval', 'reps', 'due'].every((key) => Number.isFinite(s[key])) &&
  s.ease >= 1.3 && s.interval >= 0 && s.reps >= 0;

// Pure, repeatable conversion. Retain unmapped/invalid records for recovery.
export function migrateProgress(legacy) {
  if (!object(legacy)) throw new Error('El progreso antiguo no es un objeto.');
  const cards = Object.create(null), unmapped = Object.create(null);
  for (const [key, value] of Object.entries(legacy)) {
    const id = own(LEGACY_IDS, key) ? LEGACY_IDS[key] : undefined;
    if (id && validSchedule(value)) cards[id] = value;
    else unmapped[key] = value;
  }
  return { version: 2, cards, unmapped };
}

function parseV2(raw) {
  const value = JSON.parse(raw);
  if (!object(value) || value.version !== 2 || !object(value.cards) ||
      !object(value.unmapped) || !Object.values(value.cards).every(validSchedule)) {
    throw new Error('Formato de progreso no reconocido.');
  }
  return value;
}

export function loadProgress(storage) {
  try {
    // Never overwrite a corrupt or newer version with a fallback.
    const current = storage.getItem(PROGRESS_KEY);
    if (current !== null) return { data: parseV2(current), error: null };
    const legacy = storage.getItem(LEGACY_KEY);
    const data = migrateProgress(legacy === null ? {} : JSON.parse(legacy));
    try {
      storage.setItem(PROGRESS_KEY, JSON.stringify(data));
      return { data, error: null };
    } catch {
      return { data, error: 'No se pudo guardar la migración. El progreso antiguo sigue intacto; esta sesión funciona en memoria.' };
    }
  } catch {
    return {
      data: { version: 2, cards: {}, unmapped: {} },
      error: 'No se pudo leer el progreso. Los datos originales se conservaron. Esta sesión funciona en memoria; exporta o recupera los datos antes de continuar en otro dispositivo.',
    };
  }
}

export function recordGrade(state, id, schedule, storage) {
  const data = { ...state.data, cards: { ...state.data.cards, [id]: schedule } };
  // A failed migration/read must not overwrite any original raw value later.
  if (state.error) return { data, error: state.error };
  try {
    const raw = storage.getItem(PROGRESS_KEY);
    const latest = raw === null ? state.data : parseV2(raw);
    // Merge only this grade, preserving another tab's other schedules and unknown IDs.
    const merged = { ...latest, cards: { ...latest.cards, [id]: schedule } };
    storage.setItem(PROGRESS_KEY, JSON.stringify(merged));
    return { data: merged, error: null };
  } catch {
    return { data, error: 'No se pudo guardar el repaso. Los datos guardados se conservaron; esta sesión funciona en memoria.' };
  }
}

// Getter can itself throw (blocked localStorage); use the same safe load path.
export function browserStorage() {
  return {
    getItem: (key) => window.localStorage.getItem(key),
    setItem: (key, value) => window.localStorage.setItem(key, value),
  };
}

export function scheduleFor(progress, id) {
  return own(progress, id) && validSchedule(progress[id]) ? progress[id] : undefined;
}
