import { hero } from "@/content/site";

export function PromptDemo() {
  const { demo } = hero;
  return (
    <div className="demo" aria-label="Illustration: a prompt turning into an app">
      <div className="demo-bar">
        <i></i>
        <i></i>
        <i></i>
        <span className="mono">prompt &rarr; app</span>
      </div>
      <div className="prompt">
        <span className="mono">{demo.promptLabel}</span>
        <span className="typed">{demo.promptText}</span>
      </div>
      <div className="demo-arrow">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 4v16M5 13l7 7 7-7" />
        </svg>
      </div>
      <div className="app">
        <div className="app-top">
          <span>{demo.appTitle}</span>
          <span className="app-pill">{demo.appBadge}</span>
        </div>
        <div className="app-row">
          <b>{demo.appRowLabel}</b>
          <span>{demo.appRowValue}</span>
        </div>
        <div className="bar" style={{ width: "92%" }} />
        <div className="bar" style={{ width: "78%" }} />
        <div className="bar" style={{ width: "55%" }} />
        <span className="app-btn">{demo.appButton}</span>
      </div>
    </div>
  );
}
