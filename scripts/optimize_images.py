#!/usr/bin/env python3
"""Converte le foto reali (PNG pesanti) in JPG ottimizzati per il web."""
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "stitch_villa_guerra_jos_redesign")
OUT = os.path.join(ROOT, "public", "images")
os.makedirs(OUT, exist_ok=True)

# cartella sorgente -> nome semantico di destinazione
MAPPING = {
    "image_from_https_tenutavillaguerra.it_wp_content_uploads_2025_01_jose": "villa-facade",
    "image_from_http_tenutavillaguerra.it_wp_content_uploads_2025_01_4._jose": "villa-grand",
    "image_from_http_tenutavillaguerra.it_wp_content_uploads_2025_01_esterni_59.": "villa-vesuvio",
    "image_from_https_tenutavillaguerra.it_wp_content_uploads_2025_01_foto_sito2.png": "garden-tables",
    "image_from_http_tenutavillaguerra.it_wp_content_uploads_2025_01_53._jose": "chef-grill",
    "image_from_http_tenutavillaguerra.it_wp_content_uploads_2025_01_32._jose": "pizza",
    "image_from_https_tenutavillaguerra.it_wp_content_uploads_2025_01_whatsapp_image": "pasta-serving",
    "image_from_https_tenutavillaguerra.it_wp_content_uploads_2025_01_20._jose": "wine-cellar",
    "image_from_http_tenutavillaguerra.it_wp_content_uploads_2025_01_71._jose": "catering",
}

MAX_W = 1600
QUALITY = 82

for folder, name in MAPPING.items():
    src = os.path.join(SRC, folder, "screen.png")
    if not os.path.exists(src):
        print(f"!! MANCANTE: {src}")
        continue
    img = Image.open(src).convert("RGB")
    if img.width > MAX_W:
        h = round(img.height * MAX_W / img.width)
        img = img.resize((MAX_W, h), Image.LANCZOS)
    dst = os.path.join(OUT, f"{name}.jpg")
    img.save(dst, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    kb = os.path.getsize(dst) // 1024
    print(f"{name}.jpg  {img.width}x{img.height}  {kb} KB")

print("Fatto.")
