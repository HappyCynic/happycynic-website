# Proposal

## Why

happycynic.com is one home page and an About page, styled with ad-hoc Tailwind classes that
drift from the Happy Cynic design system: a green accent (`emerald-400`) where the brand never
blends its two halves into green, a yellow that is not `sunny`, no `h1` on the home page, no
dark theme, no focus ring and a stale copyright year. The products, the reason the studio
exists, sit in two loose text bands with no room to explain themselves.

The maintainer chose the "Product Shelf" concept from the redesign canvas: the products are the
brand, and each one says plainly what it does (the happy half) and what it refuses to do (the
cynic half). There is no GitHub issue yet; the maintainer asked for this change directly. An
issue should be opened and linked before the `agent:implement` stage.

## What Changes

- **New information architecture.**
  - `/` becomes the product shelf: hero, one large panel per product, a short Studio teaser.
  - Products get no pages of their own (maintainer decision): Private iCloud MCP's panel links
    straight to its GitHub repository, Preppd's to https://preppd.app.
  - `/studio/` is a new page that replaces About: the studio, its principles and the founder.
  - `about.html` becomes a stub that forwards to `/studio/`, so existing links keep working.
  - Notes (writing) is out of scope; a later change adds `/notes/` and its nav item.
- **New shared header, navigation and footer** (changes every page):
  - a compact header with the full logo on the left and the nav on the right: **Products**,
    **Studio** and a small primary **GitHub** button;
  - the footer keeps the legal line and tagline, with the current year.
- **Built on the design system, not Tailwind.** Pages load the managed `design-system/` copy
  (`tokens.css`, `components/bundle.css`) plus a small `css/site.css` for page layout. The
  Tailwind CDN script and the old `css/styles.css` are removed.
- **Dark theme.** Pages follow the visitor's system setting, and a header toggle lets them
  override it; the choice is remembered in the browser. Without JavaScript the system setting
  still applies.
- **Depends on design-system additions first** (maintainer decision): a compact `SiteHeader`
  variant, a `display-xl` type size, a `ProductPanel` and a `DoesDoesnt` component, and a
  `ThemeToggle`. They land in `HappyCynic/.github` before this change is implemented; see
  design.md.

Pages touched: `index.html` (rewritten), `about.html` (becomes a redirect stub) and a new
`studio/index.html`. The shared head, header, navigation and footer change on every page.

## Capabilities

### New Capabilities

None. Everything stays in the `site` capability.

### Modified Capabilities

- `site`: the shared layout (head assets, header, nav, footer), the home page and the Private
  iCloud MCP entry change; the About page is replaced by a Studio page plus a redirect stub; new
  requirements for the theme and the design-system copy.

## Impact

- **Files:** `index.html`, `about.html`, new `studio/index.html` and `css/site.css`; `css/styles.css` removed; `design-system/` added as a
  managed copy.
- **Dependencies:** the Tailwind CDN script is removed. Inter from Google Fonts stays. No new
  dependencies, no build step.
- **Hosting files:** unchanged (`CNAME`, `.nojekyll`, `.well-known/security.txt`).
- **Workflow:** keeping `design-system/` in sync needs `design_system: true` in
  `.github/workflows/agent.yml`. CLAUDE.md allows workflow edits only when an issue explicitly
  asks, so the issue for this change must say so, or the copy is refreshed by hand with
  `sync-design-system`.
- **Upstream:** blocked on the design-system additions being merged in `HappyCynic/.github`.
