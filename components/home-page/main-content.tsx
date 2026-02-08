import { ContactSection } from "@/components/sections/contact-section";
import { EducationPolicySection } from "@/components/sections/education-policy-section";
import { AboutSection } from "@/components/home-page/about-section";
import { HeroSection } from "@/components/home-page/hero-section";
import { OfferSection } from "@/components/home-page/offer-section";
import { ProjectsSection } from "@/components/home-page/projects-section";
import { StatsSection } from "@/components/home-page/stats-section";

export default function MainContent() {
  return (
    <>
      <HeroSection />
      <OfferSection />
      <AboutSection />
      <ProjectsSection />
      <EducationPolicySection />
      <StatsSection />
      <ContactSection />
    </>
  );
}
