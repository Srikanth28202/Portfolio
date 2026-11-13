"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import CopyEmail from "@/components/ui/CopyEmail";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/content";

const channels = [
  {
    label: "GitHub",
    value: site.github.handle,
    href: site.github.href,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: site.linkedin.handle,
    href: site.linkedin.href,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-t border-white/[0.05] py-24 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[linear-gradient(155deg,rgba(255,255,255,0.055),rgba(255,255,255,0.01)_45%,rgba(40,123,255,0.05))] p-7 sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-accent/[0.14] blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 size-[22rem] rounded-full bg-[#7C5CFF]/[0.08] blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="bg-grid pointer-events-none absolute inset-0 opacity-50"
            />
            <div aria-hidden="true" className="noise pointer-events-none absolute inset-0" />

            <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-dim uppercase">
                  <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(40,123,255,0.6)]" />
                  05 — Contact
                </div>

                <h2
                  id="contact-heading"
                  className="mt-5 max-w-[18ch] font-display text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-medium tracking-[-0.04em] text-balance"
                >
                  Let&apos;s build something{" "}
                  <span className="serif-accent">intelligent.</span>
                </h2>

                <p className="mt-5 max-w-lg text-[14.5px] leading-[1.75] text-muted">
                  Have a problem worth solving, a dataset worth understanding or
                  a product that needs building? I&apos;m always interested in
                  work where data, models and interface meet.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-cta px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_14px_44px_-16px_rgba(40,123,255,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cta-hover"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <Mail className="relative size-4" />
                    <span className="relative">Email me</span>
                    <ArrowUpRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <CopyEmail email={site.email} />
                </div>

                <p className="mt-6 text-[11.5px] tracking-wide text-dim">
                  Open to full-time roles, freelance builds and technical
                  training engagements.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="space-y-3">
                  {channels.map((channel) => (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-ink/40 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-white/[0.035]"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent-soft">
                          <channel.icon className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[9.5px] font-semibold tracking-[0.2em] text-dim uppercase">
                            {channel.label}
                          </span>
                          <span className="block truncate text-[12.5px] text-muted transition-colors group-hover:text-foreground">
                            {channel.value}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
                    </a>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                  <p className="text-[10px] leading-relaxed tracking-wide text-dim">
                    For project enquiries, email is the fastest way to reach me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
