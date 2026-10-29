import { stats, statsLabel } from "@/content/stats";

export function Stats() {
  return (
    <div className="wrap">
      <p className="mono" style={{ margin: "96px 0 0" }}>
        {statsLabel}
      </p>
      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.caption} className="stat">
            <p className="big">{stat.big}</p>
            <p>{stat.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
