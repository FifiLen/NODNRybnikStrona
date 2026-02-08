"use client";

import type React from "react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-96 bg-gray-100 overflow-hidden">
        <iframe
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.7835711812351!2d18.5439486!3d50.0974785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711337a63a9f3f7%3A0xbb463618a1bc82aa!2sRudzka%2013C%2C%2044-200%20Rybnik!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
        />
      </section>


      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-20">

            <div className="lg:col-span-7">
              <div className="mb-12">
                <h2 className="text-3xl font-light text-navy-900 mb-4 tracking-wide">
                  Napisz do nas
                </h2>
                <div className="w-24 h-px bg-navy-300" />
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-light text-gray-600 mb-3 tracking-wide uppercase">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-navy-900 focus:outline-none bg-transparent text-lg font-light transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-600 mb-3 tracking-wide uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-navy-900 focus:outline-none bg-transparent text-lg font-light transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-light text-gray-600 mb-3 tracking-wide uppercase">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-navy-900 focus:outline-none bg-transparent text-lg font-light transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-600 mb-3 tracking-wide uppercase">
                      Temat
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-navy-900 focus:outline-none bg-transparent text-lg font-light transition-colors duration-300"
                      required
                    >
                      <option value="">Wybierz temat</option>
                      <option value="training">Pytanie o szkolenie</option>
                      <option value="bur">
                        Dofinansowanie Bazy Usług Rozwojowych
                      </option>
                      <option value="nodn">Akredytacja NODN</option>
                      <option value="cooperation">Współpraca</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-600 mb-3 tracking-wide uppercase">
                    Wiadomość
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-navy-900 focus:outline-none bg-transparent text-lg font-light resize-none transition-colors duration-300"
                    required
                  />
                </div>
                <div className="pt-8">
                  <Button
                    type="submit"
                    className="bg-navy-900 text-white hover:bg-navy-800 px-12 py-4 text-lg font-light tracking-wide transition-all duration-300"
                  >
                    Wyślij wiadomość
                  </Button>
                </div>
              </form>
            </div>


            <div className="lg:col-span-5">
              <div className="mb-12">
                <h2 className="text-3xl font-light text-navy-900 mb-4 tracking-wide">
                  Informacje kontaktowe
                </h2>
                <div className="w-24 h-px bg-navy-300" />
              </div>
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <MapPin className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-light text-navy-900 mb-2">
                      Siedziba główna
                    </h3>
                    <p className="text-gray-600 font-extralight leading-relaxed">
                      ul. Rudzka 13c
                      <br />
                      44-200 Rybnik
                      <br />
                      Budynek B, 3 piętro, pok. 3.3
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Building className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-light text-navy-900 mb-2">
                      Oddział biura
                    </h3>
                    <p className="text-gray-600 font-extralight leading-relaxed">
                      ul. Magnolii 25
                      <br />
                      44-207 Rybnik
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Phone className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-light text-navy-900 mb-2">
                      Telefony
                    </h3>
                    <p className="text-gray-600 font-extralight">
                      +48 797 173 501
                      <br />
                      +48 502 162 365
                      <br />
                      +48 789 790 860
                      <br />
                      +48 503 192 950
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Mail className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-light text-navy-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 font-extralight">
                      odn.rybnik@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Clock className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-light text-navy-900 mb-2">
                      Godziny pracy
                    </h3>
                    <p className="text-gray-600 font-extralight leading-relaxed">
                      Poniedziałek - Piątek: 9:00 - 17:00
                      <br />
                      Sobota: zamknięte
                      <br />
                      Niedziela: zamknięte
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-16 p-8 bg-navy-50">
                <h3 className="text-xl font-light text-navy-900 mb-4">
                  Dane do przelewów
                </h3>
                <div className="space-y-2 text-gray-600 font-extralight">
                  <p>BiS Groups sp. z o.o.</p>
                  <p>IBAN: PL75114020040000370279972098</p>
                  <p>BIC: BREXPLPW</p>
                  <p>Tytuł: Odbiór dokumentów</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
