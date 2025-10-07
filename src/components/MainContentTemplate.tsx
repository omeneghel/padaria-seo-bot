import { CheckCircle2, FileText } from "lucide-react";
import * as Icons from "lucide-react";
import { NichoConfig } from "@/config/nichos.config";

interface MainContentTemplateProps {
  config: NichoConfig;
}

const MainContentTemplate = ({ config }: MainContentTemplateProps) => {
  return (
    <article className="space-y-8">
      <header>
        <h2 className="section-title">
          Plano de Negócios para {config.nomeNegocio}: O Caminho para o Sucesso
        </h2>
      </header>

      <section className="prose max-w-none">
        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-3">
            Por que um Plano de Negócios é Essencial para sua {config.nomeNegocioSingular}?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            O mercado de {config.nomeSetor} é altamente competitivo e dinâmico. Um plano de negócios bem estruturado 
            é a diferença entre o sucesso e o fechamento prematuro. Na ECONOMICA, nossos consultores da UNICAMP 
            trazem mais de 30 anos de experiência para ajudar você a transformar sua ideia em um negócio lucrativo 
            e sustentável.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-6">O Que Você Ganha com Nosso Plano de Negócios:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {config.beneficios.map((benefit, idx) => {
              const IconComponent = Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              return (
                <div key={idx} className="flex gap-4 p-6 bg-card rounded-lg border border-border hover-lift">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-secondary mb-2">{benefit.titulo}</h4>
                    <p className="text-muted-foreground leading-relaxed">{benefit.descricao}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            O Custo de Não Ter um Plano de Negócios para sua {config.nomeNegocioSingular}
          </h3>
          <div className="bg-card p-6 rounded-lg border border-border mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Abrir uma {config.nomeNegocioSingular} é o sonho de muitos empreendedores. O {config.caracteristicaSensorial}, 
              o {config.exemploAtmosfera} e o contato diário com a comunidade são imagens poderosas. No entanto, a paixão 
              pela {config.nomeSetor}, por si só, não garante um negócio lucrativo. Muitos focam no custo de 
              um {config.equipamentoPrincipal}, mas esquecem de calcular o prejuízo silencioso e devastador de operar sem 
              um mapa: o custo de não ter um plano de negócios.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muitos veem o planejamento como uma despesa opcional, um "luxo" para depois. A realidade é o oposto. 
              Navegar sem um plano de negócios é como tentar {config.exemploProcesso} sem receita: você pode até ter 
              os melhores ingredientes, mas as chances de o resultado desandar são enormes.
            </p>
            <p className="text-muted-foreground leading-relaxed font-semibold">
              Vamos detalhar os custos invisíveis que você assume ao pular essa etapa crucial:
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">1. {config.custosExemplo1.titulo}</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {config.custosExemplo1.descricao}
              </p>
              <p className="text-foreground font-semibold">
                <strong className="text-primary">Custo Real:</strong> {config.custosExemplo1.custoReal}
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">2. {config.custosExemplo2.titulo}</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {config.custosExemplo2.descricao}
              </p>
              <p className="text-foreground font-semibold">
                <strong className="text-primary">Custo Real:</strong> {config.custosExemplo2.custoReal}
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">3. Ponto Comercial com Baixo Potencial</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A escolha do local é um dos fatores mais críticos para o sucesso de uma {config.nomeNegocioSingular}. 
                Um plano de negócios inclui um estudo de geomarketing: análise do fluxo de pessoas, perfil demográfico 
                da vizinhança, presença de concorrentes e potencial de consumo da área. Escolher um ponto apenas porque 
                "o aluguel é barato" pode ser fatal.
              </p>
              <p className="text-foreground font-semibold">
                <strong className="text-primary">Custo Real:</strong> Aluguel e custos fixos de um local sem clientes, 
                levando ao fechamento do negócio em menos de um ano.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-3">4. Precificação Incorreta e Margens de Lucro Apertadas</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Cobrar o mesmo preço do concorrente ou chutar um valor com base no "bom senso" é a receita para o fracasso. 
                Um plano de negócios detalha cada custo (fixo e variável), define a margem de lucro desejada para cada produto 
                e ajuda a criar uma estratégia de preços que seja competitiva e, acima de tudo, lucrativa.
              </p>
              <p className="text-foreground font-semibold">
                <strong className="text-primary">Custo Real:</strong> Trabalhar longas horas todos os dias apenas para 
                "empatar" as contas no final do mês, sem gerar lucro para reinvestir ou para remunerar o seu esforço.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
            <h4 className="font-bold text-xl text-secondary mb-3">
              Conclusão: O Plano de Negócios Não é um Custo, é a sua Principal Ferramenta de Economia
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-3">
              O valor investido em uma consultoria para desenvolver seu plano de negócios é mínimo quando comparado aos 
              prejuízos que ele evita. Ele transforma incertezas em números, "achismos" em estratégias e um sonho em 
              um projeto viável.
            </p>
            <p className="text-foreground font-semibold text-lg">
              Não se pergunte "quanto custa fazer um plano de negócios?". Pergunte-se: "Quanto me custará não ter um?"
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            5 Detalhes Cruciais que Muitos Empreendedores de {config.nomeNegocioSingular} Esquecem 
            (e que um Plano de Negócios Resolve)
          </h3>
          <div className="bg-card p-6 rounded-lg border border-border mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você já domina a arte de fazer {config.produtosPrincipais}, sua receita de {config.exemploProdutoIconico} é 
              imbatível e seus produtos são a alegria da família. Com tanto talento, o sucesso da sua {config.nomeNegocioSingular} parece 
              garantido, certo? Infelizmente, a excelência na produção é apenas um dos ingredientes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A gestão de uma {config.nomeNegocioSingular} esconde detalhes que, quando ignorados, podem sabotar até o 
              mais talentoso profissional. São pontos que vão além do balcão e da cozinha, mas que definem a fronteira 
              entre um negócio que sobrevive e um que prospera.
            </p>
          </div>

          <div className="space-y-6 mb-6">
            {config.detalhes.map((detalhe, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-bold text-lg text-secondary mb-3">{idx + 1}. {detalhe.titulo}</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {detalhe.descricao}
                </p>
                <p className="text-foreground">
                  <strong className="text-primary">O que o plano resolve:</strong> {detalhe.solucao}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-muted-foreground leading-relaxed">
              Esses cinco pontos são apenas a ponta do iceberg. Eles mostram que gerir uma {config.nomeNegocioSingular} de 
              sucesso é uma ciência, e o plano de negócios é o seu laboratório. Ele permite testar, calcular e prever, 
              transformando sua paixão e talento em um negócio sólido e duradouro.
            </p>
          </div>
        </div>

        <div className="bg-secondary text-white p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8" />
            O Que Está Incluído no Seu Plano de Negócios
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {config.itensIncluidos.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Desafios Comuns no Setor de {config.nomeSetor}
          </h3>
          <div className="space-y-4">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-2">{config.desafio1Titulo}</h4>
              <p className="text-muted-foreground">
                {config.desafio1Descricao}
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-2">{config.desafio2Titulo}</h4>
              <p className="text-muted-foreground">
                {config.desafio2Descricao}
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg text-secondary mb-2">{config.desafio3Titulo}</h4>
              <p className="text-muted-foreground">
                {config.desafio3Descricao}
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
                <strong>Expertise da UNICAMP:</strong> Mais de 30 anos de experiência em consultoria empresarial
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-foreground">
                <strong>Metodologia Comprovada:</strong> Processos testados e validados em centenas de projetos
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-foreground">
                <strong>Foco em Resultados:</strong> Nosso objetivo é transformar seu plano em realidade lucrativa
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-foreground">
                <strong>Acompanhamento Personalizado:</strong> Suporte completo durante todo o processo
              </span>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default MainContentTemplate;
