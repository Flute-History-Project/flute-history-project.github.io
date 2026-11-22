/*
 * REPERTOIRE: pieces and study books
 * kind: "piece" | "study" | "collection"
 * flutes: ids of the flutes this music can be played on, in order of historical fit.
 *         This is the ONLY source of "Playable on" / "Possible repertoire".
 * tips: practical advice for performers
 * imslp: search string for the score on IMSLP (omit for works still under copyright)
 * group: id of another entry that holds this one: it is nested as a drop-down inside that entry on this page and folded under it on the Flute Map
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
    group: "bach-flute-sonatas",
    row: "Four dance movements for unaccompanied flute: Bach's only known work for the solo flute.",
    mss: [{ text: "Copy of the 1720s: Berlin, Staatsbibliothek zu Berlin, Mus.ms. Bach P 968 (7), bound with a copy of the solo violin works.", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/324760"], ["Staatsbibliothek digital", "https://digital.staatsbibliothek-berlin.de/werkansicht/?PPN=PPN780135172"], ["Bach Digital", "https://www.bach-digital.de/receive/BachDigitalWork_work_00001192?lang=en"]] }],
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
  /* ---------- Mozart: the Dejean commission and the other flute works ----------
     An overview, then one entry per work (they were written at different times, for different people, and each has its
     own sources and questions of date or authorship). All fold on the Flute Map under the overview. */
  {
    id: "mozart-flute-works",
    dossier: "mozart",
    news: { text: "On 19 June 2026 the Bibliothèque nationale de France announced the discovery of a 44-page notebook that records the composition lessons Mozart gave in Paris in 1778 to Marie-Louise-Philippine de Bonnières de Guînes, the harpist daughter of the Duc de Guînes, for whom he wrote the [[mozart-k299|Concerto for Flute and Harp]]. It holds composition exercises and seven pieces for flute and harp, six of them complete. The BnF says they are written for a flute that goes down to low C, like the concerto, and that the Duke had acquired such a flute while ambassador in London. {{bnf2026}}\n\nThe curator François-Pierre Goy recognised Mozart's hand on 2 February 2026; the attribution was confirmed by Laurence Decobert and, in April, by Armin Brinzing of the Mozarteum in Salzburg. The BnF announced the first public performance for 21 June 2026, by two musicians of the Orchestre Philharmonique de Radio France. As of November 2026 the pieces have not yet been published in an edition. {{bnf2026}}" },
    summary: "Mozart wrote surprisingly little for the flute, and most of it dates from 1777–78, when he was looking for a post in Mannheim and Paris. What remains is two concertos (K. 313 and 314), an Andante (K. 315), the Concerto for Flute and Harp (K. 299), four quartets and a lost Paris Sinfonia concertante. {{adorjan2014; pohanka150, pp. III–VI}} It all begins with one commission: on 10 December 1777 Mozart told his father that, through his friend Wendling, an amateur flutist back from the service of the Dutch East India Company, Ferdinand Dejean, would pay 200 florins for three small, easy concertos and a couple of quartets. {{mozartletters, no. 388 (10 Dec 1777); goritzki2001, p. III}}",
    composer: "Wolfgang Amadeus Mozart",
    name: "Mozart: concertos and quartets with flute",
    short: "Mozart: concertos & quartets",
    start: 1777, dates: "1777–1787",
    place: "Mannheim; Paris; Vienna",
    kind: "collection",
    scoring: "Flute and orchestra; flute and strings; flute and harp",
    flutes: ["classical-keyed-flute"],
    description:
      "Mozart wrote surprisingly little for the flute, and most of it belongs to a single winter. The pieces that matter are the Concertos in G ([[mozart-k313|K. 313]]) and D ([[mozart-k314|K. 314]], an arrangement of an oboe concerto), the Andante in C ([[mozart-k315|K. 315]]), the Flute and Harp Concerto ([[mozart-k299|K. 299]]) and four quartets for flute and strings ([[mozart-k285|K. 285]], [[mozart-k285a|285a]], [[mozart-k285b|285b]] and [[mozart-k298|298]]); a Paris Sinfonia concertante for flute, oboe, horn and bassoon ([[mozart-k297b|K. 297b]]) is lost. The Breitkopf editor of K. 299 counts that concerto, the D major Quartet K. 285, the Andante K. 315 and the late Quintet K. 617 for glass harmonica among Mozart's few unquestionably genuine compositions for the flute. K. 313 is not doubted either, but its autograph is lost; K. 314 is an arrangement; and three of the four quartets raise questions of date or authorship. {{adorjan2014; pohanka150, pp. III–VI}}\n\n" +
      "Mozart was twenty-one when the story begins. In August 1777 he had asked to leave the Salzburg archbishop's service; he and his father were both dismissed, though Leopold was later reinstated, and on 22 September Wolfgang set out with his mother to look for a post elsewhere. {{brown2006, p. 18; giegling323, pp. III–VI; mozartletters, no. 430 (25–26 Feb 1778)}} Munich and Augsburg offered nothing. Mannheim, whose court orchestra was renowned for its standard and its discipline, promised more: he arrived on 30 October and stayed until 14 March 1778, giving lessons, eating at Wendling's table and at the Cannabichs', and writing music for friends. {{pohanka150, p. III; brown2006, pp. 18–20}} On 8 December he learned that the Elector had no place for him. {{brown2006, p. 19}} By then he had fallen in love with the sixteen-year-old singer Aloisia Weber and wanted to take her to Italy, and he put off the journey to Paris, while Leopold, in Salzburg and ever angrier, repeated that the point of the trip was to find a post or to earn money. {{brown2002, p. 141; brown2006, p. 19}} From Mannheim he travelled on to Paris, where he arrived on 23 March; his mother died there on 3 July. {{mozartletters, nos. 477 (Leopold to Padre Martini, 21 Aug 1778) and 459 (3 Jul 1778)}}\n\n" +
      "The commission came through the flutist Johann Baptist [[wendling|Wendling]], first flute of the Mannheim orchestra and one of Mozart's closest friends there. On 10 December 1777 Mozart told his father what Wendling had said over lunch: 'our Indian' (that is, a Dutchman who lives on his own means, a lover of all the sciences and a great admirer of Mozart) was 'a rare man', and would give 200 florins for '3 kleine, leichte, und kurze Concertln und ein Paar quattro auf die flötte': three small, easy and short little concertos and a couple of quartets for the flute. {{mozartletters, no. 388 (10 Dec 1777); goritzki2001, p. III}} The 'Indian' was [[dejean|Ferdinand Dejean]], a doctor back from the service of the Dutch East India Company, who was in Mannheim from November 1777 to February 1778. {{pohanka150, Nachtrag; steins}}\n\n" +
      "The money was welcome: it could pay for a longer stay, as Leopold himself had suggested. Mozart began at once. On 18 December he wrote that 'a quartet for the Indian Dutchman, for the true friend of mankind' was nearly ready, and the autograph of the D major Quartet [[mozart-k285|K. 285]] is dated Mannheim, 25 December 1777. {{pohanka150, pp. III–IV; mozartletters, no. 393 (18 Dec 1777)}} Then the work stalled. On 31 January 1778, in a letter in verse to his mother, he joked that Wendling would be cross because no pieces had come from him, that he would soon write 'the 4 quartetti', and that the concertos would have to wait for Paris. On 4 February he told his father that he would finish 'all the music for de Jean' at his leisure, since that was what the 200 florins were for, and on 12 February Leopold answered that he was astonished that nothing had yet been delivered. {{mozartletters, nos. 412, 416 and 422}} On 14 February, the day before Dejean left for Paris, Mozart reported that Dejean had paid him only 96 florins (half of 200, he explained, with a miscalculation of 4) because he had finished no more than '2 concerti' and '3 quartetti'; Dejean must still pay in full, he wrote, as agreed with Wendling, and the rest would follow. He added that he had no peace in Mannheim, could only write at night, and that, 'as you know', he lost patience whenever he had to write 'for an instrument that I cannot stand'. {{mozartletters, no. 423 (13–14 Feb 1778)}} Leopold's reply of 23 February is a single long reproach: 96 florins instead of 200, and why had Mozart not served the paying patron first? {{mozartletters, no. 429 (23 Feb 1778)}}\n\n" +
      "What exactly Dejean received is uncertain. On 14 February Mozart counted two concertos and three quartets; on 3 October 1778, writing from Nancy, he mentioned only 'the 3 quartets and the flute concerto', which Dejean, when he left for Paris, had put 'in the wrong trunk', so that they had stayed behind in Mannheim: Dejean had promised to send them on, and Mozart would ask Wendling. {{mozartletters, no. 494 (3 Oct 1778); pohanka150, p. IV}} Only the quartet K. 285 can be tied securely to the commission, since its autograph carries the date. The Andante K. 315 is on paper and in handwriting of 1778 and so probably belongs to it. The concertos K. 313 and K. 314 and the quartet K. 285a are possible but cannot be proved, and the quartets K. 285b and K. 298 turn out, according to the newer research, to be Viennese works. On balance, writes Wiese, a Mannheim quartet is missing, the two Viennese quartets are never mentioned in the letters, and there is an Andante that nobody ordered. {{wiese2009, §1.2; henle635, pp. V–VI}} Martin argues, on the contrary, that Dejean received definitely two, probably three and possibly four quartets, and considers the watermark evidence for the later dating unreliable. {{martin2021}}\n\n" +
      "Which flute did Dejean play, and how well? Nothing in the letters or in the documents we have says. Rachel Brown supposes that, like Wendling, he still used a one-keyed flute, as most players on the Continent did: flutes with several keys became common there only about the time of Mozart's death. {{brown2002, p. 142; brown2006, p. 23; spohr2006, p. 27}} As for makers, Salzburg had none of reputation, Spohr notes; he names Michael Eisenmenger in Mannheim, Thomas Lot in Paris (Wendling was one of his clients) and the internationally known Grenser in Dresden, Kirst in Potsdam and Tromlitz in Leipzig, and thinks Grenser's flutes were probably the most used by professionals on the Continent in Mozart's lifetime. {{spohr2006, pp. 28, 33}} No document links Dejean with any of them. As for his level, the only direct evidence is that he asked, through Wendling, for easy pieces. Giegling reads K. 313 as written for the limited technical means of its patron, while Martin, himself a flutist, finds the music well within reach of a determined amateur with Wendling's guidance. {{mozartletters, no. 388 (10 Dec 1777); giegling323, pp. III–VI; martin2021}} What little is known about the man and his instrument is collected under [[dejean|Dejean]].\n\n" +
      "The remark of 14 February has been quoted so often that it has become the standard explanation of why Mozart wrote so little for the flute. Brown calls it an off-the-cuff remark by a young man in love, frustrated and badgered by his father, and Adorján points out that Mozart wrote the Flute and Harp Concerto only weeks later in Paris. {{brown2006, pp. 17, 23; adorjan2014}} Brown adds a practical reason: the flute of 1777 was at an awkward point in its history, with one-keyed instruments still dominant among amateurs and asked to play dramatic music for which their forked fingerings were ill suited. {{brown2002, p. 141}} She also notes that, for all his friendship with Wendling, there is no record of Mozart ever praising his playing, and she sees the contact with the Mannheim wind players as a turning point for his writing for winds, as *Idomeneo* (1781) shows. {{brown2006, pp. 24–25}}",
    tips: "Use an Urtext edition and read its preface: the Neue Mozart-Ausgabe scores from Bärenreiter (TP 323 for K. 313–315, TP 150 for the quartets), Breitkopf's K. 313 (Wiese, 2006) and K. 314 (Wiese, 2009) and Henle's quartets (Wiese, 1998) all differ on dates and sources, and these prefaces are free to read on the publishers' sites. Bärenreiter's K. 314 comes with cadenzas and lead-ins by Rachel Brown and Konrad Hünteler, Breitkopf's K. 313 with cadenzas and lead-ins by Wiese. {{giegling323; wiese2009; henle635; ba4855a; eb8644}}\n\n" +
      "All of Mozart's flute music can be played on a one-keyed flute if its f‴ is good, and his chromatic lines thrive on the contrast of strong and veiled notes. Others prefer a six- or eight-keyed flute for evenness. Only K. 299 needs a flute that goes down to c′. {{brown2002, p. 22}} Leopold Mozart's [[mozart-violinschule|Violinschule]] is the best guide to articulation and vibrato in this style. {{brown2002, p. 11}}",
    curio: "Mozart gave Dejean the autograph scores, against the family habit of keeping them, and, as Mozart told his father, Dejean put them in the wrong trunk. The autographs of the concertos have never been found, but that of the D major Quartet survives, in Kraków. {{giegling323, pp. III–VI; pohanka150, Nachtrag}}",
    image: { src: "assets/img/hfp/r-mannheim-1779.jpg", caption: "The parade ground and promenade at Mannheim, engraved by J. F. Riedel in 1779. The title names the Pfälzischer Hof, the inn where Mozart and his mother lodged on arrival", credit: "Generallandesarchiv Karlsruhe, J-B Mannheim 8 · CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Prospect_des_Parade_und_des_Promenade_Plazes_zu_Manheim,_nebst_des_Mauth-,_Post-_und_Wirthshauses,_genannt_der_Pf%C3%A4lzische_Hof._-_Vue_de_la_Place_d%27Arm_-_LABW_-_Generallandesarchiv_Karlsruhe_J-B_Mannheim_8.jpeg" },
    sources: [
      { label: "Digital Mozart Edition: Mozart's letter of 10 December 1777 (no. 388), German transcription and English translation", url: "https://dme.mozarteum.at/DME/briefe/letter.php?mid=952" },
      { label: "Digital Mozart Edition: Mozart's letter of 13–14 February 1778 (no. 423)", url: "https://dme.mozarteum.at/DME/briefe/letter.php?mid=987" },
      { label: "Digital Mozart Edition: Leopold Mozart's reply of 23 February 1778 (no. 429)", url: "https://dme.mozarteum.at/DME/briefe/letter.php?mid=993" },
      { label: "Digital Mozart Edition: Mozart's letter of 3 October 1778 (no. 494)", url: "https://dme.mozarteum.at/DME/briefe/letter.php?mid=1058" },
      { label: "Falk Steins: Ferdinand Dejean (1731–1797), chronology, sources and open questions", url: "https://ferdinanddejean.jimdofree.com/english/cv/" }
    ],
    links: ["dejean", "wendling", "mozart-k313", "mozart-k314", "mozart-k315", "mozart-k285", "mozart-k285a", "mozart-k285b", "mozart-k298", "mozart-k297b", "mozart-k299", "mozart-violinschule", "tromlitz-unterricht"]
  },
  {
    id: "mozart-k313",
    group: "mozart-flute-works",
    row: "The first flute concerto, written in Salzburg or Mannheim in 1777–78. Mozart left no cadenzas.",
    mss: [{ text: "Autograph lost. First edition: Breitkopf & Härtel, Leipzig, 1803, from no known manuscript.", links: [["IMSLP page", "https://imslp.org/wiki/Flute_Concerto_in_G_major,_K.313/285c_(Mozart,_Wolfgang_Amadeus)"]] }],
    composer: "Wolfgang Amadeus Mozart",
    name: "Flute Concerto No. 1 in G major, K. 313 (285c)",
    short: "Mozart, Concerto K. 313",
    start: 1777, dates: "1777–78",
    place: "Salzburg or Mannheim",
    kind: "piece",
    scoring: "Flute and orchestra",
    flutes: ["classical-keyed-flute"],
    description:
      "The first of Mozart's flute concertos is usually placed in Mannheim in the winter of 1777–78 and identified with the 'flute concerto for Mr. de Jean' that Mozart mentioned on 3 October 1778. It has three movements: an Allegro maestoso, an Adagio ma non troppo and a Rondo in the tempo of a minuet. {{mozartletters, no. 494 (3 Oct 1778); eb8644}} But Mozart may have written it before leaving Salzburg. Wiese notes that a performance of a Mozart flute concerto in Salzburg in July 1777 is documented and that, judging by its instrumentation, it was most probably K. 313; as he did with his oboe concerto, Mozart could then have re-dedicated it to [[dejean|Dejean]] in Mannheim. Goritzki, in the Henle edition of the oboe concerto, likewise calls it 'possibly already composed in Salzburg'. {{wiese2009, §1.2; goritzki2001, p. IV}}\n\n" +
      "The Mozarts' habit was to give the patron a copyist's manuscript and keep the autograph score. What happened here is unknown: perhaps Mozart had no time to have a copy made and gave Dejean the autograph, and Dejean is said to have packed it in the wrong trunk before leaving for Paris, so that it stayed in Mannheim. Mozart asked his friend [[wendling|Wendling]] to send it to him, but we do not know whether he ever received it. The autograph is lost, and the first edition (Breitkopf & Härtel, Leipzig, 1803) has no known manuscript model. {{giegling323, pp. III–VI; mozartletters, no. 494 (3 Oct 1778)}}\n\n" +
      "Giegling finds in the concerto, as in all of Mozart's works written to order for amateurs, the right texture for the limited technical skills of its patron and a fresh, easy-going tone. He thinks the Andante [[mozart-k315|K. 315]] may have been written as an alternative to the more demanding slow movement of K. 313. {{giegling323, pp. III–VII}} Whether Dejean's skills were really limited is another question, discussed under [[mozart-flute-works|the overview]].",
    tips: "Dejean probably played a one-keyed flute, so a one-keyed classical flute is the natural choice. Six- or eight-keyed copies after Heinrich Grenser at a′ = 430 are the standard classical flute today, and a flute with a few keys is also possible. {{brown2002, pp. 36, 142}} Mozart's concertos can be played on a one-keyed flute as long as its f‴ is good; others prefer six or eight keys for evenness. {{brown2002, p. 22}}\n\n" +
      "Mozart left no cadenzas for the flute concertos, so you will have to write your own in period style, or use those of a modern editor (Wiese's Breitkopf edition includes cadenzas and lead-ins). In the Rondo Mozart himself varies the refrain four times; Brown suggests using these variants as models for ornamenting a plainer refrain, such as that of the D major Concerto. {{brown2002, p. 101}}",
    imslp: "Flute Concerto in G major K.313",
    listen: "Mozart flute concerto G major K 313 traverso",
    image: { src: "assets/img/hfp/p-mozart-1777.jpg", caption: "Mozart at twenty-one: the so-called 'Bologna Mozart', copied in Salzburg in 1777 by an unknown painter for Padre Martini (Museo internazionale e biblioteca della musica, Bologna)", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Martini_bologna_mozart_1777.jpg" },
    links: ["mozart-flute-works", "tromlitz-unterricht", "dejean"]
  },
  {
    id: "mozart-k314",
    group: "mozart-flute-works",
    row: "A transposition of the Oboe Concerto in C, which came first.",
    mss: [{ text: "Autograph of the flute version lost; its oldest source is a set of Viennese parts of the early 1790s. The oboe version: parts found in 1920 in the Mozarteum, Salzburg.", links: [["IMSLP page", "https://imslp.org/wiki/Flute_Concerto_in_D_major,_K.314/285d_(Mozart,_Wolfgang_Amadeus)"]] }],
    composer: "Wolfgang Amadeus Mozart",
    name: "Flute Concerto No. 2 in D major, K. 314 (285d), after the Oboe Concerto in C",
    short: "Mozart, Concerto K. 314",
    start: 1777, dates: "oboe version 1777; flute version 1777–78",
    place: "Salzburg → Mannheim",
    kind: "piece",
    scoring: "Flute and orchestra (2 oboes, 2 horns, strings)",
    flutes: ["classical-keyed-flute"],
    description:
      "This concerto is the Oboe Concerto in C, a tone lower, and the oboe version came first. Mozart probably wrote it in Salzburg in the spring or summer of 1777 for the oboist Giuseppe Ferlendis, who had joined the court orchestra on 1 April. In Mannheim he made a present of it to the oboist Friedrich Ramm, who played it there repeatedly: on 14 February 1778 Mozart wrote that Ramm had played it for the fifth time, that it was making a great stir, and that it had become his *cheval de bataille*. {{giegling323, pp. III–VI; wiese2009, §1.1; mozartletters, no. 423 (13–14 Feb 1778)}}\n\n" +
      "The oboe version was long thought lost. In 1920 Bernhard Paumgartner found a set of parts in the Mozarteum in Salzburg and recognised that the flute concerto, which Köchel had assumed to be one of Dejean's concertos, was its transposition; a nine-bar autograph sketch in C that surfaced in 1971 confirms that the oboe version is the original. Since 1937 the usual explanation, proposed by Alfred Einstein, has been that Mozart, short of time, simply transposed the oboe concerto for Dejean. {{wiese2009, §1.1–1.2; giegling323, pp. III–VI}} Wiese's careful account leaves open who made the arrangement, since nowhere does it show the hand of Mozart: perhaps he only ordered it, and the sale to Dejean would then authorise it indirectly. The oldest source of the flute version is a set of Viennese parts of the early 1790s. {{wiese2009, §1.2}} Goritzki, himself an oboist, believes that the arrangement was copied almost literally, perhaps by Fridolin Weber or by Wendling, that it was meant as one of the 'small, easy and short' concertos, and that the Salzburg oboe part is a later, simplified revision by another hand. {{goritzki2001, pp. III–IV}}",
    tips: "Brown notes the many gruppetti (turns) that Mozart writes at the start of phrases in the slow movement. {{brown2002, p. 98}} The refrain of the Rondo is plain, and the varied refrains of the Rondo of [[mozart-k313|K. 313]] give ideas for ornamenting it. {{brown2002, p. 101}}\n\n" +
      "The Breitkopf edition (Wiese, 2009) follows the Viennese flute parts closely and recommends leaving out the doubtful slides (*Schleifer*) in the slow movement, especially the one in bar 2; Bärenreiter's edition includes a reference score that sets the flute part above the oboe part, and cadenzas and lead-ins by Rachel Brown and Konrad Hünteler. {{wiese2009, §3; ba4855a, p. V}}",
    curio: "On 15 February 1783, in Vienna, Mozart asked his father to send him the book with 'Ramm's oboe concerto, or rather Ferlendis's': the oboist of Prince Esterházy would give him three ducats for it, and six for a new one. It is the last mention of the score. {{wiese2009, §1.1; giegling323, pp. III–VI}}",
    imslp: "Flute Concerto in D major K.314",
    listen: "Mozart flute concerto D major K 314 traverso",
    links: ["mozart-flute-works", "mozart-k313", "wendling", "dejean"]
  },
  {
    id: "mozart-k315",
    group: "mozart-flute-works",
    row: "A single slow movement, probably linked to the Dejean commission; perhaps an alternative to the slow movement of K. 313.",
    mss: [{ text: "Autograph: Paris, Bibliothèque nationale de France, Ms. 229 (ten leaves).", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/270208"]] }],
    composer: "Wolfgang Amadeus Mozart",
    name: "Andante in C major for flute and orchestra, K. 315 (285e)",
    short: "Mozart, Andante K. 315",
    start: 1778, dates: "1778",
    place: "Mannheim",
    kind: "piece",
    scoring: "Flute and orchestra",
    flutes: ["classical-keyed-flute"],
    description:
      "A single, serenade-like slow movement. The autograph survives (Brown places it in the Bibliothèque nationale in Paris), and its paper and handwriting date it to 1778, so it probably has something to do with Dejean's commission, although Mozart never mentions it in his letters. {{wiese2009, §1.2; brown2002, p. 142}} What it was for is not known. Giegling suggests it was written as an alternative to the more demanding slow movement of [[mozart-k313|K. 313]], which would suit the modest technique of the patron; Brown thinks it more likely to be part of an unfinished third concerto, the third of the 'three small, easy and short' concertos that were ordered. {{giegling323, pp. V, VII; brown2002, p. 141}} Mozart gave the autographs of these works to Dejean, perhaps in haste, because he had not even completed the commission. {{brown2002, p. 142}}",
    tips: "Brown's case study of this piece is full of practical advice. Mozart made no written distinction between long and short grace notes, notating them all as quaver acciaccaturas, but many 'long' appoggiaturas are in fact written out in full (the first notes of bars 4, 10, 12, 15, 16, 28 and 30). For the others, she suggests that the one in bar 20 could be half-length, on the beat, that in bar 8 a little shorter, and those in bars 30 and 84 short, on or just before the beat. Special delicate fingerings are possible after the arresting augmented fourth in bar 12, and normal fingerings with a stronger sound at the recapitulation in bar 66. {{brown2002, p. 142}}\n\n" +
      "She suggests embellishing the recapitulation from bar 59 with new rhythms, new figuration over the same harmony, new articulations and above all chromatic passing notes. Any cadenza should be short: Mozart's shortest piano cadenza is four bars, and Tromlitz gives one of similar length. {{brown2002, p. 143}}",
    imslp: "Andante in C major K.315",
    listen: "Mozart andante C major K 315 flute",
    links: ["mozart-flute-works", "mozart-k313", "tromlitz-unterricht", "dejean"]
  },
  {
    id: "mozart-k285",
    group: "mozart-flute-works",
    row: "The one quartet that can be tied to the Dejean commission: the autograph is dated Mannheim, 25 December 1777.",
    mss: [{ text: "Autograph: Kraków, Biblioteka Jagiellońska (formerly in Berlin).", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/387513"]] }],
    composer: "Wolfgang Amadeus Mozart",
    name: "Flute Quartet in D major, K. 285",
    short: "Mozart, Quartet K. 285",
    start: 1777, dates: "Mannheim, 25 December 1777",
    place: "Mannheim",
    kind: "piece",
    scoring: "Flute, violin, viola and cello",
    flutes: ["classical-keyed-flute"],
    description:
      "The only flute quartet whose date is certain, and the one that can be tied to Dejean's commission with confidence. The autograph, which was lost for a time after the Second World War and has been accessible again since 1979–80 in the Biblioteka Jagiellońska in Kraków, bears the note 'Mannheim il 25 decre 1777'. Mozart wrote 'a quartet for the Indian Dutchman' that month. {{pohanka150, pp. III, V, Nachtrag; mozartletters, no. 393 (18 Dec 1777)}} It has three movements, with a slow movement that ends on a pause before the Rondo: it is not a proper close, and the flute may be expected to bridge the gap with a short *Eingang* (lead-in). The cello part is headed simply 'Basso'. {{pohanka150, pp. V, VII, Nachtrag}}\n\n" +
      "Before 1882 all the printed editions combined its first movement with two other movements that the first two editions of Köchel's catalogue did not list; in 1936 Georges de Saint-Foix identified them with the second quartet for Dejean ([[mozart-k285a|K. 285a]]). The first complete edition faithful to the autograph came out in 1882 in the old Mozart complete edition. {{pohanka150, pp. V–VI}}",
    tips: "Mozart's quartets with a wind instrument have very few dynamic marks, probably not through carelessness but because he counts on the natural dynamic means of the wind instrument and on the strings' chamber-music instinct to step back or play out as needed: add little, if anything. {{pohanka150, p. VII}}",
    imslp: "Flute Quartet in D major K.285",
    listen: "Mozart flute quartet D major K 285 traverso",
    links: ["mozart-flute-works", "mozart-k285a", "mozart-k285b", "mozart-k298", "dejean"]
  },
  {
    id: "mozart-k285a",
    group: "mozart-flute-works",
    row: "Two movements, authorship not proved. Only early prints survive.",
    mss: [{ text: "No autograph. The only sources are early prints, the first by Artaria, Vienna, 1792.", links: [["IMSLP page", "https://imslp.org/wiki/Flute_Quartet_in_G_major,_K.285a_(Mozart,_Wolfgang_Amadeus)"]] }],
    composer: "Wolfgang Amadeus Mozart (authorship not proved)",
    name: "Flute Quartet in G major, K. 285a",
    short: "Mozart, Quartet K. 285a",
    start: 1778, dates: "probably Mannheim, early 1778",
    place: "Mannheim?",
    kind: "piece",
    scoring: "Flute, violin, viola and cello",
    flutes: ["classical-keyed-flute"],
    description:
      "A quartet in two movements, an Andante and a Tempo di Menuetto, which Wiese sees as a way of making a virtue of necessity: a short quartet in the Mannheim taste, written while Mozart had no peace in which to work. {{henle635, pp. V–VI}} There is no autograph. The movements were for a long time printed after the first movement of [[mozart-k285|K. 285]], and Saint-Foix identified them in 1936 as the lost second quartet for Dejean; Einstein accepted this in the third edition of the Köchel catalogue (1937) and gave the work the number 285a. It is an attractive hypothesis, say the editors of the New Mozart Edition, but no proof for or against is possible, and even the authenticity of the two movements cannot strictly be proved, since the early prints (the first, by Artaria in Vienna in 1792) are the only sources. {{pohanka150, pp. V–VI, VII}}",
    tips: "Only the early prints survive, and Wiese calls them careless to a degree that is hard to surpass: compare editions, and see the Henle and Bärenreiter prefaces for what each editor decided. {{henle635, p. V; pohanka150, p. VI}}",
    imslp: "Flute Quartet in G major K.285a",
    links: ["mozart-flute-works", "mozart-k285", "mozart-k285b", "dejean"]
  },
  {
    id: "mozart-k285b",
    group: "mozart-flute-works",
    row: "Two movements. Date (1778 or 1781) and authorship are both debated; the slow movement is also in the 'Gran Partita'.",
    mss: [{ text: "Only an autograph sketch of bars 149–158 of the first movement survives. First print: Bossler, Speyer, 1788.", links: [["sketch on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/497721"]] }],
    composer: "Wolfgang Amadeus Mozart (authorship disputed)",
    name: "Flute Quartet in C major, K. Anh. 171 (285b)",
    short: "Mozart, Quartet K. 285b",
    start: 1778, dates: "1778 or 1781",
    place: "Mannheim or Vienna",
    kind: "piece",
    scoring: "Flute, violin, viola and cello",
    flutes: ["classical-keyed-flute"],
    description:
      "A quartet in two movements whose date and authorship are both debated. Einstein put it in Mannheim in January or February 1778, assuming that it was the third quartet for [[dejean|Dejean]]. {{pohanka150, pp. V–VI}} But an autograph sketch for a few bars of the first movement, on a loose sheet that also carries sketches for *Die Entführung*, points to Vienna in 1781, and Wiese suggests that Mozart wrote it then for Wendling, who had just played the solo flute in the Munich first performance of *Idomeneo* (Mozart wrote the Oboe Quartet K. 370 for Ramm, who also took part, at the same time). {{henle635, pp. V–VI; pohanka150, p. VI}}\n\n" +
      "The slow movement, a theme with variations, is almost note for note the sixth movement of the Serenade in B♭, K. 361 (the 'Gran Partita', 1781), and scholars disagree about which came first: some see the quartet as the original, others as an anonymous arrangement, with the first movement 'more or less' a forgery. The earliest print is a set of parts by Heinrich Philipp Bossler in Speyer (op. XIV, 1788). {{pohanka150, pp. V–VI; henle635, pp. V–VI}}",
    tips: "The sources are corrupt, and the transmitted text has two odd places in the variations. In one the violin doubles the viola in the accompaniment, which the Bärenreiter editors corrected as a probable engraver's misunderstanding. In the other, a bar with a pause between the fourth and fifth variations, the flute rests while the strings play a fortissimo C in unison: the editors left it as printed, but think that a plain C major chord, or a dominant chord over which the flute improvises a short cadenza, is more likely, and they leave sensible changes to the performer. {{pohanka150, pp. VI–VII}}",
    imslp: "Flute Quartet in C major K.Anh.171",
    links: ["mozart-flute-works", "mozart-k285", "mozart-k285a", "wendling", "dejean"]
  },
  {
    id: "mozart-k298",
    group: "mozart-flute-works",
    row: "A light quartet on borrowed tunes, written in Vienna, probably in late 1786, not in Paris in 1778.",
    mss: [{ text: "Autograph: Vienna, Österreichische Nationalbibliothek.", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/563465"]] }],
    composer: "Wolfgang Amadeus Mozart",
    name: "Flute Quartet in A major, K. 298",
    short: "Mozart, Quartet K. 298",
    start: 1786, dates: "Vienna, probably late 1786 (long dated 1778)",
    place: "Vienna",
    kind: "piece",
    scoring: "Flute, violin, viola and cello",
    flutes: ["classical-keyed-flute"],
    description:
      "Otto Jahn and, after him, every edition of the Köchel catalogue placed this quartet in Paris in 1778, on the strength of a note in ink on the autograph (now in the Austrian National Library, Vienna): 'Quatuor original composé par W. A. Mozart. à Paris. 1778. Manuscrit du Compositeur, reçu du Baron de Jacquin', probably in the hand of Ignaz von Mosel. The note is confirmed by nothing, and in 1939 Georges de Saint-Foix argued for Vienna in 1786; the handwriting of the autograph shows all the marks of the mature Viennese years, and paper and handwriting, Wiese adds, prove that the work is not from Mannheim. {{pohanka150, pp. IV–V; henle635, pp. V–VI}}\n\n" +
      "It belongs to a fashionable genre, the *quatuor d'airs dialogués*, built on other people's tunes. The theme of the opening variations resembles Hoffmeister's song *An die Natur*; the trio of the minuet is an old French rondeau, 'Il a des bottes, des bottes Bastien'; and the theme of the finale comes from Paisiello's opera *Le gare generose*, first performed in Naples in spring 1786 and in Vienna on 1 September 1786, which gives the earliest possible date. The baron who owned the manuscript was probably Mozart's Viennese friend Gottfried von Jacquin, and the quartet may have been written for his circle. {{pohanka150, pp. IV–V; henle635, pp. V–VI}} The opening variations seem unfinished: the movement has only 64 bars, with no minor variation, no adagio variation and no coda. {{pohanka150, p. VIII}}",
    tips: "A light, witty piece for friends: play the borrowed tunes with the character of their sources rather than as a showpiece. {{pohanka150, pp. IV–V}}",
    imslp: "Flute Quartet in A major K.298",
    links: ["mozart-flute-works", "mozart-k285b"]
  },
  {
    id: "mozart-k297b",
    group: "mozart-flute-works",
    row: "Sinfonia concertante for flute, oboe, horn and bassoon, Paris 1778. The score is lost.",
    mss: [{ text: "Lost. The Sinfonia concertante in E♭ found in Otto Jahn's estate is not Mozart's piece as it stands.", links: [] }],
    composer: "Wolfgang Amadeus Mozart (lost)",
    name: "Sinfonia concertante for flute, oboe, horn and bassoon, K. Anh. I, 9 (297B): lost",
    short: "Mozart, Paris Sinfonia concertante",
    start: 1778, dates: "Paris, April 1778",
    place: "Paris",
    kind: "piece",
    scoring: "Flute, oboe, horn, bassoon and orchestra",
    flutes: ["classical-keyed-flute"],
    description:
      "In Paris in the spring of 1778 four outstanding wind players were in town at the same time as Mozart: [[wendling|Wendling]] (flute), Friedrich Ramm (oboe), Georg Wenzel Ritter (bassoon), all members of the Mannheim court orchestra, and the horn player Giovanni Punto. Mozart saw the chance and on 5 April announced that he would write a sinfonia concertante for them, for the Concert spirituel directed by Joseph Le Gros. {{ba5770, pp. III–V; mozartletters, no. 440 (5 Apr 1778)}} The four soloists were delighted with it, but on 1 May Mozart reported that Le Gros had had it for four days for copying and that it always lay in the same place; he found it hidden among the music, and Le Gros said he had forgotten to give it to the copyist. On the days it should have been played, Ramm and Punto came to Mozart, angry, to ask why it was not being performed, and Ramm denounced Le Gros in the music room. {{mozartletters, no. 447 (1 May 1778)}} On 3 October Mozart wrote that Le Gros had bought the work, together with two overtures, and thought that he alone had it; Mozart still had it in his head and would write it out again. {{mozartletters, no. 494 (3 Oct 1778)}}\n\n" +
      "The score has never turned up. A copy of a Sinfonia concertante in E♭ for oboe, clarinet, horn and bassoon, found in the estate of Mozart's biographer Otto Jahn, was long taken to be that work in revised form. The editors now agree that it is not Mozart's piece as it stands, and above all that its orchestral writing is not his; the Bärenreiter preface holds it to be a deeply dubious work. The original, for flute, oboe, horn and bassoon, remains lost. {{ba5770, pp. III–V}}",
    links: ["mozart-flute-works", "wendling"]
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
    links: ["reinecke-flute-concerto"]
  },
  {
    id: "reinecke-flute-concerto",
    composer: "Carl Reinecke",
    name: "Flute Concerto in D major, Op. 283",
    short: "Reinecke, Flute Concerto",
    start: 1908, dates: "1908",
    place: "Leipzig",
    kind: "piece",
    scoring: "Flute and orchestra (or piano)",
    flutes: ["reform-flute", "boehm-1847"],
    description:
      "Reinecke's last concerto, finished presumably in October and at the latest by November 1908, is dedicated to [[schwedler|Maximilian Schwedler]], principal flutist of the Leipzig Gewandhaus Orchestra. {{reinecke283, p. 2}} It was the second work Reinecke wrote for a Gewandhaus flutist: the [[reinecke-undine|Undine sonata]] of 1882 is dedicated to Schwedler's colleague Wilhelm Barge. Whether Schwedler or Reinecke was the driving force behind the concerto remains a matter of speculation. {{reinecke283, pp. 1–2}}\n\n" +
      "Schwedler played a conical-bore flute: he rejected the cylindrical Boehm flute, built the Schwedler-Kruspe model with the Erfurt maker Wilhelm Kruspe in 1885 and introduced the German [[reform-flute|Reform flute]] in 1898. {{reinecke283, p. 1}} Breitkopf & Härtel printed only the piano reduction, in January 1909, made, no doubt, by the composer himself, because the publishers were wary of the cost of the score and parts; orchestral material was offered on hire in manuscript. {{reinecke283, p. 2}}\n\n" +
      "The world premiere took place in Leipzig on 15 March 1909, in the large festival hall of the Zoological Garden, at a spring concert of the men's chorale Konkordia. Schwedler played it with Oswin Keller at the piano, not with an orchestra, and a reviewer praised his broad tone in the cantilena and the virtuoso polish of his figurations. {{reinecke283, p. 2}} The first performance with orchestra was in London on 4 September 1909, at the Queen's Hall Promenade Concerts, with Henry Wood conducting and Albert Fransella as soloist. {{reinecke283, p. 2}}\n\n" +
      "Reinecke's tempo markings are full of small differences between states (animato, tranquillo) and developments (accelerando, ritardando), often softened by *un poco*. The original orchestration has a small string section but four horns, and the finale has a stretta that is shorter in the original version. {{reinecke283, pp. 2–3}}",
    tips: "Start from the piano version: it is the form in which the work was first heard and printed. The Breitkopf edition by Henrik Wiese prints three authorized readings of the solo part (after the orchestral autograph, after the first piano edition for chamber performance, and the line above the piano staff), so you can compare them and decide for yourself. {{reinecke283, p. 2}}",
    curio: "The world premiere of this concerto was given in a zoo's festival hall at a men's choir concert, with a piano, and the first performance with orchestra took place not in Leipzig but in London. {{reinecke283, p. 2}}",
    imslp: "Flute Concerto Op.283 Reinecke",
    wiki: "Flute Concerto (Reinecke)",
    sources: [{ label: "Breitkopf & Härtel: afterword to the new edition (PDF)", url: "https://www.breitkopf.com/assets/pdf/PB_5529-_NW_en.pdf" }],
    recordings: ["rec-fransella", "rec-schwedler"],
    links: ["schwedler", "reinecke-undine", "reform-flute", "schwedler-1897"]
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
    group: "bach-flute-sonatas",
    row: "Attributed to J. S. or C. P. E. Bach. The solo instrument is a violin in every source, but it is often played on the flute.",
    mss: [{ text: "Among the sources: Berlin, Staatsbibliothek zu Berlin, Mus.ms. Bach P 1059 (copy of c. 1760–90).", links: [["IMSLP page", "https://imslp.org/wiki/Violin_Sonata_in_G_minor,_BWV_1020_(Bach,_Johann_Sebastian)"]] }],
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
    dossier: "bach",
    summary: "There is no set of flute sonatas by Bach: what survives are separate works, written at different times and handed down in very different sources. Four sonatas are beyond doubt (BWV 1030, 1032, 1034 and 1035) and three are disputed (BWV 1020, 1031 and 1033). {{leisinger2003, p. V}} Besides them there are the Partita for solo flute (BWV 1013), two trio sonatas (BWV 1038 and 1039), the trio sonata of the Musical Offering (BWV 1079) and the Suite in B minor (BWV 1067). {{nbs1013; breig2003}}",
    buffardin: { text: "[[buffardin|Pierre Gabriel Buffardin]], principal flutist of the Dresden orchestra, is the flutist most often named in connection with Bach, and the documents are few. Documented, through C. P. E. Bach's notes on the family genealogy: he had taught Bach's elder brother Johann Jacob, and he met Johann Sebastian, probably in 1717 and again in Leipzig. {{funkkunath2018, p. 225, nn. 2–3}} That Bach wrote anything for him is a theory. A concert programme note attributes to Robert Marshall the idea that Bach had Buffardin in mind for his earliest flute works; the Netherlands Bach Society states that the Partita BWV 1013 was written 'with him in mind', without giving a source; Frisch reports that Christoph Wolff has wondered about flute parts of the Mass in B minor; and the Henle facsimile of [[bach-bwv1030|BWV 1030]] mentions him and Quantz only as conjecture. {{oldpostroad; nbs1013; frisch2018, p. 96; tomita2024, pp. V–VI}}" },
    cantatas: { text: "The transverse flute appears in many of Bach's vocal works. The site bach-cantatas.com has two pages on the subject (Part 1 and Part 2), made of posts from its mailing list between 2000 and 2006. The list in Part 1, compiled by Thomas Braatz in 2005, names 71 vocal works with transverse flute and gives the movements; they are listed below by BWV number. Another 22 works are listed with *flauto*, the recorder, and four of them (BWV 161, 180, 244 and 249) are in both lists. The pages give no sources for the lists and argue at length over whether *flauto* means recorder or flute, so check the score or Bach Digital before relying on a single entry. {{bachcantatas}}", bwv: ["8", "9", "11", "26", "30", "30a", "34", "36b", "45", "55", "67", "78", "79", "82", "94", "96", "99", "100", "101", "102", "103", "107", "110", "113", "114", "115", "117", "123", "125", "129", "130", "145", "146", "151", "157", "161", "164", "170", "172", "173", "173a", "180", "181", "184", "184a", "191", "192", "194a", "195", "197a", "198", "201", "204", "205", "206", "207", "209", "210", "211", "212", "214", "215", "216", "232", "234", "243", "244", "245", "247", "248", "249"], links: [["bach-cantatas.com: Flute in Bach's Vocal Works, Part 1", "https://www.bach-cantatas.com/Topics/Flute.htm"], ["bach-cantatas.com: Part 2", "https://www.bach-cantatas.com/Topics/Flute-2.htm"]] },
    composer: "Johann Sebastian Bach",
    name: "Bach: flute sonatas and partitas",
    short: "Bach: sonatas & partitas",
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
      "Where to go next. With obbligato harpsichord: [[bach-bwv1030|B minor, BWV 1030]] (autograph score of c. 1736–37), [[bach-bwv1032|A major, BWV 1032]] (autograph, incomplete) and the doubtful [[bach-bwv1031|E♭ major, BWV 1031]] (copies of c. 1748–55). With continuo: [[bach-bwv1034|E minor, BWV 1034]] (six copies, the oldest by Kellner), [[bach-bwv1035|E major, BWV 1035]] (late Berlin copies), the doubtful [[bach-bwv1033|C major, BWV 1033]] (copy by C. P. E. Bach, 1731) and [[bach-bwv1020|G minor, BWV 1020]]. {{leisinger2003, pp. V–VI; alves2021, pp. 8–9; nbs1033}} Trios: [[bach-bwv1038|BWV 1038]] for flute and scordatura violin (autograph parts), [[bach-bwv1039|BWV 1039]] for two flutes, and the trio of the [[bach-bwv1079|Musical Offering]]. {{wollny2013, pp. III–V; leisinger2002}} Beyond the sonatas, Bach's only known solo work for flute is the [[bach-bwv1013|Partita BWV 1013]]; in the [[bach-bwv1067|Suite in B minor, BWV 1067]] the flute is the solo instrument with the strings. {{nbs1013; breig2003}}",
    tips: "Editions differ because the sources differ. The B minor Sonata, for example, has a separate flute part copied by Bach's pupil Goldberg that carries slurs and an ornament missing from Bach's own score, so the flutist who reads only the score misses part of the original text. {{tomita2024, pp. XIII–XV}}\n\n" +
      "The two 'solos' for flute and continuo (BWV 1034 and 1035) call for a bass instrument, a keyboard, or both, in spite of the title. {{leisinger2003, p. V}} The Netherlands Bach Society films the E minor Sonata with viola da gamba and harpsichord and the trio for two flutes with gamba and theorbo: try different continuo groups. {{nbs1034; nbs1039}}",
    imslp: "Bach flute sonata BWV 1030",
    listen: "Bach complete flute sonatas traverso harpsichord",
    image: { src: "assets/img/hfp/r-zimmermann-cafe.jpg", caption: "The Katharinenstraße in Leipzig, c. 1720, engraved by Johann George Schreiber: the street of Zimmermann's coffee house, where Bach's Collegium Musicum played", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Caf%C3%A9_Zimmermann_Katherinenstra%C3%9Fe_Leipzig_1720.jpg" },
    sources: [
      { label: "Bach Digital: the catalogue of Bach's works and their sources", url: "https://www.bach-digital.de/" },
      { label: "Netherlands Bach Society, All of Bach: every work on video, with programme notes", url: "https://www.bachvereniging.nl/en/bwv/" }
    ],
    links: ["bach-bwv1013", "bach-bwv1020", "bach-bwv1030", "bach-bwv1031", "bach-bwv1032", "bach-bwv1033", "bach-bwv1034", "bach-bwv1035", "bach-bwv1038", "bach-bwv1039", "bach-bwv1079", "bach-bwv1067", "quantz", "buffardin"]
  },
  {
    id: "bach-bwv1034",
    group: "bach-flute-sonatas",
    row: "E minor, with continuo. No autograph, but six 18th-century copies.",
    mss: [{ text: "Copies: Berlin, Staatsbibliothek zu Berlin, Mus.ms. Bach P 804 (by J. P. Kellner) and P 233; Leipzig, Ms R 17 (from the library of W. F. Bach).", links: [["Kellner copy on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/353029"], ["P 233 on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/361523"], ["Bach Digital", "https://www.bach-digital.de/receive/BachDigitalWork_work_00001216?lang=en"]] }],
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
    group: "bach-flute-sonatas",
    row: "Trio sonata for two flutes and continuo; it also exists as a sonata for viola da gamba and harpsichord (BWV 1027).",
    mss: [{ text: "Parts from C. P. E. Bach's collection: Berlin, Staatsbibliothek zu Berlin, Mus.ms. Bach St 431.", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/407907"], ["Bach Digital", "https://www.bach-digital.de/receive/BachDigitalWork_work_00001221?lang=en"]] }],
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
    group: "bach-flute-sonatas",
    row: "C major, with continuo. Attribution doubtful; the earliest source is a copy by C. P. E. Bach of 1731.",
    mss: [{ text: "Copy by C. P. E. Bach, 1731; the holding library is given on Bach Digital.", links: [["scan on IMSLP", "https://imslp.org/wiki/Flute_Sonata_in_C_major,_BWV_1033_(Bach,_Johann_Sebastian)"], ["Bach Digital", "https://www.bach-digital.de/receive/BachDigitalWork_work_00001215?lang=en"]] }],
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
    group: "bach-flute-sonatas",
    row: "Trio sonata for flute, violin (scordatura) and continuo. The parts are in Bach's hand but carry no composer's name.",
    mss: [{ text: "Autograph parts: Nuremberg, Germanisches Nationalmuseum, K. 27.", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/416097"], ["Bach Digital", "https://www.bach-digital.de/receive/BachDigitalWork_work_00001219?lang=en"]] }],
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
    group: "bach-flute-sonatas",
    row: "B minor, with harpsichord: the only flute sonata that survives complete in Bach's own hand (score of c. 1736–37).",
    mss: [{ text: "Autograph score: Berlin, Staatsbibliothek zu Berlin, Mus.ms. Bach P 975, with a separate flute part copied by J. G. Goldberg.", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/369079"], ["Bach Digital", "https://www.bach-digital.de/receive/BachDigitalSource_source_00001960?lang=en"], ["Deutsche Digitale Bibliothek", "https://www.deutsche-digitale-bibliothek.de/item/EHF2WL22DU4L6BY7XTN36VMTA6QOCUAG"]] }],
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
    group: "bach-flute-sonatas",
    row: "A major, with harpsichord. Written on the empty staves of the autograph of the Concerto for two harpsichords BWV 1062; part of the first movement is lost.",
    mss: [{ text: "Autograph: Berlin, Staatsbibliothek zu Berlin, Mus.ms. Bach P 612 (together with BWV 1062).", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/153556"], ["Bach Digital", "https://www.bach-digital.de/receive/BachDigitalWork_work_00001214?lang=en"]] }],
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
    group: "bach-flute-sonatas",
    row: "E♭ major, with harpsichord. Attribution doubtful; the oldest copy dates from 1748–49.",
    mss: [{ text: "No autograph. Berlin, Staatsbibliothek zu Berlin, Mus.ms. Bach P 649 (score of 1748–49) and P 1056 (c. 1755).", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/276760"], ["Bach Digital", "https://www.bach-digital.de/receive/BachDigitalWork_work_00001213?lang=en"]] }],
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
    group: "bach-flute-sonatas",
    row: "E major, with continuo. The copies say it was prepared for the Privy Chamberlain Fredersdorf in Potsdam, in 1741 or 1747.",
    mss: [{ text: "No autograph. Copies: Berlin, Staatsbibliothek zu Berlin, Mus.ms. Bach P 621 and P 622; Brussels, Conservatoire royal, XY 15.140.", links: [["IMSLP page", "https://imslp.org/wiki/Flute_Sonata_in_E_major,_BWV_1035_(Bach,_Johann_Sebastian)"], ["Bach Digital", "https://www.bach-digital.de/receive/BachDigitalWork_work_00001217?lang=en"]] }],
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
    group: "bach-flute-sonatas",
    row: "The trio sonata of the Musical Offering, a gift to the flute-playing Frederick II, 1747.",
    mss: [{ text: "First edition (1747): Berlin, Staatsbibliothek zu Berlin, Am. B. 74.", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/430601"], ["Staatsbibliothek digital", "https://digital.staatsbibliothek-berlin.de/werkansicht/?PPN=PPN82595973X"]] }],
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
    group: "bach-flute-sonatas",
    row: "Orchestral suite with the flute as solo instrument. Bach wrote out the flute and viola parts himself, c. 1738–39.",
    mss: [{ text: "Original parts: Berlin, Staatsbibliothek zu Berlin, Mus.ms. Bach St 154.", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/878122"], ["Staatsbibliothek digital", "https://digital.staatsbibliothek-berlin.de/werkansicht/?PPN=PPN873464885"], ["Bach Digital", "https://www.bach-digital.de/receive/BachDigitalWork_work_00001253?lang=en"]] }],
    composer: "Johann Sebastian Bach",
    name: "Orchestral Suite No. 2 in B minor, BWV 1067",
    short: "Bach, Suite BWV 1067",
    start: 1739, dates: "parts c. 1738–39",
    place: "Leipzig",
    kind: "piece",
    scoring: "Flute, strings and basso continuo",
    flutes: ["baroque-four-piece"],
    description:
      "The only one of Bach's four Overtures (the 'orchestral suites') in a minor key and in the form of the 'concerto overture' that Johann Adolph Scheibe described in 1745. The flute is the solo instrument. The number 2 comes from the old Bach-Gesellschaft edition of 1885, whose editor thought it the second oldest and a work of the Köthen years; recent research regards it as the latest of the four. {{breig2003}}\n\n" +
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
    group: "mozart-flute-works",
    row: "For the Duc de Guines and his daughter, Paris, April–May 1778. The flute part goes down to c′.",
    mss: [{ text: "Autograph: Kraków, Biblioteka Jagiellońska (formerly in Berlin).", links: [["scan on IMSLP", "https://imslp.org/wiki/Special:ImagefromIndex/295484"]] }],
    composer: "Wolfgang Amadeus Mozart",
    name: "Concerto for Flute and Harp in C major, K. 299 (297c)",
    short: "Mozart, Flute and Harp Concerto K. 299",
    start: 1778,
    dates: "Paris, April–May 1778",
    place: "Paris",
    kind: "piece",
    scoring: "Flute, harp and orchestra",
    flutes: ["classical-keyed-flute"],
    description: "Mozart wrote this concerto in Paris for the Duc de Guines (Adrien-Louis Bonnières de Sodastre, formerly Comte de Guines), an amateur flutist, and his daughter, a harpist and Mozart's composition pupil. On 14 May 1778 Mozart wrote that the Duke played the flute 'incomparably well' and his daughter the harp 'magnifique'; by 31 July he was still waiting for the Duke to pay for the concerto, four months after he had delivered it. {{adorjan2014; mozartletters, nos. 449 (14 May 1778) and 471 (31 Jul 1778)}} According to Gunson, [[wendling|Wendling]], who had taught Guines, introduced Mozart to him. {{gunson}}\n\n" +
      "The flute part goes down to c′ in all three movements, below the normal range of a one-keyed flute: Guines had been French ambassador in London until 1776 and very probably owned an English flute with a foot joint down to c′. Spohr thinks it was most probably a six-keyed English flute, and Brown notes that such a flute would have had at least five other keys, for B♭, G♯, F, E♭ and c♯′. {{brown2002, pp. 22, 175; spohr2006, pp. 27, 29}} Both solo parts are easy to play and are distinguished less by bravura than by esprit, elegance and the colour of the two instruments together. The autograph, titled 'Concertante a La Harpe, e Flauto. Paris 1778', is in the Biblioteka Jagiellońska in Kraków. {{adorjan2014}}",
    tips: "Choose a classical flute with a c′ foot, ideally of English type. The many chromatic passages sound beautifully varied on a flute with few keys. {{brown2002, p. 22}}",
    imslp: "Concerto for Flute and Harp K.299",
    listen: "Mozart flute harp concerto K 299 period instruments",
        image: { src: "assets/img/hfp/r-k299.jpg", caption: "Mozart's autograph of the Andantino of K. 299", credit: "Photo Gloue · CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Concerto_for_Flute,_Harp_and_Orchestra,_Andantino,_K299,_Holograph_manuscript.png" },
    links: ["mozart-flute-works", "mozart-k313", "wendling"]
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
