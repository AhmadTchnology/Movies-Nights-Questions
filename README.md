# 🎬 uTech Movies Trivia

A fun and interactive movie trivia game with real-time multiplayer leaderboard functionality!

## ✨ Features

- **🎮 Interactive Gameplay**: Engaging movie trivia questions with multiple choice answers
- **🌍 Real-time Multiplayer**: Shared leaderboard visible to all players across the network
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🔄 Auto-updating**: Leaderboard refreshes automatically every 5 seconds
- **💾 Persistent Storage**: Scores are saved even after server restarts
- **⚡ Fast Loading**: Questions loaded from JSON for easy customization
- **🎨 Modern UI**: Clean, dark-themed interface with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
git clone https://github.com/yourusername/utech-movies-trivia.git
cd utech-movies-trivia
```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### For Development

```bash
# Start with auto-restart on file changes
npm run dev

# Or serve static files (without multiplayer features)
npm run serve
```

## 🎯 How to Play

1. **Enter your name** to start the game
2. **Answer 10 movie trivia questions** - each correct answer gives you 10 points
3. **View your final score** at the end
4. **Check the leaderboard** to see how you rank against other players
5. **Play again** to improve your score!

## 🌐 Multiplayer Setup

### Local Network Play
- Share your computer's local IP address with friends
- They can access the game at `http://YOUR_LOCAL_IP:3000`
- All players see the same leaderboard in real-time

### Internet Play (Advanced)
1. **Find your public IP address**
2. **Configure port forwarding** on your router for port 3000
3. **Share your public IP** with friends
4. **Access via**: `http://YOUR_PUBLIC_IP:3000`

## 🛠️ Customization

### Environment Variables

Create a `.env` file (optional):

```bash
# Netlify questions URL (optional - uses default if not set)
QUESTIONS_URL=https://movies-questions.netlify.app/netlify-questions.json
```

### Using External Questions from Netlify (Required)
**Pre-configured URL**: The server is already configured to use:
```
https://movies-questions.netlify.app/netlify-questions.json
```

**Custom URL** (optional): If you want to use your own questions file:
1. **Upload your questions.json to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Create new site → "Deploy manually"
   - Upload your `questions.json` file
   - Get your public URL

2. **Configure your server**:
   ```bash
   export QUESTIONS_URL=https://your-site.netlify.app/questions.json
   # Windows:
   set QUESTIONS_URL=https://your-site.netlify.app/questions.json
   ```

3. **The server will automatically**:
   - Fetch questions exclusively from your Netlify URL
   - Proxy requests to avoid CORS issues
   - **Note**: Local questions.json has been removed - Netlify is now the only source

### Adding New Questions
Create your `questions.json` file for Netlify:

```json
[
  {
    "q": "Your question here?",
    "choices": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "answer": 0
  }
]
```

### Styling
- Main styles are in the `<style>` section of `index.html`
- Colors use Tailwind CSS classes for easy modification
- Dark theme optimized for readability

## 📁 Project Structure

```
utech-movies-trivia/
├── index.html          # Main game interface
├── server.js           # Express server for multiplayer
├── questions.json      # Movie trivia questions
├── package.json        # Dependencies and scripts
├── leaderboard.json    # Shared scores (auto-created)
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Add new questions** to `questions.json`
2. **Improve UI/UX** with better styling
3. **Add features** like categories, difficulty levels, or timers
4. **Fix bugs** or improve performance
5. **Enhance documentation**

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 🐛 Known Issues

- Server must be running for multiplayer features
- No user authentication (scores are tied to names only)
- Limited to 10 leaderboard entries

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Express.js](https://expressjs.com/) for the backend
- Styled with [Tailwind CSS](https://tailwindcss.com/) for responsive design
- Questions sourced from movie trivia enthusiasts

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/yourusername/utech-movies-trivia/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

---

**Happy Trivia Gaming!** 🎬✨

Made with ❤️ By uTech