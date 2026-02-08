"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Award } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="o-nas">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch mb-20">
          {/* Lewa kolumna - tekst */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-navy-100 text-navy-800 mb-4">O nas</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Od 20 lat razem <br />z nauczycielami
                <span className="block text-blue-600">
                  zmieniamy na lepsze jakość nauczania
                </span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Szkolenia oraz usługi doradcze, które znajdują się w naszej
                ofercie poddawane są corocznym audytom DEKRA oraz TGLS.
                Dodatkowo placówka podlega audytowi PARP z uwagi na obecność w
                Bazie Usług Rozwojowych i oferowanie szkoleń z dofinansowaniem
                do 95%.
                <br /> Co 5 lat odnawiamy akredytację Śląskiego Kuratora
                Oświaty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-navy-600 hover:bg-navy-700">
                Poznaj naszą historię <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white bg-transparent"
              >
                Zobacz referencje
              </Button>
            </div>
          </div>

          {/* Prawa kolumna - grafika + plakietki */}
          <div className="relative">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.jpeg"
                alt="Zespół NODN Rybnik"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-6 -right-6 bg-green-600 text-white p-4 rounded-xl shadow-lg">
              <CheckCircle className="h-8 w-8 mb-2" />
              <div className="text-sm font-semibold">Akredytacja</div>
              <div className="text-xs opacity-90">
                Śląskiego Kuratora Oświaty
              </div>
            </div>

            <div className="absolute top-20 -left-6 bg-orange-600 text-white p-4 rounded-xl shadow-lg">
              <Shield className="h-8 w-8 mb-2" />
              <div className="text-sm font-semibold">DEKRA</div>
              <div className="text-xs opacity-90">Certyfikacja</div>
            </div>

            <div className="absolute bottom-20 -left-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <Award className="h-8 w-8 mb-2" />
              <div className="text-sm font-semibold">TGLS</div>
              <div className="text-xs opacity-90">Najwyższa jakość</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
