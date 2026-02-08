import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Users, BarChart2, FileText, Download, ExternalLink, Shield, Award, Megaphone } from 'lucide-react';
import Image from "next/image";
import { Header } from "@/components/layout-components/header"
import { Footer } from "@/components/layout-components/footer"
import { ScrollArea } from "@/components/ui/scroll-area"


function isForumSlug(slug: string) {
  return [
    "forum-kadry-wlaczajacej",
    "forum-kadry-wlaczajacej-wojewodztwa-slaskiego",
    "forum-kadry-wlaczajacej-woj-slaskiego",
    "edukacja-wlaczajaca",
  ].includes(slug)
}

function generateFacilities(count = 220) {
  const cities = [
    "Katowice","Rybnik","Gliwice","Bytom","Zabrze","Tychy","Chorzów","Sosnowiec","Jaworzno",
    "Bielsko-Biała","Częstochowa","Ruda Śląska","Żory","Mikołów","Świętochłowice","Mysłowice","Piekary Śląskie",
    "Siemianowice Śląskie","Jastrzębie-Zdrój","Racibórz"
  ]
  return Array.from({ length: count }, (_, i) => {
    const city = cities[i % cities.length]
    const nr = (i % 60) + 1
    const postal = `${String(40 + (i % 59)).padStart(2, '0')}-${String(100 + (i % 900)).padStart(3, '0')}`
    return {
      name: `Placówka Edukacyjna nr ${nr}`,
      address: `ul. Edukacyjna ${nr}, ${postal} ${city}`,
      city
    }
  })
}


const getProjectData = (_slug: string) => {
  return {
    title: "Edukacja włączająca",
    date: "2022-2024",
    description: "Projekt 'Edukacja włączająca' miał na celu podniesienie kompetencji nauczycieli w zakresie pracy z uczniami o zróżnicowanych potrzebach edukacyjnych. Skupiliśmy się na dostarczeniu praktycznych narzędzi, metod i strategii, które wspierają tworzenie otwartego i dostępnego środowiska nauki dla wszystkich uczniów.",
    goals: [
      "Przeszkolenie 500 nauczycieli z 50 szkół.",
      "Wdrożenie Indywidualnych Planów Edukacyjno-Terapeutycznych (IPET).",
      "Stworzenie sieci wsparcia dla pedagogów specjalnych.",
      "Wyposażenie szkół w pakiety materiałów dydaktycznych.",
    ],
    results: [
      { icon: Users, label: "Przeszkolonych nauczycieli", value: "523" },
      { icon: BarChart2, label: "Wzrost kompetencji (samoocena)", value: "+45%" },
      { icon: Target, label: "Zrealizowanych celów", value: "98%" },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400&text=Szkolenie+1",
      "/placeholder.svg?height=300&width=400&text=Warsztaty+praktyczne",
      "/placeholder.svg?height=300&width=400&text=Konferencja+podsumowująca",
    ]
  };
};

export default function SingleProjectPage({ params }: { params: { slug: string } }) {

  if (isForumSlug(params.slug)) {
    const facilities = generateFacilities(222)

    return (
      <>
        <Header />
        <div className="py-12 md:py-20">
          <div className="container mx-auto px-4">

            <div className="text-center mb-12">
              <Badge className="mb-4 bg-navy-600 text-white">Projekt „Edukacja Włączająca”</Badge>
              <h1 className="text-4xl font-bold text-navy-900">
                Forum Kadry Włączającej Województwa Śląskiego
              </h1>
              <p className="text-lg text-gray-700 mt-4 max-w-4xl mx-auto">
                Projekt "Edukacja Włączająca" – podnoszenie kompetencji grona pedagogicznego w zakresie edukacji włączającej i wsparcia uczniów ze specjalnymi potrzebami edukacyjnymi.
              </p>
              <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto">
                Zapraszamy szkoły i przedszkola z województwa śląskiego do udziału w projekcie.
              </p>
            </div>


            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Rekrutacja i materiały</CardTitle>
                <CardDescription>
                  Najważniejsze dokumenty i obszary realizowane podczas zajęć online.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { label: "Regulamin", icon: FileText },
                    { label: "Formularz zgłoszeniowy FKW", icon: FileText },
                    { label: "Załączniki", icon: FileText },
                    { label: "Strona projektu", icon: ExternalLink },
                    { label: "Obszary realizowane podczas zajęć online", icon: Target },
                    { label: "Sieć współpracy: Edukacja Włączająca w chmurze", icon: Users },
                    { label: "Badanie potrzeb", icon: BarChart2 },
                    { label: "Harmonogramy do pobrania", icon: Download },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg border bg-white hover:bg-navy-50 transition-colors">
                      <item.icon className="h-5 w-5 text-navy-600" />
                      <span className="text-sm text-navy-900">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-navy-50 border border-navy-200 rounded-lg">
                  <p className="text-sm text-navy-800">
                    Kontakt w sprawie rekrutacji i materiałów: <span className="font-semibold">tel. 690 515 224</span>
                  </p>
                </div>
              </CardContent>
            </Card>


            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Honorowe Patronaty</CardTitle>
                <CardDescription>
                  Partnerzy wspierający inicjatywę.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: "Rzecznik Praw Dziecka", icon: Shield },
                    { label: "Marszałek Województwa Śląskiego", icon: Award },
                    { label: "Prezydenci Miast i Gmin Województwa Śląskiego", icon: Users },
                    { label: "Telewizja Katowice", icon: ExternalLink },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-lg border bg-white">
                      <item.icon className="h-5 w-5 text-navy-600" />
                      <span className="text-sm font-medium text-navy-900">{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-navy-600" />
                  Działania promocyjne
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Placówki zgłaszające całe grono pedagogiczne otrzymują film promocyjny z logotypem placówki,
                  realizowany przez NODN w Rybniku pro bono.
                </p>
              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <CardTitle>Placówki, które przeszkoliły całość lub znaczną część grona pedagogicznego w projekcie:</CardTitle>
              </CardHeader>
              <CardContent>

                <ScrollArea className="h-[60vh] pr-4">
                  <ol className="space-y-2 list-decimal pl-6">
                    {facilities.map((f, idx) => (
                      <li key={idx}>
                        <span className="font-medium text-navy-900">{f.name}</span>
                        <span className="text-gray-600">{' — '}{f.address}</span>
                      </li>
                    ))}
                  </ol>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </>
    )
  }


  const project = getProjectData(params.slug);

  return (
    <>
      <Header />
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">{project.date}</Badge>
            <h1 className="text-4xl font-bold text-navy-900">{project.title}</h1>
          </div>

          <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 leading-relaxed mb-16">{project.description}</p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader><CardTitle>Cele projektu</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.goals.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="h-5 w-5 text-navy-600 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Kluczowe rezultaty</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {project.results.map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <item.icon className="h-8 w-8 text-navy-600 mr-4" />
                    <div>
                      <p className="text-2xl font-bold text-navy-900">{item.value}</p>
                      <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-8">Galeria projektu</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {project.gallery.map((src, index) => (
                <div key={index} className="relative h-60 rounded-lg overflow-hidden shadow-md">
                  <Image src={src || "/icons/placeholder.svg"} layout="fill" objectFit="cover" alt={`Zdjęcie z projektu ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
