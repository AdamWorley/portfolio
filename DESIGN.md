---
name: Adam Worley Portfolio
description: A software engineer's portfolio built as a ligne claire comic album page.
colors:
  ink: "#101010"
  sky: "#6fc0f2"
  sky-pale: "#a9dbf9"
  sky-deep: "#296e8e"
  paper: "#f5f1e6"
  ochre: "#cba647"
  yellow: "#f5ce3e"
  sea: "#4d97a5"
  steel: "#49759f"
  red: "#d93a2b"
typography:
  display:
    fontFamily: "Baloo 2, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 4.2vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Baloo 2, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.2vw, 3.1rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Baloo 2, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "normal"
  body:
    fontFamily: "Asap Variable, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "Asap Variable, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.02em"
  brand:
    fontFamily: "Baloo 2, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  caption-role:
    fontFamily: "Asap Variable, system-ui, sans-serif"
    fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.08em"
  lede:
    fontFamily: "Asap Variable, system-ui, sans-serif"
    fontSize: "clamp(0.85rem, 1.35vw, 1.05rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.01em"
rounded:
  panel: "0"
  sm: "4px"
spacing:
  gutter: "12px"
  tier: "2rem"
  panel-pad: "clamp(1.4rem, 3.2vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 1.1rem"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 1.1rem"
  panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  caption-box:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 0.7rem"
  caption-lede:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.lede}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.9rem"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.2rem 0.45rem"
  nav-link-active:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.2rem 0.45rem"
---

# Design System: Adam Worley Portfolio

## Overview

**Creative North Star: "The Album Page"**

The site is not a website with sections; it is one comic album page read tier by
tier. Every piece of content lives inside a panel bounded by the same black
line and narration sits in yellow caption boxes. The reading order is enforced by the album's grid rather
than by scroll choreography, which is why the system carries almost no motion.

The discipline is ligne claire: a single unvarying line weight describes
everything, and colour arrives as flat unmodulated fields. A harbour crane is
drawn as carefully as a teacup. Nothing is shaded, nothing is blurred, and
nothing casts a shadow, depth is produced entirely by flat colour separation
and the black contour. This is what keeps an illustrated portfolio reading as
precise rather than whimsical, which matters because the visitor is deciding
whether its author is a credible senior engineer.

The page ground is saturated sky, not paper. Paper is what panels are made of;
the sky is what the album sits on. Illustration is a first-class material here:
eleven authored clear-line scenes carry the work, the employers, and the life
away from the keyboard.

**Key Characteristics:**
- One unvarying 3px black line bounds every shape.
- Seven flat colour roles, no tints or gradients between them.
- Zero shadows, blurs, or glass.
- Rounded heavy display caps against a clean humanist body face.
- Illustration, not iconography, does the heavy lifting.

## Colors

A seven-role flat palette sampled from the built panel art rather than chosen in
the abstract, so the interface and the illustrations are made of the same
pigments.

### Primary
- **Adventure Red** (`#d93a2b`): The single call to action. It appears once per
  viewport, on the email button, and on nothing else in the chrome.

### Secondary
- **Album Yellow** (`#f5ce3e`): The narration colour. Header rail, footer rail,
  and every caption box. It is the system's wayfinding field.
- **Sky** (`#6fc0f2`): The page ground and the sky inside panels, the surface
  the whole album rests on.

### Tertiary
- **Steel Blue** (`#49759f`): Machinery, buildings, and the active state.
- **Sea Green** (`#4d97a5`): Water and foliage inside panels.
- **Sand Ochre** (`#cba647`): Desks, floors, and warm ground planes.
- **Sky Deep** (`#296e8e`) / **Sky Pale** (`#a9dbf9`): Illustration range only.

### Neutral
- **Ink** (`#101010`): Every line and every word. There is no grey text anywhere
  in the system; secondary text is ink at a smaller size, never a lighter tint.
- **Paper** (`#f5f1e6`): Panel interiors and gutters.

### Named Rules
**The One Red Rule.** Adventure red is reserved for the primary action and for
focal objects inside illustrations. A second red element in the same viewport
means one of them is wrong.

**The No Grey Rule.** De-emphasis is done with size and weight, never with a
lighter grey. Every glyph on the page is ink on a flat field.

## Typography

**Display Font:** Baloo 2 (self-hosted, weights 400/700/800)
**Body Font:** Asap Variable (self-hosted)

**Character:** Baloo 2 supplies the album's hand-lettered upright capitals
heavy, rounded terminals, high x-height, without tipping into cartoon. Asap's
softly rounded grotesque forms carry long-form prose at the same temperature, so
lettering and body text read as one hand.

### Hierarchy
- **Display** (800, `clamp(1.6rem, 4.2vw, 3.4rem)`, 0.92, `-0.015em`, caps): The
  name, inside the hero caption box. Once per page.
- **Headline** (800, `clamp(1.9rem, 4.2vw, 3.1rem)`, 0.95, caps): Tier headings,
  set on the sky above their panels as album furniture.
- **Title** (800, `1.05rem`, 1.05, caps): Panel caption strip headings.
- **Body** (400, `1.15rem`, 1.62): Prose inside text panels, two columns at
  roughly 68ch each so the measure stays readable while the panel fills like a
  page.
- **Label** (600, `0.8rem`, `0.02em`, caps): Caption boxes, nav, footer, strip
  subtitles.
- **Brand** (800, `1.35rem`, `-0.01em`, caps): The name in the header rail. This
  step exists only there.
- **Caption Role** (600, `clamp(0.75rem, 1.2vw, 0.95rem)`, `0.08em`, caps): The
  role line under the name in the hero caption box, which must scale with the
  display step above it.
- **Lede** (600, `clamp(0.85rem, 1.35vw, 1.05rem)`, `0.01em`, caps): The claim
  in the hero's second caption box. Sits between label and body so it reads at a
  glance without competing with the name.

### Named Rules
**The All-Caps Chrome Rule.** Every piece of interface furniture, nav, captions,
buttons, strips and captions, is uppercase. Sentence case is reserved for prose, so
narration and interface never blur together.

## Layout

One centred column, `max-width: 1360px`, with a `12px` gutter that doubles as the
album's page gutter and the grid gap. The page is a vertical stack of tiers.

- Tier 1: one full-width establishing panel at `21/9`.
- Tier 2 and 4: full-width text panels; prose in two columns, one below `820px`.
- Tier 3: four project panels at `4/3`.
- Tier 5: six life panels at `1/1`, three across.
- Tier 6: the closing panel carrying the actions.

Tier headings take `2rem` of space above and `0.35rem` below, space always
belongs to the heading that follows it.

**Responsive.** Tiers shed columns rather than reflowing internally: life goes
6→3→2→1, projects 4→2→1. Below `620px` the hero releases its fixed aspect so the
lede caption can sit beneath the picture inside the panel, and the rail stacks into
two compact rows. Panels never crop their captions to preserve an aspect ratio.

## Elevation & Depth

**There are no shadows in this system, and none may be added.** No `box-shadow`,
no blur, no glass, no gradient. Depth is produced by two devices only: flat
colour separation, and the black contour that bounds every shape. Layering is
expressed by the gutter between panels, not by lifting one above another.

### Named Rules
**The Flat Rule.** If a surface needs to feel separate, give it its own panel and
its own flat fill. Reaching for elevation means the layout has not been resolved.

## Shapes

Panels are square-cornered (`0`), they are frames on a page, not cards. Every
other bounded element takes `4px`: buttons, caption boxes, nav pills. There is
no rounded speech shape in this system, and adding one would promise a speaker
the panels do not have.

The border is the system's constant: `3px` solid ink on every bounded shape,
never wider. Engagement draws a **second** `3px` line just inside the first, on
an absolutely positioned `::after`, so the line reads heavier without the box
changing size. Widening the border itself would reflow everything below it.
Line weight never varies to signal importance, only to signal state.

## Components

### Buttons
- **Shape:** `4px`, `3px` ink border.
- **Primary:** adventure red field, paper text, `0.6rem 1.1rem`.
- **Secondary:** paper field, ink text, identical geometry.
- **Hover:** a second `3px` ink line appears inside the border via `::after`, so
  the button gains weight without resizing, the album's own emphasis gesture.
- **Focus:** `3px` ink outline at `3px` offset.

### Panels (signature component)
- **Corner:** square. **Border:** `3px` ink. **Background:** paper.
  **Overflow:** hidden.
- **Picture panel:** an image plus an optional caption strip separated by a `3px`
  ink rule.
- **Text panel:** padding `clamp(1.4rem, 3.2vw, 3rem)` block, `clamp(1.4rem, 4vw, 4rem)`
  inline; prose fills the panel in columns rather than floating a centred measure in it.
- **Link panel:** the whole panel is the anchor. Hover draws the inner ink
  line and floods the caption strip steel with paper text, no size change.

### Caption Boxes
Album yellow, `3px` ink border, `4px` radius, label type. Positioned absolutely
inside a panel for narration, or as a strip beneath a picture.

### Caption boxes

Album yellow, `3px` ink border, `4px` radius. Two variants: the identity box
carrying name and role, and `caption--lede`, set larger and parked in the
opposite corner of the hero with the claim. Both are narration.

**No speech balloons.** The page has narration and no speaker, so a tailed
balloon would be a lie about where the words come from. Captions only.

### Navigation
Label type in the yellow rail, sticky, `3px` ink bottom rule. Hover inverts to
ink field with yellow text; the current tier takes the steel field with paper
text via `aria-current="true"`, driven by an IntersectionObserver. Below `620px`
the rail stacks name over a single evenly spaced row of links.

### Icons
Authored inline SVG only, drawn at `2.2–2.5` stroke to sit with the `3px` panel
line. No icon library, no glyphs, no emoji.

## Do's and Don'ts

### Do:
- **Do** bound every new element with the same `3px` ink line.
- **Do** express state with the inner `::after` line and flat colour fill
  never by widening a border, which reflows the page.
- **Do** author a new clear-line illustration when a section needs an image, and
  ship it as a raster asset at panel aspect.
- **Do** keep all interface text uppercase and all prose sentence case.
- **Do** let panels grow to fit their captions rather than clipping them.

### Don't:
- **Don't** add a shadow, gradient, blur, or glass surface. The world has none.
- **Don't** introduce a second line weight for decoration.
- **Don't** use grey text for de-emphasis.
- **Don't** put a second red element in a viewport that already has the primary
  action.
- **Don't** substitute a gradient, an icon tile, or a stock photograph where a
  clear-line panel belongs.
- **Don't** set `height` on a panel image without releasing the `height`
  attribute's presentational pixel value first, `aspect-ratio` will not govern
  until `height: auto` is set.
