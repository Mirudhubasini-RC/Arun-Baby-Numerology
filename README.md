# Arun Baby Numerology

Bilingual (Tamil / English) website for a baby name numerology consultation practice.
Built with React, TypeScript, Vite and styled-components.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where things live

- `src/styles/style.ts` — design system: colours, typography scale (separate English and Tamil scales), spacing, layout, radii, shadows, breakpoints.
- `src/content/content.ts` — all website copy in English and Tamil.
- `src/content/contact.ts` — WhatsApp number and links.
- `src/components/sections/` — one file per page section.

## SEO

`npm run build` pre-renders full HTML for `/` (English, the default) and `/ta/` (Tamil), and writes
`robots.txt` and `sitemap.xml` (see `scripts/prerender.mjs`).

Optional environment variables at build time (e.g. in Vercel → Settings → Environment Variables):

- `SITE_URL` — the public address, e.g. `https://arunnumerology.com`. On Vercel the production URL is detected automatically.
- `GOOGLE_SITE_VERIFICATION` — the code from Google Search Console's HTML-tag verification.

## Profile photo

Add the professional photo as `public/images/profile.jpg` (portrait, roughly 4:5).
Until it is added, a neutral placeholder is shown.
