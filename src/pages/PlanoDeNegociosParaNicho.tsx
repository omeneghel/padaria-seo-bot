import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
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
import { getNichoConfig } from "@/config/nichos.config";

/**
 * Página genérica para Plano de Negócios
 * 
 * Esta página é usada para TODOS os nichos (adega, farmácia, pizzaria, etc.)
 * Ela pega o slug da URL e busca os dados correspondentes no nichosConfig
 */
const PlanoDeNegociosParaNicho = () => {
  // Pega o slug da URL (ex: "plano-de-negocios-para-adega" -> slug = "adega")
  const { slug } = useParams<{ slug: string }>();
  
  // Estados para controlar os modais
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  // Busca os dados do nicho baseado no slug
  // Se o slug for "plano-de-negocios-para-adega", busca o nicho "adega"
  const nicho = slug ? getNichoConfig(slug) : null;

  // Se o nicho não existe, redireciona para página 404
  if (!nicho) {
    return <Navigate to="/404" replace />;
  }

  // Monta os dados da página usando os dados do nicho
  const pageData = {
    title: nicho.heroTitle,
    subtitle: nicho.heroSubtitle,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Serviços", href: "/servicos" },
      { label: nicho.breadcrumbLabel, href: `/${nicho.slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Barra superior com telefone e WhatsApp */}
      <TopBar 
        onPhoneClick={() => setIsPhoneModalOpen(true)} 
        onWhatsAppClick={() => setIsWhatsAppModalOpen(true)} 
      />
      
      {/* Cabeçalho com logo e menu */}
      <Header />
      
      {/* Seção Hero (título principal e breadcrumbs) */}
      <HeroSection {...pageData} />
      
      {/* Conteúdo principal */}
      <main className="content-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna principal: conteúdo do plano de negócios */}
            <div className="lg:col-span-2">
              <MainContent nicho={nicho} />
            </div>
            
            {/* Coluna lateral: formulário de contato */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm 
                  title={nicho.ctaH3}
                  description={nicho.ctaP1}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <Footer 
        onPhoneClick={() => setIsPhoneModalOpen(true)} 
        onWhatsAppClick={() => setIsWhatsAppModalOpen(true)} 
      />

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton onClick={() => setIsWhatsAppModalOpen(true)} />

      {/* Modal do WhatsApp */}
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

      {/* Modal do Telefone */}
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

export default PlanoDeNegociosParaNicho;
