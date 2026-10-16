# Button

The pill-shaped action button: `sunny` primary for the one thing you want people to do, outlined secondary for the alternative, and a teal ghost for low-stakes links.

**Markup:** `<a class="hc-btn hc-btn--primary">` or `<button class="hc-btn hc-btn--secondary">`. Add `hc-btn--sm` for compact rows. The consumer provides the label (Title Case, a verb or a destination) and the element: `<a>` for navigation, `<button>` for actions.

- One `hc-btn--primary` per view. Everything else is secondary or ghost.
- Always `radius-full`; never square off a Happy Cynic button.
- Labels say what happens: "Explore Our First App: Preppd", not "Click Here" or "Learn More".
- Disable with the `disabled` attribute (or `aria-disabled="true"` on links); keep the label explaining why ("Coming Soon").
- The `focus` ring comes built in. Do not remove the outline.
