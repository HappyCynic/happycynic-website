# ThemeToggle

A round icon button that switches a page between the light and dark themes, overriding the visitor's system appearance and remembering the choice.

**Markup:** `<button class="hc-theme-toggle" type="button" aria-pressed="false" aria-label="Dark theme" hidden>` holding two inline SVG icons, `.hc-icon-moon` and `.hc-icon-sun` (2px-stroke outlines, `stroke="currentColor"`, `aria-hidden="true"`). The stylesheet shows the moon in light and the sun in dark. The consumer provides the two scripts below.

In `<head>`, before the stylesheets, so the right theme paints first:

```html
<script>
(function () {
  var t; try { t = localStorage.getItem('hc-theme'); } catch (e) {}
  if (t !== 'light' && t !== 'dark') t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', t);
})();
</script>
```

At the end of `<body>`:

```html
<script>
(function () {
  var root = document.documentElement, b = document.querySelector('.hc-theme-toggle');
  if (!b) return;
  function sync() { b.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === 'dark')); }
  b.hidden = false; sync();
  b.addEventListener('click', function () {
    var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', t); sync();
    try { localStorage.setItem('hc-theme', t); } catch (e) {}
  });
})();
</script>
```

- The button starts `hidden`, so visitors without JavaScript never see a control that does nothing; their page stays light.
- `aria-pressed="true"` means the dark theme is on; the accessible name stays "Dark theme".
- Place it at the end of the `SiteHeader` nav, before any button. One per page.
