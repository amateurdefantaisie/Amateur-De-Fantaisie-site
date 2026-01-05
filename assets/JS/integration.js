// Onglets pricing + intégrations sociales
document.addEventListener('DOMContentLoaded', function() {
  
  // Pricing Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const pricingCards = document.querySelectorAll('.pricing-card');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Active tab
      tabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Change prices (simulation annuel)
      const tab = this.dataset.tab;
      if (tab === 'annuel') {
        document.querySelectorAll('.amount').forEach(price => {
          price.textContent = price.textContent.replace('49€', '39€').replace('149€', '119€');
        });
      } else {
        document.querySelectorAll('.amount').forEach(price => {
          price.textContent = price.textContent.replace('39€', '49€').replace('119€', '149€');
        });
      }
    });
  });

  // Copy Discord/Telegram links
  document.querySelectorAll('.platform').forEach(platform => {
    platform.addEventListener('click', function(e) {
      if (this.href.includes('YOUR_')) {
        e.preventDefault();
        navigator.clipboard.writeText(this.href.replace('YOUR_', 'amateurdefantaisie'));
        const original = this.querySelector('h4').textContent;
        this.querySelector('h4').textContent = 'Copié !';
        setTimeout(() => {
          this.querySelector('h4').textContent = original;
        }, 2000);
      }
    });
  });

  // Scroll animations
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.pricing-card, .platform').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  });
});
