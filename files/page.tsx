"use client";

import { useState, useRef, useEffect } from "react";
import { ShoppingBag, Plus, Check } from "lucide-react";
import { CartProvider, useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";
import Checkout from "@/components/Checkout";

/* ══════════════════════════════════════
   MENU DATA
══════════════════════════════════════ */
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  desc: string;
}
export interface MenuSection {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
}

const MENU: MenuSection[] = [
  {
    id: "tacos", label: "Tacos", emoji: "🌮",
    items: [
      { id: 1,  name: "Tacos 2 viandes",  price: 7.50,  desc: "Sauce maison · Salade · Fromage fondu" },
      { id: 2,  name: "Tacos 3 viandes",  price: 9.00,  desc: "Sauce maison · Salade · Fromage fondu" },
      { id: 3,  name: "Tacos XXL",        price: 11.50, desc: "4 viandes · Format géant · Sauce secrète" },
      { id: 4,  name: "Tacos Chicken",    price: 8.50,  desc: "Poulet croustillant · Ranch · Cheddar" },
    ],
  },
  {
    id: "menus", label: "Menus", emoji: "🍱",
    items: [
      { id: 5,  name: "Menu Nuggets", price: 8.50,  desc: "6 pièces croustillantes · Frites · Boisson" },
      { id: 6,  name: "Menu Burger",  price: 10.50, desc: "Double burger · Frites maison · Boisson" },
      { id: 7,  name: "Menu Tacos",   price: 11.00, desc: "Tacos 2 viandes · Frites · Boisson" },
    ],
  },
  {
    id: "plats", label: "Plats", emoji: "🍚",
    items: [
      { id: 8,  name: "Riz Thaï",         price: 8.00, desc: "Riz sauté · Légumes wok · Sauce thaï" },
      { id: 9,  name: "Pâtes Arrabbiata", price: 7.50, desc: "Sauce tomate épicée · Parmesan" },
      { id: 10, name: "Bowl Poulet",       price: 9.00, desc: "Poulet grillé · Riz · Légumes rôtis" },
    ],
  },
  {
    id: "boissons", label: "Boissons", emoji: "🥤",
    items: [
      { id: 11, name: "Coca-Cola 33cl",    price: 2.50, desc: "" },
      { id: 12, name: "Orangina 33cl",     price: 2.50, desc: "" },
      { id: 13, name: "Eau minérale",      price: 1.50, desc: "" },
      { id: 14, name: "Jus d'orange frais",price: 3.00, desc: "Pressé à la commande" },
    ],
  },
];

/* ══════════════════════════════════════
   PRODUCT CARD
══════════════════════════════════════ */
function ProductCard({ item }: { item: MenuItem }) {
  const { items, dispatch } = useCart();
  const [pop, setPop] = useState(false);
  const cartItem = items.find((i) => i.id === item.id);

  function add() {
    dispatch({ type: "ADD", item });
    setPop(true);
    setTimeout(() => setPop(false), 460);
  }

  return (
    <div className={`pc${cartItem ? " in-cart" : ""}`}>
      <div className="pc-info">
        <p className="pc-name">{item.name}</p>
        {item.desc && <p className="pc-desc">{item.desc}</p>}
        <p className="pc-price">{item.price.toFixed(2)}€</p>
      </div>
      <button
        className={`pc-add${cartItem ? " in-cart" : ""}${pop ? " pop" : ""}`}
        onClick={add}
        aria-label={`Ajouter ${item.name}`}
        type="button"
      >
        {pop ? <Check size={14} /> : cartItem ? cartItem.qty : <Plus size={14} />}
      </button>
    </div>
  );
}

/* ══════════════════════════════════════
   PAGE CONTENT
══════════════════════════════════════ */
function PageContent() {
  const { count, total } = useCart();
  const [cartOpen,     setCartOpen]     = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("tacos");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* Highlight active category on scroll */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    MENU.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(cat.id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function scrollToSection(id: string) {
    setActiveSection(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="app">
      {/* ── HEADER ── */}
      <header className="hdr">
        <div className="hdr-inner">
          <div className="brand">
            <div className="brand-num">7</div>
            <div>
              <span className="brand-name">Le Sept</span>
              <span className="brand-sub">Street Food Premium</span>
            </div>
          </div>
          <button
            className="cart-icon-btn"
            onClick={() => setCartOpen(true)}
            aria-label="Ouvrir le panier"
          >
            <ShoppingBag size={20} />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>
        </div>

        {/* Category nav */}
        <nav className="cat-nav" aria-label="Catégories">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn${activeSection === cat.id ? " active" : ""}`}
              onClick={() => scrollToSection(cat.id)}
              type="button"
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="hero" aria-label="Le Sept 7">
        <div>
          <div className="hero-pill">⚡ Commande rapide</div>
          <h1 className="hero-title">Street<br />Food</h1>
          <p className="hero-sub">Prêt en 15 min · 7j/7</p>
        </div>
        <div className="hero-emoji" aria-hidden="true">🌮</div>
      </section>

      {/* ── MENU ── */}
      <main className="menu-container">
        {MENU.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="menu-section"
            ref={(el) => { sectionRefs.current[cat.id] = el; }}
            aria-label={cat.label}
          >
            <h2 className="section-title">{cat.emoji} {cat.label}</h2>
            <div className="products-list">
              {cat.items.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Bottom spacer for sticky CTA */}
      <div style={{ height: 88 }} />

      {/* ── STICKY CTA ── */}
      {count > 0 && (
        <div className="sticky-cta">
          <button
            className="cta-btn"
            onClick={() => setCartOpen(true)}
            type="button"
          >
            <div className="cta-left">
              <span className="cta-badge">{count}</span>
              <span>Voir mon panier</span>
            </div>
            <span className="cta-total">{total.toFixed(2)}€</span>
          </button>
        </div>
      )}

      {/* ── CART DRAWER ── */}
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => setCheckoutOpen(true)}
      />

      {/* ── CHECKOUT MODAL ── */}
      <Checkout
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </div>
  );
}

/* ══════════════════════════════════════
   ROOT PAGE EXPORT
══════════════════════════════════════ */
export default function Page() {
  return (
    <CartProvider>
      <PageContent />
    </CartProvider>
  );
}
