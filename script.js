// Lenis smooth scroll
const lenis = new Lenis({
  autoRaf: true,
});

// Smooth scroll vers les sections au clic sur les liens
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      lenis.scrollTo(targetElement, {
        offset: -80, // Décalage pour la navbar fixe
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  });
});

// Animation des stats au chargement
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = +el.getAttribute('data-target');
    let count = 0;
    const step = Math.ceil(target / 60);
    const update = () => {
      count += step;
      if (count >= target) {
        el.textContent = target + (target === 100 ? '%' : '');
      } else {
        el.textContent = count + (target === 100 ? '%' : '');
        requestAnimationFrame(update);
      }
    };
    update();
  });
});

// Animation hover pour les boutons CTA
document.querySelectorAll('.cta').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('hovered');
  });
  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('hovered');
  });
});