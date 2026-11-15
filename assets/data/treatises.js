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
    image: { src: "assets/img/hfp/t-virdung.jpg", caption: "Title page of Musica getutscht (1511), from the facsimile edition of 1882", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Sebastian_Virdung%27s_Musica_getutscht._Basel._1511._Zweiter_Amdruck..._-_bpt6k318283j_(011_of_142).jpg" },
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
    image: { src: "assets/img/hfp/d-agricola.jpg", caption: "Agricola's six-holed Swiss pipe, redrawn from Musica instrumentalis deudsch", credit: "H. M. Fitzgibbon, The Story of the Flute (1914) · public domain", url: "https://commons.wikimedia.org/wiki/File:Agricola%27s_Schweitzerpfeiff_(pg_30,_The_Story_of_the_Flute,_1914).png" },
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
      "Short, clear and practical, Jacques-Martin [[hotteterre|Hotteterre]]'s Principes was reprinted and translated for decades. It is the first-hand guide to playing the [[hotteterre-flute|three-piece baroque flute]] and its French repertoire, starting with Hotteterre's own [[hotteterre-op2|Pièces]].\n\n" +
      "It was the first treatise written for the one-keyed flute. Concise as it is, it explains the favoured tu-ru articulation in depth, and counts the flattement (finger vibrato) among the ornaments 'absolutely necessary' for good playing. Hotteterre is an open-minded author: he sets out other views beside his own and lets the reader choose the fingering or tonguing that works best. His fingering chart is full of notes on turning the flute in or out and softening the breath, and further advice appears in the preface to the second edition of his Pièces. Prelleur's English [[prelleur-1731|Newest Method]] is based on it, and it was translated by David Lasocki in 1968.",
    imslp: "Principes de la flûte traversière Hotteterre",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-principes-title.jpg", caption: "Title page of the Principes, Paris edition of 1722", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Principes_de_la_flute_traversi%C3%A8re,_ou_flute_d%27Allemagne_;_de_la_flute_%C3%A0_bec,_ou_flute_douce_;_et_du_hautbois_;_diviser_par_traitez._Par_le_sieur_Hotteterre_le-Romain,_ordinaire_de_la_musique_du_roy_-_bpt6k9633016w_(011_of_140).jpg" },
    links: ["hotteterre-preluder", "prelleur-1731"]
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
      "[[quantz|Quantz]]'s Versuch begins as a method for the [[baroque-four-piece|traverso]] and grows into a complete guide to musical taste in the age of Bach. Players of every instrument still read it for its advice on ornamentation, tempo and style.\n\n" +
      "Quantz is one of the most dogmatic authors, yet even he changed his mind: in a notebook of studies published today as *Solfeggi* he treats double tonguing in a more advanced and subtle way, and the fingering chart he prepared for Frederick the Great a year after the Versuch differs in important details from the printed one. Several of his firm statements are quietly qualified later in the book. His fully ornamented Adagio, with its tiny nuances of loud and soft, deserves special study.\n\nBeware of translations: Edward Reilly's English edition (*On Playing the Flute*, 1966) reproduces Quantz's drawing of how much to cover the embouchure hole inaccurately, with the lines in the wrong place and the wrong direction. It is worth checking the facsimile.",
    imslp: "Versuch einer Anweisung die Flöte traversiere zu spielen",
    sources: [{ label: "flutehistory.com: Quantz and the Essay", url: "http://www.flutehistory.com/Players/Johann_Joachim_Quantz/index.php3" }, BROWN],
    image: { src: "assets/img/hfp/t-quantz-title.jpg", caption: "Title page of the Versuch, Berlin, 1752", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Quantz_Versuch_Fl%C3%B6te_1752_Seite_A_01.jpg" },
    links: ["bach-bwv1013", "telemann-fantasias", "quantz-flute", "cpe-bach-versuch"]
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
      "[[tromlitz|Tromlitz]] wrote as both performer and maker. His Unterricht is the key source for playing the [[classical-keyed-flute|keyed flute]] and for the late-18th-century German style: subtle articulation, careful tuning, singing phrasing.\n\n" +
      "In many ways Tromlitz is even more thorough than Quantz, and his musical examples belong to the next, Classical generation. He gives note-by-note intonation advice for every scale and an unparalleled discussion of articulation, and his Adagio, ornamented three times over, points towards the florid style of the 19th century. His ideal of an even, 'metallic' sound across the whole compass was also forward-looking. Ardal Powell's translation, *The Virtuoso Flute-Player* (1991), is very readable.",
    imslp: "Ausführlicher und gründlicher Unterricht die Flöte zu spielen",
    sources: [BROWN],
    links: ["mozart-k313", "tromlitz-1800", "quantz-versuch"]
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
      "[[devienne|Devienne]]'s method was reprinted many times and shaped French teaching in the first decades of the Conservatoire. Its duets are still a pleasant way to learn the [[classical-keyed-flute|Classical flute]].\n\n" +
      "Devienne acknowledged the new keys but never used them himself. His method favours mellow tone colours, condemns hard sounds and describes an early form of the modern 'dou-gue' double tongue. Like most French tutors of the time it contains many preludes for improvising, some of them suitable as cadenzas. A decade later the Conservatoire's official [[hugot-wunderlich-1804|method by Hugot and Wunderlich]] fully embraced the four-keyed flute.",
    imslp: "Nouvelle méthode théorique et pratique pour la flûte Devienne",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-devienne.jpg", caption: "Title page of Devienne's Nouvelle méthode (Paris, Imbault)", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Nouvelle_m%C3%A9thode_th%C3%A9orique_et_pratique_pour_la_fl%C3%BBte..._suivie_de_20_petits_airs,_18_petits_duos_et_6_sonates_gradu%C3%A9es_-_btv1b10862515z_(02_of_83).jpg" },
    links: ["hugot-wunderlich-1804", "dorus-1850"]
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
      "In this short book [[boehm|Boehm]] explains why the [[boehm-1847|modern flute]] is built the way it is. Dayton C. Miller's English translation (1908) made it a classic, and Miller's own huge flute collection is now at the Library of Congress.\n\n" +
      "Boehm's pages on expression are as interesting as his acoustics. He urged flutists to study vocal music, whose words show where phrases go and where to save the full strength of the tone. He described portamento as a perfect legato in which the notes are joined 'like a series of pearls' on the thread of the air stream, and warned that a badly made glide sounds like cats on the rooftops.",
    imslp: "Die Flöte und das Flötenspiel",
    sources: [BROWN],
    image: { src: "assets/img/hfp/d-boehm-1832.jpg", caption: "Boehm's ring-key flute of 1832", credit: "H. M. Fitzgibbon, The Story of the Flute (1914) · public domain", url: "https://commons.wikimedia.org/wiki/File:B%C3%B6hm%27s_Flute_of_1832_(pg_51,_The_Story_of_the_Flute,_1914).png" },
    links: ["boehm-1832", "alto-flute"]
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
      "[[fuerstenau|Fürstenau]]'s tutors are the essential guide to the [[german-keyed-flute|German keyed flute]] in its golden age. They give extensive technical advice, especially on fingerings, and show the special style and feeling of German flute playing in Weber's time.\n\n" +
      "*Die Kunst* assumes a high level of virtuosity and adds the final artistic polish. Unusually, Fürstenau discusses technique and style through his own compositions, and he follows closely Spohr's *Violinschule* of 1832. He shows long phrases linked by quick, hidden breaths, expects a good flutist to play six to eight bars of a 4/4 Allegro in one breath, and allows vibrato only on the single climactic note of a passionate phrase.",
    imslp: "Fürstenau Die Kunst des Flötenspiels Op.138",
    sources: [BROWN],
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
      "[[schwedler|Schwedler]], principal flute of the Leipzig Gewandhaus, set out in this book the ideals behind the [[german-keyed-flute|German conical flute]] at the moment when it was losing ground to the Boehm flute. It was revised and reissued in the 20th century.\n\n" +
      "Schwedler, the last opponent of the Boehm flute, gives the 19th century's closest description of a vibrato used to ennoble and strengthen the tone in general, not as an ornament on single notes. He still used the old soft double tongue 'di-l'. An English translation by John Robert Bailey exists as a dissertation (1987).",
    imslp: "Schwedler Katechismus der Flöte",
    sources: [BROWN],
    links: ["reform-flute"]
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
      "Begun by [[taffanel|Taffanel]] and completed after his death by his pupil Philippe Gaubert, this method fixed the teaching of the French school on the [[boehm-1847|Boehm flute]]. Its [[tg-17-exercises|daily exercises]] are still played every day around the world.\n\n" +
      "It is a reminder of how recent today's vibrato is: the method insists that in Bach and the great classical composers there should be no vibrato at all. Vibrato, it says, distorts the natural character of the instrument and is a vulgar artifice of inferior players; the music must be conveyed by the tone itself.",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-taffanel.jpg", caption: "Title page of the first edition (Paris, Leduc, 1923)", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_compl%C3%A8te_de_fl%C3%BBte_en_huit_parties_(1re_%C3%A9dition)_-_btv1b525026221_(007_of_240).jpg" },
    links: ["moyse"]
  },
  {
    id: "freillon-poncein-1700",
    name: "La véritable manière d'apprendre à jouer en perfection du hautbois, de la flûte et du flageolet",
    short: "Freillon-Poncein, La véritable manière",
    authorName: "Jean-Pierre Freillon-Poncein",
    start: 1700,
    place: "Paris",
    language: "French",
    tagline: "A method for the oboe, recorder and flageolet from the generation just before Hotteterre.",
    contents: [
      "Fingerings for oboe, recorder and flageolet",
      "Articulation syllables of the French wind tradition",
      "Advice on ornaments"
    ],
    description: "Written for other wind instruments, this book (like Loulié's of 1680) shows the French woodwind style that [[hotteterre-principes|Hotteterre]] would apply to the new transverse flute a few years later. Flutists read it for its articulation and ornaments.",
    imslp: "Freillon-Poncein La véritable manière",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-freillon.jpg", caption: "Title page, Paris, 1700", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:La_veritable_maniere_d%27apprendre_a_jouer_en_perfection_du_haut-bois,_de_la_flute_et_du_flageolet,_avec_les_principes_de_la_musique_pour_la_voix_et_pour_toutes_sortes_d%27instrumens_-_bpt6k11637435_(009_of_110).jpg" },
    links: ["hotteterre-principes"]
  },
  {
    id: "hotteterre-preluder",
    name: "L'Art de préluder sur la flûte traversière, sur la flûte-à-bec, sur le hautbois, et autres instrumens de dessus, Op. 7",
    short: "Hotteterre, L'Art de préluder",
    author: "hotteterre",
    start: 1719,
    place: "Paris",
    language: "French",
    tagline: "How to improvise a prelude, and the clearest early account of notes inégales.",
    contents: [
      "Preludes in every key, to be learned and imitated",
      "Modulation and the art of improvising",
      "Notes inégales, with examples from Lully, Clérambault, Bernier, Marais and Corelli",
      "Advice on reading time signatures"
    ],
    description: "Players were expected to improvise a short prelude before a piece. [[hotteterre|Hotteterre]]'s second book teaches how, with model preludes in all keys and advice on modulation. It also contains an invaluable explanation of *notes inégales*, the French habit of playing pairs of equal-looking notes unequally, illustrated with real music.",
    imslp: "L'Art de préluder Hotteterre",
    sources: [BROWN],
    links: ["hotteterre-principes", "hotteterre-flute"]
  },
  {
    id: "prelleur-1731",
    name: "The Newest Method for Learners on the German Flute (in The Modern Musick-Master)",
    short: "Prelleur, Newest Method",
    authorName: "Peter Prelleur",
    start: 1731,
    place: "London",
    language: "English",
    tagline: "Hotteterre in English, with popular opera arias for amateurs.",
    contents: [
      "An English adaptation of Hotteterre's Principes",
      "Simple arrangements of popular operatic arias",
      "Part of a larger book teaching several instruments"
    ],
    description: "Prelleur's *Modern Musick-Master* brought [[hotteterre-principes|Hotteterre's method]] to the growing English amateur market, adding easy arrangements of favourite opera tunes. It shows how fast French flute teaching spread across Europe.",
    imslp: "Prelleur Modern Musick-Master",
    sources: [BROWN],
    image: { src: "assets/img/hfp/d-german-flute-player.jpg", caption: "'The German Flute Player', plate from The Modern Musick-Master", credit: "H. M. Fitzgibbon, The Story of the Flute (1914) · public domain", url: "https://commons.wikimedia.org/wiki/File:The_German_Flute_Player_(from_The_Modern_Musick_Master)_(pg_22,_The_Story_of_the_Flute,_1914).jpg" },
    links: ["hotteterre-principes"]
  },
  {
    id: "corrette-1735",
    name: "Méthode raisonnée pour apprendre aisément à jouer de la flûtte traversière",
    short: "Corrette, Méthode raisonnée",
    authorName: "Michel Corrette",
    start: 1735,
    place: "Paris",
    language: "French",
    tagline: "A friendly beginner's method that rejects tu-ru and is one of the few to mention the piccolo.",
    contents: [
      "Easy pieces illustrating every fingering",
      "Notation of flattements (finger vibrato) and of inequality",
      "How to adapt violin music for the flute",
      "A rare early description of the piccolo ('petite flûte à l'octave')"
    ],
    description: "Corrette's method shows the growing blend of French and Italian styles. He drops the old tu-ru articulation, suggests tonguing close to the lips, and does not bother with different fingerings for enharmonic notes, a difference he considered too small to matter on the flute. His instructions for adapting violin music reflect what amateurs actually played.",
    imslp: "Corrette Méthode raisonnée flûte traversière",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-corrette-front.jpg", caption: "Frontispiece of Corrette's Méthode: master and pupil", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_pour_apprendre_ais%C3%A9ment_%C3%A0_jo%C3%BCer_de_la_flute_traversi%C3%A8re._Avec_des_principes_de_musique,_et_des_brunettes_a_I._et_II._parties._Ouvrage_utile_et_curieux,_qui_conduit_en_tr%C3%A8s_peu_de_tems_%C3%A0_la..._-_bpt6k11689650_(08_of_73).jpg" },
    links: ["piccolo", "hotteterre-principes"]
  },
  {
    id: "bordet-1755",
    name: "Méthode raisonnée pour apprendre la musique… et à jouer de la flûte",
    short: "Bordet, Méthode raisonnée",
    authorName: "Toussaint Bordet",
    start: 1755,
    place: "Paris",
    language: "French",
    tagline: "Early evidence of breath vibrato, a soft double tongue and harmonics.",
    contents: [
      "Chest (breath) vibrato, among the earliest descriptions",
      "A smooth double tongue later associated with Delusse",
      "Use of harmonics",
      "Duets imitating the tremolo stop of an organ"
    ],
    description: "Bordet's little-known method anticipates many ideas usually credited to [[delusse-1760|Delusse]]. His duet *La Lanterne magique* can be played with double tonguing or with a 'palpitating' breath that imitates an organ's tremolo stop.",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-bordet.jpg", caption: "Title page of Bordet's Méthode raisonnée", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_raisonn%C3%A9e_pour_apprendre_la_musique..._-_btv1b10868347d_(01_of_86).jpg" },
    links: ["delusse-1760"]
  },
  {
    id: "mahaut-1759",
    name: "Nouvelle méthode pour aprendre en peu de tems à jouer de la flûte traversière",
    short: "Mahaut, Nouvelle méthode",
    authorName: "Antoine Mahaut",
    start: 1759,
    place: "Paris (also Amsterdam)",
    language: "French and Dutch",
    tagline: "A clear mid-century method with annotated fingerings and simple pieces.",
    contents: [
      "Regular and alternative fingerings, with comments",
      "Simple beginners' pieces",
      "Mixtures of tonguing and slurring instead of tu-ru pairs",
      "An E♭-key trill that became standard"
    ],
    description: "Mahaut's method is especially useful for its commented fingering chart and its sense of what a learner needs. It marks the shift from the old paired syllables to the more modern combination of tongued and slurred notes.",
    imslp: "Mahaut Nouvelle méthode flûte traversière",
    sources: [BROWN],
    links: ["baroque-four-piece"]
  },
  {
    id: "delusse-1760",
    name: "L'Art de la flûte traversière",
    short: "Delusse, L'Art de la flûte",
    authorName: "Charles Delusse",
    start: 1760,
    place: "Paris",
    language: "French",
    tagline: "Three kinds of vibrato, virtuoso caprices and a quarter-tone 'Air à la Grecque'.",
    contents: [
      "Progressive studies and ornaments described by their Affekt",
      "Three types of vibrato, including breath vibrato ('hou, hou')",
      "The soft double tongue 'loul' and aspirated articulations",
      "Long virtuoso caprices usable as cadenzas",
      "An 'Air à la Grecque' with a quarter-tone fingering chart"
    ],
    description: "Delusse is remarkable in many ways. Influenced by the violinist Geminiani, he imitates violin tricks such as broken chords, and his caprices are long and fiendish. His three types of vibrato anticipate much later practice, and his book even includes a handwritten description of the English keyed flute of Tacet and Florio, suggesting the French knew about keyed flutes earlier than is usually assumed.",
    curio: "Delusse's final piece, the Air à la Grecque, comes with a fingering chart for quarter-tones, a sign of the 18th-century fashion for all things exotic.",
    imslp: "Delusse L'Art de la flûte traversière",
    sources: [BROWN],
    links: ["bordet-1755", "classical-keyed-flute"]
  },
  {
    id: "granom-1770",
    name: "Plain and Easy Instructions for Playing on the German Flute",
    short: "Granom, Plain and Easy Instructions",
    authorName: "Lewis Granom",
    start: 1770,
    place: "London",
    language: "English",
    tagline: "An English amateur's method, by a player who spent years mastering double tonguing.",
    contents: [
      "Fingering and basic technique for the one-keyed flute",
      "Double tonguing",
      "Lessons for amateurs (third edition 1770)"
    ],
    description: "Granom's book belongs to the wave of English tutors for amateurs. He admits that double tonguing cost him 'much pains, assiduity and labour', taking up to four years to master.",
    sources: [BROWN],
    links: ["baroque-four-piece"]
  },
  {
    id: "lorenzoni-1779",
    name: "Saggio per ben sonare il flauto traverso",
    short: "Lorenzoni, Saggio",
    authorName: "Antonio Lorenzoni",
    start: 1779,
    place: "Vicenza",
    language: "Italian",
    tagline: "One of the very few 18th-century flute treatises written in Italian.",
    contents: ["Technique of the one-keyed flute", "Ornaments and expression", "Much material drawn from Quantz"],
    description: "Italy produced great flute music but very few flute books, which makes Lorenzoni's *Saggio* precious. Much of it summarises [[quantz-versuch|Quantz]] for Italian readers.",
    imslp: "Lorenzoni Saggio per ben sonare il flauto traverso",
    sources: [BROWN],
    links: ["quantz-versuch"]
  },
  {
    id: "vanderhagen-1790",
    name: "Nouvelle méthode de flûte",
    short: "Vanderhagen, Nouvelle méthode",
    authorName: "Amand Vanderhagen",
    start: 1790,
    place: "Paris",
    language: "French",
    tagline: "A late-18th-century Paris method with preludes and, unusually, main-note trills.",
    contents: [
      "Useful material for beginners",
      "Preludes for improvising before a piece",
      "Trills starting on the main note, exceptional for the time"
    ],
    description: "Vanderhagen's method, like most French tutors of the period, contains many preludes, a window on the art of improvising. It is unusual in allowing trills to start on the main note rather than the upper note.",
    imslp: "Vanderhagen Nouvelle méthode de flûte",
    sources: [BROWN],
    links: ["classical-keyed-flute"]
  },
  {
    id: "wragg-1792",
    name: "The Flute Preceptor",
    short: "Wragg, Flute Preceptor",
    authorName: "Jacob Wragg",
    start: 1792,
    place: "London",
    language: "English",
    tagline: "A popular English tutor, still reissued in the 1850s.",
    contents: [
      "Basic technique for the keyed flute",
      "Staccato 'with spirit and taste'",
      "The tradition of improvising preludes"
    ],
    description: "Wragg's Preceptor confirms that English amateurs still improvised a prelude before playing a piece. It was so popular that the maker Monzani published a new edition as late as 1859.",
    sources: [BROWN],
    image: { src: "assets/img/hfp/d-wragg-flute.jpg", caption: "Keyed flute shown in Wragg's Flute Preceptor", credit: "H. M. Fitzgibbon, The Story of the Flute (1914) · public domain", url: "https://commons.wikimedia.org/wiki/File:Wragg%27s_Eight-Keyed_Flute_(pg_31,_The_Story_of_the_Flute,_1914).png" },
    links: ["classical-keyed-flute"]
  },
  {
    id: "gunn-1793",
    name: "The Art of Playing the German-Flute on New Principles",
    short: "Gunn, The Art of Playing the German-Flute",
    authorName: "John Gunn",
    start: 1793,
    place: "London",
    language: "English",
    tagline: "An intelligent, analytical English method on sound, phrasing and rhetoric.",
    contents: [
      "A 'new or staccato tonguing', teddy or tiddy",
      "Copious examples of the art of variation, derived from Quantz",
      "Analysis of tone, phrasing, expression and rhetoric"
    ],
    description: "Gunn stands out as a thoughtful, sensitive musician. He mocked the two camps of English players, those who wanted equal fullness of tone everywhere and those who wanted only softness: asking which is better, he said, is like asking a painter whether a picture should be all light or all shadow.",
    curio: "Gunn says he learned (or rather 'stole') his new staccato tonguing from an amateur he met on the Continent, and had never heard anyone else use it.",
    sources: [BROWN],
    links: ["quantz-versuch", "classical-keyed-flute"]
  },
  {
    id: "miller-1799",
    name: "The New Flute Instructor",
    short: "Miller, New Flute Instructor",
    authorName: "Edward Miller",
    start: 1799,
    place: "London",
    language: "English",
    tagline: "An English tutor by a musician who claimed to have played under Handel.",
    contents: [
      "The 'close shake' (finger vibrato) combined with a swell",
      "Lessons for the keyed flute"
    ],
    description: "Miller claimed to be the first to explain the close shake joined to a messa di voce, a small crescendo and diminuendo on one note.",
    curio: "Edward Miller also claimed to be one of the last surviving performers to have played with Handel.",
    sources: [BROWN],
    links: ["classical-keyed-flute"]
  },
  {
    id: "tromlitz-1800",
    name: "Über die Flöten mit mehrern Klappen; deren Anwendung und Nutzen",
    short: "Tromlitz, Flutes with several keys",
    author: "tromlitz",
    start: 1800,
    place: "Leipzig",
    language: "German",
    tagline: "A whole book in defence of the keyed flute, by a player and maker.",
    contents: [
      "How and why to use the added keys",
      "Tromlitz's own keyed system",
      "Translated by Ardal Powell as The Keyed Flute (1996)"
    ],
    description: "[[tromlitz|Tromlitz]]'s last book describes a keyed system that, according to Rachel Brown, deserves far more attention than it has received. Ardal Powell's translation and commentary is the best survey of how simple-system flutes evolved.",
    sources: [BROWN],
    image: { src: "assets/img/hfp/d-tromlitz-flute.jpg", caption: "Tromlitz's keyed flute, with the keys labelled by their inventors", credit: "H. M. Fitzgibbon, The Story of the Flute (1914) · public domain", url: "https://commons.wikimedia.org/wiki/File:Tromlitz%27_Five-Keyed_Flute_(pg_31,_The_Story_of_the_Flute,_1914).png" },
    links: ["classical-keyed-flute", "tromlitz-unterricht"]
  },
  {
    id: "peraut-1800",
    name: "Méthode pour flûte",
    short: "Peraut, Méthode",
    authorName: "Mathieu Peraut",
    start: 1801,
    place: "Paris",
    language: "French",
    tagline: "A Paris method of c. 1800–03 with rising glissandi and many preludes.",
    contents: ["Preludes, some usable as cadenzas", "Ascending glissandi", "Rejection of double tonguing"],
    description: "Peraut's method belongs to the French tradition around [[devienne-methode|Devienne]], with preludes for improvising and interesting rising glides.",
    curio: "Peraut rejected double tonguing on the grounds that two tongue strokes cannot possibly happen at the same time!",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-peraut.jpg", caption: "Title page of Peraut's Méthode pour la flûte", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_pour_la_fl%C3%BBte_enrichie_de_plusieurs_exemples_d%C3%A9monstratifs.._de_12_avis_avec_accompagnement,_6_duos,_6_sonates..._termin%C3%A9e_par_6_grands_caprices_-_btv1b10070498n_(002_of_103).jpg" },
    links: ["classical-keyed-flute"]
  },
  {
    id: "hugot-wunderlich-1804",
    name: "Méthode de flûte du Conservatoire",
    short: "Hugot & Wunderlich, Méthode",
    authorName: "Antoine Hugot & Johann Georg Wunderlich",
    start: 1804,
    place: "Paris",
    language: "French",
    tagline: "The official Paris Conservatoire method: the four-keyed flute and a soft, round tone.",
    contents: [
      "Systematic exercises for the four-keyed flute",
      "A tone 'essentially soft', clear and round",
      "Rules for breathing based on four-bar phrases",
      "Covering only about a sixth of the embouchure hole"
    ],
    description: "With this method the Conservatoire fully adopted the keyed flute, a year after [[devienne|Devienne]]'s death. It favours a mellow tone, condemns hard sounds and tonguing on the teeth, and sets out phrasing and breathing rules that remained the basis of French teaching for decades.",
    imslp: "Hugot Wunderlich Méthode de flûte",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-hugot.jpg", caption: "Title page of the Méthode de flûte du Conservatoire", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_de_fl%C3%BBte_du_Conservatoire_-_adopt%C3%A9e_pour_servir_%C3%A0_l%27%C3%A9tude_dans_cet_%C3%A9tablisssement_-_par_MM._Hugot_et_Wunderlich_membres_du_Conservatoire_-_bpt6k11667841_(009_of_182).jpg" },
    links: ["classical-keyed-flute", "devienne-methode"]
  },
  {
    id: "nicholson-preceptor",
    name: "Complete Preceptor for the German Flute",
    short: "Nicholson, Complete Preceptor",
    author: "nicholson",
    start: 1816,
    place: "London",
    language: "English",
    tagline: "The English virtuoso's own method: big tone, glides and vibrato.",
    contents: [
      "Nicholson's concept of tone and embouchure",
      "Idiosyncratic ornaments, glides and finger vibrato",
      "Duets and lessons",
      "Followed by A School for the Flute (1836)"
    ],
    description: "[[nicholson|Nicholson]]'s tutors, the *Complete Preceptor* and the later *School for the Flute* (1836), stand out for their personal ornaments and for what they say about his sound. He used both finger and breath vibrato and notated his glides with a crescent-moon sign. His 'tootle' double tongue stayed in English use long after.",
    imslp: "Nicholson Complete Preceptor for the German Flute",
    sources: [BROWN],
    links: ["english-flute", "nicholson-roslin"]
  },
  {
    id: "berbiguier-1818",
    name: "Nouvelle méthode pour la flûte",
    short: "Berbiguier, Nouvelle méthode",
    authorName: "Benoît Tranquille Berbiguier",
    start: 1818,
    place: "Paris",
    language: "French",
    tagline: "A French virtuoso method reaching up to d⁗, with a full, vigorous sound.",
    contents: [
      "Range extended up to d⁗",
      "A foot joint down to a, a rarity",
      "The do-gu double tongue",
      "Notes sensibles (raised leading notes)"
    ],
    description: "Berbiguier prized a full sound with bite and vigour. His *Nouvelle méthode* and the later *Gran Metodo* (1820) are among the important French simple-system tutors of the early Romantic era.",
    imslp: "Berbiguier Nouvelle méthode pour la flûte",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-berbiguier.jpg", caption: "Title page of Berbiguier's Nouvelle méthode", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Nouvelle_m%C3%A9thode_pour_la_fl%C3%BBte_divis%C3%A9e_en_3_parties_-_bpt6k1163735m_(011_of_288).jpg" },
    links: ["classical-keyed-flute"]
  },
  {
    id: "drouet-1830",
    name: "Drouët's Method of Flute Playing",
    short: "Drouët, Method",
    author: "drouet",
    start: 1830,
    place: "London",
    language: "English (also French)",
    tagline: "Florid ornaments, with a warning not to use them in great music.",
    contents: [
      "Fingerings shown in musical context",
      "Highly florid ornaments and coloratura",
      "Sensitive notes (notes sensibles) on chromatic auxiliaries"
    ],
    description: "[[drouet|Drouët]] gives dazzling examples of ornamentation, then tells the pupil to use embellishments, vibrato and glides very rarely, and never in the music of Haydn, Mozart and Beethoven.",
    sources: [BROWN],
    links: ["english-flute", "german-keyed-flute"]
  },
  {
    id: "soussmann-1840",
    name: "Practische Flötenschule",
    short: "Soussmann, Flötenschule",
    authorName: "Heinrich Soussmann",
    start: 1840,
    place: "Hamburg",
    language: "German",
    tagline: "A German virtuoso's method, rich in articulation detail.",
    contents: [
      "Two different staccato strokes",
      "The 'duke' double tongue and triple tonguing",
      "Many alternative fingerings for the simple-system flute"
    ],
    description: "Soussmann was one of the great simple-system virtuosos. His method is a good source for the variety of articulations and fingerings available on the German keyed flute.",
    sources: [BROWN],
    links: ["german-keyed-flute"]
  },
  {
    id: "carte-1845",
    name: "A Complete Course of Instructions for the Boehm Flute",
    short: "Carte, Course for the Boehm Flute",
    authorName: "Richard Carte",
    start: 1845,
    place: "London",
    language: "English",
    tagline: "An early English Boehm-flute method that kept English traditions alive.",
    contents: [
      "Fingering for the open-G♯ Boehm flute",
      "The double tongue 'toodoo'",
      "Gliding and both finger and breath vibrato",
      "Revised edition 1878, more cautious about these effects"
    ],
    description: "Carte's method shows how English players brought their habits to the new [[boehm-1832|Boehm flute]]. It is still useful today for anyone learning an open-G♯ instrument.",
    sources: [BROWN],
    image: { src: "assets/img/hfp/d-carte-1867.jpg", caption: "Carte's '1867' flute, combining Boehm's and Carte's systems", credit: "H. M. Fitzgibbon, The Story of the Flute (1914) · public domain", url: "https://commons.wikimedia.org/wiki/File:B%C3%B6hm-Carte_Flute_of_1867_(pg_68,_The_Story_of_the_Flute,_1914).png" },
    links: ["boehm-1832", "rudall-rose"]
  },
  {
    id: "dorus-1850",
    name: "L'Étude de la nouvelle flûte, méthode progressive arrangée d'après Devienne",
    short: "Dorus, L'Étude de la nouvelle flûte",
    author: "dorus",
    start: 1850,
    place: "Paris",
    language: "French",
    tagline: "Devienne's method adapted for the new Boehm flute.",
    contents: [
      "Devienne's progressive lessons rewritten for the Boehm flute",
      "The 'te-ke' double tongue",
      "Special fingerings for expressive notes sensibles"
    ],
    description: "[[dorus|Dorus]] adapted the classic [[devienne-methode|Devienne]] method to the [[boehm-1832|Boehm flute]], linking the old Conservatoire tradition with the new instrument.",
    imslp: "Dorus L'Étude de la nouvelle flûte",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-dorus.jpg", caption: "Title page of Dorus's L'Étude de la nouvelle flûte", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:L%27%C3%A9tude_de_la_nouvelle_fl%C3%BBte_-_m%C3%A9thode_progressive_-_arrang%C3%A9e_d%27apr%C3%A8s_Devienne_;_par_L._Dorus..._-_bpt6k1163737f_(007_of_116).jpg" },
    links: ["devienne-methode", "boehm-1832"]
  },
  {
    id: "tulou-methode",
    name: "Méthode de flûte progressive et raisonnée, Op. 100",
    short: "Tulou, Méthode Op. 100",
    author: "tulou",
    start: 1851,
    place: "Mainz and Paris",
    language: "French",
    tagline: "The last great method for the French simple-system flute.",
    contents: [
      "Preferred fingerings shown in real musical context",
      "Tonguing on the edge of the lips",
      "Phrasing as punctuation, and where to breathe",
      "Notes sensibles"
    ],
    description: "[[tulou|Tulou]]'s method sums up a career spent defending the traditional French flute against Boehm's. Its tonguing on the edge of the lips was adopted by the French Boehm-flute schools that followed.",
    imslp: "Tulou Méthode de flûte Op.100",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-tulou.jpg", caption: "Title page of Tulou's Méthode, Op. 100", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_de_fl%C3%BBte_progressive_et_raisonn%C3%A9e,_op._100_-_btv1b100704133_(001_of_131).jpg" },
    links: ["classical-keyed-flute"]
  },
  {
    id: "duverges-1870",
    name: "Méthode pour la flûte système Boehm",
    short: "Duverges, Méthode",
    authorName: "M. J. Duverges",
    start: 1870,
    place: "Paris",
    language: "French",
    tagline: "A Paris Boehm-flute method that scorned the old tutors.",
    contents: [
      "Tonguing forward, at the lips",
      "No mention of vibrato",
      "A plea to abandon methods written for the old flute"
    ],
    description: "With Camus (1870), Gattermann (c. 1865) and later Altès, Duverges belongs to the first generation of French Boehm-flute tutors. He was alone in condemning the continued use of old methods, which he said drove the pupil 'on the highway of mediocrity'.",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-duverges.jpg", caption: "Title page of Duvergès's method for the cylindrical Boehm flute", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:Nouvelle_m%C3%A9thode_compl%C3%A8te_de_fl%C3%BBte_Boehm_cylindrique_-_bpt6k11637398_(001_of_150).jpg" },
    links: ["boehm-1847"]
  },
  {
    id: "gariboldi-1876",
    name: "Méthode complète de flûte",
    short: "Gariboldi, Méthode complète",
    authorName: "Giuseppe Gariboldi",
    start: 1876,
    place: "Paris",
    language: "French",
    tagline: "A method by the Italian virtuoso settled in Paris, author of much-loved studies.",
    contents: ["The 'tu-ku' double tongue", "Progressive studies"],
    description: "Gariboldi, born in Macerata, made his career in Paris. His method and studies are still used by young flutists.",
    imslp: "Gariboldi Méthode complète",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-gariboldi.jpg", caption: "Cover of Gariboldi's Méthode complète, Op. 128", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_compl%C3%A8te_de_fl%C3%BBte_-_op._128_-_par_G._Gariboldi_-_btv1b10880256v_(001_of_120).jpg" },
    links: ["boehm-1847"]
  },
  {
    id: "altes-1880",
    name: "Méthode pour flûte système Boehm",
    short: "Altès, Méthode",
    authorName: "Joseph-Henri Altès",
    start: 1880,
    place: "Paris",
    language: "French",
    tagline: "The classic method of the French Boehm-flute school before Taffanel.",
    contents: [
      "Embouchure covering about a third of the hole, with an illustration",
      "Half-hole and harmonic fingerings for notes sensibles",
      "Tonguing at the lips",
      "Warnings against a hard, oboe-like tone"
    ],
    description: "Altès, Conservatoire professor before [[taffanel|Taffanel]], wrote the most complete French method of the late 19th century. Its comparison of embouchure positions is often set beside Quantz's, and its silence on vibrato is typical of the French schools of the time.",
    imslp: "Altès Méthode pour flûte",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-altes-portrait.jpg", caption: "Portrait of Altès bound into the autograph manuscript of his Méthode", credit: "Bibliothèque nationale de France (Gallica) · public domain", url: "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_de_Fl%C3%BBte_-_Divis%C3%A9e_en_3_parties..._par_Henry_Alt%C3%A8s..._1%C3%A8re_Partie..._2me_Partie..._%C5%93uvre_31_(manuscrit_autographe)_-_btv1b108627148_(006_of_207).jpg" },
    links: ["boehm-1847"]
  },
  {
    id: "barge-1880",
    name: "Praktische Flötenschule",
    short: "Barge, Praktische Flötenschule",
    authorName: "Wilhelm Barge",
    start: 1880,
    place: "Leipzig",
    language: "German",
    tagline: "A Leipzig method that treats music as speech.",
    contents: [
      "Phrasing compared to punctuation and speech",
      "Shaping the beginning, high point and end of a phrase",
      "Written for the simple-system flute, usable with a Boehm chart"
    ],
    description: "Barge, Schwedler's colleague in the Gewandhaus, preferred the simple-system flute but invited Boehm players to use his method with a Boehm fingering chart. Reinecke dedicated his [[reinecke-undine|Undine Sonata]] to him.",
    sources: [BROWN],
    links: ["german-keyed-flute", "reinecke-undine"]
  },
  {
    id: "rockstro-1890",
    name: "A Treatise on the Construction, the History and the Practice of the Flute",
    short: "Rockstro, Treatise",
    author: "rockstro",
    start: 1890,
    place: "London",
    language: "English",
    tagline: "An epic Victorian survey of the flute's construction, history and technique.",
    contents: [
      "Detailed history of flute design and of the Boehm controversy",
      "Fingering and trill charts for the simple-system flute",
      "Articulation syllables for three grades of staccato"
    ],
    description: "[[rockstro|Rockstro]]'s huge treatise is still one of the richest sources on 19th-century flutes. Its fingering charts for the simple-system flute are among the most complete ever printed.",
    imslp: "Rockstro Treatise on the Construction the History and the Practice of the Flute",
    sources: [BROWN],
    links: ["german-keyed-flute", "boehm-1847"]
  },
  {
    id: "cpe-bach-versuch",
    name: "Versuch über die wahre Art das Clavier zu spielen",
    short: "C. P. E. Bach, Versuch",
    authorName: "Carl Philipp Emanuel Bach",
    start: 1753,
    place: "Berlin",
    language: "German",
    tagline: "A keyboard treatise every flutist should know, by Quantz's colleague.",
    contents: [
      "Ornaments in great detail",
      "Unmarked notes played half-detached, 'with fire'",
      "Staccato shortened by a little less than half",
      "Bebung (vibrato) on the clavichord"
    ],
    description: "Written at Frederick the Great's court, C. P. E. Bach's treatise is the essential guide to his own flute works, and its chapters on ornaments and expression apply far beyond the keyboard. Bach and [[quantz|Quantz]] did not always agree.",
    imslp: "Versuch über die wahre Art das Clavier zu spielen",
    sources: [BROWN],
    links: ["cpe-bach-wq132", "quantz-versuch"]
  },
  {
    id: "mozart-violinschule",
    name: "Versuch einer gründlichen Violinschule",
    short: "L. Mozart, Violinschule",
    authorName: "Leopold Mozart",
    start: 1756,
    place: "Augsburg",
    language: "German",
    tagline: "The violin method that teaches the musical language of the galant and classical style.",
    contents: [
      "Bowing, articulation and expression",
      "Three kinds of tremolo (vibrato)",
      "Ornaments and good taste"
    ],
    description: "Leopold Mozart's method contains far more musical advice than most flute tutors and is a key reference for Classical style. He warns against players who tremble on every note 'as if they had the palsy': vibrato belongs only where nature would produce it, as on a long final note.",
    imslp: "Versuch einer gründlichen Violinschule",
    sources: [BROWN],
    image: { src: "assets/img/hfp/t-lmozart-front.jpg", caption: "Leopold Mozart, frontispiece of the Violinschule (1756)", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:LeopoldMozartPortraitFromViolinschule.jpg" },
    links: ["mozart-k313"]
  }
];
