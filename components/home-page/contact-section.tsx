"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="kontakt">
      <div className="container px-4 md:px-6">
        {/* Tytuł */}
        <div className="text-center mb-12">
          <Badge className="bg-navy-100 text-navy-800 mb-4">Kontakt</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Masz pytania odnośnie oferty? Potrzebujesz spersonalizowanego
            szkolenia? Chętnie odpowiemy!
          </p>
        </div>

        {/* Grid: Dane kontaktowe + Formularz */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Kolumna kontaktowa */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Dane kontaktowe
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+48 32 123 45 67</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>kontakt@nodn-rybnik.pl</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>ul. Edukacyjna 12, 44-200 Rybnik</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Godziny</h3>
              <p className="text-gray-700">Pon – Pt: 8:00 – 16:00</p>
              <p className="text-gray-700">Sob – Niedz: zamknięte</p>
            </div>
          </div>

          {/* Formularz kontaktowy */}
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
            <h3 className="text-xl font-bold text-navy-900 mb-4">
              Formularz kontaktowy
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Formularz wysłany 🚀");
              }}
              className="space-y-4"
            >
              <Input placeholder="Imię i nazwisko" required />
              <Input type="email" placeholder="Adres e-mail" required />
              <Input type="tel" placeholder="Telefon (opcjonalnie)" />
              <Textarea rows={5} placeholder="Treść wiadomości..." required />

              <Button
                type="submit"
                className="w-full bg-navy-600 hover:bg-navy-700 text-white"
              >
                Wyślij wiadomość
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
