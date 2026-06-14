import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "../brand/Logo";
import { nav } from "@/data/siteContent";

const ACTIVE_SECTION_OFFSET = 140;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(nav[0]?.href ?? "#overview");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      let nextHref = nav[0]?.href ?? "#overview";

      for (const item of nav) {
        const section = document.querySelector(item.href);
        const sectionTop = section?.getBoundingClientRect().top;

        if (typeof sectionTop === "number" && sectionTop <= ACTIVE_SECTION_OFFSET) {
          nextHref = item.href;
        }
      }

      setActiveHref((currentHref) => (currentHref === nextHref ? currentHref : nextHref));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setOpen(false);
  };

  const assessmentActive = activeHref === "#assessment";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-line/70" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3.5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 rounded-full border border-line/70 bg-cream/65 p-1 shadow-sm backdrop-blur-md lg:flex">
          {nav.map((n) => {
            const active = activeHref === n.href;

            return (
              <a
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                onClick={() => handleNavClick(n.href)}
                className={`ui-responsive-action inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold outline-none transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream active:scale-[0.97] ${
                  active
                    ? "bg-forest-deep text-cream shadow-sm"
                    : "text-forest-deep/75 hover:-translate-y-0.5 hover:bg-forest-deep/5 hover:text-forest-deep hover:shadow-sm"
                }`}
              >
                {n.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#assessment"
            aria-current={assessmentActive ? "page" : undefined}
            onClick={() => handleNavClick("#assessment")}
            className={`ui-responsive-action group hidden min-h-11 items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm outline-none transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream active:scale-[0.97] sm:inline-flex ${
              assessmentActive
                ? "bg-citrus text-forest-deep shadow-md"
                : "bg-forest-deep text-cream hover:-translate-y-0.5 hover:bg-forest hover:shadow-md"
            }`}
          >
            Request an Assessment
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className={`ui-responsive-action inline-flex h-11 w-11 items-center justify-center rounded-full border text-forest-deep outline-none transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-forest-deep/25 hover:bg-cream hover:shadow-sm focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream active:scale-95 lg:hidden ${
              open ? "border-forest-deep/25 bg-cream shadow-sm" : "border-line bg-cream/70"
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-line bg-cream/95 shadow-lg backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-5 py-3">
            {nav.map((n) => {
              const active = activeHref === n.href;

              return (
                <a
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => handleNavClick(n.href)}
                  className={`ui-responsive-action flex min-h-12 items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold outline-none transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-forest/40 active:scale-[0.99] ${
                    active
                      ? "bg-forest-deep text-cream shadow-sm"
                      : "text-forest-deep hover:bg-forest-deep/5 hover:pl-5"
                  }`}
                >
                  {n.label}
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                      active ? "bg-citrus" : "bg-transparent"
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="#assessment"
              aria-current={assessmentActive ? "page" : undefined}
              onClick={() => handleNavClick("#assessment")}
              className={`ui-responsive-action mt-3 inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold outline-none transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-forest/40 active:scale-[0.98] ${
                assessmentActive
                  ? "bg-citrus text-forest-deep shadow-md"
                  : "bg-forest-deep text-cream hover:bg-forest hover:shadow-md"
              }`}
            >
              Request an Assessment <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
