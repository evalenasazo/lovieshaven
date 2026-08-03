# Lovie's Haven — Sanctuary & Retreat

Static marketing site. No build step, no dependencies, no framework.

## Structure

This repo is the site for **theloviesfoundation.org**. The haven's pages
live in the `lovieshaven/` directory so they serve at the
`/lovieshaven` subpath; the domain root redirects there until a
foundation homepage exists.

```
vercel.json                Clean URLs, / → /lovieshaven redirect, caching
lovieshaven/
  index.html               Home
  elephants.html           Our Elephants (residents + field log)
  stay.html                Cabins, rates, house rules, buyout
  wellness.html            Pavilion, daily rhythm, memberships, retreats
  weddings.html            Twelve dates a year, conditions, inclusions
  cafe.html                Café & shop
  story.html               Brand story
  about.html               Philosophy, land plan, care standards
  donate.html              Costs, giving, sponsorship, partners, legacy
  style.css                Design tokens + all layout
  site.js                  Sticky header, mobile menu, scroll reveals
SITEMAP.md                 Full site map and handoff notes
```

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000/lovieshaven/
```

## Deploy

The site lives at **https://theloviesfoundation.org/lovieshaven**. Every
internal link is relative (`stay.html`, not `/stay.html`), so the pages
work from any base path. Keep links relative; a leading slash would break
the subpath.

One-time setup on Vercel:

1. vercel.com → Add New → Project → Import `evalenasazo/lovieshaven`
   (framework: Other, no build command — it's static).
2. Project → Settings → Domains → add `theloviesfoundation.org`, then
   update DNS at the registrar/Cloudflare as Vercel instructs.

After that, every push to `main` deploys automatically. `vercel.json`
enables clean URLs (`/lovieshaven/stay.html` → `/lovieshaven/stay`) and
redirects `/` to `/lovieshaven`; canonical tags already point at the clean
URLs.

## Before going live

- Resident names, ages, histories, rates and dollar figures are placeholder.
- Acreage (150), capacity (10 elephants) and the national-forest boundary
  assume the target property. Confirm wetlands, zoning, setbacks, easements.
- Pavilion is described as seating 150 while weddings cap at 120 — reconcile.
- `mailto:` links (give@, weddings@, partners@, legacy@) need real forms or a
  booking engine.
- No photography by design. When real images arrive, keep the distance honest.
