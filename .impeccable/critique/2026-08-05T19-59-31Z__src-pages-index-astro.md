---
target: src/pages/index.astro
total_score: 25
max_score: 36
na_heuristics: 10
p0_count: 1
p1_count: 2
timestamp: 2026-08-05T19-59-31Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser evidence, isolated)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Rail active state is solid now, but panels render as empty paper boxes with orphaned caption strips until images resolve, and the `atEnd` fallback marks Contact current on a window taller than the page. |
| 2 | Match System / Real World | 2 | The tier is headed "Projects" over four things PRODUCT.md forbids presenting as projects, and every panel shows an external-link icon while no link opens a new tab. |
| 3 | User Control and Freedom | 3 | No `scroll-margin-top` anywhere, so every rail jump parks the heading under the sticky rail; on mobile a Contact tap is a 5,000px smooth whip-pan. |
| 4 | Consistency and Standards | 3 | The hero art breaks the flat-fill rule the other ten panels keep; no `h1` exists; "Get In Touch" is a `<p>` at headline size. |
| 5 | Error Prevention | 3 | `mailto:` is the only email path; a visitor with no mail client gets a dead click, though the address is at least visible as the label. |
| 6 | Recognition Rather Than Recall | 3 | The claim appears once, in the hero, and is never restated at the contact tier five screens later. |
| 7 | Flexibility and Efficiency | 2 | Four rail links are the only accelerator: no contact affordance above the fold, no CV, no copy-address. On a surface whose success is "they email him", this is the money heuristic. |
| 8 | Aesthetic and Minimalist Design | 3 | Genuinely beautiful, but the hobby material occupies about half the mobile page and states itself twice (prose panel plus six caption strips). |
| 9 | Error Recovery | 3 | The 404 is on-world and charming, but renders `<Rail>` without `home`, so a lost visitor gets no nav and no contact route. |
| 10 | Help and Documentation | n/a | A single page, eleven links, no state. Nothing to document. |
| **Total** | | **25/36** | **Acceptable, top of band (69%)** |

## Design Specificity Verdict

**LLM assessment: authored for this product, emphatically.** This is the rare portfolio that could not be re-skinned onto another business without demolition. The composition is load-bearing: tiers rather than sections, a 21:9 establishing panel, the name in a yellow caption box where a comic would put narration, six 1:1 life panels given a whole tier. Eleven bespoke clear-line illustrations mean the visual language cannot be lifted. Swap in another engineer and every panel is wrong.

Two things dent the claim:

- **The hero art is off-system.** Verified directly against the PNG: the sky runs `rgb(91,190,252)` at y=20 to `rgb(119,203,254)` at y=300. That is a gradient, in a system whose first commitment is flat unmodulated fills, and it is not `--sky #6fc0f2` either, so the panel's sky and the page ground it sits on are two different blues. There is soft shading on the shirt and jaw and stippled hatching in the beard, a second line weight. The ten other panels are properly flat. The one image every visitor sees is the one breaking the rule the system is named after.
- **The chrome underneath is generic.** Remove the eleven PNGs and what remains (sticky yellow bar, name left, four uppercase links right, footer bar, two buttons) is a default. The illustrations carry 100% of the specificity; no chrome element contributes any.

**Deterministic scan.** The CLI detector returned zero findings across all five markup files, exit 0. That result is real, not a broken scan: Assessment B verified `.astro` support and proved the pipeline with an in-project canary that correctly returned 3 findings and was deleted. But it is weak evidence, because CSS files were excluded and essentially all of this project's styling lives in `src/styles/global.css`.

The in-page detector found 3 anti-patterns, all warnings:

| Rule | Detail | Element |
|---|---|---|
| `all-caps-body` | uppercase on 58 chars of body text | `p.caption--lede` |
| `low-contrast` | 4.1:1, needs 4.5:1, `#f5f1e6` on `#d93a2b` | `a.btn--primary` |
| `all-caps-body` | uppercase on 38 chars of body text | `.foot__inner > span` |

The lede hit is a true positive and the more interesting one: DESIGN.md's All-Caps Chrome Rule says chrome is uppercase and prose is sentence case, and the lede is 58 characters of prose wearing chrome's clothes. The footer span is legitimately chrome.

**Visual overlays: none.** No browser-automation tool is exposed this session, so all browser work ran headless over CDP. There is no live tab with overlays for you to look at. Everything below is machine-measured instead.

**Measured evidence.**

| Pair | Ratio | AA normal | AA large |
|---|---|---|---|
| ink on yellow | 12.49 | pass | pass |
| ink on paper | 16.86 | pass | pass |
| ink on sky | 9.51 | pass | pass |
| paper on steel (active nav, hover strip) | **4.30** | **fail** | pass |
| paper on red (email button) | **4.05** | **fail** | pass |

Tap targets at 390px: all four rail links are 25px tall against the 44px guideline, and "Work" is 43px wide as well. The two contact buttons pass at 52px. No horizontal overflow at 320, 390 or 768, though at 320 the email button's right border sits at x=322 and is clipped by two pixels. Focus is clean: all 13 tabbable elements take the 3px ink outline at 3px offset, tab order follows DOM order, and the ink-on-ink hover case is fine because the offset puts the ring on the rail's yellow. Reduced motion is correct: `.cut` is opt-in via `no-preference`, so nothing can stick hidden, and the scroll-spy keeps working because it is no longer motion-dependent. Images ship 483 KB at 1440px and 324 KB at 390px across 12 requests.

Heading structure: 13 headings, well nested, no skips, and **no `h1` at all**. The name is a `span`, a rail link, a footer span, and a `<title>`, never a heading.

## Overall Impression

The album holds. Someone lands on this page and knows within a second that a person made it on purpose, which is exactly the asset a recruiter on tab seven cannot get from the other six tabs. The craft in the system is real: the mobile hero re-crop, the caption-box grammar, the alt text.

What the page has not resolved is that it is a **sales document**, and it currently buries its two strongest sales assets. The employer name never appears before the scroll, and the moment of conversion is the only undecorated rectangle on a page whose entire argument is that its author decorates nothing carelessly. The single biggest opportunity is to make the first line and the last panel work as hard as the middle five tiers already do.

## What's Working

1. **The hero caption box does three jobs in one shape.** Name at display scale, role, and the claim in a second box in the opposite corner, all inside the establishing panel. The whole identity lands with no separate hero section spent on it, and the decision to make the lede a caption rather than a balloon is correct: no speaker exists, so no tail.
2. **The mobile hero re-crop is real craft.** Below 620px the panel releases its aspect ratio so the lede drops beneath the picture instead of being clipped, and `object-position` re-anchors to keep him and the laptop in one frame. Most sites clip the claim here. The comment in the CSS even records why the crop moved.
3. **The alt text is the best-written copy in the repo.** Each illustration is described as an illustration, with subject and medium. A screen-reader user gets the album, not a list of filenames.

## Priority Issues

### [P0] The employer never lands before the scroll
**What:** PRODUCT.md Principle 2 requires senior, C#-led, decade-plus, currently at a fintech, to land pre-scroll. The first viewport at 1440x900 and at 390x844 delivers the name, "SENIOR SOFTWARE DEVELOPER", and "OVER A DECADE IN C#, AND THE INFRASTRUCTURE UNDERNEATH IT." netwealth appears nowhere. It sits in paragraph two of the two-column prose panel, below the fold on every device tested.
**Why it matters:** the employer is the credibility anchor. A decade in C# without a named regulated employer is a claim; with netwealth attached it is a fact the recruiter can verify in the tab she already has open. This is the surface's stated success condition and it currently fails.
**Fix:** put it in the role line. `src/content/intro.md:3` becomes `role: Senior Software Developer at netwealth`, which flows straight to the caption box with no CSS change. Extending the lede is the alternative.
**Suggested command:** `/impeccable clarify`

### [P1] The closing panel is the flattest thing on the page
**What:** the contact tier is an undecorated text panel with a headline-sized `<p>` and two buttons. It is the only tier with no illustration and no narration.
**Why it matters:** peak-end says the last thing felt is disproportionately what is remembered, and it is also the only screen where a decision happens. It currently offers zero reassurance: no restatement of the claim, no context, nothing to convert on but two labels.
**Fix:** make it the twelfth panel. A drawn closing scene with the buttons in a caption strip beneath it, plus one yellow caption box restating the claim with the employer in it.
**Suggested command:** `/impeccable bolder`

### [P1] The hobby tier outweighs the professional case and blocks the ask
**What:** on mobile the page is about 5,200px tall and "Away From The Keyboard" runs roughly y=2450 to y=5100, about half of it, sitting between the evidence and the contact tier. The prose panel then repeats what the six caption strips already say, in places near-verbatim.
**Why it matters:** PRODUCT.md Principle 4 says the human half stays subordinate to the professional claim. By area it is currently the dominant claim, and it is the wall between a recruiter and the email button.
**Fix:** drop the prose panel and keep the six captions, and hold the life tier at two columns below 620px instead of collapsing to one. That reclaims roughly 2,000px of mobile scroll.
**Suggested command:** `/impeccable distill`

### [P2] Two contrast failures and a missing `h1`, both confirmed by measurement
**What:** paper on red measures 4.05:1 on the email button (the in-page detector independently flagged it at 4.1:1) and paper on steel measures 4.30:1 on the active nav pill and the project hover strip. Both fail AA for normal text. Separately the page has no `h1`, "Get In Touch" is a `<p>`, so heading navigation never reaches the contact tier, and the four rail links are 25px tall against a 44px target.
**Why it matters:** PRODUCT.md commits to AA contrast and keyboard operability. A screen-reader user pressing H to survey the page never finds the one thing they came for.
**Fix:** promote the hero name to `h1` and "Get In Touch" to `h2`, both keeping their classes so nothing moves visually. Darken the red and the steel far enough to clear 4.5:1, or invert the button text to yellow. Raise mobile nav padding to about `0.5rem 0.4rem`.
**Suggested command:** `/impeccable audit`

### [P2] "Projects" over-promises, and the external icon lies
**What:** the heading says "Projects" over four employer and personal links that PRODUCT.md explicitly forbids dressing up as case studies. Every project panel shows an external-link icon, and none of the four anchors, nor the footer Blog link, carries `target="_blank"`.
**Why it matters:** the heading creates the one expectation the content is contractually barred from meeting, so the tier reads as thin rather than as what it is. And the icon is a signifier lying about behaviour: a recruiter clicking Blog expects a new tab and instead loses the portfolio.
**Fix:** rename the heading to something the panels over-deliver against, such as "Elsewhere". Add `target="_blank"` alongside the existing `rel="noopener"`.
**Suggested command:** `/impeccable clarify`

## Persona Red Flags

**The Shortlist Recruiter (project-specific, from PRODUCT.md).** Nine seconds, CV open alongside. She reads the caption box, gets "Senior Software Developer" and "over a decade in C#", and no employer. She scrolls once into "The Work", set in two columns, and her eye runs down the left column: the netwealth and MyNetwealth and team-of-six sentence is the third item down, and the GitHub migration paragraph she would care about is in a right column she never reaches. She scrolls again to "Projects", finds a dog-walking business, and forms exactly the judgement the page was built to prevent.

**Casey (distracted mobile user).** The email button sits around y=5,150 on a 390x844 phone, roughly six screens down. Between her and it are six hobby panels. Her only shortcut is a 25px-tall "CONTACT" in the rail, which triggers a 5,000px smooth whip-pan and lands the tier under the sticky rail because nothing sets `scroll-margin-top`. On a real connection the six lazy life panels render as empty paper boxes with orphaned caption strips until they resolve.

**Sam (accessibility-dependent).** Presses H to survey headings and hears "The Work", "Projects", "Away From The Keyboard", then ten panel titles. No page heading and no contact heading, so the one thing he came for is invisible to heading navigation. Tabbing instead, he reaches Contact, is dropped under the sticky rail, and tracks an active pill measured at 4.30:1. He also hears "Away From The Keyboard" twice, once as the `h2` and once as the `aria-label` on the following tier.

## Minor Observations

- **The One Red Rule breaks at the foot of the page.** At 1440x900 the contact viewport holds the red email button plus the red paddleboard deck and the red hob knobs from the life tier above. DESIGN.md says a second red in a viewport means one of them is wrong; there are three.
- **`src/content/contact.md`'s body prose is never rendered.** Only its frontmatter is imported. Adam can edit that markdown freely and nothing changes, which quietly breaks Product Principle 5.
- **`.cut` hides the closing tier for over half a second after paint** (`--cut:5` at 110ms steps, `backwards` fill). The CTA is the last thing on the page to become visible.
- **The hero aspect snaps from 21:9 to 16:10 at 1000px**, about a 30% jump in height across one pixel of resize.
- **`/android-chrome-192x192.png` (39 KB) is fetched on every page load** at both widths, pulled by the webmanifest. Pure waste for a normal visit.
- **The 404 dead-ends.** It renders `<Rail>` without `home`, so there is no nav and no contact route, only "Back to the first page".
- **The `atEnd` scroll-spy fallback** marks the last tier current whenever the viewport is within 80px of the document bottom, which on a window taller than the page fires while the visitor is at the top.
- One inline `style="margin-left:auto"` on the footer Blog link is the only inline style in the file.

**False positives, called out:** an apparent 320px horizontal overflow was Assessment B's own injected overlay, re-measured clean. The ink-on-ink focus ring is not a defect: the 3px offset places it on the rail's yellow, verified at 6x zoom. The empty CLI result is genuine, proven with a canary, but covers markup only.

## Questions to Consider

1. If the recruiter reads exactly one line, it is the role line under the name. Why is that line "SENIOR SOFTWARE DEVELOPER", which is already in the tab title, the footer, and the CV she has open, instead of the one thing only this page can tell her, which is where?
2. The tier is called "Projects" and PRODUCT.md forbids it from containing projects. Why keep a heading whose only function is to create an expectation the content may not meet?
3. Eleven illustrated panels, and the twelfth, the one where the visitor decides, is a blank rectangle. If the page's argument is that this person makes things carefully, what does the closing panel argue?
4. The hobby tier says everything twice and takes half the mobile page. Would three life panels with no prose block be more persuasive than six with one, given its job is to be subordinate?
5. The hero is the only illustration with a gradient, soft shading and a second line weight, and it is the one every visitor sees. Is the ligne claire commitment real, or is it a rule the ten cheap panels keep and the expensive one is exempt from?
