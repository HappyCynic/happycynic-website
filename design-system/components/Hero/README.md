# Hero

The opening statement of a page: optional eyebrow, a two-line `display` headline whose second line turns `teal-ink`, a lead paragraph and up to two buttons.

**Markup:** `<section class="hc-hero">` with `.hc-eyebrow`, `<h1 class="hc-hero__title">Line one.<br><span class="hc-hero__accent">Line two.</span></h1>`, `.hc-hero__lead`, `.hc-hero__actions`. The consumer provides the copy.

- The headline is a setup and a twist: plain promise first, skeptical qualifier second, in `teal-ink`.
- One hero per page, always centred. Lead paragraph stays within `measure`.
- At most one primary and one secondary button.
- On the happycynic.com home page only, add `hc-hero__title--xl` to the title for the `display-xl` size (72px, 40px on phones). Every other page keeps `display`.
