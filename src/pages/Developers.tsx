
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, FileText, Key } from "lucide-react";

const Developers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-white py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Documentação para Desenvolvedores
            </h1>
            <p className="text-lg md:text-xl text-altGray-700 max-w-3xl mx-auto mb-8">
              Acesse nossa documentação técnica, explore nossas APIs e comece a construir com o alt.bank.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-primary">Começar agora</Button>
              <Button className="btn-secondary">Acessar sandbox</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card-alt">
              <div className="flex items-center mb-6">
                <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center mr-4">
                  <FileText size={24} className="text-altBlack" />
                </div>
                <h3 className="text-xl font-bold">Documentação</h3>
              </div>
              <p className="text-altGray-700 mb-6">
                Guias detalhados, tutoriais e referências para todas as nossas APIs e serviços.
              </p>
              <Link to="#" className="text-altBlack font-medium hover:underline">
                Ver documentação
              </Link>
            </div>
            
            <div className="card-alt">
              <div className="flex items-center mb-6">
                <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center mr-4">
                  <Code size={24} className="text-altBlack" />
                </div>
                <h3 className="text-xl font-bold">Exemplos de código</h3>
              </div>
              <p className="text-altGray-700 mb-6">
                Exemplos práticos em diferentes linguagens de programação para acelerar sua integração.
              </p>
              <Link to="#" className="text-altBlack font-medium hover:underline">
                Ver exemplos
              </Link>
            </div>
            
            <div className="card-alt">
              <div className="flex items-center mb-6">
                <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center mr-4">
                  <Key size={24} className="text-altBlack" />
                </div>
                <h3 className="text-xl font-bold">Chaves de API</h3>
              </div>
              <p className="text-altGray-700 mb-6">
                Gerencie suas credenciais de API e crie chaves para ambiente de teste e produção.
              </p>
              <Link to="#" className="text-altBlack font-medium hover:underline">
                Gerenciar chaves
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Developers;
