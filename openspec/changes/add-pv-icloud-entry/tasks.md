# Tasks

## 1. Home page entry

- [ ] 1.1 Add `<section id="pv-icloud">` before `#preppd` in `index.html`, with the same section
      and column classes as Preppd and an `h3` heading "Early Release: Private iCloud MCP";
      verify by reading the HTML that headings stay in order (h2, h3, h3)
- [ ] 1.2 Add the pitch and the status line (early release, Apache-2.0, interfaces may change
      before 1.0; no version number) using the copy in design.md; verify the copy has no em
      dashes, emoji or hype words
- [ ] 1.3 Add the "View on GitHub" button to https://github.com/HappyCynic/pv-icloud, styled like
      the Preppd button; verify the URL resolves
- [ ] 1.4 Add the trademark notice "Not affiliated with or endorsed by Apple. iCloud is a
      trademark of Apple Inc." below the button; verify it is visible in the section
- [ ] 1.5 Reword Preppd's button to "Explore Our Concept Mobile App: Preppd"; verify the rest of
      the Preppd section and its link to https://preppd.app are unchanged

## 2. Copy

- [ ] 2.1 Rewrite the em dashes in the `index.html` hero and on `about.html` without them;
      verify `grep` finds no `—` or `&mdash;` in any HTML page

## 3. Checks

- [ ] 3.1 Run `openspec validate --all --strict` and review `index.html` and `about.html`: links
      resolve, the shared head, header, navigation and footer still match across pages, and the
      pages work at phone width (`npm run start`, narrow viewport)
