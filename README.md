# ron

Portfolio website for **Ron Weasley** — Auror, strategist, and co-manager of Weasleys' Wizard Wheezes. A fan-made, fictional portfolio built to demonstrate modern web best practices.

## What's inside

A single-page, dependency-free static site:

- `index.html` — semantic HTML5 (`header`, `main`, `section`, `article`, `figure`, `footer`), one `h1`, logical heading hierarchy, skip link, ARIA labels
- `css/style.css` — custom design system (fluid type scale with `clamp()`, 4px spacing tokens, OKLCH-friendly color roles), light + dark themes, mobile-first responsive layout, `prefers-reduced-motion` support
- `js/main.js` — progressive enhancement only: theme toggle, scroll-aware header, and IntersectionObserver reveals; the site works with JavaScript disabled
- `assets/` — AI-generated, hand-optimized WebP artwork with `srcset` responsive variants
- SEO: meta description, Open Graph tags, canonical URL, JSON-LD `Person` structured data, SVG favicon, `alt` text on every image
- Performance: no frameworks, no build step, lazy-loaded images, `fetchpriority` on the hero, ~400 KB initial page weight

## Run it

Open `index.html` in any browser, or serve it statically:

```bash
npx serve .
```

## Deploy

The site is plain static HTML — push to `main` and enable **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root), or drop the folder into Cloudflare Pages, Netlify, or Vercel.

Before going live, update the canonical URL and `og:image` absolute URL in `index.html` to match the final domain.

## Colophon

- Fonts: [Boska](https://www.fontshare.com/fonts/boska) and [Satoshi](https://www.fontshare.com/fonts/satoshi) via Fontshare
- Artwork generated with AI, optimized to WebP
- Ron Weasley is a character created by J.K. Rowling; this is a non-commercial fan project
