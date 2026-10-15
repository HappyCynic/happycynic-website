# Tasks

## 0. Prerequisites (outside this repository)

- [ ] 0.1 Design-system additions merged in `HappyCynic/.github`: `display-xl`, the compact
      `SiteHeader` variant, `ProductPanel`, `DoesDoesnt` and `ThemeToggle` (design.md); verify
      `design-system/components/bundle.css` there defines `hc-header--compact`, `hc-panel` and
      `hc-dd`
- [ ] 0.2 A GitHub issue for this change exists and is linked from proposal.md; it states
      whether `.github/workflows/agent.yml` may set `design_system: true`
- [ ] 0.3 The maintainer has answered design.md's Open Questions (hero headline, Does /
      Doesn't copy, Preppd icon)

## 1. Design-system copy

- [ ] 1.1 Add `design-system/` with `sync-design-system` from the pinned `HappyCynic/.github`
      commit; verify `design-system/SOURCE` names that commit
- [ ] 1.2 Add `/design-system/` to `.github/CODEOWNERS` and a CLAUDE.md rule to follow
      `design-system/README.md` and never edit the copy by hand
- [ ] 1.3 If the issue allows it, set `design_system: true` in `.github/workflows/agent.yml`;
      otherwise note the manual sync in README.md

## 2. Shared layout and theme

- [ ] 2.1 Write `css/site.css` (SPDX header): section bands, panel and step grids,
      breakpoints, and the `prefers-color-scheme` mapping of dark tokens; verify it contains no
      literal colours
- [ ] 2.2 Write the shared head (favicon, Inter, tokens.css, bundle.css, site.css, inline theme
      script with try/catch around storage) and the compact header and footer markup
- [ ] 2.3 Add the theme toggle: hidden until the script runs, `aria-pressed`, accessible name;
      verify the choice persists across pages and that with JavaScript disabled the page still
      follows the system setting
- [ ] 2.4 Delete `css/styles.css` and remove the Tailwind CDN script; verify no page references
      either

## 3. Pages

- [ ] 3.1 Rewrite `index.html` as the shelf: hero with the `h1`, Private iCloud MCP and Preppd
      panels with Does / Doesn't pairs, Studio teaser; shared head, header (`Products` current)
      and footer
- [ ] 3.2 Create `products/pv-icloud/index.html` (SPDX header): breadcrumb, hero, Does /
      Doesn't band, getting-started steps from the pv-icloud README, status, license and
      trademark notice; shared head, header and footer
- [ ] 3.3 Create `studio/index.html` (SPDX header) from the About copy plus the four
      principles; shared head, header (`Studio` current) and footer
- [ ] 3.4 Replace `about.html` with the redirect stub (meta refresh, canonical link, visible
      link to `/studio/`)
- [ ] 3.5 Update README.md's description of the pages and the root-relative path note

## 4. Checks

- [ ] 4.1 Run `openspec validate --all --strict` and review every changed page: links and
      image paths resolve, the head, header, navigation and footer are identical on
      `index.html`, `products/pv-icloud/index.html` and `studio/index.html`, headings stay in
      order, images have meaningful `alt` text, no em dashes, and each page works at phone
      width in both themes (`npm run start`, narrow viewport)
