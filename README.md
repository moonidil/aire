# Aire Real Estates

Built with Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + lucide-react icons.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the homepage is fully built. The other four
routes (`/to-rent`, `/services`, `/for-owners`, `/contact`) are placeholder
stubs, ready for you to fill in next.

## File structure

```
app/
  layout.tsx          — fonts (Fraunces + Inter), wraps every page in Navbar/Footer
  page.tsx             — Home (fully built)
  globals.css          — brand color/type tokens, scroll-reveal + focus-visible utilities
  to-rent/page.tsx      — stub, ready to build
  services/page.tsx     — stub, ready to build
  for-owners/page.tsx   — stub, ready to build
  contact/page.tsx      — stub, ready to build (this is where the enquiry form goes)

components/
  Navbar.tsx           — scroll-aware nav, mobile menu
  Footer.tsx
  Logo.tsx             — text placeholder matching the real wordmark; swap-in instructions inside
  Hero.tsx             — homepage hero, parallax skyline
  Skyline.tsx           — the line-art London skyline (signature visual, no photo needed)
  StatsStrip.tsx
  Pillars.tsx           — "What we do"
  Process.tsx            — "The Process", 5 steps
  PropertyTeaser.tsx     — placeholder property cards, swap-in instructions inside
  CtaBanner.tsx
  Reveal.tsx             — scroll-in-view animation wrapper, respects prefers-reduced-motion

public/images/
  logo/        — drop the real Aire logo file(s) here
  properties/  — drop real property photography here
```

## Deploying to Vercel

```bash
npx vercel
```

Or push this folder to a GitHub repo and import it at vercel.com/new —
either way, no configuration needed, it's a standard Next.js app.

## Notes

- Google Fonts (Fraunces, Inter) are fetched at build time by `next/font/google`
  and self-hosted automatically — this requires normal internet access during
  `npm run build` / `npm run dev` (works fine on your machine and on Vercel).
- Swap points for real content are marked with comments in `Logo.tsx` and
  `PropertyTeaser.tsx`.
