export const iaraCase = {
  slug: "iara",
  title: "Iara",
  subtitle:
    "Transformando estoque parado em lucro com inteligência conversacional no WhatsApp",
  client: "Natura &Co",
  role: "Design Lead",
  year: "2023 — atual",
  tags: [
    "Product Design",
    "IA conversacional",
    "Design Conversacional",
    "Discovery",
    "Experimento Concierge",
    "MVP",
  ],
  summary:
    "A Iara nasceu para tirar Consultoras de Beleza do escuro sobre o próprio estoque: 88% estocam produtos, mas operam sem visão de lucro, validade e prioridade de compra. Em vez de mais um app complexo, validamos um assistente inteligente no WhatsApp — primeiro com experimento Concierge (Mágico de Oz) e depois evoluindo para um MVP com IA conversacional.",
  branding: "/images/cases/iara/branding-iara.png",
  stockReality: {
    title: "A realidade do estoque na ponta",
    caption: "Estoque das consultoras — média aproximada de 150 produtos",
    image: "/images/cases/iara/estoque-consultoras.png",
  },
  challenge: {
    title: "O desafio",
    business:
      "A Natura tinha um blackout de dados na última milha: não sabíamos quem eram os clientes finais das Consultoras nem a saúde real dos estoques na ponta.",
    problem:
      "88% das Consultoras estocam produtos, mas não sabem margem real, não têm visibilidade consolidada do que têm em casa e compram errado por falta de dados de saída.",
    impact:
      "Gestão ineficiente gera perda de vendas, produtos esquecidos ou vencendo, menos lucro para a Consultora e menos capacidade da Natura de ajudá-la a vender melhor.",
  },
  audience: {
    title: "Para quem pensamos o experimento",
    context: "GV Cedro e Madeira Prata+",
    representativeness: {
      cbs: "42% (10k CBs)",
      revenue: "+R$162 Mi · 34% da receita sell-in",
    },
    target: {
      label: "Ativas do Pay — não digitais",
      cbs: "8,6k CBs · 36,2%",
      revenue: "R$192,9 M sell-in · 40,3%",
    },
    secondary: {
      label: "Baixa performance digitais",
      cbs: "1,8k CBs · 7,5%",
      revenue: "R$42,4 M sell-in · 8,9%",
    },
    pains: [
      "Divulgar e vender",
      "Controlar validade",
      "Saber quais produtos comprar",
      "Manter atualizado",
      "Ter visibilidade",
    ],
    image: "/images/cases/iara/publico-alvo.png",
  },
  research: {
    title: "Discovery e escutas",
    insight:
      "A ferramenta não podia ser mais um app que exige aprendizado. Precisávamos estar onde a conversa de venda já acontece: no WhatsApp.",
    reframing:
      'Reenquadramos o problema: de "ferramenta de estoque" para "assistente de lucratividade".',
    hypothesis:
      "Se oferecermos gestão simplificada e automatizada via WhatsApp, focada em inteligência financeira (lucro), a Consultora terá visibilidade do potencial de venda e aumentará o engajamento com a marca.",
    metrics: [
      { value: "76", label: "consultoras ouvidas" },
      { value: "7", label: "análises de entrevistas com clientes" },
      { value: "+09h", label: "de conteúdo analisado" },
      { value: "39", label: "questionários respondidos" },
      { value: "82,93%", label: "CSAT · 23 respostas" },
    ],
    insightBox:
      "As Consultoras esperam uma ferramenta automatizada e ágil que gerencie o estoque e as vendas para poupar tempo, oferecendo também recursos visuais, como catálogos, para potencializar o atendimento e os resultados.",
    quotes: [
      "Poderia auxiliar no controle de estoque, cálculo de vendas. Quais produtos vendo com mais frequência.",
      "Que me surpreendeu, foi você achar todos os meus produtos.",
      "Porque é muito produto. Montei uma loja em casa, acho que passa de 20 mil em produtos.",
      "Um sistema para dar baixa nos itens que já foram vendidos.",
      "Ter um catálogo virtual com fotos, descrição e valor do produto.",
    ],
    image: "/images/cases/iara/nossas-escutas.png",
    quotesImage: "/images/cases/iara/citacoes-escutas.png",
  },
  method: {
    title: "Nosso jeito de fazer",
    quote: "Não construa em massa até que muitos queiram.",
    description:
      "Nas interações usamos um componente Mágico de Oz: processos assistidos por humanos nos bastidores para testar rápido a proposta de valor — e só então automatizar com IA conversacional e desenvolver em escala.",
    pillars: [
      {
        title: "Visibilidade",
        text: "A Consultora enviava fotos ou áudios do estoque e a Iara devolvia uma visão organizada do inventário — caminho que depois a IA passou a reconhecer e estruturar.",
      },
      {
        title: "Automação humanizada",
        text: "Simulamos baixa e adição de itens por conversa natural, sem forçar formulários — base para o assistente com IA no WhatsApp.",
      },
      {
        title: "Insights financeiros",
        text: 'Relatórios simples do tipo: "Você tem R$ X parados em perfumes. Se vender tudo essa semana, seu lucro é Y".',
      },
    ],
    stack: [
      "Roteiro de mensagens",
      "Planilha de cadastros",
      "Gemini (IA generativa)",
      "Backoffice de estoque",
      "Time H2",
      "WhatsApp",
    ],
    image: "/images/cases/iara/magico-de-oz.png",
    processBoard: "/images/cases/iara/board-processo.png",
  },
  funnel: {
    title: "Resultados do experimento",
    period: "Dados de 15/10 a 28/11",
    stages: [
      { label: "Consultoras na base", value: "428" },
      { label: "Entraram em contato", value: "86", conversion: "20%" },
      { label: "Fizeram ativação", value: "66", conversion: "77%" },
      { label: "Recorrentes", value: "46", conversion: "70%" },
    ],
    observations: [
      { title: "Diamante", text: "94% leram as comunicações — melhor engajamento" },
      { title: "Ouro", text: "62% recorrentes na assistente" },
      { title: "Prata", text: "64% ativaram na assistente" },
      { title: "Alta performance", text: "100% recorrentes (3)" },
      { title: "Não digital", text: "71% ativaram (42)" },
    ],
    image: "/images/cases/iara/funil-engajamento.png",
  },
  mvp: {
    title: "Do Concierge ao MVP",
    description:
      "Com a proposta de valor validada, o desafio passou a ser técnico e experiencial: evoluir o Concierge para um assistente com IA no WhatsApp — reconhecimento de produtos, conversa natural e insights de lucro — sem perder empatia e simplicidade do atendimento humano.",
    deliverables: [
      {
        title: "Service Blueprint",
        text: "Mapeamos jornada visível, automação do bot com IA, APIs de estoque e pontos de transbordo humano.",
      },
      {
        title: "Voice Chart e tom",
        text: "Iara como parceira de negócio: foco em lucro, linguagem direta e acolhedora, sem jargão de TI — inclusive no tom das respostas geradas pela IA.",
      },
      {
        title: "Fluxos conversacionais",
        text: "Caminho feliz (foto → identificação com IA → confirmação) e reparação de erros sem culpar a usuária.",
      },
      {
        title: "Protótipo WhatsApp",
        text: "Quick replies e list messages da WhatsApp Business API para reduzir digitação e erro de input, em diálogo com o modelo de IA.",
      },
    ],
    metrics: [
      "Retenção após a primeira semana",
      "Taxa de conclusão de fluxos de estoque sem intervenção humana",
      "Acurácia de NLP / IA (frequência de “não entendi”)",
    ],
    whatsappImage: "/images/cases/iara/whatsapp-fluxo.png",
    whatsappCaption:
      "Fluxo no WhatsApp com IA: cadastro por foto, reconhecimento de produtos, precificação e visão de lucro estimado.",
  },
  learnings: {
    title: "Aprendizados",
    items: [
      {
        title: "Armadilha da automação total",
        text: "100% automático perdia nuance emocional. Implementamos transbordo híbrido quando há frustração.",
      },
      {
        title: "A linguagem da Consultora",
        text: 'Trocar “Inventário” por “Meus Produtos” converteu 20% mais. O vocabulário da usuária prevalece.',
      },
    ],
  },
  conclusion:
    "O Projeto Iara não foi só criar um bot de estoque. Foi empoderar a Consultora Natura com dados que ela já tinha, mas não conseguia visualizar — usando IA conversacional no WhatsApp para transformar desorganização em controle financeiro pela tecnologia mais acessível: a conversa.",
  pdf: "/images/cases/iara/Case_Iara.pdf",
};
