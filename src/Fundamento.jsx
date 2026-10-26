export default function Fundamento({ fuentes }) {
  if (!fuentes?.length) return null;
  return (
    <details className="fundamento">
      <summary>Consultar fundamento normativo</summary>
      {fuentes.some((f) => f.verificacion === 'pendiente') && (
        <p>Referencia pendiente de contraste oficial al 26-10-2026. No acredita la vigencia de esta respuesta.</p>
      )}
      <ul>{fuentes.map((f) => (
        <li key={`${f.url}-${f.articulo}`}>
          <a href={f.url} target="_blank" rel="noopener noreferrer">{f.fuente}</a>
          {f.articulo && ` · ${f.articulo}`}
          {f.fechaRevision && ` · Revisado: ${f.fechaRevision}`}
        </li>
      ))}</ul>
    </details>
  );
}
