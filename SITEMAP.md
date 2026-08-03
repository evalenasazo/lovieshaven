# Lovie's Haven — Site Map

**Vision statement**
Lovie's Haven is a sanctuary for elephants and a retreat for people. We exist to restore dignity to rescued elephants and create space for human peace.

**Positioning line** — Rehabilitation for elephants. Restoration for people.
**Design principle** — Is this better for the elephants? If no, we don't build it.
**Reader outcome** — "I want this to exist, and I want to be one of the hundred who build it."
**The raise** — the Founding 100: 50 × $25k (Meadow) + 25 × $50k (Lakeside) + 25 × $75k (Sky View) = $4.375M, once. Lifetime classes + 2/3/4-night annual stay for life.

---

## Built now (11 pages + home)

| # | Page | File | Job it does | Primary CTA |
|---|------|------|-------------|-------------|
| 1 | Home | `index.html` | Establish the paradox: luxury retreat, wild sanctuary, elephants first | Plan a stay / Protect this place |
| 2 | Our Elephants | `elephants.html` | Emotional core. Residents, the nevers, the field log | Sponsor a resident |
| 3 | Stay | `stay.html` | Convert to booking. Cabins, rates, house rules, buyout | Plan a stay |
| 4 | Wellness | `wellness.html` | Daily rhythm, pavilion, memberships (`#membership`), retreats | Join / book |
| 5 | Weddings | `weddings.html` | Twelve dates a year, conditions, inclusions, endowment share | Ask about a date |
| 6 | Story | `story.html` | Short brand story — why the retreat funds the sanctuary | Stay or support |
| 7 | About | `about.html` | Philosophy, the rule applied, land plan, care standards | Meet the residents |
| 8 | Support | `donate.html` | Costs, giving, sponsorship (`#sponsor`), partners (`#partners`), legacy (`#legacy`) | Give monthly |
| 9 | Café & Shop | `cafe.html` | Two revenue lines told honestly; no elephant merchandise | Support / stay |
| 10 | Winnie's Farm | `farm.html` | The hands-on animal rescue; protects the herd's distance | Stay / support |
| 11 | The Founding 100 | `invest.html` | The pitch: tiers, budget, honest arithmetic, escrow terms | Reserve a place |
| 12 | Visiting & Questions | `visit.html` | The sighting question answered plainly; every honest no, said with love | Plan a stay |

### Home page section order
1. Hero — headline over the masterplan concept render (`img/masterplan.jpg`)
1b. The Founding 100 — the raise and three tiers, linked to `invest.html`
2. The one rule — *Is this better for the elephants?*
3. **Field log** (signature) — published unedited, including the quiet days
4. The land — the estate laid out around the herd, allocation band
5. Two species, one mission — the human-healing pillar
6. The Sky View Pavilion — wellness, events & dining; daily rhythm
7. Ways in — Stay / Practise / Gather
8. Winnie's Farm — the hands-on rescue
9. How this is paid for — the nine revenue lines
10. Closer — "An elephant can live sixty years. We are planning for the last thirty."

---

## Phase two (recommended next)

- **Journal** — long-form field writing, keeper essays, habitat footage
- **Getting here** — travel and arrival details (the FAQ half now lives at `visit.html`)
- **Transparency** — annual accounts, welfare audit, intake decisions
- **Contact / Enquire** — split by intent: stays, weddings, press, giving
- **Members' area** — gated field log, footage archive, booking
- **Legal** — privacy, terms, non-profit disclosures

---

## Global elements

**Navigation** — Our Elephants · Stay · Wellness · Weddings · Story · About · **Founding 100** (gold CTA → invest.html)
Café & Shop, Winnie's Farm and Visiting & Questions sit in the footer only, to keep the top nav at seven items.

**Footer columns** — Visit · The sanctuary · Support, plus the standing disclosure: *no rides, shows or hands-on encounters with the herd — they range freely and are usually in view on their own terms.*

**Recurring proof devices**
- The field log — the anti-zoo proof, reused on home and elephants
- The land allocation band — ~130 / ~20 acres of 150
- The nevers list — appears on about, elephants, weddings
- Real cost figures — $94k a year, $180k intake, 30-year commitment

---

## Design system

| | |
|---|---|
| Shade | `#2E3527` deep olive shade |
| Water | `#3D4735` palm shadow |
| Moss | `#6B7355` sage leaf |
| Hide | `#8C8F7C` grey-sage |
| Mist | `#F0EDE4` warm cream mist |
| Paper | `#F8F5EC` pale cream page |
| Lamp | `#BE8074` blush rose, sunset over the lake |

**Type** — Great Vibes (wordmark script, from the logo) · Cormorant Garamond 300 (display, used large and sparingly) · Karla 400/500/600 (body, labels, uppercase eyebrows at 0.24em tracking)

**Motion** — one ambient drift in the hero, staggered rise-on-scroll, nothing else. `prefers-reduced-motion` respected throughout.

**Signature element** — the field log. Copy as design: dated care-team entries, published including the days nobody saw an elephant.

---

## Notes before this goes live

- Resident names, ages, histories, rates and figures are placeholder. Swap for real ones before publishing.
- Acreage, capacity (three to five elephants at a time) and the national-forest boundary reflect the 150-acre target property; confirm wetlands, zoning, setbacks and easements before any of it goes on a public page.
- Wedding capacity is set at 120. The pavilion is described as seating 150 — confirm against the real building before publishing either number.
- Email addresses (`give@`, `weddings@`, `partners@`, `legacy@`, `stay@`) are placeholders on `mailto:` links — replace with real forms or a booking engine.
- All imagery is drawn SVG (hero meadow, estate plan, lakeside and farm scenes, badge logo). The founder's masterplan renders can replace them — drop files in `lovieshaven/img/` and swap the figures, keeping the masterplan geography.
