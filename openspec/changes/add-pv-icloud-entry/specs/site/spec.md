## ADDED Requirements

### Requirement: Private iCloud MCP entry

The home page (`index.html`) SHALL present a Private iCloud MCP entry, styled consistently with
the Preppd section, that shows the product name, its early-release status, a short pitch, that
it is open source under the Apache-2.0 license, a button labelled "View on GitHub" linking to
https://github.com/HappyCynic/pv-icloud, and the notice "Not affiliated with or endorsed by
Apple. iCloud is a trademark of Apple Inc." The entry SHALL NOT use the Happy Cynic logo or face
as the product's icon.

#### Scenario: Visiting the home page

- **WHEN** a visitor opens happycynic.com
- **THEN** they see a Private iCloud MCP entry with its name, early-release status, pitch and
  Apache-2.0 license
- **AND** a "View on GitHub" button linking to https://github.com/HappyCynic/pv-icloud
- **AND** the Preppd section with its link to https://preppd.app is still shown

#### Scenario: Trademark notice

- **WHEN** a visitor reads the Private iCloud MCP entry
- **THEN** the entry includes "Not affiliated with or endorsed by Apple. iCloud is a trademark
  of Apple Inc."

#### Scenario: Phone width

- **WHEN** the home page is viewed at phone width
- **THEN** the entry's text and button fit the screen without horizontal scrolling
