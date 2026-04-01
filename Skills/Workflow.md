# Clinic of AI — Website Build Workflow

> "AI adoption fails when you add tools without upgrading people."
> Owner: Philippe Küng (Datakult) | Launch: Q2 2026 | Stack: Next.js 14+ · Tailwind CSS · Vercel

---

## Overview

This workflow is the single source of truth for building the Clinic of AI marketing website. It references **CLINIC_OF_AI_WEBSITE_BRIEF.md** (content/structure), **DESIGN.md** (visual identity), **Skill_FE.md** (frontend engineering rules), **tailwind.config.ts** and **design-system.css** (design tokens already configured).

**Working directory structure to build:**

```
/clinic-of-ai
├── app/
│   ├── layout.tsx              ← root layout, fonts, glass nav, footer
│   ├── page.tsx                ← HOME /
│   ├── approach/page.tsx       ← APPROACH /approach
│   ├── industries/page.tsx     ← INDUSTRIES /industries
│   ├── academy/page.tsx        ← ACADEMY /academy
│   ├── about/page.tsx          ← ABOUT /about
│   └── contact/page.tsx        ← CONTACT /contact
├── components/
│   ├── ui/                     ← primitive components
│   └── sections/               ← page-level section blocks
├── styles/
│   ├── globals.css             ← import design-system.css
│   └── design-system.css       ← ALREADY DONE ✓
├── tailwind.config.ts          ← ALREADY DONE ✓
└── public/fonts/               ← self-hosted Newsreader + Inter
```

---

## Phase 1 — Project Scaffolding

### 1.1 Initialize Next.js

```bash
npx create-next-app@latest clinic-of-ai \
  --typescript --tailwind --app --src-dir=false \
  --import-alias "@/*"
```

### 1.2 Install Dependencies

```bash
# Icons (ONLY these — no others)
npm install @phosphor-icons/react

# Animation
npm install framer-motion

# Form handling
npm install react-hook-form

# Utilities
npm install clsx tailwind-merge
```

### 1.3 Copy Existing Config Files

Copy `tailwind.config.ts` and `design-system.css` into the project. Import `design-system.css` inside `styles/globals.css`:

```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "./design-system.css";
```

### 1.4 Self-Host Fonts

Download and place in `/public/fonts/`:
- **Newsreader** (variable, italic included) — for all `h1–h3`
- **Inter** (variable) — for body and UI
- **Inter Mono** (variable) — for labels/chips

Declare in `app/layout.tsx` via `next/font/local`. Never use Google Fonts CDN (privacy requirement).

---

## Phase 2 — Design Tokens & Utilities

> All tokens are ALREADY defined in `tailwind.config.ts` and `design-system.css`. Do not redefine them.

### 2.1 Token Quick Reference

| Token | Value | Usage |
|---|---|---|
| `surface` | `#faf9f5` | Page background |
| `surface-container-lowest` | `#ffffff` | Cards |
| `surface-container-highest` | `#e3e2df` | Subtle fills |
| `primary` | `#964900` | Primary CTA bg |
| `primary-container` | `#ff8205` | CTA hover state |
| `secondary` | `#25686a` | Links, accents |
| `tertiary` | `#ad9ec4` | Highlights, tags |
| `on-surface` | `#1b1c1a` | Body text (never #000) |
| `outline-ghost` | `rgba(27,28,26,0.15)` | Ghost borders only |

### 2.2 Shadow System

```css
/* Use ONLY these shadow classes — defined in tailwind.config.ts */
shadow-ambient      /* cards: 0 12px 40px rgba(27,28,26,0.06) */
shadow-ambient-lg   /* modals, elevated panels */
shadow-ambient-sm   /* subtle lift on hover */
```

### 2.3 Hard Rules (Never Break)

- NO `border` or `border-solid` for section dividers — use background color shifts
- Ghost borders: `border border-outline-ghost` (max 15% opacity) only for form inputs
- NO `#000000` anywhere — use `on-surface` (`#1b1c1a`)
- NO neon glows, outer `box-shadow` with color — only ambient tinted shadows
- NO emojis anywhere in code or content
- NO Inter for display/headlines — Newsreader only
- All hero sections: `min-h-[100dvh]` NOT `h-screen`
- Icons: `@phosphor-icons/react` exclusively

---

## Phase 3 — Component Library

Build components in order: primitives first, then composites, then sections.

### 3.1 Primitive UI Components (`/components/ui/`)

#### `Button.tsx`
Three variants mapped from `design-system.css`:
- `variant="primary"` → `.btn-primary` (burnt orange fill, rounded-md)
- `variant="secondary"` → `.btn-secondary` (surface-container-highest, on-surface text)
- `variant="tertiary"` → `.btn-tertiary` (text-only, underline on hover)

All buttons require:
- Active state: `scale-[0.98]` via Framer Motion `whileTap`
- Focus ring: `focus-visible:ring-2 focus-visible:ring-primary`
- No disabled opacity hack — use `aria-disabled`

#### `Card.tsx`
- Base: `.card` class (white bg, `shadow-ambient`, no border)
- Hover: `.card-hover` (transition to `surface-container-low`)
- Prop: `elevated?: boolean` — adds `shadow-ambient-lg`
- Rule: Cards ONLY when elevation communicates hierarchy (Skill_FE Rule 4)

#### `Input.tsx` / `TextField.tsx` / `TextArea.tsx`
- Base: `.input-field` (transparent bg, bottom border only)
- Label always above input (`gap-2` spacing)
- Error text below input in `text-primary` (burnt orange)
- NO boxed inputs with four borders

#### Typography components: `Headline.tsx`, `Body.tsx`, `Label.tsx`
Map to CSS utility classes from `design-system.css`:
```
.display-lg / .display-md / .display-sm
.headline-lg / .headline-md / .headline-sm
.body-lg / .body-md / .body-sm
.label-lg / .label-md  ← uppercase, mono font, letter-spacing
```

#### `ResearchNote.tsx`
Styled as `.research-note`: tertiary-container bg, secondary left border, `p-6`. Used for callouts, Philippe's insights, and key facts throughout the site.

#### `GlassPanel.tsx`
Applies `.glass-nav` style (80% opacity + `backdrop-blur-glass`). Used in the nav and any floating UI elements.

### 3.2 Layout Components (`/components/ui/`)

#### `Section.tsx`
Props: `background?: "surface" | "container" | "container-low"`, `asymmetric?: boolean`
- Asymmetric variant: CSS grid with unequal column splits (e.g., `grid-cols-[3fr_2fr]`)
- Padding: `py-22 md:py-30` (from custom spacing in tailwind.config.ts)

#### `Container.tsx`
- Default max-width: `max-w-content` (1152px), centered, `px-6 md:px-10`

#### `Grid.tsx`
Wraps CSS grid with sensible responsive defaults. Enforces Skill_FE Rule 3: NO centered hero content, NO 3-column equal card layouts.

### 3.3 Navigation (`/components/ui/Navbar.tsx`)

- Sticky at top, `.glass-nav` (80% opacity + 24px backdrop-blur)
- Logo left, nav links center-right, "Book Audit" CTA button right
- Mobile: hamburger menu, full-screen overlay with staggered link reveal (Framer Motion `staggerChildren`)
- Active link: `text-secondary` (teal) with `border-b border-secondary`
- Scroll behavior: add `shadow-ambient-sm` after 40px scroll

### 3.4 Footer (`/components/ui/Footer.tsx`)

- Background: `surface-container` (#efeeea) to differentiate from page
- Links use `text-secondary` (teal), no pure blue
- Columns: Navigation links | Legal | Philippe's LinkedIn/Cal.com
- Bottom bar: "Clinic of AI — Built by Datakult" in `.label-md`

---

## Phase 4 — Page Implementation

Implement pages in this order (highest business value first):

### Page 1: HOME (`app/page.tsx`)

**Sections in order:**

1. **Hero** — Asymmetric split: left=headline + subtext + CTA, right=3D glass torus (CSS/Three.js)
   - Headline: Newsreader serif, `.display-lg`
   - CTA: `Button variant="primary"` ("Book Free Audit")
   - Social proof strip below fold: logos of past clients or Philippe's credentials
   - Background: `surface` (#faf9f5), NO centered layout (Skill_FE Rule 3)

2. **Problem Cards** — 3 pain points of AI adoption failure
   - Use masonry or unequal grid (NOT 3 equal cards)
   - Each card: icon (Phosphor), headline, 2-line body

3. **Approach Pillars** — 3 phases: Diagnose → Upskill → Transform
   - Horizontal scroll or sticky stack on mobile
   - Each pillar: numbered label (`.label-md`), headline, body

4. **Industries Grid** — Hospitality, Retail, Professional Services, Manufacturing
   - Bento-style grid with varied cell sizes
   - Hover: reveal short "what we do here" text

5. **Origin Story** — Philippe's 2008 reskilling program
   - `ResearchNote` component with pull quote
   - Asymmetric section: text left, portrait/image right

6. **Final CTA** — Full-width `surface-container` band
   - Headline + "Book Audit" primary button

---

### Page 2: APPROACH (`app/approach/page.tsx`)

**Sections:**

1. **Page Hero** — Left-aligned headline (no centering), 2-line descriptor
2. **3-Phase Methodology** — Diagnose → Upskill → Transform
   - Vertical timeline or numbered steps
   - Each phase: phase number (`.label-lg`), phase name (`.headline-lg`), expanded description, deliverables list
3. **AI Architect Concept** — What "AI Architect" means vs. generic consultant
   - `ResearchNote` callout with Philippe's philosophy
4. **Comparison Table** — Clinic of AI vs. traditional IT consulting vs. DIY
   - Styled table: NO default browser table borders, use background rows for alternating color
5. **CTA Band** — "Ready to Diagnose your AI readiness?" + Book Audit button

---

### Page 3: INDUSTRIES (`app/industries/page.tsx`)

**Sections:**

1. **Page Hero** — Asymmetric with industry tagline
2. **Industry Verticals** — One section per vertical (4 total):
   - Hospitality
   - Retail
   - Professional Services
   - Manufacturing

   Each vertical section:
   - Background alternates between `surface` and `surface-container`
   - Pain point → Solution → Expected outcome
   - `ResearchNote` with sector-specific insight

3. **Cross-Industry CTA** — "Not sure which applies to you? Start with a Diagnosis."

---

### Page 4: ACADEMY (`app/academy/page.tsx`)

**Sections:**

1. **Page Hero** — "Build AI Fluency. Permanently." + waitlist CTA
2. **Learning Paths** — Cards showing different tracks (Beginner, Practitioner, AI Architect)
   - Card variant: elevated, hover reveals curriculum points
3. **Certification Preview** — What learners receive; badge/certificate mockup
4. **Waitlist Form** — `TextField` (name, email, role), `Button variant="primary"` ("Join Waitlist")
   - Form uses `react-hook-form`
   - Success state: inline confirmation, no page reload
5. **FAQ** — Accordion using Framer `AnimatePresence` for smooth expand/collapse

---

### Page 5: ABOUT (`app/about/page.tsx`)

**Sections:**

1. **Founder Hero** — Philippe's photo (portrait, styled with `rounded-xl`), name, title
2. **Founder Story** — Long-form editorial text in Newsreader serif
   - Pull quotes formatted as `ResearchNote`
   - The 2008 reskilling program story — this is the credibility anchor
3. **Core Values** — 3–4 values (NOT equal 3-column grid — use staggered layout)
4. **Timeline** — Career milestones: 2008 reskilling → Crayon AG Head of AI → Clinic of AI
   - Vertical timeline, `label-md` for dates
5. **CTA** — "Want to work with Philippe?" + contact button

---

### Page 6: CONTACT (`app/contact/page.tsx`)

**Sections:**

1. **Page Hero** — "Let's talk AI." + 1-line context setter
2. **Calendar Embed** — Read.ai calendar embed (iframe, styled to match surface bg)
3. **Pricing Transparency** — €1,500–€2,500 range, what's included
   - Use `ResearchNote` component for this block (establishes trust)
4. **Backup Contact Form** — Name, Company, Email, Message (`TextArea`)
   - For users who prefer async
   - Submit to a Vercel serverless function or Resend API
5. **Response SLA** — "Philippe responds within 24 hours" in `.label-md`

---

## Phase 5 — Quality Assurance

### 5.1 Visual Checklist (Every Page)

- [ ] "Book Audit" CTA visible above the fold
- [ ] No `#000000` — verify with browser devtools color picker
- [ ] No 1px solid borders used as section dividers
- [ ] No emojis in any rendered text
- [ ] Asymmetric layouts on desktop (no full-center hero sections)
- [ ] All images use `rounded-xl` or larger (no sharp square corners on large images)
- [ ] Font rendering: `h1–h3` in Newsreader, body in Inter, labels in Inter Mono
- [ ] Ghost borders only on form inputs (`border-outline-ghost`)

### 5.2 Interaction Checklist

- [ ] Button active states: `scale-[0.98]` on tap/click
- [ ] Navbar adds `shadow-ambient-sm` on scroll
- [ ] Mobile hamburger opens with Framer Motion stagger animation
- [ ] Form shows inline error messages (not alerts), inline success state
- [ ] Accordion (FAQ) animates with `AnimatePresence`
- [ ] Cards transition smoothly on hover (`transition-colors duration-200`)

### 5.3 Accessibility (WCAG 2.1 AA)

- [ ] All interactive elements have `focus-visible` ring
- [ ] Color contrast ratio ≥ 4.5:1 for body text (verify `on-surface` on `surface`)
- [ ] Images have descriptive `alt` text
- [ ] Form inputs have associated `<label>` (always above)
- [ ] Skip navigation link at top of `<body>`
- [ ] ARIA labels on icon-only buttons (hamburger, close)
- [ ] Reduced motion: wrap all Framer Motion animations in `useReducedMotion()` check

### 5.4 Performance (Lighthouse ≥ 90)

- [ ] Page load < 2s on simulated 3G (Chrome DevTools throttle)
- [ ] Images: use `next/image` with `sizes` attribute and WebP format
- [ ] Fonts: `display: swap` on all `@font-face` declarations
- [ ] No animations on scroll containers (CPU/GPU heat — Skill_FE Performance Rules)
- [ ] Animate ONLY `transform` and `opacity` (never `width`, `height`, `top`, `left`)
- [ ] Calendar iframe loaded with `loading="lazy"`
- [ ] Run `next build` and check bundle sizes — no page > 200KB JS

### 5.5 Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | < 768px | Single column, stacked sections, 44px min touch targets |
| Tablet | 768–1024px | 2-column where needed |
| Desktop | > 1024px | Full asymmetric layouts, side-by-side sections |
| Wide | > 1440px | Max-width `content` (1152px) container, centered |

---

## Phase 6 — Deployment

### 6.1 Environment Setup

Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://clinicofai.com
RESEND_API_KEY=<your-key>          # for contact form emails
```

### 6.2 Vercel Deployment

```bash
# Connect repo to Vercel
vercel

# Set environment variables in Vercel dashboard
# Configure custom domain: clinicofai.com
# Enable Vercel Analytics (free tier)
```

### 6.3 Pre-Launch Checklist

- [ ] Meta titles and descriptions on all 6 pages (for GEO/SEO)
- [ ] `robots.txt` and `sitemap.xml` generated via `next-sitemap`
- [ ] OG image for each page (1200×630px, Newsreader font, burnt orange accent)
- [ ] `manifest.json` for PWA basics
- [ ] Vercel Analytics enabled
- [ ] Contact form tested end-to-end (form → email → Philippe's inbox)
- [ ] Read.ai calendar embed tested on mobile
- [ ] All 6 pages reviewed by Philippe before launch

---

## Content Tone Guide (For Writing Copy)

| Avoid | Use Instead |
|---|---|
| "Elevate your AI journey" | "Make AI work for your team, not against them" |
| "Seamless integration" | "Systems that your people actually understand and use" |
| "Cutting-edge solutions" | "Proven methodology, adapted to your industry" |
| "Unleash potential" | "Practical skills that survive the next reorg" |
| Fake stats (99.9%, 50%) | Philippe's real credentials and story |
| Generic names | Real verticals: Hospitality, Retail, Professional Services, Manufacturing |

**Voice:** Direct, authoritative, warm. Philippe speaks as a practitioner, not a vendor. Cite the 2008 reskilling program whenever establishing credibility.

---

## Skill References

| Task | Reference File |
|---|---|
| Writing frontend components | `Skill_FE.md` — Anti-Slop UI Engineering Directives |
| Design decisions | `DESIGN.md` — The Architectural Intellectual |
| Design tokens | `tailwind.config.ts` + `design-system.css` |
| Page content & structure | `CLINIC_OF_AI_WEBSITE_BRIEF.md` |
| Google Stitch screen generation | `Skill_Stitch.md` |

---

*Last updated: 2026-03-27*
