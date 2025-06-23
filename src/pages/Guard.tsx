
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/guard/HeroSection";
import ResultsSection from "@/components/guard/ResultsSection";
import DifferenceSection from "@/components/guard/DifferenceSection";
import AudienceSection from "@/components/guard/AudienceSection";
import HowItWorksSection from "@/components/guard/HowItWorksSection";
import RoadmapSection from "@/components/guard/RoadmapSection";
import FinalCTASection from "@/components/guard/FinalCTASection";

const Guard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ResultsSection />
      <DifferenceSection />
      <AudienceSection />
      <HowItWorksSection />
      <RoadmapSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Guard;
