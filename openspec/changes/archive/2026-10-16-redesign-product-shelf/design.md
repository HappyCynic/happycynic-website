# Design

## Context

The site is two pages (`index.html`, `about.html`) using the Tailwind CDN plus
`css/styles.css`, which overrides some Tailwind colours with values that are not brand colours.
The Happy Cynic design system lives in `HappyCynic/.github/design-system/` (exported from the
design-system editor) and is meant to be copied into a repository as `design-system/` and kept
in sync by the agent pipeline. This repository has no copy yet.

The maintainer reviewed three structures on the redesign canvas and chose **Product Shelf**:
products lead, each with a "does / doesn't" pair that carries the brand's two halves.
The home page mockup is on the canvas (`r2/Shelf.dc.html`).

Maintainer decisions on the open questions:

- No product pages: each shelf panel links straight to the product's own home (GitHub for
  Private iCloud MCP, preppd.app for Preppd).
- Notes ships later, in its own change.
- Design-system additions land in `HappyCynic/.github` **before** the site is rebuilt.
- Preppd's panel links straight out to https://preppd.app; no Preppd page here.
- Dark theme follows the system setting, plus a header toggle that remembers the choice.
- The hero keeps "Useful Software. Skeptically Designed."
- Private iCloud MCP's Does / Doesn't lines are approved as drafted; Preppd shows no pair until
  the maintainer supplies its lines.

## Goals / Non-Goals

**Goals:**

- A site built only from design-system tokens and components, so it can't drift again.
- One clear job per page: the shelf shows the products and sends visitors to them, Studio
  introduces us.
- Existing URLs keep working (`/`, `/index.html`, `/about.html`).
- Light and dark themes at WCAG AA, a visible focus ring, layouts that work at phone width.

**Non-Goals:**

- Notes / writing pages and their nav item (a later change).
- Product pages on happycynic.com; the products' own homes (GitHub, preppd.app) carry the
  detail.
- Preppd's own brand assets beyond its panel.
- A build step, framework, templating or server-side code.
- Changing hosting files or `.github/workflows/` (see Open Questions).

## Decisions

### Site map and URLs

| URL | File | Purpose |
|---|---|---|
| `/` | `index.html` | The shelf: hero, product panels, Studio teaser |
| `/studio/` | `studio/index.html` | Studio, principles, founder |
| `/about.html` | `about.html` | Redirect stub to `/studio/` |

A folder with its own `index.html` gives clean URLs on GitHub Pages without a build step. There
are no product pages and no `/products/` index: the home page *is* the product index, the
Products nav link goes to `/#products`, and each panel links out to the product's own home.

Alternatives considered: a page per product, and a `/products/` index. The maintainer chose
to send visitors straight to each product's home (its GitHub README is the documentation),
which keeps one place to update when a product changes.

### Asset paths are root-relative

Every page references assets as `/design-system/…`, `/css/site.css`, `/images/…`, so the
shared header and footer markup is byte-identical on every page, whatever its depth. This works
on happycynic.com (custom domain at the root) and under `npm run start` (live-server serves the
repository root). It would break on a `*.github.io/<repo>/` project URL, which the site does not
use.

### The redirect stub

GitHub Pages has no server redirects. `about.html` becomes a minimal page with
`<meta http-equiv="refresh" content="0; url=/studio/">`, `<link rel="canonical"
href="https://happycynic.com/studio/">` and a visible link for anyone whose browser ignores
the refresh. It carries the shared head but not the header or footer; the shared-layout
requirement exempts it.

### Head assets, no Tailwind

Every content page loads, in order: the favicon, Inter from Google Fonts,
`/design-system/tokens.css`, `/design-system/components/bundle.css`, `/css/site.css`, and an
inline theme script (below). The Tailwind CDN script and `css/styles.css` are removed:

- the CDN build is not meant for production and its preflight fights the design system's base
  styles;
- every value the pages need exists as a token or an `hc-` component;
- `css/site.css` holds only page layout (grids, section bands, breakpoints) and uses tokens,
  never literal colours.

### Header and footer

The compact header (new `hc-header--compact`): the full logo at 60px high on the left, linking
to `/`; on the right the nav **Products** (`/#products`), **Studio** (`/studio/`), the theme
toggle, and **GitHub** as a small primary button (`hc-btn--primary hc-btn--sm`). That button is
the one primary per view on the home page, so the hero has no primary button. On dark grounds
the face replaces the full logo, as the design system requires. The current page's link
carries `aria-current="page"`. At phone width the nav wraps under the logo.

The footer is `hc-footer` unchanged: "© 2026 Happy Cynic Software LLC" and the tagline.

### Theme: system setting plus a toggle

The design system's `ThemeToggle` and Themes rules define this; the site uses its two scripts
unchanged:

- A tiny inline script in `<head>`, before the stylesheets, reads `localStorage` key
  `hc-theme` (wrapped in try/catch), falls back to `prefers-color-scheme`, and sets
  `data-theme` on `<html>` before first paint, so there is no flash of the wrong theme.
- The toggle is a real `<button>` with `aria-pressed` and the accessible name "Dark theme". It
  starts `hidden` and the script at the end of `<body>` reveals it, so no-JS visitors never see
  a control that does nothing.
- Without JavaScript the page stays light. Duplicating every dark token in a
  `prefers-color-scheme` media query would let the two copies drift; the design system chose
  not to.

This is the only JavaScript on the site.

### Home page (the shelf)

1. **Hero** (`hc-hero`): eyebrow "Happy Cynic Software", `h1` in the new `display-xl` size,
   lead paragraph. No buttons (the header's GitHub button is the view's primary).
2. **Products** (`id="products"`): one `ProductPanel` per product, stacked, Private iCloud MCP
   first:
   - Private iCloud MCP: "Early Release" teal badge, pitch, a Does/Doesn't pair, a note that
     it is open source under Apache-2.0, **View on GitHub** (secondary, to
     https://github.com/HappyCynic/pv-icloud), and the Apple trademark notice. Media slot: a
     neutral padlock icon on `teal-tint`; never the Happy Cynic face.
   - Preppd: "Coming Soon" sunny badge, pitch, no Does/Doesn't pair until the maintainer
     supplies its lines, **Explore Preppd**
     (secondary, to https://preppd.app). Media slot: the Preppd logo the maintainer supplied
     (lockup with the "PREPPD" wordmark and "Sanity, Packed"), stored as
     `images/preppd-logo.svg`, on a fixed white ground in both themes because the logo's navy
     wordmark is unreadable on dark surfaces. Its colours live as inline `fill` attributes, not
     a `<style>` block, and the editor's C2PA metadata is dropped, as the design system does
     for its own logos. Its `alt` text is "Preppd".
3. **Studio teaser**: one headline, one line, a link to `/studio/`.

### Studio page

Replaces About. It keeps the About copy's substance (who we are, why, the founder) and adds the
four design-system principles as a short list. The founder section may speak as *I* only as a
signed note, per the voice rules.

### Design-system additions (land first, in `HappyCynic/.github`)

| Addition | What it is |
|---|---|
| `display-xl` type style | 72px / 0.98, 700, -0.03em; one per page, the home hero only. At phone width it drops to `display` (48px). |
| `SiteHeader` compact variant | `hc-header--compact`: logo left (60px), nav right, wraps on phones. Same logo-swap rule in dark. |
| `ProductPanel` | The shelf's large product card: media slot (5 of 12 columns) plus body, `radius-lg`, `border` hairline, stacks on phones. Product colours only inside the media slot, as `ProductCard` already rules. |
| `DoesDoesnt` | Two lists side by side inside a panel: "does" items with a check in `ink`, "doesn't" items with a cross in `teal-ink`. Each item is text; colour and icon only reinforce it. |
| `ThemeToggle` | A `<button aria-pressed>` with an icon and an accessible name, `focus` ring, and the storage contract above. |

These are additive; nothing existing changes meaning.

### The `design-system/` copy

The copy is added with `sync-design-system` from `HappyCynic/.github` at the commit that carries
the additions; `design-system/SOURCE` records it. `/design-system/` goes into `CODEOWNERS` and
CLAUDE.md tells agents never to edit it by hand.

## Risks / Trade-offs

- [Root-relative paths break on a non-root host] → The site only runs at happycynic.com and
  live-server; noted in README.
- [Removing Tailwind touches every class on both pages] → The pages are rewritten anyway; no
  Tailwind class survives.
- [Meta-refresh redirects are weaker for SEO than a 301] → The canonical link points at
  `/studio/`; GitHub Pages offers nothing better without a build step.
- [Blocked on an upstream change] → The site change does not start until the design-system
  additions are merged and synced.
- [The theme toggle adds JavaScript to a no-JS site] → One small inline script; the site works
  fully without it.

## Open Questions

Resolved on issue #6: the hero headline, Private iCloud MCP's Does / Doesn't copy, and the
workflow change. Still open:

1. **Preppd's Does / Doesn't lines.** Added to its panel once the maintainer supplies them.
2. **Preppd logo wordmark font.** The logo sets "PREPPD" and "Sanity, Packed" as live
   Helvetica text, which falls back to Arial where Helvetica is missing. An outlined-text
   export from the source file would render identically everywhere.
