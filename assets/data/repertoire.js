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
    composer: "Johann Sebastian Bach",
    name: "Partita in A minor for solo flute, BWV 1013",
    short: "Bach, Partita BWV 1013",
    start: 1725, dates: "manuscript copy, probably 1720s",
    place: "unknown",
    kind: "piece",
    scoring: "Solo flute",
    flutes: ["baroque-four-piece", "hotteterre-flute"],
    description:
      "Four dance movements (Allemande, Corrente, Sarabande, Bourrée anglaise) that survive in a single 18th-century manuscript copy, probably made in the 1720s and titled 'Solo p[our une] flûte traversière par J. S. Bach'; the name 'Partita' comes from modern editors. The Allemande runs without a single rest, so the player must find their own breaths. {{bachP968; henle457}}",
    tips: "Plan breaths by leaving out notes of the implied bass line. The high a‴ at the end of the Allemande is a real challenge on a one-keyed flute, so practise it on its own. {{brown2002, p. 19}} Enjoy the colours of the forked notes rather than trying to hide them.",
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
    composer: "J. S. Bach or C. P. E. Bach (attributed)",
    name: "Sonata in G minor for flute (or violin) and harpsichord, BWV 1020",
    short: "Bach (attr.), Sonata BWV 1020",
    start: 1735,
    dates: "c.1730s–1740s",
    place: "Leipzig or Berlin?",
    kind: "piece",
    scoring: "Flute and obbligato harpsichord",
    flutes: ["baroque-four-piece", "quantz-flute"],
    description: "This attractive sonata survives under the names of both J. S. and C. P. E. Bach, and scholars still disagree about who wrote it. The keyboard has a written-out right-hand part, so it needs no cello. It also shows why 'Urtext' editions can differ: one manuscript source has an extra bar in the last movement. {{brown2002, pp. 2, 5, 13}}",
    tips: "Compare two editions if you can and check which source each follows. With obbligato harpsichord the balance is delicate: choose a flute with a strong low register. {{brown2002, p. 12}}",
    imslp: "Sonata BWV 1020",
        links: ["cpe-bach-wq132"]
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
