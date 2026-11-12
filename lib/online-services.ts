import type { ArtKey } from "./services";

export type OnlineService = {
  id: string;
  name: string;
  nameMl: string;
  art: ArtKey;
  summary: string;
  description: string[];
  prepare: string[];
  howItWorks: string[];
  delivery: string;
  whatsappMessage: string;
};

/**
 * Delivery methods and timelines are placeholders. Confirm them with the
 * astrologer before publishing.
 */
export const onlineServices: OnlineService[] = [
  {
    id: "horoscope-making",
    name: "Horoscope Making",
    nameMl: "ജാതകം എഴുതൽ",
    art: "palmleaf",
    summary:
      "A complete traditional Kerala Jathakam prepared from your birth details, for yourself or for a newborn in the family.",
    description: [
      "The horoscope is prepared in the traditional Kerala format, with the Rashi Chakra, Navamsa, birth Nakshatra, planetary positions and the Vimshottari dasa periods.",
      "It can be prepared for adults whose horoscope was never written, to replace a lost or damaged Jathakam, or for a newborn child.",
    ],
    prepare: [
      "Full name of the person",
      "Date of birth",
      "Exact time of birth (from a hospital record if available)",
      "Place of birth: town, district, state and country",
      "Language preference: Malayalam or English",
    ],
    howItWorks: [
      "Contact the astrologer by phone, WhatsApp or email with the birth details.",
      "The details are confirmed and any doubts about the birth time are discussed.",
      "The horoscope is calculated and prepared.",
      "If you wish, a follow-up call can be arranged to explain the Jathakam.",
    ],
    delivery:
      "[Confirm delivery: e.g. PDF by email or WhatsApp, and/or printed copy by post. Typical time: [X] days.]",
    whatsappMessage: "Namaskaram, I would like to know more about Horoscope Making.",
  },
  {
    id: "matching-jathakam",
    name: "Matching Jathakam",
    nameMl: "ജാതക പൊരുത്തം",
    art: "porutham",
    summary:
      "Traditional Kerala horoscope matching for marriage, studying the ten poruthams and comparing both charts in full.",
    description: [
      "Both horoscopes are studied side by side. This covers the ten star-based poruthams, papasamyam (balance of malefic influences), Chovva dosham and the dasa periods after marriage.",
      "The findings are explained clearly, including strengths and points to consider, so the family can make an informed decision.",
    ],
    prepare: [
      "Both horoscopes (photo or scan), if available",
      "Otherwise, full birth details for both people: name, date, exact time and place of birth",
      "Birth Nakshatra of both, if known",
    ],
    howItWorks: [
      "Send both horoscopes or birth details through WhatsApp or email.",
      "The astrologer studies and compares the two charts.",
      "The results are shared, and a call can be arranged to discuss them.",
    ],
    delivery:
      "[Confirm delivery: e.g. written summary by WhatsApp/email and a phone discussion. Typical time: [X] days.]",
    whatsappMessage: "Namaskaram, I would like to know more about Matching Jathakam.",
  },
  {
    id: "online-predictions",
    name: "Online Predictions",
    nameMl: "ഓൺലൈൻ ഫലപ്രവചനം",
    art: "wheel",
    summary:
      "A personal consultation over phone or video call, based on your horoscope and the questions that matter to you.",
    description: [
      "The consultation follows the same careful method as an in-person visit. The horoscope is studied in advance, and the conversation focuses on your questions.",
      "It suits people living outside Kerala or abroad who wish to consult a traditional Kerala astrologer.",
    ],
    prepare: [
      "Your horoscope, or full birth details",
      "A short list of the questions or areas you would like guidance on",
      "Preferred days and times for the call, with your time zone",
    ],
    howItWorks: [
      "Contact the astrologer to request a consultation and agree on a time.",
      "Share your birth details and questions beforehand.",
      "The consultation takes place by phone, WhatsApp call or video call at the agreed time.",
    ],
    delivery:
      "[Confirm format: e.g. phone / WhatsApp / video call, approx. [XX] minutes. Optional written summary.]",
    whatsappMessage: "Namaskaram, I would like to arrange an online consultation.",
  },
  {
    id: "muhurtham",
    name: "Muhurtham",
    nameMl: "മുഹൂർത്തം",
    art: "muhurtham",
    summary:
      "Auspicious dates and times for weddings, housewarming, naming ceremonies, Vidyarambham and other occasions.",
    description: [
      "The Muhurtham is selected using the Panchangam (tithi, vara, nakshatra, yoga and karana) and the rising Lagna, and it takes into account the birth stars of the people involved.",
      "You receive the date, a precise time window, and any traditional points to observe on the day.",
    ],
    prepare: [
      "The occasion: wedding, housewarming, naming, business opening and so on",
      "Location of the event",
      "Preferred month or date range",
      "Birth Nakshatra or birth details of the main people involved",
    ],
    howItWorks: [
      "Share the event details and birth stars by phone, WhatsApp or email.",
      "Suitable dates within your range are checked against the Panchangam.",
      "The chosen Muhurtham is shared, with alternatives where possible.",
    ],
    delivery:
      "[Confirm delivery: e.g. by WhatsApp or email, with a written note of date and time window. Typical time: [X] days.]",
    whatsappMessage: "Namaskaram, I would like to know more about Muhurtham selection.",
  },
];
