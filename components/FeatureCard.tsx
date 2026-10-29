import { tiinkr, tiinkrSection } from "@/content/tiinkr";
import { Emphasized } from "./Emphasized";
import { TiinkrViz } from "./visuals/TiinkrViz";

export function FeatureCard() {
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">
            <Emphasized {...tiinkrSection.heading} />
          </h2>
          <span className="mono">{tiinkrSection.label}</span>
        </div>

        <article className="card feature">
          <div>
            <span className="mono">{tiinkr.cardLabel}</span>
            <h3>{tiinkr.name}</h3>
            <p className="one">{tiinkr.oneLiner}</p>
            <div className="facts">
              {tiinkr.facts.map((fact) => (
                <div key={fact.label} className="fact">
                  <span className="mono">{fact.label}</span>
                  <b>{fact.value}</b>
                </div>
              ))}
            </div>
            <div className="tags">
              {tiinkr.tags.map((tag, i) => (
                <span key={tag} className={`tag${i === 0 ? " hot" : ""}`}>
                  {tag}
                </span>
              ))}
            </div>
            <a className="link" href={tiinkr.url}>
              {tiinkr.linkText}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <TiinkrViz />
        </article>
      </div>
    </section>
  );
}
