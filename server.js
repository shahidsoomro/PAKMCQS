const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/categories', (req, res) => {
  res.render('categories');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});
app.get('/results', (req, res) => {
  res.render('results');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/signup', (req, res) => {
  res.render('signup');
});
app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
