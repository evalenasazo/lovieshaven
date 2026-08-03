# CLAUDE.md

Context for anyone (human or Claude) picking up this repo.

## What this is

Marketing site for **Lovie's Haven** — a retirement sanctuary for rescued
elephants, funded by a small luxury wellness retreat built at a respectful
distance from the habitat.

Positioning: *Rehabilitation for elephants. Restoration for people.*
Reference points: Aman Resorts meets The Elephant Sanctuary.
Reader outcome: "I want to stay here, and then I want to protect this place."

Concept stage. Not live. Nothing here is a legal or financial commitment.

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
lovieshaven/
  index.html      Home — hero, the one rule, field log, land, two species,
                  pavilion, ways in, funding, closer
  elephants.html  Residents, the nevers, observation model, field log (#log)
  stay.html       Location, cabins, rates, house rules, private buyout
  wellness.html   Human-healing pillar, daily rhythm, treatments,
                  memberships (#membership), retreats
  weddings.html   Twelve dates a year, conditions, inclusions
  cafe.html       Café and gift shop
  story.html      Brand story
  about.html      Philosophy, the rule applied, land plan, care standards,
                  breeding position, what we are not
  donate.html     Costs, giving, sponsorship (#sponsor), partners (#partners),
                  legacy (#legacy)
  style.css       All design tokens and layout
  site.js         Sticky header, mobile menu, IntersectionObserver reveals
SITEMAP.md      Full site map, design system, handoff notes
```

Pages share an identical `<header>` and `<footer>` block. **If you change one,
change all nine.** There is no template engine; that's the tradeoff.

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

**No photography anywhere.** The hero herd is drawn SVG, deliberately distant
and captioned *"observed from the pavilion, 400 metres away."* This is a brand
position, not a placeholder waiting to be filled. When real images arrive, keep
the distance honest — nothing closer than a guest could actually stand.

## Editorial rules

The site's credibility rests on refusing things. Preserve these in any copy you
touch:

- Every decision answers **"Is this better for the elephants?"** If no, it isn't
  built. This line appears on home and about and should not be softened.
- No performances, no contact, no feeding, no bathing, no photo sessions, no
  scheduled sightings, no promise a guest will see an elephant at all.
- No breeding. Retirement sanctuary, not a breeding programme.
- Guests are sited near where elephants already go (watering hole, shade stand,
  wallow). Elephants are never moved toward guests.
- The **field log** is the signature device — dated care-team entries published
  unedited, *including* the mornings nobody saw an elephant. Don't sand off the
  empty days; they are the proof.

Voice is plain, specific, and unsentimental. Short declaratives. It earns
emotion by withholding it. No exclamation marks, no "nestled," no "unforgettable
experience," no marketing adjectives stacked three deep.

## Placeholder — replace before publishing

- Resident names, ages, arrival years and histories (Lovie, Bala, Meera, Ruth)
- All rates, wedding pricing, membership tiers, and dollar figures
- 150 acres, ten-elephant capacity, national-forest boundary — these assume a
  target property that isn't secured. Confirm wetlands, zoning, setbacks and
  easements, or soften to intent.
- Pavilion is described as seating 150 while weddings cap at 120 — reconcile
- `mailto:` links (give@, weddings@, partners@, legacy@) need real forms or a
  booking engine

## Sensible next tasks

- Contact / enquire page, split by intent (stays, weddings, press, giving)
- Visit & FAQ, answering the sighting question plainly
- Journal for long-form field writing
- Transparency page: accounts, welfare audit, intake decisions
- Real booking flow on `stay.html`
- Extract the header/footer if a build step ever becomes justified
