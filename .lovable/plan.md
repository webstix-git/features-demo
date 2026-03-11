

# Reengineer into "Horizon Travels" — A Real Travel Company Website

Transform the demo showroom into **Horizon Travels**, a premium holiday/travel company. All 7 features become organic parts of the site. A floating sales-rep icon provides tips per feature (visible only in "demo mode").

---

## Company Identity

- **Name:** Horizon Travels
- **Tagline:** "Your Journey, Our Passion"
- **Logo:** SVG text logo — compass icon (from Lucide `Compass`) + "Horizon" in bold + "Travels" in lighter weight
- **Color scheme:** Keep indigo as primary (works for travel/trust), warm accents for CTAs

---

## Demo Mode Toggle

- A small toggle in the navbar: "Demo Mode" switch
- When ON: a **floating bubble icon** (bottom-right, `Lightbulb` icon) appears on every page with a sales-rep pro tip for that feature — clicking opens a tooltip/popover with the tip
- When OFF: the site looks like a completely normal travel company website
- This replaces the old "Sales Cheat Sheet" footer section on each page

---

## Navigation Overhaul

Navbar becomes a real travel site nav:
- Logo: Horizon Travels (Compass icon)
- Links: **Home**, **Destinations** (gallery), **Packages** (portfolio), **Blog**, **Testimonials**, **FAQs**, **Contact**
- CTA button: "Book Now" (triggers the pop-up feature)

---

## Pages Transformation

### Home (`/`)
- **Hero:** Full-width travel hero image with overlay text — "Discover Paradise. We Handle Everything." + search/booking CTA
- **Featured Destinations:** Photo gallery masonry grid (reuses gallery feature) — Bali, Santorini, Maldives, etc.
- **Why Choose Us:** 3 stat cards (500+ trips, 98% satisfaction, 24/7 support)
- **Testimonials Marquee:** Auto-scrolling customer reviews (reuses testimonial marquee)
- **Blog Preview:** 3 latest blog cards
- **Newsletter:** Inline footer sign-up — "Get exclusive travel deals"
- **Footer:** Full company footer with links, contact info, social icons

### Destinations / Gallery (`/destinations`)
- Photo gallery of destinations with real travel images (Unsplash/Picsum seeds for beaches, mountains, cities)
- Masonry grid with lightbox showing destination details
- Carousel variant showing "Featured Destinations" slider
- Travel-themed content (destination names, descriptions)

### Packages / Portfolio (`/packages`)
- **Variant A (Case Studies):** Becomes "Our Packages" — each package shows: destination, what's included, duration, price, highlights (replaces challenge/solution/results)
- **Variant B (Gallery):** Visual grid of past trips with hover descriptions

### Testimonials (`/testimonials`)
- Same structure but with travel-specific reviews — "The Maldives trip was unforgettable..."
- Avatars and names of "real" travelers
- Ratings reflect travel satisfaction

### Blog (`/blog`)
- Travel blog posts: "Top 10 Hidden Beaches in Southeast Asia", "How to Pack for a Month-Long Trip", etc.
- Categories: Destinations, Travel Tips, Adventure, Culture

### FAQs (`/faqs`)
- Travel-specific questions: booking policies, cancellation, travel insurance, visa help, group discounts
- Categories: Booking, Payments, Travel Tips, Support

### Contact (`/contact`) — NEW page (replaces Newsletter standalone)
- Contact form: Name, Email, Phone, Destination Interest, Message
- Company info: address, phone, email, map placeholder
- Newsletter sign-up integrated at bottom

### Pop-ups (`/popups` removed — integrated)
- **Exit-intent modal:** Triggers on "Book Now" or after time delay — "Don't miss our summer sale! 20% off Bali packages"
- **Slide-in:** Bottom-right notification promoting a flash deal
- Both triggered from the homepage or via the "Book Now" nav button

---

## New Shared Components

1. **`SalesRepBubble.tsx`** — Floating bottom-right bubble (only visible when demo mode is on). Accepts a `tip` string prop. Lucide `Lightbulb` icon, click to expand popover with the pro tip.
2. **`DemoModeContext.tsx`** — React context providing `isDemoMode` boolean and toggle function.
3. **`Footer.tsx`** — Full site footer with columns: About, Quick Links, Destinations, Newsletter sign-up, social icons.

---

## File Changes Summary

| Action | File |
|--------|------|
| Create | `src/context/DemoModeContext.tsx` |
| Create | `src/components/SalesRepBubble.tsx` |
| Create | `src/components/Footer.tsx` |
| Create | `src/pages/Contact.tsx` |
| Rewrite | `src/components/Navbar.tsx` — travel company nav + demo mode toggle |
| Rewrite | `src/pages/Index.tsx` — full travel homepage |
| Rewrite | `src/pages/PhotoGallery.tsx` → rename to Destinations |
| Rewrite | `src/pages/Portfolio.tsx` → rename to Packages |
| Rewrite | `src/pages/Testimonials.tsx` — travel reviews |
| Rewrite | `src/pages/Blog.tsx` — travel blog |
| Rewrite | `src/pages/FAQs.tsx` — travel FAQs |
| Rewrite | `src/pages/Popups.tsx` — integrated into homepage/booking flow |
| Update | `src/App.tsx` — new routes (`/destinations`, `/packages`, `/contact`), remove `/popups` standalone |
| Delete | `src/components/FeaturePageTemplate.tsx` — no longer needed (pages are organic) |
| Delete | `src/components/VariantSection.tsx` — replaced by natural page sections |
| Keep | `src/pages/Newsletter.tsx` — absorbed into Contact + Footer |

Each rewritten page includes a `<SalesRepBubble tip="..." />` with the relevant sales tip for that feature.

