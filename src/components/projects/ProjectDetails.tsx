"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, X } from "lucide-react";
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

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[var(--color-panel)] pt-16 sm:pt-24 px-4 md:px-6 lg:px-8"
      onClick={onClose}
    >
      <div
        className="max-w-4xl mx-auto w-full bg-white/[0.02] border-t border-white/[0.08] rounded-2xl p-6 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className="text-[13px] font-medium text-foreground">
            {project.title}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/[0.02] transition-colors"
            aria-label="Close project details"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image/Visual area */}
          <div>
            <div className="relative h-[260] sm:h-[320] rounded-2xl overflow-hidden bg-[var(--color-panel)]">
              <ProjectVisual project={project} className="absolute inset-0" />
            </div>
          </div>

          {/* Project info */}
          <div>
            <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] font-medium tracking-[-0.04em] text-balance mb-3">
              {project.title}
            </h2>

            {project.subtitle ? (
              <p className="text-[13px] font-medium tracking-wide text-foreground/80 mb-4">
                {project.subtitle}
              </p>
            ) : null}

            <p className="text-[13px] leading-relaxed text-muted mb-4">{project.description}</p>

            {/* Category badge */}
            <div className="mt-3 pt-3 border-t border-white/[0.05]">
              <span className="text-[10px] font-medium tracking-[0.2em] text-dim uppercase">
                Category
              </span>
              <span className="ml-2 rounded-full bg-[var(--color-accent)]/20 px-2.5 py-1.5 text-[11px] font-medium text-[var(--color-accent)]">
                {project.category}
              </span>
            </div>

            {/* Tech stack */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {project.tags.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-medium text-dim transition-colors hover:text-[var(--color-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub / Live Demo buttons */}
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/[0.08] px-4 py-2.5 text-[12px] font-medium text-muted transition-colors hover:border-accent/40 hover:text-[var(--color-foreground)]"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/[0.08] px-4 py-2.5 text-[12px] font-medium text-muted transition-colors hover:border-accent/40 hover:text-[var(--color-foreground)]"
              >
                <Eye className="size-4" />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Close button */}
        <div className="mt-8 pt-8 border-t border-white/[0.05] flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-[12px] font-medium text-dim transition-colors hover:bg-white/[0.02]"
            aria-label="Close project details"
          >
            <X className="size-4" /> Close
          </button>
        </div>
      </div>
    </motion.div>
  );
}
