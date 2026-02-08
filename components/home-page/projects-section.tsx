"use client";

import { Lightbulb, Target, Shield } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="co-za-nami">
      <div className="container px-4 md:px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Co za nami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projekty ze wsparciem unijnym zrealizowane w latach 2020 – 2025
          </p>
        </div>


        <div className="grid gap-12 lg:gap-16 mb-20">

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Edukacja włączająca w woj. śląskim
                </h3>
                <p className="text-gray-700 mb-6">
                  Jako jedyna placówka doskonalenia nauczycieli na Śląsku
                  otrzymaliśmy dofinansowanie na realizację kompleksowego
                  programu z zakresu edukacji włączającej w przedszkolach i
                  szkołach.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">
                      3600+
                    </div>
                    <div className="text-sm text-gray-600">Nauczycieli</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">215+</div>
                    <div className="text-sm text-gray-600">Placówek</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-gray-600">Satysfakcji</div>
                  </div>
                </div>


                <div className="mt-6">
                  <a
                    href="https://edukacjawlaczajaca.rybnikonline.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 mt-4 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
                  >
                    Więcej o projekcie
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/forum-kadry.png"
                alt="Edukacja włączająca"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl md:order-1">
              <Image
                src="/images/lekcja-enter.png"
                alt="Lekcja Enter"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="relative md:order-2">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-50"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <Target className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Lekcja Enter – To lekcja przyszłości
                </h3>
                <p className="text-gray-700 mb-6">
                  Program edukacji cyfrowej realizowany we współpracy z
                  partnerami samorządowymi i lokalnymi.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-3xl font-bold text-green-600">
                      870+
                    </div>
                    <div className="text-sm text-gray-600">Nauczycieli</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">80</div>
                    <div className="text-sm text-gray-600">Szkół</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">2</div>
                    <div className="text-sm text-gray-600">Lata realizacji</div>
                  </div>
                </div>


                <div className="mt-6">
                  <a
                    href="https://lekcjaenter.renderforestsites.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 mt-4 bg-green-600 text-white rounded-full text-lg hover:bg-green-700 transition-colors transform hover:scale-105"
                  >
                    Więcej o projekcie
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Szkolenia ze sztucznej inteligencji
                </h3>
                <p className="text-gray-700 mb-6">
                  Pionierskie szkolenia z wykorzystania AI w edukacji,
                  przygotowujące kadrę pedagogiczną do wyzwań przyszłości.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-3xl font-bold text-purple-600">
                      300+
                    </div>
                    <div className="text-sm text-gray-600">Uczestników</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">15</div>
                    <div className="text-sm text-gray-600">Modułów</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">1</div>
                    <div className="text-sm text-gray-600">W regionie</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/si-szkolenie.jpeg"
                alt="Szkolenia AI"
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
