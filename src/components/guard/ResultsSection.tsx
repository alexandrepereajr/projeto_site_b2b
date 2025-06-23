
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Brain, ShieldCheck, LineChart } from "lucide-react";

const ResultsSection = () => {
  return (
    <section className="bg-altGray-100 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologia de crédito com impacto real e mensurável
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ResultCard 
            icon={<TrendingDown className="text-green-600" size={28} />}
            title="30% menos inadimplência"
            description="em relação à média do mercado"
          />
          
          <ResultCard 
            icon={<Brain className="text-indigo-600" size={28} />}
            title="0.79 AUC score"
            description="acima do Nubank (0.77)"
          />
          
          <ResultCard 
            icon={<ShieldCheck className="text-blue-600" size={28} />}
            title="<0.01% de fraude líquida"
            description="contra 0.43% do mercado"
          />
          
          <ResultCard 
            icon={<LineChart className="text-purple-600" size={28} />}
            title="Delinquência em queda"
            description="por 7 trimestres consecutivos"
          />
        </div>
        
        <p className="text-center text-lg max-w-3xl mx-auto">
          O GUARD não é teoria — é prática comprovada, aplicada no novücard, com resultados auditáveis e consistentes.
        </p>
      </div>
    </section>
  );
};

const ResultCard = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-sm h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-white rounded-full p-4 shadow-sm mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ResultsSection;
