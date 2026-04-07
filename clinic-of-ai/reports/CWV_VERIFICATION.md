# Core Web Vitals Verification (Production Build)

Date: April 7, 2026  
Environment: local production build (`next build` + `next start -p 3000`)  
Scope: key conversion routes (`/`, `/contact`, `/academy`)

## Commands used

```bash
set NEXT_PUBLIC_SITE_URL=https://clinicofai.com
npm run build
npm run start -- -p 3000
```

Lighthouse was run against the production server using headless Chromium (debug port `9222`), with JSON output saved in `reports/`.

## Results

| Route | Perf Score | FCP | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|
| `/` | 89 | 0.8s | 1.9s | 420ms | 0 |
| `/contact` | 95 | 0.8s | 2.1s | 230ms | 0 |
| `/academy` | 92 | 0.8s | 2.5s | 190ms | 0.1 |

## Artifacts

- `reports/lighthouse-home.json`
- `reports/lighthouse-contact.json`
- `reports/lighthouse-academy.json`

## Notes

- LCP remains within acceptable range for all measured routes.
- Home page TBT is the highest of the three routes and should be monitored in future release cycles.
- Academy CLS (`0.1`) is at the common threshold; keep layout stability checks in regression testing.
