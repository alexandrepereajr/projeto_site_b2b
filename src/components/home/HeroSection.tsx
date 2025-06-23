
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              A nova infraestrutura de crédito do Brasil
            </h1>
            <p className="text-lg md:text-xl text-altGray-700 mb-8">
              Reduza inadimplência, acelere lançamentos e transforme sua operação com tecnologia validada no mercado real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato">
                <Button className="rounded-full btn-primary">Pedir uma demonstração</Button>
              </Link>
              <Link to="/guard">
                <Button className="rounded-full btn-secondary">
                  Conhecer o GUARD
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-altGray-200 rounded-xl p-6 relative h-80 lg:h-96 animate-on-scroll">
            <div className="absolute inset-0 flex items-center justify-center">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/nG8wd36wHcc"
                title="alt.bank Vídeo Institucional"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
