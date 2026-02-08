import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout-components/header"
import { Footer } from "@/components/layout-components/footer"

const projects = [
  { slug: "edukacja-wlaczajaca", title: "Edukacja włączająca", date: "2022-2024", description: "Kompleksowy program szkoleń i wdrożeń z zakresu edukacji włączającej dla szkół podstawowych i średnich." },
  { slug: "lekcja-enter", title: "Lekcja Enter", date: "2021-2023", description: "Innowacyjny projekt edukacji cyfrowej, w ramach którego przeszkoliliśmy setki nauczycieli z nowoczesnych narzędzi TIK." },
  { slug: "szkolenia-ai", title: "Szkolenia ze sztucznej inteligencji", date: "2023-obecnie", description: "Pionierskie szkolenia z wykorzystania AI w edukacji, przygotowujące kadrę do wyzwań przyszłości." },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy-900">Projekty zrealizowane</h1>
            <p className="text-lg text-gray-600 mt-2">Nasze najważniejsze inicjatywy i osiągnięcia</p>
          </div>
          <div className="grid gap-8">
            {projects.map(project => (
              <Card key={project.slug} className="overflow-hidden md:grid md:grid-cols-3">
                <div className="md:col-span-1 relative h-48 md:h-full">
                  <Image src={`/placeholder.svg?height=300&width=400&text=${project.title.replace(/\s/g, '+')}`} layout="fill" objectFit="cover" alt={project.title} />
                </div>
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-navy-900 text-2xl">{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 pt-1">
                      <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {project.date}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    <Link href={`/projekty/${project.slug}`} passHref>
                      <Button variant="outline">
                        Czytaj więcej <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
