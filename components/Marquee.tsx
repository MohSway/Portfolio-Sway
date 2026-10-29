import { hero } from "@/content/site";

export function Marquee() {
  return (
    <div className="marquee" aria-label="Tools and themes">
      <div className="track">
        <div className="grp">
          {hero.marquee.map((item) => (
            <span key={item} className="mi">
              {item}
            </span>
          ))}
        </div>
        <div className="grp" aria-hidden="true">
          {hero.marquee.map((item) => (
            <span key={item} className="mi">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
