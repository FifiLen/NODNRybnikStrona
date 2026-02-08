"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodn-hero-image.jpg-EZBHQwczqlssMFgQAUSprlwGSeHKrp.jpeg')`,
        }}
      />
      <div className="container relative z-10 min-h-screen flex items-center px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in-top">
          <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-6 py-3 text-sm font-medium">
            Niepubliczny Ośrodek Doskonalenia Nauczycieli w Rybniku
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Od 20 lat działamy
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-4">
              na rzecz edukacji
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg shadow-lg">
              Zobacz ofertę <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
