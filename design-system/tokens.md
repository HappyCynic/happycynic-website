# Tokens

Every token of the system, a section per group: Surfaces — 3 tokens; Text — 3 tokens; Fills and status backgrounds — 4 tokens; Borders and rings — 2 tokens; Palette ramps and brand — 12 tokens; Type styles, families, font files; Spacing — 8 tokens; Radius — 4 tokens; Shadow — 2 tokens; Layout — 2 tokens.

## Color · Surfaces

### Use

```css
/* any surface that loads tokens.css or components/bundle.css */
color: var(--surface);
/* a surface with no stylesheet (a slide): the light value, or another theme’s in that mode */
```

### Tokens (3)

| token | light | dark | usage |
| --- | --- | --- | --- |
| `surface` | #f8fafc | #0f172a | Page background. |
| `surface-raised` | #ffffff | #1e293b | Header, cards, alternating page sections, inputs. |
| `surface-inverse` | #0f172a | #020617 | Footer and other deliberately dark bands. Pair with `on-inverse` and `on-inverse-muted`. |

## Color · Text

### Use

```css
/* any surface that loads tokens.css or components/bundle.css */
color: var(--ink);
/* a surface with no stylesheet (a slide): the light value, or another theme’s in that mode */
```

### Tokens (3)

| token | light | dark | usage |
| --- | --- | --- | --- |
| `ink` | #0f172a | #f8fafc | Headlines, body copy and nav on `surface`, `surface-raised` and both tints (17:1+ light, 16:1+ dark). |
| `ink-muted` | #475569 | #94a3b8 | Supporting paragraphs, descriptions, captions on `surface` and `surface-raised` (7.2:1 light, 5.7:1 dark on raised). |
| `ink-subtle` | #64748b | #94a3b8 | Meta text, timestamps and placeholder text on `surface-raised` and `surface` (4.55:1 minimum). The floor: nothing lighter carries text. |

## Color · Fills and status backgrounds

### Use

```css
/* any surface that loads tokens.css or components/bundle.css */
color: var(--on-sunny);
/* a surface with no stylesheet (a slide): the light value, or another theme’s in that mode */
```

### Tokens (4)

| token | light | dark | usage |
| --- | --- | --- | --- |
| `on-sunny` | #0f172a | #0f172a | Text and icons on `sunny` and `sunny-hover` (13:1). Stays dark in both themes because sunny does. |
| `on-teal` | #0f172a | #0f172a | Text on a `teal` fill (5.9:1). White on teal is only 3.0:1: allowed for 24px+ type, nothing smaller. |
| `on-inverse` | #ffffff | #f8fafc | Primary text on `surface-inverse` (17:1). |
| `on-inverse-muted` | #94a3b8 | #94a3b8 | Secondary text on `surface-inverse`, such as the footer tagline (7:1 light, 7.9:1 dark). |

## Color · Borders and rings

### Use

```css
/* any surface that loads tokens.css or components/bundle.css */
color: var(--border);
/* a surface with no stylesheet (a slide): the light value, or another theme’s in that mode */
```

### Tokens (2)

| token | light | dark | usage |
| --- | --- | --- | --- |
| `border` | #e2e8f0 | #334155 | Decorative hairlines: section dividers, card outlines that sit on a contrasting ground. Not enough for a control's edge. |
| `border-strong` | #64748b | #94a3b8 | Edges that carry meaning: inputs, secondary buttons, checkboxes (3:1+ on both surfaces in both themes). |

## Color · Palette ramps and brand

### Use

```css
/* any surface that loads tokens.css or components/bundle.css */
color: var(--sunny);
/* a surface with no stylesheet (a slide): the light value, or another theme’s in that mode */
```

### Tokens (12)

| token | light | dark | usage |
| --- | --- | --- | --- |
| `sunny` | #ffda3c | #ffda3c | The Happy half of the mark. Primary buttons, highlight fills, the warm side of any two-tone moment. Never text: put `on-sunny` on it. |
| `sunny-hover` | #e6c22e | #e6c22e | Hover and pressed fill for anything painted `sunny`. `on-sunny` holds 10.3:1 on it. |
| `sunny-tint` | #fff6cc | #3a3312 | Quiet warm background for badges and highlighted rows. `ink` and `ink-muted` read on it in both themes. |
| `teal` | #27a4a3 | #27a4a3 | The Cynic half of the mark. Fills, large graphics, icons and display text 24px+. Only 3.0:1 on white and 2.9:1 on `surface`, so never body text: use `teal-ink`. |
| `teal-ink` | #1b7372 | #4fc3c2 | Teal for text: links, the accent line of a headline, eyebrows. 5.4:1 on `surface`, 5.6:1 on `surface-raised`; dark 8.4:1 on `surface`, 6.9:1 on `surface-raised`. |
| `teal-tint` | #e0f4f3 | #12302f | Quiet cool background for badges and info notes. `teal-ink` reads on it (4.9:1 light, 6.7:1 dark). |
| `logo-ink` | #000000 | #000000 | The pure black outline of the face and the wordmark. Reserved for the mark and illustrations drawn in its style; UI text uses `ink`. |
| `focus` | #1b7372 | #4fc3c2 | The 2px focus ring, offset 2px, on every interactive element. 5.4:1+ on every surface in its theme. |
| `success` | #1b7372 | #4fc3c2 | Positive status text and icons. Always paired with a word or icon; teal against `danger` orange stays distinguishable for colour-blind readers. |
| `danger` | #c2410c | #fb923c | Errors and destructive actions, text or icon, on `surface`, `surface-raised` and `danger-tint` (4.7:1+ light, 6.5:1+ dark). |
| `danger-tint` | #fff1e8 | #3b1d0e | Background of an error note or badge, with `danger` text. |
| `warning` | #ffda3c | #ffda3c | Caution fill with `on-sunny` text. Use sparingly: sunny is the brand's happy colour, not an alarm. |

## Type

Use the named styles; no literal px.

### Use

```css
font: var(--text-display);            /* with tokens.css */
font-family: var(--font-sans);   /* the family alone */
```

### Styles

| style | CSS | size / line | weight | family | usage |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | `.display-xl`, `--text-display-xl` | 72px / 0.98 | 700 | `sans` | The happycynic.com home hero only, in place of `display` (`hc-hero__title--xl`). Two lines, the second in `teal-ink`; drops to 40px on phones. |
| `display` | `.display`, `--text-display` | 48px / 1 | 700 | `sans` | One per page: the hero headline. Two lines, the second in `teal-ink`. |
| `headline` | `.headline`, `--text-headline` | 36px / 40px | 700 | `sans` | Section headings. |
| `title` | `.title`, `--text-title` | 24px / 32px | 600 | `sans` | Card titles, sub-sections. |
| `body-lg` | `.body-lg`, `--text-body-lg` | 18px / 1.625 | 400 | `sans` | Lead paragraphs under a display or headline, in `ink-muted`, at most `measure` wide. |
| `body` | `.body`, `--text-body` | 16px / 1.625 | 400 | `sans` | Default running text. |
| `label` | `.label`, `--text-label` | 16px / 24px | 600 | `sans` | Buttons, nav links, form labels. |
| `small` | `.small`, `--text-small` | 14px / 20px | 400 | `sans` | Footer copy, captions, helper text. |
| `eyebrow` | `.eyebrow`, `--text-eyebrow` | 13px / 16px | 600 | `sans` | Uppercase kicker above a headline and the endorsement line, echoing the spaced SOFTWARE of the logo. Always uppercase, in `teal-ink`. |
| `code` | `.code`, `--text-code` | 14px / 20px | 400 | `mono` | Inline code, keyboard shortcuts, technical asides. |

### Families

| family | CSS variable | stack |
| --- | --- | --- |
| `sans` | `--font-sans` | `"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif` |
| `mono` | `--font-mono` | `ui-monospace, "SF Mono", Menlo, Consolas, monospace` |

## Spacing

### Use

```css
padding: var(--space-1);
```

### Tokens (8)

| token | value | usage |
| --- | --- | --- |
| `space-1` | 4px | The base unit. Icon-to-label gaps. |
| `space-2` | 8px | Tight stacks: badge padding, title to meta. |
| `space-3` | 12px | Button vertical padding, list gaps. |
| `space-4` | 16px | Nav item gaps, headline to paragraph. |
| `space-6` | 24px | Page side gutter on phones, button horizontal padding, card padding. |
| `space-10` | 40px | Paragraph to call-to-action; page gutter on tablets. |
| `space-20` | 80px | Vertical padding of every page section. |
| `space-24` | 96px | Page side gutter on wide screens. |

## Radius

### Use

```css
/* var(--radius-sm) */
```

### Tokens (4)

| token | value | usage |
| --- | --- | --- |
| `radius-sm` | 6px | Badges, inputs, code chips. |
| `radius-md` | 12px | Cards and notes. |
| `radius-lg` | 20px | Feature panels, app-icon-like tiles. |
| `radius-full` | 9999px | Buttons (always pills) and anything circular, like the face itself. |

## Shadow

### Use

```css
/* var(--shadow-sm) */
```

### Tokens (2)

| token | value | usage |
| --- | --- | --- |
| `shadow-sm` | 0 1px 2px 0 rgba(15, 23, 42, 0.06) · dark: 0 1px 2px 0 rgba(0, 0, 0, 0.4) | Resting cards on `surface`. |
| `shadow-md` | 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) · dark: 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3) | The site header, popovers. The only elevation most pages need. |

## Layout

### Use

```css
/* var(--measure) */
```

### Tokens (2)

| token | value | usage |
| --- | --- | --- |
| `measure` | 42rem | Max width of a paragraph block (about 70 characters at `body-lg`). |
| `container` | 56rem | Max width of a centred content section. |
