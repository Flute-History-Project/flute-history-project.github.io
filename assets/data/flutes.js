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
      "The earliest surviving examples come from the Netherlands, but the new flute first appears in the hands of musicians at the court of Louis XIV. There it was heard in intimate chamber concerts, playing ornamented airs with voices and lutes, and was prized as a sweet, tender instrument for expressing love. The [[hotteterre|Hotteterre]] family is closely associated with it, and [[hotteterre-principes|Hotteterre's Principes]] (1707) was written for it.",
    curio: "The frontispiece of Hotteterre's Principes shows a player with a three-joint flute that has decorative details found only on the 'Hotteterre' type. It is usually thought to be a portrait of the author.",
    drawing: { joints: 3, keys: 1, bore: "conical", material: "boxwood", rings: true, length: 0.86 },
    wiki: "Baroque flute",
    sources: [{ label: "flutehistory.com: Seventeenth-century flutes", url: FH + "Instrument/17C.php3" }],
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
      "This is the classic 'traverso' of the high Baroque. Professional players such as [[quantz|Quantz]] and [[blavet|Blavet]] travelled as soloists, while most published music stayed in easy keys for amateurs. Quantz added a second key so that D♯ and E♭ could be tuned differently, but most players kept the one-keyed model. Makers such as [[thomas-lot|Thomas Lot]] in Paris, [[palanca|Carlo Palanca]] in Turin and [[denner|Jacob Denner]] in Nuremberg built instruments that are still copied today, and Quantz's [[quantz-versuch|Versuch]] is the essential guide to playing it.",
    curio: "A single flute could be sold with several spare middle joints. The flutist chose one according to the pitch of the harpsichord or organ that evening.",
    drawing: { joints: 4, keys: 1, bore: "conical", material: "boxwood", rings: true, length: 0.86 },
    wiki: "Baroque flute",
    sources: [{ label: "flutehistory.com: Baroque flutes", url: FH + "Instrument/Baroque.php3" }],
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
      "In parallel, London makers in the late 1750s began adding keys and increasing the bore taper to strengthen the low register. The keyed flute caught on with a few English players but spread on the Continent only some thirty years later, helped by [[tromlitz|Tromlitz]], whose own design was praised for its brilliant, perfectly tuned sound. By about 1800 nearly all professionals used keyed flutes, with distinct national types. [[potter|Potter]] in London and Grenser in Dresden set the standard, and the keys did not replace cross-fingerings: players combined both.",
    curio: "Many players were sceptical about keys, fearing that extra holes would spoil the tone. Tromlitz spent a whole book (1800) arguing the opposite.",
    drawing: { joints: 4, keys: 6, bore: "conical", material: "boxwood", rings: true, length: 0.92, foot: "c" },
    wiki: "Classical flute",
    sources: [{ label: "flutehistory.com: The Classical flute", url: FH + "Instrument/Classical.php3" }],
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
      "Viennese workshops such as Stephan Koch and [[ziegler|Johann Joseph Ziegler]] supplied bands and orchestras far beyond Austria. After about 1850 the model merged with northern German designs into the [[german-keyed-flute|Meyer-type flute]].",
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
      "Once his style became the fashion, he licensed his name to London makers, who sold flutes stamped 'Nicholson's Improved', and firms such as [[rudall-rose|Rudall & Rose]] also built large-holed English flutes. Their big sound made a deep impression on [[boehm|Boehm]] in 1831 and led directly to his new flutes.",
    curio: "Nicholson is usually said to have enlarged the holes himself, but the modifications were in fact made by his father, also a well-known flutist.",
    drawing: { joints: 4, keys: 8, bore: "conical", material: "grenadilla", rings: true, length: 0.95, foot: "c" },
    sources: [{ label: "flutehistory.com: Charles Nicholson", url: FH + "Players/Charles_Nicholson/index.php3" }],
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
      "Because it was not patented, others copied it freely: Godfroy & [[lot|Lot]] made the first French commercial model in 1837. A few prominent players took it up in Paris from 1838, among them [[dorus|Louis Dorus]], and in London from 1840, and it was officially adopted at the Brussels Conservatoire. Critics found it more like a trumpet than a flute, and the Paris Conservatoire rejected it in 1839–40, largely because of [[tulou|Tulou]]'s opposition. It opened the way to the [[boehm-1847|cylindrical flute of 1847]].",
    curio: "The new fingering was so different that a professional switching to the Boehm flute essentially had to learn the instrument again.",
    drawing: { joints: 3, keys: 12, bore: "conical", material: "grenadilla", rings: true, rings1832: true, length: 0.95, foot: "c" },
    wiki: "Theobald Boehm",
    sources: [{ label: "flutehistory.com: Boehm-system flutes", url: FH + "Instrument/Boehm.php3" }],
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
      "After about 1850 the model developed by [[meyer|H. F. Meyer]] of Hamburg, built to balance larger string sections and to reach extreme registers, became the commonest flute in central and eastern Europe, Scandinavia, Russia and much of America. In Leipzig, [[schwedler|Maximilian Schwedler]] developed 'Reform' versions for the music of Richard Strauss's time, played in some German orchestras until after the First World War.",
    curio: "Meyer-type flutes were made in such numbers that they are still plentiful, and cheap, in the antique trade.",
    drawing: { joints: 4, keys: 8, bore: "conical", material: "grenadilla", rings: true, length: 0.98, foot: "c" },
    sources: [
      { label: "flutehistory.com: Post-Boehm flutes", url: FH + "Instrument/PostBoehm.php3" },
      { label: "flutehistory.com: H. F. Meyer", url: FH + "Instrument/Makers/Heinrich%20Friedrich%20Meyer/index.php3" }
    ],
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
      "French makers adapted its mechanism and tone. When [[dorus|Louis Dorus]] became professor at the Paris Conservatoire in 1860, Lot's silver cylinder flute became the school's official instrument and the flute of [[taffanel|Taffanel]] and the French school. American makers such as [[haynes|William S. Haynes]] then copied the Lot flutes played in Boston, making the French silver model the world standard. In the 1960s [[cooper|Albert Cooper]] re-scaled it for a′ = 440 and new embouchure cuts, but the flute played today is still Boehm's 1847 design.",
    curio: "Boehm's first metal cylinder flute (No. 1, 1847) survives in the Dayton C. Miller Collection at the Library of Congress.",
    drawing: { joints: 3, keys: 16, bore: "cylindrical", material: "silver", rings: false, length: 0.95, foot: "c" },
    wiki: "Western concert flute",
    sources: [
      { label: "flutehistory.com: French-modified Boehm flutes", url: FH + "Instrument/FrenchBoehm.php3" },
      { label: "flutehistory.com: Modern flutes", url: FH + "Instrument/Modern.php3" }
    ],
    links: ["taffanel-gaubert", "boehm-1871", "moyse"]
  }
];
