# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro. Confirmed by the user 2026-08-04, replacing the incumbent Gatsby 3 / React 17 / `@lekoarts/gatsby-theme-cara` stack. Content stays in Markdown so it remains editable without touching markup. Static output, host-agnostic (the repo currently carries Netlify and Gatsby Cloud adapters from the old stack; no deploy target has been reconfirmed).

## Users

Hiring managers, engineering leads, and technical recruiters vetting Adam Worley for a software engineering role. They arrive from a CV, a LinkedIn or GitHub profile, or a direct link; they are scanning several candidates in sequence and give the page seconds before deciding whether it is worth more. Their job: establish quickly that this is a credible, senior, long-tenured engineer, then find a way to make contact.

## Product Purpose

A single-page personal portfolio for Adam Worley. It exists to convert a name into a credible professional impression and a contact. Success is a visitor who leaves understanding Adam's depth (a decade-plus, C#-led, infrastructure-capable), and who either emails him, opens his GitHub, or reads the blog.

## Positioning

A working senior engineer at a regulated fintech, not a design-forward personal brand. The differentiator is longevity and breadth in one credible direction: a decade of C# depth extended outward into Terraform, container orchestration, and Go tooling, backend and platform substance rather than front-end novelty. Currently at netwealth, a fintech in pensions and investments.

## Operating Context

Read in seconds, often on mobile, frequently alongside a CV and a GitHub profile open in adjacent tabs. Visitors are cross-referencing rather than reading linearly, so the same facts must be findable without scrolling discipline. Outbound links (netwealth, GitHub, the blog, past employers) are part of the evaluation path, not decoration.

## Capabilities and Constraints

- Single page. No CMS, no auth, no forms, no server. Static build.
- All content lives in four content units carried over from the incumbent site: intro, about, projects, contact.
- Contact is an email address (`hello@adamworley.com`) and a GitHub profile (`github.com/AdamWorley`). There is no contact form and no phone number.
- A 404 route must exist.
- The blog lives on a separate site (`blog.adamworley.com`) and is linked, not embedded.
- Undecided: deploy target, analytics (the old site had an optional Google Analytics ID via `GOOGLE_ANALYTICS_ID`).

## Brand Commitments

Name: Adam Worley. Voice is plain, first-person, understated, and states experience without superlatives or sales language. It reads as someone talking, not as a CV: contractions are natural, and em dashes are banned outright because Adam finds they read as machine-written. No tagline, logo, or wordmark exists. Existing icon and manifest assets in `static/` are generic geometry inherited from the starter theme and are not binding identity.

## Evidence on Hand

Job title confirmed 2026-08-05: **Senior Software Developer**. On the same date the user asked for the site copy to be rewritten, so it is no longer verbatim from the incumbent site, it was tightened at the "rewrite, same facts" level, cutting filler without adding claims. The underlying facts below are unchanged and still binding:

- Intro copy: over a decade of experience; primary expertise C#; also Terraform, container orchestrators, Go tooling, various front-end frameworks; currently at netwealth (fintech, pensions and investments, hybrid of digital tools and professional advisers).
- About copy: indoor rock climbing, running, films, games, badminton, stand-up paddleboarding, coffee. (Yoga was in the incumbent copy and was dropped on 2026-08-05 at Adam's request.)
- Four links presented as projects: Crawley Dog Walkers (wife's dog walking business), Netwealth (current employer), AJW Group (previous employer), Blog.
- Contact: `hello@adamworley.com`, `github.com/AdamWorley`.

Confirmed by the user on 2026-08-05, and the strongest specifics on the site:

- **MyNetwealth**, a netwealth product where clients track their assets. Adam led the team of six that built it.
- **Azure DevOps → GitHub migration**, Adam managed it, to run pipelines in GitHub Actions and receive new platform features sooner than Azure DevOps delivered them.
- **Platform team**, Adam is a member, and the person colleagues bring problems to: pipelines and architectural decisions most often, Umbraco recently.

The MyNetwealth team size (six) is the only number confirmed. No other metrics, dates or outcomes were given, and none may be supplied.

Adam supplied a personal photo reference on 2026-08-05, so the illustrated figure on the site is drawn from life and depicts him. The photo itself is not published; only the drawn likeness appears. Running was confirmed as a hobby on the same date and replaced yoga in the personal panels.

Not available and must not be fabricated: testimonials, named clients, metrics, case studies, code samples, job titles, employment dates, press. The four "projects" are employer and personal links, not shipped project case studies, they must not be dressed up as portfolio work with invented outcomes.

## Product Principles

1. **Credibility over expression.** The visitor is assessing a hire. Anything that reads as decoration at the expense of substance costs more than it gains.
2. **Seconds, not minutes.** The core claim, senior, C#-led, decade-plus, currently at a fintech, must land before any scrolling.
3. **Never inflate the evidence.** Four links and two paragraphs are what exists. The design must feel complete at that volume rather than implying missing content.
4. **The human half is real, not filler.** The climbing, running, and paddleboarding material is genuine personality and differentiates a scanned candidate; it stays, subordinate to the professional claim.
5. **Content stays editable.** Copy lives in Markdown that Adam can change without opening a component.

## Accessibility & Inclusion

No product-specific standard was established. Baseline expectation: keyboard-operable links, visible focus, WCAG AA contrast, and full comprehension with motion disabled, the incumbent site's parallax and floating shapes are motion-heavy and must not be reproduced as a hard dependency.
