# REZ Investor Deck (Next.js Version)

The investor pitch deck for **REZ** — Merchant-Owned Commerce Intelligence.

> **Canonical source:** This Next.js version is synced with the upstream static deck at [`git@github.com:imrejaul007/rez-deck.git`](https://rez-deck.vercel.app). Live site: [rez-deck.vercel.app](https://rez-deck.vercel.app/).

## What's in this folder

| File / Folder | Purpose |
|---------------|---------|
| `src/app/page.tsx` | The 21-slide investor pitch (single page) |
| `src/app/layout.tsx` | Root layout with metadata + OG/Twitter tags |
| `src/app/globals.css` | Tailwind base + custom glass/gradient styles |
| `FINANCIAL-MODEL.md` | Detailed 5-year P&L, sensitivity analysis, unit economics |
| `MARKET-SIZING-GUIDE.md` | TAM/SAM/SOM methodology with Airbnb + Stripe case studies |
| `CONTENT-COMPARISON.md` | Side-by-side comparison of this version vs upstream HTML |
| `package.json` | Dependencies (Next.js 14, Tailwind, Framer Motion, Lucide) |
| `tailwind.config.js` | Custom brand colors (orange `#E87511`) + animations |
| `next.config.js` | Static export config for Vercel |

## Pitch deck content (21 slides)

1. **Cover** — Pre-Seed Open · Future of Local Commerce · ₹42L Cr TAM · 5% vs 25% · 6-8mo
2. **The Problem** — D2C fashion example · 70% ad waste · CAC > LTV · 80% SMB failure
3. **Positioning** — "REZ only earns more when merchants grow"
4. **Why Now** — UPI ready · SMB digitization · AI infrastructure 90% cheaper
5. **What We Build** — Behavioral graph of local commerce
6. **Rewards Loop** — Merchant 5% → REZ Coins 5% → Customer savings + social share
7. **Network** — Restaurants, salons, retail, fitness, clinics, hotels — one QR everywhere
8. **REZ Intelligence** — Learns · Optimizes · Automates · 78% churn accuracy at M6
9. **AI Gets Smarter** — "Priya hasn't visited in 12 days" → 21% retention conversion
10. **Market** — ₹42 Lakh Cr TAM · ₹8.4 Lakh Cr SAM · Bangalore (280K SMBs), Mumbai, Delhi
11. **Competition** — 25% aggregators vs 5% REZ; structural lockout
12. **How We Earn** — 5% core + 5% promoted + ₹299-₹2,999 SaaS
13. **Cluster Economics** — 30 → 100 → 250 → 400 merchants in 6-8 months
14. **Unit Economics** — AOV ₹650 · ARPU ₹195 · LTV ₹3,900 · CAC ₹76 · 51.3x ratio
15. **The Goal** — Y1 ₹11 Cr · Y2 ₹55 Cr · Y3 ₹200 Cr ARR
16. **Why Growth Accelerates** — Cluster 1 (10mo) → Cluster 3 (4mo) → cities (self-reinforcing)
17. **Traction** — Bangalore beta: 10 merchants · 200 users · 28% repeat · +62 NPS
18. **The Founder** — Rejaul Karim · Former CTO cybersecurity · Built digital marketing co.
19. **The GTM** — MAP → ACTIVATE → RETAIN · 4 Bangalore zones · 12 acquisition channels
20. **The Ask** — ₹2 Cr · 70% cluster activation · 18-mo milestones
21. **Close** — "Not building an app. Building the behavioral graph of local commerce."

## Quick Start

```bash
# Install dependencies
npm install

# Run locally (http://localhost:3000)
npm run dev

# Build for production (static export)
npm run build

# Deploy to Vercel
vercel
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect to GitHub for automatic deployments:
1. Push this folder to GitHub (it has no `.git/` yet — see Setup below)
2. Import into Vercel
3. Vercel auto-detects Next.js and deploys

## Tech Stack

- **Next.js 14** (App Router, static export)
- **React 18**
- **TypeScript 5**
- **Tailwind CSS 3.4** — custom brand orange (#E87511)
- **Framer Motion 11** — slide transitions
- **Lucide React** — icon system

## Sync Status (vs upstream GitHub canonical)

This version was synced with the upstream [`rez-deck`](https://github.com/imrejaul007/rez-deck) repo on **June 19, 2026**.

| Metric | This Version | Upstream (canonical) |
|--------|--------------|---------------------|
| Geography | ✅ Bangalore | ✅ Bangalore |
| Fee model | ✅ 5% core + 5% promoted | ✅ 5% core + 2% promoted |
| TAM | ✅ ₹42 Lakh Cr | ✅ ₹42 Lakh Cr |
| Y3 ARR | ✅ ₹200 Cr | ✅ ₹200 Cr |
| Beta traction | ✅ 10/200/28%/+62 | ✅ 10/200/28%/+62 |
| Brand | ✅ REZ | ✅ REZ |
| Team | ✅ Founder + honest TBD | ✅ Founder + TBD |
| Cluster economics | ✅ Has slide | ✅ Has slide |
| AI moat | ✅ Has slides | ✅ Has slides |
| 9-doc structure | ❌ Single page | ✅ 9 docs (index, deck, FAQ, etc.) |
| Financial appendix | ✅ FINANCIAL-MODEL.md (local-only) | ❌ Inline only |
| Market methodology | ✅ MARKET-SIZING-GUIDE.md (local-only) | ❌ None |

The upstream HTML version has more documents (one-pager, vision, marketing, data-room, FAQ, video-scripts, subscription); this Next.js version has more visual polish + better financial appendices.

## Setup (if cloning fresh)

```bash
git init
git remote add origin git@github.com:imrejaul007/rez-deck.git
git add -A
git commit -m "Initial commit — REZ investor deck (Next.js, synced with upstream)"
git push -u origin main
```

## Contact

- **Investors:** investors@rez.money
- **Site:** [rez.money](https://rez.money)
- **Live deck:** [rez-deck.vercel.app](https://rez-deck.vercel.app/)
- **Founder:** Rejaul Karim