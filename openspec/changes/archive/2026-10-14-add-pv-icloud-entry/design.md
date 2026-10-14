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
- Copy across the site without em dashes (maintainer request on the issue).

**Non-Goals:**

- A logo or icon, a product page, docs or install instructions (link to the README instead).
- Restyling the Preppd section or the hero.

## Decisions

### Separate section before Preppd, same structure

Add `<section id="pv-icloud">` immediately before `#preppd`, copying its classes
(`bg-white py-20 border-t border-slate-200`, `max-w-4xl mx-auto px-6 text-center`). Same
heading level (`h3`), same pitch style, same button style. Private iCloud MCP goes first
because it has shipped and Preppd has not (maintainer decision). A stacked section is already
single-column, so it works at phone width without new breakpoints.

Alternative considered: one "Products" section with two cards side by side. It would mean
rebuilding the Preppd section, which the issue does not ask for and which the design system
will likely replace anyway.

### Heading and status

The heading follows Preppd's "Status: Name" pattern: **"Early Release: Private iCloud MCP"**.
Below the pitch, a small line gives the detail without a version number, so the site does not
need an update on every release (maintainer decision): "Early release, open source under the
Apache-2.0 license. Interfaces may change before 1.0."

### Copy

Pitch (no hype words, no em dashes, no emoji):

> An MCP server that lets AI assistants like Claude search and read your iCloud Mail, Calendar
> and Contacts. It is read-only by default, every write is opt-in, and you run it yourself.

Button: **"View on GitHub"**, linking to `https://github.com/HappyCynic/pv-icloud`, styled like
the Preppd button.

Trademark notice, in `text-sm text-slate-500` below the button: "Not affiliated with or endorsed
by Apple. iCloud is a trademark of Apple Inc."

Preppd's button becomes **"Explore Our Concept Mobile App: Preppd"** (maintainer decision; it
is no longer our first app to ship).

### No em dashes

The four existing em dashes (one in the `index.html` hero, three on `about.html`) are replaced
with commas, a full stop or parentheses, keeping the meaning of each sentence.

### No media slot

No image is added, so there is no `alt` text to write and no Happy Cynic face used as a product
icon.

## Risks / Trade-offs

- [Two yellow buttons in a row may look repetitive] → Accepted for consistency; the design
  system can differentiate them later.

## Open Questions

None. The maintainer answered the proposal's questions on issue #4: Private iCloud MCP goes
first, the status says "Early release" without a version, and Preppd's button is reworded.
