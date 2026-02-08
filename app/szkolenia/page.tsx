"use client";

import { useState } from "react";
import { Header } from "@/components/layout-components/header";
import { Footer } from "@/components/layout-components/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/features/courses/course-cards";
import Link from "next/link";

const categories = [
  "Wszystkie kursy",
  "Polityka oświatowa",
  "Bezpieczeństwo cyfrowe i AI",
  "Przemoc i zdrowie psychiczne",
  "Edukacja obywatelska",
  "Zarządzanie i administracja",
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie kursy");

  const filteredCourses =
    activeCategory === "Wszystkie kursy"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <>
      <Header />


      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodn-hero-image.jpg-EZBHQwczqlssMFgQAUSprlwGSeHKrp.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-navy-900/70" />


        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-2">
              Szkolenia/kursy z dofinansowaniem do 95%
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Szkolenia/kursy
            <br />
            <span className="text-blue-300">dla nauczycieli</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Rozwijaj kompetencje zawodowe z specjalistami/ekspertami.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-4 text-lg"
            >
              <a href="#lista-kursow">Przeglądaj kursy</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/kontakt">Skontaktuj się z nami</Link>
            </Button>
          </div>



        </div>


        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>


      <main>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Kursy i szkolenia"
              subtitle="Wybierz kurs idealny dla Twojego rozwoju zawodowego."
            />


            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    activeCategory === category ? "default" : "secondary"
                  }
                  className={`cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-navy-100 ${
                    activeCategory === category
                      ? "bg-navy-600 text-white hover:bg-navy-700"
                      : "bg-gray-200 text-gray-700 hover:bg-navy-100"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>


            <div
              id="lista-kursow"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
