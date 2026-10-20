# Design

## Context

The products section of `index.html` holds `ProductPanel` articles: Private iCloud MCP
(`#pv-icloud`) then Preppd (`#preppd`). Private iCloud MCP has no logo, so its media slot shows
a 2px-stroke outline icon (`.site-icon`, `teal-ink` on the default `teal-tint`), as the
ProductPanel guidance asks.

## Decisions

### Same panel, placed between the two

Add `<article id="pv-grocy" class="hc-panel">` after `#pv-icloud` and before `#preppd`. Both MCP
servers sit together, and both have shipped code while Preppd has not. Markup and classes copy
the Private iCloud MCP panel, so no CSS changes.

### Icon

No logo exists, so the media slot uses an outline shopping-basket icon in the same style as the
padlock (24px viewBox, `stroke-width="1.5"` at 96px, round caps). Never the Happy Cynic face.

### Copy

- Badge: "Early Release", like Private iCloud MCP, with no version number.
- Pitch: "Lets AI assistants like Claude check and update your Grocy stock, shopping list,
  recipes, meal plan and chores."
- It does: "Track stock, shopping, recipes and chores"; "Run on a machine you control".
- It doesn't: "Write anything unless you opt in"; "Send your data to our servers".
- Meta: "Open source, Apache-2.0". Button: "View on GitHub".
- Note: "Not affiliated with or endorsed by the Grocy project." The pv-grocy README says it is
  not affiliated with the Grocy project; Grocy is an open source project rather than a
  company's trademark, so no trademark line is given.

No em dashes, emoji or hype words.

## Risks / Trade-offs

- [pv-grocy has no tagged release yet, so "Early Release" runs slightly ahead] → Accepted to
  match Private iCloud MCP; the maintainer can switch to "Coming Soon" if preferred.
