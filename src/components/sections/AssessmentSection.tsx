import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "./WhySection";
import { contact } from "@/data/siteContent";
import operatorImg from "@/assets/operator.jpg";

interface FormState {
  restaurant: string;
  name: string;
  email: string;
  phone: string;
  locations: string;
  volume: string;
  suppliers: string;
  challenge: string;
}

const initial: FormState = {
  restaurant: "",
  name: "",
  email: "",
  phone: "",
  locations: "1",
  volume: "$10–25k",
  suppliers: "3–5",
  challenge: "",
};

const challenges = [
  "Pricing visibility",
  "Supplier coordination",
  "Delivery reliability",
  "Invoice discrepancies",
  "Product availability",
  "Other",
];

const steps = [
  {
    icon: ClipboardList,
    title: "Tell us about your restaurant",
    copy: "Locations, cuisine, and rough monthly purchasing volume.",
  },
  {
    icon: MessageCircle,
    title: "Describe your current setup",
    copy: "Suppliers you work with and where the friction shows up most.",
  },
  {
    icon: Sparkles,
    title: "Receive an operational assessment",
    copy: "A no-pressure walkthrough of the savings we’d look to recover.",
  },
];

export function AssessmentSection() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [done, setDone] = useState(false);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.restaurant.trim()) e.restaurant = "Restaurant name is required.";
    if (!form.name.trim()) e.name = "Please share your name.";
    if (!form.email.trim()) e.email = "We need an email to send the assessment.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "That email doesn’t look right.";
    if (!form.challenge) e.challenge = "Pick the area that bites most.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setDone(true);
  }

  return (
    <section id="assessment" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 items-start">
          {/* Left */}
          <div>
            <SectionHeading
              eyebrow="Part 04 · Savings Assessment"
              title={
                <>
                  See what Starfruit would <span className="citrus-underline">recover</span> for
                  your kitchen.
                </>
              }
              lede="A 20-minute, no-pressure conversation with our operations team. You leave with a concrete view of where margin is leaking — whether or not you become a customer."
            />

            <div className="ui-responsive-surface relative mt-8 aspect-[5/3] rounded-3xl overflow-hidden border border-line">
              <img
                src={operatorImg}
                alt="Restaurant operator reviewing produce delivery on a tablet"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1.5 text-xs font-semibold text-forest-deep">
                  <ShieldCheck className="h-3.5 w-3.5 text-leaf" /> Useful first, business second.
                </span>
              </div>
            </div>

            <ol className="mt-8 space-y-4">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="ui-responsive-row grid grid-cols-[auto_minmax(0,1fr)] gap-4 items-start rounded-2xl p-2 -m-2"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-deep text-cream font-mono text-sm font-700">
                    0{i + 1}
                  </div>
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 font-display text-base font-700 text-forest-deep">
                      <s.icon className="h-4 w-4 text-citrus-deep" /> {s.title}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-soft">{s.copy}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={contact.phoneHref}
                className="ui-responsive-action flex items-center gap-3 rounded-2xl border border-line bg-cream p-4 hover:border-forest-deep/30 transition-colors"
              >
                <Phone className="h-4 w-4 text-citrus-deep shrink-0" />
                <div className="min-w-0">
                  <p className="font-mono text-[0.58rem] uppercase tracking-wider text-ink-soft">
                    Call
                  </p>
                  <p className="font-semibold text-forest-deep truncate">{contact.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="ui-responsive-action flex items-center gap-3 rounded-2xl border border-line bg-cream p-4 hover:border-forest-deep/30 transition-colors"
              >
                <Mail className="h-4 w-4 text-citrus-deep shrink-0" />
                <div className="min-w-0">
                  <p className="font-mono text-[0.58rem] uppercase tracking-wider text-ink-soft">
                    Email
                  </p>
                  <p className="font-semibold text-forest-deep truncate">{contact.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="ui-responsive-surface relative rounded-[28px] border border-forest-deep/10 bg-cream shadow-xl shadow-forest-deep/10 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-citrus-deep">
                Request an assessment
              </p>
              <span className="font-mono text-[0.58rem] uppercase tracking-wider text-ink-soft/70">
                Design concept · not sent to Starfruit
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-700 text-forest-deep">
              Tell us about your kitchen.
            </h3>

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 rounded-2xl border border-leaf/30 bg-leaf/8 p-6 text-center"
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-leaf text-cream">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h4 className="mt-4 font-display text-xl font-700 text-forest-deep">
                    Assessment requested.
                  </h4>
                  <p className="mt-2 text-sm text-ink-soft max-w-sm mx-auto">
                    In the real product, our team would reach out within one business day to
                    schedule your walkthrough. This concept stops here.
                  </p>
                  <button
                    onClick={() => {
                      setForm(initial);
                      setDone(false);
                    }}
                    className="ui-responsive-action mt-5 inline-flex items-center gap-1.5 rounded-full border border-forest-deep/20 px-4 py-2 text-sm font-semibold text-forest-deep hover:bg-cream-warm transition-colors"
                  >
                    Reset the form
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 space-y-4"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field id="restaurant" label="Restaurant name" error={errors.restaurant}>
                      <input
                        id="restaurant"
                        value={form.restaurant}
                        onChange={(e) => update("restaurant", e.target.value)}
                        className={inputCls(!!errors.restaurant)}
                        placeholder="Olive & Pine Bistro"
                      />
                    </Field>
                    <Field id="name" label="Your name" error={errors.name}>
                      <input
                        id="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={inputCls(!!errors.name)}
                        placeholder="Alex Rivera"
                      />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field id="email" label="Email" error={errors.email}>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputCls(!!errors.email)}
                        placeholder="alex@yourkitchen.com"
                      />
                    </Field>
                    <Field id="phone" label="Phone" hint="optional">
                      <input
                        id="phone"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputCls(false)}
                        placeholder="(305) 555-0142"
                      />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Field id="locations" label="Locations">
                      <select
                        id="locations"
                        value={form.locations}
                        onChange={(e) => update("locations", e.target.value)}
                        className={inputCls(false)}
                      >
                        {["1", "2–4", "5–9", "10+"].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
                    <Field id="volume" label="Monthly purchasing">
                      <select
                        id="volume"
                        value={form.volume}
                        onChange={(e) => update("volume", e.target.value)}
                        className={inputCls(false)}
                      >
                        {["Under $10k", "$10–25k", "$25–60k", "$60–150k", "$150k+"].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
                    <Field id="suppliers" label="Active suppliers">
                      <select
                        id="suppliers"
                        value={form.suppliers}
                        onChange={(e) => update("suppliers", e.target.value)}
                        className={inputCls(false)}
                      >
                        {["1–2", "3–5", "6–10", "10+"].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field
                    id="challenge"
                    label="Primary operational challenge"
                    error={errors.challenge}
                  >
                    <div className="flex flex-wrap gap-2">
                      {challenges.map((c) => (
                        <button
                          type="button"
                          key={c}
                          onClick={() => update("challenge", c)}
                          className={`ui-responsive-action rounded-full px-3.5 py-2 text-xs font-semibold border transition-colors ${
                            form.challenge === c
                              ? "border-forest-deep bg-forest-deep text-cream"
                              : "border-line bg-cream-warm/40 text-forest-deep hover:border-forest-deep/40"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <button
                    type="submit"
                    className="ui-responsive-action group w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-forest-deep px-5 py-4 text-sm font-semibold text-cream shadow-md hover:bg-forest hover:shadow-lg transition-all"
                  >
                    Request my assessment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-center text-xs text-ink-soft/80">
                    Florida-focused · usually a 20-minute conversation · {contact.hours}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function inputCls(error: boolean) {
  return `w-full rounded-xl border bg-cream-warm/30 px-3.5 py-2.5 text-sm text-forest-deep placeholder:text-ink-soft/50 outline-none transition-colors focus:bg-cream focus:border-forest-deep ${
    error ? "border-destructive/60" : "border-line"
  }`;
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-wider text-ink-soft mb-1.5"
      >
        <span>{label}</span>
        {hint && <span className="text-ink-soft/60 normal-case tracking-normal">{hint}</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-destructive font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
