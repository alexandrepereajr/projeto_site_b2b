
import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como tomamos decisões melhores — e mais rápidas
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-altGray-100 rounded-2xl p-8">
          <div className="relative">
            {/* Flow Diagram */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-1 bg-primary -translate-x-1/2 z-0"></div>
            
            <div className="space-y-16 relative z-10">
              <FlowStep 
                number={1}
                title="Entrada de dados tradicionais + alternativos"
                description="Bureaus de crédito, dados comportamentais e outros indicadores"
              />
              
              <FlowStep 
                number={2}
                title="Processamento em tempo real"
                description="Análise e consolidação de informações em tempo real"
              />
              
              <FlowStep 
                number={3}
                title="Modelos otimizados para inadimplência e fraude"
                description="Algoritmos treinados para maximizar aprovação segura"
              />
              
              <FlowStep 
                number={4}
                title="Atribuição de risco + sugestão de limite inicial"
                description="Definição de score de risco e recomendação de limites"
              />
              
              <FlowStep 
                number={5}
                title="Feedback contínuo"
                description="Aprendizado constante com base nos resultados reais"
              />
            </div>
          </div>
        </div>
        
        <p className="text-center text-lg mt-8 max-w-2xl mx-auto">
          Tudo isso em menos de 1 segundo. Com estabilidade, rastreabilidade e monitoramento automático de qualidade.
        </p>
      </div>
    </section>
  );
};

const FlowStep = ({ number, title, description }) => {
  return (
    <div className="flex items-start md:items-center gap-6">
      <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-altBlack font-bold flex-shrink-0">
        {number}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm flex-grow">
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
