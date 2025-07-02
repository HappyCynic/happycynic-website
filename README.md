# Happy Cynic Software

## Overview

This project is to maintain the Happy Cynic Software webpage hosted at happycynic.com. 

## Getting Started

To begin contributing to this project, follow the steps below:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/happy-cynic-software.git
   cd happy-cynic-software
   ```

2. **Open in Visual Studio Code**
   Make sure you have [Visual Studio Code](https://code.visualstudio.com/) installed, along with the **Remote - Containers** extension to work with the configuration.

3. **Open the Development Container**
   - From the Command Palette (Ctrl + Shift + P), select **Remote-Containers: Reopen in Container**. 
   - This will set up your development environment based on the configuration in the `.devcontainer` folder, ensuring you have the right tools and dependencies for the project.

## Editing the Code

- You can find the main application files in the `src` directory.
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
- **Dockerfile**: Contains the commands to build the container with the required development environment.

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