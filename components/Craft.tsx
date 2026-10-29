import { craft, craftSection } from "@/content/craft";
import { Emphasized } from "./Emphasized";

export function Craft() {
  return (
    <section className="sec" id="craft">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">
            <Emphasized {...craftSection.heading} />
          </h2>
          <span className="mono">{craftSection.label}</span>
        </div>
        <div className="bento">
          {craft.map((tile) => (
            <div key={tile.title} className={`tile t-${tile.span}`}>
              <h4>{tile.title}</h4>
              <p>{tile.intro}</p>
              <div className="chips">
                {tile.chips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
