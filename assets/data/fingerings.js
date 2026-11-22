/*
 * FINGERING CHARTS: one chart (or a few) from each treatise that has one and for which a free scan was found.
 *
 * One entry per treatise, shown on fingerings.html in the order of the treatises' years.
 *   treatise   id of the treatise in treatises.js (adds the links both ways)
 *   tagline    one line under the title (en / fr / it)
 *   note       what the chart shows, in the same markup as everywhere ({{key, locator}} citations);
 *              it describes only what can be seen on the printed page
 *   edition    the edition of the scan; credit  who holds the scan and its status
 *   images     file (assets/img/fingerings/<file>.jpg, 1700 px at most), w and h (pixels), caption
 *              (the printed title of the chart, or {en, fr, it}), url (the page of the scan it was cut from)
 * The scans are credited as sources in the bibliography (keys at the bottom of this file).
 * fingeringsExtra.missing lists treatises whose chart is not shown yet.
 * Images are whole pages or plates as they stand in the scan; only the margins of Quantz's Tab. I were trimmed.
 */
window.HFP = window.HFP || {};

HFP.fingerings = [
  {
    "id": "fc-agricola-1529",
    "treatise": "agricola-1529",
    "tagline": {
      "en": "Numeral tables for the four Swiss pipes (Bassus, Tenor, Altus, Discantus) and a small four-hole flute.",
      "fr": "Tables de chiffres pour les quatre « flûtes suisses » (basse, ténor, alto, dessus) et une petite flûte à quatre trous.",
      "it": "Tavole di cifre per i quattro «flauti svizzeri» (basso, tenore, alto, canto) e un piccolo flauto a quattro fori."
    },
    "note": {
      "en": "Agricola gives each size of ‘Swiss pipe’ (Schweitzer Pfeiffe, or Querpfeiff) a table that pairs every note, named by its letter, with numerals and a solmization syllable: one table for the Bassus, one shared by Tenor and Altus, one for the Discantus. A fourth, smaller table is headed ‘Klein Flötlein mit vier löchern’, a little flute with four holes. The verses just before the tables explain how to understand the numerals and how to blow. {{agricola1529, fols. xii–xv}}",
      "fr": "Agricola donne à chaque taille de « flûte suisse » (Schweitzer Pfeiffe ou Querpfeiff) un tableau qui associe chaque note, désignée par sa lettre, à des chiffres et à une syllabe de solmisation : un tableau pour la basse, un commun au ténor et à l'alto, un pour le dessus. Un quatrième tableau, plus petit, est intitulé « Klein Flötlein mit vier löchern », une petite flûte à quatre trous. Les vers qui précèdent les tableaux expliquent comment comprendre les chiffres et comment souffler. {{agricola1529, fols. xii–xv}}",
      "it": "Agricola dedica a ogni misura di «flauto svizzero» (Schweitzer Pfeiffe o Querpfeiff) una tavola che abbina ogni nota, indicata con la sua lettera, a dei numeri e a una sillaba di solmisazione: una per il basso, una comune a tenore e alto, una per il canto. Una quarta tavola, più piccola, s'intitola «Klein Flötlein mit vier löchern», un piccolo flauto con quattro fori. I versi che precedono le tavole spiegano come intendere i numeri e come soffiare. {{agricola1529, fols. xii–xv}}"
    },
    "edition": "Wittenberg: Georg Rhau, 1529",
    "credit": "Internet Archive (copy from Oberlin College Library) · public domain",
    "images": [
      {
        "file": "agricola-1529-1",
        "w": 1197,
        "h": 1700,
        "caption": "Bassus",
        "url": "https://archive.org/details/musicainstrument0000agri_g2b3/page/n33/mode/1up"
      },
      {
        "file": "agricola-1529-2",
        "w": 1225,
        "h": 1700,
        "caption": "Tenor · Altus",
        "url": "https://archive.org/details/musicainstrument0000agri_g2b3/page/n34/mode/1up"
      },
      {
        "file": "agricola-1529-3",
        "w": 1201,
        "h": 1700,
        "caption": "Discantus",
        "url": "https://archive.org/details/musicainstrument0000agri_g2b3/page/n35/mode/1up"
      },
      {
        "file": "agricola-1529-4",
        "w": 1103,
        "h": 1700,
        "caption": "Klein Flötlein mit vier löchern",
        "url": "https://archive.org/details/musicainstrument0000agri_g2b3/page/n37/mode/1up"
      }
    ]
  },
  {
    "id": "fc-hotteterre-principes",
    "treatise": "hotteterre-principes",
    "tagline": {
      "en": "Plate I: the first printed fingering chart for the one-keyed transverse flute, in a tablature of seven lines.",
      "fr": "Planche I : le premier tableau de doigtés imprimé pour la flûte traversière à une clé, en tablature à sept lignes.",
      "it": "Tavola I: la prima tavola di diteggiatura a stampa per il flauto traverso a una chiave, in tablatura a sette linee."
    },
    "note": {
      "en": "Plate I of the Principes, in the Paris edition of 1722, is titled ‘Échelle de tous les tons et semitons de la flûte traversière par musique et par tablature’. Each note on the staff has its column in a tablature of seven lines, one for each hole of the flute, marked with black and white circles. Chapter III of the book explains how to read it. {{hotteterre1722, Planche I; ch. III}}",
      "fr": "La planche Ire des Principes, dans l'édition parisienne de 1722, s'intitule « Échelle de tous les tons et semitons de la flûte traversière par musique et par tablature ». Chaque note de la portée a sa colonne dans une tablature de sept lignes, une pour chaque trou de la flûte, marquée de ronds noirs et blancs. Le chapitre III du livre explique comment la lire. {{hotteterre1722, Planche I ; ch. III}}",
      "it": "La tavola I dei Principes, nell'edizione parigina del 1722, s'intitola «Échelle de tous les tons et semitons de la flûte traversière par musique et par tablature». Ogni nota del rigo ha la sua colonna in una tablatura di sette linee, una per ciascun foro del flauto, segnate con cerchi neri e bianchi. Il capitolo III del libro spiega come leggerla. {{hotteterre1722, Planche I; cap. III}}"
    },
    "edition": "Paris: J. B. C. Ballard, 1722 (‘nouvelle édition’)",
    "credit": "Internet Archive (copy from Oberlin College Library) · public domain",
    "images": [
      {
        "file": "hotteterre-principes-1",
        "w": 1700,
        "h": 1432,
        "caption": "Planche Ire: Échelle de tous les tons et semitons de la flûte traversière",
        "url": "https://archive.org/details/principesdelaflu0000hott/page/n67/mode/1up"
      }
    ]
  },
  {
    "id": "fc-prelleur-1731",
    "treatise": "prelleur-1731",
    "tagline": {
      "en": "Two folding plates in the same seven-line tablature: all the notes, and the shakes.",
      "fr": "Deux planches dépliantes dans la même tablature à sept lignes : toutes les notes, et les trilles.",
      "it": "Due tavole ripiegate nella stessa tablatura a sette linee: tutte le note, e i trilli."
    },
    "note": {
      "en": "The Newest Method for Learners on the German Flute prints two folding plates: ‘A Scale of all the Notes and Half Notes of the German Flute, Musical and Tabularly’ and ‘A Scale of all the Beats or Shakes’. Both use a seven-line tablature with black and white circles, laid out like Hotteterre's. {{prelleur1731, plates between pp. 12 and 13 of the Newest Method}}",
      "fr": "La Newest Method for Learners on the German Flute présente deux planches dépliantes : « A Scale of all the Notes and Half Notes of the German Flute, Musical and Tabularly » et « A Scale of all the Beats or Shakes ». Toutes deux utilisent une tablature à sept lignes avec des ronds noirs et blancs, disposée comme celle d'Hotteterre. {{prelleur1731, planches entre les pp. 12 et 13 de la Newest Method}}",
      "it": "La Newest Method for Learners on the German Flute riporta due tavole ripiegate: «A Scale of all the Notes and Half Notes of the German Flute, Musical and Tabularly» e «A Scale of all the Beats or Shakes». Entrambe usano una tablatura a sette linee con cerchi neri e bianchi, impostata come quella di Hotteterre. {{prelleur1731, tavole tra le pp. 12 e 13 della Newest Method}}"
    },
    "edition": "London: Printing-Office in Bow Church Yard, 1731",
    "credit": "Internet Archive (copy from Oberlin College Library) · public domain",
    "images": [
      {
        "file": "prelleur-1731-1",
        "w": 1700,
        "h": 1446,
        "caption": "A Scale of all the Notes and Half Notes of the German Flute, Musical and Tabularly",
        "url": "https://archive.org/details/modernmusickmast8vofprel/page/n135/mode/1up"
      },
      {
        "file": "prelleur-1731-2",
        "w": 1700,
        "h": 968,
        "caption": "A Scale of all the Beats or Shakes",
        "url": "https://archive.org/details/modernmusickmast8vofprel/page/n136/mode/1up"
      }
    ]
  },
  {
    "id": "fc-quantz-versuch",
    "treatise": "quantz-versuch",
    "tagline": {
      "en": "Tab. I: the notes of the one-keyed flute, with numerals for the holes to close.",
      "fr": "Tab. I : les notes de la flûte à une clé, avec des chiffres pour les trous à boucher.",
      "it": "Tab. I: le note del flauto a una chiave, con numeri per i fori da chiudere."
    },
    "note": {
      "en": "Tab. I is the first of the 24 copper plates (‘Kupfertafeln’) that close the Versuch. Three staves show the notes of the flute – Fig. 1 the natural notes, Fig. 2 the flats, Fig. 3 the sharps – and under each note the numerals 1 to 8 name the holes and the key to be covered; a dash means open. Rachel Brown notes that the chart Quantz prepared later for Frederick the Great differs in important details from this printed one. {{quantz1752, Tab. I; brown2002, p. 7}}",
      "fr": "La planche I est la première des 24 planches gravées (« Kupfertafeln ») qui closent le Versuch. Trois portées montrent les notes de la flûte – fig. 1 les notes naturelles, fig. 2 les bémols, fig. 3 les dièses – et sous chaque note les chiffres 1 à 8 désignent les trous et la clé à boucher ; un tiret signifie ouvert. Rachel Brown signale que le tableau préparé plus tard par Quantz pour Frédéric le Grand diffère par des détails importants de celui-ci, imprimé. {{quantz1752, Tab. I ; brown2002, p. 7}}",
      "it": "La Tab. I è la prima delle 24 tavole incise («Kupfertafeln») che chiudono il Versuch. Tre pentagrammi mostrano le note del flauto – fig. 1 le note naturali, fig. 2 i bemolli, fig. 3 i diesis – e sotto ogni nota i numeri da 1 a 8 indicano i fori e la chiave da coprire; un trattino significa aperto. Rachel Brown segnala che la tavola preparata più tardi da Quantz per Federico il Grande differisce in dettagli importanti da questa a stampa. {{quantz1752, Tab. I; brown2002, p. 7}}"
    },
    "edition": "Berlin: Johann Friedrich Voss, 1752 (first edition)",
    "credit": "Internet Archive · public domain",
    "images": [
      {
        "file": "quantz-versuch-1",
        "w": 1436,
        "h": 1700,
        "caption": "Tab. I",
        "url": "https://archive.org/details/JohannJoachimQuantzVersuchEinerAnweisungDieFlteTraversiereZu/page/n370/mode/1up"
      }
    ]
  },
  {
    "id": "fc-bordet-1755",
    "treatise": "bordet-1755",
    "tagline": {
      "en": "‘Tons naturels de la flûte traversière’ and the sharps and flats, with remarks on intonation.",
      "fr": "« Tons naturels de la flûte traversière », puis les dièses et bémols, avec des remarques sur l'intonation.",
      "it": "«Tons naturels de la flûte traversière» e poi diesis e bemolli, con osservazioni sull'intonazione."
    },
    "note": {
      "en": "Printed on page 17, the plate ‘Tons naturels de la flûte traversière’ gives the natural notes in three groups – the ‘ordinary and usual range’, the ‘little used’ notes and the ‘never used’ ones – and a second table, ‘Tons diézés et bémolés, et du rapport qu'ils ont entr'eux’, gives the sharps and flats, with short remarks beneath (for example that the low C♯ and D♭ are fingered like D, turning the flute inward). Both use a seven-line tablature with black and white circles. {{bordet1755, p. 17}}",
      "fr": "Imprimée à la page 17, la planche « Tons naturels de la flûte traversière » donne les notes naturelles en trois groupes – l'« étendue ordinaire et usitée », les tons « peu usités » et les tons « point usités » – et un second tableau, « Tons diézés et bémolés, et du rapport qu'ils ont entr'eux », donne les dièses et les bémols, avec de courtes remarques en dessous (par exemple que l'ut dièse et le ré bémol graves se font comme le ré, en tournant la flûte vers l'intérieur). Les deux utilisent une tablature à sept lignes avec des ronds noirs et blancs. {{bordet1755, p. 17}}",
      "it": "Stampata a pagina 17, la tavola «Tons naturels de la flûte traversière» dà le note naturali in tre gruppi – l'«estensione ordinaria e usuale», i suoni «poco usati» e quelli «per niente usati» – e una seconda tabella, «Tons diézés et bémolés, et du rapport qu'ils ont entr'eux», dà diesis e bemolli, con brevi osservazioni sotto (per esempio che il do diesis e il re bemolle gravi si fanno come il re, girando il flauto verso l'interno). Entrambe usano una tablatura a sette linee con cerchi neri e bianchi. {{bordet1755, p. 17}}"
    },
    "edition": "Paris, c. 1755",
    "credit": "Bibliothèque nationale de France (Gallica), via Wikimedia Commons · public domain",
    "images": [
      {
        "file": "bordet-1755-1",
        "w": 1700,
        "h": 1294,
        "caption": "Tons naturels de la flûte traversière · Tons diézés et bémolés",
        "url": "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_raisonn%C3%A9e_pour_apprendre_la_musique_d'une_fa%C3%A7on_plus_claire_et_plus_pr%C3%A9cise_%C3%A0_laquelle_on_joint_l'%C3%A9tendue_de_la_flute_traversi%C3%A8re,_du_violon,_du_pardessus_de_viole,_de_la_vielle_et_de_la..._-_btv1b10868113m_(23_of_82).jpg"
      }
    ]
  },
  {
    "id": "fc-mahaut-1759",
    "treatise": "mahaut-1759",
    "tagline": {
      "en": "‘Échelle de tous les tons et demi-tons de la flûte traversière’, with the author's own explanation of the signs.",
      "fr": "« Échelle de tous les tons et demi-tons de la flûte traversière », avec l'explication des signes par l'auteur.",
      "it": "«Échelle de tous les tons et demi-tons de la flûte traversière», con la spiegazione dei segni data dall'autore."
    },
    "note": {
      "en": "Page 7 of the book carries the ‘Échelle de tous les tons et demi-tons de la flûte traversière’ with the author's own explanation beside it: the seven parallel lines of the tablature answer to the seven holes of the flute; black circles mark the holes to be closed and white ones the holes to be left open, and dotted lines lead from each note to its fingering. A note says that the highest notes are found only on flutes d'amour and bass flutes, though some ordinary flutes reach up to B. Rachel Brown singles out this commented chart as the particular value of Mahaut's method. {{mahaut1759, p. 7; brown2002, p. 10}}",
      "fr": "La page 7 du livre porte l'« Échelle de tous les tons et demi-tons de la flûte traversière », accompagnée de l'explication de l'auteur : les sept lignes parallèles de la tablature correspondent aux sept trous de la flûte ; les ronds noirs marquent les trous à boucher et les blancs ceux à laisser ouverts, et des lignes pointillées mènent de chaque note à son doigté. Une remarque précise que les notes les plus aiguës ne se trouvent que sur les flûtes d'amour et les flûtes de basse, certaines flûtes ordinaires montant jusqu'au si. Rachel Brown souligne que ce tableau commenté fait l'intérêt particulier de la méthode de Mahaut. {{mahaut1759, p. 7 ; brown2002, p. 10}}",
      "it": "A pagina 7 del libro si trova l'«Échelle de tous les tons et demi-tons de la flûte traversière», con la spiegazione dell'autore accanto: le sette linee parallele della tablatura corrispondono ai sette fori del flauto; i cerchi neri indicano i fori da chiudere e quelli bianchi i fori da lasciare aperti, e linee punteggiate portano da ogni nota alla sua diteggiatura. Una nota avverte che i suoni più acuti si trovano solo sui flauti d'amore e sui flauti bassi, anche se alcuni flauti ordinari arrivano fino al si. Rachel Brown sottolinea che questa tavola commentata è il pregio particolare del metodo di Mahaut. {{mahaut1759, p. 7; brown2002, p. 10}}"
    },
    "edition": "Paris: De La Chevardière, 1759",
    "credit": "Internet Archive (IMSLP mirror of a Russian State Library scan) · public domain",
    "images": [
      {
        "file": "mahaut-1759-1",
        "w": 1700,
        "h": 1118,
        "caption": "Échelle de tous les tons et demi-tons de la flûte traversière",
        "url": "https://archive.org/details/imslp-mthode-pour-jouer-la-flte-traversire-mahaut-antoine/page/n8/mode/1up"
      }
    ]
  },
  {
    "id": "fc-delusse-1760",
    "treatise": "delusse-1760",
    "tagline": {
      "en": "A ‘Tablature générale’ for the diatonic, chromatic and enharmonic genres: the quarter-tone chart of the Air à la grecque.",
      "fr": "Une « Tablature générale » pour les genres diatonique, chromatique et enharmonique : le tableau des quarts de ton de l'Air à la grecque.",
      "it": "Una «Tablature générale» per i generi diatonico, cromatico ed enarmonico: la tavola dei quarti di tono dell'Air à la grecque."
    },
    "note": {
      "en": "The ‘Tablature générale de tous les sons de la flûte traversière, dans les genres diatonique, chromatique et enharmonique’ faces the ‘Air à la grecque’ at the end of the book. It has three systems of staves with rows for the left hand, the right hand and the key, and a legend saying that the round, white and black signs belong to the diatonic, chromatic and enharmonic genres respectively; the chart is what lets the player finger the quarter-tones of the Air. {{delusse1760, Tablature générale; brown2002, p. 10}}",
      "fr": "La « Tablature générale de tous les sons de la flûte traversière, dans les genres diatonique, chromatique et enharmonique » fait face à l'« Air à la grecque », à la fin du livre. Elle comporte trois systèmes de portées avec des rangées pour la main gauche, la main droite et la clé, et une légende précisant que les signes ronds, blancs et noirs appartiennent respectivement aux genres diatonique, chromatique et enharmonique ; c'est ce tableau qui permet de doigter les quarts de ton de l'Air. {{delusse1760, Tablature générale ; brown2002, p. 10}}",
      "it": "La «Tablature générale de tous les sons de la flûte traversière, dans les genres diatonique, chromatique et enharmonique» sta di fronte all'«Air à la grecque», alla fine del libro. Ha tre sistemi di pentagrammi con righe per la mano sinistra, la mano destra e la chiave, e una legenda che dice che i segni rotondi, bianchi e neri appartengono rispettivamente ai generi diatonico, cromatico ed enarmonico; è questa tavola che permette di diteggiare i quarti di tono dell'Air. {{delusse1760, Tablature générale; brown2002, p. 10}}"
    },
    "edition": "Paris, c. 1760",
    "credit": "Internet Archive · public domain",
    "images": [
      {
        "file": "delusse-1760-1",
        "w": 1203,
        "h": 1700,
        "caption": "Tablature générale de tous les sons de la flûte traversière",
        "url": "https://archive.org/details/delusse-lart-de-la-flute-traversiere/page/n27/mode/1up"
      }
    ]
  },
  {
    "id": "fc-tromlitz-unterricht",
    "treatise": "tromlitz-unterricht",
    "tagline": {
      "en": "A fold-out plate of fingerings in three systems: natural notes, sharps and flats.",
      "fr": "Une planche dépliante de doigtés en trois systèmes : notes naturelles, dièses et bémols.",
      "it": "Una tavola ripiegata di diteggiature in tre sistemi: note naturali, diesis e bemolli."
    },
    "note": {
      "en": "A fold-out plate, bound in between the table of contents and the introduction, gives the fingerings in three systems: the natural notes, the sharps and the flats, with German note names. At the left is a drawing of the flute with its holes numbered; under each note, numerals say which holes and keys to close and a dash means open. {{tromlitz1791, fold-out plate before the Einleitung}}",
      "fr": "Une planche dépliante, reliée entre la table des matières et l'introduction, donne les doigtés en trois systèmes : les notes naturelles, les dièses et les bémols, avec les noms de notes allemands. À gauche, un dessin de la flûte dont les trous sont numérotés ; sous chaque note, des chiffres indiquent les trous et les clés à boucher et un tiret signifie ouvert. {{tromlitz1791, planche dépliante avant l'Einleitung}}",
      "it": "Una tavola ripiegata, rilegata tra l'indice e l'introduzione, dà le diteggiature in tre sistemi: note naturali, diesis e bemolli, con i nomi tedeschi delle note. A sinistra c'è il disegno del flauto con i fori numerati; sotto ogni nota i numeri indicano i fori e le chiavi da chiudere e un trattino significa aperto. {{tromlitz1791, tavola ripiegata prima dell'Einleitung}}"
    },
    "edition": "Leipzig: Adam Friedrich Böhme, 1791",
    "credit": "Bayerische Staatsbibliothek, via the Internet Archive · public domain",
    "images": [
      {
        "file": "tromlitz-unterricht-1",
        "w": 1343,
        "h": 1700,
        "caption": {
          "en": "Fold-out plate of fingerings",
          "fr": "Planche dépliante des doigtés",
          "it": "Tavola ripiegata delle diteggiature"
        },
        "url": "https://archive.org/details/10527788bsb/page/n32/mode/1up"
      }
    ]
  },
  {
    "id": "fc-devienne-methode",
    "treatise": "devienne-methode",
    "tagline": {
      "en": "‘Gamme naturelle’ and the sharpened and flattened scale, with a drawing of the flute.",
      "fr": "« Gamme naturelle » et gamme diézée et bémolisée, avec un dessin de la flûte.",
      "it": "«Gamme naturelle» e gamma diesizzata e bemollizzata, con il disegno del flauto."
    },
    "note": {
      "en": "The method opens with a ‘Gamme naturelle’ tablature, with a drawing of the flute at the left and, below it, a ‘Gamme diézée et bémolisée’; the trills (‘cadences’) have a tablature of their own on the next page. {{devienne1794, Gamme naturelle; Tablature de toutes les cadences}}",
      "fr": "La méthode s'ouvre sur une tablature « Gamme naturelle », avec un dessin de la flûte à gauche et, en dessous, une « Gamme diézée et bémolisée » ; les cadences (trilles) ont leur propre tablature à la page suivante. {{devienne1794, Gamme naturelle ; Tablature de toutes les cadences}}",
      "it": "Il metodo si apre con una tablatura «Gamme naturelle», con il disegno del flauto a sinistra e, sotto, una «Gamme diézée et bémolisée»; i trilli («cadences») hanno una tablatura propria nella pagina seguente. {{devienne1794, Gamme naturelle; Tablature de toutes les cadences}}"
    },
    "edition": "Paris, c. 1794",
    "credit": "Bibliothèque nationale de France (Gallica), via Wikimedia Commons · public domain",
    "images": [
      {
        "file": "devienne-methode-1",
        "w": 1166,
        "h": 1700,
        "caption": "Gamme naturelle · Gamme diézée et bémolisée",
        "url": "https://commons.wikimedia.org/wiki/File:Nouvelle_m%C3%A9thode_th%C3%A9orique_et_pratique_pour_la_fl%C3%BBte..._suivie_de_20_petits_airs,_18_petits_duos_et_6_sonates_gradu%C3%A9es_-_btv1b10862515z_(07_of_83).jpg"
      }
    ]
  },
  {
    "id": "fc-berbiguier-1818",
    "treatise": "berbiguier-1818",
    "tagline": {
      "en": "A folding plate for the natural scale, with the keyed flute drawn, and a chromatic tablature for the whole range.",
      "fr": "Une planche dépliante pour la gamme naturelle, avec la flûte à clés dessinée, et une tablature chromatique de toute l'étendue.",
      "it": "Una tavola ripiegata per la scala naturale, con il flauto a chiavi disegnato, e una tablatura cromatica per tutta l'estensione."
    },
    "note": {
      "en": "Two tablatures introduce the book: the ‘Tablature de la gamme naturelle de la flûte’, a folding plate with a flute with its keys drawn at the left, and the ‘Tablature chromatique de toute l'étendue de la flûte’. The text above the first argues that the natural scale of the flute is D major, with two sharps at the key, and not the range without sharps or flats with which earlier methods confused it. {{berbiguier1818, Tablature de la gamme naturelle; Tablature chromatique}}",
      "fr": "Deux tablatures ouvrent le livre : la « Tablature de la gamme naturelle de la flûte », planche dépliante avec une flûte à clés dessinée à gauche, et la « Tablature chromatique de toute l'étendue de la flûte ». Le texte qui surmonte la première soutient que la gamme naturelle de la flûte est celle de ré majeur, à deux dièses à la clef, et non l'étendue sans dièses ni bémols avec laquelle les méthodes connues jusque-là l'ont confondue. {{berbiguier1818, Tablature de la gamme naturelle ; Tablature chromatique}}",
      "it": "Due tablature aprono il libro: la «Tablature de la gamme naturelle de la flûte», una tavola ripiegata con un flauto a chiavi disegnato a sinistra, e la «Tablature chromatique de toute l'étendue de la flûte». Il testo sopra la prima sostiene che la scala naturale del flauto è quella di re maggiore, con due diesis in chiave, e non l'estensione senza diesis né bemolli con cui i metodi noti fino ad allora l'avevano confusa. {{berbiguier1818, Tablature de la gamme naturelle; Tablature chromatique}}"
    },
    "edition": "Paris: Janet et Cotelle",
    "credit": "Internet Archive (copy from the University of North Carolina at Chapel Hill) · public domain",
    "images": [
      {
        "file": "berbiguier-1818-1",
        "w": 1700,
        "h": 1099,
        "caption": "Tablature de la gamme naturelle de la flûte",
        "url": "https://archive.org/details/nouvellemthodepo00berb/page/n14/mode/1up"
      },
      {
        "file": "berbiguier-1818-2",
        "w": 1254,
        "h": 1700,
        "caption": "Tablature chromatique de toute l'étendue de la flûte",
        "url": "https://archive.org/details/nouvellemthodepo00berb/page/n19/mode/1up"
      }
    ]
  },
  {
    "id": "fc-drouet-1830",
    "treatise": "drouet-1830",
    "tagline": {
      "en": "Tablature No. 1, with the legend of the signs, and No. 2: the different fingerings that can be applied to one note.",
      "fr": "Tablature n° 1, avec la légende des signes, et n° 2 : les différents doigtés applicables à une même note.",
      "it": "Tablature n. 1, con la legenda dei segni, e n. 2: i diversi modi di diteggiare una stessa nota."
    },
    "note": {
      "en": "In this bilingual French–German edition (Mainz: Schott), Tablature No. 1 serves ‘to learn the fingering of all the notes the flute can sound’. A legend explains the signs: the black dot means that the hole on that line is stopped, the zero that it is open, the half-closed zero that it is half open, and the little cross that the key on that line is to be pressed. Tablature No. 2 (p. 36) gives ‘the different fingerings that can be applied to one and the same note’, with numbered remarks (1–73) in the text. {{drouet1827, pp. 34, 36}}",
      "fr": "Dans cette édition bilingue français-allemand (Mayence : Schott), la Tablature n° 1 sert « à apprendre le doigté de toutes les notes que la flûte peut faire résonner ». Une légende explique les signes : le point noir signifie que le trou situé sur la même ligne doit être bouché, le zéro qu'il doit être ouvert, le zéro à moitié fermé qu'il doit être à moitié ouvert, et la petite croix qu'il faut appuyer sur la clef de cette ligne. La Tablature n° 2 (p. 36) donne « les différents doigtés qu'on peut appliquer à une même note », avec des remarques numérotées (1 à 73) dans le texte. {{drouet1827, pp. 34, 36}}",
      "it": "In questa edizione bilingue francese-tedesca (Magonza: Schott), la Tablature n. 1 serve a imparare la diteggiatura di tutte le note che il flauto può produrre. Una legenda spiega i segni: il punto nero significa che il foro sulla stessa linea va chiuso, lo zero che va lasciato aperto, lo zero a metà chiuso che va chiuso a metà, e la piccola croce che si deve premere la chiave su quella linea. La Tablature n. 2 (p. 36) dà i diversi modi di diteggiare una stessa nota, con osservazioni numerate (da 1 a 73) nel testo. {{drouet1827, pp. 34, 36}}"
    },
    "edition": "Mainz: B. Schott's Söhne, c. 1827 (French–German edition)",
    "credit": "Internet Archive (copy from the University of North Carolina at Chapel Hill) · public domain",
    "images": [
      {
        "file": "drouet-1830-1",
        "w": 1247,
        "h": 1700,
        "caption": "Tablature N° 1 · Tabelle 1",
        "url": "https://archive.org/details/mthodepourlaflte00drou/page/n39/mode/1up"
      },
      {
        "file": "drouet-1830-2",
        "w": 1247,
        "h": 1700,
        "caption": "Tablature N° 2 · Tabelle 2",
        "url": "https://archive.org/details/mthodepourlaflte00drou/page/n41/mode/1up"
      }
    ]
  },
  {
    "id": "fc-dorus-1850",
    "treatise": "dorus-1850",
    "tagline": {
      "en": "Two charts for the ‘new flute’, the Boehm flute: the natural scale and a double-page plate of accidentals.",
      "fr": "Deux tableaux pour la « nouvelle flûte », la flûte Boehm : la gamme naturelle et une planche sur double page des notes altérées.",
      "it": "Due tavole per il «nuovo flauto», il flauto Boehm: la scala naturale e una tavola su doppia pagina delle note alterate."
    },
    "note": {
      "en": "Two charts for the ‘new flute’, that is the Boehm flute: the ‘Tablature de la gamme naturelle de la nouvelle flûte’, with a drawing of the flute at the left of the grid, and a double-page plate headed ‘Flûte nouvelle’ whose columns give the accidentals, each with both of its enharmonic names. A line above it says that when the pupil has mastered the natural scale, he will study the accidental notes on these tablatures. {{dorus1845, Tablature de la gamme naturelle; pp. 12–13}}",
      "fr": "Deux tableaux pour la « nouvelle flûte », c'est-à-dire la flûte Boehm : la « Tablature de la gamme naturelle de la nouvelle flûte », avec un dessin de la flûte à gauche de la grille, et une planche sur double page intitulée « Flûte nouvelle », dont les colonnes donnent les notes altérées, chacune avec ses deux noms enharmoniques. Une ligne au-dessus précise que, lorsque l'élève possédera bien la gamme naturelle, il étudiera les notes accidentées sur ces tablatures. {{dorus1845, Tablature de la gamme naturelle ; pp. 12–13}}",
      "it": "Due tavole per il «nuovo flauto», cioè il flauto Boehm: la «Tablature de la gamme naturelle de la nouvelle flûte», con il disegno del flauto a sinistra della griglia, e una tavola su doppia pagina intitolata «Flûte nouvelle», le cui colonne danno le note alterate, ciascuna con i suoi due nomi enarmonici. Una riga sopra precisa che, quando l'allievo avrà padronanza della scala naturale, studierà le note accidentate su queste tablature. {{dorus1845, Tablature de la gamme naturelle; pp. 12–13}}"
    },
    "edition": "Paris: Schonenberger (dated 1845 in the library catalogue)",
    "credit": "Internet Archive (copy from Oberlin College Library) · public domain",
    "images": [
      {
        "file": "dorus-1850-1",
        "w": 1347,
        "h": 1700,
        "caption": "Tablature de la gamme naturelle de la nouvelle flûte",
        "url": "https://archive.org/details/letudedelanouvel0000doru/page/n14/mode/1up"
      },
      {
        "file": "dorus-1850-2",
        "w": 1700,
        "h": 1174,
        "caption": "Flûte nouvelle",
        "url": "https://archive.org/details/letudedelanouvel0000doru/page/n19/mode/1up"
      }
    ]
  },
  {
    "id": "fc-tulou-methode",
    "treatise": "tulou-methode",
    "tagline": {
      "en": "A chromatic tablature in French and German, with the B♭, G♯, F and E♭ keys marked on their own lines.",
      "fr": "Une tablature chromatique en français et en allemand, avec les clés de si♭, sol♯, fa et mi♭ sur leurs propres lignes.",
      "it": "Una tablatura cromatica in francese e tedesco, con le chiavi di si♭, sol♯, fa e mi♭ su linee proprie."
    },
    "note": {
      "en": "‘Tablature de la gamme chromatique avec des dièzes ou des bémols’ (in the bilingual Schott edition also ‘Tabelle der chromatischen Tonleiter mit den Kreuzen und Been’): three systems of notes over a grid with a line for each hole and separate lines for the keys, labelled B♭ (‘clef de si♭’), G♯, F and E♭. Where a note has a sharp and a flat name, both are shown over the same fingering. {{tulou1852, p. 24}}",
      "fr": "« Tablature de la gamme chromatique avec des dièzes ou des bémols » (dans l'édition bilingue de Schott aussi « Tabelle der chromatischen Tonleiter mit den Kreuzen und Been ») : trois systèmes de notes au-dessus d'une grille avec une ligne par trou et des lignes séparées pour les clés, nommées si♭ (« clef de si♭ »), sol♯, fa et mi♭. Lorsqu'une note a un nom dièse et un nom bémol, les deux sont montrés au-dessus du même doigté. {{tulou1852, p. 24}}",
      "it": "«Tablature de la gamme chromatique avec des dièzes ou des bémols» (nell'edizione bilingue Schott anche «Tabelle der chromatischen Tonleiter mit den Kreuzen und Been»): tre sistemi di note sopra una griglia con una linea per ogni foro e linee separate per le chiavi, indicate come si♭ («clef de si♭»), sol♯, fa e mi♭. Quando una nota ha un nome con diesis e uno con bemolle, entrambi sono mostrati sopra la stessa diteggiatura. {{tulou1852, p. 24}}"
    },
    "edition": "Mainz: B. Schott's Söhne, c. 1852 (French–German edition)",
    "credit": "Sibley Music Library (Eastman School of Music), via IMSLP and the Internet Archive · public domain",
    "images": [
      {
        "file": "tulou-methode-1",
        "w": 1230,
        "h": 1700,
        "caption": "Tablature de la gamme chromatique avec des dièses ou des bémols",
        "url": "https://archive.org/details/imslp-de-flte-op100-tulou-jean-louis/page/n29/mode/1up"
      }
    ]
  },
  {
    "id": "fc-duverges-1870",
    "treatise": "duverges-1870",
    "tagline": {
      "en": "A large tablature for the cylindrical Boehm flute, with the instrument drawn above the grid.",
      "fr": "Une grande tablature pour la flûte Boehm cylindrique, avec l'instrument dessiné au-dessus de la grille.",
      "it": "Una grande tablatura per il flauto Boehm cilindrico, con lo strumento disegnato sopra la griglia."
    },
    "note": {
      "en": "A large tablature for the cylindrical Boehm flute: the instrument is drawn across the top of the grid, and the fingers and keys are named for each hand – for the left, index, thumb, middle and ring fingers and the little-finger key of G♯ (or A♭); for the right, the index, middle and ring fingers with their trill keys (‘clés de cadence’) and the little-finger keys for D♯ (or E♭), C♯ (or D♭) and C. An ‘explication de la tablature’ runs down the right-hand side. {{duverges1870, p. 6}}",
      "fr": "Une grande tablature pour la flûte Boehm cylindrique : l'instrument est dessiné en haut de la grille, et les doigts et les clés sont nommés pour chaque main – pour la gauche, l'index, le pouce, le médius et l'annulaire et la clé de sol♯ (ou la♭) du petit doigt ; pour la droite, l'index, le médius et l'annulaire avec leurs clés de cadence et les clés du petit doigt pour ré♯ (ou mi♭), do♯ (ou ré♭) et do. Une « explication de la tablature » court sur le côté droit. {{duverges1870, p. 6}}",
      "it": "Una grande tablatura per il flauto Boehm cilindrico: lo strumento è disegnato in alto sulla griglia, e le dita e le chiavi sono nominate per ciascuna mano – per la sinistra, indice, pollice, medio e anulare e la chiave di sol♯ (o la♭) del mignolo; per la destra, indice, medio e anulare con le loro chiavi di trillo («clés de cadence») e le chiavi del mignolo per re♯ (o mi♭), do♯ (o re♭) e do. Una «explication de la tablature» corre lungo il lato destro. {{duverges1870, p. 6}}"
    },
    "edition": "Paris, c. 1870",
    "credit": "Bibliothèque nationale de France (Gallica), via Wikimedia Commons · public domain",
    "images": [
      {
        "file": "duverges-1870-1",
        "w": 1315,
        "h": 1700,
        "caption": {
          "en": "Tablature, with the instrument drawn above the grid",
          "fr": "Tablature, avec l'instrument dessiné au-dessus de la grille",
          "it": "Tablatura, con lo strumento disegnato sopra la griglia"
        },
        "url": "https://commons.wikimedia.org/wiki/File:Nouvelle_m%C3%A9thode_compl%C3%A8te_de_fl%C3%BBte_Boehm_cylindrique_-_bpt6k11637398_(006_of_150).jpg"
      }
    ]
  },
  {
    "id": "fc-gariboldi-1876",
    "treatise": "gariboldi-1876",
    "tagline": {
      "en": "The chromatic tablature and the trill tablature of the ‘ancienne flûte’, the simple-system flute.",
      "fr": "La tablature chromatique et la tablature des trilles de l'« ancienne flûte », la flûte à système simple.",
      "it": "La tablatura cromatica e quella dei trilli dell'«ancienne flûte», il flauto a sistema semplice."
    },
    "note": {
      "en": "Shown here are the ‘Tablature chromatique de l'ancienne flûte’ (the simple-system flute) and the ‘Tablature des trilles majeurs et mineurs de l'ancienne flûte’, printed at the end of the first part. The second part also has a ‘Tableau complémentaire des trilles de la flûte Boehm’. {{gariboldi1877, pp. 117–118 of the scan}}",
      "fr": "Sont montrées ici la « Tablature chromatique de l'ancienne flûte » (la flûte à système simple) et la « Tablature des trilles majeurs et mineurs de l'ancienne flûte », imprimées à la fin de la première partie. La seconde partie contient aussi un « Tableau complémentaire des trilles de la flûte Boehm ». {{gariboldi1877, pp. 117–118 de la numérisation}}",
      "it": "Qui sono mostrate la «Tablature chromatique de l'ancienne flûte» (il flauto a sistema semplice) e la «Tablature des trilles majeurs et mineurs de l'ancienne flûte», stampate alla fine della prima parte. La seconda parte contiene anche un «Tableau complémentaire des trilles de la flûte Boehm». {{gariboldi1877, pp. 117–118 della scansione}}"
    },
    "edition": "Paris: Alphonse Leduc, 1877",
    "credit": "Bibliothèque nationale de France (Gallica), via Wikimedia Commons · public domain",
    "images": [
      {
        "file": "gariboldi-1876-1",
        "w": 1361,
        "h": 1700,
        "caption": "Tablature chromatique de l'ancienne flûte",
        "url": "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_compl%C3%A8te_de_fl%C3%BBte_-_op._128_-_par_G._Gariboldi_-_btv1b10880256v_(117_of_120).jpg"
      },
      {
        "file": "gariboldi-1876-2",
        "w": 1364,
        "h": 1700,
        "caption": "Tablature des trilles majeurs et mineurs de l'ancienne flûte",
        "url": "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_compl%C3%A8te_de_fl%C3%BBte_-_op._128_-_par_G._Gariboldi_-_btv1b10880256v_(118_of_120).jpg"
      }
    ]
  },
  {
    "id": "fc-altes-1880",
    "treatise": "altes-1880",
    "tagline": {
      "en": "‘Doigté de la gamme d'ut’ on the Boehm flute, with a legend for holes and keys.",
      "fr": "« Doigté de la gamme d'ut » sur la flûte Boehm, avec une légende pour les trous et les clés.",
      "it": "«Doigté de la gamme d'ut» sul flauto Boehm, con una legenda per fori e chiavi."
    },
    "note": {
      "en": "‘Doigté de la gamme d'ut: sons du médium et sons graves’ (p. 21). The Boehm flute is drawn at the left with the fingers of each hand named, and a legend at the top explains the signs: open hole, closed hole, half-closed hole, open key and closed key. {{altes1880, p. 21}}",
      "fr": "« Doigté de la gamme d'ut : sons du médium et sons graves » (p. 21). La flûte Boehm est dessinée à gauche avec les doigts de chaque main nommés, et une légende en haut explique les signes : trou ouvert, trou fermé, trou à moitié fermé, clé ouverte et clé fermée. {{altes1880, p. 21}}",
      "it": "«Doigté de la gamme d'ut: sons du médium et sons graves» (p. 21). Il flauto Boehm è disegnato a sinistra con le dita di ciascuna mano nominate, e una legenda in alto spiega i segni: foro aperto, foro chiuso, foro mezzo chiuso, chiave aperta e chiave chiusa. {{altes1880, p. 21}}"
    },
    "edition": "Paris, c. 1880",
    "credit": "Bibliothèque nationale de France (Gallica), via Wikimedia Commons · public domain",
    "images": [
      {
        "file": "altes-1880-1",
        "w": 1320,
        "h": 1700,
        "caption": "Doigté de la gamme d'ut: sons du médium et sons graves",
        "url": "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_pour_fl%C3%BBte_syst%C3%A8me_Boehm,_ouvrage_divis%C3%A9_en_3_parties_op._31_-_btv1b52502452h_(039_of_466).jpg"
      }
    ]
  },
  {
    "id": "fc-taffanel-gaubert",
    "treatise": "taffanel-gaubert",
    "tagline": {
      "en": "‘Tablature chromatique de la flûte’ for the Boehm flute, over two pages: low, middle and high octaves.",
      "fr": "« Tablature chromatique de la flûte » pour la flûte Boehm, sur deux pages : octaves grave, médium et aiguë.",
      "it": "«Tablature chromatique de la flûte» per il flauto Boehm, su due pagine: ottave grave, media e acuta."
    },
    "note": {
      "en": "‘Tablature chromatique de la flûte’, spread over two pages: first the low (‘grave’) octave, then the middle (‘médium’) and high (‘aigu’) octaves. The Boehm flute is drawn at the left, with a row for each finger and key of the left and right hands and a small legend for open and closed holes and keys. {{taffanel1923, Tablature chromatique de la flûte}}",
      "fr": "« Tablature chromatique de la flûte », sur deux pages : d'abord l'octave grave, puis les octaves médium et aiguë. La flûte Boehm est dessinée à gauche, avec une rangée pour chaque doigt et chaque clé des mains gauche et droite et une petite légende pour les trous et clés ouverts et fermés. {{taffanel1923, Tablature chromatique de la flûte}}",
      "it": "«Tablature chromatique de la flûte», su due pagine: prima l'ottava grave, poi le ottave media e acuta. Il flauto Boehm è disegnato a sinistra, con una riga per ogni dito e ogni chiave delle mani sinistra e destra e una piccola legenda per fori e chiavi aperti e chiusi. {{taffanel1923, Tablature chromatique de la flûte}}"
    },
    "edition": "Paris: Alphonse Leduc, 1923 (first edition)",
    "credit": "Bibliothèque nationale de France (Gallica), via Wikimedia Commons · public domain",
    "images": [
      {
        "file": "taffanel-gaubert-1",
        "w": 1350,
        "h": 1700,
        "caption": "Tablature chromatique de la flûte: 1re octave (grave)",
        "url": "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_compl%C3%A8te_de_fl%C3%BBte_en_huit_parties_(1re_%C3%A9dition)_-_btv1b525026221_(020_of_240).jpg"
      },
      {
        "file": "taffanel-gaubert-2",
        "w": 1347,
        "h": 1700,
        "caption": "Tablature chromatique de la flûte: 2e octave (médium) et 3e octave (aigu)",
        "url": "https://commons.wikimedia.org/wiki/File:M%C3%A9thode_compl%C3%A8te_de_fl%C3%BBte_en_huit_parties_(1re_%C3%A9dition)_-_btv1b525026221_(021_of_240).jpg"
      }
    ]
  }
];

HFP.fingeringsExtra = { missing: ["corrette-1735", "freillon-poncein-1700", "lorenzoni-1779", "granom-1770", "gunn-1793", "miller-1799", "tromlitz-1800", "nicholson-preceptor", "soussmann-1840", "carte-1845", "fuerstenau-1844", "boehm-1871", "barge-1880", "rockstro-1890", "schwedler-1897"] };

/* Primary sources: the scans the charts were taken from (listed on the Sources page). */
(function () {
  var B = HFP.bib || (HFP.bib = {});
  Object.assign(B, {
    hotteterre1722: {"kind": "primary", "author": "Jacques-Martin Hotteterre", "title": "Principes de la flûte traversière, ou flûte d'Allemagne", "place": "Paris", "publisher": "J. B. C. Ballard", "year": "1722", "url": "https://archive.org/details/principesdelaflu0000hott", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Internet Archive, copy from Oberlin College Library); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Internet Archive, copy from Oberlin College Library) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Internet Archive, copy from Oberlin College Library); tavole e numeri di pagina letti sulla scansione."}},
    prelleur1731: {"kind": "primary", "author": "Peter Prelleur", "title": "The Modern Musick-Master (The Newest Method for Learners on the German Flute)", "place": "London", "publisher": "Bow Church Yard", "year": "1731", "url": "https://archive.org/details/modernmusickmast8vofprel", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Internet Archive, copy from Oberlin College Library); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Internet Archive, copy from Oberlin College Library) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Internet Archive, copy from Oberlin College Library); tavole e numeri di pagina letti sulla scansione."}},
    quantz1752: {"kind": "primary", "author": "Johann Joachim Quantz", "title": "Versuch einer Anweisung die Flöte traversiere zu spielen", "place": "Berlin", "publisher": "Johann Friedrich Voss", "year": "1752", "url": "https://archive.org/details/JohannJoachimQuantzVersuchEinerAnweisungDieFlteTraversiereZu", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Internet Archive); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Internet Archive) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Internet Archive); tavole e numeri di pagina letti sulla scansione."}},
    bordet1755: {"kind": "primary", "author": "Toussaint Bordet", "title": "Méthode raisonnée pour apprendre la musique… et à jouer de la flûte traversière", "place": "Paris", "year": "c. 1755", "url": "https://gallica.bnf.fr/ark:/12148/btv1b10868113m", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Gallica, Bibliothèque nationale de France); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Gallica, Bibliothèque nationale de France) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Gallica, Bibliothèque nationale de France); tavole e numeri di pagina letti sulla scansione."}},
    mahaut1759: {"kind": "primary", "author": "Antoine Mahaut", "title": "Nouvelle méthode pour apprendre en peu de tems à jouer de la flûte traversière", "place": "Paris", "publisher": "De La Chevardière", "year": "1759", "url": "https://archive.org/details/imslp-mthode-pour-jouer-la-flte-traversire-mahaut-antoine", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Internet Archive, IMSLP mirror of a Russian State Library scan); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Internet Archive, IMSLP mirror of a Russian State Library scan) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Internet Archive, IMSLP mirror of a Russian State Library scan); tavole e numeri di pagina letti sulla scansione."}},
    delusse1760: {"kind": "primary", "author": "Charles Delusse", "title": "L'Art de la flûte traversière", "place": "Paris", "year": "c. 1760", "url": "https://archive.org/details/delusse-lart-de-la-flute-traversiere", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Internet Archive); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Internet Archive) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Internet Archive); tavole e numeri di pagina letti sulla scansione."}},
    tromlitz1791: {"kind": "primary", "author": "Johann George Tromlitz", "title": "Ausführlicher und gründlicher Unterricht die Flöte zu spielen", "place": "Leipzig", "publisher": "Adam Friedrich Böhme", "year": "1791", "url": "https://archive.org/details/10527788bsb", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Bayerische Staatsbibliothek, via the Internet Archive); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Bayerische Staatsbibliothek, via the Internet Archive) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Bayerische Staatsbibliothek, via the Internet Archive); tavole e numeri di pagina letti sulla scansione."}},
    devienne1794: {"kind": "primary", "author": "François Devienne", "title": "Nouvelle méthode théorique et pratique pour la flûte", "place": "Paris", "year": "c. 1794", "url": "https://gallica.bnf.fr/ark:/12148/btv1b10862515z", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Gallica, Bibliothèque nationale de France); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Gallica, Bibliothèque nationale de France) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Gallica, Bibliothèque nationale de France); tavole e numeri di pagina letti sulla scansione."}},
    berbiguier1818: {"kind": "primary", "author": "Benoît Tranquille Berbiguier", "title": "Nouvelle méthode pour la flûte", "place": "Paris", "publisher": "Janet et Cotelle", "year": "c. 1818", "url": "https://archive.org/details/nouvellemthodepo00berb", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Internet Archive, copy from the University of North Carolina at Chapel Hill); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Internet Archive, copy from the University of North Carolina at Chapel Hill) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Internet Archive, copy from the University of North Carolina at Chapel Hill); tavole e numeri di pagina letti sulla scansione."}},
    drouet1827: {"kind": "primary", "author": "Louis Drouët", "title": "Méthode pour la flûte, ou Traité complet et raisonné pour apprendre à jouer de cet instrument (French–German edition)", "place": "Mainz", "publisher": "B. Schott's Söhne", "year": "c. 1827", "url": "https://archive.org/details/mthodepourlaflte00drou", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Internet Archive, copy from the University of North Carolina at Chapel Hill); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Internet Archive, copy from the University of North Carolina at Chapel Hill) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Internet Archive, copy from the University of North Carolina at Chapel Hill); tavole e numeri di pagina letti sulla scansione."}},
    dorus1845: {"kind": "primary", "author": "Louis Dorus", "title": "L'Étude de la nouvelle flûte, méthode progressive arrangée d'après Devienne", "place": "Paris", "publisher": "Schonenberger", "year": "1845", "url": "https://archive.org/details/letudedelanouvel0000doru", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Internet Archive, copy from Oberlin College Library); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Internet Archive, copy from Oberlin College Library) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Internet Archive, copy from Oberlin College Library); tavole e numeri di pagina letti sulla scansione."}},
    tulou1852: {"kind": "primary", "author": "Jean-Louis Tulou", "title": "Méthode de flûte progressive et raisonnée, Op. 100 (French–German edition)", "place": "Mainz", "publisher": "B. Schott's Söhne", "year": "c. 1852", "url": "https://archive.org/details/imslp-de-flte-op100-tulou-jean-louis", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Internet Archive, IMSLP mirror of a Sibley Music Library scan); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Internet Archive, IMSLP mirror of a Sibley Music Library scan) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Internet Archive, IMSLP mirror of a Sibley Music Library scan); tavole e numeri di pagina letti sulla scansione."}},
    duverges1870: {"kind": "primary", "author": "M. J. Duverges", "title": "Nouvelle méthode complète de flûte Boehm cylindrique", "place": "Paris", "year": "c. 1870", "url": "https://gallica.bnf.fr/ark:/12148/bpt6k11637398", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Gallica, Bibliothèque nationale de France); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Gallica, Bibliothèque nationale de France) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Gallica, Bibliothèque nationale de France); tavole e numeri di pagina letti sulla scansione."}},
    gariboldi1877: {"kind": "primary", "author": "Giuseppe Gariboldi", "title": "Méthode complète de flûte, Op. 128", "place": "Paris", "publisher": "Alphonse Leduc", "year": "1877", "url": "https://gallica.bnf.fr/ark:/12148/btv1b10880256v", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Gallica, Bibliothèque nationale de France); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Gallica, Bibliothèque nationale de France) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Gallica, Bibliothèque nationale de France); tavole e numeri di pagina letti sulla scansione."}},
    altes1880: {"kind": "primary", "author": "Joseph-Henri Altès", "title": "Méthode pour flûte système Boehm, ouvrage divisé en 3 parties, op. 31", "place": "Paris", "year": "c. 1880", "url": "https://gallica.bnf.fr/ark:/12148/btv1b52502452h", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Gallica, Bibliothèque nationale de France); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Gallica, Bibliothèque nationale de France) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Gallica, Bibliothèque nationale de France); tavole e numeri di pagina letti sulla scansione."}},
    taffanel1923: {"kind": "primary", "author": "Paul Taffanel and Philippe Gaubert", "title": "Méthode complète de flûte en huit parties", "place": "Paris", "publisher": "Alphonse Leduc", "year": "1923", "url": "https://gallica.bnf.fr/ark:/12148/btv1b525026221", "note": {"en": "Digitised copy used for the chart on the Fingering Charts page (Gallica, Bibliothèque nationale de France); plate and page numbers are read from the scan.", "fr": "Exemplaire numérisé utilisé pour le tableau de la page Tableaux de doigtés (Gallica, Bibliothèque nationale de France) ; planches et numéros de page lus sur la numérisation.", "it": "Esemplare digitalizzato usato per la tavola della pagina Tavole di diteggiatura (Gallica, Bibliothèque nationale de France); tavole e numeri di pagina letti sulla scansione."}}
  });
})();
