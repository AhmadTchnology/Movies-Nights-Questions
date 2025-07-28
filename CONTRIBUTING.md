# Contributing to uTech Movies Trivia

Thank you for your interest in contributing to uTech Movies Trivia! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- A modern web browser

### Development Setup
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/utech-movies-trivia.git
cd utech-movies-trivia
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser

## 📝 Types of Contributions

### 1. Adding New Questions
We welcome new movie trivia questions! Please follow these guidelines:

- **Format**: Add questions to `questions.json`
- **Categories**: Focus on popular movies (1990s-present)
- **Difficulty**: Mix easy, medium, and hard questions
- **Accuracy**: Ensure all answers are correct

**Example format:**
```json
{
  "q": "Which 1994 film features the quote 'Life is like a box of chocolates'?",
  "choices": ["Forrest Gump", "The Shawshank Redemption", "Pulp Fiction", "The Lion King"],
  "answer": 0
}
```

### 2. Bug Fixes
- **Report bugs** using GitHub Issues
- **Include steps** to reproduce the issue
- **Test thoroughly** before submitting
- **Follow the existing code style**

### 3. Feature Enhancements
Great ideas for new features:
- **Categories**: Add genre-based categories (Action, Comedy, Horror, etc.)
- **Difficulty levels**: Easy, Medium, Hard modes
- **Timer functionality**: Countdown for each question
- **Sound effects**: Audio feedback for answers
- **Animations**: Smooth transitions and effects
- **User profiles**: Persistent player profiles
- **Statistics**: Detailed player statistics

### 4. UI/UX Improvements
- **Responsive design** improvements
- **Accessibility** enhancements
- **Dark/light mode** toggle
- **Better mobile experience**
- **Loading states** and animations

## 🔄 Development Workflow

### Branch Naming
Use descriptive branch names:
- `feature/add-timer-functionality`
- `bugfix/fix-leaderboard-sorting`
- `docs/update-readme`
- `questions/add-new-movies`

### Commit Messages
Follow conventional commit format:
- `feat: add timer functionality`
- `fix: resolve leaderboard sorting issue`
- `docs: update installation instructions`
- `questions: add 10 new sci-fi questions`

### Testing
Before submitting:
1. **Test the game** thoroughly
2. **Check responsive design** on mobile and desktop
3. **Verify multiplayer functionality** with multiple browsers
4. **Test edge cases** (empty names, special characters, etc.)

## 🎯 Code Style Guidelines

### JavaScript
- Use **ES6+ features** (const/let, arrow functions, async/await)
- **Descriptive variable names** (e.g., `currentQuestionIndex` instead of `i`)
- **Comments** for complex logic
- **Error handling** with try/catch blocks

### HTML/CSS
- **Semantic HTML** elements
- **Consistent indentation** (2 spaces)
- **Tailwind CSS classes** for styling
- **Responsive design** with mobile-first approach

### JSON Files
- **Proper formatting** with 2-space indentation
- **Valid JSON** syntax (no trailing commas)
- **Consistent structure** across all questions

## 🧪 Testing Checklist

### Before Submitting PR
- [ ] Game starts without errors
- [ ] Questions load correctly
- [ ] Leaderboard updates in real-time
- [ ] Mobile responsive design works
- [ ] Multiplayer functionality tested
- [ ] No console errors
- [ ] All questions have correct answers

### Test Scenarios
1. **Single player game** completion
2. **Multiple concurrent players**
3. **Network disconnection handling**
4. **Special characters in names**
5. **Empty leaderboard state**
6. **Large number of players**

## 📋 Pull Request Process

1. **Create an issue** first for major changes
2. **Make your changes** in a feature branch
3. **Test thoroughly** using the checklist above
4. **Update documentation** if needed
5. **Submit PR** with clear description
6. **Address review feedback** promptly

### PR Description Template
```markdown
## Changes Made
- Brief description of changes
- Issue number (if applicable)

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Multiplayer functionality verified
- [ ] No console errors

## Screenshots
(Include if UI changes were made)
```

## 🆘 Getting Help

### Resources
- **Issues**: Check existing [GitHub Issues](https://github.com/yourusername/utech-movies-trivia/issues)
- **Discussions**: Join [GitHub Discussions](https://github.com/yourusername/utech-movies-trivia/discussions)
- **Wiki**: Read our [Wiki](https://github.com/yourusername/utech-movies-trivia/wiki)

### Contact
- **Issues**: Create a new issue for bugs or feature requests
- **Email**: Contact maintainers if needed

## 🎉 Recognition

Contributors will be:
- **Listed in README** for significant contributions
- **Mentioned in release notes** for new features
- **Credited in commit history** for all contributions

Thank you for helping make uTech Movies Trivia better! 🎬✨