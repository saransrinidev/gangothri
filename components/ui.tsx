import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Small italic label, echoing "Astro Club" in the reference */
export function Eyebrow({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-3 font-serif text-lg italic tracking-wide ${
        light ? "text-gold-300" : "text-gold-600"
      } ${className}`}
    >
      <span aria-hidden className={`h-px w-8 ${light ? "bg-gold-300/60" : "bg-gold-500/60"}`} />
      {children}
    </p>
  );
}

/** Highlights a word in gold italics framed by ornamental braces */
export function Accent({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`whitespace-nowrap italic ${light ? "text-gold-300" : "text-maroon-700"}`}>
      <span aria-hidden className="font-normal text-gold-500">{"{"}</span>
      {children}
      <span aria-hidden className="font-normal text-gold-500">{"}"}</span>
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = "center",
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-3 font-serif text-4xl font-medium leading-[1.08] sm:text-5xl ${
          light ? "text-ivory" : "text-maroon-900"
        }`}
      >
        {title}
      </h2>
      {center && <Ornament className="mx-auto mt-5" light={light} />}
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-cream-200/90" : "text-brown-500"}`}>{intro}</p>
      )}
    </div>
  );
}

/** Lotus-and-line divider inspired by temple wall borders */
export function Ornament({ className = "", light = false }: { className?: string; light?: boolean }) {
  const c = light ? "text-gold-300" : "text-gold-500";
  return (
    <svg viewBox="0 0 160 20" className={`h-5 w-40 ${c} ${className}`} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M0 10h56M104 10h56" />
      <path d="M48 10l4-3 4 3-4 3z" fill="currentColor" />
      <path d="M104 10l4-3 4 3-4 3z" fill="currentColor" />
      <path d="M80 2c-4 4-4 12 0 16 4-4 4-12 0-16z" fill="currentColor" fillOpacity=".25" />
      <path d="M80 18c-6-1-12-5-13-11 6 0 11 4 13 11zM80 18c6-1 12-5 13-11-6 0-11 4-13 11z" />
    </svg>
  );
}

type ButtonVariant = "primary" | "gold" | "outline" | "outline-light" | "ivory";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-maroon-800 text-ivory hover:bg-maroon-700 shadow-[0_8px_24px_-12px_rgba(82,22,24,0.7)]",
  gold: "bg-gold-500 text-maroon-950 hover:bg-gold-400",
  outline: "border border-maroon-800/30 text-maroon-800 hover:border-maroon-800 hover:bg-maroon-800/5",
  "outline-light": "border border-gold-300/50 text-ivory hover:border-gold-300 hover:bg-ivory/5",
  ivory: "bg-ivory text-maroon-900 hover:bg-cream-100",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[0.95rem] font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${variants[variant]} ${className}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {!icon && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );
  const isExternal = external || /^(https?:|tel:|mailto:)/.test(href);
  if (isExternal) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

/** Inline arrow link, like "Learn More →" */
export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] ${
        light ? "text-gold-300 hover:text-gold-200" : "text-maroon-700 hover:text-maroon-900"
      }`}
    >
      {children}
      <span className={`inline-flex h-7 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:w-12 ${light ? "bg-gold-300 text-maroon-950" : "bg-maroon-900 text-ivory"}`}>
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
