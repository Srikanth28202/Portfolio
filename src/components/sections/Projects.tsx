"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectVisual from "@/components/visuals/ProjectVisual";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, site } from "@/lib/content";

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-t border-white/[0.05] py-24 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              index="03"
              kicker="Selected Work"
              headingId="projects-heading"
              title={
                <>
                  Projects that make data{" "}
                  <span className="serif-accent">useful.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-xs text-[13.5px] leading-relaxed text-muted lg:text-right">
              Four builds spanning recommendation systems, language technology,
              time-series forecasting and embedded systems.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 2) * 0.08}
              className={spans[index]}
            >
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group card-sheen glass relative flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-white/15"
              >
                <div className="relative h-48 overflow-hidden border-b border-white/[0.06] sm:h-56">
                  <ProjectVisual project={project} />
                  <span className="absolute top-5 left-5 flex items-center gap-2 font-display text-[9.5px] font-medium tracking-[0.24em] text-white/55">
                    <span
                      className="size-1.5 rounded-full"
                      style={{
                        backgroundColor: project.accent,
                        boxShadow: `0 0 12px 1px ${project.accent}`,
                      }}
                    />
                    {project.index}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[9.5px] font-semibold tracking-[0.24em] text-accent-soft uppercase">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-[1.45rem] font-medium tracking-[-0.025em] text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/[0.06] pt-5">
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(
                        `Project enquiry: ${project.title}`,
                      )}`}
                      className="group/link inline-flex items-center gap-1.5 text-[12px] font-medium text-muted transition-colors hover:text-white"
                    >
                      Discuss this project
                      <ArrowUpRight className="size-3.5 text-accent-soft transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                    <span className="font-display text-[9px] tracking-[0.2em] text-dim uppercase">
                      Case study
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-[12px] text-dim">
            Source code and deeper technical write-ups are available on request
            —{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-accent/60"
            >
              get in touch
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
