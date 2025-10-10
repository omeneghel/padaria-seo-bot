// ============================================================================
// ARQUIVO DE CONFIGURAÇÃO DE NICHOS - SEO PROGRAMÁTICO
// ============================================================================
// Este arquivo contém todas as variáveis necessárias para gerar páginas
// de plano de negócios para diferentes nichos de forma automatizada.
// ============================================================================

export interface NichoConfig {
  // ===== IDENTIFICAÇÃO =====
  id: string;                          // ID único do nicho (ex: "padarias", "pizzarias")
  slug: string;                        // Slug para URL (ex: "plano-de-negocios-para-padarias")
  
  // ===== NOMENCLATURA =====
  nomeNegocio: string;                 // Nome do negócio no plural (ex: "Padarias", "Pizzarias")
  nomeNegocioSingular: string;         // Nome do negócio no singular (ex: "padaria", "pizzaria")
  nomeSetor: string;                   // Nome do setor (ex: "panificação", "pizzaria")
  
  // ===== SEO & META TAGS =====
  metaTitle: string;                   // Título da página para SEO
  metaDescription: string;             // Descrição meta para SEO
  metaKeywords: string[];              // Palavras-chave para SEO
  
  // ===== BREADCRUMBS =====
  breadcrumbLabel: string;             // Label do breadcrumb (ex: "Plano de Negócios para Padarias")
  
  // ===== HERO SECTION =====
  heroTitle: string;                   // Título principal da página H1
  heroSubtitle: string;                // Subtítulo da página
  
  // ===== CARACTERÍSTICAS DO NEGÓCIO =====
  produtosPrincipais: string;          // Produtos principais (ex: "pães e doces", "pizzas artesanais")
  equipamentoPrincipal: string;        // Equipamento principal (ex: "forno e batedeira", "forno a lenha")
  equipamentoSecundario: string;       // Equipamento secundário (ex: "batedeira", "masseira")
  insumosPrincipais: string;           // Insumos principais (ex: "farinha, fermento e frios")
  caracteristicaSensorial: string;     // Característica sensorial (ex: "cheiro de pão quente", "aroma de pizza")
  
  // ===== EXEMPLOS ESPECÍFICOS =====
  exemploProdutoIconico: string;       // Produto icônico (ex: "croissant", "pizza margherita")
  exemploProcesso: string;             // Processo característico (ex: "assar um pão", "fazer uma pizza")
  exemploAtmosfera: string;            // Atmosfera do negócio (ex: "balcão cheio de delícias", "cardápio variado")
  
  // ===== DESAFIOS ESPECÍFICOS DO SETOR =====
  desafio1Titulo: string;
  desafio1Descricao: string;
  desafio2Titulo: string;
  desafio2Descricao: string;
  desafio3Titulo: string;
  desafio3Descricao: string;
  
  // ===== BENEFÍCIOS (4 itens) =====
  beneficios: Array<{
    icon: string;                      // Nome do ícone (ex: "Target", "BarChart3")
    titulo: string;
    descricao: string;
  }>;
  
  // ===== ITENS INCLUÍDOS NO PLANO (8 itens) =====
  itensIncluidos: string[];
  
  // ===== CUSTOS ESPECÍFICOS =====
  custosExemplo1: {
    titulo: string;
    descricao: string;
    custoReal: string;
  };
  custosExemplo2: {
    titulo: string;
    descricao: string;
    custoReal: string;
  };
  
  // ===== DETALHES CRUCIAIS (5 itens) =====
  detalhes: Array<{
    titulo: string;
    descricao: string;
    solucao: string;
  }>;
}

// ============================================================================
// CONFIGURAÇÕES DE NICHOS
// ============================================================================

export const nichosConfig: Record<string, NichoConfig> = {
  
  // ==========================================================================
  // PADARIAS
  // ==========================================================================
  padarias: {
    id: "padarias",
    slug: "plano-de-negocios-para-padarias",
    
    nomeNegocio: "Padarias",
    nomeNegocioSingular: "padaria",
    nomeSetor: "panificação",
    
    metaTitle: "Plano de Negócios para Padarias | ECONOMICA Consultoria",
    metaDescription: "Plano de negócios completo para padarias com análise financeira, estudo de mercado e estratégias de crescimento. Consultoria especializada da UNICAMP.",
    metaKeywords: ["plano de negócios padaria", "abrir padaria", "consultoria padaria", "padaria lucrativa"],
    
    breadcrumbLabel: "Plano de Negócios para Padarias",
    
    heroTitle: "Plano de Negócios para Padarias",
    heroSubtitle: "ECONOMICA Consultoria Empresarial Júnior",
    
    produtosPrincipais: "pães e doces",
    equipamentoPrincipal: "forno e batedeira",
    equipamentoSecundario: "batedeira",
    insumosPrincipais: "farinha, fermento e frios",
    caracteristicaSensorial: "cheiro de pão quente",
    
    exemploProdutoIconico: "croissant",
    exemploProcesso: "assar um pão",
    exemploAtmosfera: "balcão cheio de delícias",
    
    desafio1Titulo: "Alta Perecibilidade dos Produtos",
    desafio1Descricao: "Produtos de panificação têm vida útil curta, exigindo gestão precisa de estoque e produção.",
    desafio2Titulo: "Concorrência Intensa",
    desafio2Descricao: "Mercado saturado com muitos concorrentes, desde padarias artesanais até grandes redes.",
    desafio3Titulo: "Margens de Lucro Apertadas",
    desafio3Descricao: "Custos de insumos voláteis e necessidade de preços competitivos reduzem as margens.",
    
    beneficios: [
      {
        icon: "Target",
        titulo: "Planejamento Estratégico",
        descricao: "Defina objetivos claros e alcançáveis para sua padaria com metodologias comprovadas."
      },
      {
        icon: "BarChart3",
        titulo: "Análise Financeira Detalhada",
        descricao: "Projeções realistas de receitas, custos e rentabilidade para garantir a viabilidade do negócio."
      },
      {
        icon: "Users",
        titulo: "Estudo de Mercado",
        descricao: "Análise completa do mercado local, concorrência e perfil do cliente ideal."
      },
      {
        icon: "TrendingUp",
        titulo: "Projeções de Crescimento",
        descricao: "Estratégias de expansão e crescimento sustentável para sua padaria."
      }
    ],
    
    itensIncluidos: [
      "Análise de viabilidade econômica",
      "Definição de público-alvo e posicionamento",
      "Planejamento operacional completo",
      "Estratégias de marketing e vendas",
      "Projeções financeiras detalhadas (3-5 anos)",
      "Análise de investimento inicial necessário",
      "Plano de gestão e recursos humanos",
      "Indicadores de desempenho (KPIs)"
    ],
    
    custosExemplo1: {
      titulo: "Compras Impulsivas e Maquinário Inadequado",
      descricao: "Sem um plano que defina seu mix de produtos e volume de produção esperado, como saber qual o forno ideal? Você pode acabar comprando um equipamento caro demais para sua demanda inicial, comprometendo seu capital de giro, ou um pequeno demais, que se tornará um gargalo e limitará seu crescimento.",
      custoReal: "Dezenas de milhares de reais em equipamentos que não atendem sua necessidade, gerando endividamento ou a necessidade de uma nova compra em pouco tempo."
    },
    
    custosExemplo2: {
      titulo: "Desperdício Crônico de Insumos",
      descricao: "Qual a quantidade certa de farinha, fermento e frios para comprar? Sem uma projeção de vendas e um controle de CMV (Custo de Mercadoria Vendida), a compra é baseada em 'achismo'. O resultado é inevitável: prateleiras com produtos encalhados e ingredientes vencendo no estoque.",
      custoReal: "Um rombo mensal no seu fluxo de caixa. Um desperdício de 10% em um faturamento de R$ 30.000, por exemplo, significa R$ 3.000 jogados fora todos os meses."
    },
    
    detalhes: [
      {
        titulo: "O Cálculo Preciso do Capital de Giro",
        descricao: "Muitos empreendedores calculam apenas o investimento inicial: reforma, maquinário e estoque para a inauguração. Mas esquecem do oxigênio do negócio: o capital de giro. É o dinheiro necessário para cobrir os custos operacionais (salários, aluguel, fornecedores) até que a padaria comece a gerar lucro suficiente para se pagar.",
        solucao: "Ele projeta o fluxo de caixa mês a mês e calcula exatamente quanto você precisa ter em caixa para operar com segurança nos primeiros 6 a 12 meses, evitando o pesadelo de não ter dinheiro para pagar as contas."
      },
      {
        titulo: "Legislação Sanitária e Burocracias Específicas",
        descricao: "Uma padaria não é um negócio qualquer. Ela lida com alimentos, o que implica uma série de normas da ANVISA e da vigilância sanitária local. Isso inclui regras sobre manipulação, armazenamento, rotulagem de alergênicos e até a estrutura física da cozinha e do depósito.",
        solucao: "Ele mapeia todas as licenças, alvarás e adequações necessárias antes de você começar a obra ou a operação, evitando multas, interdições e a frustração de ter que refazer investimentos."
      },
      {
        titulo: "A Estratégia de Mix de Produtos e Engenharia de Cardápio",
        descricao: "Ter 50 tipos de produtos parece ótimo, mas será que todos são lucrativos? A 'Engenharia de Cardápio' é uma análise que cruza a popularidade de um item com sua margem de lucro. Alguns produtos vendem muito, mas dão pouco lucro (os 'burros de carga'), enquanto outros vendem pouco, mas são muito lucrativos (os 'quebra-cabeças').",
        solucao: "Ajuda a montar um cardápio inicial inteligente, destacando os produtos mais estratégicos (as 'estrelas') e definindo ações para melhorar o desempenho dos outros, garantindo que seu esforço de produção se converta em lucro máximo."
      },
      {
        titulo: "O Custo Real por Hora de Funcionamento",
        descricao: "Você sabe quanto custa manter sua padaria aberta por hora, mesmo que nenhum cliente entre? Somando aluguel, salários, energia, água, impostos e outros custos fixos, chega-se a um valor/hora. Saber esse número é vital para definir metas de venda e entender a real lucratividade do negócio.",
        solucao: "Ele calcula seu ponto de equilíbrio operacional (o faturamento mínimo para não ter prejuízo) e detalha esses custos, dando a você clareza sobre as metas que sua equipe precisa bater diariamente."
      },
      {
        titulo: "O Plano de Marketing de Inauguração (e Pós-Inauguração)",
        descricao: "'Vou abrir e os clientes virão pelo cheiro do pão'. Essa é uma aposta arriscada. Uma inauguração bem-sucedida exige um plano: ações nas redes sociais, parcerias com comércios locais, promoções de lançamento, um evento de abertura. Tão importante quanto, é preciso ter um plano para manter o movimento após a euforia inicial.",
        solucao: "Ele estrutura um plano de marketing com ações, cronograma e orçamento definidos para gerar buzz antes da abertura, garantir uma inauguração forte e criar estratégias de fidelização para construir uma clientela recorrente."
      }
    ]
  },
  
  // ==========================================================================
  // PIZZARIAS
  // ==========================================================================
  pizzarias: {
    id: "pizzarias",
    slug: "plano-de-negocios-para-pizzarias",
    
    nomeNegocio: "Pizzarias",
    nomeNegocioSingular: "pizzaria",
    nomeSetor: "pizzaria",
    
    metaTitle: "Plano de Negócios para Pizzarias | ECONOMICA Consultoria",
    metaDescription: "Plano de negócios completo para pizzarias com análise financeira, estudo de mercado e estratégias de crescimento. Consultoria especializada da UNICAMP.",
    metaKeywords: ["plano de negócios pizzaria", "abrir pizzaria", "consultoria pizzaria", "pizzaria lucrativa"],
    
    breadcrumbLabel: "Plano de Negócios para Pizzarias",
    
    heroTitle: "Plano de Negócios para Pizzarias",
    heroSubtitle: "ECONOMICA Consultoria Empresarial Júnior",
    
    produtosPrincipais: "pizzas artesanais",
    equipamentoPrincipal: "forno a lenha e masseira",
    equipamentoSecundario: "masseira",
    insumosPrincipais: "farinha, molho de tomate e queijos",
    caracteristicaSensorial: "aroma de pizza saindo do forno",
    
    exemploProdutoIconico: "pizza margherita",
    exemploProcesso: "fazer uma pizza",
    exemploAtmosfera: "cardápio variado de pizzas",
    
    desafio1Titulo: "Gestão de Ingredientes Frescos",
    desafio1Descricao: "Ingredientes de qualidade são essenciais, mas têm vida útil curta, exigindo gestão precisa de estoque.",
    desafio2Titulo: "Concorrência e Diferenciação",
    desafio2Descricao: "Mercado competitivo com muitas pizzarias, exigindo diferenciação clara no produto e atendimento.",
    desafio3Titulo: "Custos Operacionais Elevados",
    desafio3Descricao: "Custos com ingredientes premium, energia (forno) e mão de obra especializada impactam as margens.",
    
    beneficios: [
      {
        icon: "Target",
        titulo: "Planejamento Estratégico",
        descricao: "Defina objetivos claros e alcançáveis para sua pizzaria com metodologias comprovadas."
      },
      {
        icon: "BarChart3",
        titulo: "Análise Financeira Detalhada",
        descricao: "Projeções realistas de receitas, custos e rentabilidade para garantir a viabilidade do negócio."
      },
      {
        icon: "Users",
        titulo: "Estudo de Mercado",
        descricao: "Análise completa do mercado local, concorrência e perfil do cliente ideal."
      },
      {
        icon: "TrendingUp",
        titulo: "Projeções de Crescimento",
        descricao: "Estratégias de expansão e crescimento sustentável para sua pizzaria."
      }
    ],
    
    itensIncluidos: [
      "Análise de viabilidade econômica",
      "Definição de público-alvo e posicionamento",
      "Planejamento operacional completo",
      "Estratégias de marketing e vendas",
      "Projeções financeiras detalhadas (3-5 anos)",
      "Análise de investimento inicial necessário",
      "Plano de gestão e recursos humanos",
      "Indicadores de desempenho (KPIs)"
    ],
    
    custosExemplo1: {
      titulo: "Compras Impulsivas e Maquinário Inadequado",
      descricao: "Sem um plano que defina seu cardápio e volume de produção esperado, como saber qual o forno ideal? Você pode acabar comprando um forno a lenha caro demais para sua demanda inicial, comprometendo seu capital de giro, ou um elétrico pequeno demais, que se tornará um gargalo e limitará seu crescimento.",
      custoReal: "Dezenas de milhares de reais em equipamentos que não atendem sua necessidade, gerando endividamento ou a necessidade de uma nova compra em pouco tempo."
    },
    
    custosExemplo2: {
      titulo: "Desperdício Crônico de Insumos",
      descricao: "Qual a quantidade certa de queijo, molho de tomate e ingredientes frescos para comprar? Sem uma projeção de vendas e um controle de CMV (Custo de Mercadoria Vendida), a compra é baseada em 'achismo'. O resultado é inevitável: ingredientes vencendo no estoque e desperdício constante.",
      custoReal: "Um rombo mensal no seu fluxo de caixa. Um desperdício de 10% em um faturamento de R$ 40.000, por exemplo, significa R$ 4.000 jogados fora todos os meses."
    },
    
    detalhes: [
      {
        titulo: "O Cálculo Preciso do Capital de Giro",
        descricao: "Muitos empreendedores calculam apenas o investimento inicial: reforma, forno a lenha e estoque para a inauguração. Mas esquecem do oxigênio do negócio: o capital de giro. É o dinheiro necessário para cobrir os custos operacionais (salários, aluguel, fornecedores) até que a pizzaria comece a gerar lucro suficiente para se pagar.",
        solucao: "Ele projeta o fluxo de caixa mês a mês e calcula exatamente quanto você precisa ter em caixa para operar com segurança nos primeiros 6 a 12 meses, evitando o pesadelo de não ter dinheiro para pagar as contas."
      },
      {
        titulo: "Legislação Sanitária e Burocracias Específicas",
        descricao: "Uma pizzaria não é um negócio qualquer. Ela lida com alimentos, o que implica uma série de normas da ANVISA e da vigilância sanitária local. Isso inclui regras sobre manipulação, armazenamento, rotulagem de alergênicos e até a estrutura física da cozinha e do depósito.",
        solucao: "Ele mapeia todas as licenças, alvarás e adequações necessárias antes de você começar a obra ou a operação, evitando multas, interdições e a frustração de ter que refazer investimentos."
      },
      {
        titulo: "A Estratégia de Mix de Produtos e Engenharia de Cardápio",
        descricao: "Ter 30 sabores de pizza parece ótimo, mas será que todos são lucrativos? A 'Engenharia de Cardápio' é uma análise que cruza a popularidade de um item com sua margem de lucro. Alguns sabores vendem muito, mas dão pouco lucro (os 'burros de carga'), enquanto outros vendem pouco, mas são muito lucrativos (os 'quebra-cabeças').",
        solucao: "Ajuda a montar um cardápio inicial inteligente, destacando os sabores mais estratégicos (as 'estrelas') e definindo ações para melhorar o desempenho dos outros, garantindo que seu esforço de produção se converta em lucro máximo."
      },
      {
        titulo: "O Custo Real por Hora de Funcionamento",
        descricao: "Você sabe quanto custa manter sua pizzaria aberta por hora, mesmo que nenhum cliente entre? Somando aluguel, salários, energia (especialmente do forno), água, impostos e outros custos fixos, chega-se a um valor/hora. Saber esse número é vital para definir metas de venda e entender a real lucratividade do negócio.",
        solucao: "Ele calcula seu ponto de equilíbrio operacional (o faturamento mínimo para não ter prejuízo) e detalha esses custos, dando a você clareza sobre as metas que sua equipe precisa bater diariamente."
      },
      {
        titulo: "O Plano de Marketing de Inauguração (e Pós-Inauguração)",
        descricao: "'Vou abrir e os clientes virão pelo aroma da pizza'. Essa é uma aposta arriscada. Uma inauguração bem-sucedida exige um plano: ações nas redes sociais, parcerias com delivery, promoções de lançamento, um evento de abertura. Tão importante quanto, é preciso ter um plano para manter o movimento após a euforia inicial.",
        solucao: "Ele estrutura um plano de marketing com ações, cronograma e orçamento definidos para gerar buzz antes da abertura, garantir uma inauguração forte e criar estratégias de fidelização para construir uma clientela recorrente."
      }
    ]
  }
,

  farmacia: {
    id: "farmacia",
    slug: "plano-de-negocios-para-farmacia",
    
    nomeNegocio: "Farmácia",
    nomeNegocioSingular: "farmácia",
    nomeSetor: "saúde",
    
    metaTitle: "Plano de Negócios para Farmácia | ECONOMICA UNICAMP Especializada",
    metaDescription: "Garanta crescimento com um plano de negócios para farmácia da ECONOMICA. Viabilidade, licenças ANVISA/CRF, estoque controlado e projeção financeira. Solicite proposta.",
    metaKeywords: ["plano de negócios farmácia","abrir farmácia","consultoria farmácia"],
    
    breadcrumbLabel: "Plano de Negócios para Farmácia",
    
    heroTitle: "Plano de Negócios para farmácia: Transforme sua Ideia em Sucesso",
    heroSubtitle: "Consultoria especializada da UNICAMP",
    
    produtosPrincipais: "Produtos e serviços de farmácia",
    equipamentoPrincipal: "Equipamentos necessários",
    equipamentoSecundario: "Equipamentos complementares",
    insumosPrincipais: "Insumos principais",
    caracteristicaSensorial: "Características do negócio",
    
    exemploProdutoIconico: "Produto principal",
    exemploProcesso: "Processo característico",
    exemploAtmosfera: "Ambiente do negócio",
    
    desafio1Titulo: "Desafio Principal",
    desafio1Descricao: "Descrição do desafio",
    desafio2Titulo: "Segundo Desafio",
    desafio2Descricao: "Descrição do desafio",
    desafio3Titulo: "Terceiro Desafio",
    desafio3Descricao: "Descrição do desafio",
    
    beneficios: [
      {
            "icon": "Target",
            "titulo": "Planejamento Estratégico",
            "descricao": "Defina objetivos claros e alcançáveis"
      },
      {
            "icon": "BarChart3",
            "titulo": "Análise Financeira Detalhada",
            "descricao": "Projeções realistas de receitas e custos"
      },
      {
            "icon": "Users",
            "titulo": "Estudo de Mercado",
            "descricao": "Análise completa do mercado local"
      },
      {
            "icon": "TrendingUp",
            "titulo": "Projeções de Crescimento",
            "descricao": "Estratégias de expansão sustentável"
      }
],
    
    itensIncluidos: [
      "Análise de viabilidade econômica",
      "Definição de público-alvo e posicionamento",
      "Planejamento operacional completo",
      "Estratégias de marketing e vendas",
      "Projeções financeiras detalhadas (3-5 anos)",
      "Análise de riscos e contingências",
      "Plano de implementação com cronograma",
      "Acompanhamento pós-entrega"
],
    
    custosExemplo1: {
      "titulo": "Investimento Inicial Mal Planejado",
      "descricao": "Sem um plano detalhado, muitos empreendedores subestimam custos iniciais.",
      "custoReal": "Dezenas de milhares de reais em imprevistos"
},
    
    custosExemplo2: {
      "titulo": "Desperdício Operacional",
      "descricao": "Sem controle adequado, desperdícios podem comprometer a lucratividade.",
      "custoReal": "Perdas mensais significativas no fluxo de caixa"
},
    
    detalhes: [
      {
            "titulo": "Capital de Giro",
            "descricao": "Cálculo preciso do capital necessário para os primeiros meses de operação.",
            "solucao": "Projeção detalhada de fluxo de caixa para evitar surpresas"
      },
      {
            "titulo": "Legislação e Licenças",
            "descricao": "Mapeamento de todas as exigências legais específicas do setor.",
            "solucao": "Checklist completo de licenças e adequações necessárias"
      },
      {
            "titulo": "Estratégia de Precificação",
            "descricao": "Definição de preços que garantam competitividade e lucratividade.",
            "solucao": "Análise de custos e margem ideal para o negócio"
      }
]
  }
,

  adega: {
    id: "adega",
    slug: "plano-de-negocios-para-adega",
    
    nomeNegocio: "Adega",
    nomeNegocioSingular: "adega",
    nomeSetor: "alimentação",
    
    metaTitle: "Plano de Negócios para adega — ECONOMICA Consultoria",
    metaDescription: "Tenha um plano de negócios para adega que valide viabilidade, defina precificação, canais e compliance. Peça a ECONOMICA e reduza riscos. Solicite proposta.",
    metaKeywords: ["plano de negócios adega","abrir adega","consultoria adega"],
    
    breadcrumbLabel: "Plano de Negócios para Adega",
    
    heroTitle: "Plano de Negócios para adega: Transforme sua Ideia em Sucesso",
    heroSubtitle: "Consultoria especializada da UNICAMP",
    
    produtosPrincipais: "Produtos e serviços de adega",
    equipamentoPrincipal: "Equipamentos necessários",
    equipamentoSecundario: "Equipamentos complementares",
    insumosPrincipais: "Insumos principais",
    caracteristicaSensorial: "Características do negócio",
    
    exemploProdutoIconico: "Produto principal",
    exemploProcesso: "Processo característico",
    exemploAtmosfera: "Ambiente do negócio",
    
    desafio1Titulo: "Desafio Principal",
    desafio1Descricao: "Descrição do desafio",
    desafio2Titulo: "Segundo Desafio",
    desafio2Descricao: "Descrição do desafio",
    desafio3Titulo: "Terceiro Desafio",
    desafio3Descricao: "Descrição do desafio",
    
    beneficios: [
      {
            "icon": "Target",
            "titulo": "Planejamento Estratégico",
            "descricao": "Defina objetivos claros e alcançáveis"
      },
      {
            "icon": "BarChart3",
            "titulo": "Análise Financeira Detalhada",
            "descricao": "Projeções realistas de receitas e custos"
      },
      {
            "icon": "Users",
            "titulo": "Estudo de Mercado",
            "descricao": "Análise completa do mercado local"
      },
      {
            "icon": "TrendingUp",
            "titulo": "Projeções de Crescimento",
            "descricao": "Estratégias de expansão sustentável"
      }
],
    
    itensIncluidos: [
      "Análise de viabilidade econômica",
      "Definição de público-alvo e posicionamento",
      "Planejamento operacional completo",
      "Estratégias de marketing e vendas",
      "Projeções financeiras detalhadas (3-5 anos)",
      "Análise de riscos e contingências",
      "Plano de implementação com cronograma",
      "Acompanhamento pós-entrega"
],
    
    custosExemplo1: {
      "titulo": "Investimento Inicial Mal Planejado",
      "descricao": "Sem um plano detalhado, muitos empreendedores subestimam custos iniciais.",
      "custoReal": "Dezenas de milhares de reais em imprevistos"
},
    
    custosExemplo2: {
      "titulo": "Desperdício Operacional",
      "descricao": "Sem controle adequado, desperdícios podem comprometer a lucratividade.",
      "custoReal": "Perdas mensais significativas no fluxo de caixa"
},
    
    detalhes: [
      {
            "titulo": "Capital de Giro",
            "descricao": "Cálculo preciso do capital necessário para os primeiros meses de operação.",
            "solucao": "Projeção detalhada de fluxo de caixa para evitar surpresas"
      },
      {
            "titulo": "Legislação e Licenças",
            "descricao": "Mapeamento de todas as exigências legais específicas do setor.",
            "solucao": "Checklist completo de licenças e adequações necessárias"
      },
      {
            "titulo": "Estratégia de Precificação",
            "descricao": "Definição de preços que garantam competitividade e lucratividade.",
            "solucao": "Análise de custos e margem ideal para o negócio"
      }
]
  }
};

// ============================================================================
// FUNÇÃO AUXILIAR PARA OBTER CONFIGURAÇÃO DE NICHO
// ============================================================================

export const getNichoConfig = (nichoId: string): NichoConfig | undefined => {
  return nichosConfig[nichoId];
};

export const getAllNichos = (): NichoConfig[] => {
  return Object.values(nichosConfig);
};
