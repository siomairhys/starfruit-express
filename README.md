# Starfruit Express — Redesign Concept

An independent redesign concept built as a hiring design challenge.
Not affiliated with Starfruit Express. All sample dashboard values,
ETAs, prices, and savings shown in this concept are **illustrative only**.

## Reference

- Official website: https://www.starfruitexpress.com/
- About: https://www.starfruitexpress.com/about
- Contact: https://www.starfruitexpress.com/contact
- Blog: https://www.starfruitexpress.com/blog

A full reference audit lives at
[`documentation/STARFRUIT_REFERENCE_AUDIT.md`](./documentation/STARFRUIT_REFERENCE_AUDIT.md).

## Five sections redesigned

1. **Homepage hero** — editorial headline + a live-feeling operations card.
2. **Traditional vs. Starfruit** — fragmented workflow vs. one coordinated system.
3. **Purchasing intelligence** — interactive supplier comparison dashboard concept.
4. **Cold-chain fulfillment** — animated five-stage delivery timeline with telemetry.
5. **Savings assessment** — three-step assessment with a polished client-side form.

A design rationale section on the page itself documents what was
preserved, the opportunity identified, the design decision, and the
intended improvement for each section.

## Preserved brand elements

- The starfruit citrus mark and the forest + cream + citrus palette.
- "Time is Money. We Save You Both." positioning.
- "We only get paid when you profit." promise tone.
- Restaurant-operator audience, Florida service region.
- Verified contact details: (786) 305-7470 · fresh@starfruitexpress.com.

## Stack

Built on TanStack Start (React 19) with Tailwind v4, Framer Motion, and
Lucide icons. The page is fully responsive across 1440 / 1280 / 1024 /
768 / 390 widths and supports `prefers-reduced-motion` through Framer
Motion defaults.

## Local development

```bash
bun install   # or: npm install
bun dev       # or: npm run dev
bun run build # or: npm run build
```

## Disclaimers

- This project is an independent redesign concept built for a design
  challenge.
- It is not an official Starfruit Express production website.
- All sample operational data shown (orders, savings, ETAs,
  temperatures, supplier prices) is illustrative.
- Submitting the assessment form does **not** send any information to
  Starfruit Express — it is a concept interaction only.
