import type { Metadata } from "next";
import { ArtPanel } from "@/components/ArtPanel";
import { ContactCTA } from "@/components/ContactCTA";
import { Mail, Phone, WhatsApp } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Accent, ButtonLink, Container } from "@/components/ui";
import { onlineServices } from "@/lib/online-services";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Online Astrology Services",
  description: "Horoscope Making, Matching Jathakam, Online Predictions and Muhurtham: traditional Kerala astrology consultations arranged online.",
};

export default function OnlineServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Online services"
        title={<>Traditional guidance, <Accent>wherever</Accent> you are</>}
        text="Consultations arranged directly with the astrologer by phone, WhatsApp or email. There are no accounts, forms or online payments. Simply get in touch."
        art="muhurtham"
      >
        <ButtonLink href={whatsappLink()} variant="primary" icon={<WhatsApp className="h-5 w-5" />}>WhatsApp</ButtonLink>
        <ButtonLink href={site.contact.phoneHref} variant="outline" icon={<Phone className="h-5 w-5" />}>Call Now</ButtonLink>
      </PageHero>

      {/* In-page navigation */}
      <nav aria-label="Online services" className="sticky top-20 z-30 mt-8 px-3">
        <ul className="mx-auto flex max-w-fit flex-wrap justify-center gap-2 rounded-full border border-brown-900/10 bg-ivory/90 p-1.5 backdrop-blur-md">
          {onlineServices.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="block rounded-full px-4 py-2 text-sm text-brown-700 transition-colors hover:bg-maroon-800 hover:text-ivory">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="py-16">
        {onlineServices.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-40 py-12 sm:py-16">
            <Container>
              <Reveal>
                <div className="overflow-hidden rounded-[2.5rem] border border-brown-900/10 bg-ivory p-3">
                  <div className={`grid gap-4 lg:grid-cols-[1fr_1.35fr] ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <ArtPanel art={s.art} variant={i % 2 ? "cream" : "maroon"} className="min-h-[280px] rounded-[2rem]" artClassName="w-1/2 max-w-xs" />
                    <div className="p-5 sm:p-10">
                      <p className="font-serif text-lg italic text-gold-600">
                        {`{0${i + 1}}`} <span lang="ml" className="not-italic">{s.nameMl}</span>
                      </p>
                      <h2 className="mt-2 font-serif text-4xl text-maroon-900 sm:text-5xl">{s.name}</h2>
                      <div className="mt-5 space-y-3">
                        {s.description.map((d) => (
                          <p key={d.slice(0, 24)} className="leading-relaxed text-brown-700">{d}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 p-3 pt-6 md:grid-cols-3">
                    <InfoBlock title="What to prepare">
                      <ul className="space-y-2.5">
                        {s.prepare.map((p) => (
                          <li key={p} className="flex gap-3">
                            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </InfoBlock>
                    <InfoBlock title="How the consultation works">
                      <ol className="space-y-3">
                        {s.howItWorks.map((h, k) => (
                          <li key={h} className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maroon-900 text-xs text-gold-300">{k + 1}</span>
                            {h}
                          </li>
                        ))}
                      </ol>
                    </InfoBlock>
                    <InfoBlock title="Delivery & contact" dark>
                      <p>{s.delivery}</p>
                      <div className="mt-5 space-y-2.5">
                        <a href={site.contact.phoneHref} className="flex items-center gap-3 hover:text-gold-300">
                          <Phone className="h-4 w-4 text-gold-400" /> {site.contact.phoneDisplay}
                        </a>
                        <a href={whatsappLink(s.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold-300">
                          <WhatsApp className="h-4 w-4 text-gold-400" /> WhatsApp
                        </a>
                        <a href={`mailto:${site.contact.email}?subject=${encodeURIComponent(s.name)}`} className="flex items-center gap-3 break-all hover:text-gold-300">
                          <Mail className="h-4 w-4 shrink-0 text-gold-400" /> {site.contact.email}
                        </a>
                      </div>
                    </InfoBlock>
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        ))}
      </div>

      <ContactCTA title="Ready to arrange an online consultation?" text="Call or message the astrologer to discuss your needs and agree on a convenient time." />
    </>
  );
}

function InfoBlock({ title, children, dark = false }: { title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`rounded-[1.75rem] p-6 sm:p-7 ${dark ? "bg-maroon-900 text-cream-200" : "bg-cream-100/80 text-brown-700"}`}>
      <h3 className={`font-serif text-2xl ${dark ? "text-ivory" : "text-maroon-900"}`}>{title}</h3>
      <div className="mt-4 text-[0.95rem] leading-relaxed">{children}</div>
    </div>
  );
}
