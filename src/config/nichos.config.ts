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
