"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mouse } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectDetails from "@/components/projects/ProjectDetails";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { site } from "@/lib/content";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "AI/ML", label: "AI / ML" },
  { key: "Data Analytics", label: "Data Analytics" },
  { key: "Full Stack", label: "Full Stack" },
  { key: "Robotics", label: "Robotics" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

/** Asymmetric editorial spans on the 12-column desktop grid:
 *  a wide + narrow pair, then the mirror, then a full-width finale. */
const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-12",
];

function FilterBar({
  active,
  onSelect,
  counts,
}: {
  active: FilterKey;
  onSelect: (filter: FilterKey) => void;
  counts: Record<FilterKey, number>;
}) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap items-center gap-2 border-y border-white/[0.06] py-3"
    >
      {FILTERS.map((filter) => {
        const isActive = active === filter.key;
        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => onSelect(filter.key)}
            aria-pressed={isActive}
            className={`relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-display text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-soft)] ${
              isActive ? "text-white" : "text-dim hover:text-foreground"
            }`}
          >
            {isActive ? (
              <motion.span
                layoutId="project-filter-pill"
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[var(--color-cta)] shadow-[0_0_18px_-4px_rgba(40,123,255,0.85)]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span className="relative">{filter.label}</span>
            <span className="relative text-[9px]">{counts[filter.key]}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [openDetails, setOpenDetails] = useState<string | null>(null);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.group === activeFilter),
    [activeFilter],
  );

  const counts = useMemo(() => {
    const result: Record<FilterKey, number> = {
      all: projects.length,
      "AI/ML": 0,
      "Data Analytics": 0,
      "Full Stack": 0,
      Robotics: 0,
    };
    for (const project of projects) {
      result[project.group] += 1;
    }
    return result;
  }, []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-t border-white/[0.05] py-24 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
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
            <FilterBar
              active={activeFilter}
              onSelect={setActiveFilter}
              counts={counts}
            />
          </Reveal>
        </div>

        <Reveal delay={0.06}>
          <p className="mt-6 max-w-2xl text-[13.5px] leading-relaxed text-muted">
            Five intelligent builds spanning recommendation systems, language
            technology, time-series forecasting, embedded systems and
            AI-powered detection.
          </p>
        </Reveal>

        <p className="sr-only" role="status" aria-live="polite">
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"} shown.
        </p>

        {/* Asymmetric project grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12 lg:gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                span={SPANS[index] ?? "lg:col-span-6"}
                onOpen={() => setOpenDetails(project.id)}
              />
            ))}
          </AnimatePresence>
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

        {/* Project details dialog */}
        <AnimatePresence>
          {openDetails ? (
            <ProjectDetails
              key={openDetails}
              projectId={openDetails}
              onClose={() => setOpenDetails(null)}
            />
          ) : null}
        </AnimatePresence>
      </div>

      {/* Floating CTA */}
      <div className="pointer-events-none absolute inset-x-0 bottom-7 hidden lg:block">
        <div className="shell">
          <a
            href="#contact"
            className="group pointer-events-auto inline-flex items-center gap-3 font-display text-[9.5px] font-semibold tracking-[0.3em] text-dim uppercase transition-colors hover:text-muted"
          >
            <span className="grid size-8 place-items-center rounded-full border border-white/10 transition-colors group-hover:border-accent/40">
              <Mouse className="size-3.5 animate-bounce" />
            </span>
            Scroll to contact
            <span aria-hidden="true" className="h-px w-14 bg-white/15" />
          </a>
        </div>
      </div>
    </section>
  );
}
