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
  }
};
