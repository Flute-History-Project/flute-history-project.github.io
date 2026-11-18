/*
 * REPERTOIRE: pieces and study books
 * kind: "piece" | "study" | "collection"
 * flutes: ids of the flutes this music can be played on, in order of historical fit.
 *         This is the ONLY source of "Playable on" / "Possible repertoire".
 * tips: practical advice for performers
 * imslp: search string for the score on IMSLP (omit for works still under copyright)
 * mapGroup: id of another entry under which this one is folded on the Flute Map (opens when that entry is clicked)
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
      "In April 1533 the Paris printer Pierre Attaingnant published *Vingt et sept chansons musicales à quatre parties*, marking in the table of contents the chansons best suited to the 'German flute' (a), to the nine-holed flute, that is the recorder (b), and to both (ab): early printed evidence of music chosen with the [[renaissance-flute|flute consort]] in mind. {{attaingnant1533; heartz1969}}",
    tips: "Use a bass flute for the lowest line and tenors for the others, and start with the chansons marked 'a'. Consort music was often transposed to suit the instruments, so transpose if needed. {{powell2002, chs. 2–3}}",
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
      "Suites of dance movements and character pieces with carefully marked ornaments, by the author of the [[hotteterre-principes|Principes]]; the second edition (1715) adds a preface on how to play the ornaments. {{brown2002, pp. 9, 121}}\n\n" +
      "The book exists in two strikingly different printings. The first edition (1708) was printed from movable type, with clumsy, separately printed notes; the second (1715) was engraved, clearer and more elegant, and its preface adds advice on performance. Comparing the Allemande 'La Fontainebleau' of the E minor Suite in both shows how much music printing improved in a few years. {{brown2002, pp. 5–7, 121}}\n\nReading the facsimile takes a little practice. The flute part uses the French violin clef, with g′ on the bottom line; an accidental applies only to immediately repeated notes; a sharp sign can cancel a flat; a small 'custos' at the end of a line announces the next note; and movement titles often appear below the music. {{brown2002, pp. 5–6}}",
    tips: "Ideal on a three-piece flute at low French pitch (a′ ≈ 392). Read the ornament signs with the Principes in hand, play stepwise quavers unequally (notes inégales), and keep the tone soft and close. {{brown2002, pp. 9, 35, 121}}\n\n" +
      "Use the 1715 edition if you can, and read the [[hotteterre-preluder|L'Art de préluder]] for its examples of notes inégales. {{brown2002, p. 9}}",
    imslp: "Hotteterre Pièces pour la flûte traversière Op.2",
        image: { src: "assets/img/hfp/r-hotteterre-op2.jpg", caption: "Title page of the Premier livre de pièces, Op. 2, engraved edition of 1715", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Premier_livre_de_pi%C3%A8ces_pour_la_fl%C3%BBte_traversi%C3%A8re_et_autres_instruments,_avec_la_basse..._Oeuvre_second._Nouvelle_%C3%A9d._grav%C3%A9e_sur_l%27imprim%C3%A9,_et_augment%C3%A9e_de_plusieurs_agr%C3%A9ments,_et_d%27une..._-_btv1b108626249_(01_of_48).jpg" },
    links: ["hotteterre"]
  },
  {
    id: "bach-bwv1013",
    mapGroup: "bach-flute-sonatas",
    composer: "Johann Sebastian Bach",
    name: "Partita in A minor for solo flute, BWV 1013",
    short: "Bach, Partita BWV 1013",
    start: 1725, dates: "manuscript copy, probably 1720s",
    place: "unknown",
    kind: "piece",
    scoring: "Solo flute",
    flutes: ["baroque-four-piece", "hotteterre-flute"],
    description:
      "Four dance movements (Allemande, Corrente, Sarabande, Bourrée anglaise) that survive in a single 18th-century manuscript copy, probably made in the 1720s and titled 'Solo p[our une] flûte traversière par J. S. Bach'; the name 'Partita' comes from modern editors. The Allemande runs without a single rest, so the player must find their own breaths. {{bachP968; henle457}}\n\n" +
      "The copy is the last item in a volume that also holds a complete copy of the Sonatas and Partitas for solo violin, BWV 1001–1006: Berlin, Staatsbibliothek, Mus.ms. Bach P 968. It is Bach's only known work for unaccompanied flute. {{nbs1013}} It stands apart from the group of [[bach-flute-sonatas|flute sonatas]], which all need a keyboard or bass instrument.",
    tips: "Plan breaths by leaving out notes of the implied bass line. The high a‴ at the end of the Allemande is a real challenge on a one-keyed flute, so practise it on its own. {{brown2002, p. 19}} Enjoy the colours of the forked notes rather than trying to hide them.",
    imslp: "Partita in A minor BWV 1013",
    listen: "Bach partita A minor BWV 1013 traverso solo",
    sources: [
      { label: "Manuscript copy, Berlin, Mus.ms. Bach P 968 (7) (scan on IMSLP, digitised by the Staatsbibliothek zu Berlin)", url: "https://imslp.org/wiki/Special:ImagefromIndex/324760" },
      { label: "Staatsbibliothek zu Berlin digital: the manuscript P 968", url: "https://digital.staatsbibliothek-berlin.de/werkansicht/?PPN=PPN780135172" },
      { label: "Bach Digital: list of sources for BWV 1013", url: "https://www.bach-digital.de/receive/BachDigitalWork_work_00001192?lang=en" },
      { label: "Netherlands Bach Society, All of Bach: video and programme note", url: "https://www.bachvereniging.nl/en/bwv/bwv-1013" }
    ],
    links: ["quantz-versuch", "bach-flute-sonatas"]
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
      "Six sonatas by [[blavet|Blavet]] whose title, *Sonates mêlées de pièces*, announces the mix of Italian sonata movements with French character pieces bearing titles. {{blavet1732}} Written for amateurs, they stay in easy keys. {{powell2002, chs. 4–5}}",
    tips: "A four-piece flute in the style of [[thomas-lot|Thomas Lot]], who built flutes for Blavet, is the natural choice. {{powell2002, ch. 4}} Change your ornament style from movement to movement: French agréments in the character pieces, freer Italian embellishment in the slow movements.",
    imslp: "Blavet Sonates mêlées de pièces Op.2",
    image: { src: "assets/img/hfp/r-blavet-op2.jpg", caption: "Title page of Blavet's Sonates mêlées de pièces, Op. 2 (Paris, 1732)", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Sonates_mel%C3%A9es_de_pi%C3%A8ces_pour_la_fl%C3%BBte_traversi%C3%A8re_avec_la_basse...._Grav%C3%A9es_par_Dumont._Oeuvre_II_-_btv1b9078980v_(02_of_43).jpg" },
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
      "Twelve short pieces that suggest harmony and counterpoint on a single line, mixing fugues, dances and free preludes. Telemann published them himself in Hamburg around 1732–33; a single copy of the first edition survives. {{telemann1733; henle556}}",
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
      "During his visit to Paris in 1737–38 Telemann published these six quartets. In his autobiography he recalled how they were played by Blavet (flute), Guignon (violin), Forqueray the younger (viola da gamba) and Édouard (cello), and how much they impressed their listeners. {{mattheson1740}}",
    tips: "A conversation among equals: the flute is one voice among four, not a soloist. Blend with the violin in unisons and let the gamba lead when it has the theme.",
    imslp: "Nouveaux quatuors en six suites Telemann",
    image: { src: "assets/img/hfp/r-telemann-quatuors.jpg", caption: "Title page of the Nouveaux quatuors (Paris edition)", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Nouveaux_quatuors_en_six_suites_a_une_flute_traversi%C3%A8re,_un_violon,_une_basse_de_viole_ou_violoncel,_et_basse_continue...,_grav%C3%A9s_par_Denise_Vincent..._-_btv1b9066215z_(002_of_142).jpg" },
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
      "Written around 1747 in Berlin, while C. P. E. Bach was harpsichordist to Frederick the Great, at the same court as [[quantz|Quantz]]. A three-movement sonata full of sudden contrasts, sighs and wide leaps, it was printed in 1763 in the anthology *Musikalisches Mancherley*. {{cpe1763}}",
    tips: "At Frederick's court it would have been played on a Quantz-type flute {{brown2002, p. 17}}; a slimmer one-keyed classical flute suits the 1763 printed version well too. Let the different colours of the low and high registers become part of the expression rather than evening them out.",
    imslp: "Flute Sonata in A minor Wq.132",
    curio: "Quantz's notebook of studies, the Solfeggi, shows how he articulated passages from C. P. E. Bach's music, a rare glimpse of real 18th-century performance. {{brown2002, p. 61}}",
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
      "Commissioned in Mannheim in the winter of 1777–78 by Ferdinand Dejean, a wealthy amateur flutist and surgeon working for the Dutch East India Company, who asked for 'three small, easy and short concertos and several quartets'. Mozart, a close friend of the Mannheim flutist Johann Baptist Wendling, never completed the commission and was paid 96 florins instead of 200. In a letter of the time he wrote that he lost interest whenever he had to write for an instrument he disliked, yet the concerto became one of the cornerstones of the repertoire. {{brown2002, pp. 141–142}}",
    tips: "Dejean probably played a one-keyed flute, so a one-keyed classical flute (Grenser type, a′ ≈ 430) is the natural choice; a flute with a few extra keys is also possible. {{brown2002, pp. 36, 142}} Write your own cadenzas in period style.\n\n" +
      "Mozart's concertos can be played on a one-keyed flute as long as its f‴ is good: the contrast of strong and veiled notes suits his chromatic lines. Others prefer a six- or eight-keyed flute for evenness. Leopold Mozart's [[mozart-violinschule|Violinschule]] is the best guide to articulation and vibrato in this style. {{brown2002, pp. 11, 22, 46}}",
    imslp: "Flute Concerto in G major K.313",
        links: ["tromlitz-unterricht"]
  },
  {
    id: "beethoven-op25",
    composer: "Ludwig van Beethoven",
    name: "Serenade in D major for flute, violin and viola, Op. 25",
    short: "Beethoven, Serenade Op. 25",
    start: 1802, dates: "publ. 1802",
    place: "Vienna",
    kind: "piece",
    scoring: "Flute, violin and viola",
    flutes: ["viennese-flute", "classical-keyed-flute"],
    description:
      "A light divertimento in six short movements, from the opening Entrata (Allegro) to the final Allegro vivace e disinvolto; the flute leads much of the time. It was published in Vienna by Cappi in 1802. {{beethoven1802}}",
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
      "Introduction and variations on 'Trockne Blumen', a song from Schubert's cycle *Die schöne Müllerin*, composed in January 1824. The first edition, published by Diabelli only in 1850 as op. 160, is dedicated to the Viennese flutist Ferdinand Bogner. Both parts are very demanding. {{schubert1850; henle474}}",
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
      "One of [[nicholson|Nicholson]]'s 'National Melodies': a Scottish air treated in the expressive Adagio style he was famous for, followed by variations. Some continental critics found the style in poor taste, but it remained typical of English playing until the recording era. {{?}}",
    tips: "Written for a large-holed English flute, which favours flat keys like F minor. {{powell2002, ch. 8}} Use glides and finger vibrato as expressive ornaments, as Nicholson did. {{brown2002, pp. 117–118}}",
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
      "Brilliant variations in E major on a popular German song, published by Schott in Mainz in 1840. According to the Theobald Böhm Archive, Boehm's Opp. 19–26 were written during and after the invention of the [[boehm-1832|ring-key flute]] and were meant to show off the new instrument's advantages. Op. 22 was a showpiece in Boehm's own concerts. After a charity concert at the Munich court theatre in 1843, the *Münchner Tagblatt* wrote of the 'real jubilation' stirred by 'Böhm's magic flute'. {{boehm1994; tagblatt1843, p. 455}}",
    tips: "Played on a conical ring-key flute, it sounds as Boehm meant it: a warm wooden tone with the even scale and clean passagework of the new system. On a modern flute, keep the light, singing character of a Biedermeier variation set rather than turning it into a power piece. Op. 20 (Variations on a Tyrolean air, 1838) comes from the same years and makes a good companion piece. {{boehm1994}}",
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
      "A Romantic sonata named after Undine, the water spirit of Fouqué's tale, by the conductor of the Leipzig Gewandhaus Orchestra. In Leipzig at that time the leading flutists, [[schwedler|Schwedler]] among them, played conical keyed flutes rather than Boehm flutes. {{brown2002, pp. 29–30, 114}}\n\n" +
      "On its first appearance, the haunting slow melody is marked 'without any trembling of the tone'. Since the sonata is dedicated to [[barge-1880|Wilhelm Barge]] of the Leipzig Gewandhaus, the marking suggests that some vibrato was normal among the Leipzig players, and that here Reinecke wanted a mysterious, pure sound. {{brown2002, p. 114}}",
    tips: "Try it on a Meyer-type flute: the darker, more veiled sound and the blend with the piano change the character of the piece completely.",
    imslp: "Undine Sonata Op.167 Reinecke",
        image: { src: "assets/img/hfp/r-undine.jpg", caption: "The opening theme of the Undine Sonata", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Undine_theme.gif" },
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
      "Written in June and July 1898 as the test piece for that year's Paris Conservatoire flute competition and dedicated to [[taffanel|Taffanel]], professor of the flute class; all eight of his students played it at the competition on 28 July 1898. A lyrical Andantino is followed by a dazzling Allegro. {{faure1898; henle580}}",
    tips: "On a [[lot|Louis Lot]] or another French silver flute of the period, aim for the light, clear sound Taffanel prized rather than maximum power.",
    imslp: "Fantaisie Op.79 Fauré",
    image: { src: "assets/img/hfp/r-faure.jpg", caption: "Title page of the first edition of the Fantaisie", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Fantaisie_pour_fl%C3%BBte_et_piano_-_op._79_-_par_Gabriel_Faur%C3%A9_-_btv1b10876425p_(01_of_22).jpg" },
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
      "Written in 1913 as incidental music for Gabriel Mourey's play *Psyché*, under the title *La Flûte de Pan*, and first played by Louis Fleury in December 1913. It was published only in 1927, by Jobert, as *Syrinx*, with a dedication to Fleury. {{henle496; debussy1927}}",
    tips: "Keep the dynamics intimate, and let the final descent to low D♭ fade away rather than end.",
    imslp: "Syrinx Debussy",
    image: { src: "assets/img/hfp/r-syrinx.jpg", caption: "First page of Syrinx, first edition (Paris, Jobert, 1927)", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Syrinx,_pour_fl%C3%BBte_seule_-_btv1b108721522_(3_of_5).jpg" },
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
      "The daily technical exercises from the [[taffanel-gaubert|Taffanel–Gaubert method]] (1923): scales, arpeggios and intervals through every key. Flutists know them simply as 'E.J. 1', 'E.J. 4' and so on. {{brown2002, p. 149; ?}}",
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
      "Dedicated to [[moyse|Marcel Moyse]], who gave the first performance in Paris in 1934, Ibert's concerto pairs neoclassical energy with a deeply lyrical slow movement. {{ibertscore; mccutchan1994}}",
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
      "[[moyse|Moyse]]'s short book of tone exercises, part of his *Enseignement complet de la flûte*. Its first exercise, on the 'colour and homogeneity of tone in the three registers', starts on B and descends by semitones, building an even, flexible sound note by note. {{moyse1934, pp. 3–5}}",
    tips: "Its goal, an even sound on every note, belongs to the Boehm flute. On historical flutes the long-tone idea is still useful, but the unevenness between notes is part of the instrument's character, not a defect.",
    links: ["taffanel-gaubert"]
  },
  {
    id: "la-barre-1703",
    composer: "Michel de La Barre",
    name: "Pièces pour la flûte traversière avec la basse continue, Premier livre",
    short: "La Barre, Pièces (1702)",
    start: 1702,
    dates: "1702",
    place: "Paris",
    kind: "collection",
    scoring: "Flute and basso continuo",
    flutes: ["hotteterre-flute"],
    description:
      "Michel de La Barre, flutist of the French court and the Opéra, published one of the very first books of solo pieces for the transverse flute (1702). In his preface he says that he prefers the flute to be accompanied by viola da gamba and theorbo, a reminder that 'continuo' did not always mean a harpsichord. {{brown2002, p. 2}}\n\n" +
      "His D minor Suite asks for a low c♯′, below the flute's normal range: early French players simply 'lipped' the d′ down a semitone. {{brown2002, p. 19}}",
    tips: "Try the suites with gamba and theorbo, as La Barre wished, on a three-piece flute at low French pitch. Practise lipping the low d′ down to c♯′ with a very relaxed embouchure. {{brown2002, p. 2}}",
    imslp: "La Barre Pièces pour la flûte traversière",
        image: { src: "assets/img/hfp/r-labarre.jpg", caption: "Title page of La Barre's Pièces pour la flûte traversière, Op. 4 (Paris, Ballard, 1702)", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Pi%C3%A8ces_pour_la_flute_traversi%C3%A8re,_avec_la_basse-continue..._Oeuvre_4e_-_btv1b90786120_(01_of_85).jpg" },
    links: ["hotteterre-op2", "hotteterre-principes"]
  },
  {
    id: "handel-op1-4",
    composer: "George Frideric Handel",
    name: "Sonata in A minor, Op. 1 No. 4 (HWV 362)",
    short: "Handel, Sonata Op. 1 No. 4",
    start: 1720,
    dates: "publ. c.1730 (Walsh)",
    place: "London",
    kind: "piece",
    scoring: "Recorder (or flute) and basso continuo",
    flutes: ["baroque-four-piece", "hotteterre-flute"],
    description: "One of the sonatas that Walsh printed as Handel's 'Opus 1', written for recorder but long adopted by flutists. It is a good example of why the original sources matter. The Peters edition of 1880, edited for flute and piano, adds metronome marks (the metronome was invented only in 1815), dynamics, slurs and a romantic cadenza by [[schwedler|Maximilian Schwedler]], and leaves out the figured bass. The early Walsh print shows how bare a baroque part really is: almost no slurs or dynamics, and a bass line with figures from which the harmony was improvised. {{brown2002, pp. 7, 126}}",
    tips: "Play from a facsimile or an Urtext edition that separates editorial marks from Handel's own, and use a score so that you can see the harmony when you ornament. Treat any metronome marks as editorial. {{brown2002, pp. 4, 126}}",
    imslp: "Handel Sonata HWV 362",
        image: { src: "assets/img/hfp/r-handel-walsh.jpg", caption: "Title page of Walsh's 'Solos for a German Flute', with sonatas by Handel", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Solos_for_a_german_flute,_a_hoboy_or_violin..._Part_the_first_(-VII)_-_btv1b10879103v_(01_of_26).jpg" },
    links: ["schwedler"]
  },
  {
    id: "bach-bwv1020",
    mapGroup: "bach-flute-sonatas",
    composer: "J. S. Bach or C. P. E. Bach (attributed)",
    name: "Sonata in G minor for flute (or violin) and harpsichord, BWV 1020",
    short: "Bach (attr.), Sonata BWV 1020",
    start: 1735,
    dates: "c.1730s–1740s",
    place: "Leipzig or Berlin?",
    kind: "piece",
    scoring: "Flute and obbligato harpsichord",
    flutes: ["baroque-four-piece", "quantz-flute"],
    description: "This attractive sonata survives under the names of both J. S. and C. P. E. Bach, and scholars still disagree about who wrote it. The keyboard has a written-out right-hand part, so it needs no cello. It also shows why 'Urtext' editions can differ: one manuscript source has an extra bar in the last movement. {{brown2002, pp. 2, 5, 13}}\n\n" +
      "In every source the solo instrument is a violin, but the violin's lowest string is never used, which led Leo Balet (1931) to treat it as a flute sonata. The older of the two Berlin manuscripts gives only the surname Bach; a Breitkopf catalogue of 1763 and an 18th-century copy from Brahms's papers name C. P. E. Bach in full. {{duerr1975, p. 4}} It is one of three sonatas (with [[bach-bwv1031|BWV 1031]] and [[bach-bwv1033|BWV 1033]]) that the New Bach Edition set aside in 1963 as doubtful. {{leisinger2003, p. V}}",
    tips: "Compare two editions if you can and check which source each follows. With obbligato harpsichord the balance is delicate: choose a flute with a strong low register. {{brown2002, p. 12}}",
    imslp: "Sonata BWV 1020",
    listen: "Bach sonata G minor BWV 1020 flute harpsichord",
    links: ["cpe-bach-wq132", "bach-flute-sonatas", "bach-bwv1031"]
  },
  /* ---------- J. S. Bach: flute sonatas, trio sonatas and the Suite in B minor ----------
     One entry per work (they were never a set, and each has its own sources), plus an overview. */
  {
    id: "bach-flute-sonatas",
    composer: "Johann Sebastian Bach",
    name: "Bach Flute Sonatas: an overview",
    short: "Bach, Flute Sonatas",
    start: 1720, dates: "c. 1720s–1747",
    place: "Leipzig; Potsdam (BWV 1035, 1079)",
    kind: "collection",
    scoring: "Flute with obbligato harpsichord or basso continuo; trio sonatas",
    flutes: ["baroque-four-piece", "hotteterre-flute", "quantz-flute"],
    description:
      "There is no set of flute sonatas by Bach. What survives are separate works, written at different times, perhaps for different players, and handed down in very different sources. After the violin, the transverse flute was his preferred solo instrument in chamber music, but how much he wrote for it, and the history of each piece, can no longer be established with certainty. {{leisinger2003, p. V}} The usual list has six sonatas, three with obbligato harpsichord (BWV 1030–1032) and three with continuo (BWV 1033–1035), which have been considered Bach's since the mid-19th century, to which the G minor Sonata BWV 1020 is often added. {{tomita2024, p. V; leisinger2003, p. V}}\n\n" +
      "Four of them are beyond doubt: the sonatas in B minor ([[bach-bwv1030|BWV 1030]]) and A major ([[bach-bwv1032|BWV 1032]]) with obbligato harpsichord, and those in E minor ([[bach-bwv1034|BWV 1034]]) and E major ([[bach-bwv1035|BWV 1035]]) with continuo. The other three ([[bach-bwv1033|BWV 1033]], [[bach-bwv1031|BWV 1031]] and [[bach-bwv1020|BWV 1020]]) were set aside by the New Bach Edition in 1963 because their authenticity is disputed. {{leisinger2003, p. V}} Source studies recorded in the 2022 third edition of the Bach-Werke-Verzeichnis have since led the editors of the Henle facsimile of BWV 1030 to treat BWV 1031 and 1033 as Bach's again, although they may rest on works by other composers. {{tomita2024, p. V, n. 1}}\n\n" +
      "Why did Bach write them? The documents are silent, so the answers are mostly informed guesses. From 1729 to 1741, with short interruptions, he directed one of Leipzig's two collegia musica: about thirty semi-professional musicians, mostly university students, who gave weekly concerts in Zimmermann's coffee house and needed a large repertoire of solos, trios, quartets, concertos and overtures. {{leisinger2002; gruessTP193, p. IV}} Several works exist in more than one scoring, such as BWV 1039 and its twin for viola da gamba, BWV 1027, or the trio BWV 1038, which is tied to the violin works BWV 1021 and 1022. {{leisinger2002; wollny2013, pp. III–V}} Bach also taught composition to his sons and most gifted pupils, and some of these pieces may come from the lessons. {{leisinger2002; duerr1975, pp. 3–4; nbs1038}}\n\n" +
      "Two works are tied in the sources to a named recipient. The E major Sonata BWV 1035 was prepared, according to the copies, for the Privy Chamberlain Fredersdorf during a visit by Bach to Potsdam; the Trio Sonata in the *Musical Offering* ([[bach-bwv1079|BWV 1079]]) was undoubtedly meant as a gift for the flute-playing King Frederick II. {{leisinger2003, p. V; wolffBA5155}} For most of the others the sources are silent, and editors can only make suggestions, which are given in each entry.\n\n" +
      "Where to go next. With obbligato harpsichord: [[bach-bwv1030|B minor, BWV 1030]] (autograph score of c. 1736–37), [[bach-bwv1032|A major, BWV 1032]] (autograph, incomplete) and the doubtful [[bach-bwv1031|E♭ major, BWV 1031]] (copies of c. 1748–55). With continuo: [[bach-bwv1034|E minor, BWV 1034]] (six copies, the oldest by Kellner), [[bach-bwv1035|E major, BWV 1035]] (late Berlin copies), the doubtful [[bach-bwv1033|C major, BWV 1033]] (copy by C. P. E. Bach, 1731) and [[bach-bwv1020|G minor, BWV 1020]]. {{leisinger2003, pp. V–VI; alves2021, pp. 8–9; nbs1033}} Trios: [[bach-bwv1038|BWV 1038]] for flute and scordatura violin (autograph parts), [[bach-bwv1039|BWV 1039]] for two flutes, and the trio of the [[bach-bwv1079|Musical Offering]]. {{wollny2013, pp. III–V; leisinger2002}} Beyond the sonatas, Bach's only known solo work for flute is the [[bach-bwv1013|Partita BWV 1013]], and his only work for flute and strings the [[bach-bwv1067|Suite in B minor, BWV 1067]]. {{nbs1013; breig2003}}",
    tips: "Editions differ because the sources differ. The B minor Sonata, for example, has a separate flute part copied by Bach's pupil Goldberg that carries slurs and an ornament missing from Bach's own score, so the flutist who reads only the score misses part of the original text. {{tomita2024, pp. XIII–XV}}\n\n" +
      "The two 'solos' for flute and continuo (BWV 1034 and 1035) call for a bass instrument, a keyboard, or both, in spite of the title. {{leisinger2003, p. V}} The Netherlands Bach Society films the E minor Sonata with viola da gamba and harpsichord and the trio for two flutes with gamba and theorbo: try different continuo groups. {{nbs1034; nbs1039}}",
    imslp: "Bach flute sonata BWV 1030",
    listen: "Bach complete flute sonatas traverso harpsichord",
    image: { src: "assets/img/hfp/r-zimmermann-cafe.jpg", caption: "The Katharinenstraße in Leipzig, c. 1720, engraved by Johann George Schreiber: the street of Zimmermann's coffee house, where Bach's Collegium Musicum played", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Caf%C3%A9_Zimmermann_Katherinenstra%C3%9Fe_Leipzig_1720.jpg" },
    sources: [
      { label: "Bach Digital: the catalogue of Bach's works and their sources", url: "https://www.bach-digital.de/" },
      { label: "Netherlands Bach Society, All of Bach: every work on video, with programme notes", url: "https://www.bachvereniging.nl/en/bwv/" }
    ],
    links: ["bach-bwv1013", "bach-bwv1020", "bach-bwv1030", "bach-bwv1031", "bach-bwv1032", "bach-bwv1033", "bach-bwv1034", "bach-bwv1035", "bach-bwv1038", "bach-bwv1039", "bach-bwv1079", "bach-bwv1067", "quantz"]
  },
  {
    id: "bach-bwv1034",
    mapGroup: "bach-flute-sonatas",
    composer: "Johann Sebastian Bach",
    name: "Sonata in E minor for flute and basso continuo, BWV 1034",
    short: "Bach, Sonata BWV 1034",
    start: 1726, dates: "c. 1726–27, perhaps earlier",
    place: "Köthen or Leipzig",
    kind: "piece",
    scoring: "Flute and basso continuo",
    flutes: ["baroque-four-piece", "hotteterre-flute"],
    description:
      "A four-movement sonata of the usual kind, with a slow opening movement. It shows a touch of modernity: the third movement is in the relative major, so the work no longer stays in one key from start to finish. {{leisinger2003, p. V}} No autograph survives, but the sources are unusually numerous: six 18th-century copies are preserved, and a seventh, important one was known until 1905. {{leisinger2003, p. V}}\n\n" +
      "The oldest copy is probably a score by Johann Peter Kellner (1705–72), now in Berlin (Mus.ms. Bach P 804). {{leisinger2003, p. V}} Kellner made several of Bach's chamber works easier to play on keyboard by altering them slightly, so editors prefer a manuscript from the library of Wilhelm Friedemann Bach (Leipzig, Ms R 17); another Berlin copy (P 233) was made in the circle of Johann Friedrich Hering, a close friend of C. P. E. and W. F. Bach. {{leisinger2003, p. V}}\n\n" +
      "The editors of the New Bach Edition find a date in Bach's Köthen years (1717–23) conceivable, while the Netherlands Bach Society gives c. 1726–27, in Leipzig. {{leisinger2003, p. V; nbs1034}} The sources do not say for whom it was written. The Society's note stresses the equal partnership of flute and bass: in the fugal second movement the bass often has the tune while the flute accompanies, and the work might be heard as a duet. {{nbs1034}}",
    tips: "Several figures in the sources were added later and the copies disagree, so Henle prints only the figures that two sources share: check how your edition treats the continuo. {{eppstein1978, p. 59}} The Netherlands Bach Society plays the bass with viola da gamba and harpsichord. {{nbs1034}}",
    imslp: "Flute Sonata in E minor BWV 1034",
    listen: "Bach flute sonata E minor BWV 1034 traverso",
    sources: [
      { label: "Score copied by Johann Peter Kellner, Berlin, Mus.ms. Bach P 804 (23) (scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/353029" },
      { label: "Copy from the circle of J. F. Hering, Berlin, Mus.ms. Bach P 233 (scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/361523" },
      { label: "Bach Digital: list of sources for BWV 1034", url: "https://www.bach-digital.de/receive/BachDigitalWork_work_00001216?lang=en" },
      { label: "IMSLP: all scores of BWV 1034", url: "https://imslp.org/wiki/Flute_Sonata_in_E_minor,_BWV_1034_(Bach,_Johann_Sebastian)" },
      { label: "Netherlands Bach Society, All of Bach: video and programme note", url: "https://www.bachvereniging.nl/en/bwv/bwv-1034" }
    ],
    links: ["bach-flute-sonatas", "bach-bwv1035"]
  },
  {
    id: "bach-bwv1039",
    mapGroup: "bach-flute-sonatas",
    composer: "Johann Sebastian Bach",
    name: "Trio Sonata in G major for two flutes and basso continuo, BWV 1039",
    short: "Bach, Trio Sonata BWV 1039",
    start: 1726, dates: "c. 1720s–1740s (copy on paper of c. 1726–45)",
    place: "Köthen or Leipzig",
    kind: "piece",
    scoring: "Two flutes and basso continuo",
    flutes: ["baroque-four-piece", "hotteterre-flute"],
    description:
      "Hans Eppstein called this trio, with the one in the *Musical Offering*, the only trio sonata by Bach whose authenticity is certain. It also exists, almost note for note, as a sonata for viola da gamba and obbligato harpsichord, BWV 1027, and three of its four movements survive in organ transcriptions from Bach's circle. {{eppstein1980, pp. II–III; leisinger2002}} The gamba version is the last stage of the arrangements, but the two-flute version is probably not the original either: octave transpositions in its upper parts, made to keep them within the flute's range, point to a lost trio for two violins in G major. {{leisinger2002; eppstein1980, pp. II–III}}\n\n" +
      "The main source is a set of parts, 'Flûte traversière 1', 'Flûte traversière 2' and 'Cembalo', that once belonged to C. P. E. Bach and is now in Berlin (Mus.ms. Bach St 431). Two scribes copied it, and none of the parts names the composer. One of the scribes also made an entry in Anna Magdalena Bach's second Notenbüchlein, so he belonged to the family circle; Peter Wollny proposed Bach's third son, Johann Gottfried Bernhard (1715–39), who is known to have played the flute. The paper was in use in Saxony between about 1726 and 1745. {{leisinger2002}}\n\n" +
      "The editors of the Bärenreiter edition think it conceivable that the flute parts were arranged by the scribe as exercises in flute composition, which Bach set for his sons and best pupils; Hans Eppstein, for his part, dates the trio possibly to the first Köthen years. {{leisinger2002; eppstein1980, p. II}} The Netherlands Bach Society adds that the traverso was popular with the middle classes and the nobility, and that this sonata let two flutists, instead of one, enjoy Bach's music. {{nbs1039}}",
    tips: "All the parts are covered with dots, which later copyists and editors read as staccato. Many stand on long notes or even over bar lines, so they are probably not articulation but cross-references made while the manuscript was prepared: do not play them as staccato. {{leisinger2002}}\n\n" +
      "The third movement treats both upper voices as equals, so match the two flutes in pitch, tone and articulation. {{leisinger2002}} The Netherlands Bach Society plays the continuo with viola da gamba and theorbo. {{nbs1039}}",
    curio: "One of the two scribes of the main source of this sonata is probably Bach's third son, Johann Gottfried Bernhard, a flutist who died young, in 1739. {{leisinger2002}}",
    imslp: "Trio Sonata in G major BWV 1039",
    listen: "Bach trio sonata G major BWV 1039 two flutes",
    sources: [
      { label: "Parts, Berlin, Mus.ms. Bach St 431 (scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/407907" },
      { label: "Bach Digital: list of sources for BWV 1039", url: "https://www.bach-digital.de/receive/BachDigitalWork_work_00001221?lang=en" },
      { label: "IMSLP: all scores of BWV 1039", url: "https://imslp.org/wiki/Trio_Sonata_in_G_major,_BWV_1039_(Bach,_Johann_Sebastian)" },
      { label: "Netherlands Bach Society, All of Bach: video and programme note", url: "https://www.bachvereniging.nl/en/bwv/bwv-1039" }
    ],
    links: ["bach-flute-sonatas", "bach-bwv1038", "bach-bwv1079"]
  },
  {
    id: "bach-bwv1033",
    mapGroup: "bach-flute-sonatas",
    composer: "J. S. Bach (attributed)",
    name: "Sonata in C major for flute and basso continuo, BWV 1033",
    short: "Bach (attr.), Sonata BWV 1033",
    start: 1731, dates: "copy by C. P. E. Bach, 1731",
    place: "Leipzig",
    kind: "piece",
    scoring: "Flute and basso continuo",
    flutes: ["baroque-four-piece"],
    description:
      "The earliest source of this sonata is a manuscript written in Leipzig in 1731 by the seventeen-year-old Carl Philipp Emanuel Bach, with his father named as the composer. Alfred Dürr takes this as C. P. E.'s own testimony, given while he still lived in the family home. {{duerr1975, p. 3; nbs1033}} The sonata consists of an Andante and Presto, an Allegro, an Adagio and two minuets. {{nbs1033}}\n\n" +
      "Even so, the attribution is disputed. Hans Eppstein found that the first two movements hardly reach the level of the mature Bach, yet the sonata cannot be an early work either, since Bach had no chance to write for the transverse flute before Köthen. {{eppstein1981, p. IV}} Robert Marshall defended Bach's authorship of the flute part, and the Netherlands Bach Society's note recalls his idea that the unusually plain bass could have been added by C. P. E. as an exercise under his father's eye. {{eppstein1981, p. V; nbs1033}} Dürr suggests that the whole sonata may be an early attempt by C. P. E. himself, written with help and instruction from his father, and put his father's name on the fair copy. {{duerr1975, pp. 3–4}} Source studies recorded in the 2022 Bach-Werke-Verzeichnis lead Henle's editors to count it as Bach's again, although it may rest on works by other composers. {{tomita2024, p. V, n. 1}}",
    tips: "The bass is plain and often figured sparingly. Treat any printed realisation as a minimum that you can change at will. {{eppstein1981, p. V}}",
    imslp: "Flute Sonata in C major BWV 1033",
    listen: "Bach flute sonata C major BWV 1033 traverso",
    sources: [
      { label: "IMSLP: all scores of BWV 1033, including the manuscript of 1731 in C. P. E. Bach's hand", url: "https://imslp.org/wiki/Flute_Sonata_in_C_major,_BWV_1033_(Bach,_Johann_Sebastian)" },
      { label: "Bach Digital: list of sources for BWV 1033", url: "https://www.bach-digital.de/receive/BachDigitalWork_work_00001215?lang=en" },
      { label: "Netherlands Bach Society, All of Bach: video and programme note", url: "https://www.bachvereniging.nl/en/bwv/bwv-1033" }
    ],
    links: ["bach-flute-sonatas", "bach-bwv1031", "bach-bwv1020", "cpe-bach-wq132"]
  },
  {
    id: "bach-bwv1038",
    mapGroup: "bach-flute-sonatas",
    composer: "J. S. Bach (transmitted anonymously)",
    name: "Trio Sonata in G major for flute, violin and basso continuo, BWV 1038",
    short: "Bach, Trio Sonata BWV 1038",
    start: 1732, dates: "autograph parts c. 1732–35",
    place: "Leipzig",
    kind: "piece",
    scoring: "Flute, violin (scordatura) and basso continuo",
    flutes: ["baroque-four-piece"],
    description:
      "This trio survives as a set of three parts in Bach's own hand: 'Traversa', 'Violino discordato' (the violin tuned g–d′–g′–d″) and 'Continuo'. In the 19th century the parts belonged to Ferdinand David and then to Julius Rietz; since 1901 they have been in the Germanisches Nationalmuseum in Nuremberg (K. 27). Paper and handwriting date them between 1732 and 1735. There is no title page and no composer's name, so, strictly speaking, the work has come down anonymously. {{wollny2013, pp. III–V}}\n\n" +
      "Its bass line is the same as that of the Violin Sonata BWV 1021, which survives in a manuscript signed by Bach, but the upper parts are quite different, which suggests that Bach composed them later over an existing bass. The Trio for violin and obbligato keyboard in F major, BWV 1022, is in turn based on BWV 1038. Some scholars gave the group to one of Bach's sons, presumably C. P. E.; Klaus Hofmann argued that BWV 1038 is an arrangement of a lost trio for violin, viola and continuo completed by father and son together, but Peter Wollny finds the evidence too weak and regards the whole group as authentic. {{wollny2013, pp. III–V}}\n\n" +
      "Why was it written? Wollny points to its modest size and technical demands and suggests a commission from a music lover or aristocratic pupil: the borrowed bass saved Bach the trouble of planning the movements, and the scordatura, unusual in Bach, may have been requested by the client. He calls it a charming occasional piece for domestic music-making. {{wollny2013, p. V}} The Netherlands Bach Society's note offers another reading, a composition exercise for a pupil, within the weekly concerts of the collegium musicum. {{nbs1038}}",
    tips: "The violin part is written for scordatura. In the Netherlands Bach Society's film the violinist Shunske Sato explains what the unusual tuning does to the sound. {{nbs1038}}",
    imslp: "Trio Sonata in G major BWV 1038",
    listen: "Bach trio sonata G major BWV 1038 flute violin scordatura",
    sources: [
      { label: "Autograph parts, Nuremberg, Germanisches Nationalmuseum, K. 27 (scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/416097" },
      { label: "Bach Digital: list of sources for BWV 1038", url: "https://www.bach-digital.de/receive/BachDigitalWork_work_00001219?lang=en" },
      { label: "IMSLP: all scores of BWV 1038", url: "https://imslp.org/wiki/Trio_Sonata_in_G_major,_BWV_1038_(Bach,_Johann_Sebastian)" },
      { label: "Netherlands Bach Society, All of Bach: video and programme note", url: "https://www.bachvereniging.nl/en/bwv/bwv-1038" }
    ],
    links: ["bach-flute-sonatas", "bach-bwv1039", "bach-bwv1079"]
  },
  {
    id: "bach-bwv1030",
    mapGroup: "bach-flute-sonatas",
    composer: "Johann Sebastian Bach",
    name: "Sonata in B minor for flute and obbligato harpsichord, BWV 1030",
    short: "Bach, Sonata BWV 1030",
    start: 1736, dates: "autograph c. 1736–37; earlier version lost",
    place: "Leipzig",
    kind: "piece",
    scoring: "Flute and obbligato harpsichord",
    flutes: ["baroque-four-piece"],
    description:
      "The B minor Sonata is the only flute sonata that survives complete in Bach's own hand: a score of about 1736–37, now in Berlin (Staatsbibliothek, Mus.ms. Bach P 975). {{nbs1030; tomita2024, p. V}} A separate flute part, in another hand, is kept with it. For a long time its copyist was unknown; it has now been identified as Johann Gottlieb Goldberg (1727–56), a pupil of Bach, writing around 1745–46. {{tomita2024, pp. VIII, IX, XIII}}\n\n" +
      "The sonata has a prehistory. Bach's score shows traces of transposition from G minor, and a harpsichord part in G minor, copied about 1770 (Berlin, Mus.ms. Bach P 1008), must go back to an earlier version whose solo part is lost. {{tomita2024, pp. VI–VII}} That first version cannot have been for flute, because both upper parts go below d′, the lowest note of historical flutes. Hans Eppstein proposed a trio for two flutes, which Alfred Dürr doubted; Klaus Hofmann (1998) argued for a trio for violin, obbligato lute and string bass, not earlier than 1730. {{leisinger2003, p. VI; tomita2024, p. VIII}}\n\n" +
      "The traditional date, in Bach's Köthen years (1717–23), was questioned by Robert Marshall, who on grounds of style suggested 1729–31, when Bach took over the Leipzig Collegium Musicum; Christoph Wolff was more cautious and suggested perhaps 1729–36. {{tomita2024, p. VI}}\n\n" +
      "Why and for whom Bach made this fair copy is not known. The Henle facsimile points to the two famous flutists in his circle: Pierre-Gabriel Buffardin, first flute of the Dresden court orchestra, and [[quantz|Johann Joachim Quantz]], second flute. In the winter of 1736 Bach was in Dresden to receive his title of court composer and gave a two-hour recital on the new Silbermann organ of the Frauenkirche; a friendship with one of the flutists may have inspired the sonata, but this is only conjecture. {{tomita2024, pp. V–VI}} The Netherlands Bach Society's note names another possible player, Bach's third son Johann Gottfried Bernhard (1715–39), a flutist, but only as a possibility. {{nbs1030; leisinger2002}}\n\n" +
      "The first movement is a long Andante in ritornello form, of the type called 'sonata in concerto style' (*Sonate auf Concertenart*) and cultivated at the Dresden court in the 1720s and 30s. The second is a siciliana in all but name. The last two sections, a Presto fugue and a gigue, are joined without a break and Bach seems to have thought of them as two movements. The sonata is technically very demanding and has long been regarded as Bach's most important work for the flute. {{tomita2024, p. V}}",
    tips: "Look at the facsimile if you can: Henle's includes Goldberg's flute part, which has slurs and an ornament missing from Bach's score, so it belongs to the original text. {{tomita2024, pp. XIII–XV}}\n\n" +
      "The B minor version has a wider range than the G minor one and reaches c♯‴ in bar 103 of the first movement: check your flute before you start. {{tomita2024, p. VII}} Wherever the music leaves the open D major scale, a one-keyed flute needs forked fingerings; their veiled colour is part of the expression, not a defect to hide. {{brown2002, pp. 15, 18}}",
    curio: "The flute part of the B minor Sonata was copied by Johann Gottlieb Goldberg, the pupil of Bach traditionally linked with the *Goldberg Variations*. His handwriting was identified only recently, in a study published in 2023. {{tomita2024, p. XIII}}",
    imslp: "Flute Sonata in B minor BWV 1030",
    listen: "Bach flute sonata B minor BWV 1030 traverso harpsichord",
    sources: [
      { label: "Autograph score and flute part, Berlin, Mus.ms. Bach P 975 (scan on IMSLP, from Bach Digital)", url: "https://imslp.org/wiki/Special:ImagefromIndex/369079" },
      { label: "Bach Digital: the autograph P 975, with description and images", url: "https://www.bach-digital.de/receive/BachDigitalSource_source_00001960?lang=en" },
      { label: "Deutsche Digitale Bibliothek: the autograph, digitised by the Staatsbibliothek zu Berlin", url: "https://www.deutsche-digitale-bibliothek.de/item/EHF2WL22DU4L6BY7XTN36VMTA6QOCUAG" },
      { label: "Harpsichord part in G minor (earlier version), Berlin, Mus.ms. Bach P 1008 (scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/346257" },
      { label: "Copy by Johann Christoph Altnickol, Berlin, Mus.ms. Bach P 229 (7) (scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/285081" },
      { label: "Bach Digital: list of sources for BWV 1030", url: "https://www.bach-digital.de/receive/BachDigitalWork_work_00001212?lang=en" },
      { label: "Netherlands Bach Society, All of Bach: video and programme note", url: "https://www.bachvereniging.nl/en/bwv/bwv-1030" }
    ],
    links: ["bach-flute-sonatas", "bach-bwv1032", "quantz"]
  },
  {
    id: "bach-bwv1032",
    mapGroup: "bach-flute-sonatas",
    composer: "Johann Sebastian Bach",
    name: "Sonata in A major for flute and obbligato harpsichord, BWV 1032",
    short: "Bach, Sonata BWV 1032",
    start: 1736, dates: "autograph c. 1736 (incomplete)",
    place: "Leipzig",
    kind: "piece",
    scoring: "Flute and obbligato harpsichord",
    flutes: ["baroque-four-piece"],
    description:
      "Bach wrote the A major Sonata on the empty staves at the bottom of the pages of his Double Concerto for two harpsichords in C minor, BWV 1062, which he wrote out around 1736. The double autograph is in Berlin (Mus.ms. Bach P 612) and is the only source of the sonata. {{leisinger2003, p. VI; nbs1032}}\n\n" +
      "It has not come down whole: on several leaves the staves of the flute sonata were cut off, apparently by Bach himself, so that almost half of the first movement is lost. Alfred Dürr reconstructed the missing bars for modern performance. {{leisinger2003, p. VI}}\n\n" +
      "Bach was probably reworking older material. The Netherlands Bach Society's note reads the annotations on the manuscript as the trace of an earlier version, probably a trio sonata for recorder, violin and continuo. {{nbs1032}} The slow movement alone also survives in an arrangement for violin, viola and cello (Berlin, Mus.ms. Bach St 345), together with two movements from the Organ Trio BWV 525. {{leisinger2003, p. VI}} Like [[bach-bwv1030|BWV 1030]], it is puzzling in many respects. {{leisinger2003, p. VI}}",
    tips: "Check how your edition treats the lost part of the first movement: modern editions print a reconstruction, usually Dürr's, so a large part of the movement is not Bach's own writing. {{leisinger2003, p. VI}}",
    curio: "The double autograph spent decades out of reach: evacuated from Berlin in 1941 for safety, it stayed in what is now Poland after the war and returned to Berlin only in 1977. {{nbs1032; leisinger2003, p. VI}}",
    imslp: "Flute Sonata in A major BWV 1032",
    listen: "Bach flute sonata A major BWV 1032 traverso harpsichord",
    sources: [
      { label: "Double autograph of BWV 1062 and 1032, Berlin, Mus.ms. Bach P 612 (scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/153556" },
      { label: "Bach Digital: list of sources for BWV 1032", url: "https://www.bach-digital.de/receive/BachDigitalWork_work_00001214?lang=en" },
      { label: "IMSLP: all scores of BWV 1032", url: "https://imslp.org/wiki/Flute_Sonata_in_A_major,_BWV_1032_(Bach,_Johann_Sebastian)" },
      { label: "Netherlands Bach Society, All of Bach: video and programme note", url: "https://www.bachvereniging.nl/en/bwv/bwv-1032" }
    ],
    links: ["bach-flute-sonatas", "bach-bwv1030"]
  },
  {
    id: "bach-bwv1031",
    mapGroup: "bach-flute-sonatas",
    composer: "J. S. Bach (attributed)",
    name: "Sonata in E-flat major for flute and obbligato harpsichord, BWV 1031",
    short: "Bach (attr.), Sonata BWV 1031",
    start: 1748, dates: "composed c. 1730–1748; oldest copy 1748–49",
    place: "Leipzig or Berlin",
    kind: "piece",
    scoring: "Flute and obbligato harpsichord",
    flutes: ["quantz-flute", "baroque-four-piece"],
    description:
      "A sonata whose composer is still debated. Every 18th-century source names J. S. Bach, and the main copies are of good quality, but its style is more modern than one expects from Bach, and the New Bach Edition set it aside in 1963 among the doubtful works. {{alves2021, p. 8; leisinger2003, p. V}} Its 'modern touch', the editors of the Bärenreiter edition suggest, may be connected with special circumstances of its origin, and the sonata may even date from Bach's last years, like the trio of the *Musical Offering*. {{leisinger2003, p. V}}\n\n" +
      "No source is in Bach's hand. The two main ones are in Berlin: a score copied by Bach's chief copyist (known as Anonymus 4 or 'H') between August 1748 and October 1749 (Mus.ms. Bach P 649), with a cover title added by C. P. E. Bach, probably in 1768; and a copy of about 1755 made by Christian Friedrich Penzel and colleagues (P 1056). They are less independent than they look: they share copying errors and seem to derive from a common parent manuscript. {{alves2021, pp. 8–9}} The sonata can be dated between about 1730 and 1748–49 at the latest. {{alves2021, p. 9}}\n\n" +
      "Besides J. S. Bach himself, two other composers have been proposed. Alfred Dürr's tentative hypothesis is that it is an early work of C. P. E. Bach, written with his father's help and instruction; Hans Eppstein adds that the father may have improved it so much that C. P. E. did not like to call it his own. {{duerr1975, pp. 4–5; eppstein1981, p. IV}} Jeanne Swack showed that it resembles a sonata in E♭ by [[quantz|Quantz]] (QV 2:18), which also exists in a version with obbligato harpsichord: the Bach sonata is the more complex piece and seems inspired by it, unless Quantz wrote both. {{alves2021, pp. 17–18}} A recent review leaves the question open. {{alves2021, pp. 19–20}} Henle's editors, citing source studies in the 2022 Bach-Werke-Verzeichnis, count it as Bach's again, although it may rest on works by others. {{tomita2024, p. V, n. 1}}",
    tips: "The sonata lies in flat keys (E♭ major, with a Siciliano in G minor), which suit a flute with separate keys for E♭ and D♯, such as Quantz's [[quantz-flute|two-keyed flute]]: the maker himself preferred such keys. {{brown2002, pp. 17–19}} Several editions exist, by Dürr (Bärenreiter), Eppstein (Henle) and Kuijken (Breitkopf, whose title puts Bach's name between question marks): compare them and decide for yourself. {{alves2021, p. 20}}",
    imslp: "Flute Sonata in E-flat major BWV 1031",
    listen: "Bach flute sonata E flat major BWV 1031 traverso",
    sources: [
      { label: "Score by Bach's chief copyist, Berlin, Mus.ms. Bach P 649 (scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/276760" },
      { label: "Bach Digital: list of sources for BWV 1031", url: "https://www.bach-digital.de/receive/BachDigitalWork_work_00001213?lang=en" },
      { label: "IMSLP: all scores of BWV 1031", url: "https://imslp.org/wiki/Flute_Sonata_in_E-flat_major,_BWV_1031_(Bach,_Johann_Sebastian)" }
    ],
    links: ["bach-flute-sonatas", "bach-bwv1033", "bach-bwv1020", "quantz-flute"]
  },
  {
    id: "bach-bwv1035",
    mapGroup: "bach-flute-sonatas",
    composer: "Johann Sebastian Bach",
    name: "Sonata in E major for flute and basso continuo, BWV 1035",
    short: "Bach, Sonata BWV 1035",
    start: 1741, dates: "1741 or 1747",
    place: "Potsdam",
    kind: "piece",
    scoring: "Flute and basso continuo",
    flutes: ["quantz-flute", "baroque-four-piece"],
    description:
      "The only flute sonata that the sources link with a named recipient. It survives only in later copies from Berlin, from the circle of the Voss family, and they all name a dedicatee. The most detailed note is in Berlin Mus.ms. Bach P 622, which refers to a lost intermediate copy: taken from the composer's autograph, which he made for the Privy Chamberlain Fredersdorf when he was in Potsdam. {{leisinger2003, p. V}} Three copies are known: two in Berlin (Mus.ms. Bach P 621 and P 622) and one in Brussels (Conservatoire royal, XY 15.140). {{eppstein1978, p. 59}} Michael Gabriel Fredersdorf served Frederick the Great at court; Rifé i Santaló calls him the king's Kammerdiener. {{rife2023, p. 101}}\n\n" +
      "The last two digits of the year are missing from the sources. Bach visited Berlin and Potsdam twice, in 1741 and 1747, so the sonata must have been handed over at one of those visits, though it was not necessarily composed then. {{leisinger2003, p. V}} Christoph Wolff favours 1741 and observes that the last two datable chamber works, this sonata and the *Musical Offering* of 1747, both arose from visits to Frederick's court. {{rife2023, pp. 100–101}} The surviving copies agree apart from small details, so editions differ little. {{leisinger2003, p. V}}\n\n" +
      "Jordi Rifé i Santaló argues that the first and third movements show traits of the 'sensitive style' (*Empfindsamer Stil*) fashionable in Potsdam, while the second and fourth are brilliant late-Baroque movements. {{rife2023, pp. 99–101}} Like the E minor Sonata [[bach-bwv1034|BWV 1034]], it follows the four-movement plan with a slow opening, but its third movement is in the relative minor, C♯ minor. {{leisinger2003, p. V}}",
    tips: "The copies are late but textually reliable and agree closely, so good editions hardly differ. {{leisinger2003, p. V}} [[quantz-versuch|Quantz's Versuch]], written at the same court, is the best guide to intonation and enharmonic fingerings in this repertoire. {{brown2002, p. 9}}",
    curio: "The note in the copy P 622 reads 'in the year 17..': the last two digits were never filled in, so we do not know whether the sonata was handed over in 1741 or in 1747. {{leisinger2003, p. V}}",
    imslp: "Flute Sonata in E major BWV 1035",
    listen: "Bach flute sonata E major BWV 1035 traverso",
    sources: [
      { label: "Bach Digital: list of sources for BWV 1035", url: "https://www.bach-digital.de/receive/BachDigitalWork_work_00001217?lang=en" },
      { label: "IMSLP: all scores of BWV 1035", url: "https://imslp.org/wiki/Flute_Sonata_in_E_major,_BWV_1035_(Bach,_Johann_Sebastian)" }
    ],
    links: ["bach-flute-sonatas", "bach-bwv1079", "bach-bwv1034", "quantz-versuch", "quantz-flute"]
  },
  {
    id: "bach-bwv1079",
    mapGroup: "bach-flute-sonatas",
    composer: "Johann Sebastian Bach",
    name: "Trio Sonata in C minor from the Musical Offering, BWV 1079",
    short: "Bach, Trio Sonata BWV 1079",
    start: 1747, dates: "1747",
    place: "Leipzig (for the court of Potsdam)",
    kind: "piece",
    scoring: "Flute, violin and basso continuo",
    flutes: ["quantz-flute", "baroque-four-piece"],
    description:
      "The *Musical Offering* owes its origin to Bach's visit to the Prussian court on 7–8 May 1747, where Frederick II, whose harpsichordist was Bach's son C. P. E., gave him a theme to develop. The newspapers reported the visit within days, and Bach promised to write the theme down as a regular fugue and have it engraved on copper. The work was finished in July 1747 and printed at the Leipzig Michaelmas fair at the end of September. {{wolffTP198, p. V}}\n\n" +
      "Besides two ricercars and ten canons, all built on the royal theme, Bach added a trio sonata as a special gift to the flute-playing king, to enlarge his chamber-music repertoire. {{wolffTP198, p. V}} It is the most extensive part of the work, the last and most mature of Bach's trio sonatas in the four-movement form he preferred, and it meets the ideals of the 'sensitive style' favoured at the Prussian court: subtle phrasing and articulation, dynamic contrasts and abrupt harmonic turns in the third movement. {{wolffBA5155}}\n\n" +
      "Bach's announcement in the *Leipziger Zeitungen* of 30 September 1747 describes it as 'a sonata for transverse flute, violin and continuo'. The original print came out in three separate fascicles for practical use, and the work is a collection of pieces from which one may choose, not a cycle in a fixed order. {{wolffTP198, p. VI}}",
    tips: "The Bärenreiter edition prints a continuo realisation from the circle of Bach's pupil Kirnberger, one of the rare examples of figured-bass practice in the Bach school: study it, then make your own. {{wolffBA5155}} The sonata is in C minor, a flat key that suits a Quantz-type flute with a separate E♭ key. {{brown2002, pp. 17–19}}",
    imslp: "Musikalisches Opfer BWV 1079",
    listen: "Bach Musical Offering trio sonata BWV 1079 flute violin",
    sources: [
      { label: "First edition, 1747: the Sonata sopr'il Soggetto Reale (Berlin, Am. B. 74, colour scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/430601" },
      { label: "Staatsbibliothek zu Berlin digital: the first edition of the trio sonata (Am. B. 74)", url: "https://digital.staatsbibliothek-berlin.de/werkansicht/?PPN=PPN82595973X" },
      { label: "First edition, 1747: title page, dedication and ricercars (Berlin, Am. B. 73, colour scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/430594" },
      { label: "IMSLP: all scores of the Musical Offering", url: "https://imslp.org/wiki/Musikalisches_Opfer,_BWV_1079_(Bach,_Johann_Sebastian)" }
    ],
    links: ["bach-flute-sonatas", "bach-bwv1035", "bach-bwv1039", "bach-bwv1038", "quantz"]
  },
  {
    id: "bach-bwv1067",
    mapGroup: "bach-flute-sonatas",
    composer: "Johann Sebastian Bach",
    name: "Orchestral Suite No. 2 in B minor, BWV 1067",
    short: "Bach, Suite BWV 1067",
    start: 1739, dates: "parts c. 1738–39",
    place: "Leipzig",
    kind: "piece",
    scoring: "Flute, strings and basso continuo",
    flutes: ["baroque-four-piece"],
    description:
      "Bach's only work for flute and string ensemble, and the only one of his four Overtures (the 'orchestral suites') in a minor key and in the form of the 'concerto overture' that Johann Adolph Scheibe described in 1745. The flute is the solo instrument. The number 2 comes from the old Bach-Gesellschaft edition of 1885, whose editor thought it the second oldest and a work of the Köthen years; recent research regards it as the latest of the four. {{breig2003}}\n\n" +
      "The main source is a set of parts in Berlin (Mus.ms. Bach St 154) in which Bach wrote out the flute and viola parts himself, probably around 1738–39. They may have been made when Bach took over the direction of the Collegium Musicum in Zimmermann's coffee house again, on 2 October 1739, after a two-year pause. {{gruessTP193, p. IV; breig2003}} The parts contain no duplicates, which may mean that Bach had the work played with one musician to a part. {{breig2003}}\n\n" +
      "The work we know is probably not the first version. Peculiarities of the score suggest that it began as a piece for four-part strings, perhaps with a solo violin in places, in the 1730s at the earliest; Werner Breig has published a reconstruction of this version. {{breig2003}} Heinrich Besseler had proposed, on grounds of style, a date around 1721, and the Polonaise seems to rest on a Polish melodic model. {{gruessTP193, p. IV}} The Netherlands Bach Society's note guesses that the flutist Bach had in mind was Pierre-Gabriel Buffardin, but this remains conjecture. {{nbs1067}} Only the closing Badinerie is clearly dominated by virtuosity, and it is one of Bach's most popular pieces. {{breig2003}}",
    tips: "In the slow part of the Ouverture the trills have a motivic function, so avoid adding more ornaments. The alla breve notation of the fast part and of the Rondeau and Bourrée probably points to a very fast tempo. {{gruessTP193, p. IV}}\n\n" +
      "When flute and first violin play in unison, their articulations differ in the parts. The differences are probably not intentional, since Bach marked the parts in haste, so you can match them or not. {{breig2003}} The dotted rhythm of the opening is debated; Breig leans towards assimilating it to the other parts. {{breig2003}}",
    imslp: "Orchestral Suite No.2 BWV 1067",
    listen: "Bach Orchestral Suite No. 2 BWV 1067 traverso period instruments",
    image: { src: "assets/img/hfp/r-bach-bwv1067-flute.jpg", caption: "First page of the flute part of the Ouverture in B minor, in Bach's own hand (Berlin, Mus.ms. Bach St 154)", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Bach_suite_2.JPG" },
    sources: [
      { label: "Original parts, Berlin, Mus.ms. Bach St 154 (scan on IMSLP)", url: "https://imslp.org/wiki/Special:ImagefromIndex/878122" },
      { label: "Staatsbibliothek zu Berlin digital: the original parts (St 154)", url: "https://digital.staatsbibliothek-berlin.de/werkansicht/?PPN=PPN873464885" },
      { label: "Bach Digital: list of sources for BWV 1067", url: "https://www.bach-digital.de/receive/BachDigitalWork_work_00001253?lang=en" },
      { label: "Netherlands Bach Society, All of Bach: video and programme note", url: "https://www.bachvereniging.nl/en/bwv/bwv-1067" }
    ],
    links: ["bach-flute-sonatas", "bach-bwv1013"]
  },
  {
    id: "mozart-k299",
    composer: "Wolfgang Amadeus Mozart",
    name: "Concerto for Flute and Harp in C major, K. 299",
    short: "Mozart, Flute and Harp Concerto K. 299",
    start: 1778,
    dates: "1778",
    place: "Paris",
    kind: "piece",
    scoring: "Flute, harp and orchestra",
    flutes: ["classical-keyed-flute"],
    description: "Mozart wrote this concerto in Paris for the Comte de Guines, an amateur flutist, and his harpist daughter. The flute part goes down to c′, below the normal range of a one-keyed flute: the count had been a French envoy in London and very probably owned an English flute with a long foot joint. {{brown2002, p. 22}}",
    tips: "Choose a classical flute with a c′ foot, ideally of English type. The many chromatic passages sound beautifully varied on a flute with few keys. {{brown2002, p. 22}}",
    imslp: "Concerto for Flute and Harp K.299",
    listen: "Mozart flute harp concerto K 299 period instruments",
        image: { src: "assets/img/hfp/r-k299.jpg", caption: "Mozart's autograph of the Andantino of K. 299", credit: "Photo Gloue · CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Concerto_for_Flute,_Harp_and_Orchestra,_Andantino,_K299,_Holograph_manuscript.png" },
    links: ["mozart-k313"]
  },
  {
    id: "brahms-symphony-4",
    composer: "Johannes Brahms",
    name: "Symphony No. 4 in E minor, Op. 98: the flute solo in the finale",
    short: "Brahms, Symphony No. 4 (flute solo)",
    start: 1885,
    dates: "1885",
    place: "Meiningen / Leipzig",
    kind: "piece",
    scoring: "Orchestra (solo flute in the finale)",
    flutes: ["reform-flute", "german-keyed-flute", "boehm-1847"],
    description: "The long, sorrowful flute solo in the passacaglia finale is one of the most famous moments in the orchestral flute repertoire. Brahms knew it on conical German flutes: after the Leipzig performance in February 1886 he wrote to [[schwedler|Maximilian Schwedler]] to praise the full, beautiful and powerful tone of his [[reform-flute|Reform flute]]. {{brown2002, p. 30}}",
    tips: "Think of the dark, reedy colour of the conical German flute: a warm low register and great intensity rather than brilliance. {{brown2002, p. 29}}",
    listen: "Brahms Symphony 4 flute solo",
        links: ["schwedler"]
  }
];
