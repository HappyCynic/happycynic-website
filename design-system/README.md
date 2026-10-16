<!--
SPDX-FileCopyrightText: 2026 Happy Cynic Software LLC
SPDX-License-Identifier: Apache-2.0
-->

# Happy Cynic design system

This folder is the **master copy** of the Happy Cynic design system. Change it only by pull
request to `HappyCynic/.github`. Repositories don't edit their own copy: the agent pipeline
refreshes it (see [Using it in a repository](#using-it-in-a-repository)).

Happy Cynic Software builds useful, opinionated tools for people who question most apps and still believe software can be delightful. The brand is a two-sided face: one half **happy** (`sunny`), one half **cynic** (`teal`), held together by one black line. Everything here grows from that split: optimism and skepticism, side by side, never blended.

This system is the **parent brand**. Use it as-is for happycynic.com, company documents, store listings and anything signed "Happy Cynic". Product brands (Preppd and whatever comes next) keep their own systems and borrow from this one as [product-brands.md](product-brands.md) describes.

## Principles

1. **Useful first.** Every screen should earn its place. If it does not solve a problem, cut it.
2. **Skeptical of defaults.** Question the trendy pattern before reaching for it. No dark patterns, no fake urgency, no growth-hack modals.
3. **Calm, not cold.** Plenty of white space, one accent at a time, one joke at a time.
4. **Both halves, never a blend.** `sunny` and `teal` sit next to each other; never gradient one into the other or mix them into green.

## Voice and content

The voice is a smart friend who has seen too many bad apps: dry, warm, a little sarcastic, never mean, never hype.

- Write as **we** (the studio) talking to **you**. The founder speaks as *I* only in a signed note.
- Lead with what the thing does, then add the wink. One wry line per screen at most; the rest stays plain.
- Name the nonsense you avoid instead of claiming virtues: "not bloated, trendy, or pretending to be your best friend" beats "simple and friendly".
- Headlines and buttons use **Title Case** and full stops are allowed for rhythm: "Useful Software. Skeptically Designed." Body copy is sentence case.
- Em dashes are NOT welcome. Exclamation marks are rare. Emoji: none in brand UI or marketing copy.
- Banned: "revolutionary", "seamless", "AI-powered" as a headline, "unlock", "supercharge", "we're excited to announce".

Real copy to calibrate against:

> Useful Software. Skeptically Designed.

> We design tools for people who are smart enough to question most apps — and still believe software can be delightful, useful, and slightly sarcastic.

> We build clever tools for people who don’t fall for buzzwords.

> Smart travel prep for real people. Packing lists that know the weather, your destination, and your chaotic reality.

## Logo

The logo has two parts: the **face** (`happycynic-icon`) and the **wordmark** "Happy Cynic / SOFTWARE". Files live in [`logos/`](logos/).

- Use the **full logo** (`happycynic-logo.svg` or `.png`) on `surface` or `surface-raised` in the light theme. Its wordmark is black (`logo-ink`), so it does not work on dark grounds.
- On dark grounds (`surface` in dark, `surface-inverse`), use the **face alone** (`happycynic-icon`); its built-in white disc keeps it legible. Do not invert or recolor the wordmark yourself.
- Clear space: at least a quarter of the face's height on every side. Minimum size: full logo 120px wide, face 16px (use the purpose-made `favicon-16.png` / `favicon-32.png` at those sizes).
- Never recolor the halves, swap their sides, separate them, rotate the mark, add a shadow or outline, or place it on a busy photo.
- The SVG wordmark keeps "SOFTWARE" as live Helvetica text. On systems without Helvetica (Windows, Android, some browsers), use the PNG.

## Color

- Page grounds are `surface`; cards, the header and alternating bands are `surface-raised`; the footer is `surface-inverse`.
- Text is `ink`, supporting copy `ink-muted`, meta text `ink-subtle`. Nothing lighter than `ink-subtle` carries text.
- `sunny` is the action color: the primary button, and one highlight per view. Text on it is always `on-sunny`.
- `teal` is for fills and large graphics. When teal must be **text** (links, the second line of a hero headline, eyebrows), use `teal-ink`: plain `teal` fails contrast on light grounds.
- A view uses at most one large `sunny` area and one large `teal` area. Pairing them is reserved for the mark and its echoes (the cover, the endorsement).
- Status: `success` is `teal-ink`, `danger` is a burnt orange, `warning` borrows `sunny`. Always add a word or icon; never rely on color alone.

## Typography

- Set everything in `--font-sans` (Inter, from Google Fonts at weights 400, 600 and 700). The logo's wordmark is Helvetica Bold; never use Helvetica for UI text, and never retype the wordmark.
- `display` once per page for the hero; its second line in `teal-ink`. Sections open with `headline`; cards with `title`.
- `display-xl` (72px) replaces `display` on one page only: the happycynic.com home hero, where the tagline is the whole statement. Never on product sites, never twice.
- Lead paragraphs use `body-lg` in `ink-muted`, at most `measure` wide. Running text is `body`.
- `eyebrow` is always uppercase with tracking, in `teal-ink`, a nod to the spaced-out SOFTWARE in the logo.
- Load Inter explicitly: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">`. With Tailwind, set `fontFamily.sans` to Inter in the config or its preflight resets the body to the system font.

## Layout and spacing

- Spacing is a 4px grid: `space-1` through `space-24`. Sections get `space-20` top and bottom padding.
- Page gutters: `space-6` on phones, `space-10` on tablets, `space-24` on wide screens.
- Marketing pages are **centred**: centred headline, centred paragraph capped at `measure`, centred call-to-action. Content sections cap at `container`.
- Alternate `surface` and `surface-raised` bands, divided by a `border` hairline, rather than stacking cards.
- The `SiteHeader` comes in two layouts: centred (logo over nav) for a one-page site, compact (`hc-header--compact`: logo left, nav right) once a site has several sections. A site uses one layout on every page.
- Showcase products with `ProductCard` in a list, or `ProductPanel` when each product gets the full width (a "shelf"). Give each panel a `DoesDoesnt` pair: what the product does (the happy half) and what it refuses to do (the cynic half).

## Shape, depth and motion

- Buttons are always pills (`radius-full`): round like the face. Cards use `radius-md`; badges and inputs `radius-sm`.
- Depth is mostly flat. `shadow-md` belongs to the header; cards rest on `shadow-sm` or a `border` hairline, not both.
- Motion is quick and quiet: 150–200ms ease-out for color and hover changes. No bouncing, no parallax, no confetti. Respect `prefers-reduced-motion`.

## Interaction states

- Hover: `sunny` fills go to `sunny-hover`; text links darken by underline thickness, not color.
- Focus: a solid 2px `focus` ring with 2px offset on every interactive element. Never remove it.
- Disabled: 40% opacity and no pointer events; keep the label legible.

## Themes

- Pages follow the visitor's system appearance (`prefers-color-scheme`) and may offer a `ThemeToggle` that overrides it. The page sets `data-theme` on `<html>` before first paint, from the stored choice or the system setting; without JavaScript it stays light.
- The choice is stored in `localStorage` under `hc-theme` (`light` or `dark`), wrapped in try/catch so a blocked store falls back to the system setting.
- A product's own media (logos, screenshots) keeps its colours in both themes: give its slot a fixed ground it was drawn for.

## Iconography

No dedicated icon set exists yet. Until one is drawn, use the platform's own (SF Symbols in Apple apps) or a 2px-stroke, round-cap outline set on the web (for example Lucide), in `ink` or `teal-ink`. Icons never replace the face, and the face is never used as a generic "smile" icon.

## Accessibility floor

Every text pair in this system meets WCAG AA (4.5:1, or 3:1 at 24px+) in both themes; usage notes on each color say where it holds. Products that carry the Happy Cynic name meet the same floor.

## Files

| Path | What it is |
|---|---|
| `tokens.css` | Every token as CSS custom properties, light (`:root`, `[data-theme="light"]`) and dark (`[data-theme="dark"]`), plus the type-style classes. Load it first. |
| `components/bundle.css` | The components as plain CSS classes (prefix `hc-`) over the tokens. Load after `tokens.css`. |
| `components/<Component>/README.md` | Markup and usage rules for each component. |
| `tokens.md` | Every token with its values and usage notes, by group. |
| `tokens.json` | The same tokens for tools. |
| `product-brands.md` | What product brands (Preppd and later) borrow from this system and what they own. |
| `logos/` | The official marks; see [logos/README.md](logos/README.md). |

The tokens, components and logos are exported unchanged from the design system's editor, so
a later export diffs cleanly; only this README is written by hand.

## Using it in a repository

A repository keeps a **copy** of this folder at `design-system/`, at the version of
`HappyCynic/.github` its agent workflow pins:

1. In `.github/workflows/agent.yml`, pass `design_system: true` to `actions/agent-sdlc`.
2. Every agent run then refreshes `design-system/` from the pinned commit before it starts
   work and commits any difference on its own ("Sync design system from
   HappyCynic/.github@<sha>"). `design-system/SOURCE` records that commit.
3. When this folder changes, Dependabot's `github-actions` update bumps the pin; the next
   agent run brings the new version in.
4. Add `/design-system/` to the repository's `CODEOWNERS`, and tell agents in `CLAUDE.md`
   to follow `design-system/README.md` and never edit the copy by hand.

To seed or refresh a copy by hand, from the repository root:

```sh
/path/to/HappyCynic/.github/actions/agent-sdlc/sync-design-system
```
