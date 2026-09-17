---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/404.astro","src/layouts/Base.astro"]
---

# Surface: adamworley.com home (single page)

## Scope and mode

One page, one route, plus a 404. Visitor mode: **Persuade**. A hiring manager or
technical recruiter on tab seven of a shortlist, CV open alongside, seconds of
attention, often on a phone. Success: they leave believing Adam is a credible
senior engineer with real depth, and they email, open GitHub, or read the blog.

## Direction

**The Album Page**, ligne claire adventure album (catalog id
`pop-culture-shelf-ligne-claire-album`), chosen by the user over the assigned
roll (The Shooting Script) at direction round 3, seed `815674f9`.

Approved composition: **comp A's four-tier structure with comp B's hero scale**.

- Approved comp: `.impeccable/mocks/comp-a-album-page.png` (sidecar carries `approved: true`)
- Hero scale reference: `.impeccable/mocks/comp-b-establishing-shot.png`
- Craft bar: `.impeccable/refs/ligne-hero.webp`, `.impeccable/refs/ligne-board.webp`

Memorable moment: the whole page reads as one comic album page, the visitor
scrolls through tiers of panels, not sections of a website. Personal life gets a
full illustrated tier, which is what a scanned candidate is never given.

## Design system read from the approved comp

- **Line:** one unvarying black stroke, 3px at panel scale, on every bounded
  shape. No shape in this design is unbounded. Never varies by element importance.
- **Corners:** panels square (0). Buttons, caption boxes and balloons 4px.
- **Elevation:** none. No shadows, no gradients, no blurs, no glass. Depth comes
  from flat colour separation and the black line only.
- **Fills:** flat and unmodulated. Seven named roles, no tints between them.
- **Type ramp:** Baloo 2 800 caps for the name (clamp 3rem–7rem, tracking -0.01em);
  Baloo 2 700 caps for tier headings (~2rem); Asap 600 caps ~0.8rem for caption
  boxes and UI labels; Asap 400 ~1.05rem for body prose.
- **Gutter:** 12px paper-white between panels, matching the album's page grid.

## Colour

| Role | Value | Use |
|---|---|---|
| ink | `#141414` | every line, all body text |
| sky | `#8FC4E8` | page ground, panel skies |
| paper | `#F4F1E8` | panel interiors, gutters |
| ochre | `#E3C489` | desks, ground planes, warm fields |
| yellow | `#F5D14E` | caption boxes, header rail |
| sea | `#4E9E8F` | water, foliage |
| steel | `#5B7C99` | machinery, racking, buildings |
| red | `#D9382C` | the primary action only, one per viewport |

Strategy: full palette, seven named roles. Page ground is sky, not paper, the
album board's own ground, and the thing that stops this reading as beige stationery.

## Implementation inventory

| Region | Medium | Note |
|---|---|---|
| Hero establishing scene | **generated raster** | Perspective, figures, depth, illustration, not diagram |
| Project panels ×4 | **generated raster** | Same |
| Personal panels ×6 | **generated raster** | Same |
| Panel frames, gutters, tiers | semantic HTML/CSS | CSS grid, 3px borders |
| Caption boxes | semantic HTML/CSS | Yellow field, black border, absolute inside panel |
| Speech balloons | HTML/CSS + inline SVG tail | Tail is a drawn SVG path, not a CSS triangle |
| Header rail + nav | semantic HTML/CSS | Yellow field, black bottom rule |
| Primary action (email) | semantic HTML/CSS | Red field, black border, offset-press on active |
| Secondary actions | semantic HTML/CSS | Paper field, black border |
| Icons (GitHub, mail, external) | authored inline SVG | Drawn at the same 3px stroke as the panel line |
| Favicon | generated raster | Clear-line mark, replaces starter geometry |
| Motion | CSS only | Panel-to-panel cut on reveal, no easing flourish |

Density commitment: eleven illustrated panels across the page, hero at roughly
55% of the first viewport, personal tier six panels wide on desktop.

## Constraints carried from PRODUCT.md

- All copy verbatim from the incumbent site. No invented claims, metrics,
  testimonials, titles or dates.
- The four "projects" are employer and personal links, not case studies.
- No illustrated likeness of Adam, no photo reference exists. Figures are
  drawn from behind or off-frame.
- No third-party logos (the comps hallucinated Go and Docker marks; both dropped).
- Full comprehension with motion disabled; keyboard operable; AA contrast.

## Unresolved

- Deploy target not reconfirmed (Netlify and Gatsby Cloud adapters were carried
  by the old stack and are being dropped).
- Analytics: old site had an optional `GOOGLE_ANALYTICS_ID`. Not carried over
  unless asked.
