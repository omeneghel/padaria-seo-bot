import { CheckCircle2, TrendingUp, Target, Users, BarChart3, FileText } from "lucide-react";
import { NichoConfig } from "@/config/nichos.config";

/**
 * Interface das props do componente
 */
interface MainContentProps {
  nicho: NichoConfig;
}

/**
 * Componente MainContent - VERSÃO DINÂMICA
 * 
 * Antes: Conteúdo hardcoded para padarias
 * Agora: Recebe dados do nicho via props e renderiza dinamicamente
 */
const MainContent = ({ nicho }: MainContentProps) => {
  return (
    <article className="space-y-8">
      {/* ========== SEÇÃO: INTRODUÇÃO ========== */}
      <header>
        <h2 className="section-title">{nicho.introducaoH3}</h2>
      </header>

      <section className="prose max-w-none">
        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-3">
            {nicho.introducaoH3}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {nicho.introducaoP1}
          </p>
          {nicho.introducaoP2 && (
            <p className="text-muted-foreground leading-relaxed">
              {nicho.introducaoP2}
            </p>
          )}
        </div>

        {/* ========== SEÇÃO: BENEFÍCIOS ========== */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-6">{nicho.beneficiosH3}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {nicho.beneficios.map((beneficio, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-card rounded-lg border border-border hover-lift">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    {/* Ícones rotativos baseados no índice */}
                    {idx % 4 === 0 && <Target className="h-7 w-7 text-primary" />}
                    {idx % 4 === 1 && <BarChart3 className="h-7 w-7 text-primary" />}
                    {idx % 4 === 2 && <Users className="h-7 w-7 text-primary" />}
                    {idx % 4 === 3 && <TrendingUp className="h-7 w-7 text-primary" />}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-secondary mb-2">{beneficio.titulo}</h4>
                  <p className="text-muted-foreground leading-relaxed">{beneficio.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== SEÇÃO: CUSTOS ========== */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            {nicho.custosH3}
          </h3>
          
          {/* Introdução dos custos */}
          <div className="bg-card p-6 rounded-lg border border-border mb-6">
            {nicho.custosIntroducao.map((paragrafo, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Lista de custos */}
          <div className="space-y-4 mb-6">
            {nicho.custos.map((custo, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-bold text-lg text-secondary mb-3">
                  {idx + 1}. {custo.titulo}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {custo.descricao}
                </p>
                <p className="text-foreground font-semibold">
                  <strong className="text-primary">Custo Real:</strong> {custo.custoReal}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusão dos custos */}
          {nicho.custosConclusao && nicho.custosConclusao.length > 0 && (
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              {nicho.custosConclusao.map((paragrafo, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
                  {paragrafo}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* ========== SEÇÃO: DETALHES CRUCIAIS ========== */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            {nicho.detalhesH3}
          </h3>
          
          {/* Introdução dos detalhes */}
          <div className="bg-card p-6 rounded-lg border border-border mb-6">
            {nicho.detalhesIntroducao.map((paragrafo, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Lista de detalhes */}
          <div className="space-y-6 mb-6">
            {nicho.detalhes.map((detalhe, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-bold text-lg text-secondary mb-3">
                  {idx + 1}. {detalhe.titulo}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {detalhe.descricao}
                </p>
                {detalhe.solucao && (
                  <p className="text-foreground">
                    <strong className="text-primary">O que o plano resolve:</strong> {detalhe.solucao}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Conclusão dos detalhes */}
          {nicho.detalhesConclusao && nicho.detalhesConclusao.length > 0 && (
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              {nicho.detalhesConclusao.map((paragrafo, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
                  {paragrafo}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* ========== SEÇÃO: O QUE ESTÁ INCLUÍDO ========== */}
        <div className="bg-secondary text-white p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8" />
            {nicho.itensIncluidosH3}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {nicho.itensIncluidos.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========== SEÇÃO: FAQ ========== */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-6">
            {nicho.faqH3}
          </h3>
          <div className="space-y-4">
            {nicho.faq.map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-bold text-lg text-secondary mb-3">
                  {item.pergunta}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.resposta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========== SEÇÃO: CTA FINAL ========== */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">
            {nicho.ctaH3}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {nicho.ctaP1}
          </p>
          <p className="text-sm mb-6 opacity-75">
            Consultoria especializada com mais de 30 anos de experiência da UNICAMP.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            {nicho.ctaBotao}
          </button>
        </div>
      </section>
    </article>
  );
};

export default MainContent;
