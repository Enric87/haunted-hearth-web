

## Plan: Add 3 illustration images to El Ritual page

**What:** Place the 3 uploaded images (crow, Cthulhu, Pennywise) in a 3-column grid between the ritual text and the rules section, matching the same visual style as the author cards on the homepage (image-only, no text overlay).

**Steps:**

1. **Copy images to project** -- Copy the 3 uploaded images to `public/images/ritual/` (crow.png, cthulhu.png, pennywise.png)

2. **Edit `src/pages/ElRitual.tsx`** -- Add a new section between the text and the rules with a 3-column grid (`grid-cols-1 md:grid-cols-3`) containing the 3 images. Each image displayed in portrait aspect ratio (`aspect-[3/4]`) with `object-cover`, matching the card style from the homepage (border, bg-card). No text, no hover effects with names. Wrapped with `SectionSeparator` above and below.

