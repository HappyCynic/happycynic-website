# Proposal

## Why

The home page only promotes Preppd, which is still "Coming Soon". Our first released project,
Private iCloud MCP ([HappyCynic/pv-icloud](https://github.com/HappyCynic/pv-icloud)), does not
appear anywhere on happycynic.com. Implements issue #4.

## What Changes

- Add a Private iCloud MCP section to the home page (`index.html`), directly before the Preppd
  section (it has shipped; Preppd has not) and built the same way, so the two products read as
  a set.
- The section shows the product name, an early-release status (no version number, so the site
  does not need an update for every release; interfaces may change before 1.0), a short pitch,
  the Apache-2.0 open source license, and a "View on GitHub" button linking to
  https://github.com/HappyCynic/pv-icloud.
- The section carries the notice "Not affiliated with or endorsed by Apple. iCloud is a
  trademark of Apple Inc."
- No logo or icon for the product; the section is text only, like Preppd's.
- Preppd's button is reworded from "Explore Our First App: Preppd" to "Explore Our Concept
  Mobile App: Preppd", since Preppd is no longer the first thing we shipped.
- Em dashes in the existing copy (the home page hero and three sentences on the about page) are
  rewritten without them, as the maintainer asked on the issue.

Pages touched: `index.html` and `about.html` (body copy only). The shared head, header,
navigation and footer do not change.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `site`: adds a requirement that the home page presents a Private iCloud MCP entry, before
  Preppd, with name, status, pitch, license, GitHub link and the Apple trademark notice; and a
  requirement that site copy uses no em dashes.

## Impact

- `index.html`: one new `<section>`, using Tailwind classes the page already uses; Preppd's
  button label and the hero sentence reworded.
- `about.html`: three sentences reworded to drop em dashes.
- No new assets, dependencies, scripts or build step. No change to hosting files.
- The design system (`ProductCard`, `Badge`) has not landed in this repository, so per the
  issue the entry matches the existing Preppd section instead.
