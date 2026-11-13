"use client";

import { GraduationCap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative border-t border-white/[0.05] py-24 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="06"
            kicker="Education"
            headingId="education-heading"
            title={
              <>

                Academic foundation.
              </>
            }
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="card-sheen glass relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 -right-4 size-12 rounded-full bg-accent/[0.1] blur-md"
              />
              <div className="flex items-start gap-4">
                <div className="size-14 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(40,123,255,0.5)] flex items-center justify-center">
                  <GraduationCap className="size-5 text-white" />
                </div>
                <div>
                  <h2 className="mt-1 font-display text-[1.8rem] font-medium tracking-[-0.03em] text-balance">
                    {education.degree}
                  </h2>
                  <p className="mt-2 text-[13px] text-muted">
                    {education.university}
                  </p>
                  <p className="mt-1 text-[12px] font-medium text-accent-soft">
                    {education.cgpa}
                  </p>
                  <p className="mt-3 text-[11px] text-dim uppercase tracking-wider">
                    {education.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-0 lg:pt-0">
            <div className="glass-deep rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 -right-4 size-10 rounded-full bg-accent/[0.1] blur-md"
              />
              <p className="text-[13px] leading-relaxed text-muted">
                My engineering curriculum combined core AI/ML fundamentals with
                practical software development, data analytics, and system design
                courses. Key areas of study included machine learning algorithms,
                statistical analysis, database systems, and full-stack web
                development. I also completed specialized modules in image
                processing, natural language processing, and cloud deployment.
              </p>
              <div className="mt-6 pt-6 border-t border-white/[0.05]">
                <h3 className="text-[11px] font-semibold tracking-[0.2em] text-dim uppercase">
                  Core Subjects
                </h3>
                <ul className="mt-3 space-y-2 text-[12px] text-muted">
                  <li>
                    Machine Learning Algorithms & Applications
                  </li>
                  <li>
                    Statistical Analysis and Probability
                  </li>
                  <li>
                    Database Management Systems
                  </li>
                  <li>
                    Advanced Data Structures
                  </li>
                  <li>
                    Deep Learning Fundamentals
                  </li>
                  <li>
                    Natural Language Processing
                  </li>
                  <li>
                    Computer Vision Basics
                  </li>
                  <li>
                    Cloud Platforms and Deployment
                  </li>
                  <li>
                    Software Engineering Methodologies
                  </li>
                  <li>
                    Research Methodology and Project Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}