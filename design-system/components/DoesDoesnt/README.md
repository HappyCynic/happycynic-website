# DoesDoesnt

Two short lists side by side: what a product does (the happy half) and what it refuses to do (the cynic half).

**Markup:** `<div class="hc-dd">` with two `.hc-dd__col` children; the second also carries `hc-dd__col--doesnt`. Each column has a `<p class="hc-dd__label">` ("It does" / "It doesn’t") and a `<ul class="hc-dd__list">` of `<li>` items. The check and cross icons come from the stylesheet. The consumer provides the items.

- Two to four items per column, each a plain fact the product's README backs up. No hype words; the "doesn't" column names the nonsense the product avoids.
- The words carry the meaning: the icons and the `teal-ink` label only reinforce it.
- Use it inside a `ProductPanel` or a product page section. The columns stack on phones.
