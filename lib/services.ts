export type ArtKey =
  | "chart"
  | "wheel"
  | "temple"
  | "lamp"
  | "betel"
  | "cowrie"
  | "ashtamangala"
  | "porutham"
  | "muhurtham"
  | "palmleaf";

export type Service = {
  slug: string;
  name: string;
  nameMl: string;
  art: ArtKey;
  /** One line for cards */
  short: string;
  /** Paragraph for the services overview */
  description: string;
  purpose: string;
  significance: string;
  /** Detail page */
  intro: string;
  sections: { title: string; body: string[] }[];
  significanceDetail: string[];
  process: { title: string; body: string }[];
  gallery: { art: ArtKey; caption: string }[];
};

export const services: Service[] = [
  {
    slug: "jathakam",
    name: "Jathakam",
    nameMl: "ജാതകം",
    art: "palmleaf",
    short: "Horoscope preparation and interpretation based on birth details.",
    description:
      "A Jathakam is the traditional Kerala horoscope: a record of the positions of the grahas at the moment of birth, calculated from the date, time and place of birth and set out in the square Rashi Chakra.",
    purpose:
      "To prepare an accurate birth chart and explain what it indicates about temperament, life periods (dasas) and areas that need attention.",
    significance:
      "In Kerala the Jathakam has long been prepared soon after a child's birth and kept for life, once written on palm leaves (thaliyola).",
    intro:
      "The Jathakam is the foundation of Kerala astrology. Almost every later consultation, from marriage matching to choosing a Muhurtham, refers back to it.",
    sections: [
      {
        title: "Preparing the horoscope",
        body: [
          "A Jathakam is calculated from three details: the date of birth, the exact time of birth and the place of birth. From these, the astrologer determines the Lagna (ascendant), the Rashi and Nakshatra of the Moon, and the positions of the nine grahas across the twelve houses.",
          "The calculation also fixes the balance of the Vimshottari dasa at birth, the system of planetary periods most widely used in Kerala to understand how different phases of life unfold.",
        ],
      },
      {
        title: "Why birth details matter",
        body: [
          "The Lagna changes roughly every two hours, and the divisional charts change even faster. A difference of a few minutes can alter the reading, so an officially recorded birth time, such as a hospital record, should be used where available.",
          "If the time of birth is uncertain, this should be mentioned at the start so the astrologer can advise on how to proceed.",
        ],
      },
      {
        title: "Interpreting the Jathakam",
        body: [
          "Interpretation looks at the strength of each graha, the lords of the houses, the yogas formed and the current and coming dasa periods. The reading is presented in plain language, covering areas such as education, work, family and health in a balanced way.",
        ],
      },
    ],
    significanceDetail: [
      "Kerala has a distinct horoscope-writing tradition. Families once commissioned a Jathakam on palm leaves, inscribed with an iron stylus (narayam) and kept carefully at home through a person's life.",
      "The Jathakam is consulted again at important moments: naming ceremonies, education, marriage and other milestones. It forms a continuous thread through a family's life.",
    ],
    process: [
      { title: "Share birth details", body: "Name, date, exact time and place of birth." },
      { title: "Calculation", body: "The chart, Nakshatra and dasa periods are calculated carefully." },
      { title: "Study & reading", body: "The astrologer studies the chart and prepares the interpretation." },
      { title: "Consultation", body: "The Jathakam is explained in person, by phone or online." },
    ],
    gallery: [
      { art: "palmleaf", caption: "Palm-leaf horoscope tradition" },
      { art: "chart", caption: "The Kerala Rashi Chakra" },
      { art: "lamp", caption: "Nilavilakku, lit at the start of work" },
    ],
  },
  {
    slug: "prasnam",
    name: "Prasnam",
    nameMl: "പ്രശ്നം",
    art: "cowrie",
    short: "Traditional question-based astrology consultation.",
    description:
      "Prasnam, or horary astrology, answers a specific question by studying the chart of the moment the question is asked, together with the omens (nimittam) observed during the consultation.",
    purpose:
      "To give guidance on a particular concern when no horoscope is available, or when a focused answer is needed about a present situation.",
    significance:
      "Prasnam is a special strength of Kerala astrology, set out in detail in the classical Kerala text Prasna Marga.",
    intro:
      "When a person comes with a sincere question, the moment itself is treated as meaningful. Prasnam studies that moment to understand the question.",
    sections: [
      {
        title: "The Prasnam method",
        body: [
          "The astrologer casts a chart for the time and place at which the question is put. The rising sign at that moment, called the Prasna Lagna, together with the Arudha, the sign indicated by the person, forms the basis of the reading.",
          "Traditionally, the astrologer also notes the surroundings, the direction from which the person arrives, the words used to ask the question and other signs. Together these are read as nimittam.",
        ],
      },
      {
        title: "When Prasnam is consulted",
        body: [
          "Prasnam is often sought for matters of health, family, work, travel, lost articles or delays in important plans. It is also useful when the birth time is unknown and a Jathakam cannot be prepared reliably.",
        ],
      },
    ],
    significanceDetail: [
      "Prasna Marga, composed in Kerala in the seventeenth century, is one of the most respected works on horary astrology and remains central to how Prasnam is practised here.",
      "Prasnam combines calculation with careful observation, and it reflects the Kerala view that astrology must stay attentive to the present moment.",
    ],
    process: [
      { title: "Frame the question", body: "Think about the matter clearly and ask one sincere question." },
      { title: "The moment is fixed", body: "The time of the question is noted and the Prasna chart cast." },
      { title: "Arudha & observation", body: "The Arudha sign and nimittam are observed and recorded." },
      { title: "Guidance", body: "The astrologer explains what the chart indicates." },
    ],
    gallery: [
      { art: "cowrie", caption: "Cowries used in traditional Prasnam" },
      { art: "chart", caption: "Chart cast for the moment of the question" },
      { art: "temple", caption: "Rooted in Kerala temple tradition" },
    ],
  },
  {
    slug: "muhurtham",
    name: "Muhurtham",
    nameMl: "മുഹൂർത്തം",
    art: "muhurtham",
    short: "Finding auspicious times for important life events.",
    description:
      "Muhurtham is the selection of an auspicious time to begin an important undertaking: a wedding, a housewarming, a child's first rice feeding, the start of education, or a new business.",
    purpose:
      "To choose a date and time when the Panchangam elements and planetary positions support the event and the people involved.",
    significance:
      "Kerala households have long begun milestones such as Vivaham, Griha Pravesham and Vidyarambham at a carefully chosen Muhurtham.",
    intro:
      "A good beginning is valued in every tradition. In Kerala astrology, the beginning is set by a carefully calculated Muhurtham.",
    sections: [
      {
        title: "How a Muhurtham is chosen",
        body: [
          "The astrologer studies the five limbs of the Panchangam (tithi, vara, nakshatra, yoga and karana) along with the rising Lagna at the proposed time. Times that are traditionally avoided, such as Rahukalam and certain inauspicious combinations, are excluded.",
          "The birth stars of the people involved are also considered, so that the chosen time is favourable for them in particular.",
        ],
      },
      {
        title: "Occasions for Muhurtham",
        body: [
          "Weddings (Vivaham) and engagements, housewarming (Griha Pravesham or Palukachal), laying the foundation of a house, naming ceremonies, Choroonu (first rice feeding), Vidyarambham (initiation into learning), the purchase of a vehicle or property, and the opening of a business.",
        ],
      },
    ],
    significanceDetail: [
      "Choosing the right moment is one of the oldest uses of Jyothisham. Kerala families often fix the Muhurtham for a wedding before any other arrangement is made.",
      "A well-chosen Muhurtham is seen as a way of beginning an important event with the right intention and in harmony with time.",
    ],
    process: [
      { title: "Describe the event", body: "Share the occasion, location and preferred date range." },
      { title: "Birth stars", body: "Provide the Nakshatra or birth details of the people involved." },
      { title: "Calculation", body: "Suitable dates are checked against the Panchangam." },
      { title: "Muhurtham given", body: "The chosen date and time window are shared with you." },
    ],
    gallery: [
      { art: "muhurtham", caption: "Time measured by the Panchangam" },
      { art: "lamp", caption: "Auspicious beginnings" },
      { art: "temple", caption: "Ceremonies at the right hour" },
    ],
  },
  {
    slug: "porutham",
    name: "Porutham",
    nameMl: "പൊരുത്തം",
    art: "porutham",
    short: "Traditional horoscope compatibility matching.",
    description:
      "Porutham is the traditional Kerala method of comparing the horoscopes of a prospective bride and groom, examining the compatibility of their birth stars and the overall balance of their charts.",
    purpose:
      "To help families understand compatibility between two horoscopes before a marriage is arranged.",
    significance:
      "Jathaka porutham has long been a customary step in Kerala marriage arrangements, often done before the families meet formally.",
    intro:
      "Marriage brings two lives and two families together. Porutham studies the two horoscopes side by side to understand how well they complement each other.",
    sections: [
      {
        title: "The ten poruthams",
        body: [
          "Kerala matching traditionally considers ten factors based on the birth stars: Dinam, Ganam, Mahendram, Sthree Deergham, Yoni, Rasi, Rasyadhipathi, Vasyam, Rajju and Vedha. Each one examines a different aspect of the relationship.",
          "Some factors, such as Rajju and Vedha, are given particular weight in the Kerala tradition.",
        ],
      },
      {
        title: "Beyond star matching",
        body: [
          "A careful Porutham also compares the horoscopes as a whole. This includes the strength of the seventh house, the balance of malefic influences (papasamyam), the assessment of Chovva dosham, and the dasa periods both people will be running after marriage.",
        ],
      },
    ],
    significanceDetail: [
      "In many Kerala families, horoscopes are exchanged and matched before a proposal moves forward. Porutham is understood as a step taken with care and in the interest of both families.",
      "The tradition looks at the whole picture rather than a single score, and it allows the astrologer to explain strengths as well as points to consider.",
    ],
    process: [
      { title: "Share both horoscopes", body: "Send both Jathakams, or full birth details for both people." },
      { title: "Star compatibility", body: "The ten poruthams are examined." },
      { title: "Chart comparison", body: "Papasamyam, Chovva dosham and dasas are compared." },
      { title: "Explanation", body: "The findings are explained clearly to the family." },
    ],
    gallery: [
      { art: "porutham", caption: "Two horoscopes, read together" },
      { art: "chart", caption: "Star and house comparison" },
      { art: "muhurtham", caption: "Followed by the wedding Muhurtham" },
    ],
  },
  {
    slug: "thamboola-prasnam",
    name: "Thamboola Prasnam",
    nameMl: "താംബൂല പ്രശ്നം",
    art: "betel",
    short: "Traditional consultation for specific questions and uncertain situations.",
    description:
      "In Thamboola Prasnam, the person seeking guidance offers betel leaves (vettila). The astrologer reads the number, condition and arrangement of the leaves alongside the Prasna chart to understand the question.",
    purpose:
      "To find guidance on a specific concern or an uncertain situation, especially when a quick but careful assessment is needed.",
    significance:
      "Betel leaves hold an auspicious place in Kerala custom. They are offered at ceremonies and to elders, and they carry that meaning into this form of Prasnam.",
    intro:
      "Thamboola Prasnam is a gentle and widely practised form of Prasnam in which a simple offering of betel leaves becomes the starting point of the reading.",
    sections: [
      {
        title: "The traditional method",
        body: [
          "The person brings or is given a bundle of betel leaves, usually with areca nut, and offers it to the astrologer with the question in mind. The astrologer counts the leaves and uses the number in the calculation.",
          "The leaves are then examined one by one, noting their freshness, colour, tears or marks and the pattern of their veins. Each leaf is associated with a house of the chart, and its condition is read alongside the Prasna Lagna.",
        ],
      },
      {
        title: "Applications",
        body: [
          "Thamboola Prasnam is consulted for personal and family matters, delays in plans, health concerns and situations where the way forward is unclear. It can be done on its own or as part of a larger Prasnam.",
        ],
      },
    ],
    significanceDetail: [
      "Offering vettila and adakka, betel leaf with areca nut, is a gesture of respect at Kerala ceremonies, weddings and temple rituals. In Thamboola Prasnam that gesture becomes part of the reading.",
      "This method reflects the Kerala Prasnam tradition, which pays close attention to signs observed at the time of consultation.",
    ],
    process: [
      { title: "Offer the leaves", body: "Betel leaves are offered with the question in mind." },
      { title: "Counting", body: "The number of leaves is counted and used in the calculation." },
      { title: "Examination", body: "Each leaf's condition is studied and related to the chart." },
      { title: "Guidance", body: "The reading is explained and questions answered." },
    ],
    gallery: [
      { art: "betel", caption: "Vettila — the betel leaf offering" },
      { art: "chart", caption: "Leaves read alongside the chart" },
      { art: "lamp", caption: "Consultation begins at the lamp" },
    ],
  },
  {
    slug: "ashtamangala-prasnam",
    name: "Ashtamangala Prasnam",
    nameMl: "അഷ്ടമംഗല പ്രശ്നം",
    art: "ashtamangala",
    short: "Traditional Kerala astrological practice for examining important situations.",
    description:
      "Ashtamangala Prasnam is the most elaborate form of Prasnam in Kerala. It uses the eight auspicious articles (Ashtamangalyam), a drawn Rashi Chakra and cowrie shells, and it is often conducted for temples, tharavadus and serious family matters.",
    purpose:
      "To examine important matters in depth, such as the affairs of a temple or an ancestral home, recurring family difficulties, or major decisions.",
    significance:
      "Ashtamangala Prasnam is a distinctive Kerala tradition. Temples have long relied on it to understand their state and decide on remedial rituals.",
    intro:
      "Ashtamangala Prasnam is a solemn, elaborate consultation in which ritual, calculation and observation come together. It may continue over one or several days.",
    sections: [
      {
        title: "The setting",
        body: [
          "A Rashi Chakra is drawn on the floor and the Nilavilakku is lit. The Ashtamangalyam, the eight auspicious items, is arranged, and it traditionally includes the Valkannadi (ornamental mirror), lamp, rice, flowers and other sacred articles. Prayers are offered before the Prasnam begins.",
        ],
      },
      {
        title: "The consultation process",
        body: [
          "A chosen person places a gold coin on one of the twelve signs, which becomes the Arudha. A set of cowrie shells is divided and counted to give the Ashtamangala numbers. The Prasna chart for the moment is cast, and the omens (nimittam) are recorded throughout.",
          "The astrologer, sometimes with a team of astrologers, then studies these elements together and explains the findings and any recommended remedial rituals.",
        ],
      },
    ],
    significanceDetail: [
      "The Ashtamangala Prasnam is described at length in Prasna Marga and has been practised in Kerala for centuries, especially for temple matters such as renovation, festivals and restoring rituals.",
      "Because it brings together several independent indications, the Arudha, the cowrie numbers, the chart and the omens, it is regarded as one of the most thorough methods in Kerala astrology.",
    ],
    process: [
      { title: "Initial discussion", body: "The purpose, place and scale of the Prasnam are discussed." },
      { title: "Fixing the date", body: "An auspicious day and time are selected." },
      { title: "Prasnam rituals", body: "Chakra, lamp, Ashtamangalyam, Arudha and cowries." },
      { title: "Findings", body: "Observations and recommended remedies are explained." },
    ],
    gallery: [
      { art: "ashtamangala", caption: "Ashtamangalyam — eight auspicious articles" },
      { art: "cowrie", caption: "Cowries counted for the Prasnam" },
      { art: "temple", caption: "Conducted for temples and tharavadus" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
