

## Plan: Sistema tipográfico con Cormorant Garamond

### Summary
Add **Cormorant Garamond** as the narrative/body font. Cinzel (titles) and Inter (UI) are already in place. The main change is introducing the middle tier: literary body text.

### Changes

**1. `src/index.css`** — Font import & base styles
- Update Google Fonts import to include `Cormorant+Garamond:wght@400;500;600`
- Change `body` default font to remain Inter (UI default)
- Add a new utility class `.font-narrative` or use Tailwind's `font-cormorant` for narrative text
- Add drop cap style for ritual page first paragraphs:
```css
.drop-cap::first-letter {
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  float: left;
  margin-right: 8px;
  line-height: 1;
  color: hsl(var(--gold));
}
```

**2. `tailwind.config.ts`** — Add font family
- Add `cormorant: ["Cormorant Garamond", "serif"]` to `fontFamily`

**3. Page files** — Apply `font-cormorant` to narrative text
- **`src/pages/Index.tsx`**: No major narrative text (hero is titles + UI)
- **`src/pages/ElRitual.tsx`**: Apply `font-cormorant text-lg leading-[1.7]` to intro paragraph and zone descriptions. Add `drop-cap` class to intro paragraph.
- **`src/pages/LaFamilia.tsx`**: Apply `font-cormorant` to descriptive paragraphs
- **`src/pages/Galeria.tsx`**: Apply `font-cormorant` to intro/descriptive text
- **`src/pages/ElAcceso.tsx`**: Apply `font-cormorant` to narrative paragraphs (need to check content)

**4. `src/components/AuthorModal.tsx`** — Apply `font-cormorant` to bio text

**5. `src/components/AuthorCard.tsx`** — Apply `font-cormorant` to description text

**6. `src/components/Footer.tsx`** — Keep Inter (UI element)

### Text color
Update foreground color from current `40 20% 90%` (~ivory) — the current value is already warm ivory, so no change needed. The PRD suggests `#e7dcc6` which maps to approximately `40 30% 84%` — a slightly warmer/darker tone. Will update `--foreground` to this value for a more parchment-like feel.

### What stays the same
- Cinzel on all headings (already configured)
- Inter on UI elements, countdown, buttons, nav, footer
- Logo, icons, symbols untouched

