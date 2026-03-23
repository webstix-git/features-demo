

# Blog Detail Page

## Changes

### 1. Add slug to posts data (`Blog.tsx`)
Add a `slug` field to each post and a `content` field with full article body (multiple paragraphs of lorem-style construction content). Export the `posts` array so the detail page can import it.

### 2. Wrap blog cards/list items with `<Link>` (`Blog.tsx`)
Both Option A cards and Option B list items become clickable links to `/blog/:slug`.

### 3. Create `src/pages/BlogPost.tsx`
Standard blog detail layout:
- Hero banner image (full-width, from post data)
- Category tag, title, author, date, read time
- Article body with proper typography (prose styling)
- Sidebar or inline "Related Posts" section at the bottom
- Back to blog link

### 4. Add route in `App.tsx`
```
<Route path="/blog/:slug" element={<BlogPost />} />
```

### Technical Details
- Posts data will be moved to a shared `src/data/blogPosts.ts` file
- Detail page uses `useParams()` to find the matching post by slug
- 404 fallback if slug doesn't match
- Content will be an array of paragraph strings rendered with `prose` typography classes

