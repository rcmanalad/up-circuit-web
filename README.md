# UP Circuit — Partnership Landing Site

High-converting landing site for **UP Circuit (UP CKT)** — the premier Electrical and Electronics
Engineering student organization of the EEEI, UP Diliman (est. February 1994).

> **Conduct, Rectify, Amplify** · *“Dare to Be; Be Different”*

Built with **Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS · lucide-react**,
deployed effortlessly from GitHub to Vercel.

> ✅ Verified: `pnpm build` compiles, type-checks (strict), and prerenders all routes statically;
> the production server returns HTTP 200 with the complete rendered content.

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
```

Requires Node.js >= 20.9.

## Deploy to Vercel

1. Push this folder (as the repo root) to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Vercel auto-detects Next.js — **Framework Preset: Next.js**, Build `pnpm build`, Output `.next`. Deploy.

No environment variables are required.

## Project structure

```
├── public/
│   ├── logo.png              # Official UP Circuit logo (see Assets below)
│   └── projects/
│       ├── squeeeze.jpg      # Official SquEEEze photo (upcircuit.org)
│       ├── ewaste.jpg        # Official E-Waste Project photo (upcircuit.org)
│       └── interackt.jpg     # Official InteraCKT photo (upcircuit.org)
└── src/
    ├── app/
    │   ├── layout.tsx        # Root layout, fonts (next/font), SEO/OG/JSON-LD metadata
    │   ├── page.tsx          # Section composition
    │   ├── globals.css       # Tailwind layers + reveal/marquee/reduced-motion utilities
    │   └── icon.png          # App icon derived from the official logo
    ├── components/
    │   ├── navbar.tsx        # Sticky nav + mobile drawer ("use client")
    │   ├── hero.tsx          # Slogan hero, animated stats, slogan marquee
    │   ├── about.tsx         # Organization identity snapshot
    │   ├── why-partner.tsx   # 4 corporate value-prop cards
    │   ├── flagship-projects.tsx  # E-Waste · SquEEEze · InteraCKT showcase
    │   ├── legacy.tsx        # Alumni leaders, topnotchers, milestones
    │   ├── sponsorship-tiers.tsx  # Interactive tier comparison grid ("use client")
    │   ├── contact.tsx       # Validated inquiry form + modal + map ("use client")
    │   ├── footer.tsx
    │   └── ... (reveal, stat-counter, site-logo, social-icon, inquiry-link, back-to-top)
    └── lib/
        └── site.ts           # Single source of truth: org data, links, tiers, legacy facts
```

## Design system

Custom Tailwind theme extensions (see `tailwind.config.ts`):

| Token      | Hex       | Token      | Hex       |
| ---------- | --------- | ---------- | --------- |
| `skyice`   | `#c5f3ff` | `mist`     | `#e7ebee` |
| `skysea`   | `#6dcae9` | `fog`      | `#D8DDE2` |
| `azure`    | `#1f9ade` | `steel`    | `#95ACBF` |
| `upblue`   | `#1174b5` | `ink`      | `#2A3343` |
| `upindigo` | `#37398c` |            |           |

Typography: **Space Grotesk** (display) + **Inter** (body), self-hosted via `next/font/google`.

## Assets

- `public/logo.png` — official UP Circuit logo (960×476), sourced from the organization's verified
  Facebook page profile-photo album (`facebook.com/upcircuit`).
- `public/projects/*.jpg` — official event photos, sourced from `upcircuit.org`.
- To swap in newer official assets, replace the files above (same filenames) or update the paths in
  `src/lib/site.ts` / the relevant components.

## Form behavior

The contact form validates client-side and opens a confirmation modal. On submit, the user's email
client is opened with a pre-filled message addressed to `upcircuit.squeeeze@gmail.com`
(no backend needed for static hosting). To capture submissions server-side, point the form at
[Formspree](https://formspree.io) or a Next.js Route Handler in a few lines.

## Notes

- All factual content (alumni, topnotchers, awards, e-waste stats, social handles) lives in
  `src/lib/site.ts` for easy maintenance.
- `reactStrictMode` is on; smooth scrolling respects `prefers-reduced-motion`.
