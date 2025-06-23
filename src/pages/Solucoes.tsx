
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/solucoes/HeroSection";
import SolutionsSection from "@/components/solucoes/SolutionsSection";
import FeaturesSection from "@/components/solucoes/FeaturesSection";
import ContactSection from "@/components/solucoes/ContactSection";

const Solucoes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Solucoes;
