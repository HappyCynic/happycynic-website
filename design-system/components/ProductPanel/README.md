# ProductPanel

Shows one Happy Cynic product across the full width of happycynic.com: a large media slot beside a badge, name, lead, `DoesDoesnt` pair and actions.

**Markup:** `<article class="hc-panel">` with `.hc-panel__media` (the product's logo or artwork `<img>`) and `.hc-panel__body` holding a `hc-badge`, `<h2 class="hc-panel__title">`, `.hc-panel__lead`, a `DoesDoesnt`, `.hc-panel__actions` and an optional `.hc-panel__note` for legal lines. The consumer provides the media, status, name, lead, the does / doesn't items and the links.

- Stack panels vertically, `space-10` apart, at most `container` plus a little (72rem) wide. The media slot sits left and the panel stacks on phones.
- The product's own logo and colours appear only inside the media slot. Give the slot the ground the logo was drawn for (set `background` on `.hc-panel__media`), and keep that ground in both themes. Without a logo, use a 2px-stroke outline icon in `teal-ink` on the default `teal-tint`; never the Happy Cynic face.
- One action per panel is enough; use `secondary` or `ghost` buttons, since the page's one primary lives elsewhere (the header or the hero).
- Use `ProductCard` instead when products are listed compactly.
