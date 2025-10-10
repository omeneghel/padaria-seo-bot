// ============================================================================
// TEMPLATE DE PÁGINA - SEO PROGRAMÁTICO
// ============================================================================
// Este é o template principal da página de Plano de Negócios.
// Ele recebe um nichoId como prop e carrega a configuração correspondente.
// ============================================================================

import { useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainContentTemplate from "@/components/MainContentTemplate";
import Footer from "@/components/Footer";
import { getNichoConfigById } from "@/config/nichos.config";
import { Helmet } from "react-helmet-async";

// ============================================================================
// INTERFACE DE PROPS
// ============================================================================

interface PlanoDeNegociosTemplateProps {
  nichoId: string; // {{VARIAVEL_NICHO_ID}} - Ex: "padarias", "pizzarias", "restaurantes"
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

const PlanoDeNegociosTemplate = ({ nichoId }: PlanoDeNegociosTemplateProps) => {
  // Estado dos modais
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  // Carregar configuração do nicho
  const config = getNichoConfigById(nichoId);

  // Se a configuração não existir, mostrar erro
  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Configuração não encontrada
          </h1>
          <p className="text-muted-foreground">
            O nicho "{nichoId}" não está configurado no sistema.
          </p>
        </div>
      </div>
    );
  }

  // Preparar dados da página usando as variáveis do config
  const pageData = {
    title: config.heroTitle,                    // {{VARIAVEL_HERO_TITLE}}
    subtitle: config.heroSubtitle,              // {{VARIAVEL_HERO_SUBTITLE}}
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Serviços", href: "/servicos" },
      { 
        label: config.breadcrumbLabel,          // {{VARIAVEL_BREADCRUMB_LABEL}}
        href: `/${config.slug}`                 // {{VARIAVEL_SLUG}}
      }
    ]
  };

  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>{config.metaTitle}</title>                              {/* {{VARIAVEL_META_TITLE}} */}
        <meta name="description" content={config.metaDescription} />   {/* {{VARIAVEL_META_DESCRIPTION}} */}
        <meta name="keywords" content={config.metaKeywords.join(", ")} /> {/* {{VARIAVEL_META_KEYWORDS}} */}
        
        {/* Open Graph */}
        <meta property="og:title" content={config.metaTitle} />
        <meta property="og:description" content={config.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://seusite.com/${config.slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.metaTitle} />
        <meta name="twitter:description" content={config.metaDescription} />
      </Helmet>

      {/* ===== ESTRUTURA DA PÁGINA ===== */}
      <div className="min-h-screen bg-background">
        {/* Barra superior com botões de contato */}
        <TopBar 
          onPhoneClick={() => setIsPhoneModalOpen(true)} 
          onWhatsAppClick={() => setIsWhatsAppModalOpen(true)} 
        />
        
        {/* Cabeçalho */}
        <Header />
        
        {/* Seção Hero com título e breadcrumbs */}
        <HeroSection {...pageData} />
        
        {/* Conteúdo principal */}
        <main className="content-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Coluna de conteúdo (2/3) */}
              <div className="lg:col-span-2">
                <MainContentTemplate config={config} />  {/* {{VARIAVEL_CONFIG}} - Passa toda a configuração */}
              </div>
              
              {/* Coluna lateral com formulário (1/3) */}
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

        {/* Rodapé */}
        <Footer 
          onPhoneClick={() => setIsPhoneModalOpen(true)} 
          onWhatsAppClick={() => setIsWhatsAppModalOpen(true)} 
        />

        {/* Botão flutuante de WhatsApp */}
        <WhatsAppButton onClick={() => setIsWhatsAppModalOpen(true)} />

        {/* ===== MODAL DE WHATSAPP ===== */}
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

        {/* ===== MODAL DE TELEFONE ===== */}
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
    </>
  );
};

export default PlanoDeNegociosTemplate;

// ============================================================================
// MAPEAMENTO DE VARIÁVEIS
// ============================================================================
/*

VARIÁVEIS PRINCIPAIS DESTE TEMPLATE:

1. {{VARIAVEL_NICHO_ID}}
   - Localização: Props do componente
   - Tipo: string
   - Exemplo: "padarias", "pizzarias"
   - Uso: Define qual configuração de nicho será carregada

2. {{VARIAVEL_HERO_TITLE}}
   - Localização: config.heroTitle
   - Tipo: string
   - Exemplo: "Plano de Negócios para Padarias"
   - Uso: Título H1 principal da página

3. {{VARIAVEL_HERO_SUBTITLE}}
   - Localização: config.heroSubtitle
   - Tipo: string
   - Exemplo: "ECONOMICA Consultoria Empresarial Júnior"
   - Uso: Subtítulo abaixo do H1

4. {{VARIAVEL_BREADCRUMB_LABEL}}
   - Localização: config.breadcrumbLabel
   - Tipo: string
   - Exemplo: "Plano de Negócios para Padarias"
   - Uso: Label do último item do breadcrumb

5. {{VARIAVEL_SLUG}}
   - Localização: config.slug
   - Tipo: string
   - Exemplo: "plano-de-negocios-para-padarias"
   - Uso: URL da página

6. {{VARIAVEL_META_TITLE}}
   - Localização: config.metaTitle
   - Tipo: string
   - Exemplo: "Plano de Negócios para Padarias | ECONOMICA"
   - Uso: Tag <title> para SEO

7. {{VARIAVEL_META_DESCRIPTION}}
   - Localização: config.metaDescription
   - Tipo: string
   - Exemplo: "Plano de negócios completo para padarias..."
   - Uso: Meta description para SEO

8. {{VARIAVEL_META_KEYWORDS}}
   - Localização: config.metaKeywords
   - Tipo: string[]
   - Exemplo: ["plano de negócios padaria", "abrir padaria"]
   - Uso: Meta keywords para SEO

9. {{VARIAVEL_CONFIG}}
   - Localização: config (objeto completo)
   - Tipo: NichoConfig
   - Uso: Passa toda a configuração para o componente de conteúdo

10. {{VARIAVEL_FORM_TITLE}}
    - Localização: Hardcoded (pode ser parametrizado)
    - Tipo: string
    - Exemplo: "Solicite seu Plano de Negócios!"
    - Uso: Título do formulário de contato

*/
