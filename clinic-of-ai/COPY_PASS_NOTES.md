# Copy Pass Notes

Date: April 7, 2026

## Positioning language standards

- Primary conversion CTA (contact route): `Book a 20-minute conversation`
- Promise line: `20 minutes. No pitch deck.`
- Delivery model term: `Forward Deployed AI Engineer` / `Forward Deployed AI Engineers`
- Academy funnel language remains separate: `Reserve cohort conversation` and `Join waitlist`

## Consistency updates applied

- Standardized contact CTA label to `Book a 20-minute conversation` across main conversion surfaces:
  - `components/Navbar.tsx`
  - `app/page.tsx`
  - `app/approach/page.tsx`
  - `app/industries/page.tsx`
  - `app/about/page.tsx`
  - `app/contact/page.tsx`
  - `app/login/page.tsx`

## QA checks

- Verified no remaining primary CTA variants (`Book a conversation`, `Book 20-min Call`, `Book an Audit`) in app routes/components.
- Preserved existing visual and brand tone while normalizing language.
