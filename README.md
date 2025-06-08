# PAKMCQS

This project provides a simple multiple-choice question (MCQ) system for PakStudy preparation. It includes basic admin and student dashboards as well as a small Express backend for managing quiz questions.

## Folder Structure

```
- index.html              # Landing page
- login.html              # Student & Admin login
- signup.html             # Student registration
- dashboard.html          # Student dashboard
- categories.html         # Browse categories
- about.html              # About the site
- contact.html            # Contact page
- results.html            # Quiz results
- assets/
  - css/                  # Stylesheets
  - js/                   # Client-side scripts
  - images/               # Logo and avatar placeholders
  - data/                 # JSON files storing users and questions
- server.js               # Express server
```

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in your browser.

Quizzes can be managed via the API endpoints under `/api`.

