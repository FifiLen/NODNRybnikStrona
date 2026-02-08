"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Phone,
  Mail,
  ExternalLink,
  AlertTriangle,
  Heart,
  Scale,
  Eye,
  Home,
  Building,
  Gavel,
  Stethoscope,
  HelpCircle,
} from "lucide-react";
import { Header } from "@/components/layout-components/header";
import { Footer } from "@/components/layout-components/footer";
import Image from "next/image";

export default function ChildProtectionStandardsPage() {
  // 🔧 TYLKO GRAFIKA — podmień ścieżkę i alt
  const graphic = {
    title: "Standardy ochrony małoletnich — plakat A4",
    src: "/documents/standard-ochrony-dzieci.png", // <- tutaj wstaw swoją ścieżkę
    alt: "Plakat A4: Standardy ochrony małoletnich",
  };

  const emergencyNumbers = [
    {
      name: "Numer alarmowy",
      number: "112",
      description: "Policja, straż pożarna, pogotowie ratunkowe",
      type: "emergency",
    },
    {
      name: "Niebieska Linia",
      number: "800 12 00 02",
      description:
        "Ogólnopolskie Pogotowie dla Ofiar Przemocy w Rodzinie (całodobowa, bezpłatna)",
      type: "help",
      additional: "Dyżur prawny: (22) 666 28 50",
    },
    {
      name: "Linia Pomocy Pokrzywdzonym",
      number: "+48 222 309 900",
      description: "Ogólnokrajowa linia pomocy (całodobowa)",
      type: "help",
    },
    {
      name: "Policyjny telefon zaufania",
      number: "800 120 226",
      description: "Dla osób doznających przemocy domowej (9:30-15:30)",
      type: "help",
    },
  ];

  const helpInstitutions = [
    {
      name: "Ośrodki pomocy społecznej",
      description: "Pomoc w sprawach socjalnych, bytowych i prawnych",
      icon: Building,
    },
    {
      name: "Powiatowe centra pomocy rodzinie",
      description: "Wsparcie prawne, socjalne, terapeutyczne",
      icon: Heart,
    },
    {
      name: "Ośrodki interwencji kryzysowej",
      description: "Schronienie i wsparcie w sytuacjach kryzysowych",
      icon: Shield,
    },
    {
      name: "Specjalistyczne ośrodki wsparcia",
      description: "Bezpłatne całodobowe schronienie i kompleksowa pomoc",
      icon: Home,
    },
    {
      name: "Sieć Pomocy Pokrzywdzonym Przestępstwem",
      description: "Pomoc prawna, psychologiczna i materialna",
      icon: Users,
    },
    {
      name: "Sądy opiekuńcze",
      description: "Sprawy opiekuńcze i alimentacyjne",
      icon: Gavel,
    },
    {
      name: "Placówki ochrony zdrowia",
      description: "Zaświadczenia lekarskie o doznanych obrażeniach",
      icon: Stethoscope,
    },
    {
      name: "Punkty nieodpłatnej pomocy prawnej",
      description: "Bezpłatna pomoc prawna",
      icon: Scale,
    },
  ];

  const standards = [
    "W jednostce nie są zatrudniane osoby mogące zagrażać bezpieczeństwu małoletnich",
    "Pracownicy potrafią zdiagnozować symptomy krzywdzenia małoletniego oraz podejmować interwencje",
    "Podejmowane postępowania nie mogą naruszać praw dziecka, praw człowieka i praw ucznia",
    "Małoletni wiedzą, jak unikać zagrożeń w kontaktach z dorosłymi i rówieśnikami",
    "Małoletni wiedzą, do kogo zwracać się o pomoc w sytuacjach trudnych",
    "Rodzice poszerzają wiedzę o metodach wychowania dziecka bez stosowania przemocy",
  ];

  return (
    <>
      <Header />
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-3">
            <h1 className="text-4xl font-bold text-navy-900 mb-4">
              Standardy ochrony małoletnich
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kompleksowe zasady i procedury mające na celu zapewnienie
              bezpieczeństwa i ochrony małoletnich przed różnymi formami
              przemocy
            </p>
          </div>

          {/* 🔶 JEDNA GRAFIKA w proporcjach A4 — bez pobierania */}

          <div className="relative w-full aspect-[210/297] rounded-sm shadow-sm">
            <Image
              src={graphic.src}
              alt={graphic.alt}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 780px, 90vw"
              priority
            />
          </div>

          {/* Wprowadzenie prawne */}
          <Card className="mb-8 border-l-4 border-l-navy-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-navy-600" />
                Podstawa prawna
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nowelizacja Kodeksu rodzinnego i opiekuńczego (Dz.U. 2023 poz.
                1606) określiła warunki skutecznej ochrony małoletnich przed
                różnymi formami przemocy. Wprowadzone zmiany wskazują na
                potrzebę opracowania jasnych i spójnych standardów postępowania
                w sytuacjach podejrzenia krzywdzenia lub krzywdzenia
                małoletnich.
              </p>
              <div className="p-4 bg-navy-50 border border-navy-200 rounded-lg">
                <p className="text-navy-800 text-sm">
                  „Standardy ochrony małoletnich" są jednym z elementów
                  systemowego rozwiązania ochrony małoletnich przed krzywdzeniem
                  i stanowią formę zabezpieczenia ich praw.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Główne założenia standardów */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-navy-600" />
                Główne założenia standardów ochrony
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {standards.map((standard, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-navy-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm">{standard}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Numery alarmowe */}
          <Card className="mb-8 bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <Phone className="h-5 w-5 text-red-600" />
                Numery alarmowe i linie pomocy
              </CardTitle>
              <div className="mt-2">
                <Badge variant="destructive" className="bg-red-600">
                  Prawo zabrania stosowania przemocy i krzywdzenia swoich
                  bliskich!
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {emergencyNumbers.map((contact, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      contact.type === "emergency"
                        ? "bg-red-100 border-red-300"
                        : "bg-blue-100 border-blue-300"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Phone
                        className={`h-5 w-5 ${
                          contact.type === "emergency"
                            ? "text-red-600"
                            : "text-blue-600"
                        }`}
                      />
                      <div>
                        <h4
                          className={`font-bold text-lg ${
                            contact.type === "emergency"
                              ? "text-red-800"
                              : "text-blue-800"
                          }`}
                        >
                          {contact.number}
                        </h4>
                        <p
                          className={`font-semibold text-sm ${
                            contact.type === "emergency"
                              ? "text-red-700"
                              : "text-blue-700"
                          }`}
                        >
                          {contact.name}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`text-sm ${
                        contact.type === "emergency"
                          ? "text-red-700"
                          : "text-blue-700"
                      }`}
                    >
                      {contact.description}
                    </p>
                    {contact.additional && (
                      <p
                        className={`text-xs mt-2 ${
                          contact.type === "emergency"
                            ? "text-red-600"
                            : "text-blue-600"
                        }`}
                      >
                        {contact.additional}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Instytucje pomocowe */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-navy-600" />
                Instytucje, które mogą pomóc
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {helpInstitutions.map((institution, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <institution.icon className="h-6 w-6 text-navy-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-2 text-sm">
                          {institution.name}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {institution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Szczegółowe kontakty */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Niebieska Linia */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Niebieska Linia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-bold text-blue-900">800 12 00 02</p>
                    <p className="text-sm text-blue-700">
                      Linia całodobowa i bezpłatna
                    </p>
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>
                      <strong>Konsultacje w językach obcych:</strong>
                    </p>
                    <p>• Poniedziałki 18:00-22:00 - język angielski</p>
                    <p>• Wtorki 18:00-22:00 - język rosyjski</p>
                    <p>• Dostępny język migowy przez Skype</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">
                        niebieskalinia@niebieskalinia.info
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-blue-600" />
                      <a
                        href="https://www.niebieskalinia.pl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        www.niebieskalinia.pl
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Linia Pomocy Pokrzywdzonym */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Phone className="h-5 w-5 text-green-600" />
                  Linia Pomocy Pokrzywdzonym
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-bold text-green-900">+48 222 309 900</p>
                    <p className="text-sm text-green-700">
                      Całodobowa linia pomocy
                    </p>
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>
                      <strong>Dostępne usługi:</strong>
                    </p>
                    <p>• Anonimowe informacje o możliwości uzyskania pomocy</p>
                    <p>• Szybka porada psychologiczna i prawna</p>
                    <p>• Umówienie spotkania ze specjalistami</p>
                    <p>• Konsultacje w językach obcych i migowym</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-green-600" />
                    <a
                      href="https://www.gov.pl/web/numer-alarmowy-112/-48-222-309-900-numer-sos-liniapomocy-pokrzywdzonym"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:underline"
                    >
                      Więcej informacji
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ważne informacje */}
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-800">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Pamiętaj!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-yellow-800 font-semibold">
                  Jeżeli Ty lub ktoś z Twoich bliskich jest osobą doznającą
                  przemocy domowej, nie wstydź się prosić o pomoc!
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-3 bg-white border border-yellow-300 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">
                      Natychmiastowa pomoc
                    </h4>
                    <p className="text-sm text-yellow-800">
                      Wezwij Policję, dzwoniąc na numer alarmowy{" "}
                      <strong>112</strong>. Prawo stoi po Twojej stronie!
                    </p>
                  </div>
                  <div className="p-3 bg-white border border-yellow-300 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">
                      Zawiadomienie o przestępstwie
                    </h4>
                    <p className="text-sm text-yellow-800">
                      Masz prawo do złożenia zawiadomienia do Prokuratury,
                      Policji lub Żandarmerii Wojskowej.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
