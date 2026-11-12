import type { ReactNode } from "react";
import type { ArtKey } from "@/lib/services";
import { ArtPanel } from "./ArtPanel";
import { Eyebrow } from "./ui";

/**
 * Inner-page hero in the reference layout: cream paper card with the
 * heading on the left and a dark maroon art panel on the right.
 */
export function PageHero({
  eyebrow,
  title,
  text,
  art,
  children,
  breadcrumb,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  text?: ReactNode;
  art: ArtKey;
  children?: ReactNode;
  breadcrumb?: ReactNode;
}) {
  return (
    <section className="px-3 pt-2 sm:px-5">
      <div className="mx-auto grid max-w-[88rem] gap-4 overflow-hidden rounded-[2.25rem] border border-brown-900/10 bg-ivory p-3 lg:grid-cols-[1.15fr_1fr]">
        <div className="flex flex-col justify-center px-5 py-10 sm:px-10 lg:py-16">
          {breadcrumb}
          <div className="animate-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-maroon-950 sm:text-6xl lg:text-7xl">{title}</h1>
            {text && <p className="mt-6 max-w-xl text-lg leading-relaxed text-brown-500">{text}</p>}
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
        </div>
        <ArtPanel art={art} className="min-h-[300px] rounded-[1.75rem] sm:min-h-[420px]" artClassName="w-[55%] max-w-sm animate-float" />
      </div>
    </section>
  );
}
