/*
 * TREATISES & METHODS
 * author: id of a person entry (if present on the site), or authorName for others.
 */
window.HFP = window.HFP || {};
HFP.treatises = [
  {
    id: "virdung-1511",
    name: "Musica getutscht",
    short: "Virdung, Musica getutscht",
    authorName: "Sebastian Virdung",
    start: 1511,
    place: "Basel",
    language: "German",
    tagline: "The first printed book about musical instruments, with the earliest written mention of the transverse flute's use.",
    contents: [
      "Woodcuts and descriptions of the instruments of the time",
      "The transverse flute ('Zwerchpfeiff') described only as a military instrument",
      "Instructions for the recorder, the lute and keyboard instruments"
    ],
    description:
      "Virdung's small book is the earliest printed treatise on instruments. At this date the transverse flute was still mainly a [[fife|military instrument]], and Virdung treats it as such. Within twenty years [[agricola-1529|Agricola]] would show it in four-part consort music.",
    imslp: "Musica getutscht Virdung",
    sources: [{ label: "flutehistory.com: Military flutes", url: "http://www.flutehistory.com/Instrument/Military.php3" }],
    links: ["renaissance-flute"]
  },
  {
    id: "agricola-1529",
    name: "Musica instrumentalis deudsch",
    short: "Agricola, Musica instrumentalis",
    authorName: "Martin Agricola",
    start: 1529,
    place: "Wittenberg",
    language: "German",
    tagline: "A German-language instrument manual with fingering charts for the flute consort.",
    contents: [
      "Fingering charts for the four sizes of 'Querpfeiff' (transverse flute)",
      "Notes on consort playing and transposition",
      "A revised edition (1545) recommends a 'trembling' breath, an early mention of vibrato"
    ],
    description:
      "Written in rhyming German verse so that amateurs could memorise it, Agricola's book is one of the earliest sources to describe the [[renaissance-flute|Renaissance flute]] in practical detail, with woodcut illustrations and fingering charts.",
    wiki: "Martin Agricola",
    imslp: "Musica instrumentalis deudsch",
    links: ["attaingnant-1533"]
  },
  {
    id: "hotteterre-principes",
    name: "Principes de la flûte traversière, ou flûte d'Allemagne",
    short: "Hotteterre, Principes",
    author: "hotteterre",
    authorName: "Jacques-Martin Hotteterre",
    start: 1707,
    place: "Paris",
    language: "French",
    tagline: "The first printed method for the transverse flute.",
    contents: [
      "Posture and embouchure, with engravings",
      "Fingering chart for the one-keyed flute",
      "Ornaments: trills (battements), flattements, accents and more",
      "Articulation with the syllables 'tu' and 'ru'",
      "Further chapters on the recorder and the oboe"
    ],
    description:
      "Short, clear and practical, Jacques-Martin [[hotteterre|Hotteterre]]'s Principes was reprinted and translated for decades. It is the first-hand guide to playing the [[hotteterre-flute|three-piece baroque flute]] and its French repertoire, starting with Hotteterre's own [[hotteterre-op2|Pièces]].",
    imslp: "Principes de la flûte traversière Hotteterre",
    links: []
  },
  {
    id: "quantz-versuch",
    name: "Versuch einer Anweisung die Flöte traversiere zu spielen",
    short: "Quantz, Versuch",
    author: "quantz",
    start: 1752,
    place: "Berlin",
    language: "German (French edition the same year)",
    tagline: "Far more than a flute method: an encyclopaedia of 18th-century performance.",
    contents: [
      "Written for Quantz's two-keyed flute, though most readers played one-keyed flutes",
      "Tone, embouchure and breathing (only about 50 of the 334 pages are about the flute itself)",
      "Tonguing, including the 'did'll' double tongue: its first description in print",
      "Ornamentation and how to play an Adagio, with fully ornamented examples",
      "Cadenzas",
      "The duties of orchestral musicians and accompanists",
      "How to judge musicians and compositions"
    ],
    description:
      "[[quantz|Quantz]]'s Versuch begins as a method for the [[baroque-four-piece|traverso]] and grows into a complete guide to musical taste in the age of Bach. Players of every instrument still read it for its advice on ornamentation, tempo and style.",
    imslp: "Versuch einer Anweisung die Flöte traversiere zu spielen",
    sources: [{ label: "flutehistory.com: Quantz and the Essay", url: "http://www.flutehistory.com/Players/Johann_Joachim_Quantz/index.php3" }],
    links: ["bach-bwv1013", "telemann-fantasias"]
  },
  {
    id: "tromlitz-unterricht",
    name: "Ausführlicher und gründlicher Unterricht die Flöte zu spielen",
    short: "Tromlitz, Unterricht",
    author: "tromlitz",
    start: 1791,
    place: "Leipzig",
    language: "German",
    tagline: "The most detailed flute method of the Classical era.",
    contents: [
      "Very detailed articulation syllables (ti, di, ri, tiri…)",
      "Intonation and the distinction between enharmonic notes",
      "Breathing and phrasing",
      "A defence of the flute with several keys",
      "Preceded by a short essay (Kurze Abhandlung, 1786) and followed by a book on flutes with several keys (1800)"
    ],
    description:
      "[[tromlitz|Tromlitz]] wrote as both performer and maker. His Unterricht is the key source for playing the [[classical-keyed-flute|keyed flute]] and for the late-18th-century German style: subtle articulation, careful tuning, singing phrasing.",
    imslp: "Ausführlicher und gründlicher Unterricht die Flöte zu spielen",
    links: ["mozart-k313"]
  },
  {
    id: "devienne-methode",
    name: "Nouvelle méthode théorique et pratique pour la flûte",
    short: "Devienne, Nouvelle méthode",
    author: "devienne",
    start: 1794,
    place: "Paris",
    language: "French",
    tagline: "The method of the young Paris Conservatoire.",
    contents: [
      "Fingerings and trill fingerings",
      "Tables of articulation",
      "Progressive duets for teacher and pupil"
    ],
    description:
      "[[devienne|Devienne]]'s method was reprinted many times and shaped French teaching in the first decades of the Conservatoire. Its duets are still a pleasant way to learn the [[classical-keyed-flute|Classical flute]].",
    imslp: "Nouvelle méthode théorique et pratique pour la flûte Devienne",
    links: []
  },
  {
    id: "boehm-1871",
    name: "Die Flöte und das Flötenspiel",
    short: "Boehm, Die Flöte und das Flötenspiel",
    author: "boehm",
    start: 1871,
    place: "Munich",
    language: "German (English translation by Dayton C. Miller, 1908)",
    tagline: "The inventor explains his flute: acoustics, materials and playing.",
    contents: [
      "The acoustic principles behind the 1832 and 1847 flutes",
      "Materials: silver against wood",
      "Care and maintenance of the instrument",
      "Tone, technique and how to practise"
    ],
    description:
      "In this short book [[boehm|Boehm]] explains why the [[boehm-1847|modern flute]] is built the way it is. Dayton C. Miller's English translation (1908) made it a classic, and Miller's own huge flute collection is now at the Library of Congress.",
    imslp: "Die Flöte und das Flötenspiel",
    links: ["boehm-1832"]
  },
  {
    id: "fuerstenau-1844",
    name: "Die Kunst des Flötenspiels in theoretisch-praktischer Beziehung, Op. 138",
    short: "Fürstenau, Die Kunst des Flötenspiels",
    author: "fuerstenau",
    start: 1844,
    place: "Leipzig",
    language: "German",
    tagline: "The art of the German Romantic flutist, from its greatest exponent.",
    contents: [
      "Detailed fingerings for the German and Viennese keyed flute",
      "Tone colour and expression in the Romantic style",
      "Follows Fürstenau's earlier Flöten-Schule, Op. 42 (1826)"
    ],
    description:
      "[[fuerstenau|Fürstenau]]'s tutors are the essential guide to the [[german-keyed-flute|German keyed flute]] in its golden age. They give extensive technical advice, especially on fingerings, and show the special style and feeling of German flute playing in Weber's time.",
    imslp: "Fürstenau Die Kunst des Flötenspiels Op.138",
    links: []
  },
  {
    id: "schwedler-1897",
    name: "Katechismus der Flöte und des Flötenspiels",
    short: "Schwedler, Katechismus",
    author: "schwedler",
    start: 1897,
    place: "Leipzig",
    language: "German",
    tagline: "The aesthetic of the traditional German flute, written in defence of the conical keyed flute.",
    contents: [
      "The construction of the flute and of Schwedler's 'Reform' flute",
      "Tone, technique and orchestral playing",
      "Arguments for the traditional German sound"
    ],
    description:
      "[[schwedler|Schwedler]], principal flute of the Leipzig Gewandhaus, set out in this book the ideals behind the [[german-keyed-flute|German conical flute]] at the moment when it was losing ground to the Boehm flute. It was revised and reissued in the 20th century.",
    imslp: "Schwedler Katechismus der Flöte",
    links: []
  },
  {
    id: "taffanel-gaubert",
    name: "Méthode complète de flûte",
    short: "Taffanel & Gaubert, Méthode",
    author: "taffanel",
    authorName: "Paul Taffanel & Philippe Gaubert",
    start: 1923,
    place: "Paris (Leduc)",
    language: "French",
    tagline: "The method of the French school, completed by Gaubert after Taffanel's death.",
    contents: [
      "Tone, embouchure and posture",
      "Articulation and ornaments",
      "The 17 daily exercises (exercices journaliers)",
      "Studies and advice on style"
    ],
    description:
      "Begun by [[taffanel|Taffanel]] and completed after his death by his pupil Philippe Gaubert, this method fixed the teaching of the French school on the [[boehm-1847|Boehm flute]]. Its [[tg-17-exercises|daily exercises]] are still played every day around the world.",
    links: ["moyse"]
  }
];
