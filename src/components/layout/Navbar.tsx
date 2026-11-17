"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { navLinks, site } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/[0.06] bg-ink/80 nav-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4 sm:h-20">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="relative grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-accent/40">
            <span className="absolute inset-0 rounded-xl bg-accent/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            <span className="font-display text-[12px] font-semibold tracking-[0.16em] text-white">
              SKV
            </span>
            <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(40,123,255,0.7)]" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-[13px] font-semibold tracking-wide text-foreground">
              Sri Kanth V
            </span>
            <span className="block text-[9px] font-medium tracking-[0.22em] text-dim uppercase">
              AI / ML · Full Stack
            </span>
          </span>
          <span className="sr-only">Back to top</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.055]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-foreground transition-colors duration-300 hover:border-accent/45 hover:bg-accent/10 lg:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-3.5 text-accent-soft transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-foreground transition-colors hover:border-accent/40 hover:text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink/95 nav-blur lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="shell flex max-h-[calc(100svh-4.5rem)] flex-col gap-1 overflow-y-auto py-6"
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-muted transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="font-display text-[10px] tracking-[0.2em] text-accent-soft/70"
                    >
                      0{index + 1}
                    </span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="size-4 text-dim" />
                </a>
              ))}

              <div className="hairline my-3" />

              <div className="flex items-center gap-2">
                <a
                  href={site.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-[13px] text-muted transition-colors hover:border-accent/40 hover:text-white"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
                <a
                  href={site.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-[13px] text-muted transition-colors hover:border-accent/40 hover:text-white"
                >
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cta px-4 py-3 text-[14px] font-semibold text-white"
              >
                Let&apos;s build something
                <ArrowUpRight className="size-4" />
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

