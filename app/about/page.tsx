import type { Metadata } from "next";
import { ArtPanel, Portrait } from "@/components/ArtPanel";
import { ContactCTA } from "@/components/ContactCTA";
import { KeralaChart, PalmLeafManuscript, TempleScene } from "@/components/illustrations";
import { Reveal } from "@/components/Reveal";
import { Accent, ButtonLink, Container, Eyebrow, Ornament, SectionHeading } from "@/components/ui";
import { services } from "@/lib/services";
import { profile, site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Astrologer",
  description: `Meet ${site.astrologer.name} of ${site.name}: family lineage, traditional knowledge and approach to Kerala astrology.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero with professional photograph */}
      <section className="px-3 pt-2 sm:px-5">
        <div className="mx-auto grid max-w-[88rem] gap-4 overflow-hidden rounded-[2.25rem] border border-brown-900/10 bg-ivory p-3 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col justify-center px-5 py-12 sm:px-10 lg:py-20">
            <div className="animate-rise">
              <Eyebrow>About the astrologer</Eyebrow>
              <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-maroon-950 sm:text-7xl">{site.astrologer.name}</h1>
              <p className="mt-3 font-serif text-2xl italic text-gold-600">
                {site.astrologer.title} · {site.astrologer.hometown}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brown-500">{profile.shortIntro}</p>
              <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-gold-500/30 rounded-[1.5rem] border border-gold-500/30">
                {[
                  [site.astrologer.yearsOfExperience, "Years of practice"],
                  ["6", "Traditional services"],
                  ["Online", "& in-person consultations"],
                ].map(([v, l]) => (
                  <div key={l} className="p-4 text-center">
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-serif text-3xl text-maroon-800">{v}</dd>
                    <dd className="mt-1 text-xs leading-snug text-brown-400">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative isolate flex items-end justify-center overflow-hidden rounded-[1.75rem] bg-maroon-900 px-8 pt-12">
            <div aria-hidden className="absolute -bottom-24 -right-20 -z-10 aspect-square w-[70%] rounded-full bg-gold-500/85" />
            <div aria-hidden className="stripes absolute -bottom-6 -right-10 -z-10 h-1/2 w-2/3 opacity-80 [mask-image:linear-gradient(135deg,transparent_38%,black_39%)]" />
            <TempleScene tone="light" className="absolute bottom-0 left-0 -z-10 w-full opacity-20" />
            <Portrait tone="light" className="aspect-[4/5] w-full max-w-sm" />
          </div>
        </div>
      </section>

      {/* Personal introduction */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <Eyebrow>Personal introduction</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-maroon-900 sm:text-5xl">
              A life in the study of <Accent>Jyothisham</Accent>
            </h2>
            <Ornament className="mt-6" />
          </Reveal>
          <Reveal delay={100} className="space-y-5">
            {profile.biography.map((p) => (
              <p key={p.slice(0, 30)} className="text-lg leading-[1.85] text-brown-700">{p}</p>
            ))}
            <p className="text-lg leading-[1.85] text-brown-700">{profile.experience}</p>
          </Reveal>
        </Container>
      </section>

      {/* Lineage */}
      <section className="bg-cream-100/70 py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <ArtPanel art="palmleaf" className="aspect-[5/4] rounded-[2rem]" artClassName="w-3/5" label="Palm-leaf manuscripts" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Family background & lineage</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-maroon-900 sm:text-5xl">
              The <Accent>{site.astrologer.familyName}</Accent> tradition
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brown-700">{profile.lineage}</p>
            <ol className="relative mt-10 space-y-6 border-l border-gold-500/40 pl-8">
              {[
                ["[Generation / elder name]", "[A line about the founder of the family's astrological practice.]"],
                ["[Generation / elder name]", "[A line about the teacher from whom the astrologer learned.]"],
                [site.astrologer.name, "Continuing the tradition at Gangothri Jyothishalayam."],
              ].map(([n, t], i) => (
                <li key={i} className="relative">
                  <span aria-hidden className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rotate-45 border border-gold-500 bg-ivory" />
                  <p className="font-serif text-xl text-maroon-900">{n}</p>
                  <p className="text-brown-500">{t}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Knowledge & specialisation */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <Eyebrow>Traditional knowledge & experience</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-maroon-900 sm:text-5xl">
                Classical texts, <Accent>careful</Accent> calculation
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brown-700">{profile.knowledge}</p>
            </Reveal>
            <Reveal delay={100} className="flex items-center justify-center gap-6">
              <KeralaChart className="w-1/2 max-w-[220px]" />
              <PalmLeafManuscript className="w-1/2 max-w-[240px]" />
            </Reveal>
          </div>

          <SectionHeading className="mt-24" eyebrow="Areas of specialisation" title="Services offered" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full items-start gap-5 rounded-[1.75rem] border border-brown-900/10 bg-ivory p-6 transition-all hover:-translate-y-1 hover:border-gold-500/50"
                >
                  <span className="font-serif text-2xl italic text-gold-600">0{i + 1}</span>
                  <span>
                    <span className="block font-serif text-2xl text-maroon-900">{s.name}</span>
                    <span lang="ml" className="block text-sm text-gold-600">{s.nameMl}</span>
                    <span className="mt-2 block text-brown-500">{s.short}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="pb-8">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-maroon-900 px-6 py-16 sm:px-14">
            <TempleScene tone="light" className="pointer-events-none absolute -bottom-4 right-0 -z-10 w-[60%] opacity-15" />
            <Reveal className="mx-auto max-w-3xl text-center">
              <Eyebrow light>Philosophy & approach</Eyebrow>
              <p className="mt-6 font-serif text-3xl italic leading-snug text-ivory sm:text-4xl">“{profile.philosophy[0]}”</p>
              <Ornament light className="mx-auto mt-8" />
              <div className="mt-8 space-y-4 text-lg leading-relaxed text-cream-200/85">
                {profile.philosophy.slice(1).map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                <ButtonLink href="/services" variant="gold">Explore Services</ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
