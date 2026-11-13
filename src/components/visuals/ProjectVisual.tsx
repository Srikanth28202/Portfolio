import { Zap } from "lucide-react";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/content";

function Agri({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" fill="none" aria-hidden="true">
      <g stroke={accent} strokeOpacity="0.18" strokeWidth="1">
        <path d="M8 158c44-20 82-20 124 0s78 20 116 0 50-14 64-6" />
        <path d="M8 146c44-20 82-20 124 0s78 20 116 0 50-14 64-6" />
        <path d="M8 134c44-20 82-20 124 0s78 20 116 0 50-14 64-6" />
      </g>
      <circle
        cx="160"
        cy="90"
        r="62"
        stroke={accent}
        strokeOpacity="0.28"
        strokeDasharray="2 7"
      />
      <g stroke={accent} strokeWidth="1.6" strokeLinecap="round">
        <path d="M160 138V58" />
        <path
          d="M160 112c-25-2-42-17-46-40 23-1 40 13 46 31"
          fill={accent}
          fillOpacity="0.12"
        />
        <path
          d="M160 96c25-2 42-17 46-40-23-1-40 13-46 31"
          fill={accent}
          fillOpacity="0.12"
        />
      </g>
      <g fill={accent}>
        <circle cx="160" cy="56" r="3.5" />
        <circle cx="114" cy="72" r="2" fillOpacity="0.7" />
        <circle cx="206" cy="72" r="2" fillOpacity="0.7" />
        <circle cx="160" cy="138" r="2.5" />
      </g>
      <g stroke={accent} strokeOpacity="0.32" strokeWidth="1" strokeDasharray="1 6">
        <path d="M160 90 96 44" />
        <path d="M160 90 224 44" />
        <path d="M160 90 224 136" />
      </g>
    </svg>
  );
}

function Translate({ accent }: { accent: string }) {
  const bars = [18, 36, 58, 40, 78, 96, 64, 84, 52, 70, 44, 26, 48, 30, 16];

  return (
    <div className="relative flex h-full items-center justify-center">
      <svg
        viewBox="0 0 320 180"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="160" cy="90" r="58" stroke={accent} strokeOpacity="0.2" />
        <ellipse cx="160" cy="90" rx="26" ry="58" stroke={accent} strokeOpacity="0.16" />
        <ellipse cx="160" cy="90" rx="58" ry="24" stroke={accent} strokeOpacity="0.12" />
        <path d="M102 90h116" stroke={accent} strokeOpacity="0.12" />
        <path d="M160 32v116" stroke={accent} strokeOpacity="0.12" />
      </svg>

      <div className="relative flex h-28 items-center gap-[5px]">
        {bars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            style={{
              height: `${height}px`,
              backgroundColor: accent,
              transitionDelay: `${index * 18}ms`,
            }}
            className="w-[3px] origin-center rounded-full opacity-55 transition-transform duration-500 group-hover:scale-y-125"
          />
        ))}
      </div>

      <span
        className="absolute top-5 left-6 rounded-md border px-2 py-1 text-[9px] font-semibold tracking-[0.18em]"
        style={{ borderColor: `${accent}44`, color: accent }}
      >
        EN
      </span>
      <span
        className="absolute right-6 bottom-5 rounded-md border px-2 py-1 text-[9px] font-semibold tracking-[0.18em]"
        style={{ borderColor: `${accent}44`, color: accent }}
      >
        TR
      </span>
    </div>
  );
}

function Weather({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="weather-fill" x1="0" y1="30" x2="0" y2="160">
          <stop stopColor={accent} stopOpacity="0.28" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>

      <g stroke="rgba(255,255,255,0.09)" strokeDasharray="3 6">
        <path d="M24 44h272" />
        <path d="M24 82h272" />
        <path d="M24 120h272" />
        <path d="M24 158h272" />
      </g>

      <path
        d="M24 138 56 126 88 132 120 104 152 112 184 78 216 90 248 56 280 66 296 40V158H24Z"
        fill="url(#weather-fill)"
      />
      <path
        d="M24 138 56 126 88 132 120 104 152 112 184 78 216 90 248 56 280 66 296 40"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g fill={accent}>
        <circle cx="120" cy="104" r="2.4" />
        <circle cx="184" cy="78" r="2.4" />
        <circle cx="248" cy="56" r="2.4" />
      </g>

      <circle cx="248" cy="56" r="10" fill={accent} fillOpacity="0.14" />
      <circle cx="248" cy="56" r="4" fill={accent} />
      <path d="M248 40v-8" stroke={accent} strokeOpacity="0.4" />
      <path d="M296 40v-8" stroke="rgba(255,255,255,0.25)" />
    </svg>
  );
}

function EvCharging({ accent }: { accent: string }) {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="relative grid size-40 place-items-center">
        <div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{ background: `${accent}22` }}
        />
        <div
          className="absolute inset-0 rounded-full border"
          style={{ borderColor: `${accent}33` }}
        />
        <div
          className="spin-slow absolute inset-1.5 rounded-full border border-dashed"
          style={{ borderColor: `${accent}66` }}
        />
        <div
          className="spin-mid absolute inset-6 rounded-full border"
          style={{ borderColor: `${accent}40` }}
        />
        <div
          className="absolute inset-12 rounded-full border"
          style={{ borderColor: `${accent}55` }}
        />
        <div
          className="absolute inset-14 rounded-full"
          style={{ background: `${accent}18` }}
        />

        <div
          className="relative grid size-12 place-items-center rounded-full border"
          style={{
            borderColor: `${accent}66`,
            background: "rgba(8,11,18,0.8)",
            boxShadow: `0 0 32px -4px ${accent}aa`,
          }}
        >
          <Zap className="size-5" style={{ color: accent }} strokeWidth={2} />
        </div>

        <span
          className="absolute top-1 size-2 rounded-full"
          style={{ background: accent, boxShadow: `0 0 14px 2px ${accent}` }}
        />
        <span
          className="absolute bottom-1 left-4 size-1.5 rounded-full"
          style={{ background: accent, opacity: 0.6 }}
        />
      </div>

      <div className="absolute right-5 bottom-5 flex items-end gap-1">
        {[6, 10, 8, 14, 9, 5].map((height, index) => (
          <span
            key={index}
            className="w-[3px] rounded-full"
            style={{ height: `${height}px`, background: accent, opacity: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
}

const visuals = {
  agri: Agri,
  translate: Translate,
  weather: Weather,
  ev: EvCharging,
};

export default function ProjectVisual({ project }: { project: Project }) {
  const Visual = visuals[project.visual];

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={
        {
          "--pa": project.accent,
          background: `radial-gradient(circle at 50% 42%, ${project.accent}1f, transparent 68%)`,
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_78%)]" />
      <div className="absolute inset-0 opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        <Visual accent={project.accent} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0f19] to-transparent" />
    </div>
  );
}
