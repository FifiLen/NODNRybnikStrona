"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import Image from "next/image";
import { CheckCircle, Mail, Target, ArrowRight, Shield } from "lucide-react";
import { fixOrphans } from "@/lib/typography";

export function OfferSection() {
  return (
    <section
      id="oferta"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container px-4 md:px-6">

        <SectionTitle
          title={fixOrphans("Szkolenia dla nauczycieli")}
          subtitle={
            <>
              {fixOrphans(
                "Rozwijaj swoje kompetencje. Podnoś kwalifikacje. Zyskuj nowe umiejętności."
              )}{" "}
              <br />
              {fixOrphans(
                "Korzystaj z oferty dla osób indywidualnych i/lub dla Rad Pedagogicznych."
              )}
            </>
          }
        />


        <div className="space-y-12">

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="hover-lift border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 h-full flex flex-col">
              <CardHeader className="pb-4">
                <Badge className="bg-blue-600 text-white w-fit">
                  {fixOrphans("Dla Rad Pedagogicznych")}
                </Badge>
                <CardTitle className="text-navy-900 pt-2 text-xl">
                  {fixOrphans("Szkolenia dla Rad Pedagogicznych")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <p className="text-gray-700">
                  {fixOrphans(
                    "Szkolenia zdalne w czasie rzeczywistym z panelem dyskusyjnym lub szkolenia online z dostępem do platformy na 365 dni"
                  )}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    'Możliwość wyboru tematu szkolenia "na zamówienie"',
                    "Bez limitu uczestników",
                    "Indywidualne ustalenie terminów zajęć z placówką",
                    'Bogata baza materiałów poszkoleniowych w formie "Biblioteki Specjalisty"',
                    "Dostęp do materiałów poszkoleniowych na platformie eLearning na 365 dni",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>{fixOrphans(item)}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    (window.location.href = "/szkolenia?typ=rada-pedagogiczna")
                  }
                >
                  {fixOrphans("Zobacz ofertę")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yellow%20and%20Blue%20Playful%20Modern%20Child%20Daycare%20Center%20Instagram%20Post.jpg-50Bsg3E4Oa6wDqHuBdByDEpPtshJpE.jpeg"
                alt={fixOrphans("Szkolenia dla rad pedagogicznych")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/szkolenia-dedykowane.jpeg"
                alt={fixOrphans("Szkolenia indywidualne dedykowane")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            </div>
            <Card className="hover-lift border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 h-full flex flex-col md:order-2">
              <CardHeader className="pb-4">
                <Badge className="bg-purple-600 text-white w-fit">
                  {fixOrphans("Indywidualne")}
                </Badge>
                <CardTitle className="text-navy-900 pt-2 text-xl">
                  {fixOrphans(
                    "Szkolenia dedykowane/spersonalizowane/indywidualne"
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <p className="text-gray-700">
                  {fixOrphans(
                    "Program wraz z zakresem materiałów zostanie stworzony według zdiagnozowanych oczekiwań i/lub potrzeb Waszej placówki. Propozycja programu oraz specjalisty prowadzącego szkolenie zostanie przesłana do akceptacji Kadry Zarządzającej."
                  )}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Spersonalizowany program szkoleniowy",
                    "Wybór specjalisty/trenera z listy zaproponowanych",
                    "Dostęp do materiałów poszkoleniowych na okres 365 dni",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>{fixOrphans(item)}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    (window.location.href =
                      "/kontakt?temat=szkolenie-dedykowane")
                  }
                >
                  {fixOrphans("Zapytaj o wycenę")}{" "}
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>


          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="hover-lift border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 h-full flex flex-col">
              <CardHeader className="pb-4">
                <Badge className="bg-green-600 text-white w-fit">
                  {fixOrphans("Baza Usług Rozwojowych")}
                </Badge>
                <CardTitle className="text-navy-900 pt-2 text-xl">
                  {fixOrphans(
                    "Baza Usług Rozwojowych / KFS / Lokalne Grupy Wsparcia"
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <p className="text-gray-700">
                  {fixOrphans(
                    "Z dofinansowania do szkoleń może skorzystać każda osoba, która ukończyła 18 rok życia. O wsparcie finansowe można wnioskować z własnej inicjatywy. Swoich pracowników może również zgłosić Pracodawca pod warunkiem uruchomienia naborów."
                  )}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Dofinansowanie do 95% wartości szkolenia",
                    "Szeroka oferta kursów/szkoleń",
                    "Możliwość wystawienia karty usługi BUR według zapotrzebowania osoby indywidualnej lub Pracodawcy",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>{fixOrphans(item)}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    (window.location.href = "/szkolenia?dofinansowanie=bur")
                  }
                >
                  {fixOrphans("Sprawdź uprawnienia")}{" "}
                  <Target className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <div className="relative h-full flex flex-col rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/kfs.png"
                alt={fixOrphans("BUR szkolenia")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  {fixOrphans(
                    "Szkolenia z obszaru sztucznej inteligencji i jej wykorzystania w edukacji"
                  )}
                </h3>
                <p className="text-gray-700 mb-6">
                  {fixOrphans(
                    "Szkolenie z wykorzystania AI w edukacji poprzez pryzmat zalet, wad i wyzwań stawianych przez rozwój technologii."
                  )}
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-600">
                      300+
                    </div>
                    <div className="text-sm text-gray-600">
                      {fixOrphans("Uczestników")}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">15</div>
                    <div className="text-sm text-gray-600">
                      {fixOrphans("Modułów")}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">1</div>
                    <div className="text-sm text-gray-600">
                      {fixOrphans("W regionie")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/vr-wspolprace.png"
                alt={fixOrphans("Szkolenia AI")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
