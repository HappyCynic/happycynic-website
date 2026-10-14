# Tasks

## 1. Home page entry

- [ ] 1.1 Add `<section id="pv-icloud">` after `#preppd` in `index.html`, with the same section
      and column classes as Preppd and an `h3` heading "Early Release: Private iCloud MCP";
      verify by reading the HTML that headings stay in order (h2, h3, h3)
- [ ] 1.2 Add the pitch and the status line (version, Apache-2.0, interfaces may change before
      1.0) using the copy in design.md; verify the copy has no em dashes, emoji or hype words
- [ ] 1.3 Add the "View on GitHub" button to https://github.com/HappyCynic/pv-icloud, styled like
      the Preppd button; verify the URL resolves
- [ ] 1.4 Add the trademark notice "Not affiliated with or endorsed by Apple. iCloud is a
      trademark of Apple Inc." below the button; verify it is visible in the section
- [ ] 1.5 Check the Preppd section is unchanged (`git diff index.html` shows only the new
      section)

## 2. Checks

- [ ] 2.1 Run `openspec validate --all --strict` and review `index.html`: links resolve, the
      shared head, header, navigation and footer still match `about.html`, and the page works
      at phone width (`npm run start`, narrow viewport)
