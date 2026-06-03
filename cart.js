/* ============================================================
   CART / ORDER SYSTEM — Le Sept 7
   Panier, quantités, total, envoi WhatsApp/SMS
   ============================================================ */

const Cart = (() => {
  let items = [];  // { id, name, price, qty }

  /* ── ADD ITEM ─────────────────────────────────────────── */
  const add = (id, name, price) => {
    const existing = items.find(i => i.id === id);
    if (existing) {
      existing.qty++;
    } else {
      items.push({ id, name, price: parseFloat(price), qty: 1 });
    }
    render();
    animateCartBounce();
  };

  /* ── REMOVE ITEM ──────────────────────────────────────── */
  const remove = (id) => {
    items = items.filter(i => i.id !== id);
    render();
  };

  /* ── UPDATE QTY ───────────────────────────────────────── */
  const updateQty = (id, delta) => {
    const item = items.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) remove(id);
    else render();
  };

  /* ── CLEAR CART ───────────────────────────────────────── */
  const clear = () => {
    items = [];
    render();
  };

  /* ── TOTAL ────────────────────────────────────────────── */
  const getTotal = () => items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const getCount = () => items.reduce((sum, i) => sum + i.qty, 0);

  /* ── RENDER ───────────────────────────────────────────── */
  const render = () => {
    const cartItemsEl   = document.getElementById('cart-items');
    const cartEmptyEl   = document.getElementById('cart-empty');
    const cartCountEl   = document.getElementById('cart-count');
    const cartTotalEl   = document.getElementById('cart-total');
    const cartSubEl     = document.getElementById('cart-subtotal-val');
    const orderBtnEl    = document.getElementById('order-btn');

    if (!cartItemsEl) return;

    const count = getCount();
    const total = getTotal();

    // Update count badge
    if (cartCountEl) cartCountEl.textContent = count;

    // Show/hide empty state
    if (cartEmptyEl) cartEmptyEl.style.display = count === 0 ? 'block' : 'none';

    // Update total displays
    if (cartTotalEl) cartTotalEl.textContent = total.toFixed(2) + ' €';
    if (cartSubEl)   cartSubEl.textContent   = total.toFixed(2) + ' €';

    // Disable order button if cart empty
    if (orderBtnEl) {
      orderBtnEl.disabled = count === 0;
      orderBtnEl.style.opacity = count === 0 ? '0.4' : '1';
    }

    // Render items
    cartItemsEl.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="Cart.updateQty('${item.id}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="Cart.updateQty('${item.id}', +1)">+</button>
        </div>
        <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} €</div>
      </div>
    `).join('');
  };

  /* ── GENERATE WHATSAPP MESSAGE ────────────────────────── */
  const buildMessage = (orderType, note) => {
    const total = getTotal();
    const typeLabel = orderType === 'livraison' ? '🛵 Livraison' : '🏃 À emporter';
    let msg = `Bonjour Le Sept 7 ! 👋\n\nJe souhaite passer commande :\n\n`;
    items.forEach(item => {
      msg += `• ${item.qty}x ${item.name} — ${(item.price * item.qty).toFixed(2)} €\n`;
    });
    msg += `\n💰 Total : ${total.toFixed(2)} €`;
    msg += `\n📦 Mode : ${typeLabel}`;
    if (note && note.trim()) msg += `\n📝 Note : ${note.trim()}`;
    msg += `\n\nMerci ! 🙏`;
    return msg;
  };

  /* ── SEND ORDER ───────────────────────────────────────── */
  const sendOrder = () => {
    if (items.length === 0) return;
    const orderType = document.querySelector('.order-type-btn.active')?.dataset.type || 'emporter';
    const note = document.getElementById('order-note')?.value || '';
    const message = buildMessage(orderType, note);
    const phone = '33763676191'; // 07 63 67 61 91 → format international sans +
    const encoded = encodeURIComponent(message);

    // Détecter mobile pour SMS fallback
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    const waUrl = `https://wa.me/${phone}?text=${encoded}`;

    window.open(waUrl, '_blank');
    showConfirmModal();
  };

  /* ── CONFIRMATION MODAL ───────────────────────────────── */
  const showConfirmModal = () => {
    const modal = document.getElementById('order-modal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };
  const closeModal = () => {
    const modal = document.getElementById('order-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  /* ── CART BOUNCE ANIMATION ────────────────────────────── */
  const animateCartBounce = () => {
    const badge = document.getElementById('cart-count');
    if (!badge) return;
    badge.style.transform = 'scale(1.5)';
    setTimeout(() => { badge.style.transform = 'scale(1)'; }, 250);
  };

  /* ── INIT ─────────────────────────────────────────────── */
  const init = () => {
    render();

    // Order type buttons
    document.querySelectorAll('.order-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.order-type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Clear cart button
    const clearBtn = document.getElementById('cart-clear');
    if (clearBtn) clearBtn.addEventListener('click', clear);

    // Order button
    const orderBtn = document.getElementById('order-btn');
    if (orderBtn) orderBtn.addEventListener('click', sendOrder);

    // Modal close
    const modalClose = document.getElementById('modal-close');
    if (modalClose) modalClose.addEventListener('click', closeModal);
    const modalOverlay = document.getElementById('order-modal');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
      });
    }

    // Add to cart buttons (static products)
    document.querySelectorAll('[data-add-cart]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id    = btn.dataset.id;
        const name  = btn.dataset.name;
        const price = btn.dataset.price;
        add(id, name, price);
        // Visual feedback
        const orig = btn.innerHTML;
        btn.innerHTML = '✓ Ajouté !';
        btn.classList.add('added');
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.classList.remove('added');
        }, 1200);
      });
    });
  };

  return { add, remove, updateQty, clear, sendOrder, closeModal, init };
})();

document.addEventListener('DOMContentLoaded', Cart.init);
