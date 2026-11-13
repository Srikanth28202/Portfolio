"use client";

import { Code2, Database, Layers, Brain, BarChart3 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/content";

function SkillCategoryCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) {
  let Icon: typeof Code2;

  switch (category.title) {
    case "Programming":
      Icon = Code2;
      break;
    case "AI/ML":
      Icon = Brain;
      break;
    case "Data Analytics":
      Icon = BarChart3;
      break;
    case "Frontend":
      Icon = Layers;
      break;
    case "Backend":
      Icon = Code2;
      break;
    case "Database":
      Icon = Database;
      break;
    case "Tools":
      Icon = Code2;
      break;
    default:
      Icon = Code2;
  }

  return (
    <article
      className={`card-sheen group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/25`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-12 size-40 rounded-full bg-accent/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0"
      />
      <div className="flex items-start justify-between">
        <span className="grid size-10 place-items-center rounded-xl border border-white/[0.07] bg-accent/[0.08] text-accent-soft transition-colors duration-300 group-hover:border-accent/30">
          <Icon className="size-4" />
        </span>
        <span className="font-display text-[9.5px] tracking-[0.22em] text-dim">
          {index + 1}
        </span>
      </div>

      <h3 className="mt-5 font-display text-[15px] font-semibold tracking-tight text-foreground">
        {category.title}
      </h3>

      <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
        I choose tools by the problem, not the trend.
      </p>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {category.skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function TechnicalSkills() {
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
            <div className="grid gap-4 sm:grid-cols-2">
              {skillCategories.map((category, index) => (
                <Reveal
                  key={category.title}
                  delay={index * 0.06}
                  className={index % 2 === 0 ? "sm:col-span-2" : ""}
                >
                  <SkillCategoryCard category={category} index={index} />
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
                  {skillCategories.flatMap((category) =>
                    category.skills.map((skill) => (
                      <span
                        key={`${copy}-${skill}`}
                        className="flex items-center gap-3 text-[13px] font-medium tracking-wide text-dim"
                      >
                        <span className="size-1 rounded-full bg-accent/70" />
                        {skill}
                      </span>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}