# Clinic of AI - Launch Checklist

Last updated: April 7, 2026

## P0 - Must ship

- [x] Technical SEO baseline
  - [x] Canonical URL and metadata base configured
  - [x] `robots.txt` route implemented
  - [x] `sitemap.xml` route implemented
  - [x] Open Graph and Twitter image routes implemented
  - [x] Structured data (Organization, WebSite, ProfessionalService) added
- [x] Lead capture hardening
  - [x] Server-side sanitization for booking and waitlist
  - [x] Server-side format validation for email and booking time
  - [x] Hidden bot-trap field support (booking and waitlist forms)
  - [x] Email sending changed to fail-safe (DB success no longer blocked by email provider issues)
- [x] Icon reliability
  - [x] Missing `calendar_today` icon added to local icon set
- [x] Production environment and domain
  - [x] Set `NEXT_PUBLIC_SITE_URL` in production
  - [x] Verify all required Supabase and Resend environment variables on hosting platform

## P1 - High impact next

- [x] Conversion tracking
  - [x] Add analytics (GA4 or Plausible) with events for primary CTA clicks and form submits
  - [x] Define conversion goals for `/contact` and academy waitlist
- [x] Trust-building content
  - [x] Add 2-3 concrete case studies with measurable outcomes
  - [x] Add client/partner proof section if allowed
- [x] Accessibility pass
  - [x] Keyboard-only flow test for navbar, forms, accordions
  - [x] Contrast review on all text/background combinations
  - [x] Screen-reader labels and error announcements validation
  - [x] Evidence: `npx playwright test tests/keyboard-flow.spec.ts` (3 passed)

## P2 - Finish line polish

- [x] Legal and compliance expansion
  - [x] Cookie policy and consent banner decision
  - [x] Data retention period disclosure in privacy policy
- [x] Performance hardening
  - [x] Optimize animation cost on low-end mobile devices
  - [x] Verify Core Web Vitals on production build
  - [x] Evidence: `reports/CWV_VERIFICATION.md` + Lighthouse JSON artifacts under `reports/`
- [x] Content operations
  - [x] Final copy pass for consistency of positioning language
  - [x] Evidence: `COPY_PASS_NOTES.md` and standardized CTA labels across app routes/components
  - [x] Add multilingual strategy if targeting multiple EU markets
  - [x] Evidence: `MULTILINGUAL_STRATEGY.md`
