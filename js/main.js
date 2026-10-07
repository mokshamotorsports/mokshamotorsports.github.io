/* ================================================================
   MOKSHA MOTORSPORTS — Revamped Landing Page Logic
   Navbar toggle & smooth scroll interactions
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0,0); 
  initMobileNav();
  initSmoothScroll();
  initHomeAmbientParallax();
  initHeroScrollFade();
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
      const target = document.querySelector('#achievements') || document.querySelector('#who-we-are') || document.querySelector('#content');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

function initHomeAmbientParallax() {
  const ambientBgs = document.querySelectorAll('.home-ambient-bg, .team-ambient-bg, .partners-ambient-bg, .about-ambient-bg, .alumni-ambient-bg');
  if (!ambientBgs.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) {
    return;
  }

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  let ticking = false;

  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 16;
    targetY = (e.clientY / window.innerHeight - 0.5) * 16;

    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  function updateParallax() {
    mouseX += (targetX - mouseX) * 0.06;
    mouseY += (targetY - mouseY) * 0.06;
    ambientBgs.forEach(bg => {
      bg.style.transform = `translate3d(${mouseX.toFixed(2)}px, ${mouseY.toFixed(2)}px, 0)`;
    });

    if (Math.abs(targetX - mouseX) > 0.01 || Math.abs(targetY - mouseY) > 0.01) {
      requestAnimationFrame(updateParallax);
    } else {
      ticking = false;
    }
  }
}

function initHeroScrollFade() {
  const heroSections = document.querySelectorAll('.hero, .cinematic-hero, .team-hero-section, .partners-hero-section, .about-hero-section, .alumni-hero-section');
  if (!heroSections.length) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ticking = false;

  function updateHeroFade() {
    const scrollPos = window.scrollY;

    heroSections.forEach(heroSection => {
      const heroBg = heroSection.querySelector('.hero-bg-image');
      if (!heroBg) return;

      const heroHeight = heroSection.offsetHeight || window.innerHeight;

      if (scrollPos <= heroHeight * 1.1) {
        // Smooth easing curve (gentle start, natural cinematic fade into ambient background)
        const progress = Math.min(1, Math.max(0, scrollPos / (heroHeight * 0.9)));
        const opacity = Math.max(0, 1 - Math.pow(progress, 1.2));
        heroBg.style.opacity = opacity.toFixed(3);

        if (!isReducedMotion) {
          const scale = 1 + (scrollPos / heroHeight) * 0.05;
          heroBg.style.transform = `scale(${scale.toFixed(3)})`;
        }
      } else if (heroBg.style.opacity !== '0') {
        heroBg.style.opacity = '0';
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeroFade);
      ticking = true;
    }
  }, { passive: true });

  updateHeroFade();
}
