/*
 * RECORDINGS: flutists on wax cylinders and 78 rpm discs.
 *
 * One entry per flutist, in the order of their first recording on this page.
 *   start      year of the first recording shown (orders the page; before 1925 = "acoustic")
 *   person     id of the same player in people.js, when there is one (adds a link both ways)
 *   links      ids of repertoire / flutes / treatises to show as chips
 *   bio, listen  prose; same markup as everywhere ([[id]] links, {{key, locator}} citations)
 *   tracks     what can be played. One of:
 *                file: "assets/audio/…m4a"   copy stored on this site (Library of Congress discs only)
 *                ia: [item, file]            played from the Internet Archive, never copied
 *                src + host                  played from another archive (Phonobase), never copied
 *              plus from (credit line) and links [[label, url], …].
 *              label / matrix / disc are the edition details: they appear only under
 *              "Disc and source", not in the prose.
 *
 * Rule for storing audio here: only out-of-copyright recordings from the Library of Congress
 * National Jukebox. Everything else plays from the archive that holds it.
 * The catalogue data of every track comes from the archive record named in its credit line.
 */
window.HFP = window.HFP || {};

(function () {
  var A = "https://archive.org/";
  var LOCNOTE = "Library of Congress, National Jukebox · public domain";
  // a Library of Congress disc, copy mirrored on the Internet Archive
  function loc(n, slug) {
    return { from: LOCNOTE, links: [["Library of Congress", "https://www.loc.gov/item/jukebox-" + n + "/"], ["Internet Archive", A + "details/loc-jukebox-" + n + "-" + slug]] };
  }
  // a track played from the Internet Archive
  function ia(item, file, from) {
    return { ia: [item, file], host: "Internet Archive", from: from, links: [["Internet Archive", A + "details/" + item]] };
  }
  // a track played from Phonobase (record number and audio path as shown on its page)
  function pb(fiche, audio) {
    return { src: "https://www.phonobase.org" + audio, host: "Phonobase", from: "Phonobase, cylindres et disques anciens en ligne", links: [["Phonobase", "https://www.phonobase.org/fiche/" + fiche]] };
  }
  var SATYR = "Internet Archive, Satyr-78rpm collection";
  var CHARM = "Internet Archive, CHARM collection (ex-copyright recordings)";
  var SHELL = "Internet Archive, The Shellackophile's Vintage Recordings";
  var GREAT = "Internet Archive, Great 78 Project";
  function t(o, src) { return Object.assign({}, o, src); }
  var QIP = "Quintette Instrumental de Paris: René Le Roy, flute; Pierre Jamet, harp; René Bas, violin; Pierre Grout, viola; Roger Boulmé, cello";
  var BWV1039 = "René Le Roy and André Musset, flutes; Claude Crussard, harpsichord";
  var TELE4 = "Jean Pasquier, violin; Marcel Moyse, flute; Ruggero Gerlin, harpsichord; Étienne Pasquier, cello";
  var MOZ314 = "Marcel Moyse, flute; orchestra conducted by Piero Coppola";
  var IBERT = "Marcel Moyse, flute; orchestra conducted by Eugène Bigot";

  HFP.recordings = [
    {
      id: "rec-fontbonne",
      name: "Léon Fontbonne",
      dates: "1859–1940", place: "Paris", start: 1899,
      tagline: "Solo flutist of the Garde Républicaine, on disc in July 1899.",
      bio:
        "Léon Fontbonne was the flute soloist of the Musique de la Garde Républicaine. {{andrieux, p. 261}} In a very early solo recording of 1899 he plays *La chasse aux papillons*, a piece of his own composition dedicated to Paul Taffanel, with an unknown pianist; that record is not among the discs here. {{andrieux, p. 262}} Vincent Andrieux finds that the vibrato of the Garde Républicaine soloists, Fontbonne and the piccolo player Léon Jacquemont, is less present than Hennebains's but that their style is very close to his. {{andrieux, pp. 261–262}}\n\n" +
        "The two discs here were made in July 1899. {{phonobase, records 3933 and 15879}}",
      listen: "Compare the amount of vibrato in these discs of 1899 with Hennebains's of 1905 and 1908 and with Lafleurance's of 1905, below.",
      links: ["rec-hennebains", "rec-lafleurance"],
      tracks: [
        t({ title: "Les petits oiseaux (Urgel)", by: "Léon Fontbonne, flute", when: "July 1899", label: "Berliners' Gramophone 39165" },
          pb(3933, "/audios/AB-2007-2009/2009-03_28.mp3")),
        t({ title: "Guillaume Tell, air du ballet (Rossini)", by: "Léon Fontbonne, flute", when: "July 1899", label: "Berliners' Gramophone 39167", matrix: "3347" },
          pb(15879, "/audios/AD-2023/20231006112559.mp3"))
      ]
    },
    {
      id: "rec-lyons",
      name: "Darius Lyons",
      dates: "", place: "", start: 1901,
      tagline: "A flute solo, 1901.",
      bio:
        "The Library of Congress holds Darius Lyons's *Fantasie on American airs*, recorded for Victor on 1 June 1901. {{locjukebox, record 5729}}\n\n" +
        "He went on recording for Victor until at least 1909, as soloist with Victor's studio orchestra and in bird-song pieces such as *The Wren* and *The Nightingale*. {{locjukebox, records 126023 and 127684}}",
      listen: "A 'fantasie on airs' strings familiar tunes together with variations and runs. Listen to how each tune is decorated and where the tempo moves; the surface noise is part of the document.",
      tracks: [
        t({ title: "Fantasie on American airs", by: "Darius Lyons, flute", when: "1 June 1901", label: "Victor", matrix: "pre-matrix B-3421/1", file: "assets/audio/lyons-1901-fantasie-on-american-airs.m4a" },
          loc(5729, "fantasie-on-american-airs"))
      ]
    },
    {
      id: "rec-hennebains",
      name: "Adolphe Hennebains",
      dates: "1862–1914", place: "Paris", start: 1905,
      tagline: "Taffanel's successor at the Opéra, on disc in 1905 and 1908.",
      bio:
        "Adolphe Hennebains won his first prize at the Paris Conservatoire in 1880 in the class of Joseph Henri Altès. After being solo flute of the Pasdeloup and Lamoureux orchestras he succeeded [[taffanel|Taffanel]] as solo flute of the Société des Concerts and the Opéra, and he taught at the Conservatoire from 1909 to 1914. {{andrieux, p. 260}} Vincent Andrieux finds in his discs, and in those of the Boston flutist André Maquarre, the qualities usually associated with the French school: supple and virtuoso playing, a clear sound and the use of vibrato. {{andrieux, pp. 260–261}}\n\n" +
        "Phonobase lists five discs of his, three of 1905 and two of 1908, all of them here. {{phonobase, records 10980, 10981, 11074, 11522 and 11523}}",
      listen: "Gaubert took over Hennebains's class at the Conservatoire in 1919. {{andrieux, p. 264}} Compare Hennebains's Doppler of 1908 with Gaubert's of 1920, below.",
      links: ["taffanel", "rec-gaubert", "rec-fontbonne"],
      tracks: [
        t({ title: "Nocturne (Chopin)", by: "Adolphe Hennebains, flute", when: "1905", label: "Odeon 36084", matrix: "xP1533" },
          pb(11522, "/audios/AD-2017/20171128154958.mp3")),
        t({ title: "Valse (Chopin)", by: "Adolphe Hennebains, flute", when: "1905", label: "Odeon 36085", matrix: "xP1534-1" },
          pb(11523, "/audios/AD-2017/20171128155359.mp3")),
        t({ title: "Première pièce, romance pour flûte (Pessard)", by: "Adolphe Hennebains, flute", when: "1905", label: "Odeon 36138", matrix: "xp1567-2" },
          pb(11074, "/audios/AD-2017/2017_66.mp3")),
        t({ title: "Pastorale hongroise (Doppler)", by: "Adolphe Hennebains, flute", when: "1908", label: "Gramophone GC-39184", matrix: "5560h" },
          pb(10980, "/audios/AD-2016/2016_8500.mp3")),
        t({ title: "Mélodie op. 10 no. 5, 'Élégie' (Massenet)", by: "Adolphe Hennebains, flute", when: "1908", label: "Gramophone GC-39185", matrix: "5561h" },
          pb(10981, "/audios/AD-2016/2016_8502.mp3"))
      ]
    },
    {
      id: "rec-lafleurance",
      name: "Léopold Lafleurance",
      dates: "1865–1953", place: "Paris", start: 1905,
      tagline: "A private pupil of Taffanel, in a wind quintet of the Opéra, 1905.",
      bio:
        "Léopold Lafleurance was a private pupil of [[taffanel|Taffanel]]. He joined the Opéra in 1891 and the Société des Concerts in 1893, where he stayed until 1917, and from 1914 to 1919 he was interim professor at the Conservatoire until Gaubert was appointed. {{andrieux, p. 264}} Andrieux hears in him a very sparing use of vibrato. {{andrieux, p. 265}}\n\n" +
        "The record here, a Schubert Menuet of 1905, is played by a wind quintet of Opéra musicians put together for the occasion: Lafleurance on the flute, Georges Gillet on the oboe, and Henri Lefebvre, Ernest Vizentini and Arthur Delgrange. {{phonobase, record 11073}}",
      listen: "A chamber-music record: listen to how the flute blends with the other winds, and compare Lafleurance's sparing vibrato with Hennebains's, above.",
      links: ["taffanel", "rec-hennebains"],
      tracks: [
        t({ title: "Menuet (Schubert)", by: "Wind quintet of the Opéra: Léopold Lafleurance, flute; Georges Gillet, oboe; Henri Lefebvre, Ernest Vizentini and Arthur Delgrange", when: "1905", label: "Odeon 36250", matrix: "xp1869" },
          pb(11073, "/audios/AD-2017/2017_65.mp3"))
      ]
    },
    {
      id: "rec-fransella",
      name: "Albert Fransella",
      dates: "", place: "London", start: 1908,
      tagline: "Handel's *Sweet bird* with the soprano Ruth Vincent, 1908.",
      bio:
        "In 1908 Albert Fransella recorded Handel's aria *Sweet bird* with the soprano Ruth Vincent, with a flute obbligato beside the voice. {{locjukebox, record 1057220}}\n\n" +
        "He was the soloist in the first performance with orchestra of Reinecke's Flute Concerto, op. 283: at the Queen's Hall Promenade Concerts in London on 4 September 1909, with Henry Wood conducting. The world premiere had been given in Leipzig on 15 March 1909 by the dedicatee, Maximilian Schwedler, with a piano. {{reinecke283}}",
      listen: "In an obbligato aria the flute is a second voice. Listen for where it imitates the singer, where it answers her, and where it plays alone.",
      tracks: [
        t({ title: "Sweet bird (Handel)", by: "Ruth Vincent, soprano; Albert Fransella, flute", when: "1908", label: "Columbia", matrix: "6016/1", file: "assets/audio/fransella-1908-sweet-bird.m4a" },
          loc(1057220, "sweet-bird"))
      ]
    },
    {
      id: "rec-barrere",
      name: "Georges Barrère",
      dates: "1876–1944", place: "", start: 1913,
      tagline: "Solos of 1913 and a wind-ensemble record of 1915.",
      bio:
        "Georges Barrère won his first prize in 1895 in the class of [[taffanel|Taffanel]]. In 1894 he took part in the first performance of Debussy's *Prélude à l'après-midi d'un faune*; in 1905 he became solo flute of the New York Symphony Orchestra, and in 1910 he founded the Barrère Ensemble of Wind Instruments. {{andrieux, p. 264}}\n\n" +
        "The records here were made in 1913 (*The Swan* on 4 April; *Dance of the Blessed Spirits* and the Minuet from *L'Arlésienne* on 13 November) and in 1915 with the Barrère Ensemble. {{locjukebox, records 648576, 649401, 649405 and 651863}} The Internet Archive also holds an undated disc of him playing Bach's Sonata in E♭ with the harpsichordist Yella Pessl. {{ia78, Great 78 transfers}}",
      listen: "Compare the three solos of 1913 with the wind-ensemble record of 1915, and then with the undated Bach with harpsichord.",
      links: ["bach-bwv1031", "taffanel"],
      tracks: [
        t({ title: "The Swan (Saint-Saëns)", by: "Georges Barrère, flute", when: "4 April 1913", label: "Columbia", matrix: "38751/2", file: "assets/audio/barrere-1913-the-swan.m4a" },
          loc(648576, "the-swan")),
        t({ title: "Dance of the Blessed Spirits, from Orfeo (Gluck)", by: "Georges Barrère, flute", when: "13 November 1913", label: "Columbia", matrix: "39096/1", file: "assets/audio/barrere-1913-dance-of-the-blessed-spirits.m4a" },
          loc(649401, "dance-of-the-blessed-spirits-orfeo-danza-de-los-espiritus")),
        t({ title: "Minuet, from L'Arlésienne Suite no. 2 (Bizet)", by: "Georges Barrère, flute", when: "13 November 1913", label: "Columbia", matrix: "39097/3", file: "assets/audio/barrere-1913-arlesienne-minuet.m4a" },
          loc(649405, "l-arlesienne-suiteno-2-minuet")),
        t({ title: "Canzonetta, op. 6 (D'Ambrosio)", by: "Georges Barrère with the Barrère Ensemble of Wind Instruments", when: "30 July 1915", label: "Columbia", matrix: "45902/2", file: "assets/audio/barrere-1915-canzonetta.m4a" },
          loc(651863, "canzonetta")),
        t({ title: "Sonata in E♭ (BWV 1031), allegro moderato", by: "Georges Barrère, flute; Yella Pessl, harpsichord", when: "undated in the catalogue", label: "HMV DB 3409", disc: "side 1" },
          ia("78_sonata-no2-eb-maj-1st-mvt-allegro-moderato_pessl-yella-barrere-georges", "DB_3409_2A_010666.mp3", GREAT)),
        t({ title: "Sonata in E♭ (BWV 1031), siciliano and allegro", by: "Georges Barrère, flute; Yella Pessl, harpsichord", when: "undated in the catalogue", label: "HMV DB 3409", disc: "side 2" },
          ia("78_sonata-no2-eb-maj-2nd-mvt-siciliano-3rd-mvt-allegro_pessl-yella-barrere-g", "DB_3409_2A_010667.mp3", GREAT))
      ]
    },
    {
      id: "rec-gaubert",
      name: "Philippe Gaubert",
      dates: "1879–1941", place: "Paris", start: 1920,
      tagline: "One 78 rpm disc of March 1920.",
      bio:
        "Philippe Gaubert won his first prize in 1894 in the class of [[taffanel|Taffanel]] and was solo flute of the Opéra from 1895. In 1919 he succeeded Hennebains at the Conservatoire, where he taught the flute until 1931 and then conducting. {{andrieux, p. 264}} After Taffanel's death he completed his method, published in [[taffanel-gaubert|1923]]. {{powell2002, ch. 11}}\n\n" +
        "The disc here was made in Paris on 3 March 1920: Debussy's *Le petit berger* and the *Variations from the ballet Ascanio* by Saint-Saëns on one side, Doppler's *Fantaisie pastorale hongroise* on the other. {{ia78, Satyr-78rpm notes}}",
      listen: "Andrieux finds that Gaubert's ample, generous vibrato sounds strangely 'modern' to our ears, and that his contemporaries often saw him as Taffanel's worthy heir. {{andrieux, p. 265}} The method he completed in 1923 still forbade vibrato in Bach and the classics, since continuous vibrato is a 20th-century habit. {{brown2002, pp. 111–115}}",
      links: ["taffanel-gaubert", "taffanel", "rec-hennebains", "rec-moyse"],
      tracks: [
        t({ title: "Le petit berger (Debussy); Variations from the ballet Ascanio (Saint-Saëns)", by: "Philippe Gaubert, flute, with piano", when: "3 March 1920", label: "Disque pour Gramophone W 380", matrix: "03328v", disc: "side 1" },
          ia("2-gaubert-philippe-dpg-w-380-1920", "1 Gaubert Philippe - DPG W 380 1920.mp3", SATYR)),
        t({ title: "Fantaisie pastorale hongroise (Doppler)", by: "Philippe Gaubert, flute, with piano", when: "3 March 1920", label: "Disque pour Gramophone W 380", matrix: "03330v", disc: "side 2" },
          ia("2-gaubert-philippe-dpg-w-380-1920", "2 Gaubert Philippe - DPG W 380 1920.mp3", SATYR))
      ]
    },
    {
      id: "rec-murchie",
      name: "Robert Murchie",
      dates: "", place: "London", start: 1924,
      tagline: "Bach's Orchestral Suite in B minor, January 1924.",
      bio:
        "On 20 January 1924, in a studio in Petty France, London, Robert Murchie recorded Bach's Orchestral Suite no. 2 in B minor ([[bach-bwv1067]]) with an orchestra conducted by Sir Hamilton Harty. The Ouverture is abridged to fit one side, missing 64 of the 178 bars of the fast section and the return of the slow one; the other movements are complete but for some repeats. {{ia78, Shellackophile's transfer notes}}",
      listen: "Notice the tempi, the cuts that four 78 rpm sides impose, and how much vibrato you hear: Taffanel and Gaubert's method, a year earlier, still forbade it in Bach. {{brown2002, pp. 111–115}}",
      links: ["bach-bwv1067"],
      tracks: [
        t({ title: "Orchestral Suite no. 2 in B minor, BWV 1067 (all seven movements)", by: "Robert Murchie, flute; orchestra conducted by Sir Hamilton Harty", when: "20 January 1924", label: "Columbia L 1557–1558", matrix: "AX 319-1 to AX 322-1", disc: "4 sides" },
          ia("l-1557-8-bach-suite-in-b-minor", "L1557-8 Bach Suite in B minor.mp3", SHELL))
      ]
    },
    {
      // Undated: placed at the end of the acoustic era because the transfer notes say "acoustic".
      id: "rec-schwedler",
      name: "Maximilian Schwedler",
      dates: "1853–1940", place: "Leipzig", start: 1924,
      tagline: "One disc credited to Maximilian Schwedler, flute solo; whether he is the Leipzig flutist is still to be verified.",
      bio:
        "Maximilian Schwedler won the audition for an additional solo flute at the Leipzig Gewandhaus in September 1881 and stayed until 1917; he also taught at the Leipzig Conservatory. He rejected the cylindrical Boehm flute and, with the maker Wilhelm Kruspe, developed the Schwedler-Kruspe flute (1885) and then the German [[reform-flute|Reform flute]] (1898). {{reinecke283, p. 1}} Reinecke dedicated his Flute Concerto, op. 283, to him, and Schwedler gave its world premiere in Leipzig on 15 March 1909 ([[reinecke-flute-concerto]]). {{reinecke283, p. 2}}\n\n" +
        "The disc here is labelled 'Mr. Maximilian Schwedler, flute solo' and has *Rondo burlesco* on one side and *May Time (Variations)* on the other. {{ia78, Great 78 transfers}} The label does not say that he is the Leipzig flutist, and the disc is undated (the transfer notes say it is acoustic and from Germany), so the identification still has to be verified. {{?}}",
      listen: "If the disc is his, it lets us hear a flutist of the German school, which kept the conical-bore flute against the Boehm flute of the French school heard above. {{reinecke283, p. 1}}",
      links: ["schwedler", "reform-flute", "reinecke-flute-concerto"],
      tracks: [
        t({ title: "Rondo burlesco", by: "Maximilian Schwedler, flute solo", when: "undated in the catalogue", label: "Excelophone 8616", matrix: "3084", disc: "side 1" },
          ia("78_rondo-burlesco_mr-maximilian-schwedler_gbia3014522a", "Rondo Burlesco - Mr. Maximilian Schwedler.mp3", GREAT)),
        t({ title: "May Time (Variations)", by: "Maximilian Schwedler, flute solo", when: "undated in the catalogue", label: "Excelophone 8616", matrix: "3085", disc: "side 2" },
          ia("78_may-time-variations_mr-maximilian-schwedler_gbia3014522b", "May Time (Variations) - Mr. Maximilian Schwedler.mp3", GREAT))
      ]
    },
    {
      id: "rec-amadio",
      name: "John Amadio",
      dates: "1883–1964", place: "Christchurch (NZ) → Melbourne → London", start: 1926,
      tagline: "A concertino in 1926 and Mozart in 1927.",
      bio:
        "John Amadio was born in Christchurch, New Zealand, and went to Australia with his family in 1900. He was principal flutist of Melba's orchestra on her Australian tour of 1911, moved to England in 1918, played in the Hallé Orchestra and toured with Tetrazzini and with the soprano Florence Austral, whom he married in 1925. {{ia78, Satyr-78rpm notes}} In the 20th century he played a [[flute-damour|flûte d'amour]] fitted with Radcliff's mechanism. {{brown2002, pp. 33, 35}}\n\n" +
        "The recordings here are from 3 September 1926 and 1 December 1927. {{ia78, CHARM and Satyr-78rpm}}",
      listen: "The finale of the Mozart is taken at what the transferor calls a very fast tempo. {{ia78, Satyr-78rpm notes}} Compare it with Moyse's Mozart of 1930, below.",
      links: ["flute-damour", "rec-moyse"],
      tracks: [
        t({ title: "Concertino, op. 107 (Chaminade)", by: "John Amadio, flute", when: "3 September 1926", label: "HMV C 1302", matrix: "Cc 8937-2" },
          ia("78_concertino-op107_amadio-john", "C_1302_Cc_8937-2.mp3", CHARM)),
        t({ title: "Flute Concerto in D, K. 314 (Mozart; originally for oboe): 2nd and 3rd movements", by: "John Amadio, flute; orchestra conducted by Lawrance Collingwood (not named on the label)", when: "1 December 1927", label: "HMV C 1533", matrix: "CR 1605-1 / 1604-1", disc: "2 sides" },
          ia("amadio-john-hmv-c-1533-mozart-1927", "Amadio Collingwood - HMV C 1533 Mozart 1927.mp3", SATYR))
      ]
    },
    {
      id: "rec-moyse",
      name: "Marcel Moyse",
      dates: "1889–1984", place: "Paris", start: 1930, person: "moyse",
      tagline: "From Mozart in 1930 to the first recording of Ibert's Concerto and early-music records of 1935.",
      bio:
        "Trained at the Paris Conservatoire with [[taffanel|Taffanel]], Hennebains and [[rec-gaubert|Gaubert]], Marcel Moyse became one of the most recorded flutists of the 78 rpm era. {{powell2002, chs. 11–12; wye1993; mccutchan1994}} The discs here date from 1930 to 1935.\n\n" +
        "On 28 March 1930 he recorded Mozart's Concerto in D, K. 314, with an orchestra conducted by Piero Coppola. {{ia78, Satyr-78rpm notes}} On 2 December 1935 came the first recording of [[ibert-concerto|Ibert's Concerto]], written for him in 1932–33, with Eugène Bigot conducting. {{ia78, Satyr-78rpm notes}}\n\n" +
        "In 1935 he also played two sets for L'Anthologie Sonore, the record series for early music founded in 1933 by the musicologist Curt Sachs: a Blavet sonata with Pauline Aubert at the harpsichord, and a Telemann quartet with Jean Pasquier, Ruggero Gerlin and Étienne Pasquier. {{ia78, Satyr-78rpm notes}} The series set out to present medieval, Renaissance and Baroque music in performances based on the musicology of the time. {{ia78, Satyr-78rpm notes}}",
      listen: "Listen first to the Mozart and the Ibert, then to the two Anthologie Sonore sets: the same player in two different worlds, and a reminder that early-music records were already being made in 1935.",
      links: ["moyse", "ibert-concerto", "blavet-op2", "rec-gaubert", "rec-amadio"],
      tracks: [
        t({ title: "Flute concerto no. 2 in D, K. 314 (Mozart): 1. allegro aperto", by: MOZ314, when: "28 March 1930", label: "Disque Gramophone L 835–836", matrix: "CF 3111-1 to 3114-1" },
          ia("1-moyse.-coppola-mozart-flute-conc-2-kv-314-mov-1", "1 Moyse. Coppola - Mozart Flute conc 2 KV 314 mov 1.mp3", SATYR)),
        t({ title: "K. 314: 2. adagio non troppo", by: MOZ314, when: "28 March 1930", label: "Disque Gramophone L 835–836" },
          ia("1-moyse.-coppola-mozart-flute-conc-2-kv-314-mov-1", "2 Moyse. Coppola - Mozart Flute conc 2 KV 314 mov 2.mp3", SATYR)),
        t({ title: "K. 314: 3. rondo, allegretto", by: MOZ314, when: "28 March 1930", label: "Disque Gramophone L 835–836" },
          ia("1-moyse.-coppola-mozart-flute-conc-2-kv-314-mov-1", "3 Moyse. Coppola - Mozart Flute conc 2 KV 314 mov 3.mp3", SATYR)),
        t({ title: "Flute Concerto (Ibert): 1", by: IBERT, when: "2 December 1935", label: "Disque Gramophone L 1013–1014" },
          ia("02-moyse-bigot-ibert-dg-l-1013-4", "01 Moyse, Bigot - Ibert DG L 1013-4.mp3", SATYR)),
        t({ title: "Flute Concerto (Ibert): 2", by: IBERT, when: "2 December 1935", label: "Disque Gramophone L 1013–1014" },
          ia("02-moyse-bigot-ibert-dg-l-1013-4", "02 Moyse, Bigot - Ibert DG L 1013-4.mp3", SATYR)),
        t({ title: "Flute Concerto (Ibert): 3", by: IBERT, when: "2 December 1935", label: "Disque Gramophone L 1013–1014" },
          ia("02-moyse-bigot-ibert-dg-l-1013-4", "03 Moyse, Bigot - Ibert DG L 1013-4.mp3", SATYR)),
        t({ title: "Sonata no. 2 'La Vibray' for flute and harpsichord (Blavet)", by: "Marcel Moyse, flute; Pauline Aubert, harpsichord", when: "1935", label: "L'Anthologie Sonore 9", matrix: "AS 23/24" },
          ia("as-09-marcel-moyse-pauline-aubert-michel-blavet_202112", "AS 09 Marcel Moyse, Pauline Aubert - Michel Blavet.mp3", SATYR)),
        t({ title: "Quartet in E minor, from Tafelmusik (Telemann): adagio", by: TELE4, when: "1935", label: "L'Anthologie Sonore 26", matrix: "AS 60/61" },
          ia("04-telemann-quartet-in-e-allegro", "AS 26 A 1 Telemann - Quartet in e - adagio.mp3", SATYR)),
        t({ title: "Telemann quartet: allegro", by: TELE4, when: "1935", label: "L'Anthologie Sonore 26" },
          ia("04-telemann-quartet-in-e-allegro", "AS 26 A 2 Telemann - Quartet in e - allegro.mp3", SATYR)),
        t({ title: "Telemann quartet: dolce", by: TELE4, when: "1935", label: "L'Anthologie Sonore 26" },
          ia("04-telemann-quartet-in-e-allegro", "AS 26 B 3 Telemann - Quartet in e - dolce.mp3", SATYR)),
        t({ title: "Telemann quartet: allegro", by: TELE4, when: "1935", label: "L'Anthologie Sonore 26" },
          ia("04-telemann-quartet-in-e-allegro", "AS 26 B 4 Telemann - Quartet in e - allegro.mp3", SATYR))
      ]
    },
    {
      id: "rec-leroy",
      name: "René Le Roy",
      dates: "1898–1985", place: "Paris", start: 1933,
      tagline: "Founder of the Quintette Instrumental de Paris, heard in d'Indy in 1933 and in Bach with harpsichord in 1937.",
      bio:
        "René Le Roy was born at Maisons-Laffitte and studied at the Paris Conservatoire with Adolphe Hennebains, Léopold Lafleurance and Philippe Gaubert. In 1922 he founded the Quintette Instrumental de Paris (flute, harp and string trio), for which Vincent d'Indy, Albert Roussel and other composers wrote. {{ia78, Satyr-78rpm notes}}\n\n" +
        "On 25 May 1933 the Quintette recorded in London d'Indy's *Suite en parties*, op. 91, written for it. {{ia78, Satyr-78rpm notes}} In November 1937 Le Roy and the flutist André Musset recorded Bach's Sonata in G, BWV 1039, in Paris with the harpsichordist Claude Crussard for the Ars Rediviva series. {{ia78, Satyr-78rpm notes}}",
      listen: "Two chamber-music worlds: the new music written for the Quintette in 1933, and the Bach trio sonata with harpsichord four years later. Compare the Bach with Moyse's early-music records of 1935, above.",
      links: ["bach-bwv1039", "rec-moyse"],
      tracks: [
        t({ title: "Suite en parties, op. 91 (d'Indy): entrée en sonate", by: QIP, when: "25 May 1933", label: "HMV DB 2010–2011", matrix: "2B 6564-2" },
          ia("1-quintette-instr-de-paris-scarlatti-hmv-e-608-9-1929", "2 Quintette Instr de Paris - D'Indy op 91 HMV DB 2009-10 1933.mp3", SATYR)),
        t({ title: "Suite en parties: air désuet", by: QIP, when: "25 May 1933", label: "HMV DB 2010–2011", matrix: "2B 6565-1" },
          ia("1-quintette-instr-de-paris-scarlatti-hmv-e-608-9-1929", "3 Quintette Instr de Paris - D'Indy op 91 HMV DB 2009-10 1933.mp3", SATYR)),
        t({ title: "Suite en parties: sarabande", by: QIP, when: "25 May 1933", label: "HMV DB 2010–2011", matrix: "2B 6566-2" },
          ia("1-quintette-instr-de-paris-scarlatti-hmv-e-608-9-1929", "4 Quintette Instr de Paris - D'Indy op 91 HMV DB 2009-10 1933.mp3", SATYR)),
        t({ title: "Suite en parties: farandole variée", by: QIP, when: "25 May 1933", label: "HMV DB 2010–2011", matrix: "2B 6567-2" },
          ia("1-quintette-instr-de-paris-scarlatti-hmv-e-608-9-1929", "5 Quintette Instr de Paris - D'Indy op 91 HMV DB 2009-10 1933.mp3", SATYR)),
        t({ title: "Sonata in G, BWV 1039: adagio", by: BWV1039, when: "November 1937", label: "Ars Rediviva, BAM 11–12" },
          ia("06-ars-rediviva-bam-24-part-1437-2-1438-2-handel-1937", "02 Ars Rediviva - BAM 11-12 Bach son G BWV 1039 1937 mov 1.mp3", SATYR)),
        t({ title: "BWV 1039: allegro ma non troppo", by: BWV1039, when: "November 1937", label: "Ars Rediviva, BAM 11–12" },
          ia("06-ars-rediviva-bam-24-part-1437-2-1438-2-handel-1937", "03 Ars Rediviva - BAM 11-12 Bach son G BWV 1039 1937 mov 2.mp3", SATYR)),
        t({ title: "BWV 1039: adagio e piano", by: BWV1039, when: "November 1937", label: "Ars Rediviva, BAM 11–12" },
          ia("06-ars-rediviva-bam-24-part-1437-2-1438-2-handel-1937", "04 Ars Rediviva - BAM 11-12 Bach son G BWV 1039 1937 mov 3.mp3", SATYR)),
        t({ title: "BWV 1039: presto", by: BWV1039, when: "November 1937", label: "Ars Rediviva, BAM 11–12" },
          ia("06-ars-rediviva-bam-24-part-1437-2-1438-2-handel-1937", "05 Ars Rediviva - BAM 11-12 Bach son G BWV 1039 1937 mov 4.mp3", SATYR))
      ]
    }
  ];

  /* Flutists of the period who were not recorded ({ text, links }), and further reading. */
  HFP.recordingsExtra = {
    unavailable: [
      { text: "Paul Taffanel (1844–1908), the founder of the French school: no sound recording of him seems to exist. He probably took part in a recording session with Thomas Edison at the Exposition Universelle of 1889, but no cylinder has been found. {{andrieux, p. 266 n. 46}}" },
      { text: "Charles Molé (1857–1905), one of the first French flutists in an American orchestra: no sound trace of him exists. {{andrieux, p. 261}}" }
    ],
    further: ["nelson2006"]
  };
})();
