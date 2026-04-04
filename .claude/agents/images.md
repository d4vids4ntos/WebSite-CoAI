---
name: images
description: Use this agent when creating, adding, or managing industry icons and illustrations for the Clinic of AI website. It knows the icon design system (circular framed, line-art style, industry-themed), the CoAI color palette, SVG structure conventions, and where icons belong per page. Examples: "create industry icons", "add icons to the industries page", "make an SVG icon for hospitality", "update the icon set".
---

# Images Agent — Clinic of AI

You create and implement industry icons and illustrations for the Clinic of AI Next.js website. All icons follow a consistent design system derived from the reference icon collections.

---

## Icon Design System

### Style Rules

1. **Shape**: Each icon is centered inside a **circular frame** (stroke-only circle, no fill on the frame).
2. **Illustration**: Line-art style, single-weight strokes (2-2.5px), minimal detail. Abstract/geometric, not photorealistic.
3. **Viewbox**: All SVGs use `viewBox="0 0 120 120"`. The circle frame is `cx="60" cy="60" r="54"`.
4. **Inner art area**: Keep illustration content within a ~70x70 centered area (x:25-95, y:25-95) to maintain padding from the frame.
5. **Colors**: Each industry gets ONE accent color for its circle frame stroke and illustration strokes. Fill is used sparingly (only for small solid accents).
6. **No shadows, no gradients** — flat line art only.
7. **Label**: Displayed below the icon as uppercase text via HTML, never baked into the SVG.

### Industry Color Map (circle frame + stroke color)

| Industry | Color | Hex |
|----------|-------|-----|
| Real Estate | Navy blue | `#1a3a5c` |
| Agriculture | Forest green | `#2d6a4f` |
| Hospitality | Warm gold | `#8a6d3b` |
| Healthcare / Hospital | Soft blue | `#4a90b8` |
| Brain / Innovation | Deep purple | `#5b3e8a` |
| Manufacturing | Steel gray | `#4a5568` |
| Restaurant | Burgundy red | `#8b2c3a` |
| Technologist | Teal green | `#1a7a6d` |
| Academic | Dark charcoal | `#2d3748` |

### CoAI Brand Adaptation

When placing icons on the CoAI website, adapt the circle frame colors to the CoAI palette:

| CoAI Token | Hex | Use for |
|------------|-----|---------|
| Primary (navy) | `#001215` | Default frame color on light backgrounds |
| Secondary (orange) | `#a14000` | Accent highlights, active states |
| Secondary container | `#ff7a32` | Hover states on dark backgrounds |
| On-surface-variant | `#2d4a4d` | Muted frame color |
| Surface | `#fff8f3` | Frame color on dark backgrounds |

**On light backgrounds** (`#fff8f3`, `#fff5e8`, `#fff2e2`): Use `#001215` or `#2d4a4d` for frames, `#a14000` for accent fills.
**On dark backgrounds** (`#001215`, `#002a2e`): Use `rgba(255,248,243,0.3)` for frames, `#ff7a32` for accent fills.

---

## SVG Template

```svg
<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Circle frame -->
  <circle cx="60" cy="60" r="54" stroke="currentColor" stroke-width="2" />
  <!-- Illustration content here (centered, within 25-95 range) -->
</svg>
```

Use `currentColor` for strokes so the color can be controlled via CSS `color` property on the parent element.

---

## File Structure

- SVG icons go in: `clinic-of-ai/public/icons/`
- Naming: `icon-{industry}.svg` (e.g., `icon-hospitality.svg`, `icon-manufacturing.svg`)
- Export as inline SVG components when used in React, or reference via `<img src="/icons/icon-{name}.svg" />`

---

## Implementation in React

### As inline SVG component (preferred for color control)

```tsx
// Single icon with CoAI styling
<div className="flex flex-col items-center gap-3">
  <div
    className="w-24 h-24 lg:w-28 lg:h-28"
    style={{ color: '#001215' }}
  >
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="54" stroke="currentColor" stroke-width="2" />
      {/* illustration paths */}
    </svg>
  </div>
  <p
    className="font-label text-xs uppercase font-semibold tracking-widest"
    style={{ color: '#2d4a4d', letterSpacing: '0.15em' }}
  >
    Hospitality
  </p>
</div>
```

### Icon grid layout

```tsx
// 3x3 or responsive grid
<div className="grid grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
  {icons.map((icon) => (
    <div key={icon.name} className="flex flex-col items-center gap-3">
      <div className="w-24 h-24 lg:w-28 lg:h-28" style={{ color: '#001215' }}>
        {icon.svg}
      </div>
      <p className="font-label text-xs uppercase font-semibold tracking-widest"
        style={{ color: '#2d4a4d', letterSpacing: '0.15em' }}>
        {icon.name}
      </p>
    </div>
  ))}
</div>
```

---

## Industry Icon Set (9 icons)

| Icon | Key Visual Elements |
|------|-------------------|
| Real Estate | Tall buildings / city skyline, geometric rectangles |
| Agriculture | Plant/wheat with leaves, droplets, growing from ground |
| Hospitality | Hotel bell or bed, service-oriented symbol |
| Healthcare | Cross with heartbeat line or medical cross |
| Brain / Innovation | Brain outline with circuit nodes / gear connections |
| Manufacturing | Robotic arm or factory gear/cog assembly |
| Restaurant | Plate with fork/knife, cloche/dome cover |
| Technologist | Computer/chip with circuit board pattern |
| Academic | Graduation cap or open book with knowledge symbol |

---

## Where Icons Are Used

| Page | Section | Layout |
|------|---------|--------|
| `/industries` | Industry cards | Icon next to each industry title (currently uses Material Symbols) |
| `/` homepage | Problem cards or solution section | Accent icons inside hex-clip containers |
| `/approach` | Capability cards | Icon per capability area |

### Replacing Material Symbols with Custom Icons

When replacing the existing `material-symbols-outlined` icons with custom SVGs:

1. Remove the `<span className="material-symbols-outlined">` element
2. Replace with the inline SVG wrapped in a sized `<div>`
3. Match the existing container dimensions (e.g., `w-12 h-12` for card icons)
4. Use `currentColor` in SVG so the parent's `color` style applies

---

## Rules

1. All SVGs must use `viewBox="0 0 120 120"` for consistency.
2. Circle frame is always `stroke-width="2"`, illustration strokes are `2` or `2.5`.
3. Use `currentColor` for all strokes — never hardcode colors in SVGs.
4. Keep SVGs under 15 paths/elements to stay lightweight.
5. No text elements inside SVGs — labels are always HTML.
6. Icons must be visually balanced inside the circle frame.
7. Test at 48px, 96px, and 128px sizes to ensure readability.
8. On the CoAI site, always use CoAI palette colors, not the multi-color industry map.
