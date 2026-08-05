# adamworley.com

Personal portfolio for Adam Worley, a software engineer with over a decade of
experience in C#, infrastructure and cloud tooling.

Built with [Astro](https://astro.build). Static output, no framework runtime;
the only client-side JavaScript is a small `IntersectionObserver` that marks the
current section in the navigation.

## Design

The site is built as a **ligne claire comic album page**, one page read tier by
tier, every piece of content inside a panel bounded by the same black line.

- `PRODUCT.md`, durable product truth: who the site is for and what must not change.
- `DESIGN.md`, the design system: tokens, type ramp, component rules.
- `.impeccable/`, design records: the approved comp, craft references, surface brief.

Before changing the look, read `DESIGN.md`. The short version: one unvarying 3px
black line on every shape, flat unmodulated colour fills, and no shadows,
gradients or blurs anywhere.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built site locally
```

Requires Node 22 (see `.nvmrc`).

## Editing content

All copy lives in Markdown and JSON, no components need touching.

| File | Contents |
|---|---|
| `src/content/intro.md` | Name, role, the hero balloon line, and the intro prose |
| `src/content/about.md` | The "Away From The Keyboard" prose |
| `src/content/contact.md` | Email address and GitHub link |
| `src/content/panels.json` | Project links and personal panels, with image paths and alt text |

Panel illustrations live in `src/assets/panels/` as full-resolution PNG, each
with its generation prompt embedded in the file and repeated in a `.png.json`
sidecar. Astro's `<Image />` derives the sized, hashed WebP the browser gets, so
there is one master per panel and no hand-resizing. `panels.json` refers to them
by filename; drop a new PNG in that folder and reference it the same way.

## Deploy, Cloudflare Pages

Static site, no adapter or Functions required.

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 22 (`.nvmrc` is respected; otherwise set `NODE_VERSION=22`) |

`public/_headers` ships the cache and security headers: hashed `/_astro/*`
assets are immutable for a year (every processed image lands there), and HTML
always revalidates so a content edit goes live on the next request.

`dist/404.html` is served automatically for unmatched routes, no `_redirects`
file is needed.

## Licence

0BSD.
