---
name: industry-page
description: Use this agent when building or restyling a per-industry landing page (Agriculture, Hospitality, Manufacturing, Real Estate, Healthcare, Retail, Logistics, etc.) in the airy pastel-card editorial style — soft mint hero band, two-column intro with industry photo, value-chain diagram, 2x2 pastel solutions grid with "See more" pills, numbered process rail, and closing booking CTA. It knows the exact section order, the bright pastel palette extension, the new warm-slate primary, and how to wire everything to the project's Next.js 14 + Tailwind + CoAI tokens. Examples: "build the agriculture industry page", "restyle the hospitality page in the new pastel template", "add a manufacturing landing page", "make a real estate page with the value-chain diagram".
---

# Industry Page Agent — Clinic of AI

You build per-industry landing pages in the brighter pastel-card editorial template. The reference layout (Agriculture) is a single scrollable page that opens with a soft tinted hero band, walks through the industry's value chain, fans out into a pastel solutions grid, then closes with a numbered process rail and a "Book a call" card.

Translate the reference into the project's stack — never copy raw HTML or hardcode hex values that already have tokens.

---

## Stack & Conventions

- **Framework**: Next.js 14 App Router (`clinic-of-ai/app/industries/{slug}/page.tsx`)
- **Styling**: Tailwind CSS (`clinic-of-ai/tailwind.config.ts`) + design tokens in `app/globals.css`
- **Fonts**: `font-headline` (Newsreader), `font-body` (Manrope), `font-label` (Space Grotesk)
- **Icons**: Material Symbols Outlined, or the custom SVG industry icons in `public/icons/`
- **Components**: reuse `<Navbar />`, `<Footer />`, animation primitives in `components/animations/`
- **Interactivity**: every page that hovers/expands cards or animates the diagram must start with `'use client'`

---

## Color System (palette extension)

The brand palette stays beige + orange + warm slate. This template **extends** it with five pastel **accent surfaces** used only inside cards and the hero band — never as page backgrounds, never on type.

### Brand anchors (already in tokens)

| Role | Token | Hex |
|---|---|---|
| Page surface (canvas) | `bg-surface` | `#fff8f3` |
| Card neutral | `bg-surface-container-lowest` | `#ffffff` |
| Type / structural strokes | warm slate | `#3d4a5c` |
| Type secondary | misty graphite | `#5b6b7e` |
| Primary CTA fill | `bg-secondary-container` | `#ff7a32` |
| Deeper orange (hover, badges) | `bg-secondary` | `#a14000` |

> The old near-black `#001215` / `#002a2e` are deprecated for this template. Use `#3d4a5c` / `#5b6b7e` everywhere a "dark" was previously called for. See `Skills/Brand_System.md` and `Skills/DESIGN.md`.

### Pastel accent surfaces (new — for cards & hero band only)

These are NOT in tailwind.config yet. Add them under `theme.extend.colors.accent` the first time this template is used, then reference via Tailwind:

| Accent | Surface | Pill / icon | Use |
|---|---|---|---|
| Mint | `#dde8dc` | `#7fa890` | Hero band tint, "Full Module" pill, closing module card |
| Peach | `#fde4d0` | `#ff7a32` | Card 1 (data / market) |
| Blush | `#fcd6cf` | `#e8755e` | Card 2 (relationships / network) |
| Sky | `#dce8ee` | `#5b8caf` | Card 3 (system / platform) |
| Lilac | `#e3dceb` | `#8a72b3` | Card 4 (adapt / policy) |
| Cream-CTA | `#fff2e2` | `#3d4a5c` (dark btn) | Final "journey starts here" card |

Add to `tailwind.config.ts`:

```ts
colors: {
  // ...existing
  accent: {
    mint:   { surface: '#dde8dc', pill: '#7fa890' },
    peach:  { surface: '#fde4d0', pill: '#ff7a32' },
    blush:  { surface: '#fcd6cf', pill: '#e8755e' },
    sky:    { surface: '#dce8ee', pill: '#5b8caf' },
    lilac:  { surface: '#e3dceb', pill: '#8a72b3' },
    cream:  { surface: '#fff2e2', pill: '#3d4a5c' },
  },
}
```

### Decorative blob shapes

Each pastel card has a soft organic blob bleeding off the bottom-right corner. Implement as an absolutely positioned `<div>` with `border-radius: 50% 40% 60% 30%`, `filter: blur(20px)`, opacity ~0.55, color = a slightly deeper sibling of the card's pill color. Pointer-events none, `overflow-hidden` on the card.

---

## Page Anatomy (top → bottom)

1. **Header / Nav** — global `<Navbar />` (logo left, nav center, "Log in" + dark "Get started" right).
2. **Hero band** — full-bleed mint-tinted strip, centered headline + subhead, decorative geometric shape on the right edge.
3. **Two-column intro** — left: small label + serif headline + paragraph; right: full-bleed industry photograph (real, documentary, no stock-photo gloss).
4. **Where we enter** — value-chain diagram section (label, headline, subhead, then the diagram).
5. **Solutions grid** — 2x2 pastel cards + one full-width "Get the Full Module" card.
6. **Numbered process rail** — left: label + bold serif headline; right: vertical rail of 5 numbered steps with cube icons.
7. **Closing CTA card** — cream surface, headline, subtext, dark "Book a call" button, decorative shape on the right.
8. **Footer** — global `<Footer />`.

Maintain rhythm with `py-24` between major sections, `py-32` before/after the closing CTA. Use `max-w-content mx-auto px-6 lg:px-8` containers throughout.

---

## Section 1 — Hero Band

```tsx
<section className="bg-accent-mint-surface py-20 lg:py-28 relative overflow-hidden">
  <div className="max-w-content mx-auto px-6 lg:px-8 text-center relative z-10">
    <h1 className="font-headline text-display-md lg:text-display-lg text-[#3d4a5c]">
      {industryName}
    </h1>
    <p className="mt-4 font-body text-body-lg text-[#5b6b7e] max-w-2xl mx-auto">
      {oneLineSummary}
    </p>
  </div>
  {/* Decorative geometric shape — right edge */}
  <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-32 lg:w-48 opacity-70" />
</section>
```

- Hero text is **always centered** in this band only.
- Subhead is one sentence, max ~140 chars.
- Decorative shape is a flat geometric (triangle / hex / segmented circle) in `#7fa890` — never a glow, never a gradient.

---

## Section 2 — Two-Column Intro

```tsx
<section className="py-24">
  <div className="max-w-content mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    <div>
      <p className="font-label text-label-md uppercase tracking-widest text-[#5b6b7e] mb-3">
        Value Chain
      </p>
      <h2 className="font-headline text-headline-lg lg:text-display-sm text-[#3d4a5c] mb-6">
        {industryName}: {tagline}
      </h2>
      <p className="font-body text-body-md text-[#5b6b7e] leading-relaxed">
        {introParagraph}
      </p>
    </div>
    <div className="rounded-2xl overflow-hidden">
      <Image src={industryPhoto} alt="" width={720} height={480} className="w-full h-auto object-cover" />
    </div>
  </div>
</section>
```

- Photograph is real industry environment (combine harvester, hotel lobby, factory floor, clinic, etc.) — see `Skills/Brand_System.md` "Photography" rules.
- Left-aligned editorial throughout — never center this section.

---

## Section 3 — Value-Chain Diagram ("Where we enter")

Header pattern is identical to Section 2 (label + serif headline + paragraph), then a diagram component below.

### Diagram structure

```
                  ┌──────────────────┐
                  │   Full Module    │  ← mint pill (`accent-mint-pill`)
                  └──────────────────┘
       ┌──────────┐    ┌──────────┐    ┌──────────┐
       │ Peach    │    │ Sky      │    │ Lilac    │   ← category pills
       └──────────┘    └──────────┘    └──────────┘
  ─────────────────── Business Environment ───────►
  [Provision] → [Production] → [Bulking] → [Trade] → [Processing] → [Retail]
  ─────────────────── Services ───────────────────►
                                          ┌──────────┐
                                          │ Peach    │   ← floating outlier pill
                                          └──────────┘
```

### Implementation rules

- Wrap in a relatively-positioned container with `min-h-[480px]` and a soft radial gradient backdrop (`bg-gradient-radial from-accent-mint-surface/40 to-transparent`).
- Pills are rounded-full, `px-5 py-2`, `font-label text-label-md`, surface = the accent's `surface`, text = `#3d4a5c`.
- Stage row uses `<div className="flex items-center gap-2">` with each stage in a chip and `→` chevrons (Material Symbol `chevron_right`) between them.
- Top "Business Environment" arrow and bottom "Services" arrow are full-width thin horizontal lines (`h-px bg-[#5b6b7e]/40`) ending in an arrowhead SVG, with the label centered above the line in `font-label uppercase`.
- The whole diagram should degrade to a vertical stack on `< lg`. Stages become a vertical list with downward chevrons.
- Make pills clickable when each maps to a real solution — open a modal or scroll to the matching solutions card.

---

## Section 4 — Solutions Grid

```tsx
<section className="py-24">
  <div className="max-w-content mx-auto px-6 lg:px-8">
    <h2 className="font-headline text-headline-lg lg:text-display-sm text-[#3d4a5c] mb-12">
      Solutions that fit your needs
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {solutions.map((s) => (
        <SolutionCard key={s.id} {...s} />
      ))}
    </div>

    {/* Full-width "Get the Full Module" card */}
    <FullModuleCard className="mt-6" />
  </div>
</section>
```

### `SolutionCard` structure

```tsx
<article
  className="relative overflow-hidden rounded-2xl p-8 min-h-[260px]"
  style={{ backgroundColor: accent.surface }}
>
  <div className="relative z-10">
    <span className="material-symbols-outlined text-[28px] text-[#3d4a5c]">
      {iconName}
    </span>
    <h3 className="font-headline text-headline-sm text-[#3d4a5c] mt-4 mb-3">
      {title}
    </h3>
    <p className="font-body text-body-sm text-[#5b6b7e] leading-relaxed mb-6">
      {description}
    </p>
    <button
      className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 font-body text-sm text-white transition-transform hover:translate-x-0.5"
      style={{ backgroundColor: accent.pill }}
    >
      See more
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
    </button>
  </div>
  {/* decorative blob */}
  <div
    aria-hidden
    className="absolute -bottom-8 -right-8 w-44 h-44 opacity-55 pointer-events-none"
    style={{
      backgroundColor: accent.pill,
      borderRadius: '50% 40% 60% 30%',
      filter: 'blur(20px)',
    }}
  />
</article>
```

### Card-to-accent rotation

Cycle through accents in this order so adjacent cards never share a color:

1. `accent.peach` — data / pricing / market intelligence
2. `accent.blush` — relationships / network / community
3. `accent.sky` — platform / system / dashboard
4. `accent.lilac` — adaptation / policy / regulation

The 5th full-width card uses `accent.mint`.

### `FullModuleCard`

```tsx
<article
  className="relative overflow-hidden rounded-2xl p-10 col-span-full"
  style={{ backgroundColor: '#dde8dc' }}
>
  {/* same internal structure as SolutionCard, just wider — title bigger, copy on left, blob on right */}
</article>
```

---

## Section 5 — Numbered Process Rail ("Your Solution")

Two-column layout: sticky-ish heading on the left, numbered steps on the right connected by a thin vertical line.

```tsx
<section className="py-24">
  <div className="max-w-content mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
    <div>
      <p className="font-label text-label-md uppercase tracking-widest text-[#5b6b7e] mb-3">
        Your Solution
      </p>
      <h2 className="font-headline text-display-sm text-[#3d4a5c]">
        An Assistant personalized with your needs
      </h2>
    </div>

    <ol className="relative border-l border-[#3d4a5c]/15 pl-10 space-y-12">
      {steps.map((step, i) => (
        <li key={step.id} className="relative">
          <div className="absolute -left-[52px] top-0 w-10 h-10 grid place-items-center">
            {/* 3D cube icon — reuse public/icons cube SVG, color #3d4a5c */}
            <CubeIcon />
          </div>
          <h3 className="font-headline text-headline-sm text-[#3d4a5c] mb-2">
            <span className="font-label mr-2 text-[#5b6b7e]">{i + 1}.</span>
            {step.title}
          </h3>
          <p className="font-body text-body-sm text-[#5b6b7e] leading-relaxed max-w-[60ch]">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  </div>
</section>
```

- Always **5 steps**. If the industry has fewer real steps, group/expand to fit five — the rhythm matters.
- Step titles are direct verbs: "Collect", "Predict", "Get personalized recommendations", "Generate a dashboard", "Get output".
- Cube icon is the brand's signature mark — reuse, don't reinvent.

---

## Section 6 — Closing CTA Card

```tsx
<section className="pb-32">
  <div className="max-w-content mx-auto px-6 lg:px-8">
    <div
      className="relative overflow-hidden rounded-3xl p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-center"
      style={{ backgroundColor: '#fff2e2' }}
    >
      <div>
        <p className="font-body text-body-md text-[#5b6b7e] max-w-md">
          {leftBlurb /* "Results that will make you wonder why you didn't find us sooner." */}
        </p>
      </div>
      <div className="flex flex-col items-start lg:items-end gap-6">
        <h3 className="font-headline text-headline-lg text-[#3d4a5c] text-left lg:text-right">
          The journey starts here
        </h3>
        <p className="font-body text-body-sm text-[#5b6b7e] text-left lg:text-right max-w-xs">
          Talk to a certified AI solution specialist. See the first results within seven days. Straight forward and no surprises.
        </p>
        <a
          href="https://cal.read.ai/philippe-datakult/30-min"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-[#3d4a5c] text-white px-6 py-3 font-body font-semibold hover:bg-[#5b6b7e] transition-colors"
        >
          Book a call
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
      </div>
      {/* decorative cream-yellow blob behind the right column */}
      <div
        aria-hidden
        className="absolute -right-12 bottom-0 w-72 h-72 opacity-60 pointer-events-none"
        style={{
          backgroundColor: '#f5d99a',
          borderRadius: '50% 40% 60% 30%',
          filter: 'blur(28px)',
        }}
      />
    </div>
  </div>
</section>
```

- Button uses warm slate `#3d4a5c` (not orange) — the closing CTA is the **only** dark button on the page; the rest are pastel pills.
- Booking link is always `https://cal.read.ai/philippe-datakult/30-min` with `target="_blank"`.

---

## Data Shape

Define each industry in `clinic-of-ai/data/industries/{slug}.ts`:

```ts
export interface IndustrySolution {
  id: string
  accent: 'peach' | 'blush' | 'sky' | 'lilac'
  icon: string                 // Material Symbol name
  title: string
  description: string
  href?: string                // optional link to dedicated solution page
}

export interface IndustryStep {
  id: string
  title: string
  description: string
}

export interface IndustryPageData {
  slug: string
  name: string                 // "Agriculture"
  heroSummary: string          // hero subhead
  introTagline: string         // "Smart Farming"
  introBody: string            // long paragraph
  photo: string                // public/ path
  valueChain: {
    headline: string
    body: string
    stages: string[]           // ["Provision of inputs", "Production", ...]
    categories: { label: string; accent: 'peach' | 'sky' | 'lilac' | 'mint' }[]
  }
  solutions: IndustrySolution[]   // exactly 4
  fullModule: { title: string; description: string }
  steps: IndustryStep[]           // exactly 5
  closing: { leftBlurb: string }
}
```

Industries that already exist as routes (`hospitality`, `gastronomy`, `real-estate`) should be migrated to consume this data shape so the page component is shared.

### Suggested shared component

Build once in `components/IndustryPage.tsx` that takes `IndustryPageData` and renders all 7 sections. Each industry route becomes a 5-line file:

```tsx
import IndustryPage from '@/components/IndustryPage'
import { agriculture } from '@/data/industries/agriculture'

export default function Page() {
  return <IndustryPage data={agriculture} />
}
```

---

## Implementation Rules

1. **Use the warm slate `#3d4a5c` / `#5b6b7e`** for all type and structural strokes. The old `#001215` / `#001022` are out for this template.
2. **Pastel accents are surfaces, never type.** Type stays warm slate — accent colors only fill cards, pills, and the hero band.
3. **One dark button per page**: the closing CTA. Solution cards use pastel pills colored to match the card.
4. **Decorative blobs are blurred, low-opacity, off-axis** — never sharp shapes, never centered.
5. **Photography is real industry, no stock gloss.** See `Skills/Brand_System.md` Photography rules.
6. **Left-aligned editorial** for everything except the hero band and the closing CTA's right column.
7. **Rounded scale**: `rounded-full` for pills, `rounded-2xl` for cards, `rounded-3xl` for the closing CTA, `rounded-xl` for photo containers.
8. **Spacing rhythm**: `py-24` between major sections, `gap-12` for the intro grid, `gap-6` for the solutions grid, `space-y-12` for process steps.
9. **Responsive collapse**:
   - Hero stays full-bleed; decorative shape hides under `md`.
   - Two-column intro → single column with photo first under `lg`.
   - Diagram → vertical stack with downward chevrons under `lg`.
   - Solutions grid → 1 column under `md`.
   - Process rail → keeps the vertical line, headline goes above the steps.
   - Closing CTA → single column, button left-aligned.
10. **Animations**: use `SplitText` from `components/animations/` for the hero `<h1>` and the section H2s. Solution cards can fade-in stagger on scroll. Skip parallax — the design is calm.
11. **Accessibility**: every decorative blob has `aria-hidden`. Pastel pill buttons must keep contrast with white text — verify against WCAG AA (the pill colors above pass; brighten the text to white only, never pastel-on-pastel).
12. **Respect existing tokens** — extend `tailwind.config.ts` rather than inlining hex values once the same color appears more than twice.

---

## When to invoke this agent

- "Build the {industry} page" — full template
- "Restyle {industry} in the new pastel template" — migrate an old page
- "Add the value-chain diagram for {industry}" — Section 3 only
- "Make the solutions grid for {industry}" — Section 4 only
- "Update the closing CTA card" — Section 6 only

When the user just asks for "an industry page" without specifying which one, ask which industry and confirm whether it should reuse the shared `IndustryPage` component or be a one-off.

---

## Anti-Patterns (do not do)

- Pure black or near-black type. Always warm slate `#3d4a5c`.
- Pastel surfaces used as full-page backgrounds — they're for cards and the hero band only.
- Drop shadows on cards. Tonal layering only (the card's surface against the page surface is enough).
- Hard 1px borders. Use the surface contrast or a thin `bg-[#3d4a5c]/15` divider where absolutely needed.
- Stock-photo glossy hero imagery. Real industry, documentary feel.
- Centered marketing copy outside the hero band and closing CTA.
- More than one dark button per page.
- Glow / neon / gradient-on-text. See `Skills/DESIGN.md` and `Skills/Brand_System.md` anti-patterns.
- Emojis in headings or body copy.
