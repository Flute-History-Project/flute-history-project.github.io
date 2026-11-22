/*
 * PEOPLE: makers and flutists live in one list.
 * roles: ["maker"], ["flutist"] or both. The first role decides the main page;
 * a person with both roles appears on both pages (and in both lanes of the map).
 * start/end are used for ordering and the map; "dates" is what is displayed.
 * sources: [{ label, url }] (historical documents, articles, images…)
 * listen: a search string for recordings (YouTube), only where recordings exist.
 */
window.HFP = window.HFP || {};
var FH = "http://www.flutehistory.com/";
HFP.people = [
  {
    id: "anthony-dornstatt",
    name: "Anthony of Dornstätt",
    mapLabel: "Anthony of Dornstätt",
    roles: ["flutist"],
    start: 1495, end: 1519, dates: "fl. c.1500",
    place: "Court of Emperor Maximilian I",
    tagline: "The first military flutist we know by name: personal fifer to Emperor Maximilian I.",
    bio:
      "Anthony was personal fifer to the Holy Roman Emperor Maximilian I (1459–1519). He appears, on horseback and carrying a banner, at the head of the procession in Hans Burgkmair's *Triumph of Maximilian I* (1526), with three other fifers. The verse meant for his banner boasts of playing for the emperor in battles, tournaments and festivities across many lands. {{powell2002, ch. 2}}\n\n" +
      "The engraving is a rare picture of mounted [[fife|fifers]]. Each carries a case holding at least three instruments of different sizes, and the flutes appear to have eight finger holes, four for each hand. {{powell2002, ch. 2}}",
    curio: "Fifers usually marched with the infantry. Anthony and his colleagues riding into the Triumph on horseback may be a unique image. {{powell2002, ch. 2}}",
    sources: [{ label: "flutehistory.com: Anthony of Dornstätt", url: FH + "Players/Anthony_of_Dornstaett/index.php3" }],
    links: []
  },
  {
    id: "rafi",
    name: "Rafi family (Michaud and Claude Rafi)",
    roles: ["maker"],
    start: 1512, end: 1553, dates: "fl. 1512–c.1553",
    place: "Lyon, France",
    tagline: "Among the first flute makers in recorded history, and the makers of more surviving Renaissance flutes than anyone else.",
    bio:
      "Michaud Raffin of Lyon is listed as a flutist in 1512 and as a maker of flutes in 1523, which places him among the first flute makers in recorded history. His son Claude continued the trade. {{powell2002, ch. 2}}\n\n" +
      "More of the surviving [[renaissance-flute|Renaissance flutes]] were made by Claude Rafi than by any other identifiable maker, so his instruments are key models for today's copies. The Rafis worked at a time when the flute was the most popular instrument for amateurs to play together in consort. {{powell2002, ch. 2}}",
    wiki: "Claude Rafi",
    sources: [{ label: "flutehistory.com: The Rafis", url: FH + "Instrument/Makers/Rafis/index.php3" }],
    links: []
  },
  {
    id: "bassano",
    name: "Bassano family",
    roles: ["maker"],
    start: 1531, end: 1630, dates: "active in England c.1531–1630",
    place: "Venice → London",
    tagline: "Venetian musicians and woodwind makers at the court of Henry VIII.",
    bio:
      "Members of the large Bassano family of Venice were engaged by Henry VIII as court musicians and instrument makers. They built every kind of woodwind instrument, including several sets of [[renaissance-flute|flutes]] that still survive and are perhaps the finest of their period. {{powell2002, ch. 2}}\n\n" +
      "Between 1530 and 1547 Henry established a royal consort of transverse flutists, who also played cornetts and almost certainly used Bassano instruments. The consort continued after his death until 1630. {{powell2002, ch. 2}}",
    wiki: "Bassano family",
    sources: [{ label: "flutehistory.com: The Bassanos", url: FH + "Instrument/Makers/Bassanos/index.php3" }],
    links: []
  },
  {
    id: "hotteterre",
    name: "Hotteterre family",
    roles: ["maker", "flutist"],
    start: 1640, end: 1763, dates: "active c.1640–1763",
    place: "La Couture-Boussey (Normandy) and Paris",
    tagline: "Makers and musicians at the court of Louis XIV; Jacques-Martin 'le Romain' wrote the first flute method.",
    bio:
      "From the woodwind-making village of La Couture-Boussey in Normandy, the Hotteterre family became instrument makers and musicians at the court of Louis XIV. Jean Hotteterre and his relatives are traditionally associated, together with members of the Philidor family, with transforming the Renaissance flute, oboe and recorder into the jointed [[hotteterre-flute|baroque instruments]]. {{powell2002, ch. 3}}\n\n" +
      "The most famous member, Jacques-Martin Hotteterre 'le Romain' (1674–1763), spent two years in Rome (1698–1700) in the service of Prince Ruspoli. {{franchi2002, pp. 280–281}} By 1708 he held the title of flutist of the King's Chamber, and he became a fashionable teacher to aristocratic amateurs. He was also a composer and the author of the first flute method, the [[hotteterre-principes|Principes]] of 1707. {{vester1985, pp. 241–243}} {{powell2002, ch. 3}}",
    curio: "Jacques-Martin's nickname 'le Romain' comes from his years in Rome, which recent research has documented. {{powell2002, ch. 3}}",
    wiki: "Jacques-Martin Hotteterre",
    sources: [{ label: "flutehistory.com: Jacques Hotteterre", url: FH + "Players/Jacques_Hotteterre/index.php3" }],
    image: { src: "assets/img/hfp/hotteterre-picart.jpg", caption: "Jacques-Martin Hotteterre, engraving after Bernard Picart (frontispiece of the Principes)", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Hotteterre-le-Romain_(pg._36,_The_Story_of_the_Flute,_1914).jpg" },
    links: ["hotteterre-op2"]
  },
  {
    id: "denner",
    name: "Jacob Denner",
    roles: ["maker"],
    start: 1681, end: 1735, dates: "1681–1735",
    place: "Nuremberg, Germany",
    tagline: "Leading Nuremberg woodwind maker of the high Baroque.",
    bio:
      "Jacob Denner (1681–1735) was probably a son of Johann Christoph Denner, whom the Nuremberg historian Doppelmayr credited in 1730 with inventing the clarinet. {{brown2002, p. 20; eb1911, vol. 6, 'Clarinet'; doppelmayr1730, p. 305}}\n\n" +
      "His surviving [[baroque-four-piece|traversos]] are studied and copied by modern makers, and a model after Denner is a natural choice for the main German baroque repertoire. {{brown2002, pp. 16, 35}}\n\n" +
      "A recently rediscovered Denner flute has four interchangeable middle joints: the shortest plays well at about a′ = 415, and the longest turns it into a [[flute-damour|flûte d'amour]]. Another Denner flute, with alternative feet for d′ and c′, is thought to be the earliest surviving flute that reaches c′. {{brown2002, p. 20}}",
    curio: "A contemporary wrote that Denner's flutes were famous throughout the world, reaching Constantinople and Isfahan and even, through missionaries, China. {{brown2002, p. 35}}",
    wiki: "Jacob Denner",
        links: ["flute-damour"]
  },
  {
    id: "palanca",
    name: "Carlo Palanca",
    roles: ["maker"],
    start: 1691, end: 1773, dates: "c.1691–1773",
    place: "Turin, Italy",
    tagline: "Turin woodwind maker whose traversos are copied by makers today.",
    bio:
      "Carlo Palanca was a woodwind maker in Turin; recorders as well as flutes by him survive. A recent survey of Italian baroque recorders gives his dates as c.1691–1773. {{braga2012, table 1}}\n\n" +
      "His four-piece [[baroque-four-piece|traversos]] are among the 18th-century models that modern makers copy. {{brown2002, p. 36}}",
    wiki: "Carlo Palanca",
    links: []
  },
  {
    id: "buffardin",
    name: "Pierre Gabriel Buffardin",
    roles: ["flutist"],
    start: 1690, end: 1768, dates: "c. 1690–1768",
    place: "Provence → Constantinople → Dresden → Paris",
    tagline: "Principal flutist of the Dresden court orchestra, and the teacher of Quantz.",
    bio:
      "Pierre Gabriel Buffardin was born in Provence around 1690. As a very young man he went to Constantinople in the household of the French ambassador, Charles de Ferriol, whose embassy ended in 1711. There he taught the flute to Johann Jacob Bach, the elder brother of Johann Sebastian, a Swedish army oboist; we know this from C. P. E. Bach's notes added to the Bach family genealogy. {{frisch2018, pp. 90–92; funkkunath2018, p. 225, n. 2}}\n\nFrom 1715 to 1749 he was a member of the court orchestra in Dresden. {{funkkunath2018, p. 225; frisch2018, p. 92}} [[quantz|Quantz]], who played in the same orchestra, tells in his autobiography that he took lessons from the famous Buffardin for about four months, around 1719, and that they played only fast pieces, which was where his teacher excelled. In 1728 Buffardin travelled with the court to Berlin, where the Prussian crown prince Frederick, the future Frederick the Great, heard him and Quantz, and received a *Buffardin'sche Flöte*, a flute made to Buffardin's specifications. {{quantz1755; frisch2018, pp. 93–94, 96}} A flute stamped with his name has come to light: see [[buffardin-flute|the Buffardin le fils flute]].\n\nAccording to C. P. E. Bach he met Johann Sebastian Bach, probably in 1717, when Bach went to Dresden for the planned contest with the harpsichordist Louis Marchand, and again during Bach's years in Leipzig. {{funkkunath2018, p. 225, n. 3}} In 1750 he retired to Paris with a pension from the king of Saxony and died there on 13 January 1768. Of his own music a flute concerto and a trio sonata survive. {{frisch2018, pp. 98–100}} What is said about Bach writing for him is told in [[bach-flute-sonatas|Bach and the flute]].",
    curio: "For a long time nobody was sure which of two Berlin drawings by Johann Sebastian Bach the Younger, C. P. E. Bach's son, showed Buffardin. In 2017 the Bach-Archiv Leipzig bought an anonymous pencil drawing inscribed 'P. G. Buffardin'; it matches the sheet shown here, which settles the question. {{funkkunath2018, pp. 225–229}}",
    sources: [
      { label: "Kristina Funk-Kunath, Spurensuche – Ein unbekanntes Porträt von Pierre Gabriel Buffardin (Bach-Jahrbuch 2018, open access)", url: "https://journals.qucosa.de/bjb/article/download/2424/3693/6570" },
      { label: "Jean-Christophe Frisch, Fragments de la vie d'un flûtiste, Pierre Gabriel Buffardin (2018)", url: "https://webbut.unitbv.ro/index.php/Series_VIII/article/download/2678/2110/5011" }
    ],
    image: { src: "assets/img/hfp/p-buffardin.jpg", caption: "Pierre Gabriel Buffardin, drawing by Johann Sebastian Bach the Younger (Berlin, Staatsbibliothek, Mus. P. Buffardin I,1)", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Johann_Sebastian_Bach_(painter)_-_Pierre-Gabriel_Buffardin.jpg" },
    links: ["buffardin-flute", "bach-flute-sonatas", "quantz"]
  },
  {
    id: "quantz",
    name: "Johann Joachim Quantz",
    roles: ["flutist", "maker"],
    start: 1697, end: 1773, dates: "1697–1773",
    place: "Oberscheden (Hanover) → Dresden → Berlin & Potsdam",
    tagline: "One of the first professional flutists: teacher of Frederick the Great, composer, flute maker and author of the Versuch.",
    bio:
      "The son of a blacksmith, Quantz trained as a town musician, learning all instruments, and became an oboist in the Dresden court orchestra before specialising in the flute in 1719. He then travelled through Italy, France and England (1724–27) to broaden his musical education; in Paris he became friends with [[blavet|Blavet]]. Back in Dresden he became flute teacher to the Prussian crown prince Frederick, and in 1741 he entered Frederick's service permanently, composing, performing and making flutes for the king until his death. {{powell2002, ch. 5; quantz1755}}\n\n" +
      "He wrote more than 300 concertos and many sonatas, most still unpublished. He favoured and built a [[quantz-flute|two-keyed flute]] with separate keys for D♯ and E♭, a very wide bore and a tuning slide in the head. His [[quantz-versuch|Versuch]] (1752) made him famous across Europe and attracted pupils who formed a 'Quantz school' that stayed influential for a century. {{powell2002, ch. 5; brown2002, p. 19}}\n\n" +
      "He worked beside C. P. E. Bach at Frederick's court for twenty-six years, and the two published major treatises within a year of each other, yet they disagreed on ornaments, note values and continuo playing. {{brown2002, p. 7}}",
    curio: "According to Charles Burney, who heard the king's evening concert at Potsdam in 1772, Quantz was the only musician in the band allowed to call out 'Bravo' at the end of the king's solos. {{burney1773, vol. 2}}",
    wiki: "Johann Joachim Quantz",
    sources: [
      { label: "flutehistory.com: Quantz (biography, works, flutes)", url: FH + "Players/Johann_Joachim_Quantz/index.php3" },
      { label: "Quantz's autobiography (in Marpurg, Historisch-kritische Beyträge, 1755)", url: "https://imslp.org/index.php?search=Marpurg+Historisch-kritische+Beytr%C3%A4ge" }
    ],
    image: { src: "assets/img/hfp/p-quantz-schleuen.jpg", caption: "Johann Joachim Quantz, engraving by Johann David Schleuen, 1767", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Quantz_by_Schleuen.jpg" },
    links: ["cpe-bach-wq132", "quantz-flute", "buffardin"]
  },
  {
    id: "blavet",
    name: "Michel Blavet",
    roles: ["flutist"],
    start: 1700, end: 1768, dates: "1700–1768",
    place: "Besançon → Paris",
    tagline: "The most brilliant French flute virtuoso of his time, self-taught and left-handed.",
    bio:
      "The son of a woodturner from Besançon, Blavet taught himself to play almost every instrument and specialised in the flute, which he held to the left, and the bassoon. His debut at the Concert Spirituel in 1726, playing a concerto (then a brand-new form), caused a sensation. Listeners praised his exciting, exact and brilliant style and his precise intonation even in difficult keys. Before him the flute had been played in France mainly in a languid manner. {{powell2002, chs. 4–5}}\n\n" +
      "He held posts at court and at the Paris Opéra, befriended [[quantz|Quantz]] in 1726, and played quartets with Telemann during the composer's visit to Paris in 1737. His own [[blavet-op2|sonatas]], written for amateurs, keep to easy keys. He played flutes by [[thomas-lot|Thomas Lot]]. {{powell2002, chs. 4–5}}",
    curio: "Frederick the Great offered Blavet a post in Prussia. He declined, and the job went to Quantz, but only after the salary had been raised to an extraordinary level. {{powell2002, chs. 4–5}}",
    wiki: "Michel Blavet",
    imslp: "Blavet, Michel",
    sources: [{ label: "flutehistory.com: Michel Blavet", url: FH + "Players/Michel_Blavet/index.php3" }],
    image: { src: "assets/img/hfp/p-blavet.jpg", caption: "Presumed portrait of Michel Blavet by Henri Millot, c. 1720", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Millot.jpg" },
    links: []
  },
  {
    id: "thomas-lot",
    name: "Thomas Lot",
    roles: ["maker"],
    start: 1708, end: 1787, dates: "1708–1787",
    place: "La Couture-Boussey → Paris",
    tagline: "Paris maker to Blavet and the royal and aristocratic houses of Europe.",
    bio:
      "Thomas Lot came from a long line of woodwind makers from La Couture-Boussey in Normandy who ran businesses in Paris throughout the 18th and 19th centuries. He built flutes for many leading Paris flutists, including [[blavet|Michel Blavet]], Johann Baptist Wendling (Mozart's friend) and Jacques-Christophe Naudot. His instruments were also owned by many royal and aristocratic houses. {{powell2002, ch. 4}}\n\n" +
      "The classic baroque styling of his [[baroque-four-piece|flutes]] was widely imitated. His family later produced [[lot|Louis Lot]], maker of the French Boehm flute. {{powell2002, ch. 4}}",
    sources: [{ label: "flutehistory.com: Thomas Lot", url: FH + "Instrument/Makers/Thomas_Lot/index.php3" }],
    links: []
  },
  {
    id: "grenser",
    name: "August Grenser",
    roles: ["maker"],
    start: 1720, end: 1807, dates: "1720–1807",
    place: "Leipzig → Dresden, Saxony",
    tagline: "Founder of a renowned Dresden workshop: the classic model for the Classical flute.",
    bio:
      "Karl August Grenser learned his trade in Leipzig and founded his woodwind workshop in Dresden in 1744. It received a royal appointment in 1753 and, under him and his nephew Johann Heinrich Grenser (1764–1813), became one of the most famous in Europe. {{powell2002, ch. 6}}\n\n" +
      "Grenser's flutes are slimmer and smaller-toned than true baroque models and tuned to favour sharp keys rather than the flat keys earlier flutes preferred. The model changed little over his career, but by the late 1780s he was also making flutes with extra keys. They are classic models for the [[classical-keyed-flute|Classical flute]] today. {{powell2002, ch. 6}}\n\n" +
      "Copies after C. A. Grenser's one-keyed flutes, often fitted with a foot register, are made by many modern makers. They are excellent for late Baroque and early Classical music and for anything with high f‴s, though they have become a little too much of an all-purpose 'Bach flute'. {{brown2002, p. 35}}",
    wiki: "August Grenser",
    sources: [{ label: "flutehistory.com: August Grenser", url: FH + "Instrument/Makers/August_Grenser/index.php3" }],
    links: []
  },
  {
    id: "tromlitz",
    name: "Johann George Tromlitz",
    roles: ["flutist", "maker"],
    start: 1725, end: 1805, dates: "1725–1805",
    place: "Reinsdorf (near Artern) → Leipzig",
    tagline: "Leipzig virtuoso, flute maker and author of the great Classical flute treatises.",
    bio:
      "Tromlitz took a degree as imperial public notary at Leipzig University in 1750 and began making flutes around that time, because he was unhappy with those available. In 1754 he became principal flutist of Leipzig's 'Grosses Concert', the forerunner of the Gewandhaus orchestra. He left in 1776 to concentrate on teaching, writing and making flutes, and also toured as a soloist as far as St Petersburg. {{powell2002, ch. 6}}\n\n" +
      "Listeners praised his perfect intonation, brilliance and strong, trumpet-like tone, and he was among the first to bring the bravura concerto style to Germany. He did much to introduce the [[classical-keyed-flute|keyed flute]] in Germany, in a version of his own design. He wrote three books on the flute: a short essay (1786), the great [[tromlitz-unterricht|Unterricht]] (1791) and a book on flutes with several keys (1800). {{powell2002, ch. 6}}\n\n" +
      "Tromlitz tested every one of [[quantz|Quantz]]'s ideas in practice and accepted, modified or rejected them. His ideal tone was bright, full and even throughout the compass, and he gave note-by-note advice on intonation in every key. His remarks on caring for the instrument, such as oiling the bore with rapeseed oil, come from his experience as a maker. {{brown2002, p. 44}}",
    curio: "Learning to double-tongue cost Tromlitz two hours a day for six months, and at first, he admits, it came out stuttering and rattling. His advice to readers: be patient, it will work in the end. {{brown2002, p. 60}}",
    wiki: "Johann George Tromlitz",
    imslp: "Tromlitz, Johann George",
    sources: [{ label: "flutehistory.com: Johann George Tromlitz", url: FH + "Players/Johann_George_Tromlitz/index.php3" }],
    image: { src: "assets/img/hfp/p-tromlitz.jpg", caption: "Johann George Tromlitz with a keyed flute, portrait by Daniel Caffé, c. 1803", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Daniel_Caff%C3%A9,_Johann_George_Tromlitz.jpg" },
    links: []
  },
  {
    id: "potter",
    name: "Richard Potter",
    roles: ["maker"],
    start: 1726, end: 1806, dates: "1726–1806",
    place: "London, England",
    tagline: "London flute maker who patented metal conical valves for the keys in 1785.",
    bio:
      "Richard Potter was a London flute maker. In 1785 he patented metal conical valves for the keys, closing holes lined with metal tubes (an idea first used by J. F. Boie of Göttingen), and in the same year he improved the tuning slide in the head joint and the register in the foot. {{eb1911, vol. 10, 'Flute'}}\n\n" +
      "London, where makers first added keys in the late 1750s, was the laboratory of the [[classical-keyed-flute|keyed flute]] {{powell2002, ch. 6}}, and Tromlitz, writing in 1800, seems to credit Potter with inventing the F, G♯ and B♭ keys. {{eb1911, vol. 10, 'Flute'}}\n\n" +
      "Potter's keys were sealed by conical pewter plugs rather than leather pads, one of the many English patents of the time. His flutes are among the few 18th-century keyed models copied today. {{brown2002, pp. 21–22, 36}}",
    wiki: "Richard Potter flute maker",
        image: { wide: true, src: "assets/img/hfp/p-potter-flute.jpg", caption: "Boxwood keyed flute by Richard Potter, London, c. 1785–1806", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Boxwood_Flute_of_Dr._John_B._McDowell,_made_by_Richard_Potter.jpg" },
    links: []
  },
  {
    id: "devienne",
    name: "François Devienne",
    roles: ["flutist"],
    start: 1759, end: 1803, dates: "1759–1803",
    place: "Joinville (Champagne) → Paris",
    tagline: "Flutist, bassoonist and composer: a central figure of French flute playing around 1800.",
    bio:
      "Devienne was trained by his brother, played in the band of the Gardes-Suisses and in 1788 joined the orchestra of the Théâtre de Monsieur as a bassoonist. Flutist, bassoonist and prolific composer, he also wrote operas: *Les Visitandines* (Théâtre Feydeau, 1792) was a lasting success. {{fetis1866, vol. 3, s.v. 'Devienne'}}\n\n" +
      "He taught at the Paris Conservatoire until the reforms of 1802, and his [[devienne-methode|Nouvelle méthode]] (1794) marks, with Hugot and Wunderlich's method of 1804, the late arrival of the keyed flute in France. {{brown2002, p. 11}} Overwork affected his mind; he was confined at Charenton, where he died on 5 September 1803. {{fetis1866, vol. 3, s.v. 'Devienne'}}",
    curio: "Devienne's method acknowledged the new keys on the flute, but he never used them himself. He preferred a mellow sound and condemned hard, oboe-like tones. {{brown2002, p. 11}}",
    wiki: "François Devienne",
    imslp: "Devienne, François",
        image: { src: "assets/img/hfp/p-devienne.jpg", caption: "François Devienne, portrait attributed to Jacques-Louis David, c. 1792", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Jacques-Louis_David_-_Portait_du_fl%C3%BBtiste_Fran%C3%A7ois_Devienne.jpg" },
    links: ["classical-keyed-flute"]
  },
  {
    id: "tulou",
    name: "Jean-Louis Tulou",
    roles: ["flutist", "maker"],
    start: 1786, end: 1865, dates: "1786–1865",
    place: "Paris",
    tagline: "Paris Conservatoire professor (1829–56) and fierce opponent of the Boehm flute.",
    bio:
      "Tulou dominated Paris flute playing in the 1830s and 1840s through his superb playing, his post as professor at the Conservatoire (1829–56) and his links with the instrument trade. From 1828 he manufactured flutes, soon in partnership with Jacques Nonon, and from 1831 the firm supplied the Conservatoire. {{powell2002, chs. 9, 11}}\n\n" +
      "When the [[boehm-1832|Boehm ring-key flute]] was examined at the Conservatoire in 1839–40, it was not adopted, largely because of Tulou. He found its sound thin, without fullness and too much like an oboe. His own keyed flutes, with smaller finger holes, aimed to keep the instrument's traditional 'pathetic and sentimental' tone. {{powell2002, chs. 9, 11}}\n\n" +
      "His [[tulou-methode|Méthode]] op. 100 (1851) places his favourite fingerings in real musical context. He wanted the tongue to strike the edge of the lips, a habit the later French schools kept, and he was one of the main advocates of *notes sensibles*: leading notes played slightly high, so that F♯ going up to G should differ clearly from F♯ going elsewhere. {{brown2002, pp. 12, 50, 115}}",
    curio: "Tulou regretted that music had no punctuation marks for breathing. His secret for seeming to play long phrases without a breath was to place his 'commas' in the right places, as a good reader does. {{brown2002, p. 70}}",
    wiki: "Jean-Louis Tulou",
    imslp: "Tulou, Jean-Louis",
    sources: [{ label: "flutehistory.com: Jean-Louis Tulou", url: FH + "Players/Jean-Louis_Tulou/index.php3" }],
    image: { src: "assets/img/hfp/tulou-portrait.jpg", caption: "Jean-Louis Tulou, lithograph by Henri Grevedon, 1830s", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Jean-Louis_Tulou_by_Henri_Grevedon.jpg" },
    links: ["dorus"]
  },
  {
    id: "fuerstenau",
    name: "Anton Bernhard Fürstenau",
    roles: ["flutist"],
    start: 1792, end: 1852, dates: "1792–1852",
    place: "Münster → Dresden",
    tagline: "The leading voice of German Romantic flute playing, and a lifelong keyed-flute player.",
    bio:
      "Son and pupil of the flutist Caspar Fürstenau, Anton Bernhard toured as a travelling virtuoso alongside his father before Carl Maria von Weber appointed him principal flutist in Dresden in 1820. He played the traditional [[german-keyed-flute|German keyed flute]] all his life, preferring instruments by [[liebel|Wilhelm Liebel]]. {{powell2002, chs. 8, 10}}\n\n" +
      "He let his son Moritz study the ring-key flute with Boehm, but when Moritz succeeded him in Dresden in 1852 he had to return to the older flute, which was valued for its blend with the other woodwinds and its wide palette of tone colours. Fürstenau's articles (1825, 1838) and his tutors (1826 and [[fuerstenau-1844|1844]]) are key sources for the German Romantic style. {{powell2002, chs. 8, 10}}\n\n" +
      "In [[fuerstenau-1844|Die Kunst des Flötenspiels]] he discusses technique and style through his own compositions. He used vibrato very sparingly, both with the finger (*Klopfen*) and with the breath (*Bebung*), and only on the one note that carries the peak of a passionate phrase. {{brown2002, pp. 12, 111}}",
    curio: "His father Caspar had a fluent double tongue, but forbade Anton Bernhard to use it because it sounded bland, and made him perfect a characterful single tongue instead. {{brown2002, p. 63}}",
    wiki: "Anton Bernhard Fürstenau",
    imslp: "Fürstenau, Anton Bernhard",
    sources: [{ label: "flutehistory.com: A. B. Fürstenau", url: FH + "Players/Anton_Bernhard_Fuerstenau/index.php3" }],
    image: { src: "assets/img/hfp/p-fuerstenau.jpg", caption: "Anton Bernhard Fürstenau, lithograph by Josef Kriehuber, 1830", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Anton_Bernhard_F%C3%BCrstenau.jpg" },
    links: []
  },
  {
    id: "drouet",
    name: "Louis Drouët",
    roles: ["flutist"],
    start: 1792, end: 1873, dates: "1792–1873",
    place: "Amsterdam → Paris → all of Europe",
    tagline: "The most travelled virtuoso of the age of travelling virtuosi.",
    bio:
      "The Dutch-born Drouët played at the Paris Conservatoire at the age of seven and studied composition with Méhul and Reicha. Around 1807 he became flute soloist to Louis Bonaparte, King of Holland, who gave him a crystal flute by Laurent, and in 1811 Napoleon gave him a similar post and gift in Paris, where he rivalled [[tulou|Tulou]] in popularity. {{powell2002, ch. 7}}\n\n" +
      "He toured all of Europe, from London (where he briefly made [[english-flute|Nicholson-style flutes]] with Cornelius Ward) to Naples, with command performances for Queen Victoria and a visit to New York in 1854. There he first tried the [[boehm-1847|Boehm flute]], praised it, and wrote a set of studies for it. {{powell2002, ch. 7}}\n\n" +
      "His *Method of Flute Playing* (London, 1830) is full of florid ornaments, yet it warns pupils to use them only very rarely: embellishing Haydn, adding vibrato to Mozart or a glide to Beethoven, Drouët wrote, injures these great masters. {{brown2002, p. 120}}",
    curio: "His crystal flute by Claude Laurent, a gift from the King of Holland, is today in the Rijksmuseum in Amsterdam. {{powell2002, ch. 7}}",
    wiki: "Louis Drouet",
    sources: [{ label: "flutehistory.com: Louis Drouët", url: FH + "Players/Louis_Drouet/index.php3" }],
    image: { src: "assets/img/hfp/drouet-portrait.jpg", caption: "Louis Drouët, portrait by Nelson Mulnier, 1820", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Louis_Drouet_par_Nelson_Mulnier.jpg" },
    links: []
  },
  {
    id: "liebel",
    name: "Wilhelm Liebel",
    roles: ["maker"],
    start: 1793, end: 1871, dates: "1793–1871",
    place: "Dresden, Saxony",
    tagline: "Maker of some of the most refined German keyed flutes, favoured by Fürstenau.",
    bio:
      "Liebel's instruments were among the most refined and responsive [[german-keyed-flute|German keyed flutes]] of the 19th century, suited to expressive playing both in middle-class salons and in the concert hall. They were favoured by [[fuerstenau|A. B. Fürstenau]]. {{powell2002, ch. 10}}\n\n" +
      "Like most German flutists of the time, Liebel's customers valued tonal flexibility and blend in the orchestral wind section, and considered the uniform, assertive Boehm flute suitable only for solo playing. {{powell2002, ch. 10}}",
    sources: [{ label: "flutehistory.com: Wilhelm Liebel", url: FH + "Instrument/Makers/Wilhelm%20Liebel/index.php3" }],
    links: []
  },
  {
    id: "boehm",
    name: "Theobald Boehm",
    roles: ["maker", "flutist"],
    start: 1794, end: 1881, dates: "1794–1881",
    place: "Munich, Bavaria",
    tagline: "Goldsmith, court flutist, industrialist and inventor of the modern flute.",
    bio:
      "A Bavarian goldsmith, court flutist, composer and industrialist, Boehm toured Europe as a soloist between 1821 and 1831, playing from 1828 on eight-keyed flutes from his own Munich workshop. On a visit to London in 1831 he heard [[nicholson|Charles Nicholson]] and built an experimental flute. It led to the [[boehm-1832|ring-key flute of 1832]] and then to the [[boehm-1847|metal cylindrical flute of 1847]], the basis of every modern flute. {{powell2002, ch. 9}}\n\n" +
      "His mechanism was applied, with varying success, to other woodwinds. His inventions also included improvements to music boxes and pianos, a spark-proof locomotive chimney and a telescope for spotting fires. He explained his flutes in [[boehm-1871|Die Flöte und das Flötenspiel]] (1871). {{powell2002, ch. 9}}\n\n" +
      "Boehm grew up in his father's goldsmith's workshop and had a mathematical mind and great mechanical precision. At sixteen he had already copied a flute by Heinrich Grenser, and his first teacher of note, [[capeller|Capeller]], fired his imagination with daring improvements to his own flute. Boehm later admitted that in London in 1831 he could not match Nicholson's power of tone: had he not heard him, he wrote, the Boehm flute would probably never have been made. His last great pride was the [[alto-flute|alto flute in G]]. {{brown2002, pp. 24–26, 33}}",
    wiki: "Theobald Boehm",
    imslp: "Böhm, Theobald",
    sources: [{ label: "flutehistory.com: Theobald Boehm", url: FH + "Players/Theobald_Boehm/index.php3" }],
    image: { src: "assets/img/hfp/boehm-portrait.jpg", caption: "Theobald Boehm, photograph by Franz Hanfstaengl, c. 1852", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Theobald_B%C3%B6hm.jpg" },
    links: ["alto-flute"]
  },
  {
    id: "ziegler",
    name: "Johann Joseph Ziegler",
    roles: ["maker"],
    start: 1795, end: 1858, dates: "1795–1858",
    place: "Vienna",
    tagline: "The longest-lived and most prolific Viennese woodwind workshop of the 19th century.",
    bio:
      "Ziegler's workshop, founded in 1821 and active until at least 1895, supplied [[viennese-flute|Viennese flutes]] to bands and orchestras in Austria, Germany, Italy and Scandinavia, and even in England and France. {{powell2002, chs. 8, 10}}\n\n" +
      "The elegant early models gave way after about 1850 to sturdier designs influenced by the [[german-keyed-flute|Meyer flute]]. {{powell2002, chs. 8, 10}}",
    sources: [{ label: "flutehistory.com: J. J. Ziegler", url: FH + "Instrument/Makers/Johann%20Joseph%20Ziegler/index.php3" }],
    links: []
  },
  {
    id: "nicholson",
    name: "Charles Nicholson",
    roles: ["flutist"],
    start: 1795, end: 1837, dates: "1795–1837",
    place: "Liverpool → London",
    tagline: "The English virtuoso whose powerful tone inspired Boehm.",
    bio:
      "Born in Liverpool, Nicholson made his career in London as first flute of the main theatre orchestras and of the Philharmonic Society, where he appeared regularly as soloist from 1816 to 1836. He toured Britain, taught, and wrote tutors that were reprinted throughout the 19th century. {{powell2002, ch. 8}}\n\n" +
      "He played a flute by George Astor whose holes and embouchure his father had enlarged, and later licensed his name for the [[english-flute|'Nicholson's Improved' flutes]]. His expressive Adagio style, with glides and finger vibrato, shaped English playing into the recording era. Today he is remembered above all because his huge tone convinced [[boehm|Boehm]] in 1831 that the flute had to be rebuilt. {{powell2002, ch. 8}}\n\n" +
      "His tutors, the [[nicholson-preceptor|Complete Preceptor]] (1816) and *A School for the Flute* (1836), are unusual for their personal ornaments and for what they say about his sound. He used both finger and breath vibrato, and was the great champion of the 'glide', made by sliding the fingers off the holes. {{brown2002, pp. 11, 117–118}}",
    curio: "Nicholson had two special tone colours: an 'oboe' sound, made by covering half the embouchure hole and blowing gently through tightly braced lips, and a mellow one, made with loose, projecting lips. {{brown2002, p. 45}}",
    wiki: "Charles Nicholson (flautist)",
    sources: [{ label: "flutehistory.com: Charles Nicholson", url: FH + "Players/Charles_Nicholson/index.php3" }],
    image: { src: "assets/img/hfp/nicholson-portrait.jpg", caption: "Charles Nicholson, engraving after T. Bart, 1834", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Charles_Nicholson00.jpg" },
    links: ["nicholson-roslin"]
  },
  {
    id: "lot",
    name: "Louis Lot",
    roles: ["maker"],
    start: 1807, end: 1896, dates: "1807–1896",
    place: "La Couture-Boussey → Paris",
    tagline: "Maker of the French silver Boehm flute: the instrument of the French school for a century.",
    bio:
      "Like the [[hotteterre|Hotteterres]] and his relative [[thomas-lot|Thomas Lot]], Louis Lot came from La Couture-Boussey. With his partner Godfroy he made the first French commercial version of the [[boehm-1832|ring-key flute]] in 1837, and ten years later the firm bought the French rights to the [[boehm-1847|cylinder flute]]. He set up on his own in 1855. {{powell2002, ch. 11}}\n\n" +
      "When [[dorus|Dorus]] became Conservatoire professor in 1860, Lot became official supplier, and his silver flute became standard equipment of the French school for the next hundred years. At the Paris Exhibition of 1867 he showed a new model with a thicker tube, larger holes and a sturdier mechanism with the modern closed G♯ key. Lot flutes taken to Boston by French players became the models for American makers such as [[haynes|Haynes]]. {{powell2002, ch. 11}}\n\n" +
      "Lot had learned his trade as the apprentice of [[godfroy|Clair Godfroy]], whose ten-keyed simple-system flutes were among the finest of their time. {{brown2002, p. 26}}",
    curio: "Lot's flutes are numbered, so specialists can often date a 'Louis Lot' to within a year or two. No. 4358 (1887) was the first silver Lot with a B foot to reach the Boston Symphony Orchestra. {{powell2002, ch. 11}}",
    wiki: "Louis Lot",
    sources: [{ label: "flutehistory.com: Louis Lot", url: FH + "Instrument/Makers/Louis_Lot/index.php3" }],
    links: ["faure-fantaisie"]
  },
  {
    id: "dorus",
    name: "Louis Dorus",
    roles: ["flutist"],
    start: 1812, end: 1896, dates: "1812–1896",
    place: "Valenciennes → Paris",
    tagline: "Early champion of the Boehm flute, who brought it into the Paris Conservatoire.",
    bio:
      "Vincent Joseph van Steenkiste, known as Louis Dorus, graduated from the Paris Conservatoire in 1828. He was one of the first three French virtuosos, with Camus and Coche, to adopt the [[boehm-1832|Boehm flute of 1832]] and write tutors for it. His closed alternative to Boehm's open G♯ key, the 'Dorus G♯', remained common until about 1860. {{powell2002, chs. 9, 11}}\n\n" +
      "He took part in the failed Conservatoire examination of the Boehm flute in 1839–40, blocked by [[tulou|Tulou]]. He adopted the [[boehm-1847|cylinder flute]] in 1847, and in 1860 succeeded Tulou as professor; [[lot|Louis Lot]]'s cylinder flutes became the official instrument the same year. His pupils included [[taffanel|Paul Taffanel]]. {{powell2002, chs. 9, 11}}\n\n" +
      "Dorus was a strict teacher: he warned pupils against tonguing through the lips, which he called a dreadful habit, and he gave elaborate special fingerings for expressive *notes sensibles*. {{brown2002, p. 51}}",
    wiki: "Louis Dorus",
    sources: [{ label: "flutehistory.com: Louis Dorus", url: FH + "Players/Louis_Dorus/index.php3" }],
    image: { src: "assets/img/hfp/p-dorus.jpg", caption: "Louis Dorus, photograph by N. Georges, 1864", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Louis_Dorus_1864.jpg" },
    links: []
  },
  {
    id: "meyer",
    name: "Heinrich Friedrich Meyer",
    roles: ["maker"],
    start: 1814, end: 1897, dates: "1814–1897",
    place: "Hamburg",
    tagline: "Creator of the 'Meyer' flute, the commonest flute in central Europe after 1850.",
    bio:
      "From about 1850 Meyer's Hamburg flutes answered German orchestral players' need to balance larger string sections and to play in extreme registers. Modelled on the [[viennese-flute|Viennese flutes]] then in favour, the [[german-keyed-flute|Meyer pattern]] usually had 12 keys and a wooden body. {{powell2002, ch. 10}}\n\n" +
      "Instruments stamped 'nach Meyer' or 'Meyer pattern' were copied by Viennese, German, Austrian and Italian makers, and stayed in use in bands and orchestras across Europe, Scandinavia, Russia and the United States. {{powell2002, ch. 10}}",
    sources: [{ label: "flutehistory.com: H. F. Meyer", url: FH + "Instrument/Makers/Heinrich%20Friedrich%20Meyer/index.php3" }],
    links: []
  },
  {
    id: "rudall-rose",
    name: "Rudall & Rose (later Rudall, Carte & Co.)",
    mapLabel: "Rudall & Rose",
    roles: ["maker"],
    start: 1821, end: 1940, dates: "founded c.1821",
    place: "London",
    tagline: "London's leading flute firm and Boehm's English licensee.",
    bio:
      "Founded by the flutist George Rudall and John Mitchell Rose, the firm made fine [[english-flute|English keyed flutes]] and became, with Godfroy & Lot in Paris, one of the two licensed makers of Boehm's [[boehm-1847|cylinder flute]] of 1847. {{powell2002, ch. 10}}\n\n" +
      "As Rudall, Carte & Co. it built flutes to many English designs that combined Boehm features in new ways. The most successful, 'Carte & Boehm's Systems Combined' (1867), could be played with almost the old fingering as well as Boehm's. These flutes, in wood, ebonite or silver, were played in some English orchestras until after the Second World War. {{powell2002, ch. 10}}",
    wiki: "Rudall Carte",
    sources: [{ label: "flutehistory.com: Post-Boehm flutes", url: FH + "Instrument/PostBoehm.php3" }],
    links: ["boehm-1832"]
  },
  {
    id: "taffanel",
    name: "Paul Taffanel",
    roles: ["flutist"],
    start: 1844, end: 1908, dates: "1844–1908",
    place: "Bordeaux → Paris",
    tagline: "Founder of the modern French flute school.",
    bio:
      "A pupil of [[dorus|Louis Dorus]] at the Paris Conservatoire (first prize 1860), Taffanel spent thirty years as a brilliant soloist and orchestral player. As principal flute of the Paris Opéra he founded, in 1879, the Société de musique de chambre pour instruments à vent, which inspired a wave of new wind music; he later conducted the Opéra and the Société des concerts du Conservatoire. {{powell2002, ch. 11}}\n\n" +
      "As professor at the Conservatoire from 1893 he renewed the repertoire and teaching, bringing back older and foreign music including Bach, and commissioning test pieces such as [[faure-fantaisie|Fauré's Fantaisie]]. His pupils learned a new, smoother style with a light, carefully controlled vibrato, on [[lot|Louis Lot]] silver flutes. He also began a history of the flute, completed after his death by Louis Fleury, and a method, completed by Philippe Gaubert ([[taffanel-gaubert|1923]]). {{powell2002, ch. 11}}\n\n" +
      "In 1890 he played a Mozart concerto with the Leipzig Gewandhaus Orchestra under Reinecke, in the very stronghold of the old German flute. He was a warm friend to the Danish virtuoso [[andersen|Joachim Andersen]], whose études he set as Conservatoire test pieces. {{brown2002, p. 29}}",
    wiki: "Paul Taffanel",
    imslp: "Taffanel, Paul",
    sources: [{ label: "flutehistory.com: Paul Taffanel", url: FH + "Players/Paul_Taffanel/index.php3" }],
    image: { src: "assets/img/hfp/taffanel-portrait.jpg", caption: "Paul Taffanel", credit: "public domain", url: "https://commons.wikimedia.org/wiki/File:Paul_Taffanel.jpg" },
    links: ["boehm-1847", "moyse"]
  },
  {
    id: "schwedler",
    name: "Maximilian Schwedler",
    roles: ["flutist", "maker"],
    start: 1853, end: 1940, dates: "1853–1940",
    place: "Leipzig",
    tagline: "Germany's last great champion of the conical keyed flute, and an early-music pioneer.",
    bio:
      "Principal flute of the Leipzig Gewandhaus Orchestra (1881–1917) and teacher at the Leipzig Conservatory (1908–32), Schwedler was the last major German exponent of the conical [[german-keyed-flute|Meyer-type flute]]. Between 1885 and 1898 he devised 'Reform' models, built by Kruspe and Mönnig, to improve its mechanism, response and tuning while keeping its traditional sound. In 1897 he set out his aesthetic in a [[schwedler-1897|Katechismus]]. {{powell2002, chs. 10, 13}}\n\n" +
      "He also loved the music of the past. In 1892 he gave pioneering performances on a one-keyed [[baroque-four-piece|traverso]] with viola da gamba and harpsichord, and he published many (heavily edited) editions of early flute music. {{powell2002, chs. 10, 13}}\n\n" +
      "His [[reform-flute|Reform flute]] won the praise of Brahms after the Leipzig performance of the Fourth Symphony in 1886. Schwedler also wrote movingly about vibrato as the most personal expression of feeling, to be used with restraint, made not by finger or lips but by a light tension in the throat. His cadenza for Handel's A minor Sonata in the Peters edition shows how romantic his early-music editions were. {{brown2002, pp. 3, 30, 113}}",
    sources: [{ label: "flutehistory.com: Maximilian Schwedler", url: FH + "Players/Maximilian_Schwedler/index.php3" }],
    image: { src: "assets/img/hfp/p-schwedler.jpg", caption: "Maximilian Schwedler with his flute, c. 1900", credit: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Maximilian_Schwedler.jpg" },
    links: ["reinecke-undine", "reinecke-flute-concerto", "reform-flute", "handel-op1-4"]
  },
  {
    id: "haynes",
    name: "William S. Haynes",
    roles: ["maker"],
    start: 1864, end: 1939, dates: "1864–1939",
    place: "Boston, USA",
    tagline: "The Boston maker who made the French silver flute the American, and world, standard.",
    bio:
      "In the 1880s William Sherman Haynes and his brother George set up a flute-making and repair shop in Boston. They copied the [[lot|Louis Lot]] silver flutes brought by French players of the Boston Symphony Orchestra, as well as designs by Boehm & Mendler. {{powell2002, ch. 11}}\n\n" +
      "The Haynes company established the silver Lot-pattern [[boehm-1847|Boehm flute]] as the standard professional instrument, followed by Verne Q. Powell and the many band-instrument makers of Elkhart, Indiana. {{powell2002, ch. 11}}",
    wiki: "Wm. S. Haynes Co.",
    sources: [{ label: "flutehistory.com: Louis Lot (and the Haynes brothers)", url: FH + "Instrument/Makers/Louis_Lot/index.php3" }],
    links: []
  },
  {
    id: "moyse",
    name: "Marcel Moyse",
    roles: ["flutist"],
    start: 1889, end: 1984, dates: "1889–1984",
    place: "Saint-Amour (Jura) → Paris → Marlboro (Vermont)",
    tagline: "The voice of the French school on record, and one of the most influential flute teachers of the 20th century.",
    bio:
      "Trained at the Paris Conservatoire with [[taffanel|Taffanel]], Hennebains and Gaubert, Marcel Moyse became one of the most recorded flutists of the 78 rpm era and first flute of the Opéra-Comique. He premiered [[ibert-concerto|Ibert's Concerto]] in 1934 and taught at the Conservatoire (1932–40 and 1946–48). {{powell2002, chs. 11–12; wye1993; mccutchan1994}}\n\n" +
      "His study books, above all [[moyse-sonorite|De la sonorité]], focus on tone and Romantic expression and are still daily practice material. After moving to the United States he co-founded the Marlboro festival in Vermont, and his masterclasses of the 1960s and 1970s in Switzerland, the United States, Britain and Japan shaped generations of players. {{powell2002, chs. 11–12; wye1993; mccutchan1994}}",
    curio: "Moyse often told students to learn phrasing from opera singers, and many of his exercises are built on operatic melodies. {{powell2002, chs. 11–12}}",
    wiki: "Marcel Moyse",
    listen: "Marcel Moyse historical recording 78 rpm",
    sources: [
      { label: "flutehistory.com: Marcel Moyse", url: FH + "Players/Marcel%20Moyse/index.php3" },
    ],
    links: ["boehm-1847"]
  },
  {
    id: "vester",
    name: "Frans Vester",
    roles: ["flutist"],
    start: 1922, end: 1987, dates: "1922–1987",
    place: "Amsterdam",
    tagline: "Pioneer of historical flutes, teacher, editor and catalogue-maker.",
    bio:
      "Vester entered the Amsterdam Conservatory at 15, played in the Danzi Quintet, and later toured and recorded baroque repertoire with Frans Brüggen and Gustav Leonhardt. {{powell2002, ch. 13}}\n\n" +
      "One of the most influential players of historical flutes in late 20th-century Europe, he edited hundreds of 18th- and 19th-century flute works and compiled valuable repertoire catalogues. He argued that the uniformity of modern flute playing had lost the rich diversity of expression of earlier periods. {{powell2002, ch. 13}}\n\n" +
      "His catalogue *Flute Music of the 18th Century*, despite some errors, remains an invaluable guide to the repertoire and where to find its sources, alongside the international inventory RISM. {{brown2002, p. 5}}",
    wiki: "Frans Vester",
    sources: [{ label: "flutehistory.com: Frans Vester", url: FH + "Players/Frans%20Vester/index.php3" }],
    links: ["baroque-four-piece", "classical-keyed-flute", "ibert-concerto"]
  },
  {
    id: "cooper",
    name: "Albert Cooper",
    roles: ["maker"],
    start: 1924, end: 2011, dates: "1924–2011",
    place: "London",
    tagline: "The English maker who re-scaled the modern flute.",
    bio:
      "In the 1960s Albert Cooper, working with a group of English players, re-scaled the [[boehm-1847|Boehm flute]] to suit the standard pitch of a′ = 440, in worldwide use by about 1950. He also introduced new styles of cutting the embouchure hole, which changed the ideal of flute sound. {{powell2002, ch. 14}}\n\n" +
      "His innovations were adopted by makers in America and Japan, and the 'Cooper scale' is found on most professional flutes today. {{powell2002, ch. 14}}",
    wiki: "Albert Cooper (flute maker)",
    sources: [{ label: "flutehistory.com: Modern flutes", url: FH + "Instrument/Modern.php3" }],
    links: []
  },
  {
    id: "naust",
    name: "Pierre Naust",
    roles: ["maker"],
    start: 1680, end: 1709, dates: "d. 1709",
    place: "Paris",
    tagline: "Paris woodwind maker of Hotteterre's generation, whose ornate three-piece flutes are favourite models today.",
    bio:
      "Naust belonged to the circle of Paris woodwind makers who created the new jointed instruments around Louis XIV's court. His three-piece flutes, with their beautifully turned ferrules and rounded foot joints, are typical of the early French [[hotteterre-flute|Hotteterre type]], and after his death his widow carried on the workshop. {{brown2002, p. 15}}\n\n" +
      "Several large flutes by Naust also survive, pitched lower than the normal flute, like a [[flute-damour|flûte d'amour]]. Copies of his flutes, usually at the low French pitch of about a′ = 392, are among the most rewarding instruments for the early French repertoire. {{brown2002, pp. 33, 35}}",
        links: ["hotteterre-flute"]
  },
  {
    id: "rottenburgh",
    name: "Rottenburgh family",
    roles: ["maker"],
    start: 1690, end: 1768, dates: "J.-H. Rottenburgh 1672–1756; G. A. Rottenburgh 1703–1768",
    place: "Brussels",
    tagline: "Brussels makers whose flutes, among the best of the 18th century, are copied by many players today.",
    bio:
      "Jean-Hyacinth-Joseph Rottenburgh was a Brussels musician and woodwind maker, and his son Godefroid-Adrien continued the workshop. An ebony four-piece flute by the father, now in the musical instrument collection of the Brussels Conservatoire, is one of the finest one-keyed flutes known: rich in every register, easy at the top, with mellow forked notes. It feels like an early traverso but also plays later baroque music comfortably. Its pitch, about a′ = 396, can be brought down to 392, and some makers now build versions at 415. {{brown2002, p. 35}}\n\n" +
      "Flutes by the son were made famous in the early-music revival by Barthold Kuijken and Frans Brüggen, who each owned one. Some Rottenburgh flutes came with a very long extra joint that turns them into a [[flute-damour|flûte d'amour]]. {{brown2002, pp. 35–36}}",
        links: ["hotteterre-flute", "baroque-four-piece"]
  },
  {
    id: "stanesby",
    name: "Thomas Stanesby junior",
    mapLabel: "Stanesby jr",
    roles: ["maker"],
    start: 1713, end: 1754, dates: "1692–1754",
    place: "London",
    tagline: "London woodwind maker, said by his successors to have extended the flute down to low C.",
    bio:
      "Thomas Stanesby junior was a London woodwind maker, one of the renowned makers whose large flutes survive, including instruments pitched like a [[flute-damour|flûte d'amour]]. {{brown2002, p. 33}}\n\n" +
      "When John Mason advertised a 'new' foot joint down to c′ in 1756, Stanesby's successors replied that he had already made such extensions about twenty years before, just as John Just Schuchart's successors claimed the same for their master. Copies of Stanesby's flutes are popular today. {{brown2002, pp. 20, 36}}",
        links: ["baroque-four-piece"]
  },
  {
    id: "capeller",
    name: "Johann Nepomuk Capeller",
    roles: ["flutist"],
    start: 1776, end: 1825, dates: "1776–1825",
    place: "Munich",
    tagline: "Munich court flutist and inventive tinkerer: the teacher who set young Boehm thinking.",
    bio:
      "Capeller was a flutist of the Munich court orchestra. In 1811 Carl Maria von Weber wrote admiringly about him and his ingenious improvements to his own flute: a G♯ key that could be worked by either hand, extra keys for difficult trills (including d‴–e‴), easy foot keys, and a sliding embouchure hole set in an oval plate of gold. {{brown2002, pp. 24–26}}\n\n" +
      "His most important pupil was [[boehm|Theobald Boehm]]. Capeller's bold ideas undoubtedly fed Boehm's imagination, years before the [[boehm-1832|ring-key flute]]. {{brown2002, p. 26}}",
        links: ["boehm"]
  },
  {
    id: "godfroy",
    name: "Clair Godfroy aîné",
    roles: ["maker"],
    start: 1814, end: 1841, dates: "1774–1841",
    place: "Paris",
    tagline: "Paris workshop famous for its simple-system flutes, where Louis Lot trained, and the first in France to build Boehm flutes.",
    bio:
      "Clair Godfroy, called 'aîné' (the elder), ran one of the finest woodwind workshops in Paris. His ten-keyed simple-system flutes are among the best French flutes of the early 19th century, and [[lot|Louis Lot]] learned his trade there as his apprentice. {{brown2002, pp. 25–26}}\n\n" +
      "Boehm flutes were the work of the next generation. Lot's partner was Vincent Hypolite Godfroy, and in 1837 the firm of Godfroy & Lot produced the first French commercial version of Boehm's [[boehm-1832|ring-key flute]]; ten years later it bought the French rights to the [[boehm-1847|cylinder flute]]. {{brown2002, p. 27; powell2002, ch. 11}} The history of both families is told in Tula Giannini's *Great Flute Makers of France* (1993). {{giannini1993b}}",
        image: { wide: true, src: "assets/img/hfp/flute-godfroy-8keys.jpg", caption: "Eight-keyed flute in rosewood with silver keys by Clair Godfroy aîné, Paris, stamped 'GODFROY / AINE' with a sun and a star", credit: "Musée de la musique, Philharmonie de Paris (E.973.4.2) · CC BY-NC-SA 4.0", url: "http://collectionsdumusee.philharmoniedeparis.fr/doc/MUSEE/0160181" },
    links: ["boehm-1832", "boehm-1847", "lot", "tulou"]
  },
  {
    id: "ribas",
    name: "José Maria del Carmen Ribas",
    roles: ["flutist"],
    start: 1796, end: 1861, dates: "1796–1861",
    place: "London",
    tagline: "Spanish-born London orchestral flutist, famous for a powerful large-holed flute.",
    bio:
      "Ribas made his career in London orchestras, playing a simple-system flute with large holes, a wide bore and thick walls in the English manner of [[nicholson|Nicholson]]. {{brown2002, p. 24}}\n\n" +
      "When Mendelssohn conducted his *Midsummer Night's Dream* music in London, he was so struck by Ribas's playing of the Scherzo solo that he asked him to repeat it three times, apparently never having realised how effective the passage could be. {{brown2002, p. 24}}",
        links: ["english-flute"]
  },
  {
    id: "badger",
    name: "Alfred G. Badger",
    roles: ["maker"],
    start: 1845, end: 1892, dates: "1815–1892",
    place: "New York",
    tagline: "The first American maker of Boehm flutes.",
    bio:
      "Badger began making [[boehm-1832|Boehm flutes]] in 1845, bringing the new system to the United States only a few years after Paris and London. He later built [[boehm-1847|cylinder flutes]] too, in wood and metal. {{brown2002, p. 27; powell2002, ch. 11}}\n\n" +
      "As no patent protected Boehm's cylinder flute in the United States, Badger also made unlicensed cylinder flutes after 1847. {{powell2002, ch. 11}}",
    wiki: "Alfred G. Badger",
        links: ["boehm-1832"]
  },
  {
    id: "briccialdi",
    name: "Giulio Briccialdi",
    roles: ["flutist"],
    start: 1818, end: 1881, dates: "1818–1881",
    place: "Terni → Rome → London → Florence",
    tagline: "Italian virtuoso who gave the Boehm flute its B♭ thumb key.",
    bio:
      "Born in Terni in 1818, Briccialdi was appointed flute teacher by the Accademia di Santa Cecilia in Rome at seventeen, and toured as a virtuoso in Italy, Vienna and later America, composing concertos, operatic fantasies and salon pieces for the flute. {{fetis1866, vol. 2, s.v. 'Briccialdi'; pougin1878, vol. 1, s.v. 'Briccialdi'}}\n\n" +
      "His lasting gift to every flutist is the thumb key for B♭ (B♭ above B♮), which replaced [[boehm|Boehm]]'s own arrangement and is standard on almost all [[boehm-1847|modern flutes]]. Changing system was a huge risk for an established virtuoso, yet Briccialdi gave an acclaimed concert only two weeks after receiving his new closed-G♯ Boehm flute. {{brown2002, p. 28}}",
    wiki: "Giulio Briccialdi",
        image: { src: "assets/img/hfp/p-briccialdi.jpg", caption: "Giulio Briccialdi, lithograph by Josef Kriehuber, 1842", credit: "Archivio Storico Ricordi · CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Giulio_Baldassarre_Briccialdi_by_Joseph_Kriehuber_(1842)_-_Archivio_Storico_Ricordi_ICON010461.jpg" },
    links: ["boehm-1847"]
  },
  {
    id: "rockstro",
    name: "Richard Shepherd Rockstro",
    roles: ["flutist"],
    start: 1826, end: 1906, dates: "1826–1906",
    place: "London",
    tagline: "English flutist and author of a huge treatise on the history and construction of the flute.",
    bio:
      "Rockstro was a London flutist, teacher and designer of his own model of Boehm flute. His monumental [[rockstro-1890|Treatise on the Construction, the History and the Practice of the Flute]] (1890) is still a mine of information, and its fingering charts for the simple-system flute are among the most complete ever printed. {{brown2002, pp. 12, 149}}\n\n" +
      "He had firm opinions: he disliked tonguing through the lips, declared the old 'tootle' double tonguing out of date, and preferred a clear, rapid staccato with three grades of syllables. Remarkably, his huge book never mentions vibrato. {{brown2002, pp. 51, 61–62}}",
    wiki: "Richard Shepherd Rockstro",
        links: ["boehm-1847"]
  },
  {
    id: "andersen",
    name: "Joachim Andersen",
    roles: ["flutist"],
    start: 1847, end: 1909, dates: "1847–1909",
    place: "Copenhagen → St Petersburg → Berlin → Copenhagen",
    tagline: "Danish virtuoso and composer of the études every flutist still practises.",
    bio:
      "Andersen was principal flute of the Berlin Philharmonic in its early years and later a conductor in Copenhagen. His many sets of études are still a cornerstone of flute teaching, and he wrote pieces used as test pieces at the Paris Conservatoire under [[taffanel|Taffanel]], who was a warm friend. {{brown2002, p. 29}}\n\n" +
      "He played the old simple-system flute and was said to loathe the Boehm flute, yet he bought six from Rudall Carte. He hated double tonguing and practised single-tongued staccato so fiercely that he injured his tongue, which eventually forced him to stop playing. {{brown2002, pp. 29, 63}}",
    curio: "When Andersen heard the young Marcel Moyse play his Étude op. 15 no. 3, he was deeply moved: he had apparently never realised how beautiful his own piece could be. {{brown2002, p. 29}}",
    wiki: "Joachim Andersen",
        links: ["german-keyed-flute", "moyse"]
  },
  {
    id: "koch",
    name: "Stephan Koch",
    roles: ["maker"],
    start: 1807, end: 1828, dates: "1772–1828",
    place: "Vienna",
    tagline: "Viennese woodwind maker whose flutes Fürstenau strongly recommended.",
    bio:
      "Stephan Koch was a Viennese woodwind maker. With Ziegler's, his flutes represent the Viennese type that, alongside the Meyer flute, remained the usual orchestral flute in German-speaking countries through much of the 19th century. {{powell2002, ch. 10}}\n\n" +
      "Viennese flutes of this kind had a penetrating tone and often a foot reaching below the normal low C, and were heard in the first performances of Beethoven's symphonies. {{powell2002, chs. 8, 10}} [[fuerstenau|Fürstenau]], the great Dresden virtuoso, strongly recommended flutes by Koch or by [[liebel|Liebel]]. {{brown2002, p. 26}}",
    sources: [{ label: "flutehistory.com: Nineteenth-century flutes", url: "http://www.flutehistory.com/Instrument/19C.php3" }],
    links: ["viennese-flute", "german-keyed-flute"]
  },
  {
    id: "wendling",
    name: "Johann Baptist Wendling",
    roles: ["flutist"],
    start: 1723, end: 1797, dates: "1723–1797",
    place: "Ribeauvillé (Alsace) → Zweibrücken → Mannheim → Munich",
    tagline: "First flute of the Mannheim court orchestra, teacher of an Elector, and the friend who found Mozart his flute commissions.",
    bio:
      "Wendling was baptised on 17 June 1723 at Ribeauvillé (in German, Rappoltsweiler) in Alsace, into a family with a tradition of fife playing. Around 1745 he entered the service of the court of Zweibrücken as flute teacher to Duke Christian IV, and late in 1752 he became first flute of the Mannheim court orchestra and flute teacher to the Elector Carl Theodor, who played the flute himself. He followed the court to Munich in 1778 and was still listed there as first flutist in 1790. {{gunson}}\n\n" +
      "He played often at the Paris Concert spirituel from 1751, and he was a client of the Paris maker [[thomas-lot|Thomas Lot]]; the Elector, too, owned flutes by Lot. {{gunson; spohr2006, p. 28}} Contemporaries praised his accurate intonation and his singing tone across the whole range of the instrument, and the poet and musician Schubart called him an excellent flutist who combines sound principles with polished execution. His pupils included the Duc de Guines, for whom Mozart wrote the Flute and Harp Concerto, and Johann Baptist Becke, Jakob Heinrich Appold and Christopher Papendiek, through whom his influence spread to Germany and England. {{gunson}}\n\n" +
      "Leopold Mozart already praised him after a concert in July 1763. In the winter of 1777–78 Wendling was, with Cannabich, Mozart's closest friend in Mannheim: Mozart ate at his table, he helped find pupils for Mozart, he procured the commission from [[dejean|Dejean]] and he planned to take Mozart to Paris, where he knew his way about. {{gunson; brown2006, p. 19}} On 4 February 1778 Mozart wrote to his father that Wendling was 'a thoroughly honest and very good man, but unfortunately entirely without religion', and that he did not want to travel with him and the oboist Ramm for that reason. {{mozartletters, no. 416 (4 Feb 1778)}} The plan changed, and the two met again in Paris, where Mozart began a [[mozart-k297b|Sinfonia concertante]] for Wendling, Ramm, Punto and Ritter that was never performed and is now lost. {{ba5770, pp. III–V}}\n\n" +
      "Mozart is said to have orchestrated one of Wendling's own concertos, which is lost; yet Brown notes that, for all their friendship, there is no record of Mozart ever praising his playing. {{brown2002, p. 174; brown2006, p. 24}} A few years later Wendling took the solo flute part in the Munich first performance of *Idomeneo*, and Wiese thinks the C major Quartet [[mozart-k285b|K. 285b]] may have been written for him. {{henle635, pp. V–VI}}",
    curio: "In a letter in verse to his mother, written on the road in January 1778, Mozart imagined 'Herr Wendling' cross because no pieces had come from him; the quartets he owed were for Wendling's friend Dejean. {{mozartletters, no. 412 (31 Jan 1778)}}",
    wiki: "Johann Baptist Wendling",
    sources: [{ label: "Emily Gunson: Johann Baptist Wendling (1723–1797), biography", url: "https://www.emilygunson.com/wendling/biography" }],
    links: ["mozart-flute-works", "mozart-k299", "mozart-k297b", "dejean", "thomas-lot"]
  },
  {
    id: "dejean",
    name: "Ferdinand Dejean",
    roles: ["flutist"],
    start: 1731, end: 1797, dates: "1731–1797",
    place: "Bonn → Batavia → Leiden → Vienna",
    tagline: "A doctor of the Dutch East India Company and amateur flutist: the 'Indian' who commissioned Mozart's flute concertos and quartets.",
    bio:
      "Mozart called him 'our Indian' and 'the Dutchman', but Ferdinand Dejean was born in Bonn, where he was baptised on 9 October 1731, and died in Vienna on 23 February 1797. He made his career in the service of the Dutch East India Company (VOC), as a doctor in Asia, and the historian Frank Lequin showed that he was an internationally known medical scholar, 'Medicinae et Philosophiae Doctor', an amateur flute player and a friend of Mozart. Before Lequin, scholars did not know who he was and guessed at the names 'Dechamps' or 'Deschamps'; Mozart himself wrote 'de Jean' and, once, 'de Champs'. {{pohanka150, Nachtrag; mozartletters, no. 398 (27 Dec 1777)}}\n\n" +
      "According to the chronology compiled from the Dutch biography of Bleker and Lequin, his father was cupbearer to the Elector of Cologne at Bonn, and Dejean trained as a surgeon and served as regimental surgeon in Münster and then spent a penniless first winter in Amsterdam. In 1758 he joined the VOC as chief surgeon on the ship *De Drie Papegayen*, which reached Batavia (Jakarta) in February 1759. He sailed on Company ships to Sumatra, India, Ceylon and Persia, and on 8 June 1762 became surgeon of the city of Batavia. In 1767 he married the widow of the Company official Wilhelmus Buschman, Ann Mary Pack, and in November they left for Europe, arriving at Texel in June 1768. {{bleker2013; steins}} Her inheritance made him independent; Martin argues that it came from a hidden private pearl trade on Kharg Island in the Persian Gulf, run by her first husband. {{martin2023}}\n\n" +
      "At thirty-seven he began to study medicine and chemistry at Leiden, was initiated into the Leiden lodge 'La Vertu' (he was a Freemason, like Mozart later) and took his doctorate on 2 July 1773, with dissertations on the treatment of eye diseases without surgery and on Spanish soda. His wife died that October. In the following years he travelled across Europe meeting scientists, took part in 1776 in experiments on diamonds at the Académie des sciences in Paris, and in 1777 the Imperial Academy of St Petersburg published his prize-winning dissertation on fire and blood. {{steins}} He then went to Mannheim, where he stayed from November 1777 to February 1778 and visited the observatory. On 15 February he left for Paris, and in 1778 he was in London, where he met the naturalist Georg Forster. {{steins}}\n\n" +
      "He later lived in The Hague, in Rheinberg with his sister's family, and from 1790 in Vienna, where he published his commentary on his Leiden teacher Gaub's pathology in 1792–94. He died of cirrhosis and was buried in St Marx cemetery; his son George, an army officer, inherited everything and died in 1799. {{steins}} Whether he ever met Mozart again is not known; Falk Steins, who maintains the website on him, finds the claim in the literature that they met in Vienna very likely wrong and lists four possible occasions (Paris 1778, Vienna 1781, 1788 and 1790–91) for which no evidence exists. {{steins}}\n\n" +
      "Of his flute playing we know almost only what Mozart's letters and the editors tell. On 14 December 1777 Mozart's mother wrote to Salzburg that her son had that day dined with 'the rich Dutchman' who was giving him 200 florins for compositions; the commission is told under [[mozart-flute-works|Mozart's flute works]]. {{mozartletters, no. 390 (14 Dec 1777)}} Which flute he owned is not documented. Martin, citing Bleker and Lequin, reports that a will inventory lists 'flutes', together with a mathematical clock, sheet music and family portraits, without maker or type. {{martin2018; bleker2013}} Rachel Brown supposes that he played a one-keyed flute, like most players of his time, and that he asked for easy pieces; Giegling thought the concerto K. 313 suited the limited technical skills of its patron, while Martin, a flutist himself, argues that Dejean was a capable amateur who probably had lessons from Wendling. {{brown2002, p. 142; brown2006, pp. 23–24; giegling323, pp. III–VI; martin2021}} No source known to us says where or when he bought his flute, or who made it.",
    curio: "A painting of a man with a flute in a Dutch room, signed with the monogram of the painter Jacobus Buys, has been proposed as a portrait of Dejean: on the table are a globe, music and a book, and a clock stands in the corner. Martin identifies the sitter, the music (which he reads as a Mozart concerto) and the other objects as symbols of Dejean's life; this is his own interpretation, and Steins calls the sitter 'probably' Dejean. {{martin2018; steins}}",
    sources: [
      { label: "Falk Steins: Ferdinand Dejean (1731–1797), chronology, sources and open questions", url: "https://ferdinanddejean.jimdofree.com/english/cv/" },
      { label: "Stephen Martin: The symbolic portrait of Mozart's patron Dr Ferdinand Dejean (Hektoen International, 2018)", url: "https://hekint.org/2018/04/12/symbolic-portrait-mozarts-patron-dr-ferdinand-dejean/" },
      { label: "Stephen Martin: The patronage and playability of Mozart's flute works (Hektoen International, 2021)", url: "https://hekint.org/2021/10/21/the-patronage-and-playability-of-mozarts-flute-works/" }
    ],
    image: { src: "assets/img/hfp/p-dejean-portrait.jpg", caption: "A portrait proposed as Dr Ferdinand Dejean, oil on canvas attributed to Jacobus Buys. The identification was made by Stephen Martin (2018); nothing in the picture names the sitter", credit: "Photo Stephen Martin, Baan Dong Bang Museum · CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:BDBEC_Mozart_Ferdinand_DejeanHR.jpg" },
    links: ["mozart-flute-works", "wendling", "mozart-k313", "mozart-k314", "mozart-k285"]
  }
];
