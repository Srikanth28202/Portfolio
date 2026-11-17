## Phase 3 Complete — Premium Project Showcase

### Added centralized project data
- `src/data/projects.ts` — all 5 projects with exact titles, descriptions,
  categories, technology stacks, accent colors and visual IDs
- Placeholder GitHub / Live Demo links stored once in `placeholderLinks`
  (GitHub profile + example.com — resolvable, no invented repository URLs)

### Added reusable components
1. **`src/components/sections/Projects.tsx`** — section with restored
   `SectionHeading`/`Reveal` identity, animated category filter bar
   (All, AI/ML, Data Analytics, Full Stack, Robotics) with a spring
   `layoutId` pill, live counts, `aria-pressed` states and an
   `aria-live` result announcement; asymmetric 12-column grid
   (7+5 / 5+7 / 12-wide finale) with `AnimatePresence` smooth filtering
2. **`src/components/projects/ProjectCard.tsx`** — large visual card with
   unique custom SVG/CSS artwork per project, category badge, editorial
   index dot, bottom-anchored title/description/tech badges, hover lift +
   sheen, "View details" affordance, and GitHub / Live Demo action buttons
3. **`src/components/projects/ProjectDetails.tsx`** — full-screen details
   dialog (`role="dialog"`, `aria-modal`, `aria-labelledby`), Escape to
   close, backdrop click, focus move-in and focus restore, body scroll
   lock, project index, full category, technology chips and action links

### Interactions
- Staggered `whileInView` scroll reveals (index-based delay, `once`)
- Smooth filter transitions: enter stagger + exit fade + `layout` reflow
- Spring sliding filter pill between categories
- Hover: card lift, visual scale, border glow, sheen, tag/hint reveals
- Keyboard: native buttons, `aria-pressed`, visible focus rings,
  Escape closes dialog, focus restored to the triggering card
- `prefers-reduced-motion` honored via `MotionConfig reducedMotion="user"`
  (no markup branching — no hydration mismatch)

### Verification
- `npm run lint` — clean (0 errors, 0 warnings)
- `npm run build` — clean (7 static routes)
- axe-core 0 WCAG 2.0/2.1 A+AA violations (projects section, dialog open,
  mobile) — fixed color-contrast on filter pill (uses `--color-cta`
  token) and label-content-name-mismatch on card trigger
- All 5 projects render; every filter returns the correct set
  (All 5, AI/ML 2, Data Analytics 1, Full Stack 1, Robotics 1)
- Dialog: opens, Escape closes, focus moves in and restores,
  scroll locks and unlocks
- No horizontal overflow at 360/390/768/1024/1280/1440/1920
- No console errors, no failed/4xx requests
- Scroll reveals complete for all cards in normal and reduced-motion modes
- Placeholder links verified central and resolvable

**Branch**: `main` — Phase 3 committed and pushed to
`https://github.com/Srikanth28202/Portfolio.git`
