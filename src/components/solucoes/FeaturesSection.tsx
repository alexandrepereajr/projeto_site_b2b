
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas soluções são flexíveis e escaláveis</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comece com o que precisa agora e expanda conforme seu negócio cresce. Nossa plataforma modular 
            permite que você escolha exatamente o que sua empresa necessita.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle>Implementação ágil</CardTitle>
              <CardDescription>Tempo de implementação reduzido</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Nossas soluções podem ser implementadas em prazos a partir de 15 dias, dependendo da complexidade
                do projeto e das integrações necessárias.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle>Integrações simplificadas</CardTitle>
              <CardDescription>APIs bem documentadas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Nossa plataforma oferece integrações simplificadas com APIs RESTful completas e documentação
                detalhada para desenvolvedores.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle>Suporte especializado</CardTitle>
              <CardDescription>Time técnico dedicado</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Conte com nossa equipe de especialistas para ajudar em todas as etapas do projeto, desde a
                concepção até a implementação e operação.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
