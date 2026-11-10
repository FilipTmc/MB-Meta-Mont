// Preuzima fotografije u public/img (pokreće se automatski nakon "npm install", ili ručno: npm run slike)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { imena, SIRINE, remoteUrl } from '../src/data/slike.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'public', 'img');
fs.mkdirSync(dir, { recursive: true });

let novo = 0, greske = 0;
for (const n of imena) {
  for (const w of SIRINE) {
    const f = path.join(dir, `${n}-${w}.jpg`);
    if (fs.existsSync(f)) continue;
    try {
      const r = await fetch(remoteUrl(n, w));
      if (!r.ok) throw new Error(r.status);
      fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()));
      novo++;
    } catch (e) {
      greske++;
      console.warn(`Nije preuzeto: ${n}-${w}.jpg (${e.message})`);
    }
  }
}
console.log(`Fotografije: ${novo} preuzeto, ${greske} grešaka. Mapa: public/img`);
