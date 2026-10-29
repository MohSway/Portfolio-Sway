export function BrainViz() {
  return (
    <div className="viz" aria-label="Illustration of model routing">
      <div className="flow">
        <div className="node">
          <span>Request</span>
          <span className="mono">from a teammate</span>
        </div>
        <span className="join"></span>
        <div className="node accent">
          <span>Router</span>
          <span className="mono">picks the model</span>
        </div>
        <div className="lanes">
          <div className="node">
            <span>Light model</span>
            <span className="mono">volume</span>
          </div>
          <div className="node">
            <span>Strong model</span>
            <span className="mono">reasoning</span>
          </div>
        </div>
        <span className="join"></span>
        <div className="chips">
          <span className="chip">Sales agent</span>
          <span className="chip">Marketing agent</span>
          <span className="chip">Ops agent</span>
        </div>
        <div className="chips">
          <span className="chip">HubSpot</span>
          <span className="chip">Google</span>
          <span className="chip">Microsoft</span>
          <span className="chip">500+ connectors</span>
        </div>
      </div>
    </div>
  );
}
