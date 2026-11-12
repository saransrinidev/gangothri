import { ArtPanel, Portrait, Stars } from "@/components/ArtPanel";
import { ArticleCard, ServiceCard } from "@/components/cards";
import { ContactCTA } from "@/components/ContactCTA";
import { ArrowDown } from "@/components/icons";
import { KeralaChart, Nilavilakku, TempleScene, ZodiacWheel } from "@/components/illustrations";
import { Reveal } from "@/components/Reveal";
import { Accent, ButtonLink, Container, Eyebrow, Ornament, SectionHeading, TextLink } from "@/components/ui";
import { sortedArticles } from "@/lib/articles";
import { onlineServices } from "@/lib/online-services";
import { services } from "@/lib/services";
import { profile, site } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <WhyChooseUs />
      <Experience />
      <OnlineServices />
      <LatestArticles />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="px-3 pt-2 sm:px-5">
      <div className="relative mx-auto grid max-w-[88rem] gap-4 overflow-hidden rounded-[2.25rem] border border-brown-900/10 bg-ivory p-3 lg:min-h-[calc(100svh-6.5rem)] lg:grid-cols-[1.1fr_1fr]">
        {/* left: copy */}
        <div className="relative flex flex-col justify-between px-5 pb-6 pt-10 sm:px-10 lg:pt-16">
          <ZodiacWheel className="pointer-events-none absolute -left-32 top-1/2 w-[34rem] -translate-y-1/2 animate-spin-slow opacity-[0.07]" />
          <div className="relative my-auto animate-rise text-center lg:text-left">
            <Eyebrow className="justify-center lg:justify-start">
              {site.name} <span lang="ml" className="not-italic text-base text-brown-400">· {site.nameMl}</span>
            </Eyebrow>
            <h1 className="mt-6 font-serif text-[3.1rem] font-medium leading-[0.98] text-maroon-950 sm:text-7xl xl:text-[5.5rem]">
              Ancient Wisdom.
              <br />
              <Accent>Timeless</Accent> Guidance.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-brown-500 lg:mx-0">
              Discover the traditional wisdom of Kerala astrology through personalized horoscope guidance and time-honoured astrological practices.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              <ButtonLink href="/services">Explore Services</ButtonLink>
              <ButtonLink href="/about" variant="outline">About the Astrologer</ButtonLink>
            </div>
          </div>
          <a href="#welcome" className="relative mt-12 hidden items-center gap-2 text-brown-700 hover:text-maroon-800 lg:inline-flex">
            Explore <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        {/* right: maroon panel (reference layout) */}
        <div className="relative isolate min-h-[560px] overflow-hidden rounded-[1.75rem] bg-maroon-900 p-5 sm:p-7">
          <Stars />
          <div aria-hidden className="absolute -bottom-[18%] -right-[16%] -z-10 aspect-square w-[78%] rounded-full bg-gold-500/90" />
          <div aria-hidden className="stripes absolute -bottom-8 -right-14 -z-10 h-[58%] w-[70%] opacity-90 [mask-image:linear-gradient(135deg,transparent_38%,black_39%)]" />
          <TempleScene tone="light" className="absolute -bottom-2 left-0 -z-10 w-[95%] opacity-30" />

          <div className="grid h-full gap-4 sm:grid-cols-[1fr_0.85fr]">
            {/* Portrait card */}
            <div style={{ animationDelay: "150ms" }} className="flex animate-rise flex-col rounded-[1.5rem] bg-ivory p-3 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:self-start">
              <div className="overflow-hidden rounded-[1.1rem] bg-maroon-950">
                <Portrait tone="light" className="mx-auto aspect-[4/5] w-full" />
              </div>
              <div className="px-2 pb-1 pt-4">
                <p className="font-serif text-2xl leading-tight text-maroon-900">{site.astrologer.name}</p>
                <p className="mt-1 text-sm text-brown-500">{site.astrologer.title}</p>
              </div>
            </div>

            {/* translucent card, like "See other offers" */}
            <div style={{ animationDelay: "300ms" }} className="flex animate-rise flex-col justify-between gap-4 rounded-[1.5rem] border border-ivory/20 bg-ivory/10 p-5 text-ivory backdrop-blur-md sm:mt-24">
              <div>
                <p className="font-serif text-2xl">Kerala Rashi Chakra</p>
                <KeralaChart tone="light" className="mt-4 w-full max-w-[220px]" title="Kerala style square horoscope chart" />
              </div>
              <ul className="space-y-1.5 font-serif text-lg italic text-gold-200">
                {["Jathakam", "Porutham", "Muhurtham", "Prasnam"].map((s, i) => (
                  <li key={s} className={i % 2 ? "text-right" : ""}>{`{${s}}`}</li>
                ))}
              </ul>
              <a href="#services" className="flex items-center justify-between gap-3 rounded-full bg-maroon-950/70 py-1.5 pl-4 pr-1.5 text-sm">
                Our services
                <span className="flex h-8 w-12 items-center justify-center rounded-full bg-ivory text-maroon-900">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function Welcome() {
  const points = [
    { title: "Experience", text: profile.experience },
    { title: "Family tradition & lineage", text: profile.lineage },
    { title: "Traditional knowledge", text: profile.knowledge },
  ];
  return (
    <section id="welcome" className="py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-cream-200/70" />
          <div className="relative rounded-[2.5rem] border border-brown-900/10 bg-ivory p-8">
            <Nilavilakku className="mx-auto w-3/5" title="Nilavilakku, the traditional Kerala lamp" />
            <p className="mt-6 text-center font-serif text-xl italic text-maroon-800">
              “Every consultation begins by lighting the Nilavilakku.”
            </p>
          </div>
          <div className="absolute -bottom-8 -right-6 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-maroon-900 text-center text-ivory shadow-xl">
            <span className="font-serif text-4xl text-gold-300">{site.astrologer.yearsOfExperience}</span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em]">Years of<br />practice</span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Namaskaram</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-maroon-900 sm:text-5xl">
              Welcome to Traditional <Accent>Kerala</Accent> Astrology
            </h2>
            <Ornament className="mt-5" />
            <p className="mt-6 text-lg leading-relaxed text-brown-700">{profile.shortIntro}</p>
          </Reveal>
          <dl className="mt-8 space-y-5">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="flex gap-5 rounded-[1.5rem] border border-brown-900/10 bg-ivory/70 p-5">
                <span aria-hidden className="mt-1.5 h-3 w-3 shrink-0 rotate-45 bg-gold-500" />
                <div>
                  <dt className="font-serif text-xl text-maroon-900">{p.title}</dt>
                  <dd className="mt-1 leading-relaxed text-brown-500">{p.text}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal className="mt-9">
            <ButtonLink href="/about">Read More</ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function Services() {
  return (
    <section id="services" className="bg-cream-100/70 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Astrology services"
          title={<>Time-honoured <Accent>practices</Accent></>}
          intro="Six traditional consultations practised in Kerala for generations, each following its classical method."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 100}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function WhyChooseUs() {
  const reasons = [
    { title: "Traditional Kerala knowledge", text: "Methods drawn from the classical texts and practices of Kerala Jyothisham." },
    { title: "Personalised guidance", text: "Every chart is studied individually, with time given to your questions." },
    { title: "Experience & expertise", text: `${site.astrologer.yearsOfExperience} years of practice rooted in a family tradition of astrology.` },
    { title: "Traditional consultation methods", text: "Prasnam, Thamboola and Ashtamangala methods carried out as handed down." },
    { title: "Online consultations", text: "Consult by phone, WhatsApp or video call from anywhere in the world." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-maroon-900 px-6 py-16 sm:px-12 lg:px-16">
          <Stars />
          <ZodiacWheel tone="light" className="pointer-events-none absolute -right-40 -top-40 -z-10 w-[36rem] animate-spin-slow opacity-15" />
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <SectionHeading
                light
                align="left"
                eyebrow="Why choose us"
                title={<>Guidance rooted in <Accent light>tradition</Accent></>}
                intro="Kerala astrology is valued for its precision and its careful, unhurried method. That is the spirit in which every consultation is offered."
              />
              <div className="mt-10 hidden lg:block">
                <KeralaChart tone="light" className="w-56" />
              </div>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <Reveal
                  as="li"
                  key={r.title}
                  delay={i * 80}
                  className={`rounded-[1.75rem] border border-gold-300/20 bg-maroon-950/40 p-7 backdrop-blur-sm transition-colors hover:border-gold-300/50 ${
                    i === reasons.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="font-serif text-lg italic text-gold-400">{`{0${i + 1}}`}</span>
                  <h3 className="mt-3 font-serif text-2xl text-ivory">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-cream-200/80">{r.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function Experience() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-gold-500/40 p-3">
            <div className="overflow-hidden rounded-[1.5rem] bg-cream-100">
              <Portrait className="aspect-[4/5] w-full" />
            </div>
          </div>
          <div className="absolute -left-4 bottom-10 rounded-[1.25rem] border border-brown-900/10 bg-ivory px-5 py-4 shadow-lg">
            <p className="text-xs uppercase tracking-[0.18em] text-gold-600">Lineage</p>
            <p className="font-serif text-xl text-maroon-900">{site.astrologer.familyName}</p>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>The astrologer</Eyebrow>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-maroon-900">{site.astrologer.name}</h2>
            <p className="mt-2 text-lg text-gold-600">{site.astrologer.title} · {site.astrologer.hometown}</p>
            <p className="mt-6 text-lg leading-relaxed text-brown-700">{profile.biography[0]}</p>
            <p className="mt-4 leading-relaxed text-brown-500">{profile.lineage}</p>
          </Reveal>
          <Reveal className="mt-8 grid gap-4 sm:grid-cols-[auto_1fr]">
            <div className="flex flex-col justify-center rounded-[1.5rem] bg-maroon-900 px-8 py-6 text-center text-ivory">
              <span className="font-serif text-5xl text-gold-300">{site.astrologer.yearsOfExperience}</span>
              <span className="mt-1 text-xs uppercase tracking-[0.2em]">Years of experience</span>
            </div>
            <div className="rounded-[1.5rem] border border-brown-900/10 bg-ivory p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-gold-600">Areas of expertise</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profile.expertise.map((e) => (
                  <li key={e} className="rounded-full bg-cream-100 px-3 py-1.5 text-sm text-brown-700">{e}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="mt-8">
            <TextLink href="/about">Full profile</TextLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function OnlineServices() {
  return (
    <section className="bg-cream-100/70 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Online astrology services"
          title={<>Consult from <Accent>anywhere</Accent></>}
          intro="Traditional Kerala astrology for families in Kerala, across India and abroad, arranged directly by phone, WhatsApp or email."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {onlineServices.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 120}>
              <article className="group grid h-full overflow-hidden rounded-[2rem] border border-brown-900/10 bg-ivory p-3 sm:grid-cols-[0.8fr_1fr]">
                <ArtPanel art={s.art} variant={i % 3 === 0 ? "maroon" : "cream"} className="aspect-[4/3] rounded-[1.5rem] sm:aspect-auto" artClassName="w-3/5 transition-transform duration-700 group-hover:scale-105" />
                <div className="flex flex-col p-5 sm:p-7">
                  <p lang="ml" className="text-sm text-gold-600">{s.nameMl}</p>
                  <h3 className="mt-1 font-serif text-3xl text-maroon-900">{s.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-brown-500">{s.summary}</p>
                  <div className="mt-6">
                    <ButtonLink href={`/online-services#${s.id}`} variant="outline" className="px-5 py-2.5 text-sm">
                      Know More
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function LatestArticles() {
  const latest = sortedArticles.slice(0, 3);
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading align="left" eyebrow="Knowledge" title={<>Latest <Accent>articles</Accent></>} />
          <TextLink href="/articles">All articles</TextLink>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {latest.map((a, i) => (
            <Reveal key={a.slug} delay={i * 100}>
              <ArticleCard article={a} large={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function Testimonials() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading eyebrow="Kind words" title={<>From those who <Accent>consulted</Accent></>} />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className={`relative flex h-full flex-col rounded-[2rem] p-8 ${i === 1 ? "bg-maroon-900 text-ivory" : "border border-brown-900/10 bg-ivory"}`}>
                <span aria-hidden className={`font-serif text-7xl leading-none ${i === 1 ? "text-gold-400" : "text-gold-500"}`}>“</span>
                <blockquote className={`-mt-4 flex-1 font-serif text-xl italic leading-relaxed ${i === 1 ? "text-cream-100" : "text-brown-700"}`}>
                  {t.quote}
                </blockquote>
                <figcaption className={`mt-8 flex items-center gap-4 border-t pt-5 ${i === 1 ? "border-gold-300/20" : "border-brown-900/10"}`}>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full font-serif text-lg ${i === 1 ? "bg-gold-500 text-maroon-950" : "bg-maroon-900 text-gold-300"}`}>
                    ✦
                  </span>
                  <span>
                    <span className="block font-medium">{t.name}</span>
                    <span className={`text-sm ${i === 1 ? "text-gold-300" : "text-brown-400"}`}>{t.place} · {t.service}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
