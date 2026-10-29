import { method, methodSection } from "@/content/method";
import { Emphasized } from "./Emphasized";

export function Method() {
  return (
    <section className="sec" id="method">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">
            <Emphasized {...methodSection.heading} />
          </h2>
          <span className="mono">{methodSection.label}</span>
        </div>
        <div className="method">
          {method.map((step) => (
            <div key={step.n} className="mstep">
              <p className="n">{step.n}</p>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
