# site Specification

## Purpose

The public website for Happy Cynic Software LLC at happycynic.com: who the studio is, what it
builds, and where to find its work.

## Requirements

### Requirement: Static hosting

The site SHALL be plain static files served by GitHub Pages from the root of the default
branch, with no build step, under the custom domain happycynic.com.

#### Scenario: Serving the repository as-is

- **WHEN** GitHub Pages publishes the default branch
- **THEN** every page and asset is served from the repository root without a build step
- **AND** the `CNAME` file sets the domain to happycynic.com

### Requirement: Shared page layout

Every content page SHALL use the same head assets (favicon, Inter font,
`/design-system/tokens.css`, `/design-system/components/bundle.css`, `/css/site.css` and the
inline theme script), the same compact header, the same navigation and the same footer. The
header SHALL show the full Happy Cynic logo linking to the home page (the reversed logo, with a white wordmark, on dark grounds) and a navigation with Products (`/#products`), Studio (`/studio/`), the theme toggle
and a GitHub button (`https://github.com/HappyCynic`). The link to the current page SHALL carry
`aria-current="page"`. The footer SHALL show "© <current year> Happy Cynic Software LLC" and
the tagline. Pages SHALL NOT load the Tailwind CDN script. Redirect stubs are exempt from the
header, navigation and footer.

#### Scenario: Navigating between pages

- **WHEN** a visitor opens any content page
- **THEN** the header shows the logo linking to `/` and links to Products (`/#products`),
  Studio (`/studio/`) and GitHub (`https://github.com/HappyCynic`)
- **AND** the footer shows the copyright line for Happy Cynic Software LLC with the current
  year

#### Scenario: Phone width

- **WHEN** any content page is viewed at phone width
- **THEN** the navigation wraps below the logo and nothing scrolls horizontally

#### Scenario: Keyboard focus

- **WHEN** a visitor tabs through any page
- **THEN** every link and button shows the design system's 2px focus ring

### Requirement: Home page

The home page (`index.html`) SHALL present a hero with the tagline "Useful Software.
Skeptically Designed." as its only `h1`, a products section (`id="products"`) with one product
panel per product, and a short Studio teaser linking to `/studio/`. Each product panel SHALL
show a status badge, the product name and a short pitch, and a "does / doesn't" pair when the
maintainer has supplied one. The hero SHALL NOT contain a primary button.

#### Scenario: Visiting the home page

- **WHEN** a visitor opens happycynic.com
- **THEN** they see the tagline "Useful Software. Skeptically Designed."
- **AND** a Private iCloud MCP panel followed by a Preppd panel
- **AND** the Private iCloud MCP panel lists what the product does and what it does not do

#### Scenario: Preppd links out

- **WHEN** a visitor reads the Preppd panel
- **THEN** it shows a "Coming Soon" badge and a button linking to https://preppd.app

### Requirement: Security contact

The site SHALL publish a security contact at `/.well-known/security.txt` following RFC 9116,
with an `Expires` date in the future.

#### Scenario: Reporting a vulnerability

- **WHEN** a researcher requests https://happycynic.com/.well-known/security.txt
- **THEN** they receive a contact address, an expiry date in the future and the canonical URL

### Requirement: Private iCloud MCP entry

The home page (`index.html`) SHALL present a Private iCloud MCP product panel before the
Preppd panel that shows the product name, an "Early Release" status badge, a short pitch, its
"does / doesn't" pair, that it is open source under the Apache-2.0 license, a button labelled
"View on GitHub" linking to https://github.com/HappyCynic/pv-icloud, and the notice "Not
affiliated with or endorsed by Apple. iCloud is a trademark of Apple Inc." The status SHALL NOT
name a version number. The panel SHALL NOT use the Happy Cynic logo or face as the product's
icon. The site SHALL NOT have a separate page for the product.

#### Scenario: Visiting the home page

- **WHEN** a visitor opens happycynic.com
- **THEN** they see a Private iCloud MCP panel with its name, early-release status, pitch,
  "does / doesn't" pair and Apache-2.0 license
- **AND** a "View on GitHub" button linking to https://github.com/HappyCynic/pv-icloud
- **AND** below it, the Preppd panel with its link to https://preppd.app

#### Scenario: Trademark notice

- **WHEN** a visitor reads the Private iCloud MCP panel
- **THEN** the panel includes "Not affiliated with or endorsed by Apple. iCloud is a trademark
  of Apple Inc."

#### Scenario: Phone width

- **WHEN** the home page is viewed at phone width
- **THEN** the panel's media, text and buttons stack and fit the screen without horizontal
  scrolling

### Requirement: Copy without em dashes

Visible copy on every page SHALL NOT contain em dashes.

#### Scenario: Reading any page

- **WHEN** a visitor reads any page of the site
- **THEN** no sentence uses an em dash

### Requirement: Studio page

The site SHALL publish a Studio page at `/studio/` that describes Happy Cynic Software, its
principles and its founder.

#### Scenario: Visiting the Studio page

- **WHEN** a visitor follows the Studio link
- **THEN** they see sections about the studio, its principles and its founder

### Requirement: Legacy About URL

`/about.html` SHALL forward visitors to `/studio/` with a meta refresh, declare
`https://happycynic.com/studio/` as its canonical URL, and show a link to `/studio/` for
browsers that do not follow the refresh.

#### Scenario: Following an old About link

- **WHEN** a visitor opens https://happycynic.com/about.html
- **THEN** they arrive at `/studio/`

### Requirement: Light and dark themes

Every content page SHALL follow the visitor's `prefers-color-scheme` setting using the design
system's light and dark tokens, and SHALL offer a theme toggle button in the header that
overrides the setting and remembers the choice in the browser. Without JavaScript the page
SHALL render in the light theme and SHALL NOT show the toggle. Text in both themes SHALL meet
WCAG AA contrast.

#### Scenario: System preference

- **WHEN** a visitor whose system uses a dark appearance opens any page for the first time
- **THEN** the page renders in the dark theme, with the reversed logo (white wordmark) in place of the full logo

#### Scenario: Toggling the theme

- **WHEN** a visitor presses the theme toggle and later opens another page
- **THEN** that page renders in the theme they chose

#### Scenario: JavaScript disabled

- **WHEN** a visitor opens a page with JavaScript disabled
- **THEN** the page renders in the light theme and no toggle is shown

### Requirement: Design-system copy

The site SHALL be styled from a managed copy of the Happy Cynic design system at
`design-system/`, refreshed from `HappyCynic/.github` and never edited by hand, with
`design-system/SOURCE` recording the commit it came from. Page-specific CSS SHALL live in
`css/site.css` and SHALL use design-system tokens rather than literal colour values.

#### Scenario: Checking the styles

- **WHEN** a reviewer reads `css/site.css`
- **THEN** every colour it uses is a design-system token (`var(--…)`)
