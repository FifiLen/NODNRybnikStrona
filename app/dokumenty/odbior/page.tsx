'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Mail, CreditCard, MapPin, Truck, Globe, Copy, CheckCircle, Building, Phone } from 'lucide-react'
import { Header } from "@/components/layout-components/header"
import { Footer } from "@/components/layout-components/footer"

export default function DocumentPickupPage() {
  const deliveryOptions = [
    {
      type: "Odbiór osobisty",
      price: "Bezpłatnie",
      description: "Odbiór w sekretariacie NODN",
      icon: Building,
      color: "green"
    },
    {
      type: "Wysyłka elektroniczna",
      price: "Bezpłatnie",
      description: "Przesłanie na adres email",
      icon: Mail,
      color: "blue"
    },
    {
      type: "Poczta Polska - polecony priorytet C5",
      price: "15 zł",
      description: "Format C5 (koperta standardowa)",
      icon: FileText,
      color: "orange"
    },
    {
      type: "Poczta Polska - polecony priorytet C4",
      price: "20 zł",
      description: "Format C4 (koperta duża)",
      icon: FileText,
      color: "orange"
    },
    {
      type: "Kurier",
      price: "20 zł",
      description: "Dostawa kurierska na terenie Polski",
      icon: Truck,
      color: "purple"
    }
  ]

  const internationalOptions = [
    {
      region: "Europa (w tym Cypr, Rosja, Izrael)",
      price: "50 zł",
      description: "Przesyłka listowa nierejestrowana"
    },
    {
      region: "Ameryka Północna i Afryka",
      price: "60 zł",
      description: "Przesyłka listowa nierejestrowana"
    },
    {
      region: "Ameryka Południowa, Środkowa i Azja",
      price: "80 zł",
      description: "Przesyłka listowa nierejestrowana"
    },
    {
      region: "Australia i Oceania",
      price: "100 zł",
      description: "Przesyłka listowa nierejestrowana"
    }
  ]

  const bankDetails = {
    iban: "PL75114020040000370279972098",
    bic: "BREXPLPW",
    recipient: "BiS Groups",
    title: "Odbiór dokumentów"
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // You could add a toast notification here if needed
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <>
      <Header />
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy-900 mb-4">Odbiór dokumentów</h1>
            <p className="text-lg text-gray-600">
              Informacje o sposobach odbioru świadectw i zaświadczeń po zakończeniu kursu
            </p>
          </div>

          {/* Instrukcja główna */}
          <Card className="mb-8 border-l-4 border-l-navy-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-navy-600" />
                Jak odebrać dokumenty?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Jeżeli uczestnik zakończonego kursu życzy sobie, aby świadectwo lub zaświadczenie było wysłane 
                  pod wskazany adres, prosimy o przesłanie na adres <strong>odn.rybnik@gmail.com</strong>:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Adresu do wysyłki</li>
                  <li>Potwierdzenia wpłaty za wybraną formę dostarczenia dokumentu</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Opcje odbioru krajowego */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-navy-600" />
                Opcje odbioru na terenie Polski
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {deliveryOptions.map((option, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${
                    option.color === 'green' ? 'border-green-200 bg-green-50' :
                    option.color === 'blue' ? 'border-blue-200 bg-blue-50' :
                    option.color === 'orange' ? 'border-orange-200 bg-orange-50' :
                    'border-purple-200 bg-purple-50'
                  }`}>
                    <div className="flex items-start gap-3">
                      <option.icon className={`h-6 w-6 mt-1 ${
                        option.color === 'green' ? 'text-green-600' :
                        option.color === 'blue' ? 'text-blue-600' :
                        option.color === 'orange' ? 'text-orange-600' :
                        'text-purple-600'
                      }`} />
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${
                          option.color === 'green' ? 'text-green-900' :
                          option.color === 'blue' ? 'text-blue-900' :
                          option.color === 'orange' ? 'text-orange-900' :
                          'text-purple-900'
                        }`}>
                          {option.type}
                        </h3>
                        <p className={`text-sm mb-2 ${
                          option.color === 'green' ? 'text-green-700' :
                          option.color === 'blue' ? 'text-blue-700' :
                          option.color === 'orange' ? 'text-orange-700' :
                          'text-purple-700'
                        }`}>
                          {option.description}
                        </p>
                        <Badge className={`${
                          option.color === 'green' ? 'bg-green-600' :
                          option.color === 'blue' ? 'bg-blue-600' :
                          option.color === 'orange' ? 'bg-orange-600' :
                          'bg-purple-600'
                        } text-white`}>
                          {option.price}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Wysyłka międzynarodowa */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-navy-600" />
                Wysyłka międzynarodowa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Poczta Polska - przesyłka listowa nierejestrowana (w tym kartka pocztowa):
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {internationalOptions.map((option, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-navy-900 text-sm">{option.region}</h3>
                      <Badge variant="outline" className="text-navy-600 border-navy-600">
                        {option.price}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dane do przelewu */}
          <Card className="mb-8 bg-navy-50 border-navy-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-navy-900">
                <CreditCard className="h-5 w-5 text-navy-600" />
                Dane do przelewu złotówkowego
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-semibold text-navy-900">IBAN:</label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="bg-white px-3 py-2 rounded border text-sm font-mono">
                          {bankDetails.iban}
                        </code>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(bankDetails.iban)}
                          className="p-2"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-semibold text-navy-900">BIC:</label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="bg-white px-3 py-2 rounded border text-sm font-mono">
                          {bankDetails.bic}
                        </code>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(bankDetails.bic)}
                          className="p-2"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-semibold text-navy-900">Odbiorca:</label>
                      <div className="bg-white px-3 py-2 rounded border text-sm mt-1">
                        {bankDetails.recipient}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-semibold text-navy-900">Tytuł przelewu:</label>
                      <div className="bg-white px-3 py-2 rounded border text-sm mt-1">
                        {bankDetails.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Odbiór osobisty */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-navy-600" />
                Odbiór osobisty w sekretariacie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Adres:</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>ul. Rudzka 13c</p>
                    <p>44-200 Rybnik</p>
                    <p>Budynek B, 3 piętro</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Kontakt:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-navy-600" />
                      <span className="text-gray-700">+48 797 173 501</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-navy-600" />
                      <span className="text-gray-700">odn.rybnik@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ważne informacje */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-800">
                <CheckCircle className="h-5 w-5 text-yellow-600" />
                Ważne informacje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-yellow-800 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Dokumenty są wydawane wyłącznie uczestnikom, którzy ukończyli kurs zgodnie z regulaminem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>W przypadku wysyłki należy dołączyć potwierdzenie wpłaty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Czas realizacji wysyłki: 3-5 dni roboczych od otrzymania wpłaty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Wysyłka elektroniczna jest dostępna natychmiast po zakończeniu kursu</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
