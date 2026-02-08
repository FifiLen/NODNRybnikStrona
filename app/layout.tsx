import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";


import { CookieBanner } from "@/components/layout-components/cookie-banner";

import { AccessibilityProvider } from "@/context/AccessibilityContext";
import { SkipLinks } from "@/components/accessibility/skip-links";
import { AccessibilityPanel } from "@/components/accessibility/AccessibilityPanel";
import { FacebookButton } from "@/components/ui/facebook-button";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Niepubliczny Ośrodek Doskonalenia Nauczycieli w Rybniku - NODN Rybnik",
  description:
    "Szkolenia dla nauczycieli. Szkolenia z dofinansowaniem, akredytacja Niepublicznego Ośrodka Doskonalenia Nauczycieli w Rybniku.",
  generator: "v0.app",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" dir="ltr" suppressHydrationWarning>
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

      </head>
      <body className={inter.className}>

        <AccessibilityProvider>

          <SkipLinks />

          <div
            id="root"
            role="application"
            aria-label="NODN Rybnik - Strona główna"
          >

            {children}
            <Analytics />
            <FacebookButton />
          </div>


          <AccessibilityPanel />
          <CookieBanner />


          <div
            id="announcements"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          ></div>
          <div
            id="alerts"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            className="sr-only"
          ></div>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
