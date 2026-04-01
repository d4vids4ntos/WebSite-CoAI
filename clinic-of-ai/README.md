# Clinic of AI — Website

Marketing website for [Clinic of AI](https://clinicofai.com), built with Next.js 14, Tailwind CSS, Supabase, and Resend.

## Stack

- **Framework** — Next.js 14 (App Router)
- **Styling** — Tailwind CSS v3 + custom design tokens
- **Database** — Supabase (PostgreSQL)
- **Email** — Resend
- **Fonts** — Manrope, Newsreader, Space Grotesk (Google Fonts)

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, problem cards, solutions, academy teaser, origin story |
| `/approach` | Solutions & methodology |
| `/industries` | Industry verticals |
| `/academy` | Academy + waitlist form |
| `/about` | About Philippe Küng |
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
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project Settings → API |
| `RESEND_API_KEY` | resend.com → API Keys |
| `RESEND_FROM_EMAIL` | Your verified sender domain |
| `PHILIPPE_EMAIL` | Notification recipient |

### 4. Set up the database

Run `supabase/schema.sql` in the Supabase SQL Editor. This creates the `bookings` and `waitlist` tables with Row Level Security.

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
clinic-of-ai/
├── app/
│   ├── actions/          # Server Actions (booking, waitlist)
│   ├── about/
│   ├── academy/
│   ├── approach/
│   ├── contact/
│   ├── industries/
│   ├── login/
│   ├── signin/
│   ├── globals.css       # Design tokens + utility classes
│   ├── layout.tsx        # Root layout, fonts, metadata
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   ├── supabase.ts       # Browser client
│   └── supabase-server.ts # Server-only client
├── supabase/
│   └── schema.sql        # Database schema
├── .env.local.example    # Environment variable template
└── next.config.mjs
```

## Deployment

Deploy to [Vercel](https://vercel.com) — connect the GitHub repo and add the environment variables in the Vercel dashboard under Project Settings → Environment Variables.
