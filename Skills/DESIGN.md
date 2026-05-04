# Design System: Clinic of AI

## 1. Overview & Creative North Star

### Creative North Star: "The Architectural Intellectual"
This design system bridges the gap between raw computational power and high-end editorial clarity. It moves away from the "generic SaaS" aesthetic by embracing **Organic Blueprints**—a style that feels as though a master architect is drafting the future of intelligence on premium vellum. 

To break the "template" look, we employ **Intentional Asymmetry**. Hero sections should feature overlapping elements—such as a circuit-board motif bleeding out of a container—and high-contrast typography scales that command authority. The system is grounded in a structured grid but isn't a prisoner to it; we use the grid as a visual texture to imply precision while the content floats with editorial elegance.

---

## 2. Colors

The palette is **three colors**: beige, orange, and soft lemon. Everything else (ink for type, soft outlines, decorative blobs) sits in support of those three. Beige is the field, orange is the focal point, soft lemon is the supporting warmth.

### Palette Roles
*   **Beige (`#fff8f3` canvas, with `#fff5e8` / `#fff2e2` / `#efe0cd` as tinted layers):** The "Off-White Vellum." This is the primary canvas for the entire site, often paired with the signature grid pattern. Tinted layers provide tonal layering between cards and sections.
*   **Orange — deep (`#a14000`) and bright (`#ff7a32`):** Our "Energetic Orange." Deep is the action ink for primary CTAs, label colors, hover states, and emphasis. Bright is the focal accent — diagnostic dots, highlighted nodes in technical diagrams, the bright variant of CTAs and "See more" pills. Use it sparingly: orange is the *single point of interest*, never a wash.
*   **Soft Lemon (`#FFF59D` primary, `#FFFACD` softest):** Supporting warmth and gentle contrast. Hero-band accents, closing-CTA bands, featured cards, decorative blobs, "See more" pills. Soft lemon acts as a calm alternate surface alongside beige for hero bands and feature cards — quieter than canary yellow, never aggressive. Use as a surface only — not for type.
*   **Ink (black `#000000`):** Type and structural strokes are rendered in pure black for editorial clarity and maximum contrast against the beige and soft-lemon surfaces.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries must be defined through background color shifts. A `surface-container-low` section should sit against a `surface` background to create a clean, modern break without the clutter of "boxes."

### Surface Hierarchy & Nesting
Treat the UI as physical layers.
*   **Base:** `surface` (`#fff8f3`)
*   **Secondary Layer:** `surface-container-low` (`#fff2e2`)
*   **Interactive/Elevated:** `surface-container-highest` (`#efe0cd`)
Nesting these creates a natural sense of importance. An inner card should use a higher tier than its parent container to "lift" toward the user.

### The "Glass & Gradient" Rule
For floating panels or navigation headers, use **Glassmorphism**. Apply `surface` colors at 80% opacity with a `backdrop-blur(12px)`. To add "soul," use subtle gradients from beige (`#fff8f3`) to soft lemon (`#FFF59D` at low opacity) for hero backgrounds — a calm sunlight wash, not a moody monitor glow.

---

## 3. Typography

The typography strategy relies on the tension between the "Humanity" of the Serif and the "Logic" of the Sans-Serif.

*   **Display & Headlines (Newsreader):** A strong, authoritative serif. Use this for "Clinic of AI" branding and major section headers. It conveys the "Clinic" aspect—wisdom, history, and reliability.
*   **Body & Titles (Manrope):** A clean, technical sans-serif for functional reading. It bridges the gap between editorial and interface.
*   **Labels (Space Grotesk):** Mono-spaced stylistic leanings for "technical" data points, taglines like "SYSTEMS ARCHITECTED," and UI metadata.

---

## 4. Elevation & Depth

### The Layering Principle
Avoid "Drop Shadows" as a default. Instead, achieve depth through **Tonal Layering**. Place a `surface-container-lowest` card on a `surface-container-low` section. The subtle shift in beige provides a sophisticated, tactile lift.

### Ambient Shadows
Where floating is necessary (e.g., a primary modal), shadows must be:
*   **Extra-diffused:** Blur radius > 24px.
*   **Low-opacity:** 4%–8% alpha.
*   **Tinted:** Use a slightly darker version of the background color (e.g., a soft black-tinted shadow on a beige or soft-lemon surface) to mimic natural light.

### The "Ghost Border" Fallback
If accessibility requires a container definition, use a **Ghost Border**: the `outline-variant` token at 15% opacity. Never use 100% opaque, high-contrast lines.

---

## 5. Components

### Buttons
*   **Primary:** Fill `secondary` (`#a14000`), Text `on_secondary` (`#ffffff`). Shape: `md` (0.375rem). Use for "Start Building."
*   **Secondary (Technical):** Fill `primary_container`, Text `primary_fixed`. Use for "Documentation" or "Systems."
*   **Tertiary:** No fill. `label-md` (Space Grotesk) in `primary` with a hexagonal icon suffix.

### Input Fields
Avoid the "boxed" look. Use a `surface-variant` background with a bottom-only `outline` at 20% opacity. Upon focus, transition the bottom border to deep orange (`#a14000`) so the focus state inherits the brand action color.

### Cards & Lists
**Forbid divider lines.** Separate list items using the Spacing Scale (e.g., `12` or `3rem` gaps) or subtle background alternates. 
*   **Clinic Special:** Incorporate a small `hexagonal brand mark` in the corner of cards to denote "Verified by Clinic of AI."

### Hexagonal Chips
For status indicators or tags, use a clipped hexagonal shape rather than a standard pill. This reinforces the "Scalable Intelligence" motif.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use the off-white grid pattern as a watermark on `surface` backgrounds to emphasize the "Architected" feel.
*   **DO** use the circuit-board motif as an asymmetrical accent, letting it bleed off the edge of the viewport.
*   **DO** pair the "Systems Architected" tagline with `label-md` typography in all-caps with `0.1em` letter spacing.

### Don’t:
*   **DON’T** use standard 90-degree corners for large image containers; use the `xl` (0.75rem) roundedness to soften the technical edge.
*   **DON’T** introduce blue-cool charcoals or off-palette greys. Type and structural lines are pure black (`#000000`) so beige + orange + soft lemon remain the visual identity.
*   **DON’T** crowd the layout. If in doubt, increase spacing by two increments on the scale. High-end design requires "Oxygen."