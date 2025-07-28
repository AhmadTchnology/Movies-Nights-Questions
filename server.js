const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

// Import fetch for Node.js compatibility
let fetch;
try {
  // Node.js 18+ has built-in fetch
  fetch = global.fetch || require('node-fetch');
} catch (e) {
  fetch = require('node-fetch');
}

const app = express();
const PORT = process.env.PORT || 3000;
const LEADERBOARD_FILE = path.join(__dirname, 'leaderboard.json');

// Configuration for external questions source
const NETLIFY_QUESTIONS_URL = process.env.QUESTIONS_URL || 'https://movies-questions.netlify.app/netlify-questions.json';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initialize leaderboard file if it doesn't exist
async function initLeaderboard() {
  try {
    await fs.access(LEADERBOARD_FILE);
  } catch {
    await fs.writeFile(LEADERBOARD_FILE, JSON.stringify({}));
  }
}

// Get leaderboard
app.get('/api/leaderboard', async (req, res) => {
  try {
    const data = await fs.readFile(LEADERBOARD_FILE, 'utf8');
    const scores = JSON.parse(data);
    
    // Sort by score descending
    const sorted = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
    
    res.json(sorted);
  } catch (error) {
    console.error('Error reading leaderboard:', error);
    res.json({});
  }
});

// Update leaderboard
app.put('/api/leaderboard', async (req, res) => {
  try {
    const newScores = req.body;
    await fs.writeFile(LEADERBOARD_FILE, JSON.stringify(newScores, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving leaderboard:', error);
    res.status(500).json({ error: 'Failed to save scores' });
  }
});

// Proxy endpoint for questions to avoid CORS issues
app.get('/api/questions', async (req, res) => {
  try {
    const response = await fetch(NETLIFY_QUESTIONS_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch questions: ${response.status}`);
    }
    
    const questions = await response.json();
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions from Netlify:', error);
    res.status(500).json({ 
      error: 'Failed to load questions from Netlify. Please check your QUESTIONS_URL configuration.'
    });
  }
});

// Start server
async function start() {
  await initLeaderboard();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Shared leaderboard enabled!');
  });
}

start().catch(console.error);