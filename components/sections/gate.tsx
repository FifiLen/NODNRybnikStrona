"use client";

import { useState, useEffect, useRef } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import {
  ArrowRight,
  GraduationCap,
  GripVertical,
  ChevronRight,
  ChevronLeft,
  Building,
  CheckCircle,
  Home,
} from "lucide-react";
import { gsap } from "gsap";

interface GateProps {
  onEnterMainSite: () => void;
  onEnterTrainings: () => void;
}

export function Gate({ onEnterMainSite, onEnterTrainings }: GateProps) {
  const [isNearLeftEdge, setIsNearLeftEdge] = useState(false);
  const [isNearRightEdge, setIsNearRightEdge] = useState(false);
  const panelGroupRef = useRef<any>(null);
  const gripRef = useRef<HTMLDivElement>(null);
  const instructionRef = useRef<HTMLDivElement>(null);
  const leftSlideBarRef = useRef<HTMLDivElement>(null);
  const rightSlideBarRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimationActiveRef = useRef(true);

  const EDGE_THRESHOLD = 15;
  const BLUR_THRESHOLD = 30;

  const handleResize = (sizes: number[]) => {

    const nearLeftEdge = sizes[0] <= EDGE_THRESHOLD;
    const nearRightEdge = sizes[1] <= EDGE_THRESHOLD;

    setIsNearLeftEdge(nearLeftEdge);
    setIsNearRightEdge(nearRightEdge);

    if (sizes[0] <= 5) {
      setTimeout(() => onEnterMainSite(), 300);
      return;
    }
    if (sizes[1] <= 5) {
      setTimeout(() => onEnterTrainings(), 300);
      return;
    }

    if (leftContentRef.current) {
      const intensity =
        sizes[0] < BLUR_THRESHOLD
          ? Math.max(0, (BLUR_THRESHOLD - sizes[0]) / BLUR_THRESHOLD)
          : 0;
      gsap.to(leftContentRef.current, {
        filter: `blur(${intensity * 8}px)`,
        opacity: 1 - intensity * 0.5,
        duration: 0.1,
      });
    }
    if (rightContentRef.current) {
      const intensity =
        sizes[1] < BLUR_THRESHOLD
          ? Math.max(0, (BLUR_THRESHOLD - sizes[1]) / BLUR_THRESHOLD)
          : 0;
      gsap.to(rightContentRef.current, {
        filter: `blur(${intensity * 8}px)`,
        opacity: 1 - intensity * 0.5,
        duration: 0.1,
      });
    }

    if (leftSlideBarRef.current) {
      gsap.to(leftSlideBarRef.current, {
        x: nearLeftEdge ? 0 : -120,
        opacity: nearLeftEdge ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (rightSlideBarRef.current) {
      gsap.to(rightSlideBarRef.current, {
        x: nearRightEdge ? 0 : 120,
        opacity: nearRightEdge ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const stopAllAnimations = () => {

    isAnimationActiveRef.current = false;
    timelineRef.current?.kill();
    timelineRef.current = null;
    gsap.killTweensOf([
      gripRef.current,
      instructionRef.current,
      leftContentRef.current,
      rightContentRef.current,
    ]);
    if (instructionRef.current)
      gsap.set(instructionRef.current, { opacity: 0, y: 20 });
    if (gripRef.current) gsap.set(gripRef.current, { scale: 1 });
  };

  const handleInteractionStart = () => stopAllAnimations();

  useEffect(() => {

    if (!isAnimationActiveRef.current) return;
    const tl = gsap.timeline({ delay: 0.5 });
    timelineRef.current = tl;

    const animate = () => {

      tl.to(gripRef.current, {
        scale: 1.2,
        duration: 0.4,
        ease: "power2.inOut",
        repeat: 1,
        yoyo: true,
        onInterrupt: stopAllAnimations,
      })
        .to(
          instructionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            onInterrupt: stopAllAnimations,
          },
          "-=0.2"
        )
        .to(
          {},
          {
            duration: 0.8,
            ease: "power2.inOut",
            onUpdate: function () {
              if (!isAnimationActiveRef.current) {
                this.kill();
                return;
              }
              const p = this.progress();
              panelGroupRef.current?.setLayout([65 - 20 * p, 35 + 20 * p]);
            },
            onInterrupt: stopAllAnimations,
          }
        )
        .to({}, { duration: 0.3 })
        .to(
          {},
          {
            duration: 0.8,
            ease: "power2.inOut",
            onUpdate: function () {
              if (!isAnimationActiveRef.current) {
                this.kill();
                return;
              }
              const p = this.progress();
              panelGroupRef.current?.setLayout([45 + 20 * p, 55 - 20 * p]);
            },
            onInterrupt: stopAllAnimations,
          }
        )
        .to(
          instructionRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in",
            onInterrupt: stopAllAnimations,
          },
          "+=0.5"
        )
        .to(
          gripRef.current,
          {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.inOut",
            repeat: 1,
            yoyo: true,
            onInterrupt: stopAllAnimations,
          },
          "-=0.1"
        );
    };

    animate();
    document.addEventListener("mousedown", stopAllAnimations);
    document.addEventListener("touchstart", stopAllAnimations);
    return () => {
      tl.kill();
      timelineRef.current = null;
      document.removeEventListener("mousedown", stopAllAnimations);
      document.removeEventListener("touchstart", stopAllAnimations);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-[9999] m-0 p-0">
      <nav className="absolute top-0 left-0 right-0 z-50 p-4 md:p-[60px] flex justify-between items-center text-white">
        <button
          onClick={onEnterMainSite}
          className="hover:text-white transition-colors flex items-center space-x-2 text-xs md:text-2xl font-light tracking-wider"
        >

          <span>NODN RYBNIK</span>
        </button>
        <div className="flex space-x-3 md:space-x-8 text-white/80 text-xs md:text-sm font-light tracking-wider">
          <button
            onClick={onEnterMainSite}
            className="hover:text-white transition-colors flex items-center space-x-1 md:space-x-2"
          >
            <Home className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">STRONA GŁÓWNA</span>
          </button>
          <button
            onClick={onEnterTrainings}
            className="hover:text-white transition-colors flex items-center space-x-1 md:space-x-2"
          >
            <GraduationCap className="w-3 h-3 md:w-4 md:h-4" />
            <span>SZKOLENIA</span>
          </button>
        </div>
      </nav>

      <div className="hidden md:block w-full h-full">

        <div
          ref={leftSlideBarRef}
          className="absolute left-0 top-0 h-full z-40 opacity-0 pointer-events-none"
          style={{ transform: "translateX(-120px)" }}
        >
          <div className="h-full w-[120px] bg-gradient-to-r from-navy-700/95 to-navy-600/95 backdrop-blur-md flex items-center justify-center shadow-2xl">
            <div
              className="transform -rotate-90 whitespace-nowrap flex items-center space-x-3"
              data-nosnippet
            >
              <ChevronLeft className="w-5 h-5 text-white" />
              <span className="text-white font-medium tracking-wider text-sm">
                PRZECIĄGNIJ DO KOŃCA
              </span>
              <span className="text-white/80 font-light text-xs">
                → WEJDŹ NA STRONĘ
              </span>
            </div>
          </div>
        </div>


        <div
          ref={rightSlideBarRef}
          className="absolute right-0 top-0 h-full z-40 opacity-0 pointer-events-none"
          style={{ transform: "translateX(120px)" }}
        >
          <div className="h-full w-[120px] bg-gradient-to-l from-green-600/95 to-green-500/95 backdrop-blur-md flex items-center justify-center shadow-2xl">
            <div
              className="transform -rotate-90 whitespace-nowrap flex items-center space-x-3"
              data-nosnippet
            >
              <span className="text-white/80 font-light text-xs">
                PRZEJDŹ DO SZKOLEŃ ←
              </span>
              <span className="text-white font-medium tracking-wider text-sm">
                PRZECIĄGNIJ DO KOŃCA
              </span>
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <PanelGroup
          direction="horizontal"
          className="w-full h-full"
          ref={panelGroupRef}
          onLayout={handleResize}
        >
          <Panel
            defaultSize={65}
            minSize={5}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodn-hero-image.jpg-EZBHQwczqlssMFgQAUSprlwGSeHKrp.jpeg')`,
                }}
              />
              <div className="absolute inset-0 bg-navy-900/60" />
            </div>
            <div
              ref={leftContentRef}
              className="relative z-10 h-full overflow-hidden"
            >
              <div className="w-[150%] h-full flex items-center p-[60px] text-white">
                <div className="flex items-center space-x-16 w-full">
                  <div className="flex-shrink-0 w-[600px]">

                    <h1 className="text-6xl font-light leading-tight mb-6 tracking-tight mt-16">
                      Niepubliczny
                      <br />
                      Ośrodek
                      <br />
                      <span className="font-medium">Doskonalenia</span>
                      <br />
                      <span className="font-medium">Nauczycieli w Rybniku</span>
                    </h1>
                    <p className="text-xl font-light leading-relaxed mb-8 text-white/90">
                      Podnoś kwalifikacje – rozwijaj kompetencje.
                    </p>
                    <button
                      onClick={onEnterMainSite}
                      className="inline-flex items-center space-x-3 bg-white text-navy-700 px-8 py-4 rounded-full font-medium hover:bg-white/95 transition-all duration-300 group"
                    >
                      <span data-nosnippet>Wejdź na stronę</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="flex-shrink-0 w-[500px] space-y-8">
                    <div className="border border-white/20 bg-navy-500 rounded-2xl p-6">
                      <h4 className="text-xl font-medium mb-4">Realizujemy</h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>Diagnoza kliniczna ADOS-2</span>
                        </div>

                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>Diagnoza dzieci</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>Diagnoza SI</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>TUS stopień 1</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>TUS stopień 2</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>TUS stopień 3</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>Wsparcie dla N/R</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-navy-600 rounded-2xl p-6">
                      <h4 className="text-xl font-medium mb-4">Co za nami?</h4>
                      <p className="text-navy-100 mb-4 text-sm">
                        Poznaj nasze największe osiągnięcia i projekty.
                      </p>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Edukacja włączająca</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Lekcja Enter</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Szkolenia z AI</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Szkolenia VR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          <PanelResizeHandle
            className="relative group"
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-full blur-sm group-hover:bg-white/20 transition-all duration-300" />
            <div className="w-1 h-full bg-white group-hover:bg-white transition-all duration-300 cursor-col-resize" />
            <div
              ref={gripRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 backdrop-blur-sm rounded-full p-3 group-hover:bg-white transition-all duration-300 cursor-col-resize z-50"
            >
              <GripVertical className="w-4 h-4 text-black" />
            </div>
          </PanelResizeHandle>
          <Panel
            defaultSize={35}
            minSize={5}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/gate-2.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-green-900/60" />
            </div>
            <div
              ref={rightContentRef}
              className="relative z-10 h-full overflow-hidden"
            >
              <div className="w-[200%] h-full flex items-center p-[60px] text-white">
                <div className="flex items-center space-x-16 w-full">
                  <div className="flex-shrink-0 w-[400px]">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-xs font-medium tracking-wide">
                        95% DOFINANSOWANIE
                      </span>
                    </div>

                    <h2 className="text-6xl font-light leading-tight mb-6 tracking-tight">
                      Szkolenia
                      <br />
                      dla Nauczycieli
                    </h2>
                    <p className="text-lg font-light leading-relaxed mb-8 text-white/90">
                      Skorzystaj ze szkoleń finansowanych ze środków unijnych
                      poprzez Bazę Usług Rozwojowych oraz szkoleń komercyjnych.
                    </p>
                    <button
                      onClick={onEnterTrainings}
                      className="inline-flex items-center space-x-3 bg-white text-green-800 px-8 py-4 rounded-full font-medium hover:bg-white/95 transition-all duration-300 group"
                    >
                      <span data-nosnippet>Zobacz ofertę</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="flex-shrink-0 w-[900px]">
                    <h3 className="text-2xl font-light mb-3">
                      Nasze szkolenia
                    </h3>
                    <p className="text-white/80">
                      Kursy dostosowane do polityki oświatowej 2025/2026
                    </p>
                    <div className="grid grid-cols-4 gap-12 mt-12">
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium pb-3 border-b border-white/20">
                          Bezpieczeństwo
                          <br />
                          cyfrowe i AI
                        </h4>
                        <div className="space-y-2 text-sm text-white/90">
                          <div>AI w rękach ucznia</div>
                          <div>Cyberprzemoc</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium pb-3 border-b border-white/20">
                          Przemoc i zdrowie
                          <br />
                          psychiczne
                        </h4>
                        <div className="space-y-2 text-sm text-white/90">
                          <div>Przemoc 3.0</div>
                          <div>Depresja u młodzieży</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium pb-3 border-b border-white/20">
                          Edukacja
                          <br />
                          obywatelska
                        </h4>
                        <div className="space-y-2 text-sm text-white/90">
                          <div>Patriotyzm w memach</div>
                          <div>Fake news</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium pb-3 border-b border-white/20">
                          Doradztwo
                          <br />
                          zawodowe
                        </h4>
                        <div className="space-y-2 text-sm text-white/90">
                          <div>Zawody widmo</div>
                          <div>Ścieżka kariery</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </PanelGroup>


        <div
          ref={instructionRef}
          className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 z-50 opacity-0 translate-y-5"
        >
          <div
            className="bg-black/30 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-light border border-white/20"
            data-nosnippet
          >
            <span className="inline-flex items-center space-x-2">
              <GripVertical className="w-4 h-4" />
              <span>Przeciągnij aby odkryć ukrytą treść</span>
            </span>
          </div>
        </div>
      </div>


      <div className="block md:hidden w-full h-screen overflow-hidden">
        <div className="h-full flex flex-col">
          <section
            className="relative flex-1 flex items-center text-white"
            style={{
              backgroundImage: `url('/placeholder.svg?height=1080&width=1920&text=ODN+Rybnik+-+Akredytacja')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-navy-900/60" />
            <div className="relative z-10 px-4 text-left space-y-3 w-full">
              <span className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium tracking-wide">
                <Building className="w-3 h-3" />
                <span>AKREDYTACJA NODN</span>
              </span>
              <h1 className="text-2xl font-light leading-tight">
                Niepubliczny Ośrodek
                <br />
                <span className="font-medium">
                  Doskonalenia Nauczycieli w Rybniku
                </span>
              </h1>
              <p className="text-sm font-light text-white/90 max-w-xs">
                Wszystko, co potrzebujesz do uzyskania akredytacji NODN.
              </p>
              <button
                onClick={onEnterMainSite}
                className="inline-flex items-center space-x-2 bg-white text-navy-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-white/95 transition"
              >
                <span data-nosnippet>Wejdź na stronę</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
          <section
            className="relative flex-1 flex items-center text-white"
            style={{
              backgroundImage: `url('/placeholder.svg?height=1080&width=1920&text=Szkolenia+dla+nauczycieli')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-green-900/60" />
            <div className="relative z-10 px-4 text-left space-y-3 w-full">
              <span className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium tracking-wide">
                <GraduationCap className="w-3 h-3" />
                <span>95% DOFINANSOWANIE</span>
              </span>
              <h2 className="text-2xl font-light leading-tight">
                <span className="font-medium">Szkolenia</span>
                <br />
                dla Nauczycieli
              </h2>
              <p className="text-sm font-light text-white/90 max-w-xs">
                Skorzystaj z naszych szkoleń finansowanych z środków Bazy Usług
                Rozwojowych.
              </p>
              <button
                onClick={onEnterTrainings}
                className="inline-flex items-center space-x-2 bg-white text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-white/95 transition"
              >
                <span data-nosnippet>Zobacz ofertę</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
