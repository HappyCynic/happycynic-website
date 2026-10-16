# SiteHeader

The happycynic.com masthead: the full logo centred above a short, pipe-separated nav on `surface-raised` with `shadow-md`.

**Markup:** `<header class="hc-header">` holding `.hc-header__logo` (two images: `.hc-logo--full` and `.hc-logo--face`) and `<nav class="hc-nav">` with links separated by `<span class="hc-nav__sep" aria-hidden="true">|</span>`. Mark the current page with `aria-current="page"`.

**Compact variant:** add `hc-header--compact` to the header: the logo sits left at 60px (face 48px in dark), the nav right without separators, wrapping under the logo on phones. Leave out the `hc-nav__sep` spans; a small primary `Button` (for example GitHub) and a `ThemeToggle` may end the nav.

- Keep the nav to three to five Title Case items.
- One layout per site: centred for a one-page site, compact once it has several sections.
- Both logo images are required: the dark theme hides the full logo (its wordmark is black) and shows the face alone.
- Product sites use their own header; this one is for Happy Cynic properties.
