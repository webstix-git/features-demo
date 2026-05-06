## Accessibility Fixes — Target 95+ Score

Address all four critical Lighthouse accessibility issues on the homepage.

### 1. Mobile menu button missing accessible name
`src/components/Navbar.tsx` — add `aria-label="Toggle menu"` and `aria-expanded={mobileOpen}` to the hamburger button.

### 2. Footer social links lack discernible names
`src/components/Footer.tsx` — add `aria-label="Facebook"`, `"Instagram"`, `"Twitter"` to the three social `<a>` tags. Also fix `href="#"` → real placeholder URLs (or keep `#` but the aria-label resolves the audit).

### 3. Insufficient color contrast
Root cause: the accent orange (`hsl(20 55% 53%)`) is used for:
- Small uppercase eyebrow labels on light/card backgrounds (text-accent on bg-background) — fails 4.5:1
- White text on accent badges ("From $450K", "Spring Special", "Join" button, "Design"/"Tips"/"Renovation" pill labels) — `text-accent-foreground` (white) on accent orange fails 4.5:1
- "View All Posts" link text-accent on bg-card

Fix in `src/index.css` by darkening the accent so both white-on-accent and accent-on-light pass WCAG AA:
- Change `--accent` from `20 55% 53%` to `20 65% 38%` (deeper terracotta). This raises contrast vs white to ~5.5:1 and vs light backgrounds to ~6:1.
- Update `--warm` and `--coral` tokens and the `bg-warm-gradient` / `text-gradient` gradient stops to use the new darker accent + a slightly lighter complementary stop so hero CTAs remain warm.
- For the small "Design/Tips/Renovation" pills using `bg-accent/10` + `text-accent`, the darker accent automatically passes.

No layout/visual identity change beyond a slightly richer, deeper terracotta — still on-brand with the existing earthy palette (per brand identity memory).

### 4. Heading order skip (h2 → h4 in Footer)
`src/components/Footer.tsx` — change the four footer `<h4>` elements ("Quick Links", "Contact Us", "Project Updates") to `<h3>`, since the nearest preceding heading on most pages is an `<h2>`.

### Verification
After changes, expected Lighthouse Accessibility score ~96–100. No functional or layout regressions expected; only color tone shifts slightly darker on the accent.

### Files to edit
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/index.css`
