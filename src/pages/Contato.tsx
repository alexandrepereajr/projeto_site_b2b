
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contato = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Entre em contato
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Nossa equipe está pronta para entender suas necessidades e apresentar a solução ideal para o seu negócio.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="bg-altGray-100 py-16">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-6">Informações de contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary h-10 w-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-700">contato@alt.bank</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary h-10 w-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Telefone</h4>
                      <p className="text-gray-700">(11) 9999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary h-10 w-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Endereço</h4>
                      <p className="text-gray-700">
                        Av. Paulista, 1000 - Bela Vista<br />
                        São Paulo - SP, 01310-100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Horário de atendimento</h3>
                <p className="text-gray-700 mb-4">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábados, Domingos e Feriados: Fechado
                </p>
                <p className="text-sm text-gray-600">
                  *Solicitações enviadas pelo formulário são respondidas em até 24 horas úteis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contato;
