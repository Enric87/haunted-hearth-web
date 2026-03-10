

## Plan: Galería "Lo que ya despertamos" — Archivo por año

### Data Structure

Create a new data file `src/data/galeria.ts` with typed interfaces and content:

```typescript
interface Person {
  id: string;
  name: string;
  posterUrl: string;
  photos: { src: string; alt: string }[];
  videos: { src: string; alt: string }[];
}

interface YearData {
  year: string;
  introText?: string;
  people: Person[];
  photos: { src: string; alt: string }[];
  videos: { src: string; alt: string }[];
}
```

- **2024**: `people: []`, empty photos/videos arrays, introText: "En 2024 no hubo rostros.\nSolo pruebas… y testigos."
- **2025**: `people: []` (ready for future posters), empty photos/videos arrays

### Component: PosterCard

New component `src/components/PosterCard.tsx`:
- Vertical card with `aspect-[3/4]`, border, background matching site style
- Hover: subtle zoom + glow (`card-hover` class + custom glow)
- On click: opens a Dialog modal

### Component: PosterModal

New component `src/components/PosterModal.tsx` (uses existing Dialog UI):
- Large poster image
- Title: person name, subtitle: "Halloween {year}"
- "Su rastro" section: photo grid
- "Ecos" section: video grid
- Close via ESC or X button
- Fade + scale animation (already supported by Dialog)

### Page Rewrite: `src/pages/Galeria.tsx`

**State:**
- `selectedYear` (default `"2024"`)
- `selectedFilter` (default `"Todo"`)

**Year selector** — rendered below subtitle, same button style as filters, active = `border-primary text-primary`.

**Dynamic filters:**
- 2024: `Todo | Fotos | Vídeos`
- 2025: `Todo | Posters | Fotos | Vídeos` (Posters only if `people.length > 0`)
- Reset filter to "Todo" on year change

**Content rendering by filter:**
- **Todo (2024):** Intro text block → Photos grid → Videos grid. No posters block.
- **Todo (2025):** Posters grid (if any) → Photos grid → Videos grid.
- **Posters:** Only poster cards grid.
- **Fotos:** Only photos grid.
- **Vídeos:** Only videos grid.

**Empty state:** If no content for current filter, show centered message: *"Aún no hay pruebas registradas aquí."* — styled with `text-muted-foreground font-cinzel`.

**Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for photos/videos. Posters use same grid but cards maintain `aspect-[3/4]`.

**Lightbox:** Keep existing lightbox for photos/videos. Posters use Dialog modal instead.

### Animations

- Year/filter change: wrap content in a div with CSS `transition-opacity duration-250` using a key-based remount (`key={selectedYear + selectedFilter}`) with `animate-fade-in` class.
- Card hover: existing `card-hover` class.
- Modal: Dialog already has fade+scale animations.

### Responsive

- Desktop: 3 columns
- Tablet: 2 columns  
- Mobile: 1 column
- Poster cards maintain 3:4 ratio at all breakpoints

### Files to create/modify

| Action | File |
|--------|------|
| Create | `src/data/galeria.ts` |
| Create | `src/components/PosterCard.tsx` |
| Create | `src/components/PosterModal.tsx` |
| Rewrite | `src/pages/Galeria.tsx` |

