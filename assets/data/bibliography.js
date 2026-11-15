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
  giannini1993: {
    kind: "secondary",
    author: "Tula Giannini",
    title: "Jacques Hotteterre le Romain and his Father, Martin: A Re-examination Based on Recently Found Documents",
    journal: "Early Music", volume: "21/3", year: "1993", pages: "377–395"
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
    online: "https://thebabelflute.com/?p=13332",
    verify: true,
    note: {
      en: "Catalogue and dating of Boehm's works by his great-great-grandson. The text is reproduced online; the printed Festschrift has not yet been checked.",
      fr: "Catalogue et datation des œuvres de Boehm par son arrière-arrière-petit-fils. Le texte est reproduit en ligne ; la publication imprimée n'a pas encore été vérifiée.",
      it: "Catalogo e datazione delle opere di Boehm, a cura del suo trisnipote. Il testo è riprodotto online; la pubblicazione a stampa non è ancora stata verificata."
    }
  },

  /* ---------- Primary sources (documents; the treatises have their own pages) ---------- */
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
