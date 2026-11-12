import { site, whatsappLink } from "@/lib/site";
import { Stars } from "./ArtPanel";
import { Phone, WhatsApp } from "./icons";
import { Nilavilakku } from "./illustrations";
import { Reveal } from "./Reveal";
import { ButtonLink, Container, Eyebrow } from "./ui";

export function ContactCTA({
  title = "Seeking Traditional Astrological Guidance?",
  text = "Connect with us to learn more about our traditional astrology services.",
  whatsappMessage,
}: {
  title?: string;
  text?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-maroon-900 px-6 py-14 sm:px-14 sm:py-20">
            <Stars />
            <div aria-hidden className="absolute -bottom-40 -right-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-gold-500/85" />
            <div aria-hidden className="stripes absolute -bottom-10 -right-10 -z-10 h-72 w-[28rem] opacity-80 [mask-image:linear-gradient(140deg,transparent_40%,black_41%)]" />
            <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <Eyebrow light>{site.name}</Eyebrow>
                <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] text-ivory sm:text-6xl">{title}</h2>
                <p className="mt-5 max-w-xl text-lg text-cream-200/85">{text}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <ButtonLink href={site.contact.phoneHref} variant="gold" icon={<Phone className="h-5 w-5" />}>
                    Call Now
                  </ButtonLink>
                  <ButtonLink href={whatsappLink(whatsappMessage)} variant="ivory" icon={<WhatsApp className="h-5 w-5" />}>
                    WhatsApp
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="outline-light">
                    Contact Us
                  </ButtonLink>
                </div>
              </div>
              <div className="hidden justify-center lg:flex">
                <Nilavilakku tone="light" className="w-56 animate-float" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
