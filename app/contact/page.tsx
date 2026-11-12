import type { Metadata } from "next";
import { Stars } from "@/components/ArtPanel";
import { ContactForm } from "@/components/ContactForm";
import { Clock, Mail, MapPin, Phone, WhatsApp, socialIcons } from "@/components/icons";
import { Nilavilakku } from "@/components/illustrations";
import { Reveal } from "@/components/Reveal";
import { Accent, Container, Eyebrow } from "@/components/ui";
import { mapsEmbedUrl, mapsLink, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.astrologer.name} at ${site.name} by phone, WhatsApp or email.`,
};

export default function ContactPage() {
  const details = [
    { icon: Phone, label: "Phone", value: site.contact.phoneDisplay, href: site.contact.phoneHref },
    { icon: WhatsApp, label: "WhatsApp", value: "Message on WhatsApp", href: whatsappLink() },
    { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: Clock, label: "Consultation hours", value: site.contact.hours },
  ];

  return (
    <>
      <section className="px-3 pt-2 sm:px-5">
        <div className="mx-auto grid max-w-[88rem] gap-4 overflow-hidden rounded-[2.25rem] border border-brown-900/10 bg-ivory p-3 lg:grid-cols-[1fr_1.1fr]">
          {/* contact details panel */}
          <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-maroon-900 p-7 text-cream-200 sm:p-10">
            <Stars />
            <div aria-hidden className="absolute -bottom-32 -right-24 -z-10 aspect-square w-[70%] rounded-full bg-gold-500/80" />
            <div aria-hidden className="stripes absolute -bottom-6 -right-10 -z-10 h-2/5 w-2/3 opacity-70 [mask-image:linear-gradient(135deg,transparent_40%,black_41%)]" />
            <Eyebrow light>Contact</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-ivory sm:text-6xl">
              Get in <Accent light>touch</Accent>
            </h1>
            <p className="mt-5 max-w-md text-lg text-cream-200/85">
              Speak with {site.astrologer.name} to ask about a consultation, the details to prepare and available times.
            </p>

            <address className="mt-10 not-italic">
              <p className="font-serif text-2xl text-ivory">{site.astrologer.name}</p>
              <p className="text-gold-300">{site.name}</p>
              <p className="mt-4 flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span>
                  {site.contact.address.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </span>
              </p>
            </address>

            <ul className="mt-8 space-y-4">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-300/30 text-gold-300">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-gold-300/80">{label}</span>
                    {href ? (
                      <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="break-all text-ivory hover:text-gold-300">
                        {value}
                      </a>
                    ) : (
                      <span className="text-ivory">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.18em] text-gold-300/80">Follow</p>
              <ul className="mt-3 flex gap-3">
                {site.socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-gold-200 transition-colors hover:bg-gold-300 hover:text-maroon-950">
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* enquiry form */}
          <div className="relative px-4 py-8 sm:px-10 sm:py-12">
            <Nilavilakku className="pointer-events-none absolute right-6 top-6 hidden w-20 opacity-80 sm:block" />
            <div className="animate-rise">
              <Eyebrow>Enquiry</Eyebrow>
              <h2 className="mt-3 font-serif text-4xl text-maroon-900">Send an enquiry</h2>
              <p className="mt-3 max-w-md text-brown-500">
                Share your question and contact details, and the astrologer will reply.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-[2.25rem] border border-brown-900/10 bg-ivory p-3">
              <iframe
                title={`Map showing the location of ${site.name}`}
                src={mapsEmbedUrl()}
                className="h-[420px] w-full rounded-[1.75rem] grayscale-[35%] sepia-[25%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-col items-start justify-between gap-3 px-4 py-4 sm:flex-row sm:items-center">
                <p className="flex items-center gap-2 text-brown-700">
                  <MapPin className="h-5 w-5 text-gold-600" /> {site.contact.address.join(", ")}
                </p>
                <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="text-sm font-medium uppercase tracking-[0.14em] text-maroon-700 hover:text-maroon-900">
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
