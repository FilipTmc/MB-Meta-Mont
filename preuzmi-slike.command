#!/bin/bash
# Preuzima fotografije s postojeće stranice u public/img.
# Pokretanje na Macu: dvoklik na ovu datoteku (ili u Terminalu: bash preuzmi-slike.command)
cd "$(dirname "$0")"
mkdir -p public/img
BASE="https://mb-metamont.madebyaiera.com/static/img"
for n in hero brusenje lak ulje popravci polaganje odrzavanje poslije prije band onama; do
  for w in 720 1200 1600; do
    f="$n-$w.webp"
    curl -fsSL "$BASE/$f" -o "public/img/$f" && echo "OK  $f" || echo "GREŠKA  $f"
  done
done
echo "Gotovo. Slike su u public/img"
