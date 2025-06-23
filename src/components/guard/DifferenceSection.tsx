
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Brain, Check, Settings } from "lucide-react";

const DifferenceSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Um novo padrão de decisão de crédito para o Brasil
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DifferenceCard 
            icon={<Database className="text-blue-600" />}
            title="Stack de dados mais completo do país"
            description="Bureaus, dados alternativos e proprietários, atualizados em tempo real"
          />
          
          <DifferenceCard 
            icon={<Brain className="text-purple-600" />}
            title="Modelos de IA com aprendizado contínuo"
            description="Delinquência, limite inicial, risco real por segmento"
          />
          
          <DifferenceCard 
            icon={<Check className="text-green-600" />}
            title="Testado com mais de 100 mil clientes reais"
            description="Validação real e constante com dados do mercado brasileiro"
          />
          
          <DifferenceCard 
            icon={<Settings className="text-orange-600" />}
            title="Pronto para usar ou personalizável"
            description="Adaptável para sua régua de crédito específica"
          />
        </div>
      </div>
    </section>
  );
};

const DifferenceCard = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-sm h-full">
      <CardContent className="p-8">
        <div className="bg-primary bg-opacity-10 rounded-full p-3 inline-block mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default DifferenceSection;
