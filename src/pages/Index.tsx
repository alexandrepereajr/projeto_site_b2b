
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroSection from "@/components/home/HeroSection";
import DiferenciaisSection from "@/components/home/DiferenciaisSection";
import PlataformaSection from "@/components/home/PlataformaSection";
import IndustriasSection from "@/components/home/IndustriasSection";
import CaseSuccessSection from "@/components/home/CaseSuccessSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Initialize scroll animations */}
      <ScrollAnimation />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Page Sections */}
      <HeroSection />
      <DiferenciaisSection />
      <PlataformaSection />
      <IndustriasSection />
      <CaseSuccessSection />
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
