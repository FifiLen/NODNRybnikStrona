"use client";

import { Footer } from "@/components/layout-components/footer";
import { Header } from "@/components/layout-components/header";
import { fixOrphans } from "@/lib/typography";
import Image from "next/image";
import Link from "next/link";

const reports = [
  {
    title: "Agresja i przemoc seksualna w internecie",
    href: "https://www.nask.pl/media/2025/09/Thinkstat_RAPORT_Agresja-i-przemoc-seksualna-w-internecie.pdf",
    img: "/images/agresja-i-przemoc-seksualna-w-internecie.jpeg",
  },
  {
    title: "Wykorzystywanie seksualne dzieci w cyberprzestrzeni",
    href: "https://www.nask.pl/media/2024/10/Wykorzystywanie-seksualne-dzieci-raport.pdf",
    img: "/images/wykorzystanie-seksualne-dzieci-w-cyberprzestrzeni.jpeg",
  },
  {
    title:
      "Co dzieci robią, gdy spędzają czas przed komputerem lub z telefonem w ręku?",
    href: "https://www.nask.pl/media/2024/10/Thinkstat_RAPORT_nastolatki-3_0_ONLINE-2.pdf",
    img: "/images/co-robia.jpeg",
  },
  {
    title:
      "Co piąty nastolatek w wieku od 12-16 lat swój pierwszy kontakt z treściami pornograficznymi miał już zanim ukończył 10 rok życia.",
    href: "https://www.nask.pl/media/2024/11/Nastolatki-wobec-pornografii-cyfrowej.pdf",
    img: "/images/nastolatki-wobec-pornografii-cyfrowej.jpeg",
  },
  {
    title: "Co dzieci robią w sieci – Iluzoryczna kontrola rodziców",
    href: "https://www.nask.pl/media/2025/09/Nastolatki_RAPORT-2.pdf",
    img: "/images/co-dzieci-robia-gdy-spedzaja-czas-przed-komputerem-lub-telefonem-w-reku.jpeg",
  },
  {
    title: "Szkodliwe treści w internecie. Nie akceptuję, reaguję!",
    href: "https://www.gov.pl/attachment/1f7367e0-d3a9-44c1-a575-5adf2bd10999",
    img: "/images/szkodliwe-tresci-w-internecie.jpeg",
  },
  {
    title: 'Raport "Rodzice Nastolatków 3.0"',
    href: "https://archiwum.nask.pl/pl/raporty/raporty/2586,Raport-quotRodzice-Nastolatkow-30quot-2019.html",
    img: "/images/rodzice-nastolatkow-30.jpeg",
  },
  {
    title: 'Raport z badań "Nastolatki 3.0"',
    href: "https://archiwum.nask.pl/pl/raporty/raporty/4295,RAPORT-Z-BADAN-NASTOLATKI-30-2021.html",
    img: "/images/nastolatki30.jpeg",
  },
  {
    title: "Przemoc wobec dzieci w sporcie",
    href: "https://fdds.pl/_Resources/Persistent/f/5/f/0/f5f03279fd0f538ec32143fc6f42806ba5da99be/fdds-raport-przemoc-wobec-dzieci-w-sporcie%20--%2007%20--%20do-internetu.pdf",
    img: "/images/przemoc-dzieci-w-sporcie.jpeg",
  },
];

const digitalHygieneReports = [
  {
    title: "Poradnik higiena cyfrowa w szkole i przedszkolu",
    href: "/documents/Poradnik-higiena-cyfrowa-w-szkole-i-w-przedszkolu.pdf",
    img: "/images/higiena-cyfrowa.jpeg",
  },
  {
    title: "Higiena cyfrowa",
    href: "https://www.gov.pl/web/baza-wiedzy/higiena-cyfrowa3",
    img: "/images/higiena-cyfrowa-2.jpeg",
  },
  {
    title: "Relacje i tożsamość w sieci – scenariusz lekcji",
    href: "https://www.gov.pl/attachment/5a8e4b3a-e618-42b5-af21-fa757f10e4e5",
    img: "/images/scenariusz-relacje-i-tozsamosc-w-sieci.jpeg",
  },
  {
    title: "Nadużywanie nowych technologii – scenariusz lekcji",
    href: "https://www.gov.pl/attachment/d7440b5c-39cb-4c1f-a13b-13a876ab6a59",
    img: "/images/scenariusz-naduzywanie-nowych-technologii.jpeg",
  },
  {
    title: "Wizerunek i tożsamość – scenariusz lekcji",
    href: "https://www.gov.pl/attachment/1b554579-2cd5-4582-b44a-1c1511b12b03",
    img: "/images/scenariusz-wizerunek-i-tozsamosc.jpeg",
  },
  {
    title:
      "Dobrostan psychiczny – nadużywanie nowych technologii – scenariusz lekcji",
    href: "https://www.gov.pl/attachment/128710dc-7078-4885-9a71-b1ab59c06af5",
    img: "/images/scenariusz-dobrostan-psychiczny-naduzywanie-tech.jpeg",
  },
  {
    title: "Poszanowanie praw autorskich – scenariusz lekcji",
    href: "https://www.gov.pl/attachment/e10df2fd-71d7-4ff7-a19d-b97cd1338539",
    img: "/images/scenariusz-poszanowanie-praw-autorskich.jpeg",
  },
  {
    title: "Metody przeszukiwania zasobów internetu - scenariusz lekcji",
    href: "https://www.gov.pl/attachment/22fbb2ee-7592-4dcc-9c47-8cc17c5a01c4",
    img: "/images/metody-poszukiwania-zasobow-internetu.jpeg",
  },
  {
    title: "Zagrożenia w sieci i prywatność w internecie - scenariusz lekcji",
    href: "https://www.gov.pl/attachment/ad943373-66c8-4c0f-878d-4c75d7cfd3f8",
    img: "/images/zagrozenia-w-sieci-i-prywatnosc.jpeg",
  },
  {
    title: "Pozytywny internet i jego młodzi twórcy",
    href: "https://cyberprofilaktyka.pl/badania/RAPORT_a4_29_5_19_inter.pdf",
    img: "/images/pozytywny-internet-i-jego-mlodzi-tworcy.jpeg",
  },
  {
    title: "Wsparcie międzysektorowe MEN",
    href: "https://mwm.us.edu.pl/index.php/dla-wszystkich/",
    img: "/images/wsparcie-miedzysektorowe-MEN.jpeg",
  },
  {
    title: "Poradniki edukacji włączającej",
    href: "https://zpe.gov.pl/poradniki-do-edukacji-wlaczajacej",
    img: "/images/poradniki-edukacji-wlaczajacej.jpeg",
  },
  {
    title: "Bank Dobrych Praktyk ORE",
    href: "https://ore.edu.pl/2015/03/bank-dobrych-praktyk-materialy-do-pobrania/",
    img: "/images/bank-dobrych-praktyk-ore.jpeg",
  },
  {
    title: "CKE - Darmowy poradnik w stresie egzaminacyjnym",
    href: "https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/Stres%20egzaminacyjny%20PORADNIK%20DLA%20OSMOKLASISTOW%20I%20MATURZYSTOW.pdf",
    img: "/images/cke-poradnik-w-stresie-egzaminacyjnym.jpeg",
  },
  {
    title: "Bookland E-book - Szkolne Lifehacki z AI",
    href: "/documents/Bookland_E-book_Szkolne_Lifehacki_z_AI.pdf",
    img: "/images/Bookland_E-book_Szkolne_Lifehacki_z_AI.jpeg",
  },
  {
    title:
      "Dzieci w świecie neuroróżnorodności a kształtowanie kompetencji potrzebnych na rynku pracy. Jak wspierać dzieci w rozpoznawaniu, rozumieniu i pokonywaniu wyzwań neuroróżnorodności. Poradnik dla nauczycieli",
    href: "https://ibe.edu.pl/images/BIBLIOTEKA/Kariera-bez-barier/dzieci-w-swiecie-neuror-norodno-ci-poradnik-dla-nauczycieli.pdf",
    img: "/images/Dzieci-w-swiecie-neuroroznorodnosci.jpeg",
  },
  {
    title:
      "Dzieci w świecie neuroróżnorodności a kształtowanie kompetencji potrzebnych na rynku pracy. Jak wspierać dzieci w rozpoznawaniu, rozumieniu i pokonywaniu wyzwań neuroróżnorodności. Poradnik dla rodziców.",
    href: "https://ibe.edu.pl/images/BIBLIOTEKA/Kariera-bez-barier/Dysfunkcje-w-rozwoju-dzieci-Poradnik%20rodzice.pdf",
    img: "/images/Dzieci-w-swiecie-neuroroznorodnosci-rodzice.jpeg",
  },

  {
    title:
      "Przewodnik po cyberbezpieczeństwie i sztucznej inteligencji dla mediów i twórców cyfrowych",
    href: "https://www.nask.pl/media/2025/10/Handbook-Przewodnik-Cyberbezpieczenstwo-i-AI-dla-Mediow-i-Tworcow.pdf",
    img: "/images/Przewodnik-po-cyberbezpieczenstwie-i-sztucznej-inteligencji.jpeg",
  },

  {
    title: "Jak walczyć z dezinformacją?",
    href: "https://www.gov.pl/web/cyfryzacja/walczymy-z-dezinformacja",
    img: "/images/Jak-walczyc-z-dezinformacja.jpeg",
  },
  {
    title: "Uczniowie z ADHD w klasie. Poradnik dla nauczycieli",
    href: "https://ibe.edu.pl/files/BIBLIOTEKA/Wspieranie-dostepnosci-edukacji/Uczniowie%20z%20ADHD%20w%20klasie.%20Poradnik%20dla%20nauczycieli.pdf",
    img: "/images/uczniowie-z-adhd-w-klasie.jpeg",
  },
];

const digitalBonuses = [
  {
    title: "Jesienne zabawy z rodzicem",
    href: "/documents/zabawy-jesien.pdf",
    img: "/images/zabawy-jesen.jpeg",
  },
  {
    title: "Zimowe zabawy z rodzicem",
    href: "/documents/zabawy-zima.pdf",
    img: "/images/zabawy-zima.jpeg",
  },
  {
    title: "Zabawy sensoryczne",
    href: "/documents/zabawy-sensoryczne.pdf",
    img: "/images/zabawy-sensoryczne.jpeg",
  },
  {
    title: "Dzień św. Patryka - Ebook",
    href: "/documents/dzien-patryka.pdf",
    img: "/images/dzien-patryka.jpeg",
  },
  {
    title:
      "Mózg w ruchu - jak aktywność sensoryczno - motoryczna wpływa na rozwój emocji i koncentracji oraz samoreguacji sensorycznej - cz.1",
    href: "/documents/cwiczenia-i-aktywnosci-si-ebook-1-odn.pdf",
    img: "/images/cwiczenia-i-aktywnosci-si-ebook-1-odn.jpeg",
  },
  {
    title:
      "Mózg w ruchu - jak aktywność sensoryczno - motoryczna wpływa na rozwój emocji i koncentracji oraz samoreguacji sensorycznej - cz.2",
    href: "/documents/cwiczenia-i-aktywnosci-si-ebook-2-odn.pdf",
    img: "/images/cwiczenia-i-aktywnosci-si-ebook-2-odn.jpeg",
  },
];

export default function ReportsPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <section className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/images/nask-skorzystaj.jpeg"
            alt="Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">
              Raporty NASK
            </h1>
            <a
              href="https://www.nask.pl/"
              target="_blank"
              className="inline-block py-3 px-8 rounded-lg bg-white text-gray-900 font-semibold text-lg shadow-md hover:bg-gray-100 transition"
            >
              Wejdź
            </a>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <div
                key={report.href}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <Image
                  src={report.img}
                  alt={report.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover mb-4"
                />
                <h2 className="text-lg font-semibold mb-3">
                  {fixOrphans(report.title)}
                </h2>
                <Link
                  href={report.href}
                  target="_blank"
                  className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium text-center transition"
                >
                  Pobierz
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Higiena cyfrowa
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalHygieneReports.map((report) => (
              <div
                key={report.href}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <Image
                  src={report.img}
                  alt={report.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-3">
                  {fixOrphans(report.title)}
                </h3>
                <Link
                  href={report.href}
                  target="_blank"
                  className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium text-center transition"
                >
                  Pobierz
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Nie tylko cyfrowo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalBonuses.map((report) => (
              <div
                key={report.href}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <Image
                  src={report.img}
                  alt={report.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-3">
                  {fixOrphans(report.title)}
                </h3>
                <Link
                  href={report.href}
                  target="_blank"
                  className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium text-center transition"
                >
                  Pobierz
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
