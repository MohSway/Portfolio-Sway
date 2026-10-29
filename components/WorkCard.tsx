import type { WorkItem } from "@/content/work";
import { BrainViz } from "./visuals/BrainViz";
import { VoiceViz } from "./visuals/VoiceViz";
import { LayersViz } from "./visuals/LayersViz";

const VIZ = { brain: BrainViz, voice: VoiceViz, "prompt-to-app": LayersViz } as const;

export function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const Viz = VIZ[item.id];
  return (
    <article className="card" style={{ "--i": index } as React.CSSProperties}>
      <div>
        <span className="mono">{item.label}</span>
        <h3>{item.title}</h3>
        <p className="one">{item.oneLiner}</p>
        <div className="facts">
          {item.facts.map((fact) => (
            <div key={fact.label} className="fact">
              <span className="mono">{fact.label}</span>
              <b>{fact.value}</b>
            </div>
          ))}
        </div>
        <div className="tags">
          {item.tags.map((tag, i) => (
            <span key={tag} className={`tag${i === 0 ? " hot" : ""}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Viz />
    </article>
  );
}
