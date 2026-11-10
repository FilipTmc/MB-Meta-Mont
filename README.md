# MB Metamont – web stranica (Astro)

## Pokretanje
1. `npm install`
2. Fotografije: dvoklik na `preuzmi-slike.command` (ili `bash preuzmi-slike.command`) – spremi ih u `public/img`
3. `npm run dev` → http://localhost:4321
4. `npm run build` → gotova stranica je u `dist/` (Cloudflare Pages: build command `npm run build`, output `dist`)

## Gdje se što mijenja
- Kontakt podaci (telefon, WhatsApp, e-mail, mjesto): vrh datoteke `src/pages/index.astro`, objekt `K`
- Tekstovi usluga, koraka i pitanja: liste na vrhu `src/pages/index.astro`
- Fotografije: `public/img/<ime>-720.webp`, `-1200.webp`, `-1600.webp` (zamijeni vlastitima, ista imena)
- Logo: `public/logo/`
- Stilovi: `src/styles/site.css`
