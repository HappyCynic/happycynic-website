# Product brands

Happy Cynic apps such as Preppd have their own names, logos, colors and design systems. This section says what they borrow from the parent brand, what they own, and where the parent shows up.

## The model: endorsed brands

Happy Cynic is an **endorsing** parent, not a master brand. A product leads with its own identity; Happy Cynic appears as a quiet signature. Think "Preppd — a Happy Cynic app", not "Happy Cynic Preppd".

## What every product inherits

These are fixed. A product system should reference them, not redefine them.

- **The principles and voice.** Useful first, skeptical of defaults, calm not cold. A product may be sillier or more serious, but never hype-driven, never manipulative, never emoji-heavy in UI chrome.
- **The accessibility floor.** WCAG AA contrast in every theme, a visible focus ring, status never shown by color alone.
- **The 4px spacing grid.** Products can pick their own scale steps, but on a 4px base.
- **The endorsement.** Use the `Endorsement` component (face + "A Happy Cynic app") unchanged: About screen, settings footer, website footer, onboarding's last screen or store screenshots.
- **The legal line.** "© <year> Happy Cynic Software LLC" in the footer of every product site, and as the developer name in app stores: **Happy Cynic Software LLC**.

## What a product owns

- **Its name and logo.** A product logo does not reuse the face, the half-and-half split or the Happy Cynic wordmark.
- **Its primary color.** A product picks its own hero hue. It may borrow **one** of `sunny` or `teal`, but never both together: the yellow-beside-teal pairing belongs to the parent.
- **Its display face.** Products may choose their own display font. Body text in Inter is encouraged (it keeps products feeling like siblings) but not required.
- **Its components, illustration and motion style.**

## Tokens: layering a product on the parent

Name product tokens with the product's own prefix and keep the parent's names intact, so a shared component (the endorsement, a legal footer) can still find `--sunny`, `--teal-ink` or `--ink`.

```css
/* load order: Happy Cynic tokens.css, then the product's */
:root {
  /* product's own */
  --preppd-primary: #XXXXXX;      /* the product decides */
  --preppd-on-primary: #XXXXXX;

  /* deliberate borrowings from the parent */
  --preppd-accent: var(--teal);
  --preppd-text: var(--ink);
  --preppd-focus: var(--focus);
}
```

Values above are placeholders. In native apps, mirror the same idea: a `HappyCynic` color namespace (sunny, teal, tealInk, ink…) shipped as a small shared package, and the product's own palette alongside it.

## Where Happy Cynic appears inside a product

| Place | What to show |
| --- | --- |
| About / Settings footer | `Endorsement`, version number, link to happycynic.com |
| Product website footer | `Endorsement` plus the legal line |
| App Store / Play listing | Developer: Happy Cynic Software LLC; mention "from Happy Cynic" in the description once |
| Support and transactional email | Footer line: "Preppd is made by Happy Cynic Software." |
| Splash / launch screen | Product only. No parent logo. |

## On happycynic.com

The parent site showcases products with the `ProductCard` component, in Happy Cynic styling. The product's own logo and color may appear inside the card's media slot only; the card chrome, type and button stay Happy Cynic.
