"use client";

import {
  BrainCircuit,
  ChartNoAxesCombined,
  Layers,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/lib/content";

const interests = [
  {
    icon: BrainCircuit,
    title: "Applied Machine Learning",
    description:
      "Models that move past the notebook — evaluated honestly and built around a real decision.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Decision Intelligence",
    description:
      "Analytics and visualization that make the next action obvious instead of adding more noise.",
  },
  {
    icon: Layers,
    title: "Product Engineering",
    description:
      "Typed front ends, clean APIs and interfaces that stay maintainable after launch.",
  },
];

const pipeline = [
  { step: "01", label: "Signal", detail: "Raw, messy data" },
  { step: "02", label: "Model", detail: "Learning & validation" },
  { step: "03", label: "Product", detail: "Interface people use" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-t border-white/[0.05] py-24 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="01"
            kicker="About"
            headingId="about-heading"
            title={
              <>

                Engineering clarity out of{" "}
                <span className="serif-accent">complexity.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="card-sheen glass relative overflow-hidden rounded-[1.5rem] p-7 sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-16 size-64 rounded-full bg-accent/10 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="bg-grid pointer-events-none absolute inset-0 opacity-40"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow">Approach</span>
                  </div>

                  <p className="mt-6 font-display text-[1.6rem] leading-[1.15] font-medium tracking-[-0.03em] text-balance">
                    From signal to a{" "}
                    <span className="serif-accent">shipped product.</span>
                  </p>

                  <ol className="relative mt-8 space-y-6">
                    <span
                      aria-hidden="true"
                      className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent/60 via-white/15 to-transparent"
                    />
                    {pipeline.map((node, index) => (
                      <li key={node.step} className="relative pl-8">
                        <span
                          aria-hidden="true"
                          className="absolute top-1.5 left-0 grid size-[15px] place-items-center rounded-full border border-accent/40 bg-ink"
                        >
                          <span
                            className={`size-1.5 rounded-full bg-accent ${
                              index === 0
                                ? "shadow-[0_0_10px_2px_rgba(40,123,255,0.65)]"
                                : "opacity-50"
                            }`}
                          />
                        </span>
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="font-display text-[13px] font-medium tracking-wide text-foreground">
                            {node.label}
                          </span>
                          <span className="font-display text-[9px] tracking-[0.2em] text-dim">
                            {node.step}
                          </span>
                        </div>
                        <p className="mt-1 text-[12px] text-muted">
                          {node.detail}
                        </p>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-8 flex items-center gap-2 border-t border-white/[0.07] pt-5 text-[10px] tracking-[0.16em] text-dim uppercase">
                    <span className="size-1 rounded-full bg-accent" />
                    Model · Meaning · Interface
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="space-y-5 text-[15.5px] leading-[1.8] text-muted">
                <p>
                  I work where data becomes a decision. My background combines
                  machine learning, business analytics and full stack
                  engineering, which means I can take a problem from first
                  exploration and modelling all the way through to the interface
                  someone uses every day.
                </p>
                <p>
                  I care about systems that explain themselves: models that are
                  evaluated honestly, dashboards that answer a real question, and
                  code that stays readable long after it ships. Alongside
                  building, I train and mentor on the same tools — teaching keeps
                  the fundamentals sharp and the explanations honest.
                </p>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {interests.map((interest, index) => (
                <Reveal key={interest.title} delay={0.1 + index * 0.07}>
                  <article className="card-sheen group h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/25">
                    <span className="grid size-9 place-items-center rounded-lg border border-white/[0.07] bg-accent/[0.08] text-accent-soft transition-colors duration-300 group-hover:border-accent/30">
                      <interest.icon className="size-4" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-4 font-display text-[13.5px] font-semibold tracking-tight text-foreground">
                      {interest.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                      {interest.description}
                    </p>
                  </article>
                </Reveal>
              ))}

              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-[10px] font-semibold tracking-[0.22em] text-dim uppercase">
                    Focus
                  </span>
                  {[
                    "Machine Learning",
                    "Business Analytics",
                    "Data Visualization",
                    "Full Stack",
                    "Technical Training",
                  ].map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="mt-6 glass rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="size-14 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(40,123,255,0.5)] flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="mt-1 font-display text-[1.8rem] font-medium tracking-[-0.03em] text-balance">
                      {education.degree}
                    </h3>
                    <p className="mt-2 text-[13px] text-muted">
                      {education.university}
                    </p>
                    <p className="mt-1 text-[12px] font-medium text-accent-soft">
                      CGPA: {education.cgpa}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-muted">
                  Passionate about intelligent applications and data-driven solutions.
                  I combine machine learning expertise with full stack development
                  to build products that are clear, useful and genuinely intelligent.
                  Alongside building, I train and mentor students on AI/ML fundamentals,
                  helping them break complex ideas into practical, project-based
                  learning experiences.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}