"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Users, Calendar, Target } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/layout-components/header";
import { Footer } from "@/components/layout-components/footer";


const getCourseData = (slug: string) => {

  const data = null;

  if (!data) {
    return {
      title: "Szczegóły kursu wkrótce",
      description:
        "Pracujemy nad przygotowaniem pełnego programu i materiałów dla tego kursu. Informacje pojawią się już wkrótce.",
      price: "TBA",
      details: [],
      program: [],
    };
  }

  return {
    title: "Nowoczesne technologie w edukacji",
    description:
      "Kompleksowy kurs poświęcony wykorzystaniu nowoczesnych narzędzi cyfrowych w procesie dydaktycznym...",
    price: "899 zł",
    details: [
      { icon: Clock, label: "Czas trwania", value: "40 godzin" },
      { icon: Users, label: "Liczba uczestników", value: "do 25 osób" },
      {
        icon: Calendar,
        label: "Tryb",
        value:
          "Zdalnie w czasie rzeczywistym / Stacjonarnie - cena ustalana z placówką",
      },
      {
        icon: Target,
        label: "Poziom",
        value: "Początkujący / Średniozaawansowany",
      },
    ],
    program: [
      "Wprowadzenie do edukacji cyfrowej",
      "Platformy e-learningowe (Moodle, Google Classroom)",
      "Narzędzia do tworzenia interaktywnych treści (Kahoot!, Genially)",
      "Bezpieczeństwo w sieci i ochrona danych",
      "Wykorzystanie tabletów i smartfonów w nauczaniu",
      "Podstawy programowania wizualnego (Scratch)",
      "Projekt końcowy: stworzenie własnej lekcji cyfrowej",
    ],
  };
};

export default function SingleCoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseData(params.slug);

  return (
    <>
      <Header />
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Badge className="mb-4">Szkolenie</Badge>
              <h1 className="text-4xl font-bold text-navy-900 mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {course.description}
              </p>


              {course.program.length > 0 ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Program szkolenia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.program.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Program szkolenia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">
                      Szczegóły programu pojawią się wkrótce...
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>


            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="relative h-40 rounded-t-lg overflow-hidden -m-6 mb-0">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${course.title.replace(
                        /\s/g,
                        "+"
                      )}`}
                      fill
                      className="object-cover"
                      alt={course.title}
                    />
                  </div>
                  <div className="pt-4">
                    <p className="text-3xl font-bold text-navy-600">
                      {course.price}
                    </p>
                    <p className="text-sm text-gray-500">Cena za uczestnika</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {course.details.length > 0 ? (
                      course.details.map((detail, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <detail.icon className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="font-medium text-gray-800 mr-2">
                            {detail.label}:
                          </span>
                          <span className="text-gray-600">{detail.value}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600 italic">
                        Informacje szczegółowe pojawią się wkrótce...
                      </p>
                    )}
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-navy-600 hover:bg-navy-700"
                  >
                    Zapisz się na kurs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
