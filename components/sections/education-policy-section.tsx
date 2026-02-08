"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/features/courses/course-cards";

const originalSlugs = [
  "ai-w-rekach-ucznia",
  "cyberprostitucja",
  "przemoc-30",
  "depresja-mlodziezy",
  "patriotyzm-w-memach",
  "nowa-podstawa-programowa",
  "ocenianie-ksztaltujace",
  "wsparcie-uczniow-ukrainskich",
  "edukacja-wlaczajaca-praktyka",
];

export function EducationPolicySection() {

  const originalCourses = courses.filter((c) => originalSlugs.includes(c.slug));

  return (
    <section className="py-16 bg-navy-900" id="polityka-oswiatowa">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Polityka Oświatowa 2025/2026
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-6">
            Nasze szkolenia są organizowane zgodnie z podstawowymi kierunkami
            realizacji polityki oświatowej państwa na rok szkolny 2025/2026.
          </p>

          <a
            href="https://www.gov.pl/web/edukacja/podstawowe-kierunki-realizacji-polityki-oswiatowej-panstwa-w-roku-szkolnym-20252026"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="mb-8 border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Zobacz ogłoszenie MEN
            </Button>
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {originalCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
