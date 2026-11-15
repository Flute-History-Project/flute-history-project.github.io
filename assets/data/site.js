/*
 * SITE: configuration, historical periods, and all interface text in EN / FR / IT.
 */
window.HFP = window.HFP || {};

// Shared source used by many entries (data files load after this one).
var BROWN = { label: "Rachel Brown, The Early Flute: A Practical Guide (Cambridge, 2002)", url: "https://search.worldcat.org/isbn/9780521813914" };

HFP.config = {
  siteName: "The Historical Flute Project",
  // Address that receives the Contact & Suggestions form (via the visitor's mail app).
  contactEmail: "info@federicoaltare.art",
  // Donation page (Ko-fi, Buy Me a Coffee, PayPal.me…). Leave "" until the account exists:
  // the footer link and the Credits section then show a "coming soon" note instead of a button.
  donateUrl: "https://ko-fi.com/federicoaltare",
  donateLabel: "Ko-fi",
  mapRange: [1460, 2000]
};

HFP.eras = [
  { id: "renaissance", start: 1450, end: 1650, label: { en: "Renaissance", fr: "Renaissance", it: "Rinascimento" } },
  { id: "baroque", start: 1650, end: 1750, label: { en: "Baroque", fr: "Baroque", it: "Barocco" } },
  { id: "classical", start: 1750, end: 1820, label: { en: "Classical", fr: "Classique", it: "Classicismo" } },
  { id: "romantic", start: 1820, end: 1900, label: { en: "Romantic", fr: "Romantique", it: "Romanticismo" } },
  { id: "modern", start: 1900, end: 2100, label: { en: "20th century", fr: "XXᵉ siècle", it: "Novecento" } }
];

HFP.i18n = {
  en: {
    nav_playing: "How they played", intro_playing: "Technique and style on historical flutes, from the treatises themselves: posture, fingering, tone, articulation, ornaments, vibrato, and practical advice on choosing and caring for an instrument.",
    tagline: "Historical flutes, their makers, players and music",
    nav_home: "Home", nav_history: "History", nav_flutes: "Flutes", nav_makers: "Makers",
    nav_treatises: "Treatises & Methods", nav_flutists: "Flutists", nav_repertoire: "Repertoire",
    nav_map: "Flute Map", nav_contact: "Contact & Suggestions", nav_credits: "Credits", menu: "Menu",

    home_title: "Every flute has a story.",
    home_lede: "A practical guide to historical flutes: the instruments, the people who made and played them, the books they learned from and the music they played.",
    home_p1: "Picking up a traverso, a keyed flute or an old Louis Lot raises questions that are rarely answered in one place. Which pieces suit this instrument? Who played it, and how did they learn? What changed from one model to the next, and why?",
    home_p2: "This project collects those answers in a simple, connected form. It is not an academic archive: it is meant for flutists, students and curious listeners. Every entry links to the others, so you can follow a piece to its flute, a flute to its maker, a maker to the players of their time, and keep going.",
    home_explore: "Explore the sections",
    home_map_cta: "Open the Flute Map",
    home_history_cta: "Read the short history",
    did_you_know: "Did you know?",
    another: "Another one",

    intro_history: "A short, general history of the flute, from Renaissance consorts to the French school. It covers instruments, the personalities who shaped flute playing, and how the flute has been taught.",
    intro_flutes: "The main historical models of the flute, in rough chronological order. Open an entry for a description, key features and the repertoire it suits.",
    intro_makers: "The workshops behind the instruments: where they worked, what they built and which flutes they shaped.",
    intro_treatises: "The books flutists learned from: from Renaissance fingering charts to the methods of the 20th century.",
    intro_flutists: "Players who shaped the history of the flute, with links to their instruments, their books and the music written for them.",
    intro_repertoire: "Key pieces and study books in chronological order, with the flutes they can be played on and some practical tips.",
    intro_map: "Every element of the site on one timeline. Click anything to see what it is connected to, then jump from one to the next.",
    intro_contact: "Spotted an error? Know a flute, a maker, a player or a piece that should be here? Suggestions are very welcome: each one is reviewed and, if it fits, added to the site.",
    intro_credits: "Who is behind this project, and why.",

    period: "Period", origin: "Origin", features: "Key features", life: "Life", place: "Place", roles: "Roles",
    role_maker: "Maker", role_flutist: "Flutist", author: "Author", year: "Year", language: "Language",
    contents: "Main contents", composer: "Composer", date: "Date", scoring: "Scoring", kind: "Type",
    kind_piece: "Piece", kind_study: "Study book", kind_collection: "Collection",
    playable_on: "Playable on", tips: "Performer's tips", related: "Connections",
    rel_flutes: "Flutes", rel_makers: "Makers", rel_flutists: "Flutists", rel_treatises: "Treatises & methods",
    rel_repertoire: "Repertoire", rel_repertoire_flute: "Possible repertoire",
    sources: "Documents & further reading", wiki: "Wikipedia", imslp: "Score on IMSLP", imslp_t: "Facsimile on IMSLP",
    listen: "Listen to recordings", show_on_map: "Show on the Flute Map", suggest_edit: "Suggest an edit",
    search: "Filter this list…", entries: "entries", no_results: "Nothing matches your search.",
    present: "today", drawing_note: "Schematic drawing, not to scale.",
    fallback: "This text is not yet available in your language and is shown in English.",

    map_lanes: "Show", zoom_in: "Zoom in", zoom_out: "Zoom out",
    map_hint: "Click on any element of the map to see its connections.",
    map_open: "Open the full entry →", map_connected: "Connected to",

    f_name: "Your name", f_email: "Your email", f_type: "Type of suggestion", t_new: "New entry",
    t_correction: "Correction to an existing entry", t_source: "Source, document or image", t_other: "Other / just saying hello",
    f_entry: "Related entry", f_entry_none: "— none —", f_section: "Section", f_message: "Your message",
    f_message_ph: "What should be added or changed? Please mention your sources if you can.",
    f_send: "Send suggestion", f_note: "Pressing the button opens your email app with the message ready to send.",

    nav_sources: "Sources",
    intro_sources: "Everything this site is built on: the main references, the historical treatises, and every source cited in the individual entries.",
    src_method: "How the texts are written",
    src_method_text: "All texts are original summaries in our own words, never copied. They are based on the references below and on the primary sources linked in each entry. Where an entry does not yet cite a specific source, it rests on general reference knowledge and is listed at the bottom of this page so it can be checked. Wikipedia and IMSLP links in the entries are offered as further reading and scores, not as sources for the texts.",
    src_general: "Main references",
    src_primary: "Primary sources: the treatises",
    src_by_entry: "Sources cited in the entries",
    src_used_in: "Used in",
    src_pending: "Entries without a specific source yet",
    src_pending_note: "These entries are based on general reference knowledge and still need a specific citation. If you can suggest one, please get in touch.",

    support_link: "Support this project",
    support_title: "Support the project",
    support_text: "This site is free, has no advertising and is written and checked by hand. If you find it useful, a small contribution helps cover the hosting, the books and the time spent on research, and keeps the site growing.",
    support_btn: "Buy me a coffee",
    support_soon: "Donations will be possible soon.",
    credits_website: "Visit my website",
    credits_photo: "Photo", credits_instruments: "The flutes I play", credits_about: "About this project",
    credits_sources: "Sources & images",
    footer: "A project about historical flutes. Content is reviewed by hand. Suggestions are welcome."
  },

  fr: {
    nav_playing: "Comment ils jouaient", intro_playing: "La technique et le style sur les flûtes historiques, d’après les traités : tenue, doigtés, son, articulation, ornements, vibrato, et conseils pratiques pour choisir et entretenir un instrument.",
    tagline: "Les flûtes historiques, leurs facteurs, leurs interprètes et leur musique",
    nav_home: "Accueil", nav_history: "Histoire", nav_flutes: "Flûtes", nav_makers: "Facteurs",
    nav_treatises: "Traités & méthodes", nav_flutists: "Flûtistes", nav_repertoire: "Répertoire",
    nav_map: "Carte", nav_contact: "Contact & suggestions", nav_credits: "Crédits", menu: "Menu",

    home_title: "Chaque flûte a son histoire.",
    home_lede: "Un guide pratique des flûtes historiques : les instruments, ceux qui les ont fabriqués et joués, les livres dans lesquels ils ont appris et la musique qu'ils jouaient.",
    home_p1: "Prendre en main un traverso, une flûte à clés ou une ancienne Louis Lot soulève des questions dont les réponses sont rarement réunies au même endroit. Quelles œuvres conviennent à cet instrument ? Qui en jouait, et comment l'apprenait-on ? Qu'est-ce qui a changé d'un modèle à l'autre, et pourquoi ?",
    home_p2: "Ce projet rassemble ces réponses sous une forme simple et reliée. Ce n'est pas une archive universitaire : il s'adresse aux flûtistes, aux étudiants et aux auditeurs curieux. Chaque fiche renvoie aux autres : on suit une œuvre jusqu'à sa flûte, une flûte jusqu'à son facteur, un facteur jusqu'aux interprètes de son temps, et ainsi de suite.",
    home_explore: "Explorer les sections",
    home_map_cta: "Ouvrir la carte",
    home_history_cta: "Lire la brève histoire",
    did_you_know: "Le saviez-vous ?",
    another: "Une autre",

    intro_history: "Une histoire brève et générale de la flûte, des consorts de la Renaissance à l'école française : les instruments, les personnalités qui ont marqué le jeu de la flûte et la manière dont on l'a enseignée.",
    intro_flutes: "Les principaux modèles historiques de flûte, dans un ordre à peu près chronologique. Ouvrez une fiche pour lire la description, les caractéristiques et le répertoire adapté.",
    intro_makers: "Les ateliers derrière les instruments : où ils travaillaient, ce qu'ils fabriquaient et quelles flûtes ils ont façonnées.",
    intro_treatises: "Les livres dans lesquels les flûtistes ont appris, des tablatures de la Renaissance aux méthodes du XXᵉ siècle.",
    intro_flutists: "Les interprètes qui ont marqué l'histoire de la flûte, avec des liens vers leurs instruments, leurs livres et la musique écrite pour eux.",
    intro_repertoire: "Œuvres et recueils d'études essentiels, par ordre chronologique, avec les flûtes sur lesquelles on peut les jouer et quelques conseils pratiques.",
    intro_map: "Tous les éléments du site sur une seule frise. Cliquez sur un élément pour voir ses liens, puis sautez de l'un à l'autre.",
    intro_contact: "Vous avez repéré une erreur ? Vous connaissez une flûte, un facteur, un interprète ou une œuvre qui devrait figurer ici ? Vos suggestions sont les bienvenues : chacune est relue et, si elle convient, ajoutée au site.",
    intro_credits: "Qui est derrière ce projet, et pourquoi.",

    period: "Période", origin: "Origine", features: "Caractéristiques", life: "Vie", place: "Lieu", roles: "Rôles",
    role_maker: "Facteur", role_flutist: "Flûtiste", author: "Auteur", year: "Année", language: "Langue",
    contents: "Contenu principal", composer: "Compositeur", date: "Date", scoring: "Effectif", kind: "Type",
    kind_piece: "Œuvre", kind_study: "Recueil d'études", kind_collection: "Recueil",
    playable_on: "Jouable sur", tips: "Conseils d'interprétation", related: "Liens",
    rel_flutes: "Flûtes", rel_makers: "Facteurs", rel_flutists: "Flûtistes", rel_treatises: "Traités & méthodes",
    rel_repertoire: "Répertoire", rel_repertoire_flute: "Répertoire possible",
    sources: "Documents & lectures", wiki: "Wikipédia", imslp: "Partition sur IMSLP", imslp_t: "Fac-similé sur IMSLP",
    listen: "Écouter des enregistrements", show_on_map: "Voir sur la carte", suggest_edit: "Proposer une modification",
    search: "Filtrer cette liste…", entries: "fiches", no_results: "Aucun résultat.",
    present: "aujourd'hui", drawing_note: "Dessin schématique, pas à l'échelle.",
    fallback: "Ce texte n'est pas encore traduit et s'affiche en anglais.",

    map_lanes: "Afficher", zoom_in: "Zoom avant", zoom_out: "Zoom arrière",
    map_hint: "Cliquez sur un élément de la carte pour voir ses liens.",
    map_open: "Ouvrir la fiche complète →", map_connected: "Lié à",

    f_name: "Votre nom", f_email: "Votre e-mail", f_type: "Type de suggestion", t_new: "Nouvelle fiche",
    t_correction: "Correction d'une fiche existante", t_source: "Source, document ou image", t_other: "Autre / simple bonjour",
    f_entry: "Fiche concernée", f_entry_none: "— aucune —", f_section: "Section", f_message: "Votre message",
    f_message_ph: "Que faudrait-il ajouter ou modifier ? Indiquez vos sources si possible.",
    f_send: "Envoyer la suggestion", f_note: "Le bouton ouvre votre messagerie avec le message prêt à être envoyé.",

    nav_sources: "Sources",
    intro_sources: "Tout ce sur quoi repose ce site : les ouvrages de référence, les traités historiques et chaque source citée dans les fiches.",
    src_method: "Comment les textes sont rédigés",
    src_method_text: "Tous les textes sont des synthèses originales, jamais copiées. Ils s'appuient sur les références ci-dessous et sur les sources primaires indiquées dans chaque fiche. Lorsqu'une fiche ne cite pas encore de source précise, elle repose sur des connaissances de référence générales ; elle figure alors en bas de cette page pour être vérifiée. Les liens vers Wikipédia et IMSLP sont proposés comme lectures et partitions, non comme sources des textes.",
    src_general: "Références principales",
    src_primary: "Sources primaires : les traités",
    src_by_entry: "Sources citées dans les fiches",
    src_used_in: "Utilisée dans",
    src_pending: "Fiches sans source précise pour l'instant",
    src_pending_note: "Ces fiches reposent sur des connaissances générales et attendent encore une citation précise. Si vous pouvez en proposer une, écrivez-nous.",

    support_link: "Soutenir le projet",
    support_title: "Soutenir le projet",
    support_text: "Ce site est gratuit, sans publicité, rédigé et vérifié à la main. S'il vous est utile, une petite contribution aide à couvrir l'hébergement, les livres et le temps de recherche, et permet au site de grandir.",
    support_btn: "Offrez-moi un café",
    support_soon: "Les dons seront bientôt possibles.",
    credits_website: "Visiter mon site",
    credits_photo: "Photo", credits_instruments: "Les flûtes que je joue", credits_about: "À propos du projet",
    credits_sources: "Sources & images",
    footer: "Un projet sur les flûtes historiques. Contenus relus à la main. Les suggestions sont les bienvenues."
  },

  it: {
    nav_playing: "Come suonavano", intro_playing: "Tecnica e stile sui flauti storici, dai trattati stessi: postura, diteggiature, suono, articolazione, ornamenti, vibrato e consigli pratici per scegliere e curare uno strumento.",
    tagline: "Flauti storici, i loro costruttori, interpreti e musica",
    nav_home: "Home", nav_history: "Storia", nav_flutes: "Flauti", nav_makers: "Costruttori",
    nav_treatises: "Trattati & metodi", nav_flutists: "Flautisti", nav_repertoire: "Repertorio",
    nav_map: "Mappa", nav_contact: "Contatti & suggerimenti", nav_credits: "Crediti", menu: "Menu",

    home_title: "Ogni flauto ha una storia.",
    home_lede: "Una guida pratica ai flauti storici: gli strumenti, chi li ha costruiti e suonati, i libri su cui si studiava e la musica che si suonava.",
    home_p1: "Quando si prende in mano un traverso, un flauto a chiavi o un vecchio Louis Lot nascono domande le cui risposte raramente si trovano in un unico posto. Quali brani sono adatti a questo strumento? Chi lo suonava, e come lo si imparava? Cosa è cambiato da un modello all'altro, e perché?",
    home_p2: "Questo progetto raccoglie quelle risposte in una forma semplice e collegata. Non è un archivio accademico: è pensato per flautisti, studenti e ascoltatori curiosi. Ogni voce rimanda alle altre: si segue un brano fino al suo flauto, un flauto fino al suo costruttore, un costruttore fino agli interpreti del suo tempo, e così via.",
    home_explore: "Esplora le sezioni",
    home_map_cta: "Apri la mappa",
    home_history_cta: "Leggi la breve storia",
    did_you_know: "Lo sapevi?",
    another: "Un'altra",

    intro_history: "Una storia breve e generale del flauto, dai consort rinascimentali alla scuola francese: gli strumenti, le personalità che hanno segnato il modo di suonare e il modo in cui il flauto è stato insegnato.",
    intro_flutes: "I principali modelli storici di flauto, in ordine grosso modo cronologico. Apri una voce per leggere la descrizione, le caratteristiche e il repertorio adatto.",
    intro_makers: "Le botteghe dietro gli strumenti: dove lavoravano, cosa costruivano e quali flauti hanno plasmato.",
    intro_treatises: "I libri su cui i flautisti hanno studiato, dalle tavole di diteggiatura rinascimentali ai metodi del Novecento.",
    intro_flutists: "Gli interpreti che hanno segnato la storia del flauto, con collegamenti ai loro strumenti, ai loro libri e alla musica scritta per loro.",
    intro_repertoire: "Brani e raccolte di studi fondamentali in ordine cronologico, con i flauti su cui si possono suonare e qualche consiglio pratico.",
    intro_map: "Tutti gli elementi del sito su un'unica linea del tempo. Clicca su un elemento per vedere i suoi collegamenti, poi salta dall'uno all'altro.",
    intro_contact: "Hai trovato un errore? Conosci un flauto, un costruttore, un interprete o un brano che dovrebbe essere qui? I suggerimenti sono benvenuti: ognuno viene letto e, se adatto, aggiunto al sito.",
    intro_credits: "Chi c'è dietro questo progetto, e perché.",

    period: "Periodo", origin: "Origine", features: "Caratteristiche", life: "Vita", place: "Luogo", roles: "Ruoli",
    role_maker: "Costruttore", role_flutist: "Flautista", author: "Autore", year: "Anno", language: "Lingua",
    contents: "Contenuti principali", composer: "Compositore", date: "Data", scoring: "Organico", kind: "Tipo",
    kind_piece: "Brano", kind_study: "Raccolta di studi", kind_collection: "Raccolta",
    playable_on: "Suonabile su", tips: "Consigli per l'esecuzione", related: "Collegamenti",
    rel_flutes: "Flauti", rel_makers: "Costruttori", rel_flutists: "Flautisti", rel_treatises: "Trattati & metodi",
    rel_repertoire: "Repertorio", rel_repertoire_flute: "Repertorio possibile",
    sources: "Documenti & approfondimenti", wiki: "Wikipedia", imslp: "Partitura su IMSLP", imslp_t: "Facsimile su IMSLP",
    listen: "Ascolta registrazioni", show_on_map: "Mostra sulla mappa", suggest_edit: "Suggerisci una modifica",
    search: "Filtra questa lista…", entries: "voci", no_results: "Nessun risultato.",
    present: "oggi", drawing_note: "Disegno schematico, non in scala.",
    fallback: "Questo testo non è ancora tradotto e viene mostrato in inglese.",

    map_lanes: "Mostra", zoom_in: "Ingrandisci", zoom_out: "Riduci",
    map_hint: "Clicca su un elemento della mappa per vederne i collegamenti.",
    map_open: "Apri la voce completa →", map_connected: "Collegato a",

    f_name: "Il tuo nome", f_email: "La tua email", f_type: "Tipo di suggerimento", t_new: "Nuova voce",
    t_correction: "Correzione a una voce esistente", t_source: "Fonte, documento o immagine", t_other: "Altro / solo un saluto",
    f_entry: "Voce collegata", f_entry_none: "— nessuna —", f_section: "Sezione", f_message: "Il tuo messaggio",
    f_message_ph: "Cosa andrebbe aggiunto o modificato? Se puoi, indica le tue fonti.",
    f_send: "Invia il suggerimento", f_note: "Il pulsante apre il tuo programma di posta con il messaggio pronto da inviare.",

    nav_sources: "Fonti",
    intro_sources: "Tutto ciò su cui si basa questo sito: le opere di riferimento, i trattati storici e ogni fonte citata nelle singole voci.",
    src_method: "Come sono scritti i testi",
    src_method_text: "Tutti i testi sono sintesi originali, mai copiate. Si basano sui riferimenti qui sotto e sulle fonti primarie indicate in ogni voce. Quando una voce non cita ancora una fonte specifica, si basa su conoscenze generali di riferimento ed è elencata in fondo a questa pagina, così da poter essere verificata. I link a Wikipedia e IMSLP nelle voci sono letture e partiture di approfondimento, non fonti dei testi.",
    src_general: "Riferimenti principali",
    src_primary: "Fonti primarie: i trattati",
    src_by_entry: "Fonti citate nelle voci",
    src_used_in: "Usata in",
    src_pending: "Voci ancora senza una fonte specifica",
    src_pending_note: "Queste voci si basano su conoscenze generali e attendono ancora una citazione precisa. Se puoi suggerirne una, scrivici.",

    support_link: "Sostieni il progetto",
    support_title: "Sostieni il progetto",
    support_text: "Questo sito è gratuito, senza pubblicità, scritto e verificato a mano. Se ti è utile, un piccolo contributo aiuta a coprire hosting, libri e tempo di ricerca, e permette al sito di crescere.",
    support_btn: "Offrimi un caffè",
    support_soon: "Le donazioni saranno possibili a breve.",
    credits_website: "Visita il mio sito",
    credits_photo: "Foto", credits_instruments: "I flauti che suono", credits_about: "Il progetto",
    credits_sources: "Fonti & immagini",
    footer: "Un progetto sui flauti storici. Contenuti verificati a mano. I suggerimenti sono benvenuti."
  }
};

/* Main references used to write and check the site. Entry-level sources live in each entry's `sources`. */
HFP.references = [
  {
    title: "flutehistory.com",
    author: "Ardal Powell",
    url: "http://www.flutehistory.com/",
    note: {
      en: "The main secondary source for the site: pages on periods, flute types, makers and players, used to check and expand most entries.",
      fr: "Principale source secondaire du site : pages sur les périodes, les types de flûte, les facteurs et les interprètes, utilisées pour vérifier et enrichir la plupart des fiches.",
      it: "La principale fonte secondaria del sito: pagine su periodi, tipi di flauto, costruttori e interpreti, usate per verificare e ampliare la maggior parte delle voci."
    }
  },
  {
    title: "The Flute",
    author: "Ardal Powell",
    year: "Yale University Press, 2002",
    url: "https://yalebooks.yale.edu/book/9780300094985/the-flute/",
    note: {
      en: "The standard history of the transverse flute, on which flutehistory.com is based. Recommended for anyone who wants to go deeper.",
      fr: "L'histoire de référence de la flûte traversière, sur laquelle repose flutehistory.com. Recommandée pour approfondir.",
      it: "La storia di riferimento del flauto traverso, su cui si basa flutehistory.com. Consigliata a chi vuole approfondire."
    }
  },
  {
    title: "The Early Flute: A Practical Guide",
    author: "Rachel Brown",
    year: "Cambridge University Press, 2002",
    url: "https://search.worldcat.org/isbn/9780521813914",
    note: {
      en: "A practical guide to the flute from 1700 to 1900: instruments, technique, style and treatises. Used for the flute types, the treatises and the page How they played.",
      fr: "Un guide pratique de la flûte de 1700 à 1900 : instruments, technique, style et traités. Utilisé pour les types de flûte, les traités et la page Comment ils jouaient.",
      it: "Una guida pratica al flauto dal 1700 al 1900: strumenti, tecnica, stile e trattati. Usata per i tipi di flauto, i trattati e la pagina Come suonavano."
    }
  },
  {
    title: "Theobald Böhm's compositions",
    author: "Ludwig Böhm (Theobald Böhm Archive, Munich, 1994)",
    url: "https://thebabelflute.com/?p=13332",
    note: {
      en: "Catalogue and dating of Boehm's works, and their relationship to his new flutes.",
      fr: "Catalogue et datation des œuvres de Boehm, et leur lien avec ses nouvelles flûtes.",
      it: "Catalogo e datazione delle opere di Boehm e loro rapporto con i nuovi flauti."
    }
  },
  {
    title: "IMSLP – Petrucci Music Library",
    url: "https://imslp.org/",
    note: {
      en: "Public-domain scores and facsimiles of the historical treatises, linked from each entry.",
      fr: "Partitions du domaine public et fac-similés des traités historiques, liés depuis chaque fiche.",
      it: "Partiture di pubblico dominio e facsimili dei trattati storici, collegati da ogni voce."
    }
  },
  {
    title: "Dayton C. Miller Flute Collection",
    author: "Library of Congress",
    url: "https://www.loc.gov/collections/dayton-c-miller-collection/",
    note: {
      en: "The largest flute collection in the world, with photographs and documents. Planned source for images.",
      fr: "La plus grande collection de flûtes au monde, avec photographies et documents. Source prévue pour les images.",
      it: "La più grande collezione di flauti al mondo, con fotografie e documenti. Fonte prevista per le immagini."
    }
  }
];

/* Credits page text (placeholders to be replaced). */
HFP.credits = {
  name: "Federico Altare",
  photo: "assets/img/federico-altare.jpg",
  website: "https://www.federicoaltare.art",
  bio: {
    en: "Behind every note lies an extraordinary story, and I like to think that each performance brings it back to life, while slowly adding a new chapter of its own. I trained in Italy, the Netherlands and France: I completed a Bachelor's degree in early music between Paris and Amsterdam, and a Master's degree in flute at the Conservatoire National Supérieur de Musique et de Danse de Paris, awarded the Prix à l'unanimité avec les félicitations du jury. I am now about to begin a Master's in *Pratiques musicales historiques*, to dig even deeper into how music was really played between the 17th and 19th centuries.\n\nOn stage, I divide my time between the modern flute and its ancestors: I play regularly with William Christie's Les Arts Florissants, I have explored the music of today with the Ensemble Intercontemporain, and I have played the great orchestral repertoire with the Orchestre National de France and the Opéra de Paris. In 2026 I won First Prize and the Orchestra Prize at the Carl Nielsen International Competition.\n\nThis site was born from a very practical frustration. Every time I picked up a traverso, a keyed flute or an old Louis Lot, the same questions came back: which instrument suits this piece, who played it, which treatise should I open? The answers existed, but they were scattered across libraries, museum catalogues and specialist books. I wanted to gather them in one place, connected to each other and written for players and curious listeners rather than for specialists alone, and to keep it free and open to everyone's suggestions.",
    it: "Dietro ogni nota c'è una storia straordinaria, e mi piace pensare che ogni concerto la faccia rivivere, aggiungendo pian piano un nuovo capitolo. Mi sono formato tra Italia, Paesi Bassi e Francia: ho conseguito una laurea triennale in musica antica tra Parigi e Amsterdam e un Master in flauto al Conservatoire National Supérieur de Musique et de Danse de Paris, con il Prix à l'unanimité avec les félicitations du jury. Ora sto per iniziare un Master in *Pratiques musicales historiques*, per approfondire ancora di più come si suonava davvero tra Seicento e Ottocento.\n\nSul palco divido il mio tempo tra il flauto moderno e i suoi antenati: suono regolarmente con Les Arts Florissants di William Christie, ho esplorato la musica di oggi con l'Ensemble Intercontemporain e ho affrontato il grande repertorio orchestrale con l'Orchestre National de France e l'Opéra de Paris. Nel 2026 ho vinto il Primo Premio e il Premio dell'Orchestra al Concorso Internazionale Carl Nielsen.\n\nQuesto sito nasce da una frustrazione molto concreta. Ogni volta che prendevo in mano un traverso, un flauto a chiavi o un vecchio Louis Lot, tornavano le stesse domande: quale strumento per questo brano, chi lo suonava, quale trattato aprire? Le risposte esistevano, ma erano sparse tra biblioteche, cataloghi di musei e libri specialistici. Ho voluto raccoglierle in un unico posto, collegate tra loro e scritte per chi suona e per i curiosi, non solo per gli specialisti, e mantenerle gratuite e aperte ai suggerimenti di tutti.",
    fr: "Derrière chaque note se cache une histoire extraordinaire, et j'aime penser que chaque concert la fait revivre, tout en y ajoutant peu à peu un nouveau chapitre. Je me suis formé en Italie, aux Pays-Bas et en France : j'ai obtenu une licence de musique ancienne entre Paris et Amsterdam, puis un Master de flûte au Conservatoire National Supérieur de Musique et de Danse de Paris, avec le Prix à l'unanimité avec les félicitations du jury. Je m'apprête maintenant à commencer un Master en *Pratiques musicales historiques*, pour comprendre plus profondément encore comment on jouait réellement entre le XVIIe et le XIXe siècle.\n\nSur scène, je partage mon temps entre la flûte moderne et ses ancêtres : je joue régulièrement avec Les Arts Florissants de William Christie, j'ai exploré la musique d'aujourd'hui avec l'Ensemble Intercontemporain et le grand répertoire orchestral avec l'Orchestre National de France et l'Opéra de Paris. En 2026, j'ai remporté le Premier Prix et le Prix de l'Orchestre au Concours International Carl Nielsen.\n\nCe site est né d'une frustration très concrète. Chaque fois que je prenais un traverso, une flûte à clés ou une vieille Louis Lot, les mêmes questions revenaient : quel instrument pour cette œuvre, qui la jouait, quel traité ouvrir ? Les réponses existaient, mais dispersées entre bibliothèques, catalogues de musées et ouvrages spécialisés. J'ai voulu les réunir en un seul lieu, reliées entre elles et écrites pour les musiciens et les curieux autant que pour les spécialistes, et les garder gratuites et ouvertes aux suggestions de chacun."
  },
  about: {
    en: "I started this project because, as a flutist moving between historical instruments, I kept looking for the same kind of practical information: which flute for which piece, who played what, which book to open. I wanted to put it all in one place, connected, and open to suggestions from other flutists.",
    it: "Ho iniziato questo progetto perché, da flautista che si muove tra strumenti storici diversi, mi trovavo sempre a cercare lo stesso tipo di informazioni pratiche: quale flauto per quale brano, chi suonava cosa, quale libro aprire. Volevo raccoglierle in un unico posto, collegate tra loro e aperte ai suggerimenti di altri flautisti.",
    fr: "J'ai commencé ce projet parce qu'en passant d'un instrument historique à l'autre, je cherchais sans cesse le même type d'informations pratiques : quelle flûte pour quelle œuvre, qui jouait quoi, quel livre ouvrir. Je voulais tout réunir au même endroit, relié, et ouvert aux suggestions d'autres flûtistes."
  },
  instruments: ["baroque-four-piece", "classical-keyed-flute", "boehm-1847"],
  sourcesText: {
    en: "Texts are original summaries based on standard reference works, above all Ardal Powell's The Flute (Yale University Press, 2002), his website flutehistory.com and Rachel Brown's The Early Flute (Cambridge, 2002), and on the primary sources linked in each entry. Illustrations are schematic drawings and photographs. The photographs come from public-domain or openly licensed collections (for example Wikimedia Commons and the Dayton C. Miller Flute Collection at the Library of Congress), and each one is credited.",
    it: "I testi sono sintesi originali basate su opere di riferimento, prima fra tutte The Flute di Ardal Powell (Yale University Press, 2002), il suo sito flutehistory.com e The Early Flute di Rachel Brown (Cambridge, 2002), e sulle fonti primarie indicate in ogni voce. Le illustrazioni sono disegni schematici e fotografie. Le fotografie provengono da collezioni di pubblico dominio o con licenza libera (ad esempio Wikimedia Commons e la Dayton C. Miller Flute Collection della Library of Congress), sempre con il relativo credito.",
    fr: "Les textes sont des synthèses originales fondées sur des ouvrages de référence, en premier lieu The Flute d'Ardal Powell (Yale University Press, 2002), son site flutehistory.com et The Early Flute de Rachel Brown (Cambridge, 2002), et sur les sources primaires indiquées dans chaque fiche. Les illustrations sont des dessins schématiques et des photographies. Les photographies proviennent de collections du domaine public ou sous licence libre (par exemple Wikimedia Commons et la Dayton C. Miller Flute Collection de la Library of Congress) et sont toujours créditées."
  }
};
