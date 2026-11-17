"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mouse } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { projects } from "@/data/projects";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "AI/ML", label: "AI / ML" },
  { key: "Data Analytics", label: "Data Analytics" },
  { key: "Full Stack", label: "Full Stack" },
  { key: "Robotics", label: "Robotics" },
  { key: "NLP", label: "NLP" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

function CategoryFilter({
  activeCategory,
  onSelect,
  counts,
}: {
  activeCategory: CategoryKey;
  onSelect: (category: CategoryKey) => void;
  counts: Record<string, number>;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 pt-2 border-y border-white/[0.06]">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          type="button"
          onClick={() => onSelect(cat.key)}
          className={`rounded-full px-3.5 py-1.5 text-[10px] font-medium tracking-[0.18em] text-dim transition-colors duration-300 ${
            activeCategory === cat.key
              ? "bg-[var(--color-accent)] text-white"
              : "bg-white/[0.03] text-foreground hover:bg-[var(--color-accent)]/25 hover:text-[var(--color-foreground)]"
          }`}
          aria-pressed={activeCategory === cat.key}
          aria-label={`Filter by ${cat.label} projects`}
        >
          {cat.label}
          {counts[cat.key] > 0 && (
            <span className="ml-1 text-[9px] font-semibold bg-[var(--color-accent)]/30 rounded-full px-1.5 py-0.5">
              {counts[cat.key]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [openDetails, setOpenDetails] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    for (const category of CATEGORIES) {
      if (category.key === "all") continue;
      counts[category.key] = projects.filter(
        (project) => project.category === category.key,
      ).length;
    }
    return counts;
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-t border-white/[0.05] py-24 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
          {/* Section header */}
          <div>
            <motion.h2
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="font-display text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.03] font-medium tracking-[-0.035em] text-balance text-foreground"
            >
              <span className="serif-accent">Selected</span> Work
            </motion.h2>

            <motion.p
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-muted lg:text-right"
            >
              Six intelligent builds spanning web platforms, municipal systems, AI + IoT, language technology and forecasting.
            </motion.p>
          </div>

          {/* Category filters */}
          <CategoryFilter
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
            counts={categoryCounts}
          />
        </div>

        {/* Project grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setOpenDetails(project.id)}
            />
          ))}
        </div>

        {/* Project details modal */}
        {openDetails ? (
          <ProjectDetails
            projectId={openDetails}
            onClose={() => setOpenDetails(null)}
          />
        ) : null}
      </div>

      {/* Floating CTA */}
      <div className="pointer-events-none absolute inset-x-0 bottom-7 hidden lg:block">
        <div className="shell">
          <a
            href="#contact"
            className="group pointer-events-auto inline-flex items-center gap-3 text-[9.5px] font-semibold tracking-[0.3em] text-dim uppercase transition-colors hover:text-muted"
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
