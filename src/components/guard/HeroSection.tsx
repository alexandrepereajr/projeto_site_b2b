
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              O motor de crédito mais preciso do Brasil, agora disponível para sua operação
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              O GUARD já reduziu a inadimplência em até 30% e tem desempenho superior a qualquer outro modelo do mercado brasileiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato">
                <Button className="btn-primary">Pedir uma demonstração</Button>
              </Link>
            </div>
          </div>
          <div className="bg-altGray-100 border border-altGray-200 rounded-xl p-8 relative">
            <div className="flex items-center mb-6">
              <div className="bg-primary h-14 w-14 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              </div>
              <h3 className="text-2xl font-bold">GUARD</h3>
            </div>
            <div className="mb-6">
              <img 
                src="/placeholder.svg" 
                alt="Gráficos de desempenho do GUARD" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <Badge className="absolute top-4 right-4 bg-green-100 text-green-800 hover:bg-green-100">
              Validado com mais de 100 mil clientes
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
