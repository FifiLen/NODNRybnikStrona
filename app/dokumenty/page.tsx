"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Shield, Mail } from "lucide-react";
import { Header } from "@/components/layout-components/header";
import { Footer } from "@/components/layout-components/footer";
import Link from "next/link";

const documents = [
  {
    name: "Akredytacja z 2025",
    type: "PDF",
    external: true,
    url: "/documents/Akredytacja-2025.pdf",
  },
  {
    name: "Akredytacja z 2020",
    type: "PDF",
    external: true,
    url: "/documents/akredytacja-s.pdf",
  },
  {
    name: "Akredytacja z 2015",
    type: "PDF",
    external: true,
    url: "/documents/Akredytacja-2015.pdf",
  },
  {
    name: "SUS/DEKRA",
    type: "PDF",
    external: true,
    url: "/documents/dekra.pdf",
  },
  {
    name: "TGLS",
    type: "PDF",
    external: true,
    url: "/documents/tgls.pdf",
  },
  {
    name: "Statut",
    type: "PDF",
    external: true,
    url: "/documents/statut-nodn.pdf",
  },
  {
    name: "Wpis do rejestru Wojewody Śląskiego",
    type: "PDF",
    url: "/documents/Marszałkowski.pdf",
  },
  {
    name: "Wpis do rejestru Śląskiego Kuratora Oświaty",
    type: "PDF",
    url: "/documents/Kuratorium.pdf",
  },
  {
    name: "System zapewnienia jakości kształcenia",
    type: "PDF",
    external: true,
    url: "/documents/system-zapewnienia-jakosci.pdf",
  },
  {
    name: "Zaświadczenie ukończenia szkolenia - wzór",
    type: "PDF",
    external: true,
    url: "https://odnrybnik.edu.pl/?page_id=2651",
  },
  {
    name: "Formularz zgłoszenia na kurs/szkolenie",
    type: "DOCX",
    external: true,
    url: "/documents/formularz-zgloszeniowy.docx",
  },
  {
    name: "Baza Usług Rozwojowych",
    type: "Link",
    external: true,
    url: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144",
  },
  {
    name: "Polityka prywatności i RODO",
    type: "PDF",
    external: true,
    url: "/documents/polityka-prywatnosci.pdf",
  },
  {
    name: "Standardy ochrony małoletnich",
    type: "Link",
    external: true,
    url: "/o-nas/standardy-ochrony",
  },
];

type DocumentType = {
  name: string;
  type: string;
  external?: boolean;
  url?: string;
};

export default function DocumentsPage() {
  const handleDownload = (doc: DocumentType) => {
    if (doc.external && doc.url) {
      window.open(doc.url, "_blank");
    } else {
      // console.log(`Pobieranie: ${doc.name}`);
    }
  };

  return (
    <>
      <Header />
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy-900">
              Dokumenty do pobrania
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Wszystkie niezbędne pliki w jednym miejscu
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-navy-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy-900 text-sm leading-tight">
                        {doc.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{doc.type}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDownload(doc)}
                      className="shrink-0"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* === SEKCJA INFORMACJI PRAWNYCH === */}
          <div className="mt-8 max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-3">
                      Informacja dotycząca wzoru zaświadczenia
                    </h3>
                    <div className="text-sm text-gray-700 leading-relaxed">
                      <p className="mb-2">
                        Zgodnie z{" "}
                        <strong>
                          § 15 ust. 3 rozporządzenia Ministra Edukacji Narodowej
                          z dnia 17 marca 2017 r. w sprawie szczegółowej
                          organizacji publicznych szkół i publicznych placówek
                        </strong>{" "}
                        (Dz. U. z 2017 r. poz. 649, z późn. zm.), uczestnik
                        doskonalenia zawodowego nauczycieli otrzymuje
                        zaświadczenie o ukończeniu doskonalenia zawodowego.
                      </p>
                      <p>
                        Wzór zaświadczenia dostępny jest do pobrania w sekcji
                        dokumentów powyżej.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className=" mt-4 tracking-tight text-blue-500 underline-offset-1 underline">
              <Link
                href={
                  "https://rspo.gov.pl/institutions?q=%7B%22filter%22:%22Niepubliczny%20O%C5%9Brodek%20Doskonalenia%20Nauczycieli%20w%20Rybniku%22%7D"
                }
              >
                Rządowy rejestr placówek oświatowych zarejestrowanych w Polsce
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
