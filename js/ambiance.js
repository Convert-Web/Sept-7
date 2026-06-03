/* ============================================================
   AMBIANCE JS — Le Sept 7
   Particles, mood player, animations
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── NEON PARTICLES ─────────────────────────────────── */
  const container = document.querySelector('.neon-particles');
  if (container) {
    const colors = ['#8b2bff','#a855f7','#ff4136','#f0a500','#fff'];
    const COUNT = window.innerWidth > 768 ? 30 : 14;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size  = Math.random() * 4 + 2;
      const left  = Math.random() * 100;
      const dur   = Math.random() * 8 + 6;
      const delay = Math.random() * 8;
      const drift = (Math.random() - 0.5) * 120;
      const color = colors[Math.floor(Math.random() * colors.length)];
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${left}%;
        background:${color};
        box-shadow: 0 0 ${size*3}px ${color};
        --drift:${drift}px;
        animation-duration:${dur}s;
        animation-delay:-${delay}s;
      `;
      container.appendChild(p);
    }
  }

  /* ── MOOD PLAYER (visual only, no audio required) ──── */
  const bars     = document.querySelectorAll('.mood-bar');
  const playBtn  = document.querySelector('.mood-play');
  let   playing  = false;
  let   intervals = [];

  const startBars = () => {
    bars.forEach(bar => {
      const iv = setInterval(() => {
        const h = Math.random() * 90 + 10;
        bar.style.height = h + '%';
      }, 120);
      intervals.push(iv);
    });
  };
  const stopBars = () => {
    intervals.forEach(clearInterval);
    intervals = [];
    bars.forEach(bar => { bar.style.height = '30%'; });
  };

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      playing = !playing;
      playBtn.textContent = playing ? '⏸' : '▶';
      playing ? startBars() : stopBars();
    });
  }

  /* ── TIMELINE REVEAL ────────────────────────────────── */
  const timelineItems = document.querySelectorAll('.timeline-item');
  const tObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, i * 120);
        tObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    tObserver.observe(item);
  });

});
