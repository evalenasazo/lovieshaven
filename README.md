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

Vercel serves this as-is. `vercel.json` enables clean URLs, so `/about.html`
redirects to `/about`. Internal links still use the `.html` form and resolve
correctly.

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
