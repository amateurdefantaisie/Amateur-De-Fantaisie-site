// Initialisation AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(0, 0, 0, 0.98)';
      navbar.style.padding = '0.8rem 5%';
    } else {
      navbar.style.background = 'rgba(0, 0, 0, 0.95)';
      navbar.style.padding = '1rem 5%';
    }
  });

  // Smooth scroll pour les liens
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
