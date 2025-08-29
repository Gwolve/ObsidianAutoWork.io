
document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = year;

  // Simple mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // WhatsApp booking button with placeholder number fallback
  const waButtons = document.querySelectorAll('[data-wa]');
  waButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const phone = (btn.getAttribute('data-wa') || '').replace(/\D/g,'');
      const msg = encodeURIComponent('Hi, I would like to book a service with Obsidian Autoworks.');
      const url = phone ? `https://wa.me/${phone}?text=${msg}` : `https://wa.me/?text=${msg}`;
      window.open(url, '_blank');
    });
  });
});
