import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
                <span className="font-display text-[12px] font-semibold tracking-[0.16em] text-white">
                  SKV
                </span>
              </span>
              <span className="text-sm font-semibold text-foreground">
                Sri Kanth V
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-muted">
              AI/ML engineer, data and analytics practitioner, and full stack
              developer — building intelligent experiences from model to
              interface.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={site.github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid size-9 place-items-center rounded-lg border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-white"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={site.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid size-9 place-items-center rounded-lg border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-white"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h2 className="text-[10px] font-semibold tracking-[0.26em] text-dim uppercase">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-[10px] font-semibold tracking-[0.26em] text-dim uppercase">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-[11.5px] tracking-wide text-dim">
            © {year} Sri Kanth V. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="hidden text-[11.5px] tracking-wide text-dim sm:block">
              Designed &amp; built with Next.js, TypeScript &amp; Framer Motion
            </p>
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 text-[11.5px] tracking-wide text-muted transition-colors hover:text-white"
            >
              Back to top
              <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
