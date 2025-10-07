// ============================================================================
// TEMPLATE DE CONTEÚDO PRINCIPAL - SEO PROGRAMÁTICO
// ============================================================================
// Este componente renderiza todo o conteúdo da página usando variáveis
// da configuração do nicho, permitindo automação completa.
// ============================================================================

import { CheckCircle2, TrendingUp, Target, Users, BarChart3, FileText } from "lucide-react";
import { NichoConfig } from "@/config/nichos.config";

// ============================================================================
// INTERFACE DE PROPS
// ============================================================================

interface MainContentTemplateProps {
  config: NichoConfig; // {{VARIAVEL_CONFIG}} - Configuração completa do nicho
}

// ============================================================================
// MAPEAMENTO DE ÍCONES
// ============================================================================

const iconMap: Record<string, any> = {
  Target,
  BarChart3,
  Users,
  TrendingUp,
  CheckCircle2,
  FileText
};

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

const MainContentTemplate = ({ config }: MainContentTemplateProps) => {
  return (
    <article className="space-y-8">
      {/* ===== CABEÇALHO ===== */}
      <header>
        <h2 className="section-title">
          {/* {{VARIAVEL_NOME_NEGOCIO}} - Ex: "Padarias", "Pizzarias" */}
          {config.nomeNegocio}: O Caminho para o Sucesso
        </h2>
      </header>

      {/* ===== SEÇÃO INTRODUTÓRIA ===== */}
      <section className="prose max-w-none">
        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-3">
            {/* {{VARIAVEL_NOME_NEGOCIO_SINGULAR}} - Ex: "padaria", "pizzaria" */}
            Por que um Plano de Negócios é Essencial para sua {config.nomeNegocioSingular.charAt(0).toUpperCase() + config.nomeNegocioSingular.slice(1)}?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {/* {{VARIAVEL_NOME_SETOR}} - Ex: "panificação", "pizzaria" */}
            O mercado de {config.nomeSetor} é altamente competitivo e dinâmico. Um plano de negócios bem estruturado 
            é a diferença entre o sucesso e o fechamento prematuro. Na ECONOMICA, nossos consultores da UNICAMP 
            trazem mais de 30 anos de experiência para ajudar você a transformar sua ideia em um negócio lucrativo 
            e sustentável.
          </p>
        </div>

        {/* ===== SEÇÃO DE BENEFÍCIOS ===== */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-6">
            O Que Você Ganha com Nosso Plano de Negócios:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {/* {{VARIAVEL_BENEFICIOS}} - Array de 4 benefícios */}
            {config.beneficios.map((benefit, idx) => {
              const IconComponent = iconMap[benefit.icon] || Target;
              return (
                <div key={idx} className="flex gap-4 p-6 bg-card rounded-lg border border-border hover-lift">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    {/* {{VARIAVEL_BENEFICIO_TITULO}} */}
                    <h4 className="font-bold text-lg text-secondary mb-2">{benefit.titulo}</h4>
                    {/* {{VARIAVEL_BENEFICIO_DESCRICAO}} */}
                    <p className="text-muted-foreground leading-relaxed">{benefit.descricao}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== SEÇÃO: O CUSTO DE NÃO TER UM PLANO ===== */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            {/* {{VARIAVEL_NOME_NEGOCIO_SINGULAR}} */}
            O Custo de Não Ter um Plano de Negócios para sua {config.nomeNegocioSingular.charAt(0).toUpperCase() + config.nomeNegocioSingular.slice(1)}
          </h3>
          <div className="bg-card p-6 rounded-lg border border-border mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {/* {{VARIAVEL_NOME_NEGOCIO_SINGULAR}} */}
              Abrir uma {config.nomeNegocioSingular} é o sonho de muitos empreendedores. 
              {/* {{VARIAVEL_CARACTERISTICA_SENSORIAL}} - Ex: "cheiro de pão quente", "aroma de pizza" */}
              O {config.caracteristicaSensorial}, 
              {/* {{VARIAVEL_EXEMPLO_ATMOSFERA}} - Ex: "balcão cheio de delícias", "cardápio variado" */}
              o {config.exemploAtmosfera} e o contato diário com a comunidade são imagens poderosas. 
              No entanto, a paixão pelo negócio, por si só, não garante um empreendimento lucrativo. 
              Muitos focam no custo de 
              {/* {{VARIAVEL_EQUIPAMENTO_PRINCIPAL}} - Ex: "forno e batedeira", "forno a lenha" */}
              {config.equipamentoPrincipal}, mas esquecem de calcular o prejuízo silencioso e devastador de operar sem um mapa: o custo de não ter um plano de negócios.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muitos veem o planejamento como uma despesa opcional, um "luxo" para depois. A realidade é o oposto. 
              Navegar sem um plano de negócios é como tentar 
              {/* {{VARIAVEL_EXEMPLO_PROCESSO}} - Ex: "assar um pão", "fazer uma pizza" */}
              {config.exemploProcesso} sem receita: você pode até ter os melhores ingredientes, mas as chances de o resultado desandar são enormes.
            </p>
            <p className="text-muted-foreground leading-relaxed font-semibold">
              Vamos detalhar os custos invisíveis que você assume ao pular essa etapa crucial:
            </p>
          </div>

          {/* ===== EXEMPLOS DE CUSTOS ===== */}
          <div className="space-y-4 mb-6">
            {/* Custo Exemplo 1 */}
            <div className="bg-card p-6 rounded-lg border border-border">
              {/* {{VARIAVEL_CUSTO_1_TITULO}} */}
              <h4 className="font-bold text-lg text-secondary mb-3">{config.custosExemplo1.titulo}</h4>
              {/* {{VARIAVEL_CUSTO_1_DESCRICAO}} */}
              <p className="text-muted-foreground leading-relaxed mb-3">
                {config.custosExemplo1.descricao}
              </p>
              <p className="text-foreground font-semibold">
                {/* {{VARIAVEL_CUSTO_1_REAL}} */}
                <strong className="text-primary">Custo Real:</strong> {config.custosExemplo1.custoReal}
              </p>
            </div>

            {/* Custo Exemplo 2 */}
            <div className="bg-card p-6 rounded-lg border border-border">
              {/* {{VARIAVEL_CUSTO_2_TITULO}} */}
              <h4 className="font-bold text-lg text-secondary mb-3">{config.custosExemplo2.titulo}</h4>
              {/* {{VARIAVEL_CUSTO_2_DESCRICAO}} */}
              <p className="text-muted-foreground leading-relaxed mb-3">
                {config.custosExemplo2.descricao}
              </p>
              <p className="text-foreground font-semibold">
                {/* {{VARIAVEL_CUSTO_2_REAL}} */}
                <strong className="text-primary">Custo Real:</strong> {config.custosExemplo2.custoReal}
              </p>
            </div>
          </div>

          {/* ===== CONCLUSÃO DA SEÇÃO ===== */}
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

        {/* ===== SEÇÃO: 5 DETALHES CRUCIAIS ===== */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            {/* {{VARIAVEL_NOME_NEGOCIO}} */}
            5 Detalhes Cruciais que Muitos Empreendedores de {config.nomeNegocio} Esquecem (e que um Plano de Negócios Resolve)
          </h3>
          <div className="bg-card p-6 rounded-lg border border-border mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {/* {{VARIAVEL_EXEMPLO_PRODUTO_ICONICO}} - Ex: "croissant", "pizza margherita" */}
              Você já domina a arte de fazer {config.exemploProdutoIconico}, sua receita é imbatível e seus 
              {/* {{VARIAVEL_PRODUTOS_PRINCIPAIS}} - Ex: "pães e doces", "pizzas artesanais" */}
              {config.produtosPrincipais} são a alegria dos clientes. Com tanto talento, o sucesso da sua 
              {/* {{VARIAVEL_NOME_NEGOCIO_SINGULAR}} */}
              {config.nomeNegocioSingular} parece garantido, certo? Infelizmente, a excelência na produção é apenas um dos ingredientes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {/* {{VARIAVEL_NOME_NEGOCIO_SINGULAR}} */}
              A gestão de uma {config.nomeNegocioSingular} esconde detalhes que, quando ignorados, podem sabotar até o empreendedor mais talentoso. São pontos que vão além do balcão e da cozinha, mas que definem a fronteira entre um negócio que sobrevive e um que prospera.
            </p>
          </div>

          {/* ===== LOOP DOS 5 DETALHES ===== */}
          <div className="space-y-6 mb-6">
            {/* {{VARIAVEL_DETALHES}} - Array de 5 detalhes cruciais */}
            {config.detalhes.map((detalhe, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                {/* {{VARIAVEL_DETALHE_TITULO}} */}
                <h4 className="font-bold text-lg text-secondary mb-3">
                  {idx + 1}. {detalhe.titulo}
                </h4>
                {/* {{VARIAVEL_DETALHE_DESCRICAO}} */}
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {detalhe.descricao}
                </p>
                <p className="text-foreground">
                  {/* {{VARIAVEL_DETALHE_SOLUCAO}} */}
                  <strong className="text-primary">O que o plano resolve:</strong> {detalhe.solucao}
                </p>
              </div>
            ))}
          </div>

          {/* ===== CONCLUSÃO DOS DETALHES ===== */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-muted-foreground leading-relaxed">
              {/* {{VARIAVEL_NOME_NEGOCIO_SINGULAR}} */}
              Esses cinco pontos são apenas a ponta do iceberg. Eles mostram que gerir uma {config.nomeNegocioSingular} de sucesso é uma ciência, e o plano de negócios é o seu laboratório. Ele permite testar, calcular e prever, transformando sua paixão e talento em um negócio sólido e duradouro.
            </p>
          </div>
        </div>

        {/* ===== SEÇÃO: O QUE ESTÁ INCLUÍDO ===== */}
        <div className="bg-secondary text-white p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8" />
            O Que Está Incluído no Seu Plano de Negócios
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {/* {{VARIAVEL_ITENS_INCLUIDOS}} - Array de 8 itens */}
            {config.itensIncluidos.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                {/* {{VARIAVEL_ITEM_INCLUIDO}} */}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== SEÇÃO: DESAFIOS COMUNS ===== */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            {/* {{VARIAVEL_NOME_SETOR}} */}
            Desafios Comuns no Setor de {config.nomeSetor.charAt(0).toUpperCase() + config.nomeSetor.slice(1)}
          </h3>
          <div className="space-y-4">
            {/* Desafio 1 */}
            <div className="bg-card p-6 rounded-lg border border-border">
              {/* {{VARIAVEL_DESAFIO_1_TITULO}} */}
              <h4 className="font-bold text-lg text-secondary mb-3">{config.desafio1Titulo}</h4>
              {/* {{VARIAVEL_DESAFIO_1_DESCRICAO}} */}
              <p className="text-muted-foreground leading-relaxed">
                {config.desafio1Descricao}
              </p>
            </div>

            {/* Desafio 2 */}
            <div className="bg-card p-6 rounded-lg border border-border">
              {/* {{VARIAVEL_DESAFIO_2_TITULO}} */}
              <h4 className="font-bold text-lg text-secondary mb-3">{config.desafio2Titulo}</h4>
              {/* {{VARIAVEL_DESAFIO_2_DESCRICAO}} */}
              <p className="text-muted-foreground leading-relaxed">
                {config.desafio2Descricao}
              </p>
            </div>

            {/* Desafio 3 */}
            <div className="bg-card p-6 rounded-lg border border-border">
              {/* {{VARIAVEL_DESAFIO_3_TITULO}} */}
              <h4 className="font-bold text-lg text-secondary mb-3">{config.desafio3Titulo}</h4>
              {/* {{VARIAVEL_DESAFIO_3_DESCRICAO}} */}
              <p className="text-muted-foreground leading-relaxed">
                {config.desafio3Descricao}
              </p>
            </div>
          </div>
        </div>

        {/* ===== CALL TO ACTION FINAL ===== */}
        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            {/* {{VARIAVEL_NOME_NEGOCIO_SINGULAR}} */}
            Pronto para Transformar sua {config.nomeNegocioSingular.charAt(0).toUpperCase() + config.nomeNegocioSingular.slice(1)} em um Sucesso?
          </h3>
          <p className="text-lg mb-6">
            Entre em contato conosco e solicite seu plano de negócios personalizado.
          </p>
          <p className="text-sm opacity-90">
            Consultoria especializada com mais de 30 anos de experiência da UNICAMP.
          </p>
        </div>
      </section>
    </article>
  );
};

export default MainContentTemplate;

// ============================================================================
// MAPEAMENTO COMPLETO DE VARIÁVEIS
// ============================================================================
/*

TODAS AS VARIÁVEIS UTILIZADAS NESTE TEMPLATE:

VARIÁVEIS DE NOMENCLATURA:
1. {{VARIAVEL_NOME_NEGOCIO}} - config.nomeNegocio
   Exemplo: "Padarias", "Pizzarias"
   Uso: Títulos e textos no plural

2. {{VARIAVEL_NOME_NEGOCIO_SINGULAR}} - config.nomeNegocioSingular
   Exemplo: "padaria", "pizzaria"
   Uso: Textos no singular

3. {{VARIAVEL_NOME_SETOR}} - config.nomeSetor
   Exemplo: "panificação", "pizzaria"
   Uso: Referência ao setor

VARIÁVEIS DE CARACTERÍSTICAS:
4. {{VARIAVEL_PRODUTOS_PRINCIPAIS}} - config.produtosPrincipais
   Exemplo: "pães e doces", "pizzas artesanais"

5. {{VARIAVEL_EQUIPAMENTO_PRINCIPAL}} - config.equipamentoPrincipal
   Exemplo: "forno e batedeira", "forno a lenha e masseira"

6. {{VARIAVEL_EQUIPAMENTO_SECUNDARIO}} - config.equipamentoSecundario
   Exemplo: "batedeira", "masseira"

7. {{VARIAVEL_INSUMOS_PRINCIPAIS}} - config.insumosPrincipais
   Exemplo: "farinha, fermento e frios", "farinha, molho de tomate e queijos"

8. {{VARIAVEL_CARACTERISTICA_SENSORIAL}} - config.caracteristicaSensorial
   Exemplo: "cheiro de pão quente", "aroma de pizza saindo do forno"

9. {{VARIAVEL_EXEMPLO_PRODUTO_ICONICO}} - config.exemploProdutoIconico
   Exemplo: "croissant", "pizza margherita"

10. {{VARIAVEL_EXEMPLO_PROCESSO}} - config.exemploProcesso
    Exemplo: "assar um pão", "fazer uma pizza"

11. {{VARIAVEL_EXEMPLO_ATMOSFERA}} - config.exemploAtmosfera
    Exemplo: "balcão cheio de delícias", "cardápio variado de pizzas"

VARIÁVEIS DE BENEFÍCIOS (Array de 4):
12. {{VARIAVEL_BENEFICIOS}} - config.beneficios
13. {{VARIAVEL_BENEFICIO_ICON}} - benefit.icon
14. {{VARIAVEL_BENEFICIO_TITULO}} - benefit.titulo
15. {{VARIAVEL_BENEFICIO_DESCRICAO}} - benefit.descricao

VARIÁVEIS DE ITENS INCLUÍDOS (Array de 8):
16. {{VARIAVEL_ITENS_INCLUIDOS}} - config.itensIncluidos
17. {{VARIAVEL_ITEM_INCLUIDO}} - item

VARIÁVEIS DE CUSTOS:
18. {{VARIAVEL_CUSTO_1_TITULO}} - config.custosExemplo1.titulo
19. {{VARIAVEL_CUSTO_1_DESCRICAO}} - config.custosExemplo1.descricao
20. {{VARIAVEL_CUSTO_1_REAL}} - config.custosExemplo1.custoReal
21. {{VARIAVEL_CUSTO_2_TITULO}} - config.custosExemplo2.titulo
22. {{VARIAVEL_CUSTO_2_DESCRICAO}} - config.custosExemplo2.descricao
23. {{VARIAVEL_CUSTO_2_REAL}} - config.custosExemplo2.custoReal

VARIÁVEIS DE DETALHES CRUCIAIS (Array de 5):
24. {{VARIAVEL_DETALHES}} - config.detalhes
25. {{VARIAVEL_DETALHE_TITULO}} - detalhe.titulo
26. {{VARIAVEL_DETALHE_DESCRICAO}} - detalhe.descricao
27. {{VARIAVEL_DETALHE_SOLUCAO}} - detalhe.solucao

VARIÁVEIS DE DESAFIOS:
28. {{VARIAVEL_DESAFIO_1_TITULO}} - config.desafio1Titulo
29. {{VARIAVEL_DESAFIO_1_DESCRICAO}} - config.desafio1Descricao
30. {{VARIAVEL_DESAFIO_2_TITULO}} - config.desafio2Titulo
31. {{VARIAVEL_DESAFIO_2_DESCRICAO}} - config.desafio2Descricao
32. {{VARIAVEL_DESAFIO_3_TITULO}} - config.desafio3Titulo
33. {{VARIAVEL_DESAFIO_3_DESCRICAO}} - config.desafio3Descricao

TOTAL: 33+ variáveis parametrizáveis

*/
