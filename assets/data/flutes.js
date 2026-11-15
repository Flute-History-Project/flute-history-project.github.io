/*
 * FLUTES
 * Each entry: id (unique across the whole site), name, start/end (years, used for
 * ordering and the Flute Map), origin, tagline, features, description, drawing.
 * Write [[id]] or [[id|text]] inside any text to link to another entry.
 * Text fields can be a plain string (English) or { en: "...", fr: "...", it: "..." }.
 * "Possible repertoire" on each flute is built ONLY from the `flutes` field of the
 * repertoire entries, so a piece mentioned in the text is not automatically "playable".
 */
window.HFP = window.HFP || {};
var FH = "http://www.flutehistory.com/";
HFP.flutes = [
  {
    id: "fife",
    short: "Fife (military flute)",
    name: "Fife (military flute)",
    start: 1476, end: 1850,
    origin: "Switzerland, then all of Europe",
    tagline: "Flute and drum: the signalling instrument of Renaissance infantry.",
    features: [
      "Short, narrow, shrill-toned cylindrical flute",
      "Six or more finger holes, no keys",
      "Played with the drum to signal troop movements",
      "Replaced by the bugle in the 19th century"
    ],
    description:
      "After Swiss infantry defeated the Burgundian cavalry in 1476, their use of flute and drum to direct a disciplined, mobile formation was copied across Europe. At first no distinction was made between 'flute' and 'fife': the earliest printed instructions for the transverse flute, in [[virdung-1511|Virdung]]'s book of 1511, describe only its military role.\n\n" +
      "By the end of the 16th century the fife had become a distinct, short and shrill instrument, and the fife-and-drum band stayed a military emblem until the bugle took over in the 19th century. The earliest military flutist known by name is [[anthony-dornstatt|Anthony of Dornstätt]], fifer to Emperor Maximilian I.",
    curio: "The Pope's Swiss Guard, founded in 1506, replaced its fifes with bugles only in 1814.",
    drawing: { joints: 1, keys: 0, bore: "cylindrical", material: "boxwood", rings: false, length: 0.55 },
    sources: [{ label: "flutehistory.com: Military flutes", url: FH + "Instrument/Military.php3" }],
    image: { src: "assets/img/hfp/fife-cahusac.jpg", caption: "Fife by Thomas Cahusac senior, London, c. 1780", credit: "The Metropolitan Museum of Art · CC0", url: "https://commons.wikimedia.org/wiki/File:Fife_MET_DP109496.jpg" },
    links: []
  },
  {
    id: "renaissance-flute",
    short: "Renaissance flute",
    name: "Renaissance flute",
    start: 1500, end: 1650,
    origin: "France, Germany, Italy, England",
    tagline: "Keyless and cylindrical, played in four-part consorts of different sizes.",
    features: [
      "One piece, cylindrical bore",
      "Six finger holes and no keys",
      "Built in families: bass, tenor/alto and descant",
      "Played mostly in the upper part of its range, where the tone is even and pure"
    ],
    description:
      "The transverse flute of the 16th century was a simple tube of boxwood or fruitwood with a cylindrical bore, a small embouchure hole and six finger holes. It had no keys at all: chromatic notes came from cross-fingerings.\n\n" +
      "In art music it was played in families of different sizes, usually in four-part consort music, often transposed to suit the instruments. Consorts were a favourite pastime of cultivated amateurs as well as professionals; Henry VIII even kept a royal flute consort, almost certainly playing instruments by the [[bassano|Bassano]] family. [[agricola-1529|Martin Agricola]] gives fingering charts for each size, and more surviving flutes come from the [[rafi|Rafi]] workshop in Lyon than from any other maker. In the early 17th century the flute also joined mixed consorts with strings and appeared in sacred music, often on an inner part.",
    curio: "In the 16th century the transverse flute was widely called the 'German flute' (flûte d'Allemand, Querpfeiff), because it first became known in German lands. In England the name lasted until the 18th century.",
    drawing: { joints: 1, keys: 0, bore: "cylindrical", material: "boxwood", rings: false, length: 0.92 },
    wiki: "Renaissance flute",
    sources: [{ label: "flutehistory.com: Renaissance flutes", url: FH + "Instrument/Renaissance.php3" }],
    image: { src: "assets/img/hfp/renaissance-flute.jpg", caption: "Tenor Renaissance flute, modern copy by Martin Wenner", credit: "Photo Tamie49 · CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Renaissance_Flute.jpg" },
    links: []
  },
  {
    id: "hotteterre-flute",
    short: "Three-piece traverso",
    name: "Baroque three-piece flute (Hotteterre type)",
    start: 1670, end: 1725,
    origin: "France, the Netherlands",
    tagline: "The flute reinvented for solo music: conical, jointed, with a single key.",
    features: [
      "Three joints: head, body and foot",
      "Conical bore, narrowing towards the foot: stronger low notes",
      "One key, for D♯/E♭",
      "Turned ivory rings; usually at low French pitch (around a′ = 392 Hz)"
    ],
    description:
      "The new solo music of the 17th century asked for a flute with more individual character: a stronger low register and the ability to play loud and soft, like a voice. Makers found that narrowing the bore towards the foot strengthened the low notes and let the second octave use the same fingerings as the first. A key for E♭ evened out that note, and building the flute in three joints made it easier to manufacture.\n\n" +
      "The earliest surviving examples come from the Netherlands, but the new flute first appears in the hands of musicians at the court of Louis XIV. There it was heard in intimate chamber concerts, playing ornamented airs with voices and lutes, and was prized as a sweet, tender instrument for expressing love. The [[hotteterre|Hotteterre]] family is closely associated with it, and [[hotteterre-principes|Hotteterre's Principes]] (1707) was written for it.\n\n" +
      "The key for E♭ did more than add one note: for the first time it made the flute fully chromatic over about two and a half octaves. The scale of D major comes from simply lifting the fingers one by one; most other notes need forked (cross) fingerings, a softer breath and more of the embouchure hole covered, which gives them a veiled colour. So each key has its own character, and composers used it. Even so, early composers were not afraid of remote keys: Hotteterre's preludes, Telemann's Fantasias and Schickhardt's *L'Alphabet de la Musique* travel through all or most of them.\n\n" +
      "Combined with the low French pitch (about a′ = 392–400) and the low writing of the early French repertoire, these flutes have a deep, dark voice. The music rarely goes above d‴ or e‴, and on many one-keyed flutes the high f‴ was hardly obtainable at all. Copies after Hotteterre, Naust, Rippert or [[rottenburgh|Rottenburgh]] are the natural choice for this music today; played at a higher pitch on a later flute it loses much of its depth.",
    curio: "The frontispiece of Hotteterre's Principes shows a player with a three-joint flute that has decorative details found only on the 'Hotteterre' type. It is usually thought to be a portrait of the author.",
    drawing: { joints: 3, keys: 1, bore: "conical", material: "boxwood", rings: true, length: 0.86 },
    wiki: "Baroque flute",
    sources: [{ label: "flutehistory.com: Seventeenth-century flutes", url: FH + "Instrument/17C.php3" }, BROWN],
    image: { src: "assets/img/hfp/d-hotteterre-flute.jpg", caption: "The one-keyed flute shown in Hotteterre's Principes (1707)", credit: "H. M. Fitzgibbon, The Story of the Flute (1914) · public domain", url: "https://commons.wikimedia.org/wiki/File:Hotteterre%27s_Flute_(pg_31,_The_Story_of_the_Flute,_1914).png" },
    links: []
  },
  {
    id: "baroque-four-piece",
    short: "Four-piece traverso",
    name: "Baroque four-piece flute (traverso)",
    start: 1720, end: 1780,
    origin: "Across Europe",
    tagline: "The classic traverso of Bach, Telemann, Blavet and Quantz, with interchangeable joints for different pitches.",
    features: [
      "Four joints: the middle joint is split in two",
      "Corps de rechange: alternative upper joints for different pitches",
      "One key (two on Quantz's model, separating D♯ and E♭)",
      "Plays best in keys like G major, D major and E minor; modern copies usually at a′ = 415 Hz"
    ],
    description:
      "By the 1720s the long middle joint was split in two. This let makers supply each flute with a set of interchangeable upper joints of different lengths (the *corps de rechange*), so that one instrument could play at the many pitches in use across Europe. Workshops in London, Paris, Amsterdam, Nuremberg and many other cities produced it as the flute became fashionable.\n\n" +
      "This is the classic 'traverso' of the high Baroque. Professional players such as [[quantz|Quantz]] and [[blavet|Blavet]] travelled as soloists, while most published music stayed in easy keys for amateurs. Quantz added a second key so that D♯ and E♭ could be tuned differently, but most players kept the one-keyed model. Makers such as [[thomas-lot|Thomas Lot]] in Paris, [[palanca|Carlo Palanca]] in Turin and [[denner|Jacob Denner]] in Nuremberg built instruments that are still copied today, and Quantz's [[quantz-versuch|Versuch]] is the essential guide to playing it.\n\n" +
      "A flute usually came with three to seven *corps de rechange*, the highest and lowest normally within a semitone of each other. Changing pitch was the travelling flutist's daily headache, so makers added other adjustable parts: a movable cork with a screw cap, a tuning slide in the head (introduced by [[quantz-flute|Quantz]]) and a telescopic 'register' in the foot. Quantz himself disliked the register. Today some makers sell one flute with joints for a′ = 392, 415 and 440, but changing a third of the bore and only three of the holes upsets the tuning: a separate flute is often easier.\n\n" +
      "Many players of the time used a flexible mean-tone tuning, with sharps slightly lower than flats and pure (low) major thirds. On the flute, sharp keys sound bright and flat keys thinner and more veiled, and J. S. Bach used these colours like a painter: the cross-fingered G♯s of the *Esurientes* in the Magnificat sparkle, while the low F minor of *Zerfliesse, mein Herze* in the St John Passion sounds weak and grieving. Bach also used the whole compass, up to a‴ in the [[bach-bwv1013|Partita]].\n\n" +
      "From the 1720s some makers extended the foot down to c′. A Denner flute with alternative d′ and c′ feet is thought to be the earliest surviving example; in London, John Mason advertised his 'new' c′ foot in 1756, but the successors of Stanesby and Schuchart protested that their masters had made them twenty and thirty years earlier.",
    curio: "A single flute could be sold with several spare middle joints. The flutist chose one according to the pitch of the harpsichord or organ that evening.",
    tips: "For the German high Baroque, a model after [[denner|Denner]] or a later Rottenburgh at a′ = 415 is an excellent choice. Copies after Grenser have become the all-purpose 'Bach flute', but they are really early classical flutes, better suited to Haydn and Mozart. When trying a flute, check that G, A, B and D are in tune in both octaves, then test the forked notes and how far they can be lipped down.",
    drawing: { joints: 4, keys: 1, bore: "conical", material: "boxwood", rings: true, length: 0.86 },
    wiki: "Baroque flute",
    sources: [{ label: "flutehistory.com: Baroque flutes", url: FH + "Instrument/Baroque.php3" }, BROWN],
    image: { src: "assets/img/hfp/flutes-oberlender.jpg", caption: "Pair of ivory one-keyed flutes by Johann Wilhelm Oberlender the elder, Nuremberg, mid-18th century", credit: "The Metropolitan Museum of Art · CC0", url: "https://commons.wikimedia.org/wiki/File:Pair_of_Transverse_Flutes_MET_DP167855.jpg" },
    links: []
  },
  {
    id: "classical-keyed-flute",
    short: "Classical flute",
    name: "Classical flute (one to eight keys)",
    start: 1750, end: 1830,
    origin: "London, Saxony, Paris, Vienna",
    tagline: "Slimmer and brighter than the baroque flute; from the 1780s, increasingly fitted with extra keys.",
    features: [
      "Narrower bore and smaller tone than the baroque flute",
      "Tuned to favour sharp keys (D, A, E major)",
      "One key, or four to eight keys (B♭, G♯, F, long F, C♯, C…)",
      "Often a longer foot joint down to c′"
    ],
    description:
      "A new, more brilliant style of playing appeared after about 1750, as the concerto and the symphony became the leading forms. Flutes became slimmer and brighter: [[grenser|Grenser]]'s one-keyed flutes from Dresden, for example, have a smaller tone than baroque models and favour sharp keys. This one-keyed classical flute was still the normal instrument on the Continent for Mozart's generation.\n\n" +
      "In parallel, London makers in the late 1750s began adding keys and increasing the bore taper to strengthen the low register. The keyed flute caught on with a few English players but spread on the Continent only some thirty years later, helped by [[tromlitz|Tromlitz]], whose own design was praised for its brilliant, perfectly tuned sound. By about 1800 nearly all professionals used keyed flutes, with distinct national types. [[potter|Potter]] in London and Grenser in Dresden set the standard, and the keys did not replace cross-fingerings: players combined both.\n\n" +
      "Why add keys at all? The loud, fast, dramatic *Sturm und Drang* style liked flat keys, where the one-keyed flute was weakest, and it needed a wider dynamic range and a reliable top f‴. Closed keys for B♭, G♯, F and C, added to the old E♭ key, gave every chromatic note its own hole. The combinations were never standardised: the commonest were four keys, six keys (with a long F, or with a foot to c′) and eight keys. Some passages still could not be played smoothly, above all D or E♭ to F to A♭, which turns up surprisingly often in the orchestral solos of J. C. Bach; [[nicholson|Nicholson]] simply advised rewriting such passages.\n\n" +
      "Mozart's concertos and quartets can be played on a one-keyed flute if its f‴ is good, and his chromatic lines thrive on the contrast of strong and veiled notes; others prefer a six- or eight-keyed flute for evenness. The Flute and Harp Concerto K. 299, however, goes down to c′: it was written for the Comte de Guines, a former envoy in London, who very probably played an English flute. In France keys came late: the four-keyed flute was taught at the Paris Conservatoire only from 1804. French flutes of the period had narrow bores that made the extreme top easy, which suited the high, brilliant parts of Rossini and Cherubini.\n\n" +
      "Beethoven wanted every dynamic and every kind of attack on every note; a flute with at least six keys and long F and C keys suits his music. His normal top note was a‴: he used b♭‴ once in the Eighth Symphony and carefully avoided it in the Ninth, which forced awkward leaps that modern players sometimes rewrite. Schubert, writing his Second Symphony, put high b♭‴s everywhere, perhaps unaware how hard they were to play.",
    curio: "Many players were sceptical about keys, fearing that extra holes would spoil the tone. Tromlitz spent a whole book (1800) arguing the opposite.",
    tips: "Six- or eight-keyed copies after Heinrich Grenser at a′ = 430 are the standard classical flute today, but they say nothing of the variety of English, French and German flutes. Models after [[potter|Potter]], Kirst or [[tromlitz|Tromlitz]] are worth trying, and original 19th-century flutes are often cheaper than copies.",
    drawing: { joints: 4, keys: 6, bore: "conical", material: "boxwood", rings: true, length: 0.92, foot: "c" },
    wiki: "Classical flute",
    sources: [{ label: "flutehistory.com: The Classical flute", url: FH + "Instrument/Classical.php3" }, BROWN],
    image: { src: "assets/img/hfp/flute-kirst.jpg", caption: "One-keyed flute with three spare middle joints (corps de rechange) by F. G. A. Kirst, Potsdam, c. 1795", credit: "The Metropolitan Museum of Art · CC0", url: "https://commons.wikimedia.org/wiki/File:Transverse_Flute_MET_DP120668.jpg" },
    links: []
  },
  {
    id: "viennese-flute",
    short: "Viennese flute",
    name: "Viennese flute",
    start: 1800, end: 1870,
    origin: "Vienna",
    tagline: "A conical keyed flute with a penetrating tone and a foot reaching down to the violin's low G.",
    features: [
      "Conical bore with many keys",
      "Long foot joint, often extending to low B or even G",
      "Penetrating, focused tone",
      "Played by amateurs and by orchestral professionals"
    ],
    description:
      "In early 19th-century Vienna, flutists favoured a conical keyed flute with a penetrating tone and, often, an extended foot reaching down to the violin's G. These instruments were played by amateurs and soloists alike and were heard in first performances of symphonies by Beethoven and others.\n\n" +
      "Viennese workshops such as [[koch|Stephan Koch]] and [[ziegler|Johann Joseph Ziegler]] supplied bands and orchestras far beyond Austria. After about 1850 the model merged with northern German designs into the [[german-keyed-flute|Meyer-type flute]].",
    drawing: { joints: 4, keys: 8, bore: "conical", material: "boxwood", rings: true, length: 1.0, foot: "c" },
    sources: [{ label: "flutehistory.com: Nineteenth-century flutes", url: FH + "Instrument/19C.php3" }],
    links: []
  },
  {
    id: "english-flute",
    short: "English 'Nicholson' flute",
    name: "English 'Nicholson's Improved' flute",
    start: 1820, end: 1880,
    origin: "London",
    tagline: "Large holes and a big embouchure for a powerful tone. It was this sound that set Boehm thinking.",
    features: [
      "Enlarged embouchure and tone holes",
      "Powerful tone, still capable of delicacy",
      "Foot to low C; plays best in flat keys (E♭, A♭, F minor)",
      "Suited to 'glides' and finger vibrato, fashionable ornaments of the time"
    ],
    description:
      "The London virtuoso [[nicholson|Charles Nicholson]] played a flute whose embouchure and tone holes his father had enlarged. Nicholson explained the advantages himself: a more powerful but still delicate tone, the usual fingerings in the third octave, smoother glides, and a clearer finger vibrato.\n\n" +
      "Once his style became the fashion, he licensed his name to London makers, who sold flutes stamped 'Nicholson's Improved', and firms such as [[rudall-rose|Rudall & Rose]] also built large-holed English flutes. Their big sound made a deep impression on [[boehm|Boehm]] in 1831 and led directly to his new flutes.\n\n" +
      "England had taken to keys early, and the many English patents of the time (pewter plugs instead of leather pads, screw caps linked to tuning slides) and the flood of new tutors show how many makers and amateurs there were. Nicholson's own flutes were built to his design by Prowse. Large-holed, thick-walled English flutes could be both delicate and very powerful: when Mendelssohn conducted the *Midsummer Night's Dream* in London, he had the flutist Ribas play the Scherzo solo three times, apparently never having realised how well it could sound.",
    curio: "Nicholson is usually said to have enlarged the holes himself, but the modifications were in fact made by his father, also a well-known flutist.",
    drawing: { joints: 4, keys: 8, bore: "conical", material: "grenadilla", rings: true, length: 0.95, foot: "c" },
    sources: [{ label: "flutehistory.com: Charles Nicholson", url: FH + "Players/Charles_Nicholson/index.php3" }, BROWN],
    image: { src: "assets/img/hfp/flute-nicholson.jpg", caption: "Flute in C that belonged to [[nicholson|Charles Nicholson]], c. 1832", credit: "Library of Congress, Dayton C. Miller Collection · public domain", url: "https://commons.wikimedia.org/wiki/File:Flute_in_C_belonging_to_Charles_Nicholson.jpg" },
    links: []
  },
  {
    id: "boehm-1832",
    short: "Boehm 1832 flute",
    name: "Boehm ring-key flute (1832)",
    start: 1832, end: 1860,
    origin: "Munich, then Paris and London",
    tagline: "Tone holes placed by acoustics rather than by the fingers: a new fingering system.",
    features: [
      "Conical bore, still made of wood",
      "Tone holes larger and placed for acoustic correctness",
      "Open-standing keys and ring keys linked by rod-axles",
      "Completely new fingering system"
    ],
    description:
      "On a visit to London in 1831, [[boehm|Theobald Boehm]] (until then a player of eight-keyed flutes) heard the huge tone of [[nicholson|Charles Nicholson]]. He built an experimental flute in which linked rod-axles let the fingers control holes placed beyond their reach. Back in Munich he refined it into the conical wooden 'ring-key' flute of 1832.\n\n" +
      "Because it was not patented, others copied it freely: Godfroy & [[lot|Lot]] made the first French commercial model in 1837. A few prominent players took it up in Paris from 1838, among them [[dorus|Louis Dorus]], and in London from 1840, and it was officially adopted at the Brussels Conservatoire. Critics found it more like a trumpet than a flute, and the Paris Conservatoire rejected it in 1839–40, largely because of [[tulou|Tulou]]'s opposition. It opened the way to the [[boehm-1847|cylindrical flute of 1847]].\n\n" +
      "The principle was new: holes of equal size at acoustically correct distances, worked by linked ring keys in both hands, which did away with most of the old cross-fingerings. Boehm also placed touch-pieces right next to the holes, so that one finger could do two jobs (the left first finger can roll onto the key below for the B♭–A♭ trill). After long thought he made the G♯ key open-standing, which was acoustically more logical. It was the one change many players could not accept: [[dorus|Dorus]] designed a closed G♯ with a duplicate hole, Boehm attacked it as complicated, unreliable and nonsensical, and yet, improved over time, Dorus's closed G♯ is on almost every flute today.\n\n" +
      "A Munich review of 1833 reported that every note was now equally full and pure, unusually tender in piano and three times as loud in forte. Commercial versions followed in Paris (Godfroy and Lot, 1837), London ([[rudall-rose|Rudall & Rose]], 1843) and the United States ([[badger|Alfred G. Badger]], 1845). A Captain Gordon, an acquaintance of Boehm's, was later claimed to be the real inventor; the long 'Boehm–Gordon controversy' never changed the fact that Boehm was the one who perfected, built and promoted the instrument.",
    curio: "The new fingering was so different that a professional switching to the Boehm flute essentially had to learn the instrument again. Boehm himself wrote only five works for his ring-key flute; his famous *Elégie* is in fact the slow movement of a concerto Stuntz wrote for him.",
    drawing: { joints: 3, keys: 12, bore: "conical", material: "grenadilla", rings: true, rings1832: true, length: 0.95, foot: "c" },
    wiki: "Theobald Boehm",
    sources: [{ label: "flutehistory.com: Boehm-system flutes", url: FH + "Instrument/Boehm.php3" }, BROWN],
    image: { src: "assets/img/hfp/flute-rudall-rose-1843.jpg", caption: "Boehm-system flute by [[rudall-rose|Rudall & Rose]], London, 1843, in its case", credit: "The Metropolitan Museum of Art · CC0", url: "https://commons.wikimedia.org/wiki/File:Flute_MET_MIDP2005.346.1.jpg" },
    links: ["boehm-1871"]
  },
  {
    id: "german-keyed-flute",
    short: "German keyed / Meyer flute",
    name: "German keyed flute and Meyer flute",
    start: 1820, end: 1920,
    origin: "Dresden, Hamburg, Leipzig, Vienna",
    tagline: "The traditional conical flute that German orchestras kept for a century, praised for its blend and tone colours.",
    features: [
      "Conical wooden body with 8 to 12 keys",
      "Meyer pattern (after c.1850): usually 12 keys, later a metal-lined ivory head",
      "Valued for blend in the wind section and a wide palette of tone colours",
      "Schwedler's 'Reform' flutes (1885–98) improved mechanism and tuning"
    ],
    description:
      "While Paris and London moved towards Boehm's flutes, most German players stayed with the conical keyed flute. Dresden instruments by [[liebel|Wilhelm Liebel]], favoured by [[fuerstenau|Fürstenau]], were among the most refined: German musicians felt they blended better in an orchestral wind section and offered more tone colours than the uniform Boehm flute.\n\n" +
      "After about 1850 the model developed by [[meyer|H. F. Meyer]] of Hamburg, built to balance larger string sections and to reach extreme registers, became the commonest flute in central and eastern Europe, Scandinavia, Russia and much of America. In Leipzig, [[schwedler|Maximilian Schwedler]] developed [[reform-flute|'Reform' versions]] for the music of Richard Strauss's time, played in some German orchestras until after the First World War.\n\n" +
      "The multi-keyed simple-system flute was the instrument of most of the great 19th-century virtuosos: the Doppler brothers, [[andersen|Andersen]], Fürstenau, [[drouet|Drouët]], Soussmann, Ciardi, [[tulou|Tulou]], [[nicholson|Nicholson]], Kummer, Ribas, Barge, Berbiguier, Terschak, and [[boehm|Boehm]] himself for most of his career. Its many alternative fingerings gave the virtuoso a palette of colours and pitches, and gave everyone else plenty of confusion. Late in the century [[meyer|Meyer]] in Germany and [[ziegler|Ziegler]] in Vienna produced such flutes in large numbers.",
    curio: "Meyer-type flutes were made in such numbers that they are still plentiful, and cheap, in the antique trade.",
    drawing: { joints: 4, keys: 8, bore: "conical", material: "grenadilla", rings: true, length: 0.98, foot: "c" },
    sources: [
      { label: "flutehistory.com: Post-Boehm flutes", url: FH + "Instrument/PostBoehm.php3" },
      { label: "flutehistory.com: H. F. Meyer", url: FH + "Instrument/Makers/Heinrich%20Friedrich%20Meyer/index.php3" },
      BROWN
    ],
    image: { src: "assets/img/hfp/flute-meyer.jpg", caption: "Keyed flute after H. F. Meyer (Saxony)", credit: "Photo Tamie49 · CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Meyer_Flute.jpg" },
    links: ["fuerstenau-1844", "schwedler-1897"]
  },
  {
    id: "boehm-1847",
    short: "Boehm 1847 flute",
    name: "Boehm cylindrical flute (1847) and the French model",
    start: 1847, end: null,
    origin: "Munich, Paris, London, then America",
    tagline: "Cylindrical body, parabolic head and large padded keys: the basis of every modern flute.",
    features: [
      "Cylindrical body, tapered (parabolic) head joint",
      "Very large tone holes covered by padded cups",
      "Wood or silver (wood was more common until the early 20th century)",
      "French model by Louis Lot: light silver, open-hole keys"
    ],
    description:
      "In 1847 [[boehm|Boehm]] replaced the conical bore with a cylindrical one, with a tapered 'parabolic' head joint and very large tone holes covered by padded cups. This time he patented it in France and England, licensing Godfroy & [[lot|Lot]] in Paris and [[rudall-rose|Rudall & Rose]] in London. Some flutists, especially in Germany, thought its tone even less flute-like than the ring-key flute's, and until the early 20th century it was made in wood more often than in silver.\n\n" +
      "French makers adapted its mechanism and tone. When [[dorus|Louis Dorus]] became professor at the Paris Conservatoire in 1860, Lot's silver cylinder flute became the school's official instrument and the flute of [[taffanel|Taffanel]] and the French school. American makers such as [[haynes|William S. Haynes]] then copied the Lot flutes played in Boston, making the French silver model the world standard. In the 1960s [[cooper|Albert Cooper]] re-scaled it for a′ = 440 and new embouchure cuts, but the flute played today is still Boehm's 1847 design.\n\n" +
      "Boehm had always wondered why the flute was almost the only wind instrument not blown at its narrow end. After studying acoustics with Professor Schafhäutl he reversed the bore: a parabolic head and a cylindrical body, with holes as large as possible under covered keys. His scale was calculated for a′ = 435. Apart from Dorus's closed G♯ and Briccialdi's B♭ thumb key, the modern flute differs from it mainly in power and pitch. Boehm himself kept experimenting with wood, silver, even ivory and ebonite, and in old age preferred a silver body with a wooden head.\n\n" +
      "Changing to the Boehm flute was a far bigger step than going from one to eight keys: practically every fingering changed, and the response felt alarmingly different. Many professionals tried it and gave up. Adoption was slowest in Vienna, Dresden, Berlin, Leipzig and Russia, so many first performances of Schumann, Brahms, Wagner and Dvořák were not given on Boehm flutes. Wagner found the silver flutes too loud to play softly, and in 1882 Rudolf Tillmetz, principal at Bayreuth, went back to a wooden conical 1832 flute for good.",
    curio: "Boehm's first metal cylinder flute (No. 1, 1847) survives in the Dayton C. Miller Collection at the Library of Congress.\n\nRobert Louis Stevenson, an amateur flutist, wrote a comic poem about the Boehm flute's difficulties, ending with the line 'I cannot play… but I can sell it!'",
    drawing: { joints: 3, keys: 16, bore: "cylindrical", material: "silver", rings: false, length: 0.95, foot: "c" },
    wiki: "Western concert flute",
    sources: [
      { label: "flutehistory.com: French-modified Boehm flutes", url: FH + "Instrument/FrenchBoehm.php3" },
      { label: "flutehistory.com: Modern flutes", url: FH + "Instrument/Modern.php3" },
      BROWN
    ],
    image: { src: "assets/img/hfp/flute-lot-1856.jpg", caption: "Boehm cylinder flute in wood by [[lot|Louis Lot]], Paris, 1856", credit: "The Metropolitan Museum of Art · CC0", url: "https://commons.wikimedia.org/wiki/File:Transverse_Flute_in_C_MET_DP343143.jpg" },
    links: ["taffanel-gaubert", "boehm-1871", "moyse"]
  },
  {
    id: "quantz-flute",
    short: "Quantz two-keyed flute",
    name: "Quantz's two-keyed flute",
    start: 1739, end: 1780,
    origin: "Berlin and Potsdam",
    tagline: "A wide-bored flute with separate keys for D♯ and E♭, built by Quantz for himself and Frederick the Great.",
    features: [
      "Two keys on the foot: a large E♭ hole and a small D♯ hole",
      "Very wide bore (about 20.2–20.6 mm): rich low register, difficult top",
      "Tuning slide in the head joint, used together with corps de rechange",
      "Several corps de rechange; often two head joints"
    ],
    description:
      "[[quantz|Quantz]] began making flutes in 1739, and the instruments he built for Frederick the Great reflect his own taste. He wanted D♯ and E♭ (and other enharmonic pairs) to be tuned differently, with pure, low major thirds in any key, so he gave his flute a second key: one for E♭ and one, slightly higher in pitch, for D♯. His very wide bore gives a noticeably fuller low register, and his own music for the king favours flat keys such as F, B♭ and E♭ major and C minor.\n\n" +
      "Most of these ideas did not last. The wide bore made the high register hard, and the double key became too cumbersome once feet down to c′ were common. One feature, however, became standard on flutes for the next 150 years: the tuning slide in the head joint, which let players change pitch with a much smaller step in the bore than a change of joint alone.",
    curio: "Quantz told his readers to ignore the harpsichord and simply play in tune with the string players. He also scolded the king for warming his head joint under his arm, because it warmed the wood unevenly.",
    tips: "Several modern makers copy Quantz's flutes. Even if you play a one-keyed flute, his [[quantz-versuch|Versuch]] is the best guide to enharmonic fingerings and intonation for this repertoire.",
    drawing: { joints: 4, keys: 2, bore: "conical", material: "grenadilla", rings: true, length: 0.9 },
    sources: [BROWN],
    image: { src: "assets/img/hfp/quantz-gerhard.jpg", caption: "Quantz with his flute, painting by Johann Friedrich Gerhard, 1735 (detail)", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Flute_of_Quantz_(Painting_by_Gerhard)_cropped.jpg" },
    links: ["baroque-four-piece", "quantz-versuch"]
  },
  {
    id: "piccolo",
    short: "Piccolo",
    name: "Piccolo (octave flute)",
    start: 1730, end: null,
    origin: "Paris, then everywhere",
    tagline: "The small flute an octave higher: rustic dances, storms and birdsong from Rameau to Rossini.",
    features: [
      "Sounds an octave above the written notes",
      "One key until well into the 19th century, then keyed and Boehm models",
      "Often kept a conical wooden bore even after the Boehm system",
      "Few solo works, but a prominent orchestral colour"
    ],
    description:
      "Small flutes have always existed, but they are rarely mentioned in flute books. Quantz and Corrette both describe the military [[fife|fife]]. Corrette (c. 1735) adds that Paris makers were then producing 'little octave flutes' that were charming in tambourins and in concertos by Albinoni, Schickhardt, Quantz and others. From the 1730s Rameau wrote brilliant piccolo parts, in rustic dances and in storm scenes, and Rebel's *Les Élémens* and Telemann's *Grillen-Symphonie* also use it.\n\n" +
      "Mozart gave it a sweet solo in the Posthorn Serenade and used it vividly in *Die Zauberflöte*; in *Die Entführung* he asked for an even higher instrument. By the time of Beethoven's Fifth, Sixth and Ninth Symphonies it was an established orchestral colour. Each new development of the flute reached the piccolo late: Rossini's dazzling parts, and possibly even Berlioz's, may well have been played on one-keyed instruments, and Boehm-system piccolos came only later in the 19th century. Even in the 20th century some Boehm flutists still played simple-system piccolos, and wooden conical piccolos are still made today.",
    curio: "Corrette is one of the very few 18th-century flute tutors that mention the piccolo at all.",
    drawing: { joints: 3, keys: 1, bore: "conical", material: "boxwood", rings: true, length: 0.5 },
    wiki: "Piccolo",
    sources: [BROWN],
    image: { src: "assets/img/hfp/piccolo-lot.jpg", caption: "Piccolo by [[lot|Louis Lot]], Paris, second half of the 19th century", credit: "The Metropolitan Museum of Art · CC0", url: "https://commons.wikimedia.org/wiki/File:Piccolo_MET_234317.jpg" },
    links: ["fife"]
  },
  {
    id: "flute-damour",
    short: "Flûte d'amour",
    name: "Flûte d'amour and other sizes",
    start: 1700, end: 1900,
    origin: "Germany, France, England",
    tagline: "The flute a minor third lower, Quantz's favourite among the 'other sizes', with almost no music of its own.",
    features: [
      "Usually pitched a minor third below the normal flute (sometimes a tone to a major third)",
      "Quartflöten: flutes a fourth higher or lower",
      "Some flutes reach this pitch with a very long corps de rechange",
      "Surviving examples by Scherer, Stanesby junior and Naust"
    ],
    description:
      "Quantz does not mention the piccolo, but he describes flutes a fourth higher or lower than normal (*Quartflöten*) and, best of all, the flûte d'amour, a minor third lower. Unlike its cousins the oboe d'amore and viola d'amore, it has almost no music of its own: Christoph Graupner wrote the most, including a concerto for all three d'amore instruments. Quantz suggested simply reading ordinary flute music in a different clef.\n\n" +
      "A surprising number of large flutes survive by famous makers such as Scherer, Stanesby junior and [[naust|Naust]]. Some normal flutes, by [[rottenburgh|Rottenburgh]] and [[denner|Denner]], came with a very long extra joint that turns them into a flûte d'amour. Handel's *Riccardo Primo* calls for a 'traversa bassa' a tone lower. Large simple-system flûtes d'amour were still made in the 19th century, and in the 20th the Australian virtuoso John Amadio played one with Radcliff's mechanism.",
    curio: "Telemann wrote a fine triple concerto for the d'amore instruments, but (sadly for flûte d'amour players) asked for an ordinary flute in it.",
    drawing: { joints: 4, keys: 1, bore: "conical", material: "boxwood", rings: true, length: 1.0 },
    sources: [BROWN],
    image: { src: "assets/img/hfp/flauto-damore.jpg", caption: "One-keyed flûte d'amour in A by Johann Georg Eisenmenger, Mannheim, c. 1740", credit: "Germanisches Nationalmuseum, Nuremberg · CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Flauto_d%E2%80%99amore_in_A.jpg" },
    links: ["baroque-four-piece"]
  },
  {
    id: "alto-flute",
    short: "Boehm alto flute",
    name: "Boehm's alto flute in G",
    start: 1854, end: null,
    origin: "Munich",
    tagline: "The invention Boehm was proudest of: a deeper, stronger, more sonorous flute in G.",
    features: [
      "Lowest note g (a fourth below the flute)",
      "Boehm called it a 'bass flute'",
      "Octave thumb key and left-hand D trill key, both missing on modern altos",
      "Silver head, sometimes with a gold or wooden embouchure"
    ],
    description:
      "Boehm's alto flute was his answer to 'the long-felt need' for deeper and stronger flute tones. He had built a flute down to e as early as 1847, but by 1854–55 he found that the instrument worked best with g as its lowest note. He experimented with materials as on his concert flutes and would have liked to make it of wood, but it was too heavy. With a silver head and gold embouchure, he wrote, no room was too large for it; a wooden embouchure on the silver head made it richer without losing power.\n\n" +
      "His vision of a whole family of flutes was largely ignored by composers, but it was adopted by Irish marching bands, which used E♭ piccolos and flutes in B♭, F and E♭, plus bass flutes.",
    curio: "Once, while Boehm was playing his alto flute, a listener took him for a horn player.",
    drawing: { joints: 3, keys: 16, bore: "cylindrical", material: "silver", rings: false, length: 1.0 },
    wiki: "Alto flute",
    sources: [BROWN],
    image: { src: "assets/img/hfp/alto-boehm-mendler.jpg", caption: "Alto flute by Boehm & Mendler, Munich, c. 1880", credit: "The Metropolitan Museum of Art · CC0", url: "https://commons.wikimedia.org/wiki/File:Alto_Flute_MET_DP158085.jpg" },
    links: ["boehm-1847", "boehm-1871"]
  },
  {
    id: "reform-flute",
    short: "Reform flute",
    name: "German Reform flute (Schwedler flute)",
    start: 1885, end: 1930,
    origin: "Leipzig and Markneukirchen",
    tagline: "The last great conical flute: Schwedler's answer to Boehm, admired by Brahms for its full and powerful tone.",
    features: [
      "Conical wooden body with many keys, rollers and extra levers",
      "Vents for F, c″ and sometimes d′ to improve weak notes",
      "Oval, sharply undercut embouchure with raised sides (sometimes concave 'cusps')",
      "Built by Kruspe, then Mönnig and Heckel"
    ],
    description:
      "[[schwedler|Maximilian Schwedler]], principal flute in Leipzig, respected the Boehm flute's ingenuity and even fingerings, but found its sound monotonous: in his view a cylindrical bore could not shade the tone, while a conical bore did not fit Boehm's system. So he kept the old flute and repaired its weak points. From 1885 Kruspe, and later Mönnig and Heckel, built his models, with extra vent keys, an additional F lever for the right first finger, rollers and touch-pieces for easier fingering, and a special embouchure that gave a full, reedy sound.\n\n" +
      "That dark, sweet and powerful tone belongs to the flute solo in the finale of Brahms's Fourth Symphony. After hearing Schwedler play it in Leipzig in February 1886, Brahms wrote to praise the full, beautiful and powerful tone of his flute, and to recommend the invention warmly.",
    curio: "Schwedler, the last champion of the old flute, had actually begun on a one-keyed baroque flute, a living link with the 18th century.",
    drawing: { joints: 4, keys: 8, bore: "conical", material: "grenadilla", rings: true, length: 0.98, foot: "c" },
    sources: [BROWN, { label: "flutehistory.com: Post-Boehm flutes", url: FH + "Instrument/PostBoehm.php3" }],
    links: ["german-keyed-flute", "schwedler-1897"]
  }
];
