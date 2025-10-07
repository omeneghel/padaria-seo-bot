import { Phone, MessageSquare, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import economicaLogo from "@/assets/economica-logo-full.png";

interface FooterProps {
  onPhoneClick: () => void;
  onWhatsAppClick: () => void;
}

const Footer = ({ onPhoneClick, onWhatsAppClick }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Plano de Negócios", href: "/plano-de-negocios" },
    { label: "Valuation", href: "/valuation" },
    { label: "Consultoria Empresarial", href: "/consultoria-empresarial" },
    { label: "Análise de Mercado", href: "/analise-de-mercado" },
    { label: "Planejamento Financeiro", href: "/planejamento-financeiro" },
  ];

  const institutional = [
    { label: "Nossa Empresa", href: "https://economica.org.br/nossa-empresa", external: true },
    { label: "Blog", href: "https://economica.org.br/blog", external: true },
    { label: "Contato", href: "/contato" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  ];

  return (
    <>
      <footer className="bg-secondary text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and Social */}
            <div>
              <img src={economicaLogo} alt="ECONOMICA" className="h-16 mb-4 brightness-0 invert" />
              <p className="text-sm text-white/80 mb-4">
                Consultoria Empresarial Júnior da UNICAMP com mais de 30 anos de experiência.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/economica.unicamp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/economica-unicamp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Serviços</h3>
              <ul className="space-y-2">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <a 
                      href={service.href} 
                      className="text-sm text-white/80 hover:text-primary transition-colors"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institutional */}
            <div>
              <h3 className="text-lg font-bold mb-4">Institucional</h3>
            <ul className="space-y-2">
                {institutional.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href={item.href}
                      {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="text-sm text-white/80 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>UNICAMP - Campinas, SP</span>
                </li>
                <li>
                  <button 
                    onClick={onWhatsAppClick}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Fale por WhatsApp
                  </button>
                </li>
                <li>
                  <button 
                    onClick={onPhoneClick}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Clique para Ligar
                  </button>
                </li>
                <li>
                  <a 
                    href="mailto:contato@economica.org.br"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    contato@economica.org.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* SEO Footer Text */}
      <section className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            Consultoria Empresarial ECONOMICA - UNICAMP
          </p>
        </div>
      </section>

      {/* Copyright */}
      <div className="bg-secondary/95 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © {currentYear} ECONOMICA Consultoria Empresarial Júnior. Todos os Direitos Reservados.
            </p>
            <p className="text-sm text-white/70">
              Desenvolvido com excelência pela ECONOMICA
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
