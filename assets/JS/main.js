// Initialisation AOS
AOS.init({
  duration: 900,
  once: false,
  easing: 'ease-in-out'
});

// Animation boutons au hover
document.querySelectorAll('.btn-primary, .btn-nav').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

// Effet apparition progressive custom
const revealElements = document.querySelectorAll('.card, .section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.transform = 'translateY(40px)';
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.8s ease';
  observer.observe(el);
});

