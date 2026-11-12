import { site } from "@/lib/site";

export function LogoMark({ className = "h-11 w-11", light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="23" fill={light ? "#fbf6ea" : "#3b1012"} />
      <circle cx="24" cy="24" r="19.5" fill="none" stroke="#b8893b" strokeWidth="0.8" strokeDasharray="1.2 2.2" />
      {/* crescent, as in the reference logo */}
      <circle cx="22" cy="24" r="12" fill="#d1ad63" />
      <circle cx="27" cy="20.5" r="10" fill={light ? "#fbf6ea" : "#3b1012"} />
      {/* star */}
      <path d="M31 19l1.2 2.8 2.8 1.2-2.8 1.2L31 27l-1.2-2.8L27 23l2.8-1.2z" fill={light ? "#521618" : "#efe0b8"} />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark light={light} />
      <span className="leading-none">
        <span className={`block font-serif text-[1.45rem] font-semibold tracking-wide ${light ? "text-ivory" : "text-maroon-900"}`}>
          Gangothri
        </span>
        <span className={`mt-1 block text-[0.68rem] uppercase tracking-[0.32em] ${light ? "text-gold-300" : "text-gold-600"}`}>
          Jyothishalayam
        </span>
        <span className="sr-only">{site.nameMl}</span>
      </span>
    </span>
  );
}
