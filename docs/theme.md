# Theme & Design Tokens

Monara uses **Tailwind v4**, which has no `tailwind.config.*` file — the theme is defined natively in CSS inside `src/app/globals.css` via `@theme inline`. Every token below is exposed as a CSS custom property **and** as a Tailwind utility (`bg-*`, `text-*`, `border-*`, `ring-*`, `fill-*`, `stroke-*`, `from-*`/`via-*`/`to-*`, `decoration-*`, etc.).

Tokens are split into two layers:

1. **Palette** — the raw named colors. Stable. Used when you want a specific hue.
2. **Semantic roles** — map onto the palette. Used for intent-based styling (`bg-primary`, `text-muted-foreground`). Prefer these in components — swapping a palette color then automatically propagates everywhere.

---

## Palette

| Token | Value | Use |
| --- | --- | --- |
| `night` | `#0B0911` | App base background |
| `night-2` | `#14111E` | Elevated surfaces, cards, inputs |
| `night-3` | `#1E1A2B` | Hover/elevated-on-elevated, subtle borders |
| `bone` | `#F5EEDD` | Warm off-white, primary text |
| `bone-muted` | `#9D97A8` | Secondary text, captions |
| `bone-dim` | `#4A4557` | Tertiary text, hairlines |
| `peach` | `#FF9364` | Primary glow accent |
| `peach-deep` | `#E47040` | Primary hover state |
| `mint` | `#7AEBB8` | Live/success accent |
| `mint-deep` | `#4FD59A` | Secondary hover state |
| `plum` | `#241A33` | Deep atmospheric gradients |
| `danger` | `#E85D3C` | Destructive states |

Utilities: `bg-night`, `bg-night-2`, `text-bone`, `text-bone-muted`, `bg-peach`, `ring-peach`, `fill-mint`, `bg-peach/25` (alpha), etc.

---

## Semantic Roles

Semantic tokens reference the palette via `var(--color-*)`, so updating a palette value cascades automatically.

### Surfaces

| Role | → Palette | Purpose |
| --- | --- | --- |
| `background` | `night` | Page-level background |
| `foreground` | `bone` | Page-level text |
| `surface` | `night-2` | Cards, panels, inputs |
| `surface-elevated` | `night-3` | Hover/active surfaces |

### Intent

| Role | → Palette | Purpose |
| --- | --- | --- |
| `primary` | `peach` | Primary CTAs, key accents |
| `primary-hover` | `peach-deep` | Primary hover state |
| `primary-foreground` | `night` | Text/icons on primary |
| `secondary` | `mint` | Secondary accents, live state |
| `secondary-hover` | `mint-deep` | Secondary hover state |
| `secondary-foreground` | `night` | Text/icons on secondary |
| `accent` | `plum` | Atmospheric accents |
| `accent-foreground` | `bone` | Text on accent |

### Component roles

| Role | → Palette | Purpose |
| --- | --- | --- |
| `muted` | `night-2` | Muted backgrounds |
| `muted-foreground` | `bone-muted` | Muted/secondary text |
| `card` | `night-2` | Card fill |
| `card-foreground` | `bone` | Card text |
| `border` | `night-3` | Default border |
| `input` | `night-2` | Input background |
| `ring` | `peach` | Focus ring |

### States

| Role | → Palette | Purpose |
| --- | --- | --- |
| `success` | `mint` | Success text/icons |
| `destructive` | `danger` | Destructive actions |
| `destructive-foreground` | `bone` | Text on destructive |

---

## Typography

| Token | Font | Purpose |
| --- | --- | --- |
| `--font-sans` | Bricolage Grotesque | Display + body |
| `--font-mono` | IBM Plex Mono | Data readouts, labels, spec metadata |

Usage: `font-sans`, `font-mono`. Loaded via `next/font/google` in `src/app/layout.tsx`.

---

## Usage examples

```tsx
// Prefer semantic roles in components
<button className="bg-primary text-primary-foreground hover:bg-primary-hover">
  Get access
</button>

<p className="text-muted-foreground">Secondary copy</p>

<div className="bg-card text-card-foreground border border-border rounded-2xl p-6">
  Card content
</div>

<input className="bg-input text-foreground focus:ring-2 focus:ring-ring" />

// Drop to palette tokens when the hue itself is the point
<span className="text-peach">softly.</span>
<div className="bg-plum/60 blur-3xl" />
```

---

## Custom utilities & animations

Defined alongside the theme in `globals.css`:

| Class | Effect |
| --- | --- |
| `glow-peach` | Atmospheric peach box-shadow (for CTAs, hero card, etc.) |
| `glow-mint` | Compact mint glow (live dots) |
| `bg-grid-dark` | Subtle 52px grid overlay on dark backgrounds |
| `animate-rise` | Entrance: fade + translate-y (1s ease-out) |
| `animate-float-y-slow` | Gentle 8s vertical bobbing |
| `animate-pulse-dot` | Live-state dot pulse (1.8s) |
| `animate-glow-pulse` | Slow opacity pulse for ambient glows (6s) |

---

## Where it lives

- **Theme definition:** `src/app/globals.css` — everything inside `@theme inline { ... }`
- **Font loading:** `src/app/layout.tsx`
- **Components:** `src/components/ui_components/home/*.tsx`

To add a new semantic role, define it inside `@theme inline` as `--color-<name>: var(--color-<palette-token>);` — Tailwind v4 will emit the full set of utilities for it on the next build.
