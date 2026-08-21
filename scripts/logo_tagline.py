#!/usr/bin/env python3
"""
Reset the tagline inside the logo artwork.

    python3 scripts/logo_tagline.py            # rebuild from the originals
    python3 scripts/logo_tagline.py --check    # report only, write nothing

WHY THIS EXISTS
The word "care" carries a specific meaning in a medical context that this
practice does not intend to claim, so it was replaced site-wide. The tagline
is not just text on the page though — it is drawn into the logo itself, which
appears in the header, the footer, the share card and every printed handout.
Leaving the artwork saying one thing while the page said another would have
been worse than either alone.

HOW THE TYPE WAS MATCHED
The original artwork was supplied as a flattened PNG with no source file, so
the typeface had to be identified from the pixels. Rendering candidate script
faces and correlating their shapes against the original gave Allura at 0.87
against 0.32 for the nearest rival — a clear result, confirmed by eye on the
letterforms. Allura is SIL Open Font Licence and is bundled in scripts/fonts/.

THIS IS A STOPGAP
It is regenerated artwork, not the designer's file. It matches closely, but
if Becky can get the original vector from whoever drew the logo, that is what
should be used. Originals are kept in scripts/logo-originals/ so this can
always be re-run or reverted.
"""

import json
import pathlib
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
IMAGES = ROOT / "public" / "images"
ORIGINALS = ROOT / "scripts" / "logo-originals"
ALLURA = ROOT / "scripts" / "fonts" / "Allura.ttf"

site = json.loads((ROOT / "src" / "content" / "site.json").read_text())
NEW_TAGLINE = site["tagline"]
OLD_TAGLINE = "Extra-Ordinary Care"

# Where the tagline sits in each variant. The horizontal lockup needs a left
# bound because the circle mark shares those rows and would otherwise be read
# as part of the text.
VARIANTS = {
    "logo-cream.png": {"min_x": 0, "colour": (241, 233, 220)},
    "logo-dark.png": {"min_x": 0, "colour": (36, 16, 22)},
    "logo-horizontal.png": {"min_x": 400, "colour": (241, 233, 220)},
}


def tagline_box(alpha, min_x):
    """Bounding box of the last block of ink, ignoring anything left of min_x."""
    region = alpha[:, min_x:]
    rows = (region > 30).sum(axis=1)
    blocks, start = [], None
    for y, v in enumerate(rows):
        if v and start is None:
            start = y
        elif not v and start is not None:
            blocks.append((start, y))
            start = None
    if start is not None:
        blocks.append((start, len(rows)))
    y0, y1 = blocks[-1]
    cols = np.where((region[y0:y1] > 30).any(axis=0))[0]
    return y0, y1, cols.min() + min_x, cols.max() + min_x


def render(text, size, colour):
    """Text on a transparent canvas, cropped tight."""
    font = ImageFont.truetype(str(ALLURA), size)
    pad = size
    canvas = Image.new("RGBA", (size * len(text), size * 3), (0, 0, 0, 0))
    ImageDraw.Draw(canvas).text((pad, pad), text, font=font, fill=(*colour, 255))
    return canvas.crop(canvas.getbbox())


def fit_size(target_w, target_h, colour):
    """Find the point size at which the ORIGINAL wording matches the original
    artwork. Measuring against the old text, not the new one, is what keeps
    the scale honest — the two strings share the 'Extra-Ordinary' prefix, so
    if that matches, the whole line sits at the right weight."""
    best, lo, hi = None, 10, 400
    while lo <= hi:
        mid = (lo + hi) // 2
        img = render(OLD_TAGLINE, mid, colour)
        if best is None or abs(img.height - target_h) < abs(best[1] - target_h):
            best = (mid, img.height, img.width)
        if img.height < target_h:
            lo = mid + 1
        else:
            hi = mid - 1
    return best


def process(name, cfg, check_only):
    original = ORIGINALS / name
    if not original.exists():
        ORIGINALS.mkdir(parents=True, exist_ok=True)
        # First run: keep a pristine copy so this is always reversible.
        Image.open(IMAGES / name).save(original)

    im = Image.open(original).convert("RGBA")
    a = np.array(im)
    y0, y1, x0, x1 = tagline_box(a[..., 3], cfg["min_x"])
    w0, h0 = x1 - x0 + 1, y1 - y0

    size, got_h, got_w = fit_size(w0, h0, cfg["colour"])
    new = render(NEW_TAGLINE, size, cfg["colour"])

    print(f"\n  {name}")
    print(f"    original tagline : {w0} x {h0} px at ({x0}, {y0})")
    print(f"    matched Allura   : {size}pt -> {got_w} x {got_h} px "
          f"({abs(got_w - w0)}px wider/narrower than the original)")
    print(f"    new tagline      : {new.width} x {new.height} px")

    if check_only:
        return

    out = im.copy()
    # Clear the old wording, then drop the new one on the same centre and top.
    out.paste((0, 0, 0, 0), (x0, y0, x1 + 1, y1))
    cx = (x0 + x1) // 2
    out.alpha_composite(new, (cx - new.width // 2, y0))
    out.save(IMAGES / name)
    print(f"    written          : public/images/{name}")


if __name__ == "__main__":
    check = "--check" in sys.argv
    print(f'Tagline: "{OLD_TAGLINE}"  ->  "{NEW_TAGLINE}"')
    if NEW_TAGLINE == OLD_TAGLINE:
        print("Tagline in site.json is unchanged — nothing to do.")
        sys.exit(0)
    for name, cfg in VARIANTS.items():
        process(name, cfg, check)
    if not check:
        print("\nRe-run scripts/brand_assets.py to rebuild everything using the logo.")
