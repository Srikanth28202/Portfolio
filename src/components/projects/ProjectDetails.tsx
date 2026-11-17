"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import ProjectVisual from "@/components/visuals/ProjectVisual";
import { projects } from "@/data/projects";

type ProjectDetailsProps = {
  projectId: string;
  onClose: () => void;
};

export default function ProjectDetails({
  projectId,
  onClose,
}: ProjectDetailsProps) {
  const project = projects.find((p) => p.id === projectId);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  // Escape closes, background scroll locks, focus moves into the
  // dialog and is restored to the triggering card on close.
  useEffect(() => {
    if (!project) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previousFocus.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[var(--color-panel)] px-4 pt-20 pb-12 sm:px-6 sm:pt-24 md:px-8"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
        className="mx-auto w-full max-w-4xl rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
          <span className="flex items-center gap-3 font-display text-[9.5px] font-medium tracking-[0.24em] text-white/55 uppercase">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full"
              style={{
                backgroundColor: project.accent,
                boxShadow: `0 0 12px 1px ${project.accent}`,
              }}
            />
            Project {project.index} / 05
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-white/[0.04] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-soft)]"
            aria-label="Close project details"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Visual */}
          <div className="relative h-[260px] overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--color-ink)] sm:h-[320px]">
            <ProjectVisual project={project} />
          </div>

          {/* Info */}
          <div>
            <h2
              id="project-details-title"
              className="font-display text-[clamp(1.6rem,3.5vw,2.25rem)] font-medium tracking-[-0.035em] text-balance text-foreground"
            >
              {project.title}
            </h2>

            {project.subtitle ? (
              <p className="mt-2 text-[13px] font-medium leading-snug text-accent-soft">
                {project.subtitle}
              </p>
            ) : null}

            <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
              {project.description}
            </p>

            {/* Category */}
            <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-5">
              <span className="font-display text-[9.5px] font-semibold tracking-[0.24em] text-dim uppercase">
                Category
              </span>
              <span
                className="pill-blur rounded-full border px-2.5 py-1 font-display text-[9.5px] font-semibold tracking-[0.18em] uppercase"
                style={{
                  color: project.accent,
                  borderColor: `${project.accent}59`,
                  background: `${project.accent}1a`,
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Tech stack */}
            <div className="mt-5">
              <span className="font-display text-[9.5px] font-semibold tracking-[0.24em] text-dim uppercase">
                Technologies
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 font-display text-[11px] font-semibold tracking-[0.14em] text-foreground uppercase transition-colors duration-300 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-soft)]"
              >
                <GithubIcon className="size-4" />
                GitHub
                <ArrowUpRight className="size-3 text-accent-soft" aria-hidden="true" />
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 font-display text-[11px] font-semibold tracking-[0.14em] text-foreground uppercase transition-colors duration-300 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-soft)]"
              >
                <Eye className="size-4" />
                Live Demo
                <ArrowUpRight className="size-3 text-accent-soft" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer close */}
        <div className="mt-8 flex justify-end border-t border-white/[0.06] pt-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 font-display text-[11px] font-semibold tracking-[0.18em] text-dim uppercase transition-colors hover:bg-white/[0.04] hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-soft)]"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
