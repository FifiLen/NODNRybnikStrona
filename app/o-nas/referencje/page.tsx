"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Award, FileText, School, Building2, GraduationCap, X, Users } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/layout-components/header"
import { Footer } from "@/components/layout-components/footer"
import { SectionTitle } from "@/components/ui/section-title"

const references = [
  {
    id: 1,
    title: "Creative Minds Nurseries Ltd",
    institution: "Londyn, Wielka Brytania",
    type: "Referencja międzynarodowa",
    description: "Referencja dla Bożeny Babczyńskiej-Olszewskiej od Creative Minds Nurseries Ltd w Londynie",
    image: "/images/referencje/creative-minds-nurseries.png",
    category: "international",
    year: "2018",
  },
  {
    id: 2,
    title: 'Niepubliczne Przedszkole "Wesołe Nutki"',
    institution: "Knurów",
    type: "List referencyjny",
    description: "Referencje dotyczące kursów kwalifikacyjnych z metodyki nauczania języka angielskiego",
    image: "/images/referencje/wesole-nutki.png",
    category: "przedszkole",
    year: "2016",
  },
  {
    id: 3,
    title: "Rekomendacja NODN",
    institution: "Rybnik",
    type: "Rekomendacja",
    description: "Oficjalna rekomendacja dla Niepublicznego Ośrodka Doskonalenia Nauczycieli",
    image: "/images/referencje/rekomendacja-rybnik-2015.png",
    category: "instytucja",
    year: "2015",
  },
  {
    id: 4,
    title: "Przedszkole nr 11 im. Marii Konopnickiej",
    institution: "Racibórz",
    type: "Referencja",
    description: "Podziękowania za organizację i prowadzenie kursu językowego i kwalifikacyjnego",
    image: "/images/referencje/przedszkole-konopnicka.png",
    category: "przedszkole",
    year: "2018",
  },
  {
    id: 5,
    title: 'Przedszkole nr 6 "Pod Jarzębiną"',
    institution: "Czerwionka-Leszczyny",
    type: "Referencje",
    description: "Referencje dotyczące kursów kwalifikacyjnych metodyki nauczania języka angielskiego",
    image: "/images/referencje/przedszkole-jarzebina.png",
    category: "przedszkole",
    year: "2016",
  },
  {
    id: 6,
    title: "Szkoła Podstawowa nr 36 im. Czesława Miłosza",
    institution: "Rybnik",
    type: "List referencyjny",
    description: "Referencje dla nauczycielki Marzeny Kuś za udział w kursach kwalifikacyjnych",
    image: "/images/referencje/szkola-podstawowa-36.png",
    category: "szkola",
    year: "2017",
  },
  {
    id: 7,
    title: "Szkoła Podstawowa",
    institution: "Kobielice",
    type: "Referencje",
    description: "Pozytywne referencje dla NODN w Rybniku za wysoką jakość szkoleń",
    image: "/images/referencje/szkola-kobielice.png",
    category: "szkola",
    year: "2016",
  },
  {
    id: 8,
    title: "Rekomendacja",
    institution: "Wodzisław Śląski",
    type: "Rekomendacja",
    description: "Rekomendacja NODN jako solidnej placówki szkoleniowej",
    image: "/images/referencje/rekomendacja-wodzislaw.png",
    category: "instytucja",
    year: "2016",
  },
  {
    id: 9,
    title: "Zespół Szkolno-Przedszkolny nr 3",
    institution: "Wodzisław Śląski",
    type: "List referencyjny",
    description: "Potwierdzenie profesjonalizmu i rzetelności NODN w Rybniku",
    image: "/images/referencje/zespol-szkolny-wodzislaw.png",
    category: "szkola",
    year: "2016",
  },
  {
    id: 10,
    title: "English House Learning Center",
    institution: "Rybnik",
    type: "Rekomendacja",
    description: "Obszerna rekomendacja współpracy z NODN w zakresie kursów językowych",
    image: "/images/referencje/english-house.png",
    category: "instytucja",
    year: "2016",
  },
  {
    id: 11,
    title: "Referencje od nauczyciela dyplomowanego",
    institution: "Żory - Przedszkole Nr 23 im. Lucyny Krzemienieckiej",
    type: "Referencje",
    description: "Pozytywna opinia dla NODN od nauczyciela dyplomowanego pracującego w Żorach",
    image: "/images/referencje/referencje-zory-2018.png",
    category: "indywidualny",
    year: "2018",
  },
  {
    id: 12,
    title: "Uniwersytet Trzeciego Wieku",
    institution: "Rybnik",
    type: "Podziękowanie",
    description: "Podziękowanie za wakacyjne zajęcia językowe dla studentów UTW",
    image: "/images/referencje/utw-rybnik-2011.png",
    category: "uniwersytet",
    year: "2011",
  },
  {
    id: 13,
    title: "Miejskie Przedszkole",
    institution: "Sośnicowice",
    type: "Rekomendacje",
    description: "Rekomendacje za dwuletnie szkolenia nauczycieli wychowania przedszkolnego",
    image: "/images/referencje/przedszkole-sosnicowice.png",
    category: "przedszkole",
    year: "2018",
  },
  {
    id: 14,
    title: "Przedszkole nr 20",
    institution: "Rybnik",
    type: "List referencyjny",
    description: "Referencje polecające NODN jako solidnego partnera w podnoszeniu kwalifikacji",
    image: "/images/referencje/przedszkole-20-rybnik.png",
    category: "przedszkole",
    year: "2016",
  },
  {
    id: 15,
    title: "Rekomendacja - Metodyka nauczania",
    institution: "Rybnik",
    type: "Rekomendacja",
    description: "Rekomendacja za kurs metodyki nauczania języka angielskiego w okresie wczesnoszkolnym",
    image: "/images/referencje/rekomendacja-rybnik-2015-2.png",
    category: "instytucja",
    year: "2015",
  },
  {
    id: 16,
    title: "Bogusława Zachwey",
    institution: "PSP łany woj. opolskie",
    type: "List referencyjny",
    description: "Referencje od nauczyciela za kurs metodyczno-językowy z języka angielskiego",
    image: "/images/referencje/boguslawa-zachwey.png",
    category: "indywidualny",
    year: "2016",
  },
  {
    id: 17,
    title: "Zespół Szkolno-Przedszkolny",
    institution: "Szczerbice",
    type: "Referencje",
    description: "Referencje za kurs kwalifikacyjny z metodyki nauczania języka obcego",
    image: "/images/referencje/zespol-szczerbice.png",
    category: "szkola",
    year: "2016",
  },
  {
    id: 18,
    title: "Zespół Szkolno-Przedszkolny nr 12",
    institution: "Rybnik",
    type: "List referencyjny",
    description: "Potwierdzenie profesjonalizmu NODN jako placówki podnoszenia kwalifikacji",
    image: "/images/referencje/zespol-12-rybnik.png",
    category: "szkola",
    year: "2018",
  },
  {
    id: 19,
    title: "Małgorzata Kaźmierczak - Centrum Egzaminacyjne TELC",
    institution: "Pawłowice - Szkoła Podstawowa nr 1",
    type: "Rekomendacja",
    description: "Rekomendacja dla Centrum Egzaminacyjnego TELC za kurs przygotowujący do egzaminu TELC B2",
    image: "/images/referencje/malgorzata-kazmierczak-pawlowice.png",
    category: "indywidualny",
    year: "2020",
  },
  {
    id: 20,
    title: "Przedszkole nr 13 im. Marii Kownackiej",
    institution: "Rybnik",
    type: "List referencyjny",
    description: "Referencje za kursy kwalifikacyjne z metodyki nauczania języka angielskiego i PTE level 3",
    image: "/images/referencje/przedszkole-13-rybnik.png",
    category: "przedszkole",
    year: "2017",
  },
  {
    id: 21,
    title: "Agata Opawska - Przedszkole nr 14",
    institution: "Rybnik - Przedszkole im. Janusza Korczaka",
    type: "Rekomendacja",
    description: "Rekomendacja za kurs języka angielskiego przygotowujący do egzaminu TELC B2",
    image: "/images/referencje/agata-opawska-przedszkole-14.png",
    category: "indywidualny",
    year: "2020",
  },
  {
    id: 22,
    title: "Szkoła Podstawowa w Rogowie",
    institution: "Rogow",
    type: "Rekomendacja",
    description: "Rekomendacja za kurs kwalifikacyjny w zakresie wczesnego nauczania języka angielskiego",
    image: "/images/referencje/szkola-podstawowa-rogow.png",
    category: "szkola",
    year: "2020",
  },
]

const categories = [
  { key: "all", label: "Wszystkie", icon: FileText },
  { key: "szkola", label: "Szkoły", icon: School },
  { key: "przedszkole", label: "Przedszkola", icon: Building2 },
  { key: "instytucja", label: "Instytucje", icon: Award },
  { key: "international", label: "Międzynarodowe", icon: GraduationCap },
  { key: "indywidualny", label: "Indywidualne", icon: Users },
  { key: "uniwersytet", label: "Uniwersytety", icon: GraduationCap },
]

export default function ReferencesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredReferences =
    selectedCategory === "all" ? references : references.filter((ref) => ref.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Referencje/rekomendacje oraz Honorowe Patronaty" />

          {/* YouTube video section for honorary patronages */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/gG_8R9SfIb0"
                    title="Forum Kadry Włączającej Województwa Śląskiego - Honorowe Patronaty"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Honorary patronages section with coats of arms */}
          <div className="mb-16">
            {/* Removed "Honorowe Patronaty" heading */}
            {/* High-level patronages */}
            <div className="mb-8">
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bAkizYDO599rRvPjyAWBoRXZSP98fu.png"
                      alt="Rzecznik Praw Dziecka"
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2hFQGJ4aRRy8iu4yFcoMK43cLuPtHP.png"
                      alt="Marszałek Województwa Śląskiego"
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Regional and local patronages */}
            <div>
              {/* Removed "Patronaty Regionalne i Lokalne" heading */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
               <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K3e12vZHhNGTxVsp0I41ummNuuQJ4R.png"
                      alt="TVP3 Katowice"
                      width={80}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nWUyjDHg4NoL06BAHMS14lAGPK45he.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
               
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qGeI7fZ9AcTPGfJeYnmK2RFVE0T7am.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pBOAiKPfZms8MpNWHHQiejdzxasWaf.png"
                      alt="Ornontowice"
                      width={80}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0PE45T7j8SNWI3NViEAEef0e2TEPSv.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HHoBESYjmUSQGacCInO0JoQr6SfbyL.png"
                      alt="Herb województwa"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://blobs.vusercontent.net/blob/image-aGIJVtJIl0OtiOMw6IcLONLwhjUbH3.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mUyGcWJTxovwRLoepEZVVcZlYEpfAe.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2izU9IsPRnAfdjDciCtp8hi8B56dal.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fAcEKZQ7MJmwup44oCVENvsIaKi6lU.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GklYXw0lxnSvXUXufoPmsT0XMDekMX.png"
                      alt="Koziegłowy"
                      width={80}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pZe015YKfnpZsoIzNjMk4w8ociqpZL.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t76KFTY6ysjCBQZ2n9cywChYKZXDXZ.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MHCtaepXXnwJuFPHaNzvPALNGE6iPz.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5l0u1cT6MvfKPlBHnxXxrsJD2VjHyA.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7KBtYrxDowpIrzceYUM81UuEBWK2ps.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MLLGqzsIaIDeebhQ0xFoJP1Dkn5pF8.png"
                      alt="Szczyrk"
                      width={80}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
               
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iiKEnJ082aa1RFsfYSeskGRhd78pPT.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sktcd1SRzhbzhXpq8nkGpsO7pqWwNh.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-93ppdg155K02q8FxU5A7deCqN2dI9J.png"
                      alt="Herb miasta"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section separator */}
          <div className="border-t border-gray-200 pt-16 mb-8">
            <h2 className="text-2xl font-bold text-center text-navy-900 mb-8">Referencje i Rekomendacje</h2>
          </div>

          {/* References Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredReferences.map((reference, index) => (
              <Card
                key={reference.id}
                className="overflow-hidden hover-lift bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={reference.image || "/icons/placeholder.svg"}
                    alt={reference.title}
                    fill
                    className="object-contain p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(reference.image)}
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-white/90 text-navy-600">
                      {reference.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {reference.type}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2 line-clamp-2">{reference.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    {reference.institution}
                  </p>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">{reference.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-navy-50 hover:text-navy-600 bg-transparent"
                        onClick={() => setSelectedImage(reference.image)}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Zobacz pełny dokument
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredReferences.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Brak referencji w tej kategorii</h3>
              <p className="text-gray-500">Wybierz inną kategorię lub zobacz wszystkie referencje</p>
            </div>
          )}
        </div>

        {/* Full Screen Image Modal */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
              <div className="relative w-full h-[80vh]">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <Image src={selectedImage || "/icons/placeholder.svg"} alt="Referencja" fill className="object-contain" />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </main>
      <Footer />
    </>
  )
}
