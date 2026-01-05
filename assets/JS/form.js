// Formulaire de contact fonctionnel
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulation envoi (remplace par ton backend)
      const btn = form.querySelector('button');
      const originalText = btn.textContent;
      
      btn.textContent = 'Envoi en cours...';
      btn.disabled = true;
      
      setTimeout(() => {
        btn.textContent = '✅ Message envoyé !';
        btn.style.background = '#10b981';
        
        setTimeout(() => {
          form.reset();
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.background = '';
        }, 3000);
      }, 1500);
    });
  }
});
