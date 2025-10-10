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
};

export const getNichoConfig = (slug: string): NichoConfig | undefined => {
  return Object.values(nichos).find(nicho => nicho.slug === slug);
};

export const getAllNichos = (): NichoConfig[] => {
  return Object.values(nichos);
};
