import { motion } from "framer-motion";
import {
  Phone,
  FileSpreadsheet,
  MessageSquareWarning,
  Clock,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  RefreshCw,
} from "lucide-react";

const fragmented = [
  { icon: Phone, label: "Call 4 reps before 11am", tone: "" },
  { icon: MessageSquareWarning, label: "Sub approved by SMS", tone: "" },
  { icon: FileSpreadsheet, label: "orders_2024.xlsx", tone: "" },
  { icon: Clock, label: "Hope it arrives cold", tone: "" },
];

const coordinated = [
  { icon: BarChart3, label: "Suppliers compared automatically" },
  { icon: RefreshCw, label: "Substitutions priced in real time" },
  { icon: CheckCircle2, label: "Rebates tracked, never missed" },
  { icon: Clock, label: "Delivery + temperature monitored" },
];

export function WhySection() {
  return (
    <section id="why" className="relative py-20 lg:py-28 bg-cream-warm/60">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeading
          eyebrow="Part 01 · The Operational Friction"
          title={
            <>
              From supplier <em className="font-500 not-italic citrus-underline">complexity</em>
              <br className="hidden md:block" /> to one coordinated system.
            </>
          }
          lede="A typical Tuesday is held together by texts, phone calls, and a spreadsheet only one person understands. Starfruit replaces the scramble with a single operating layer — without taking the human out of the kitchen."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Fragmented */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="ui-responsive-surface relative rounded-3xl border border-line bg-cream p-6 md:p-8"
          >
            <Tag color="muted">Today · fragmented workflow</Tag>
            <h3 className="mt-4 font-display text-2xl md:text-[1.7rem] font-600 text-forest-deep">
              Four vendors. Three apps.{" "}
              <span className="text-ink-soft">One overwhelmed operator.</span>
            </h3>
            <div className="mt-6 space-y-3">
              {fragmented.map((f, i) => (
                <FragRow key={f.label} item={f} index={i} />
              ))}
            </div>
            <div className="ui-responsive-row mt-6 flex items-center gap-3 rounded-2xl bg-destructive/8 border border-destructive/15 px-4 py-3">
              <div className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
              <p className="text-sm text-destructive font-medium">
                Missed credit · invoice mismatch on shipment 8821
              </p>
            </div>
          </motion.div>

          {/* Coordinated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="ui-responsive-surface relative rounded-3xl border border-forest-deep/15 bg-forest-deep text-cream p-6 md:p-8 overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-citrus/15 blur-3xl" />
            <Tag color="accent">With Starfruit · one operating layer</Tag>
            <h3 className="mt-4 font-display text-2xl md:text-[1.7rem] font-600">
              Suppliers, deliveries, and dollars —{" "}
              <span className="text-citrus">on one screen.</span>
            </h3>
            <div className="mt-6 space-y-3">
              {coordinated.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 4 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                  className="ui-responsive-row flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/[0.04] px-4 py-3"
                >
                  <c.icon className="h-4 w-4 text-leaf-bright shrink-0" />
                  <span className="text-sm font-medium">{c.label}</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 text-cream/40" />
                </motion.div>
              ))}
            </div>
            <div className="ui-responsive-surface mt-6 grid grid-cols-3 gap-2 rounded-2xl border border-cream/10 bg-cream/[0.04] p-3">
              <Mini label="Saved this wk" value="$614" />
              <Mini label="On-time" value="98%" />
              <Mini label="Box temp avg" value="36.1°F" />
            </div>
            <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-wider text-cream/50">
              Illustrative concept data
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FragRow({
  item,
  index,
}: {
  item: { icon: React.ComponentType<{ className?: string }>; label: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 8 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 4 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="ui-responsive-row grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-line bg-cream-warm/50 px-4 py-3"
    >
      <item.icon className="h-4 w-4 text-forest" />
      <span className="text-sm font-medium text-forest-deep truncate">{item.label}</span>
      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-soft/70">
        manual
      </span>
    </motion.div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-lg font-700 text-citrus">{value}</div>
      <div className="font-mono text-[0.55rem] uppercase tracking-wider text-cream/60">{label}</div>
    </div>
  );
}

function Tag({ children, color }: { children: React.ReactNode; color: "muted" | "accent" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.18em] ${
        color === "muted" ? "bg-forest-deep/8 text-forest" : "bg-citrus/15 text-citrus"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${color === "muted" ? "bg-forest-soft" : "bg-citrus"}`}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && (
        <p
          className={`font-mono text-[0.7rem] uppercase tracking-[0.22em] ${invert ? "text-citrus" : "text-citrus-deep"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-[clamp(1.9rem,4.2vw,3rem)] font-600 leading-[1.08] text-balance ${invert ? "text-cream" : "text-forest-deep"}`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-lg leading-relaxed text-pretty max-w-2xl ${align === "center" ? "mx-auto" : ""} ${invert ? "text-cream/75" : "text-ink-soft"}`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
