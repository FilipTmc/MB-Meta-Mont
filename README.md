# MB Metamont – web stranica (Astro)

## Pokretanje
1. `npm install` – automatski preuzima i fotografije u `public/img` (ili ručno: `npm run slike`)
2. `npm run dev` → http://localhost:4321
3. `npm run build` → gotova stranica je u `dist/` (Cloudflare Pages: build command `npm run build`, output `dist`)

Fotografije iz `public/img` commitaj u git, tako su trajno dio projekta.
Ako lokalnih fotografija nema, stranica ih učitava izravno s Unsplasha/Pexelsa.

## Gdje se što mijenja
- Kontakt podaci (telefon, WhatsApp, e-mail, mjesto): vrh `src/pages/index.astro`, objekt `K`
- Tekstovi usluga, razloga, koraka i pitanja: liste na vrhu `src/pages/index.astro`
- Fotografije: `public/img/<ime>-720.jpg`, `-1200.jpg`, `-1600.jpg` (zamijeni vlastitima pod istim imenom); popis izvora u `src/data/slike.json`
- Logo: `public/logo/`
- Stilovi i boje: `src/styles/site.css`
