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

Every page SHALL use the same head assets (favicon, Inter font, `css/styles.css`, Tailwind),
the same header with the Happy Cynic logo linking to the home page, the same navigation
(Home, GitHub, About), and the same footer.

#### Scenario: Navigating between pages

- **WHEN** a visitor opens any page
- **THEN** the header shows the logo and links to Home (`index.html`), GitHub
  (`https://github.com/HappyCynic`) and About (`about.html`)
- **AND** the footer shows the copyright line for Happy Cynic Software LLC

### Requirement: Home page

The home page (`index.html`) SHALL present the studio's tagline, a short description of what
it builds, and a section promoting Preppd with a link to https://preppd.app.

#### Scenario: Visiting the home page

- **WHEN** a visitor opens happycynic.com
- **THEN** they see the tagline "Useful Software. Skeptically Designed."
- **AND** a Preppd section with a link to https://preppd.app

### Requirement: About page

The about page (`about.html`) SHALL describe the studio and its founder.

#### Scenario: Visiting the about page

- **WHEN** a visitor follows the About link
- **THEN** they see sections about Happy Cynic Software and about the founder

### Requirement: Security contact

The site SHALL publish a security contact at `/.well-known/security.txt` following RFC 9116,
with an `Expires` date in the future.

#### Scenario: Reporting a vulnerability

- **WHEN** a researcher requests https://happycynic.com/.well-known/security.txt
- **THEN** they receive a contact address, an expiry date in the future and the canonical URL

### Requirement: Private iCloud MCP entry

The home page (`index.html`) SHALL present a Private iCloud MCP entry before the Preppd section,
styled consistently with it, that shows the product name, its early-release status, a short
pitch, that it is open source under the Apache-2.0 license, a button labelled "View on GitHub"
linking to https://github.com/HappyCynic/pv-icloud, and the notice "Not affiliated with or
endorsed by Apple. iCloud is a trademark of Apple Inc." The status SHALL NOT name a version
number. The entry SHALL NOT use the Happy Cynic logo or face as the product's icon.

#### Scenario: Visiting the home page

- **WHEN** a visitor opens happycynic.com
- **THEN** they see a Private iCloud MCP entry with its name, early-release status, pitch and
  Apache-2.0 license
- **AND** a "View on GitHub" button linking to https://github.com/HappyCynic/pv-icloud
- **AND** below it, the Preppd section with its link to https://preppd.app

#### Scenario: Trademark notice

- **WHEN** a visitor reads the Private iCloud MCP entry
- **THEN** the entry includes "Not affiliated with or endorsed by Apple. iCloud is a trademark
  of Apple Inc."

#### Scenario: Phone width

- **WHEN** the home page is viewed at phone width
- **THEN** the entry's text and button fit the screen without horizontal scrolling

### Requirement: Copy without em dashes

Visible copy on every page SHALL NOT contain em dashes.

#### Scenario: Reading any page

- **WHEN** a visitor reads any page of the site
- **THEN** no sentence uses an em dash
