import { MessageSquare } from "lucide-react";

interface WhatsAppButtonProps {
  onClick: () => void;
}

const WhatsAppButton = ({ onClick }: WhatsAppButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="whatsapp-float group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
      <span className="absolute right-full mr-3 whitespace-nowrap bg-white text-secondary px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale com um Consultor Especialista
      </span>
    </button>
  );
};

export default WhatsAppButton;
