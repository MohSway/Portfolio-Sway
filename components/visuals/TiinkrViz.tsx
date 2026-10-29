import { tiinkr } from "@/content/tiinkr";

export function TiinkrViz() {
  return (
    <div className="viz" aria-label="Illustration of the Tiinkr flow">
      <div className="steps">
        {tiinkr.vizSteps.map((s) => (
          <span key={s.n} className={`step${s.active ? " on" : ""}`}>
            <span className="mono">{s.n}</span>
            {s.label}
          </span>
        ))}
      </div>
      <div className="doc">
        <h4>{tiinkr.vizDocTitle}</h4>
        {tiinkr.vizDocRows.map((row) => (
          <div key={row.label} className="doc-row">
            <span>{row.label}</span>
            <b>{row.value}</b>
          </div>
        ))}
      </div>
      <span className="mono">{tiinkr.vizCaption}</span>
    </div>
  );
}
