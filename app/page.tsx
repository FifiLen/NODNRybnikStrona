"use client";

import { useState, useEffect } from "react";
import { Gate } from "@/components/sections/gate";
import { Header } from "@/components/layout-components/header";
import { Footer } from "@/components/layout-components/footer";
import MainContent from "@/components/home-page/main-content";

export default function HomePage() {
  const [showGate, setShowGate] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const hasSeenGate = sessionStorage.getItem("hasSeenGate");
    if (hasSeenGate) {
      setShowGate(false);
    }
  }, []);

  const handleEnterMainSite = () => {
    sessionStorage.setItem("hasSeenGate", "true");
    setShowGate(false);
  };

  const handleEnterTrainings = () => {
    sessionStorage.setItem("hasSeenGate", "true");
    window.location.href = "/szkolenia";
  };

  if (!isClient) {
    return null;
  }


  if (showGate) {
    return (
      <Gate
        onEnterMainSite={handleEnterMainSite}
        onEnterTrainings={handleEnterTrainings}
      />
    );
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <MainContent />
      </main>
      <Footer />
    </>
  );
}
