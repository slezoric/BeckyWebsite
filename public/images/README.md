# Image assets

Files here are served from the site root — e.g. `becky-portrait.jpg` in this
folder is referenced in code as `/images/becky-portrait.jpg`.

## Practitioner portrait

    public/images/becky-portrait.jpg

Referenced from `src/lib/site.ts` (the `portrait` field). If you use a different
filename or format, update that field to match. Recommended: portrait
orientation, at least 1000px tall, under ~500KB.

## Logo

Generated from the client's source artwork,
`A World Within Logo Concept Simple Circle.pdf`. The original is black on a
white page, so it was converted to transparent PNGs tinted for our palette, and
the circle was redrawn as a clean 8px ring (the original hairline was 3px and
nearly vanished on the dark background).

| File | Where it's used |
|---|---|
| `logo-horizontal.png` | Site header — circle to the left, name + tagline stacked beside it |
| `logo-cream.png` | Footer — the original stacked lockup, cream for dark backgrounds |
| `logo-dark.png` | Spare, for light backgrounds (print, light-theme documents) |
| `icon-512.png` | Large app icon |
| `../apple-touch-icon.png` | iOS home-screen icon |
| `../../src/app/favicon.ico` | Browser tab icon (Next.js picks this up automatically) |

The icons use only the circle mark — the full wordmark is illegible at 32px.

### Regenerating

If the client supplies revised artwork, the variants are derived from
`logo-cream.png` by cropping three bands: the circle at `(431, 9, 581, 160)`,
the wordmark at `(8, 217, 1015, 336)`, and the tagline at `(325, 401, 691, 449)`.
Keep the wordmark and tagline as supplied — only the circle is redrawn.
