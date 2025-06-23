
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-altBlack text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl text-white">alt.bank</span>
              <div className="h-6 w-2 bg-primary rounded"></div>
              <span className="text-sm font-medium text-gray-300">B2B</span>
            </div>
            <p className="text-gray-400 mb-4">
              A nova infraestrutura de crédito do Brasil
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/altbank/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com/altbank" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-3">
              <li><Link to="/guard" className="text-gray-300 hover:text-primary">GUARD</Link></li>
              <li><Link to="/solucoes" className="text-gray-300 hover:text-primary">Bin Sponsor</Link></li>
              <li><Link to="/solucoes" className="text-gray-300 hover:text-primary">White Label</Link></li>
              <li><Link to="/solucoes" className="text-gray-300 hover:text-primary">Serviços à la carte</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Indústrias</h3>
            <ul className="space-y-3">
              <li><Link to="/industrias" className="text-gray-300 hover:text-primary">Bancos</Link></li>
              <li><Link to="/industrias" className="text-gray-300 hover:text-primary">Fintechs</Link></li>
              <li><Link to="/industrias" className="text-gray-300 hover:text-primary">Empresas não-financeiras</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><Link to="/sobre" className="text-gray-300 hover:text-primary">Sobre nós</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-primary">Contato</Link></li>
              <li><Link to="/developers" className="text-gray-300 hover:text-primary flex items-center gap-1">
                Desenvolvedores
                <ExternalLink size={16} />
              </Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} alt.bank. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
