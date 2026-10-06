/* ================================================================
   MOKSHA MOTORSPORTS — Revamped Landing Page Logic
   Navbar toggle & smooth scroll interactions
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0,0); initMobileNav();
  initSmoothScroll();
});

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.contains('is-open');
      if (isOpen) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        menu.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
}

function initSmoothScroll() {
  const scrollIndicator = document.querySelector('.hero-scroll');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const target = document.querySelector('#content');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
