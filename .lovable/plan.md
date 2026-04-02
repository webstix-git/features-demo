

# Create "Local SEO Plans" Page

## Overview
Create a new page at `/local-seo-plans` with content from the uploaded document, structured with proper heading hierarchy (H1, H2, H3). Add a nav link labeled "Local SEO Plans".

## Changes

### 1. Create `src/pages/LocalSEOPlans.tsx`
A content page structured into sections from the document:

- **Hero/Banner**: "Winning Local Search" heading with a construction-themed banner image (consistent with other pages)
- **Content sections** using the document's heading hierarchy:
  - H1 → large section headings (e.g., "How People Choose a Local Business", "The Map Pack", "Consistency Builds Trust", etc.)
  - H2 → sub-headings within sections
  - H3 → minor headings
- **Bullet lists** preserved as styled `<ul>` elements
- **Pricing plans section**: Three-tier card layout (Basic $250/mo, Advanced $450/mo, Professional $750/mo) with feature lists
- **Appendix section**: Listings and Citations definitions
- **Investment Summary**: Final summary table/cards with monthly and annual pricing
- Include `FeatureGuide` sidebar (consistent with other pages)

### 2. Update `src/components/Navbar.tsx`
Add `{ name: "Local SEO Plans", path: "/local-seo-plans" }` to the `navLinks` array.

### 3. Update `src/App.tsx`
- Import `LocalSEOPlans` component
- Add route: `<Route path="/local-seo-plans" element={<LocalSEOPlans />} />`

### 4. Update `src/pages/Sitemap.tsx`
Add Local SEO Plans entry to the sitemap links.

### Technical Details
- Page follows existing page patterns (banner, FeatureGuide, consistent styling)
- Pricing plans rendered as a responsive card grid (similar to common pricing page layouts)
- All text content taken directly from the document

