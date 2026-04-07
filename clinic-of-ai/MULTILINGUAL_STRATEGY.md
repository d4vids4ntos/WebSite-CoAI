# Multilingual Strategy (EU Markets)

Date: April 7, 2026
Owner: Clinic of AI marketing + product

## Goal

Expand beyond English while preserving conversion quality and brand positioning across priority EU markets.

## Recommended phased rollout

## Phase 0 - English-first foundation (now)

- Keep English as canonical source copy.
- Maintain single source of truth for positioning and CTA language (`COPY_PASS_NOTES.md`).
- Ensure SEO readiness for future locales (`hreflang`, locale sitemap entries, canonical per locale path).

## Phase 1 - High-intent launch locales

Target locales:
- `pt-PT` (Portugal operations and local trust)
- `de-DE` (DACH enterprise buyer intent)

Scope:
- Localize high-intent routes first: `/`, `/approach`, `/industries`, `/contact`, `/academy`.
- Localize legal pages (`/privacy`, `/terms`, `/cookies`) with legal review.
- Keep technical terms untranslated where needed (e.g., `Forward Deployed AI Engineer`) and add localized explanation.

## Phase 2 - Expansion locales

Add:
- `fr-FR`
- `es-ES`

Scope:
- Expand from core routes to the full site.
- Add localized case-study variants by industry.

## Implementation model

- Use route-based locales (example: `/pt`, `/de`) to keep SEO explicit.
- Store translation keys in structured dictionaries by route/section.
- Add content QA gate: linguistic review + conversion review before publish.

## Governance and QA

- Native or market-expert review required before go-live for each locale.
- Track conversion metrics by locale:
  - contact page views
  - booking submits
  - academy waitlist submits
- Run monthly copy drift review to keep localized messaging aligned with English source positioning.

## Launch readiness checklist per locale

- Translation complete for launch routes
- Legal text reviewed
- `hreflang` + locale sitemap entries added
- Analytics segmented by locale
- QA pass complete on desktop/mobile
