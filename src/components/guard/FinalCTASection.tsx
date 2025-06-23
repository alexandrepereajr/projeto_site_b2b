
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Code } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos aplicar o GUARD à sua operação?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Agende uma conversa com nosso time e veja como podemos adaptar o GUARD ao seu contexto de crédito — de forma simples, segura e eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contato">
              <Button className="btn-primary" size="lg">
                Pedir uma demonstração
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link to="/developers" className="block">
            <div className="border border-altGray-200 rounded-xl p-6 flex items-center gap-4 hover:bg-altGray-100 transition-colors">
              <div className="bg-blue-100 rounded-full p-3">
                <Code className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Para desenvolvedores</h3>
                <p className="text-sm text-gray-600">
                  Veja a documentação técnica do GUARD
                </p>
              </div>
            </div>
          </Link>
          
          <a href="#" className="block">
            <div className="border border-altGray-200 rounded-xl p-6 flex items-center gap-4 hover:bg-altGray-100 transition-colors">
              <div className="bg-green-100 rounded-full p-3">
                <FileText className="text-green-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">One-pager</h3>
                <p className="text-sm text-gray-600">
                  Baixar apresentação técnica em PDF
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
