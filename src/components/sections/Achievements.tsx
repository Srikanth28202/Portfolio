"use client";

import { Trophy, User, Link2, GraduationCap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/content";

function AchievementCard({
  achievement,
  index,
}: {
  achievement: (typeof achievements)[number];
  index: number;
}) {
  const icons = {
    "1st Place": Trophy,
    "IEEE Student Member": User,
    "Cisco Python Programming Certification": Link2,
    "Class Representative": User,
    "Industry-Guided Project": GraduationCap,
  };

  const Icon = icons[achievement.title as keyof typeof icons];

  return (
    <article
      className={`card-sheen group relative h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/25`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 -right-4 size-10 rounded-full bg-accent/[0.1] blur-md"
      />
      <div className="flex items-start justify-between">
        <span className="grid size-9 place-items-center rounded-lg border border-white/[0.07] bg-accent/[0.08] text-accent-soft transition-colors duration-300 group-hover:border-accent/30">
          <Icon className="size-[20px]" />
        </span>
        <span className="font-display text-[9.5px] tracking-[0.22em] text-dim">
          {index + 1}
        </span>
      </div>

      <h3 className="mt-4 font-display text-[14px] font-semibold tracking-tight text-foreground">
        {achievement.title}
      </h3>
      <p className="mt-1 text-[12px] leading-relaxed text-muted">
        {achievement.subtitle}
      </p>
      <p className="mt-3 text-[12.5px] leading-relaxed text-muted">
        {achievement.description}
      </p>
    </article>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative border-t border-white/[0.05] py-24 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="05"
            kicker="Achievements"
            headingId="achievements-heading"
            title={
              <>

                Proud moments and recognitions.
              </>
            }
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 0.08}>
              <AchievementCard achievement={achievement} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}