import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import { 
  TrendingUp, 
  FileText, 
  DollarSign, 
  BarChart3, 
  Tag,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HomeContactForm from "@/components/HomeContactForm";

const Home = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const services = [
    {
      title: "Pesquisa de Mercado",
      description: "Análise aprofundada do mercado, concorrência e oportunidades para seu negócio.",
      icon: TrendingUp,
      href: "/pesquisa-de-mercado"
    },
    {
      title: "Plano de Negócios",
      description: "Planejamento estratégico completo para estruturar e expandir sua empresa.",
      icon: FileText,
      href: "/plano-de-negocios"
    },
    {
      title: "Valuation",
      description: "Avaliação precisa do valor da sua empresa baseada em metodologias reconhecidas.",
      icon: DollarSign,
      href: "/valuation"
    },
    {
      title: "Análise de Viabilidade",
      description: "Estudo detalhado da viabilidade econômica e financeira do seu projeto.",
      icon: BarChart3,
      href: "/analise-de-viabilidade"
    },
    {
      title: "Precificação",
      description: "Estratégias de precificação para maximizar lucratividade e competitividade.",
      icon: Tag,
      href: "/precificacao"
    }
  ];

  const stats = [
    { number: "30", label: "Anos de mercado auxiliando empresas e empreendedores a crescerem." },
    { number: "+101", label: "Clientes impactados por projetos." },
    { number: "1º", label: "Lugar no ranking de melhor curso de Economia do Brasil." },
    { number: "2º", label: "Lugar no ranking das melhores universidades do Brasil." }
  ];

  const benefits = [
    "Equipe qualificada de consultores especializados",
    "Metodologias comprovadas e validadas academicamente",
    "Mais de 30 anos de experiência no mercado",
    "Suporte contínuo durante todo o projeto",
    "Resultados mensuráveis e orientados a dados"
  ];

  return (
    <>
      <Helmet>
        <title>ECONOMICA - Consultoria Empresarial de Excelência | Unicamp</title>
        <meta 
          name="description" 
          content="Consultoria empresarial especializada em Plano de Negócios, Valuation, Pesquisa de Mercado e mais. Há 30 anos transformando empresas com a excelência da Unicamp." 
        />
        <meta name="keywords" content="consultoria empresarial, plano de negócios, valuation, pesquisa de mercado, análise de viabilidade, precificação, unicamp, economica" />
        <link rel="canonical" href="https://economica.org.br/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="hero-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white mb-6 leading-tight">
                Há mais de 30 anos no mercado impactando vidas
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                A ECONOMICA direciona empresários a como estruturar seus negócios, através do conhecimento do maior centro de ensino e pesquisa do país (UNICAMP).
              </p>
              <p className="text-lg text-white/80 mb-10">
                Nossos projetos são o nosso legado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Fale Conosco
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6"
                  onClick={() => window.location.href = 'https://economica.org.br/cases'}
                >
                  Cases de Sucesso
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                    {stat.number}
                  </div>
                  <p className="text-white/90 text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="content-section bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Nossos Serviços</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Soluções completas em consultoria empresarial para impulsionar seu negócio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={idx} 
                    className="hover-lift cursor-pointer border-2 hover:border-primary transition-all"
                    onClick={() => window.location.href = service.href}
                  >
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold">
                        Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="content-section bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                  alt="Equipe ECONOMICA trabalhando em consultoria empresarial"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              
              <div>
                <h2 className="section-title text-left">Sobre Nós</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Somos a empresa júnior do <strong>Instituto de Economia da Unicamp</strong>, um dos maiores centros de ensino, pesquisa e extensão da área no país. Atuando desde 1992, temos por objetivo transformar a formação dos alunos e o ecossistema empreendedor através de consultorias personalizadas.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Contamos, para tal, com o auxílio e orientação dos professores do Instituto, que dão a base teórica para a prestação dos serviços que são direcionados, principalmente, ao apoio a pequenas e médias empresas com potencial para movimentar a economia.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="mt-8"
                  onClick={() => window.location.href = 'https://economica.org.br/nossa-empresa'}
                >
                  Conheça Nossa Equipe
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="content-section bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Por Que Escolher a ECONOMICA?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Excelência Acadêmica</h3>
                <p className="text-muted-foreground">
                  Vinculados à Unicamp, 2ª melhor universidade do Brasil e com o melhor curso de Economia do país
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Resultados Comprovados</h3>
                <p className="text-muted-foreground">
                  Mais de 101 clientes impactados com projetos que transformaram seus negócios
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Consultoria Personalizada</h3>
                <p className="text-muted-foreground">
                  Cada projeto é único e desenvolvido sob medida para atender suas necessidades específicas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="content-section bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title">Transforme Seu Negócio</h2>
                <p className="text-lg text-muted-foreground">
                  Entre em contato e descubra como podemos ajudar sua empresa a alcançar novos patamares
                </p>
              </div>

              <HomeContactForm />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto Para Começar?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Junte-se a mais de 101 empresas que já transformaram seus negócios com a ECONOMICA
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6"
              onClick={() => setIsWhatsAppModalOpen(true)}
            >
              Fale com um Consultor Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <Footer 
          onPhoneClick={() => window.open('tel:+5511956909147')}
          onWhatsAppClick={() => setIsWhatsAppModalOpen(true)}
        />

        <WhatsAppButton onClick={() => setIsWhatsAppModalOpen(true)} />

        <Dialog open={isWhatsAppModalOpen} onOpenChange={setIsWhatsAppModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Fale com um Consultor</DialogTitle>
            </DialogHeader>
            <ContactForm 
              isModal={true}
              onSuccess={() => setIsWhatsAppModalOpen(false)}
              submitText="ENVIAR MENSAGEM"
            />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Home;
