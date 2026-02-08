"use client";

import { useState, useRef, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Eye,
  Type,
  MousePointer,
  Contrast,
  RotateCcw,
  X,
  Accessibility,
} from "lucide-react";

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  // Pobieramy stan i funkcje z globalnego kontekstu
  const { settings, toggleSetting, changeFontSize, resetSettings } =
    useAccessibility();

  // Referencje do elementów DOM do zarządzania focusem
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (isOpen) {

      panelRef.current?.focus();
    } else {

      triggerRef.current?.focus();
    }
  }, [isOpen]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);


  if (!settings) {
    return null;
  }

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Przycisk otwierający panel */}
      <Button
        ref={triggerRef}
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-blue-300"
        aria-label="Otwórz panel ułatwień dostępu"
        title="Ułatwienia dostępu"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <Accessibility className="h-6 w-6" />
      </Button>

      {/* Panel Dostępności (Modal) */}
      {isOpen && (
        <>
          {/* Tło */}
          <div
            className="fixed inset-0 bg-black/50 z-[60]"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Kontener Panelu */}
          <div
            ref={panelRef}
            tabIndex={-1}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-[61] w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto focus:outline-none"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-modal="true"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2
                  id="accessibility-title"
                  className="text-xl font-bold text-gray-900"
                >
                  Ułatwienia dostępu
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  aria-label="Zamknij panel"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Rozmiar tekstu */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Type className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Rozmiar tekstu</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => changeFontSize(-10)}
                      disabled={settings.fontSize <= 80}
                      aria-label="Zmniejsz rozmiar tekstu"
                    >
                      A-
                    </Button>
                    <span className="text-sm font-medium" aria-live="polite">
                      {settings.fontSize}%
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => changeFontSize(10)}
                      disabled={settings.fontSize >= 150}
                      aria-label="Zwiększ rozmiar tekstu"
                    >
                      A+
                    </Button>
                  </div>
                </div>

                {/* Wysoki kontrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Contrast className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Wysoki kontrast</span>
                  </div>
                  <Button
                    variant={settings.highContrast ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleSetting("highContrast")}
                    aria-pressed={settings.highContrast}
                  >
                    {settings.highContrast ? "Włączony" : "Wyłączony"}
                  </Button>
                </div>

                {/* Lepsze wskaźniki fokusa */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Lepsze wskaźniki fokusa</span>
                  </div>
                  <Button
                    variant={settings.focusIndicators ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleSetting("focusIndicators")}
                    aria-pressed={settings.focusIndicators}
                  >
                    {settings.focusIndicators ? "Włączone" : "Wyłączone"}
                  </Button>
                </div>

                {/* Ograniczone animacje */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MousePointer className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Ograniczone animacje</span>
                  </div>
                  <Button
                    variant={settings.reducedMotion ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleSetting("reducedMotion")}
                    aria-pressed={settings.reducedMotion}
                  >
                    {settings.reducedMotion ? "Włączone" : "Wyłączone"}
                  </Button>
                </div>

                {/* Większy kursor */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MousePointer className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Większy kursor</span>
                  </div>
                  <Button
                    variant={settings.largerCursor ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleSetting("largerCursor")}
                    aria-pressed={settings.largerCursor}
                  >
                    {settings.largerCursor ? "Włączony" : "Wyłączony"}
                  </Button>
                </div>

                {/* Przycisk resetowania */}
                <Button
                  variant="outline"
                  onClick={resetSettings}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Przywróć domyślne
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
