"use client";

import { Footer } from "@/components/layout-components/footer";
import { Header } from "@/components/layout-components/header";
import {
  Calendar,
  Clock,
  Mic,
  Users,
  ShieldCheck,
  Info,
  PenSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { fixOrphans } from "@/lib/typography"; // ✅ import helpera

// --- DANE DO ŁATWEJ EDYCJI W PRZYSZŁOŚCI ---

const topics = [
  // --- ISTNIEJĄCE TEMATY ---
  {
    title: "Niebezpieczeństwo bezstresowego wychowania.",
    description:
      "Co się dzieje z umysłem dziecka, które nie doświadcza trudności, nie musi regulować emocji i nie stawia mu się wyzwań – o konsekwencjach, samokontroli i relacji.",
    imageUrl: "/images/strefa-rodzica/1.png",
  },
  {
    title: "Wybory i konsekwencje.",
    description:
      "Jak budować sprawczość, pewność siebie i odpowiedzialność – praktyczne protokoły domowe (reguły, feedback, naprawa szkody).",
    imageUrl: "/images/strefa-rodzica/2.png",
  },
  {
    title: "Wizerunek dziecka i prawo do prywatności.",
    description:
      "Sharenting 2.0: komercjalizacja dzieciństwa, ślad cyfrowy i skutki na lata – dziecko to nie projekt medialny.",
    imageUrl: "/images/strefa-rodzica/3.png",
  },
  {
    title: "„Kasyno w kieszeni”.",
    description:
      "Mechaniki hazardowe w grach i apkach finansowych – jak je rozpoznać i co z tym zrobić w domu, szkole i gabinecie.",
    imageUrl: "/images/strefa-rodzica/4.png",
  },
  {
    title: "Eleganckie uzależnienie.",
    description:
      "Hazard i mikrospekulacja u „białych kołnierzyków” – praca ze wstydem, długiem i podwójnym życiem.",
    imageUrl: "/images/strefa-rodzica/5.png",
  },
  {
    title: "Dzieci w cieniu telefonu.",
    description:
      "Równoległe życie rodzica a nietrwałość więzi – jak „kliknięcia” dorosłych kodują układ limbiczny dziecka.",
    imageUrl: "/images/strefa-rodzica/6.png",
  },
  {
    title: "Sekty bez ołtarza.",
    description:
      "Algorytmy, lojalność i radykalizacja klasy średniej – dlaczego „rozsądni” dorośli też ulegają.",
    imageUrl: "/images/strefa-rodzica/7.png",
  },
  {
    title: "Złudzenie wolności.",
    description:
      "Pornografia i aplikacje: kiedy ciało staje się walutą – kontrakty, których młodzież nie rozumie (i jak o tym rozmawiać).",
    imageUrl: "/images/strefa-rodzica/8.png",
  },
  {
    title: "Pokolenie na sprzedaż.",
    description:
      "Intymność jako waluta w erze aplikacji – jeśli Twoje dziecko „sprzedaje” prywatność, czy wciąż ją posiada?",
    imageUrl: "/images/strefa-rodzica/9.png",
  },
  // {
  //   title: "Uzależnienie mojego dziecka.",
  //   description: 'Ile roli rodzica w "wpychaniu" dziecka w świat uzależnień?',
  //   imageUrl: "/images/strefa-rodzica/9.png",
  // },

  // --- NOWE TEMATY (z Twojej listy) ---
  {
    title: "Co się dzieje w głowie nastolatka?",
    description:
      "Jak pomóc dziecku nazwać i rozumieć emocje w okresie dorastania – praktyczny przewodnik.",
    imageUrl: "/images/strefa-rodzica/extra-1.png",
  },
  {
    title: "Złość nie jest wrogiem",
    description:
      "Jak pomóc dziecku wyrażać złość w sposób bezpieczny i akceptowalny społecznie.",
    imageUrl: "/images/strefa-rodzica/extra-2.png",
  },
  {
    title: "Słyszeć czy słuchać?",
    description: "Aktywne słuchanie i komunikacja, która buduje zaufanie.",
    imageUrl: "/images/strefa-rodzica/extra-3.png",
  },
  {
    title: "Moje potrzeby – Twoje potrzeby",
    description:
      "Jak uczyć młodego człowieka mówienia o swoich potrzebach i szanowania potrzeb innych.",
    imageUrl: "/images/strefa-rodzica/extra-4.png",
  },
  {
    title: "Stop – nie chcę!",
    description:
      "Asertywność w relacjach rówieśniczych i rodzinnych – jak wspierać dziecko w stawianiu granic.",
    imageUrl: "/images/strefa-rodzica/extra-5.png",
  },
  {
    title: "Kiedy emocje biorą górę",
    description: "Metody samoregulacji i wyciszania się w domu i w szkole.",
    imageUrl: "/images/strefa-rodzica/extra-6.png",
  },
  {
    title: "Baśnioterapia dla nastolatków?",
    description:
      "Jak wykorzystać filmy, seriale i opowieści do rozmowy o emocjach i wartościach.",
    imageUrl: "/images/strefa-rodzica/extra-7.png",
  },
  {
    title: "Razem, nie obok siebie",
    description:
      "Pomysły na zacieśnianie więzi rodzic–dziecko w codziennym życiu.",
    imageUrl: "/images/strefa-rodzica/extra-8.png",
  },
  {
    title: "Zamiast kłótni – porozumienie",
    description: "Rozwiązywanie konfliktów w domu – narzędzia, które działają.",
    imageUrl: "/images/strefa-rodzica/extra-9.png",
  },
  {
    title: "Rodzeństwo - jak budować relacje bez rywalizacji",
    description: "Rozwiązywanie konfliktów w domu – narzędzia, które działają.",
    imageUrl: "/images/strefa-rodzica/extra-10.jpeg",
  },
  {
    title: "Kiedy dzieci pytają o drony i wojnę",
    description: "Rozwiązywanie konfliktów w domu – narzędzia, które działają.",
    imageUrl: "/images/strefa-rodzica/extra-11.jpeg",
  },
];

// Kalendarz spotkań
const calendarDates = [
  "09.10.2025",
  "16.10.2025",
  "23.10.2025",
  "06.11.2025",
  "20.11.2025",
  "27.11.2025",
  "04.12.2025",
  "11.12.2025",
  "15.01.2026",
  "29.01.2026",
  "12.02.2026",
  "19.02.2026",
  "05.03.2026",
  "19.03.2026",
  "26.03.2026",
  "16.04.2026",
  "23.04.2026",
  "07.05.2026",
  "21.05.2026",
  "04.06.2026",
];

// Zasady uczestnictwa
const participationRules = [
  "Brak nagrań i zrzutów ekranu.",
  "Pytania dotyczą zachowań i rozwiązań, nie danych wrażliwych osób trzecich.",
  "Psychoedukacja ≠ indywidualna diagnoza/terapia (wskazujemy ścieżki pomocy).",
  "Dyskrecja i kultura wypowiedzi.",
];

const registrationFormLink =
  "https://forms.cloud.microsoft/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__tEz5RlUNUJPRDAwN0NUNjlVQVBDSDZaOTIyR1hJQi4u&route=shorturl";

export default function StrefaRodzicaPage() {
  return (
    <>
      <Header />
      <div className="bg-slate-50 text-slate-800">
        {/* Nagłówek */}
        <header className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {fixOrphans("Strefa Nauczyciela/Rodzica")}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300">
              {fixOrphans(
                "Bezpłatny cykl spotkań online w czasie rzeczywistym"
              )}
            </p>
            <div className="mt-8 flex justify-center items-center space-x-6 text-slate-300">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{fixOrphans("Czwartek")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{fixOrphans("Godzina 20:00")}</span>
              </div>
            </div>
            <p className="mt-8 max-w-3xl mx-auto text-slate-400 leading-relaxed">
              {fixOrphans(
                "To przestrzeń dla dorosłych, którzy chcą rozumieć – a nie tylko „reagować”. Zapraszamy rodziców, opiekunów i wychowawców młodych ludzi, którzy mierzą się z wyzwaniami współczesności: rozwojowymi, społecznymi oraz cyfrowymi."
              )}
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16 md:py-24">
          {/* Program */}
          <section id="program">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                {fixOrphans("Program serii pierwszej")}
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                {fixOrphans(
                  "Rozmawiamy o sprawach ważnych i często przemilczanych, łącząc perspektywę psychologii klinicznej, edukacji i etyki cyfrowej."
                )}
              </p>
            </div>

            {/* KAFELKI TEMATÓW */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {topics.map((topic, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={topic.imageUrl}
                      alt={fixOrphans(topic.title)}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">
                      {fixOrphans(topic.title)}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-4">
                      {fixOrphans(topic.description)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-4 max-w-4xl mx-auto">
              <Info className="w-5 h-5 inline-block mr-2" />
              <span className="text-sm">
                {fixOrphans(
                  "Uwaga: w kolejnych tygodniach dołączą zaproszeni specjaliści (psychologowie, pedagodzy, prawnicy, lekarze)."
                )}
              </span>
            </div>
          </section>

          {/* Szczegóły i zasady */}
          <section
            id="szczegoly"
            className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {fixOrphans("Jak wyglądają spotkania?")}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mic className="w-6 h-6 mr-4 mt-1 text-blue-600 flex-shrink-0" />
                  <div>
                    <strong className="block">{fixOrphans("Struktura")}</strong>
                    <span>
                      {fixOrphans(
                        "30 – 45 min wykładu + Q&A (anonimowe pytania na czacie)."
                      )}
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 mt-1 text-blue-600 flex-shrink-0" />
                  <div>
                    <strong className="block">{fixOrphans("Termin")}</strong>
                    <span>{fixOrphans("Czwartek, godz. 20:00")}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 mr-4 mt-1 text-blue-600 flex-shrink-0" />
                  <div>
                    <strong className="block">{fixOrphans("Dla kogo")}</strong>
                    <span className="block">
                      {fixOrphans(
                        "- Rodzice/opiekunowie dzieci i nastolatków."
                      )}
                    </span>
                    <span className="block">
                      {fixOrphans("- Rodzice młodych dorosłych.")}
                    </span>
                    <span className="block">
                      {fixOrphans("- Wychowawcy i nauczyciele (jako goście).")}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {fixOrphans("Zasady uczestnictwa")}
              </h3>
              <ul className="space-y-4">
                {participationRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <ShieldCheck className="w-6 h-6 mr-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>{fixOrphans(rule)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Kalendarz */}
          <section id="kalendarz" className="mt-16 md:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                {fixOrphans("Kalendarz spotkań")}
              </h2>
              <p className="mt-3 text-slate-600">
                {fixOrphans("Zaplanuj czas na rozwój i wsparcie.")}
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              {calendarDates.map((date, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
                >
                  <div className="font-semibold text-slate-800">
                    {fixOrphans(date)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section
            id="zapisy"
            className="mt-16 md:mt-24 bg-white p-8 md:p-12 rounded-lg shadow-lg text-center"
          >
            <PenSquare className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              {fixOrphans("Zarezerwuj miejsce")}
            </h2>
            <p className="mt-4 text-slate-600">
              {fixOrphans(
                "Udział w spotkaniach jest bezpłatny. Liczba miejsc ograniczona."
              )}
            </p>
            <div className="mt-8">
              <Link
                href={registrationFormLink}
                className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {fixOrphans("Przejdź do formularza zgłoszeniowego")}
              </Link>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
