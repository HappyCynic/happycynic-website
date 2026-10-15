# Tasks

## 0. Prerequisites (outside this repository)

- [ ] 0.1 Design-system additions merged in `HappyCynic/.github`: `display-xl`, the compact
      `SiteHeader` variant, `ProductPanel`, `DoesDoesnt` and `ThemeToggle` (design.md); verify
      `design-system/components/bundle.css` there defines `hc-header--compact`, `hc-panel` and
      `hc-dd`
- [x] 0.2 A GitHub issue for this change exists and is linked from proposal.md (#6); it
      authorizes the `.github/workflows/agent.yml` edit
- [ ] 0.3 `.github/workflows/agent.yml` on `main` pins `agent-sdlc` to the commit from 0.1 and
      sets `design_system: true`, with `/design-system/` in `.github/CODEOWNERS` (merged before
      `agent:implement`, since workflows run from `main`)

## 1. Design-system copy

- [ ] 1.1 Add `design-system/` with `sync-design-system` from the pinned `HappyCynic/.github`
      commit; verify `design-system/SOURCE` names that commit
- [ ] 1.2 Add a CLAUDE.md rule to follow `design-system/README.md` and never edit the copy by
      hand

## 2. Shared layout and theme

- [ ] 2.1 Write `css/site.css` (SPDX header): page background, section bands, breakpoints;
      verify it contains no literal colours
- [ ] 2.2 Write the shared head (favicon, Inter, tokens.css, bundle.css, site.css, inline theme
      script with try/catch around storage) and the compact header and footer markup
- [ ] 2.3 Add the `ThemeToggle` and its two scripts from `design-system/components/ThemeToggle/README.md`;
      verify the choice persists across pages, the system setting applies with no stored
      choice, and with JavaScript disabled the page is light and shows no toggle
- [ ] 2.4 Delete `css/styles.css` and remove the Tailwind CDN script; verify no page references
      either

## 3. Pages

- [x] 3.0 Add `images/preppd-logo.svg` from the maintainer's Preppd logo with colours as inline
      `fill` attributes and no metadata; verify it has no `<style>` or `class=` and renders on
      white
- [ ] 3.1 Rewrite `index.html` as the shelf: hero with the `h1` (`hc-hero__title--xl`),
      Private iCloud MCP panel with its Does / Doesn't pair, Preppd panel with its logo, Studio
      teaser; shared head, header (`Products` current)
      and footer; verify Private iCloud MCP's "View on GitHub" links to
      https://github.com/HappyCynic/pv-icloud and carries the Apache-2.0 note and trademark
      notice
- [ ] 3.2 Create `studio/index.html` (SPDX header) from the About copy plus the four
      principles; shared head, header (`Studio` current) and footer
- [ ] 3.3 Replace `about.html` with the redirect stub (meta refresh, canonical link, visible
      link to `/studio/`)
- [ ] 3.4 Update README.md's description of the pages and the root-relative path note

## 4. Checks

- [ ] 4.1 Run `openspec validate --all --strict` and review every changed page: links and
      image paths resolve, the head, header, navigation and footer are identical on
      `index.html` and `studio/index.html`, headings stay in
      order, images have meaningful `alt` text, no em dashes, and each page works at phone
      width in both themes (`npm run start`, narrow viewport)
