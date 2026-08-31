# The Orpheum Room

A single-page restaurant landing page for an art deco supper club and cocktail
lounge, built to the **Restaurant Theme 1** brief — *gilded deco lounge for the
after-dark hours*.

The page lives at the site root (`/`). This repository had no prior code, so the
stack was chosen here: **Vite + React + TypeScript**, plain CSS, **Biome** for
lint and format.

```bash
pnpm install
pnpm dev        # http://127.0.0.1:5173
pnpm build && pnpm preview
```

## Checks

```bash
pnpm typecheck      # tsc --noEmit
pnpm lint           # biome check .
pnpm check:palette  # fails if any colour outside the seven theme values appears
```

## How the theme is held together

- **Colour** — the seven theme values are declared once, in
  `src/styles/tokens.css`. Everything else references them through `var()`, or a
  translucent glaze mixed from the accent with `color-mix()`. There is exactly
  one accent; `pnpm check:palette` fails the build if a raw hex appears anywhere
  else. Every text/background pair clears WCAG AA — the tightest is muted text on
  a card surface at 7.54:1.
- **Type** — Playfair Display for display and headings, Jost for body. Both are
  self-hosted variable `woff2` files in `public/fonts/`; nothing is fetched from
  a font, icon or image CDN at runtime.
- **Ornament** — every mark on the page is drawn in `src/components/Ornaments.tsx`
  as inline SVG: sunbursts, chevrons, fluted arches, stepped pyramids, the deco
  quotation mark, the line-art city block. There is no photography and no raster
  asset of any kind.
- **Structure** — one file per section under `src/sections/`, each paired with its
  own stylesheet. `src/main.tsx` imports the four global sheets *before* `<App>`
  so section styles land after the foundation in the cascade.
- **Motion** — sunbursts rotate one degree per second; sections fade up 12px over
  400ms on scroll with a 90ms stagger (`src/lib/reveal.ts`,
  `src/lib/useScrollReveal.ts`). Under `prefers-reduced-motion: reduce` every
  transition and animation collapses to an instant state change and nothing is
  left hidden.
- **Keyboard** — a skip link, real `<a>`/`<button>`/`<input>` elements throughout,
  and a 2px accent focus ring (accent-ink on the gold band) on all 17 controls.

## Notes

- The venue, its copy, menu, prices and press quotes are written for this build.
  The phone number is a `555` reservation line, not a real one.
- The newsletter form validates and confirms in the browser; there is no backend
  wired to it yet.
