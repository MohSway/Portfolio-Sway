import { hero, site } from "@/content/site";
import { PromptDemo } from "./PromptDemo";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow mono">
            <span className="dot"></span>
            {hero.eyebrow}
          </p>
          <h1 className="display">
            {hero.headline.prefix}
            <br />
            <em>{hero.headline.emphasis}</em> {hero.headline.suffix}
          </h1>
          <p className="lede">{hero.lede}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#work">
              {hero.primaryCta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <a className="btn btn-ghost" href={site.resumeUrl} download>
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <PromptDemo />
      </div>
    </section>
  );
}
