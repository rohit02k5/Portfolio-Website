from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

OUT = r"C:/Users/rohit/portfolio-site/public"
FONT_DIR = r"C:/Windows/Fonts"
segoe_b = os.path.join(FONT_DIR, "segoeuib.ttf")
segoe = os.path.join(FONT_DIR, "segoeui.ttf")
consola = os.path.join(FONT_DIR, "consola.ttf")
for f in (segoe_b, segoe, consola):
    if not os.path.exists(f):
        print("missing", f)

def vgrad(size, stops):
    """vertical gradient from stops [(pos, rgb)]"""
    w, h = size
    img = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(img)
    for y in range(h):
        t = y / max(h - 1, 1)
        for i in range(len(stops) - 1):
            p0, c0 = stops[i]
            p1, c1 = stops[i + 1]
            if p0 <= t <= p1:
                f = (t - p0) / (p1 - p0 or 1)
                col = tuple(round(c0[k] + (c1[k] - c0[k]) * f) for k in range(3))
                d.line([(0, y), (w, y)], fill=col)
                break
    return img

def hgrad_text(text, font, colors):
    """Render text then apply horizontal gradient mask."""
    # measure
    tmp = Image.new("L", (10, 10))
    td = ImageDraw.Draw(tmp)
    bbox = td.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    pad = 8
    layer = Image.new("L", (tw + pad * 2, th + pad * 2), 0)
    ld = ImageDraw.Draw(layer)
    ld.text((pad - bbox[0], pad - bbox[1]), text, font=font, fill=255)
    grad = vgrad((tw + pad * 2, th + pad * 2),
                 [(0, colors[0]), (1, colors[-1])])
    # horizontal blend of 3 colors
    g = Image.new("RGB", layer.size)
    gd = ImageDraw.Draw(g)
    for x in range(layer.size[0]):
        t = x / max(layer.size[0] - 1, 1)
        n = len(colors) - 1
        seg = min(int(t * n), n - 1)
        f = t * n - seg
        c0, c1 = colors[seg], colors[seg + 1]
        col = tuple(round(c0[k] + (c1[k] - c0[k]) * f) for k in range(3))
        gd.line([(x, 0), (x, layer.size[1])], fill=col)
    return g, layer

ACCENTS = [(56, 189, 248), (79, 127, 255), (139, 92, 246)]

# ---------- OG image 1200x630 ----------
W, H = 1200, 630
img = Image.new("RGB", (W, H), (5, 9, 20))

# glow blobs
glow = Image.new("RGB", (W, H), (0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([-220, -320, 480, 380], fill=(28, 62, 140))
gd.ellipse([860, -160, 1360, 340], fill=(24, 80, 120))
gd.ellipse([420, 420, 920, 880], fill=(60, 42, 110))
glow = glow.filter(ImageFilter.GaussianBlur(110))
img = Image.blend(img, Image.new("RGB", (W, H), (5, 9, 20)), 0)
from PIL import ImageChops
img = ImageChops.screen(img, glow)

# grid
d = ImageDraw.Draw(img)
step = 60
for x in range(0, W, step):
    d.line([(x, 0), (x, H)], fill=(20, 32, 60), width=1)
for y in range(0, H, step):
    d.line([(0, y), (W, y)], fill=(20, 32, 60), width=1)
# radial mask on grid: fade edges — approximate with vignette overlay
vig = Image.new("L", (W, H), 0)
vd = ImageDraw.Draw(vig)
vd.ellipse([-200, -200, W + 200, H + 200], fill=255)
vig = vig.filter(ImageFilter.GaussianBlur(160))
dark = Image.new("RGB", (W, H), (5, 9, 20))
img = Image.composite(img, dark, vig)
d = ImageDraw.Draw(img)

cx = W // 2
f_eye = ImageFont.truetype(consola, 22)
f_h1 = ImageFont.truetype(segoe_b, 96)
f_sub = ImageFont.truetype(segoe, 30)
f_chip = ImageFont.truetype(consola, 19)

eye = "IIT BHILAI  ·  CLASS OF 2027"
d.text((cx, 165), eye, font=f_eye, fill=(56, 189, 248), anchor="mm")

# name with gradient on "Rohit"
part1, part2 = "Sai ", "Rohit"
w1 = d.textlength(part1, font=f_h1)
w2 = d.textlength(part2, font=f_h1)
x0 = cx - (w1 + w2) / 2
d.text((x0, 285), part1, font=f_h1, fill=(233, 240, 253), anchor="lm")
gt, mask = hgrad_text(part2, f_h1, ACCENTS)
img.paste(gt, (int(x0 + w1), 285 - mask.size[1] // 2), mask)

sub = "AI/ML & Full-Stack Engineer — real-time systems that ship"
d.text((cx, 400), sub, font=f_sub, fill=(157, 178, 209), anchor="mm")

chips = ["CGPA 8.86", "Amazon ML Summer School '26", "Springer Nature — VETOMAC", "4 Internships"]
widths = [d.textlength(c, font=f_chip) + 44 for c in chips]
total = sum(widths) + 14 * (len(chips) - 1)
x = cx - total / 2
for c, wch in zip(chips, widths):
    d.rounded_rectangle([x, 470, x + wch, 470 + 46], radius=23,
                        fill=(13, 25, 48), outline=(60, 90, 140), width=1)
    d.text((x + wch / 2, 494), c, font=f_chip, fill=(157, 178, 209), anchor="mm")
    x += wch + 14

img.save(os.path.join(OUT, "og.png"), optimize=True)
print("og.png", img.size)

# ---------- App icon 512 ----------
S = 512
ic = Image.new("RGBA", (S, S), (0, 0, 0, 0))
idraw = ImageDraw.Draw(ic)
idraw.rounded_rectangle([0, 0, S, S], radius=110, fill=(7, 14, 31, 255))
idraw.rounded_rectangle([8, 8, S - 8, S - 8], radius=104, outline=(79, 127, 255, 160), width=4)
f_big = ImageFont.truetype(segoe_b, 210)
gt2, m2 = hgrad_text("SR", f_big, ACCENTS)
ic.paste(gt2, ((S - m2.size[0]) // 2, (S - m2.size[1]) // 2 - 8), m2)
ic.save(os.path.join(OUT, "icon-512.png"))
ic.resize((180, 180), Image.LANCZOS).save(os.path.join(OUT, "apple-touch-icon.png"))
ic.resize((32, 32), Image.LANCZOS).save(os.path.join(OUT, "favicon-32.png"))
ic.convert("RGBA").resize((32, 32), Image.LANCZOS).save(os.path.join(OUT, "favicon.ico"))
print("icons done")
