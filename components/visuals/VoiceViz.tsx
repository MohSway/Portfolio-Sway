const BAR_HEIGHTS = [34, 68, 44, 96, 58, 110, 72, 40, 86, 104, 50, 78];

export function VoiceViz() {
  return (
    <div className="viz" aria-label="Illustration of a voice agent conversation">
      <div className="wave" aria-hidden="true">
        {BAR_HEIGHTS.map((h, i) => (
          <i key={i} style={{ height: `${h}px` }}></i>
        ))}
      </div>
      <div className="bubble">Hi, how can I help with your account today?</div>
      <div className="bubble me">I&apos;d like to check my recent transactions.</div>
      <span className="mono">Illustrative conversation</span>
    </div>
  );
}
