


export interface Course {
  slug: string;
  title: string;
  description: string;
  image: string;
  modes: string[];
  duration: string;
  price: string;
  installments?: string;
  category: string;
  program?: string[];
}


export const courses: Course[] = [

  {
    slug: "diagnoza-kliniczna-ados-2-psychologowie",
    title:
      "Diagnoza kliniczna ADOS-2 – Protokół obserwacji do diagnozowania zaburzeń ze spektrum autyzmu (ADOS-2). Grupa dla psychologów.",
    description:
      "Specjalistyczne szkolenie dla psychologów z wykorzystania protokołu ADOS-2 do precyzyjnej diagnozy zaburzeń ze spektrum autyzmu.",
    image:
      "/images/szkolenia/diagnoza-kliniczna-ados-2-protokol-obserwacji-do-diagnozowania-zaburzen-ze-spektrum-autyzmu-ados-2-grupa-dla-psychologow.jpeg",
    modes: ["Online w czasie rzeczywistym"],
    duration: "40 godzin",
    price: "3600zł",
    category: "Diagnoza i terapia",
  },
  {
    slug: "diagnoza-kliniczna-ados-2-certyfikacja-trenera",
    title:
      "Diagnoza kliniczna ADOS-2 – Certyfikacja międzynarodowego Trenera ADOS-2. Grupa dla pedagogów, logopedów, terapeutów.",
    description:
      "Zdobądź międzynarodowe uprawnienia trenera ADOS-2. Kurs certyfikacyjny dla pedagogów, logopedów i terapeutów.",
    image:
      "/images/szkolenia/diagnoza-kliniczna-ados-2-certyfikacja-miedzynarodowego-trenera-ados-2-grupa-dla-pedagogow-logopedow-terapeutow.jpg",
    modes: ["Online w czasie rzeczywistym"],
    duration: "56 godzin",
    price: "5000zł",
    category: "Diagnoza i terapia",
  },

  {
    slug: "ados2-protokol-obserwacji-psychologowie",
    title:
      "ADOS-2 — Protokół obserwacji (8 kalibracji badań). Grupa dla psychologów.",
    description:
      "Szkolenie skupione na praktycznej pracy z protokołem ADOS-2 — 8 kalibracji badań dla grupy psychologów.",
    image:
      "/images/szkolenia/ados-2-protokol-obserwacji-8-kalibracji-badan-grupa-dla-psychologow.png",
    modes: ["Zdalnie w czasie rzeczywistym"],
    duration: "Program: 8 kalibracji badań",
    price: "2000zł",
    category: "Diagnoza i terapia",
  },


  {
    slug: "diagnoza-logopedyczna",
    title: "Diagnoza logopedyczna. Etapy diagnozy, opiniowanie.",
    description:
      "Praktyczne wprowadzenie do pełnego procesu diagnozy logopedycznej wraz z przygotowaniem opinii.",
    image: "/images/szkolenia/ados-dla-logopedow.jpg",
    modes: ["Online w czasie rzeczywistym"],
    duration: "8 godzin",
    price: "800zł",
    category: "Diagnoza i terapia",
  },
  {
    slug: "diagnoza-dysleksji",
    title: "Diagnoza dysleksji. Etapy diagnozy, opiniowanie.",
    description:
      "Szkolenie krok po kroku: rozpoznanie specyficznych trudności w uczeniu się i przygotowanie opinii.",
    image:
      "/images/szkolenia/diagnoza-dysleksji-etapy-diagnozy-opiniowanie.jpeg",
    modes: ["Online w czasie rzeczywistym"],
    duration: "12 godzin",
    price: "1200zł",
    category: "Diagnoza i terapia",
  },


  {
    slug: "trener-tus-stopien-1",
    title:
      "TRENER TUS — Trener Umiejętności Społecznych — w przedszkolu i wychowaniu wczesnoszkolnym — stopień I.",
    description:
      "Zostań certyfikowanym Trenerem Umiejętności Społecznych I stopnia i naucz się prowadzić zajęcia dla dzieci w wieku przedszkolnym i wczesnoszkolnym.",
    image: "/images/szkolenia/trener-tus-i.jpeg",
    modes: [
      "24 godz. online w czasie rzeczywistym",
      "Dostęp do platformy na 365 dni",
    ],
    duration: "24 godziny",
    price: "1920zł",
    category: "Terapia i rozwój umiejętności społecznych",
  },
  {
    slug: "trener-tus-stopien-2",
    title:
      "TRENER TUS — Trener Umiejętności Społecznych — młodzież i osoby dorosłe — stopień II.",
    description:
      "Rozwiń swoje kompetencje jako Trener TUS II stopnia, specjalizując się w pracy z młodzieżą i osobami dorosłymi.",
    image:
      "/images/szkolenia/trener-tus-trener-umiejetnosci-spolecznych-mlodziez-i-osoby-dorosle-stopien-ii.jpeg",
    modes: [
      "24 godz. online w czasie rzeczywistym",
      "Dostęp do platformy na 365 dni",
    ],
    duration: "24 godziny",
    price: "1920zł",
    category: "Terapia i rozwój umiejętności społecznych",
  },
  {
    slug: "trener-tus-stopien-3",
    title:
      "TRENER TUS — Trener Umiejętności Społecznych — seniorzy — stopień III.",
    description:
      "Zdobądź kwalifikacje Trenera TUS III stopnia i naucz się prowadzić skuteczne treningi umiejętności społecznych dla seniorów.",
    image:
      "/images/szkolenia/rener-tus-trener-umiejetnosci-spolecznych-seniorzy-stopien-iii.jpeg",
    modes: [
      "24 godz. online w czasie rzeczywistym",
      "Dostęp do platformy na 365 dni",
    ],
    duration: "24 godziny",
    price: "1920zł",
    category: "Terapia i rozwój umiejętności społecznych",
  },
  {
    slug: "diagnoza-dzieci-z-zaburzeniami-rozwojowymi",
    title:
      "Diagnoza dzieci z zaburzeniami rozwojowymi. Etapy diagnozy, opiniowanie, przygotowanie Indywidualnego Planu Terapii.",
    description:
      "Kompleksowe szkolenie z diagnozy dzieci z zaburzeniami rozwojowymi, obejmujące proces opiniowania i tworzenia Indywidualnych Planów Terapii.",
    image:
      "/images/szkolenia/diagnoza-dzieci-z-zaburzeniami-rozwojowymi-etapy-diagnozy-opiniowanie-przygotowanie-indywidualnego-planu-terapii.jpeg",
    modes: ["30 godz. online", "Dostęp do platformy na 365 dni"],
    duration: "56 godzin",
    price: "5000zł",
    category: "Diagnoza i terapia",
  },
  {
    slug: "diagnoza-zaburzen-przetwarzania-sensorycznego",
    title:
      "Diagnoza zaburzeń przetwarzania sensorycznego (integracji sensorycznej). Tworzenie indywidualnych ścieżek terapeutycznych i programów terapii.",
    description:
      "Naucz się diagnozować zaburzenia przetwarzania sensorycznego i tworzyć spersonalizowane programy terapeutyczne pod okiem eksperta Marcina Machowskiego (Pan Niedźwiadek).",
    image:
      "/images/szkolenia/diagnoza-zaburzen-przetwarzania-sensorycznego-integracji-sensorycznej-tworzenie-indywidualnych-sciezek-terapeutycznych-i-programow-terapii.jpeg",
    modes: ["Online", "Dostęp do platformy na 365 dni"],
    duration: "40 godzin",
    price: "3600zł",
    category: "Diagnoza i terapia",
  },


  {
    slug: "ai-w-rekach-ucznia",
    title:
      "AI w rękach ucznia – wykorzystanie sztucznej inteligencji jako narzędzia hejtu",
    description:
      "Poznaj zagrożenia i możliwości związane z wykorzystaniem AI przez uczniów w kontekście cyberprzemocy.",
    image:
      "/images/szkolenia/AI-w-rękach-ucznia-wykorzystanie-sztucznej-inteligencji-jako-narzędzia-hejtu.png",
    modes: ["Online w czasie rzeczywistym"],
    duration: "4 godziny",
    price: "399zł",
    category: "Bezpieczeństwo cyfrowe i AI",
    program: [
      "Wprowadzenie do sztucznej inteligencji w edukacji",
      "Rozpoznawanie zagrożeń związanych z AI",
      "Metody przeciwdziałania cyberprzemocą z wykorzystaniem AI",
      "Warsztat praktyczny — analiza przypadków",
      "Opracowanie strategii bezpieczeństwa cyfrowego",
    ],
  },
  {
    slug: "cyberprostitucja",
    title: "Cyberprostytucja: gdzie zaczyna się ten pierwszy krok?",
    description:
      "Szkolenie z zakresu rozpoznawania i przeciwdziałania zjawisku cyberprostitucji wśród młodzieży.",
    image:
      "/images/szkolenia/CyberprostYtucja-gdzie-zaczyna-się-ten-pierwszy-krok.png",
    modes: ["Online w czasie rzeczywistym"],
    duration: "4 godziny",
    price: "399zł",
    category: "Przemoc i zdrowie psychiczne",
    program: [
      "Definicja i formy cyberprostitucji",
      "Czynniki ryzyka i mechanizmy wciągania",
      "Rozpoznawanie sygnałów ostrzegawczych",
      "Metody prewencji w środowisku szkolnym",
      "Współpraca z rodzicami i specjalistami",
    ],
  },
  {
    slug: "przemoc-30",
    title:
      "Przemoc 3.0 – jak internet i media społecznościowe zmieniają mechanizmy zastraszania",
    description:
      "Kompleksowe szkolenie o nowych formach przemocy w erze cyfrowej i metodach interwencji.",
    image:
      "/images/szkolenia/Przemoc-3-jak-internet-i-media-społecznościowe-zmieniają-mechanizmy-zastraszania.png",
    modes: ["Online w czasie rzeczywistym"],
    duration: "4 godziny",
    price: "399zł",
    category: "Przemoc i zdrowie psychiczne",
    program: [
      "Ewolucja przemocy w erze cyfrowej",
      "Nowe formy cyberprzemocy",
      "Wpływ mediów społecznościowych na zachowania agresywne",
      "Interwencja kryzysowa w przypadkach cyberprzemocy",
      "Budowanie odporności psychicznej uczniów",
    ],
  },
  {
    slug: "depresja-mlodziezy",
    title:
      "Pokolenie w kryzysie – depresja, samookaleczenia i próby samobójcze w cieniu social mediów",
    description:
      "Szkolenie z rozpoznawania i pomocy młodzieży z problemami zdrowia psychicznego.",
    image:
      "/images/szkolenia/Pokolenie-w-kryzysie-depresja-samookaleczenia-i-próby-samobójcze-w-cieniu-social-mediów.png",
    modes: ["Online w czasie rzeczywistym"],
    duration: "4 godziny",
    price: "399zł",
    category: "Przemoc i zdrowie psychiczne",
    program: [
      "Rozpoznawanie objawów depresji u młodzieży",
      "Samookaleczenia — przyczyny i interwencja",
      "Profilaktyka zachowań samobójczych",
      "Rola mediów społecznościowych w problemach zdrowia psychicznego",
      "Współpraca z psychologiem i psychiatrą",
    ],
  },
  {
    slug: "patriotyzm-w-memach",
    title:
      "Patriotyzm w memach – jak młodzi rozumieją i przeżywają polskość w epoce social mediów",
    description:
      "Nowoczesne podejście do edukacji patriotycznej dostosowane do młodego pokolenia.",
    image:
      "/images/szkolenia/Patriotyzm-w-memach-jak-młodzi-rozumieją-i-przeżywają-polskość-w-epoce-social-mediów.png",
    modes: ["Online w czasie rzeczywistym"],
    duration: "4 godziny",
    price: "399zł",
    category: "Edukacja obywatelska",
    program: [
      "Współczesne rozumienie patriotyzmu przez młodzież",
      "Analiza memów i kultury internetowej",
      "Budowanie tożsamości narodowej w erze cyfrowej",
      "Metody edukacji patriotycznej dostosowane do młodego pokolenia",
      "Warsztat tworzenia treści edukacyjnych",
    ],
  },
  {
    slug: "nowa-podstawa-programowa",
    title: "Nowa podstawa programowa – kluczowe zmiany i wyzwania",
    description:
      "Kompleksowe omówienie zmian w podstawie programowej i ich wpływu na pracę nauczyciela.",
    image:
      "/images/szkolenia/Nowa-podstawa-programowa-kluczowe-zmiany-i-wyzwania.png",
    modes: ["Online w czasie rzeczywistym"],
    duration: "4 godziny",
    price: "399zł",
    category: "Polityka oświatowa",
    program: [
      "Najważniejsze zmiany i terminy wdrożenia",
      "Konsekwencje dla planów wynikowych",
      "Dostosowanie metod i narzędzi oceniania",
      "Studia przypadków i scenariusze lekcji",
      "Checklista wdrożeniowa dla nauczyciela",
    ],
  },
  {
    slug: "ocenianie-ksztaltujace",
    title: "Ocenianie kształtujące w praktyce szkolnej",
    description:
      "Nowoczesne metody oceniania wspierające rozwój uczniów zgodnie z najnowszymi wytycznymi.",
    image: "/images/szkolenia/Ocenianie-kształtujące-w-praktyce-szkolnej.png",
    modes: ["Online w czasie rzeczywistym"],
    duration: "4 godziny",
    price: "399zł",
    category: "Polityka oświatowa",
    program: [
      "Podstawy i cele oceniania kształtującego",
      "Techniki informacji zwrotnej",
      "Kryteria sukcesu i samoocena uczniów",
      "Portfolio i zadania długoterminowe",
      "Narzędzia TIK wspierające OK",
    ],
  },
  {
    slug: "wsparcie-uczniow-ukrainskich",
    title: "Wsparcie uczniów ukraińskich w polskiej szkole",
    description:
      "Praktyczne narzędzia i metody pracy z uczniami z doświadczeniem migracyjnym.",
    image:
      "/images/szkolenia/Wsparcie-uczniów-ukraińskich-w-polskiej-szkole.png",
    modes: ["Online w czasie rzeczywistym"],
    duration: "4 godziny",
    price: "399zł",
    category: "Polityka oświatowa",
    program: [
      "Diagnoza potrzeb ucznia z doświadczeniem migracyjnym",
      "Dostosowanie metod nauczania i materiałów",
      "Współpraca z rodziną i specjalistami",
      "Wsparcie emocjonalne i integracyjne",
      "Dobre praktyki i case studies",
    ],
  },
  {
    slug: "edukacja-wlaczajaca-praktyka",
    title: "Edukacja włączająca – od teorii do praktyki",
    description:
      "Kompleksowe szkolenie z zakresu edukacji włączającej zgodne z najnowszymi standardami.",
    image: "/images/szkolenia/Edukacja-włączająca-od-teorii-do-praktyki.png",
    modes: ["Online w czasie rzeczywistym"],
    duration: "4 godziny",
    price: "399zł",
    category: "Polityka oświatowa",
    program: [
      "Podstawy prawne i organizacyjne",
      "Indywidualizacja i IPET",
      "Współpraca nauczyciel — specjalista — rodzic",
      "Metody i narzędzia pracy włączającej",
      "Ewaluacja i dokumentacja",
    ],
  },


  {
    slug: "kurs-przygotowawczy-telc-b2-angielski",
    title:
      "Kurs języka angielskiego – przygotowanie do międzynarodowego egzaminu B2 (TELC)",
    description:
      "Kompleksowy kurs przygotowujący do TELC B2: zajęcia na żywo + intensywna praca na platformie.",
    image:
      "/images/szkolenia/kurs-jezyka-angielskiego-przygotowanie-do-miedzynarodowego-egzaminu-b2-telc.jpeg",
    modes: [
      "100 godzin zdalnie w czasie rzeczywistym",
      "300 godzin na platformie do samokształcenia",
    ],
    duration: "100h live + 300h e-learning (400h łącznie)",
    price: "3.500zł",
    category: "Egzaminy i certyfikaty językowe",
  },
  {
    slug: "kurs-przygotowawczy-telc-b1-b2-polski",
    title:
      "Kurs języka polskiego jako obcego – przygotowanie do międzynarodowego egzaminu dualnego B1/B2 (TELC)",
    description:
      "Kurs dla cudzoziemców: przygotowanie do TELC B1/B2 – zajęcia na żywo + praca na platformie.",
    image:
      "/images/szkolenia/kurs-jezyka-polskiego-jako-obcego-przygotowanie-do-miedzynarodowego-egzaminu-dualnego-b1-b2-telc.jpeg",
    modes: [
      "100 godzin zdalnie w czasie rzeczywistym",
      "150 godzin na platformie do samokształcenia",
    ],
    duration: "100h live + 150h e-learning (250h łącznie)",
    price: "3.500zł",
    category: "Egzaminy i certyfikaty językowe",
  },
  {
    slug: "miedzynarodowy-egzamin-telc-b2-angielski",
    title: "Międzynarodowy egzamin TELC B2 — język angielski",
    description:
      "Przygotuj się i zdaj dożywotni, międzynarodowy egzamin TELC na poziomie B2 z języka angielskiego.",
    image: "/images/szkolenia/miedzynarodowy-egzamin-telc-b2-angielski.png",
    modes: [
      "Tylko stacjonarnie (z możliwością przeprowadzenia w miejscu zebrania się grupy min. 20 osób)",
    ],
    duration: "Zależny od grupy",
    price: "od 900zł",
    category: "Egzaminy i certyfikaty językowe",
  },
  {
    slug: "miedzynarodowy-egzamin-telc-b1-angielski",
    title: "Międzynarodowy egzamin TELC B1 — język angielski",
    description:
      "Zdobądź dożywotni certyfikat TELC na poziomie B1 z języka angielskiego, uznawany na całym świecie.",
    image: "/images/szkolenia/miedzynarodowy-egzamin-telc-b1-angielski.png",
    modes: [
      "Tylko stacjonarnie (z możliwością przeprowadzenia w miejscu zebrania się grupy min. 20 osób)",
    ],
    duration: "Zależny od grupy",
    price: "od 900zł",
    category: "Egzaminy i certyfikaty językowe",
  },
  {
    slug: "miedzynarodowy-egzamin-dualny-telc-b1-b2-angielski",
    title: "Międzynarodowy egzamin dualny TELC B1/B2 — język angielski",
    description:
      "Zdaj egzamin dualny i uzyskaj certyfikat TELC na poziomie B1 lub B2, w zależności od wyniku.",
    image:
      "/images/szkolenia/miedzynarodowy-egzamin-dualny-telc-b1-b2-angielski.png",
    modes: [
      "Tylko stacjonarnie (z możliwością przeprowadzenia w miejscu zebrania się grupy min. 20 osób)",
    ],
    duration: "Zależny od grupy",
    price: "od 900zł",
    category: "Egzaminy i certyfikaty językowe",
  },
  {
    slug: "miedzynarodowy-egzamin-dualny-telc-b2-c1-angielski",
    title: "Międzynarodowy egzamin dualny TELC B2/C1 — język angielski",
    description:
      "Podejdź do egzaminu dualnego, aby uzyskać certyfikat TELC na poziomie B2 lub C1 i potwierdzić zaawansowaną znajomość angielskiego.",
    image:
      "/images/szkolenia/miedzynarodowy-egzamin-dualny-telc-b2-c1-angielski.png",
    modes: [
      "Tylko stacjonarnie (z możliwością przeprowadzenia w miejscu zebrania się grupy min. 20 osób)",
    ],
    duration: "Zależny od grupy",
    price: "od 900zł",
    category: "Egzaminy i certyfikaty językowe",
  },
  {
    slug: "miedzynarodowy-egzamin-telc-b1-b2-polski",
    title: "Międzynarodowy egzamin TELC B1/B2 — język polski jako obcy",
    description:
      "Potwierdź swoją znajomość języka polskiego jako obcego, zdając dożywotni, międzynarodowy egzamin TELC na poziomie B1/B2.",
    image: "/images/szkolenia/miedzynarodowy-egzamin-telc-b1-b2-polski.png",
    modes: [
      "Tylko stacjonarnie (z możliwością przeprowadzenia w miejscu zebrania się grupy min. 20 osób)",
    ],
    duration: "Zależny od grupy",
    price: "od 900zł",
    category: "Egzaminy i certyfikaty językowe",
  },
];
