# Tenuta Villa Guerra & Josè Restaurant

Sito vetrina costruito con [Astro](https://astro.build) + Tailwind CSS, basato sul concept **"The Split"**: un unico dominio con due percorsi distinti — la Tenuta (eventi, prestigio) e Josè Restaurant (cucina, autenticità).

## Struttura

```
src/
  layouts/Base.astro     → shell HTML, font, meta, CSS globale
  pages/
    index.astro          → splash landing "The Split" (scelta Tenuta / Josè)
    jose.astro           → Josè Restaurant (manifesto, proposta, carta, prenotazione)
    tenuta.astro         → Tenuta Villa Guerra (sale, eventi, form preventivo)
    cantina.astro        → vini vulcanici del Vesuvio
  styles/global.css      → Tailwind + stili custom delle pagine
public/
  images/                → foto reali ottimizzate (JPG)
  favicon.svg
tailwind.config.mjs      → design system (palette, tipografia, spaziature)
scripts/optimize_images.py → riconverte i PNG sorgente in JPG web

# materiale sorgente (riferimento, non usato in build) → tutto in _sorgenti/
_sorgenti/
  Contenuti.txt, Design.txt, Foto generation.txt   → testi, sitemap, prompt foto
  duality_authenticity/DESIGN.md                    → design system originale
  *_home_*/, splash_landing_the_split/              → HTML e screenshot prototipi
  stitch_villa_guerra_jos_redesign/                 → foto reali sorgente (PNG)
```

## Comandi

```bash
npm install        # installa le dipendenze
npm run dev        # server di sviluppo su http://localhost:4321
npm run build      # genera il sito statico in dist/
npm run preview    # anteprima della build di produzione
```

## Messa online

`npm run build` produce una cartella `dist/` completamente statica:
caricala su qualsiasi hosting statico (Netlify, Vercel, GitHub Pages,
Cloudflare Pages, o un semplice spazio FTP). Nessun server Node richiesto.

## Note

- **Font:** Libre Caslon Text (display, eredità storica) + Inter (testo, UI).
- **Palette:** Oro antico e crema per la Tenuta; verde Vesuvio, terracotta e
  pietra lavica per Josè.
- I form (prenotazione tavolo e richiesta evento) sono attualmente solo
  front-end: vanno collegati a un backend, a un servizio email o al gestionale
  prenotazioni prima della messa in produzione.
