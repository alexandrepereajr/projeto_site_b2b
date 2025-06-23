
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Industrias = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Soluções por Indústria
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Nossas soluções são adaptáveis às necessidades específicas de diferentes setores, com foco em resultados reais.
            </p>
          </div>
        </div>
      </section>
      
      {/* Banks Section */}
      <section className="bg-altGray-100 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary px-4 py-2 rounded-lg text-altBlack font-medium mb-6">
                Para Bancos
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Modernize sua infraestrutura de crédito
              </h2>
              <p className="text-lg mb-6">
                Reduza inadimplência e acelere o lançamento de novos produtos mantendo a segurança regulatória que seu banco precisa.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-altBlack" />
                  </div>
                  <div>
                    <p className="font-medium">Redução de inadimplência</p>
                    <p className="text-sm text-gray-600">Algoritmos avançados de score de crédito</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-altBlack" />
                  </div>
                  <div>
                    <p className="font-medium">Conformidade regulatória</p>
                    <p className="text-sm text-gray-600">Soluções em linha com exigências do BACEN</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-altBlack" />
                  </div>
                  <div>
                    <p className="font-medium">Time to market reduzido</p>
                    <p className="text-sm text-gray-600">Lançamento de novos produtos em semanas, não meses</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contato">
                <Button className="btn-primary">
                  Consulte nossa equipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Soluções recomendadas para Bancos</h3>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-all">
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-altBlack mr-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <h4 className="font-medium">GUARD</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Modernize sua análise de crédito sem precisar substituir toda a infraestrutura.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-all">
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-altBlack mr-2"><path d="M3 17v-6a9 9 0 0 1 18 0v6"/><path d="M21 17v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1"/><path d="M12 17h.01"/><path d="M9 11h.01"/><path d="M15 11h.01"/></svg>
                    <h4 className="font-medium">Serviços à la carte</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Adicione funcionalidades específicas à sua operação atual sem grandes mudanças.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-all">
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-altBlack mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <h4 className="font-medium">Antifraude Avançado</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Proteção contra fraudes com detecção em tempo real e aprendizado contínuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fintechs Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Soluções recomendadas para Fintechs</h3>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-all">
                    <div className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-altBlack mr-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      <h4 className="font-medium">GUARD + Bin Sponsor</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Solução completa para lançar produtos de crédito sem precisar de licença bancária.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-all">
                    <div className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-altBlack mr-2"><path d="M3 17v-6a9 9 0 0 1 18 0v6"/><path d="M21 17v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1"/><path d="M12 17h.01"/><path d="M9 11h.01"/><path d="M15 11h.01"/></svg>
                      <h4 className="font-medium">White Label</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Solução completa com app móvel personalizado com sua marca.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-all">
                    <div className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-altBlack mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <h4 className="font-medium">APIs Completas</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Integração facilitada com sua plataforma através de APIs bem documentadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-primary px-4 py-2 rounded-lg text-altBlack font-medium mb-6">
                Para Fintechs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Escale com velocidade e segurança
              </h2>
              <p className="text-lg mb-6">
                Nossa plataforma permite que você foque no seu produto enquanto cuidamos da infraestrutura de crédito.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-altBlack" />
                  </div>
                  <div>
                    <p className="font-medium">Lançamento rápido</p>
                    <p className="text-sm text-gray-600">Implantação em semanas, não meses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-altBlack" />
                  </div>
                  <div>
                    <p className="font-medium">Infraestrutura completa</p>
                    <p className="text-sm text-gray-600">Da emissão ao processamento, tudo em uma única plataforma</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-altBlack" />
                  </div>
                  <div>
                    <p className="font-medium">Flexibilidade total</p>
                    <p className="text-sm text-gray-600">Escolha apenas os componentes que sua fintech precisa</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contato">
                <Button className="btn-primary">
                  Consulte nossa equipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Non-Financial Companies */}
      <section className="bg-altGray-100 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary px-4 py-2 rounded-lg text-altBlack font-medium mb-6">
                Para Empresas não-financeiras
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expanda seu negócio com soluções financeiras
              </h2>
              <p className="text-lg mb-6">
                Ideal para imobiliárias, telecoms, aluguel de veículos e qualquer operação com risco financeiro ou modelo pós-pago.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-altBlack" />
                  </div>
                  <div>
                    <p className="font-medium">Sem necessidade de licença bancária</p>
                    <p className="text-sm text-gray-600">Opere com nosso BIN Sponsor</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-altBlack" />
                  </div>
                  <div>
                    <p className="font-medium">Avaliação de risco personalizada</p>
                    <p className="text-sm text-gray-600">GUARD adaptado ao seu segmento de mercado</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-altBlack" />
                  </div>
                  <div>
                    <p className="font-medium">Soluções white label</p>
                    <p className="text-sm text-gray-600">App e cartões com sua marca</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contato">
                <Button className="btn-primary">
                  Consulte nossa equipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Soluções por segmento</h3>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-all">
                  <h4 className="font-medium mb-2">Imobiliárias</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Ofereça financiamento próprio com segurança e avaliação de crédito de qualidade.
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <span>Conheça a solução</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-all">
                  <h4 className="font-medium mb-2">Telecomunicações</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Reduza inadimplência em planos pós-pagos e ofereça cartões co-branded.
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <span>Conheça a solução</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-all">
                  <h4 className="font-medium mb-2">Locadoras de Veículos</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Análise de crédito eficiente para locações e garantias otimizadas.
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <span>Conheça a solução</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos construir a solução ideal para o seu negócio</h2>
            <p className="text-lg text-gray-700">
              Nossa equipe está pronta para entender suas necessidades e desenvolver uma solução personalizada.
            </p>
          </div>
          <div className="text-center">
            <Link to="/contato">
              <Button className="btn-primary text-lg px-8 py-4">Ver caso de uso real</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="bg-altGray-100 section-padding">
        <div className="container-custom max-w-3xl">
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Industrias;
