# ProductCard

Showcases one Happy Cynic app on happycynic.com: the product's icon, a status badge, name, one-sentence pitch and a call to action.

**Markup:** `<article class="hc-product">` with `.hc-product__media` (put the product's app icon `<img>` inside), then a `hc-badge`, `.hc-product__title`, `.hc-product__desc` and a button. The consumer provides the icon, status, name, pitch and link.

- The product's own colors and logo appear only inside the media slot; the card chrome stays Happy Cynic.
- The pitch is one or two sentences in the product's voice, filtered through Happy Cynic's: what it does, then the wink.
- Stack cards vertically on `surface`, `space-6` apart. Never more than one primary button per card.
