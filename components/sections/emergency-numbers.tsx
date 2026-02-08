// components/EmergencyNumbers.tsx

"use client";

import { Phone } from "lucide-react";
import { fixOrphans } from "@/lib/typography";

const emergencyNumbers = [
  {
    name: "Centrum wsparcia dla osób dorosłych w kryzysie psychicznym",
    number: "800 702 222",
  },
  { name: "Niebieska Linia", number: "800 120 002" },
  {
    name: "Telefon dla rodziców i opiekunów dzieci w kryzysie",
    number: "800 800 602",
  },
  { name: "Telefon zaufania dla dzieci i młodzieży", number: "116 111" },
  {
    name: "Dzięcięcy telefon zaufania Rzecznika Praw Dziecka",
    number: "800 121 212",
  },
  {
    name: "Numer alarmowy w sytuacji zagrożenia życia i zdrowia",
    number: "112",
  },
  {
    name: "Telefon dla rodziców i nauczycieli w sprawie bezpieczeństwa dzieci",
    number: "800 100 100",
  },
  {
    name: "Policyjny telefon zaufania ds. przeciwdziałania przemocy w rodzinie",
    number: "800 120 226",
  },
];

export function EmergencyNumbers() {
  return (
    <div className="border-t border-navy-700 mt-16 pt-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
          {fixOrphans("Numery pomocnicze")}
        </h2>
        <div className="w-24 h-0.5 bg-blue-500 rounded-full mx-auto" />
        <p className="text-gray-400 mt-4 text-sm">
          {fixOrphans(
            "W sytuacji kryzysowej nie wahaj się skorzystać z pomocy"
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {emergencyNumbers.map((contact, index) => (
          <div
            key={index}
            className="group bg-navy-800 hover:bg-navy-700 rounded-xl p-6 border border-navy-700/50 hover:border-navy-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-all duration-300">
                <Phone className="w-4 h-4 text-blue-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-medium text-white mb-2 leading-snug">
                  {fixOrphans(contact.name)}
                </h4>
                <p className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {fixOrphans(contact.number)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
