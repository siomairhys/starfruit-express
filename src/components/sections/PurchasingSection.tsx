import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  TrendingDown,
  TrendingUp,
  ChevronDown,
  Filter,
  Sparkles,
  Building2,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "./WhySection";

const products = [
  {
    sku: "PRD-118",
    name: "Heirloom Tomato · Case (25 lb)",
    current: { vendor: "Coastal Produce Co.", price: 38.4 },
    alt: { vendor: "Sunbelt Farms", price: 31.95 },
    history: [42, 41.2, 40, 39.5, 39.1, 38.8, 38.4],
    rebate: "Active",
    qty: 12,
  },
  {
    sku: "PRD-204",
    name: "Extra-Virgin Olive Oil · 3L Tin",
    current: { vendor: "Coastal Produce Co.", price: 64.0 },
    alt: { vendor: "Mediterra Wholesale", price: 58.2 },
    history: [62, 62.5, 63, 63.4, 63.6, 63.9, 64],
    rebate: "Eligible",
    qty: 6,
  },
  {
    sku: "PRD-312",
    name: "Atlantic Salmon · 10 lb portion",
    current: { vendor: "Blue Water Seafood", price: 142.5 },
    alt: { vendor: "Harbor Direct", price: 138.9 },
    history: [136, 137, 138, 139, 140, 141.5, 142.5],
    rebate: "Pending",
    qty: 4,
  },
];

export function PurchasingSection() {
  const [selected, setSelected] = useState(0);
  const item = products[selected];
  const delta = useMemo(() => item.current.price - item.alt.price, [item]);
  const weekly = useMemo(() => (delta * item.qty * 4).toFixed(0), [delta, item.qty]);

  return (
    <section id="purchasing" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Part 02 · Purchasing Intelligence"
            title={
              <>
                See every dollar — <span className="italic font-500">before</span> it leaves the
                kitchen.
              </>
            }
            lede="Starfruit watches your invoices across vendors, surfaces better-priced equivalents, and never lets a rebate slip through the cracks. This is a hands-on concept of how that would feel inside the product."
          />
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-cream/70 px-3 py-1.5 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-forest">
            <Sparkles className="h-3 w-3 text-citrus-deep" /> Order management · product concept
          </div>
        </div>

        {/* Dashboard */}
        <div className="ui-responsive-surface mt-12 rounded-[28px] border border-forest-deep/10 bg-cream shadow-2xl shadow-forest-deep/10 overflow-hidden">
          {/* dashboard header */}
          <div className="border-b border-line bg-cream-warm/40 px-5 md:px-7 py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-deep text-cream">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-soft">
                  Location
                </p>
                <p className="truncate font-display text-lg font-700 text-forest-deep">
                  Olive & Pine Bistro · Coral Gables
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Chip icon={Filter} label="All categories" />
              <Chip icon={Calendar} label="Last 30 days" />
              <Chip icon={Building2} label="All suppliers" />
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line">
            <Kpi label="Identified savings · MTD" value="$3,840" trend="+18%" positive />
            <Kpi label="Rebates eligible" value="$612" trend="3 active" />
            <Kpi label="Suppliers compared" value="14" trend="across 96 SKUs" />
            <Kpi label="Avg on-time delivery" value="98.2%" trend="+1.4 pts" positive />
          </div>

          {/* Body */}
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            {/* List */}
            <div className="border-b lg:border-b-0 lg:border-r border-line">
              <div className="px-5 md:px-7 py-4 flex items-center justify-between border-b border-line">
                <h3 className="font-display text-base font-700 text-forest-deep">
                  Purchasing opportunities
                </h3>
                <span className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-soft">
                  {products.length} flagged
                </span>
              </div>
              <ul>
                {products.map((p, i) => {
                  const d = p.current.price - p.alt.price;
                  const pct = ((d / p.current.price) * 100).toFixed(1);
                  const active = i === selected;
                  return (
                    <li key={p.sku}>
                      <button
                        onClick={() => setSelected(i)}
                        className={`ui-responsive-action ui-responsive-row w-full text-left px-5 md:px-7 py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-line/70 last:border-b-0 transition-colors ${
                          active ? "bg-citrus/10" : "hover:bg-cream-warm/40"
                        }`}
                      >
                        <div className="min-w-0">
                          <p className="font-mono text-[0.58rem] uppercase tracking-wider text-ink-soft">
                            {p.sku}
                          </p>
                          <p className="mt-0.5 font-semibold text-forest-deep truncate">{p.name}</p>
                          <p className="mt-1 text-xs text-ink-soft truncate">
                            Now via{" "}
                            <span className="text-forest-deep font-medium">{p.current.vendor}</span>{" "}
                            · {p.qty} cs/wk
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="inline-flex items-center gap-1 font-display text-lg font-700 text-leaf">
                            <TrendingDown className="h-4 w-4" /> {pct}%
                          </div>
                          <p className="text-[0.65rem] font-mono uppercase tracking-wider text-ink-soft mt-0.5">
                            save ${d.toFixed(2)}/cs
                          </p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Detail */}
            <motion.div
              key={item.sku}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-5 md:p-7 bg-gradient-to-br from-cream to-cream-warm/50"
            >
              <p className="font-mono text-[0.6rem] uppercase tracking-wider text-citrus-deep">
                Supplier comparison
              </p>
              <h4 className="mt-1 font-display text-xl font-700 text-forest-deep">{item.name}</h4>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <VendorCard
                  kind="current"
                  vendor={item.current.vendor}
                  price={item.current.price}
                />
                <VendorCard kind="alt" vendor={item.alt.vendor} price={item.alt.price} />
              </div>

              <div className="ui-responsive-surface mt-5 rounded-2xl border border-line bg-cream p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-mono uppercase tracking-wider text-ink-soft">
                    7-week price trend · current vendor
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-destructive">
                    <TrendingUp className="h-3 w-3" /> +3.1%
                  </span>
                </div>
                <Sparkline points={item.history} />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="ui-responsive-surface rounded-2xl border border-citrus-deep/30 bg-citrus/10 p-4">
                  <p className="font-mono text-[0.6rem] uppercase tracking-wider text-citrus-deep">
                    Estimated opportunity
                  </p>
                  <p className="mt-1 font-display text-2xl font-700 text-citrus-deep">${weekly}</p>
                  <p className="text-xs text-ink-soft mt-0.5">over the next 4 weeks</p>
                </div>
                <div className="ui-responsive-surface rounded-2xl border border-line bg-cream p-4">
                  <p className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-soft">
                    Rebate status
                  </p>
                  <p className="mt-1 font-display text-2xl font-700 text-forest-deep">
                    {item.rebate}
                  </p>
                  <p className="text-xs text-ink-soft mt-0.5">tracked automatically</p>
                </div>
              </div>

              <button className="ui-responsive-action mt-5 w-full rounded-2xl bg-forest-deep px-5 py-3.5 text-sm font-semibold text-cream hover:bg-forest transition-colors">
                Review opportunity →
              </button>
              <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-wider text-ink-soft/70 text-center">
                Illustrative concept data
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button className="ui-responsive-action inline-flex items-center gap-1.5 rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-medium text-forest-deep hover:border-forest-deep/30 transition-colors">
      <Icon className="h-3.5 w-3.5" /> {label} <ChevronDown className="h-3 w-3 text-ink-soft" />
    </button>
  );
}

function Kpi({
  label,
  value,
  trend,
  positive,
}: {
  label: string;
  value: string;
  trend: string;
  positive?: boolean;
}) {
  return (
    <div className="ui-responsive-surface bg-cream p-5">
      <p className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-soft">{label}</p>
      <p className="mt-1.5 font-display text-2xl font-700 text-forest-deep">{value}</p>
      <p className={`mt-1 text-xs font-medium ${positive ? "text-leaf" : "text-ink-soft"}`}>
        {trend}
      </p>
    </div>
  );
}

function VendorCard({
  kind,
  vendor,
  price,
}: {
  kind: "current" | "alt";
  vendor: string;
  price: number;
}) {
  const isAlt = kind === "alt";
  return (
    <div
      className={`ui-responsive-surface rounded-2xl border p-4 ${
        isAlt ? "border-leaf/30 bg-leaf/8" : "border-line bg-cream"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${isAlt ? "bg-leaf" : "bg-ink-soft"}`} />
        <p className="font-mono text-[0.58rem] uppercase tracking-wider text-ink-soft">
          {isAlt ? "Better option" : "Current supplier"}
        </p>
      </div>
      <p className="mt-1 text-sm font-semibold text-forest-deep truncate">{vendor}</p>
      <p
        className={`mt-2 font-display text-2xl font-700 ${isAlt ? "text-leaf" : "text-forest-deep"}`}
      >
        ${price.toFixed(2)}
        <span className="text-xs font-sans font-medium text-ink-soft ml-1">/cs</span>
      </p>
    </div>
  );
}

function Sparkline({ points }: { points: number[] }) {
  const w = 280;
  const h = 60;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${i * step},${h - ((p - min) / range) * (h - 8) - 4}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mt-2 w-full h-14"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.68 0.17 55)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="oklch(0.68 0.17 55)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L${w},${h} L0,${h} Z`} fill="url(#sparkfill)" />
      <path
        d={path}
        fill="none"
        stroke="oklch(0.68 0.17 55)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map((p, i) => (
        <circle
          key={i}
          cx={i * step}
          cy={h - ((p - min) / range) * (h - 8) - 4}
          r={i === points.length - 1 ? 3.5 : 2}
          fill="oklch(0.68 0.17 55)"
        />
      ))}
    </svg>
  );
}
