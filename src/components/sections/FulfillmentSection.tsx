import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Package, Thermometer, Truck, MapPin, ClipboardCheck, Snowflake } from "lucide-react";
import { SectionHeading } from "./WhySection";
import coldImg from "@/assets/cold-chain.jpg";

const stages = [
  {
    icon: ClipboardCheck,
    title: "Supplier confirmed",
    time: "06:14 AM",
    note: "Sunbelt Farms · Homestead, FL",
  },
  {
    icon: Package,
    title: "Product collected",
    time: "07:42 AM",
    note: "12 cs heirloom tomato · pre-cooled",
  },
  {
    icon: Snowflake,
    title: "Temperature verified",
    time: "07:48 AM",
    note: "Box sealed at 35.8°F",
  },
  { icon: Truck, title: "In transit", time: "08:20 AM", note: "I-95 N · driver Marcus R." },
  {
    icon: MapPin,
    title: "Restaurant delivered",
    time: "ETA 11:42 AM",
    note: "Olive & Pine Bistro · Coral Gables",
  },
];

export function FulfillmentSection() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((a) => (a >= stages.length - 1 ? 2 : a + 1));
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="fulfillment"
      className="relative py-20 lg:py-28 bg-forest-deep text-cream overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-citrus/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeading
          invert
          eyebrow="Part 03 · Cold-Chain Fulfillment"
          title={
            <>
              Cold-chain delivery you can{" "}
              <em className="font-500 not-italic text-citrus">follow,</em> not simply hope for.
            </>
          }
          lede="Temperature-controlled vehicles, monitored from supplier dock to back-of-house. Every shipment carries its own telemetry — so the kitchen always knows what’s coming, when, and at what temperature."
        />

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
          {/* Tracking card */}
          <div className="ui-responsive-surface rounded-3xl border border-cream/10 bg-cream/[0.04] backdrop-blur-sm p-5 md:p-7">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
              <div className="min-w-0">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cream/60">
                  Shipment SF-4821
                </p>
                <p className="mt-0.5 font-display text-xl font-700 truncate">Olive & Pine Bistro</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-bright/15 px-3 py-1 text-xs font-semibold text-leaf-bright shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf-bright animate-pulse" />
                Live
              </span>
            </div>

            {/* Telemetry */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              <Telemetry icon={Thermometer} label="Box temp" value="36.2°F" tone="cool" />
              <Telemetry icon={Truck} label="ETA" value="11:42 AM" />
              <Telemetry icon={MapPin} label="Distance" value="14.2 mi" />
            </div>

            {/* Desktop horizontal timeline */}
            <div className="mt-7 hidden md:block">
              <div className="relative">
                <div className="absolute top-5 left-5 right-5 h-0.5 bg-cream/10" />
                <motion.div
                  className="absolute top-5 left-5 h-0.5 bg-gradient-to-r from-leaf-bright to-citrus"
                  initial={false}
                  animate={{ width: `calc(${(active / (stages.length - 1)) * 100}% - 1.25rem)` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="relative grid grid-cols-5 gap-3">
                  {stages.map((s, i) => (
                    <StageNode
                      key={s.title}
                      stage={s}
                      done={i <= active}
                      current={i === active}
                      onSelect={() => setActive(i)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <ol className="md:hidden mt-6 relative pl-8 space-y-5">
              <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-cream/10" />
              <motion.div
                className="absolute left-3.5 top-2 w-0.5 bg-gradient-to-b from-leaf-bright to-citrus"
                animate={{ height: `${(active / (stages.length - 1)) * 100}%` }}
                transition={{ duration: 0.8 }}
              />
              {stages.map((s, i) => {
                const done = i <= active;
                const cur = i === active;
                return (
                  <li key={s.title} className="relative">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="ui-responsive-action ui-responsive-row relative -m-2 block w-full rounded-2xl p-2 text-left"
                    >
                      <div
                        className={`absolute -left-8 top-2.5 grid h-7 w-7 place-items-center rounded-full border ${done ? "border-leaf-bright bg-leaf-bright/15" : "border-cream/15 bg-forest"}`}
                      >
                        <s.icon
                          className={`h-3.5 w-3.5 ${done ? "text-leaf-bright" : "text-cream/40"}`}
                        />
                      </div>
                      <p
                        className={`text-sm font-semibold ${cur ? "text-citrus" : done ? "text-cream" : "text-cream/50"}`}
                      >
                        {s.title}
                      </p>
                      <p className="text-xs text-cream/60 mt-0.5">
                        {s.time} - {s.note}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-cream/10 pt-5">
              <Mini label="Driver" value="Marcus R." />
              <Mini label="Vehicle" value="Reefer · #R-12" />
              <Mini label="Origin" value="Homestead, FL" />
              <Mini label="Proof of delivery" value="Photo + signature" />
            </div>
            <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-wider text-cream/40 text-center">
              Illustrative concept data
            </p>
          </div>

          {/* Photo card */}
          <div className="space-y-4">
            <div className="ui-responsive-surface relative aspect-[5/4] rounded-3xl overflow-hidden border border-cream/10">
              <img
                src={coldImg}
                alt="Refrigerated truck loading produce at supplier dock"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width={1400}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-deep/80 backdrop-blur px-3 py-1.5 text-xs font-medium">
                  <Snowflake className="h-3.5 w-3.5 text-leaf-bright" /> Reefer fleet · Florida
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-cream/70">
                  35–38°F maintained
                </span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Feature
                title="Pre-cooled at origin"
                copy="Trucks meet temperature before loading — no thermal shock to product."
              />
              <Feature
                title="One operations contact"
                copy="Same team handles purchasing escalations and delivery questions."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Telemetry({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  tone?: "cool";
}) {
  return (
    <div
      className={`ui-responsive-surface rounded-2xl border p-3 ${tone === "cool" ? "border-leaf-bright/25 bg-leaf-bright/8" : "border-cream/10 bg-cream/[0.04]"}`}
    >
      <div className="flex items-center gap-1.5 text-[0.58rem] font-mono uppercase tracking-wider text-cream/60">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <p className="mt-1 font-display text-lg font-700">{value}</p>
    </div>
  );
}

function StageNode({
  stage,
  done,
  current,
  onSelect,
}: {
  stage: (typeof stages)[number];
  done: boolean;
  current: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="ui-responsive-action group flex flex-col items-center rounded-2xl px-2 py-1 text-center"
    >
      <div
        className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 transition-colors group-hover:scale-105 ${done ? "border-leaf-bright bg-forest-deep" : "border-cream/15 bg-forest"} ${current ? "ring-4 ring-citrus/30" : ""}`}
      >
        <stage.icon className={`h-4 w-4 ${done ? "text-leaf-bright" : "text-cream/40"}`} />
      </div>
      <p
        className={`mt-3 text-[0.78rem] font-semibold ${current ? "text-citrus" : done ? "text-cream" : "text-cream/50"}`}
      >
        {stage.title}
      </p>
      <p className="mt-0.5 text-[0.65rem] text-cream/55">{stage.time}</p>
      <p className="mt-0.5 text-[0.65rem] text-cream/40 line-clamp-2">{stage.note}</p>
    </button>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="ui-responsive-row rounded-xl p-1 -m-1">
      <p className="font-mono text-[0.58rem] uppercase tracking-wider text-cream/50">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-cream">{value}</p>
    </div>
  );
}

function Feature({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="ui-responsive-surface rounded-2xl border border-cream/10 bg-cream/[0.04] p-4">
      <p className="font-display text-base font-700 text-cream">{title}</p>
      <p className="mt-1 text-sm text-cream/65 leading-relaxed">{copy}</p>
    </div>
  );
}
