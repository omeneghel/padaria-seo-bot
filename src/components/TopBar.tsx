import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopBarProps {
  onPhoneClick: () => void;
  onWhatsAppClick: () => void;
  pageTitle?: string;
}

const TopBar = ({ onPhoneClick, onWhatsAppClick, pageTitle = "Plano de Negócios para Padarias" }: TopBarProps) => {
  return (
    <section className="bg-secondary text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center">
          <div className="hidden md:flex gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onPhoneClick}
              className="text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Clique para Ligar
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onWhatsAppClick}
              className="text-white hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Fale por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
