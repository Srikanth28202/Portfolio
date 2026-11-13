import Image from "next/image";

const rings = [
  { r: 122, opacity: 0.26, dash: "1 9", width: 1 },
  { r: 96, opacity: 0.18, dash: "3 12", width: 1 },
  { r: 70, opacity: 0.4, width: 1 },
];

export default function HeroOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-full">
      {/* orbital layer */}
      <div aria-hidden="true" className="absolute inset-0 rounded-full">
        <div className="absolute inset-[16%] rounded-full bg-[radial-gradient(circle,rgba(40,123,255,0.3),rgba(40,123,255,0.05)_55%,transparent_72%)] blur-2xl" />
        <div className="absolute inset-0">
          <div className="spin-slow absolute inset-[8%] rounded-full border border-white/[0.06]" />
          <div className="spin-mid absolute inset-[16%] rounded-full border border-dashed border-white/[0.09]" />
          <div className="absolute inset-[26%] rounded-full border border-white/[0.07]" />
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none">
            <defs>
              <linearGradient id="orb-ring" x1="60" y1="40" x2="340" y2="360">
                <stop stopColor="#7AA9FF" stopOpacity="0.85" />
                <stop offset="0.45" stopColor="#287BFF" stopOpacity="0.25" />
                <stop offset="1" stopColor="#7C5CFF" stopOpacity="0.6" />
              </linearGradient>
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
                strokeDasharray={ring.dash}
              />
            ))}
            <g className="orbit-dash spin-slow">
              <circle cx="200" cy="200" r="160" stroke="url(#orb-ring)" strokeWidth="1.2" strokeDasharray="140 320" strokeLinecap="round" />
              <circle cx="200" cy="40" r="3.5" fill="#9CC0FF" />
              <circle cx="200" cy="40" r="9" fill="#287BFF" fillOpacity="0.18" />
            </g>
            <g className="orbit-dash spin-mid">
              <circle cx="200" cy="200" r="108" stroke="rgba(122,169,255,0.45)" strokeWidth="1" strokeDasharray="6 10" />
              <circle cx="200" cy="92" r="2.4" fill="#7AA9FF" />
            </g>
            <g stroke="rgba(255,255,255,0.16)" strokeWidth="1">
              <path d="M200 22v14" />
              <path d="M200 364v14" />
              <path d="M22 200h14" />
              <path d="M364 200h14" />
            </g>
          </svg>
        </div>
      </div>

      {/* floating geometry */}
      <div aria-hidden="true" className="float-slow absolute top-[5%] right-[20%] size-9 rotate-45 rounded-[4px] border border-accent/40 bg-accent/5 shadow-[0_0_28px_-4px_rgba(40,123,255,0.6)] hidden sm:block" />
      <div aria-hidden="true" className="drift absolute bottom-[6%] right-[12%] size-2.5 rounded-full bg-accent-soft shadow-[0_0_18px_4px_rgba(40,123,255,0.55)]" />

      {/* portrait */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image src="/SRI.jpeg" alt="Sri Kanth V" fill priority className="object-cover" />
      </div>

      {/* floating labels */}
      <div aria-hidden="true" className="absolute top-[8%] left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 text-[9px] font-semibold tracking-[0.24em] text-accent-soft uppercase pill-blur hidden sm:block">
        AI / ML
      </div>
      <div aria-hidden="true" className="absolute top-[34%] right-[6%] rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 text-[9px] font-semibold tracking-[0.24em] text-white/70 uppercase pill-blur hidden sm:block">
        Data
      </div>
      <div aria-hidden="true" className="absolute bottom-[14%] left-[8%] rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 text-[9px] font-semibold tracking-[0.24em] text-white/70 uppercase pill-blur hidden sm:block">
        Product
      </div>

      {/* small SKV badge */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="grid size-14 place-items-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_32%_26%,rgba(122,169,255,0.9),rgba(29,95,216,0.55)_38%,rgba(8,15,28,0.96)_78%)] shadow-[0_0_40px_-6px_rgba(40,123,255,0.75)] sm:size-16">
          <span className="font-display text-sm font-semibold tracking-[0.2em] text-white sm:text-base">SKV</span>
        </div>
      </div>
    </div>
  );
}
