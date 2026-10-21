/*
 * REPERTOIRE: pieces and study books
 * kind: "piece" | "study" | "collection"
 * flutes: ids of the flutes this music can be played on, in order of historical fit.
 *         This is the ONLY source of "Playable on" / "Possible repertoire".
 * tips: practical advice for performers
 * imslp: search string for the score on IMSLP (omit for works still under copyright)
 */
window.HFP = window.HFP || {};
HFP.repertoire = [
  {
    id: "attaingnant-1533",
    composer: "Various (publ. Pierre Attaingnant)",
    name: "Vingt et sept chansons musicales à quatre parties",
    short: "Attaingnant, 27 Chansons",
    start: 1533, dates: "1533",
    place: "Paris",
    kind: "collection",
    scoring: "Four-part consort",
    flutes: ["renaissance-flute"],
    description:
      "In 1533 the Paris printer Pierre Attaingnant published 27 four-part chansons with a table marking which ones suit the 'German flute' (a), which suit the recorder (b), and which suit both. It is one of the earliest printed pieces of evidence for music chosen with the [[renaissance-flute|flute consort]] in mind.",
    tips: "Use a bass flute for the lowest line and tenors for the others. Choose the chansons marked 'a' first: consort flutes sound best in the upper part of their range, so transpose if needed, as players did at the time.",
    imslp: "Attaingnant Vingt et sept chansons",
    links: ["agricola-1529"]
  },
  {
    id: "hotteterre-op2",
    composer: "Jacques-Martin Hotteterre",
    name: "Premier livre de pièces pour la flûte traversière, Op. 2",
    short: "Hotteterre, Pièces Op. 2",
    start: 1708, dates: "1708",
    place: "Paris",
    kind: "collection",
    scoring: "Flute and basso continuo",
    flutes: ["hotteterre-flute", "baroque-four-piece"],
    description:
      "Suites of dance movements and character pieces with carefully marked ornaments, written by the author of the [[hotteterre-principes|Principes]] as a companion to his method. They are the heart of the early French flute repertoire.",
    tips: "Ideal on a three-piece flute at low French pitch (a′ ≈ 392). Read the ornament signs with the Principes in hand, play stepwise quavers unequally (notes inégales), and keep the tone soft and close.",
    imslp: "Hotteterre Pièces pour la flûte traversière Op.2",
    links: ["hotteterre"]
  },
  {
    id: "bach-bwv1013",
    composer: "Johann Sebastian Bach",
    name: "Partita in A minor for solo flute, BWV 1013",
    short: "Bach, Partita BWV 1013",
    start: 1720, dates: "c.1718–1723",
    place: "Köthen",
    kind: "piece",
    scoring: "Solo flute",
    flutes: ["baroque-four-piece", "hotteterre-flute"],
    description:
      "Four dance movements (Allemande, Corrente, Sarabande, Bourrée anglaise) that survive in a single manuscript copy titled 'Solo pour la flûte traversière'. The Allemande runs without a single rest, so the player must find their own breaths.",
    tips: "Plan breaths by leaving out notes of the implied bass line. The high a‴ at the end of the Allemande is a real challenge on a one-keyed flute, so practise it on its own. Enjoy the colours of the forked notes rather than trying to hide them.",
    imslp: "Partita in A minor BWV 1013",
    links: ["quantz-versuch"]
  },
  {
    id: "blavet-op2",
    composer: "Michel Blavet",
    name: "Sonates mêlées de pièces pour la flûte traversière avec la basse, Op. 2",
    short: "Blavet, Sonatas Op. 2",
    start: 1732, dates: "1732",
    place: "Paris",
    kind: "collection",
    scoring: "Flute and basso continuo",
    flutes: ["baroque-four-piece"],
    description:
      "Six sonatas by [[blavet|Blavet]] that mix Italian sonata movements with French character pieces bearing titles. Written for amateurs, they stay in easy keys, but they show the meeting of the two national styles that defined flute playing in Paris in the 1730s.",
    tips: "A four-piece flute in the style of [[thomas-lot|Thomas Lot]], Blavet's own maker, is the natural choice. Change your ornament style from movement to movement: French agréments in the character pieces, freer Italian embellishment in the slow movements.",
    imslp: "Blavet Sonates mêlées de pièces Op.2",
    links: []
  },
  {
    id: "telemann-fantasias",
    composer: "Georg Philipp Telemann",
    name: "12 Fantasias for flute without bass, TWV 40:2–13",
    short: "Telemann, 12 Fantasias",
    start: 1732, dates: "1732–33",
    place: "Hamburg",
    kind: "collection",
    scoring: "Solo flute",
    flutes: ["baroque-four-piece"],
    description:
      "Twelve short pieces that suggest harmony and counterpoint on a single line, mixing fugues, dances and free preludes. Telemann engraved and published them himself in Hamburg.",
    tips: "Shape the implied voices with dynamics and timing. The fantasias move through many keys, which makes them an excellent way to learn the colours of cross-fingerings on the traverso.",
    imslp: "12 Fantasias for Flute without Bass TWV 40:2-13",
    links: ["quantz-versuch"]
  },
  {
    id: "telemann-paris-quartets",
    composer: "Georg Philipp Telemann",
    name: "Nouveaux quatuors en six suites ('Paris Quartets')",
    short: "Telemann, Paris Quartets",
    start: 1738, dates: "1738",
    place: "Paris",
    kind: "collection",
    scoring: "Flute, violin, viola da gamba (or cello) and continuo",
    flutes: ["baroque-four-piece"],
    description:
      "During his visit to Paris in 1737–38 Telemann published these six quartets and played them with a star cast that included [[blavet|Michel Blavet]] on the flute. Telemann himself reported how much they impressed the Paris audience.",
    tips: "A conversation among equals: the flute is one voice among four, not a soloist. Blend with the violin in unisons and let the gamba lead when it has the theme.",
    imslp: "Nouveaux quatuors en six suites Telemann",
    links: []
  },
  {
    id: "cpe-bach-wq132",
    composer: "Carl Philipp Emanuel Bach",
    name: "Sonata in A minor for solo flute, Wq 132",
    short: "C.P.E. Bach, Solo Sonata Wq 132",
    start: 1747, dates: "1747",
    place: "Berlin / Potsdam",
    kind: "piece",
    scoring: "Solo flute",
    flutes: ["baroque-four-piece", "classical-keyed-flute"],
    description:
      "Written while C.P.E. Bach was harpsichordist to Frederick the Great, at the same court as [[quantz|Quantz]]. This three-movement sonata is a manifesto of the 'sensitive style' (*empfindsamer Stil*), full of sudden contrasts, sighs and wide leaps. It was published in 1763.",
    tips: "At Frederick's court it would have been played on a Quantz-type flute; a slimmer one-keyed classical flute suits the 1763 printed version well too. Let the different colours of the low and high registers become part of the expression rather than evening them out.",
    imslp: "Flute Sonata in A minor Wq.132",
    links: []
  },
  {
    id: "mozart-k313",
    composer: "Wolfgang Amadeus Mozart",
    name: "Flute Concerto No. 1 in G major, K. 313",
    short: "Mozart, Concerto K. 313",
    start: 1778, dates: "1778",
    place: "Mannheim",
    kind: "piece",
    scoring: "Flute and orchestra",
    flutes: ["classical-keyed-flute"],
    description:
      "Commissioned by the Dutch amateur flutist Ferdinand De Jean during Mozart's stay in Mannheim, where his friend Johann Baptist Wendling was principal flute. Mozart complained in a letter about writing for the flute, yet the concerto became one of the cornerstones of the repertoire.",
    tips: "In Mannheim in 1778 keyed flutes were still rare on the Continent: the natural choice is a one-keyed classical flute (Grenser type, a′ ≈ 430), possibly with a few extra keys. No original cadenzas survive, so write your own in period style.",
    imslp: "Flute Concerto in G major K.313",
    links: ["tromlitz-unterricht"]
  },
  {
    id: "beethoven-op25",
    composer: "Ludwig van Beethoven",
    name: "Serenade in D major for flute, violin and viola, Op. 25",
    short: "Beethoven, Serenade Op. 25",
    start: 1801, dates: "1801",
    place: "Vienna",
    kind: "piece",
    scoring: "Flute, violin and viola",
    flutes: ["viennese-flute", "classical-keyed-flute"],
    description:
      "A light, sunny divertimento in several short movements, from the years when Beethoven was conquering Vienna. The flute leads much of the time, with brilliant writing in the opening Entrata and the final Allegro.",
    tips: "A Viennese or classical keyed flute of around 1800 balances naturally with gut-strung violin and viola, so the flute does not need to dominate. Keep the character of a serenade: light articulation and lots of wit.",
    imslp: "Serenade Op.25 Beethoven",
    links: []
  },
  {
    id: "schubert-d802",
    composer: "Franz Schubert",
    name: "Introduction and Variations on 'Trockne Blumen', D. 802",
    short: "Schubert, Trockne Blumen Variations",
    start: 1824, dates: "1824",
    place: "Vienna",
    kind: "piece",
    scoring: "Flute and piano",
    flutes: ["viennese-flute", "classical-keyed-flute"],
    description:
      "Based on a song from Schubert's cycle *Die schöne Müllerin*, the variations were written for the Viennese flutist Ferdinand Bogner. They are among the most demanding Romantic works for flute and piano, for both players.",
    tips: "With a Viennese multi-keyed flute and a Viennese fortepiano, the balance problems of modern performances largely disappear. Try it at least once.",
    imslp: "Introduction and Variations on Trockne Blumen D.802",
    links: []
  },
  {
    id: "nicholson-roslin",
    composer: "Charles Nicholson",
    name: "Variations on 'Roslin Castle' (F minor)",
    short: "Nicholson, Roslin Castle",
    start: 1836, dates: "1836",
    place: "London",
    kind: "piece",
    scoring: "Flute and piano",
    flutes: ["english-flute"],
    description:
      "One of [[nicholson|Nicholson]]'s 'National Melodies': a Scottish air treated in the expressive Adagio style he was famous for, followed by variations. Some continental critics found the style in poor taste, but it remained typical of English playing until the recording era.",
    tips: "Written for a large-holed English flute, which favours flat keys like F minor. Use glides and finger vibrato ('vibration') as expressive ornaments, as Nicholson did.",
    imslp: "Nicholson Roslin Castle",
    links: []
  },
  {
    id: "boehm-op22",
    composer: "Theobald Boehm",
    name: "Variations on 'Du, du liegst mir im Herzen', Op. 22",
    short: "Boehm, Variations Op. 22",
    start: 1838, dates: "1838 (published 1840)",
    place: "Munich",
    kind: "piece",
    scoring: "Flute and orchestra (or piano)",
    flutes: ["boehm-1832", "boehm-1847"],
    description:
      "Brilliant variations in E major on a popular German song, published by Schott in Mainz in 1840. According to the Theobald Böhm Archive, Boehm's Opp. 19–26 were written during and after the invention of the [[boehm-1832|ring-key flute]] and were meant to show off the new instrument's advantages. Op. 22 was a showpiece in Boehm's own concerts. After a charity concert at the Munich court theatre in 1843, the *Münchner Tagblatt* wrote of the 'real jubilation' stirred by 'Böhm's magic flute'.",
    tips: "Played on a conical ring-key flute, it sounds as Boehm meant it: a warm wooden tone with the even scale and clean passagework of the new system. On a modern flute, keep the light, singing character of a Biedermeier variation set rather than turning it into a power piece. Op. 20 (Variations on a Tyrolean air, 1838) comes from the same years and makes a good companion piece.",
    imslp: "Boehm Variations Du du liegst mir im Herzen Op.22",
    sources: [
      { label: "Ludwig Böhm, 'Theobald Böhm's compositions' (Theobald Böhm Archive, 1994)", url: "https://thebabelflute.com/?p=13332" },
      { label: "IMSLP: List of works by Theobald Boehm", url: "https://imslp.org/wiki/List_of_works_by_Theobald_Boehm" }
    ],
    links: ["boehm"]
  },
  {
    id: "reinecke-undine",
    composer: "Carl Reinecke",
    name: "Sonata 'Undine', Op. 167",
    short: "Reinecke, Undine Sonata",
    start: 1882, dates: "1882",
    place: "Leipzig",
    kind: "piece",
    scoring: "Flute and piano",
    flutes: ["german-keyed-flute", "boehm-1847"],
    description:
      "A Romantic sonata inspired by Fouqué's tale of the water spirit Undine, by the conductor of the Leipzig Gewandhaus Orchestra. In Leipzig at that time the leading flutists, [[schwedler|Schwedler]] among them, played conical keyed flutes rather than Boehm flutes.",
    tips: "Try it on a Meyer-type flute: the darker, more veiled sound and the blend with the piano change the character of the piece completely.",
    imslp: "Undine Sonata Op.167 Reinecke",
    links: []
  },
  {
    id: "faure-fantaisie",
    composer: "Gabriel Fauré",
    name: "Fantaisie, Op. 79",
    short: "Fauré, Fantaisie",
    start: 1898, dates: "1898",
    place: "Paris",
    kind: "piece",
    scoring: "Flute and piano",
    flutes: ["boehm-1847"],
    description:
      "Written as the test piece for the 1898 Paris Conservatoire flute competition and dedicated to [[taffanel|Taffanel]]. A lyrical Andantino followed by a dazzling Allegro shows, in a few minutes, everything the jury wanted to hear.",
    tips: "On a [[lot|Louis Lot]] or another French silver flute of the period, aim for the light, clear sound Taffanel prized rather than maximum power.",
    imslp: "Fantaisie Op.79 Fauré",
    links: []
  },
  {
    id: "debussy-syrinx",
    composer: "Claude Debussy",
    name: "Syrinx (La Flûte de Pan)",
    short: "Debussy, Syrinx",
    start: 1913, dates: "1913",
    place: "Paris",
    kind: "piece",
    scoring: "Solo flute",
    flutes: ["boehm-1847"],
    description:
      "Composed as incidental music for Gabriel Mourey's play *Psyché* and first played, offstage, by Louis Fleury. It is often called the first important piece for unaccompanied flute since [[cpe-bach-wq132|C.P.E. Bach's sonata]].",
    tips: "The piece was first heard from behind the scenes, so keep the dynamics intimate. Let the final descent to low D♭ fade away rather than end.",
    imslp: "Syrinx Debussy",
    links: ["taffanel"]
  },
  {
    id: "tg-17-exercises",
    composer: "Paul Taffanel & Philippe Gaubert",
    name: "17 Grands exercices journaliers de mécanisme",
    short: "Taffanel & Gaubert, 17 Daily Exercises",
    start: 1923, dates: "1923",
    place: "Paris",
    kind: "study",
    scoring: "Solo flute",
    flutes: ["boehm-1847"],
    description:
      "The daily technical exercises from the [[taffanel-gaubert|Taffanel–Gaubert method]]: scales, arpeggios and intervals through every key. Flutists know them simply as 'E.J. 1', 'E.J. 4' and so on.",
    tips: "Practise slowly with a drone and vary the articulations. Written for the Boehm flute's even scale: on earlier flutes the fingerings change completely, so use the historical treatises instead.",
    links: []
  },
  {
    id: "ibert-concerto",
    composer: "Jacques Ibert",
    name: "Flute Concerto",
    short: "Ibert, Concerto",
    start: 1934, dates: "1932–33 (premiered 1934)",
    place: "Paris",
    kind: "piece",
    scoring: "Flute and orchestra",
    flutes: ["boehm-1847"],
    description:
      "Dedicated to [[moyse|Marcel Moyse]], who gave the premiere in Paris in 1934, Ibert's concerto pairs neoclassical energy with a deeply lyrical slow movement. Its virtuoso finale is a regular competition and audition piece. In Amsterdam, the young [[vester|Frans Vester]] gave one of its early performances.",
    tips: "Moyse's own playing is the best guide to the style. Listen for his flexible vibrato and the way he speaks the fast passages rather than hammering them.",
    links: []
  },
  {
    id: "moyse-sonorite",
    composer: "Marcel Moyse",
    name: "De la sonorité: art et technique",
    short: "Moyse, De la sonorité",
    start: 1934, dates: "1934",
    place: "Paris",
    kind: "study",
    scoring: "Solo flute",
    flutes: ["boehm-1847"],
    description:
      "[[moyse|Moyse]]'s short book of tone exercises, starting with the famous descending semitones from B, teaches how to build an even, flexible sound note by note.",
    tips: "Its goal, an even sound on every note, belongs to the Boehm flute. On historical flutes the long-tone idea is still useful, but the unevenness between notes is part of the instrument's character, not a defect.",
    links: ["taffanel-gaubert"]
  }
];
