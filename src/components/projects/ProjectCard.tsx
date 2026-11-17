"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import ProjectVisual from "@/components/visuals/ProjectVisual";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  /** Position in the current (possibly filtered) list — drives the
   *  asymmetric column span and the staggered reveal delay. */
  index: number;
  span?: string;
  onOpen: () => void;
};

const GROUP_LABELS: Record<string, string> = {
  "AI/ML": "AI / ML",
  "Data Analytics": "Data Analytics",
  "Full Stack": "Full Stack",
  Robotics: "Robotics",
};

export default function ProjectCard({
  project,
  index,
  span = "lg:col-span-6",
  onOpen,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: Math.min(index, 4) * 0.08,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.25, ease: "easeIn" as const },
    },
  };

  const groupLabel = GROUP_LABELS[project.group] ?? project.group;

  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={span}
    >
      <motion.article
        whileHover={reduceMotion ? undefined : { y: -6 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="card-sheen group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-colors duration-300 hover:border-white/15"
      >
        {/* Large visual card */}
        <div className="relative h-[300px] w-full overflow-hidden sm:h-[340px] lg:h-[360px]">
          <ProjectVisual project={project} />

          {/* Scrim so overlaid type stays legible over the artwork */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#080B12] via-[#080B12]/85 to-transparent"
          />

          {/* Category badge */}
          <span
            className="pill-blur absolute top-4 left-4 z-[1] rounded-full border px-2.5 py-1 font-display text-[9px] font-semibold tracking-[0.18em] uppercase"
            style={{
              color: project.accent,
              borderColor: `${project.accent}59`,
              background: `${project.accent}1a`,
            }}
          >
            {groupLabel}
          </span>

          {/* Editorial index with accent dot */}
          <span className="absolute top-4 right-4 z-[1] flex items-center gap-2 font-display text-[9.5px] font-medium tracking-[0.24em] text-white/55">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full"
              style={{
                backgroundColor: project.accent,
                boxShadow: `0 0 12px 1px ${project.accent}`,
              }}
            />
            {project.index}
          </span>

          {/* Bottom-anchored title, description and tech badges */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] p-5 sm:p-6">
            <h3 className="font-display text-[clamp(1.35rem,1.8vw,1.7rem)] font-medium tracking-[-0.03em] text-white">
              {project.title}
            </h3>
            {project.subtitle ? (
              <p className="mt-1.5 text-[11.5px] leading-snug text-white/55">
                {project.subtitle}
              </p>
            ) : null}
            <p className="mt-2 max-w-xl text-[12.5px] leading-relaxed text-white/60 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-3 flex max-w-[calc(100%-7.5rem)] flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="pill-blur rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 font-display text-[9.5px] font-medium tracking-[0.08em] text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Full-surface trigger — only the affordance lives inside so the
              accessible name stays short and matches its visible text */}
          <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            aria-label={`View details for ${project.title}`}
            className="absolute inset-0 z-[2] rounded-t-2xl focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--color-accent-soft)]"
          >
            <span className="absolute right-5 bottom-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 font-display text-[9px] font-semibold tracking-[0.2em] text-white/75 uppercase opacity-100 transition-opacity duration-300 pill-blur group-focus-within:opacity-100 group-hover:opacity-100 sm:opacity-0 sm:group-focus-within:opacity-100 sm:group-hover:opacity-100">
              View details
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </span>
          </button>
        </div>

        {/* GitHub / Live Demo actions */}
        <div className="flex items-center gap-2.5 border-t border-white/[0.06] p-4 sm:p-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 font-display text-[11px] font-semibold tracking-[0.14em] text-muted uppercase transition-colors duration-300 hover:border-accent/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-soft)]"
          >
            <GithubIcon className="size-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 font-display text-[11px] font-semibold tracking-[0.14em] text-muted uppercase transition-colors duration-300 hover:border-accent/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-soft)]"
          >
            <Eye className="size-4" aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </motion.article>
    </motion.div>
  );
}
