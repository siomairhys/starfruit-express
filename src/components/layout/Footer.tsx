import { Logo } from "../brand/Logo";
import { contact, nav } from "@/data/siteContent";
import { Instagram, Facebook, Globe, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream pt-16 pb-10">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <div className="[&_*]:!text-cream">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              Purchasing intelligence and temperature-controlled fulfillment for Florida restaurants
              — built around how operators actually work.
            </p>
            <p className="mt-5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-citrus">
              Independent redesign concept
            </p>
          </div>

          <FooterCol title="Sections">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="ui-responsive-action block rounded-lg py-1 text-sm text-cream/75 hover:text-citrus transition-colors"
              >
                {n.label}
              </a>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <a
              href={contact.phoneHref}
              className="ui-responsive-action flex items-center gap-2 rounded-lg py-1 text-sm text-cream/80 hover:text-citrus"
            >
              <Phone className="h-3.5 w-3.5" /> {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="ui-responsive-action flex items-center gap-2 rounded-lg py-1 text-sm text-cream/80 hover:text-citrus break-all"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" /> {contact.email}
            </a>
            <p className="flex items-center gap-2 py-1 text-sm text-cream/70">
              <MapPin className="h-3.5 w-3.5" /> {contact.region}
            </p>
            <p className="mt-1 text-xs text-cream/55">{contact.hours}</p>
          </FooterCol>

          <FooterCol title="Follow the journey">
            <div className="flex items-center gap-2">
              {[
                {
                  i: Instagram,
                  href: "https://www.instagram.com/popular/starfruit-express/",
                  l: "Instagram",
                },
                {
                  i: Facebook,
                  href: "https://www.facebook.com/people/Starfruit-Express/61582730191890/",
                  l: "Facebook",
                },
                { i: Globe, href: "https://www.starfruitexpress.com/", l: "Website" },
              ].map(({ i: Icon, href, l }) => (
                <a
                  key={l}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={l}
                  className="ui-responsive-action grid h-10 w-10 place-items-center rounded-full border border-cream/15 hover:border-citrus hover:text-citrus transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-cream/55 leading-relaxed">
              All sample dashboards, ETAs, prices, and savings shown in this concept are
              illustrative only.
            </p>
          </FooterCol>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 grid grid-cols-[minmax(0,1fr)_auto] sm:flex sm:justify-between gap-4 items-center">
          <p className="text-xs text-cream/55">
            © {new Date().getFullYear()} Concept redesign · Inspired by{" "}
            <a
              className="ui-responsive-action rounded underline hover:text-citrus"
              href="https://www.starfruitexpress.com/"
              target="_blank"
              rel="noreferrer"
            >
              starfruitexpress.com
            </a>
            .
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-wider text-cream/40 text-right">
            Not affiliated with the official company.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-citrus mb-3">
        {title}
      </p>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}
