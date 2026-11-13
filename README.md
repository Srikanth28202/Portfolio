# Sri Kanth V — Portfolio

A premium, dark-themed personal portfolio for Sri Kanth V — AI/ML engineer, data
and business analytics practitioner, full stack developer and technical trainer.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command          | Description                                       |
| ---------------- | ------------------------------------------------- |
| `npm run dev`    | Start the development server                      |
| `npm run build`  | Production build                                  |
| `npm run start`  | Serve the production build                        |
| `npm run lint`   | Lint the codebase                                 |
| `npm run resume` | Regenerate `public/resume.pdf` from the generator |

## Structure

```
src/
  app/                 Layout, page, metadata, SEO routes, global styles
  components/
    layout/            Navbar, footer, scroll progress
    sections/          Hero, about, skills, projects, experience, contact
    ui/                Reveal, section heading, copy-email
    visuals/           Ambient background, hero orb, project visuals
    providers/         Motion configuration (reduced-motion aware)
  lib/content.ts       Profile, skills, project and experience content
```

## Content updates

All copy and data live in `src/lib/content.ts`. Update the project list,
experience, social links and email there.

The resume is generated programmatically. Edit `scripts/generate-resume.mjs`
and run `npm run resume` to refresh `public/resume.pdf`.

Set `NEXT_PUBLIC_SITE_URL` in production so metadata, `sitemap.xml` and
`robots.txt` resolve to the deployed domain. See `.env.example`.
