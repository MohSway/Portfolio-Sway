import { path, pathSection } from "@/content/path";
import { Emphasized } from "./Emphasized";

export function Path() {
  return (
    <section className="sec" id="path">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">
            <Emphasized {...pathSection.heading} />
          </h2>
          <span className="mono">{pathSection.label}</span>
        </div>
        <div className="path">
          {path.map((row) => (
            <div key={row.date} className="row">
              <span className="mono">{row.date}</span>
              {row.bullets?.length ? (
                <details>
                  <summary>
                    <h4>{row.role}</h4>
                    <p>{row.row}</p>
                  </summary>
                  <div className="more">
                    {row.bullets.map((b) => (
                      <p key={b}>{b}</p>
                    ))}
                  </div>
                </details>
              ) : (
                <div>
                  <h4>{row.role}</h4>
                  <p>{row.row}</p>
                </div>
              )}
              <span className="org">{row.org}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
