"use client";

import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  PanelsTopLeft,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups, type SkillGroup } from "@/lib/content";

const icons = {
  code: Code2,
  chart: BarChart3,
  brain: BrainCircuit,
  layout: PanelsTopLeft,
  database: Database,
} as const;

const marqueeSkills = Array.from(
  new Set(skillGroups.flatMap((group) => group.skills)),
);

function SkillCard({
  group,
  index,
  wide,
}: {
  group: SkillGroup;
  index: number;
  wide?: boolean;
}) {
  const Icon = icons[group.icon];

  return (
    <article
      className={`card-sheen group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/25 ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-12 size-40 rounded-full bg-accent/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0"
      />
      <div className="flex items-start justify-between">
        <span className="grid size-10 place-items-center rounded-xl border border-white/[0.07] bg-accent/[0.08] text-accent-soft transition-colors duration-300 group-hover:border-accent/30">
          <Icon className="size-[18px]" strokeWidth={1.6} />
        </span>
        <span className="font-display text-[9.5px] tracking-[0.22em] text-dim">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 font-display text-[15px] font-semibold tracking-tight text-foreground">
        {group.title}
      </h3>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
        {group.caption}
      </p>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {group.skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative border-t border-white/[0.05] py-24 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionHeading
                  index="02"
                  kicker="Capabilities"
                  headingId="skills-heading"
                  title={
                    <>
                      A toolkit for{" "}
                      <span className="serif-accent">end-to-end</span> thinking.
                    </>
                  }
                />
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 text-[14.5px] leading-[1.75] text-muted">
                  I choose tools by the problem, not the trend. Python and SQL
                  for the data layer, Power BI for the narrative, React and
                  Next.js for the experience — and FastAPI for the seam in
                  between.
                </p>

                <div className="glass mt-7 rounded-2xl p-5">
                  <p className="text-[9.5px] font-semibold tracking-[0.24em] text-dim uppercase">
                    Working principle
                  </p>
                  <p className="mt-2.5 font-display text-[15px] leading-snug font-medium tracking-tight text-foreground">
                    Understand the question first.{" "}
                    <span className="text-muted">
                      Then pick the smallest stack that answers it well.
                    </span>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {skillGroups.map((group, index) => (
                <Reveal
                  key={group.title}
                  delay={index * 0.06}
                  className={index === skillGroups.length - 1 ? "sm:col-span-2" : ""}
                >
                  <SkillCard
                    group={group}
                    index={index}
                    wide={index === skillGroups.length - 1}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="marquee mt-14 border-y border-white/[0.06] py-5">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="marquee-group"
                  aria-hidden={copy === 1 ? "true" : undefined}
                >
                  {marqueeSkills.map((skill) => (
                    <span
                      key={`${copy}-${skill}`}
                      className="flex items-center gap-3 text-[13px] font-medium tracking-wide text-dim"
                    >
                      <span className="size-1 rounded-full bg-accent/70" />
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
