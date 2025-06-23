
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary px-4 py-2 rounded-lg text-altBlack font-medium mb-6">
                Sobre nós
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Construindo a nova infraestrutura de crédito do Brasil
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Combinamos tecnologia avançada com profundo conhecimento do mercado financeiro brasileiro para transformar a maneira como empresas oferecem crédito.
              </p>
            </div>
            <div className="bg-altGray-200 rounded-xl p-8 h-80 flex items-center justify-center">
              <p className="text-gray-500">Imagem institucional será exibida aqui</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="bg-altGray-100 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Missão</h3>
              <p className="text-gray-700">
                Democratizar o acesso ao crédito no Brasil através de tecnologia avançada e decisões baseadas em dados.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Visão</h3>
              <p className="text-gray-700">
                Ser a principal infraestrutura de crédito do Brasil, transformando a maneira como empresas avaliam e concedem crédito.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Valores</h3>
              <p className="text-gray-700">
                Inovação, excelência técnica, compromisso com resultados e profundo conhecimento do mercado brasileiro.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Jornada</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Uma história de inovação e evolução constante para transformar o mercado de crédito brasileiro.
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            
            <div className="space-y-16">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-primary"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="inline-block bg-primary px-3 py-1 rounded text-altBlack font-medium mb-2">
                      2020
                    </div>
                    <h3 className="text-xl font-bold mb-2">Fundação</h3>
                    <p className="text-gray-700">
                      A alt.bank é fundada com o objetivo de transformar o acesso ao crédito no Brasil.
                    </p>
                  </div>
                  <div className="bg-altGray-200 rounded-xl h-40 flex items-center justify-center">
                    <p className="text-gray-500">Imagem será exibida aqui</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-primary"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <div className="inline-block bg-primary px-3 py-1 rounded text-altBlack font-medium mb-2">
                      2021
                    </div>
                    <h3 className="text-xl font-bold mb-2">Lançamento do GUARD</h3>
                    <p className="text-gray-700">
                      Desenvolvimento e lançamento do motor de crédito GUARD, nossa solução principal.
                    </p>
                  </div>
                  <div className="md:order-1 bg-altGray-200 rounded-xl h-40 flex items-center justify-center">
                    <p className="text-gray-500">Imagem será exibida aqui</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-primary"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="inline-block bg-primary px-3 py-1 rounded text-altBlack font-medium mb-2">
                      2022
                    </div>
                    <h3 className="text-xl font-bold mb-2">Expansão e Crescimento</h3>
                    <p className="text-gray-700">
                      Expansão da plataforma com novos serviços e crescimento da base de clientes.
                    </p>
                  </div>
                  <div className="bg-altGray-200 rounded-xl h-40 flex items-center justify-center">
                    <p className="text-gray-500">Imagem será exibida aqui</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-primary"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <div className="inline-block bg-primary px-3 py-1 rounded text-altBlack font-medium mb-2">
                      2023
                    </div>
                    <h3 className="text-xl font-bold mb-2">Lançamento do novücard</h3>
                    <p className="text-gray-700">
                      Lançamento do novücard, nosso caso de sucesso que comprova a eficiência da plataforma.
                    </p>
                  </div>
                  <div className="md:order-1 bg-altGray-200 rounded-xl h-40 flex items-center justify-center">
                    <p className="text-gray-500">Imagem será exibida aqui</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-primary"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="inline-block bg-primary px-3 py-1 rounded text-altBlack font-medium mb-2">
                      Hoje
                    </div>
                    <h3 className="text-xl font-bold mb-2">Presente e Futuro</h3>
                    <p className="text-gray-700">
                      Consolidação como referência em infraestrutura de crédito no Brasil, com foco em inovação contínua.
                    </p>
                  </div>
                  <div className="bg-altGray-200 rounded-xl h-40 flex items-center justify-center">
                    <p className="text-gray-500">Imagem será exibida aqui</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What makes us different */}
      <section className="bg-altGray-100 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nos diferencia</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nossa abordagem única combina tecnologia de ponta com profundo conhecimento do mercado brasileiro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex gap-4">
              <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tecnologia desenvolvida para o Brasil</h3>
                <p className="text-gray-700">
                  Nossa tecnologia foi desenvolvida considerando as particularidades do mercado brasileiro, com modelos adaptados à realidade local.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Implementação rápida</h3>
                <p className="text-gray-700">
                  Nossas soluções podem ser implementadas em semanas, não meses, permitindo que nossos clientes lancem produtos rapidamente.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Resultados comprovados</h3>
                <p className="text-gray-700">
                  Nossas soluções são validadas no mercado real, com resultados comprovados de redução de inadimplência e aumento de eficiência.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-puzzle"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.768-.953l.067-.897c.039-.515-.192-1.036-.59-1.434-.398-.398-.92-.628-1.434-.59l-.897.068c-.473.033-.882-.297-.953-.767a.98.98 0 0 1 .276-.838l1.611-1.611a2.41 2.41 0 0 1 1.704-.705c.617 0 1.234.236 1.704.705l1.568 1.568c.23.23.556.338.878.29z"/><path d="M16 6.5V6a3 3 0 0 0-3-3H8.94a.94.94 0 0 0-.664.274l-1.552 1.552a.94.94 0 0 0-.274.664V14a3 3 0 0 0 3 3h5.5"/><path d="M2 14h7"/><path d="M9 22V14"/><path d="M22 16.5V14l-3-3"/><path d="M18 21.5V19l-3-3"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Soluções modulares</h3>
                <p className="text-gray-700">
                  Nossa plataforma é modular, permitindo que nossos clientes escolham apenas os componentes que precisam, garantindo flexibilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar sua operação de crédito?</h2>
            <p className="text-lg text-gray-700">
              Entre em contato com nossa equipe para conhecer como podemos ajudar seu negócio a crescer com segurança.
            </p>
          </div>
          <div className="text-center">
            <Link to="/contato">
              <Button className="btn-primary">
                Pedir uma demonstração
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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

export default Sobre;
