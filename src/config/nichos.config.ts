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
  
  // ===== INTRODUÇÃO =====
  introducaoH3: string;
  introducaoP1: string;
  introducaoP2: string;
  
  // ===== BENEFÍCIOS =====
  beneficiosH3: string;
  beneficios: Array<{
    titulo: string;
    descricao: string;
  }>;
  
  // ===== CUSTOS =====
  custosH3: string;
  custosIntroducao: string[];
  custos: Array<{
    titulo: string;
    descricao: string;
    custoReal: string;
  }>;
  custosConclusao: string[];
  
  // ===== DETALHES =====
  detalhesH3: string;
  detalhesIntroducao: string[];
  detalhes: Array<{
    titulo: string;
    descricao: string;
    solucao: string;
  }>;
  detalhesConclusao: string[];
  
  // ===== ITENS INCLUÍDOS =====
  itensIncluidosH3: string;
  itensIncluidos: string[];
  
  // ===== FAQ =====
  faqH3: string;
  faq: Array<{
    pergunta: string;
    resposta: string;
  }>;
  
  // ===== CTA =====
  ctaH3: string;
  ctaP1: string;
  ctaBotao: string;
}
