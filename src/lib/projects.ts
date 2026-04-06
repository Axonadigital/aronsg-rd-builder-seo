export interface PastProject {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  img: string;
  imgAlt: string;
  shortDesc: string;
  longDesc: string[];
  gallery?: string[];
  span?: string;
}

// Ordningen avgör placeringen i cirkelkarusellen.
// Kategorierna är utspridda så liknande projekt inte hamnar bredvid varandra.
export const pastProjects: PastProject[] = [
  {
    slug: "grundarbete-villa",
    title: "Grundarbete – villa",
    category: "Grundarbete",
    location: "Jämtland",
    year: "2024",
    img: "/images/Grundarbete villa.jpg",
    imgAlt: "Grundarbete för villa i Jämtland – schaktning och platta",
    shortDesc: "Komplett grundarbete för villa – schaktning, dränering och betongplatta redo för resten av bygget.",
    longDesc: [
      "Projektet inleddes med markberedning och schaktning för att säkerställa en stabil grund. Vi ansvarade för hela grundläggningsprocessen inklusive dränering, frostisolering och armering inför plattläggningen.",
      "Resultatet blev en jämn och stabil betongplatta anpassad för Jämtlands klimat, redo att bära upp nästa steg i nybyggnationen.",
    ],
    gallery: [
      "/images/Grundarbete villa.jpg",
      "/images/Grundarbete villa 2.jpg",
      "/images/Grundarbete villa 3.jpg",
    ],
    span: "md:col-span-2",
  },
  {
    slug: "nybyggnation-rodstugan",
    title: "Nybyggnation – rödstuga",
    category: "Nybyggnation",
    location: "Jämtland",
    year: "2023",
    img: "/images/Nybyggnation rödstug.jpeg",
    imgAlt: "Nybyggd röd tvåvåningsstuga i Jämtland",
    shortDesc: "Nybyggnation av klassisk röd tvåvåningsstuga – traditionell stil med modern funktion.",
    longDesc: [
      "En nybyggnation som kombinerar det klassiska svenska utseendet med moderna krav på isolering och energiprestanda. Huset uppfördes i lösvirkeskonstruktion med röd träfasad och vita knutar.",
      "Vi ansvarade för hela projektet från grund till nock. Kunden fick ett noggrant utfört hus med hög kvalitet på alla led, från stomresning till färdig fasad.",
    ],
    gallery: [
      "/images/Nybyggnation rödstug.jpeg",
      "/images/image33.jpeg",
    ],
    span: "md:col-span-1",
  },
  {
    slug: "tillbyggnad-bastu",
    title: "Tillbyggnad – bastu",
    category: "Tillbyggnad",
    location: "Jämtland",
    year: "2023",
    img: "/images/Tillbyggnad bastu.jpeg",
    imgAlt: "Nybyggd röd bastu i vintermiljö med varmt ljus inifrån",
    shortDesc: "Fristående bastu uppförd som tillbyggnad – röd panel, glimmande ljus och varm inredning.",
    longDesc: [
      "En fristående bastu byggdes som en komplettering till befintlig fastighet. Bastun kläddes med röd locklistpanel och fick en genomtänkt inredning med träpanel och bastuaggregat av hög kvalitet.",
      "Projektet genomfördes under vintern och levererades helt färdigt med el-installation och all inredning på plats.",
    ],
    gallery: [
      "/images/Tillbyggnad bastu.jpeg",
      "/images/image15.jpeg",
      "/images/image16.jpeg",
      "/images/image17.jpeg",
    ],
    span: "md:col-span-1",
  },
  {
    slug: "finsnickeri-doktrinskap",
    title: "Finsnickeri – doktrinskåp",
    category: "Finsnickeri",
    location: "Östersund",
    year: "2024",
    img: "/images/Finsnickeri doktrinskåp 1.jpg",
    imgAlt: "Handbyggt doktrinskåp i trä under tillverkning i verkstad",
    shortDesc: "Handbyggt doktrinskåp i massivt trä – klassisk stil med vitrinskåp och underskåp.",
    longDesc: [
      "Doktrinskåpet byggdes helt för hand efter kundens önskemål. Konstruktionen kombinerar ett underskåp med öppen hylla och ett övre vitrinskåp med glasdörrar.",
      "Varje del tillverkades och passades noggrant i vår verkstad. Resultatet är ett möbel med lång livslängd och ett utseende som förfinas med åren.",
    ],
    gallery: [
      "/images/Finsnickeri doktrinskåp 1.jpg",
      "/images/finsnickeri doktrin skåp 2.jpg",
    ],
    span: "md:col-span-1",
  },
  {
    slug: "grundarbete-froson",
    title: "Grundarbete – Frösön",
    category: "Grundarbete",
    location: "Frösön",
    year: "2024",
    img: "/images/Grundarbete frösön.jpg",
    imgAlt: "Grundarbete på Frösön – gjutform och betongarbete i skymning",
    shortDesc: "Grundläggning på Frösön med gjutform och armering – noggrant utfört inför nybyggnation.",
    longDesc: [
      "På Frösön genomfördes ett grundarbete där vi satte upp gjutform och lade armering inför betonggjutningen. Arbetet utfördes under höst med krävande väderförhållanden.",
      "Med rätt förberedelser i grunden kan resten av bygget gå snabbt och effektivt.",
    ],
    gallery: [
      "/images/Grundarbete frösön.jpg",
      "/images/Grundarbete frösön 2.jpg",
    ],
    span: "md:col-span-1",
  },
  {
    slug: "renovering-villa",
    title: "Renovering – villa",
    category: "Renovering",
    location: "Jämtland",
    year: "2024",
    img: "/images/Renovering villa.jpeg",
    imgAlt: "Renoverat villarum med öppen planlösning och trädetaljer",
    shortDesc: "Helrenovering av villa med öppen planlösning – kök, golv, ytskikt och snickeriarbeten.",
    longDesc: [
      "Villan genomgick en genomgripande renovering där vi tog helhetsansvar. Resultatet är ett öppet, ljust rum med nya ekgolv, modern köksinstallation och välarbetade trädetaljer.",
      "Renoveringen utfördes med ROT-avdrag och innefattade golv, tak, väggytor, kök samt snickeriarbeten för trappa och räcke.",
    ],
    gallery: [
      "/images/Renovering villa.jpeg",
      "/images/image22.jpeg",
      "/images/image23.jpeg",
      "/images/image24.jpeg",
      "/images/image25.jpeg",
    ],
    span: "md:col-span-2",
  },
  {
    slug: "tillbyggnad-forrad",
    title: "Tillbyggnad – förråd",
    category: "Tillbyggnad",
    location: "Jämtland",
    year: "2024",
    img: "/images/Tillbyggnation förråd.jpeg",
    imgAlt: "Nybyggt mörkt förråd i vintermiljö med dubbeldörr",
    shortDesc: "Nytt förråd uppfört som tillbyggnad – robust konstruktion med praktisk dubbeldörr.",
    longDesc: [
      "Kunden behövde mer förvaringsutrymme och vi uppförde ett solitt förråd anpassat till fastighetens befintliga stil.",
      "Konstruktionen dimensionerades för Jämtlands snörika vintrar med förstärkt takstol och rejäl isolering.",
    ],
    gallery: ["/images/Tillbyggnation förråd.jpeg"],
    span: "md:col-span-1",
  },
  {
    slug: "matbord-i-ek",
    title: "Matbord i ek",
    category: "Finsnickeri",
    location: "Jämtland",
    year: "2024",
    img: "/images/Matbord i ek 1.jpg",
    imgAlt: "Matbord i massiv ek under tillverkning i snickeriverkstad",
    shortDesc: "Matbord tillverkat i massiv ek med synliga ådringar och hantverksmässig finish.",
    longDesc: [
      "Bordet tillverkades i massiv ek med skiva i ett stycke, noggrant utvald för sin ådring och karaktär.",
      "Ett matbord i massivt trä är ett livstidsmöbel som bara blir vackrare med åren.",
    ],
    gallery: [
      "/images/Matbord i ek 1.jpg",
      "/images/Matbord i ek 2.jpg",
      "/images/matbord i ek 3.jpg",
    ],
    span: "md:col-span-1",
  },
  {
    slug: "grundarbete-bjornrike",
    title: "Grundarbete – stuga Björnrike",
    category: "Grundarbete",
    location: "Björnrike",
    year: "2023",
    img: "/images/Grundarbete stuga björnrike.jpg",
    imgAlt: "Grundarbete för stuga i Björnrike – betongplatta i fjällmiljö",
    shortDesc: "Grundläggning för stuga i Björnrike – betongarbete i utmanande fjällterräng.",
    longDesc: [
      "Att bygga i fjällmiljö kräver extra omsorg om grundläggningen. I Björnrike genomförde vi schaktning och betongarbete med fokus på frostsäkerhet.",
      "Trots utmanande logistik och terräng levererades grundplattan enligt plan.",
    ],
    gallery: [
      "/images/Grundarbete stuga björnrike.jpg",
      "/images/Grundarbete stuga björnrike 2.jpg",
    ],
    span: "md:col-span-1",
  },
  {
    slug: "inomhus-stall",
    title: "Inomhusmiljö – stall",
    category: "Jordbruk & lantbruk",
    location: "Jämtland",
    year: "2023",
    img: "/images/inomhus stall.jpg",
    imgAlt: "Nybyggt stall med boxar i trä och stål, LED-belysning",
    shortDesc: "Komplett inomhusmiljö för stall – boxar i trä och stål, ventilation och LED-belysning.",
    longDesc: [
      "Stallets inomhusmiljö byggdes från grunden med boxar i kombinerat trä och stål, genomtänkt ventilation och effektiv LED-belysning.",
      "Vi har lång erfarenhet av lantbruksbyggnader och förstår de krav som ställs på funktion, hygien och hållbarhet.",
    ],
    gallery: [
      "/images/inomhus stall.jpg",
      "/images/Inomhus stall 2.jpg",
      "/images/Inomhus stall 3.jpg",
    ],
    span: "md:col-span-1",
  },
  {
    slug: "tillbyggnad-uterum",
    title: "Tillbyggnad – uterum",
    category: "Tillbyggnad",
    location: "Jämtland",
    year: "2023",
    img: "/images/tillbyggnation uterum.jpeg",
    imgAlt: "Tillbyggt uterum med röd panel och spröjsade fönster",
    shortDesc: "Uterum tillfogat som tillbyggnad med matchande fasad och spröjsade fönster.",
    longDesc: [
      "Uterummet byggdes som en naturlig förlängning av husets befintliga arkitektur med röd locklistpanel och spröjsade fönster.",
      "Vi hanterade hela projektet från ritning till färdigt resultat, inklusive grund, stomme, tak, fasad och fönster.",
    ],
    gallery: ["/images/tillbyggnation uterum.jpeg"],
    span: "md:col-span-1",
  },
  {
    slug: "finsnickeri-trappa",
    title: "Finsnickeri – trappa",
    category: "Finsnickeri",
    location: "Östersund",
    year: "2024",
    img: "/images/Finsnickeri trapp.jpeg",
    imgAlt: "Handbyggt trappräcke i furu med svarvade stolpar",
    shortDesc: "Skräddarsydd trappa med handgjort räcke – svarvade stolpar och detaljerat hantverk.",
    longDesc: [
      "Trappan och räcket byggdes och monterades för hand med fokus på detalj och precision.",
      "Finsnickeri handlar om att varje skarv och profil sitter perfekt.",
    ],
    gallery: [
      "/images/Finsnickeri trapp.jpeg",
      "/images/image5.jpeg",
      "/images/image6.jpeg",
      "/images/image9.jpeg",
    ],
    span: "md:col-span-1",
  },
  {
    slug: "inredning-storhogna",
    title: "Inredning – nybyggnation Storhogna",
    category: "Finsnickeri",
    location: "Storhogna",
    year: "2023",
    img: "/images/Möbler till nybyggnation i storhogna.jpg",
    imgAlt: "Matplats och kök i nybyggt timmerhus i Storhogna",
    shortDesc: "Snickeriarbeten och möbler till nybyggt timmerhus i Storhogna – inredning i harmoni med timringen.",
    longDesc: [
      "Till ett nybyggt timmerhus i Storhogna levererade vi skräddarsydda möbler och inredningsdetaljer som kompletterar timrets naturliga karaktär.",
      "Att inreda ett timmerhus kräver förståelse för materialet och hur det rör sig.",
    ],
    gallery: [
      "/images/Möbler till nybyggnation i storhogna.jpg",
      "/images/möbler till nybyggnation storhogna 2.jpg",
    ],
    span: "md:col-span-1",
  },
  {
    slug: "ladgard-balkarbete",
    title: "Ladgård – balkarbete",
    category: "Jordbruk & lantbruk",
    location: "Jämtland",
    year: "2023",
    img: "/images/Ladgård balk.jpeg",
    imgAlt: "Restaurering av ladgårdstak med nya balkar i gammalt timmer",
    shortDesc: "Restaurering av ladgårdstak – nya bärande balkar inpassade i befintlig timringstakstol.",
    longDesc: [
      "Den gamla ladgårdens takstol behövde förstärkas med nya bärande balkar. Arbetet krävde noggrannhet för att passa in nytt virke i den befintliga konstruktionen.",
      "Vi har erfarenhet av att arbeta med äldre lantbruksbyggnader och förstår vikten av att bevara det ursprungliga utseendet.",
    ],
    gallery: [
      "/images/Ladgård balk.jpeg",
      "/images/image1.jpeg",
    ],
    span: "md:col-span-1",
  },
];
