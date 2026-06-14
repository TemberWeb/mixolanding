document.getElementById('year').textContent = new Date().getFullYear();

/* Fullscreen menu */
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');

function closeMenu() {
  menuToggle.classList.remove('is-open');
  menuOverlay.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuOverlay.classList.toggle('is-open');
  menuToggle.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
});

menuOverlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    closeMenu();
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  });
});

/* Header shadow on scroll */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 20 ? '0 6px 24px rgba(38, 54, 80, 0.08)' : 'none';
});

/* Scroll reveal */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 5) * 0.08}s`;
  observer.observe(el);
});

/* Hero slideshow */
const slides = document.querySelectorAll('.hero__slide');
const dotsContainer = document.getElementById('heroDots');
let current = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('is-active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('span');

function goToSlide(index) {
  slides[current].classList.remove('is-active');
  dots[current].classList.remove('is-active');
  current = index;
  slides[current].classList.add('is-active');
  dots[current].classList.add('is-active');
}

setInterval(() => {
  goToSlide((current + 1) % slides.length);
}, 6000);
