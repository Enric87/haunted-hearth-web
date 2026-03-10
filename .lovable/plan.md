

## Plan: Switch heading font from Cinzel to Cormorant Garamond

### What changes
Replace `font-cinzel` with `font-cormorant` on all heading elements (H1, H2, H3) and title-like text across the site. Keep `font-cinzel` only on small UI labels, buttons, and navigation links.

### Changes

**1. `src/index.css`** — Update base heading rule
- Change `h1, h2, h3, h4, h5, h6` font-family from `'Cinzel'` to `'Cormorant Garamond'`

**2. Page files** — Replace `font-cinzel` → `font-cormorant` on H1/H2 headings:
- `src/pages/Index.tsx`: H1 "LITERALMENTE TERRORÍFICO", date line
- `src/pages/ElRitual.tsx`: H1 "El Ritual", H2 zone titles, H2 "Normas"
- `src/pages/LaFamilia.tsx`: H1 "La Familia"
- `src/pages/ElAcceso.tsx`: H1 "El Acceso", H2 "Recomendaciones"
- `src/pages/Galeria.tsx`: H1 title

**3. Component files** — Replace on heading text:
- `src/components/AuthorCard.tsx`: H3 author name
- `src/components/AuthorModal.tsx`: modal title (keep "Archivo invocado" label as `font-cinzel` since it's a small UI label)

**4. Adjust letter-spacing** on H1s to `tracking-[0.04em]` (wider) and ensure `font-semibold` weight for the literary feel.

**5. Split long title** — "LITERALMENTE TERRORÍFICO" → two lines using a `<br />` tag.

### What stays as `font-cinzel`
- Navigation links (Header)
- Buttons / CTAs
- "Archivo invocado" label
- Footer text
- PosterCard overlays
- Small UI labels

