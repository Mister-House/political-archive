# The Political Archive

A free browser card game with 400 historical figures, eight themed packets, portrait cards, and a searchable collection. Every packet costs 100 quiz points and contains five independently drawn cards; duplicates are counted.

## Earn points

Take a five-question general knowledge test drawn from a 60-question bank. Each correct answer earns 25 points, up to 125 per completed test. Points are awarded once on completion. Unfinished tests resume after refresh, and balances are saved locally. Tests have no timer and can be repeated. Existing card collections migrate without changing IDs; imported collection files do not grant quiz points.

Epic, Legendary, and Archive Foil reveals have distinct animated celebrations. Rare cards receive an illuminated reveal, and all cards turn over on reveal. Reduced-motion preferences disable movement and particle effects.

## Rarities

| Tier | Base draw chance | Background |
| --- | --- | --- |
| Common | 45% | Sage |
| Uncommon | 27% | Blue |
| Rare | 15% | Purple |
| Epic | 8% | Pink |
| Legendary | 4% | Amber |
| Archive Foil | 1% | Gold foil |

The rarity is selected first, then a card uniformly from that tier in the selected packet. When a packet lacks a tier, the remaining weights are normalized proportionally. Archive Foil is reserved for a curated selection based on broad and lasting historical impact, not moral approval or controversy alone. Inclusion of any figure does not endorse their actions or beliefs.

## Run and test

Serve the `dist/` directory with any static HTTP server. No dependencies or build step are required. Run `node verify.cjs` to verify the roster, packet pools, collection persistence, imports, labels, and stable card identifiers.

Vercel configuration is included. Import this repository, use the **Other** framework preset, and deploy `dist/`. A Git-connected Vercel project can redeploy when `main` changes.

## Collection storage and transfer

Counts are stored in the browser’s local storage, separately for each site address and device. To move an existing collection, export it from the old site’s Collection tab, then use **Import collection** on the new site. Imports keep the larger count per card and do not double-count repeated imports. Clearing browser site data removes local progress.

## Portrait credits

`dist/portraits.json` records each portrait’s source, original file, and attribution/license information when supplied by the source. The card detail dialog links to those sources. Individual images retain their original rights and licenses; no blanket image license is granted by this repository. Portraits are displayed with cropping and grayscale styling. This repository contains game source and public historical content, not players’ saved collections.
