# Proposal

## Why

The home page only promotes Preppd, which is still "Coming Soon". Our first released project,
Private iCloud MCP ([HappyCynic/pv-icloud](https://github.com/HappyCynic/pv-icloud)), does not
appear anywhere on happycynic.com. Implements issue #4.

## What Changes

- Add a Private iCloud MCP section to the home page (`index.html`), directly after the Preppd
  section and built the same way, so the two products read as a set.
- The section shows the product name, an early-release status (v0.2.0, interfaces may change
  before 1.0), a short pitch, the Apache-2.0 open source license, and a "View on GitHub" button
  linking to https://github.com/HappyCynic/pv-icloud.
- The section carries the notice "Not affiliated with or endorsed by Apple. iCloud is a
  trademark of Apple Inc."
- No logo or icon for the product; the section is text only, like Preppd's.
- Preppd's section is left as it is.

Pages touched: `index.html` only. The shared head, header, navigation and footer do not change,
so `about.html` is untouched.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `site`: adds a requirement that the home page presents a Private iCloud MCP entry with name,
  status, pitch, license, GitHub link and the Apple trademark notice.

## Impact

- `index.html`: one new `<section>`, using Tailwind classes the page already uses.
- No new assets, dependencies, scripts or build step. No change to hosting files.
- The design system (`ProductCard`, `Badge`) has not landed in this repository, so per the
  issue the entry matches the existing Preppd section instead.
