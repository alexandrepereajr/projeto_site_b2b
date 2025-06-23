
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    email: "",
    phone: "",
    interests: {
      guard: false,
      binSponsor: false,
      whiteLabel: false,
      services: false,
    },
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (interest: keyof typeof formData.interests) => {
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [interest]: !formData.interests[interest as keyof typeof formData.interests],
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.company) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    // Verificar se pelo menos um interesse foi selecionado
    if (!Object.values(formData.interests).some(value => value)) {
      toast.error("Por favor, selecione pelo menos um interesse.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular chamada de API
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Recebemos suas informações! Nosso time entrará em contato em breve para apresentar a solução ideal para o seu negócio.");
      
      // Resetar formulário
      setFormData({
        name: "",
        position: "",
        company: "",
        email: "",
        phone: "",
        interests: {
          guard: false,
          binSponsor: false,
          whiteLabel: false,
          services: false,
        },
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8 md:p-10 border border-altGray-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-3">Vamos transformar sua operação de crédito?</h3>
        <p className="text-altGray-700">Preencha o formulário abaixo para receber uma consultoria especializada</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nome completo<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="position" className="form-label">
              Cargo<span className="text-red-500">*</span>
            </label>
            <input
              id="position"
              name="position"
              type="text"
              required
              value={formData.position}
              onChange={handleChange}
              className="form-input"
              placeholder="Seu cargo na empresa"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="company" className="form-label">
              Empresa<span className="text-red-500">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              className="form-input"
              placeholder="Nome da empresa"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email corporativo<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="seu.email@empresa.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Telefone<span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Mensagem (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-altGray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all h-24"
              placeholder="Como podemos ajudar sua empresa?"
            />
          </div>
        </div>
        
        <div className="space-y-3 bg-altGray-100 p-5 rounded-lg">
          <label className="block text-sm font-medium text-altBlack mb-3">
            Interesses<span className="text-red-500">*</span>
          </label>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-altGray-200 hover:border-primary transition-all">
              <Checkbox 
                id="guard" 
                checked={formData.interests.guard}
                onCheckedChange={() => handleCheckboxChange("guard")}
                className="data-[state=checked]:bg-primary data-[state=checked]:text-altBlack"
              />
              <label
                htmlFor="guard"
                className="text-sm font-medium leading-none cursor-pointer select-none"
              >
                GUARD (Motor de Crédito)
              </label>
            </div>
            
            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-altGray-200 hover:border-primary transition-all">
              <Checkbox 
                id="binSponsor" 
                checked={formData.interests.binSponsor}
                onCheckedChange={() => handleCheckboxChange("binSponsor")}
                className="data-[state=checked]:bg-primary data-[state=checked]:text-altBlack"
              />
              <label
                htmlFor="binSponsor"
                className="text-sm font-medium leading-none cursor-pointer select-none"
              >
                Bin Sponsor
              </label>
            </div>
            
            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-altGray-200 hover:border-primary transition-all">
              <Checkbox 
                id="whiteLabel" 
                checked={formData.interests.whiteLabel}
                onCheckedChange={() => handleCheckboxChange("whiteLabel")}
                className="data-[state=checked]:bg-primary data-[state=checked]:text-altBlack"
              />
              <label
                htmlFor="whiteLabel"
                className="text-sm font-medium leading-none cursor-pointer select-none"
              >
                White Label
              </label>
            </div>
            
            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-altGray-200 hover:border-primary transition-all">
              <Checkbox 
                id="services" 
                checked={formData.interests.services}
                onCheckedChange={() => handleCheckboxChange("services")}
                className="data-[state=checked]:bg-primary data-[state=checked]:text-altBlack"
              />
              <label
                htmlFor="services"
                className="text-sm font-medium leading-none cursor-pointer select-none"
              >
                Serviços à la carte
              </label>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-4">
          <Button 
            type="submit" 
            className="btn-primary px-12 py-3 min-w-[200px] group"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
