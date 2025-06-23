
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const RoadmapSection = () => {
  const modelVersions = [
    { version: "v2.1", aucScore: 0.65, release: "Q1 2022", features: "Dados de bureaus tradicionais" },
    { version: "v3.0", aucScore: 0.69, release: "Q3 2022", features: "Adição de dados alternativos" },
    { version: "v4.0", aucScore: 0.73, release: "Q2 2023", features: "Modelos comportamentais" },
    { version: "v5.0", aucScore: 0.79, release: "Q1 2024", features: "IA avançada + dados proprietários" },
  ];
  
  return (
    <section className="bg-altGray-100 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O motor que evolui mais rápido que o mercado
          </h2>
        </div>
        
        <div className="relative mb-12">
          {/* Progress Bar */}
          <div className="hidden md:block absolute left-0 right-0 top-24 h-1 bg-altGray-200 z-0">
            <div className="bg-primary h-full" style={{ width: "80%" }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {modelVersions.map((model, index) => (
              <VersionCard 
                key={index}
                version={model.version} 
                aucScore={model.aucScore} 
                release={model.release}
                features={model.features}
              />
            ))}
          </div>
        </div>
        
        <Card className="max-w-md mx-auto border-2 border-primary border-dashed bg-white">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Meta futura: AUC Score &gt; 0.80</h3>
            <p className="text-gray-600">
              Incorporação de novos conjuntos de dados e aprimoramentos contínuos do algoritmo
            </p>
          </CardContent>
        </Card>
        
        <p className="text-center text-lg mt-12 max-w-3xl mx-auto">
          Em apenas 24 meses, superamos modelos que levaram décadas para chegar nesse patamar. E seguimos evoluindo a cada trimestre.
        </p>
      </div>
    </section>
  );
};

const VersionCard = ({ version, aucScore, release, features }) => {
  return (
    <div className="relative z-10">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <span className="font-bold text-lg">{version}</span>
          <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">
            {release}
          </span>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>AUC Score</span>
            <span className="font-bold">{aucScore}</span>
          </div>
          <div className="h-2 bg-altGray-200 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full" 
              style={{ width: `${(aucScore - 0.5) * 200}%` }}
            ></div>
          </div>
        </div>
        <p className="text-sm text-gray-600">{features}</p>
      </div>
    </div>
  );
};

export default RoadmapSection;
