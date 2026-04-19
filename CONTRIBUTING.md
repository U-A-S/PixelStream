# Contributing to PixelStream 🎬

Thank you for considering contributing to PixelStream! We welcome contributions from the community to help make visual innovation accessible to everyone.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you agree to uphold this code. Please report unacceptable behavior to [umair.siddiquie@gmail.com](mailto:umair.siddiquie@gmail.com).

## How Can I Contribute?

### 🐞 Reporting Bugs
- Check the [Issues](https://github.com/U-A-S/PixelStream/issues) to avoid duplicates
- Use the bug report template
- Include:
  - Steps to reproduce
  - Expected vs. actual behavior
  - Browser/OS details
  - Screenshots or video clips if applicable

### 💡 Suggesting Features
- Open a feature request issue
- Clearly describe the use case
- Explain how it aligns with PixelStream's mission: *Experience Visual Innovation in High Definition*

### 🔧 Code Contributions
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test thoroughly (see [Testing](#testing))
5. Commit with a clear message (see [Commit Guidelines](#commit-guidelines))
6. Push and open a Pull Request

### 📚 Documentation Improvements
- Fix typos or clarify instructions
- Add examples for new features
- Improve accessibility (alt text, ARIA labels, etc.)

## Development Setup

### Prerequisites
- Node.js >= 18.x
- npm or yarn
- Git
- Modern browser for testing

### Installation
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/PixelStream.git
cd PixelStream

# Install dependencies
npm install

# Start development server (if applicable)
npm run dev
```

### Project Structure
```
PixelStream/
├── src/
│   ├── components/    # Reusable UI components
│   ├── utils/         # Helper functions
│   ├── styles/        # CSS/SCSS files
│   └── assets/        # Images, icons, fonts
├── public/
│   └── index.html     # Main HTML template
├── tests/             # Test files
├── docs/              # Documentation
├── .github/           # GitHub workflows & templates
├── package.json
├── README.md
└── CONTRIBUTING.md
```

## Pull Request Process

1. **Branch Naming**: Use descriptive names:
   - `feature/video-encryption`
   - `fix/mobile-playback-issue`
   - `docs/update-readme`

2. **PR Title**: Follow [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat: add adaptive bitrate streaming
   fix: resolve MP4 download timeout on Safari
   docs: update contribution guidelines
   ```

3. **PR Description**:
   - Link to related issue(s)
   - Summarize changes
   - Include testing instructions
   - Add screenshots/GIFs for UI changes

4. **Review Process**:
   - At least one maintainer approval required
   - Address all review comments
   - Ensure CI checks pass

## Coding Standards

### JavaScript/TypeScript
- Use ESLint + Prettier config (included in repo)
- Prefer `const`/`let` over `var`
- Use async/await for promises
- Add JSDoc for public functions

### HTML/CSS
- Semantic HTML5 elements
- BEM methodology for CSS classes
- Mobile-first responsive design
- Ensure WCAG 2.1 AA accessibility compliance

### Video/Asset Handling
- Optimize media files before committing
- Use modern formats (WebP, AV1) where possible
- Include fallbacks for older browsers

## Testing

### Run Tests
```bash
# Unit tests
npm test

# End-to-end tests
npm run test:e2e

# Linting
npm run lint

# All checks
npm run verify
```

### Manual Testing Checklist
- [ ] Video plays on Chrome, Firefox, Safari, Edge
- [ ] Download link works securely
- [ ] Responsive layout on mobile/tablet/desktop
- [ ] No console errors
- [ ] Accessibility audit passes (axe-core)

## Documentation

- Update `README.md` for user-facing changes
- Add JSDoc comments for new functions
- Document API changes in `/docs/api.md`
- Keep `CHANGELOG.md` updated

## Commit Guidelines

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Example**:
```
feat(video): implement end-to-end encryption for exports

- Add AES-256 encryption layer to download pipeline
- Integrate secure token validation
- Update security documentation

Closes #42
```

## 🌟 Recognition

Contributors will be:
- Listed in `README.md` under "Contributors"
- Mentioned in release notes
- Invited to join the PixelStream community Discord (optional)

## ❓ Questions?

- Open a [Discussion](https://github.com/U-A-S/PixelStream/discussions)
- Join our community channel
- Email: [umair.siddiquie@gmail.com](mailto:umair.siddiquie@gmail.com)

---

<div align="center">

**Thank you for helping make PixelStream better!** 🚀

*Experience Visual Innovation in High Definition*

</div>
```
