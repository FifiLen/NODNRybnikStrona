'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Cookie, Settings, Shield, BarChart3, Target } from 'lucide-react'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setPreferences(necessaryOnly)
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: key === 'necessary' ? true : value // Necessary cookies cannot be disabled
    }))
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 bg-white border-t shadow-2xl">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-navy-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Używamy plików cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nasza strona wykorzystuje pliki cookies w celu zapewnienia najlepszej jakości usług, 
                  personalizacji treści oraz analizy ruchu. Kontynuując korzystanie ze strony, 
                  wyrażasz zgodę na używanie plików cookies zgodnie z naszą{' '}
                  <a href="/polityka-prywatnosci" className="text-navy-600 hover:underline">
                    Polityką Prywatności
                  </a>.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Dialog open={showSettings} onOpenChange={setShowSettings}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <Settings className="h-4 w-4 mr-2" />
                    Ustawienia
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Cookie className="h-5 w-5" />
                      Ustawienia plików cookies
                    </DialogTitle>
                    <DialogDescription>
                      Wybierz, które rodzaje plików cookies chcesz zaakceptować
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-green-600" />
                            <CardTitle className="text-lg">Niezbędne</CardTitle>
                            <Badge variant="secondary">Wymagane</Badge>
                          </div>
                          <Switch 
                            checked={preferences.necessary} 
                            disabled={true}
                          />
                        </div>
                        <CardDescription>
                          Te pliki cookies są niezbędne do prawidłowego funkcjonowania strony internetowej 
                          i nie mogą być wyłączone.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-blue-600" />
                            <CardTitle className="text-lg">Analityczne</CardTitle>
                          </div>
                          <Switch 
                            checked={preferences.analytics}
                            onCheckedChange={(checked) => updatePreference('analytics', checked)}
                          />
                        </div>
                        <CardDescription>
                          Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony, 
                          dzięki czemu możemy ją ulepszać.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-purple-600" />
                            <CardTitle className="text-lg">Marketingowe</CardTitle>
                          </div>
                          <Switch 
                            checked={preferences.marketing}
                            onCheckedChange={(checked) => updatePreference('marketing', checked)}
                          />
                        </div>
                        <CardDescription>
                          Używane do wyświetlania spersonalizowanych reklam i treści 
                          dostosowanych do Twoich zainteresowań.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Settings className="h-5 w-5 text-orange-600" />
                            <CardTitle className="text-lg">Funkcjonalne</CardTitle>
                          </div>
                          <Switch 
                            checked={preferences.functional}
                            onCheckedChange={(checked) => updatePreference('functional', checked)}
                          />
                        </div>
                        <CardDescription>
                          Umożliwiają zapamiętywanie Twoich preferencji i personalizację 
                          doświadczenia korzystania ze strony.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button onClick={savePreferences} className="flex-1 bg-navy-600 hover:bg-navy-700">
                      Zapisz preferencje
                    </Button>
                    <Button variant="outline" onClick={acceptAll} className="flex-1">
                      Akceptuj wszystkie
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="sm" onClick={acceptNecessary} className="w-full sm:w-auto">
                Tylko niezbędne
              </Button>
              <Button size="sm" onClick={acceptAll} className="bg-navy-600 hover:bg-navy-700 w-full sm:w-auto">
                Akceptuj wszystkie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
