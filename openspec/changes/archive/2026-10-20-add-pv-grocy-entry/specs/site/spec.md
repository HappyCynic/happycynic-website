## MODIFIED Requirements

### Requirement: Home page

The home page (`index.html`) SHALL present a hero with the tagline "Useful Software.
Skeptically Designed." as its only `h1`, a products section (`id="products"`) with one product
panel per product, and a short Studio teaser linking to `/studio/`. Each product panel SHALL
show a status badge, the product name and a short pitch, and a "does / doesn't" pair when the
maintainer has supplied one. The hero SHALL NOT contain a primary button.

#### Scenario: Visiting the home page

- **WHEN** a visitor opens happycynic.com
- **THEN** they see the tagline "Useful Software. Skeptically Designed."
- **AND** a Private iCloud MCP panel, then a Private Grocy MCP panel, then a Preppd panel
- **AND** the Private iCloud MCP and Private Grocy MCP panels each list what the product does
  and what it does not do

#### Scenario: Preppd links out

- **WHEN** a visitor reads the Preppd panel
- **THEN** it shows a "Coming Soon" badge and a button linking to https://preppd.app

## ADDED Requirements

### Requirement: Private Grocy MCP entry

The home page (`index.html`) SHALL present a Private Grocy MCP product panel after the Private
iCloud MCP panel and before the Preppd panel that shows the product name, an "Early Release"
status badge, a short pitch, its "does / doesn't" pair, that it is open source under the
Apache-2.0 license, a button labelled "View on GitHub" linking to
https://github.com/HappyCynic/pv-grocy, and the notice "Not affiliated with or endorsed by the
Grocy project." The status SHALL NOT name a version number. The panel SHALL NOT use the Happy
Cynic logo or face as the product's icon. The site SHALL NOT have a separate page for the
product.

#### Scenario: Visiting the home page

- **WHEN** a visitor opens happycynic.com
- **THEN** below the Private iCloud MCP panel they see a Private Grocy MCP panel with its name,
  early-release status, pitch, "does / doesn't" pair and Apache-2.0 license
- **AND** a "View on GitHub" button linking to https://github.com/HappyCynic/pv-grocy

#### Scenario: Affiliation notice

- **WHEN** a visitor reads the Private Grocy MCP panel
- **THEN** the panel includes "Not affiliated with or endorsed by the Grocy project."

#### Scenario: Phone width

- **WHEN** the home page is viewed at phone width
- **THEN** the panel's media, text and buttons stack and fit the screen without horizontal
  scrolling
