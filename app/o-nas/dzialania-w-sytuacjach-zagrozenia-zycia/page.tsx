"use client";

import { Header } from "@/components/layout-components/header";
import { Footer } from "@/components/layout-components/footer";
import Image from "next/image";
import Link from "next/link";

const guides = [
  // 1) materiały główne
  {
    title: "Bądź gotowy! – poradnik RCB",
    href: "/documents/Bądź_gotowy!_poradnik.pdf",
    img: "/images/badz-gotowy.png",
  },
  {
    title: "Poradnik bezpieczeństwa",
    href: "/documents/Poradnik__bezpieczeństwa__pion_wersja_polskojęzyczna_PL.pdf",
    img: "/images/poradnik-bezpieczenstwa.png",
  },
  {
    title: "Plecak bezpieczeństwa",
    href: "/images/plecak-bezpieczenstwa.jpeg",
    img: "/images/plecak-ewakuacyjny.png",
  },

  // 2) „Działania w sytuacjach zagrożenia życia” – ze screenów
  {
    title: "Pierwsza pomoc",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/pierwsza-pomoc",
    img: "/images/pierwsza-pomoc.jpeg",
  },
  {
    title: "Sygnały alarmowe i komunikaty ostrzegawcze",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/sygnaly-alarmowe-i-komunikaty-ostrzegawcze",
    img: "/images/sygnaly-alarmowe.jpeg",
  },
  {
    title: "Schronienia",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/schronienia",
    img: "/images/schronienia.jpeg",
  },
  {
    title: "Atak z powietrza",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/atak-z-powietrza",
    img: "/images/atak-z-powietrza.jpeg",
  },
  {
    title: "Bezpieczeństwo w tłumie",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/bezpieczenstwo-w-tlumie",
    img: "/images/bezpieczenstwo-w-tlumie.jpeg",
  },
  {
    title: "Długotrwały brak prądu (blackout)",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/dlugotrwaly-brak-pradu-blackout",
    img: "/images/dlugotrwaly-brak-pradu.jpeg",
  },
  {
    title: "Osoby potrzebujące szczególnej pomocy",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/osoby-potrzebujace-szczegolnej-pomocy",
    img: "/images/szczegolna-pomoc.jpeg",
  },
  {
    title: "Zadbaj o zwierzęta",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/zadbaj-o-zwierzeta",
    img: "/images/zadbaj-o-zwierzeta.jpeg",
  },
  {
    title: "Przygotuj swoje otoczenie",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/przygotuj-swoje-otoczenie",
    img: "/images/przygotuj-otoczenie.jpeg",
  },
  {
    title: "Zagrożenia cyfrowe",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/zagrozenia-cyfrowe",
    img: "/images/zagrozenia-cyfrowe.jpeg",
  },
  {
    title: "Zagrożenie pożarem",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/pozar",
    img: "/images/pozar.jpeg",
  },
  {
    title: "Zagrożenie powodzią",
    href: "https://www.gov.pl/web/poradnikbezpieczenstwa/powodz",
    img: "/images/powodz.jpeg",
  },
];

export default function EmergencyPreparednessPage() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* HERO */}
        <section className="relative w-full h-[420px] md:h-[560px]">
          <Image
            src="/images/zagrozenie.jpeg" // <- ta grafika z RCB (full width)
            alt="Bądź gotowy! Przygotuj plecak ewakuacyjny"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
              Działania w sytuacjach zagrożenia życia
            </h1>
          </div>
        </section>

        {/* KARTY DO POBRANIA */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <article
                key={g.href}
                className="bg-white rounded-xl shadow transition hover:shadow-lg p-4 flex flex-col"
              >
                <Image
                  src={g.img}
                  alt={g.title}
                  width={560}
                  height={340}
                  className="rounded-lg object-cover mb-4"
                />
                <h2 className="text-lg font-semibold mb-3">{g.title}</h2>
                <Link
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 transition"
                >
                  Pobierz
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
