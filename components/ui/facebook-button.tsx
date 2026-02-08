"use client";

import { Facebook } from "lucide-react";

export function FacebookButton() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed top-1/2 -left-2 z-50
        transform -translate-y-1/2
        bg-[#1877F2] text-white
        px-3 py-3
        rounded-r-lg shadow-lg
        transition-all duration-300
        hover:-left-0 hover:bg-[#145dbf]
        flex items-center justify-center
      "
      aria-label="NODN na Facebooku"
    >
      <Facebook className="w-6 h-6" />
    </a>
  );
}
