document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Mobile hamburger toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // account for nav height
          behavior: 'smooth',
        });
      }
      // close mobile menu after click
      navMenu.classList.remove('show');
    });
  });
});
