

import type React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { EmergencyNumbers } from "../sections/emergency-numbers";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="flex items-center text-sm text-gray-300 hover:text-white transition-colors group"
  >
    <ChevronRight className="h-4 w-4 mr-2 text-gray-500 group-hover:text-white transition-colors" />
    {children}
  </Link>
);

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h3 className="font-semibold mb-4 border-b border-navy-700 pb-2">
              NODN RYBNIK
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>ul. Rudzka 13c</p>
              <p>44-200 Rybnik</p>
              <p>Budynek B</p>
              <p>3 piętro, pok. 3.3</p>
              <p className="pt-2">tel. +48 797 173 501</p>
              <p>tel. +48 502 162 365</p>
              <p>tel. +48 789 790 860</p>
              <p>tel. +48 503 192 950</p>
              <p className="pt-2">odn.rybnik@gmail.com</p>
              <p>
                Dodatkowe biuro:
                <br /> ul. Magnolii 25
                <br /> 44-207 Rybnik - Golejów
              </p>
            </div>
          </div>

          {/* O NAS */}
          <div>
            <h3 className="font-semibold mb-4 border-b border-navy-700 pb-2">
              O NAS
            </h3>
            <div className="space-y-2">
              <FooterLink href="/o-nas">O NODN</FooterLink>
              <FooterLink href="/projekty">Projekty</FooterLink>
              <FooterLink href="/o-nas/referencje">Referencje</FooterLink>
              <FooterLink href="/dokumenty">Dokumenty</FooterLink>
              <FooterLink href="/documents/akredytacja-s.pdf">
                Akredytacja Śląskiego Kuratora Oświaty
              </FooterLink>
              <FooterLink href="/documents/dekra.pdf">
                Certyfikat usług szkoleniowych i&nbsp;doradczych SUS/DEKRA
              </FooterLink>
              <FooterLink href="/documents/tgls.pdf">
                Certyfikat usług szkoleniowych TGLS{" "}
              </FooterLink>
              <FooterLink href="https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144">
                Wpis do Bazy Usług Rozwojowych
              </FooterLink>
              <FooterLink href="/o-nas/standardy-ochrony">
                Standardy ochrony małoletnich
              </FooterLink>
              <FooterLink href="/o-nas/deklaracja-dostepnosci">
                Deklaracja dostępności
              </FooterLink>
              <FooterLink href="/o-nas/zapobieganie-wykorzystaniu-i-nadurzyc-seksualnych">
                Zapobieganie wykorzystaniu i nadużyciu seksualnym
              </FooterLink>

              <FooterLink href="/o-nas/dzialania-w-sytuacjach-zagrozenia-zycia">
                Działania w sytuacjach zagrożenia życia
              </FooterLink>

              <FooterLink href="/grafiki-i-zdjecia">
                Grafiki i zdjęcia
              </FooterLink>
            </div>
          </div>


          <div>
            <h3 className="font-semibold mb-4 border-b border-navy-700 pb-2">
              DLA KANDYDATÓW
            </h3>
            <div className="space-y-2">
              <FooterLink href="/szkolenia">Oferta</FooterLink>
              <FooterLink href="https://rspo.gov.pl/institutions?q=%7B%22filter%22:%22Niepubliczny%20O%C5%9Brodek%20Doskonalenia%20Nauczycieli%20w%20Rybniku%22%7D">
                Rządowy rejestr placówek oświatowych zarejestrowanych w Polsce
              </FooterLink>
              <FooterLink href="https://www.gov.pl/web/edukacja">
                MEN
              </FooterLink>
              <FooterLink href="https://ore.edu.pl/">
                Ośrodek Rozwoju Edukacji
              </FooterLink>
              <FooterLink href="https://erasmusplus.org.pl/">
                Erasmus+
              </FooterLink>
            </div>
          </div>


          <div>
            <h3 className="font-semibold mb-4 border-b border-navy-700 pb-2">
              OFERTA
            </h3>
            <div className="space-y-2">
              <FooterLink href="/szkolenia">
                Rady Pedagogiczne
                <br /> (również tematy na życzenie placówki)
              </FooterLink>
              <FooterLink href="/szkolenia">Szkolenia grupowe</FooterLink>
              <FooterLink href="/szkolenia">Szkolenia indywidualne</FooterLink>
              <FooterLink href="/szkolenia">
                Doradztwo dla placówek/nauczyciel
              </FooterLink>

              <FooterLink href="/szkolenia?typ=online">
                Kursy zdalne w czasie rzeczywistym
              </FooterLink>
              <FooterLink href="/szkolenia?typ=blended">
                Kursy blended learning
              </FooterLink>
              <FooterLink href="/szkolenia?typ=stacjonarne">
                Kursy stacjonarne
              </FooterLink>
              <FooterLink href="/szkolenia?dofinansowanie=bur">
                Kursy z dofinansowaniem Bazy Usług Rozwojowych
              </FooterLink>
              <FooterLink href="https://forms.cloud.microsoft/r/UtaVqNPyVy">
                Badanie potrzeb nauczycieli 2025/2026
              </FooterLink>
            </div>
          </div>
        </div>


        <EmergencyNumbers />

        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-xs text-gray-400">
            © 2025 NODN Rybnik. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
