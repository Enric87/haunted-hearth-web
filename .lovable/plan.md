

## Plan: Modal biográfico interactivo para los autores

### Changes

**1. Update `src/pages/Index.tsx`**
- Add `bio` field to each author in the `authors` array with the provided biographical texts
- Add `useState` for `selectedAuthor`
- Make each `AuthorCard` clickable via `onClick` prop
- Render `AuthorModal` component at the bottom, passing `selectedAuthor` and `onClose`

**2. Update `src/components/AuthorCard.tsx`**
- Accept optional `onClick` prop
- Add `cursor-pointer` and `role="button"` / `tabIndex={0}` for accessibility
- The existing `card-hover` class already handles hover elevation; the `group-hover:scale-105` on the image is already present

**3. Create `src/components/AuthorModal.tsx`**
- Use the existing `Dialog` component (Radix-based, already handles ESC, click-outside, focus trap, scroll lock)
- Custom styling on `DialogContent` to match the dark cinematic aesthetic:
  - `bg-black/95 border border-gold/20 rounded-xl shadow-2xl max-w-3xl`
- Layout: "ARCHIVO INVOCADO" label, author name as title, bio text in ivory/warm gray
- Close button styled with the X icon

### Data

All three bios will be stored inline in the `authors` array in `Index.tsx` — no separate data file needed since it's only 3 items.

### Accessibility
Handled by Radix Dialog: focus trap, ESC close, click-outside close, aria attributes.

