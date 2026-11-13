"use client";

import { ArrowUpRight, CornerDownRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative border-t border-white/[0.05] py-24 sm:py-28 lg:py-36"
    >
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionHeading
                index="04"
                kicker="Experience"
                headingId="experience-heading"
                title={
                  <>
                    Learning by{" "}
                    <span className="serif-accent">shipping.</span>
                  </>
                }
                description="Industry work, an applied internship, independent client delivery and technical teaching — four different angles on the same craft."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass mt-8 rounded-2xl p-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                  </span>
                  <p className="text-[9.5px] font-semibold tracking-[0.24em] text-dim uppercase">
                    Currently
                  </p>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                  Open to full-time roles and collaborations across AI/ML, data
                  analytics and product engineering.
                </p>
                <a
                  href="#contact"
                  className="group mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent-soft transition-colors hover:text-white"
                >
                  Start a conversation
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ol className="relative">
            <span
              aria-hidden="true"
              className="absolute top-4 bottom-4 left-[7px] w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent"
            />

            {experience.map((entry, index) => (
              <li key={entry.org} className="relative pb-4 pl-8 last:pb-0 sm:pl-9">
                <span
                  aria-hidden="true"
                  className={`absolute top-7 left-0 grid size-[15px] place-items-center rounded-full border bg-ink ${
                    index === 0 ? "border-accent/60" : "border-white/15"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full bg-accent ${
                      index === 0
                        ? "shadow-[0_0_10px_2px_rgba(40,123,255,0.6)]"
                        : "opacity-45"
                    }`}
                  />
                </span>

                <Reveal delay={index * 0.07}>
                  <article className="card-sheen group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/25 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full border border-accent/20 bg-accent/[0.07] px-2.5 py-1 text-[9px] font-semibold tracking-[0.18em] text-accent-soft uppercase">
                        {entry.kind}
                      </span>
                      <span className="font-display text-[9px] tracking-[0.22em] text-dim">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-[1.15rem] font-medium tracking-tight text-foreground">
                      {entry.org}
                    </h3>
                    <p className="mt-0.5 text-[12px] font-medium tracking-wide text-accent-soft/90">
                      {entry.role}
                    </p>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                      {entry.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {entry.focus.map((focus) => (
                        <span
                          key={focus}
                          className="inline-flex items-center gap-1.5 text-[11px] text-dim"
                        >
                          <CornerDownRight className="size-3 text-accent/60" />
                          {focus}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
