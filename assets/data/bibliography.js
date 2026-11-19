/*
 * BIBLIOGRAPHY: every source the site cites, in one place.
 *
 * How to cite inside any text field (description, bio, body, curio, tips):
 *   {{brown2002, p. 34}}                       one source, with page or chapter
 *   {{brown2002, pp. 34–35; powell2002, ch. 9}} several sources, separated by ";"
 *   {{?}}                                       "source being checked": the statement
 *                                               still needs a book reference
 * Put the marker at the end of the sentence or paragraph it supports. It becomes a
 * numbered note [1] that points to the entry's list of references, and every source
 * listed here gets a "Cited in" list on the Sources page.
 *
 * kind: "secondary" (modern scholarship), "primary" (historical documents and treatises),
 *       "online" (web resources: further reading only, never the sole source of a statement)
 * verify: true when page numbers for this source have not yet been checked in the book
 * online: optional companion web page by the same author (shown as "online summary")
 */
window.HFP = window.HFP || {};

HFP.bib = {
  /* ---------- Secondary literature ---------- */
  brown2002: {
    kind: "secondary",
    author: "Rachel Brown",
    title: "The Early Flute: A Practical Guide",
    series: "Cambridge Handbooks to the Historical Performance of Music",
    place: "Cambridge", publisher: "Cambridge University Press", year: "2002",
    isbn: "978-0-521-81391-4",
    url: "https://search.worldcat.org/isbn/9780521813914",
    note: {
      en: "A practical guide to the flute from about 1700 to 1900: instruments, treatises, technique and style. The source of most entries on flute types, treatises and the page How they played.",
      fr: "Un guide pratique de la flûte de 1700 à 1900 environ : instruments, traités, technique et style. Source de la plupart des fiches sur les flûtes, les traités et la page Comment ils jouaient.",
      it: "Una guida pratica al flauto dal 1700 al 1900 circa: strumenti, trattati, tecnica e stile. Fonte della maggior parte delle voci sui flauti, sui trattati e della pagina Come suonavano."
    }
  },
  powell2002: {
    kind: "secondary",
    author: "Ardal Powell",
    title: "The Flute",
    series: "Yale Musical Instrument Series",
    place: "New Haven and London", publisher: "Yale University Press", year: "2002",
    isbn: "978-0-300-09498-5",
    url: "https://yalebooks.yale.edu/book/9780300094985/the-flute/",
    online: "http://www.flutehistory.com/",
    verify: true,
    note: {
      en: "The standard history of the transverse flute. Many entries were first written from the author's own summaries of the book on flutehistory.com, which name the relevant chapter; page numbers are still being checked in the printed book.",
      fr: "L'histoire de référence de la flûte traversière. Beaucoup de fiches ont d'abord été écrites d'après les résumés du livre publiés par l'auteur sur flutehistory.com, qui indiquent le chapitre concerné ; les numéros de page sont en cours de vérification dans le livre imprimé.",
      it: "La storia di riferimento del flauto traverso. Molte voci sono state scritte inizialmente a partire dai riassunti del libro pubblicati dall'autore su flutehistory.com, che indicano il capitolo; i numeri di pagina sono in corso di verifica sul libro stampato."
    }
  },
  vester1985: {
    kind: "secondary",
    author: "Frans Vester",
    title: "Flute Music of the 18th Century: An Annotated Bibliography",
    place: "Monteux", publisher: "Musica Rara", year: "1985",
    verify: true
  },
  giannini1993b: {
    kind: "secondary",
    author: "Tula Giannini",
    title: "Great Flute Makers of France: The Lot and Godfroy Families, 1650–1900",
    place: "London", publisher: "Tony Bingham", year: "1993",
    note: {
      en: "Cited by Rachel Brown as the history of the Lot and Godfroy workshops; recommended for checking the Godfroy and Lot entries.",
      fr: "Citée par Rachel Brown comme l'histoire des ateliers Lot et Godfroy ; à consulter pour vérifier les fiches Godfroy et Lot.",
      it: "Citata da Rachel Brown come la storia delle botteghe Lot e Godfroy; da consultare per verificare le voci Godfroy e Lot."
    },
    verify: true
  },
  franchi2002: {
    kind: "secondary",
    author: "Saverio Franchi",
    title: "Il principe Ruspoli: l'oratorio in Arcadia",
    inBook: "Percorsi dell'oratorio romano. Da 'historia sacra' a melodramma spirituale, ed. Saverio Franchi",
    place: "Rome", publisher: "IBIMUS", year: "2002", pages: "245–316"
  },
  wye1993: {
    kind: "secondary",
    author: "Trevor Wye",
    title: "Marcel Moyse: An Extraordinary Man. A Musical Biography",
    place: "Cedar Falls, Iowa", publisher: "Winzer Press", year: "1993",
    verify: true
  },
  mccutchan1994: {
    kind: "secondary",
    author: "Ann McCutchan",
    title: "Marcel Moyse: Voice of the Flute",
    place: "Portland, Oregon", publisher: "Amadeus Press", year: "1994",
    verify: true
  },
  nelson2006: {
    kind: "secondary",
    author: "Susan Nelson",
    title: "The Flute on Record: The 78 rpm Era. A Discography",
    place: "Lanham, Maryland", publisher: "Scarecrow Press", year: "2006",
    isbn: "978-0-8108-5293-8",
    note: {
      en: "The standard discography: commercial, private and unpublished cylinders and 78 rpm discs by more than two hundred flutists, 1889–1954. Not yet read by the site; recommended by flute historians and listed here as the book to consult.",
      fr: "La discographie de référence : cylindres et disques 78 tours commerciaux, privés et inédits de plus de deux cents flûtistes, 1889–1954. Pas encore consultée par le site ; indiquée ici comme l'ouvrage à consulter.",
      it: "La discografia di riferimento: cilindri e dischi a 78 giri commerciali, privati e inediti di oltre duecento flautisti, 1889–1954. Non ancora consultata dal sito; indicata qui come il libro da consultare."
    },
    verify: true
  },
  andrieux: {
    kind: "secondary",
    author: "Vincent Andrieux",
    title: "L'univers sonore d'Henri Chaussier. Perspectives sur le jeu des instruments à vent en France au début de l'ère de l'enregistrement (circa 1898–1938)",
    inBook: "Romantic Brass Symposium 2, Hochschule der Künste Bern, series volume 6",
    place: "Schliengen", publisher: "Argus",
    pages: "258–302",
    note: {
      en: "A study of French wind playing on the first records, with a section on the flute (Hennebains, Fontbonne, Lafleurance, Gaubert, Barrère). Read in the author's PDF from the Hochschule der Künste Bern, with the printed page numbers; the volume's editors and year are still to be confirmed.",
      fr: "Une étude du jeu des vents en France sur les premiers disques, avec une partie sur la flûte (Hennebains, Fontbonne, Lafleurance, Gaubert, Barrère). Lue dans le PDF de l'auteur publié par la Hochschule der Künste Bern, avec la pagination imprimée ; éditeurs et année du volume restent à confirmer.",
      it: "Uno studio sul modo di suonare i fiati in Francia nei primi dischi, con una parte sul flauto (Hennebains, Fontbonne, Lafleurance, Gaubert, Barrère). Letto nel PDF dell'autore della Hochschule der Künste Bern, con la paginazione a stampa; curatori e anno del volume sono ancora da confermare."
    },
    verify: true
  },
  reinecke283: {
    kind: "secondary",
    author: "Henrik Wiese",
    title: "Afterword to Carl Reinecke, Konzert für Flöte und Orchester D-dur op. 283 (score PB 5393, piano reduction EB 8735), dated Munich, autumn 2003",
    place: "Wiesbaden", publisher: "Breitkopf & Härtel",
    url: "https://www.breitkopf.com/assets/pdf/PB_5529-_NW_en.pdf",
    note: {
      en: "The editor's afterword to the new Breitkopf edition: Reinecke and the Leipzig flutists, Schwedler and his flute, the dedication, the piano reduction, the first performances (Leipzig, 15 March 1909, with piano; London, 4 September 1909, with orchestra) and the sources. Read in the publisher's PDF (three pages); the year of the edition is still to be confirmed.",
      fr: "La postface de l'éditeur à la nouvelle édition Breitkopf : Reinecke et les flûtistes de Leipzig, Schwedler et sa flûte, la dédicace, la réduction pour piano, les premières exécutions (Leipzig, 15 mars 1909, avec piano ; Londres, 4 septembre 1909, avec orchestre) et les sources. Lue dans le PDF de l'éditeur (trois pages) ; l'année de l'édition reste à confirmer.",
      it: "La postfazione del curatore alla nuova edizione Breitkopf: Reinecke e i flautisti di Lipsia, Schwedler e il suo flauto, la dedica, la riduzione per pianoforte, le prime esecuzioni (Lipsia, 15 marzo 1909, con pianoforte; Londra, 4 settembre 1909, con orchestra) e le fonti. Letta nel PDF dell'editore (tre pagine); l'anno dell'edizione è ancora da confermare."
    }
  },
  boehm1994: {
    kind: "secondary",
    author: "Ludwig Böhm",
    title: "Theobald Böhm's compositions",
    inBook: "Festschrift for the 200th anniversary of Theobald Böhm's birth",
    place: "Munich", publisher: "Theobald-Böhm-Archiv", year: "1994",
    online: "https://thebabelflute.com/?p=13332", onlineLabel: "online_copy",
    verify: true,
    note: {
      en: "Catalogue and dating of Boehm's works by his great-great-grandson. The text is reproduced online; the printed Festschrift has not yet been checked.",
      fr: "Catalogue et datation des œuvres de Boehm par son arrière-arrière-petit-fils. Le texte est reproduit en ligne ; la publication imprimée n'a pas encore été vérifiée.",
      it: "Catalogo e datazione delle opere di Boehm, a cura del suo trisnipote. Il testo è riprodotto online; la pubblicazione a stampa non è ancora stata verificata."
    }
  },

  fetis1866: {
    kind: "secondary",
    author: "François-Joseph Fétis",
    title: "Biographie universelle des musiciens et bibliographie générale de la musique",
    edition: "2nd edn", place: "Paris", publisher: "Firmin-Didot", year: "1860–65", volume: "8 vols",
    url: "https://archive.org/details/biographieuniver03ftuoft",
    note: {
      en: "The great 19th-century biographical dictionary of musicians; public domain and readable online.",
      fr: "Le grand dictionnaire biographique des musiciens du XIXᵉ siècle ; domaine public, consultable en ligne.",
      it: "Il grande dizionario biografico dei musicisti dell'Ottocento; di pubblico dominio e consultabile online."
    }
  },
  pougin1878: {
    kind: "secondary",
    author: "Arthur Pougin (ed.)",
    title: "Biographie universelle des musiciens: Supplément et complément",
    place: "Paris", publisher: "Firmin-Didot", year: "1878–80", volume: "2 vols",
    url: "https://archive.org/details/biographieuniver187801ft"
  },
  eb1911: {
    kind: "secondary",
    title: "Encyclopaedia Britannica",
    edition: "11th edn", place: "Cambridge", publisher: "Cambridge University Press", year: "1910–11",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Flute",
    note: {
      en: "Cited for its long articles 'Flute' (vol. 10) and 'Clarinet' (vol. 6).",
      fr: "Citée pour ses longs articles « Flute » (vol. 10) et « Clarinet » (vol. 6).",
      it: "Citata per i lunghi articoli 'Flute' (vol. 10) e 'Clarinet' (vol. 6)."
    }
  },
  braga2012: {
    kind: "secondary",
    author: "Inês de Avena Braga",
    title: "The Panormo Alto Recorder: a Dolce Flauto Dolce?",
    journal: "Journal of the American Musical Instrument Society", volume: "38", year: "2012",
    url: "https://amis.mircat.org/jamis/2012_034.pdf"
  },
  hettrick1994: {
    kind: "secondary",
    author: "William E. Hettrick (trans. and ed.)",
    title: "The 'Musica instrumentalis deudsch' of Martin Agricola: A Treatise on Musical Instruments, 1529 and 1545",
    place: "Cambridge", publisher: "Cambridge University Press", year: "1994",
    verify: true
  },
  conard2009: {
    kind: "secondary",
    author: "Nicholas J. Conard, Maria Malina and Susanne C. Münzel",
    title: "New flutes document the earliest musical tradition in southwestern Germany",
    journal: "Nature", volume: "460", year: "2009", pages: "pp. 737–740",
    url: "https://doi.org/10.1038/nature08169",
    note: { en: "The excavators' report on the Hohle Fels, Vogelherd and Geißenklösterle flutes; page numbers checked on the article.", fr: "Le rapport des fouilleurs sur les flûtes de Hohle Fels, Vogelherd et Geißenklösterle ; pages vérifiées sur l'article.", it: "Il rapporto degli scavatori sui flauti di Hohle Fels, Vogelherd e Geißenklösterle; pagine verificate sull'articolo." }
  },
  zhang1999: {
    kind: "secondary",
    author: "Juzhong Zhang, Garman Harbottle, Changsui Wang and Zhaochen Kong",
    title: "Oldest playable musical instruments found at Jiahu early Neolithic site in China",
    journal: "Nature", volume: "401", year: "1999", pages: "pp. 366–368",
    url: "https://doi.org/10.1038/43865"
  },
  turk2016: {
    kind: "secondary",
    author: "Ivan Turk, Matija Turk and Borut Toškan",
    title: "Could a cave hyena have made a musical instrument? A reply to Cajus G. Diedrich",
    journal: "Arheološki vestnik", volume: "67", year: "2016", pages: "pp. 401–407",
    url: "https://ojs.zrc-sazu.si/av/article/view/7813",
    note: { en: "The reply of the Divje babe excavators to Diedrich; page numbers checked on the article.", fr: "La réponse des fouilleurs de Divje babe à Diedrich ; pages vérifiées sur l'article.", it: "La risposta degli scavatori di Divje babe a Diedrich; pagine verificate sull'articolo." }
  },
  diedrich2015: {
    kind: "secondary",
    author: "Cajus G. Diedrich",
    title: "‘Neanderthal bone flutes’: simply products of Ice Age spotted hyena scavenging activities on cave bear cubs in European cave bear dens",
    journal: "Royal Society Open Science", volume: "2", year: "2015", pages: "article 140022",
    url: "https://doi.org/10.1098/rsos.140022"
  },
  heartz1969: {
    kind: "secondary",
    author: "Daniel Heartz",
    title: "Pierre Attaingnant, Royal Printer of Music: A Historical Study and Bibliographical Catalogue",
    place: "Berkeley and Los Angeles", publisher: "University of California Press", year: "1969",
    verify: true
  },
  henle457: { kind: "secondary", author: "G. Henle Verlag", title: "J. S. Bach, Partita in A minor for flute solo BWV 1013, Urtext edition HN 457: preface and critical commentary", place: "Munich", verify: true },
  henle556: { kind: "secondary", author: "G. Henle Verlag", title: "G. P. Telemann, Twelve Fantasias for flute solo TWV 40:2–13, Urtext edition HN 556: preface", place: "Munich", verify: true },
  henle580: { kind: "secondary", author: "G. Henle Verlag", title: "G. Fauré, Fantaisie op. 79, Urtext edition HN 580: preface and critical commentary", place: "Munich", verify: true },
  henle496: { kind: "secondary", author: "G. Henle Verlag", title: "C. Debussy, Syrinx, Urtext edition HN 496: preface", place: "Munich", verify: true },
  henle474: { kind: "secondary", author: "G. Henle Verlag", title: "F. Schubert, Variations on 'Trockne Blumen' D 802, Urtext edition HN 474: preface", place: "Munich", verify: true },

  /* Bach's flute works: prefaces of scholarly editions (read in full on the publishers' free previews), two open-access
     articles, and the programme notes of the Netherlands Bach Society's "All of Bach" project. */
  leisinger2003: {
    kind: "secondary",
    author: "Ulrich Leisinger",
    title: "Preface",
    inBook: "J. S. Bach, Four Sonatas BWV 1034, 1035, 1030, 1032, Urtext of the New Bach Edition, ed. H.-P. Schmitz, rev. U. Leisinger",
    edition: "BA 5198", place: "Kassel", publisher: "Bärenreiter", year: "2003",
    url: "https://www.barenreiter.co.uk/prefaces/9790006447992_Innenansicht.pdf",
    note: {
      en: "By the director of the Bach-Archiv Leipzig. The best short account of the four authentic flute sonatas and of their sources; page numbers checked on the publisher's preview.",
      fr: "Par le directeur du Bach-Archiv de Leipzig. Le meilleur exposé succinct des quatre sonates pour flûte authentiques et de leurs sources ; pages vérifiées sur l'aperçu de l'éditeur.",
      it: "A cura del direttore del Bach-Archiv di Lipsia. La migliore sintesi sulle quattro sonate per flauto autentiche e sulle loro fonti; pagine verificate sull'anteprima dell'editore."
    }
  },
  tomita2024: {
    kind: "secondary",
    author: "Yo Tomita",
    title: "Introduction",
    inBook: "J. S. Bach, Flute Sonata in B minor BWV 1030, facsimile of the autograph P 975, with a commentary by Martina Rebmann",
    edition: "HN 3232", place: "Munich", publisher: "G. Henle Verlag", year: "2024",
    url: "https://henle.de/jp/Flute-Sonata-b-minor-BWV-1030/HN-3232",
    note: {
      en: "A detailed study of the autograph, its flute part, its earlier G minor version and its owners. Page numbers (roman) checked on the publisher's free preview of the introduction.",
      fr: "Étude détaillée de l'autographe, de sa partie de flûte, de sa version antérieure en sol mineur et de ses propriétaires. Pages (en chiffres romains) vérifiées sur l'aperçu gratuit de l'introduction.",
      it: "Studio dettagliato dell'autografo, della sua parte di flauto, della versione precedente in sol minore e dei suoi proprietari. Pagine (in numeri romani) verificate sull'anteprima gratuita dell'introduzione."
    }
  },
  duerr1975: {
    kind: "secondary",
    author: "Alfred Dürr",
    title: "Preface",
    inBook: "J. S. Bach, Sonatas BWV 1033, 1031, 1020, handed down as works by Johann Sebastian Bach",
    edition: "BA 5220", place: "Kassel", publisher: "Bärenreiter", year: "1975",
    url: "https://www.barenreiter.co.uk/prefaces/9790006507047_Innenansicht.pdf"
  },
  eppstein1981: {
    kind: "secondary",
    author: "Hans Eppstein",
    title: "Preface",
    inBook: "J. S. Bach, Flötensonaten II: BWV 1031, 1033, 1020",
    edition: "HN 328", place: "Munich", publisher: "G. Henle Verlag", year: "1981",
    url: "https://www.henle.de/media/36/e0/80/1690886059/0328-1690886059-sync.pdf"
  },
  eppstein1978: {
    kind: "secondary",
    author: "Hans Eppstein",
    title: "Bemerkungen (list of sources)",
    inBook: "J. S. Bach, Flötensonaten I: Die vier authentischen Sonaten BWV 1030, 1032, 1034, 1035",
    place: "Munich", publisher: "G. Henle Verlag", year: "1978",
    url: "https://www.henle.de/media/b2/11/c8/1690886039/0269-1690886039-sync.pdf"
  },
  eppstein1980: {
    kind: "secondary",
    author: "Hans Eppstein",
    title: "Preface",
    inBook: "J. S. Bach, Trio Sonata in G major for two flutes BWV 1039",
    edition: "HN 329", place: "Munich", publisher: "G. Henle Verlag", year: "1980",
    url: "https://www.henle.de/media/b3/94/7a/1690886075/0329-1690886075-sync.pdf"
  },
  leisinger2002: {
    kind: "secondary",
    author: "Ulrich Leisinger",
    title: "Epilogue",
    inBook: "J. S. Bach, Trio Sonata in G major for two flutes BWV 1039, Urtext of the New Bach Edition, ed. H.-P. Schmitz, rev. U. Leisinger",
    place: "Kassel", publisher: "Bärenreiter", year: "2002",
    url: "https://www.barenreiter.co.uk/prefaces/9790006505432_Innenansicht.pdf"
  },
  wollny2013: {
    kind: "secondary",
    author: "Peter Wollny",
    title: "Preface",
    inBook: "J. S. Bach, Trio Sonata in G major for flute, violin and basso continuo BWV 1038",
    edition: "HN 554", place: "Munich", publisher: "G. Henle Verlag", year: "2013",
    url: "https://www.henle.de/media/32/46/5d/1697725933/0554-1697725932-sync.pdf"
  },
  gruessTP193: {
    kind: "secondary",
    author: "Hans Grüß",
    title: "Preface",
    inBook: "J. S. Bach, Overture (Orchestral Suite) in B minor BWV 1067, Urtext of the New Bach Edition, study score",
    edition: "TP 193", place: "Kassel", publisher: "Bärenreiter",
    url: "https://www.barenreiter.co.uk/prefaces/9790006201624.pdf"
  },
  breig2003: {
    kind: "secondary",
    author: "Werner Breig",
    title: "Preface",
    inBook: "J. S. Bach, Overture (Suite) No. 2 in B minor BWV 1067, Urtext",
    edition: "PB 5397", place: "Wiesbaden", publisher: "Breitkopf & Härtel", year: "2003",
    url: "https://breitkopf.com/assets/pdf/637_VORWORT_PB%205397Vw.pdf"
  },
  wolffTP198: {
    kind: "secondary",
    author: "Christoph Wolff",
    title: "Preface",
    inBook: "J. S. Bach, Musical Offering BWV 1079, Urtext of the New Bach Edition, study score",
    edition: "TP 198", place: "Kassel", publisher: "Bärenreiter",
    url: "https://www.barenreiter.co.uk/prefaces/9790006201679_Innenansicht.pdf"
  },
  wolffBA5155: {
    kind: "secondary",
    author: "Christoph Wolff",
    title: "Epilogue",
    inBook: "J. S. Bach, Musical Offering: Trio Sonata in C minor for flute, violin and basso continuo BWV 1079 II",
    edition: "BA 5155", place: "Kassel", publisher: "Bärenreiter", year: "1987",
    url: "https://www.barenreiter.co.uk/prefaces/9790006465866_Innenansicht.pdf"
  },
  alves2021: {
    kind: "secondary",
    author: "Ricardo M. Alves",
    title: "J. S. Bach – The Authentic (?) Flute Sonata in E-Flat Major",
    journal: "Bulletin of the Transilvania University of Brașov, Series VIII: Performing Arts", volume: "14 (63), no. 2", year: "2021", pages: "pp. 7–20",
    url: "https://doi.org/10.31926/but.pa.2021.14.63.2.1",
    note: {
      en: "An open-access review of the literature on BWV 1031 (sources, dating, authorship); it summarises the views of Dürr, Marshall, Swack and Kuijken, which are cited here only through this article.",
      fr: "Une synthèse en libre accès de la littérature sur BWV 1031 (sources, datation, paternité) ; elle résume les positions de Dürr, Marshall, Swack et Kuijken, citées ici seulement à travers cet article.",
      it: "Una rassegna ad accesso libero della letteratura su BWV 1031 (fonti, datazione, paternità); riassume le posizioni di Dürr, Marshall, Swack e Kuijken, qui citate solo attraverso questo articolo."
    }
  },
  rife2023: {
    kind: "secondary",
    author: "Jordi Rifé i Santaló",
    title: "Bach's Sonata BWV 1035 and the Empfindsamer Stil",
    journal: "Revista Catalana de Musicologia", volume: "16", year: "2023", pages: "pp. 99–122",
    url: "https://doi.org/10.2436/20.1003.01.131"
  },
  nbs1013: {
    kind: "secondary",
    author: "Netherlands Bach Society",
    title: "Partita for traverso in A minor, BWV 1013",
    inBook: "All of Bach, online programme notes and video", year: "2016",
    url: "https://www.bachvereniging.nl/en/bwv/bwv-1013",
    note: {
      en: "The Netherlands Bach Society's project All of Bach films every work by Bach on period instruments and adds a programme note to each. The notes are written for a general audience: they are used here for context and for the summary of the sources, and where they only suggest a hypothesis the text says so.",
      fr: "Le projet All of Bach de la Société néerlandaise Bach filme toute l'œuvre de Bach sur instruments d'époque et ajoute une notice à chaque pièce. Ces notices s'adressent à un large public : elles servent ici de contexte et de résumé des sources ; quand elles ne font que suggérer une hypothèse, le texte le dit.",
      it: "Il progetto All of Bach della Società olandese Bach filma tutte le opere di Bach su strumenti d'epoca e aggiunge una scheda a ciascuna. Le schede sono scritte per un pubblico ampio: qui servono come contesto e come sintesi delle fonti; quando propongono solo un'ipotesi, il testo lo dice."
    }
  },
  nbs1030: { kind: "secondary", author: "Netherlands Bach Society", title: "Flute sonata in B minor, BWV 1030", inBook: "All of Bach, online programme notes and video", year: "2016", url: "https://www.bachvereniging.nl/en/bwv/bwv-1030" },
  nbs1032: { kind: "secondary", author: "Netherlands Bach Society", title: "Flute sonata in A major, BWV 1032", inBook: "All of Bach, online programme notes and video", year: "2021", url: "https://www.bachvereniging.nl/en/bwv/bwv-1032" },
  nbs1033: { kind: "secondary", author: "Netherlands Bach Society", title: "Flute sonata in C major, BWV 1033", inBook: "All of Bach, online programme notes and video", year: "2026", url: "https://www.bachvereniging.nl/en/bwv/bwv-1033" },
  nbs1034: { kind: "secondary", author: "Netherlands Bach Society", title: "Flute sonata in E minor, BWV 1034", inBook: "All of Bach, online programme notes and video", year: "2024", url: "https://www.bachvereniging.nl/en/bwv/bwv-1034" },
  nbs1038: { kind: "secondary", author: "Netherlands Bach Society", title: "Trio sonata in G major, BWV 1038", inBook: "All of Bach, online programme notes and video", year: "2015", url: "https://www.bachvereniging.nl/en/bwv/bwv-1038" },
  nbs1039: { kind: "secondary", author: "Netherlands Bach Society", title: "Trio sonata in G major for two flutes, BWV 1039", inBook: "All of Bach, online programme notes and video", year: "2022", url: "https://www.bachvereniging.nl/en/bwv/bwv-1039" },
  nbs1067: { kind: "secondary", author: "Netherlands Bach Society", title: "Orchestral Suite No. 2 in B minor, BWV 1067", inBook: "All of Bach, online programme notes and video", year: "2015", url: "https://www.bachvereniging.nl/en/bwv/bwv-1067" },

  /* ---------- Primary sources (documents; the treatises have their own pages) ---------- */
  agricola1529: {
    kind: "primary",
    author: "Martin Agricola",
    title: "Musica instrumentalis deudsch",
    place: "Wittenberg", publisher: "Georg Rhau", year: "1529",
    url: "https://archive.org/details/musicainstrument0000agri_g2b3",
    note: { en: "Digitised copy on the Internet Archive; folio numbers read from the scan. The translation by Hettrick (1994) is listed under the secondary literature.", fr: "Exemplaire numérisé sur l'Internet Archive ; numéros de feuillets lus sur la numérisation. La traduction de Hettrick (1994) figure dans la littérature secondaire.", it: "Esemplare digitalizzato su Internet Archive; numeri di carta letti sulla scansione. La traduzione di Hettrick (1994) è tra la letteratura secondaria." }
  },
  doppelmayr1730: {
    kind: "primary",
    author: "Johann Gabriel Doppelmayr",
    title: "Historische Nachricht von den Nürnbergischen Mathematicis und Künstlern",
    place: "Nuremberg", year: "1730",
    note: { en: "Quoted in the Encyclopaedia Britannica (1911), 'Clarinet'.", fr: "Cité dans l'Encyclopaedia Britannica (1911), « Clarinet ».", it: "Citato nell'Encyclopaedia Britannica (1911), 'Clarinet'." },
    verify: true
  },
  mattheson1740: {
    kind: "primary",
    author: "Georg Philipp Telemann",
    title: "Autobiography",
    inBook: "Johann Mattheson, Grundlage einer Ehren-Pforte",
    place: "Hamburg", year: "1740",
    verify: true
  },
  attaingnant1533: {
    kind: "primary",
    author: "Pierre Attaingnant (publ.)",
    title: "Vingt et sept chansons musicales a quatre parties",
    place: "Paris", publisher: "Pierre Attaingnant", year: "April 1533",
    url: "https://catalogue.bnf.fr/ark:/12148/cb42821175z"
  },
  bachP968: {
    kind: "primary",
    author: "J. S. Bach",
    title: "Solo p[our une] flûte traversière par J. S. Bach (BWV 1013), 18th-century manuscript copy",
    place: "Berlin, Staatsbibliothek, Mus. ms. Bach P 968"
  },
  blavet1732: {
    kind: "primary",
    author: "Michel Blavet",
    title: "Sonates mêlées de pièces pour la flûte traversière avec la basse, op. 2",
    place: "Paris", year: "1732",
    verify: true
  },
  telemann1733: {
    kind: "primary",
    author: "Georg Philipp Telemann",
    title: "Fantaisies pour la flûte-traversière sans basse",
    place: "Hamburg", publisher: "the author", year: "[1732–33]",
    note: { en: "A single copy of the first edition survives (Brussels, Conservatoire royal).", fr: "Un seul exemplaire de la première édition est conservé (Bruxelles, Conservatoire royal).", it: "Ne sopravvive un solo esemplare della prima edizione (Bruxelles, Conservatoire royal)." }
  },
  cpe1763: {
    kind: "primary",
    author: "C. P. E. Bach",
    title: "Sonata in A minor for flute solo (Wq 132)",
    inBook: "Musikalisches Mancherley",
    place: "Berlin", year: "1763",
    verify: true
  },
  beethoven1802: { kind: "primary", author: "Ludwig van Beethoven", title: "Serenade in D major for flute, violin and viola, op. 25", place: "Vienna", publisher: "Giovanni Cappi", year: "1802" },
  schubert1850: { kind: "primary", author: "Franz Schubert", title: "Introduction et variations sur un thème original pour piano et flûte, op. 160 (D 802)", place: "Vienna", publisher: "A. Diabelli & Comp.", year: "1850" },
  faure1898: { kind: "primary", author: "Gabriel Fauré", title: "Fantaisie pour flûte et piano, op. 79 ('à Paul Taffanel')", place: "Paris", publisher: "J. Hamelle", year: "1898" },
  debussy1927: { kind: "primary", author: "Claude Debussy", title: "Syrinx, pour flûte seule", place: "Paris", publisher: "Jobert", year: "1927" },
  ibertscore: { kind: "primary", author: "Jacques Ibert", title: "Concerto pour flûte et orchestre (dedicated to Marcel Moyse)", place: "Paris", publisher: "Alphonse Leduc", verify: true },
  moyse1934: { kind: "primary", author: "Marcel Moyse", title: "De la sonorité: art et technique (Enseignement complet de la flûte)", place: "Paris", publisher: "Alphonse Leduc", year: "1934", verify: true },
  quantz1755: {
    kind: "primary",
    author: "Johann Joachim Quantz",
    title: "Herrn Johann Joachim Quantzens Lebenslauf, von ihm selbst entworfen",
    inBook: "Friedrich Wilhelm Marpurg, Historisch-kritische Beyträge zur Aufnahme der Musik, vol. 1",
    place: "Berlin", year: "1755", pages: "197–250",
    verify: true
  },
  burney1773: {
    kind: "primary",
    author: "Charles Burney",
    title: "The Present State of Music in Germany, the Netherlands, and United Provinces",
    place: "London", publisher: "T. Becket", year: "1773", volume: "2 vols",
    verify: true
  },
  tagblatt1843: {
    kind: "primary",
    title: "Münchner Tagblatt, 28 March 1843",
    place: "Munich", year: "1843", pages: "455",
    note: {
      en: "Concert review quoted in Ludwig Böhm's catalogue (1994).",
      fr: "Compte rendu de concert cité dans le catalogue de Ludwig Böhm (1994).",
      it: "Recensione di concerto citata nel catalogo di Ludwig Böhm (1994)."
    },
    verify: true
  },

  /* ---------- Online resources: further reading, not sources ---------- */
  flutehistory: {
    kind: "online",
    author: "Ardal Powell",
    title: "flutehistory.com",
    url: "http://www.flutehistory.com/",
    note: {
      en: "The author's online companion to The Flute (2002). Linked from many entries for further reading; the statements on this site are cited to the book.",
      fr: "Le complément en ligne de The Flute (2002) par son auteur. Proposé en lecture complémentaire ; les affirmations du site renvoient au livre.",
      it: "Il complemento online di The Flute (2002) a cura dell'autore. Indicato come lettura di approfondimento; le affermazioni del sito rimandano al libro."
    }
  },
  imslp: {
    kind: "online",
    title: "IMSLP – Petrucci Music Library",
    url: "https://imslp.org/",
    note: {
      en: "Public-domain scores and facsimiles of the historical treatises, linked from each entry.",
      fr: "Partitions du domaine public et fac-similés des traités historiques, liés depuis chaque fiche.",
      it: "Partiture di pubblico dominio e facsimili dei trattati storici, collegati da ogni voce."
    }
  },
  miller: {
    kind: "online",
    author: "Library of Congress",
    title: "Dayton C. Miller Flute Collection",
    url: "https://www.loc.gov/collections/dayton-c-miller-collection/",
    note: {
      en: "The largest flute collection in the world, with photographs and documents.",
      fr: "La plus grande collection de flûtes au monde, avec photographies et documents.",
      it: "La più grande collezione di flauti al mondo, con fotografie e documenti."
    }
  },
  locjukebox: {
    kind: "online",
    author: "Library of Congress",
    title: "National Jukebox",
    url: "https://www.loc.gov/collections/national-jukebox/",
    note: {
      en: "Victor and Columbia discs digitised by the Library of Congress. Used on the Historical Recordings page for the catalogue data of each disc (matrix number, date, performers); the disc itself is the evidence.",
      fr: "Disques Victor et Columbia numérisés par la Library of Congress. Utilisé sur la page Enregistrements historiques pour les données de catalogue de chaque disque (matrice, date, interprètes) ; c'est le disque lui-même qui fait foi.",
      it: "Dischi Victor e Columbia digitalizzati dalla Library of Congress. Usato nella pagina Registrazioni storiche per i dati di catalogo di ogni disco (matrice, data, interpreti); è il disco stesso a fare fede."
    }
  },
  phonobase: {
    kind: "online",
    author: "L'Archéophone",
    title: "Phonobase: cylindres et disques anciens en ligne",
    url: "https://www.phonobase.org/",
    note: {
      en: "A French online database of early cylinders and discs, with the catalogue data of each record (label, number, matrix, date). Its audio is played from its own server, not copied here; the site states no reuse terms.",
      fr: "Une base de données française en ligne de cylindres et disques anciens, avec les données de catalogue de chaque enregistrement (label, numéro, matrice, date). Son audio est lu depuis son propre serveur, non copié ici ; le site n'indique pas de conditions de réutilisation.",
      it: "Una banca dati francese online di cilindri e dischi antichi, con i dati di catalogo di ogni registrazione (etichetta, numero, matrice, data). Il suo audio è riprodotto dal suo server, non copiato qui; il sito non indica condizioni di riutilizzo."
    }
  },
  ia78: {
    kind: "online",
    author: "Internet Archive",
    title: "78 rpm collections",
    url: "https://archive.org/details/78rpm",
    note: {
      en: "Collections used: Satyr-78rpm, CHARM, The Shellackophile's Vintage Recordings and the Great 78 Project. Transfers of 78 rpm discs, with the discographic notes of the people who made them. Each track on the Historical Recordings page names the collection it comes from.",
      fr: "Collections utilisées : Satyr-78rpm, CHARM, The Shellackophile's Vintage Recordings et Great 78 Project. Transferts de disques 78 tours, avec les notes discographiques de ceux qui les ont réalisés. Chaque piste de la page Enregistrements historiques nomme la collection dont elle provient.",
      it: "Raccolte usate: Satyr-78rpm, CHARM, The Shellackophile's Vintage Recordings e Great 78 Project. Trasferimenti di dischi a 78 giri, con le note discografiche di chi li ha realizzati. Ogni brano della pagina Registrazioni storiche indica la raccolta da cui proviene."
    }
  },

  /* Mozart's flute works and the Dejean commission.
     Read in full: the prefaces of the Neue Mozart-Ausgabe study scores and of the Henle and Breitkopf editions (free previews
     on the publishers' sites), the English translations of the family letters in the Digital Mozart Edition, and two articles
     in Pan (British Flute Society, September 2006). Not read: Bleker & Lequin 2013 and Lequin 1981 (known only through the
     sources that cite them: verify). */
  mozartletters: {
    kind: "primary",
    author: "W. A. Mozart and his family",
    title: "Briefe und Aufzeichnungen (Bauer–Deutsch): letters and documents, with English translations and commentary",
    series: "Digital Mozart Edition",
    place: "Salzburg", publisher: "Internationale Stiftung Mozarteum",
    url: "https://dme.mozarteum.at/DME/briefe/",
    note: {
      en: "The family letters, in German transcription and English translation, with the commentary of Bauer and Deutsch. Every letter quoted on the Mozart pages was read in the English translation; letters are cited by their Bauer–Deutsch number and date.",
      fr: "La correspondance de la famille, en transcription allemande et traduction anglaise, avec le commentaire de Bauer et Deutsch. Toutes les lettres citées dans les fiches Mozart ont été lues dans la traduction anglaise ; elles sont citées par leur numéro Bauer–Deutsch et leur date.",
      it: "Il carteggio di famiglia, in trascrizione tedesca e traduzione inglese, con il commento di Bauer e Deutsch. Ogni lettera citata nelle voci su Mozart è stata letta nella traduzione inglese; le lettere sono citate con il numero Bauer–Deutsch e la data."
    }
  },
  giegling323: {
    kind: "secondary",
    author: "Franz Giegling",
    title: "Vorwort / Introduction",
    inBook: "W. A. Mozart, Die Werke für Flöte und Orchester KV 313 (285c), 314 (285d), 315 (285e), Urtext of the New Mozart Edition",
    edition: "TP 323", place: "Kassel", publisher: "Bärenreiter",
    url: "https://www.barenreiter.co.uk/prefaces/9790006204717_Innenansicht.pdf",
    note: {
      en: "The preface of the Neue Mozart-Ausgabe study score of the three works for flute and orchestra: the Dejean commission, the payment, the lost autograph of K. 313 and the oboe origin of K. 314. Roman page numbers checked on the publisher's free preview.",
      fr: "La préface de la partition d'étude de la Neue Mozart-Ausgabe des trois œuvres pour flûte et orchestre : la commande de Dejean, le paiement, l'autographe perdu du K. 313 et l'origine hautboïste du K. 314. Pages en chiffres romains vérifiées sur l'aperçu gratuit de l'éditeur.",
      it: "La prefazione della partitura di studio della Neue Mozart-Ausgabe delle tre opere per flauto e orchestra: la commissione di Dejean, il pagamento, l'autografo perduto del K. 313 e l'origine oboistica del K. 314. Pagine in numeri romani verificate sull'anteprima gratuita dell'editore."
    }
  },
  pohanka150: {
    kind: "secondary",
    author: "Jaroslav Pohanka",
    title: "Vorwort / Preface, with the Nachtrag on Dejean's identity",
    inBook: "W. A. Mozart, Quartette für Flöte, Violine, Viola und Violoncello KV 285, 285a, Anh. 171 (285b), 298, Urtext of the New Mozart Edition",
    edition: "TP 150", place: "Kassel", publisher: "Bärenreiter",
    url: "https://www.barenreiter.co.uk/prefaces/9790006201280_Innenansicht.pdf",
    note: {
      en: "The fullest printed account of the four flute quartets and their sources, with a later addendum that summarises Frank Lequin's research on Dejean. Roman page numbers checked on the publisher's free preview.",
      fr: "L'exposé imprimé le plus complet sur les quatre quatuors avec flûte et leurs sources, avec un addendum tardif qui résume la recherche de Frank Lequin sur Dejean. Pages en chiffres romains vérifiées sur l'aperçu gratuit de l'éditeur.",
      it: "L'esposizione a stampa più completa sui quattro quartetti con flauto e sulle loro fonti, con un'aggiunta successiva che riassume la ricerca di Frank Lequin su Dejean. Pagine in numeri romani verificate sull'anteprima gratuita dell'editore."
    }
  },
  henle635: {
    kind: "secondary",
    author: "Henrik Wiese",
    title: "Vorwort / Preface",
    inBook: "W. A. Mozart, Flötenquartette KV 285, 285a, 285b, 298, Urtext edition",
    edition: "HN 635", place: "Munich", publisher: "G. Henle Verlag", year: "1998",
    url: "https://www.henle.de/media/c0/a5/13/1690899701/9635-1690899701-sync.pdf",
    note: {
      en: "A short preface that follows the newer dating of the quartets (paper and handwriting of the autograph material).",
      fr: "Une courte préface qui suit la datation plus récente des quatuors (papier et écriture du matériel autographe).",
      it: "Una breve prefazione che segue la datazione più recente dei quartetti (carta e scrittura del materiale autografo)."
    }
  },
  wiese2009: {
    kind: "secondary",
    author: "Henrik Wiese",
    title: "Vorwort / Preface",
    inBook: "W. A. Mozart, Konzert in D für Flöte und Orchester KV 314 (285d), Urtext edition",
    edition: "Edition Breitkopf 8711", place: "Wiesbaden", publisher: "Breitkopf & Härtel", year: "2009",
    url: "https://www.breitkopf.com/assets/pdf/8711_PDF_PB5308_Vw.pdf",
    note: {
      en: "A careful account of the letters about the oboe concerto and of the open questions about the Dejean commission and about who made the flute version. Read on the publisher's free preview; cited by section.",
      fr: "Un exposé minutieux des lettres sur le concerto pour hautbois et des questions ouvertes sur la commande de Dejean et sur l'auteur de la version pour flûte. Lue sur l'aperçu gratuit de l'éditeur ; citée par section.",
      it: "Un resoconto accurato delle lettere sul concerto per oboe e delle questioni aperte sulla commissione di Dejean e su chi abbia fatto la versione per flauto. Letta sull'anteprima gratuita dell'editore; citata per sezione."
    }
  },
  goritzki2001: {
    kind: "secondary",
    author: "Ingo Goritzki",
    title: "Vorwort / Preface",
    inBook: "W. A. Mozart, Konzert für Oboe und Orchester C-Dur KV 314 (285d), Urtext edition",
    edition: "HN 695", place: "Munich", publisher: "G. Henle Verlag", year: "2001",
    url: "https://www.henle.de/media/dc/31/1d/1690886062/0695-1690886062-sync.pdf",
    note: {
      en: "An oboist's view of the same work, with a different opinion on the oboe part and on who made the flute version. Roman page numbers checked on the publisher's free preview.",
      fr: "Le point de vue d'un hautboïste sur la même œuvre, avec un avis différent sur la partie de hautbois et sur l'auteur de la version pour flûte. Pages en chiffres romains vérifiées sur l'aperçu gratuit de l'éditeur.",
      it: "Il punto di vista di un oboista sulla stessa opera, con un'opinione diversa sulla parte d'oboe e su chi abbia fatto la versione per flauto. Pagine in numeri romani verificate sull'anteprima gratuita dell'editore."
    }
  },
  adorjan2014: {
    kind: "secondary",
    author: "András Adorján",
    title: "Zu dieser Ausgabe / About this edition",
    inBook: "W. A. Mozart, Konzert für Flöte und Harfe C-Dur KV 299 (297c), Urtext edition",
    edition: "PB 15134", place: "Wiesbaden", publisher: "Breitkopf & Härtel", year: "2014",
    url: "https://www.breitkopf.com/assets/pdf/9278_PDF_PB15134_Vw.pdf",
    note: {
      en: "On the Flute and Harp Concerto and its autograph, with a reading of Mozart's remark about the flute. Read on the publisher's free preview.",
      fr: "Sur le Concerto pour flûte et harpe et son autographe, avec une lecture de la remarque de Mozart sur la flûte. Lue sur l'aperçu gratuit de l'éditeur.",
      it: "Sul Concerto per flauto e arpa e il suo autografo, con una lettura dell'osservazione di Mozart sul flauto. Letta sull'anteprima gratuita dell'editore."
    }
  },
  ba4855a: {
    kind: "secondary",
    author: "Franz Giegling (preface); Rachel Brown and Konrad Hünteler (cadenzas)",
    title: "Preface and editorial note",
    inBook: "W. A. Mozart, Konzert in D für Flöte und Orchester KV 314 (285d), Urtext edition with cadenzas and 'Eingänge', piano reduction by Martin Schelhaas",
    edition: "BA 4855a", place: "Kassel", publisher: "Bärenreiter", year: "2005",
    url: "https://www.barenreiter.co.uk/prefaces/9790006506736_Innenansicht.pdf",
    note: {
      en: "The preface repeats Giegling's text; the editorial note describes the reference score that compares the flute and oboe parts, and the cadenzas and lead-ins by Rachel Brown and Konrad Hünteler.",
      fr: "La préface reprend le texte de Giegling ; la note éditoriale décrit la partition de référence qui compare les parties de flûte et de hautbois, et les cadences et Eingänge de Rachel Brown et Konrad Hünteler.",
      it: "La prefazione riprende il testo di Giegling; la nota editoriale descrive la partitura di riferimento che confronta le parti di flauto e oboe, e le cadenze e gli Eingänge di Rachel Brown e Konrad Hünteler."
    }
  },
  eb8644: {
    kind: "secondary",
    author: "Henrik Wiese (ed.)",
    title: "W. A. Mozart, Konzert G-dur für Flöte und Orchester KV 313 (285c), flute part with cadenzas and lead-ins by the editor",
    edition: "Edition Breitkopf 8644", place: "Wiesbaden", publisher: "Breitkopf & Härtel", year: "2006",
    note: {
      en: "Used for the movement headings and for what the edition contains. Only the solo part was read, not the preface.",
      fr: "Utilisée pour les indications de mouvement et pour le contenu de l'édition. Seule la partie soliste a été lue, pas la préface.",
      it: "Usata per le indicazioni di movimento e per il contenuto dell'edizione. È stata letta solo la parte solista, non la prefazione."
    }
  },
  ba5770: {
    kind: "secondary",
    author: "Bärenreiter (editor's preface)",
    title: "Vorwort",
    inBook: "W. A. Mozart, Sinfonia concertante in Es, KV Anh. I, 9 (297b; KV⁶ C 14.01), piano reduction by Martin Schelhaas",
    edition: "BA 5770a", place: "Kassel", publisher: "Bärenreiter",
    url: "https://www.barenreiter.co.uk/prefaces/9790006526819_Innenansicht.pdf",
    note: {
      en: "The history of the Paris Sinfonia concertante of 1778, lost, and of the surviving version for oboe, clarinet, horn and bassoon, whose authenticity is disputed. The preface does not name its author in the free preview.",
      fr: "L'histoire de la Symphonie concertante parisienne de 1778, perdue, et de la version conservée pour hautbois, clarinette, cor et basson, dont l'authenticité est discutée. L'aperçu gratuit ne nomme pas l'auteur de la préface.",
      it: "La storia della Sinfonia concertante parigina del 1778, perduta, e della versione conservata per oboe, clarinetto, corno e fagotto, la cui autenticità è discussa. L'anteprima gratuita non indica l'autore della prefazione."
    }
  },
  brown2006: {
    kind: "secondary",
    author: "Rachel Brown",
    title: "Mozart's flute: Magic, mediocre or maligned?",
    journal: "Pan (British Flute Society)", volume: "September", year: "2006", pages: "pp. 17–25",
    url: "https://static1.squarespace.com/static/5c855f1c65a70789cd2b4ed7/t/5e5111ee5b06bd56a97282fc/1582371321532/bfs-2006-09-journal.pdf",
    note: {
      en: "By the author of The Early Flute: what Mozart wrote for the flute, what the letters say and do not say, and which flutes the players of Mannheim probably used.",
      fr: "Par l'auteure de The Early Flute : ce que Mozart a écrit pour la flûte, ce que disent et ne disent pas les lettres, et quelles flûtes les musiciens de Mannheim utilisaient probablement.",
      it: "Dell'autrice di The Early Flute: che cosa Mozart ha scritto per il flauto, che cosa dicono e non dicono le lettere, e quali flauti usavano probabilmente i musicisti di Mannheim."
    }
  },
  spohr2006: {
    kind: "secondary",
    author: "Peter Spohr",
    title: "The flutes of Mozart's day",
    journal: "Pan (British Flute Society)", volume: "September", year: "2006", pages: "pp. 27–33",
    url: "https://static1.squarespace.com/static/5c855f1c65a70789cd2b4ed7/t/5e5111ee5b06bd56a97282fc/1582371321532/bfs-2006-09-journal.pdf",
    note: {
      en: "By a collector who plays the instruments he describes: the makers active where Mozart lived and worked, and what Lot, Grenser, Kirst and English flutes of the 1760s–80s are like to play.",
      fr: "Par un collectionneur qui joue les instruments qu'il décrit : les facteurs actifs là où Mozart a vécu et travaillé, et ce que sont les flûtes de Lot, Grenser, Kirst et les flûtes anglaises des années 1760–80 à jouer.",
      it: "Di un collezionista che suona gli strumenti che descrive: i costruttori attivi dove Mozart visse e lavorò, e com'è suonare i flauti di Lot, Grenser, Kirst e quelli inglesi degli anni 1760–80."
    }
  },
  bleker2013: {
    kind: "secondary",
    author: "Otto Bleker and Frank Lequin",
    title: "Ferdinand Dejean 1731–1797: VOC-chirurgijn, wereldburger en opdrachtgever van Mozart",
    place: "Wormerveer", publisher: "Stichting Uitgeverij Noord-Holland", year: "2013",
    verify: true,
    note: {
      en: "The Dutch biography of Dejean, the basis of nearly everything written about his life. Not read for this site: its content is known only through the chronology on Falk Steins's website and the articles of Stephen Martin, which cite it.",
      fr: "La biographie néerlandaise de Dejean, à la base de presque tout ce qui s'écrit sur sa vie. Non lue pour ce site : son contenu n'est connu que par la chronologie du site de Falk Steins et les articles de Stephen Martin, qui la citent.",
      it: "La biografia olandese di Dejean, alla base di quasi tutto ciò che si scrive sulla sua vita. Non letta per questo sito: il suo contenuto è noto solo attraverso la cronologia del sito di Falk Steins e gli articoli di Stephen Martin, che la citano."
    }
  },
  lequin1981: {
    kind: "secondary",
    author: "Frank Lequin",
    title: "Mozarts '… rarer Mann'",
    journal: "Mitteilungen der Internationalen Stiftung Mozarteum", volume: "29, nos. 1–2", year: "1981", pages: "pp. 3–16",
    verify: true,
    note: {
      en: "The first thorough study of who Dejean was. Not read: its findings are known only through the addendum in Pohanka's edition of the flute quartets.",
      fr: "La première étude approfondie sur l'identité de Dejean. Non lue : ses résultats ne sont connus que par l'addendum de l'édition des quatuors avec flûte de Pohanka.",
      it: "Il primo studio approfondito su chi fosse Dejean. Non letto: i suoi risultati sono noti solo attraverso l'aggiunta nell'edizione dei quartetti con flauto di Pohanka."
    }
  },
  steins: {
    kind: "online",
    author: "Falk Steins (ed.)",
    title: "Ferdinand Dejean (1731–1797): chronology, sources and open questions",
    url: "https://ferdinanddejean.jimdofree.com/english/cv/",
    note: {
      en: "A research website with a dated chronology of Dejean's life and a bibliography; it builds on Bleker and Lequin. Used for the dates of his life, always together with a printed source or marked as its own account.",
      fr: "Un site de recherche avec une chronologie datée de la vie de Dejean et une bibliographie ; il s'appuie sur Bleker et Lequin. Utilisé pour les dates de sa vie, toujours avec une source imprimée ou signalé comme son propre récit.",
      it: "Un sito di ricerca con una cronologia datata della vita di Dejean e una bibliografia; si basa su Bleker e Lequin. Usato per le date della sua vita, sempre insieme a una fonte a stampa o segnalato come suo racconto."
    }
  },
  martin2018: {
    kind: "online",
    author: "Stephen Martin",
    title: "The symbolic portrait of Mozart's patron Dr Ferdinand Dejean",
    journal: "Hektoen International", volume: "Spring", year: "2018",
    url: "https://hekint.org/2018/04/12/symbolic-portrait-mozarts-patron-dr-ferdinand-dejean/",
    note: {
      en: "Proposes that a painting by Jacobus Buys shows Dejean. The identification and the readings of the objects in the picture are the author's own and are reported here as his.",
      fr: "Propose qu'un tableau de Jacobus Buys représente Dejean. L'identification et la lecture des objets du tableau sont celles de l'auteur et sont rapportées ici comme telles.",
      it: "Propone che un dipinto di Jacobus Buys raffiguri Dejean. L'identificazione e la lettura degli oggetti del quadro sono dell'autore e sono qui riportate come sue."
    }
  },
  martin2021: {
    kind: "online",
    author: "Stephen Martin",
    title: "The patronage and playability of Mozart's flute works",
    journal: "Hektoen International", volume: "Fall", year: "2021",
    url: "https://hekint.org/2021/10/21/the-patronage-and-playability-of-mozarts-flute-works/",
    note: {
      en: "Argues that Dejean was a capable player and that he received three or four quartets. A flutist-physician's view, not peer-reviewed; reported here as his argument.",
      fr: "Soutient que Dejean était un joueur capable et qu'il a reçu trois ou quatre quatuors. Le point de vue d'un flûtiste-médecin, sans relecture par les pairs ; rapporté ici comme son argument.",
      it: "Sostiene che Dejean fosse un suonatore capace e che abbia ricevuto tre o quattro quartetti. Il punto di vista di un flautista-medico, non sottoposto a revisione paritaria; riportato qui come sua tesi."
    }
  },
  martin2023: {
    kind: "secondary",
    author: "Stephen Martin",
    title: "Was the VOC funding Mozart? The diaries of Wilhelm Buschman on Kharg Island",
    journal: "Journal of the Royal Asiatic Society", volume: "33, no. 2", year: "2023", pages: "pp. 489–511",
    url: "https://doi.org/10.1017/S135618632200030X",
    verify: true,
    note: {
      en: "Traces the source of the wealth that Dejean acquired by marrying Buschman's widow. Only the abstract was read; it is cited for the author's proposal and not as settled fact.",
      fr: "Retrace l'origine de la fortune que Dejean a acquise en épousant la veuve de Buschman. Seul le résumé a été lu ; il est cité pour la proposition de l'auteur et non comme un fait établi.",
      it: "Ricostruisce l'origine della ricchezza che Dejean ottenne sposando la vedova di Buschman. È stato letto solo l'abstract; è citato per la proposta dell'autore e non come fatto accertato."
    }
  },
  gunson: {
    kind: "online",
    author: "Emily Gunson",
    title: "Johann Baptist Wendling (1723–1797): biography",
    url: "https://www.emilygunson.com/wendling/biography",
    note: {
      en: "A biography by the author of the standard doctoral thesis on Wendling (University of Western Australia, 1999), on her own website. The thesis itself was not read.",
      fr: "Une biographie par l'auteure de la thèse de doctorat de référence sur Wendling (Université d'Australie-Occidentale, 1999), sur son propre site. La thèse elle-même n'a pas été lue.",
      it: "Una biografia dell'autrice della tesi di dottorato di riferimento su Wendling (University of Western Australia, 1999), sul suo sito. La tesi stessa non è stata letta."
    }
  }
};
