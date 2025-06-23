
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Rocket, Briefcase } from "lucide-react";

const AudienceSection = () => {
  return (
    <section className="bg-altGray-100 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Para quem é o GUARD?
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Uma solução para qualquer operação de crédito que busca inteligência e controle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AudienceCard 
            icon={<Building2 className="text-blue-600" size={28} />}
            title="Bancos"
            description="Modernize sua régua de crédito sem romper sua operação atual"
          />
          
          <AudienceCard 
            icon={<Rocket className="text-purple-600" size={28} />}
            title="Fintechs"
            description="Escale sem construir time interno de risco"
          />
          
          <AudienceCard 
            icon={<Briefcase className="text-orange-600" size={28} />}
            title="Empresas não financeiras"
            description="Use o GUARD para conceder crédito ou pós-pago com segurança e ROI"
          />
        </div>
      </div>
    </section>
  );
};

const AudienceCard = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-sm h-full">
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="bg-primary bg-opacity-10 rounded-full p-4 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AudienceSection;
