import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Thermometer, Truck, CircleCheck, TrendingDown } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";

export function HeroSection() {
  return (
    <section
      id="overview"
      className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden grain-bg"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 items-center">
          {/* Left: editorial */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-forest-deep/15 bg-cream/60 px-3 py-1.5 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-forest">
              <Sparkles className="h-3 w-3 text-citrus-deep" />
              Purchasing Intelligence + Cold-Chain Fulfillment
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.6rem)] font-600 leading-[1.02] text-forest-deep text-balance">
              Restaurant operations, <span className="italic font-500 text-forest">finally</span>{" "}
              <span className="citrus-underline">under control.</span>
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-ink-soft text-pretty">
              Starfruit helps Florida restaurant operators compare suppliers, uncover better
              purchasing opportunities, and coordinate temperature-controlled fulfillment — all
              through one calmer operating experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#assessment"
                className="ui-responsive-action group inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3.5 text-[0.95rem] font-semibold text-cream shadow-lg shadow-forest-deep/15 transition-all hover:shadow-xl hover:shadow-forest-deep/25"
              >
                See Your Potential Savings
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#why"
                className="ui-responsive-action inline-flex items-center gap-2 rounded-full border border-forest-deep/20 bg-cream/40 px-6 py-3.5 text-[0.95rem] font-semibold text-forest-deep transition-colors hover:bg-cream"
              >
                Explore How It Works
              </a>
            </div>

            {/* trust strip */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-line pt-6">
              {[
                {
                  icon: TrendingDown,
                  t: "Supplier & price visibility",
                  s: "Compare what you’re paying — across vendors.",
                },
                {
                  icon: Thermometer,
                  t: "Temperature-controlled fleet",
                  s: "Refrigerated trucks, monitored end-to-end.",
                },
                {
                  icon: CircleCheck,
                  t: "Restaurant-first ops",
                  s: "Built around how operators actually work.",
                },
              ].map(({ icon: Icon, t, s }) => (
                <div key={t} className="ui-responsive-row rounded-2xl p-2 -m-2 flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-citrus-deep" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-forest-deep">{t}</p>
                    <p className="text-xs text-ink-soft mt-0.5">{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: operations card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="ui-responsive-surface relative aspect-[5/6] rounded-[28px] overflow-hidden border border-forest-deep/10 shadow-2xl shadow-forest-deep/15">
              <img
                src={heroImg}
                alt="Restaurant kitchen at golden hour"
                className="absolute inset-0 h-full w-full object-cover"
                width={1600}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-transparent" />

              {/* Floating ops card */}
              <div className="ui-responsive-surface absolute left-4 right-4 bottom-4 md:left-5 md:right-5 md:bottom-5 rounded-2xl bg-cream/95 backdrop-blur-md p-4 md:p-5 shadow-xl border border-cream-warm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-forest-soft">
                    Order #SF-4821 · Olive & Pine Bistro
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-leaf/15 px-2 py-0.5 text-[0.65rem] font-semibold text-leaf">
                    <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-pulse" />
                    On route
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Stat icon={Truck} label="ETA" value="11:42 AM" />
                  <Stat icon={Thermometer} label="Box temp" value="36.4°F" tint />
                  <Stat icon={TrendingDown} label="Opportunity" value="$184 / wk" highlight />
                  <Stat icon={CircleCheck} label="Rebate" value="Active" />
                </div>
                <div className="mt-3 h-1 w-full rounded-full bg-line overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "72%" }}
                    transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-citrus to-leaf-bright"
                  />
                </div>
                <p className="mt-2 text-[0.65rem] font-mono uppercase tracking-wider text-ink-soft/70">
                  Illustrative concept data
                </p>
              </div>
            </div>

            {/* citrus orb */}
            <div className="pointer-events-none absolute -top-6 -right-4 h-24 w-24 rounded-full bg-citrus/30 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-4 h-32 w-32 rounded-full bg-leaf/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  tint,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  tint?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`ui-responsive-surface rounded-xl border p-2.5 ${
        highlight
          ? "border-citrus-deep/30 bg-citrus/10"
          : tint
            ? "border-leaf/20 bg-leaf/5"
            : "border-line bg-cream-warm/40"
      }`}
    >
      <div className="flex items-center gap-1.5 text-[0.6rem] font-mono uppercase tracking-wider text-ink-soft">
        <Icon className="h-3 w-3" />
        {label}
      </div>
      <div
        className={`mt-1 font-display text-base font-700 ${highlight ? "text-citrus-deep" : "text-forest-deep"}`}
      >
        {value}
      </div>
    </div>
  );
}
