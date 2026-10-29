const BAR_HEIGHTS = [
  30, 64, 42, 92, 56, 110, 70, 38, 84, 104, 48, 76, 34, 96, 58, 80, 40, 68, 28, 88, 52, 72, 36, 60,
];

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
