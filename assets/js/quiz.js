// Basic quiz logic
window.addEventListener('load', () => {
  if (confirm('View correct options? You must be logged in.')) {
    fetch('/api/quizzes')
      .then(res => res.json())
      .then(showQuizzes);
  }
});

function showQuizzes(questions) {
  const container = document.createElement('div');
  container.className = 'quiz-list';
  questions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    const title = document.createElement('h3');
    title.textContent = q.statement;
    card.appendChild(title);
    const list = document.createElement('ul');
    q.options.forEach((opt, idx) => {
      const li = document.createElement('li');
      li.textContent = opt;
      if (q.correctOption === idx) {
        li.classList.add('correct');
      }
      list.appendChild(li);
    });
    card.appendChild(list);
    if (q.explanation) {
      const exp = document.createElement('p');
      exp.textContent = 'Explanation: ' + q.explanation;
      card.appendChild(exp);
    }
    container.appendChild(card);
  });
  document.body.appendChild(container);
}
