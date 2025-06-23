
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, CreditCard, Database, Smartphone, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlataformaSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Plataforma</h2>
          <p className="text-lg text-altGray-700 max-w-3xl mx-auto">
            Um ecossistema completo e modular para implementar soluções de crédito de forma rápida e eficiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary bg-opacity-10 border-2 border-primary rounded-xl p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-primary h-14 w-14 rounded-lg flex items-center justify-center mr-4">
                <Database size={28} />
              </div>
              <h3 className="text-2xl font-bold">GUARD</h3>
            </div>
            <p className="text-altGray-700 mb-6">
              Motor de decisão de crédito baseado em dados e comportamento, com resultados comprovados na redução de inadimplência.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Aquisição de Clientes baseado em score de risco</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Motor de Crédito e Linha de Crédito Inicial</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Gerenciamento Dinâmico de Limites (CLIMB)</span>
              </li>
            </ul>
            <Link to="/guard">
              <Button className="btn-primary">
                Conhecer o GUARD
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="card-alt animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-primary h-14 w-14 rounded-lg flex items-center justify-center mr-4">
                <CreditCard size={28} />
              </div>
              <h3 className="text-2xl font-bold">Bin Sponsor</h3>
            </div>
            <p className="text-altGray-700 mb-6">
              Serviços regulatórios para cartão de crédito pós-pago, incluindo emissão e liquidação.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Aluguel de BIN e Conta Escrow</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Gerenciamento de Garantias</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Liquidação financeira via Visa</span>
              </li>
            </ul>
            <Link to="/solucoes">
              <Button className="btn-secondary">
                Conhecer Bin Sponsor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="card-alt animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-primary h-14 w-14 rounded-lg flex items-center justify-center mr-4">
                <Smartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold">White Label</h3>
            </div>
            <p className="text-altGray-700 mb-6">
              Operação completa de cartão de crédito com app, suporte e gestão, pronta para sua marca.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>App móvel "white label" personalizado</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Motor de Engajamento de Clientes</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Suporte ao Cliente (CX)</span>
              </li>
            </ul>
            <Link to="/solucoes">
              <Button className="btn-secondary">
                Conhecer White Label
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="card-alt animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-primary h-14 w-14 rounded-lg flex items-center justify-center mr-4">
                <ListChecks size={28} />
              </div>
              <h3 className="text-2xl font-bold">Serviços à la carte</h3>
            </div>
            <p className="text-altGray-700 mb-6">
              Escolha apenas os serviços que sua empresa precisa para complementar sua operação atual.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Onboarding Completo + Antifraude</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Fatura Customizável em Tempo Real</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Múltiplos Cartões</span>
              </li>
            </ul>
            <Link to="/solucoes">
              <Button className="btn-secondary">
                Ver todos os serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlataformaSection;
