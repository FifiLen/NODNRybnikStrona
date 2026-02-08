"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shield, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button"; // ✅ poprawny import Button
import Link from "next/link"; // ✅ poprawny import Link
import { Header } from "@/components/layout-components/header";
import { Footer } from "@/components/layout-components/footer";

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
      <div className="mt-16 max-w-4xl mx-auto">
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-start gap-3 text-amber-900">
              <Shield className="h-6 w-6 text-amber-700 mt-1 shrink-0" />
              {fixOrphans(
                "Zasady dotyczące zapobiegania nadużyciom i ochrony praw dzieci"
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              {fixOrphans(
                "Jeśli podczas jakichkolwiek aktywności organizowanych przez NODN w Rybniku doszło do złamania zasad, prosimy o zgłoszenie tego przypadku. Zapewniamy pełną poufność i gwarantujemy, że każde zgłoszenie będzie potraktowane z najwyższą uwagą."
              )}
            </p>
            <p>
              {fixOrphans(
                "Zachęcamy do podania danych kontaktowych, abyśmy mogli wrócić z informacją zwrotną. Gwarantujemy, że Twoje dane zostaną udostępnione jedynie osobom rozpatrującym zgłoszenie, a Twoja tożsamość nie zostanie ujawniona osobie odpowiedzialnej za naruszenie."
              )}
            </p>

            <div>
              <h4 className="font-semibold text-navy-900 mb-2">
                {fixOrphans("Jak zgłosić nadużycie:")}
              </h4>
              <p>
                {fixOrphans(
                  "Wyślij e-mail do osoby kontaktowej odpowiedzialnej za monitorowanie polityki zapobiegania nadużyciom:"
                )}
              </p>
              <div className="mt-2 p-3 bg-slate-100 rounded-md">
                <a
                  href="mailto:czogalla.matheus@gmail.com"
                  className="flex items-center gap-2 text-navy-600 font-medium hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {/* Adres e-mail zostawiamy bez fixOrphans */}
                  czogalla.matheus@gmail.com
                </a>
              </div>
            </div>

            <div>
              <p className="mt-4">
                {fixOrphans(
                  "Jeśli doświadczyłeś/aś wykorzystania, nadużyć lub przemocy, lub znasz osobę, która tego doświadczyła, sprawdź listę miejsc, do których możesz zwrócić się o pomoc."
                )}
              </p>

              <Button asChild size="sm" className="mt-3">
                <Link
                  href="/documents/Lista-organizacji-udzielajacych-wsparcia.pdf"
                  download
                >
                  <Download className="mr-2 h-4 w-4" />
                  {fixOrphans("Pobierz dokument")}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}

/**
 * fixOrphans – poprawia "sieroty" (spójniki/przyimki jedno- i dwuliterowe),
 * zastępując zwykłą spację na końcu słowa twardą spacją (NBSP).
 */
export function fixOrphans(text: string): string {
  // Lista najczęstszych polskich "sierot"
  const orphans = ["i", "a", "o", "u", "w", "z", "od", "do", "na", "za", "po"];

  let result = text;
  orphans.forEach((word) => {
    // używamy regexa: słowo + spacja
    const regex = new RegExp(`\\b${word} `, "gi");
    result = result.replace(regex, `${word}\u00A0`); // \u00A0 = nbsp
  });

  return result;
}
