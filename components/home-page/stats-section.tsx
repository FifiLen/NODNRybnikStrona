"use client";

export function StatsSection() {
  return (
    <section className="py-16 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">

          <div className="text-center p-6">
            <div className="text-5xl font-bold text-white mb-2">20+</div>
            <div className="text-base text-gray-200">lat doświadczenia</div>
          </div>


          <div className="text-center p-6">
            <div className="text-5xl font-bold text-white mb-2">
              16&nbsp;000+
            </div>
            <div className="text-base text-gray-200">
              Przeszkolonych nauczycieli 2006 – 2025
            </div>
          </div>


          <div className="text-center p-6">
            <div className="text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-base text-gray-200">placówek edukacyjnych</div>
          </div>
        </div>
      </div>
    </section>
  );
}
