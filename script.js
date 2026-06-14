document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-open');
  menuOverlay.classList.toggle('is-open');
});

menuOverlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('is-open');
    menuOverlay.classList.remove('is-open');
  });
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 6px 24px rgba(38, 54, 80, 0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});

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
