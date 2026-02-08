
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fixOrphans } from "@/lib/typography";
import type { Course } from "@/data/courses";

export function FeaturedCourseCard({ course }: { course: Course }) {
  return (
    <Card className="relative overflow-hidden group">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[16/10] md:aspect-auto md:h-full">
          <Image
            src={course.image}
            alt={fixOrphans(course.title)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />

        </div>
        <CardContent className="p-6 md:p-8 flex flex-col">
          <h3 className="text-2xl md:text-3xl font-bold text-navy-900">
            {fixOrphans(course.title)}
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            {fixOrphans(course.description)}
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            {course.duration && (
              <div className="bg-slate-50 border border-slate-200 p-3 rounded">
                <div className="font-semibold">
                  {fixOrphans("Czas trwania")}
                </div>
                <div>{fixOrphans(course.duration)}</div>
              </div>
            )}
            {course.price && (
              <div className="bg-slate-50 border border-slate-200 p-3 rounded">
                <div className="font-semibold">{fixOrphans("Cena")}</div>
                <div>{fixOrphans(course.price)}</div>
              </div>
            )}
            {course.modes?.length ? (
              <div className="bg-slate-50 border border-slate-200 p-3 rounded">
                <div className="font-semibold">{fixOrphans("Tryb")}</div>
                <div>{fixOrphans(course.modes.join(" / "))}</div>
              </div>
            ) : null}
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              href={`/szkolenia/${course.slug}`}
              className="w-full sm:w-auto"
            >
              <Button className="w-full bg-navy-600 hover:bg-navy-700">
                {fixOrphans("Dowiedz się więcej")}
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
