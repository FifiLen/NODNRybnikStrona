"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Handshake,
  School,
  Building,
  Users,
  Sparkles,
  Library,
} from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/layout-components/header";
import { Footer } from "@/components/layout-components/footer";
import Link from "next/link";
import { fixOrphans } from "@/lib/typography";


const partners = [
  {
    name: "Poradnia Psychologiczno-Pedagogiczna MAGNOLIA",
    description:
      "We współpracy z PP-P MAGNOLIA współtworzymy pomoce dydaktyczne oraz organizujemy wsparcie dla nauczycieli. Jeżeli jesteś zainteresowany/a szczegółami, zapraszamy do kontaktu.",
    imageUrl: "/images/magnolia-wspolprace.jpeg",
    icon: Users,
  },
  {
    name: "Powiatowa i Miejska Biblioteka Publiczna im. Konstantego Prusa w Rybniku",
    description:
      "We współpracy z Biblioteką realizujemy wsparcie dla nauczycieli. Jeżeli jesteś zainteresowany/a szczegółami, zapraszamy do kontaktu.",
    imageUrl: "/images/biblioteka-1.png",
    icon: Library,
  },
  {
    name: "Gminna Biblioteka Publiczna w Lyskach",
    description:
      "We współpracy z Biblioteką realizujemy wsparcie dla nauczycieli. Jeżeli jesteś zainteresowany/a szczegółami, zapraszamy do kontaktu.",
    imageUrl: "/images/biblioteka-2.png",
    icon: Library,
  },
  {
    name: "Centrum Nowoczesnej Edukacji",
    description:
      "Współpraca w obszarze VR/AR wykorzystywanej w sektorze edukacyjnym: przedszkolach, szkołach podstawowych, średnich oraz branżowych. Wspólnie realizujemy innowacyjne szkolenia.",
    imageUrl: "/images/vr-wspolprace.png",
    icon: Sparkles,
  },
];

export default function CooperationPage() {
  return (
    <>
      <Header />

      <div className="bg-slate-50 whitespace-normal break-words">

        <main className="container mx-auto px-4 py-16 md:py-24 grid gap-y-16 md:gap-y-24">

          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 tracking-tight whitespace-normal">
              {fixOrphans("Współpraca")}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto whitespace-normal">
              {fixOrphans(
                "Zapraszamy do współpracy placówki oświatowe, firmy i ekspertów, którzy chcą razem z nami podnosić jakość edukacji."
              )}
            </p>
          </section>


          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="/images/wspolpraca.jpeg"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                alt={fixOrphans("Zespół dyskutujący o współpracy")}
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy-800 mb-4 whitespace-normal">
                {fixOrphans("Dlaczego warto z nami współpracować?")}
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 whitespace-normal">
                {fixOrphans(
                  "Jesteśmy otwarci na różnorodne formy współpracy, które przyczyniają się do rozwoju oświaty. Oferujemy partnerskie warunki, dostęp do naszej sieci ekspertów oraz wsparcie merytoryczne i organizacyjne. Razem możemy realizować ambitne projekty i tworzyć innowacyjne rozwiązania."
                )}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-navy-600 hover:bg-navy-700"
              >
                <Link href="/kontakt">
                  {fixOrphans("Skontaktuj się w sprawie współpracy")}
                </Link>
              </Button>
            </div>
          </section>


          <section id="partnerzy">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 whitespace-normal">
                {fixOrphans("Nasi kluczowi partnerzy")}
              </h2>
            </div>


            <div className="grid gap-y-16 md:gap-y-20">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <div
                    className={`relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl group ${
                      index % 2 === 1 ? "md:order-last" : ""
                    }`}
                  >
                    <Image
                      src={partner.imageUrl}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={fixOrphans(`Współpraca z ${partner.name}`)}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <partner.icon className="h-10 w-10 text-navy-600 mb-4 mx-auto md:mx-0" />
                    <h3 className="text-2xl md:text-3xl font-semibold text-navy-800 mb-4 whitespace-normal">
                      {fixOrphans(partner.name)}
                    </h3>
                    <p className="text-slate-700 leading-relaxed whitespace-normal">
                      {fixOrphans(partner.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>


          <section id="obszary">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 whitespace-normal">
                {fixOrphans("Zapraszamy do współpracy")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <School className="h-10 w-10 text-navy-600 mb-4" />
                  <CardTitle className="whitespace-normal">
                    {fixOrphans("Dla szkół i placówek")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 whitespace-normal">
                    {fixOrphans(
                      "Dedykowane szkolenia dla rad pedagogicznych, szkolenia na zamówienie, pomoce edukacyjne na zamówienie, inne formy wsparcia placówek oświatowych."
                    )}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <Building className="h-10 w-10 text-navy-600 mb-4" />
                  <CardTitle className="whitespace-normal">
                    {fixOrphans("Dla firm i instytucji")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 whitespace-normal">
                    {fixOrphans(
                      "Realizujemy wspólne projekty, szkolenia oraz konferencje. Jesteśmy otwarci na realizację wspólnych projektów."
                    )}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <Handshake className="h-10 w-10 text-navy-600 mb-4" />
                  <CardTitle className="whitespace-normal">
                    {fixOrphans("Dla trenerów i ekspertów")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 whitespace-normal">
                    {fixOrphans(
                      "Specjaliści z pasją do dzielenia się wiedzą - jeżeli do nich należysz - zapraszamy do współpracy."
                    )}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
