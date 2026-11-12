/**
 * Central business details for Gangothri Jyothishalayam.
 *
 * EVERYTHING in square brackets is placeholder content. Replace it with the
 * astrologer's real, verified details before publishing. Nothing here is a
 * claim about the astrologer's actual qualifications or experience.
 */

export const site = {
  name: "Gangothri Jyothishalayam",
  nameMl: "ഗംഗോത്രി ജ്യോതിഷാലയം",
  tagline: "Traditional Kerala Astrology",
  copyrightYear: 2026,

  astrologer: {
    name: "Usha S",
    title: "Astrologer",
    yearsOfExperience: "20",
    familyName: "[Family / Tharavadu Name]",
    hometown: "[Hometown], Kerala",
    /** Put a real photo in /public/images and set e.g. "/images/astrologer.jpg" */
    photo: "/images/image1.jpeg" as string | null,
    /** Natural size of the photo, used to keep its proportions */
    photoSize: { width: 1199, height: 1312 },
  },

  contact: {
    phoneDisplay: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    /** International format without + or spaces */
    whatsapp: "910000000000",
    email: "info@example.com",
    address: [
      "[Building / House Name]",
      "[Street, Locality]",
      "[Town, District], Kerala – [PIN]",
    ],
    hours: "[Consultation days & hours, e.g. Monday – Saturday, 9:00 AM – 6:00 PM]",
    /** Text used for the Google Maps embed — replace with the exact address */
    mapQuery: "Kerala, India",
  },

  socials: [
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  ] as const,
} as const;

export function whatsappLink(message = "Namaskaram, I would like to know more about your astrology services.") {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mapsEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapQuery)}&output=embed`;
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.mapQuery)}`;
}

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Online Services",
    href: "/online-services",
    children: [
      { label: "Horoscope Making", href: "/online-services#horoscope-making" },
      { label: "Matching Jathakam", href: "/online-services#matching-jathakam" },
      { label: "Online Predictions", href: "/online-services#online-predictions" },
      { label: "Muhurtham", href: "/online-services#muhurtham" },
    ],
  },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

/**
 * Profile copy used on the Home and About pages. Bracketed text must be
 * replaced with the astrologer's own words and verified facts.
 */
export const profile = {
  shortIntro:
    "Gangothri Jyothishalayam is the practice of [Astrologer Full Name], a traditional Kerala astrologer who follows the classical methods of Jyothisham as they have been handed down through generations of practitioners in Kerala.",
  lineage:
    "The knowledge practised here comes from the [Family / Tharavadu Name] family of [Hometown], where astrology has been studied and practised for [number] generations. [Add the names of family elders or the guru under whom the astrologer trained.]",
  knowledge:
    "Consultations draw on the classical texts studied in the Kerala tradition, such as Brihat Parasara Hora Sastra, Prasna Marga and Muhurtha texts, together with careful calculation from the Panchangam. [Edit to list the texts and systems the astrologer actually follows.]",
  experience:
    "[Astrologer Full Name] has been offering consultations for [XX] years. [Add a short, factual note about the practice — where it began, and the kinds of consultations most often requested.]",
  biography: [
    "[Write a personal introduction in the astrologer's own voice: where they grew up, how they first came to astrology, and what the practice means to them.]",
    "[Describe the years of learning — the teachers, the texts studied, the daily discipline of calculation and observation — and how the practice developed into Gangothri Jyothishalayam.]",
  ],
  philosophy: [
    "Astrology in the Kerala tradition is a discipline of careful calculation, patient observation and honest counsel. Each consultation begins with accurate birth details and an unhurried study of the chart.",
    "Guidance is offered with clarity and respect for the person seeking it. The aim is to help people understand their situation and make thoughtful decisions, never to create fear or dependence.",
    "[Add the astrologer's own words on how they approach consultations.]",
  ],
  expertise: [
    "Jathakam preparation & reading",
    "Prasnam (horary astrology)",
    "Muhurtham selection",
    "Porutham / marriage matching",
    "Thamboola Prasnam",
    "Ashtamangala Prasnam",
  ],
};
