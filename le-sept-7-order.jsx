import { useState, useReducer, createContext, useContext, useRef, useEffect } from "react";
import {
  ShoppingBag, Plus, Minus, X, ChevronRight,
  MessageCircle, Phone, Clock, User, MapPin,
  Check, ChevronLeft
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   CSS — Dark Street Premium
═══════════════════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;800&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{background:#0A0A0A;overscroll-behavior:none}

:root{
  --bg:#0A0A0A;--bg2:#111111;--bg3:#1A1A1A;--bg4:#222222;
  --gold:#F5A623;--gold-d:rgba(245,166,35,.14);--gold-b:rgba(245,166,35,.28);
  --white:#FFFFFF;--muted:#6B7280;--dim:#3A3A3A;
  --green:#25D366;--red:#EF4444;
  --r:10px;--rm:14px;--rl:20px;--rxl:24px;
  --font:'Barlow',-apple-system,sans-serif;
  --head:'Bebas Neue','Impact',sans-serif;
}

.app{
  font-family:var(--font);background:var(--bg);color:var(--white);
  min-height:100vh;max-width:480px;margin:0 auto;
  overflow-x:hidden;position:relative;
}

/* ── HEADER ── */
.hdr{
  position:sticky;top:0;z-index:50;
  background:rgba(10,10,10,.94);
  backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);
  border-bottom:1px solid var(--dim);
}
.hdr-top{display:flex;align-items:center;justify-content:space-between;padding:14px 16px 10px}
.brand{display:flex;align-items:center;gap:10px}
.b-num{
  width:40px;height:40px;background:var(--gold);color:#000;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--head);font-size:27px;border-radius:10px;flex-shrink:0;
}
.b-name{font-family:var(--head);font-size:22px;letter-spacing:1.5px;line-height:1;display:block}
.b-sub{font-size:10px;color:var(--muted);letter-spacing:.5px;margin-top:1px}
.hdr-cart{
  position:relative;width:42px;height:42px;background:var(--bg3);
  border:1px solid var(--dim);border-radius:var(--r);
  display:flex;align-items:center;justify-content:center;
  color:var(--white);cursor:pointer;transition:border-color .2s,background .2s;
}
.hdr-cart:hover{border-color:var(--gold)}
.bdg{
  position:absolute;top:-7px;right:-7px;background:var(--gold);color:#000;
  font-size:10px;font-weight:900;width:19px;height:19px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  border:2px solid var(--bg);
}

/* ── CATEGORY NAV ── */
.cat-nav{display:flex;gap:8px;padding:0 16px 12px;overflow-x:auto;scrollbar-width:none}
.cat-nav::-webkit-scrollbar{display:none}
.cbn{
  flex-shrink:0;padding:6px 14px;background:var(--bg3);
  border:1px solid var(--dim);border-radius:20px;color:var(--muted);
  font-family:var(--font);font-size:13px;font-weight:600;
  cursor:pointer;transition:all .2s;white-space:nowrap;
}
.cbn.on{background:var(--gold);border-color:var(--gold);color:#000}

/* ── HERO ── */
.hero{
  padding:26px 20px 30px;
  background:linear-gradient(135deg,#190f00 0%,#0A0A0A 65%);
  display:flex;align-items:center;justify-content:space-between;
  overflow:hidden;position:relative;
}
.hero::before{
  content:'';position:absolute;bottom:-60px;left:-60px;
  width:220px;height:220px;
  background:radial-gradient(circle,rgba(245,166,35,.07) 0%,transparent 70%);
  border-radius:50%;pointer-events:none;
}
.hero::after{
  content:'';position:absolute;top:-40px;right:-40px;
  width:160px;height:160px;
  background:radial-gradient(circle,rgba(245,166,35,.1) 0%,transparent 70%);
  border-radius:50%;pointer-events:none;
}
.hero-pill{
  display:inline-flex;align-items:center;gap:5px;
  background:var(--gold-d);border:1px solid var(--gold-b);
  color:var(--gold);font-size:12px;font-weight:600;
  padding:4px 10px;border-radius:20px;margin-bottom:10px;
}
.hero-title{
  font-family:var(--head);font-size:46px;line-height:.88;
  letter-spacing:1px;margin-bottom:10px;
}
.hero-sub{color:var(--muted);font-size:13px;font-weight:500}
.hero-icon{
  font-size:82px;line-height:1;position:relative;z-index:1;
  animation:fl 3s ease-in-out infinite;user-select:none;
}
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

/* ── MENU ── */
.menu{padding:8px 16px 0}
.sec{padding-top:16px;margin-bottom:28px;scroll-margin-top:130px}
.sec-title{font-family:var(--head);font-size:26px;letter-spacing:1px;margin-bottom:14px}
.prods{display:flex;flex-direction:column;gap:10px}

/* ── PRODUCT CARD ── */
.pc{
  display:flex;align-items:center;justify-content:space-between;
  background:var(--bg2);border:1px solid var(--dim);
  border-radius:var(--r);padding:14px;gap:12px;
  transition:border-color .25s;
}
.pc.incart{border-color:var(--gold-b)}
.pi{flex:1;min-width:0}
.pn{font-weight:700;font-size:14px;margin-bottom:3px;line-height:1.3}
.pd{font-size:12px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:6px}
.pp{font-size:15px;font-weight:800;color:var(--gold)}
.pa{
  width:36px;height:36px;min-width:36px;background:var(--bg3);
  border:1.5px solid var(--dim);border-radius:9px;color:var(--white);
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;font-size:12px;font-weight:800;transition:all .18s;
}
.pa:hover{border-color:var(--gold);color:var(--gold)}
.pa.incart{background:var(--gold-d);border-color:var(--gold);color:var(--gold)}
.pa.pop{background:var(--gold);border-color:var(--gold);color:#000;transform:scale(1.22)}

/* ── STICKY CTA ── */
.sticky-cta{
  position:fixed;bottom:0;left:0;right:0;
  padding:10px 16px 20px;
  background:linear-gradient(to top,rgba(10,10,10,1) 50%,rgba(10,10,10,0));
  z-index:49;pointer-events:none;
}
.cta{
  pointer-events:all;width:100%;max-width:448px;margin:0 auto;display:flex;
  background:var(--gold);color:#000;border:none;border-radius:var(--rm);
  padding:15px 20px;align-items:center;justify-content:space-between;
  cursor:pointer;font-family:var(--font);font-weight:800;font-size:15px;
  box-shadow:0 8px 32px rgba(245,166,35,.38);transition:transform .1s;
  animation:ctain .32s ease;
}
.cta:active{transform:scale(.98)}
@keyframes ctain{from{transform:translateY(64px);opacity:0}to{transform:translateY(0);opacity:1}}
.cta-l{display:flex;align-items:center;gap:10px}
.cta-bdg{
  background:rgba(0,0,0,.22);width:28px;height:28px;border-radius:7px;
  display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;
}
.cta-tot{font-size:15px;font-weight:900}

/* ── OVERLAY ── */
.ov{
  position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:199;
  backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);animation:fin .22s;
}
@keyframes fin{from{opacity:0}to{opacity:1}}

/* ── CART DRAWER ── */
.drawer{
  position:fixed;bottom:0;left:50%;
  transform:translateX(-50%) translateY(100%);
  width:100%;max-width:480px;background:var(--bg2);
  border-radius:var(--rxl) var(--rxl) 0 0;border-top:1px solid var(--dim);
  z-index:200;display:flex;flex-direction:column;max-height:88vh;
  transition:transform .38s cubic-bezier(.32,.72,0,1);
}
.drawer.open{transform:translateX(-50%) translateY(0)}
.dpill{width:36px;height:4px;background:var(--bg4);border-radius:2px;margin:12px auto 6px;flex-shrink:0}
.dhdr{display:flex;align-items:center;justify-content:space-between;padding:8px 18px 14px;flex-shrink:0}
.dhdr h2{font-family:var(--head);font-size:22px;letter-spacing:1px}
.ibt{
  width:36px;height:36px;background:var(--bg3);border:1px solid var(--dim);
  border-radius:9px;color:var(--white);display:flex;align-items:center;
  justify-content:center;cursor:pointer;transition:border-color .2s;
}
.ibt:hover{border-color:var(--muted)}
.c-empty{
  flex:1;display:flex;flex-direction:column;align-items:center;
  justify-content:center;padding:48px 20px;color:var(--muted);gap:12px;
}
.c-empty p{font-size:15px;font-weight:700;color:var(--white)}
.c-empty span{font-size:13px;text-align:center}
.c-list{flex:1;overflow-y:auto;padding:4px 18px 4px;display:flex;flex-direction:column;gap:10px}
.ci{background:var(--bg3);border-radius:var(--r);padding:12px 14px;display:flex;flex-direction:column;gap:8px}
.ci-row{display:flex;align-items:center;justify-content:space-between}
.ci-n{font-size:13px;font-weight:700;flex:1;padding-right:8px}
.ci-p{font-size:14px;font-weight:800;color:var(--gold);white-space:nowrap}
.ci-ctrl{display:flex;align-items:center;gap:8px}
.cib{
  width:28px;height:28px;background:var(--bg2);border:1px solid var(--dim);
  border-radius:7px;color:var(--white);display:flex;align-items:center;
  justify-content:center;cursor:pointer;transition:border-color .15s;
}
.cib:hover{border-color:var(--muted)}
.ci-q{font-size:14px;font-weight:800;min-width:20px;text-align:center}
.ci-del .cib:hover{border-color:var(--red);color:var(--red)}
.dfoot{flex-shrink:0;padding:14px 18px 28px;border-top:1px solid var(--dim)}
.tot-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;font-size:14px;color:var(--muted)}
.tot-num{font-size:24px;font-weight:900;color:var(--gold)}
.ckbtn{
  width:100%;background:var(--gold);color:#000;border:none;border-radius:var(--rm);
  padding:15px 20px;display:flex;align-items:center;justify-content:space-between;
  cursor:pointer;font-family:var(--font);font-weight:800;font-size:15px;transition:opacity .1s;
}
.ckbtn:active{opacity:.85}

/* ── CHECKOUT MODAL ── */
.mwrap{
  position:fixed;inset:0;display:flex;align-items:flex-end;z-index:300;
  background:rgba(0,0,0,.82);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);
}
.modal{
  background:var(--bg2);border-radius:var(--rxl) var(--rxl) 0 0;
  width:100%;max-width:480px;margin:0 auto;
  max-height:95vh;overflow-y:auto;
  animation:sup .36s cubic-bezier(.32,.72,0,1);
}
@keyframes sup{from{transform:translateY(100%)}to{transform:translateY(0)}}
.mhdr{
  display:flex;align-items:center;gap:12px;
  padding:18px 18px 14px;border-bottom:1px solid var(--dim);
  position:sticky;top:0;background:var(--bg2);z-index:1;
}
.mhdr h2{font-family:var(--head);font-size:20px;letter-spacing:.5px;flex:1}
.mbody{padding:18px;display:flex;flex-direction:column;gap:18px}
.recap{background:var(--bg3);border-radius:var(--r);padding:14px}
.rlbl{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1.2px;color:var(--muted);margin-bottom:10px}
.rrow{display:flex;justify-content:space-between;font-size:13px;padding:3px 0}
.rrow span{color:var(--muted)}
.rrow span:last-child{font-weight:600;color:var(--white)}
.rtot{
  display:flex;justify-content:space-between;font-size:15px;font-weight:800;
  padding-top:10px;margin-top:8px;border-top:1px solid var(--dim);color:var(--gold);
}
.fg{display:flex;flex-direction:column;gap:6px}
.fl{
  font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.9px;
  color:var(--muted);display:flex;align-items:center;gap:5px;
}
.fi{
  background:var(--bg3);border:1.5px solid var(--dim);border-radius:var(--r);
  padding:13px 15px;color:var(--white);font-family:var(--font);font-size:15px;
  outline:none;transition:border-color .2s;width:100%;
}
.fi:focus{border-color:var(--gold)}
.fi.err{border-color:var(--red)}
.fi::placeholder{color:var(--muted)}
input[type="time"].fi{color-scheme:dark}
.fe{font-size:11px;color:var(--red)}
.mg{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.mo{
  padding:13px 8px;background:var(--bg3);border:1.5px solid var(--dim);
  border-radius:var(--r);color:var(--muted);font-family:var(--font);
  font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;text-align:center;
}
.mo.on{background:var(--gold-d);border-color:var(--gold);color:var(--gold)}
.mfoot{padding:12px 18px 36px;display:flex;flex-direction:column;gap:10px}
.wabtn{
  width:100%;background:#25D366;color:#fff;border:none;border-radius:var(--rm);
  padding:16px 20px;display:flex;align-items:center;justify-content:center;gap:10px;
  cursor:pointer;font-family:var(--font);font-weight:800;font-size:16px;
  box-shadow:0 6px 24px rgba(37,211,102,.28);transition:opacity .1s;
}
.wabtn:active{opacity:.88}
.smsbtn{
  width:100%;background:transparent;color:var(--muted);border:1px solid var(--dim);
  border-radius:var(--rm);padding:13px 20px;display:flex;align-items:center;
  justify-content:center;gap:8px;cursor:pointer;font-family:var(--font);
  font-weight:600;font-size:14px;transition:border-color .2s;
}
.smsbtn:hover{border-color:var(--muted)}

/* ── SUCCESS ── */
.suc{
  padding:64px 24px;text-align:center;display:flex;
  flex-direction:column;align-items:center;gap:16px;
}
.suc-ico{font-size:72px;animation:pop .5s cubic-bezier(.175,.885,.32,1.275)}
@keyframes pop{0%{transform:scale(0) rotate(-15deg)}100%{transform:scale(1) rotate(0)}}
.suc h2{font-family:var(--head);font-size:32px;letter-spacing:1px}
.suc p{color:var(--muted);font-size:14px;line-height:1.6;max-width:280px}
.suc-dot{
  width:8px;height:8px;background:var(--green);border-radius:50%;
  box-shadow:0 0 0 0 rgba(37,211,102,.4);animation:pulse 1.5s infinite;
}
@keyframes pulse{
  0%{box-shadow:0 0 0 0 rgba(37,211,102,.4)}
  70%{box-shadow:0 0 0 10px rgba(37,211,102,0)}
  100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}
}
.bs{height:88px}
`;

/* ═══════════════════════════════════════════════════════════
   CART CONTEXT
═══════════════════════════════════════════════════════════ */
const CartCtx = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const i = state.findIndex(x => x.id === action.item.id);
      return i >= 0
        ? state.map((x, n) => n === i ? { ...x, qty: x.qty + 1 } : x)
        : [...state, { ...action.item, qty: 1 }];
    }
    case "INC": return state.map(x => x.id === action.id ? { ...x, qty: x.qty + 1 } : x);
    case "DEC": return state.map(x => x.id === action.id ? { ...x, qty: x.qty - 1 } : x).filter(x => x.qty > 0);
    case "DEL": return state.filter(x => x.id !== action.id);
    case "CLEAR": return [];
    default: return state;
  }
}

function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return (
    <CartCtx.Provider value={{ items, dispatch, total, count }}>
      {children}
    </CartCtx.Provider>
  );
}

/* ═══════════════════════════════════════════════════════════
   MENU DATA
═══════════════════════════════════════════════════════════ */
const MENU = [
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
      { id: 5,  name: "Menu Nuggets",     price: 8.50,  desc: "6 pièces croustillantes · Frites · Boisson" },
      { id: 6,  name: "Menu Burger",      price: 10.50, desc: "Double burger · Frites maison · Boisson" },
      { id: 7,  name: "Menu Tacos",       price: 11.00, desc: "Tacos 2 viandes · Frites · Boisson" },
    ],
  },
  {
    id: "plats", label: "Plats", emoji: "🍚",
    items: [
      { id: 8,  name: "Riz Thaï",         price: 8.00,  desc: "Riz sauté · Légumes wok · Sauce thaï" },
      { id: 9,  name: "Pâtes Arrabbiata", price: 7.50,  desc: "Sauce tomate épicée · Parmesan" },
      { id: 10, name: "Bowl Poulet",       price: 9.00,  desc: "Poulet grillé · Riz · Légumes rôtis" },
    ],
  },
  {
    id: "boissons", label: "Boissons", emoji: "🥤",
    items: [
      { id: 11, name: "Coca-Cola 33cl",        price: 2.50, desc: "" },
      { id: 12, name: "Orangina 33cl",          price: 2.50, desc: "" },
      { id: 13, name: "Eau minérale",           price: 1.50, desc: "" },
      { id: 14, name: "Jus d'orange frais",     price: 3.00, desc: "Pressé à la commande" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   PRODUCT CARD
═══════════════════════════════════════════════════════════ */
function ProductCard({ item }) {
  const { items, dispatch } = useContext(CartCtx);
  const [pop, setPop] = useState(false);
  const cartItem = items.find(i => i.id === item.id);

  function add() {
    dispatch({ type: "ADD", item });
    setPop(true);
    setTimeout(() => setPop(false), 460);
  }

  return (
    <div className={`pc${cartItem ? " incart" : ""}`}>
      <div className="pi">
        <p className="pn">{item.name}</p>
        {item.desc && <p className="pd">{item.desc}</p>}
        <p className="pp">{item.price.toFixed(2)}€</p>
      </div>
      <button
        className={`pa${cartItem ? " incart" : ""}${pop ? " pop" : ""}`}
        onClick={add}
        aria-label={`Ajouter ${item.name}`}
      >
        {pop ? <Check size={14} /> : cartItem ? cartItem.qty : <Plus size={14} />}
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CART DRAWER  (/components/Cart.tsx)
═══════════════════════════════════════════════════════════ */
function CartDrawer({ open, onClose, onCheckout }) {
  const { items, dispatch, total } = useContext(CartCtx);

  return (
    <>
      {open && <div className="ov" onClick={onClose} />}
      <div className={`drawer${open ? " open" : ""}`} role="dialog" aria-label="Panier">
        <div className="dpill" />
        <div className="dhdr">
          <h2>Mon Panier</h2>
          <button className="ibt" onClick={onClose} aria-label="Fermer"><X size={18} /></button>
        </div>

        {items.length === 0 ? (
          <div className="c-empty">
            <ShoppingBag size={42} strokeWidth={1.5} />
            <p>Panier vide</p>
            <span>Ajoute tes produits pour commander</span>
          </div>
        ) : (
          <>
            <div className="c-list">
              {items.map(it => (
                <div key={it.id} className="ci">
                  <div className="ci-row">
                    <span className="ci-n">{it.name}</span>
                    <span className="ci-p">{(it.price * it.qty).toFixed(2)}€</span>
                  </div>
                  <div className="ci-row">
                    <div className="ci-ctrl">
                      <button className="cib" onClick={() => dispatch({ type: "DEC", id: it.id })} aria-label="Diminuer"><Minus size={12} /></button>
                      <span className="ci-q">{it.qty}</span>
                      <button className="cib" onClick={() => dispatch({ type: "INC", id: it.id })} aria-label="Augmenter"><Plus size={12} /></button>
                    </div>
                    <div className="ci-del">
                      <button className="cib" onClick={() => dispatch({ type: "DEL", id: it.id })} aria-label="Supprimer"><X size={12} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dfoot">
              <div className="tot-row">
                <span>Total commande</span>
                <span className="tot-num">{total.toFixed(2)}€</span>
              </div>
              <button
                className="ckbtn"
                onClick={() => { onClose(); setTimeout(onCheckout, 330); }}
              >
                <span>Passer la commande</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   CHECKOUT MODAL  (/components/Checkout.tsx)
═══════════════════════════════════════════════════════════ */
const INIT_FORM = { name: "", phone: "", mode: "sur_place", time: "" };

function CheckoutModal({ open, onClose }) {
  const { items, total, dispatch } = useContext(CartCtx);
  const [form, setForm] = useState(INIT_FORM);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim())  e.name  = "Champ requis";
    if (!form.phone.trim()) e.phone = "Champ requis";
    if (!form.time)         e.time  = "Champ requis";
    setErrors(e);
    return !Object.keys(e).length;
  }

  function buildMsg() {
    const ml    = form.mode === "sur_place" ? "Sur place 🪑" : "À emporter 🥡";
    const lines = items.map(i => `• ${i.qty}x ${i.name} — ${(i.price * i.qty).toFixed(2)}€`).join("\n");
    return (
      `🍽️ Nouvelle commande — Le Sept 7\n\n` +
      `👤 Nom : ${form.name}\n📞 Tél : ${form.phone}\n\n` +
      `📋 Commande :\n${lines}\n\n` +
      `💰 Total : ${total.toFixed(2)}€\n\n` +
      `🏠 Mode : ${ml}\n⏰ Heure : ${form.time}`
    );
  }

  function after() {
    setDone(true);
    setTimeout(() => {
      dispatch({ type: "CLEAR" });
      setDone(false);
      setForm(INIT_FORM);
      onClose();
    }, 3200);
  }

  function sendWA() {
    if (!validate()) return;
    window.open(`https://wa.me/33763676191?text=${encodeURIComponent(buildMsg())}`, "_blank");
    after();
  }

  function sendSMS() {
    if (!validate()) return;
    window.open(`sms:0763676191?body=${encodeURIComponent(buildMsg())}`, "_blank");
    after();
  }

  function set(k, v) {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: "" }));
  }

  if (!open) return null;

  return (
    <div className="mwrap" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">

        {done ? (
          <div className="suc">
            <div className="suc-ico">🎉</div>
            <h2>Commande envoyée !</h2>
            <div className="suc-dot" />
            <p>Le restaurant va confirmer votre commande rapidement. À très vite !</p>
          </div>
        ) : (
          <>
            <div className="mhdr">
              <button className="ibt" onClick={onClose} aria-label="Retour"><ChevronLeft size={18} /></button>
              <h2>Finaliser ma commande</h2>
            </div>

            <div className="mbody">
              {/* Recap */}
              <div className="recap">
                <p className="rlbl">Récapitulatif</p>
                {items.map(i => (
                  <div key={i.id} className="rrow">
                    <span>{i.qty}× {i.name}</span>
                    <span>{(i.price * i.qty).toFixed(2)}€</span>
                  </div>
                ))}
                <div className="rtot">
                  <span>Total</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
              </div>

              {/* Name */}
              <div className="fg">
                <label className="fl"><User size={12} />Prénom &amp; Nom</label>
                <input
                  className={`fi${errors.name ? " err" : ""}`}
                  placeholder="Ex : Jean Dupont"
                  value={form.name}
                  onChange={e => set("name", e.target.value)}
                />
                {errors.name && <span className="fe">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className="fg">
                <label className="fl"><Phone size={12} />Téléphone</label>
                <input
                  className={`fi${errors.phone ? " err" : ""}`}
                  placeholder="06 12 34 56 78"
                  type="tel"
                  value={form.phone}
                  onChange={e => set("phone", e.target.value)}
                />
                {errors.phone && <span className="fe">{errors.phone}</span>}
              </div>

              {/* Mode */}
              <div className="fg">
                <label className="fl"><MapPin size={12} />Mode</label>
                <div className="mg">
                  <button
                    className={`mo${form.mode === "sur_place" ? " on" : ""}`}
                    onClick={() => set("mode", "sur_place")}
                  >
                    🪑 Sur place
                  </button>
                  <button
                    className={`mo${form.mode === "emporter" ? " on" : ""}`}
                    onClick={() => set("mode", "emporter")}
                  >
                    🥡 À emporter
                  </button>
                </div>
              </div>

              {/* Time */}
              <div className="fg">
                <label className="fl"><Clock size={12} />Heure souhaitée</label>
                <input
                  className={`fi${errors.time ? " err" : ""}`}
                  type="time"
                  value={form.time}
                  onChange={e => set("time", e.target.value)}
                />
                {errors.time && <span className="fe">{errors.time}</span>}
              </div>
            </div>

            <div className="mfoot">
              <button className="wabtn" onClick={sendWA}>
                <MessageCircle size={20} />
                Commander via WhatsApp
              </button>
              <button className="smsbtn" onClick={sendSMS}>
                <Phone size={16} />
                Envoyer par SMS
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP CONTENT  (uses CartCtx — must be inside CartProvider)
═══════════════════════════════════════════════════════════ */
function AppContent() {
  const { count, total } = useContext(CartCtx);
  const [cartOpen,     setCartOpen]     = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("tacos");
  const refs = useRef({});

  /* Highlight active category on scroll */
  useEffect(() => {
    const obs = {};
    MENU.forEach(cat => {
      const el = refs.current[cat.id];
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(cat.id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      o.observe(el);
      obs[cat.id] = o;
    });
    return () => Object.values(obs).forEach(o => o.disconnect());
  }, []);

  function scrollTo(id) {
    setActiveSection(id);
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="app">

        {/* ── HEADER ── */}
        <header className="hdr">
          <div className="hdr-top">
            <div className="brand">
              <div className="b-num">7</div>
              <div>
                <span className="b-name">Le Sept</span>
                <span className="b-sub">Street Food Premium</span>
              </div>
            </div>
            <button className="hdr-cart" onClick={() => setCartOpen(true)} aria-label="Ouvrir le panier">
              <ShoppingBag size={20} />
              {count > 0 && <span className="bdg">{count}</span>}
            </button>
          </div>

          <nav className="cat-nav" aria-label="Catégories">
            {MENU.map(cat => (
              <button
                key={cat.id}
                className={`cbn${activeSection === cat.id ? " on" : ""}`}
                onClick={() => scrollTo(cat.id)}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </nav>
        </header>

        {/* ── HERO ── */}
        <section className="hero">
          <div>
            <div className="hero-pill">⚡ Commande rapide</div>
            <h2 className="hero-title">Street<br />Food</h2>
            <p className="hero-sub">Prêt en 15 min · 7j/7</p>
          </div>
          <div className="hero-icon" aria-hidden="true">🌮</div>
        </section>

        {/* ── MENU ── */}
        <main className="menu" id="menu">
          {MENU.map(cat => (
            <section
              key={cat.id}
              id={cat.id}
              className="sec"
              ref={el => refs.current[cat.id] = el}
              aria-label={cat.label}
            >
              <h2 className="sec-title">{cat.emoji} {cat.label}</h2>
              <div className="prods">
                {cat.items.map(item => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </main>

        <div className="bs" />

        {/* ── STICKY CTA ── */}
        {count > 0 && (
          <div className="sticky-cta">
            <button className="cta" onClick={() => setCartOpen(true)}>
              <div className="cta-l">
                <span className="cta-bdg">{count}</span>
                <span>Voir mon panier</span>
              </div>
              <span className="cta-tot">{total.toFixed(2)}€</span>
            </button>
          </div>
        )}

        {/* ── CART DRAWER ── */}
        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          onCheckout={() => setCheckoutOpen(true)}
        />

        {/* ── CHECKOUT MODAL ── */}
        <CheckoutModal
          open={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
        />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   ROOT EXPORT  (/context/CartContext.tsx wraps everything)
═══════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
