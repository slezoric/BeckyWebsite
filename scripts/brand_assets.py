#!/usr/bin/env python3
"""
Generate A World Within's shareable and printable assets.

    python3 scripts/brand_assets.py

Everything is read from src/content/site.json — the name, tagline, phone,
email, service area and web address. Nothing is typed in here. So when a
detail changes (the email is moving to the new domain, for one), update the
content file or the admin panel and run this again; every asset is rebuilt
from the new values and stays in step.

WHAT IT MAKES
  public/images/og-image.png     the picture shown when the site is shared in
                                 a message, on Facebook, LinkedIn, iMessage
  brand-assets/*.png             print and social pieces with a QR code

The print pieces are 300 dpi, which is what a commercial printer expects.
On screen they will look enormous; that is correct — a 3.5in card at 300 dpi
is 1050 pixels wide.

ABOUT THE QR CODES
Dark burgundy on cream, never the reverse. Some older scanners refuse a QR
that is light-on-dark, and this needs to work first time for someone standing
in a corridor holding a flyer. Error correction is set to High, so the code
still reads if it is creased, smudged or partly shadowed.

FONTS
Ephesis and Mulish are bundled in scripts/fonts/ rather than fetched, so this
keeps working offline and years from now. Both are SIL Open Font Licence,
which permits redistribution.
"""

import json
import pathlib

import qrcode
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
FONTS = ROOT / "scripts" / "fonts"
OUT_PRINT = ROOT / "brand-assets"
OUT_WEB = ROOT / "public" / "images"

site = json.loads((ROOT / "src" / "content" / "site.json").read_text())

# Palette, matching src/app/globals.css exactly.
BASE = (36, 16, 22)
SURFACE = (51, 26, 32)
WINE = (90, 39, 51)
GOLD = (217, 160, 102)
CREAM = (241, 233, 220)
CREAM_MUTED = (207, 192, 181)


def pretty_phone(raw):
    """(515) 555-0134 — matching how the website shows it. Mirrors
    formattedPhone in src/lib/site.ts; keep the two in step."""
    digits = "".join(c for c in raw if c.isdigit())
    if len(digits) == 10:
        return f"({digits[:3]}) {digits[3:6]}-{digits[6:]}"
    return raw


def font(name, size):
    return ImageFont.truetype(str(FONTS / name), size)


def script(size):
    return font("Ephesis.ttf", size)


def sans(size, bold=False):
    return font("Mulish-SemiBold.ttf" if bold else "Mulish-Regular.ttf", size)


def backdrop(w, h):
    """Deep burgundy with a warm glow off-centre, plus the logo's circle motif
    held very faintly behind everything."""
    img = Image.new("RGB", (w, h), BASE)
    glow = Image.new("RGB", (w, h), BASE)
    gd = ImageDraw.Draw(glow)

    # Warm pool of light, up and to the left, like a lamp in a dim room.
    cx, cy = int(w * 0.30), int(h * 0.28)
    radius = int(max(w, h) * 0.62)
    steps = 90
    for i in range(steps, 0, -1):
        t = i / steps
        r = int(radius * t)
        blend = (1 - t) ** 1.9
        col = tuple(
            int(BASE[c] + (WINE[c] - BASE[c]) * blend * 0.85) for c in range(3)
        )
        gd.ellipse([cx - r, cy - r, cx + r, cy + r], fill=col)
    img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(w // 22)), 0.95)

    # The circle from the logo, barely there — texture rather than decoration.
    ring = Image.new("RGB", (w, h), (0, 0, 0))
    rd = ImageDraw.Draw(ring)
    rr = int(min(w, h) * 0.42)
    rcx, rcy = int(w * 0.82), int(h * 0.78)
    rd.ellipse(
        [rcx - rr, rcy - rr, rcx + rr, rcy + rr],
        outline=tuple(int(c * 0.5) for c in GOLD),
        width=max(2, w // 220),
    )
    ring = ring.filter(ImageFilter.GaussianBlur(max(1, w // 400)))
    # Screened, then mostly dialled back — the ring should read as a hint of
    # the logo's circle, not a shape competing with it.
    return Image.blend(img, ImageChops.screen(img, ring), 0.35)


def logo(height, variant="logo-cream.png"):
    src = Image.open(OUT_WEB / variant).convert("RGBA")
    w = int(src.width * height / src.height)
    return src.resize((w, height), Image.LANCZOS)


def paste_logo(img, height, cx, top):
    mark = logo(height)
    img.paste(mark, (int(cx - mark.width / 2), int(top)), mark)
    return mark.height


def qr_panel(url, size, pad_ratio=0.085, radius_ratio=0.06):
    """QR on a cream rounded panel, sized to `size` overall."""
    q = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=0,
    )
    q.add_data(url)
    q.make(fit=True)
    code = q.make_image(fill_color=BASE, back_color=CREAM).convert("RGB")

    pad = int(size * pad_ratio)
    inner = size - pad * 2
    code = code.resize((inner, inner), Image.NEAREST)  # keep module edges crisp

    panel = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [0, 0, size - 1, size - 1], radius=int(size * radius_ratio), fill=255
    )
    bg = Image.new("RGB", (size, size), CREAM)
    panel.paste(bg, (0, 0), mask)
    panel.paste(code, (pad, pad))
    panel.putalpha(mask)
    return panel


def centre(draw, text, f, cx, y, fill=CREAM, spacing=0):
    if spacing:
        # Letter-spaced small caps, drawn a glyph at a time.
        widths = [draw.textlength(ch, font=f) for ch in text]
        total = sum(widths) + spacing * (len(text) - 1)
        x = cx - total / 2
        for ch, wd in zip(text, widths):
            draw.text((x, y), ch, font=f, fill=fill)
            x += wd + spacing
        return
    draw.text((cx, y), text, font=f, fill=fill, anchor="ma")


def wrap(draw, text, f, max_w):
    words, lines, line = text.split(), [], ""
    for word in words:
        trial = f"{line} {word}".strip()
        if draw.textlength(trial, font=f) <= max_w:
            line = trial
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def rule(draw, cx, y, width, colour=GOLD, thickness=2):
    draw.line([cx - width / 2, y, cx + width / 2, y], fill=colour, width=thickness)


def check_margins(img, name, margin_in=0.18):
    """Fail loudly if anything is touching the trim edge.

    A poster once shipped with "SCAN TO VISIT" running off the bottom, and it
    was only caught by eye. This measures instead: it looks for ink in the
    outermost band of the page, where a commercial printer's trim tolerance
    means nothing should be. Print pieces are 300 dpi, hence the conversion.
    """
    band = int(margin_in * 300)
    grey = img.convert("L")
    w, h = grey.size
    edges = {
        "top": (0, 0, w, band),
        "bottom": (0, h - band, w, h),
        "left": (0, 0, band, h),
        "right": (w - band, 0, w, h),
    }
    # The background is dark and the artwork is light, so "ink" here means a
    # pixel markedly brighter than the deepest background tone.
    floor = 90
    for edge, box in edges.items():
        region = grey.crop(box)
        if max(region.getdata()) > floor:
            raise SystemExit(
                f"{name}: artwork reaches the {edge} edge (within "
                f"{margin_in}in). It would be trimmed off. Shorten the "
                "wording or reduce the element sizes for this piece."
            )


# ---------------------------------------------------------------------------


def og_image():
    """1200x630 — the card shown when the site is shared anywhere."""
    w, h = 1200, 630
    img = backdrop(w, h)
    d = ImageDraw.Draw(img)
    cx = w // 2

    bottom = paste_logo(img, 280, cx, 52) + 52
    centre(d, site["discipline"], sans(30), cx, bottom + 26, CREAM_MUTED)
    rule(d, cx, bottom + 96, 150)
    centre(d, f"with {site['practitioner']}", script(64), cx, bottom + 112, GOLD)
    centre(
        d,
        site["serviceArea"].upper(),
        sans(20, bold=True),
        cx,
        bottom + 208,
        CREAM_MUTED,
        spacing=5,
    )

    OUT_WEB.mkdir(parents=True, exist_ok=True)
    img.save(OUT_WEB / "og-image.png", optimize=True)
    return "public/images/og-image.png", img.size, "shown when the site is shared"


def business_card():
    """3.5 x 2in at 300dpi, front and back."""
    w, h = 1050, 600

    front = backdrop(w, h)
    bottom = paste_logo(front, 300, w // 2, 92) + 92
    ImageDraw.Draw(front).line([0, 0, 0, 0], fill=BASE)
    centre(
        ImageDraw.Draw(front),
        site["serviceArea"].upper(),
        sans(19, bold=True),
        w // 2,
        bottom + 34,
        CREAM_MUTED,
        spacing=5,
    )

    back = backdrop(w, h)
    d = ImageDraw.Draw(back)
    qr = qr_panel(site["url"], 390)
    back.paste(qr, (66, (h - qr.height) // 2), qr)

    x = 470
    d.text((x, 150), site["name"], font=script(76), fill=CREAM)
    d.text((x, 250), site["tagline"], font=sans(23), fill=GOLD)
    d.line([x, 300, x + 300, 300], fill=(90, 60, 66), width=2)

    y = 322
    for label, value in (
        (None, site["practitioner"]),
        (None, site["url"].replace("https://", "")),
        (None, pretty_phone(site["phone"])),
        (None, site["email"]),
    ):
        if not value:
            continue
        d.text((x, y), value, font=sans(21), fill=CREAM_MUTED)
        y += 40

    OUT_PRINT.mkdir(parents=True, exist_ok=True)
    check_margins(front, "business-card-front.png")
    check_margins(back, "business-card-back.png")
    front.save(OUT_PRINT / "business-card-front.png", dpi=(300, 300))
    back.save(OUT_PRINT / "business-card-back.png", dpi=(300, 300))
    return "brand-assets/business-card-{front,back}.png", (w, h), scan_range(390)


def sheet(name, w, h, blurb_lines, logo_h, qr_size):
    """Shared layout for the flyer and the poster."""
    img = backdrop(w, h)
    d = ImageDraw.Draw(img)
    cx = w // 2

    top = int(h * 0.075)
    bottom = paste_logo(img, logo_h, cx, top) + top

    y = bottom + int(h * 0.035)
    centre(d, site["discipline"], sans(int(w * 0.026)), cx, y, CREAM_MUTED)
    y += int(w * 0.055)
    rule(d, cx, y, w * 0.16, thickness=max(2, w // 700))
    y += int(w * 0.03)
    centre(d, f"with {site['practitioner']}", script(int(w * 0.075)), cx, y, GOLD)
    y += int(w * 0.115)

    body = sans(int(w * 0.0255))
    for line in blurb_lines:
        for wrapped in wrap(d, line, body, w * 0.74):
            centre(d, wrapped, body, cx, y, CREAM_MUTED)
            y += int(w * 0.042)
        y += int(w * 0.016)

    # The QR is sized to the room the wording has actually left, not to a fixed
    # number. Fixed, the poster's longer copy pushed the caption clean off the
    # bottom of the page — and a clipped "SCAN TO VISIT" is the one thing on
    # here that must never be wrong. `qr_size` is now a maximum, not a promise.
    caption_h = int(h * 0.022 + w * 0.125)
    bottom_margin = int(h * 0.055)
    min_gap = int(h * 0.025)

    room = (h - bottom_margin - caption_h) - y - min_gap
    qr_size = min(qr_size, room)
    smallest = int(w * 0.20)  # below this a QR gets unreliable to scan
    if qr_size < smallest:
        raise SystemExit(
            f"{name}: only {room}px left for the QR, needs {smallest}px. "
            "Shorten the wording for this piece, or raise the page size."
        )

    qr = qr_panel(site["url"], qr_size)
    spare = (h - bottom_margin - caption_h) - y - qr.height
    qr_y = y + max(min_gap, spare // 2)
    img.paste(qr, (cx - qr.width // 2, qr_y), qr)

    cap = qr_y + qr.height + int(h * 0.022)
    centre(
        d,
        "SCAN TO VISIT",
        sans(int(w * 0.019), bold=True),
        cx,
        cap,
        GOLD,
        spacing=int(w * 0.004),
    )
    centre(
        d,
        site["url"].replace("https://", ""),
        sans(int(w * 0.026)),
        cx,
        cap + int(w * 0.042),
        CREAM,
    )
    centre(
        d,
        site["serviceArea"],
        sans(int(w * 0.021)),
        cx,
        cap + int(w * 0.082),
        CREAM_MUTED,
    )

    check_margins(img, name)
    OUT_PRINT.mkdir(parents=True, exist_ok=True)
    img.save(OUT_PRINT / name, dpi=(300, 300))
    # qr_size is reported, not assumed: it may have been reduced above to fit.
    return f"brand-assets/{name}", (w, h), scan_range(qr_size)


# Each entry is one paragraph and is wrapped to fit. Do not hand-break these
# into part-lines: a fragment ending in a dash wrapped on its own and left a
# stray "—" floating in the middle of the flyer.
FLYER_TEXT = [
    "A warm, unhurried place to work with what you are carrying, "
    "with someone beside you the whole way.",
]

# A wall poster is read from across a room, so it stays short. Anything longer
# belongs on the website the QR code leads to.
POSTER_TEXT = FLYER_TEXT + [
    "Preparation, the session itself, and the integration afterwards.",
]


def flyer():
    """5.5 x 8.5in at 300dpi — noticeboard, waiting room, a partner's desk.

    Read from a foot or two away, so the code is sized for that."""
    return sheet(
        "flyer-half-page.png", 1650, 2550, FLYER_TEXT, logo_h=470, qr_size=780
    )


def poster():
    """8.5 x 11in at 300dpi — clinic wall or community board.

    The logo is smaller here than the page would allow, and the wording is
    shorter, so the QR can be as large as possible: this is the one piece
    people scan without walking right up to it."""
    return sheet(
        "poster-full-page.png", 2550, 3300, POSTER_TEXT, logo_h=560, qr_size=1450
    )


def icons():
    """The small mark: browser tab, phone home screen, search results.

    Drawn rather than cropped out of the logo file, so it stays crisp at 32px
    where a downscaled lockup turns to mush. It is the ring from her logo and
    nothing else — the script wordmark is illegible at this size.

    Google reads a site's icon from the favicon, the apple-touch-icon and the
    web manifest. All three existed as files or not at all, and only the
    favicon was ever declared in the HTML, so the other two were invisible to
    it. These are written where Next picks them up and links them itself.
    """
    written = []
    for size, path in (
        (180, ROOT / "src" / "app" / "apple-icon.png"),
        (192, OUT_WEB / "icon-192.png"),
        (512, OUT_WEB / "icon-512.png"),
    ):
        img = Image.new("RGB", (size, size), BASE)
        d = ImageDraw.Draw(img)
        # Generous padding: home-screen icons get their corners rounded off by
        # the operating system, and search results shrink this to a few pixels.
        inset = size * 0.20
        stroke = max(2, int(size * 0.055))
        d.ellipse(
            [inset, inset, size - inset - 1, size - inset - 1],
            outline=CREAM,
            width=stroke,
        )
        path.parent.mkdir(parents=True, exist_ok=True)
        img.save(path, optimize=True)
        written.append(path.name)

    return "src/app/apple-icon.png + public/images/icon-{192,512}.png", (
        512,
        512,
    ), "tab, home screen, search result"


def social_square():
    """1080x1080 — Instagram and Facebook."""
    w = h = 1080
    img = backdrop(w, h)
    d = ImageDraw.Draw(img)
    cx = w // 2

    bottom = paste_logo(img, 340, cx, 96) + 96
    centre(d, site["discipline"], sans(27), cx, bottom + 20, CREAM_MUTED)

    qr = qr_panel(site["url"], 340)
    img.paste(qr, (cx - qr.width // 2, bottom + 108), qr)

    y = bottom + 108 + qr.height + 34
    centre(d, "SCAN TO VISIT", sans(20, bold=True), cx, y, GOLD, spacing=5)
    centre(d, site["url"].replace("https://", ""), sans(28), cx, y + 44, CREAM)

    OUT_PRINT.mkdir(parents=True, exist_ok=True)
    img.save(OUT_PRINT / "social-square.png")
    return "brand-assets/social-square.png", (w, h), "screen only, no print size"


def scan_range(panel_px):
    """Roughly how far away a printed code of this size still reads.

    Phone cameras manage about ten times the code's own width. Reported on
    every run because it is the number that decides whether a piece works in
    the place it is going: a poster people scan from across a room needs a far
    bigger code than a card held at arm's length. Shrinking a QR to make room
    for wording is an easy, invisible mistake — this makes it visible.
    """
    code_in = panel_px * (1 - 2 * 0.085) / 300  # panel minus its quiet zone
    inches = code_in * 10
    return f"{code_in:.1f}in code, reads to ~" + (
        f"{inches / 12:.1f} ft" if inches >= 12 else f"{inches:.0f} in"
    )


if __name__ == "__main__":
    print(f"Building from src/content/site.json — {site['url']}\n")
    for build in (og_image, icons, business_card, flyer, poster, social_square):
        path, size, note = build()
        print(f"  {path:44} {size[0]:>4} x {size[1]:<4}  {note}")
    print("\nQR codes point at:", site["url"])
    print(f"Phone: {pretty_phone(site['phone'])}    Email: {site['email']}")
    print("Re-run this after changing the phone, email or web address.")
