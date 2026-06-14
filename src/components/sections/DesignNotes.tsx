import { motion } from "framer-motion";
import { sources } from "@/data/siteContent";
import { SectionHeading } from "./WhySection";

export function DesignNotes() {
  return (
    <section id="notes" className="relative py-20 lg:py-28 bg-cream-warm/50">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeading
          eyebrow="Design Rationale"
          title="Design Approach"
          lede="The existing Starfruit Express website already communicates a clear, distinctive brand and a strong understanding of restaurant operators. For this challenge, I did not approach the website as something that needed to be corrected. Instead, I treated it as a strong foundation and explored how I would personally extend its visual language through more product-focused storytelling, operational details, and interactive concepts."
        />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-ink-soft">
          Each redesign preserves the original message and character of the section while showing my
          own interpretation of how the experience could evolve.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sources.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="ui-responsive-surface rounded-3xl border border-line bg-cream p-6 md:p-7"
            >
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-wider text-citrus-deep">
                  Section 0{i + 1}
                </p>
                <h3 className="mt-1 font-display text-xl font-700 text-forest-deep">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-ink-soft">
                <span className="font-semibold text-forest-deep">Original page - </span>
                {s.originalPage} - {s.originalPurpose}
              </p>
              <Block label="Design Focus">
                <p className="text-sm text-forest-deep">{s.designFocus}</p>
              </Block>
              <div className="ui-responsive-surface mt-3 rounded-2xl border border-forest-deep/15 bg-forest-deep text-cream p-4">
                <p className="font-mono text-[0.6rem] uppercase tracking-wider text-citrus">
                  My Interpretation
                </p>
                <p className="mt-1 text-sm leading-relaxed">{s.interpretation}</p>
                <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-wider text-cream/60">
                  What This Version Explores
                </p>
                <p className="mt-1 text-sm leading-relaxed text-cream/85">{s.explores}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="ui-responsive-surface mt-4 rounded-2xl border border-citrus-deep/25 bg-citrus/10 p-4">
      <p className="font-mono text-[0.6rem] uppercase tracking-wider text-citrus-deep">{label}</p>
      <div className="mt-1">{children}</div>
    </div>
  );
}
