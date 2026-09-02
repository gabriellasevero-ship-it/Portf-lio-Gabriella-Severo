export const cockpitCase = {
  slug: "cockpit",
  title: "Cockpit do Gerente",
  subtitle:
    "Uma plataforma única para gerentes atenderem clientes e realizarem investimentos",
  client: "Banco Safra",
  role: "UX Designer Associada (Especialista)",
  year: "2018 — 2020",
  tags: [
    "Plataforma",
    "Investimentos",
    "B2B",
    "Discovery",
    "Pesquisa qualitativa",
    "Priorização",
  ],
  summary:
    "O Cockpit nasceu para unificar o dia a dia comercial do gerente: Plataforma Operacional, Plataforma Private, Intranet e SAF em um único ambiente — com visão hierárquica para toda a área comercial, analytics de uso e interface responsiva para tablet. O desafio era de complexidade, visão sistêmica e clareza operacional: migrar funcionalidades das plataformas de origem sem perder o que o gerente já usava, e sem assumir que o AS IS do mainframe existia como serviço para a web.",
  challenge: {
    title: "Premissas do produto",
    items: [
      "Plataforma multicanal",
      "Priorização das funcionalidades que constam no multicanal IB e Mobile",
      "Migração das funcionalidades em sua totalidade da plataforma origem para o Cockpit",
      "Construção com os níveis hierárquicos necessários para atender a toda a área comercial",
      "Analytics / tagueamento visando indicadores de uso e comportamento",
      "Responsivo para tablet",
    ],
  },
  objectives: {
    title: "Um hub para quatro mundos",
    text: "O objetivo era centralizar no Cockpit o que estava espalhado em quatro sistemas: Plataforma Operacional, Plataforma Private, Intranet e SAF.",
    platforms: [
      "Plataforma Operacional",
      "Plataforma Private",
      "Intranet",
      "SAF",
    ],
    image: "/images/cases/cockpit/objetivos.jpg",
  },
  legacy: {
    title: "O legado: muitas ferramentas, pouco encaixe",
    text: "Antes do Cockpit, o gerente navegava entre sistemas com lógicas, ritmos e lacunas diferentes. A Plataforma Operacional era considerada fundamental, mas lenta; o SAF tinha as funcionalidades, porém era arcaico; aplicações e resgates de fundos de terceiros ainda saíam por formulário no Notes.",
    mappingTitle: "O que mais utilizavam — Plataforma Operacional, visão agências",
    mappingCaption:
      "Mapeamento das funcionalidades mais usadas e o porquê: captação, crédito PF, agenda, posição do cliente, posição do investidor e campanhas de marketing. Acessos em comum entre segmentos de agências e Private.",
    mappingImage: "/images/cases/cockpit/mapeamento-uso.jpg",
    features: [
      {
        name: "Captação · Visão Potencial",
        why: "Checagem diária de depósitos relevantes e acompanhamento da carteira.",
      },
      {
        name: "Crédito PF",
        why: "Despacho e acompanhamento de propostas no dia a dia.",
      },
      {
        name: "Captação · Gerencial",
        why: "Resumo de captação do dia ou do período, até o nível do cliente.",
      },
      {
        name: "Agenda Safra",
        why: "Eventos da semana para atuar com clientes e gerar negócio.",
      },
      {
        name: "Posição do Cliente",
        why: "Foto do cliente: dados, saldo e produtos contratados.",
      },
      {
        name: "Posição do Investidor",
        why: "Carteira, saldo e investimentos — usada no contato para nova captação.",
      },
      {
        name: "Marketing · GMK",
        why: "Atuação em campanhas de produto.",
      },
    ],
    accessTitle: "Acessos da Plataforma Operacional",
    accessCaption:
      "Amostra de 409 acessos (100%) entre 30/01 e 14/02/2014, a partir dos usuários entrevistados. GCA (Gestão da Captação) liderou com 73 acessos (17,8%), seguido de VCG (72 · 17,6%).",
    accessImage: "/images/cases/cockpit/acessos.jpg",
    accessStats: [
      { value: "409", label: "acessos na amostra" },
      { value: "17,8%", label: "GCA · Gestão da Captação" },
      { value: "17,6%", label: "VCG · Plataforma Operacional" },
    ],
    quotes: [
      "A Plataforma Operacional é fundamental, porém, muito lenta e por isso prefiro o SAF. Ela complementa a Plataforma Private. Minha sugestão é que seja unificada na Plataforma Private.",
      "Para aplicações e resgates de fundos de terceiros, não existe funcionalidade. É necessário enviar formulário via notes.",
      "O SAF é muito mais ágil e completo. Tem todas as funcionalidades, por isso, utilizo mais ele.",
      "O SAF é muito arcaico. Porém, tem todas as funcionalidades. O ideal seria o acesso de tudo o que o SAF tem mas na visão Plataforma.",
      "Para produtos indexados a IPCA e IGPM, não há informações do saldo atualizado, precisa pedir para a Área de Custódia calcular. Isso traz insegurança ao cliente.",
      "Para consulta de extrato com mais de 1 ano, depende do Back Office, sendo que a concorrência entrega extrato antigo online.",
    ],
    quotesImage: "/images/cases/cockpit/comentarios.jpg",
    quotesCaption: "Comentários do segmento Private sobre as ferramentas de origem.",
    screens: [
      {
        src: "/images/cases/cockpit/legado-plataforma.jpg",
        alt: "Plataforma Operacional Safra — visão potencial do nível segmento até o analítico por cliente",
        caption:
          "Plataforma Operacional: visão potencial, do segmento até o analítico por cliente — dezenas de colunas para captação, funding, fundos e variação.",
      },
      {
        src: "/images/cases/cockpit/legado-saf.jpg",
        alt: "Terminal SAF em emulação 3270 — menu SPI Posições do Investidor",
        caption:
          "SAF / SPI — Posições do Investidor em terminal 3270: ágil e completo, mas arcaico.",
      },
    ],
  },
  earlyDifficulties: {
    title: "Antes de pesquisar de novo",
    items: [
      "Validar insumos antigos",
      "Mudar o protótipo atual",
      "Realizar nova pesquisa",
    ],
    prototypeImage: "/images/cases/cockpit/prototipo-cliente.jpg",
    prototypeCaption:
      "Protótipo existente da tela do cliente — posição consolidada, ações, crédito, investimentos e conta corrente.",
    wireframeImage: "/images/cases/cockpit/wireframe-inicial.jpg",
    wireframeCaption:
      "Wireframe da tela inicial: busca, destaques do dia, Agenda Safra e tarefas — ainda com a lógica das ferramentas antigas na primeira tela.",
  },
  research: {
    title: "Discovery com gerentes e bankers",
    goalTitle: "Objetivo da pesquisa",
    goals: [
      "Levantar / validar necessidades dos gerentes",
      "Levantar / validar funcionalidades mais utilizadas para priorização",
      "Entender como usavam as ferramentas existentes",
      "Como organiza o seu dia",
      "Validar o protótipo existente",
    ],
    topicsTitle: "Pesquisa qualitativa / teste de usabilidade",
    topics: [
      "Prospecção e negócios",
      "Captação",
      "Gestão de carteira",
      "Perdas e resgates",
      "Safra Performance",
      "Mobile",
      "Protótipo existente",
    ],
    recruitmentTitle: "Recrutamento",
    recruitmentText:
      "13 pessoas: gerentes PF e gerentes gerais de agências, heads, superintendent, bankers e assistente de Private Banking — com tempos de banco que iam de 6 meses a 2 anos, quando informado.",
    recruitmentImage: "/images/cases/cockpit/recrutamento.jpg",
    findingsTitle: "Achados da pesquisa qualitativa",
    findings: [
      "Gerentes e bankers possuem necessidades diferentes dependendo do segmento",
      "Sentiam falta de ferramentas que já existiam, mas eram difíceis de usar ou de encontrar",
      "Não confiam no Safra Performance e CRM",
      "Sentem falta de materiais do banco para enviar aos clientes",
      "Conseguimos definir a jornada do gerente",
      "Conhecemos as dores dos gerentes sobre o banking",
      "Conhecemos as ferramentas e funcionalidades do Itaú e Griffo",
      "Confirmamos as funcionalidades mais utilizadas e insumos para melhorá-las",
    ],
    usabilityTitle: "Teste de usabilidade",
    usabilityImage: "/images/cases/cockpit/usabilidade.jpg",
    worked: [
      "Tela do Cliente",
      "Modelo Cockpit",
      "Menu de Conta Corrente",
    ],
    improve: [
      "Cores do status das ações",
      "Rating do cliente",
      "Iconografia",
      "Taxonomia",
      "Indicação de produtos",
    ],
    researchDifficulties: [
      "Agenda de testes",
      "Necessidades bankers × gerentes",
      "Necessidades usuário × negócios",
    ],
  },
  prioritization: {
    title: "Priorização de funcionalidades",
    text: "A ordem do que entrar no Cockpit não era uma lista de desejos: cruzamos necessidade, segmento, peso e o que a TI realmente conseguia servir na web.",
    axes: [
      "Necessidades × funcionalidades",
      "Funcionalidades × segmentos",
      "Funcionalidades negócios × processos",
      "Funcionalidades com peso alto, médio e baixo",
      "AS IS × novas",
      "Complexidade TI × peso",
    ],
    difficulties: [
      "Funcionalidades negócios × processos",
      "AS IS dos sistemas atuais (mainframe) não significa que tenha serviço para web",
    ],
  },
  prototype: {
    title: "Prototipação e validação",
    text: "A arquitetura cobre o header (busca, pendências, perfil), o dia do gerente (agenda, produção, formalizações, Safra Performance, destaques, indicadores e notícias), a gestão de carteira, a tela do cliente — investimentos, aplicações, resgates, simulador — materiais de apoio e abertura de conta.",
    sitemapImage: "/images/cases/cockpit/sitemap.jpg",
    sitemapCaption:
      "Mapa de informação do Cockpit: gerente, clientes, tela do cliente, materiais de apoio e abertura de conta.",
    screens: [
      {
        src: "/images/cases/cockpit/home-gerente.jpg",
        alt: "Home do gerente no Cockpit: assistente virtual, prospecção e reuniões",
        caption:
          "Home do gerente — assistente virtual com ações prioritárias, funil de prospecção e agenda do dia.",
      },
      {
        src: "/images/cases/cockpit/gestao-carteira.jpg",
        alt: "Gestão de carteira: resumo da carteira, captação e lista de clientes",
        caption:
          "Clientes · gestão de carteira — resumo da alocação, captação líquida e lista de contas.",
      },
      {
        src: "/images/cases/cockpit/tela-cliente.jpg",
        alt: "Tela do cliente com assistente virtual, investimentos e perfil de risco",
        caption:
          "Tela do cliente — ações, posição de investimentos e comparação entre perfil do cliente e da carteira.",
      },
      {
        src: "/images/cases/cockpit/aplicacao.jpg",
        alt: "Fluxo de aplicação em títulos de renda fixa com filtros e tabela de produtos",
        caption:
          "Aplicar em renda fixa — filtros (FGC, IR, indexador, prazo) e tabela de CDB, LCI e demais títulos.",
      },
    ],
    prototypeDifficulties: [
      "Agrupamento de funcionalidades",
      "Tempo",
      "Aprovação comercial × gerentes",
      "Mudanças durante a documentação",
    ],
  },
  pilot: {
    title: "Homologação e piloto",
    items: [
      "Homologava antes de canais / negócios",
      "Piloto de 2 meses",
      "10 gerentes",
    ],
    findingsTitle: "Achados do piloto",
    findings: [
      "Informações que poderiam ser testadas somente em produção",
      "Fluxos que precisam ser repensados desde o negócio",
      "Monitores antigos, tudo muito branco, cansa a vista",
      "Histórico de relacionamento não estava fácil de achar",
      "Instabilidade da ferramenta",
    ],
  },
  learnings: {
    title: "O que ficou aberto",
    items: [
      {
        title: "Produção ensina o que o protótipo não vê",
        text: "Parte das informações só pôde ser testada em produção. O piloto de dois meses com 10 gerentes mostrou fluxos que precisavam ser repensados desde o negócio — não só na interface.",
      },
      {
        title: "Mainframe não é API",
        text: "O AS IS dos sistemas atuais não garantia serviço para a web. Priorizar pelo que existia no terminal era insuficiente sem olhar complexidade de TI.",
      },
      {
        title: "Gerente e banker não são o mesmo usuário",
        text: "Segmentos diferentes pedem recortes diferentes. A tensão entre necessidade do usuário e demanda de negócios atravessou pesquisa, priorização e aprovação comercial.",
      },
      {
        title: "Depois do piloto, o produto continua",
        text: "As dificuldades finais do deck: acompanhar a ferramenta em produção, trabalhar o backlog e reordenar novas demandas de negócios.",
      },
    ],
  },
  conclusion:
    "O Cockpit do Gerente não era um app a mais: era juntar o que o gerente já usava — e não encontrava — num único lugar para atender, captar e investir. O trabalho foi de pesquisa, priorização dura e prototipação sob restrição de legado; o piloto mostrou o restante, que só aparece quando a ferramenta encontra o dia real da agência.",
};
