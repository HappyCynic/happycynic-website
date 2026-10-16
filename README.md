# Happy Cynic Software

## Overview

This project is to maintain the Happy Cynic Software webpage hosted at happycynic.com. 

## Getting Started

To begin contributing to this project, follow the steps below:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/happycynic-website.git
   cd happycynic-website
   ```

2. **Open in Visual Studio Code**
   Make sure you have [Visual Studio Code](https://code.visualstudio.com/) installed, along with the **Remote - Containers** extension to work with the configuration.

3. **Open the Development Container**
   - From the Command Palette (Ctrl + Shift + P), select **Remote-Containers: Reopen in Container**. 
   - This will set up your development environment based on the configuration in the `.devcontainer` folder, ensuring you have the right tools and dependencies for the project.

## Editing the Code

- Pages: `index.html` (the product shelf), `studio/index.html` (the studio and its founder)
  and `about.html` (a stub that forwards old links to `/studio/`).
- Styling comes from `design-system/`, a managed copy of the Happy Cynic design system that
  the agent pipeline refreshes from `HappyCynic/.github`; never edit it here. Page layout
  lives in `css/site.css` and uses design-system tokens only.
- Asset paths are root-relative (`/design-system/…`, `/css/site.css`) so every page shares
  identical header and footer markup. They work on happycynic.com and under `npm run start`,
  not under a `*.github.io/<repo>/` project URL.
- Use the standard coding practices and ensure you follow the project's contribution guidelines.
- When making changes, be sure to test thoroughly and follow any coding standards that may be in place.

## Running the Live Server

To run the project using a live server, use the following npm script:
```bash
npm run start
```
This command will start a live server and open your application in the default web browser. The server will automatically reload when changes are detected in the code.

## Development Container Configuration

The `.devcontainer` configuration ensures that:
- All necessary tools are installed within a controlled environment.
- Any dependencies required for development are consistently available for all contributors.

### Key Files in `.devcontainer`:
- **devcontainer.json**: Defines the settings, extensions, and configurations needed for the development container.

## Issue Workflow (AI agent)

Feature work can be handed to Claude through GitHub issues using the shared HappyCynic agent
pipeline: a maintainer adds `agent:propose` to an issue for an OpenSpec proposal in a draft
pull request, reviews it, then adds `agent:implement`. See [CLAUDE.md](CLAUDE.md) and the
[pipeline docs](https://github.com/HappyCynic/.github/blob/main/docs/agent-pipeline.md).

## Contributing

We welcome contributions! Please adhere to the following steps:
- Fork the repository.
- Create a new branch.
- Commit your changes.
- Push your branch and create a pull request.

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for more details.

## Contact

For further inquiries or suggestions, please reach out to the maintainers via GitHub.
