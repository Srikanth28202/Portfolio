const rings = [
  { r: 122, opacity: 0.26, dash: "1 9", width: 1 },
  { r: 96, opacity: 0.18, dash: "3 12", width: 1 },
  { r: 70, opacity: 0.4, dash: "none", width: 1 },
];

export default function HeroOrb() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[34rem] select-none"
    >
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(40,123,255,0.3),rgba(40,123,255,0.05)_55%,transparent_72%)] blur-2xl" />

      <div className="absolute inset-0">
        <div className="spin-slow absolute inset-[3%] rounded-full border border-white/[0.055]" />
        <div className="spin-mid absolute inset-[13%] rounded-full border border-dashed border-white/[0.08]" />
        <div className="absolute inset-[24%] rounded-full border border-white/[0.07]" />
      </div>

      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="orb-ring" x1="60" y1="40" x2="340" y2="360">
            <stop stopColor="#7AA9FF" stopOpacity="0.85" />
            <stop offset="0.45" stopColor="#287BFF" stopOpacity="0.25" />
            <stop offset="1" stopColor="#7C5CFF" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="orb-core" cx="35%" cy="28%" r="80%">
            <stop stopColor="#6BA5FF" />
            <stop offset="0.5" stopColor="#1D5FD8" />
            <stop offset="1" stopColor="#0A1528" />
          </radialGradient>
        </defs>

        {rings.map((ring) => (
          <circle
            key={ring.r}
            cx="200"
            cy="200"
            r={ring.r}
            stroke="rgba(255,255,255,0.7)"
            strokeOpacity={ring.opacity}
            strokeWidth={ring.width}
            strokeDasharray={ring.dash === "none" ? undefined : ring.dash}
          />
        ))}

        <g className="orbit-dash spin-slow">
          <circle
            cx="200"
            cy="200"
            r="160"
            stroke="url(#orb-ring)"
            strokeWidth="1.2"
            strokeDasharray="140 320"
            strokeLinecap="round"
          />
          <circle cx="200" cy="40" r="3.5" fill="#9CC0FF" />
          <circle cx="200" cy="40" r="9" fill="#287BFF" fillOpacity="0.18" />
        </g>

        <g className="orbit-dash spin-mid">
          <circle
            cx="200"
            cy="200"
            r="108"
            stroke="rgba(122,169,255,0.45)"
            strokeWidth="1"
            strokeDasharray="6 10"
          />
          <circle cx="200" cy="92" r="2.4" fill="#7AA9FF" />
        </g>

        <g stroke="rgba(255,255,255,0.16)" strokeWidth="1">
          <path d="M200 22v14" />
          <path d="M200 364v14" />
          <path d="M22 200h14" />
          <path d="M364 200h14" />
        </g>
      </svg>

      {/* core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="pulse-soft absolute -inset-10 rounded-full bg-accent/20 blur-2xl" />
        <div className="relative grid size-32 place-items-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_32%_26%,rgba(122,169,255,0.9),rgba(29,95,216,0.55)_38%,rgba(8,15,28,0.96)_78%)] shadow-[0_0_70px_-6px_rgba(40,123,255,0.75),inset_0_1px_0_rgba(255,255,255,0.35)] sm:size-36">
          <div className="absolute inset-[6px] rounded-full border border-white/10" />
          <div className="text-center">
            <div className="font-display text-2xl font-semibold tracking-[0.2em] text-white sm:text-[1.7rem]">
              SKV
            </div>
            <div className="mt-1.5 text-[8px] font-semibold tracking-[0.34em] text-white/60 uppercase">
              Intelligence
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-accent-soft/70 to-transparent" />
      </div>

      {/* labels */}
      <div className="absolute top-[12%] left-[6%] rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 text-[9px] font-semibold tracking-[0.24em] text-accent-soft uppercase pill-blur">
        AI / ML
      </div>
      <div className="absolute top-[26%] right-[2%] rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 text-[9px] font-semibold tracking-[0.24em] text-white/70 uppercase pill-blur">
        Data
      </div>
      <div className="absolute bottom-[14%] left-[14%] rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 text-[9px] font-semibold tracking-[0.24em] text-white/70 uppercase pill-blur">
        Product
      </div>

      {/* floating geometry */}
      <div className="float-slow absolute top-[5%] right-[20%] size-9 rotate-45 rounded-[4px] border border-accent/40 bg-accent/5 shadow-[0_0_28px_-4px_rgba(40,123,255,0.6)]" />
      <div className="drift absolute bottom-[6%] right-[12%] size-2.5 rounded-full bg-accent-soft shadow-[0_0_18px_4px_rgba(40,123,255,0.55)]" />
      <div className="float-slower absolute bottom-[20%] right-[4%]">
        <div className="size-0 border-x-[9px] border-b-[16px] border-x-transparent border-b-white/25" />
      </div>
      <div className="float-slow absolute top-[52%] left-0 h-12 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
      <div className="float-slower absolute top-[62%] right-[30%] size-3 rounded-full border border-white/25" />

      {/* scan sweep */}
      <div className="absolute inset-[18%] overflow-hidden rounded-full">
        <div className="scanline h-24 w-full bg-[linear-gradient(to_bottom,transparent,rgba(122,169,255,0.16),transparent)]" />
      </div>
    </div>
  );
}

