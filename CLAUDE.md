# CLAUDE.md

Context for anyone (human or Claude) picking up this repo.

## What this is

Marketing site for **Lovie's Haven** — a retirement sanctuary for rescued
elephants, funded by a small luxury wellness retreat laid out on the same
estate. The estate masterplan (supplied by the founder) is the source of
truth for geography and naming: the Sky View Pavilion (wellness, events &
dining) faces the Elephant View Meadow and the lake & watering hole;
Lakeside Lodging and the Sunset Dock sit on the west shore; the Guest
Cabins village, gated Main Entrance, perimeter Service Road and Winnie's
Farm (a hands-on farm-animal rescue) sit east; Lovie's Private Residence
is on the north lake. The herd is genuinely free-ranging — it is simply
usually in view, because the meadow and water it prefers face the glass.

Positioning: *Rehabilitation for elephants. Restoration for people.*
Reference points: Aman Resorts meets The Elephant Sanctuary.

The site now doubles as the **pitch**: the project is anchored by the
Founding 150 — one hundred and fifty founding memberships (50 × $25k
Meadow, 50 × $50k Lakeside, 50 × $75k Sky View = a $7.5M raise) that
buy a lifetime class pass, two seats at the annual Founders' Gala, and
a complimentary 1/2/3-night annual stay for life. Founders fund
**Phase One only**: land, habitat, barns, farm, first arrivals and an
endowment seed — the sanctuary itself. Phase Two (pavilion, bungalows,
village, the rest of the endowment; $8–12M working target of a $15–20M
total build) is a follow-on capital campaign of named gifts, grants
and partners. Don't let copy claim the $7.5M builds everything. The
nav CTA and home hero drive to `invest.html`; the reader outcome is
"I want this to exist, and I want to be one of the hundred and fifty."

Concept stage. Not live. Nothing here is a legal or financial commitment;
founding memberships are framed as contributions with lifetime benefits
(escrow until the land closes, written agreement, explicitly not a
security), and `invest.html` carries that disclaimer — keep it.

## Stack

Static HTML, one shared stylesheet, one small vanilla JS file. **No build step,
no framework, no package manager, no dependencies.** Fonts come from Google
Fonts via CDN. Deploys to Vercel as-is.

Do not introduce React, Tailwind, a bundler, or a static site generator without
being asked. The simplicity is deliberate — this gets handed to a designer and
a developer who may not share a toolchain.

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Files

The site pages live in the `lovieshaven/` directory so they serve at the
`/lovieshaven` subpath of theloviesfoundation.org. The root `vercel.json`
redirects `/` to `/lovieshaven` until a foundation homepage exists at root.

```
vercel.json     Clean URLs, / → /lovieshaven redirect, asset caching
                (images/fonts immutable for a year; css/js revalidate.
                Pages link style.css?v=N / site.js?v=N — bump N whenever
                you edit either file, or long-cached browsers keep the
                old copy and the header wordmark loses its script font)
lovieshaven/
  index.html      Home — masterplan hero (img/masterplan.jpg), Founding 150
                  strip, the one rule, field log, land, two species,
                  pavilion, ways in, Winnie's Farm, funding, closer
  invest.html     The Founding 150 — tiers, budget, arithmetic, how it
                  works, disclaimer
  elephants.html  Residents, the nevers, observation model, field log (#log)
  farm.html       Winnie's Farm — the hands-on animal rescue
  stay.html       Location, cabins, rates, house rules, private buyout
  visit.html      Visiting & questions — the sighting question answered
                  plainly, plus the honest FAQ (contact, day visits,
                  children, booking); modeled on elephants.com's FAQ
  wellness.html   Human-healing pillar, daily rhythm, treatments,
                  memberships (#membership), retreats
  weddings.html   Twelve dates a year, conditions, inclusions
  cafe.html       Café and gift shop
  story.html      Brand story
  about.html      Philosophy, the rule applied, estate plan SVG (#plan),
                  care standards, breeding position, what we are not
  donate.html     Costs, giving, sponsorship (#sponsor), partners (#partners),
                  legacy (#legacy)
  style.css       All design tokens and layout
  site.js         Sticky header, mobile menu, IntersectionObserver reveals
  img/            masterplan.jpg — the founder's concept render (hero).
                  The real badge logo is hotlinked from the founder's GHL
                  CDN (assets.cdn.filesafe.space) on story.html and as the
                  favicon on every page — the build sandbox's egress policy
                  can't reach that CDN, so to localize it, download the PNG
                  to img/logo.png yourself and swap the references. More
                  renders land here as they're supplied.
SITEMAP.md      Full site map, design system, handoff notes
```

Pages share an identical `<header>` and `<footer>` block. **If you change one,
change all eleven.** There is no template engine; that's the tradeoff. The top
nav stays at seven links plus the CTA, which points at `invest.html`
("Founding 150"); `cafe.html`, `farm.html`, `visit.html` and `donate.html`
are reached from the footer and in-page links.

The site is served at **theloviesfoundation.org/lovieshaven** — a subpath,
not a domain root. All internal links and asset references must stay
relative (`stay.html`, `style.css`); never add a leading slash or the
subpath breaks. Canonical tags point at the clean `/lovieshaven/...` URLs.

## Design system — do not drift from this

Palette (defined as CSS custom properties at the top of `style.css`):

| Token | Hex | Meaning |
|---|---|---|
| `--shade` | `#2E3527` | deep olive shade |
| `--water` | `#3D4735` | palm shadow |
| `--moss` | `#6B7355` | sage leaf |
| `--hide` | `#8C8F7C` | grey-sage |
| `--mist` | `#F0EDE4` | warm cream mist |
| `--paper` | `#F8F5EC` | pale cream page |
| `--lamp` | `#BE8074` | blush rose, sunset over the lake |

Type: **Great Vibes** for the wordmark only (the script from the logo).
**Cormorant Garamond** 300 for display, set large and used sparingly.
**Karla** 400/500/600 for body, labels, and uppercase eyebrows at `0.24em`.

Section backgrounds alternate via `.s-dark` / `.s-water` / `.s-mist` / default
paper. Padding comes from `.s` — never add block padding to a background
modifier class, or the specificities will fight.

Motion: one ambient drift in the hero, staggered `.rise` reveals on scroll,
nothing else. `prefers-reduced-motion` is respected and must stay that way.

**No photography yet — everything is drawn.** All imagery is inline SVG in
the site's silhouette style: the hero meadow scene, the labeled estate plan
on `about.html#plan`, the Lakeside/Sunset Dock scene on `stay.html`, the
farm scene on `farm.html`, and the circular badge logo on `story.html`
(line-drawn elephant raising her trunk to a heart — the real logo's motif).
The founder's photoreal masterplan renders can replace or join these; drop
files in `lovieshaven/img/` and swap the figures. Scenes should keep
matching the masterplan geography.

## Editorial rules

The site's credibility rests on refusing things. Preserve these in any copy you
touch:

- Every decision answers **"Is this better for the elephants?"** If no, it isn't
  built. This line appears on home and about and should not be softened.
- No performances, no contact, no feeding, no bathing, no rides, no photo
  sessions with elephants. Sightings are frequent (the meadow faces the
  glass) but never scheduled, promised, or engineered — elephants are never
  summoned, positioned or lit for viewing.
- Winnie's Farm is the hands-on release valve: rescued farm animals who
  *want* the attention. Contact belongs there, never with the herd.
- No breeding. Retirement sanctuary, not a breeding programme.
- Guests are sited near where elephants already go (meadow, watering hole,
  shade stand, wallow). Elephants are never moved toward guests.
- The **field log** is the signature device — dated care-team entries published
  unedited, *including* the quiet days when the herd keeps to the grove.
  Don't sand those off; they are the proof the sightings are real.

Voice is warm, sincere, and human — a founder who loves elephants talking
to you, not a copywriter being clever (the founder's direction, Aug 2026,
modeled on myakkaelephantranch.org). "We" and "you", contractions, feelings
stated plainly. American spelling. The welfare facts stay firm (no contact,
no shows, no breeding) but are said with love, never sternness — "her
retirement is the whole gift," not "she is not available." Avoid ironic
reversals and aphorisms that read cold. Still no exclamation marks stacked
up, and no empty marketing superlatives — warmth comes from specifics.

## Placeholder — replace before publishing

- Resident names, ages, arrival years and histories (Lovie, Bala, Meera, Ruth),
  and the farm's residents (Winnie et al.)
- All rates, membership tiers, and dollar figures. Founder-set so far:
  water bungalows $1,960/night (1–2 bed, private dock, sleeps 4),
  village huts $1,060/night (studio/1-bed), wedding weekends from $15k,
  founding tiers $25k/$50k/$75k
- 150 acres, three-to-five-elephant capacity, national-forest boundary — these assume a
  target property that isn't secured. Confirm wetlands, zoning, setbacks and
  easements, or soften to intent.
- Pavilion is described as seating 150 while weddings cap at 120 — reconcile
- The Founders' Gala promises two seats to 150 founders (300 potential
  guests) while the pavilion seats 150 — plan two sittings, or reconcile
- `mailto:` links (give@, weddings@, partners@, legacy@, founders@, stay@) need real
  forms or a booking engine
- The Founding 150 budget on `invest.html` is a working illustration that
  sums to $7.5M — replace with real quotes before any founder signs

## Sensible next tasks

- Contact / enquire page, split by intent (stays, weddings, press, giving)
- Getting-here details (travel, arrival) on `visit.html` — the FAQ half is done
- Journal for long-form field writing
- Transparency page: accounts, welfare audit, intake decisions
- Real booking flow on `stay.html`
- Extract the header/footer if a build step ever becomes justified
