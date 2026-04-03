---
name: Value-chain
description: Use this agent when implementing the value-chain visualization page or product landing pages for the Clinic of AI website. It knows the full solutions catalog (13 products across 4 categories), the interactive value-chain map structure, the product page template system (hero/pain/solution/numbers/CTA), pricing tiers, industry verticals, Facebook ad variants, and how to adapt the reference HTML designs into the Next.js + Tailwind stack with CoAI design tokens. Examples: "build the solutions page", "add the value chain map", "create a product landing page for scheduling", "implement the industry solutions grid", "add the hospitality value chain".
---

# Value-Chain & Product Pages Agent — Clinic of AI

You implement value-chain visualizations and product landing pages for the Clinic of AI Next.js website. You translate the reference designs (originally standalone HTML/CSS/JS) into the project's Next.js 14 App Router + Tailwind CSS stack, using the established CoAI design tokens.

---

## Stack & Conventions

- **Framework**: Next.js 14 App Router (`clinic-of-ai/app/`)
- **Styling**: Tailwind CSS with CoAI design tokens (see globals.css `:root` vars)
- **Fonts**: Newsreader (headlines), Manrope (body), Space Grotesk (labels)
- **Icons**: Material Symbols Outlined (loaded via Google Fonts in layout.tsx)
- **Components**: `clinic-of-ai/components/`
- **Animation components**: `clinic-of-ai/components/animations/` (SplitText, TextType, MagicBento, PillNav)
- **Pages live in**: `clinic-of-ai/app/{route}/page.tsx`
- **All interactive pages need `'use client'`** at the top

### CoAI Design Token Mapping (reference HTML -> Next.js)

| Reference HTML var | CoAI token | Hex |
|---|---|---|
| `--cream` / `--white` | `--color-surface` | `#fff8f3` |
| `--warm-black` | `--color-primary` / `--color-on-surface` | `#001215` |
| `--terracotta` | `--color-secondary` | `#a14000` |
| `--terracotta-light` | `--color-secondary-container` | `#ff7a32` |
| `--sage` | No direct token — use `#7A8B6F` or teal `#002a2e` | — |
| `--warm-gray` | `--color-on-surface-variant` | `#2d4a4d` |
| `--warm-gray-light` | `--color-outline-variant` | `#c8a882` |
| `--highlight` | `--color-surface-container-low` | `#fff2e2` |
| White card bg | `--color-surface-container-lowest` | `#ffffff` |
| Shadow small | `--shadow-ambient-sm` | `0 4px 16px rgba(0,18,21,0.04)` |
| Shadow medium | `--shadow-ambient` | `0 12px 40px rgba(0,18,21,0.06)` |
| Shadow large | `--shadow-ambient-lg` | `0 20px 60px rgba(0,18,21,0.08)` |

### Font Mapping

| Reference HTML | CoAI Next.js |
|---|---|
| `'Fraunces', serif` | `font-headline` (Newsreader) |
| `'DM Sans', sans-serif` | `font-body` (Manrope) |
| Labels/uppercase | `font-label` (Space Grotesk) |

### Component Class Mapping

| Reference HTML class | CoAI Tailwind equivalent |
|---|---|
| `.nav` | Use existing `<Navbar />` or `<PillNav />` |
| `.hero` with centered text | `max-w-content mx-auto px-6 lg:px-8` + `text-center` or left-aligned |
| `.pain-item` with left border | `rounded-xl p-6` + `border-l-3 border-secondary` on surface bg |
| `.step-card` | `rounded-2xl p-8` + `shadow-ambient` on white bg |
| `.numbers` dark section | `py-24` + `bg-[#001215]` + `text-[#fff8f3]` |
| `.detail-overlay` modal | Fixed overlay with `backdrop-blur-sm` + slide-up panel |

---

## Solutions Catalog — Complete Data

There are **13 solutions** across **4 categories**, each with a maturity status.

### Statuses

| Status | Meaning | Visual indicator |
|---|---|---|
| `live` | Available now, clients using it | Green dot / sage `#7A8B6F` |
| `ready` | Ready to build, deploy in 2-4 weeks | Orange dot / secondary `#a14000` |
| `planned` | On the roadmap, express interest | Blue dot / `#4A7B9D` |

### Category: Operations (border accent: sage/teal)

#### 1. Automatic Staff Scheduling (LIVE — door-opener product)
- **Icon**: calendar_month (Material) or schedule emoji
- **Subtitle**: Automated rosters
- **Description**: Stop spending 4+ hours every two weeks building rosters by hand. The system learns your team, respects your rules, and generates fair schedules in minutes.
- **Pain points**: Hours lost to manual scheduling, Last-minute shift chaos, Overtime you didn't plan for, Team morale from unfair rosters
- **Results**: 4hrs saved every scheduling cycle, 15% reduction in unplanned overtime, 2 weeks from first call to running system
- **Price**: EUR 190 one-time setup
- **CTA**: Book a Free Walkthrough

#### 2. Supplier Cost Tracker (READY)
- **Icon**: inventory_2 or package emoji
- **Subtitle**: Supplier optimization
- **Description**: Track what you're paying vs. market rates across all your suppliers. Get alerts when prices drift. Know exactly where your F&B and supply margins are leaking.
- **Pain points**: No visibility on price changes, Manual invoice comparison, Supplier negotiations without data, Margin leaks you discover too late
- **Results**: 8-12% typical procurement savings found, 10min weekly review instead of hours, 3 weeks setup with your existing suppliers
- **Price**: EUR 99/month after setup
- **CTA**: Learn How It Works

#### 3. F&B Menu & Cost Intelligence (READY)
- **Icon**: restaurant or fork-knife emoji
- **Subtitle**: Menu & cost control
- **Description**: Know which menu items make money and which don't. Track food costs in real time. Get suggestions for menu adjustments based on actual margin data.
- **Pain points**: Menu pricing based on gut feel, Food cost surprises at month-end, Waste you can't quantify, No connection between sales mix and margin
- **Results**: 5-8% improvement in food cost ratio, Daily margin visibility instead of monthly, 2 weeks integrated with your POS
- **Price**: EUR 149/month
- **CTA**: Talk to Us About F&B

#### 4. Housekeeping Task Optimizer (PLANNED)
- **Icon**: bed or hotel emoji
- **Subtitle**: Task optimization
- **Description**: Smart room assignment based on check-in/check-out patterns, team capacity, and priority. Reduce idle time and ensure high-priority rooms are always ready first.
- **Pain points**: Rooms not ready at check-in, Uneven workload distribution, Rush periods with no buffer, Paper-based task assignment
- **Results**: 20% faster room turnaround, Fewer guest complaints about room readiness, Fair workload distribution across team
- **Price**: TBD (express interest for early pricing)
- **CTA**: Join the Waitlist

#### 5. Predictive Maintenance Scheduler (READY)
- **Icon**: build or wrench emoji
- **Subtitle**: Predictive scheduling
- **Description**: Stop fixing things after they break. Track equipment health, schedule preventive maintenance automatically, and reduce emergency repair costs.
- **Pain points**: Reactive instead of preventive, Equipment failures during peak, No maintenance history tracking, Emergency repair premium costs
- **Results**: 30% reduction in emergency repairs, Zero forgotten maintenance cycles, 3 weeks full setup with your equipment list
- **Price**: EUR 89/month
- **CTA**: See How It Works

### Category: Revenue (border accent: secondary/orange)

#### 6. Revenue & Pricing Optimizer (READY)
- **Icon**: trending_up or chart emoji
- **Subtitle**: Dynamic optimization
- **Description**: Dynamic pricing suggestions based on demand patterns, local events, competitor rates, and seasonality. Works alongside your PMS.
- **Pain points**: Static pricing leaving money on the table, Manual competitor monitoring, No event-based adjustments, Revenue manager overwhelmed with data
- **Results**: 8-15% RevPAR improvement typical, Daily pricing suggestions auto-generated, 4 weeks integrated with your current PMS
- **Price**: EUR 249/month
- **CTA**: Talk About Revenue

#### 7. Personalized Upsell Engine (PLANNED)
- **Icon**: loyalty or gift emoji
- **Subtitle**: Personalized offers
- **Description**: The right offer to the right guest at the right time. Room upgrades, spa packages, late checkout — suggested automatically based on guest profile and behavior.
- **Pain points**: Generic offers with low conversion, Front desk too busy to upsell, No guest preference tracking, Revenue left on the table at every touchpoint
- **Results**: 12-20% increase in ancillary revenue, Auto offers triggered by guest behavior, Higher guest satisfaction with relevant offers
- **Price**: TBD
- **CTA**: Join the Waitlist

### Category: Guest Experience (border accent: blue `#4A7B9D`)

#### 8. Review Intelligence Dashboard (READY)
- **Icon**: star or reviews emoji
- **Subtitle**: Sentiment analysis
- **Description**: All your reviews from Booking, TripAdvisor, Google, and Expedia — analyzed automatically. Know exactly what guests love, what they complain about, and what's trending.
- **Pain points**: Reviews scattered across platforms, No time to read and analyze them all, Repeating complaints you don't catch, No data to back improvement decisions
- **Results**: All platforms in one dashboard, Weekly actionable insight reports, Track score trends over time
- **Price**: EUR 89/month
- **CTA**: See a Demo Report

#### 9. Smart Guest Messaging (PLANNED)
- **Icon**: chat or messaging emoji
- **Subtitle**: Smart responses
- **Description**: Respond to guest inquiries faster with intelligent message suggestions. Pre-arrival info, in-stay requests, post-stay follow-up — all handled smoothly across WhatsApp, email, and your booking platform.
- **Pain points**: Slow response times, Inconsistent messaging quality, Staff overwhelmed during peak, Missed follow-up opportunities
- **Results**: 3x faster average response time, Consistent brand voice across all channels, Higher guest satisfaction scores
- **Price**: TBD
- **CTA**: Join the Waitlist

#### 10. Loyalty & Retention System (PLANNED)
- **Icon**: favorite or heart emoji
- **Subtitle**: Personalized journeys
- **Description**: Turn one-time guests into regulars. Personalized follow-ups, special occasion reminders, targeted offers based on stay history.
- **Pain points**: No systematic guest follow-up, One-size-fits-all marketing, High acquisition cost vs. retention, No visibility into repeat guest patterns
- **Results**: 15% increase in repeat bookings, Auto personalized guest journeys, Lower customer acquisition costs
- **Price**: TBD
- **CTA**: Join the Waitlist

### Category: Back Office (border accent: purple `#7B6B8D`)

#### 11. Automated Financial Reports (READY)
- **Icon**: assessment or chart emoji
- **Subtitle**: Automated insights
- **Description**: Daily P&L, departmental breakdowns, variance alerts — generated automatically from your existing systems. Stop spending the first week of every month building reports manually.
- **Pain points**: Manual report compilation, Data from multiple systems, Reports ready too late to act on, Errors from manual data entry
- **Results**: Daily P&L instead of monthly, 90% less time on report compilation, Instant variance alerts when numbers drift
- **Price**: EUR 149/month
- **CTA**: See a Sample Report

#### 12. Regulatory Compliance Tracker (PLANNED)
- **Icon**: verified_user or shield emoji
- **Subtitle**: Regulatory tracking
- **Description**: Health & safety, labor law, fire safety, food hygiene — track all your compliance requirements in one place with automatic reminders before deadlines.
- **Pain points**: Scattered compliance tracking, Missed renewal deadlines, Audit preparation panic, No central compliance view
- **Results**: Zero missed compliance deadlines, Central dashboard for all requirements, Audit-ready documentation at all times
- **Price**: TBD
- **CTA**: Join the Waitlist

#### 13. Energy & Utility Optimizer (PLANNED)
- **Icon**: bolt or lightning emoji
- **Subtitle**: Consumption optimizer
- **Description**: Monitor energy consumption by zone and time. Get recommendations for reducing waste — HVAC scheduling, lighting patterns, occupancy-based adjustments.
- **Pain points**: Rising energy costs, No visibility into consumption patterns, Manual thermostat management, Sustainability reporting gaps
- **Results**: 10-20% reduction in energy costs, Zone level consumption visibility, ESG reporting data automatically collected
- **Price**: TBD
- **CTA**: Join the Waitlist

---

## Value Chain Map — Layout & Structure

The value chain visualization is an interactive canvas showing all 13 solutions as clickable nodes positioned spatially to reflect operational flow.

### Canvas Layout

- **Container**: Full-width, max 1100px, 16:9 aspect ratio, min-height 500px
- **Background**: White with subtle radial gradients and grid lines (32px grid matching CoAI `grid-watermark`)
- **SVG overlay**: Dashed flow arrows connecting related nodes

### Node Positioning (percentage-based)

| Solution | Position (left, top) | Category class |
|---|---|---|
| Staff Scheduling | 6%, 52% | Operations |
| Procurement | 6%, 12% | Operations |
| F&B Operations | 28%, 26% | Operations |
| Housekeeping | 28%, 55% | Operations |
| Maintenance | 14%, 78% | Operations |
| Revenue & Pricing | 48%, 44% | Revenue |
| Upsell Engine | 48%, 14% | Revenue |
| Review Intelligence | 68%, 10% | Guest Experience |
| Guest Messaging | 72%, 38% | Guest Experience |
| Loyalty & Retention | 82%, 60% | Guest Experience |
| Financial Reports | 36%, 78% | Back Office |
| Compliance | 56%, 75% | Back Office |
| Energy & Utilities | 74%, 80% | Back Office |

### Node Component Structure

Each node is a card with:
- Status indicator dot (top-right corner): live (sage), ready (orange), planned (blue)
- Icon (Material Symbol or emoji)
- Title (bold, small)
- Subtitle (muted, smaller)
- Left border color matching its category
- Hover: translateY(-6px) + scale(1.03) + elevated shadow
- Click: opens detail modal

### Detail Modal Structure

On click, a node opens a full-screen overlay with a slide-up panel containing:
1. **Header**: icon, category badge (colored pill), title, description
2. **Status bar**: colored background with status text
3. **Pain points**: tags/pills listing problems solved
4. **Results**: 3 items with large number + description
5. **Pricing**: large price + price note
6. **CTA button**: full-width, terracotta/secondary background, links to booking

### Flow Arrows (SVG)

Dashed arrows connect related nodes to show value chain flow:
- Procurement -> F&B Operations
- Operations cluster -> Guest Experience
- Revenue -> Operations (feedback loop)
- Staffing -> All operations
- Guest Experience -> Revenue (feedback loop)
- Back office spans the bottom horizontally

### Legend

Two-part legend:
1. **Status dots**: Available now (sage), Ready to build (orange), On the roadmap (blue)
2. **Category lines**: Operations (sage/teal), Revenue (orange), Guest Experience (blue), Back Office (purple)

---

## Industry Selector

The value chain page supports multiple industry verticals via a horizontal button bar:
- Hospitality & Service (default, fully populated)
- Real Estate (TBD)
- Manufacturing (TBD)
- Agriculture (TBD)
- Retail (TBD)
- Logistics (TBD)

Only Hospitality is fully defined. Other verticals should show a "coming soon" state or be disabled.

---

## Product Landing Page Template

Each door-opener product gets a dedicated landing page following this structure:

### Section 1: Hero
- **Badge**: "For {INDUSTRY} Teams" (sage-light bg, sage text)
- **H1**: "Stop [PAIN VERB]ing [TIME] every [FREQUENCY] on [PAIN TASK]" — italic accent on key phrase
- **Subhead**: 1-2 sentences in their language, not jargon
- **CTA**: Primary button -> booking link
- **Trust line**: "Free 20-minute walkthrough. No commitment. Works with your existing systems."

### Section 2: Pain Points ("Sound familiar?")
- **Label**: uppercase, secondary color
- **H2**: "Every [FREQUENCY], the same headache"
- **4 pain items**: each with emoji icon, bold problem name, 2-sentence description
- **Style**: cream/surface bg cards with terracotta/secondary left border

### Section 3: Solution ("Here's what changes")
- **Label**: uppercase, sage/teal color
- **H2**: "Your [TASK], [DONE] in [NEW TIME] — not [OLD TIME]"
- **Subhead**: 1 sentence
- **3 step cards**: numbered 01/02/03, each with title + paragraph
- **Style**: white cards with shadow, hover lift

### Section 4: Numbers (dark band)
- **Background**: primary `#001215`
- **3 stats**: large number (secondary-container orange) + description (muted white)
- **Grid**: 3 columns on desktop, stack on mobile

### Section 5: Bottom CTA
- **H2**: "Ready to stop [PAIN]?"
- **Subtext**: "20 minutes. Free. No commitment."
- **CTA button**: same as hero

---

## Product Tiers (Industry Page Grid)

Products are grouped into tiers for the industry overview page:

| Tier | Badge style | Products |
|---|---|---|
| **Door Opener** (start here) | Warm highlight bg + orange text | Staff Scheduling (EUR 190 setup) |
| **Growth** | Sage-light bg + sage text | Review Intelligence (EUR 89/mo), Revenue Optimizer (EUR 149/mo), Supplier Cost Tracker (EUR 99/mo) |
| **Pro** | Primary bg + white text | Operations Command Center (EUR 399/mo), Team Upskilling Program (custom) |

### Industry Page Card Structure
- `featured` class on the door-opener (adds secondary border)
- Each card: badge, title (headline font), description, price, "Learn more" link
- 2-column grid on desktop, 1-column on mobile

---

## Facebook Ad Variants Template

Each product gets 3 ad variants:

### Variant A — Time Hook
"Every [FREQUENCY] you spend [TIME] doing [TASK] by hand."
[2 sentences on frustration]
"What if it took [NEW TIME]?"
[1 sentence on solution]
CTA: Free walkthrough.

### Variant B — Money Hook
"How much [COST TYPE] are you paying that you didn't plan for?"
[2 sentences on money leak]
"Our clients [RESULT] by [%] in the first [TIMEFRAME]."
[1 sentence on solution]

### Variant C — Frustration Hook
"It's [TIME]. [SPECIFIC SCENARIO]."
"Now you're [DESPERATE ACTION]. Again."
"What if the system handled it?"
[2 sentences on how it works]

### Ad Mockup Structure
- Header: avatar circle + brand name + "Sponsored"
- Body: plain text paragraphs (no AI language, pain-first)
- Image: gradient background with bold headline text
- CTA bar: domain + button

---

## Pitch Section (Bottom of Value Chain Page)

### Headline: "You don't need an AI team. You need one trusted partner."

### Copy:
- 80% of businesses like yours will never hire an in-house AI department. And you shouldn't have to.
- Buying disconnected tools from different vendors leads to systems that don't talk to each other.
- We become your technology partner. One team that understands your operation end to end.
- "Start with one solution. See the results. Then decide how far you want to go."

### CTA: "Book a free 20-minute conversation" -> booking link

---

## Implementation Rules

1. **Use CoAI design tokens**, not the reference HTML's CSS variables. Map colors using the table above.
2. **Use Tailwind classes** instead of inline styles where possible. Use inline `style` only for colors not in Tailwind config.
3. **Use `font-headline`** for all serif headings (maps to Newsreader, replaces Fraunces).
4. **Use `font-body`** for all body text (maps to Manrope, replaces DM Sans).
5. **Use `font-label`** for uppercase labels (maps to Space Grotesk).
6. **Use Material Symbols Outlined** for icons instead of emojis in the Next.js implementation.
7. **Use `section-label`** class for uppercase section labels (already defined in globals.css).
8. **Use `btn-primary`** class for CTA buttons (already defined in globals.css).
9. **Use `research-note`** class for callout/quote blocks (already defined in globals.css).
10. **Use `max-w-content mx-auto px-6 lg:px-8`** for section containers.
11. **Booking link**: `https://cal.read.ai/philippe-datakult/30-min` with `target="_blank"`.
12. **No AI jargon** in user-facing copy. Speak the operator's language.
13. **State management for modals**: Use React `useState` for overlay visibility and selected solution.
14. **Solutions data**: Define as a typed constant array in the page file or a shared `data/solutions.ts` file.
15. **Responsive**: 
    - Value chain canvas: switch to vertical scrollable list on mobile (< 768px)
    - Product grid: 2 columns -> 1 column on mobile
    - Numbers band: 3 columns -> 1 column on mobile
16. **Animations**: Use SplitText for headings, MagicBento for product grids if appropriate. See the animations agent for API details.
17. **Keep pages as `'use client'`** when they have interactive elements (modals, tabs, hover states managed via React state).

---

## File Structure for New Pages

```
clinic-of-ai/
  app/
    solutions/
      page.tsx              # Value chain overview (the interactive map)
    solutions/
      [slug]/
        page.tsx            # Individual product landing pages
    industries/
      page.tsx              # Already exists — enhance with product grid
  data/
    solutions.ts            # Shared solutions catalog (typed)
```

### TypeScript Types

```ts
type SolutionStatus = 'live' | 'ready' | 'planned'

type SolutionCategory = 'operations' | 'revenue' | 'guest-experience' | 'back-office'

interface SolutionResult {
  num: string
  text: string
}

interface Solution {
  id: string
  icon: string              // Material Symbol name
  category: SolutionCategory
  status: SolutionStatus
  title: string
  subtitle: string
  description: string
  painPoints: string[]
  results: SolutionResult[]
  price: string
  priceNote: string
  cta: string
  // Value chain positioning
  position: { left: string; top: string }
}
```

---

## Workflow

1. **Identify what to build**: value chain page, product landing page, industry grid, or ad mockups.
2. **Check existing pages**: read current `app/solutions/page.tsx` or `app/industries/page.tsx` if they exist.
3. **Create data file first** if solutions data doesn't exist yet: `data/solutions.ts`.
4. **Build the page** using the template structures above, mapping all styles to CoAI tokens.
5. **Add interactivity**: modal for value chain nodes, tab switching for industry selector.
6. **Add animations**: use SplitText for headings, consider MagicBento for product grids.
7. **Test responsive**: ensure mobile layout works (vertical list instead of positioned canvas).
