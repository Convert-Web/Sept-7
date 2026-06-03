/* ============================================================
   GALERIE JS — Le Sept 7
   Filter, Lightbox, Masonry
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── FILTER ─────────────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items      = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach((item, i) => {
        const show = filter === 'all' || item.dataset.cat === filter;
        item.style.transition = `opacity 0.3s ease ${i * 20}ms, transform 0.3s ease ${i * 20}ms`;
        if (show) {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
          item.style.display = '';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { if(btn.dataset.filter !== filter || filter !== 'all') {} }, 300 + i * 20);
        }
      });
    });
  });

  /* ── LIGHTBOX ────────────────────────────────────────── */
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');
  let   lbIndex  = 0;
  const imgItems = [...items].filter(i => !i.classList.contains('video'));

  const openLightbox = (index) => {
    lbIndex = index;
    const img = imgItems[index]?.querySelector('img');
    if (!img || !lightbox || !lbImg) return;
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };
  const navigate = (dir) => {
    lbIndex = (lbIndex + dir + imgItems.length) % imgItems.length;
    openLightbox(lbIndex);
  };

  imgItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  document.getElementById('lb-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lb-prev')?.addEventListener('click', () => navigate(-1));
  document.getElementById('lb-next')?.addEventListener('click', () => navigate(+1));
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(+1);
  });

});
