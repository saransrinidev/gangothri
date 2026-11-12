import type { Metadata } from "next";
import { ArtPanel } from "@/components/ArtPanel";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Accent, ButtonLink, Container } from "@/components/ui";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Astrology Services",
  description: "Jathakam, Prasnam, Muhurtham, Porutham, Thamboola Prasnam and Ashtamangala Prasnam: traditional Kerala astrology services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Traditional <Accent>Kerala</Accent> astrology</>}
        text="Six consultations practised in Kerala for generations. Each one follows its classical method and is offered with care and clarity."
        art="wheel"
      >
        <ButtonLink href="/contact">Contact Astrologer</ButtonLink>
        <ButtonLink href="/online-services" variant="outline">Online Services</ButtonLink>
      </PageHero>

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-brown-900/10 bg-ivory p-3">
                  <ArtPanel
                    art={s.art}
                    variant={i % 4 === 0 || i % 4 === 3 ? "maroon" : "cream"}
                    className="aspect-[16/9] rounded-[1.75rem]"
                    artClassName="w-[38%] transition-transform duration-700 group-hover:scale-105"
                    label={`${s.name} illustration`}
                  />
                  <div className="flex flex-1 flex-col p-5 sm:p-8">
                    <div className="flex items-baseline justify-between">
                      <h2 className="font-serif text-4xl text-maroon-900">{s.name}</h2>
                      <span lang="ml" className="text-gold-600">{s.nameMl}</span>
                    </div>
                    <p className="mt-4 leading-relaxed text-brown-700">{s.description}</p>
                    <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.25rem] bg-cream-100/80 p-5">
                        <dt className="text-xs uppercase tracking-[0.18em] text-gold-600">Purpose</dt>
                        <dd className="mt-2 text-[0.95rem] leading-relaxed text-brown-700">{s.purpose}</dd>
                      </div>
                      <div className="rounded-[1.25rem] bg-cream-100/80 p-5">
                        <dt className="text-xs uppercase tracking-[0.18em] text-gold-600">Traditional significance</dt>
                        <dd className="mt-2 text-[0.95rem] leading-relaxed text-brown-700">{s.significance}</dd>
                      </div>
                    </dl>
                    <div className="mt-auto pt-8">
                      <ButtonLink href={`/services/${s.slug}`}>Learn More</ButtonLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
