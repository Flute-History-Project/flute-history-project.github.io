/*
 * SITE: configuration, historical periods, and all interface text in EN / FR / IT.
 */
window.HFP = window.HFP || {};


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

    intro_sources: "Everything this site is built on. Every statement in the entries carries a numbered note that leads to a printed source (a book, an article or a historical document), with the page or chapter.",
    src_method: "How the sources work",
    src_method_text: "All texts are original summaries in our own words, never copied. Each paragraph ends with numbered notes such as [1]: click one to see the book, article or historical document it comes from, with the page or chapter, in the entry's list of references.\n\nOnly printed sources count as sources. Websites (including Wikipedia, IMSLP and the author's own pages on flutehistory.com) are offered as further reading and scores, never as the only basis for a statement.\n\nPerformer's tips are practical suggestions from the site, not historical statements; any facts they contain carry a note.\n\nA question mark [?] means that a statement has not yet been checked against a printed source. Those passages are listed at the bottom of this page; if you can help, please get in touch.",
    src_secondary: "Books and articles",
    src_primary: "Historical documents and treatises",
    src_primary_note: "Sources written at the time. Each treatise also has its own page in Treatises & Methods.",
    src_online: "Online resources",
    src_online_note: "Further reading, scores and images. Not used as the sole source of any statement.",
    src_pages: "Web pages linked from the entries",
    src_used_in: "Cited in",
    src_verify: "Being checked",
    src_verify_note: "Work in progress, shown openly. The passages below are still waiting for a printed source, or for page numbers to be confirmed in the book.",
    src_needs: "Entries with statements marked [?]",
    src_uncited: "Entries and chapters with no references yet",
    src_pages_pending: "Sources whose page numbers are still being checked",
    refs_title: "References",
    further: "Further reading & online",
    online_summary: "online summary by the author", online_copy: "text reproduced online",
    cite_needed: "Source still being checked",
    nav_sources: "Sources",

    support_link: "Support this project",
    support_title: "Support the project",
    support_text: "This site is free, has no advertising and is written and checked by hand. If you find it useful, a small contribution helps cover the hosting, the books and the time spent on research, and keeps the site growing.",
    support_btn: "Buy me a coffee",
    support_band: "Free, ad-free and written by hand. If it helped you, a coffee keeps it going.",
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

    intro_sources: "Tout ce sur quoi repose ce site. Chaque affirmation des fiches porte une note numérotée qui renvoie à une source imprimée (livre, article ou document historique), avec la page ou le chapitre.",
    src_method: "Comment fonctionnent les sources",
    src_method_text: "Tous les textes sont des synthèses originales, jamais copiées. Chaque paragraphe se termine par des notes numérotées comme [1] : cliquez pour voir le livre, l'article ou le document historique dont il provient, avec la page ou le chapitre, dans la liste des références de la fiche.\n\nSeules les sources imprimées comptent comme sources. Les sites web (y compris Wikipédia, IMSLP et les pages de l'auteur sur flutehistory.com) sont proposés comme lectures et partitions, jamais comme seul fondement d'une affirmation.\n\nLes conseils d'interprétation sont des suggestions pratiques du site, non des affirmations historiques ; les faits qu'ils contiennent portent une note.\n\nUn point d'interrogation [?] signale une affirmation pas encore vérifiée sur une source imprimée. Ces passages sont listés en bas de cette page ; si vous pouvez aider, écrivez-nous.",
    src_secondary: "Livres et articles",
    src_primary: "Documents historiques et traités",
    src_primary_note: "Sources de l'époque. Chaque traité a aussi sa propre fiche dans Traités & méthodes.",
    src_online: "Ressources en ligne",
    src_online_note: "Lectures, partitions et images. Jamais utilisées comme seule source d'une affirmation.",
    src_pages: "Pages web liées depuis les fiches",
    src_used_in: "Citée dans",
    src_verify: "En cours de vérification",
    src_verify_note: "Travail en cours, montré ouvertement. Les passages ci-dessous attendent encore une source imprimée, ou la confirmation des numéros de page.",
    src_needs: "Fiches avec des affirmations marquées [?]",
    src_uncited: "Fiches et chapitres encore sans références",
    src_pages_pending: "Sources dont les numéros de page sont en cours de vérification",
    refs_title: "Références",
    further: "Lectures & ressources en ligne",
    online_summary: "résumé en ligne de l'auteur", online_copy: "texte reproduit en ligne",
    cite_needed: "Source en cours de vérification",
    nav_sources: "Sources",

    support_link: "Soutenir le projet",
    support_title: "Soutenir le projet",
    support_text: "Ce site est gratuit, sans publicité, rédigé et vérifié à la main. S'il vous est utile, une petite contribution aide à couvrir l'hébergement, les livres et le temps de recherche, et permet au site de grandir.",
    support_btn: "Offrez-moi un café",
    support_band: "Gratuit, sans publicité, écrit à la main. Si le site vous a servi, un café aide à le faire vivre.",
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

    intro_sources: "Tutto ciò su cui si basa questo sito. Ogni affermazione delle voci porta una nota numerata che rimanda a una fonte a stampa (libro, articolo o documento storico), con la pagina o il capitolo.",
    src_method: "Come funzionano le fonti",
    src_method_text: "Tutti i testi sono sintesi originali, mai copiate. Ogni paragrafo termina con note numerate come [1]: cliccandole si vede il libro, l'articolo o il documento storico da cui proviene, con la pagina o il capitolo, nell'elenco dei riferimenti della voce.\n\nSolo le fonti a stampa contano come fonti. I siti web (compresi Wikipedia, IMSLP e le pagine dell'autore su flutehistory.com) sono indicati come approfondimenti e partiture, mai come unico fondamento di un'affermazione.\n\nI consigli per l'interprete sono suggerimenti pratici del sito, non affermazioni storiche; i fatti che contengono hanno una nota.\n\nUn punto interrogativo [?] indica un'affermazione non ancora verificata su una fonte a stampa. Questi passi sono elencati in fondo alla pagina; se puoi aiutare, scrivici.",
    src_secondary: "Libri e articoli",
    src_primary: "Documenti storici e trattati",
    src_primary_note: "Fonti dell'epoca. Ogni trattato ha anche una sua voce in Trattati & metodi.",
    src_online: "Risorse online",
    src_online_note: "Approfondimenti, partiture e immagini. Mai usate come unica fonte di un'affermazione.",
    src_pages: "Pagine web collegate dalle voci",
    src_used_in: "Citata in",
    src_verify: "In verifica",
    src_verify_note: "Lavori in corso, mostrati apertamente. I passi qui sotto attendono ancora una fonte a stampa, o la conferma dei numeri di pagina sul libro.",
    src_needs: "Voci con affermazioni segnate [?]",
    src_uncited: "Voci e capitoli ancora senza riferimenti",
    src_pages_pending: "Fonti i cui numeri di pagina sono in verifica",
    refs_title: "Riferimenti",
    further: "Approfondimenti & online",
    online_summary: "riassunto online dell'autore", online_copy: "testo riprodotto online",
    cite_needed: "Fonte in verifica",
    nav_sources: "Fonti",

    support_link: "Sostieni il progetto",
    support_title: "Sostieni il progetto",
    support_text: "Questo sito è gratuito, senza pubblicità, scritto e verificato a mano. Se ti è utile, un piccolo contributo aiuta a coprire hosting, libri e tempo di ricerca, e permette al sito di crescere.",
    support_btn: "Offrimi un caffè",
    support_band: "Gratuito, senza pubblicità, scritto a mano. Se ti è stato utile, un caffè aiuta a farlo vivere.",
    support_soon: "Le donazioni saranno possibili a breve.",
    credits_website: "Visita il mio sito",
    credits_photo: "Foto", credits_instruments: "I flauti che suono", credits_about: "Il progetto",
    credits_sources: "Fonti & immagini",
    footer: "Un progetto sui flauti storici. Contenuti verificati a mano. I suggerimenti sono benvenuti."
  }
};

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
  instruments: ["baroque-four-piece", "classical-keyed-flute", "german-keyed-flute", "boehm-1847"],
  sourcesText: {
    en: "Texts are original summaries based on standard reference works, above all Ardal Powell's The Flute (Yale University Press, 2002), his website flutehistory.com and Rachel Brown's The Early Flute (Cambridge, 2002), and on the primary sources linked in each entry. Illustrations are schematic drawings and photographs. The photographs come from public-domain or openly licensed collections (for example Wikimedia Commons and the Dayton C. Miller Flute Collection at the Library of Congress), and each one is credited.",
    it: "I testi sono sintesi originali basate su opere di riferimento, prima fra tutte The Flute di Ardal Powell (Yale University Press, 2002), il suo sito flutehistory.com e The Early Flute di Rachel Brown (Cambridge, 2002), e sulle fonti primarie indicate in ogni voce. Le illustrazioni sono disegni schematici e fotografie. Le fotografie provengono da collezioni di pubblico dominio o con licenza libera (ad esempio Wikimedia Commons e la Dayton C. Miller Flute Collection della Library of Congress), sempre con il relativo credito.",
    fr: "Les textes sont des synthèses originales fondées sur des ouvrages de référence, en premier lieu The Flute d'Ardal Powell (Yale University Press, 2002), son site flutehistory.com et The Early Flute de Rachel Brown (Cambridge, 2002), et sur les sources primaires indiquées dans chaque fiche. Les illustrations sont des dessins schématiques et des photographies. Les photographies proviennent de collections du domaine public ou sous licence libre (par exemple Wikimedia Commons et la Dayton C. Miller Flute Collection de la Library of Congress) et sont toujours créditées."
  }
};
