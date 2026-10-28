document.addEventListener('DOMContentLoaded', () => {
  // Año automático en el footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Filtrado de menú
  const tabs = document.querySelectorAll('.tab');
  const products = document.querySelectorAll('.product');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      products.forEach(product => {
        if (filter === 'all' || product.getAttribute('data-category') === filter) {
          product.classList.remove('hidden');
        } else {
          product.classList.add('hidden');
        }
      });
    });
  });

  // Botón volver arriba
  const topBtn = document.getElementById('top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
