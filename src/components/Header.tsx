import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import economicaLogo from "@/assets/economica-logo-full.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Planos de Negócios",
      items: [
        { label: "Restaurantes", href: "/plano-de-negocios-para-restaurantes" },
        { label: "Padarias", href: "/plano-de-negocios-para-padarias" },
        { label: "Cafeterias", href: "/plano-de-negocios-para-cafeterias" },
        { label: "Lojas de Varejo", href: "/plano-de-negocios-para-lojas" },
      ]
    },
    {
      title: "Serviços",
      items: [
        { label: "Consultoria Empresarial", href: "/consultoria-empresarial" },
        { label: "Análise de Mercado", href: "/analise-de-mercado" },
        { label: "Planejamento Financeiro", href: "/planejamento-financeiro" },
      ]
    },
    {
      title: "Institucional",
      items: [
        { label: "Sobre Nós", href: "/sobre" },
        { label: "Blog", href: "/blog" },
        { label: "Contato", href: "/contato" },
      ]
    }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex-shrink-0">
            <img src={economicaLogo} alt="ECONOMICA Consultoria Empresarial" className="h-12 md:h-16" />
          </a>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((menu, idx) => (
              <div key={idx} className="group relative">
                <button className="text-foreground hover:text-primary font-medium transition-colors py-2">
                  {menu.title}
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {menu.items.map((item, itemIdx) => (
                      <a
                        key={itemIdx}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {menuItems.map((menu, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-bold text-foreground mb-2">{menu.title}</h3>
                <div className="pl-4 space-y-2">
                  {menu.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
