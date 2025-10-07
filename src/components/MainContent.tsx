import { CheckCircle2, TrendingUp, Target, Users, BarChart3, FileText } from "lucide-react";

const MainContent = () => {
  const benefits = [
    {
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Defina objetivos claros e alcançáveis para sua padaria com metodologias comprovadas."
    },
    {
      icon: BarChart3,
      title: "Análise Financeira Detalhada",
      description: "Projeções realistas de receitas, custos e rentabilidade para garantir a viabilidade do negócio."
    },
    {
      icon: Users,
      title: "Estudo de Mercado",
      description: "Análise completa do mercado local, concorrência e perfil do cliente ideal."
    },
    {
      icon: TrendingUp,
      title: "Projeções de Crescimento",
      description: "Estratégias de expansão e crescimento sustentável para sua padaria."
    },
  ];

  const includes = [
    "Análise de viabilidade econômica",
    "Definição de público-alvo e posicionamento",
    "Planejamento operacional completo",
    "Estratégias de marketing e vendas",
    "Projeções financeiras detalhadas (3-5 anos)",
    "Análise de investimento inicial necessário",
    "Plano de gestão e recursos humanos",
    "Indicadores de desempenho (KPIs)",
  ];

  return (
    <article className="space-y-8">
      <header>
        <h2 className="section-title">Plano de Negócios para Padarias: O Caminho para o Sucesso</h2>
      </header>

      <section className="prose max-w-none">
        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-3">
            Por que um Plano de Negócios é Essencial para sua Padaria?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            O mercado de panificação é altamente competitivo e dinâmico. Um plano de negócios bem estruturado 
            é a diferença entre o sucesso e o fechamento prematuro. Na ECONOMICA, nossos consultores da UNICAMP 
            trazem mais de 30 anos de experiência para ajudar você a transformar sua ideia em um negócio lucrativo 
            e sustentável.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-6">O Que Você Ganha com Nosso Plano de Negócios:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-card rounded-lg border border-border hover-lift">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-secondary mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary text-white p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8" />
            O Que Está Incluído no Seu Plano de Negócios
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {includes.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Desafios Comuns no Setor de Panificação
          </h3>
          <div className="space-y-4">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-2">Alto Índice de Fechamento</h4>
              <p className="text-muted-foreground">
                Segundo dados do SEBRAE, aproximadamente 25% das padarias fecham nos primeiros dois anos. 
                A falta de planejamento adequado é a principal causa desse índice alarmante.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-2">Gestão de Custos Complexa</h4>
              <p className="text-muted-foreground">
                O setor de panificação enfrenta desafios únicos: matéria-prima perecível, controle de estoque 
                rigoroso, equipe especializada e custos fixos elevados. Nosso plano de negócios aborda cada um 
                desses pontos com soluções práticas.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-2">Concorrência Acirrada</h4>
              <p className="text-muted-foreground">
                Com o crescimento de padarias gourmet e franquias, é essencial ter um diferencial competitivo 
                claro. Ajudamos você a identificar seu nicho e criar estratégias de posicionamento eficazes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Por Que Escolher a ECONOMICA?
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-foreground">
                <strong>Expertise Acadêmica:</strong> Consultores formados e vinculados à UNICAMP, 
                uma das melhores universidades do Brasil
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-foreground">
                <strong>Mais de 30 Anos de Experiência:</strong> Centenas de planos de negócios 
                desenvolvidos com alta taxa de sucesso
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-foreground">
                <strong>Metodologia Comprovada:</strong> Utilizamos frameworks reconhecidos 
                internacionalmente adaptados à realidade brasileira
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-foreground">
                <strong>Acompanhamento Personalizado:</strong> Suporte durante todo o processo 
                de elaboração do plano
              </span>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default MainContent;
