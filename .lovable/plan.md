

## Plan: Move CTA below authors and add narrative text

Currently the "DESCIENDE AL RITUAL" button sits below the video section. The user wants it moved below the authors (Poe, King, Lovecraft) section, with a narrative intro text and renamed to "VER EL RITUAL" — matching the style shown in image 2.

### Changes in `src/pages/Index.tsx`

1. **Remove** the CTA `<div>` from inside the Video Hero section (lines 75-82)
2. **Add** a new section after the Authors section (after line 94) with:
   - Narrative text: *"Año tras año incrementamos la angustia, porque la imaginación y la creatividad no tienen límites."* in `font-cormorant` style
   - A "VER EL RITUAL" button/link styled with `font-cinzel`, red border, red text (same existing CTA style)

### Result order
1. Hero (logo + countdown)
2. "LITERALMENTE TERRORÍFICO"
3. Video
4. Authors (Poe, King, Lovecraft)
5. **NEW**: Narrative text + "VER EL RITUAL" button
6. Footer

