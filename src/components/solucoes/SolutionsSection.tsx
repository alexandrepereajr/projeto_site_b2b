
import React from "react";
import SolutionCard from "./SolutionCard";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Bin Sponsor (Fundação)",
      description: "A base regulatória e operacional mínima necessária para qualquer operação de crédito. Uma estrutura sólida que garante conformidade e segurança para o seu negócio.",
      features: [
        "Aluguel de BIN",
        "Conta escrow",
        "Liquidação com Visa",
        "Emissão de cartões, Pix e boletos",
        "Antifraude transacional",
        "Disputas e chargeback",
        "KYC e onboarding básico"
      ],
      ctaText: "Quero começar com essa base"
    },
    {
      title: "Serviços à la carte (Modularidade)",
      description: "Todos os nossos serviços podem ser adquiridos de forma individual ou combinada com o Bin Sponsor. Escolha exatamente o que sua empresa precisa para complementar sua operação atual.",
      features: [
        "Aquisição digital",
        "Motor de crédito GUARD",
        "Gerenciamento de limites (CLIMB)",
        "Cobrança",
        "Fatura customizável",
        "Onboarding com antifraude",
        "Suporte a múltiplos cartões"
      ],
      ctaText: "Montar minha solução"
    },
    {
      title: "White Label (Solução completa)",
      description: "Nossa solução completa inclui todos os serviços anteriores, oferecendo uma plataforma pronta para uso com sua marca. Ideal para quem busca uma solução end-to-end com tempo de implementação reduzido.",
      features: [
        "App completo com marca do cliente",
        "Motor de engajamento",
        "Suporte ao cliente",
        "Rastreio e entrega de cartões físicos"
      ],
      ctaText: "Ver solução completa"
    }
  ];

  return (
    <section className="bg-altGray-100 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções Complementares</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nossas soluções são modulares e podem ser combinadas para atender às necessidades específicas do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={index}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              ctaText={solution.ctaText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
