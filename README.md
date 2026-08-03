# Lovie's Haven — Sanctuary & Retreat

Static marketing site. No build step, no dependencies, no framework.

## Structure

```
index.html      Home
elephants.html  Our Elephants (residents + field log)
stay.html       Cabins, rates, house rules, buyout
wellness.html   Pavilion, daily rhythm, memberships, retreats
weddings.html   Twelve dates a year, conditions, inclusions
cafe.html       Café & shop
story.html      Brand story
about.html      Philosophy, land plan, care standards, breeding position
donate.html     Costs, giving, sponsorship, partners, legacy
style.css       Design tokens + all layout
site.js         Sticky header, mobile menu, scroll reveals
SITEMAP.md      Full site map and handoff notes
```

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

The site lives at **https://theloviesfoundation.org/lovieshaven** — a subpath
of the foundation domain, not the domain root. Every internal link is
relative (`stay.html`, not `/stay.html`), so the site works unchanged from
any base path. Keep links relative; a leading slash would break the subpath.

Vercel serves this as-is. `vercel.json` enables clean URLs, so `/about.html`
redirects to `/about`. Canonical tags on each page point to the clean
`/lovieshaven/...` URLs.

Two ways to put it at the subpath:

1. **Same project** — if the foundation site is one Vercel project, place
   these files in a `lovieshaven/` directory of that project.
2. **Separate project** (this repo) — deploy standalone, then rewrite from
   the foundation project: `{ "source": "/lovieshaven/:path*",
   "destination": "https://<this-deployment>/:path*" }`.

```bash
vercel          # preview
vercel --prod   # production
```

## Before going live

- Resident names, ages, histories, rates and dollar figures are placeholder.
- Acreage (150), capacity (10 elephants) and the national-forest boundary
  assume the target property. Confirm wetlands, zoning, setbacks, easements.
- Pavilion is described as seating 150 while weddings cap at 120 — reconcile.
- `mailto:` links (give@, weddings@, partners@, legacy@) need real forms or a
  booking engine.
- No photography by design. When real images arrive, keep the distance honest.
