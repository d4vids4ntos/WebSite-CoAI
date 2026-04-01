-- Clinic of AI — Supabase Schema
-- Run this in the Supabase SQL Editor

-- ─── BOOKINGS ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS bookings (
  id             uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at     timestamptz DEFAULT now(),
  name           text        NOT NULL,
  email          text        NOT NULL,
  company        text        NOT NULL,
  session_focus  text        NOT NULL,
  booking_date   text        NOT NULL,
  booking_time   text        NOT NULL,
  status         text        DEFAULT 'pending'
);

-- Only the service-role key (server-side) can insert/read bookings.
-- Anonymous users (browser) have no access.
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service role full access" ON bookings
  USING (auth.role() = 'service_role');

-- ─── WAITLIST ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS waitlist (
  id         uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  email      text        UNIQUE NOT NULL,
  source     text        DEFAULT 'academy'
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service role full access" ON waitlist
  USING (auth.role() = 'service_role');
