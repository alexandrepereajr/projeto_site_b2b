
import React from "react";
import { Link } from "react-router-dom";
import { Check, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseSuccessSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="inline-block bg-primary px-4 py-2 rounded-lg text-altBlack font-medium mb-6">
              Prova de Eficiência
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Caso novücard</h2>
            <p className="text-lg mb-6">
              O novücard opera 100% sobre nossa plataforma. Resultado: inadimplência 30% menor do que a média do setor, mesmo atendendo públicos historicamente negligenciados.
            </p>
            <div className="bg-altGray-200 p-6 rounded-lg mb-8">
              <div className="flex items-start mb-4">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <Check size={16} className="text-altBlack" />
                </div>
                <p className="font-medium">Implementação completa em apenas 30 dias</p>
              </div>
              <div className="flex items-start mb-4">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <Check size={16} className="text-altBlack" />
                </div>
                <p className="font-medium">Redução significativa de fraudes</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <Check size={16} className="text-altBlack" />
                </div>
                <p className="font-medium">Aumento da aprovação de bons pagadores</p>
              </div>
            </div>
            <Link to="/contato">
              <Button className="btn-primary">
                Quero aplicar esse modelo no meu negócio
              </Button>
            </Link>
          </div>
          
          <div className="bg-altGray-200 rounded-xl p-8 animate-on-scroll">
            <div className="flex items-center mb-8">
              <CreditCard size={32} className="text-altBlack mr-4" />
              <span className="text-2xl font-bold">novücard</span>
            </div>
            <div className="bg-white rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold mb-4">Comparativo de inadimplência</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">novücard</span>
                    <span className="text-sm font-medium">7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Média do setor</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-altGray-600 italic">
              *Dados comparativos entre o novücard e a média de inadimplência do setor de cartões de crédito no Brasil em 2023.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSuccessSection;
