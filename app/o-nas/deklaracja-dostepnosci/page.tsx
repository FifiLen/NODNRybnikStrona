import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accessibility,
  CalendarCheck,
  FileWarning,
  Info,
  Mail,
  Phone,
  MessageSquareWarning,
  PhoneIcon,
} from "lucide-react";
import { Header } from "@/components/layout-components/header";
import { Footer } from "@/components/layout-components/footer";

export default function AccessibilityDeclarationPage() {
  const nonCompliantItems = [
    "Na niektórych stronach brak jest odpowiedniej struktury nagłówkowej artykułów.",
    "Niektóre pliki tekstowe (PDF) w formie załączników nie są dostępne.",
    "Niektóre obrazy, zdjęcia, linki i przyciski nie posiadają tekstów alternatywnych.",
    "Niektóre podstrony nie są w pełni nawigowane z pomocą klawiatury.",
    "W niektórych przypadkach fokus nie jest wyraźnie widoczny.",
    "Nie wszystkie elementy nawigacyjne posiadają alternatywę tekstową.",
    "Niektóre z pól formularzy nie zawierają etykiet.",
    "Na stronie występują obszary o zbyt niskim kontraście.",
  ];

  const requestInfoItems = [
    "swoje imię i nazwisko,",
    "swoje dane kontaktowe (np. numer telefonu, e-mail),",
    "dokładny adres strony internetowej, na której jest niedostępny cyfrowo element lub treść,",
    "opis na czym polega problem i jaki sposób jego rozwiązania byłby для Ciebie najwygodniejszy.",
  ];

  return (
    <>
      <Header />
      <div className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy-900 mb-4">
              Deklaracja dostępności
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Zobowiązanie do zapewnienia dostępności cyfrowej naszej strony
              internetowej.
            </p>
          </div>

          <div className="space-y-8">
            {/* Wprowadzenie */}
            <Card className="border-l-4 border-l-navy-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-navy-600" />
                  Informacje ogólne
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Niepubliczny Ośrodek Doskonalenia Nauczycieli w Rybniku
                  zobowiązuje się zapewnić dostępność swojej strony internetowej
                  zgodnie z ustawą z dnia 4 kwietnia 2019 r. o dostępności
                  cyfrowej stron internetowych i aplikacji mobilnych podmiotów
                  publicznych.
                </p>
                <div className="p-4 bg-navy-50 border border-navy-200 rounded-lg text-sm">
                  <p>
                    <strong>Deklaracja dotyczy strony:</strong>{" "}
                    <a
                      href="https://odnrybnik.edu.pl/"
                      className="text-navy-600 hover:underline font-medium"
                    >
                      https://odnrybnik.edu.pl/
                    </a>
                  </p>
                  <p>
                    <strong>Data publikacji strony:</strong> 19.07.2015r.
                  </p>
                  <p>
                    <strong>Data ostatniej aktualizacji:</strong> 16.06.2025r.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stan dostępności */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Accessibility className="h-5 w-5 text-navy-600" />
                  Stan dostępności cyfrowej
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  Strona internetowa jest{" "}
                  <strong className="text-navy-800">częściowo zgodna</strong> z
                  załącznikiem do ustawy o dostępności cyfrowej z powodu
                  niezgodności i wyłączeń wymienionych poniżej.
                </p>
              </CardContent>
            </Card>

            {/* Niezgodności */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <FileWarning className="h-5 w-5 text-yellow-600" />
                  Niedostępne treści i niezgodności
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-yellow-800 text-sm">
                  {nonCompliantItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Przygotowanie deklaracji */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarCheck className="h-5 w-5 text-navy-600" />
                  Przygotowanie deklaracji
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <p>
                  <strong>Data sporządzenia deklaracji:</strong> 26.06.2025
                </p>
                <p>
                  <strong>Data ostatniego przeglądu:</strong> 26.06.2025
                </p>
                <p>
                  Deklarację sporządzono na podstawie samooceny w oparciu o
                  narzędzia takie jak WAVE, Lighthouse oraz Colour Contrast
                  Analyser.
                </p>
              </CardContent>
            </Card>

            {/* Udogodnienia i informacje */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-navy-600" />
                  Udogodnienia i dodatkowe informacje
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Planujemy przed końcem 2027 roku poprawić większość błędów
                  wskazanych na liście niezgodności.
                </p>
                <p className="text-sm text-slate-600">
                  Każdy ma prawo wystąpić z żądaniem zapewnienia dostępności
                  cyfrowej tej strony lub jej elementów. Zgłaszając takie
                  żądanie, podaj:
                </p>
                <ul className="space-y-1 list-disc list-inside text-sm text-slate-800 bg-slate-100 p-4 rounded-md">
                  {requestInfoItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-slate-700">
                  Na zgłoszenie odpowiemy najszybciej jak to możliwe, nie
                  później niż w ciągu 14 dni. Jeżeli termin ten będzie zbyt
                  krótki, poinformujemy o nowym terminie (nie dłuższym niż 2
                  miesiące). Jeżeli nie będziemy w stanie zapewnić dostępności,
                  zaproponujemy alternatywny sposób dostępu.
                </p>
              </CardContent>
            </Card>

            {/* Obsługa wniosków i skarg */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquareWarning className="h-5 w-5 text-navy-600" />
                  Obsługa wniosków i skarg
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Jeżeli nasza odpowiedź na Twój wniosek będzie
                  niesatysfakcjonująca, masz prawo złożyć skargę do dyrektora
                  placówki:
                </p>
                <div className="p-4 bg-slate-100 rounded-lg text-sm space-y-2">
                  <p>
                    <strong>Adres:</strong> ul. Rudzka 13c, 44-200 Rybnik
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-navy-600" />
                    <strong>Email:</strong> odn.rybnik@gmail.com
                  </div>
                </div>
                <p className="text-slate-700">
                  Możesz także poinformować o sytuacji{" "}
                  <strong className="text-navy-800">
                    Rzecznika Praw Obywatelskich
                  </strong>{" "}
                  i poprosić o interwencję w Twojej sprawie.
                </p>
              </CardContent>
            </Card>

            {/* Aplikacje mobilne */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-navy-600" />
                  Aplikacje mobilne
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Niepubliczny Ośrodek Doskonalenia Nauczycieli w Rybniku nie
                  udostępnia aplikacji mobilnych.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
