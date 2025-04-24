# Contributing to Refugee Connect Platform

Thank you for your interest in contributing to the Refugee Connect Platform! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) to foster an inclusive and respectful community.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue on our GitHub repository with the following information:
- A clear, descriptive title
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (browser, OS, etc.)

### Suggesting Enhancements

We welcome suggestions for enhancements! Please create an issue with:
- A clear, descriptive title
- Detailed description of the proposed enhancement
- Any relevant mockups or examples
- Explanation of why this enhancement would be valuable

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Run tests and ensure they pass
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature-name`)
7. Open a Pull Request

## Development Guidelines

### Code Style

- Follow the existing code style in the project
- Use meaningful variable and function names
- Write comments for complex logic
- Keep functions small and focused on a single task

### JavaScript/React Guidelines

- Use functional components with hooks
- Avoid unnecessary re-renders
- Keep components pure when possible
- Use proper prop types

### CSS/Tailwind Guidelines

- Follow the utility-first approach with Tailwind CSS
- Create custom components for repeated patterns
- Use responsive design principles

### Internationalization (i18n)

- All user-facing text should be wrapped in translation functions
- Add new translations to all language files
- Test with RTL languages when making layout changes

### Testing

- Write tests for new features
- Ensure existing tests pass before submitting a PR
- Test across different browsers and devices when possible

## Localization Contributions

We especially welcome contributions to improve translations or add new languages:

1. Fork the repository
2. Add or modify translation files in `public/locales/[language-code]/common.json`
3. Submit a pull request with your changes

## Questions?

If you have any questions about contributing, please reach out to the project maintainers or create an issue labeled "question" in the GitHub repository.

Thank you for helping improve the Refugee Connect Platform!

## 5. Missing Configuration Files

You're missing essential Next.js configuration files:
- `next.config.js` - For Next.js configuration
- `tailwind.config.js` - For Tailwind CSS configuration
- `postcss.config.js` - For PostCSS configuration

## 6. Code of Conduct Reference

In your CONTRIBUTING.md, you reference a Code of Conduct file that doesn't appear to exist: