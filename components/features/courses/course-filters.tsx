
"use client";

import { useMemo } from "react";
import { fixOrphans } from "@/lib/typography";
import type { Course } from "@/data/courses";

export type SortKey =
  | "priority"
  | "priceAsc"
  | "priceDesc"
  | "hoursDesc"
  | "hoursAsc"
  | "title";

export function CourseFilters({
  all,
  activeCategory,
  setActiveCategory,
  query,
  setQuery,
  sortKey,
  setSortKey,
}: {
  all: Course[];
  activeCategory: string;
  setActiveCategory: (c: string) => void;
  query: string;
  setQuery: (q: string) => void;
  sortKey: SortKey;
  setSortKey: (s: SortKey) => void;
}) {
  const categories = useMemo(() => {
    const set = new Set<string>(["Wszystkie"]);
    all.forEach((c) => set.add(c.category));
    return Array.from(set);
  }, [all]);

  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded border text-sm ${
              activeCategory === cat
                ? "bg-navy-600 text-white border-navy-700"
                : "bg-white border-slate-200 hover:bg-slate-50"
            }`}
          >
            {fixOrphans(cat)}
          </button>
        ))}
      </div>


      <div className="flex gap-2">
        <input
          className="border border-slate-300 rounded px-3 py-1.5 text-sm w-56"
          placeholder="Szukaj…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="border border-slate-300 rounded px-3 py-1.5 text-sm"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as SortKey)}
        >
          <option value="priority">{fixOrphans("Sortuj: polecane")}</option>
          <option value="priceAsc">{fixOrphans("Cena: rosnąco")}</option>
          <option value="priceDesc">{fixOrphans("Cena: malejąco")}</option>
          <option value="hoursDesc">
            {fixOrphans("Czas trwania: dłuższe")}
          </option>
          <option value="hoursAsc">
            {fixOrphans("Czas trwania: krótsze")}
          </option>
          <option value="title">{fixOrphans("Tytuł A–Z")}</option>
        </select>
      </div>
    </div>
  );
}
