const express = require('express');
const fs = require('fs');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'assets/data');
const QUESTIONS_FILE = path.join(DATA_DIR, 'questions.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

app.use(express.json());
app.use(session({
  secret: 'pakmcqs-secret',
  resave: false,
  saveUninitialized: true
}));

function readJSON(file) {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file));
}

function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Simple login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = readJSON(USERS_FILE);
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  req.session.user = { id: user.id, role: user.role, email: user.email };
  res.json({ message: 'Logged in', user: req.session.user });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => res.json({ message: 'Logged out' }));
});

function requireLogin(req, res, next) {
  if (!req.session.user) return res.status(401).json({ message: 'Login required' });
  next();
}

// CRUD for questions
app.get('/api/quizzes', (req, res) => {
  const data = readJSON(QUESTIONS_FILE);
  const sanitized = data.map(q => {
    const question = { ...q };
    if (!req.session.user) delete question.correctOption;
    return question;
  });
  res.json(sanitized);
});

app.post('/api/quizzes', requireLogin, (req, res) => {
  const data = readJSON(QUESTIONS_FILE);
  const newQuestion = {
    id: Date.now(),
    statement: req.body.statement,
    options: req.body.options,
    correctOption: req.body.correctOption,
    explanation: req.body.explanation,
    category: req.body.category,
    difficulty: req.body.difficulty
  };
  data.push(newQuestion);
  writeJSON(QUESTIONS_FILE, data);
  res.status(201).json(newQuestion);
});

app.put('/api/quizzes/:id', requireLogin, (req, res) => {
  const data = readJSON(QUESTIONS_FILE);
  const idx = data.findIndex(q => q.id == req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Question not found' });
  data[idx] = { ...data[idx], ...req.body };
  writeJSON(QUESTIONS_FILE, data);
  res.json(data[idx]);
});

app.delete('/api/quizzes/:id', requireLogin, (req, res) => {
  let data = readJSON(QUESTIONS_FILE);
  const lengthBefore = data.length;
  data = data.filter(q => q.id != req.params.id);
  if (data.length === lengthBefore) return res.status(404).json({ message: 'Question not found' });
  writeJSON(QUESTIONS_FILE, data);
  res.json({ message: 'Deleted' });
});

app.get('/api/quizzes/export', requireLogin, (req, res) => {
  const data = readJSON(QUESTIONS_FILE);
  res.json(data);
});

app.use(express.static(__dirname));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
