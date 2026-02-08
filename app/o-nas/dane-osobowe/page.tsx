import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, FileText, Lock, Eye, Settings, Mail, Phone, AlertCircle, CheckCircle, Info, Cookie } from 'lucide-react'
import { Header } from "@/components/layout-components/header"
import { Footer } from "@/components/layout-components/footer"

export default function PersonalDataPage() {
  return (
    <>
      <Header />
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy-900 mb-4">Dane Osobowe</h1>
            <p className="text-lg text-gray-600">
              Informacje o przetwarzaniu danych osobowych zgodnie z RODO
            </p>
          </div>

          {/* Wprowadzenie */}
          <Card className="mb-8 border-l-4 border-l-navy-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-navy-600" />
                Bezpieczeństwo Twoich danych
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Szanowni Państwo, bezpieczeństwo Waszych danych oraz przejrzystość zasad ich przetwarzania 
                są dla nas bardzo ważne, dlatego zachęcamy do zapoznania się z naszą Polityką Prywatności.
              </p>
            </CardContent>
          </Card>

          {/* Jakie dane gromadzimy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-navy-600" />
                Jakie dane gromadzimy?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Jako administrator danych osobowych informujemy, że przetwarzamy dane osobowe, które są zbierane 
                w ramach korzystania z naszej strony internetowej, serwisów i innych funkcjonalności udostępnianych 
                przez nas na stronach internetowych, w tym również zapisywanych w plikach cookies.
              </p>
            </CardContent>
          </Card>

          {/* Administrator danych */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-navy-600" />
                Kto będzie administratorem Twoich danych?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Administratorem Państwa danych będzie:</p>
              <div className="space-y-3">
                <div className="p-4 bg-navy-50 rounded-lg border border-navy-200">
                  <h4 className="font-semibold text-navy-900">NODN</h4>
                </div>
                <div className="p-4 bg-navy-50 rounded-lg border border-navy-200">
                  <h4 className="font-semibold text-navy-900">BiS Groups sp. z o.o.</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    z siedzibą w Rybniku, przy ulicy Rudzkiej 13c, 44-200 Rybnik
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cele przetwarzania */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-navy-600" />
                Jaki mamy cel w przetwarzaniu Państwa danych osobowych?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Przetwarzamy Wasze dane m.in. w celach:</p>
              <ul className="space-y-3">
                {[
                  "prezentacji naszych placówek jako miejsc ludzi ciekawych, tak aby nasze usługi trafiały w Wasze potrzeby",
                  "zapewnienia bezpieczeństwa usług, w tym aby wykryć boty, oszustwa i nadużycia",
                  "pokazywania i przesyłania naszych ofert, szczególnie tych, które naszym zdaniem mogą być dopasowane do wymagań, oczekiwań, potrzeb i zainteresowań użytkowników",
                  "prowadzenia analizy i badań potrzeb naszych klientów, aby w przyszłości móc sprostać ich wymogom świadczenia usług",
                  "dostosowania zawartości serwisów i aplikacji do preferencji Użytkownika oraz optymalizacji korzystania ze stron internetowych",
                  "tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy korzystają ze serwisów i aplikacji"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Informujemy że */}
          <Card className="mb-8 bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                Informujemy, że:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Twoje dane, które udostępnisz nam np. zapisując się kursy, szkolenia lub warsztaty, zgodnie z obowiązującym 
                prawem chcemy przekazywać podmiotom przetwarzającym je na nasze zlecenie, np. podwykonawcom naszych usług. 
                Może się również zdarzyć i tak, że na podstawie obowiązujących w Polsce przepisów będziemy udostępniać Twoje 
                dane podmiotom uprawnionym do uzyskania danych jak np. sądy lub organy ścigania – oczywiście tylko gdy wystąpią 
                z żądaniem w oparciu o stosowną podstawę prawną.
              </p>
            </CardContent>
          </Card>

          {/* Twoje prawa */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-navy-600" />
                Masz również prawa w związku z naszymi działaniami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Przede wszystkim, zgodnie z obowiązującymi już przepisami masz prawo do:
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "żądania dostępu do danych",
                  "sprostowania danych",
                  "usunięcia danych",
                  "ograniczenia przetwarzania",
                  "wycofania zgody",
                  "zgłoszenia sprzeciwu",
                  "bycia zapomnianym",
                  "przenoszenia danych"
                ].map((right, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">{right}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-navy-50 border border-navy-200 rounded-lg">
                <h4 className="font-semibold text-navy-900 mb-2">Kontakt z Inspektorem Ochrony Danych:</h4>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-navy-600" />
                  <span className="text-navy-700">odn.rybnik@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Podstawy prawne */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-navy-600" />
                Dlaczego mamy prawo przetwarzać Twoje dane osobowe?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Każde przetwarzanie Twoich danych musi być oparte na właściwej, zgodnej z obowiązującymi przepisami, 
                  podstawie prawnej.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Wykonanie umowy</h4>
                    <p className="text-sm text-blue-800">
                      Podstawą prawną przetwarzania Twoich danych w celu świadczenia usług jest niezbędność 
                      do wykonania umów o ich świadczenie.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Uzasadniony interes</h4>
                    <p className="text-sm text-green-800">
                      Podstawą prawną dopasowywania treści usług do Twoich zainteresowań, zapewnienie ich 
                      bezpieczeństwa oraz pomiary i ich udoskonalanie.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Dobrowolna zgoda</h4>
                    <p className="text-sm text-purple-800">
                      Przetwarzanie w celach marketingowych oraz analitycznych będzie odbywać się na podstawie 
                      tylko i wyłącznie Twojej dobrowolnej zgody.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Ważne:</strong> Wyrażenie zgody jest całkowicie dobrowolne i możesz ją w dowolnym momencie wycofać, 
                    z tym, że wycofanie zgody nie będzie miało wpływu na zgodność z prawem przetwarzania na podstawie zgody, 
                    przed jej wycofaniem.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Szczegółowe informacje techniczne */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-navy-600" />
                Szczegółowe informacje techniczne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Gromadzenie danych</h4>
                  <p className="text-gray-700 mb-3">Dane osobowe mogą być gromadzone poprzez:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-navy-600 font-semibold">2.1.</span>
                      <span className="text-gray-700">Informacje podawane w formularzach zamieszczonych na stronie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-navy-600 font-semibold">2.2.</span>
                      <div>
                        <span className="text-gray-700">Informacje zbierane automatycznie:</span>
                        <ul className="ml-4 mt-2 space-y-1">
                          <li className="text-sm text-gray-600">• Logi serwerów (adres IP, typ przeglądarki, język, dane urządzenia)</li>
                          <li className="text-sm text-gray-600">• Pliki cookies</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Cele automatycznego zbierania danych</h4>
                  <ul className="space-y-2">
                    {[
                      "Administrowania serwerami, stroną i jej obsługą",
                      "Zapewnienia bezpieczeństwa oraz ochrony danych",
                      "Zapewnienia świadczenia wysokiej jakości usług",
                      "Dostosowanie strony do Twoich potrzeb",
                      "Tworzenia statystyk"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-navy-600 font-semibold">3.{index + 1}.</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-navy-600" />
                Pliki Cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Pliki „cookies" służą do realizacji następujących celów:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-navy-600 font-semibold">4.1.</span>
                    <span className="text-gray-700">Zapewnienie prawidłowego działania strony w przeglądarce użytkownika</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy-600 font-semibold">4.2.</span>
                    <span className="text-gray-700">Tworzenia statystyk</span>
                  </li>
                </ul>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Jak zablokować pliki cookies:</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Firefox:</strong> Opcje → Prywatność</div>
                    <div><strong>Chrome:</strong> Ustawienia → Ustawienia zaawansowane → Prywatność → Ustawienia treści</div>
                    <div><strong>Internet Explorer:</strong> Narzędzia → Opcje internetowe → Prywatność → Zaawansowane</div>
                    <div><strong>Opera:</strong> Preferencje → Zaawansowane → Ciasteczka</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Uwaga:</strong> Przeglądarki internetowe posiadają domyślne ustawienia, które umożliwiają 
                    przechowywanie plików „cookies". Możesz skonfigurować swoją przeglądarkę tak, aby nie przechowywała 
                    plików „cookies".
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Okres przechowywania */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-navy-600" />
                Okres przechowywania danych
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Dane osobowe użytkowników zabrane w celach opisanych w naszej Polityce Prywatności będą przetwarzane 
                przez okres niezbędny do realizacji danego celu.
              </p>
              <p className="text-gray-700">
                Dane osobowe są przekazywane do podmiotów przetwarzających dane w imieniu administratora danych 
                w związku ze świadczeniem usług na rzecz BiS Groups i/lub NODN.
              </p>
            </CardContent>
          </Card>

          {/* Akceptacja polityki */}
          <Card className="bg-navy-50 border-navy-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-navy-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">Ważne informacje:</h4>
                  <p className="text-navy-800 text-sm leading-relaxed">
                    Korzystając z naszej strony użytkownik akceptuje Politykę Prywatności. 
                    W przypadku pytań lub wątpliwości dotyczących przetwarzania danych osobowych, 
                    prosimy o kontakt pod adresem: <strong>odn.rybnik@gmail.com</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
