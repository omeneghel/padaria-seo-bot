import { adega } from './nichos/plano-de-negocios-para-adega';
import { minimercado } from './nichos/plano-de-negocios-para-minimercado';

export interface NichoConfig {
  // ===== IDENTIFICAÇÃO =====
  id: string;
  slug: string;
  
  // ===== SEO & META TAGS =====
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  
  // ===== HERO SECTION =====
  heroTitle: string;
  heroSubtitle: string;
  breadcrumbLabel: string;
  
  // ===== ESTRUTURA ANTIGA (opcional - para retrocompatibilidade) =====
  nomeNegocio?: string;
  nomeNegocioSingular?: string;
  nomeSetor?: string;
  produtosPrincipais?: string;
  equipamentoPrincipal?: string;
  equipamentoSecundario?: string;
  insumosPrincipais?: string;
  caracteristicaSensorial?: string;
  exemploProdutoIconico?: string;
  exemploProcesso?: string;
  exemploAtmosfera?: string;
  desafio1Titulo?: string;
  desafio1Descricao?: string;
  desafio2Titulo?: string;
  desafio2Descricao?: string;
  desafio3Titulo?: string;
  desafio3Descricao?: string;
  custosExemplo1?: {
    titulo: string;
    descricao: string;
    custoReal: string;
  };
  custosExemplo2?: {
    titulo: string;
    descricao: string;
    custoReal: string;
  };
  
  // ===== INTRODUÇÃO =====
  introducaoH3?: string;
  introducaoP1?: string;
  introducaoP2?: string;
  
  // ===== BENEFÍCIOS =====
  beneficiosH3?: string;
  beneficios: Array<{
    icon?: string;
    titulo: string;
    descricao: string;
  }>;
  
  // ===== CUSTOS =====
  custosH3?: string;
  custosIntroducao?: string[];
  custos?: Array<{
    titulo: string;
    descricao: string;
    custoReal: string;
  }>;
  custosConclusao?: string[];
  
  // ===== DETALHES =====
  detalhesH3?: string;
  detalhesIntroducao?: string[];
  detalhes: Array<{
    titulo: string;
    descricao: string;
    solucao: string;
  }>;
  detalhesConclusao?: string[];
  
  // ===== ITENS INCLUÍDOS =====
  itensIncluidosH3?: string;
  itensIncluidos: string[];
  
  // ===== FAQ =====
  faqH3?: string;
  faq?: Array<{
    pergunta: string;
    resposta: string;
  }>;
  
  // ===== CTA =====
  ctaH3?: string;
  ctaP1?: string;
  ctaBotao?: string;
}

const nichos = {
  adega,
  minimercado
,
  restaurante: {
      id: "restaurante",
      slug: "plano-de-negocios-para-restaurante",
      
      // SEO
      metaTitle: "Plano de Negócios para Restaurante | ECONOMICA UNICAMP",
      metaDescription: "Garanta a viabilidade e estratégia do seu restaurante com um plano de negócios detalhado da ECONOMICA. Solicite uma proposta e proteja seu investimento hoje.",
      metaKeywords: ["plano de negócios para restaurante","viabilidade restaurante","estratégia restaurante","plano financeiro restaurante","consultoria restaurante","precificação restaurante"],
      
      // HERO
      heroTitle: "Plano de Negócios para restaurante: Transforme sua Ideia em Sucesso",
      heroSubtitle: "Plano de negócios para restaurante completo: viabilidade, estratégia e gestão com a ECONOMICA",
      breadcrumbLabel: "Plano de Negócios para restaurante",
      
      // INTRODUÇÃO
      introducaoH3: "Por que um Plano de Negócios é Essencial para restaurante?",
      introducaoP1: "O mercado de restaurante é altamente competitivo e sujeito a margens apertadas; um plano de negócios para restaurante atua como roteiro estratégico que valida viabilidade, define modelo de receitas, política de preços e governança. Com mais de 30 anos de experiência da ECONOMICA, transformamos ideias em negócios sustentáveis e escaláveis.",
      introducaoP2: "Abrir um restaurante sem planejamento é expor capital a riscos previsíveis: falhas no modelo de negócio, preços inadequados e gestão financeira fragilizada. Um plano bem estruturado testa viabilidade financeira e reduz chances de erro nas decisões estratégicas.",
      
      // BENEFÍCIOS
      beneficiosH3: "O Que Você Ganha com Nosso Plano de Negócios",
      beneficios: [
      { titulo: "Planejamento Estratégico", descricao: "Definição de objetivos claros, posicionamento competitivo e roadmap estratégico com metodologias comprovadas." },
      { titulo: "Análise Financeira Detalhada", descricao: "Projeções realistas de faturamento, custos e rentabilidade que permitem decisões financeiras seguras." },
      { titulo: "Estudo de Mercado", descricao: "Análise completa do mercado de restaurante, mapa competitivo e perfil do cliente ideal (ICP)." },
      { titulo: "Projeções de Crescimento", descricao: "Estratégias de expansão e escalabilidade orientadas por KPIs e indicadores financeiros sustentáveis." }
    ],
      
      // CUSTOS
      custosH3: "O Custo de Não Ter um Plano de Negócios para restaurante",
      custosIntroducao: [
      "Abrir um restaurante é o sonho de muitos empreendedores, mas paixão e bom paladar não bastam. Sem planejamento estratégico e gestão empresarial, iniciativas promissoras enfrentam decisões reativas, margens comprimidas e falhas no modelo de negócio. A falta de definição clara sobre fontes de receita, política de preços e canais de captação transforma oportunidades em riscos financeiros e operacionais. Gestão frágil, previsões imprecisas e ausência de indicadores dificultam ajustes rápidos e aumentam a probabilidade de insucesso. Investir em um plano de negócios para restaurante significa mapear mercado, testar hipóteses e criar um roteiro de execução que preserva capital e potencializa resultados.",
      "Muitos empreendedores encaram o planejamento como gasto evitável — uma falsa economia. Navegar sem plano é arriscar o capital investido e desperdiçar tempo com tentativas e erros. Um diagnóstico financeiro e um modelo de receitas bem construído mostram o ponto de equilíbrio, necessidade de capital de giro e fontes de receita reais antes da abertura. Assim, decisões sobre preços, mix de ofertas e canais de vendas deixam de ser suposições e passam a ser escolhas embasadas.",
      "A seguir listamos custos invisíveis e concretos de abrir e operar um restaurante sem planejamento: impactos estratégicos, financeiros, de mercado, regulatórios e de crescimento. Esteja atento: prevenir é sempre mais barato que remediar."
    ],
      custos: [
      { titulo: "Precificação e Modelo de Receitas Equivocados", descricao: "Uma estratégia de precificação mal definida compromete margem e sustentabilidade. Em restaurantes, decidir preço por intuição leva a ofertas que não cobrem custos variáveis nem contribuem para custos fixos. Como você definirá preços para delivery, balcão, eventos ou combos? Quais serão as fontes de receita recorrente e como o modelo considera sazonalidade e canais digitais? Sem um mapeamento do mix de vendas e elasticidade de preço, promoções podem canibalizar marginas e clientes de alto valor podem ser perdidos. Um plano de negócios para restaurante modela receitas por canal, testa hipóteses de preço e projeta margens por item, permitindo entender o impacto de cada decisão comercial. Também define políticas de descontos, parcerias e ofertas corporativas de maneira alinhada ao posicionamento de mercado.", custoReal: "Uma política de preços 15% abaixo do necessário pode reduzir margem e transformar R$ 50.000 mensais previstos em R$ 7.500 a menos de lucro, comprometendo o caixa e a viabilidade do negócio." },
      { titulo: "Fluxo de Caixa e Capital de Giro Insuficientes", descricao: "Problemas de gestão financeira são entre as principais causas de fechamento de restaurantes. Subestimar custos fixos (aluguéis, tributos, folha) e variáveis (insumos, embalagens, comissões) compromete o fluxo de caixa. Quanto tempo levará para o negócio atingir o ponto de equilíbrio? Qual capital de giro cobre sazonalidade e prazos de pagamento de fornecedores? Sem projeções robustas, faltará caixa para comprar insumos, honrar folhas e manter investimentos em aquisição de clientes. O plano de negócios inclui projeções mensais, cenários pessimista, provável e otimista, e simula impactos de variações no ticket médio e taxa de ocupação. Também define políticas de crédito a clientes corporativos e gestão de contas a pagar e a receber para evitar gargalos.", custoReal: "Um erro de 20% na estimativa de capital de giro pode gerar um rombo: se precisar de R$ 150.000 para 6 meses, uma subestimativa leva a faltar R$ 30.000, resultando em atrasos, trocas forçadas de fornecedores ou endividamento emergencial." },
      { titulo: "Alvo de Mercado e Posicionamento Mal Definidos", descricao: "Atender o público errado ou não diferenciar oferta reduz tráfego e ticket médio. Restaurantes que não definem claramente ICP, proposta de valor e canais de aquisição acabam com comunicação difusa e baixa conversão. Que segmentos você pretende atingir — almoço executivo, jovem urbano, delivery familiar, alta gastronomia? Cada escolha exige estratégia distinta de preço, carta, comunicação e parcerias. Sem isso, campanhas em redes sociais ou plataformas de delivery são dispersas e custosas. Um plano de negócios para restaurante mapeia TAM/SAM/SOM, constrói personas, analisa concorrência direta e indireta e desenha funis de aquisição por canal. Isso orienta investimentos em marketing, promoções e alocação de comissionamento em marketplaces.", custoReal: "Atender o público errado pode reduzir faturamento em até 40% nos primeiros 12 meses; em um restaurante projetado para faturar R$ 200.000/ano, isso significa R$ 80.000 a menos e risco real de interrupção." },
      { titulo: "Multas e Interdições por Falta de Conformidade", descricao: "A conformidade regulatória é crítica no setor de alimentação. Não planejar licenças e requisitos pode resultar em multas, interdições e custos de adequação emergencial. Órgãos como ANVISA e a Vigilância Sanitária municipal fiscalizam boas práticas de manipulação e higiene, baseadas por exemplo na RDC ANVISA nº 216/2004. O Corpo de Bombeiros exige o Auto de Vistoria do Corpo de Bombeiros (AVCB) para segurança contra incêndios. A Prefeitura emite o Alvará de Funcionamento e a Secretaria Municipal de Fazenda exige registro municipal e pagamento de tributos como ISS em alguns casos. Além disso, normas trabalhistas (CLT), obrigações previdenciárias (INSS/FGTS) e exigências fiscais da Receita Federal e da Prefeitura impactam a operação. Sem um mapeamento prévio, adequações de última hora têm custo elevado e interrompem vendas. Planejar garante prazos e orçamento para atender exigências legais.", custoReal: "Multas e interdições podem facilmente somar dezenas de milhares de reais; uma adaptação emergencial e o pagamento de multas pode ultrapassar R$ 50.000 e interromper operações por semanas." },
      { titulo: "Crescimento Desordenado e Processos Fragilizados", descricao: "Crescer sem processos documentados e indicadores leva a perda de qualidade e aumento de custos. A expansão de serviços ou a adoção intensa de delivery exige controles claros de padrão, treinamento, fornecedores confiáveis e KPIs. Sem metas e governança, a rotatividade de equipe aumenta e o cliente percebe inconsistência. O plano de negócios antecipa necessidades de governança, define organograma, políticas de contratação, indicadores operacionais (ticket médio, custo por cliente atendido, taxa de recompra) e processos replicáveis. Isso permite escalar de forma controlada, preservando margem e experiência do cliente.", custoReal: "Crescimento desordenado pode elevar custos operacionais em até 25%; em um faturamento mensal de R$ 120.000, isso representa R$ 30.000 a mais em despesas e queda expressiva na rentabilidade." }
    ],
      custosConclusao: [
      "Investir em consultoria para elaborar um plano de negócios para restaurante é, na prática, economizar capital. A análise estratégica e financeira evita decisões onerosas, reduz riscos regulatórios e define caminhos para crescimento sustentável. A ECONOMICA traz metodologia acadêmica aplicada à prática do setor, validando modelos de receitas, pontos de equilíbrio e estratégias de precificação antes de comprometer recursos. Assim, o valor investido se paga por meio da exposição reduzida a riscos e do aumento de eficiência na captação de clientes e na gestão financeira.",
      "Não se pergunte quanto custa fazer um plano. Pergunte-se: quanto me custará não ter um?"
    ],
      
      // DETALHES
      detalhesH3: "5 Detalhes Cruciais que Muitos Empreendedores de restaurante Esquecem",
      detalhesIntroducao: [
      "Ter paixão pela cozinha e domínio técnico não substitui gestão empresarial. Muitos profissionais são surpreendidos por lacunas estratégicas: ausência de projeções financeiras robustas, falta de segmentação clara de clientes, controle de custos impreciso, conformidade regulatória incompleta e ausência de processos escaláveis. Esses detalhes, invisíveis no dia a dia operacional, afetam precificação, negociação com fornecedores e a capacidade de responder a mudanças de mercado. Ignorá-los torna mais provável que um negócio rentável na prática se torne financeiramente insustentável.",
      "Esses pontos vão além da operação técnica: influenciam decisões de posicionamento, quantificam riscos e definem prioridades de investimento. Planejamento e gestão sistemática são a diferença entre sobreviver com margens baixas e prosperar com crescimento sustentável. O plano de negócios organiza esses elementos e transforma conhecimento técnico em decisões empresariais estruturadas."
    ],
      detalhes: [
      { titulo: "O Cálculo Preciso do Capital de Giro", descricao: "Capital de giro é o recurso necessário para que o restaurante opere entre receitas e pagamentos. Não é só investimento inicial; é capital que cobre estoques, folha, tributos, comissões de plataformas e prazos de fornecedores até que o negócio gere fluxo positivo. Restaurantes enfrentam sazonalidade, variações de demanda por dia da semana e ciclos de compras que exigem caixa para manter operação sem rupturas. Ignorar estoques e prazos médios de pagamento resulta em falta de insumos, perda de vendas e necessidade de crédito emergencial com custos altos. Um cálculo robusto quantifica meses necessários para atravessar o início e os piores cenários.", solucao: "O plano de negócios projeta fluxo de caixa mensal detalhado por 6 a 12 meses, considerando sazonalidade, prazos de fornecedores, comissões de canais e folha. Isso define capital de giro necessário, estratégias de negociação com fornecedores e políticas de reserva financeira para variações de demanda." },
      { titulo: "Licenças, Normas e Vigilância Sanitária", descricao: "Restaurantes precisam cumprir normas específicas de segurança alimentar e funcionamento. A ANVISA, por meio da RDC nº 216/2004, estabelece boas práticas para serviços de alimentação. Vigilâncias Sanitárias municipais exigem cadastro, plantões de inspeção e controle de manipulação. O Corpo de Bombeiros solicita o Auto de Vistoria do Corpo de Bombeiros (AVCB) conforme risco de incêndio. A Prefeitura exige Alvará de Funcionamento e inscrição municipal; a Secretaria da Fazenda ou Tributação local define tributos e regimes fiscais aplicáveis. Além disso, obrigações trabalhistas (CLT), previdenciárias e ambientais podem incidir dependendo do serviço oferecido. Desconhecimento desses requisitos gera multas e paralisação.", solucao: "No plano, mapeamos todas as licenças, prazos e custos de adequação por etapa de implementação, com responsabilidades e cronograma. Assim o empreendedor agenda vistorias, adaptações e orçamento antes da abertura, evitando surpresas e interrupções." },
      { titulo: "Mix de Produtos e Estratégia de Receitas", descricao: "Definir quais ofertas ter no cardápio vai além de gosto: é decisão de modelo de negócio. O mix deve cruzar demanda local, margem por item e capacidade operacional. Itens com baixa margem podem ser complementados por bebidas, sobremesas ou serviços adicionais (eventos, catering) para aumentar ticket médio. Também é preciso avaliar canais: consumo no local, takeaway, delivery e refeições por assinatura corporativa impactam preparo, embalagem e preços. Sem essa análise, itens populares podem drenar margem e gerar desperdício.", solucao: "O plano realiza análise de rentabilidade por item, testa combos e canais, e define um portfólio inicial focado em margem e volume. Prioriza ofertas que sustentem custos fixos e permitam ajustes rápidos conforme demanda." },
      { titulo: "O Custo Real por Unidade de Operação", descricao: "Conhecer o custo por cliente atendido ou por venda é essencial para precificar corretamente. Soma-se custo dos insumos, embalagens, comissões de plataforma, energia, proporcionalidade da folha e rateio dos custos fixos. Só assim é possível calcular margem real e ponto de equilíbrio. Muitos gestores usam estimativas vagas e descobrem tarde que o ticket médio necessário é muito superior ao praticado. Esse indicador permite decisões sobre promoções, preços e quantidade de atendimentos diários necessários para cobrir despesas.", solucao: "O plano calcula o custo operacional por unidade relevante (por cliente, por pedido ou por dia), estabelece ponto de equilíbrio e metas de faturamento diárias e mensais, fornecendo metas claras de desempenho financeiro." },
      { titulo: "O Plano de Marketing e Aquisição de Clientes", descricao: "A presença digital e parcerias definem fluxo de clientes. Canais típicos para restaurantes incluem redes sociais, SEO local, marketplaces de delivery, parcerias corporativas e programas de fidelidade. Cada canal tem custo por aquisição distinto e impactos na margem (taxas de plataformas, descontos). Sem um plano de marketing, investimentos são dispersos e sem mensuração de retorno. Estratégias mal calibradas podem atrair clientes que não são lucrativos ou criar dependência de marketplaces caros.", solucao: "O plano estrutura um mix de canais com cronograma, orçamento e metas de aquisição, além de métricas de conversão e ROI por canal. Isso garante fluxo constante de clientes desde a abertura, com controle de custos de aquisição." }
    ],
      detalhesConclusao: [
      "Esses cinco pontos são apenas a ponta do iceberg. Gerir um restaurante com sucesso exige transformar conhecimento técnico em decisões estratégicas, financeiras e regulatórias. O plano de negócios é a ferramenta que organiza esse conhecimento, criando um roteiro replicável e orientado a resultados."
    ],
      
      // ITENS INCLUÍDOS
      itensIncluidosH3: "O Que Está Incluído no Seu Plano de Negócios",
      itensIncluidos: [
      "Análise de viabilidade econômica específica para restaurante",
      "Definição de público-alvo e posicionamento no mercado de restaurante",
      "Planejamento operacional completo adaptado para restaurante",
      "Estratégias de marketing e aquisição de clientes para restaurante",
      "Projeções financeiras detalhadas (3-5 anos) para restaurante",
      "Análise de investimento inicial necessário para restaurante",
      "Plano de gestão e recursos humanos para restaurante",
      "Indicadores de desempenho (KPIs) específicos para restaurante"
    ],
      
      // FAQ (vazio - LLM não gera)
      faqH3: "Perguntas Frequentes",
      faq: [],
      
      // CTA
      ctaH3: "Pronto para Transformar restaurante em um Sucesso?",
      ctaP1: "Entre em contato conosco e solicite seu plano de negócios personalizado para restaurante.",
      ctaBotao: "Solicitar Plano de Negócios"
    }
,
  ótica: {
      id: "ótica",
      slug: "plano-de-negocios-para-otica",
      
      // SEO
      metaTitle: "Plano de Negócios para Ótica - ECONOMICA Consultoria UNICAMP",
      metaDescription: "Plano de negócios para ótica: viabilidade, modelo de receitas, precificação, captação de clientes e compliance. Solicite seu plano personalizado ECONOMICA.",
      metaKeywords: ["plano de negócios para ótica","plano para ótica","viabilidade ótica","consultoria ótica","estratégia para ótica","modelo de receitas ótica"],
      
      // HERO
      heroTitle: "Plano de Negócios para ótica: transforme conhecimento técnico em negócio lucrativo",
      heroSubtitle: "Obtenha um plano de negócios para ótica estratégico e personalizado pela ECONOMICA — viabilidade, precificação, receitas e conformidade",
      breadcrumbLabel: "Plano de Negócios para ótica",
      
      // INTRODUÇÃO
      introducaoH3: "Por que um Plano de Negócios é Essencial para ótica?",
      introducaoP1: "Um plano de negócios para ótica é a base que separa iniciativas promissoras de empreendimentos que estagnam. Em um setor competitivo e regulado, estratégia é vantagem: definição de modelo de receitas, posicionamento de mercado, precificação e gestão financeira são decisivos. Com mais de 30 anos de experiência da ECONOMICA, oferecemos planejamento estratégico que transforma expertise técnica em resultado econômico sustentável.",
      introducaoP2: "Abrir uma ótica sem plano é assumir riscos altos: falhas na viabilidade financeira, modelo de negócio mal definido e ausência de estratégia de captação de clientes podem comprometer a operação. O plano testa se a atividade fecha as contas e define caminhos para gerar lucro e reduzir incertezas.",
      
      // BENEFÍCIOS
      beneficiosH3: "O Que Você Ganha com Nosso Plano de Negócios",
      beneficios: [
      { titulo: "Planejamento Estratégico", descricao: "Definição de objetivos claros, roadmap e decisões estratégicas alinhadas ao mercado óptico." },
      { titulo: "Análise Financeira Detalhada", descricao: "Projeções realistas de receitas, custos, margem e ponto de equilíbrio para sua ótica." },
      { titulo: "Estudo de Mercado", descricao: "Mapa de concorrência, TAM/SAM/SOM e perfil do cliente ideal para tomadas de decisão." },
      { titulo: "Projeções de Crescimento", descricao: "Cenários e estratégias de expansão com indicadores para crescimento sustentável." }
    ],
      
      // CUSTOS
      custosH3: "O Custo de Não Ter um Plano de Negócios para ótica",
      custosIntroducao: [
      "Iniciar uma ótica é o sonho de muitos empreendedores; paixão e conhecimento técnico são imprescindíveis, mas insuficientes. Sem planejamento estratégico e gestão sólida, desafios de mercado, fluxo de caixa e posicionamento podem rapidamente consumir capital. A falta de clareza sobre modelo de receitas, precificação e captação de clientes gera decisões reativas e desperdício. Para quem busca sustentabilidade, é essencial transformar técnica em gestão: o plano de negócios atua como mapa e freio contra erros que comprometem a operação e a lucratividade.",
      "Muitos enxergam o planejamento como custo dispensável e preferem investir direto em operação. Porém, navegar sem um plano é arriscar o capital investido e o futuro do negócio. Um diagnóstico mal feito sobre viabilidade financeira ou público-alvo resulta em estoques desalinhados, margens insuficientes e incapacidade de alcançar o ponto de equilíbrio no prazo projetado. Planejar é proteger o investimento e garantir que cada real aplicado contribua para o retorno esperado.",
      "A seguir, detalhamos custos invisíveis mas reais de não ter um plano: erros estratégicos, rombos financeiros, posicionamento equivocado, falhas de conformidade e crescimento desordenado. Esteja atento; entender esses custos é o primeiro passo para evitá-los."
    ],
      custos: [
      { titulo: "Precificação e modelo de receitas inadequados", descricao: "Um erro estratégico recorrente em óticas é não definir com precisão o modelo de receitas e a estratégia de precificação. Sem um plano, muitas óticas adotam preços baseados apenas na intuição ou por comparação superficial com concorrentes, ignorando custos indiretos, mix de produtos e elasticidade da demanda. Como consequência, margens ficam comprimidas e promoções frequentes corroem a lucratividade. O plano de negócios analisa quais fontes de receita serão priorizadas — venda de armações, lentes com tratamentos, serviços de adaptação e manutenção, parcerias com planos de saúde ou convênios empresariais — e estabelece política de preços que proteja margem e competitividade. Definimos estratégias de preço por segmento de cliente (premium, popular, institucional), analisamos sensibilidade ao preço e indicamos táticas de cross-selling e bundles que elevem o ticket médio. Pergunte-se: minha precificação cobre todos os custos e garante margem compatível com o risco do negócio? Sem resposta estruturada, decisões reativas podem arruinar resultados.", custoReal: "Erro de precificação que reduz margem em 10% pode significar prejuízo de dezenas de milhares de reais ao ano; dependendo do faturamento, a perda pode superar R$ 50.000 em 12 meses." },
      { titulo: "Fluxo de caixa e capital de giro insuficientes", descricao: "A gestão financeira inadequada é uma das principais causas de fechamento no setor óptico. Muitas óticas subestimam o capital de giro necessário para suportar prazos de pagamento a fornecedores, sazonalidade de vendas e ciclos de produção de lentes. Sem projeções de fluxo de caixa, o empreendedor enfrenta falta de liquidez para repor estoques estratégicos ou aproveitar oportunidades comerciais. O plano de negócios detalha projeções de receita por produto/serviço, separa custos fixos e variáveis, e define políticas de estoque e prazo com fornecedores. Indicamos níveis seguros de capital de giro para 6–12 meses, planos de contingência e mecanismos de financiamento se necessário. Além disso, calculamos o ponto de equilíbrio mensal e trimestral, mostrando quando o negócio passará a sustentar seus custos operacionais. A falta dessa visão causa atrasos em pagamentos, perda de credibilidade com fornecedores e dificuldades para investimentos graduais.", custoReal: "Um erro de 20% na projeção de vendas pode gerar um rombo de R$ 30.000 a R$ 100.000 em capital de giro nos primeiros 12 meses, dependendo da escala do negócio." },
      { titulo: "Posicionamento e público-alvo mal definidos", descricao: "Atender o público errado ou não comunicar claramente a proposta de valor é um custo oculto que afeta diretamente o faturamento. Óticas que não segmentam clientes — por exemplo, confundir público premium com demanda de baixo custo — acabam com campanhas ineficazes, mix de produtos desalinhado e baixa taxa de conversão. O plano de negócios identifica o cliente ideal, desenvolve personas e traça o mapa competitivo para posicionamento claro. Avaliamos canais de aquisição adequados ao público específico: parcerias com empresas e planos de saúde, campanhas digitais segmentadas, redes sociais com conteúdo técnico ou ações locais de educação ocular. Também definimos como diferenciar a oferta (ex.: serviços de adaptometry, garantia estendida, programas de fidelidade) para reduzir sensibilidade ao preço. Sem esse direcionamento, investimentos em marketing geram baixo retorno e o custo de aquisição por cliente dispara.", custoReal: "Atender o público errado pode reduzir faturamento em 30% a 60% versus um posicionamento correto, resultando em queda significativa de receita e tempo de recuperação." },
      { titulo: "Não conformidade regulatória e riscos legais", descricao: "A ausência de planejamento sobre conformidade expõe a ótica a multas, interdições e perda de credibilidade. No Brasil, além do alvará de funcionamento municipal, estabelecimentos que comercializam produtos e serviços ligados à saúde ocular devem observar normas da ANVISA, requisitos da Vigilância Sanitária estadual/municipal e normas técnicas aplicáveis (ABNT) para acondicionamento e rotulagem. É fundamental também garantir responsabilidade técnica por profissional habilitado — optometrista ou oftalmologista — quando aplicável, e manter documentação de controle de lotes e fornecedores de insumos ópticos. O plano de negócios identifica todas as licenças necessárias, prazos de renovação, obrigações de registro e rotinas de compliance que evitam autuações. Sem esse mapeamento, o empreendedor pode sofrer autuações que interrompem atividades e geram custos emergenciais de adequação. Pergunte-se: sua ótica está preparada para auditorias e inspeções regulatórias? Planejamento prévio evita sanções e protege o negócio.", custoReal: "Multas e adequações emergenciais por não conformidade podem variar de R$ 10.000 a mais de R$ 150.000, além do custo indireto de interdição temporária das atividades." },
      { titulo: "Crescimento desordenado e falta de processos", descricao: "Crescer sem processos claros e indicadores é risco que muitas óticas pagam caro. Expansão rápida sem padronização resulta em perda de qualidade no atendimento, aumento de retrabalho e dificuldades em manter margem. A falta de organograma, funções definidas e indicadores (KPIs) impede delegação eficiente e dificulta a tomada de decisão baseada em dados. O plano de negócios inclui definição de processos críticos — vendas, atendimento clínico, gestão de estoques e relacionamento com fornecedores — e indicadores para monitorar desempenho. Também aborda estrutura de governança, gaps de equipe e necessidades de treinamento. Com processos escassos, a escala se torna ineficiente, aumentando custos operacionais e reduzindo satisfação do cliente.", custoReal: "Crescimento desordenado pode reduzir margem operacional em 5–15%, implicando perdas mensais significativas e custos extras de reorganização que superam dezenas de milhares de reais." }
    ],
      custosConclusao: [
      "O investimento em consultoria e elaboração de um plano de negócios para ótica é pequeno frente aos prejuízos evitados. Com planejamento estratégico, viabilidade financeira validada e mapeamento de riscos regulatórios, você protege capital, define rotas para crescimento sustentável e reduz incertezas. A ECONOMICA traz metodologia aplicada ao setor óptico para estruturar modelo de receitas, precificação, canais de aquisição e indicadores de desempenho, transformando conhecimento técnico em negócio rentável. Solicite uma avaliação e minimize erros que comprometem seu investimento.",
      "Não se pergunte quanto custa fazer um plano. Pergunte-se: quanto me custará não ter um?"
    ],
      
      // DETALHES
      detalhesH3: "5 Detalhes Cruciais que Muitos Empreendedores de ótica Esquecem",
      detalhesIntroducao: [
      "Paixão e habilidade técnica em ótica não bastam para garantir sustentabilidade. A gestão empresarial esconde detalhes estratégicos e financeiros que podem sabotar até o profissional mais competente: cálculos de capital de giro mal feitos, ausência de estratégia de receitas, lacunas regulatórias, mix de produtos desalinhado e falta de processos escaláveis. Esses elementos exigem análise estruturada e projeções reais para evitar decisões reativas que consomem recursos.",
      "Esses pormenores vão além da operação técnica e definem se a ótica vai sobreviver ou prosperar. Planejamento e gestão transformam riscos em oportunidades: identificar margem por produto, mapear licenças obrigatórias, montar portfólio rentável e desenhar jornada de aquisição de clientes são ações que determinam o sucesso."
    ],
      detalhes: [
      { titulo: "O Cálculo Preciso do Capital de Giro", descricao: "Capital de giro é o recurso necessário para manter a operação até que as receitas sustentem os custos. Em ótica, isso envolve ciclos de compra de armações e lentes, prazos de pagamento a fornecedores e sazonalidade nas vendas. Subestimar o capital de giro resulta em falta de liquidez para repor itens estratégicos ou oferecer prazos a clientes institucionais. O plano de negócios detalha entradas e saídas previstas, identifica picos de demanda e define reserva financeira para garantir operação por 6–12 meses. Também considera políticas de negociação com fornecedores, descontos por volume e alternativas de financiamento quando necessário.", solucao: "Com o plano, projetamos fluxo de caixa mês a mês, simulando cenários conservador, provável e otimista para 6–12 meses. Isso permite calcular o capital de giro necessário, estabelecer linhas de crédito estratégicas e definir políticas de compras que minimizem ruptura de estoque sem imobilizar capital excessivo." },
      { titulo: "Licenças, Vigilância e Normas Aplicáveis", descricao: "Conformidade legal é requisito para operar. Óticas devem observar alvará de funcionamento municipal, registro e exigências da Vigilância Sanitária local e normas da ANVISA quando aplicável a produtos e procedimentos. Há necessidade de documentação sobre fornecedores de lentes e tratamentos, rotulagem correta, preservação de lotes e, em muitos casos, responsabilidade técnica por profissional habilitado. Falhas de conformidade geram autuações, multas ou interdição temporária. O plano de negócios mapeia todas as exigências regulatórias, prazos de renovação e adequações físicas e documentais, reduzindo surpresas posteriores.", solucao: "Elaboramos checklist regulatório específico para sua ótica, incluindo prazos e responsáveis por cada etapa de adequação. Antecipamos exigências de vigilância, orientamos sobre documentação de fornecedores e definimos políticas internas de controle para manter conformidade contínua." },
      { titulo: "Mix de Produtos e Serviços Estratégico", descricao: "Definir o portfólio inicial é decisão crítica: escolher armações, lentes com tratamentos, óculos prontos, serviços de adaptação, manutenção e parcerias influencia margem e ticket médio. O mix deve cruzar demanda local, margem por SKU e capacidade de entrega. Ofertas com baixa rotatividade corroem capital; produtos de alta margem mal divulgados perdem potencial. O plano de negócios ajuda a priorizar categorias com maior retorno e identificar serviços que agregam valor e fidelizam clientes.", solucao: "Mapeamos produtos/serviços com melhor potencial de rentabilidade, sugerimos SKUs iniciais e estratégias de promoção e cross-selling, garantindo portfólio equilibrado entre giro e margem para os primeiros 12–18 meses." },
      { titulo: "O Custo Real por Unidade de Operação", descricao: "Para gerir margem é preciso conhecer o custo real por unidade de operação — seja por cliente atendido, par de óculos vendido ou serviço prestado. Isso envolve somar custos fixos (aluguel, salários, impostos) e variáveis (insumos, comissões) e dividir pelo volume relevante. Sem essa análise, a precificação fica desalinhada e metas de faturamento são inalcançáveis. O plano de negócios detalha custo por unidade e identifica onde reduzir desperdícios ou aumentar eficiência.", solucao: "Calculamos o ponto de equilíbrio operacional e definimos metas de faturamento por canal e por serviço, permitindo que gestores acompanhem KPIs e ajustem ações para manter rentabilidade." },
      { titulo: "O Plano de Marketing e Aquisição de Clientes", descricao: "Planejar marketing é essencial para garantir fluxo constante de clientes. No setor óptico, canais eficazes incluem SEO, anúncios segmentados, redes sociais com conteúdo técnico, parcerias com clínicas e programas de indicação. Cada canal tem custo de aquisição distinto e performance variável. Ignorar essa diferenciação leva a investimentos ineficazes e sazonalidade agravada. O plano de negócios define funil de aquisição, orçamento por canal e metas de conversão adaptadas ao público-alvo.", solucao: "Estruturamos cronograma de ações, orçamento e indicadores para cada canal, com táticas de retenção e fidelização (pós-venda, garantias e programas de manutenção) para transformar aquisição em receita recorrente." }
    ],
      detalhesConclusao: [
      "Esses cinco pontos são apenas a ponta do iceberg. Gerir uma ótica com sucesso exige transformar conhecimento técnico em decisões financeiras e estratégicas. Um plano de negócios profissional mapeia riscos, define prioridades e cria caminhos mensuráveis para crescimento lucrativo — essencial para quem deseja longevidade no setor."
    ],
      
      // ITENS INCLUÍDOS
      itensIncluidosH3: "O Que Está Incluído no Seu Plano de Negócios",
      itensIncluidos: [
      "Análise de viabilidade econômica específica para ótica",
      "Definição de público-alvo e posicionamento no mercado de ótica",
      "Planejamento operacional completo adaptado para ótica",
      "Estratégias de marketing e aquisição de clientes para ótica",
      "Projeções financeiras detalhadas (3-5 anos) para ótica",
      "Análise de investimento inicial necessário para ótica",
      "Plano de gestão e recursos humanos para ótica",
      "Indicadores de desempenho (KPIs) específicos para ótica"
    ],
      
      // FAQ (vazio - LLM não gera)
      faqH3: "Perguntas Frequentes",
      faq: [],
      
      // CTA
      ctaH3: "Pronto para Transformar ótica em um Sucesso?",
      ctaP1: "Entre em contato conosco e solicite seu plano de negócios personalizado para ótica.",
      ctaBotao: "Solicitar Plano de Negócios"
    }
};

export const getNichoConfig = (slug: string): NichoConfig | undefined => {
  return Object.values(nichos).find(nicho => nicho.slug === slug);
};

export const getNichoConfigById = (id: string): NichoConfig | undefined => {
  return nichos[id as keyof typeof nichos];
};

export const getAllNichos = (): NichoConfig[] => {
  return Object.values(nichos);
};
