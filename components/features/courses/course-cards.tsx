"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CreditCard, Calendar } from "lucide-react";

import { type Course } from "@/data/courses";
import { fixOrphans } from "@/lib/typography";

interface CourseCardProps {
  course: Course;
}

const teaser = (c: Course) =>
  c.description ||
  "Program obejmuje część teoretyczną i warsztatową z przykładami wdrożeń.";

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col hover-lift">

      <div className="relative h-80">
        <Image
          src={course.image || "/icons/placeholder.svg"}
          alt={fixOrphans(course.title)}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>


      <CardHeader>
        <CardTitle className="text-navy-900">
          {fixOrphans(course.title)}
        </CardTitle>
        <CardDescription>{fixOrphans(teaser(course))}</CardDescription>
      </CardHeader>


      <CardContent className="mt-auto flex flex-col flex-grow">
        <div className="space-y-2 mb-4 text-sm text-gray-700">
          {course.duration && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {fixOrphans(course.duration)}
            </div>
          )}
          {course.price && (
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 mr-2" />
              {fixOrphans(course.price)}
              {course.installments && (
                <span className="ml-2 text-gray-500">
                  ({fixOrphans(course.installments)})
                </span>
              )}
            </div>
          )}
          {course.modes?.length ? (
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {fixOrphans(course.modes.join(" / "))}
            </div>
          ) : null}
        </div>

        <div className="grid gap-2 mt-auto">



          <Link href={`/szkolenia/${course.slug}`} passHref>
            <Button className="w-full bg-navy-600 hover:bg-navy-700">
              {fixOrphans("Dowiedz się więcej")}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
