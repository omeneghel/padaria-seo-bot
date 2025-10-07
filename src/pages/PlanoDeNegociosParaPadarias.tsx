import { useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

const PlanoDeNegociosParaPadarias = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const pageData = {
    title: "Plano de Negócios para Padarias",
    subtitle: "ECONOMICA Consultoria Empresarial Júnior",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Serviços", href: "/servicos" },
      { label: "Plano de Negócios para Padarias", href: "/plano-de-negocios-para-padarias" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar onPhoneClick={() => setIsPhoneModalOpen(true)} onWhatsAppClick={() => setIsWhatsAppModalOpen(true)} />
      <Header />
      <HeroSection {...pageData} />
      
      <main className="content-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MainContent />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm 
                  title="Solicite seu Plano de Negócios!"
                  description="Preencha o formulário abaixo e nossa equipe entrará em contato"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onPhoneClick={() => setIsPhoneModalOpen(true)} onWhatsAppClick={() => setIsWhatsAppModalOpen(true)} />

      <WhatsAppButton onClick={() => setIsWhatsAppModalOpen(true)} />

      {/* WhatsApp Modal */}
      <Dialog open={isWhatsAppModalOpen} onOpenChange={setIsWhatsAppModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Fale por WhatsApp
            </DialogTitle>
          </DialogHeader>
          <ContactForm 
            isModal 
            onSuccess={() => setIsWhatsAppModalOpen(false)}
            title=""
            description="Preencha para falar pelo WhatsApp"
          />
        </DialogContent>
      </Dialog>

      {/* Phone Modal */}
      <Dialog open={isPhoneModalOpen} onOpenChange={setIsPhoneModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Clique para Ligar
            </DialogTitle>
          </DialogHeader>
          <ContactForm 
            isModal 
            onSuccess={() => setIsPhoneModalOpen(false)}
            title=""
            description="Preencha para receber nossa ligação"
            submitText="FAZER LIGAÇÃO"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlanoDeNegociosParaPadarias;
