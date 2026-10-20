# Proposal

## Why

Happy Cynic's second MCP server, Private Grocy MCP
([HappyCynic/pv-grocy](https://github.com/HappyCynic/pv-grocy)), is public but does not
appear on happycynic.com. Requested directly by the maintainer; there is no issue.

## What Changes

- Add a Private Grocy MCP product panel to the home page (`index.html`), after the Private
  iCloud MCP panel and before Preppd, built exactly like the Private iCloud MCP panel.
- The panel shows an outline basket icon, an "Early Release" badge (no version number), the
  name, a short pitch, a "does / doesn't" pair, the Apache-2.0 license, a "View on GitHub"
  button linking to https://github.com/HappyCynic/pv-grocy, and the notice "Not affiliated
  with or endorsed by the Grocy project."

Pages touched: `index.html` only. The shared head, header, navigation and footer do not change.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `site`: the home page lists Private iCloud MCP, Private Grocy MCP and Preppd in that order,
  and a new requirement describes the Private Grocy MCP panel.

## Impact

- `index.html`: one new `<article>` in the products section, using existing design-system and
  `css/site.css` classes.
- No new assets, dependencies, scripts or build step. No change to hosting files.
