"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import ProjectVisual from "@/components/visuals/ProjectVisual";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: () => void;
};

const CATEGORY_LABELS: Record<string, string> = {
  "AI/ML": "AI / ML",
  "Data Analytics": "Data Analytics",
  "Full Stack": "Full Stack",
  Robotics: "Robotics",
  NLP: "NLP",
};

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.05,
        ease: "easeOut" as const,
      },
    },
  };

  const categoryLabel =
    CATEGORY_LABELS[project.category] ?? project.category;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all duration-500"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${project.title} project details`}
        className="block h-[360] w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-soft)]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-[var(--color-panel)] to-[var(--color-ink)]">
          {/* Category badge on hover */}
          <motion.div
            whileHover={{ opacity: reduceMotion ? 0 : 1 }}
            className="absolute top-4 left-4 flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[9px] font-medium tracking-[0.18em] text-dim transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: `${project.accent}20`, border: `${project.accent}40` }}
          >
            <span className="pill-blur rounded-full px-2 py-0.5">{categoryLabel}</span>
          </motion.div>

          {/* Accent glow line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-t from-[var(--color-accent)] via-transparent to-transparent"
            style={{ opacity: reduceMotion ? 0.5 : 0.8 }}
          />

          {/* Tech tags preview on hover */}
          <motion.div
            whileHover={{ y: reduceMotion ? 0 : -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-6 left-1 right-1 flex flex-wrap gap-1.5 pt-2 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] rounded-full bg-white/[0.03] px-2 py-0.5 font-medium text-dim transition-all duration-200 hover:text-[var(--color-foreground)]"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Visual area */}
          <ProjectVisual project={project} className="absolute inset-0" />

          {/* Overlay with title and subtle glow */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              whileHover={{ x: reduceMotion ? 0 : -12 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pt-6"
            >
              <h3 className="text-[clamp(1.5rem,5vw,2.2rem)] font-medium tracking-[-0.04em] text-balance text-white hover:shadow-[0_0_28px_-4px_var(--color-accent)] transition-shadow duration-300">
                {project.title}
              </h3>
              <p className="mt-1 text-[12px] text-white/60 line-clamp-2">
                {project.description.substring(0, 120)}...
              </p>
            </motion.div>
          </div>
        </div>
      </button>

      {/* Action buttons */}
      <div className="flex flex-col gap-3 p-5 pt-0 sm:flex-row">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-[12px] font-medium text-muted transition-colors hover:border-accent/40 hover:text-[var(--color-foreground)]"
        >
          GitHub
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-[12px] font-medium text-muted transition-colors hover:border-accent/40 hover:text-[var(--color-foreground)]"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}
