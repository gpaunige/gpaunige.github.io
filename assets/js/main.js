// GAP Analytics — main.js

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Contact form (demo handler)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Message sent';
    btn.style.opacity = '0.7';
    btn.disabled = true;
  });
}

// Stat counter animation
function animateValue(el, end, duration) {
  let start = 0; const step = duration / end;
  const timer = setInterval(() => {
    start += 1; el.textContent = start + (el.dataset.suffix || '');
    if (start >= end) { el.textContent = end + (el.dataset.suffix || ''); clearInterval(timer); }
  }, step);
}
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.animated) {
      e.target.dataset.animated = '1';
      e.target.querySelectorAll('[data-count]').forEach(el => animateValue(el, parseInt(el.dataset.count), 1200));
    }
  });
}, { threshold: 0.5 });
const statRow = document.querySelector('.hero-stat-row');
if (statRow) statObserver.observe(statRow);
