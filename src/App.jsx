import { useState, useMemo, useEffect } from "react";
import { TEMARIO } from "./temario.js";

import { buildCards, chooseQuestion, level, nextSRS, norm, shuffle, typingResult, words } from "./study.js";
import { browserStorage, loadProgress, recordGrade } from "./progress.js";
import Fundamento from "./Fundamento.jsx";
import { CORTE_LEGISLATIVO } from "./fuentes.js";

const CARDS = buildCards(TEMARIO);
const STORAGE = browserStorage();

/* ---------- SunArc ---------- */
function SunArc({ value }) {
  const t = Math.min(4, Math.max(0, value)) / 4, ang = Math.PI * (1 - t);
  const x = 100 + 80 * Math.cos(ang), y = 100 - 80 * Math.sin(ang);
  return (
    <svg viewBox="0 0 200 115" className="sun" role="img" aria-label={`Dominio ${value.toFixed(1)} de 4`}>
      <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="var(--line)" strokeWidth="3" strokeDasharray="4 5" />
      <circle cx={x} cy={y} r="11" fill="var(--sun)" />
      <text x="100" y="98" textAnchor="middle" fill="var(--fg)" fontSize="16">{value.toFixed(1)} / 4</text>
    </svg>
  );
}

/* ---------- Estudiar ---------- */
function Study({ list, onGrade, onExit }) {
  const [i, setI] = useState(0), [step, setStep] = useState(1), [show, setShow] = useState(false);
  const c = list[i];
  if (!c) return <div className="card"><p>¡Sesión terminada!</p><button onClick={onExit}>Volver</button></div>;
  const ws = words(c.a);
  const grade = (g) => { onGrade(c.id, g); setI(i + 1); setStep(1); setShow(false); };
  return (
    <div className="card">
      <small>{c.category} · {i + 1}/{list.length} · Paso {step}/4</small>
      <h2>{c.q}</h2>
      <Fundamento fuentes={c.fuentes} />
      {step === 1 && <p>{c.a}</p>}
      {step === 2 && <p className="mono">{ws.map((w) => w[0] + "_".repeat(w.length - 1)).join(" ")}</p>}
      {step === 3 && (<>
        <p className="mono">{show ? c.a : ws.map((w) => "_".repeat(w.length)).join(" ")}</p>
        <button className="theme-btn" onClick={() => setShow(!show)}>{show ? "Ocultar" : "Revelar"}</button>
      </>)}
      {step === 4 && <>
        <p>{c.a}</p>
        <div className="row">
          {[["Otra vez", 1], ["Difícil", 3], ["Bien", 4], ["Fácil", 5]].map(([l, g]) => <button key={g} onClick={() => grade(g)}>{l}</button>)}
        </div>
      </>}
      <div className="row">
        {step > 1 && <button className="theme-btn" onClick={() => setStep(step - 1)}>Anterior</button>}
        {step < 4 && <button className="theme-btn" onClick={() => setStep(step + 1)}>Siguiente</button>}
        <button className="theme-btn" onClick={onExit}>Salir</button>
      </div>
    </div>
  );
}

/* ---------- Examinar ---------- */
function ClozeMode({ c, done }) {
  const ws = useMemo(() => words(c.a), [c]);
  const [hidden] = useState(() => new Set(shuffle(ws.map((_, i) => i)).slice(0, Math.max(1, Math.round(ws.length * 0.3)))));
  const [v, setV] = useState({}), [chk, setChk] = useState(false);
  const ok = (i) => norm(v[i] || "") === norm(ws[i]);
  const check = () => { setChk(true); done([...hidden].filter(ok).length / hidden.size); };
  return (<>
    <p className="flow">{ws.map((w, i) => hidden.has(i)
      ? <input key={i} size={w.length} maxLength={w.length + 2} disabled={chk} value={v[i] || ""}
          className={chk ? (ok(i) ? "good" : "bad") : ""} onChange={(e) => setV({ ...v, [i]: e.target.value })} />
      : <span key={i}>{w} </span>)}</p>
    {!chk && <button onClick={check}>Comprobar</button>}
  </>);
}

function TypingMode({ c, done }) {
  const [t, setT] = useState(""), [res, setRes] = useState(null);
  const check = () => {
    const result = typingResult(c.a, t);
    setRes(result);
    done(result.score);
  };
  return (<>
    <textarea rows={5} value={t} disabled={!!res} onChange={(e) => setT(e.target.value)} placeholder="Escribe la respuesta de memoria…" />
    {!res ? <button onClick={check}>Comprobar</button> : (
      <p className="flow">
        {res.A.map((w, i) => <span key={i} className={res.hitA.has(i) ? "good" : "bad"}>{w} </span>)}
        {res.extra.map((w, i) => <span key={"x" + i} className="extra">{w} </span>)}
      </p>)}
  </>);
}

function ReorderMode({ c, done }) {
  const ws = useMemo(() => words(c.a), [c]);
  const [chips] = useState(() => shuffle(ws.map((w, i) => ({ w, i }))));
  const [pick, setPick] = useState([]), [fin, setFin] = useState(false);
  const add = (ch) => {
    const n = [...pick, ch]; setPick(n);
    if (n.length === ws.length) { setFin(true); done(n.filter((x, k) => norm(x.w) === norm(ws[k])).length / ws.length); }
  };
  return (<>
    <p className="flow">{pick.map((x, k) => <span key={k} className={fin ? (norm(x.w) === norm(ws[k]) ? "good" : "bad") : ""}>{x.w} </span>)}</p>
    <div className="row">{chips.filter((ch) => !pick.includes(ch)).map((ch) => <button key={ch.i} className="chip" onClick={() => add(ch)}>{ch.w}</button>)}</div>
    {!fin && <button className="theme-btn" onClick={() => setPick([])}>Reiniciar</button>}
  </>);
}

function Exam({ list, onGrade, onExit }) {
  const pool = list?.length ? list : CARDS;
  const [n, setN] = useState(0), [score, setScore] = useState(null);
  const [selection, setSelection] = useState(() => chooseQuestion(pool, 0));
  const c = selection.card;
  const done = (s) => { setScore(s); onGrade(c.id, s >= 0.95 ? 5 : s >= 0.8 ? 4 : s >= 0.5 ? 3 : 1); };
  const next = () => {
    const following = n + 1;
    setScore(null);
    setN(following);
    setSelection(chooseQuestion(pool, following));
  };

  if (!c) return (
    <div className="card center">
      <h2>¡Examen terminado!</h2>
      <p>Has recorrido las {pool.length} preguntas en el orden del temario.</p>
      <button onClick={onExit}>Volver al inicio</button>
    </div>
  );

  return (
    <div className="card">
      <small>Pregunta {n + 1} de {pool.length} · {c.category}</small>
      <h2>{c.q}</h2>
      <Fundamento fuentes={c.fuentes} />
      {selection.mode === 0 && <ClozeMode key={n} c={c} done={done} />}
      {selection.mode === 1 && <TypingMode key={n} c={c} done={done} />}
      {selection.mode === 2 && <ReorderMode key={n} c={c} done={done} />}
      {score !== null && <p>Puntaje: {Math.round(score * 100)}%</p>}
      <div className="row">
        {score !== null && <button onClick={next}>{n === pool.length - 1 ? "Finalizar examen" : "Siguiente pregunta"}</button>}
        <button className="theme-btn" onClick={onExit}>Salir</button>
      </div>
    </div>
  );
}

/* ---------- App ---------- */
const THEMES = [
  ["dark", "Oscuro"], 
  ["light", "Claro"], 
  ["medieval", "Medieval"], 
  ["shade", "Black & Violet"]
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { const saved = STORAGE.getItem("os10-theme"); return THEMES.some(([id]) => id === saved) ? saved : "dark"; }
    catch { return "dark"; }
  });
  const [progress, setProgress] = useState(() => loadProgress(STORAGE));
  const prog = progress.data.cards;
  const [now, setNow] = useState(() => Date.now());
  const [view, setView] = useState({ name: "home" });
  
  useEffect(() => { try { STORAGE.setItem("os10-theme", theme); } catch { /* Theme is optional. */ } }, [theme]);
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(timer);
  }, []);
  
  const grade = (id, g) => {
    const time = Date.now();
    const schedule = nextSRS(prog[id], g, time);
    setProgress(recordGrade(progress, id, schedule, STORAGE));
    setNow(time);
  };
  const due = CARDS.filter((c) => prog[c.id] && prog[c.id].due <= now);
  const avg = (list) => (list.length ? list.reduce((s, c) => s + level(prog[c.id]), 0) / list.length : 0);
  const queue = (list) => [...list.filter((c) => prog[c.id] && prog[c.id].due <= now), ...list.filter((c) => !prog[c.id])];
  
  const nextTheme = () => setTheme(THEMES[(THEMES.findIndex((t) => t[0] === theme) + 1) % THEMES.length][0]);

  return (
    <div className={`app ${theme}`}>
      <style>{CSS}</style>
      <header>
        <div><h1>Memorizador OS10</h1><small>Revisión legislativa: {CORTE_LEGISLATIVO}</small></div>
        <button className="theme-btn" onClick={nextTheme}>Tema: {THEMES.find((t) => t[0] === theme)[1]}</button>
      </header>
      {progress.error && <p role="alert">{progress.error}</p>}
      {view.name === "home" && (
        <main>
          <div className="card center">
            <SunArc value={avg(CARDS)} />
            <p>{due.length} repasos pendientes hoy · {CARDS.length} preguntas</p>
            <div className="row">
              <button disabled={!due.length} onClick={() => setView({ name: "study", list: due })}>Repasar hoy</button>
              <button className="theme-btn" onClick={() => setView({ name: "exam" })}>Examinar</button>
            </div>
          </div>
          <div className="grid">
            {TEMARIO.map((cat) => {
              const list = CARDS.filter((c) => c.cat === cat.id), seen = list.filter((c) => prog[c.id]).length;
              return (
                <div className="card" key={cat.id}>
                  <h3>{cat.nombre || cat.categoria}</h3>
                  <SunArc value={avg(list)} />
                  <p>{seen}/{list.length} estudiadas</p>
                  <div className="row" style={{ justifyContent: 'center', marginTop: 'auto' }}>
                    <button onClick={() => setView({ name: "study", list: queue(list).length ? queue(list) : list })}>Estudiar</button>
                    <button className="theme-btn" onClick={() => setView({ name: "exam", list: list })}>Examinar</button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      )}
      {view.name === "study" && <main><Study list={view.list} onGrade={grade} onExit={() => setView({ name: "home" })} /></main>}
      {view.name === "exam" && <main><Exam list={view.list} onGrade={grade} onExit={() => setView({ name: "home" })} /></main>}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=MedievalSharp&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Sora:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

@font-face {
  font-family: 'CloisterBlack';
  src: url('/CloisterBlack.ttf') format('truetype');
  font-weight: normal; font-style: normal;
}

.fundamento { margin: 1rem 0; font-size: 0.9rem; }
.fundamento summary { cursor: pointer; }
.fundamento a { color: var(--accent); overflow-wrap: anywhere; }
.fundamento li { margin: 0.5rem 0; }

/* Transiciones globales */
* { transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }

.app {
  --bg: #0B0F19; --fg: #F8FAFC; --card: #161D2D; --card-hover: #1C2438; --line: #2A3441;
  --sun: #00E5FF; --accent: #00E5FF; --accent-text: #0B0F19;
  --good: #10B981; --bad: #EF4444;
  --shadow: 0 8px 24px rgba(0,0,0,0.3);
  font-family: 'Sora', system-ui, sans-serif;
  background: radial-gradient(circle at 50% -20%, #15203A 0%, var(--bg) 60%);
  color: var(--fg); min-height: 100vh; padding: 24px;
}

.app.light {
  --bg: #F8FAFC; --fg: #0F172A; --card: #FFFFFF; --card-hover: #F1F5F9; --line: #E2E8F0;
  --sun: #F59E0B; --accent: #2563EB; --accent-text: #FFFFFF;
  --good: #16A34A; --bad: #DC2626;
  --shadow: 0 4px 15px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03);
  background: var(--bg);
}

.app.medieval {
  --bg: #EAE0C8; --fg: #2C1A0B; --card: #DFD1B3; --card-hover: #D6C5A1; --line: #8C6A43;
  --sun: #7A2800; --accent: #5C1D06; --accent-text: #FDF8ED;
  --good: #4D6B2A; --bad: #8B0000;
  --shadow: 2px 4px 12px rgba(92, 61, 30, 0.2);
  font-family: 'MedievalSharp', Georgia, serif;
  background-color: var(--bg);
  background-image: radial-gradient(rgba(140, 106, 67, 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* TEMA BLACK & VIOLET */
.app.shade {
  --bg: #0D0D12; --fg: #F1F5F9; --card: #15151E; --card-hover: #1A1A26; --line: #2D234A;
  --sun: #A855F7; --accent: #7E22CE; --accent-text: #FFFFFF;
  --good: #10B981; --bad: #F43F5E;
  --shadow: 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(168, 85, 247, 0.1);
  background: var(--bg);
}

/* Forzar color de texto en todos los headings */
h1, h2, h3, h4, p, small { color: var(--fg) !important; }
.app.medieval h1, .app.medieval h2, .app.medieval h3 { font-family: 'CloisterBlack', serif; font-weight: normal; }

header { display: flex; justify-content: space-between; align-items: center; max-width: 960px; margin: 0 auto 32px; }
header h1 { font-family: 'Fraunces', serif; font-size: 2rem; }
.app.medieval header h1 { font-size: 2.5rem; }

main { max-width: 960px; margin: 0 auto; animation: fadeIn 0.4s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin-top: 24px; }
.card {
  background: var(--card); border: 1px solid var(--line); border-radius: 12px;
  padding: 24px; box-shadow: var(--shadow);
  display: flex; flex-direction: column; gap: 12px;
}
.grid .card { transition: transform 0.2s, background 0.2s, border-color 0.2s, box-shadow 0.2s; }
.grid .card:hover { background: var(--card-hover); transform: translateY(-4px); border-color: var(--sun); box-shadow: 0 12px 30px rgba(0,0,0,0.15); }
.center { text-align: center; align-items: center; }

.sun { width: 100%; max-width: 220px; overflow: visible; }
.app.shade .sun circle[r="11"] { filter: drop-shadow(0 0 8px var(--sun)); }
.app.dark .sun circle[r="11"] { filter: drop-shadow(0 0 6px var(--sun)); }

.row { display: flex; flex-wrap: wrap; gap: 10px; margin: 16px 0 0; justify-content: inherit; }
button {
  background: var(--accent); color: var(--accent-text) !important; border: none; border-radius: 8px;
  padding: 10px 18px; cursor: pointer; font: inherit; font-weight: 600;
  transition: filter 0.2s, transform 0.1s, box-shadow 0.2s;
}
button:hover { filter: brightness(1.15); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
button:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; filter: none; }

.theme-btn { background: var(--card); color: var(--fg) !important; border: 1px solid var(--line); box-shadow: var(--shadow); }
.theme-btn:hover { border-color: var(--sun); background: var(--card-hover); }

.chip { background: var(--card); color: var(--fg); border: 1px solid var(--line); padding: 8px 14px; border-radius: 999px; cursor: pointer; transition: 0.2s; }
.chip:hover { border-color: var(--sun); background: var(--card-hover); transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); }

.mono { font-family: 'JetBrains Mono', ui-monospace, monospace; line-height: 1.9; word-break: break-word; font-size: 1.1em; color: var(--sun) !important; }
.flow { line-height: 2.2; font-size: 1.1em; }

input, textarea {
  font: inherit; background: var(--bg); color: var(--fg); border: 1px solid var(--line);
  border-radius: 6px; padding: 10px 14px; outline: none; transition: 0.2s;
}
textarea { width: 100%; box-sizing: border-box; margin-bottom: 12px; resize: vertical; }
input:focus, textarea:focus { border-color: var(--sun); box-shadow: 0 0 0 2px rgba(255,255,255,0.1); }

.good { color: var(--good) !important; border-bottom: 2px solid var(--good); font-weight: 600; }
.bad { color: var(--bad) !important; border-bottom: 2px solid var(--bad); font-weight: 600; }
.extra { color: var(--line) !important; text-decoration: line-through; font-style: italic; }
`;