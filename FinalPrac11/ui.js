// ui.js — dynamic UI and responsive behavior

export function handleViewportChange() {
  if (window.innerWidth < 600) {
    document.body.style.background = '#f0f8ff';
  } else {
    document.body.style.background = 'white';
  }
}

export function addDynamicSessions() {
  const sessionsDiv = document.getElementById('sessions');

  // Event delegation for session click
  sessionsDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('session')) {
      alert("You selected: " + e.target.textContent);
    }
  });

  // Button to add new session dynamically
  const addBtn = document.getElementById('addSessionBtn');
  addBtn.addEventListener('click', () => {
    const newSession = document.createElement('div');
    newSession.classList.add('session');
    newSession.dataset.time = '12:00';
    newSession.textContent = 'New Session - 12:00 PM';
    sessionsDiv.appendChild(newSession);
    alert('New session added!');
  });
}