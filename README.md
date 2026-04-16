# Monara

> A calm financial planner for everyday humans and tiny businesses.

Monara is a warm, unhurried planner that pairs personal spending with small-business cashflow. Plain language, soft edges, the rigor of a real planner humming underneath. This repo is the marketing + waitlist site — the onramp for early access.

---

## Stack

| | |
| --- | --- |
| Framework | Next.js `16.2` (App Router) |
| Runtime | React `19.2` + React Compiler |
| Language | TypeScript `5` |
| Styling | Tailwind CSS `v4` (CSS-native `@theme`) |
| Icons | `lucide-react` |
| Fonts | Bricolage Grotesque + IBM Plex Mono (via `next/font/google`) |
| Package manager | Yarn `1.22` |

> ⚠️  This is not the Next.js you know. Per `AGENTS.md`, this version ships breaking changes against older API conventions. When in doubt, read the guides under `node_modules/next/dist/docs/` before writing code.

---

## Getting started

```bash
yarn install
yarn dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
yarn build     # production build
yarn start     # run the production build
```

---

## Project structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 theme + custom utilities/animations
│   ├── layout.tsx           # Root layout, font loading, <body> shell
│   └── page.tsx             # Landing page — composes the home sections
└── components/
    └── ui_components/
        └── home/
            ├── nav.tsx      # Top navigation (wordmark + links + CTA)
            ├── hero.tsx     # Hero + product monitor card
            ├── stats.tsx    # "Signals" spec-sheet strip
            ├── features.tsx # Editorial feature list
            ├── waitlist.tsx # Early-access signup
            └── footer.tsx   # Four-column footer

docs/
└── theme.md                 # Design tokens & semantic roles reference

public/                      # Static assets
```

Landing-page flow on `/`:

```
Hero → Stats → Features → Waitlist → Footer
```

---

## Design system

**Aesthetic:** midnight premium — a deep near-black canvas lit by a warm peach glow, with mint for live/success states. Characterful grotesk display type paired with a mono face for data and spec labels.

**Palette (raw):** `night`, `night-2`, `night-3` · `bone`, `bone-muted`, `bone-dim` · `peach`, `peach-deep` · `mint`, `mint-deep` · `plum` · `danger`

**Semantic roles:** `primary` / `secondary` / `accent` / `background` / `foreground` / `surface` / `surface-elevated` / `muted` / `muted-foreground` / `card` / `card-foreground` / `border` / `input` / `ring` / `success` / `destructive`.

Each semantic token is a `var(--color-<raw>)` reference — recolor the palette and every usage cascades.

**Typography tokens:** `--font-sans` (Bricolage Grotesque), `--font-mono` (IBM Plex Mono).

**Custom utilities:** `glow-peach`, `glow-mint`, `bg-grid-dark`.
**Custom animations:** `animate-rise`, `animate-float-y-slow`, `animate-pulse-dot`, `animate-glow-pulse`.

Full reference and usage examples: **[`docs/theme.md`](./docs/theme.md)**.

---

## Conventions

- **Theme lives in CSS.** Tailwind v4 has no `tailwind.config.*` — edit tokens inside the `@theme inline` block in `src/app/globals.css`. Tailwind emits `bg-*`, `text-*`, `border-*`, `ring-*`, etc. for every `--color-*` and `--font-*` automatically.
- **Prefer semantic roles** (`bg-primary`, `text-muted-foreground`) in components over raw palette tokens. Drop to palette tokens only when a specific hue is the point (hero accents, glow blobs, decorative flourishes).
- **Section components are self-contained.** Each section in `src/components/ui_components/home/` owns its own background, atmosphere layers, and padding so they can be reordered or removed without layout glue.
- **Motion is atmospheric, not decorative.** Entrance animations use `animate-rise` with staggered `animationDelay` inline styles; ambient motion (`animate-float-y-slow`, `animate-glow-pulse`, `animate-pulse-dot`) stays slow and low-intensity.
- **Mono for data, grotesk for narrative.** `font-mono` is reserved for spec labels, numeric readouts, and section markers (`[001]`, `[002]`, …); `font-sans` (default) is for display headlines and body prose.

---

## Docs

- [`docs/theme.md`](./docs/theme.md) — design tokens, semantic roles, custom utilities, how to extend the theme.
