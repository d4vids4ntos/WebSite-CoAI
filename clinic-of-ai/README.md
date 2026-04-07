# Clinic of AI â€” Website

Marketing website for [Clinic of AI](https://clinicofai.com), built with Next.js 14, Tailwind CSS, Supabase, and Resend.

## Stack

- **Framework** â€” Next.js 14 (App Router)
- **Styling** â€” Tailwind CSS v3 + custom design tokens
- **Database** â€” Supabase (PostgreSQL)
- **Email** â€” Resend
- **Fonts** â€” Manrope, Newsreader, Space Grotesk (Google Fonts)

## Pages

| Route | Description |
|---|---|
| `/` | Home â€” hero, problem cards, solutions, academy teaser, origin story |
| `/approach` | Solutions & methodology |
| `/industries` | Industry verticals |
| `/academy` | Academy + waitlist form |
| `/about` | About Philippe KÃ¼ng |
| `/contact` | AI Opportunity Audit booking form |
| `/login` | Login for existing users |
| `/signin` | Create a new account |

## Getting Started

### 1. Clone the repo

```bash
git clone <repo-url>
cd clinic-of-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Fill in the values in `.env.local`:

| Variable | Where to find it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase â†’ Project Settings â†’ API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase â†’ Project Settings â†’ API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase â†’ Project Settings â†’ API |
| `RESEND_API_KEY` | resend.com â†’ API Keys |
| `RESEND_FROM_EMAIL` | Your verified sender domain |
| `PHILIPPE_EMAIL` | Notification recipient |
| `NEXT_PUBLIC_SITE_URL` | Public production domain (for canonical/sitemap metadata) |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 measurement ID |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional Plausible domain |
| `NEXT_PUBLIC_ANALYTICS_REQUIRE_CONSENT` | `true`/`false` consent gate for analytics |

### 4. Set up the database

Run `supabase/schema.sql` in the Supabase SQL Editor. This creates the `bookings` and `waitlist` tables with Row Level Security.

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful verification commands

```bash
npm run check:env
npm run check:contrast
npm run test:a11y-keyboard
```

Core Web Vitals reports and launch copy/multilingual notes:

- `reports/CWV_VERIFICATION.md`
- `COPY_PASS_NOTES.md`
- `MULTILINGUAL_STRATEGY.md`

## Project Structure

```
clinic-of-ai/
â”œâ”€â”€ app/
â”‚   â”œâ”€â”€ actions/          # Server Actions (booking, waitlist)
â”‚   â”œâ”€â”€ about/
â”‚   â”œâ”€â”€ academy/
â”‚   â”œâ”€â”€ approach/
â”‚   â”œâ”€â”€ contact/
â”‚   â”œâ”€â”€ industries/
â”‚   â”œâ”€â”€ login/
â”‚   â”œâ”€â”€ signin/
â”‚   â”œâ”€â”€ globals.css       # Design tokens + utility classes
â”‚   â”œâ”€â”€ layout.tsx        # Root layout, fonts, metadata
â”‚   â””â”€â”€ page.tsx          # Home page
â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ Navbar.tsx
â”‚   â””â”€â”€ Footer.tsx
â”œâ”€â”€ lib/
â”‚   â”œâ”€â”€ supabase.ts       # Browser client
â”‚   â””â”€â”€ supabase-server.ts # Server-only client
â”œâ”€â”€ supabase/
â”‚   â””â”€â”€ schema.sql        # Database schema
â”œâ”€â”€ .env.local.example    # Environment variable template
â””â”€â”€ next.config.mjs
```

## Deployment

Deploy to [Vercel](https://vercel.com) â€” connect the GitHub repo and add the environment variables in the Vercel dashboard under Project Settings â†’ Environment Variables.

