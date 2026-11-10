// Zajedničko za stranicu i skriptu za preuzimanje
import fs from 'node:fs';
import path from 'node:path';
import izvori from './slike.json' with { type: 'json' };

export const SIRINE = [720, 1200, 1600];

export function remoteUrl(name, w) {
  const s = izvori[name];
  if (!s) return null;
  if (s.u) return `https://images.unsplash.com/${s.u}?fm=jpg&fit=crop&w=${w}&q=78`;
  return `https://images.pexels.com/photos/${s.p}/pexels-photo-${s.p}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const imena = Object.keys(izvori).filter((k) => !k.startsWith('_'));

export function lokalnoPostoji(root, name) {
  return SIRINE.every((w) => fs.existsSync(path.join(root, 'public', 'img', `${name}-${w}.jpg`)));
}
