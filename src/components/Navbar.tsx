
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/c602e9a4-cd19-43c2-9277-9b27b4152956.png" 
            alt="alt.bank" 
            className="h-8" 
          />
          <span className="ml-2 text-sm font-medium text-gray-600">B2B Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-altBlack hover:text-gray-700 font-medium">
            Início
          </Link>
          <Link to="/guard" className="text-altBlack hover:text-gray-700 font-medium">
            GUARD
          </Link>
          <Link to="/solucoes" className="text-altBlack hover:text-gray-700 font-medium">
            Soluções
          </Link>
          <Link to="/industrias" className="text-altBlack hover:text-gray-700 font-medium">
            Indústrias
          </Link>
          <Link to="/sobre" className="text-altBlack hover:text-gray-700 font-medium">
            Sobre
          </Link>
          <Link to="/contato">
            <Button className="rounded-full btn-primary">Pedir Demo</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-altBlack">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full py-4 px-6 shadow-lg z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-altBlack hover:text-gray-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/guard" 
              className="text-altBlack hover:text-gray-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              GUARD
            </Link>
            <Link 
              to="/solucoes" 
              className="text-altBlack hover:text-gray-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluções
            </Link>
            <Link 
              to="/industrias" 
              className="text-altBlack hover:text-gray-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Indústrias
            </Link>
            <Link 
              to="/sobre" 
              className="text-altBlack hover:text-gray-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/contato"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="rounded-full btn-primary w-full">Pedir Demo</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
