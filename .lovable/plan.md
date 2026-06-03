# ADA Compliance Page

Create a new informational page explaining ADA/WCAG compliance, the three conformance levels, what's included in each, and clarify that the current package covers up to AA while AAA is a custom-scoped add-on. Page should look neat, professional, and visually polished with supporting imagery.

## Page

- Route: `/ada-compliance`
- File: `src/pages/ADACompliance.tsx` (lazy-loaded in `src/App.tsx`)
- Document title + H1: "ADA Compliance"

## Sections

1. **Hero** — Full-width banner with a generated hero image (warm, inclusive workspace / accessibility-themed photo). Overlay with title, short intro about ADA (Americans with Disabilities Act) and WCAG 2.1/2.2 as the technical standard, and why it matters (legal risk, broader audience, SEO).

2. **What is ADA Compliance?** — Two-column layout: text on one side covering the four POUR principles (Perceivable, Operable, Understandable, Robust); a supporting image on the other (e.g., person using assistive tech / keyboard navigation close-up).

3. **Conformance Levels** — Three side-by-side cards, each with a small illustrative icon header strip (lucide icons + subtle background image or pattern):

   - **Level A — Essential (Included)**
     - Alt text on all images
     - Keyboard navigation for all functionality
     - Video captions (pre-recorded)
     - No content flashing >3x/sec
     - Page titles and language attribute
     - Form inputs with labels
     - Logical reading order

   - **Level AA — Standard (Included in current package)**
     - Everything in Level A
     - Color contrast 4.5:1 (text), 3:1 (large text/UI)
     - Resizable text up to 200%
     - Multiple ways to find pages
     - Consistent navigation
     - Visible focus indicators
     - Error identification & suggestions on forms
     - Descriptive headings and labels
     - Audio descriptions for video
     - Status messages announced to screen readers

   - **Level AAA — Enhanced (Not included — custom scope)**
     - Everything in AA
     - Color contrast 7:1 (text), 4.5:1 (large text)
     - Sign language interpretation for video
     - Extended audio descriptions
     - No timing/time limits
     - Reading level no more advanced than lower secondary
     - Context-sensitive help
     - Pronunciation guides
     - Re-authentication without data loss

4. **Why AAA is custom** — Callout band with a supporting image (e.g., design-review / drafting scene). Explains AAA requires content rewrites, sign-language video production, contrast-driven redesigns, and ongoing editorial review — each case-by-case, quoted separately.

5. **CTA** — "Request an Accessibility Audit" button linking to `/contact`.

## Imagery

Generate 3 locally-hosted images (per project memory — no external placeholders) into `src/assets/`:

- `ada-hero.jpg` — wide, warm, inclusive workspace scene that conveys accessibility (~1600×900).
- `ada-principles.jpg` — close-up of hands on keyboard / assistive tech (~1200×900).
- `ada-custom.jpg` — designers reviewing wireframes/contrast swatches at a table (~1200×800).

All images use `loading="lazy"`, explicit `width`/`height`, and meaningful `alt` text. Use the project's earthy palette aesthetic (warm tones) so they sit naturally with existing pages.

## Wiring

- Add lazy import + `<Route path="/ada-compliance" element={<ADACompliance />} />` in `src/App.tsx`.
- Add "ADA Compliance" entry to the `pages` array in `src/pages/Sitemap.tsx`.

## Style notes

- Reuse existing semantic tokens (`bg-background`, `text-foreground`, `bg-warm-gradient`, `text-accent`, `border-border`, card patterns from `LocalSEOPlans`).
- Three-tier cards: A and AA get an "Included" badge (`bg-accent text-accent-foreground`); AAA gets a muted "Custom Scope" badge with a distinct outlined treatment.
- Lucide icons: `Accessibility`, `Check`, `ShieldCheck`, `Sparkles`, `X`.
- Bespoke organic layout — no generic page template wrapper.

## Out of scope

- No navbar link (already 9 items). Reachable via Sitemap. Confirm if you'd also like it added to the footer Quick Links.
