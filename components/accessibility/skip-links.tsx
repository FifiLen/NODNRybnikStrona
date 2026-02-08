"use client";

export function SkipLinks() {
  return (
    <div className="skip-links">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:z-50"
      >
        Przejdź do głównej treści
      </a>
      <a
        href="#navigation"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Przejdź do nawigacji
      </a>
      <a
        href="#footer"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-60 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Przejdź do stopki
      </a>
    </div>
  );
}
