# Too Bad Tattoo Studio - Development Guidelines

## Design Aesthetic
- Fine-line tattoo illustration. The site should feel like a tattoo flash sheet or sketchbook.
- NEVER use generic UI patterns: no gradient buttons, no card shadows, no glassmorphism, no rounded-corner everything.
- Design elements should feel organic and slightly imperfect.
- No themed decorative SVGs (no scattered stars, horseshoes, cacti, etc.). Keep it clean.

## Color Palette
- Background: soft pastel gradient — warm orange, pink, yellow, and green blobs on a pale lime base (`#f0f1e3`). Applied via layered `radial-gradient`s with `background-attachment: fixed`.
- Primary: ink black `#1A1A1A`
- Accent: muted tattoo red `#C23B22`
- Body text: warm gray `#4A4540`
- Light accent: `#E8E0D8`

## Typography
- Headers: **Bebas Neue** — bold, condensed, all-caps display font (`--font-display`)
- Body: **Aaargh** — clean, readable, all-caps small text (`--font-body`)
- Fonts are self-hosted in `public/fonts/` (no Google Fonts)
- Icon separator: ★ (star) — used between items, in dividers, etc.

## Tech Stack
- Astro + TypeScript
- Sanity CMS (all content from CMS, never hardcoded)
- Vanilla CSS with custom properties and nesting
- Vercel hosting

## Mobile-First
- Design for 375px first, scale up
- Touch-friendly tap targets (48px minimum)
- Single column on mobile, expand on larger screens

## Copy Tone
- Direct, warm, confident
- Never corporate or salesy
- Female-owned, Austin TX identity
