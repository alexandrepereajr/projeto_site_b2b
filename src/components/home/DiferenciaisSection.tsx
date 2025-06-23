
import React from "react";
import { Rocket, Shield, Users } from "lucide-react";

const DiferenciaisSection = () => {
  return (
    <section className="bg-altGray-100 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que líderes do setor escolhem o alt.bank</h2>
          <p className="text-lg text-altGray-700 max-w-3xl mx-auto">
            Combinamos tecnologia de ponta com profundo conhecimento do mercado brasileiro para entregar resultados comprovados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card-alt animate-on-scroll">
            <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Resultados comprovados</h3>
            <p className="text-altGray-700">
              30% menos inadimplência com o novücard, mesmo atendendo públicos historicamente negligenciados.
            </p>
          </div>
          
          <div className="card-alt animate-on-scroll">
            <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Lançamento em até 30 dias</h3>
            <p className="text-altGray-700">
              Implementação ágil e suporte técnico especializado para garantir que sua solução esteja no ar rapidamente.
            </p>
          </div>
          
          <div className="card-alt animate-on-scroll">
            <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Tecnologia feita para o Brasil</h3>
            <p className="text-altGray-700">
              Desenvolvida considerando as particularidades do mercado brasileiro e validada com milhões de transações reais.
            </p>
          </div>
          
          <div className="card-alt animate-on-scroll">
            <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.5"/><path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 17.5"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Ecossistema modular</h3>
            <p className="text-altGray-700">
              Escolha apenas os módulos que sua empresa precisa ou implante uma solução completa de cartão de crédito.
            </p>
          </div>
          
          <div className="card-alt animate-on-scroll">
            <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Parceria estratégica</h3>
            <p className="text-altGray-700">
              Mais que uma solução tecnológica, oferecemos consultoria para otimizar sua operação de crédito e impulsionar resultados.
            </p>
          </div>
          
          <div className="card-alt animate-on-scroll">
            <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Segurança regulatória</h3>
            <p className="text-altGray-700">
              Soluções em conformidade com as exigências do Banco Central e regulações do mercado financeiro brasileiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
