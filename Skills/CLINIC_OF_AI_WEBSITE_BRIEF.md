# Project Brief: Clinic of AI Website
## For Claude Code Agent / UI/UX Implementation Specialist

**Project Owner:** Philippe Küng (Datakult)  
**Target Launch:** Q2 2026  
**Design System:** "The Academic Technologist" (attached: DESIGN.md)  
**Tech Stack:** React/Next.js + Tailwind CSS + Vercel deployment

---

## 1. WHAT WE'RE BUILDING

A 6-page marketing website for Clinic of AI — an AI consultancy that helps SMBs transform their entire value chain by developing "AI Architects" within their organizations, not by selling tools. The site must embody "The Academic Technologist" design system: editorial, prestigious, warm-beige paper aesthetic with intentional asymmetry and zero hard borders.

**Core positioning:** "AI adoption fails when you add tools without upgrading people."

---

## 2. WHY NOW

**The Problem (with data):**
- 95% of S&P 500 companies failed to generate ROI on GenAI initiatives (Harvard, December 2025)
- $5.5 trillion in global productivity losses projected by 2026 due to AI skills gaps (IDC)
- 65-73% of professional services firms abandoned AI initiatives due to lack of skills

**Business Case:**
- Philippe has 3+ months runway, 2 interns, world-class AI tool stack
- Current bottleneck: ZERO paying clients despite strong strategic foundation
- Target: First "AI Opportunity Audit" client at €1,500–2,500
- Website is the anchor for LinkedIn outreach and GEO/AI visibility strategy

---

## 3. SUCCESS CRITERIA

| Metric | Target | Measurement |
|--------|--------|-------------|
| GEO Visibility | Answer appears in Perplexity for "Who helps SMBs adopt AI systematically by upscaling people?" | Manual test 2-3 weeks post-launch |
| Page Load | <2s on 3G connection | Lighthouse score |
| Mobile UX | 100% responsive, touch-friendly | Manual QA on iOS/Android |
| Accessibility | WCAG 2.1 AA compliant | Lighthouse + manual audit |
| CTA Conversion | "Book Audit" button above fold on every page | Visual verification |

---

## 4. DESIGN SYSTEM REQUIREMENTS

### Mandatory Design Tokens (from DESIGN.md)

**Colors — Use ONLY these:**
```css
/* Surfaces (warm beige paper) */
--surface: #faf9f5;
--surface-container: #efeeea;
--surface-container-low: #f4f4f0;
--surface-container-lowest: #ffffff;
--surface-container-highest: #e3e2df;

/* Primary (burnt orange) */
--primary: #964900;
--primary-container: #ff8205;
--on-primary: #ffffff;

/* Secondary (teal) */
--secondary: #25686a;
--tertiary: #ad9ec4; /* lavender */
--tertiary-container: rgba(173, 158, 196, 0.2);

/* Text */
--on-surface: #1b1c1a; /* NEVER use pure black */
--outline-variant: #dec1af;
```

**Typography:**
- **Headlines:** Newsreader (serif) — editorial, intellectual
- **Body/UI:** Inter (sans-serif) — clean, technical
- **Labels:** Inter Mono, ALL CAPS, 0.05em letter-spacing

**Critical Rules (MUST ENFORCE):**
1. **NO LINE RULE:** Never use 1px solid borders. Define sections only through background color shifts.
2. **Ghost borders only:** If accessibility requires a stroke, use `outline-variant` at 15% opacity max.
3. **Ambient shadows:** `box-shadow: 0 12px 40px rgba(27, 28, 26, 0.06)` — tinted with on-surface color.
4. **No pure black:** All text uses `--on-surface` (#1b1c1a).
5. **No blue links:** Use `--secondary` (#25686a) for links.
6. **Rounded corners:** Minimum `rounded-sm` (0.125rem), preferred `rounded-md` (0.375rem).
7. **Asymmetric layouts:** Text columns should NOT be perfectly centered. Use weighted compositions.
8. **Glassmorphism nav:** `surface-container-low` at 80% opacity + 24px backdrop-blur.

**3D Visual Assets:**
- Use glass torus, glass cylinder, glass shapes (see brand guidelines image)
- Lavender and teal accents appear ONLY on 3D assets or interactive data points
- Assets should "float" with generous whitespace

---

## 5. SITE ARCHITECTURE & USER STORIES

### Page 1: HOME (`/`)

**Purpose:** Convert cold traffic to "Book Audit" or deeper exploration.

**User Story:** As a decision-maker who just landed here from LinkedIn, I want to immediately understand what Clinic of AI does differently so that I can decide if this is worth my time.

**Required Sections:**
1. **Hero** (above fold)
   - Headline: "AI adoption fails when you add tools without *upgrading people.*" (italicize "upgrading people")
   - Subhead: "We partner with you to transform your entire value chain—not by selling products, but by building AI Architects within your organization."
   - Primary CTA: "Book Your AI Opportunity Audit →"
   - Secondary CTA: "See Our Approach"
   - Visual: Glass 3D torus floating right-aligned with asymmetric whitespace

2. **Social Proof Bar** (subtle, not flashy)
   - "Harvard 2025: 95% of S&P 500 companies failed to generate ROI on GenAI"
   - Style: `label-md` uppercase, muted

3. **The Problem** (3 cards, NO borders)
   - Card 1: "Tool-First Thinking" — companies buy AI products without integration strategy
   - Card 2: "Individual Training, Not System Transformation" — training one person doesn't transform org
   - Card 3: "Vendor Dependency" — platform-as-a-service creates dependency without capability
   - Use tonal layering: cards on `surface-container-lowest`, background `surface-container-low`

4. **The Approach** (3 pillars)
   - Diagnose → Upskill → Transform
   - Use "Research Note" component for each pillar (side-aligned callout with teal accent line)
   - Background: `surface` (warm beige)

5. **Industries Grid** (4 cards, clickable)
   - Hospitality, Retail, Professional Services, Manufacturing
   - Each card: icon + title + one-line description
   - Hover state: background shifts to `surface-container-low`

6. **Origin Story** (credibility section)
   - "We've done workforce transition at scale before."
   - Brief: Philippe led a 2008 government reskilling program transitioning displaced workers into tech careers
   - Visual: Timeline or simple stat block
   - Style: Asymmetric layout, text hugging left margin

7. **Final CTA Block**
   - "Ready to transform, not just adopt?"
   - Repeat "Book Your AI Opportunity Audit" button
   - Background: subtle gradient from `primary` to `primary-container` (lithographic depth)

**Acceptance Criteria:**
- [ ] Hero headline uses Newsreader font at `display-lg` size
- [ ] No 1px borders anywhere on page
- [ ] Primary CTA button uses `--primary` background, `--on-primary` text, `rounded-md`
- [ ] Glass 3D asset visible in hero with asymmetric positioning
- [ ] Mobile: All sections stack vertically, CTA remains prominent
- [ ] Page passes Lighthouse accessibility audit

---

### Page 2: OUR APPROACH (`/approach`)

**Purpose:** Deep-dive into methodology for prospects who need more convincing.

**User Story:** As a skeptical executive, I want to understand HOW Clinic of AI works (not just WHAT they do) so that I can evaluate if their methodology is rigorous.

**Required Sections:**
1. **Hero**
   - Headline: "We don't install AI. We transform how your organization thinks."
   - Subhead: Explain the "Hack The Box of AI transformation" positioning

2. **3-Phase Methodology** (expandable accordion or tabs)
   - **Phase 1: Diagnose** — We dig into workflows, infrastructure, pain points
   - **Phase 2: Upskill** — We develop AI Architects, not tool users
   - **Phase 3: Transform** — We integrate AI as a system across the value chain

3. **The AI Architect Concept**
   - "We don't just train your team on tools. We develop AI Architects—people who can see the whole system, design the right integrations, and ensure sustainable ROI."
   - Use "Research Note" component with lavender background

4. **What Makes Us Different** (comparison table — NO borders, use tonal rows)
   | Traditional AI Consulting | Clinic of AI |
   |---------------------------|--------------|
   | Sells tools | Builds capability |
   | Individual training | System transformation |
   | Vendor dependency | Organizational independence |

5. **CTA Block**
   - "Start with a 2-week AI Opportunity Audit"
   - Link to booking

**Acceptance Criteria:**
- [ ] Methodology phases use icon + Newsreader headline + Inter body
- [ ] Comparison table uses alternating `surface` / `surface-container` rows, NO borders
- [ ] "Research Note" component matches DESIGN.md spec exactly

---

### Page 3: INDUSTRIES (`/industries`)

**Purpose:** Show domain expertise and industry-specific credibility.

**User Story:** As a hospitality/retail/professional services/manufacturing leader, I want to see that Clinic of AI understands MY industry so that I trust they can speak my language.

**Required Sections:**
1. **Hero**
   - Headline: "Domain expertise that speaks your language"
   - Subhead: "Industries are our entry points, not silos. The methodology is universal—the context is yours."

2. **Industry Cards** (4 cards, each links to sub-page or expands)
   - **Hospitality** — Guest experience, operations, revenue management
   - **Retail** — Supply chain, customer analytics, inventory
   - **Professional Services** — Legal, accounting, consulting workflows
   - **Manufacturing** — Quality control, predictive maintenance, workforce augmentation

3. **Industry-Specific Pain Points** (for each vertical)
   - 2-3 bullet points of specific pain points
   - 1 stat backing up the pain (from research)

4. **Cross-Industry CTA**
   - "Your industry not listed? We apply the same methodology everywhere."
   - Secondary CTA to contact

**Acceptance Criteria:**
- [ ] Each industry card has distinct icon (pixel art style matching brand guidelines)
- [ ] Industry stats are cited (e.g., "79% of professional services firms say AI is changing pricing conversations")
- [ ] Cards use hover state with `surface-container-low` background shift

---

### Page 4: ACADEMY (`/academy`)

**Purpose:** Position Clinic of AI as a learning/certification authority (future revenue stream).

**User Story:** As an individual professional OR a team lead, I want to understand what learning paths are available so that I can upskill myself or my team.

**Required Sections:**
1. **Hero**
   - Headline: "AI makes static knowledge less valuable. We teach adaptability."
   - Subhead: "Our upskilling methodology doesn't teach tools—it rebuilds how you think about work when AI is assumed to be present."

2. **Learning Paths** (3 core paths, 2 expansion)
   - **Path 1: AI Foundations** — What AI can/can't do, tool evaluation, basic fluency
   - **Path 2: Systems Thinking for AI** — Value chain analysis, integration design
   - **Path 3: AI Architecture & Orchestration** — Building sustainable AI systems
   - *Coming Soon: Industry-Specific Value Chain, Leadership & Change Management*

3. **For Individuals vs. For Teams vs. For Organizations** (3 columns or tabs)
   - Individuals: Self-serve courses, certifications, talent pool access
   - Teams: Enterprise licenses, custom paths, progress dashboards
   - Organizations: Custom programs, on-site training, full transformation

4. **Certification Preview**
   - "Clinic of AI Certified" badge preview
   - "Verified on Credly, backed by Swiss foundation standards"
   - Visual: Badge mockup

5. **CTA**
   - "Join the waitlist for Academy launch"
   - Email capture form (minimal: just email field + submit)

**Acceptance Criteria:**
- [ ] Learning paths displayed as cards with clear progression indicators
- [ ] Certification badge uses `--tertiary` (lavender) accent
- [ ] Email form follows DESIGN.md input spec: no background, bottom border only

---

### Page 5: ABOUT (`/about`)

**Purpose:** Build trust through founder story and mission.

**User Story:** As a prospect evaluating trust, I want to know who's behind this and why they're credible so that I feel confident engaging.

**Required Sections:**
1. **Hero**
   - Headline: "The future belongs to applied polymaths."
   - Subhead: "People who execute across domains with adaptability and synthesis."

2. **Founder Story**
   - Philippe Küng — former Head of Data & AI at Crayon AG (Microsoft AI/ML Partner of the Year 2022)
   - 2008 origin story: Led government reskilling program transitioning displaced workers into tech careers
   - "I've seen what happens when organizations treat AI as a product instead of a capability. I've also seen what's possible when you invest in people first."

3. **The Neurolymia Vision** (optional/future)
   - Brief mention of long-term vision: gamified learning, verified credentials, AI Architect talent pipeline
   - Style: "Research Note" component, positioned as "Where we're going"

4. **Values** (3-4 core values)
   - Trusted partner, not vendor
   - Systems thinking over tool adoption
   - People-first transformation
   - Sustainable capability, not dependency

5. **CTA**
   - "Ready to talk?"
   - Link to booking

**Acceptance Criteria:**
- [ ] Founder photo (if available) or placeholder with `surface-container` background
- [ ] 2008 story prominently featured (this is the key differentiator)
- [ ] Values displayed as simple list, NO cards, NO borders

---

### Page 6: CONTACT / BOOK AUDIT (`/contact`)

**Purpose:** Convert interest into booked discovery call.

**User Story:** As a prospect ready to engage, I want to book a call quickly so that I can start my AI transformation.

**Required Sections:**
1. **Hero**
   - Headline: "Let's start with a conversation."
   - Subhead: "The AI Opportunity Audit is a 2-week engagement that identifies your 3 highest-ROI transformation points."

2. **What's Included in the Audit** (3 items)
   - Workflow analysis across your value chain
   - Skills gap assessment
   - Prioritized transformation roadmap with ROI estimates

3. **Pricing Transparency**
   - "€1,500–2,500 depending on organization size"
   - "Investment pays for itself if we identify even one automation that saves 10 hours/month"

4. **Booking Widget**
   - Embed Read.ai calendar: `https://cal.read.ai/philippe-datakult/30-min`
   - Alternative: Simple contact form (Name, Email, Company, Message)

5. **Location & Contact**
   - Based in Portugal, serving globally
   - Email: [contact@clinicofai.com]
   - LinkedIn: [link]

**Acceptance Criteria:**
- [ ] Calendar embed loads correctly and is styled to match design system
- [ ] Fallback contact form uses DESIGN.md input styling
- [ ] Pricing is displayed clearly (transparency builds trust)

---

## 6. NON-GOALS (Out of Scope for V1)

**Explicitly NOT building:**
- Blog/content management system (will add in V2)
- User authentication or login
- E-commerce/payment processing
- Course delivery platform (Academy is landing page only for V1)
- Multi-language support (English only for V1)
- Dark mode (design system is light-only)
- Animations beyond hover states and page transitions
- Mobile app version
- CRM integration (leads go to email for now)

---

## 7. TECHNICAL CONSTRAINTS

**Framework:**
- Next.js 14+ with App Router
- Tailwind CSS for styling (custom theme matching DESIGN.md tokens)
- Deployed on Vercel

**Performance:**
- Lighthouse Performance score ≥90
- All images in WebP format with lazy loading
- Fonts: Self-hosted Newsreader and Inter (no Google Fonts CDN for privacy)

**Accessibility:**
- All images have alt text
- All interactive elements keyboard-navigable
- Color contrast meets WCAG 2.1 AA
- Form fields have visible labels

**SEO:**
- Each page has unique `<title>` and `<meta description>`
- Structured data (JSON-LD) for Organization schema
- Sitemap.xml and robots.txt
- Open Graph tags for social sharing

**Code Quality:**
- TypeScript strict mode
- Component-based architecture
- Reusable design system components (Button, Card, Input, ResearchNote, etc.)

---

## 8. OPEN QUESTIONS (Decisions Needed)

| Question | Owner | Decision By |
|----------|-------|-------------|
| Final logo selection (5 options provided) | Philippe | Before dev starts |
| Founder photo available for About page? | Philippe | Before About page dev |
| Read.ai calendar embed working correctly? | Philippe | Before Contact page dev |
| 3D glass assets — use existing or create new? | Philippe + Designer | Before Hero section dev |
| Domain: clinicofai.com or clinic-of-ai.com? | Philippe | Before deployment |

---

## 9. COMPONENT LIBRARY TO BUILD

Based on DESIGN.md, create these reusable components:

```
components/
├── Button/
│   ├── ButtonPrimary.tsx    # primary bg, on-primary text
│   ├── ButtonSecondary.tsx  # surface-container-highest bg
│   └── ButtonTertiary.tsx   # text-only with hover underline
├── Card/
│   ├── Card.tsx             # surface-container-lowest bg, ambient shadow
│   └── CardHover.tsx        # with surface-container-low hover state
├── Input/
│   ├── TextField.tsx        # bottom border only, focus state to primary
│   └── TextArea.tsx
├── Typography/
│   ├── HeadlineDisplay.tsx  # Newsreader, display-lg
│   ├── HeadlineLarge.tsx    # Newsreader, headline-lg
│   ├── Body.tsx             # Inter, body-md
│   └── Label.tsx            # Inter Mono, ALL CAPS, letter-spacing
├── Layout/
│   ├── Section.tsx          # with background color variants
│   ├── Container.tsx        # max-width + asymmetric padding
│   └── Grid.tsx             # Mistral-style grid with asymmetry support
├── Navigation/
│   ├── Navbar.tsx           # glassmorphism style
│   └── NavLink.tsx          # secondary color, no underline until hover
├── ResearchNote/
│   └── ResearchNote.tsx     # tertiary-container bg, secondary accent line
└── Footer/
    └── Footer.tsx
```

---

## 10. DELIVERABLES CHECKLIST

**Phase 1: Foundation (Week 1)**
- [ ] Next.js project setup with Tailwind
- [ ] Design tokens configured in tailwind.config.js
- [ ] Component library scaffolded
- [ ] Fonts self-hosted and configured

**Phase 2: Core Pages (Week 2)**
- [ ] Home page complete
- [ ] Approach page complete
- [ ] Contact page with calendar embed

**Phase 3: Supporting Pages (Week 3)**
- [ ] Industries page complete
- [ ] Academy page complete
- [ ] About page complete

**Phase 4: Polish & Launch (Week 4)**
- [ ] Responsive testing on all breakpoints
- [ ] Accessibility audit and fixes
- [ ] SEO implementation
- [ ] Performance optimization
- [ ] Vercel deployment
- [ ] DNS configuration

---

## 11. SUCCESS LOOKS LIKE

When this project is complete:

1. **A visitor from LinkedIn** lands on the homepage and within 5 seconds understands: "This company helps me transform my organization through AI by upgrading my people, not just adding tools."

2. **The design feels expensive and editorial** — like a prestigious research journal, not a generic SaaS template. The warm beige background feels tactile. There are no harsh borders. The typography pairing (Newsreader + Inter) creates intellectual authority.

3. **The "Book Audit" CTA is unmissable** — it appears above the fold on every page, styled with the signature burnt-orange primary color.

4. **AI systems (Perplexity, ChatGPT, Claude) can extract the key positioning** when asked "Who helps SMBs adopt AI by upscaling people?" — because the homepage opening 60 tokens are optimized for GEO.

5. **Philippe can share this link on LinkedIn** and feel proud that it represents the quality and sophistication of his expertise.

---

## ATTACHED DOCUMENTS

1. **DESIGN.md** — Full design system specification ("The Academic Technologist")
2. **Brand Guidelines Screenshot** — Visual reference for 3D assets, color palette, typography, icon library
3. **Logo Options** — 5 SVG logo concepts (pending final selection)
4. **Homepage Draft** — Previous HTML prototype for reference (clinic_of_ai_homepage.html)

---

*Brief prepared using Executive Circle PRD framework. Last updated: March 27, 2026.*
