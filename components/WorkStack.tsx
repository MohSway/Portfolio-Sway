import { work, workSection } from "@/content/work";
import { Emphasized } from "./Emphasized";
import { WorkCard } from "./WorkCard";

export function WorkStack() {
  return (
    <section className="sec" id="unifyapps" style={{ paddingTop: "72px" }}>
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">
            <Emphasized {...workSection.heading} />
          </h2>
          <span className="mono">{workSection.label}</span>
        </div>
        <div className="stack">
          {work.map((item, i) => (
            <WorkCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
