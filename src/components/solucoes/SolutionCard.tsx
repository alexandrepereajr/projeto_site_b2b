
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
}

const SolutionCard = ({ title, description, features, ctaText }: SolutionCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      <div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">
          {description}
        </p>
      </div>
      
      <div className="space-y-4 mt-auto">
        <h4 className="font-semibold text-lg">
          {title === "White Label (Solução completa)" 
            ? "Inclui todos os serviços anteriores, mais:" 
            : "Serviços incluídos:"}
        </h4>
        <ul className="grid grid-cols-1 gap-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8">
        <Link to="/contato">
          <Button className="btn-primary">{ctaText}</Button>
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
