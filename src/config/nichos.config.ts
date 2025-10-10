export interface NichoConfig {
  // ===== IDENTIFICAÇÃO =====
  id: string;                          // ID único do nicho (ex: "padarias", "adega", "academia")
  slug: string;                        // Slug para URL (ex: "plano-de-negocios-para-padarias")
  
  // ===== NOMENCLATURA =====
  nomeNegocio: string;                 // Nome do negócio no plural (ex: "Padarias", "Adegas")
  nomeNegocioSingular: string;         // Nome do negócio no singular (ex: "padaria", "adega")
  nomeSetor: string;                   // Nome do setor (ex: "panificação", "varejo de bebidas")
  
  // ===== SEO & META TAGS =====
  metaTitle: string;                   // Título da página para SEO
  metaDescription: string;             // Descrição meta para SEO
  metaKeywords: string[];              // Palavras-chave para SEO
  
  // ===== BREADCRUMBS =====
  breadcrumbLabel: string;             // Label do breadcrumb (ex: "Plano de Negócios para Padarias")
  
  // ===== HERO SECTION =====
  heroTitle: string;                   // Título principal da página H1
  heroSubtitle: string;                // Subtítulo da página
  
  // ===== INTRODUÇÃO =====
  introducaoH3: string;                // Título da seção de introdução
  introducaoP1: string;                // Primeiro parágrafo da introdução
  introducaoP2: string;                // Segundo parágrafo da introdução
  
  // ===== BENEFÍCIOS =====
  beneficiosH3: string;                // Título da seção de benefícios
  beneficios: Array<{
    icon: string;                      // Nome do ícone (ex: "Target", "BarChart3", "Users")
    titulo: string;                    // Título do benefício
    descricao: string;                 // Descrição do benefício
  }>;
  
  // ===== CUSTOS (Seção "O Custo de Não Ter um Plano de Negócios") =====
  custosH3: string;                    // Título da seção
  custosIntroducao: string[];          // Array de parágrafos de introdução [p1, p2, p3]
  custos: Array<{
    titulo: string;                    // Título do custo (h4)
    descricao: string;                 // Descrição completa do custo
    custoReal: string;                 // Custo real estimado
  }>;
  custosConclusao: {
    titulo: string;                    // Título da conclusão (h4)
    paragrafos: string[];              // Array de parágrafos de conclusão [p1, p2]
  };
  
  // ===== DETALHES (Seção "5 Detalhes Cruciais") =====
  detalhesH3: string;                  // Título da seção
  detalhesIntroducao: string[];        // Array de parágrafos de introdução [p1, p2]
  detalhes: Array<{
    titulo: string;                    // Título do detalhe (h4)
    descricao: string;                 // Descrição completa do detalhe
  }>;
  detalhesConclusao: {
    titulo: string;                    // Título da conclusão (h4)
    paragrafos: string[];              // Array de parágrafos de conclusão [p1, p2]
  };
  
  // ===== ITENS INCLUÍDOS NO PLANO =====
  itensIncluidosH3: string;            // Título da seção
  itensIncluidos: string[];            // Array de itens incluídos
  
  // ===== FAQ =====
  faqH3: string;                       // Título da seção de FAQ
  faq: Array<{
    pergunta: string;                  // Pergunta
    resposta: string;                  // Resposta
  }>;
  
  // ===== CTA (Call to Action) =====
  ctaH3: string;                       // Título do CTA
  ctaP1: string;                       // Texto do CTA
  ctaBotao: string;                    // Texto do botão
}

// ============================================================================
// CONFIGURAÇÕES DOS NICHOS
// ============================================================================

export const nichosConfig: Record<string, NichoConfig> = {
  // Vazio por enquanto - será preenchido pelo workflow n8n
};

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

export const getNichoConfig = (nichoId: string): NichoConfig | undefined => {
  return nichosConfig[nichoId];
};

export const getAllNichos = (): NichoConfig[] => {
  return Object.values(nichosConfig);
};
