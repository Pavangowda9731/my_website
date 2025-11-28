// ===================== Smooth Scroll =====================
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===================== Scroll Reveal Animation =====================
function revealOnScroll() {
  const elements = document.querySelectorAll('.exp-card, .project-card, .skill-box');

  const triggerPoint = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerPoint) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Initialize hidden state
const items = document.querySelectorAll('.exp-card, .project-card, .skill-box');
items.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = '0.6s ease';
});