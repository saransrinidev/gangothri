import Image from "next/image";
import type { ArtKey } from "@/lib/services";
import { site } from "@/lib/site";
import { Art, PortraitPlaceholder } from "./illustrations";

/**
 * Framed illustration panel. The maroon variant echoes the reference
 * artwork: dark rounded panel, gold sun and diagonal ivory stripes.
 */
export function ArtPanel({
  art,
  variant = "maroon",
  className = "",
  artClassName = "w-3/5",
  sun = true,
  stripes = true,
  label,
}: {
  art: ArtKey;
  variant?: "maroon" | "cream";
  className?: string;
  artClassName?: string;
  sun?: boolean;
  stripes?: boolean;
  label?: string;
}) {
  const dark = variant === "maroon";
  return (
    <div
      className={`relative isolate flex items-center justify-center overflow-hidden ${
        dark ? "bg-maroon-900" : "bg-cream-100"
      } ${className}`}
    >
      <Stars dark={dark} />
      {sun && (
        <div
          aria-hidden
          className={`absolute -bottom-[28%] -right-[12%] -z-10 aspect-square w-[62%] rounded-full ${
            dark ? "bg-gold-500/85" : "bg-gold-400/40"
          }`}
        />
      )}
      {stripes && (
        <div
          aria-hidden
          className={`stripes absolute -bottom-6 -right-10 -z-10 h-1/2 w-1/2 [mask-image:linear-gradient(135deg,transparent_35%,black_36%)] ${
            dark ? "opacity-80" : "opacity-60 [--color-ivory:var(--color-maroon-800)]"
          }`}
        />
      )}
      <Art name={art} tone={dark ? "light" : "dark"} className={`relative drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)] ${artClassName}`} title={label} />
    </div>
  );
}

const STAR_POSITIONS = [
  [12, 14, 3], [28, 30, 2], [70, 12, 2.5], [84, 26, 2], [55, 22, 1.5], [18, 62, 2], [40, 8, 1.5], [90, 52, 1.5],
] as const;

export function Stars({ dark = true }: { dark?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {STAR_POSITIONS.map(([l, t, s], i) => (
        <span
          key={i}
          className={`absolute rounded-full ${dark ? "bg-gold-200/50" : "bg-maroon-700/20"}`}
          style={{ left: `${l}%`, top: `${t}%`, width: `${s * 3}px`, height: `${s * 3}px` }}
        />
      ))}
    </div>
  );
}

/** Astrologer portrait inside a temple-arch frame. */
export function Portrait({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const photo = site.astrologer.photo;
  if (photo) {
    return (
      <div
        className={`relative overflow-hidden rounded-[1.25rem] ${className}`}
        style={{ aspectRatio: `${site.astrologer.photoSize.width} / ${site.astrologer.photoSize.height}` }}
      >
        <Image src={photo} alt={`${site.astrologer.name}, astrologer at ${site.name}`} fill priority className="object-cover" sizes="(min-width: 1024px) 480px, 90vw" />
      </div>
    );
  }
  return (
    <div className={`relative ${className}`}>
      <PortraitPlaceholder tone={tone} className="h-full w-full" />
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ivory/90 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-brown-500">
        Photo placeholder
      </span>
    </div>
  );
}
