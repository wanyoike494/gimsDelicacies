// Gims Delicacies - Main JavaScript Engine
// Business Contact: 0724323377 (WhatsApp: +254724323377)

const WHATSAPP_NUMBER = '254724323377';

// Comprehensive Product Database using local asset paths
const PRODUCTS = [
  // --- CAKES ---
  {
    id: 'cake-1',
    name: 'Luxury Grand Wedding Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: 'assets/weddingsCakes/aneta-voborilova-Hps0j8Uu8Us-unsplash.jpg',
    description: 'Multi-tiered elegant wedding masterpiece handcrafted with premium fondant, floral accents, and customized flavors.',
    price: 'Quote on Request',
    priceVal: 0,
    isCustomQuote: true,
    badge: 'Best Seller'
  },
  {
    id: 'cake-2',
    name: 'Graduation Celebration Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: 'assets/weddingsCakes/katie-rosario-QNyRp21hb5I-unsplash.jpg',
    description: 'Vibrant celebratory cake customized with graduation cap decor, rich buttercream frosting, and personalized messages.',
    price: 'KES 3,800',
    priceVal: 3800,
    isCustomQuote: false,
    badge: 'Popular'
  },
  {
    id: 'cake-3',
    name: 'Romantic Anniversary Tiered Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: 'assets/weddingsCakes/jacob-thomas-6jHpcBPw7i8-unsplash.jpg',
    description: 'Decadent multi-layered velvet cake infused with fresh berry reduction and hand-spun sugar pearls.',
    price: 'KES 4,500',
    priceVal: 4500,
    isCustomQuote: false,
    badge: 'Chef Favorite'
  },
  {
    id: 'cake-4',
    name: 'Gourmet Birthday Drip Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: 'assets/weddingsCakes/jasmine-bartel-8LtrMQfeDkQ-unsplash.jpg',
    description: 'Mouth-watering chocolate ganache drip cake topped with fresh berries, macarons, and golden sparkles.',
    price: 'KES 3,200',
    priceVal: 3200,
    isCustomQuote: false,
    badge: 'Festive'
  },
  {
    id: 'cake-5',
    name: 'Rustic Floral Celebration Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: 'assets/weddingsCakes/deva-williamson-rHz-DkDgA1k-unsplash.jpg',
    description: 'Semi-naked vanilla sponge cake adorned with fresh seasonal blooms and subtle caramel drizzles.',
    price: 'KES 3,500',
    priceVal: 3500,
    isCustomQuote: false,
    badge: 'Trending'
  },
  {
    id: 'cake-6',
    name: 'Custom Bespoke Event Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: 'assets/weddingsCakes/2am-creatives-wk9iC7_keLY-unsplash.jpg',
    description: 'Fully custom designed cake created strictly according to your theme, flavor preferences, and size requirements.',
    price: 'Quote on Request',
    priceVal: 0,
    isCustomQuote: true,
    badge: 'Custom Order'
  },

  // --- COOKIES ---
  {
    id: 'cookie-1',
    name: 'Double Chocolate Chip Cookies (Box of 6)',
    category: 'cookies',
    categoryName: 'Cookies',
    image: 'assets/cookies/american-heritage-chocolate-DoK5qEy2L60-unsplash.jpg',
    description: 'Rich, gooey chocolate cookies packed with premium Belgian dark chocolate chunks.',
    price: 'KES 600',
    priceVal: 600,
    isCustomQuote: false,
    badge: 'Customer Pick'
  },
  {
    id: 'cookie-2',
    name: 'Golden Butter Sugar Cookies',
    category: 'cookies',
    categoryName: 'Cookies',
    image: 'assets/cookies/mae-mu-kID9sxbJ3BQ-unsplash.jpg',
    description: 'Melt-in-your-mouth golden butter cookies baked to delicate crisp perfection.',
    price: 'KES 500',
    priceVal: 500,
    isCustomQuote: false,
    badge: 'Freshly Baked'
  },
  {
    id: 'cookie-3',
    name: 'Gourmet Assorted Cookie Box (12 Pcs)',
    category: 'cookies',
    categoryName: 'Cookies',
    image: 'assets/cookies/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg',
    description: 'Delicious selection of chocolate chip, oatmeal raisin, almond, and butter crunch cookies.',
    price: 'KES 1,100',
    priceVal: 1100,
    isCustomQuote: false,
    badge: 'Great Value'
  },

  // --- CINNAMON ROLLS ---
  {
    id: 'cinnamon-1',
    name: 'Classic Glazed Cinnamon Rolls (4 Pack)',
    category: 'cinnamon',
    categoryName: 'Cinnamon Rolls',
    image: 'assets/cinnamonDolls/anisa-cakesandbakes-c07YNJmNfaE-unsplash.jpg',
    description: 'Soft, fluffy, oven-fresh cinnamon rolls swirled with Saigon cinnamon and smothered in cream cheese glaze.',
    price: 'KES 800',
    priceVal: 800,
    isCustomQuote: false,
    badge: 'Signature'
  },
  {
    id: 'cinnamon-2',
    name: 'Caramel Pecan Cinnamon Rolls',
    category: 'cinnamon',
    categoryName: 'Cinnamon Rolls',
    image: 'assets/cinnamonDolls/beth-macdonald-V6LEV6CBVLw-unsplash.jpg',
    description: 'Warm cinnamon rolls topped with house-made sticky salted caramel and toasted crunch pecans.',
    price: 'KES 950',
    priceVal: 950,
    isCustomQuote: false,
    badge: 'Indulgent'
  },

  // --- DONUTS ---
  {
    id: 'donut-1',
    name: 'Assorted Gourmet Donuts Box (6 Pcs)',
    category: 'donuts',
    categoryName: 'Donuts',
    image: 'assets/donuts/kobby-mendez-WXJ33HOrzvE-unsplash.jpg',
    description: 'Fluffy fried donuts with chocolate glaze, colorful sprinkles, strawberry drizzle, and cream filling.',
    price: 'KES 750',
    priceVal: 750,
    isCustomQuote: false,
    badge: 'Kid Favorite'
  },
  {
    id: 'donut-2',
    name: 'Rich Chocolate Ganache Donut',
    category: 'donuts',
    categoryName: 'Donuts',
    image: 'assets/donuts/elena-koycheva-PFzy4N0_R3M-unsplash.jpg',
    description: 'Decadent chocolate glazed doughnut dusted with dark chocolate shavings.',
    price: 'KES 150 / pc',
    priceVal: 150,
    isCustomQuote: false,
    badge: 'Sweet Treat'
  },

  // --- CUPCAKES & MUFFINS ---
  // {
  //   id: 'cupcake-1',
  //   name: 'Red Velvet Swirl Cupcakes (6 Pack)',
  //   category: 'cupcakes',
  //   categoryName: 'Cupcakes & Muffins',
  //   image: 'assets/cupcakesAndMuffins/sara-cervera-zEwgRzJJIvk (1).jpg',
  //   description: 'Moist red velvet sponge topped with silky vanilla bean cream cheese frosting and cocoa dust.',
  //   price: 'KES 900',
  //   priceVal: 900,
  //   isCustomQuote: false,
  //   badge: 'Top Rated'
  // },
  {
    id: 'cupcake-2',
    name: 'Fresh Blueberry Crumble Muffins (4 Pack)',
    category: 'cupcakes',
    categoryName: 'Cupcakes & Muffins',
    image: 'assets/cupcakesAndMuffins/jennie-brown-MKBoRZEGeiM-unsplash.jpg',
    description: 'Hearty baked muffins bursting with juicy fresh blueberries and a crunchy streusel sugar topping.',
    price: 'KES 650',
    priceVal: 650,
    isCustomQuote: false,
    badge: 'Breakfast Delight'
  },
  {
    id: 'cupcake-3',
    name: 'Decadent Chocolate Fudge Cupcakes',
    category: 'cupcakes',
    categoryName: 'Cupcakes & Muffins',
    image: 'assets/cupcakesAndMuffins/brian-chan-qJ0zGkrE1Zg-unsplash.jpg',
    description: 'Deep chocolate cupcakes crowned with swirl fudge cream and rainbow sugar sprinkles.',
    price: 'KES 850',
    priceVal: 850,
    isCustomQuote: false,
    badge: 'Must Try'
  },

  // --- SAMOSAS ---
  {
    id: 'samosa-1',
    name: 'Crispy Beef Samosas (Plate of 5)',
    category: 'samosas',
    categoryName: 'Samosas',
    image: 'assets/samosas/brett-jordan-mWu0EHu5zW8-unsplash.jpg',
    description: 'Golden-fried thin pastry pockets packed with spiced minced beef, spring onions, and coriander.',
    price: 'KES 350',
    priceVal: 350,
    isCustomQuote: false,
    badge: 'Savory Special'
  },
  {
    id: 'samosa-2',
    name: 'Spicy Chicken Samosas (Plate of 5)',
    category: 'samosas',
    categoryName: 'Samosas',
    image: 'assets/samosas/juli-moreira-3oc6OzX4LaQ-unsplash.jpg',
    description: 'Deliciously seasoned shredded chicken with aromatic Swahili spices wrapped in crispy pastry.',
    price: 'KES 400',
    priceVal: 400,
    isCustomQuote: false,
    badge: 'Hot & Crispy'
  },

  // --- REFRESHMENTS & DRINKS ---
  {
    id: 'drink-1',
    name: 'Thick Chocolate Fudge Milkshake',
    category: 'drinks',
    categoryName: 'Drinks & Shakes',
    image: 'assets/milkShakes/abhishek-hajare-pYmOaWZAPqI-unsplash.jpg',
    description: 'Ultra-creamy milkshake blended with rich dark chocolate, topped with whipped cream and cocoa drizzle.',
    price: 'KES 350',
    priceVal: 350,
    isCustomQuote: false,
    badge: 'Chilled'
  },
  {
    id: 'drink-2',
    name: 'Strawberry Delight Milkshake',
    category: 'drinks',
    categoryName: 'Drinks & Shakes',
    image: 'assets/milkShakes/laura-peruchi-p9ZPmOh3uOo-unsplash.jpg',
    description: 'Refreshing shake made from fresh strawberries, vanilla ice cream, and chilled dairy cream.',
    price: 'KES 350',
    priceVal: 350,
    isCustomQuote: false,
    badge: 'Refreshing'
  },
  {
    id: 'drink-3',
    name: 'Artisan Berry Sundae Ice Cream',
    category: 'drinks',
    categoryName: 'Drinks & Shakes',
    image: 'assets/iceCreams/courtney-cook-QYsRxRPygwU-unsplash.jpg',
    description: 'Scoops of premium homemade vanilla ice cream topped with sweet raspberry syrup and waffle chips.',
    price: 'KES 300',
    priceVal: 300,
    isCustomQuote: false,
    badge: 'Cool Treat'
  },
  {
    id: 'drink-4',
    name: 'Creamy Berry Swirl Yoghurt (500ml)',
    category: 'drinks',
    categoryName: 'Drinks & Shakes',
    image: 'assets/yoghurts/sara-cervera-4caIPcmVDII-unsplash.jpg',
    description: 'Probiotic fresh cultured yoghurt infused with natural honey and mixed berry pulp.',
    price: 'KES 250',
    priceVal: 250,
    isCustomQuote: false,
    badge: 'Healthy & Tasty'
  },

  // --- UJI POWER ---
  {
    id: 'uji-1',
    name: 'Authentic Kenyan Uji Power (500ml / 1L)',
    category: 'uji',
    categoryName: 'Uji Power',
    image: 'assets/uji power/images.jfif',
    description: 'Kenyan traditional energy porridge slow-cooked with roasted peanuts, cassava, arrow roots, pumpkin seeds, milk & spices. Rich, wholesome, and energizing!',
    price: 'KES 200 (500ml) / KES 350 (1L)',
    priceVal: 200,
    isCustomQuote: false,
    badge: 'Kenyan Favorite ⭐'
  }
];

// Hero Slides Data
const HERO_SLIDES = [
  {
    title: "Handcrafted Wedding & Celebration Cakes",
    tagline: "Baked with Love & Precision by Head Chef Alice Njambi",
    category: "Custom Wedding & Birthday Cakes",
    image: "assets/weddingsCakes/aneta-voborilova-Hps0j8Uu8Us-unsplash.jpg",
    ctaText: "Order on WhatsApp",
    ctaAction: "whatsapp",
    badge: "Gims Signature Cakes",
    desc: "From breathtaking multi-tier wedding cakes to vibrant birthday & graduation treats, we turn your celebration dreams into delicious reality."
  },
  {
    title: "Freshly Baked Cinnamon Rolls & Cookies",
    tagline: "Warm, Fluffy, Gooey & Melt-in-Your-Mouth",
    category: "Pastries & Cookies",
    image: "assets/cinnamonDolls/anisa-cakesandbakes-c07YNJmNfaE-unsplash.jpg",
    ctaText: "Explore Pastries",
    ctaAction: "catalog",
    badge: "Baked Fresh Daily",
    desc: "Indulge in sweet cinnamon swirls, rich chocolate chip cookies, and fluffy glazed donuts handcrafted every morning."
  },
  {
    title: "Authentic Kenyan Uji Power & Refreshment",
    tagline: "Nourishing Porridge made with Peanuts, Cassava & Arrowroots",
    category: "Energizing Refreshments",
    image: "assets/uji power/images.jfif",
    ctaText: "Order Uji Power",
    ctaAction: "uji",
    badge: "100% Wholesome & Energizing",
    desc: "Fuel your day with our signature Uji Power alongside thick ice-cold milkshakes, artisanal ice creams, and fresh yoghurts."
  },
  {
    title: "Crispy Samosas & Savory Bites",
    tagline: "Hot, Golden & Spiced to Perfection",
    category: "Savory Snack Collection",
    image: "assets/samosas/brett-jordan-mWu0EHu5zW8-unsplash.jpg",
    ctaText: "Order Snacks Now",
    ctaAction: "whatsapp",
    badge: "Crispy & Spicy",
    desc: "Delicious beef and chicken samosas cooked fresh on order for your home, office tea breaks, or special event catering."
  }
];

// State variables
let currentHeroSlide = 0;
let heroSlideTimer = null;
let currentCategory = 'all';
let searchQuery = '';

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initCatalog();
  initConfettiSprinkles();
  initMobileMenu();
  initCustomQuoteModal();
  initContactForm();
});

/* -------------------------------------------------------------
 * 1. HERO CAROUSEL ENGINE
 * ------------------------------------------------------------- */
function initHeroCarousel() {
  const heroWrapper = document.getElementById('hero-slides-container');
  const dotsWrapper = document.getElementById('hero-dots-container');

  if (!heroWrapper || !dotsWrapper) return;

  // Render Slides
  heroWrapper.innerHTML = HERO_SLIDES.map((slide, idx) => `
    <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
      <div class="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-center rounded-3xl overflow-hidden shadow-2xl bg-baked-gradient border border-rose-100/60 my-2">
        
        <!-- Background Decorative Blur Circle -->
        <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 -top-20 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-12 w-full z-10">
          <!-- Text Content -->
          <div class="lg:col-span-7 space-y-5 text-left">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-700 text-xs md:text-sm font-semibold tracking-wide shadow-sm">
              <i class="fa-solid fa-cake-candles text-amber-500"></i>
              <span>${slide.badge}</span>
            </div>

            <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-amber-950 leading-tight">
              ${slide.title}
            </h1>

            <p class="text-base md:text-xl text-rose-900/80 font-medium">
              ${slide.tagline}
            </p>

            <p class="text-sm md:text-base text-stone-600 max-w-xl leading-relaxed">
              ${slide.desc}
            </p>

            <div class="flex flex-wrap items-center gap-4 pt-4">
              <button onclick="triggerHeroCTA('${slide.ctaAction}')" class="btn-shimmer px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white font-bold shadow-lg shadow-rose-500/30 hover:shadow-rose-600/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-3">
                <i class="fa-brands fa-whatsapp text-xl text-emerald-300"></i>
                <span>${slide.ctaText}</span>
              </button>

              <button onclick="openCustomQuoteModal()" class="px-6 py-3.5 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold border border-amber-300/60 shadow-sm transition-all flex items-center gap-2">
                <i class="fa-solid fa-wand-magic-sparkles text-amber-600"></i>
                <span>Get Custom Quote</span>
              </button>
            </div>
          </div>

          <!-- Slide Image Container -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 ring-4 ring-rose-200/50 group">
              <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              
              <div class="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-4">
                <span class="text-white text-xs md:text-sm font-bold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/30">
                  <i class="fa-solid fa-fire text-amber-400 mr-1"></i> ${slide.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Render Dots
  dotsWrapper.innerHTML = HERO_SLIDES.map((_, idx) => `
    <button onclick="goToHeroSlide(${idx})" class="h-3 rounded-full transition-all duration-300 ${idx === 0 ? 'w-8 bg-rose-600' : 'w-3 bg-stone-300 hover:bg-rose-300'}" aria-label="Slide ${idx + 1}"></button>
  `).join('');

  startHeroTimer();
}

function startHeroTimer() {
  stopHeroTimer();
  heroSlideTimer = setInterval(() => {
    goToHeroSlide((currentHeroSlide + 1) % HERO_SLIDES.length);
  }, 5500);
}

function stopHeroTimer() {
  if (heroSlideTimer) clearInterval(heroSlideTimer);
}

function goToHeroSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('#hero-dots-container button');

  if (!slides.length) return;

  slides[currentHeroSlide].classList.remove('active');
  dots[currentHeroSlide].className = 'h-3 w-3 rounded-full bg-stone-300 hover:bg-rose-300 transition-all duration-300';

  currentHeroSlide = index;

  slides[currentHeroSlide].classList.add('active');
  dots[currentHeroSlide].className = 'h-3 w-8 rounded-full bg-rose-600 transition-all duration-300';

  startHeroTimer();
}

function triggerHeroCTA(action) {
  if (action === 'uji') {
    filterCategory('uji');
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  } else if (action === 'catalog') {
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  } else {
    openGeneralWhatsAppOrder();
  }
}

/* -------------------------------------------------------------
 * 2. PRODUCT CATALOG & FILTER ENGINE
 * ------------------------------------------------------------- */
function initCatalog() {
  renderCatalog();

  // Search listener
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }
}

function filterCategory(cat) {
  currentCategory = cat;

  // Update button active state
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.category === cat) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderCatalog();
}

function renderCatalog() {
  const grid = document.getElementById('product-grid');
  const countBadge = document.getElementById('catalog-count-badge');
  if (!grid) return;

  // Filter products
  const filtered = PRODUCTS.filter(p => {
    const matchesCat = currentCategory === 'all' || p.category === currentCategory;
    const matchesSearch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.categoryName.toLowerCase().includes(searchQuery);

    return matchesCat && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Delicious Items Available`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16 px-4 bg-rose-50/50 rounded-3xl border border-rose-100">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 text-3xl">
          <i class="fa-solid fa-cookie-bite"></i>
        </div>
        <h3 class="text-xl font-bold text-stone-800 mb-2">No Items Found</h3>
        <p class="text-stone-500 max-w-md mx-auto mb-6">We couldn't find any products matching your filter or search keyword. Try selecting another category!</p>
        <button onclick="filterCategory('all'); document.getElementById('catalog-search-input').value='';" class="px-6 py-2.5 rounded-xl bg-rose-600 text-white font-semibold shadow-md hover:bg-rose-700 transition">
          View All Products
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-rose-100/70 transition-all duration-300 flex flex-col justify-between">
      
      <!-- Image & Badges -->
      <div class="relative h-64 overflow-hidden bg-stone-100">
        <img src="${p.image}" alt="${p.name}" class="product-card-img w-full h-full object-cover">
        
        <div class="absolute top-3 left-3 flex flex-col gap-1.5">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-rose-700 shadow-md border border-rose-100">
            ${p.badge}
          </span>
        </div>

        <div class="absolute top-3 right-3">
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-200 backdrop-blur-md">
            ${p.categoryName}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors mb-2 leading-snug">
            ${p.name}
          </h3>

          <p class="text-stone-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            ${p.description}
          </p>
        </div>

        <div>
          <div class="pt-4 border-t border-stone-100 flex items-center justify-between gap-2 mb-4">
            <span class="text-xs text-stone-500 uppercase tracking-wider font-semibold">Price</span>
            <span class="text-lg font-extrabold text-rose-600 bg-rose-50 px-3 py-1 rounded-xl border border-rose-100">
              ${p.price}
            </span>
          </div>

          <!-- Buttons -->
          ${p.isCustomQuote ? `
            <button onclick="openCustomQuoteModal('${p.name}')" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2">
              <i class="fa-solid fa-pen-ruler"></i>
              <span>Get Custom Quote</span>
            </button>
          ` : `
            <button onclick="openWhatsAppProductOrder('${p.name}', '${p.price}')" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2">
              <i class="fa-brands fa-whatsapp text-lg"></i>
              <span>Make Order</span>
            </button>
          `}
        </div>
      </div>

    </div>
  `).join('');
}

/* -------------------------------------------------------------
 * 3. WHATSAPP DIRECT ORDERING SYSTEM
 * ------------------------------------------------------------- */
function openWhatsAppProductOrder(productName, price) {
  triggerConfetti();
  const text = `Hello Gims Delicacies! 🎂\n\nI would like to order the following item:\n📌 *Product:* ${productName}\n💰 *Price:* ${price}\n\nPlease inform me of availability and delivery/pickup arrangements. Thank you!`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function openGeneralWhatsAppOrder() {
  triggerConfetti();
  const text = `Hello Gims Delicacies! 🍰\n\nI visited your website and would like to inquire about your cakes, pastries, snacks, or refreshments. Please share your current menu and ordering details!`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

/* -------------------------------------------------------------
 * 4. CUSTOM QUOTE MODAL (FOR SPECIAL CAKES)
 * ------------------------------------------------------------- */
function initCustomQuoteModal() {
  const modal = document.getElementById('custom-quote-modal');
  const closeBtn = document.getElementById('close-quote-modal');
  const form = document.getElementById('custom-quote-form');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }

  // Close modal when clicking backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const eventType = document.getElementById('quote-event-type')?.value || 'Special Celebration';
      const cakeFlavor = document.getElementById('quote-flavor')?.value || 'Not specified';
      const servings = document.getElementById('quote-servings')?.value || 'Not specified';
      const eventDate = document.getElementById('quote-date')?.value || 'As soon as possible';
      const specialNotes = document.getElementById('quote-notes')?.value || 'None';

      triggerConfetti();

      const text = `Hello Chef Alice & Gims Delicacies! 🎂✨\n\nI would like to request a *Custom Cake Quote* with the following details:\n\n🎉 *Event Type:* ${eventType}\n🍰 *Preferred Flavor:* ${cakeFlavor}\n👥 *Estimated Guests / Servings:* ${servings}\n📅 *Event Date:* ${eventDate}\n📝 *Special Request/Notes:* ${specialNotes}\n\nPlease get back to me with pricing and design suggestions!`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

      modal.classList.add('hidden');
      window.open(url, '_blank');
    });
  }
}

function openCustomQuoteModal(prefillCakeName = '') {
  const modal = document.getElementById('custom-quote-modal');
  if (!modal) return;

  if (prefillCakeName) {
    const notesInput = document.getElementById('quote-notes');
    if (notesInput) {
      notesInput.value = `Interested in style similar to: ${prefillCakeName}`;
    }
  }

  modal.classList.remove('hidden');
}

/* -------------------------------------------------------------
 * 5. CONTACT FORM & DIRECT INQUIRY
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value || 'Valued Customer';
    const email = document.getElementById('contact-email')?.value || 'Not provided';
    const phone = document.getElementById('contact-phone')?.value || 'Not provided';
    const message = document.getElementById('contact-message')?.value || '';

    triggerConfetti();

    const text = `Hello Gims Delicacies & Chef Alice! 💌\n\nNew Inquiry from Website:\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📞 *Phone:* ${phone}\n💬 *Message:* ${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    form.reset();
  });
}

/* -------------------------------------------------------------
 * 6. CELEBRATION SPRINKLES & CONFETTI ENGINE
 * ------------------------------------------------------------- */
function initConfettiSprinkles() {
  const container = document.getElementById('bg-sprinkles-container');
  if (!container) return;

  const colors = ['#f43f5e', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6'];

  for (let i = 0; i < 24; i++) {
    const el = document.createElement('div');
    el.className = 'sprinkle';
    const size = Math.random() * 8 + 6;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${Math.random() * 100}%`;
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = `${Math.random() * 8 + 6}s`;
    el.style.animationDelay = `${Math.random() * 4}s`;
    container.appendChild(el);
  }
}

function triggerConfetti() {
  const colors = ['#e11d48', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

/* -------------------------------------------------------------
 * 7. MOBILE MENU & DRAWER ENGINE
 * ------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.remove('translate-x-full');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
    });
  }

  // Close when clicking link
  document.querySelectorAll('#mobile-menu-drawer a').forEach(link => {
    link.addEventListener('click', () => {
      drawer?.classList.add('translate-x-full');
    });
  });
}
