export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-ink" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-12%,rgba(40,123,255,0.16),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_88%_18%,rgba(124,92,255,0.09),transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_8%_78%,rgba(40,123,255,0.07),transparent_72%)]" />

      <div className="bg-grid absolute inset-0 opacity-70" />

      <div className="glow-orb float-slower top-[-8rem] left-[8%] h-[26rem] w-[26rem] bg-accent/12" />
      <div className="glow-orb float-slow top-[38%] right-[-6rem] h-[22rem] w-[22rem] bg-[#7C5CFF]/10" />

      <div className="noise absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
