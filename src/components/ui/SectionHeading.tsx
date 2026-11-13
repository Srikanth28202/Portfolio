import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  headingId?: string;
  className?: string;
};

export default function SectionHeading({
  index,
  kicker,
  title,
  description,
  headingId,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-dim">
        <span className="font-display text-accent-soft">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-white/15" />
        <span>{kicker}</span>
      </div>
      <h2
        id={headingId}
        className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.03] font-medium tracking-[-0.035em] text-balance text-foreground"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
