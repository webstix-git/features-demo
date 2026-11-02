# Targeted Display Creative page

Recreate the content of webstix.com/services/targeted-display-creative on this site at `/targeted-display-creative`, keeping this site's existing header and footer.

## Sections (copy used as-is from the source)
1. Hero: "Professionally Designed Display Ads, Built for the Web, Ready to Launch" with intro text and two images.
2. What We Handle: 4 cards (Creative Strategy, Ad Design, Brand Consistency, Revisions).
3. Ad Formats We Design: Static banners, Animated/GIF banners, Social image ads, Custom sizes, each with an image.
4. Where Your Ads Are Designed to Run: Website banners, Native ads, Retargeting creative.
5. How It Works: 4 numbered steps.
6. It's Yours: licensing statement.
7. Advertising Design Concepts: gallery of the sample ads (including animated GIFs).
8. Pricing: Social Image $40, Static Banner Bundle $90, Animated GIF Bundle $110, plus add-ons ($300 refresh, $1,200 to $3,000 landing page).
9. Who This Is For: 5 audience cards.
10. FAQs: 7 questions in an accordion.
11. Closing call to action: "Ready to Get Professional Display Ad Creative?"

## Design
- Slide-deck style with alternating Tan / White / Gray backgrounds (never Tan next to Gray), teal gradient hero like the Local SEO page.
- Buttons link to this site's Contact page.
- Images and sample ad GIFs downloaded and stored on this site (no linking to webstix.com).
- Link added to the footer and site map.

## Technical
- New `src/pages/TargetedDisplayCreative.tsx`, lazy route in `src/App.tsx`, assets in `public/images/display-ads/`.
- Uses existing Navbar/Footer, Lucide icons, shadcn Accordion; FAQPage schema for the FAQs.
- Verify with a browser screenshot after building.
