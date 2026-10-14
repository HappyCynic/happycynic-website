# Design

## Context

`index.html` has a hero (`<main>`) followed by one product section, `<section id="preppd">`: a
white band with a top border, a centered `max-w-4xl` column, an `h3` heading of the form
"Coming Soon: Preppd", a `text-lg text-slate-600` pitch, and a yellow pill button. There is no
design system in the repository yet (no `ProductCard` or `Badge`), so issue #4 asks us to match
the Preppd section.

## Goals / Non-Goals

**Goals:**

- A Private iCloud MCP entry with name, status, pitch, license, GitHub button and trademark
  notice, visually consistent with Preppd and readable at phone width.

**Non-Goals:**

- A logo or icon, a product page, docs or install instructions (link to the README instead).
- Restyling or rewording the Preppd section or the hero.

## Decisions

### Separate section after Preppd, same structure

Add `<section id="pv-icloud">` immediately after `#preppd`, copying its classes
(`bg-white py-20 border-t border-slate-200`, `max-w-4xl mx-auto px-6 text-center`). Same
heading level (`h3`), same pitch style, same button style. A stacked section is already
single-column, so it works at phone width without new breakpoints.

Alternative considered: one "Products" section with two cards side by side. It would mean
rebuilding the Preppd section, which the issue does not ask for and which the design system
will likely replace anyway.

### Heading and status

The heading follows Preppd's "Status: Name" pattern: **"Early Release: Private iCloud MCP"**.
Below the pitch, a small line gives the detail: "Version 0.2.0. Open source under the
Apache-2.0 license. Interfaces may change before 1.0."

### Copy

Pitch (no hype words, no em dashes, no emoji):

> An MCP server that lets AI assistants like Claude search and read your iCloud Mail, Calendar
> and Contacts. It is read-only by default, every write is opt-in, and you run it yourself.

Button: **"View on GitHub"**, linking to `https://github.com/HappyCynic/pv-icloud`, styled like
the Preppd button.

Trademark notice, in `text-sm text-slate-500` below the button: "Not affiliated with or endorsed
by Apple. iCloud is a trademark of Apple Inc."

### No media slot

No image is added, so there is no `alt` text to write and no Happy Cynic face used as a product
icon.

## Risks / Trade-offs

- [The version number goes stale on the next release] → Keep it in one short status line that
  is easy to update, or drop it (see Open Questions).
- [Two yellow buttons in a row may look repetitive] → Accepted for consistency; the design
  system can differentiate them later.

## Open Questions

These have a default above; the implementation uses the default unless the maintainer says
otherwise in review.

- Order: Private iCloud MCP after Preppd (default), or first because it is the one that has
  shipped?
- Should the status line keep the exact version (v0.2.0), or just say "Early release"?
- Preppd's button reads "Explore Our First App: Preppd". It stays as is; say if it should be
  reworded now that another project has shipped first.
