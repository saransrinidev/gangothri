import Link from "next/link";
import { nav, site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { Logo } from "./Logo";
import { Mail, MapPin, Phone, WhatsApp, socialIcons } from "./icons";
import { TempleScene } from "./illustrations";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-maroon-950 text-cream-200">
      <TempleScene tone="light" className="pointer-events-none absolute -bottom-6 left-1/2 w-[1100px] max-w-none -translate-x-1/2 opacity-[0.07]" />
      <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,var(--color-gold-500)_0_14px,transparent_14px_22px)] opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm leading-relaxed text-cream-200/80">
            Traditional Kerala astrology rooted in classical texts, family lineage and careful calculation. Consultations in person and online.
          </p>
          <p lang="ml" className="mt-3 font-serif text-lg text-gold-300">{site.nameMl}</p>
          <ul className="mt-6 flex gap-3">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/30 text-gold-300 transition-colors hover:bg-gold-300 hover:text-maroon-950"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <FooterList title="Quick Links" items={nav.map((n) => ({ label: n.label, href: n.href }))} />
        <FooterList title="Services" items={services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }))} />

        <div>
          <FooterTitle>Contact</FooterTitle>
          <ul className="mt-5 space-y-4 text-cream-200/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span>{site.contact.address.join(", ")}</span>
            </li>
            <li>
              <a href={site.contact.phoneHref} className="flex gap-3 hover:text-gold-300">
                <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-gold-300">
                <WhatsApp className="h-5 w-5 shrink-0 text-gold-400" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex gap-3 break-all hover:text-gold-300">
                <Mail className="h-5 w-5 shrink-0 text-gold-400" />
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-gold-300/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-cream-200/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {site.copyrightYear} {site.name}. All rights reserved.</p>
          <p className="font-serif italic">Ancient wisdom · Timeless guidance</p>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-2xl text-ivory">{children}</h2>;
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>
      <ul className="mt-5 space-y-2.5">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="group inline-flex items-center gap-2 text-cream-200/80 transition-colors hover:text-gold-300">
              <span aria-hidden className="h-1 w-1 rotate-45 bg-gold-500 transition-all group-hover:w-3 group-hover:rotate-0" />
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
