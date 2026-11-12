import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { ArtPanel } from "./ArtPanel";
import { ServiceCard } from "./cards";
import { ContactCTA } from "./ContactCTA";
import { WhatsApp } from "./icons";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { Accent, ButtonLink, Container, Eyebrow, Ornament, SectionHeading } from "./ui";

export function serviceMetadata(slug: string) {
  const s = getService(slug);
  return s ? { title: `${s.name} (${s.nameMl})`, description: s.description } : {};
}

export function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);
  const msg = `Namaskaram, I would like to know more about ${service.name}.`;

  return (
    <>
      <PageHero
        eyebrow={<span lang="ml">{service.nameMl}</span>}
        title={<Accent>{service.name}</Accent>}
        text={service.intro}
        art={service.art}
        breadcrumb={
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-brown-400">
            <Link href="/" className="hover:text-maroon-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-maroon-700">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-maroon-700">{service.name}</span>
          </nav>
        }
      >
        <ButtonLink href="/contact">Contact Astrologer</ButtonLink>
        <ButtonLink href={whatsappLink(msg)} variant="outline" icon={<WhatsApp className="h-5 w-5" />}>
          WhatsApp
        </ButtonLink>
      </PageHero>

      {/* Introduction + explanation */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>About this service</Eyebrow>
            <p className="mt-5 font-serif text-3xl leading-snug text-maroon-900">{service.description}</p>
            <div className="mt-8 rounded-[1.75rem] border border-gold-500/30 bg-ivory p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-gold-600">Purpose</p>
              <p className="mt-2 leading-relaxed text-brown-700">{service.purpose}</p>
            </div>
          </Reveal>
          <div className="space-y-12">
            {service.sections.map((sec, i) => (
              <Reveal key={sec.title} delay={i * 80}>
                <h2 className="flex items-baseline gap-4 font-serif text-4xl text-maroon-900">
                  <span className="font-serif text-xl italic text-gold-600">0{i + 1}</span>
                  {sec.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {sec.body.map((p) => (
                    <p key={p.slice(0, 24)} className="text-lg leading-[1.85] text-brown-700">{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-cream-100/70 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="The consultation" title="How it proceeds" />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90} className="relative rounded-[1.75rem] border border-brown-900/10 bg-ivory p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-900 font-serif text-xl text-gold-300">{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl text-maroon-900">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-brown-500">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Traditional significance */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-maroon-900 p-8 sm:p-14">
            <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
              <Reveal>
                <Eyebrow light>Traditional significance</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory sm:text-5xl">{service.significance}</h2>
                <Ornament light className="mt-6" />
                <div className="mt-6 space-y-4">
                  {service.significanceDetail.map((p) => (
                    <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-cream-200/85">{p}</p>
                  ))}
                </div>
              </Reveal>
              <ArtPanel art="temple" className="aspect-[4/3] rounded-[1.75rem] bg-maroon-950/60!" artClassName="w-[90%]" />
            </div>
          </div>
        </Container>
      </section>

      {/* Related imagery */}
      <section className="pb-8">
        <Container>
          <SectionHeading eyebrow="In the tradition" title="Related imagery" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.gallery.map((g, i) => (
              <Reveal key={g.caption} delay={i * 100}>
                <figure className="rounded-[2rem] border border-brown-900/10 bg-ivory p-3">
                  <ArtPanel art={g.art} variant={i === 1 ? "maroon" : "cream"} className="aspect-square rounded-[1.5rem]" artClassName={g.art === "temple" ? "w-[85%]" : "w-1/2"} sun={i === 1} stripes={i === 1} />
                  <figcaption className="px-3 pb-2 pt-4 font-serif text-xl italic text-maroon-800">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA
        title={`Would you like to consult for ${service.name}?`}
        text="Contact the astrologer to discuss your question, the details to prepare and a convenient time."
        whatsappMessage={msg}
      />

      <section className="pb-8">
        <Container>
          <SectionHeading eyebrow="Explore" title="Other services" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {others.map((s) => (
              <Reveal key={s.slug}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
