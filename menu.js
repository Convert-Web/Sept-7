/* ============================================================
   MENU PAGE JS — Le Sept 7
   Tabs, filtres, animations
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── CATEGORY TABS ──────────────────────────────────── */
  const tabs    = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.menu-section');

  const switchTab = (targetId) => {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === targetId));
    sections.forEach(s => {
      const isActive = s.id === targetId;
      s.classList.toggle('active', isActive);
      if (isActive) {
        // Stagger reveal of cards in the newly-shown section
        s.querySelectorAll('.menu-item').forEach((card, i) => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(24px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, i * 60);
        });
      }
    });
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // Init first tab
  if (tabs.length) switchTab(tabs[0].dataset.tab);

  /* ── SCROLL SPY (highlight tab on scroll) ──────────── */
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === id));
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sectionObserver.observe(s));

});
