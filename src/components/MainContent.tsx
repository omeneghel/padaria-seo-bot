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

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            O Custo de Não Ter um Plano de Negócios para sua Padaria
          </h3>
          <div className="bg-card p-6 rounded-lg border border-border mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Abrir uma padaria é o sonho de muitos empreendedores. O cheiro de pão quente, o balcão cheio de delícias e o contato diário com a comunidade são imagens poderosas. No entanto, a paixão pela panificação, por si só, não garante um negócio lucrativo. Muitos focam no custo de um forno ou de uma boa batedeira, mas esquecem de calcular o prejuízo silencioso e devastador de operar sem um mapa: o custo de não ter um plano de negócios.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muitos veem o planejamento como uma despesa opcional, um "luxo" para depois. A realidade é o oposto. Navegar sem um plano de negócios é como tentar assar um pão sem receita: você pode até ter os melhores ingredientes, mas as chances de o resultado desandar são enormes.
            </p>
            <p className="text-muted-foreground leading-relaxed font-semibold">
              Vamos detalhar os custos invisíveis que você assume ao pular essa etapa crucial:
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">1. Compras Impulsivas e Maquinário Inadequado</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Sem um plano que defina seu mix de produtos e volume de produção esperado, como saber qual o forno ideal? Você pode acabar comprando um equipamento caro demais para sua demanda inicial, comprometendo seu capital de giro, ou um pequeno demais, que se tornará um gargalo e limitará seu crescimento.
              </p>
              <p className="text-foreground font-semibold">
                <strong className="text-primary">Custo Real:</strong> Dezenas de milhares de reais em equipamentos que não atendem sua necessidade, gerando endividamento ou a necessidade de uma nova compra em pouco tempo.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">2. Desperdício Crônico de Insumos</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Qual a quantidade certa de farinha, fermento e frios para comprar? Sem uma projeção de vendas e um controle de CMV (Custo de Mercadoria Vendida), a compra é baseada em "achismo". O resultado é inevitável: prateleiras com produtos encalhados e ingredientes vencendo no estoque.
              </p>
              <p className="text-foreground font-semibold">
                <strong className="text-primary">Custo Real:</strong> Um rombo mensal no seu fluxo de caixa. Um desperdício de 10% em um faturamento de R$ 30.000, por exemplo, significa R$ 3.000 jogados fora todos os meses.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">3. Ponto Comercial com Baixo Potencial</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A escolha do local é um dos fatores mais críticos para o sucesso de uma padaria. Um plano de negócios inclui um estudo de geomarketing: análise do fluxo de pessoas, perfil demográfico da vizinhança, presença de concorrentes e potencial de consumo da área. Escolher um ponto apenas porque "o aluguel é barato" pode ser fatal.
              </p>
              <p className="text-foreground font-semibold">
                <strong className="text-primary">Custo Real:</strong> Aluguel e custos fixos de um local sem clientes, levando ao fechamento do negócio em menos de um ano.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">4. Precificação Incorreta e Margens de Lucro Apertadas</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Cobrar o mesmo preço do concorrente ou chutar um valor com base no "bom senso" é a receita para o fracasso. Um plano de negócios detalha cada custo (fixo e variável), define a margem de lucro desejada para cada produto e ajuda a criar uma estratégia de preços que seja competitiva e, acima de tudo, lucrativa.
              </p>
              <p className="text-foreground font-semibold">
                <strong className="text-primary">Custo Real:</strong> Trabalhar longas horas todos os dias apenas para "empatar" as contas no final do mês, sem gerar lucro para reinvestir ou para remunerar o seu esforço.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
            <h4 className="font-bold text-xl text-secondary mb-3">
              Conclusão: O Plano de Negócios Não é um Custo, é a sua Principal Ferramenta de Economia
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-3">
              O valor investido em uma consultoria para desenvolver seu plano de negócios é mínimo quando comparado aos prejuízos que ele evita. Ele transforma incertezas em números, "achismos" em estratégias e um sonho em um projeto viável.
            </p>
            <p className="text-foreground font-semibold text-lg">
              Não se pergunte "quanto custa fazer um plano de negócios?". Pergunte-se: "Quanto me custará não ter um?"
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            5 Detalhes Cruciais que Muitos Empreendedores de Padaria Esquecem (e que um Plano de Negócios Resolve)
          </h3>
          <div className="bg-card p-6 rounded-lg border border-border mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você já domina a arte da fermentação natural, sua receita de croissant é imbatível e seus doces são a alegria da família. Com tanto talento, o sucesso da sua padaria parece garantido, certo? Infelizmente, a excelência na produção é apenas um dos ingredientes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A gestão de uma padaria esconde detalhes que, quando ignorados, podem sabotar até o padeiro mais talentoso. São pontos que vão além do balcão e da cozinha, mas que definem a fronteira entre um negócio que sobrevive e um que prospera.
            </p>
          </div>

          <div className="space-y-6 mb-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">1. O Cálculo Preciso do Capital de Giro</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Muitos empreendedores calculam apenas o investimento inicial: reforma, maquinário e estoque para a inauguração. Mas esquecem do oxigênio do negócio: o capital de giro. É o dinheiro necessário para cobrir os custos operacionais (salários, aluguel, fornecedores) até que a padaria comece a gerar lucro suficiente para se pagar.
              </p>
              <p className="text-foreground">
                <strong className="text-primary">O que o plano resolve:</strong> Ele projeta o fluxo de caixa mês a mês e calcula exatamente quanto você precisa ter em caixa para operar com segurança nos primeiros 6 a 12 meses, evitando o pesadelo de não ter dinheiro para pagar as contas.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">2. Legislação Sanitária e Burocracias Específicas</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Uma padaria não é um negócio qualquer. Ela lida com alimentos, o que implica uma série de normas da ANVISA e da vigilância sanitária local. Isso inclui regras sobre manipulação, armazenamento, rotulagem de alergênicos e até a estrutura física da cozinha e do depósito.
              </p>
              <p className="text-foreground">
                <strong className="text-primary">O que o plano resolve:</strong> Ele mapeia todas as licenças, alvarás e adequações necessárias antes de você começar a obra ou a operação, evitando multas, interdições e a frustração de ter que refazer investimentos.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">3. A Estratégia de Mix de Produtos e Engenharia de Cardápio</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Ter 50 tipos de produtos parece ótimo, mas será que todos são lucrativos? A "Engenharia de Cardápio" é uma análise que cruza a popularidade de um item com sua margem de lucro. Alguns produtos vendem muito, mas dão pouco lucro (os "burros de carga"), enquanto outros vendem pouco, mas são muito lucrativos (os "quebra-cabeças").
              </p>
              <p className="text-foreground">
                <strong className="text-primary">O que o plano resolve:</strong> Ajuda a montar um cardápio inicial inteligente, destacando os produtos mais estratégicos (as "estrelas") e definindo ações para melhorar o desempenho dos outros, garantindo que seu esforço de produção se converta em lucro máximo.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">4. O Custo Real por Hora de Funcionamento</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Você sabe quanto custa manter sua padaria aberta por hora, mesmo que nenhum cliente entre? Somando aluguel, salários, energia, água, impostos e outros custos fixos, chega-se a um valor/hora. Saber esse número é vital para definir metas de venda e entender a real lucratividade do negócio.
              </p>
              <p className="text-foreground">
                <strong className="text-primary">O que o plano resolve:</strong> Ele calcula seu ponto de equilíbrio operacional (o faturamento mínimo para não ter prejuízo) e detalha esses custos, dando a você clareza sobre as metas que sua equipe precisa bater diariamente.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">5. O Plano de Marketing de Inauguração (e Pós-Inauguração)</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                "Vou abrir e os clientes virão pelo cheiro do pão". Essa é uma aposta arriscada. Uma inauguração bem-sucedida exige um plano: ações nas redes sociais, parcerias com comércios locais, promoções de lançamento, um evento de abertura. Tão importante quanto, é preciso ter um plano para manter o movimento após a euforia inicial.
              </p>
              <p className="text-foreground">
                <strong className="text-primary">O que o plano resolve:</strong> Ele estrutura um plano de marketing com ações, cronograma e orçamento definidos para gerar buzz antes da abertura, garantir uma inauguração forte e criar estratégias de fidelização para construir uma clientela recorrente.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-muted-foreground leading-relaxed">
              Esses cinco pontos são apenas a ponta do iceberg. Eles mostram que gerir uma padaria de sucesso é uma ciência, e o plano de negócios é o seu laboratório. Ele permite testar, calcular e prever, transformando sua paixão e talento em um negócio sólido e duradouro.
            </p>
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
