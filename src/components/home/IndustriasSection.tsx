
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Rocket } from "lucide-react";

const IndustriasSection = () => {
  return (
    <section className="bg-altGray-100 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções por Indústria</h2>
          <p className="text-lg text-altGray-700 max-w-3xl mx-auto">
            Nossas soluções são adaptáveis às necessidades específicas de diferentes setores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-all animate-on-scroll">
            <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mb-6">
              <Building size={32} className="text-altBlack" />
            </div>
            <h3 className="text-xl font-bold mb-3">Bancos</h3>
            <p className="text-altGray-700 mb-6">
              Modernize sua infraestrutura de crédito mantendo a segurança regulatória. Reduza inadimplência e acelere o lançamento de novos produtos.
            </p>
            <Link to="/industrias" className="text-altBlack font-medium flex items-center hover:text-altGray-700">
              Saiba mais
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-all animate-on-scroll">
            <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mb-6">
              <Rocket size={32} className="text-altBlack" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fintechs</h3>
            <p className="text-altGray-700 mb-6">
              Escale com velocidade e segurança. Nossa plataforma permite que você foque no seu produto enquanto cuidamos da infraestrutura de crédito.
            </p>
            <Link to="/industrias" className="text-altBlack font-medium flex items-center hover:text-altGray-700">
              Saiba mais
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-all animate-on-scroll">
            <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mb-6">
              <Building size={32} className="text-altBlack" />
            </div>
            <h3 className="text-xl font-bold mb-3">Empresas não-financeiras</h3>
            <p className="text-altGray-700 mb-6">
              Ideal para imobiliárias, telecoms, aluguel de veículos e qualquer operação com risco financeiro ou modelo pós-pago.
            </p>
            <Link to="/industrias" className="text-altBlack font-medium flex items-center hover:text-altGray-700">
              Saiba mais
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriasSection;
