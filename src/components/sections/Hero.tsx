"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Fragment } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import HeroOrb from "@/components/visuals/HeroOrb";
import { site } from "@/lib/content";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const headline = [
  { text: "Building" },
  { text: "Intelligent", accent: true },
  { text: "Experiences" },
  { text: "Through" },
  { text: "Code." },
];

const socials = [
  { label: "GitHub", href: site.github.href, icon: GithubIcon },
  { label: "LinkedIn", href: site.linkedin.href, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
];

export default function Hero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 46, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 46, damping: 18 });
  const orbX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const orbY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:min-h-[100svh] lg:pt-32 lg:pb-24"
    >
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute top-[12%] right-0 h-[32rem] w-[32rem] rounded-full bg-accent/[0.07] blur-[110px]"
      />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7 xl:col-span-7">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.08em] text-muted uppercase">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                Open to AI/ML &amp; analytics opportunities
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 font-display text-[clamp(1.05rem,1.9vw,1.35rem)] font-medium tracking-tight text-muted"
            >
              Hi, I&apos;m{" "}
              <span className="font-semibold text-foreground">Sri Kanth V.</span>
            </motion.p>

            <motion.h1
              variants={container}
              className="mt-2.5 max-w-[16ch] font-display text-[clamp(2.7rem,6vw,4.6rem)] leading-[0.98] font-medium tracking-[-0.045em] text-balance"
            >
              {headline.map((entry, index) => (
                <Fragment key={entry.text}>
                  <motion.span
                    variants={word}
                    className={`inline-block ${
                      entry.accent ? "serif-accent pb-[0.06em]" : "text-foreground"
                    }`}
                  >
                    {entry.text}
                  </motion.span>
                  {index < headline.length - 1 ? " " : null}
                </Fragment>
              ))}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-[39rem] text-[14.5px] leading-[1.7] text-muted sm:text-[15px]"
            >
              I build across the intelligence stack — machine learning in
              Python, analytics that turn data into decisions, and production
              interfaces with React, Next.js and FastAPI. Technology that is
              clear, useful and genuinely intelligent.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-cta px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_14px_44px_-14px_rgba(40,123,255,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cta-hover"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Explore my work</span>
                <ArrowUpRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="/resume.pdf"
                download="Sri-Kanth-V-Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[13.5px] font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.07]"
              >
                <Download className="size-4 text-accent-soft transition-transform duration-300 group-hover:translate-y-0.5" />
                Download resume
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-muted transition-colors hover:text-white"
                  >
                    <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.02] transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/[0.08]">
                      <social.icon className="size-3.5" />
                    </span>
                    {social.label}
                  </a>
                ))}
              </div>

              <p className="text-[9.5px] font-medium tracking-[0.22em] text-dim uppercase">
                AI/ML · Analytics · Full Stack · Training
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
          style={{ x: orbX, y: orbY }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-square w-full max-w-[34rem] overflow-hidden rounded-full">
            <Image
              src="/SRI.jpeg"
              alt="Sri Kanth V"
              fill
              priority
              className="object-cover"
            />
            <motion.div style={{ x: orbX, y: orbY }} className="absolute inset-0">
              <HeroOrb />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-7 hidden lg:block">
        <div className="shell">
          <a
            href="#about"
            className="group pointer-events-auto inline-flex items-center gap-3 text-[9.5px] font-semibold tracking-[0.3em] text-dim uppercase transition-colors hover:text-muted"
          >
            <span className="grid size-8 place-items-center rounded-full border border-white/10 transition-colors group-hover:border-accent/40">
              <ArrowDown className="size-3.5 animate-bounce" />
            </span>
            Scroll to explore
            <span aria-hidden="true" className="h-px w-14 bg-white/15" />
          </a>
        </div>
      </div>
    </section>
  );
}
