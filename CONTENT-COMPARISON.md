# REZ Deck — Content Comparison (Upstream vs Local)

> **Canonical version (per your instruction):** The **upstream GitHub repo** at [`git@github.com:imrejaul007/rez-deck.git`](git@github.com:imrejaul007/rez-deck.git), cloned to `/tmp/rez-deck/`, deployed live at [rez-deck.vercel.app](https://rez-deck.vercel.app/).
>
> **Comparison version:** The local Next.js project at [`/Users/rejaulkarim/Documents/rezdeck`](rezdeck).

This file extracts every meaningful piece of content from both versions so you can compare them section-by-section. The two versions tell **different stories about REZ** — same product, very different pitches.

---

## 📋 At-a-Glance Differences

| Dimension | Upstream (CANONICAL) | Local Next.js |
|-----------|---------------------|---------------|
| **Stack** | Static HTML/CSS | Next.js 14 + Tailwind + Framer Motion |
| **Files** | 9 HTML pages + 1 CSS + 1 README | 1 giant `page.tsx` (17 slides) + 2 `.md` appendices |
| **Live URL** | ✅ [rez-deck.vercel.app](https://rez-deck.vercel.app/) | ❌ Not deployed |
| **Git tracked?** | ✅ Yes | ❌ No `.git/` |
| **Brand name** | REZ | ReZ |
| **Tagline** | "Merchant-Owned Commerce Intelligence" | "Turn every QR scan into a loyal customer" |
| **Geography** | Bangalore, Karnataka | Lucknow, UP |
| **Fee model** | 5% core + 2% promoted (tiered) | 2% flat |
| **Year 3 ARR target** | ₹200 Cr | ~₹23 Cr |
| **TAM claim** | ₹42 Lakh Cr | ₹10,000 Cr |
| **Beta traction** | 10 merchants, 200 users, 28% repeat, +62 NPS | "What's built" feature list (no real numbers) |
| **Team** | Founder (Rejaul Karim) only, openly TBD | Founder + 2 placeholders `[CTO Name]`, `[Ops Name]` |
| **Documents** | 9 (data-room, FAQ, video scripts, marketing, subscription, etc.) | 1 deck + 2 financial appendices |
| **Acquisition channels** | 12 named channels + college ambassador program | "Direct sales" (vague) |

---

## 📄 Section 1 — Hero / Landing

### Upstream (canonical) — from `index.html`
```
REZ Investor Deck | Merchant-Owned Commerce Intelligence
Pre-Seed Round Open

The Future of Local Commerce

India has 50+ million SMBs. 80% fail in 5 years because they never learn
who their customers are. REZ changes that by giving merchants ownership
of their customer relationships and the AI intelligence to grow them.

Hero stats:
  ₹42L Cr     TAM
  5%          vs 25% Aggregator Fees
  6-8 mo      To Profitability

Investor Materials — Choose Your Depth:
  • One-Pager            (5 min, 2 pages)
  • 20-Slide Deck        (15 min, 20 slides)
  • Vision Document      (30+ min, 40+ pages)
  • Marketing Plan       (10 min, 12 channels)
  • Data Room            (DD ready, 35+ docs)
  • Video Scripts        (3 scripts)
  • Investor FAQ         (30+ Q&A)
  • Subscription Model   (3 tiers)

The REZ Thesis:
  Insight:    Merchants spend money to acquire customers but never own
              the relationship. Aggregators own the transaction;
              REZ owns the relationship.
  Solution:   QR-powered customer tracking, AI intelligence, and
              cross-category rewards that create a behavioral graph of
              local commerce.
  Opportunity: ₹42L Cr TAM. 5% fees vs 25% aggregators. Each
              neighborhood cluster becomes profitable in 6-8 months.

Current Status:
  Bangalore    Beta Location
  10           Merchants
  200          Users
  28%          Repeat Rate

"REZ only earns more when merchants grow."

₹2 Crores — Pre-Seed Round
  18-month milestones: 2,000 merchants in Bangalore, 40%+ repeat rate,
  5 cities launched.
  70%  Cluster Activation
  20%  Product & AI
  10%  Operations

Footer: investors@rez.money | rez.money | Bangalore, India
        Version 3.0 | May 2026
```

### Local Next.js — Slide 1 (Cover) from `src/app/page.tsx`
```
REZ (logo: orange gradient "R")
"Turn every QR scan into a loyal customer."
"The AI-powered loyalty layer for offline India."

CTAs: View Pitch  |  Contact Us (investors@rez.money)

Footer: © 2026 ReZ. Confidential Investor Deck.
```

**🔍 Verdict:** Upstream tells a complete story on one page (hero + thesis + traction + ask); local only shows a cover. **Upstream wins for first impressions.**

---

## 📄 Section 2 — Problem

### Upstream — Slide 1 of 20 (from `deck.html`)
```
The Problem
"India has 50+ million SMBs. 80% fail in 5 years."

D2C Fashion Brand Example:
  ₹500        CAC (Meta Ads)
  8%          Repeat Rate
  70%         Ad Waste

They burn ₹50L/month on Meta/Google ads. Every customer is a stranger.
No data, no repeat, no loyalty.

  • Burn Money on Ads — Pay ₹500+ per customer to Meta/Google. 70%
    wasted on wrong audience.
  • Zero Customer Data — Customers disappear after purchase. No email,
    no phone, no history.
  • No Repeat Customers — One-time buyers. CAC never decreases.
    CAC > LTV. Unsustainable.
```

### Local Next.js — Slide 2 (Problem)
```
The Problem — "The silent crisis affecting every small business in India"

Headline: "Every small business loses 40% of customers after the first visit."

  • No Repeat Customers — Merchants spend ₹500-2000 per acquisition
    but lose 60% of customers after the first visit.
  • Cashback Doesn't Work — Generic discounts don't create loyalty.
    Customers go wherever is cheapest next time.
  • No Digital Identity — Offline transactions are invisible. Merchants
    don't know who their customers are.
  • Zero Data — No insights on customer behavior, preferences, or
    visit frequency.

Banner: "Result: 80% of SMBs fail within 5 years.
         Customer acquisition cost keeps rising.
         No retention mechanism exists."
```

**🔍 Verdict:** Upstream is more visceral (uses a specific D2C fashion brand example with concrete CAC); Local is more conceptual (4 problem cards). **Upstream wins for memorability.**

---

## 📄 Section 3 — Solution / "What We're Building"

### Upstream — Slides 2, 4, 5
```
Slide 2: Our Positioning
  "REZ only earns more when merchants grow."
  • Merchant-owned commerce intelligence.
  • NOT: QR startup, wallet app, loyalty program.

Slide 4: What We're Building
  "The behavioral graph of local commerce."

  How It Works:
    Merchant (🏪)  Pays 5%  →  REZ (💰)  Gives 5% Cashback  →
      Customer (👤)  + Social Reward

  Merchant-funded. Zero burn. No VC subsidy.

  HOW REZ IS DIFFERENT:
    ✓ Merchant pays 5% → Customer gets 5% cashback
    ✓ Customer shares on Instagram/YouTube → Gets extra BRAND COINS
    ✓ Every transaction → AI learns behavior
    ✓ Repeat customers → Merchant grows → REZ grows
    ✓ No burning VC money. Self-sustaining loop.

Slide 5: Merchant-Funded Rewards Loop
  "The closed-loop economy. No VC money burned. Self-sustaining."

  Loop: Merchant (5%) → REZ Coins (5% Cashback) → Customer (saves 5%+)
    → IG/YT Share (+Extra Coins)

  MERCHANT BENEFITS:   Own Customer Data, Repeat Customers,
                        AI Predictions, Cheaper than Ads
  CONSUMER BENEFITS:   Earn 5%+ Back, Redeem Anywhere,
                        Social Rewards, Save Every Time

  Network Effect: More merchants → More to earn → More consumers
    → More value → More merchants
```

### Local Next.js — Slide 3 (Solution)
```
The Solution — "One simple solution that changes everything"
Headline: "One QR code that turns every customer into a loyal customer."

ReZ Now:
  ✓ Customer scans QR → Branded store page opens
  ✓ Browse menu, order, pay via UPI
  ✓ Coins credited automatically
  ✓ Customer returns because coins = free money

Quick stats: 2 min Setup Time | 100% Coin Crediting | 0% Customer Churn

Blockquote: "Customers don't need to remember to come back.
             Coins remind them every day."
```

**🔍 Verdict:** Upstream's "Merchant-Funded Rewards Loop" is a much clearer, more investor-friendly framing of the business model. Local's "ReZ Now" framing is more product-focused. **Upstream wins on story; Local wins on product clarity.**

---

## 📄 Section 4 — "Why Now?"

### Upstream — Slide 3
```
Why Now?
"The timing is RIGHT. Merchants are DESPERATE."

  UPI Ready             SMB Digitization           AI Infrastructure
  22.6B transactions/mo Merchants want direct chans ML 90% cheaper
```

### Local Next.js — Slide 4 (Why Now)
```
Why Now? — "Three tailwinds converging at the perfect moment"

1. UPI is Mainstream (NPCI, Apr 2026)
   14B+  Monthly Transactions
   ₹24L Cr  Monthly Value
   450M+  Daily UPI Users
   99.9%  Uptime
   "Even vegetable vendors & paan shops accept UPI."

2. SMBs Need Digital Tools (BCG Survey 2025 / NASSCOM 2025)
   80%  SMBs want digital
   63M  SMBs in India
   "Existing tools are too complex, expensive, or require downloads."

3. Loyalty is Broken
   ✗ Generic cashback doesn't create habits
   ✗ Apps have 80% churn in 30 days
   ✗ Aggregators own the customer relationship
   ✓ REZ: Web-first, coin-based, merchant-branded
```

**🔍 Verdict:** Local is much more detailed with stats and citations. Upstream is concise. **Local wins on data; Upstream wins on punchiness.**

---

## 📄 Section 5 — Market / TAM

### Upstream — Slide 9
```
The Market
"India has millions of merchants. Almost none own their customer relationships."

City         SMBs        Target
Bangalore    280,000     2,000
Mumbai       350,000     3,000
Delhi        400,000     3,000

[+ similar tables in one-pager.html]
```

### Upstream (one-pager) — Quick Stats
```
Market Size             ₹42L Cr TAM
Target                  ₹8.4L Cr SAM
Year 3 ARR Target       ₹200 Cr
Unit of Scale           Neighborhood cluster
Profitability           6-8 months per cluster
```

### Local Next.js — Slide 5 (Market)
```
The Market — "Conservative. Defensible. Based on real data."

TAM     ₹10,000 Cr   All India SMB software & services (NASSCOM, IBEF)
SAM     ₹500 Cr      T2-T3 SMBs we can realistically reach (Year 5)
SOM     ₹1.5 Cr      Lucknow first, prove, expand (Year 1)

How We Calculated SAM (Bottom-Up):
  1. Count Target SMBs
     Restaurants: 7M (NRAI)
     Salons:      2M
     Retail:      10M
     Total:       ~20M
  2. Apply Realistic Penetration (Year 5)
     100 cities × 50,000 SMBs = 5M target SMBs
     10% penetration = 500,000 merchants
  3. Revenue per Merchant
     Avg monthly GMV: ₹30,000
     ReZ fee (2%):    ₹600/month
     SaaS:            ₹199/month
     Total:           ₹9,588/year
  SAM = 500,000 × ₹9,588 ≈ ₹500 Crore (Year 5)

Why T2-T3 First?
  Lower Competition | Fresh Opportunity | Lower CAC | Higher Loyalty
```

**🔍 Verdict:** Massively different numbers. Upstream's ₹42L Cr TAM is "all of Indian SMB commerce"; Local's ₹10,000 Cr is "all India SMB software." Both defensible, but they tell different stories. **Local has the better methodology writeup (the .md file is even more detailed).**

---

## 📄 Section 6 — Business Model / "How We Earn"

### Upstream — Slide 11 ("How We Earn")
```
How We Earn

  CORE TRANSACTION FEE (5%): All REZ-powered transactions
  PROMOTED SALES FEE (+5%): ONLY on AI-driven conversions

  WHY MERCHANTS ADOPT:
    • AI identifies high-intent customers
    • 3x higher conversion than manual
    • Performance-based, no upfront cost
```

### Upstream — one-pager financial math
```
Year 1 (2,000 merchants):
  GMV:           2,000 × ₹60,000 = ₹12 Cr/month
  Core (5%):     ₹12 Cr × 5%  = ₹0.6 Cr/mo  × 12 = ₹7.2 Cr/year
  Promoted (2%): ₹12 Cr × 2%  = ₹0.24 Cr/mo × 12 = ₹2.88 Cr/year
  SaaS (₹300):                                = ₹0.72 Cr/year
  Total:                                       = ₹10.8 Cr ARR

Year 3 (40,000 merchants):
  GMV:           40,000 × ₹60,000 = ₹240 Cr/month
  Core (5%):     ₹144 Cr/year
  Promoted (2%): ₹58 Cr/year
  SaaS (₹500):  ₹24 Cr/year
  Total:         ₹200 Cr ARR
```

### Local Next.js — Slide 6 (Business Model)
```
Business Model — "Simple. Predictable. Recurring."

  PRIMARY:    2% Transaction Fee (per successful payment)
  RECURRING:  ₹199 SaaS/month (merchant dashboard)
  UPSELL:     ₹999 Premium/month (advanced features)

Unit Economics:
  ₹800   CAC
  6 mo   Payback
  75%    Gross Margin
  5x     LTV/CAC
```

**🔍 Verdict:** Fundamentally different fee models (5% core + 2% promoted vs. flat 2%). Different SaaS pricing (₹300/₹500 vs. ₹199/₹999). **Upstream has the more sophisticated, tiered fee model; Local is simpler but inconsistent with its own slide 7.**

---

## 📄 Section 7 — Unit Economics

### Upstream — Slide 13
```
Unit Economics

  CAC:        ▓▓▓▓▓▓▓▓▓▓  →  ▓▓▓      (↓70%)
  RETENTION:  ▓▓▓       →  ▓▓▓▓▓▓▓▓▓▓  (↑3x)

CAC drops 70%. Retention triples. Contribution turns positive.
```

### Upstream — data-room.html
```
Unit Economics — Detailed breakdown:
  AOV:      ₹650
  ARPU:     ₹195/month
  LTV:      ₹3,900
  CAC:      ₹76
  LTV:CAC:  51.3x
```

### Local Next.js — Slide 7 (Unit Economics)
```
Unit Economics — "Strong unit economics from day one"

Headline metrics:
  ₹3,555     Customer Acquisition Cost
  ₹3.24L     Lifetime Value (LTV)
  4.7 mo     Payback Period
  91x        LTV/CAC Ratio

How We Calculate:

  CAC breakdown:
    Field rep salary (6 mo)  ₹2.4L
    Travel + equipment       ₹50K
    QR printing + shipping   ₹10K
    Onboarding support       ₹10K
    Total per rep            ₹3.2L
    Merchants acquired (9%)  ~100
    CAC                      ₹3,555

  Revenue per Merchant (annual):
    Avg monthly GMV:        ₹30,000
    Transaction fee (2%):   ₹600/mo
    SaaS subscription:      ₹199/mo
    Annual revenue:         ₹9,588
    Gross margin:           75%
    Annual gross profit:    ₹7,191
    Retention (36 mo):      × 36
    LTV:                    ₹3,24,000

  Payback & LTV/CAC:
    Monthly contribution: ₹749
    Payback (₹3,555 ÷ ₹749) = 4.7 months
    LTV:        ₹3,24,000
    CAC:        ₹3,555
    LTV/CAC:    91x

Why This Matters:
  "With 91x LTV/CAC, every ₹1 spent on acquisition returns ₹91 over
  merchant lifetime. This means we can afford to spend more on growth."
```

**🔍 Verdict:** Wildly different numbers:
- **Upstream:** CAC ₹76, LTV ₹3,900, ratio 51.3x
- **Local:** CAC ₹3,555, LTV ₹3,24,000, ratio 91x

Both numbers are aggressive for SMB SaaS. Real-world benchmarks put LTV/CAC at 3-7x. **Both numbers will get challenged by investors — pick whichever one you can defend.** Local's `.md` financial model says Year 1 LTV/CAC is actually **0.74x** (CAC ₹6,150, LTV ₹4,572) and breaks even in Year 2.

---

## 📄 Section 8 — Product

### Upstream — Slide 6
```
Every Merchant. One Network.
"Like a credit card works because you can use it everywhere."

Merchants on REZ:
  • Restaurants & Cafes
  • Salons & Spas
  • Retail & Grocery
  • Fitness & Gyms
  • Clinics & Pharmacies
  • Hotels & Stays

One QR code. One wallet. One loyalty program. Works everywhere.
```

### Local Next.js — Slide 8 (Product)
```
The Product — "ReZ Now — One landing page per merchant"

[Phone mockup: "Priya's Restaurant" — categories (Biryani, Starters,
Drinks, Desserts), menu items with prices, ₹360 cart]

Features:
  ✓ No App Download — Works on any phone via web
  ✓ Branded Experience — Your logo, your colors, your menu
  ✓ UPI Payment — Instant settlement, no middleman
  ✓ Auto Coins — Every purchase earns rewards
  ✓ WhatsApp Share — Share menu via WhatsApp
```

**🔍 Verdict:** Local has a tangible product visualization (phone mockup); upstream has breadth (categories of merchants). **Local wins for product demos; upstream wins for TAM breadth.**

---

## 📄 Section 9 — REZ Intelligence / AI

### Upstream — Slides 7, 8
```
Slide 7: REZ Intelligence
  "The AI that never stops learning."

  LEARNS        OPTIMIZES      AUTOMATES
  Every txn     Every pricing  Every offer

  "The longer REZ operates in a locality, the stronger the intelligence
   advantage becomes."

Slide 8: AI Gets Smarter
  78% churn prediction accuracy in 6 months.
  "Priya hasn't visited in 12 days" → 21% conversion on retention offer
```

### Upstream (one-pager) — AI Capability Timeline
```
Timeframe        Capability
Month 3          Churn prediction: 15% accuracy
Month 6          Churn prediction: 78% accuracy
Month 12         Demand forecast: 85% accuracy
Year 2+          City-wide patterns
```

### Local Next.js
**❌ No dedicated AI/Intelligence slide.**
The closest is Slide 10 (Traction) which lists "Advanced AI — coming after PMF" under "What's NOT Built (On Purpose)".

**🔍 Verdict:** Upstream has a strong AI moat story (and a defensible number: 78% churn prediction at month 6). Local explicitly says AI is NOT built yet. **Upstream wins if AI is part of your pitch; Local is more honest if it's not.**

---

## 📄 Section 10 — Cluster Economics

### Upstream — Slide 12
```
Cluster Economics
"The unit of scale is one neighborhood cluster."

MONTH 1-2: 30 merchants, 300 consumers (Foundation)
MONTH 3-4: 100 merchants, 2,000 consumers (Network Effects)
MONTH 5-6: 250 merchants, 6,000 consumers, 35%+ repeat (Density)
MONTH 7-8: 400 merchants, 12,000 consumers → PROFITABLE

Each cluster becomes self-sustaining in 6-8 months.
```

### Upstream — Slide 15 ("Why Growth Accelerates")
```
Why Growth Accelerates

FIRST CLUSTER:   8-10 months (learning)
SECOND CLUSTER:  6 months (playbook works)
THIRD CLUSTER:   4 months (referrals emerge)
5+ CITIES:       Growth becomes self-reinforcing

Stage           Effect
3-5 clusters    2x faster
10+ clusters    Consumer loop emerges
5+ cities       AI compounds exponentially

"The more REZ grows, the faster REZ grows."
```

### Local Next.js
**❌ No cluster-economics slide.** Local uses "Lucknow → UP → National" as GTM phasing instead, but never quantifies the cluster unit economics.

**🔍 Verdict:** Upstream's cluster-economics framing is **the strongest part of the pitch** — it explains *how* the business becomes profitable at small scale, which is exactly what pre-seed investors want to hear. Local lacks this entirely. **Upstream wins decisively.**

---

## 📄 Section 11 — GTM / Acquisition

### Upstream — Slide 18 + marketing.html
```
The GTM: MAP → ACTIVATE → RETAIN

Phase       Action
Map         Area scanning, merchant discovery
Activate    QR setup, staff training
Retain      AI insights, referrals

Repeatable playbook. Documented and tested.
```

### Upstream — marketing.html (12 Acquisition Channels)
- College fests (Bangalore has 60+ engineering colleges)
- Campus ambassadors
- WhatsApp viral loops
- Merchant referrals
- Cluster launch events
- ... (and 7 more, full detail in `marketing.html`)

### Upstream — data-room.html (Launch Plan)
```
Bangalore Launch Plan:
  4 zones: BTM, HSR, Koramangala, Jayanagar
  500+ merchants mapped
  10 college fests in Month 1
```

### Local Next.js — Slide 11 (GTM)
```
Go-to-Market Strategy — "Land and expand"

Phase 1 (Months 1-6):
  Single City: Lucknow, UP
  Target:   500 merchants
  Focus:    Restaurants + Salons
  Tactic:   Direct sales

Phase 2 (Months 7-12):
  Regional: UP Expansion
  Target:   2,000 merchants
  Cities:   Kanpur, Varanasi, Agra
  Tactic:   Referral + WhatsApp

Phase 3 (Year 2):
  National Expansion
  Target:   20,000 merchants
  Region:   North India first
  Tactic:   Proven playbook

"Why Lucknow? Largest T2 city, strong UPI adoption, low competition,
             founder network"
```

**🔍 Verdict:** Upstream has tactical specificity (named zones, 12 channels, college fests); Local has directional clarity (3 phases) but lacks execution detail. **Upstream wins on GTM depth.**

---

## 📄 Section 12 — Competition

### Upstream — Slide 10
```
The Competition

                Aggregators      REZ
Commission      25%              5%
[+ similar two-column comparison with REZ moat advantages]
```

### Upstream — FAQ
```
"Who are your competitors?"
  [Detailed Swiggy/Zomato positioning comparison]

"What if Swiggy/Zomato copies this?"
  [Detailed moat explanation]
```

### Local Next.js — Slide 12 (Competition)
```
Competition — "We're NOT competing with anyone"

Positioning: "We don't compete on payments. We win on loyalty."

Company           Focus                     Coin System   Target
Zomato/Swiggy     Delivery aggregation      ✗ No          Urban Tier 1
Paytm/PhonePe     Payment rails             ✗ No          All India
DotPe             QR payments               ✗ No          All India
ReZ               Loyalty + Retention       ✓ Yes         T2-T3 first

Direct Competitor: DotPe
  Founded:    2020
  Funding:    $45M (Sequoia, Tiger)
  Focus:      Payments + All verticals
  Pricing:    ₹499/mo + payment fees
  Weakness:   No loyalty system

Our Advantages:
  ✓ Coin economy — only we have it
  ✓ T2-T3 focus — they ignore this market
  ✓ Lower pricing — ₹199 vs ₹499
  ✓ Focused execution — one city at a time

The Key Differentiator:
  "DotPe makes money on payments. We make money on retention."
  "When merchants earn coins, customers come back.
   When customers come back, merchants never leave."
```

**🔍 Verdict:** Local has a stronger named-competitor section (DotPe, with funding amount and weaknesses). Upstream is more abstract. **Local wins on competitor-specifics; Upstream wins on positioning.**

---

## 📄 Section 13 — Traction / "What's Built"

### Upstream — Slide 16
```
The Traction
Location: Bangalore, India

Metric           Value
Merchants        10 (beta)
Users            200
Repeat Rate      28%
Merchant NPS     +62

"Core platform works | Reward redemption | AI predictions | Merchant retention"
```

### Local Next.js — Slide 10 (Traction)
```
Traction — "What we've built. What's working."

Top stats:  Live Core Product | Deployed Infrastructure | 2% Fee | 24/7 Uptime

What's Built & Live:
  ✓ Merchant dashboard
  ✓ Customer web menu
  ✓ UPI payment integration
  ✓ Coin crediting system
  ✓ Auth service
  ✓ Wallet service
  ✓ Order service
  ✓ Payment service

What's NOT Built (On Purpose):
  ✗ Consumer app — web works fine
  ✗ Advanced AI — coming after PMF
  ✗ Hotel OTA — future product
  ✗ Multi-city — one city first

"Focus is our strategy."
```

**🔍 Verdict:** Upstream has **real numbers** (10/200/28%/+62). Local has **architectural bragging rights** (auth, wallet, order, payment) but no actual traction metrics. **Upstream wins on credibility.**

---

## 📄 Section 14 — Team

### Upstream — Slide 17 + data-room.html
```
The Founder: Rejaul Karim

  • Former CTO at cybersecurity startup
  • Built digital marketing company (India + GCC)
  • Worked with restaurants, salons, retail SMBs

  "I kept seeing merchants spend money to acquire customers…
   but never own the relationship. That became REZ."

Team:
  Founder: Rejaul Karim (named)
  Executive Team: (TBD)
  Hiring Plan: (see org structure in data-room.html)
```

### Local Next.js — Slide 13 (Team)
```
The Team — "Built by operators who've done this before"

Rejaul Karim    Founder & CEO
                "10+ years in fintech. Built merchant acquisition for
                 PhonePe. Network of 500+ SMB associations in UP."

[CTO Name]      CTO
                "12+ years in backend systems. Led payments
                 infrastructure at Razorpay. Scaled to 10B+ transactions."

[Ops Name]      Head of Growth
                "8+ years in B2B sales. Built distribution for 10,000+
                 retailers in Tier 2 cities. Deep merchant understanding."

Advisory:
  [Name]   Ex-Paytm, Fintech Advisor
  [Name]   Ex-Swiggy, Growth Advisor
```

**🔍 Verdict:** Local has a stronger team slide **if** the placeholders were real names. As shipped, it's **a credibility landmine** — `[CTO Name]` is unacceptable for any investor-facing deck. Upstream is more honest by admitting the executive team is TBD.

**🚨 Critical fix needed in Local:** Replace `[CTO Name]`, `[Ops Name]`, and the two advisor placeholders before sending to anyone.

---

## 📄 Section 15 — The Ask

### Upstream — Slide 19
```
The Ask

₹2 Crores (Pre-Seed)

Use                                Amount
Cluster Activation & Growth         ₹140L (70%)
Product & AI                       ₹40L  (20%)
Operations                         ₹20L  (10%)

18-Month Milestones:
  • 2,000 merchants in Bangalore
  • 40%+ repeat rate
  • 5 cities launched
```

### Upstream — Slide 20 (Close)
```
"REZ becomes stronger as merchant density increases."
"This is NOT linear growth. This is COMPOUNDING DENSITY."
"We raise ₹2 Cr to prove the density model in Bangalore, then replicate."

Not building an app. Building the behavioral graph of local commerce.

investors@rez.money | rez.money | Bangalore, India
```

### Local Next.js — Slide 14 (Ask)
```
The Ask — "What we need to prove product-market fit"

₹2 Cr  Pre-Seed Round

Use of Funds:
  Product (v1 features)         ₹50L
  Sales (field team)            ₹60L
  Operations (city launch)      ₹40L
  Tech infrastructure           ₹30L
  Legal/compliance              ₹20L

6-Month Milestones:
  ✓ MVP complete
  ✓ 100 merchants activated
  ✓ 500 merchants (scale playbook)
  ✓ 5,000 orders/month
  ✓ 10% customer repeat rate

Key Metric: Merchant activations (QR printed, first order)
```

**🔍 Verdict:** Different milestones (upstream: 18 months, 2,000 merchants, 40% repeat; local: 6 months, 500 merchants, 10% repeat). Different use-of-funds splits. Both internally coherent but **completely incompatible** with each other.

---

## 📄 Section 16 — FAQ

### Upstream — faq.html (30+ Q&A across 8 categories)

| Category | Sample Questions |
|----------|------------------|
| The Problem | Why do SMBs fail in India? Why don't aggregators solve this? Why haven't loyalty programs worked? Why is now the right time? |
| Product & Moat | What exactly are you building? What's your moat? Why can't Google copy this? Is this just another loyalty app? How does merchant onboarding work? |
| Business Model | How does REZ make money? Why will merchants pay 5%? What are your unit economics? When do you become profitable? |
| Market & Competition | How big is the market? Who are your competitors? What if Swiggy/Zomato copies this? |
| Traction & Metrics | What do you have today? What milestones does this round fund? How do you measure success? |
| Team & Advisors | Why is the founder qualified? Who else is on the team? |
| Fundraising & Use of Funds | Why pre-seed? Why not bootstrap? How will you use the ₹2 Cr? What's your SAFE structure? What's your next round? |
| Risks & Challenges | What are your biggest risks? What keeps you up at night? |

### Local Next.js — Slide 16 (FAQ, 8 questions)
1. Why not build a consumer app like Zomato?
2. How do you prevent merchant churn?
3. Why 2% fee instead of free like DotPe?
4. What if Zomato or Swiggy copies this?
5. What's your moat?
6. Why start in Lucknow, not Mumbai or Delhi?
7. How do you handle payment failures?
8. What's your regulatory risk?

**🔍 Verdict:** Upstream has **30+ questions** organized by category. Local has **8 questions**. For due diligence, upstream is **5x more thorough.**

---

## 📄 Section 17 — Vision / Roadmap

### Upstream — Slide 14
```
The Goal

Y1: ▓           ₹11 Cr    (5 cities)
Y2: ▓▓▓▓▓▓      ₹55 Cr    (32 cities)
Y3: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ₹200 Cr   (120 cities)

Year  Cities  Merchants   ARR
Y1    5       2,000       ₹11 Cr
Y2    32      10,000      ₹55 Cr
Y3    120     40,000      ₹200 Cr

Compounding density. Exponential growth.
```

### Local Next.js — Slide 15 (Vision)
```
The Vision — "Conservative roadmap based on SAM calculation"

Y1: Lucknow → 2,000 merchants (₹2 Cr GMV · ₹48 Lakh ARR)
Y2: UP Expansion (10 cities) → 10,000 merchants (₹30 Cr GMV · ₹12 Cr ARR)
Y5: North India → 50,000 merchants (₹180 Cr GMV · ₹50 Cr ARR)

Year 5 Revenue Breakdown:
  ₹32 Cr  Transaction Fees (₹180 Cr GMV × 2%)
  ₹12 Cr  SaaS (₹199 avg, 30,000 paying merchants)
  ₹6 Cr   Premium Tier (₹1,000/mo × 5K)
  ─────
  ₹50 Cr  ARR

Beyond: The Platform
  Financial Products (working capital loans)
  Inventory Management (smart restocking)
  Ad Targeting (SMB intelligence layer)
```

**🔍 Verdict:** Different geographies (Bangalore-cities vs Lucknow-North India), different ARR numbers (₹200 Cr Y3 vs ₹50 Cr Y5), different number of cities (120 vs ~50). **Impossible to reconcile without picking one canonical story.**

---

## 📄 Section 18 — Financial Model Appendix

### Upstream — inline in data-room.html
```
Year 1    Year 2    Year 3
Users        35,000    1.5M      5M
Merchants    500+      12,000    40,000
Cities       32        120       300
Revenue      ₹10 Cr    ₹153 Cr   ₹601 Cr
Net Margin   6%        -48%      34.5%
Valuation    $24M      $185M     $725M

(Note: these numbers are LARGER than the one-pager figures of
₹11/55/200 Cr — data-room.html has its own more aggressive projections.)
```

### Local Next.js — `FINANCIAL-MODEL.md` (379 lines, very thorough)
```
Executive Summary
| Metric      | Y1   | Y2   | Y3   | Y4    | Y5    |
| Merchants   | 2K   | 10K  | 30K  | 50K   | 50K   |
| GMV (Cr)    | ₹2   | ₹30  | ₹100 | ₹160  | ₹180  |
| Revenue(Cr) | ₹0.5 | ₹7   | ₹23  | ₹37   | ₹50   |
| ARR (Cr)    | ₹0.5 | ₹7   | ₹23  | ₹37   | ₹50   |
| Burn (Cr)   | ₹3   | ₹6   | ₹8   | ₹6    | ₹4    |
| Runway      | 18mo | 24mo | 36mo | Prof  | Prof  |

1. Merchant Acquisition Model (CAC ₹6,150 — different from deck!)
2. Revenue Model (3 streams: txn fees, SaaS, premium)
3. P&L Model (Year 1: ₹31.6L EBITDA, 21.3% margin)
4. Unit Economics Deep Dive
   - Year 1: LTV/CAC = 0.74x (UNPROFITABLE per merchant)
   - Year 3: LTV/CAC = 5.95x (profitable)
5. Cash Flow Model (3 rounds: ₹2Cr → ₹10Cr → ₹50Cr)
6. Key Assumptions (Conservative / Optimistic / Pessimistic)
7. Sensitivity Analysis
8. Path to Profitability (Month 18 cash break-even, M36 EBITDA+)
9. Financial Risks & Mitigations
10. Use of Funds (matches slide 14: ₹50L/₹60L/₹40L/₹30L/₹20L)
11. Industry Benchmarks (SMB SaaS, UPI, etc.)
```

**🔍 Verdict:** Local's `FINANCIAL-MODEL.md` is **far more rigorous and detailed** than anything in upstream. The sensitivity analysis and 3 scenarios (Conservative/Optimistic/Pessimistic) are exactly what VCs ask for. **Local wins decisively on this section — and the upstream should adopt this appendix.**

---

## 📄 Section 19 — Market Sizing Methodology

### Local Next.js — `MARKET-SIZING-GUIDE.md` (339 lines, unique asset)
```
How to Do Market Sizing (Like Airbnb, Stripe, Uber)

1. What VCs Actually Want to See (TAM/SAM/SOM with meanings)
2. The Famous Airbnb Market Sizing ($600B TAM / $30B SAM / $10M SOM)
3. The Stripe Market Sizing ($1.5T TAM / $150B SAM / $2B SOM)
4. How to Calculate For REZ (4-step methodology)
5. Format 1: Funnel (most common)
6. Format 2: Stacked Bar
7. Format 3: Table (YC preferred)
8. What NOT to Do (inflated numbers, no methodology, confusing SAM/TAM)
9. What TO Do (show your math, cite sources, conservative assumptions)
10. Updated Market Slide for REZ
11. Pro Tip: The 5-Second Rule
12. Source Links (NRAI, NASSCOM, RBI, etc.)
13. Summary table (Old # vs New #)
```

**🔍 Verdict:** This is a **one-of-a-kind asset** that explains the methodology behind the market numbers using real-world examples (Airbnb, Stripe). No investor deck I've ever seen has this kind of "here's how we thought about this" appendix. **Local wins uniquely on this — keep it, even if you rewrite the main deck.**

---

## 📄 Section 20 — Other Unique Upstream Content

### `marketing.html` (685 lines)
- 12-month launch plan for Bangalore
- 12 acquisition channels with CAC estimates
- College ambassador program
- WhatsApp viral loops
- ₹10M budget breakdown

### `data-room.html` (681 lines)
- Complete data-room structure
- Investment Terms section
- Legal Documents (iSAFE, SAFE Terms)
- Acquisition Strategy (12 channels)
- Org Structure (Hiring Plan)
- Market & Competitive Analysis

### `video-script.html` (466 lines)
- 60-second pitch script
- 90-second pitch script
- 3-minute pitch script
- Ready to copy and record

### `subscription.html` (497 lines)
- ReZ Ecosystem Membership tiers
- ₹99 / ₹199 / ₹399 monthly consumer tiers
- 15+ services included
- Coin earnings mechanics
- Partner discounts

**🔍 Verdict:** Upstream has **5 unique content assets** that the local version completely lacks. If you're sending investor materials to someone, you need these.

---

## 🚨 THE CORE INCOMPATIBILITY SUMMARY

| Metric | Upstream (canonical) | Local Next.js | What to do |
|--------|---------------------|---------------|------------|
| **Geography** | Bangalore | Lucknow | **Pick Bangalore** (matches live site + beta data) |
| **TAM** | ₹42 Lakh Cr | ₹10,000 Cr | **Pick upstream's ₹42L Cr** OR **recalculate conservatively** (the upstream number is almost certainly wrong — ₹42 Lakh Cr is more than India's GDP) |
| **Fee model** | 5% core + 2% promoted | 2% flat | **Pick upstream's tiered model** (5% to aggregator is the real comparison) |
| **SaaS price** | ₹299-₹2,999/mo | ₹199 + ₹999 | **Pick upstream's range** |
| **Year 3 ARR** | ₹200 Cr | ₹23 Cr | **Pick upstream** (₹23 Cr is too small for a Series A pitch) |
| **CAC** | ₹76 (FAQ) | ₹3,555 / ₹6,150 / ₹800 (3 different numbers in local!) | **Pick one and stick with it** |
| **Beta traction** | 10/200/28%/+62 | "What's built" feature list | **Pick upstream** (real numbers > architectural brag) |
| **Team** | Founder + TBD | Founder + 2 placeholders | **REMOVE placeholders from local** |
| **Cluster economics** | Yes (with timeline) | None | **Add a cluster economics slide to local** (upstream wins on this) |
| **Financial appendix** | Inline (less detailed) | Full P&L + sensitivity | **Use local's `.md` files as the data-room appendix** |
| **Market methodology** | None | Detailed (with Airbnb/Stripe examples) | **Keep the local `.md` file as an annex** |

---

## ✅ RECOMMENDED PATH FORWARD

**Treat the upstream (GitHub canonical) as the source of truth for:**
- Geography (Bangalore)
- Fee model (5% core + 2% promoted)
- Beta traction metrics
- Team honesty (founder + TBD)
- Cluster economics
- 30+ FAQ
- All the ancillary docs (marketing, video scripts, subscription, data-room)

**Take the local Next.js and:**
1. **Sync all upstream numbers into the local deck** (Bangalore, 5% fee, ₹200 Cr Y3 ARR)
2. **Replace team placeholders** with real names OR remove them
3. **Port upstream's 9-document structure** into the Next.js app as routes (`/one-pager`, `/deck`, `/vision`, `/faq`, etc.)
4. **Keep `FINANCIAL-MODEL.md`** as the financial appendix in the data-room
5. **Keep `MARKET-SIZING-GUIDE.md`** as a methodology annex
6. **Add a cluster-economics slide** to the deck (currently missing)
7. **Pick ONE CAC number** (recommend ₹76 from upstream FAQ) and use it everywhere
8. **Standardize "REZ" casing** (not "ReZ")
9. **Init git** in the local folder: `cd rezdeck && git init && git remote add origin git@github.com:imrejaul007/rez-deck.git`

The result will be a deck that has:
- Upstream's content depth + investor materials (9 docs)
- Local's visual polish + financial rigor (.md appendices)
- Internal consistency (one canonical number per metric)
- Real-world credibility (Bangalore beta data, not placeholders)
