// Mobile menu toggle
const menuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Animate fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));