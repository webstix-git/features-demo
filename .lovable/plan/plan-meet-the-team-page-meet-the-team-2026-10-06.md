# Plan: "Meet The Team" page (/meet-the-team)

## Goal
Create a new "Meet The Team" page at `/meet-the-team` reusing the existing team content (members, photos, roles, intro copy) from "Our Team" (/team), laid out like the example at olsonconstructionlax.com/team: a simple, clean grid of portraits with name and role only.

## What gets built

### 1. New page: `src/pages/MeetTheTeam.tsx`
- **Hero**: `bg-teal-gradient` banner matching the rest of the site, with "Meet the Team" as the H1 and a one-line intro reusing the Our Team positioning ("The People Behind the Build" / "Designers, superintendents, and project managers who stay on your job from first sketch to final walkthrough.").
- **Member grid**: simple Olson-style grid (2 cols mobile / 3 cols desktop) reusing the `teamMembers` array from `src/data/teamMembers.ts`. Each card shows portrait (4:5, object-top), name, and role only. No links, no bios, no email/linkedin rows.
- **No Option A/B toggle, no Feature Guide drawer** — this is a plain page.
- **CTA**: keep the existing "Want to talk to one of them?" contact CTA from /team for consistency (contact CTA is the one primary action on the page).
- Sets its own `<title>` ("Meet the Team — Summit Builders Co.") and meta description, and uses semantic `h1`/`h2` per accessibility rules.
- No new images: reuses the six existing portraits in `public/images/team-*.jpg`.

### 2. Route registration: `src/App.tsx`
- Lazy-import `MeetTheTeam` and add `<Route path="/meet-the-team" element={<MeetTheTeam />} />` with the other lazy routes.

### 3. Footer link: `src/components/Footer.tsx`
- Add "Meet the Team" to the Quick Links column (footer only; navbar unchanged).

### 4. Site map: `src/pages/Sitemap.tsx`
- Add `{ name: "Meet the Team", path: "/meet-the-team" }` to the pages list.

## Not changed
- Existing /team and /team/:slug pages stay exactly as they are.
- No new image generation, no new dependencies.

## Verification
- Playwright check on localhost:8080: /meet-the-team renders all 6 members with correct names/roles, footer and site map links navigate to the page, no console errors.
