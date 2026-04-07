# Analytics Goals

This document defines conversion events used for launch tracking.

## Environment Variables

- `NEXT_PUBLIC_GA_ID` (optional): enables GA4 script loading
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional): enables Plausible script loading
- `NEXT_PUBLIC_ANALYTICS_REQUIRE_CONSENT` (optional, default `true`):
  - `true`: analytics runs only after cookie consent
  - `false`: analytics runs immediately

## Core Events

- `page_view`
  - Fired on every route change
  - Payload: `path`, `title`

- `cta_click`
  - Fired on any anchor click to `/contact`
  - Payload: `cta`, `target`, `page`

## Conversion Goals

- `goal_contact_page_view`
  - Trigger: user reaches `/contact`

- `goal_booking_submitted`
  - Trigger: contact booking form submitted successfully
  - Payload: `focus`, `time_slot`

- `goal_academy_page_view`
  - Trigger: user reaches `/academy`

- `goal_waitlist_submitted`
  - Trigger: academy waitlist submit succeeds for a new email
  - Payload: `source`

- `goal_waitlist_duplicate`
  - Trigger: academy waitlist submit succeeds for an already-registered email
  - Payload: `source`

