# gimsBakery
Gims Bakery Website Repo

# Implementation Plan - Gims Delicacies Website

Creating an attractive, modern, vibrant, and mobile-first marketing website for **Gims Delicacies** (Cakes and Refreshment), owned by Head Chef Alice Njambi. The site highlights products in an interactive catalog, features a dynamic product slide carousel in the Hero section, provides direct WhatsApp ordering & custom quote requests, celebratory animations, social media links, contact details, and a responsive design tailored for 90%+ mobile visitors.

## User Review Required

> [!NOTE]
> - **WhatsApp Direct Ordering**: Clicking "Make Order" on any item opens WhatsApp (`+254724323377`) pre-filled with the item name, price, and inquiry details.
> - **Custom Quote Requests**: Custom cakes (e.g. Wedding, Birthday, Anniversary) feature a "Get Custom Quote" option leading to a modal that formats specific details (layers, flavor, date, guest count) directly into a WhatsApp message.
> - **Pricing in KES**: Products feature representative prices in KES (Kenyan Shillings), with custom items listed as "Quote on Request".

## Proposed Changes

### Core Structure & Styling

#### [MODIFY] [index.html](file:///c:/Users/DELL/Documents/GitHubMain/gimsBakery/index.html)
- Main HTML file containing:
  - **Header & Mobile Navigation Drawer**: Logo display (`assets/logo/IMG-20260706-WA0000.jpg`), navigation links (Home, Menu Catalog, About Chef Alice, Custom Cake Quotes, Contact), top contact bar & social links (Facebook, Instagram, WhatsApp).
  - **Hero Carousel Section**: Interactive auto-sliding product showcase with festive badges, high-resolution product imagery from `assets/`, call-to-action buttons, and smooth transition slides.
  - **Category Highlights Bar**: Quick category jump chips with icons (Cakes, Cookies, Cinnamon Rolls, Donuts, Cupcakes, Samosas, Drinks, Uji Power).
  - **Product Catalog Showcase (Catalog Section/Page)**:
    - Filterable tabs by product category.
    - Real-time product search bar.
    - Product grid with cards showing images from local `assets/` subfolders, titles, descriptions, pricing in KES, and WhatsApp "Make Order" / "Get Quote" buttons.
  - **Custom Cake Quote Generator Modal**: Modal popup for custom order inquiries (Wedding, Anniversary, Graduation, Birthday) allowing users to pick size, flavor, date, and send directly via WhatsApp.
  - **About Chef Alice & Gims Delicacies Section**: Story of Head Chef Alice Njambi, passion for baking, quality ingredients, and signature Uji Power refreshment.
  - **Celebration / Testimonials / Features Section**: Showcase of highlights (Freshly Baked Daily, Custom Designs, Event Delivery, Kenyan Favorites).
  - **Contact & Order Inquiry Form Section**: Complete contact details for Gims Delicacies & Chef Alice Njambi (`gimsdelicacies@gmail.com`, `0724323377`, `alicenjambi@gmail.com`), plus interactive form with WhatsApp integration.
  - **Footer**: Brand summary, quick navigation, product categories, business hours, social media icons, and copyright line: `All rights reserved 2026. Passionately made by Joseph Wanyoike Njoroge` linking to `http://josephwanyoike.com`.
  - **Floating WhatsApp Action Button & Mobile Sticky Bottom Order Bar**.

#### [MODIFY] [global.css](file:///c:/Users/DELL/Documents/GitHubMain/gimsBakery/global.css)
- Custom CSS styles extending Tailwind CSS:
  - Custom color tokens for warm bakery palette (Rose Red `#E11D48`, Warm Gold `#F59E0B`, Cream Vanilla `#FFFBEB`, Rich Cocoa `#451A03`).
  - Confetti and festive sprinkle floating background particle keyframe animations.
  - Carousel transition effects & slide animations.
  - Glassmorphic card styling, hover elevation effects, glowing buttons.
  - Responsive layout fixes and scrollbar polish.

#### [MODIFY] [script.js](file:///c:/Users/DELL/Documents/GitHubMain/gimsBakery/script.js)
- Interactive JavaScript functionality:
  - Product database mapping all items with categories, images from `assets/`, descriptions, prices in KES, and ordering status.
  - Dynamic Hero Slider / Carousel logic with auto-play, manual navigation buttons, and touch-swipe support for mobile.
  - Dynamic Catalog rendering with live category filtering, search input filtering, and pagination/grid layout.
  - WhatsApp Order message builder (`https://wa.me/254724323377?text=...`) encoding order details safely.
  - Custom Quote Modal logic (open, close, form handling, WhatsApp pre-fill).
  - Mobile Menu toggle & smooth scrolling navigation.
  - Celebration confetti toggle effect.

## Verification Plan

### Manual Verification
1. **Hero Carousel**: Test auto-slide, slide buttons, touch swipe on mobile view, and CTA clicks.
2. **Product Catalog**: Test all category filters (All, Cakes, Cookies, Cinnamon Rolls, Donuts, Cupcakes, Samosas, Drinks, Uji Power) and search input. Verify image paths match files in `assets/`.
3. **WhatsApp Ordering**: Click "Make Order" and "Get Quote" buttons on different items to ensure they generate correct WhatsApp URL format targeting `0724323377` with encoded message text.
4. **Mobile Responsiveness**: Test viewport sizes from iPhone SE (375px) up to 4K desktop to ensure bottom nav, drawer, product cards, carousel, and text wrap perfectly.
5. **Footer**: Check all links, social icons, and verify exact copyright text: `All rights reserved 2026. Passionately made by Joseph Wanyoike Njoroge` linking to `http://josephwanyoike.com`.
