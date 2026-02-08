import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Markdown from "markdown-to-jsx";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  Building,
  Shield,
  Target,
  Lightbulb,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  TrendingUp,
  Heart,
  Zap,
  Globe,
  CheckCircle2,
  Sparkles,
  Brain,
  Laptop,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout-components/header";
import { Footer } from "@/components/layout-components/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { fixOrphans } from "@/lib/typography";

const achievements = [
  {
    icon: Users,
    number: "16 000+",
    label: "Przeszkolonych nauczycieli",
    description: "Od 2006 roku wspieramy rozwój kompetencji pedagogów",
  },
  {
    icon: Globe,
    number: "600+",
    label: "Nauczycieli szkół polonijnych",
    description: "Międzynarodowy zasięg dzięki współpracy z Polonią",
  },
  {
    icon: Award,
    number: "A",
    label: "Najwyższa ocena ewaluacji",
    description: "Ocena A z kuratoryjnej ewaluacji zewnętrznej",
  },
  {
    icon: Calendar,
    number: "19 lat",
    label: "Nieprzerwanie w działaniu",
    description:
      "Od grudnia 2005 w tej samej siedzibie: Zespół Szkół Wyższych w Rybniku",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innowacyjność",
    description:
      "Podążamy za rozwojem technologii oraz innowacyjności w procesach edukacyjnych. Tworzymy programy oparte na dowodach (evidence-based) i wdrażamy nowoczesne formy kształcenia.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Współpraca",
    description:
      "Zawsze jesteśmy otwarci i gotowi na wszelkie propozycje współpracy, współtworzenia, współdziałania. Budujemy sieć partnerstw krajowych i międzynarodowych.",
    color: "green",
  },
  {
    icon: Target,
    title: "Skuteczność",
    description:
      'Koncentrujemy się na potrzebach odbiorców naszej oferty. Podążamy za oczekiwaniami środowiska nauczycielskiego. Działamy w modelu "od strategii do praktyki".',
    color: "purple",
  },
  {
    icon: Heart,
    title: "Odpowiedzialność społeczna",
    description:
      "Konsekwentnie łączymy wysokie standardy jakości z odpowiedzialnością społeczną. Dbamy o dostępność naszych zasobów dla osób z niepełnosprawnościami.",
    color: "red",
  },
  {
    icon: Shield,
    title: "Jakość",
    description:
      "Posiadamy akredytacje Śląskiego Kuratora Oświaty oraz certyfikaty jakości (SUS/DEKRA, TGLS) potwierdzające najwyższe standardy świadczonych usług.",
    color: "indigo",
  },
  {
    icon: Zap,
    title: "Elastyczność",
    description:
      "Podążamy za oczekiwaniem grupy, odpowiadamy na potrzeby placówek, nauczycieli i kadry zarządzającej. Łączymy doświadczenie szkolne z ekspertyzą akademicką.",
    color: "orange",
  },
];

const certifications = [
  {
    title: "Akredytacje Śląskiego Kuratora Oświaty",
    number: "RE-KS.5470.4.2015 oraz WE-DB.5470.13.2020",
    description:
      "Dwie akredytacje (2015, 2020) potwierdzające najwyższe standardy jakości",
    icon: Shield,
    color: "green",
  },
  {
    title: "Certyfikaty jakości",
    number: "SUS/DEKRA i TGLS",
    description:
      "Certyfikaty jakości usług szkoleniowych i doradczych (2018, 2020, odnowienie 2022)",
    icon: Award,
    color: "blue",
  },
  {
    title: "Wpisy do rejestrów",
    number: "KO.ZU.DN.JN/4234/61/06 oraz nr 33",
    description:
      "Wpis do rejestru Śląskiego Kuratora Oświaty (2006) i Samorządu Województwa Śląskiego (2009)",
    icon: Building,
    color: "purple",
  },
  {
    title: "Baza Usług Rozwojowych",
    number: "Wpis 2020",
    description:
      "Możliwość realizacji szkoleń i doradztwa z dofinansowaniem do 95% środkami UE",
    icon: Star,
    color: "indigo",
  },
];

const distinguishingFeatures = [
  {
    icon: Calendar,
    title: "Stabilność i ciągłość",
    description:
      "Od 2006 r. działamy w tej samej siedzibie w Zespole Szkół Wyższych w Rybniku i nieprzerwanie rozwijamy ofertę.",
  },
  {
    icon: Award,
    title: "Uznana jakość",
    description:
      "Akredytacje Śląskiego Kuratora Oświaty (2015, 2020), najwyższa ocena A z ewaluacji kuratoryjnej, certyfikacje jakości (SUS/DEKRA, TGLS).",
  },
  {
    icon: Sparkles,
    title: "Innowacje wdrożone w praktyce",
    description:
      "Od pierwszej platformy e-learningowej w regionie (2007) po współczesne programy z AI/VR/AR.",
  },
  {
    icon: Heart,
    title: "Dostępność i włączenie",
    description:
      "Realne rozwiązania dla osób z niepełnosprawnościami (publikacje w systemie Braille'a/czarnodruk, szkolenia z edukacji włączającej).",
  },
  {
    icon: Globe,
    title: "Międzynarodowy zasięg",
    description:
      "Systematyczne wsparcie dla środowisk polonijnych – ok. 600 nauczycieli szkół polonijnych wzięło udział w naszych szkoleniach.",
  },
  {
    icon: Laptop,
    title: "Własne zasoby cyfrowe",
    description:
      "Platforma e-learningowa z pełnią praw autorskich do kursów online, materiałów szkoleniowych, zdjęć, wideo i quizów.",
  },
];

const priorities2025 = [
  {
    icon: Brain,
    title: "AI/VR/AR w dydaktyce",
    description:
      "Wdrażanie sztucznej inteligencji, rzeczywistości wirtualnej i rozszerzonej w nauczaniu i ocenianiu.",
  },
  {
    icon: Heart,
    title: "Edukacja włączająca",
    description:
      "Kompleksowe wsparcie edukacji włączającej, w tym rozwiązania assistive technology i materiały w systemie Braille'a.",
  },
  {
    icon: GraduationCap,
    title: "Szkoły branżowe",
    description:
      "Programy dla szkół branżowych i doradztwa zawodowego, wsparcie psychologów szkolnych i pedagogów specjalnych.",
  },
  {
    icon: Users,
    title: "Strefa Rodzica",
    description:
      'Rozwój platformy "Strefa Rodzica" jako stałej, bezpłatnej przestrzeni wsparcia dla rodziców i opiekunów.',
  },
];

const timeline = [
  {
    year: "XII 2005",
    title: "Utworzenie NODN w Rybniku",
    description:
      "Powstanie Niepublicznego Ośrodka Doskonalenia Nauczycieli oraz siedziby w Zespole Szkół Wyższych w Rybniku dzięki wsparciu Prezydenta Adama Fudalego.",
  },
  {
    year: "IX 2006",
    title: "Wpis do rejestru (Śląski Kurator Oświaty)",
    description:
      "Wpis NODN do rejestru niepublicznych placówek doskonalenia nauczycieli <br/>(nr 61, KO.ZU.DN.JN/4234/61/06).",
  },
  {
    year: "IX 2007",
    title: "Pierwsza platforma e-learning/hybrydowa",
    description:
      "Uruchomienie pierwszej w południowej Polsce platformy do kształcenia zdalnego i hybrydowego.",
  },
  {
    year: "X 2008",
    title: "Rozszerzenie współpracy akademickiej",
    description:
      "Współpraca z Uniwersytetem Rzeszowskim, Niepublicznym Kolegium Języków Obcych w Rybniku, Polskim Towarzystwem Dysleksji (prof. Marta Bogdanowicz) oraz Uniwersytetem Wrocławskim.",
  },
  {
    year: "VI 2009",
    title: "Wpis do rejestru (Urząd Marszałkowski Województwa Śląskiego)",
    description:
      "Wpis NODN do rejestru niepublicznych placówek doskonalenia nauczycieli prowadzonego przez Samorząd Województwa Śląskiego (nr 33).",
  },
  {
    year: "IX 2009",
    title: "Dostępność i technologie wspomagające",
    description:
      "Zakup drukarki Tiger (Braille + czarnodruk na jednej kartce) oraz publikacja treści dla osób niedowidzących i niewidomych.",
  },
  {
    year: "IX 2013",
    title: "Licencja ośrodka egzaminacyjnego TELC",
    description:
      "Uzyskanie licencji TELC; zespół 4 egzaminatorów wszystkich poziomów (angielski/niemiecki/język polski jako obcy).",
  },
  {
    year: "X 2014",
    title: "Najwyższa ocena z ewaluacji zewnętrznej",
    description:
      "Ocena A z ewaluacji zewnętrznej – najwyższa ocena Śląskiego Kuratora Oświaty.",
  },
  {
    year: "VIII 2015",
    title: "Pierwsza akredytacja Śląskiego Kuratora Oswiaty",
    description: `Przyznanie pierwszej Akredytacji Śląskiego Kuratora Oświaty <br/>(RE-KS.5470.4.2015).`,
  },
  {
    year: "2018",
    title: "Certyfikat SUS/DEKRA",
    description: "Certyfikat jakości usług szkoleniowych i doradczych.",
  },
  {
    year: "2020",
    title: "Certyfikat TGLS",
    description: "Potwierdzenie jakości usług szkoleniowych (nr 1/08/2020).",
  },
  {
    year: "2020",
    title: "Wpis do Bazy Usług Rozwojowych",
    description:
      "Możliwość realizacji szkoleń oraz doradztwa ze wsparciem środków unijnych do 95%.",
  },
  {
    year: "X 2020",
    title: "Druga akredytacja Śląskiego Kuratora Oswiaty",
    description:
      "Przyznanie drugiej Akredytacji Śląskiego Kuratora Oświaty <br/>(WE-DB.5470.13.2020).",
  },
  {
    year: "III 2021 – IX 2022",
    title: '"Lekcja: Enter" – projekt ogólnopolski',
    description:
      "Realizacja ogólnopolskiego projektu rozwijającego kompetencje cyfrowe nauczycieli (edukacja cyfrowa).",
  },
  {
    year: "VI 2021 – XII 2023",
    title: 'Największy projekt "Edukacja Włączająca"',
    description:
      "Realizacja największego w województwie śląskim projektu z zakresu edukacji włączającej.",
  },
  {
    year: "2022",
    title: '"Forum kadry włączającej" – honorowe patronaty',
    description:
      "Uruchomienie projektu pod honorowym patronatem: Rzecznika Praw Dziecka, Marszałka Województwa Śląskiego oraz włodarzy miast i gmin regionu.",
  },
  {
    year: "2022",
    title: "SUS/DEKRA – odnowienie certyfikatu",
    description:
      "Odnowienie certyfikatu jakości usług szkoleniowych i doradczych.",
  },
  {
    year: "2023",
    title: "Pionierskie szkolenia z AI/VR/AR",
    description:
      "Wprowadzenie pionierskich szkoleń ze sztucznej inteligencji, rzeczywistości wirtualnej i rozszerzonej w edukacji.",
  },
  {
    year: "2024",
    title: "Zakup i wdrożenie platformy VR",
    description:
      "Wsparcie szkół branżowych, psychologów szkolnych i pedagogów specjalnych dzięki rozwiązaniom VR.",
  },
  {
    year: "2025",
    title: 'Platforma "Strefa Rodzica"',
    description:
      "Uruchomienie platformy wspierającej rodziców i opiekunów – bezpłatne wsparcie online.",
  },
  {
    year: "2025",
    title: "16 000+ przeszkolonych nauczycieli",
    description:
      "Przekroczenie granicy 16 tysięcy przeszkolonych pedagogów od początku działalności.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Header />


      <section className="relative py-20 md:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920&text=NODN+Rybnik+-+O+nas')`,
          }}
        />


        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-6 py-3 mb-8">
              Nieprzerwanie od czerwca 2006 roku
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Profesjonalizacja praktyki szkolnej
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                od strategii do praktyki
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              {fixOrphans(
                "Niepubliczny Ośrodek Doskonalenia Nauczycieli w Rybniku działa nieprzerwanie od czerwca 2006 roku. Budujemy rozpoznawalną markę o ugruntowanej pozycji na śląskim rynku edukacyjnym z zasięgiem ogólnopolskim i międzynarodowym."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/szkolenia">
                <Button
                  size="lg"
                  className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4"
                >
                  Poznaj naszą ofertę
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 bg-transparent"
                >
                  Skontaktuj się z nami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white">

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="NODN w liczbach"
              subtitle="Liczby, które mówią same za siebie – zobacz, co udało nam się osiągnąć przez prawie 20 lat działalności"
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center hover-lift bg-white border-0 shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-navy-600" />
                    </div>
                    <div className="text-3xl font-bold text-navy-900 mb-2">
                      {achievement.number}
                    </div>
                    <CardTitle className="text-lg text-navy-800">
                      {achievement.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

              <div className="space-y-8">
                <div>
                  <Badge className="bg-navy-100 text-navy-800 mb-4">
                    Nasza misja
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                    Profesjonalizacja
                    <span className="block text-blue-600">
                      praktyki szkolnej
                    </span>
                  </h2>

                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {fixOrphans(
                      "Naszą misją jest profesjonalizacja praktyki szkolnej poprzez dostarczanie nauczycielom, specjalistom i kadrze kierowniczej aktualnej, użytecznej i weryfikowalnej wiedzy oraz narzędzi do wdrażania zmian."
                    )}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {fixOrphans(
                      'Pracujemy w modelu "od strategii do praktyki": od analiz potrzeb i polityk publicznych, przez projektowanie programów, po wdrożenia, mentoring i ewaluację efektów.'
                    )}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {fixOrphans(
                      "Od startu konsekwentnie łączymy wysokie standardy jakości, innowacyjność dydaktyczną i odpowiedzialność społeczną. Tworzymy programy oparte na dowodach (evidence-based), wdrażamy nowoczesne formy kształcenia (e-learning, blended learning, szkolenia VR/AR/AI)."
                    )}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/szkolenia">
                    <Button className="bg-navy-600 hover:bg-navy-700">
                      Zobacz nasze kursy
                    </Button>
                  </Link>
                  <Link href="/o-nas/referencje">
                    <Button
                      variant="outline"
                      className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white bg-transparent"
                    >
                      Przeczytaj referencje
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side - Visual */}
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/o-nas-wspieramy.jpeg"
                    alt="Zespół NODN Rybnik"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      Doświadczony zespół
                    </h3>
                    <p className="text-white/90">
                      Praktycy i badacze z ekspertyzą
                    </p>
                  </div>
                </div>


                <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                  <Calendar className="h-8 w-8 mb-2" />
                  <div className="text-sm font-semibold">Od VI 2006</div>
                  <div className="text-xs opacity-90">
                    Prawie 20 lat działalności
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-xl shadow-lg">
                  <TrendingUp className="h-8 w-8 mb-2" />
                  <div className="text-sm font-semibold">Ciągły rozwój</div>
                  <div className="text-xs opacity-90">Innowacje w praktyce</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Priorytety na dziś i jutro"
              subtitle="Obszary, na których koncentrujemy się w 2025 roku, łącząc kierunki polityk oświatowych z realnymi potrzebami szkół"
              titleClassName="text-3xl md:text-4xl font-bold text-white"
              subtitleClassName="text-lg text-white/80 mt-2 max-w-3xl mx-auto"
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {priorities2025.map((priority, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <priority.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center text-white">
                      {priority.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-center leading-relaxed">
                      {fixOrphans(priority.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/90 text-lg mb-6">
                {fixOrphans(
                  "Rozwijamy programy dla szkół i przedszkoli, placówek doskonalenia, JST oraz organizacji pozarządowych."
                )}
              </p>
              <Link href="/szkolenia">
                <Button
                  size="lg"
                  className="bg-white text-navy-900 hover:bg-gray-100"
                >
                  Zobacz aktualne szkolenia
                </Button>
              </Link>
            </div>
          </div>
        </section>


        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Co nas wyróżnia"
              subtitle="Stabilność, jakość i innowacyjność – elementy, które budują naszą pozycję na rynku edukacyjnym"
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {distinguishingFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover-lift bg-white border-0 shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-navy-900 text-center">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {fixOrphans(feature.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Nasze wartości"
              subtitle="Zasady, którymi kierujemy się w codziennej pracy i które definiują naszą tożsamość"
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="hover-lift bg-white border-0 shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        value.color === "blue"
                          ? "bg-blue-100"
                          : value.color === "green"
                          ? "bg-green-100"
                          : value.color === "purple"
                          ? "bg-purple-100"
                          : value.color === "red"
                          ? "bg-red-100"
                          : value.color === "indigo"
                          ? "bg-indigo-100"
                          : "bg-orange-100"
                      }`}
                    >
                      <value.icon
                        className={`h-8 w-8 ${
                          value.color === "blue"
                            ? "text-blue-600"
                            : value.color === "green"
                            ? "text-green-600"
                            : value.color === "purple"
                            ? "text-purple-600"
                            : value.color === "red"
                            ? "text-red-600"
                            : value.color === "indigo"
                            ? "text-indigo-600"
                            : "text-orange-600"
                        }`}
                      />
                    </div>
                    <CardTitle className="text-xl text-navy-900 text-center">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {fixOrphans(value.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Status prawny i jakość"
              subtitle="Oficjalne potwierdzenia jakości naszej pracy i zgodności z najwyższymi standardami"
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={`hover-lift border-l-4 ${
                    cert.color === "blue"
                      ? "border-l-blue-500 bg-blue-50"
                      : cert.color === "green"
                      ? "border-l-green-500 bg-green-50"
                      : cert.color === "purple"
                      ? "border-l-purple-500 bg-purple-50"
                      : "border-l-indigo-500 bg-indigo-50"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          cert.color === "blue"
                            ? "bg-blue-100"
                            : cert.color === "green"
                            ? "bg-green-100"
                            : cert.color === "purple"
                            ? "bg-purple-100"
                            : "bg-indigo-100"
                        }`}
                      >
                        <cert.icon
                          className={`h-6 w-6 ${
                            cert.color === "blue"
                              ? "text-blue-600"
                              : cert.color === "green"
                              ? "text-green-600"
                              : cert.color === "purple"
                              ? "text-purple-600"
                              : "text-indigo-600"
                          }`}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-base text-navy-900 mb-2">
                          {cert.title}
                        </CardTitle>
                        <p
                          className={`text-xs font-medium ${
                            cert.color === "blue"
                              ? "text-blue-600"
                              : cert.color === "green"
                              ? "text-green-600"
                              : cert.color === "purple"
                              ? "text-purple-600"
                              : "text-indigo-600"
                          }`}
                        >
                          {cert.number}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm">
                      {fixOrphans(cert.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Ocena A z ewaluacji zewnętrznej
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {fixOrphans(
                      "Najwyższa ocena z kuratoryjnej ewaluacji zewnętrznej Śląskiego Kuratora Oświaty potwierdza najwyższe standardy jakości świadczonych przez nas usług szkoleniowych i doradczych."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 md:py-24 bg-navy-900 text-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Kamienie milowe"
              subtitle="Kluczowe momenty w rozwoju NODN Rybnik – od założenia do dzisiaj"
              titleClassName="text-3xl md:text-4xl font-bold text-white"
              subtitleClassName="text-lg text-white/80 mt-2 max-w-3xl mx-auto"
            />

            <div className="relative">

              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20 hidden md:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:gap-8`}
                  >

                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      } text-center md:text-left`}
                    >
                      <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-lift">
                        <CardHeader>
                          <div className="flex items-center gap-3 justify-center md:justify-start">
                            <Badge className="bg-blue-600 text-white">
                              {item.year}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-white/80">
                            <Markdown>{fixOrphans(item.description)}</Markdown>
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white/20 hidden md:block flex-shrink-0"></div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Zapraszamy do współpracy
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              {fixOrphans(
                "Instytucje oświatowe, samorządy i partnerów, którzy – tak jak my – wierzą, że dobra edukacja zmienia rzeczywistość."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
                >
                  Skontaktuj się z nami
                </Button>
              </Link>
              <Link href="/szkolenia">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 bg-transparent"
                >
                  Zobacz ofertę szkoleń
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Skontaktuj się z nami"
              subtitle="Masz pytania? Chcesz dowiedzieć się więcej? Jesteśmy do Twojej dyspozycji"
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover-lift bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-navy-600" />
                  </div>
                  <CardTitle className="text-navy-900">
                    Siedziba główna
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p className="font-semibold">
                      Niepubliczny Ośrodek Doskonalenia Nauczycieli w Rybniku
                    </p>
                    <p>ul. Rudzka 13c</p>
                    <p>44-200 Rybnik</p>
                    <p>Budynek B, 3 piętro</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-navy-600" />
                  </div>
                  <CardTitle className="text-navy-900">Telefony</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p>+48 797 173 501</p>
                    <p>+48 502 162 365</p>
                    <p>+48 690 515 224</p>
                    <p>+48 503 192 950</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-navy-600" />
                  </div>
                  <CardTitle className="text-navy-900">
                    Email i więcej
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600">odn.rybnik@gmail.com</p>
                    <div className="space-y-2">
                      <Link
                        href="/o-nas/referencje"
                        className="flex items-center gap-2 text-navy-600 hover:text-navy-800 text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Zobacz referencje
                      </Link>
                      <Link
                        href="/dokumenty"
                        className="flex items-center gap-2 text-navy-600 hover:text-navy-800 text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Pobierz dokumenty
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-navy-600 hover:bg-navy-700 px-8 py-4"
                >
                  Przejdź do formularza kontaktowego
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
