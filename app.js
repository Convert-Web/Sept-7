/* ============ DATA ============ */
const CATEGORIES = [
  { id:'menus-sandwiches', label:'Menus Sandwichs' },
  { id:'menus-tacos',      label:'Menus Tacos' },
  { id:'menus-burgers',    label:'Menus Burgers' },
  { id:'menus-paninis',    label:'Menus Paninis' },
  { id:'menus-hummers',    label:'Menus Hummers' },
  { id:'menus-croques',    label:'Menus Croques' },
  { id:'menus-wraps',      label:'Menus Wraps' },
  { id:'menus-texmex',     label:'Menus Tex-Mex' },
  { id:'menus-enfants',    label:'Menu Enfant' },
  { id:'sandwiches',       label:'Sandwichs' },
  { id:'tacos',            label:'Tacos' },
  { id:'burgers',          label:'Burgers' },
  { id:'paninis',          label:'Paninis' },
  { id:'hummers',          label:'Hummers' },
  { id:'texmex',           label:'Tex-Mex' },
  { id:'wraps',            label:'Wraps' },
  { id:'assiettes',        label:'Assiettes & Riz' },
  { id:'salades',          label:'Salades' },
  { id:'desserts',         label:'Desserts' },
  { id:'boissons',         label:'Boissons' },
];


const PRODUCTS = [
  { id:1, name:'Menu Sandwich Kebab', desc:'Morceaux de viande kebab, salade, tomates, oignons.', price:12.00, cat:'menus-sandwiches', popular:true, menu:true },
  { id:2, name:'Menu Sandwich Montagnard', desc:'Pain bun\'s, 3 steaks 45g, lardons, bacon de dinde, galette de pommes de terre, crème fraîche et fromage à raclette.', price:13.00, cat:'menus-sandwiches', menu:true },
  { id:3, name:'Menu Sandwich Le Sept 7', desc:'Escalope de poulet, bacon de dinde, sauce Boursin et fromage.', price:12.00, cat:'menus-sandwiches', popular:true, menu:true },
  { id:4, name:'Menu Sandwich Campagnard', desc:'Pain bun\'s, escalope de poulet, lardons, bacon de dinde, galette de pommes de terre, crème fraîche et fromage à raclette.', price:13.00, cat:'menus-sandwiches', menu:true },
  { id:5, name:'Menu Sandwich Red Tikka', desc:'Morceaux de poulet marinés, sauce tandoori et fromage.', price:11.50, cat:'menus-sandwiches', menu:true },
  { id:6, name:'Menu Sandwich Yellow Tikka', desc:'Morceaux de poulet marinés, sauce curry et fromage.', price:11.50, cat:'menus-sandwiches', popular:true, menu:true },
  { id:7, name:'Menu Sandwich Savoyard', desc:'3 steaks, bacon de dinde et Boursin.', price:11.00, cat:'menus-sandwiches', menu:true },
  { id:8, name:'Menu Sandwich Cordon Bleu', desc:'Cordon bleu et fromage.', price:8.50, cat:'menus-sandwiches', menu:true },
  { id:9, name:'Menu Sandwich Steak', desc:'2 steaks et fromage.', price:9.90, cat:'menus-sandwiches', menu:true },
  { id:10, name:'Menu Sandwich Savoureux', desc:'Escalope de poulet, crème fraîche, fromage râpé, champignons et fromage.', price:12.50, cat:'menus-sandwiches', menu:true },
  { id:11, name:'Menu Sandwich Méga Bun\'s', desc:'Pain bun\'s, 4 steaks, bacon de dinde et 2 fromages.', price:11.80, cat:'menus-sandwiches', menu:true },
  { id:12, name:'Menu Sandwich Normand', desc:'3 steaks, galette de pommes de terre, bacon de dinde et fromage.', price:11.50, cat:'menus-sandwiches', menu:true },
  { id:13, name:'Menu Sandwich Double Croc', desc:'2 steaks 45g, cordon bleu et fromage.', price:12.00, cat:'menus-sandwiches', menu:true },
  { id:14, name:'Menu Sandwich Chikanos', desc:'Morceaux de poulet, sauce relevée et œuf.', price:12.00, cat:'menus-sandwiches', menu:true },
  { id:15, name:'Menu Sandwich Triplex', desc:'3 steaks, bacon de dinde et fromage.', price:11.50, cat:'menus-sandwiches', menu:true },
  { id:16, name:'Menu Tacos 1 Viande', desc:'Galette dorée, sauce fromagère maison, servi avec frites et 1 boisson 33cl au choix.', price:11.50, cat:'menus-tacos', config:'tacos-1v', menu:true },
  { id:17, name:'Menu Tacos 2 Viandes', desc:'2 viandes au choix, galette dorée, sauce fromagère maison, frites et 1 boisson 33cl.', price:13.00, cat:'menus-tacos', popular:true, config:'tacos-2v', menu:true },
  { id:18, name:'Menu Tacos 3 Viandes', desc:'3 viandes au choix, galette dorée, sauce fromagère maison, frites et 1 boisson 33cl.', price:17.99, cat:'menus-tacos', config:'tacos-3v', menu:true },
  { id:19, name:'Menu Cheeseburger', desc:'1 steak et fromage.', price:7.45, cat:'menus-burgers', menu:true },
  { id:20, name:'Menu Double Cheeseburger', desc:'2 steaks et 2 fromages.', price:10.10, cat:'menus-burgers', menu:true },
  { id:21, name:'Menu Zinger Burger', desc:'Poulet façon KFC et fromage.', price:12.00, cat:'menus-burgers', menu:true },
  { id:22, name:'Menu Chicken Burger', desc:'Chicken pané et fromage.', price:9.50, cat:'menus-burgers', menu:true },
  { id:23, name:'Menu Bacon Burger', desc:'2 steaks, bacon de dinde et 2 fromages.', price:11.00, cat:'menus-burgers', menu:true },
  { id:24, name:'Menu 180 Burger', desc:'1 steak 180g et 2 fromages. Sauce au choix (ketchup, mayo, biggy, barbecue).', price:12.40, cat:'menus-burgers', menu:true },
  { id:25, name:'Menu Batata Burger', desc:'Galette de pommes de terre, œuf et fromage.', price:8.50, cat:'menus-burgers', menu:true },
  { id:26, name:'Menu 360 Burger', desc:'2 steaks 180g et 2 fromages.', price:14.50, cat:'menus-burgers', popular:true, menu:true },
  { id:27, name:'Menu 540+ Burger', desc:'3 steaks 180g, œuf, galette de pommes de terre et 3 fromages.', price:19.00, cat:'menus-burgers', menu:true },
  { id:28, name:'Menu Panini Poulet', desc:'Pain panini grillé, poulet.', price:9.00, cat:'menus-paninis', menu:true },
  { id:29, name:'Menu Panini Steak', desc:'Pain panini, steak.', price:9.00, cat:'menus-paninis', menu:true },
  { id:30, name:'Menu Panini 3 Fromages', desc:'Pain panini garni de 3 fromages.', price:9.00, cat:'menus-paninis', menu:true },
  { id:31, name:'Sandwich au Four', desc:'Grand pain panini, viande au choix (kebab, steak, poulet curry ou tandoori) et mozzarella, gratiné au four.', price:12.90, cat:'menus-paninis', popular:true, config:'sandwich-au-four', menu:true },
  { id:32, name:'Menu Hummer Toast Double', desc:'3 pains, 2 maxi steaks, bacon de dinde et fromage.', price:12.00, cat:'menus-hummers', menu:true },
  { id:33, name:'Menu Croque Monsieur', desc:'2 tranches de pain de mie, Gruyère râpée, 2 tranches de jambon et 15g de beurre.', price:7.50, cat:'menus-croques', popular:true, menu:true },
  { id:34, name:'Menu Wrap Spécial', desc:'Pain tacos, viande au choix, oignons frits, Boursin et cordon bleu en morceaux.', price:12.00, cat:'menus-wraps', config:'wrap', menu:true },
  { id:35, name:'Menu Tenders', desc:'3 tenders croustillants.', price:11.00, cat:'menus-texmex', menu:true },
  { id:36, name:'Menu Wings', desc:'5 ailes de poulet.', price:8.00, cat:'menus-texmex', menu:true },
  { id:37, name:'Menu Nuggets', desc:'6 nuggets de poulet.', price:7.80, cat:'menus-texmex', menu:true },
  { id:38, name:'Menu Enfant', desc:'1 plat au choix, servi avec frites et 1 boisson 33cl au choix.', price:7.50, cat:'menus-enfants', menu:true },
  { id:39, name:'Sandwich Kebab', desc:'Morceaux de viande marinés, sauce curry et fromage.', price:8.00, cat:'sandwiches' },
  { id:40, name:'Sandwich Montagnard', desc:'Pain bun\'s, 3 steaks 45g, lardons, bacon de dinde, galette de pommes de terre, crème fraîche et fromage à raclette.', price:8.50, cat:'sandwiches' },
  { id:41, name:'Sandwich Red Tikka', desc:'Morceaux de poulet marinés, sauce tandoori et fromage.', price:8.00, cat:'sandwiches', popular:true },
  { id:42, name:'Sandwich Le Sept 7', desc:'Escalope de poulet, bacon de dinde, sauce Boursin et fromage.', price:8.50, cat:'sandwiches' },
  { id:43, name:'Sandwich Campagnard', desc:'Pain bun\'s, escalope de poulet, lardons, bacon de dinde, galette de pommes de terre, crème fraîche et fromage à raclette.', price:8.50, cat:'sandwiches' },
  { id:44, name:'Sandwich Yellow Tikka', desc:'Morceaux de poulet marinés, sauce curry et fromage.', price:8.00, cat:'sandwiches' },
  { id:45, name:'Sandwich Steak', desc:'2 steaks et fromage.', price:7.50, cat:'sandwiches' },
  { id:46, name:'Sandwich Savoyard', desc:'3 steaks, bacon de dinde et Boursin.', price:8.50, cat:'sandwiches' },
  { id:47, name:'Sandwich Savoureux', desc:'Escalope de poulet, crème fraîche, fromage râpé, champignons et fromage.', price:8.50, cat:'sandwiches', popular:true },
  { id:48, name:'Sandwich Méga Bun\'s', desc:'Pain bun\'s, 4 steaks, bacon de dinde et 2 fromages.', price:8.50, cat:'sandwiches' },
  { id:49, name:'Sandwich Cordon Bleu', desc:'Cordon bleu et fromage.', price:7.50, cat:'sandwiches' },
  { id:50, name:'Sandwich Triplex', desc:'3 steaks, bacon de dinde et fromage.', price:8.50, cat:'sandwiches' },
  { id:51, name:'Sandwich Normand', desc:'3 steaks, galette de pommes de terre, bacon de dinde et fromage.', price:8.50, cat:'sandwiches' },
  { id:52, name:'Sandwich Chikanos', desc:'Morceaux de poulet, sauce relevée et œuf.', price:8.50, cat:'sandwiches' },
  { id:53, name:'Sandwich Double Croc', desc:'2 steaks 45g, cordon bleu et fromage.', price:8.50, cat:'sandwiches' },
  { id:54, name:'Tacos 1 Viande', desc:'Galette dorée, sauce fromagère maison.', price:8.80, cat:'tacos', config:'tacos-1v' },
  { id:55, name:'Tacos 2 Viandes', desc:'2 viandes au choix, galette dorée, sauce fromagère maison.', price:9.90, cat:'tacos', config:'tacos-2v' },
  { id:56, name:'Tacos 3 Viandes', desc:'3 viandes au choix, galette dorée, sauce fromagère maison.', price:11.50, cat:'tacos', config:'tacos-3v' },
  { id:57, name:'Tacos Zinger', desc:'Poulet façon KFC, bacon de dinde, 1 steak 45g, 1 galette de pommes de terre et fromage.', price:9.50, cat:'tacos' },
  { id:58, name:'Cheeseburger', desc:'1 steak et fromage.', price:4.99, cat:'burgers' },
  { id:59, name:'Double Cheeseburger', desc:'2 steaks et 2 fromages.', price:7.50, cat:'burgers' },
  { id:60, name:'Zinger Burger', desc:'Poulet façon KFC et fromage.', price:7.00, cat:'burgers' },
  { id:61, name:'Chicken Burger', desc:'Chicken pané et fromage.', price:7.50, cat:'burgers' },
  { id:62, name:'Bacon Burger', desc:'2 steaks, bacon de dinde et 2 fromages.', price:9.50, cat:'burgers' },
  { id:63, name:'180 Burger', desc:'1 steak 180g et 2 fromages.', price:9.50, cat:'burgers' },
  { id:64, name:'Batata Burger', desc:'Galette de pommes de terre, œuf et fromage.', price:6.50, cat:'burgers' },
  { id:65, name:'360 Burger', desc:'2 steaks 180g et 2 fromages.', price:10.50, cat:'burgers' },
  { id:66, name:'540+ Burger', desc:'3 steaks 180g, œuf, galette de pommes de terre et 3 fromages.', price:13.00, cat:'burgers' },
  { id:67, name:'Panini Poulet', desc:'Pain panini grillé, poulet.', price:6.50, cat:'paninis' },
  { id:68, name:'Panini Steak', desc:'Pain panini, steak.', price:6.50, cat:'paninis' },
  { id:69, name:'Panini 3 Fromages', desc:'Pain panini garni de 3 fromages.', price:6.50, cat:'paninis' },
  { id:70, name:'Hummer Toast Double', desc:'3 pains, 2 maxi steaks, bacon de dinde et fromage.', price:9.10, cat:'hummers', popular:true },
  { id:71, name:'Tenders', desc:'3 tenders croustillants, sauce au choix.', price:9.00, cat:'texmex' },
  { id:72, name:'Wings', desc:'5 ailes de poulet, sauce au choix.', price:7.00, cat:'texmex' },
  { id:73, name:'Nuggets', desc:'6 nuggets de poulet, sauce au choix.', price:4.90, cat:'texmex' },
  { id:74, name:'Wrap Spécial', desc:'Pain tacos, viande au choix, oignons frits, Boursin et cordon bleu en morceaux.', price:8.50, cat:'wraps', popular:true, config:'wrap' },
  { id:75, name:'Assiette Mixte', desc:'Riz basmati, salade et 3 viandes au choix.', price:16.00, cat:'assiettes', config:'assiette-3v' },
  { id:76, name:'Assiette Le Sept 7', desc:'Riz basmati, salade et 1 viande au choix.', price:13.00, cat:'assiettes', config:'assiette-1v' },
  { id:77, name:'Riz Thaï 2 Viandes', desc:'Riz thaï et 2 viandes au choix parmi kebab, tandoori, tenders ou steak haché.', price:13.00, cat:'assiettes', popular:true, config:'riz-2v' },
  { id:78, name:'Riz Thaï 1 Viande', desc:'1 viande au choix parmi kebab, tandoori, curry, escalope, steak haché, tenders, nuggets ou cordon bleu.', price:11.50, cat:'assiettes', config:'riz-1v' },
  { id:79, name:'Salade César', desc:'Salade, tomates, poulet frit, copeaux de fromage et maïs.', price:8.45, cat:'salades' },
  { id:80, name:'Tiramisu', desc:'Dessert italien classique en couches, texture crémeuse.', price:4.00, cat:'desserts' },
  { id:81, name:'Tarte au Daim', desc:'Tarte garnie d\'éclats de Daim croquants.', price:4.00, cat:'desserts' },
  { id:82, name:'Coca-Cola', desc:'Taille au choix.', price:2.40, cat:'boissons' },
  { id:83, name:'Fanta', desc:'Taille au choix.', price:2.40, cat:'boissons' },
  { id:84, name:'Sprite', desc:'Taille au choix.', price:2.40, cat:'boissons' },
  { id:85, name:'Oasis Tropical', desc:'33cl.', price:2.40, cat:'boissons' },
  { id:86, name:'Oasis Pomme Poire', desc:'33cl.', price:2.40, cat:'boissons' },
  { id:87, name:'Pepsi', desc:'33cl.', price:2.40, cat:'boissons' },
  { id:88, name:'7Up', desc:'33cl.', price:2.40, cat:'boissons' },
  { id:89, name:'Thé Glacé Lipton', desc:'33cl.', price:2.40, cat:'boissons' },
  { id:90, name:'Eau', desc:'Bouteille, désaltérante.', price:1.20, cat:'boissons' },
  { id:91, name:'Milkshake Mangue', desc:'Milkshake onctueux à la mangue.', price:4.90, cat:'boissons', popular:true },
];

/* Liste de viandes générale — utilisée par défaut (tacos, assiettes, wraps) */
const VIANDES = ['Kebab','Escalope de poulet','Steak haché','Tenders','Nuggets','Cordon bleu','Poulet curry','Poulet tandoori'];
/* Listes restreintes, propres à certains plats dont la carte fixe un choix différent */
const VIANDES_RIZ2 = ['Kebab','Tandoori','Tenders','Steak haché'];
const VIANDES_FOUR  = ['Kebab','Steak','Poulet curry','Poulet tandoori'];
const BOISSONS = ['Coca-Cola','Fanta','Sprite','Oasis Tropical','Thé Glacé Lipton','Eau','Sans boisson'];
/* Sauces de base, offertes — 2 au choix maximum (même sélection que Le Touareg) */
const SAUCES = ['Fromagère maison','Sauce blanche','Harissa','Ketchup','Algérienne','Samouraï','Cocktail'];

const CONFIG_RULES = {
  'tacos-1v':    { viandes:1, label:'1 viande au choix' },
  'tacos-2v':    { viandes:2, label:'2 viandes au choix' },
  'tacos-3v':    { viandes:3, label:'3 viandes au choix' },
  'assiette-1v': { viandes:1, label:'1 viande au choix' },
  'assiette-3v': { viandes:3, label:'3 viandes au choix' },
  'riz-2v':      { viandes:2, label:'2 viandes au choix', list:VIANDES_RIZ2 },
  'riz-1v':      { viandes:1, label:'1 viande au choix' },
  'wrap':        { viandes:1, label:'1 viande au choix' },
  'sandwich-au-four': { viandes:1, label:'1 viande au choix', list:VIANDES_FOUR },
};


/* Horaires réels — vendredi ouvre à 17h, tous les autres jours à 11h. Fermeture minuit tous les jours. */
const HOURS_BY_DAY = [
  { day:0, open:11, close:24 }, // dimanche
  { day:1, open:11, close:24 }, // lundi
  { day:2, open:11, close:24 }, // mardi
  { day:3, open:11, close:24 }, // mercredi
  { day:4, open:11, close:24 }, // jeudi
  { day:5, open:17, close:24 }, // vendredi — exception
  { day:6, open:11, close:24 }, // samedi
];
const DAY_NAMES = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

const WHATSAPP_NUMBER = SITE.whatsapp;
const PHONE_DISPLAY = SITE.phoneDisplay;
const RESTAURANT_NAME = SITE.name;
const ADDRESS = `${SITE.street}, ${SITE.postalCode} ${SITE.city}`;

/* ============ STATE ============ */
let cart = [];
let activeCategory = 'all';
let searchQuery = '';
let activeBudget = 'all'; // 'all' | 'lt10' | '10to15' | 'gt15'
let favorites = [];       // ids des plats favoris du client (localStorage)
let showOnlyFavs = false;
let stockOverrides = {};  // { [productId]: true } -> marqué en rupture par le vendeur aujourd'hui
let cfgCurrentProduct = null;
let cfgSelectedMeats = [];
let cfgSelectedSauces = [];
let cfgSelectedDrink = null;
let cfgQty = 1;

/* ============ UTILS ============ */
function euro(n) { return n.toFixed(2).replace('.', ',') + '€'; }
function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function getCategoryLabel(catId) { const c = CATEGORIES.find(c => c.id === catId); return c ? c.label : catId; }
function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

/* ============ PRODUCT CARD RENDER ============ */
function productCardHTML(p, variant) {
  const badges = [];
  const unavailable = p.available === false || isOutOfStock(p.id);
  if (unavailable) badges.push('<span class="product-badge badge-unavailable">Indisponible aujourd\'hui</span>');
  else {
    if (p.popular) badges.push('<span class="product-badge">Populaire</span>');
    if (p.menu) badges.push('<span class="product-badge menu-badge">+Frites+Boisson</span>');
  }
  const visClass = variant === 'pop' ? 'pop-card-vis' : 'product-vis';
  const isDrink = p.cat === 'boissons';
  const photoClass = isDrink ? 'vis-drink' : 'vis-food';
  const isFav = favorites.includes(p.id);
  return `
    <div class="${variant === 'pop' ? 'pop-card' : 'product-card'}${unavailable ? ' is-unavailable' : ''}" data-id="${p.id}" tabindex="0" role="button" aria-label="Voir ${esc(p.name)}, ${euro(p.price)}">
      <div class="${visClass} has-photo ${photoClass}">
        ${badges.join('')}
        <span class="vis-emoji-badge"><svg class="icon icon-flame"><use href="#i-flame" xlink:href="#i-flame"/></svg></span>
        <button class="vis-share-btn" data-share-id="${p.id}" aria-label="Partager ${esc(p.name)}" title="Partager ce plat"><svg class="icon"><use href="#i-share" xlink:href="#i-share"/></svg></button>
        <button class="vis-fav-btn${isFav ? ' is-fav' : ''}" data-fav-id="${p.id}" aria-label="${isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}" title="Favori"><svg class="icon"><use href="#i-heart" xlink:href="#i-heart"/></svg></button>
      </div>
      <div class="${variant === 'pop' ? 'pop-body' : 'product-info'}">
        <div class="${variant === 'pop' ? 'pop-name' : 'product-name'}">${esc(p.name)}</div>
        <div class="${variant === 'pop' ? 'pop-desc' : 'product-desc'}">${esc(p.desc)}</div>
        <div class="${variant === 'pop' ? 'pop-foot' : 'product-foot'}">
          <span class="${variant === 'pop' ? 'pop-price' : 'product-price'}">${euro(p.price)}</span>
          ${unavailable
            ? `<button class="${variant === 'pop' ? 'pop-add' : 'product-add'}" disabled aria-label="${esc(p.name)} indisponible aujourd'hui" aria-disabled="true">—</button>`
            : `<button class="${variant === 'pop' ? 'pop-add' : 'product-add'}" data-add-id="${p.id}" aria-label="Ajouter ${esc(p.name)}">+</button>`}
        </div>
      </div>
    </div>`;
}

function renderPopulaires() {
  const el = document.getElementById('popScroller');
  const pops = PRODUCTS.filter(p => p.popular);
  el.innerHTML = pops.map(p => productCardHTML(p, 'pop')).join('');
  applyProductTilt();
}

function renderCatFilters() {
  const el = document.getElementById('catFilters');
  let html = `<button class="cat-chip ${activeCategory === 'all' && !showOnlyFavs ? 'active' : ''}" data-cat="all"><svg class="icon"><use href="#i-utensils" xlink:href="#i-utensils"/></svg> Tout voir</button>`;
  html += `<button class="cat-chip cat-chip-fav ${showOnlyFavs ? 'active' : ''}" id="favFilterChip" data-cat="favs"><svg class="icon"><use href="#i-heart" xlink:href="#i-heart"/></svg> Mes favoris <span id="favCount" class="fav-count">${favorites.length}</span></button>`;
  html += CATEGORIES.map(c => `<button class="cat-chip ${activeCategory === c.id && !showOnlyFavs ? 'active' : ''}" data-cat="${c.id}">${c.label}</button>`).join('');
  el.innerHTML = html;
  updateFavCount();
}

function resetFilters() {
  activeCategory = 'all';
  activeBudget = 'all';
  searchQuery = '';
  showOnlyFavs = false;
  const input = document.getElementById('searchInput');
  const box = document.getElementById('searchBox');
  if (input) input.value = '';
  if (box) box.classList.remove('has-val');
  renderCatFilters();
  document.querySelectorAll('.budget-chip').forEach(b => b.classList.toggle('active', b.dataset.budget === 'all'));
  renderMenuGrid();
}

function getFilteredProducts() {
  let list = PRODUCTS;
  if (showOnlyFavs) list = list.filter(p => favorites.includes(p.id));
  if (activeCategory !== 'all') list = list.filter(p => p.cat === activeCategory);
  if (activeBudget === 'lt10') list = list.filter(p => p.price < 10);
  else if (activeBudget === '10to15') list = list.filter(p => p.price >= 10 && p.price <= 15);
  else if (activeBudget === 'gt15') list = list.filter(p => p.price > 15);
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }
  return list;
}

function renderMenuGrid() {
  const grid = document.getElementById('menuGrid');
  const info = document.getElementById('menuResultsInfo');
  const list = getFilteredProducts();

  if (list.length === 0) {
    if (showOnlyFavs) {
      grid.innerHTML = `<div class="no-results"><div class="no-results-emoji"><svg class="icon icon-xl"><use href="#i-heart" xlink:href="#i-heart"/></svg></div><p>Vous n'avez pas encore de favoris.<br>Touchez le cœur sur un plat pour l'ajouter ici.</p><button class="btn btn-outline" id="resetFiltersBtn" style="margin-top:1rem">Voir tout le menu</button></div>`;
    } else {
      grid.innerHTML = `<div class="no-results"><div class="no-results-emoji"><svg class="icon icon-xl"><use href="#i-search" xlink:href="#i-search"/></svg></div><p>Aucun plat ne correspond à votre recherche.</p><button class="btn btn-outline" id="resetFiltersBtn" style="margin-top:1rem">Réinitialiser les filtres</button></div>`;
    }
    info.textContent = '';
    return;
  }

  if (showOnlyFavs) {
    info.textContent = `${list.length} favori${list.length > 1 ? 's' : ''}`;
  } else if (searchQuery.trim() || activeCategory !== 'all') {
    info.textContent = `${list.length} plat${list.length > 1 ? 's' : ''} trouvé${list.length > 1 ? 's' : ''}`;
  } else {
    info.textContent = '';
  }

  if (showOnlyFavs || activeCategory !== 'all' || searchQuery.trim()) {
    grid.innerHTML = `<div class="product-grid">${list.map(p => productCardHTML(p, 'grid')).join('')}</div>`;
  } else {
    let html = '';
    CATEGORIES.forEach(c => {
      const items = list.filter(p => p.cat === c.id);
      if (items.length === 0) return;
      html += `<div class="menu-cat-group">
        <div class="menu-cat-title">${c.label} <span class="mct-count">${items.length}</span></div>
        <div class="product-grid">${items.map(p => productCardHTML(p, 'grid')).join('')}</div>
      </div>`;
    });
    grid.innerHTML = html;
  }
}

/* ============ REVIEWS ============ */
/* Aucun avis client n'est stocké en dur dans ce fichier : afficher des
   témoignages rédigés serait du faux contenu. La section renvoie vers les
   vraies fiches Google et Uber Eats, où les avis sont publics et vérifiables.
   Si le restaurant souhaite afficher de vrais avis ici, ils doivent être
   recopiés depuis sa fiche Google avec l'accord de leurs auteurs. */
function renderReviews() {
  /* Rien à générer : la section avis est entièrement statique et pointe
     vers les plateformes d'avis réelles. Fonction conservée pour rester
     compatible avec l'ordre d'initialisation. */
}

/* ============ HOURS ============ */
function renderHoursTable() {
  const el = document.getElementById('hoursTable');
  const now = new Date();
  const today = now.getDay();
  el.innerHTML = HOURS_BY_DAY.map(h => {
    const isToday = h.day === today;
    const timeLabel = h.open === h.close ? 'Fermé' : `${h.open}h00 – 00h00`;
    return `<div class="hours-row ${isToday ? 'today' : ''}"><span class="hours-day">${DAY_NAMES[h.day]}${isToday ? " (aujourd'hui)" : ''}</span><span class="hours-time">${timeLabel}</span></div>`;
  }).join('');
}

function isOpenNow() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const today = HOURS_BY_DAY.find(h => h.day === day);
  if (!today) return false;
  return hour >= today.open && hour < today.close;
}

function updateOpenStatus() {
  const pill = document.getElementById('heroStatusPill');
  if (!pill) return;
  const open = isOpenNow();
  const now = new Date();
  const day = now.getDay();
  const today = HOURS_BY_DAY.find(h => h.day === day);
  pill.classList.remove('status-open', 'status-closed');
  if (open) {
    pill.classList.add('status-open');
    pill.innerHTML = "<span class=\"status-dot pulse\"></span> Ouvert jusqu'à minuit";
  } else {
    pill.classList.add('status-closed');
    const openLabel = today.open === 17 ? '17h00' : '11h00';
    pill.innerHTML = `<span class="status-dot"></span> Fermé · Ouvre à ${openLabel}`;
  }
}

/* ============ FAQ ============ */
const FAQ_ITEMS = [
  { q:`${SITE.name} est-il ouvert tous les jours ?`, a:"Consultez nos horaires dans la section « Infos & Accès » ci-dessous : ils sont mis à jour en direct et indiquent si le restaurant est ouvert en ce moment." },
  { q:`Comment commander chez ${SITE.name} à ${SITE.city} ?`, a:"Composez votre panier directement sur ce site, puis envoyez votre commande sur WhatsApp en un clic. Nous confirmons la disponibilité et le délai par message." },
  { q:"Comment puis-je payer ma commande ?", a:"Le règlement se fait sur place au moment de la prise en charge de votre commande." },
  { q:`Où est situé ${SITE.name} ?`, a:`${SITE.street}, ${SITE.postalCode} ${SITE.city}.` },
  { q:"Puis-je me faire livrer ?", a: SITE.uberEatsUrl ? `Oui, la livraison est disponible via Uber Eats dans la zone couverte autour de ${SITE.city}. Pour une commande à emporter ou sur place, passez plutôt par ce site et WhatsApp.` : `Pour toute question sur la livraison, contactez-nous au ${SITE.phoneDisplay}.` },
  { q:"Puis-je connaître les allergènes d'un plat ?", a:`Oui. Les allergènes réglementaires (gluten, lait, œufs, fruits à coque, etc.) peuvent être présents dans nos préparations. Demandez-nous avant de commander : par téléphone au ${SITE.phoneDisplay} ou par message WhatsApp. Nous vous indiquerons les allergènes de chaque plat.` },
];
function renderFAQ() {
  const el = document.getElementById('faqList');
  el.innerHTML = FAQ_ITEMS.map((item, i) => `
    <div class="faq-item" data-idx="${i}">
      <button class="faq-q" data-faq-toggle="${i}" aria-expanded="false" aria-controls="faqA${i}">
        <span>${item.q}</span>
        <span class="faq-q-icon">+</span>
      </button>
      <div class="faq-a" id="faqA${i}" role="region">
        <div class="faq-a-inner">${item.a}</div>
      </div>
    </div>`).join('');
}


/* ============ CART ============ */
function loadCart() {
  try {
    const saved = localStorage.getItem(SITE.storageKey);
    if (saved) {
      cart = JSON.parse(saved);
      if (cart.length > 0) showToast('On a gardé votre panier de la dernière visite');
    }
  } catch (e) { cart = []; }
}
function saveCart() {
  try { localStorage.setItem(SITE.storageKey, JSON.stringify(cart)); } catch (e) {}
}

/* ============ FAVORIS CLIENT ============ */
function loadFavorites() {
  try {
    const saved = localStorage.getItem(SITE.favKey);
    favorites = saved ? JSON.parse(saved) : [];
  } catch (e) { favorites = []; }
}
function saveFavorites() {
  try { localStorage.setItem(SITE.favKey, JSON.stringify(favorites)); } catch (e) {}
}
function toggleFavorite(productId) {
  const idx = favorites.indexOf(productId);
  const wasFav = idx !== -1;
  if (wasFav) favorites.splice(idx, 1);
  else favorites.push(productId);
  saveFavorites();
  document.querySelectorAll(`[data-fav-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('is-fav', !wasFav);
    btn.classList.remove('pulse'); void btn.offsetWidth; btn.classList.add('pulse');
    btn.setAttribute('aria-label', wasFav ? 'Ajouter aux favoris' : 'Retirer des favoris');
  });
  updateFavCount();
  if (!wasFav) showToast(`${getProduct(productId)?.name || 'Plat'} ajouté aux favoris`);
  if (showOnlyFavs) renderMenuGrid();
}
function updateFavCount() {
  const el = document.getElementById('favCount');
  if (el) el.textContent = favorites.length;
  const chip = document.getElementById('favFilterChip');
  if (chip) chip.classList.toggle('has-items', favorites.length > 0);
}

/* ============ PANNEAU VENDEUR — ruptures du jour ============ */
function loadStockOverrides() {
  try {
    const saved = localStorage.getItem(SITE.stockKey);
    stockOverrides = saved ? JSON.parse(saved) : {};
  } catch (e) { stockOverrides = {}; }
}
function saveStockOverrides() {
  try { localStorage.setItem(SITE.stockKey, JSON.stringify(stockOverrides)); } catch (e) {}
}
function isOutOfStock(productId) { return !!stockOverrides[productId]; }
function toggleStock(productId) {
  if (stockOverrides[productId]) delete stockOverrides[productId];
  else stockOverrides[productId] = true;
  saveStockOverrides();
  renderMenuGrid();
  renderPopulaires();
  renderVendorPanelList();
}

/* ============ STATS VENDEUR — ajouts au panier du jour ============
   Compteur local et anonyme, remis à zéro chaque jour, pour aider
   l'équipe à repérer les plats qui partent bien aujourd'hui. */
function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}
function loadAddStats() {
  try {
    const saved = JSON.parse(localStorage.getItem(SITE.statsKey) || 'null');
    if (!saved || saved.day !== todayKey()) return {};
    return saved.counts || {};
  } catch (e) { return {}; }
}
function bumpAddStat(productId) {
  try {
    const counts = loadAddStats();
    counts[productId] = (counts[productId] || 0) + 1;
    localStorage.setItem(SITE.statsKey, JSON.stringify({ day: todayKey(), counts }));
  } catch (e) {}
}

/* ============ DERNIÈRE COMMANDE — recommander en 1 clic ============ */
function saveLastOrder() {
  try {
    const snapshot = cart.map(i => ({ id:i.id, qty:i.qty, config:i.config, name:i.name, price:i.price, emoji:i.emoji }));
    localStorage.setItem(SITE.lastOrderKey, JSON.stringify(snapshot));
  } catch (e) {}
}
function loadLastOrder() {
  try {
    const saved = localStorage.getItem(SITE.lastOrderKey);
    return saved ? JSON.parse(saved) : null;
  } catch (e) { return null; }
}
function reorderLast() {
  const last = loadLastOrder();
  if (!last || !last.length) { showToast('Aucune commande précédente trouvée'); return; }
  last.forEach(item => {
    const key = item.config ? ('p' + item.id + '_' + item.config.replace(/\s+/g,'') + '_' + Date.now() + Math.random()) : ('p' + item.id);
    const existing = !item.config && cart.find(i => i.key === key);
    if (existing) existing.qty += item.qty;
    else cart.push({ key, id:item.id, name:item.name, price:item.price, emoji:item.emoji, qty:item.qty, config:item.config || null });
  });
  saveCart();
  renderCart();
  bumpCartBadges();
  openCart();
  showToast('Votre dernière commande a été ajoutée au panier');
}
function cartTotal() { return cart.reduce((sum, item) => sum + item.price * item.qty, 0); }
function cartCount() { return cart.reduce((sum, item) => sum + item.qty, 0); }

function addToCartSimple(productId) {
  const p = getProduct(productId);
  if (!p || p.available === false || isOutOfStock(productId)) return;
  const existing = cart.find(i => i.key === 'p' + productId);
  if (existing) { existing.qty++; }
  else { cart.push({ key:'p' + productId, id:productId, name:p.name, price:p.price, qty:1, config:null }); }
  saveCart();
  renderCart();
  bumpCartBadges();
  bumpAddStat(productId);
  flashAddButton(productId);
  showToast(`${p.name} ajouté au panier`);
  spawnConfetti(document.querySelector(`[data-add-id="${productId}"]`));
}

function addToCartConfigured(product, meats, sauces, drink, qty) {
  const parts = [];
  if (meats && meats.length) parts.push(meats.join(', '));
  if (sauces && sauces.length) parts.push('Sauces : ' + sauces.join(', '));
  if (drink) parts.push(drink);
  const configLabel = parts.join(' · ');
  const key = 'p' + product.id + '_' + configLabel.replace(/\s+/g,'') + '_' + Date.now();
  cart.push({ key, id:product.id, name:product.name, price:product.price, emoji:product.emoji, qty:qty, config:configLabel || null });
  saveCart();
  renderCart();
  bumpCartBadges();
  bumpAddStat(product.id);
  showToast(`${product.name} ajouté au panier`);
  spawnConfetti(document.getElementById('cfgAddBtn'));
}

function updateCartQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
  saveCart();
  renderCart();
  bumpCartBadges();
}

function removeCartItem(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  renderCart();
  bumpCartBadges();
}

function flashAddButton(productId) {
  document.querySelectorAll(`[data-add-id="${productId}"]`).forEach(btn => {
    btn.classList.add('added');
    btn.textContent = '✓';
    setTimeout(() => { btn.classList.remove('added'); btn.textContent = '+'; }, 900);
  });
}

function bumpCartBadges() {
  const count = cartCount();
  const badges = [document.getElementById('cartBadge'), document.getElementById('fabCartBadge')];
  badges.forEach(b => {
    if (!b) return;
    b.textContent = count;
    if (b.id === 'fabCartBadge') b.classList.toggle('hidden', count === 0);
  });
  const fab = document.getElementById('fabCart');
  if (fab && count > 0) { fab.classList.remove('bump'); void fab.offsetWidth; fab.classList.add('bump'); }
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon"><svg class="icon"><use href="#i-cart" xlink:href="#i-cart"/></svg></div><div class="cart-empty-title">Panier vide</div><div class="cart-empty-sub">Ajoutez des plats depuis la carte pour commencer votre commande.</div></div>`;
    footer.style.display = 'none';
    bumpCartBadges();
    return;
  }
  footer.style.display = 'flex';
  body.innerHTML = `<div class="cart-items">${cart.map(item => `
    <div class="cart-item" data-key="${item.key}">
      <div class="cart-item-emoji"><svg class="icon icon-lg"><use href="#i-utensils" xlink:href="#i-utensils"/></svg></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}${item.config ? ` <span style="color:var(--muted2);font-weight:500">· ${item.config}</span>` : ''}</div>
        <div class="cart-item-price">${euro(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn ${item.qty === 1 ? 'remove' : ''}" data-qty-key="${item.key}" data-delta="-1">${item.qty === 1 ? '<svg class="icon"><use href="#i-trash" xlink:href="#i-trash"/></svg>' : '−'}</button>
        <span class="qty-value">${item.qty}</span>
        <button class="qty-btn" data-qty-key="${item.key}" data-delta="1">+</button>
      </div>
    </div>`).join('')}</div>`;
  document.getElementById('cartTotalPrice').textContent = euro(cartTotal());
  bumpCartBadges();
}

function buildWhatsAppMessage() {
  const name = document.getElementById('custName').value.trim() || 'Client';
  const note = document.getElementById('custNote')?.value.trim() || '';
  let msg = `Bonjour ${RESTAURANT_NAME}\n\nJe souhaite passer commande (${name}) :\n\n`;
  cart.forEach(item => {
    msg += `• ${item.qty}x ${item.name}`;
    if (item.config) msg += ` (${item.config})`;
    msg += ` — ${euro(item.price * item.qty)}\n`;
  });
  msg += `\nTotal : ${euro(cartTotal())}\n`;
  if (note) msg += `\n⚠️ Remarque / allergie : ${note}\n`;
  msg += `\nMerci !`;
  return msg;
}

function sendWhatsAppOrder() {
  if (cart.length === 0) { showToast('Votre panier est vide'); return; }
  const msg = buildWhatsAppMessage();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  saveLastOrder();
  window.open(url, '_blank');
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('visible');
  document.getElementById('cartPanel').classList.add('open');
  document.body.classList.add('cart-open');
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('visible');
  document.getElementById('cartPanel').classList.remove('open');
  document.body.classList.remove('cart-open');
}

/* ============ CONFIGURATOR ============ */
function openConfigurator(productId) {
  const p = getProduct(productId);
  if (!p || p.available === false) return;
  cfgCurrentProduct = p;
  cfgSelectedMeats = [];
  cfgSelectedSauces = [];
  cfgSelectedDrink = null;
  cfgQty = 1;

  document.getElementById('cfgEmoji').innerHTML = '<svg class="icon icon-lg"><use href="#i-utensils" xlink:href="#i-utensils"/></svg>';
  document.getElementById('cfgName').textContent = p.name;
  document.getElementById('cfgPrice').textContent = euro(p.price);

  const rule = p.config ? CONFIG_RULES[p.config] : null;
  const meatList = (rule && rule.list) ? rule.list : VIANDES;
  let bodyHTML = '';

  if (rule) {
    bodyHTML += `<div class="cfg-group">
      <div class="cfg-group-label"><span>${rule.label}</span><span class="cfg-group-hint" id="meatHint">0/${rule.viandes} sélectionnée${rule.viandes > 1 ? 's' : ''}</span></div>
      <div class="cfg-options" id="meatOptions">
        ${meatList.map(m => `<button class="cfg-opt" data-meat="${m}"><span class="cfg-opt-check"></span><span>${m}</span></button>`).join('')}
      </div>
    </div>`;
  }

  if (p.menu) {
    bodyHTML += `<div class="cfg-group">
      <div class="cfg-group-label"><span>Boisson 33cl incluse</span><span class="cfg-group-hint" id="drinkHint">Non sélectionnée</span></div>
      <div class="cfg-options" id="drinkOptions">
        ${BOISSONS.map(b => `<button class="cfg-opt" data-drink="${b}"><span class="cfg-opt-check"></span><span>${b}</span></button>`).join('')}
      </div>
    </div>`;
  }

  /* Sauces — offertes, 2 maximum. Proposées sur tous les plats configurables
     (tacos, assiettes, riz, wraps, sandwichs au four), comme au Touareg. */
  if (rule) {
    bodyHTML += `<div class="cfg-group">
      <div class="cfg-group-label"><span>Sauces <em style="font-style:normal;color:var(--muted2);font-weight:600">(offertes)</em></span><span class="cfg-group-hint" id="sauceHint">0/2 sélectionnée</span></div>
      <div class="cfg-options" id="sauceOptions">
        ${SAUCES.map(s => `<button class="cfg-opt" data-sauce="${s}"><span class="cfg-opt-check"></span><span>${s}</span></button>`).join('')}
      </div>
    </div>`;
  }

  bodyHTML += `<div class="cfg-group">
    <div class="cfg-group-label"><span>Quantité</span></div>
    <div class="cfg-qty-row">
      <span class="cfg-qty-lbl">Nombre d'exemplaires</span>
      <div class="cfg-qty-controls">
        <button class="cfg-qty-btn" id="cfgQtyMinus">−</button>
        <span class="cfg-qty-val" id="cfgQtyVal">1</span>
        <button class="cfg-qty-btn" id="cfgQtyPlus">+</button>
      </div>
    </div>
  </div>`;

  document.getElementById('cfgBody').innerHTML = bodyHTML;
  updateCfgAddButton();
  bindConfiguratorEvents(rule);

  document.getElementById('cfgOverlay').classList.add('visible');
  document.getElementById('cfgSheet').classList.add('open');
  document.body.classList.add('cart-open');
}

function bindConfiguratorEvents(rule) {
  if (rule) {
    document.querySelectorAll('#meatOptions .cfg-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const meat = btn.dataset.meat;
        const idx = cfgSelectedMeats.indexOf(meat);
        if (idx > -1) {
          cfgSelectedMeats.splice(idx, 1);
        } else {
          if (cfgSelectedMeats.length >= rule.viandes) cfgSelectedMeats.shift(); // remplace la plus ancienne (cap)
          cfgSelectedMeats.push(meat);
        }
        document.querySelectorAll('#meatOptions .cfg-opt').forEach(b => b.classList.toggle('selected', cfgSelectedMeats.includes(b.dataset.meat)));
        const hint = document.getElementById('meatHint');
        hint.textContent = `${cfgSelectedMeats.length}/${rule.viandes} sélectionnée${rule.viandes > 1 ? 's' : ''}`;
        hint.classList.toggle('ok', cfgSelectedMeats.length === rule.viandes);
        updateCfgAddButton();
      });
    });
  }
  const drinkOpts = document.getElementById('drinkOptions');
  if (drinkOpts) {
    drinkOpts.querySelectorAll('.cfg-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        cfgSelectedDrink = btn.dataset.drink;
        drinkOpts.querySelectorAll('.cfg-opt').forEach(b => b.classList.toggle('selected', b.dataset.drink === cfgSelectedDrink));
        document.getElementById('drinkHint').textContent = cfgSelectedDrink;
        document.getElementById('drinkHint').classList.add('ok');
        updateCfgAddButton();
      });
    });
  }
  /* Sauces — cap à 2 : au-delà, la plus ancienne est remplacée (même
     comportement que le cap des viandes ci-dessus). Les sauces sont
     facultatives : elles ne bloquent jamais l'ajout au panier. */
  const sauceOpts = document.getElementById('sauceOptions');
  if (sauceOpts) {
    sauceOpts.querySelectorAll('.cfg-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const sauce = btn.dataset.sauce;
        const idx = cfgSelectedSauces.indexOf(sauce);
        if (idx > -1) {
          cfgSelectedSauces.splice(idx, 1);
        } else {
          if (cfgSelectedSauces.length >= 2) cfgSelectedSauces.shift();
          cfgSelectedSauces.push(sauce);
        }
        sauceOpts.querySelectorAll('.cfg-opt').forEach(b => b.classList.toggle('selected', cfgSelectedSauces.includes(b.dataset.sauce)));
        const sHint = document.getElementById('sauceHint');
        sHint.textContent = `${cfgSelectedSauces.length}/2 sélectionnée${cfgSelectedSauces.length > 1 ? 's' : ''}`;
        sHint.classList.toggle('ok', cfgSelectedSauces.length > 0);
      });
    });
  }
  document.getElementById('cfgQtyMinus').addEventListener('click', () => { if (cfgQty > 1) cfgQty--; document.getElementById('cfgQtyVal').textContent = cfgQty; updateCfgAddButton(); });
  document.getElementById('cfgQtyPlus').addEventListener('click', () => { if (cfgQty < 15) cfgQty++; document.getElementById('cfgQtyVal').textContent = cfgQty; updateCfgAddButton(); });
}

function isConfiguratorValid() {
  const p = cfgCurrentProduct;
  if (!p) return false;
  const rule = p.config ? CONFIG_RULES[p.config] : null;
  if (rule && cfgSelectedMeats.length !== rule.viandes) return false;
  if (p.menu && !cfgSelectedDrink) return false;
  return true;
}

function updateCfgAddButton() {
  const valid = isConfiguratorValid();
  const btn = document.getElementById('cfgAddBtn');
  btn.disabled = !valid;
  btn.style.opacity = valid ? '1' : '.5';
  btn.style.pointerEvents = valid ? 'auto' : 'none';
  const total = cfgCurrentProduct ? cfgCurrentProduct.price * cfgQty : 0;
  document.getElementById('cfgAddPrice').textContent = euro(total);
}

function closeConfigurator() {
  document.getElementById('cfgOverlay').classList.remove('visible');
  document.getElementById('cfgSheet').classList.remove('open');
  document.body.classList.remove('cart-open');
  cfgCurrentProduct = null;
}

function confirmConfiguratorAdd() {
  if (!isConfiguratorValid() || !cfgCurrentProduct) return;
  addToCartConfigured(cfgCurrentProduct, cfgSelectedMeats, cfgSelectedSauces, cfgSelectedDrink, cfgQty);
  closeConfigurator();
  openCart();
}

function handleProductClick(productId) {
  const p = getProduct(productId);
  if (!p || p.available === false) return;
  if (p.config || p.menu) { openConfigurator(productId); }
  else { addToCartSimple(productId); }
}

function shareProduct(productId) {
  const p = getProduct(productId);
  if (!p) return;
  const url = `${location.origin}${location.pathname}#produit-${p.id}`;
  const text = `${p.name} — ${euro(p.price)} chez ${SITE.name}`;
  if (navigator.share) {
    /* L'utilisateur peut annuler la feuille de partage native : ce n'est
       pas une erreur, juste un choix, donc on l'avale sans la logger. */
    navigator.share({ title: p.name, text, url }).catch(() => {});
    return;
  }
  /* Pas d'API de partage (desktop, navigateur ancien) : on copie le lien
     et on le confirme avec le toast déjà utilisé partout ailleurs. */
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => showToast('Lien du plat copié'))
      .catch(() => showToast('Impossible de copier le lien'));
  } else {
    showToast('Partage indisponible sur ce navigateur');
  }
}


/* ============ HEADER SCROLL ============ */
function initHeaderScroll() {
  const header = document.getElementById('header');
  const progress = document.getElementById('scrollProgress');
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (y / docH) * 100 : 0;
    progress.style.width = pct + '%';
    const toolbar = document.getElementById('menuToolbar');
    if (toolbar) {
      const rect = toolbar.getBoundingClientRect();
      toolbar.classList.toggle('stuck', rect.top <= parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) + 2);
    }
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
}

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  function closeMobileNav() {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  function openMobileNav() {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    document.body.classList.add('menu-open');
    hamburger.setAttribute('aria-expanded', 'true');
  }
  hamburger.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) closeMobileNav(); else openMobileNav();
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));
  /* Fermeture au clic en dehors du panneau (point 40 du cahier des charges) */
  document.addEventListener('click', (e) => {
    if (!mobileNav.classList.contains('open')) return;
    if (mobileNav.contains(e.target) || hamburger.contains(e.target)) return;
    closeMobileNav();
  });
  /* Fermeture Escape, cohérente avec le panier/configurateur */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeMobileNav();
  });
}

function initAnnounceClose() {
  const btn = document.getElementById('announceClose');
  btn.addEventListener('click', () => document.documentElement.classList.add('no-announce'));
}

/* ============ REVEAL ON SCROLL ============ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('visible')); return; }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* Délai progressif par carte : les enfants directs consécutifs d'une même
     grille (produits, populaires, avis...) se révèlent en cascade plutôt
     que tous d'un coup. Calculé une fois par groupe de frères "reveal". */
  if (!reduced) {
    const seen = new Set();
    els.forEach(el => {
      const parent = el.parentElement;
      if (!parent || seen.has(parent)) return;
      seen.add(parent);
      const siblings = Array.from(parent.children).filter(c => c.classList.contains('reveal'));
      siblings.forEach((sib, i) => { sib.style.transitionDelay = Math.min(i * 60, 360) + 'ms'; });
    });
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function animate(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    if (reduced || !('IntersectionObserver' in window)) { el.textContent = target; return; }
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (!('IntersectionObserver' in window)) { els.forEach(el => { el.textContent = el.dataset.count; }); return; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animate(entry.target); observer.unobserve(entry.target); }
    });
  }, { threshold:0.6 });
  els.forEach(el => observer.observe(el));
}

/* ============ TICKER ============ */
function initTicker() {
  const el = document.getElementById('tickerTrack');
  const items = ['91 plats à la carte', "Ouvert jusqu'à minuit", 'Halal', 'Commande WhatsApp', '7j/7', 'Livraison Uber Eats', 'Montereau-Fault-Yonne'];
  const html = items.map(t => `<span class="ticker-item">${t}<span class="tk-dot">●</span></span>`).join('');
  el.innerHTML = html + html; // doublé pour boucle infinie
}

/* ============ FAQ TOGGLE ============ */
function initFAQ() {
  document.getElementById('faqList').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-faq-toggle]');
    if (!btn) return;
    const idx = btn.dataset.faqToggle;
    const item = btn.closest('.faq-item');
    const answer = document.getElementById('faqA' + idx);
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(other => {
      if (other !== item) {
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
        other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      }
    });
    if (isOpen) {
      item.classList.remove('open'); answer.style.maxHeight = null;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('open'); answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

/* ============ MOBILE TAP-HOVER (virtual cursor pattern) ============ */
/* ============ CURSEUR VIRTUEL (TACTILE) ============
   Sur un écran tactile il n'y a pas de survol : tous les effets liés au
   hover (accents, glow, zoom d'image, tilt 3D) resteraient invisibles.
   Ce module simule un curseur au centre de l'écran : l'élément qui passe
   sous ce point pendant le scroll reçoit la classe .mobile-hover, déjà
   câblée dans tout le CSS à côté de chaque :hover. Le tap garde en plus
   un retour immédiat sur l'élément touché.
   Un seul système gère les deux cas, pour ne pas avoir deux modules qui
   se retirent mutuellement la classe. */
function initMobileHover() {
  const isTouch = !window.matchMedia('(hover: hover)').matches || 'ontouchstart' in window;
  if (!isTouch) return;

  const HOVERABLE = '.btn, .hero-pill, .trust-item, .stat-item, .pop-card, .pop-add, ' +
    '.cat-chip, .product-add, .classique-card, .loc-card, .faq-q, ' +
    '.review-platform, .cart-item, .qty-btn, .cfg-opt, .order-mode-label, ' +
    '.cart-delivery-note-link, .search-clear, .nav-link, .mobile-nav-link, ' +
    '.mobile-phone-link, .footer-links a, .fab-cart, .fab-uber, .a-link, .a-close, .hamburger';
  /* Les cartes qui portent un vrai tilt 3D au survol sur desktop */
  const TILTABLE = '.pop-card:not(.is-unavailable), .classique-card';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentEl = null, currentTiltEl = null, ticking = false, centerY = 0;

  function updateCenterY() { centerY = window.innerHeight / 2; }

  function findElementAtCenter() {
    const x = window.innerWidth / 2, y = centerY;
    /* elementsFromPoint (pluriel) renvoie toute la pile sous ce point, du
       dessus vers le dessous. Le singulier ne renverrait que le calque le
       plus haut — souvent le grain, un scrim ou un glow décoratif, qui
       masquerait la carte réellement survolable en dessous.
       Repli sur le singulier si l'API pluriel manque (navigateurs anciens) :
       sans ce garde-fou, la fonction lèverait une erreur à chaque frame. */
    if (typeof document.elementsFromPoint === 'function') {
      const stack = document.elementsFromPoint(x, y);
      for (const el of stack) {
        const hoverable = el.closest(HOVERABLE);
        if (hoverable) return hoverable;
      }
      return null;
    }
    if (typeof document.elementFromPoint === 'function') {
      const el = document.elementFromPoint(x, y);
      return el ? el.closest(HOVERABLE) : null;
    }
    return null;
  }

  function applyTiltFromCenter(card) {
    const rect = card.getBoundingClientRect();
    const cy = rect.top + rect.height / 2;
    const dy = (centerY - cy) / (rect.height / 2);
    /* Le translate du hover est repris ici : un transform inline écrase
       toujours celui de la règle CSS :hover/.mobile-hover, donc les deux
       effets doivent être combinés dans la même déclaration. */
    const isClassique = card.classList.contains('classique-card');
    const lift = isClassique ? 8 : 6;
    const shiftX = isClassique ? 0 : -3;
    card.style.transition = 'transform .18s ease-out';
    card.style.transform = `perspective(600px) rotateX(${(-dy * 4).toFixed(2)}deg) translate(${shiftX}px,-${lift}px) translateZ(4px)`;
  }
  function resetTilt(card) {
    card.style.transition = 'transform .4s ease';
    card.style.transform = '';
  }

  function update() {
    ticking = false;
    const target = findElementAtCenter();
    if (target !== currentEl) {
      if (currentEl) currentEl.classList.remove('mobile-hover');
      if (target) target.classList.add('mobile-hover');
      currentEl = target;
    }
    if (reduced) return;
    const tiltTarget = target ? target.closest(TILTABLE) : null;
    if (tiltTarget !== currentTiltEl) {
      if (currentTiltEl) resetTilt(currentTiltEl);
      currentTiltEl = tiltTarget;
    }
    if (currentTiltEl) applyTiltFromCenter(currentTiltEl);
  }

  function onScroll() {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }

  updateCenterY();
  window.addEventListener('scroll', onScroll, { passive:true });
  window.addEventListener('resize', () => { updateCenterY(); onScroll(); }, { passive:true });

  /* Retour immédiat au toucher, sans effacer l'élément tenu par le curseur
     central : la classe est posée sur l'élément touché puis retirée, et le
     curseur reprend la main au scroll suivant. */
  document.addEventListener('touchstart', (e) => {
    const target = e.target.closest(HOVERABLE);
    if (!target || target === currentEl) return;
    target.classList.add('mobile-hover');
    setTimeout(() => {
      if (target !== currentEl) target.classList.remove('mobile-hover');
    }, 600);
  }, { passive:true });

  requestAnimationFrame(update);
}

/* ============ EVENT DELEGATION ============ */
function initDelegatedEvents() {
  document.body.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add-id]');
    if (addBtn) { handleProductClick(parseInt(addBtn.dataset.addId, 10)); return; }

    const shareBtn = e.target.closest('[data-share-id]');
    if (shareBtn) { shareProduct(parseInt(shareBtn.dataset.shareId, 10)); return; }

    const favBtn = e.target.closest('[data-fav-id]');
    if (favBtn) { toggleFavorite(parseInt(favBtn.dataset.favId, 10)); return; }

    const card = e.target.closest('.product-card, .pop-card, .classique-card');
    if (card && !e.target.closest('[data-add-id]') && !e.target.closest('[data-share-id]') && !e.target.closest('[data-fav-id]')) { handleProductClick(parseInt(card.dataset.id, 10)); return; }

    const catChip = e.target.closest('[data-cat]');
    if (catChip) {
      if (catChip.dataset.cat === 'favs') {
        showOnlyFavs = !showOnlyFavs;
        if (showOnlyFavs) activeCategory = 'all';
      } else {
        showOnlyFavs = false;
        activeCategory = catChip.dataset.cat;
      }
      renderCatFilters();
      renderMenuGrid();
      return;
    }

    const budgetChip = e.target.closest('[data-budget]');
    if (budgetChip) {
      activeBudget = budgetChip.dataset.budget;
      document.querySelectorAll('.budget-chip').forEach(b => b.classList.toggle('active', b.dataset.budget === activeBudget));
      renderMenuGrid();
      return;
    }

    if (e.target.closest('#resetFiltersBtn')) { resetFilters(); return; }

    const qtyBtn = e.target.closest('[data-qty-key]');
    if (qtyBtn) { updateCartQty(qtyBtn.dataset.qtyKey, parseInt(qtyBtn.dataset.delta, 10)); return; }
  });

  document.getElementById('cartBtn').addEventListener('click', (e) => { e.preventDefault(); openCart(); });
  document.getElementById('fabCart').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('sendWaBtn').addEventListener('click', sendWhatsAppOrder);

  document.getElementById('cfgClose').addEventListener('click', closeConfigurator);
  document.getElementById('cfgOverlay').addEventListener('click', closeConfigurator);
  document.getElementById('cfgAddBtn').addEventListener('click', confirmConfiguratorAdd);

  const heroWaBtn = document.getElementById('heroWaBtn');
  if (heroWaBtn) heroWaBtn.addEventListener('click', (e) => { e.preventDefault(); if (cart.length > 0) sendWhatsAppOrder(); else openCart(); });
  const footerWaLink = document.getElementById('footerWaLink');
  if (footerWaLink) footerWaLink.addEventListener('click', (e) => { e.preventDefault(); if (cart.length > 0) sendWhatsAppOrder(); else openCart(); });

  const searchInput = document.getElementById('searchInput');
  const searchBox = document.getElementById('searchBox');
  const searchClear = document.getElementById('searchClear');
  const onSearch = debounce(() => {
    searchQuery = searchInput.value;
    searchBox.classList.toggle('has-val', searchQuery.length > 0);
    renderMenuGrid();
  }, 200);
  searchInput.addEventListener('input', onSearch);
  searchClear.addEventListener('click', () => { searchInput.value = ''; searchQuery = ''; searchBox.classList.remove('has-val'); renderMenuGrid(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeCart(); closeConfigurator(); }
    /* Cartes produit/populaires/classiques : de vrais <div role="button">, donc
       le navigateur n'active pas nativement Entrée/Espace dessus (contrairement
       à un <button>). On reproduit le même comportement que le clic. */
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.product-card, .pop-card, .classique-card');
      if (card) { e.preventDefault(); handleProductClick(parseInt(card.dataset.id, 10)); }
    }
  });
}

/* ============ TOAST ============ */
function showToast(msg, duration = 2600) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), duration);
}

/* ============ HERO — PARTICULES FLAMME ============ */
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const symbols = ['✦', '·', '✧'];
  const colors = ['c-flame', 'c-gold', 'c-lime'];
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const maxActive = isTouch ? 10 : 22;
  let active = 0;
  function spawn() {
    if (document.hidden || active >= maxActive) return;
    active++;
    const el = document.createElement('span');
    el.className = 'spark ' + colors[Math.floor(Math.random() * colors.length)];
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.cssText = 'left:' + (Math.random()*92+4) + '%;font-size:' + (.55+Math.random()*.85) + 'rem;animation-duration:' + (4+Math.random()*6) + 's;';
    container.appendChild(el);
    el.addEventListener('animationend', () => { el.remove(); active--; }, { once:true });
  }
  const spawnCount = isTouch ? 3 : 6;
  for (let i = 0; i < spawnCount; i++) setTimeout(spawn, i * 350);
  setInterval(spawn, isTouch ? 1100 : 650);
}

/* ============ HERO — PARALLAXE CURSEUR ============ */
function initHeroParallax() {
  const hero = document.getElementById('hero');
  const visual = hero?.querySelector('.hero-visual-col');
  if (!hero || !visual || window.innerWidth < 1024) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  /* Couches à profondeurs différentes : plus "loin" = bouge moins vite.
     Seuls des éléments SANS animation CSS de transform propre sont parallaxés
     directement ; le "7" et les chips ont leur propre wrapper de parallax
     pour ne jamais entrer en conflit avec sevenFloat / chipDrift. */
  const seven = visual.querySelector('.hero-seven-frame');
  const layers = [
    { el: hero.querySelector('.hero-seven-bg'), fx: 10, fy: 7 },
    { el: visual.querySelector('.hero-food-layer'), fx: 12, fy: 9 },
    { el: hero.querySelector('.hero-text-col'), fx: -3, fy: -2 },
  ].filter(l => l.el);
  if (seven && seven.parentElement === visual) {
    const wrap = document.createElement('div');
    wrap.className = 'hsf-parallax-wrap';
    wrap.style.cssText = 'position:absolute; top:0;left:0;right:0;bottom:0;';
    visual.insertBefore(wrap, seven);
    wrap.appendChild(seven);
    layers.push({ el: wrap, fx: 22, fy: 15 });
  }

  let raf = null, tx = 0, ty = 0, cx = 0, cy = 0;
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    if (!raf) raf = requestAnimationFrame(apply);
  }, { passive:true });
  hero.addEventListener('mouseleave', () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(apply); });

  function apply() {
    /* Interpolation légère pour un mouvement organique, jamais brutal */
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    visual.style.transform = `translate3d(${(cx * 16).toFixed(1)}px, ${(cy * 12).toFixed(1)}px, 0)`;
    layers.forEach(l => {
      l.el.style.transform = `translate3d(${(cx * l.fx).toFixed(1)}px, ${(cy * l.fy).toFixed(1)}px, 0)`;
    });
    if (Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002) {
      raf = requestAnimationFrame(apply);
    } else {
      raf = null;
    }
  }
}

/* ============ PRODUCT CARDS — TILT 3D ============ */
function applyProductTilt() {
  if (window.innerWidth < 1024 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.pop-card, .review-card').forEach(card => {
    if (card._tiltBound) return;
    card._tiltBound = true;
    card.addEventListener('mousemove', e => {
      if (card.classList.contains('is-unavailable')) return;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(600px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg) translateZ(4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .5s ease';
      card.style.transform = '';
      setTimeout(() => card.style.transition = '', 500);
    });
    card.addEventListener('mouseenter', () => { card.style.transition = 'transform .08s ease'; });
  });
}

/* ============ CONFETTI — ajout au panier ============ */
function spawnConfetti(originEl) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#C6421E', '#C98A2E', '#8FA84A', '#9A3216', '#A16D22'];
  const rect = originEl ? originEl.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const layer = document.createElement('div');
  layer.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:9996;overflow:hidden;';
  document.body.appendChild(layer);
  const count = 14;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    const color = colors[i % colors.length];
    const angle = Math.random() * Math.PI * 2;
    const dist = 55 + Math.random() * 85;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 40;
    const rot = (Math.random() * 720 - 360).toFixed(0);
    const size = 5 + Math.random() * 5;
    piece.style.cssText = `position:absolute;left:${originX}px;top:${originY}px;width:${size}px;height:${size}px;background:${color};border-radius:${Math.random() > .5 ? '50%' : '2px'};box-shadow:0 0 6px ${color};opacity:1;transform:translate(0,0) rotate(0deg);transition:transform .8s cubic-bezier(.15,.7,.3,1),opacity .8s ease-in;`;
    layer.appendChild(piece);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        piece.style.transform = `translate(${dx}px, ${dy + 120}px) rotate(${rot}deg)`;
        piece.style.opacity = '0';
      });
    });
  }
  setTimeout(() => layer.remove(), 900);
}


/* ============ APPLICATION DE LA CONFIG (SITE) ============ */
const esc = (t) => String(t == null ? '' : t).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const todo = (v) => /^\[.*\]$/.test(String(v || '').trim()) ? `<span class="legal-todo">${esc(v)}</span>` : esc(v);

function applySiteConfig() {
  const fullAddr = `${SITE.street}, ${SITE.postalCode} ${SITE.city}`;
  const mapsQuery = encodeURIComponent(`${SITE.street} ${SITE.postalCode} ${SITE.city}`).replace(/%20/g, '+');
  const mapsDir = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
  const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.name + ' ' + SITE.street + ' ' + SITE.postalCode + ' ' + SITE.city)}`;

  /* Titre & meta */
  document.title = `${SITE.name} | ${SITE.tagline} — ${SITE.city} (${SITE.postalCode})`;
  const setMeta = (sel, val) => { const m = document.querySelector(sel); if (m) m.setAttribute('content', val); };
  const desc = `${SITE.name} à ${SITE.city} : ${SITE.tagline}. Commandez à emporter via WhatsApp${SITE.uberEatsUrl ? ' ou faites-vous livrer avec Uber Eats' : ''}.`;
  setMeta('meta[name="description"]', desc);
  setMeta('meta[name="keywords"]', `${SITE.name} ${SITE.city},${SITE.cuisine.map(c => c.toLowerCase() + ' ' + SITE.city).join(',')}`);
  setMeta('meta[property="og:title"]', `${SITE.name} | ${SITE.tagline} — ${SITE.city}`);
  setMeta('meta[property="og:description"]', `Commandez via WhatsApp, on prépare. ${SITE.name}, ${SITE.city}.`);
  const canon = document.querySelector('link[rel="canonical"]'); if (canon) canon.href = SITE.domain.replace(/\/$/, '') + '/';
  if (SITE.demoMode) setMeta('meta[name="robots"]', 'noindex,nofollow');   // pas d'indexation tant que c'est une démo

  /* Textes marqués data-site */
  document.querySelectorAll('[data-site="name"]').forEach(el => el.textContent = SITE.name);
  document.querySelectorAll('[data-site="city"]').forEach(el => el.textContent = SITE.city);

  /* Téléphone */
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.setAttribute('href', 'tel:' + SITE.phone);
    const t = a.querySelector('.btn-phone-txt'); if (t) t.textContent = SITE.phoneDisplay;
    else if (!a.querySelector('*:not(svg):not(use)') || a.classList.contains('mobile-phone-link')) {
      const svg = a.querySelector('svg'); a.textContent = ''; if (svg) a.appendChild(svg); a.append(' ' + SITE.phoneDisplay);
    } else if (a.children.length === 0) a.textContent = SITE.phoneDisplay;
  });

  /* Adresse & cartes */
  document.querySelectorAll('a[href*="google.com/maps/dir"]').forEach(a => a.href = mapsDir);
  document.querySelectorAll('a[href*="google.com/maps/search"]').forEach(a => a.href = mapsSearch);
  document.querySelectorAll('.loc-row-sub').forEach(el => { if (/rue|avenue|boulevard|\d{5}/i.test(el.textContent)) el.innerHTML = `${esc(SITE.street)}<br/>${esc(SITE.postalCode)} ${esc(SITE.city)}`; });
  document.querySelectorAll('.section-eyebrow').forEach(el => { if (el.querySelector('use[href="#i-pin"]')) { const svg = el.querySelector('svg'); el.textContent = ''; el.appendChild(svg); el.append(' ' + SITE.street); } });
  document.querySelectorAll('.trust-title').forEach(el => { if (/Montereau/i.test(el.textContent)) { el.textContent = SITE.city; const sub = el.parentElement.querySelector('.trust-sub'); if (sub) sub.textContent = SITE.street; } });
  document.querySelectorAll('.hero-pill').forEach(el => { if (/Montereau/i.test(el.textContent)) { const svg = el.querySelector('svg'); el.textContent = ''; if (svg) el.appendChild(svg); el.append(' ' + SITE.city); } });
  const footerAddr = document.querySelector('.footer-links a[href*="google.com/maps"]'); if (footerAddr) footerAddr.textContent = `${SITE.street}, ${SITE.postalCode}`;

  /* Uber Eats */
  document.querySelectorAll('a[href*="ubereats.com"]').forEach(a => {
    if (SITE.uberEatsUrl) a.href = SITE.uberEatsUrl;
    else (a.closest('.review-platform, .btn, .hero-cta, li, .trust-item') || a).style.display = 'none';
  });

  /* Logo (header, footer) */
  document.querySelectorAll('.logo-le').forEach(el => { el.textContent = SITE.logoLe; if (!SITE.logoLe) el.style.display = 'none'; });
  document.querySelectorAll('.logo-name').forEach(el => {
    el.innerHTML = esc(SITE.logoName) + (SITE.logoAccent ? `<em style="color:var(--flame);font-style:normal">${esc(SITE.logoAccent)}</em>` : '');
  });

  /* Phrases d'accroche */
  document.querySelectorAll('.section-sub').forEach(el => {
    if (/plats les plus command/i.test(el.textContent)) el.textContent = `Les plats les plus commandés chez ${SITE.name} — validés par les habitués.`;
    if (/avis du Sept 7/i.test(el.textContent)) el.textContent = `Les avis de ${SITE.name} sont publics sur Google${SITE.uberEatsUrl ? ' et Uber Eats' : ''}. Allez les lire — et laissez le vôtre après votre commande.`;
  });
  const fdesc = document.querySelector('.footer-brand-desc'); if (fdesc) fdesc.textContent = `${SITE.tagline} à ${SITE.city}. Commande à emporter via WhatsApp.`;
  const iframe = document.querySelector('.map-embed iframe'); if (iframe) iframe.title = 'Localisation ' + SITE.name;

  /* Mode démo */
  const demo = document.getElementById('demoNotice'); if (demo) demo.hidden = !SITE.demoMode;

  /* Google Maps : chargé uniquement après consentement */
  window.__mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddr)}&output=embed`;
  updateMapConsent();

  /* Données structurées (JSON-LD) régénérées */
  const old = document.querySelector('script[type="application/ld+json"]'); 
  document.querySelectorAll('script[type="application/ld+json"]').forEach(x => x.remove());
  const dayMap = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const pad = n => String(n).padStart(2, '0') + ':00';
  const ld = {
    '@context':'https://schema.org', '@type':'FastFoodRestaurant', name:SITE.name, url:SITE.domain,
    address:{ '@type':'PostalAddress', streetAddress:SITE.street, addressLocality:SITE.city, postalCode:SITE.postalCode, addressCountry:'FR' },
    telephone:SITE.phone, servesCuisine:SITE.cuisine, priceRange:SITE.priceRange,
    openingHoursSpecification: HOURS_BY_DAY.map(h => ({ '@type':'OpeningHoursSpecification', dayOfWeek:dayMap[h.day], opens:pad(h.open), closes: h.close >= 24 ? '23:59' : pad(h.close) }))
  };
  /* La note Google n'est publiée que si elle est renseignée ET réelle */
  if (SITE.googleRating && SITE.googleRating.value && SITE.googleRating.count) {
    ld.aggregateRating = { '@type':'AggregateRating', ratingValue:SITE.googleRating.value, reviewCount:SITE.googleRating.count, bestRating:'5' };
  }
  const tag = document.createElement('script'); tag.type = 'application/ld+json'; tag.textContent = JSON.stringify(ld);
  document.head.appendChild(tag);
  /* FAQPage généré depuis la FAQ visible : les deux restent toujours identiques */
  if (typeof FAQ_ITEMS !== 'undefined') {
    const faqTag = document.createElement('script'); faqTag.type = 'application/ld+json';
    faqTag.textContent = JSON.stringify({ '@context':'https://schema.org', '@type':'FAQPage', mainEntity: FAQ_ITEMS.map(i => ({ '@type':'Question', name:i.q, acceptedAnswer:{ '@type':'Answer', text:i.a } })) });
    document.head.appendChild(faqTag);
  }
}

/* ============ COOKIES / CONSENTEMENT GOOGLE MAPS ============ */
const CONSENT_KEY = 'site_maps_consent';
function getConsent() { try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; } }
function setConsent(v) { try { localStorage.setItem(CONSENT_KEY, v); } catch (e) {} }

function updateMapConsent() {
  const box = document.querySelector('.map-embed'); if (!box) return;
  const consent = getConsent();
  if (consent === 'yes') {
    if (!box.querySelector('iframe[data-loaded]')) {
      box.innerHTML = `<iframe data-loaded="1" src="${window.__mapSrc}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localisation ${esc(SITE.name)}"></iframe>`;
    }
  } else {
    box.innerHTML = `<div class="map-placeholder">
      <p>La carte Google Maps n'est chargée qu'avec votre accord.</p>
      <button class="btn btn-primary" data-map-accept>Afficher la carte</button>
      <a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.street + ' ' + SITE.postalCode + ' ' + SITE.city)}" target="_blank" rel="noopener" style="color:#f5efe4;text-decoration:underline">Ouvrir dans Google Maps</a>
    </div>`;
  }
}
function initCookies() {
  const banner = document.getElementById('cookieBanner');
  const hide = () => banner.classList.remove('show');
  if (getConsent() === null) setTimeout(() => banner.classList.add('show'), 900);
  document.getElementById('cookieAccept').addEventListener('click', () => { setConsent('yes'); hide(); updateMapConsent(); });
  document.getElementById('cookieRefuse').addEventListener('click', () => { setConsent('no'); hide(); updateMapConsent(); });
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-cookie-settings]')) { e.preventDefault(); banner.classList.add('show'); }
    if (e.target.closest('[data-map-accept]')) { setConsent('yes'); updateMapConsent(); }
  });
}

/* ============ PAGES LÉGALES ============ */
function legalContent(type) {
  const L = SITE.legal, fullAddr = `${SITE.street}, ${SITE.postalCode} ${SITE.city}`;
  if (type === 'mentions') return { title:'Mentions légales', html: `
    <h3>Éditeur du site</h3>
    <p><strong>${todo(L.companyName)}</strong>, ${todo(L.legalForm)}${L.capital ? ', au capital de ' + todo(L.capital) : ''}.<br/>
    Nom commercial : ${esc(SITE.name)}<br/>Siège / établissement : ${esc(fullAddr)}<br/>
    SIRET : ${todo(L.siret)}${L.rcs ? '<br/>' + todo(L.rcs) : ''}${L.tva ? '<br/>N° TVA intracommunautaire : ' + esc(L.tva) : ''}<br/>
    Téléphone : <a href="tel:${esc(SITE.phone)}">${esc(SITE.phoneDisplay)}</a><br/>E-mail : ${todo(L.contactEmail)}</p>
    <h3>Responsable de la publication</h3><p>${todo(L.publisher)}</p>
    <h3>Hébergement</h3><p>${todo(L.host)}<br/>${todo(L.hostAddress)}${L.hostUrl ? '<br/><a href="' + esc(L.hostUrl) + '" target="_blank" rel="noopener">' + esc(L.hostUrl) + '</a>' : ''}</p>
    <h3>Propriété intellectuelle</h3><p>Les textes, images, logos et éléments graphiques de ce site sont la propriété de ${esc(SITE.name)} ou de leurs auteurs respectifs. Toute reproduction sans autorisation est interdite.</p>
    <h3>Commandes et prix</h3><p>Les prix sont indiqués en euros, toutes taxes comprises. Une commande envoyée via WhatsApp n'est définitive qu'après confirmation du restaurant. Le règlement s'effectue sur place lors du retrait.</p>
    <h3>Médiation de la consommation</h3><p>Conformément à l'article L.612-1 du Code de la consommation, le client peut recourir gratuitement à un médiateur de la consommation en cas de litige non résolu. Médiateur : <span class="legal-todo">[à compléter — à désigner par le restaurant]</span></p>
    ${L.creditLine ? '<h3>Crédits</h3><p>' + esc(L.creditLine) + '</p>' : ''}` };

  if (type === 'confidentialite') return { title:'Confidentialité & cookies', html: `
    <h3>Responsable du traitement</h3><p>${todo(L.companyName)} — ${esc(SITE.name)}, ${esc(fullAddr)}. Contact : ${todo(L.contactEmail)}</p>
    <h3>Données collectées</h3>
    <ul><li><strong>Prénom</strong> : saisi dans le panier pour identifier votre commande. Il n'est pas enregistré sur un serveur : il est simplement transmis dans le message WhatsApp que vous envoyez.</li>
    <li><strong>Panier</strong> : conservé uniquement dans votre navigateur (stockage local) pour ne pas le perdre si vous rechargez la page. Aucune donnée n'est envoyée à un serveur.</li>
    <li><strong>WhatsApp</strong> : lorsque vous envoyez votre commande, votre numéro et votre message sont traités par WhatsApp (Meta) selon leur propre politique, puis reçus par le restaurant pour préparer la commande.</li></ul>
    <h3>Finalité et base légale</h3><p>Ces données servent uniquement à préparer et confirmer votre commande (exécution d'une demande de votre part). Elles ne sont ni vendues ni utilisées à des fins publicitaires.</p>
    <h3>Cookies et services tiers</h3>
    <p><strong>Google Maps</strong> : le plan d'accès n'est chargé qu'après votre accord. Google peut alors déposer des cookies et recevoir votre adresse IP. Vous pouvez retirer votre choix à tout moment via « Cookies » en bas de page.</p>
    <p>Ce site n'utilise aucun cookie publicitaire ni outil de mesure d'audience.</p>
    <h3>Durée de conservation</h3><p>Panier et choix de consentement : conservés dans votre navigateur jusqu'à suppression par vos soins. Messages WhatsApp : conservés par le restaurant le temps nécessaire au traitement de la commande.</p>
    <h3>Vos droits</h3><p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de limitation. Pour l'exercer : ${todo(L.contactEmail)}. Vous pouvez aussi introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener">cnil.fr</a>).</p>` };

  if (type === 'allergenes') return { title:'Allergènes', html: `
    <p>La réglementation européenne impose d'informer sur la présence des <strong>14 allergènes à déclaration obligatoire</strong> :</p>
    <ul><li>Céréales contenant du gluten (blé, seigle, orge, avoine…)</li><li>Crustacés</li><li>Œufs</li><li>Poissons</li><li>Arachides</li><li>Soja</li><li>Lait (y compris lactose)</li><li>Fruits à coque (amandes, noisettes, noix…)</li><li>Céleri</li><li>Moutarde</li><li>Graines de sésame</li><li>Anhydride sulfureux et sulfites</li><li>Lupin</li><li>Mollusques</li></ul>
    <p>Nos plats sont préparés dans une cuisine où plusieurs de ces allergènes sont manipulés : des <strong>traces</strong> sont possibles, même si un plat ne les contient pas dans sa recette.</p>
    <h3>Vous êtes allergique ?</h3>
    <p>Avant de commander, <strong>dites-le-nous</strong> : appelez le <a href="tel:${esc(SITE.phone)}">${esc(SITE.phoneDisplay)}</a> ou précisez-le dans votre message WhatsApp. Nous vous indiquerons les allergènes présents dans chaque plat.</p>` };
  return { title:'', html:'' };
}
function openLegal(type) {
  const c = legalContent(type);
  document.getElementById('legalTitle').textContent = c.title;
  document.getElementById('legalBody').innerHTML = c.html;
  document.getElementById('legalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('legalBody').scrollTop = 0;
}
function closeLegal() {
  document.getElementById('legalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function initLegal() {
  document.addEventListener('click', (e) => {
    const l = e.target.closest('[data-legal]');
    if (l) { e.preventDefault(); openLegal(l.dataset.legal); }
  });
  document.getElementById('legalClose').addEventListener('click', closeLegal);
  document.getElementById('legalOverlay').addEventListener('click', (e) => { if (e.target.id === 'legalOverlay') closeLegal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLegal(); });
}

/* ============ PANNEAU ÉQUIPE — gestion des ruptures du jour ============
   Petit code PIN pour éviter qu'un client ne bascule les plats par erreur
   en tombant sur le lien. Le code n'est jamais stocké ni transmis en clair :
   seul son empreinte SHA-256 (SITE.vendorPinHash) vit dans ce fichier, donc
   personne ne peut lire le PIN réel en ouvrant le code source. Attention
   cependant : ce n'est pas une sécurité forte pour autant — tout tourne
   côté navigateur dans un site 100% statique, donc quelqu'un qui saurait
   manipuler la console du navigateur pourrait toujours contourner cette
   vérification. C'est un garde-fou pratique contre les erreurs et les
   curieux, pas un coffre-fort. Pour changer le code, voir l'instruction
   juste au-dessus de vendorPinHash dans SITE. */
async function hashPin(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
}
function renderVendorPanelList() {
  const list = document.getElementById('vendorList');
  if (!list) return;
  const stats = loadAddStats();
  const sorted = [...PRODUCTS].sort((a, b) => (stats[b.id] || 0) - (stats[a.id] || 0));
  list.innerHTML = sorted.map(p => {
    const catLabel = CATEGORIES.find(c => c.id === p.cat)?.label || '';
    const out = isOutOfStock(p.id);
    const count = stats[p.id] || 0;
    return `<button type="button" class="vendor-item${out ? ' is-out' : ''}" data-vendor-toggle="${p.id}">
      <span><span class="vendor-item-name">${esc(p.name)}</span><br><span class="vendor-item-cat">${esc(catLabel)}${count ? ` · ${count} ajout${count > 1 ? 's' : ''} au panier aujourd'hui` : ''}</span></span>
      <span class="vendor-toggle" aria-hidden="true"></span>
    </button>`;
  }).join('');
}
function openVendorPanel() {
  const unlocked = sessionStorage.getItem('sept7_vendor_unlocked') === '1';
  document.getElementById('vendorGate').hidden = unlocked;
  document.getElementById('vendorContent').hidden = !unlocked;
  if (unlocked) renderVendorPanelList();
  document.getElementById('vendorOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeVendorPanel() {
  document.getElementById('vendorOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function initVendorPanel() {
  const link = document.getElementById('vendorPanelLink');
  if (link) link.addEventListener('click', (e) => { e.preventDefault(); openVendorPanel(); });
  const closeBtn = document.getElementById('vendorClose');
  if (closeBtn) closeBtn.addEventListener('click', closeVendorPanel);
  const overlay = document.getElementById('vendorOverlay');
  if (overlay) overlay.addEventListener('click', (e) => { if (e.target.id === 'vendorOverlay') closeVendorPanel(); });

  const form = document.getElementById('vendorPinForm');
  if (form) form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('vendorPinInput');
    const err = document.getElementById('vendorPinError');
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;
    const enteredHash = await hashPin(input.value.trim());
    if (submitBtn) submitBtn.disabled = false;
    if (enteredHash === SITE.vendorPinHash) {
      sessionStorage.setItem('sept7_vendor_unlocked', '1');
      err.hidden = true;
      document.getElementById('vendorGate').hidden = true;
      document.getElementById('vendorContent').hidden = false;
      renderVendorPanelList();
    } else {
      err.hidden = false;
      input.value = '';
      input.focus();
    }
  });

  const list = document.getElementById('vendorList');
  if (list) list.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-vendor-toggle]');
    if (btn) toggleStock(parseInt(btn.dataset.vendorToggle, 10));
  });

  const resetBtn = document.getElementById('vendorResetAll');
  if (resetBtn) resetBtn.addEventListener('click', () => {
    stockOverrides = {};
    saveStockOverrides();
    renderMenuGrid();
    renderPopulaires();
    renderVendorPanelList();
    showToast('Tous les plats sont de nouveau disponibles');
  });
}

/* ============ REPRENDRE LA DERNIÈRE COMMANDE ============ */
function initReorderButton() {
  const btn = document.getElementById('reorderBtn');
  if (!btn) return;
  const last = loadLastOrder();
  if (last && last.length) {
    btn.hidden = false;
    btn.addEventListener('click', reorderLast);
  }
}

/* ============ FOOTER — ANNÉE DYNAMIQUE ============ */
function initYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============ INIT ============
   safeInit isole chaque module : si l'un échoue, il logge l'erreur en
   console et les autres continuent normalement (point 50 du cahier des
   charges). Ordre calqué sur le brief (point 51), adapté aux fonctions
   réellement présentes dans ce fichier. */
function safeInit(fn, label) {
  try { fn(); } catch (e) { console.error('[' + SITE.name + ']', label || fn.name, 'error:', e); }
}

function initApp() {
  safeInit(applySiteConfig, 'Site config');
  safeInit(initLegal, 'Legal');
  safeInit(initCookies, 'Cookies');
  safeInit(initYear, 'Year');
  safeInit(initAnnounceClose, 'Announcement');
  safeInit(initHeaderScroll, 'Header scroll');
  safeInit(updateOpenStatus, 'Open status');
  safeInit(loadCart, 'Cart load');
  safeInit(loadFavorites, 'Favorites load');
  safeInit(loadStockOverrides, 'Stock overrides load');
  safeInit(renderPopulaires, 'Populaires render');
  safeInit(renderCatFilters, 'Filters render');
  safeInit(renderMenuGrid, 'Menu grid render');
  safeInit(renderReviews, 'Reviews render');
  safeInit(renderHoursTable, 'Hours render');
  safeInit(renderFAQ, 'FAQ render');
  safeInit(renderCart, 'Cart render');
  safeInit(initReveal, 'Reveal');
  safeInit(initCounters, 'Counters');
  safeInit(initParticles, 'Particles');
  safeInit(initHeroParallax, 'Hero parallax');
  safeInit(initTicker, 'Ticker');
  safeInit(initMobileNav, 'Mobile nav');
  safeInit(initFAQ, 'FAQ toggle');
  safeInit(initMobileHover, 'Mobile hover');
  safeInit(initDelegatedEvents, 'Delegated events');
  safeInit(initVendorPanel, 'Vendor panel');
  safeInit(initReorderButton, 'Reorder button');
  requestAnimationFrame(() => document.querySelector('.hero').classList.add('hero-loaded'));
}

document.addEventListener('DOMContentLoaded', initApp);
