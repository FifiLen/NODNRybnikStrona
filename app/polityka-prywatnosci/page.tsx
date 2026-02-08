import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Cookie, Eye, Lock, Mail, Phone } from "lucide-react"
import { Header } from "@/components/layout-components/header"
import { Footer } from "@/components/layout-components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy-900 mb-4">Polityka Prywatności</h1>
            <p className="text-lg text-gray-600">
              Informacje o przetwarzaniu danych osobowych i używaniu plików cookies
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-navy-600" />
                  Administrator danych
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Administratorem Państwa danych osobowych jest{" "}
                  <strong>Niepubliczny Ośrodek Doskonalenia Nauczycieli w Rybniku</strong>z siedzibą przy ul. Rudzkiej
                  13c, 44-200 Rybnik.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Kontakt z administratorem:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>nodn.rybnik@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+48 797 173 501</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-navy-600" />
                  Zakres przetwarzanych danych
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Przetwarzamy następujące kategorie danych osobowych:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>
                    <strong>Dane identyfikacyjne:</strong> imię, nazwisko, PESEL
                  </li>
                  <li>
                    <strong>Dane kontaktowe:</strong> adres email, numer telefonu, adres zamieszkania
                  </li>
                  <li>
                    <strong>Dane zawodowe:</strong> miejsce pracy, stanowisko, wykształcenie
                  </li>
                  <li>
                    <strong>Dane techniczne:</strong> adres IP, informacje o przeglądarce, cookies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-navy-600" />
                  Cele i podstawy prawne przetwarzania
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border-l-4 border-l-blue-500 pl-4">
                    <h4 className="font-semibold">Realizacja szkoleń i kursów</h4>
                    <p className="text-sm text-gray-600">
                      Podstawa prawna: wykonanie umowy (art. 6 ust. 1 lit. b RODO)
                    </p>
                  </div>
                  <div className="border-l-4 border-l-green-500 pl-4">
                    <h4 className="font-semibold">Marketing bezpośredni</h4>
                    <p className="text-sm text-gray-600">
                      Podstawa prawna: prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO)
                    </p>
                  </div>
                  <div className="border-l-4 border-l-purple-500 pl-4">
                    <h4 className="font-semibold">Wywiązywanie się z obowiązków prawnych</h4>
                    <p className="text-sm text-gray-600">
                      Podstawa prawna: obowiązek prawny (art. 6 ust. 1 lit. c RODO)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-navy-600" />
                  Pliki cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Nasza strona internetowa wykorzystuje pliki cookies w następujących celach:</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Cookies niezbędne</h4>
                    <p className="text-sm text-green-700">
                      Zapewniają podstawowe funkcjonalności strony, takie jak nawigacja i dostęp do bezpiecznych
                      obszarów.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Cookies analityczne</h4>
                    <p className="text-sm text-blue-700">
                      Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony internetowej.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Cookies marketingowe</h4>
                    <p className="text-sm text-purple-700">
                      Używane do wyświetlania spersonalizowanych reklam i treści.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">Cookies funkcjonalne</h4>
                    <p className="text-sm text-orange-700">
                      Umożliwiają zapamiętywanie preferencji i personalizację doświadczenia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Twoje prawa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Zgodnie z RODO przysługują Ci następujące prawa:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Prawo dostępu do danych osobowych</li>
                  <li>Prawo do sprostowania danych osobowych</li>
                  <li>Prawo do usunięcia danych osobowych</li>
                  <li>Prawo do ograniczenia przetwarzania</li>
                  <li>Prawo do przenoszenia danych</li>
                  <li>Prawo do sprzeciwu wobec przetwarzania</li>
                  <li>Prawo do cofnięcia zgody</li>
                  <li>Prawo do wniesienia skargi do organu nadzorczego</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Okres przechowywania danych</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>Dane uczestników szkoleń</span>
                    <span className="font-semibold">5 lat od zakończenia kursu</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>Dane marketingowe</span>
                    <span className="font-semibold">Do cofnięcia zgody</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>Cookies analityczne</span>
                    <span className="font-semibold">24 miesiące</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>Cookies funkcjonalne</span>
                    <span className="font-semibold">12 miesięcy</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-50 border-navy-200">
              <CardContent className="pt-6">
                <p className="text-sm text-navy-800">
                  <strong>Kontakt w sprawach ochrony danych:</strong>
                  <br />W przypadku pytań dotyczących przetwarzania danych osobowych lub realizacji przysługujących Ci
                  praw, skontaktuj się z Niepublicznym Ośrodkiem Doskonalenia Nauczycieli w Rybniku pod adresem email:{" "}
                  <strong>nodn.rybnik@gmail.com</strong>
                  lub telefonicznie: <strong>+48 797 173 501</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
