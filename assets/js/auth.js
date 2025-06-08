// Simple login form handling
if (document.getElementById('studentLoginForm')) {
  document.getElementById('studentLoginForm').addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('studentEmail').value;
    const password = document.getElementById('studentPassword').value;
    await login(email, password);
  });
}

if (document.getElementById('adminLoginForm')) {
  document.getElementById('adminLoginForm').addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    await login(email, password);
  });
}

async function login(email, password) {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (res.ok) {
    alert('Logged in');
    window.location.href = 'dashboard.html';
  } else {
    alert('Login failed');
  }
}
