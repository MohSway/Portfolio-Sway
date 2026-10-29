export function LayersViz() {
  return (
    <div className="viz" aria-label="Illustration of layered app screens">
      <div className="layers">
        <div className="layer">
          <span className="mono">Workflow</span>
          <div className="bar" style={{ background: "var(--line)", width: "80%" }} />
          <div className="bar" style={{ background: "var(--line)", width: "60%" }} />
        </div>
        <div className="layer">
          <span className="mono">Screens</span>
          <div className="bar" style={{ background: "var(--line)", width: "70%" }} />
          <div className="bar" style={{ background: "var(--line)", width: "88%" }} />
        </div>
        <div className="layer">
          <span className="mono" style={{ color: "var(--accent)" }}>
            Working app
          </span>
          <div className="bar" style={{ background: "var(--accent)", width: "64%" }} />
          <div className="bar" style={{ background: "var(--line)", width: "80%" }} />
          <div className="bar" style={{ background: "var(--line)", width: "46%" }} />
        </div>
      </div>
    </div>
  );
}
