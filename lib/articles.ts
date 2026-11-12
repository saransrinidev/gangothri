import type { ArtKey } from "./services";

export const categories = [
  "Kerala Astrology",
  "Jathakam",
  "Nakshatras",
  "Muhurtham",
  "Traditional Astrology",
  "Astrology Knowledge",
] as const;

export type Category = (typeof categories)[number];

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  lang: "en" | "ml";
  category: Category;
  date: string; // ISO
  readMinutes: number;
  excerpt: string;
  art: ArtKey;
  featured?: boolean;
  body: Block[];
};

/** Sample articles — edit or replace freely. Dates are placeholders. */
export const articles: Article[] = [
  {
    slug: "understanding-the-kerala-rashi-chakra",
    title: "Understanding the Kerala Rashi Chakra",
    lang: "en",
    category: "Kerala Astrology",
    date: "2026-10-30",
    readMinutes: 6,
    art: "chart",
    featured: true,
    excerpt:
      "Why Kerala horoscopes are drawn as a square, how the twelve signs are arranged, and how to read the chart at a glance.",
    body: [
      { type: "p", text: "Anyone who has seen a Kerala Jathakam will recognise its square chart: twelve boxes arranged around an empty centre. This is the Rashi Chakra in the South Indian style, and it is the visual heart of Kerala astrology." },
      { type: "h2", text: "Fixed signs, moving planets" },
      { type: "p", text: "In the South Indian chart the signs stay in fixed positions. Meenam (Pisces) sits in the top-left box, and the signs then proceed clockwise: Medam, Edavam, Midhunam along the top, then Karkidakam, Chingam, Kanni, Thulam, Vrischikam, Dhanu, Makaram and Kumbham around the square." },
      { type: "p", text: "Because the signs never move, the planets and the Lagna are written into whichever box they occupy. With practice, the eye learns to read a chart in seconds." },
      { type: "h2", text: "The Lagna and the houses" },
      { type: "p", text: "The Lagna, or ascendant, is marked in its sign, and the houses are counted clockwise from there. The first house relates to the self, the fourth to home and mother, the seventh to partnership, and the tenth to work, among other significations." },
      { type: "quote", text: "The chart is a map of a single moment, read with patience and care." },
      { type: "h2", text: "The centre of the chart" },
      { type: "p", text: "The empty centre is often used to write the name, birth details or the Navamsa chart's label. It carries no sign of its own, and it frames the twelve around it." },
    ],
  },
  {
    slug: "what-a-jathakam-contains",
    title: "What a Traditional Jathakam Contains",
    lang: "en",
    category: "Jathakam",
    date: "2026-10-18",
    readMinutes: 5,
    art: "palmleaf",
    featured: true,
    excerpt:
      "From the Rashi and Navamsa charts to the dasa periods, a guide to the parts of a Kerala horoscope and what each one tells the astrologer.",
    body: [
      { type: "p", text: "A Kerala Jathakam is more than a chart. Traditionally it is a complete document that records the birth moment and sets out the framework for reading a person's life." },
      { type: "h2", text: "The main parts" },
      { type: "list", items: [
        "Birth details: name, date, time and place of birth.",
        "Panchangam details of birth: tithi, vara, nakshatra, yoga and karana.",
        "The Rashi Chakra, showing the planets in the twelve signs.",
        "The Navamsa chart, a divisional chart used to refine the reading.",
        "Planetary longitudes and the balance of dasa at birth.",
        "The sequence of Vimshottari dasa and apahara periods.",
      ] },
      { type: "h2", text: "The dasa system" },
      { type: "p", text: "The Vimshottari dasa divides a 120-year cycle among the nine grahas. The starting period depends on the birth Nakshatra, which is why the Moon's exact position at birth is so important." },
      { type: "h2", text: "Keeping your Jathakam safe" },
      { type: "p", text: "Families once stored palm-leaf horoscopes wrapped in cloth. Today it is wise to keep both the original and a clear scanned copy, as the Jathakam will be needed at many points in life." },
    ],
  },
  {
    slug: "introduction-to-the-27-nakshatras",
    title: "An Introduction to the 27 Nakshatras",
    lang: "en",
    category: "Nakshatras",
    date: "2026-10-05",
    readMinutes: 7,
    art: "wheel",
    excerpt:
      "The lunar mansions that shape Kerala birthdays, naming, matching and Muhurtham, and why your birth star matters.",
    body: [
      { type: "p", text: "The zodiac of 360 degrees is divided into 27 Nakshatras of 13°20′ each. The Nakshatra in which the Moon is placed at birth is the Janma Nakshatra, or birth star." },
      { type: "h2", text: "The birth star in Kerala life" },
      { type: "p", text: "In Kerala many people celebrate their birthday (pirannal) according to their birth star rather than the calendar date. The Nakshatra also guides naming, Porutham, Muhurtham and the start of the dasa sequence." },
      { type: "h2", text: "The twenty-seven stars" },
      { type: "p", text: "Ashwathy, Bharani, Karthika, Rohini, Makayiram, Thiruvathira, Punartham, Pooyam, Ayilyam, Makam, Pooram, Uthram, Atham, Chithira, Chothi, Vishakham, Anizham, Thrikketta, Moolam, Pooradam, Uthradam, Thiruvonam, Avittam, Chathayam, Pooruruttathi, Uthrattathi and Revathi." },
      { type: "h2", text: "Padas" },
      { type: "p", text: "Each Nakshatra is further divided into four padas (quarters) of 3°20′. The pada helps determine the Navamsa and adds finer detail to the reading." },
    ],
  },
  {
    slug: "choosing-a-muhurtham",
    title: "Choosing a Muhurtham for Life's Milestones",
    lang: "en",
    category: "Muhurtham",
    date: "2026-09-21",
    readMinutes: 5,
    art: "muhurtham",
    excerpt:
      "What astrologers look at when selecting an auspicious time for weddings, housewarming and other ceremonies.",
    body: [
      { type: "p", text: "A Muhurtham is a chosen window of time for beginning an important event. Choosing one involves several layers of calculation." },
      { type: "h2", text: "The five limbs of the Panchangam" },
      { type: "list", items: [
        "Tithi: the lunar day.",
        "Vara: the weekday.",
        "Nakshatra: the Moon's star on that day.",
        "Yoga: a combination of the Sun's and Moon's longitudes.",
        "Karana: half of a tithi.",
      ] },
      { type: "h2", text: "Personal factors" },
      { type: "p", text: "Beyond the Panchangam, the astrologer considers the birth stars of the people involved and the Lagna rising at the proposed time. Periods such as Rahukalam are avoided." },
      { type: "h2", text: "Plan early" },
      { type: "p", text: "Auspicious dates in the wedding season are in demand. Consulting a few months in advance gives the family more good options to choose from." },
    ],
  },
  {
    slug: "the-ten-poruthams",
    title: "The Ten Poruthams in Kerala Marriage Matching",
    lang: "en",
    category: "Traditional Astrology",
    date: "2026-09-08",
    readMinutes: 6,
    art: "porutham",
    excerpt:
      "Dinam, Ganam, Rajju, Vedha and the rest: what each porutham considers, and why matching looks beyond a score.",
    body: [
      { type: "p", text: "Porutham, traditional horoscope matching, is a customary step before a marriage is arranged in Kerala. It begins with the birth stars of the two people." },
      { type: "h2", text: "The ten factors" },
      { type: "list", items: [
        "Dinam", "Ganam", "Mahendram", "Sthree Deergham", "Yoni",
        "Rasi", "Rasyadhipathi", "Vasyam", "Rajju", "Vedha",
      ] },
      { type: "p", text: "Each porutham examines a different aspect of the relationship. In the Kerala tradition, Rajju and Vedha are given particular attention." },
      { type: "h2", text: "More than a score" },
      { type: "p", text: "A thorough match also compares papasamyam (balance of malefic influences), Chovva dosham and the dasa periods both people will run after marriage. A good astrologer explains the whole picture rather than giving a single number." },
    ],
  },
  {
    slug: "ashtamangala-prasnam-a-kerala-tradition",
    title: "Ashtamangala Prasnam: A Kerala Tradition",
    lang: "en",
    category: "Kerala Astrology",
    date: "2026-08-26",
    readMinutes: 6,
    art: "ashtamangala",
    featured: true,
    excerpt:
      "The ritual setting, the eight auspicious articles and the step-by-step process of Kerala's most elaborate Prasnam.",
    body: [
      { type: "p", text: "Ashtamangala Prasnam is a form of Prasnam found mainly in Kerala. It is often conducted for temples, ancestral homes and serious family matters." },
      { type: "h2", text: "The eight auspicious articles" },
      { type: "p", text: "The Ashtamangalyam is arranged before the Prasnam begins. It traditionally includes the Valkannadi (Kerala's ornamental mirror), the lit lamp, rice, flowers and other sacred items." },
      { type: "h2", text: "The process" },
      { type: "list", items: [
        "A Rashi Chakra is drawn and the Nilavilakku lit.",
        "A chosen person places gold on a sign, which becomes the Arudha.",
        "Cowrie shells are divided and counted to give the Ashtamangala numbers.",
        "The chart of the moment is cast, and omens are observed throughout.",
      ] },
      { type: "p", text: "Taken together, these indications let the astrologer study the matter in depth and suggest any remedial rituals." },
    ],
  },
  {
    slug: "panchangam-basics",
    title: "Panchangam Basics: The Five Limbs of Time",
    lang: "en",
    category: "Astrology Knowledge",
    date: "2026-08-10",
    readMinutes: 4,
    art: "lamp",
    excerpt:
      "A short guide to tithi, vara, nakshatra, yoga and karana, the five elements every Kerala almanac records for each day.",
    body: [
      { type: "p", text: "The Panchangam, literally 'five limbs', is the traditional almanac. Kerala households have long kept one at home to check festivals, auspicious days and the daily star." },
      { type: "h2", text: "The five limbs" },
      { type: "list", items: [
        "Tithi: the lunar day, based on the angle between Sun and Moon.",
        "Vara: the weekday, each ruled by a graha.",
        "Nakshatra: the star in which the Moon moves that day.",
        "Yoga: one of 27 combinations of solar and lunar longitude.",
        "Karana: half a tithi; there are eleven karanas.",
      ] },
      { type: "p", text: "Together they describe the quality of a day, and they form the starting point for Muhurtham selection." },
    ],
  },
  {
    slug: "janma-nakshatram",
    title: "ജന്മനക്ഷത്രം: അറിയേണ്ട അടിസ്ഥാന കാര്യങ്ങൾ",
    lang: "ml",
    category: "Nakshatras",
    date: "2026-10-12",
    readMinutes: 4,
    art: "wheel",
    excerpt:
      "ജനനസമയത്ത് ചന്ദ്രൻ നിൽക്കുന്ന നക്ഷത്രമാണ് ജന്മനക്ഷത്രം. ഇരുപത്തിയേഴ് നക്ഷത്രങ്ങളെയും അവയുടെ പ്രാധാന്യത്തെയും കുറിച്ച് ഒരു ലഘു പരിചയം.",
    body: [
      { type: "p", text: "ഭാരതീയ ജ്യോതിഷത്തിൽ രാശിചക്രത്തെ ഇരുപത്തിയേഴ് നക്ഷത്രങ്ങളായി വിഭജിച്ചിരിക്കുന്നു. ഓരോ നക്ഷത്രത്തിനും 13 ഡിഗ്രി 20 മിനിറ്റ് വ്യാപ്തിയുണ്ട്. ഒരാൾ ജനിക്കുന്ന സമയത്ത് ചന്ദ്രൻ ഏത് നക്ഷത്രത്തിലാണോ സഞ്ചരിക്കുന്നത്, അതാണ് അയാളുടെ ജന്മനക്ഷത്രം." },
      { type: "h2", text: "ഇരുപത്തിയേഴ് നക്ഷത്രങ്ങൾ" },
      { type: "p", text: "അശ്വതി, ഭരണി, കാർത്തിക, രോഹിണി, മകയിരം, തിരുവാതിര, പുണർതം, പൂയം, ആയില്യം, മകം, പൂരം, ഉത്രം, അത്തം, ചിത്തിര, ചോതി, വിശാഖം, അനിഴം, തൃക്കേട്ട, മൂലം, പൂരാടം, ഉത്രാടം, തിരുവോണം, അവിട്ടം, ചതയം, പൂരുരുട്ടാതി, ഉത്രട്ടാതി, രേവതി." },
      { type: "h2", text: "കേരളീയ ജീവിതത്തിൽ നക്ഷത്രത്തിന്റെ സ്ഥാനം" },
      { type: "p", text: "കേരളത്തിൽ പിറന്നാൾ ആഘോഷിക്കുന്നത് പലപ്പോഴും ജന്മനക്ഷത്രം അനുസരിച്ചാണ്. വിവാഹപ്പൊരുത്തം, മുഹൂർത്തം നിശ്ചയിക്കൽ, ദശാകാലം കണക്കാക്കൽ എന്നിവയിലെല്ലാം ജന്മനക്ഷത്രത്തിന് പ്രധാന പങ്കുണ്ട്." },
      { type: "p", text: "സ്വന്തം ജന്മനക്ഷത്രത്തെക്കുറിച്ചോ ജാതകത്തെക്കുറിച്ചോ കൂടുതൽ അറിയാൻ ആഗ്രഹിക്കുന്നവർക്ക് ജ്യോതിഷനുമായി നേരിട്ട് ബന്ധപ്പെടാം." },
    ],
  },
  {
    slug: "jathakam-ezhuthan-avashyamaya-vivarangal",
    title: "ജാതകം എഴുതാൻ ആവശ്യമായ വിവരങ്ങൾ",
    lang: "ml",
    category: "Jathakam",
    date: "2026-09-15",
    readMinutes: 3,
    art: "palmleaf",
    excerpt:
      "കൃത്യമായ ജാതകം തയ്യാറാക്കാൻ ജനനത്തീയതി, ജനനസമയം, ജനനസ്ഥലം എന്നിവ വളരെ പ്രധാനമാണ്.",
    body: [
      { type: "p", text: "ഒരാളുടെ ജനനസമയത്തെ ഗ്രഹസ്ഥിതി രേഖപ്പെടുത്തുന്ന പ്രമാണമാണ് ജാതകം. കേരളത്തിൽ പണ്ടുകാലത്ത് താളിയോലകളിലാണ് ജാതകം എഴുതിയിരുന്നത്." },
      { type: "h2", text: "തയ്യാറാക്കി വെക്കേണ്ട വിവരങ്ങൾ" },
      { type: "list", items: [
        "പൂർണ്ണമായ പേര്",
        "ജനനത്തീയതി",
        "കൃത്യമായ ജനനസമയം (മണിക്കൂർ, മിനിറ്റ്)",
        "ജനനസ്ഥലം (സ്ഥലം, ജില്ല, സംസ്ഥാനം)",
      ] },
      { type: "h2", text: "ജനനസമയത്തിന്റെ പ്രാധാന്യം" },
      { type: "p", text: "ലഗ്നം ഏകദേശം രണ്ട് മണിക്കൂറിനുള്ളിൽ മാറുന്നതിനാൽ ജനനസമയത്തിലെ ചെറിയ വ്യത്യാസം പോലും ജാതകത്തെ ബാധിക്കാം. ആശുപത്രി രേഖകളിലെ സമയം ലഭ്യമാണെങ്കിൽ അത് ഉപയോഗിക്കുന്നതാണ് ഉചിതം." },
      { type: "p", text: "സംശയങ്ങൾ ഉണ്ടെങ്കിൽ ജ്യോതിഷനുമായി മുൻകൂട്ടി സംസാരിക്കുക." },
    ],
  },
];

export const sortedArticles = [...articles].sort((a, b) => b.date.localeCompare(a.date));

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(article: Article, count = 3) {
  const same = sortedArticles.filter((a) => a.slug !== article.slug && a.category === article.category);
  const rest = sortedArticles.filter((a) => a.slug !== article.slug && a.category !== article.category);
  return [...same, ...rest].slice(0, count);
}

export function formatDate(iso: string, lang: "en" | "ml" = "en") {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(lang === "ml" ? "ml-IN" : "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
