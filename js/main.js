/* ============================================================
   MAIN JS — Le Sept 7
   Loader, Navbar, Scroll animations, Rain, Burger menu
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── PAGE LOADER ──────────────────────────────────────── */
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 2200);
    document.body.style.overflow = 'hidden';
  }

  /* ── NAVBAR SCROLL ────────────────────────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ── BURGER MENU ──────────────────────────────────────── */
  const burger = document.querySelector('.nav-burger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── SCROLL REVEAL ────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ── RAIN EFFECT ──────────────────────────────────────── */
  const rainContainer = document.querySelector('.hero-rain');
  if (rainContainer) {
    const DROP_COUNT = window.innerWidth > 768 ? 60 : 28;
    for (let i = 0; i < DROP_COUNT; i++) {
      const drop = document.createElement('div');
      drop.className = 'rain-drop';
      const left   = Math.random() * 100;
      const height = Math.random() * 60 + 40;
      const dur    = Math.random() * 1.5 + 0.8;
      const delay  = Math.random() * 3;
      const opacity = Math.random() * 0.4 + 0.1;
      drop.style.cssText = `
        left:${left}%;
        height:${height}px;
        animation-duration:${dur}s;
        animation-delay:-${delay}s;
        opacity:${opacity};
      `;
      rainContainer.appendChild(drop);
    }
  }

  /* ── PARALLAX HERO ────────────────────────────────────── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroBg.style.transform = `translateY(${y * 0.35}px)`;
    }, { passive: true });
  }

  /* ── ACTIVE NAV LINK ──────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === './') || href === currentPage) {
      link.classList.add('active');
    }
  });

  /* ── SMOOTH COUNTER ANIMATION ─────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const update = () => {
            start = Math.min(start + step, target);
            el.textContent = Math.floor(start) + suffix;
            if (start < target) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  /* ── CURSOR GLOW (desktop) ────────────────────────────── */
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position:fixed; pointer-events:none; z-index:9998;
      width:300px; height:300px; border-radius:50%;
      background:radial-gradient(circle, rgba(139,43,255,0.06) 0%, transparent 70%);
      transform:translate(-50%,-50%);
      transition: left 0.15s ease, top 0.15s ease;
    `;
    document.body.appendChild(glow);
    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    });
  }

});
