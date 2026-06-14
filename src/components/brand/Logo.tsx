interface LogoProps { className?: string; mark?: boolean }

export function StarfruitMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sfgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.16 90)" />
          <stop offset="55%" stopColor="oklch(0.74 0.17 70)" />
          <stop offset="100%" stopColor="oklch(0.62 0.14 145)" />
        </linearGradient>
      </defs>
      <path
        d="M24 3 L29 18 L44 18 L32 27 L37 42 L24 33 L11 42 L16 27 L4 18 L19 18 Z"
        fill="url(#sfgrad)"
        stroke="oklch(0.30 0.055 158)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="25" r="3" fill="oklch(0.30 0.055 158)" />
    </svg>
  );
}

export function Logo({ className = "", mark = false }: LogoProps) {
  return (
    <a href="#overview" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <StarfruitMark className="h-9 w-9 transition-transform group-hover:rotate-12" />
      {!mark && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-[1.35rem] font-700 tracking-tight text-forest-deep">
            Starfruit<span className="text-citrus-deep">.</span>
          </span>
          <span className="mt-0.5 font-mono text-[0.55rem] uppercase tracking-[0.22em] text-forest-soft">
            Express · Concept
          </span>
        </div>
      )}
    </a>
  );
}
