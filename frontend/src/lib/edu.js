export const EDU = {
  name: "EDUSAUDE",
  slogan: "Conhecimento que transforma a prática em saúde.",
  headline: "Aprenda mais. Pratique melhor. Evolua sua performance na saúde.",
  sub: "Cursos, apostilas, e-books, materiais de estudo e conteúdos educacionais desenvolvidos para estudantes e profissionais da área da saúde, mentorias VIP para estudantes e profissionais da saúde.",
  heroImage: "https://images.unsplash.com/photo-1660128358414-eab8a8772b64?crop=entropy&cs=srgb&fm=jpg&q=85",
  heroImage2: "https://images.unsplash.com/photo-1691935444011-6dc287f96586?crop=entropy&cs=srgb&fm=jpg&q=85",
};

export const EDU_NAV = [
  { id: "inicio", label: "Início" },
  { id: "cursos", label: "Cursos" },
  { id: "materiais", label: "Materiais" },
  { id: "publico", label: "Para Estudantes" },
  { id: "sobre", label: "Sobre" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

export const EDU_AUDIENCES = [
  {
    id: "estudantes",
    icon: "GraduationCap",
    title: "Para estudantes",
    text: "Você é acadêmico do ciclo básico da área da saúde e precisa entender de forma descomplicada e aplicável o conteúdo denso e complexo do ciclo básico. Aqui você vai encontrar materiais para facilitar seus estudos, revisar conteúdos e se preparar para provas e avaliações da faculdade das disciplinas de anatomia humana, neuroanatomia, fisiologia humana e patologia.",
    cta: "Ver materiais",
  },
  {
    id: "profissionais",
    icon: "Stethoscope",
    title: "Para profissionais",
    text: "Conteúdos para atualização, aperfeiçoamento e aplicação prática na rotina profissional. Médicos, enfermeiros e fisioterapeutas vão encontrar materiais, cursos e infoprodutos de conteúdos vivenciados no cotidiano do contexto hospitalar, urgência e emergências, pré-hospitalar e abordagem do paciente crítico.",
    cta: "Ver produtos",
  },
];

export const EDU_CATEGORIES = [
  {
    id: "apostilas",
    icon: "BookOpen",
    title: "Apostilas",
    text: "Materiais didáticos organizados para facilitar o aprendizado e a revisão ao longo do semestre das disciplinas do ciclo básico: anatomia humana, fisiologia, neuroanatomia, parasitologia, patologia, bioquímica humana e imunologia. Materiais ilustrativos, fundamentados na aplicação clínica e em provas como ENAMED, ENADE e residências médicas e multiprofissionais.",
  },
  {
    id: "cursos",
    icon: "MonitorPlay",
    title: "Cursos Livres",
    text: "Cursos online voltados para capacitação e atualização profissional e também formação acadêmica.",
  },
  {
    id: "ebooks",
    icon: "Tablet",
    title: "E-books",
    text: "Conteúdos completos para estudo em formato digital, organizados para facilitar o aprendizado e a revisão das disciplinas do ciclo básico, com aplicação clínica e preparação para exames nacionais.",
  },
  {
    id: "questoes",
    icon: "FileQuestion",
    title: "Banco de Questões",
    text: "Questões para revisão, preparação para provas e consolidação do conhecimento das disciplinas do ciclo básico da área da saúde.",
  },
  {
    id: "mapas",
    icon: "Brain",
    title: "Mapas Mentais",
    text: "Materiais visuais para facilitar a compreensão e memorização.",
  },
  {
    id: "casos",
    icon: "ClipboardList",
    title: "Casos Clínicos",
    text: "Situações práticas para estimular o raciocínio clínico.",
  },
  {
    id: "kits",
    icon: "Package",
    title: "Kits Educacionais",
    text: "Combinações de cursos + apostilas + materiais complementares.",
  },
];

export const EDU_WHY = [
  { icon: "Microscope", title: "Conteúdo baseado em conhecimento científico", text: "Materiais elaborados com foco em informações técnicas e atualizadas." },
  { icon: "Target", title: "Foco na prática", text: "Conteúdos pensados para facilitar a conexão entre teoria e prática profissional." },
  { icon: "Lightbulb", title: "Didática simplificada", text: "Explicações objetivas, esquemas, exemplos e recursos visuais." },
  { icon: "Smartphone", title: "Estude onde quiser", text: "Acesso aos seus materiais de forma prática e conveniente." },
  { icon: "Rocket", title: "Atualização profissional", text: "Conteúdos para acompanhar a evolução do conhecimento na área da saúde." },
];

export const EDU_STEPS = [
  { n: "1", title: "Escolha", text: "Encontre o curso ou material que deseja." },
  { n: "2", title: "Compre", text: "Realize sua compra de forma segura." },
  { n: "3", title: "Acesse", text: "Receba o acesso ao produto adquirido." },
  { n: "4", title: "Estude", text: "Aprenda no seu ritmo e aplique o conhecimento." },
];

export const LEARN_LIST = [
  "Conceitos fundamentais",
  "Interpretação passo a passo",
  "Raciocínio clínico",
  "Exemplos práticos",
  "Casos clínicos",
  "Questões comentadas",
  "Aplicação na prática",
];

export const INCLUDES_LIST = [
  "Curso completo",
  "Apostila digital",
  "Material complementar",
  "Casos clínicos",
  "Banco de questões",
  "Certificado, quando aplicável",
];

export const EDU_PRODUCTS = [
  {
    id: "gasometria",
    title: "Gasometria Arterial Descomplicada: Do Resultado ao Raciocínio Clínico",
    hours: "20h",
    impact: "Aprenda a interpretar a gasometria arterial de maneira sistematizada, prática e descomplicada.",
    learn: LEARN_LIST,
    includes: INCLUDES_LIST,
    forWho: "Indicado para estudantes e profissionais de Medicina, Fisioterapia, Enfermagem e demais profissionais da saúde interessados no tema.",
    info: [
      ["Modalidade", "Online (EAD)"],
      ["Carga horária", "20h"],
      ["Formato", "Curso online + materiais digitais"],
      ["Acesso", "Após confirmação do pagamento"],
      ["Certificação", "Sim, quando aplicável"],
      ["Plataforma", "Navegador e celular"],
      ["Requisitos", "Nenhum pré-requisito"],
    ],
    oldPrice: "R$ 109,80",
    price: "R$ 79,50",
    areas: ["Fisioterapia", "Medicina", "Enfermagem", "Terapia Intensiva", "Pneumologia", "Exames laboratoriais"],
    level: "Básico / Intermediário",
    public: ["Estudante", "Profissional"],
  },
  {
    id: "exames",
    title: "Exames Laboratoriais para Fisioterapeutas",
    hours: "20h",
    impact: "Aprenda a interpretar exames laboratoriais de maneira sistematizada, prática e descomplicada.",
    learn: LEARN_LIST,
    includes: INCLUDES_LIST,
    forWho: "Indicado para estudantes e profissionais de Fisioterapia.",
    info: [
      ["Modalidade", "Online (EAD)"],
      ["Carga horária", "20h"],
      ["Formato", "Curso online + materiais digitais"],
      ["Acesso", "Após confirmação do pagamento"],
      ["Certificação", "Sim, quando aplicável"],
      ["Plataforma", "Navegador e celular"],
      ["Requisitos", "Nenhum pré-requisito"],
    ],
    oldPrice: "R$ 109,80",
    price: "R$ 79,50",
    areas: ["Fisioterapia", "Exames laboratoriais", "Terapia Intensiva"],
    level: "Básico / Intermediário",
    public: ["Estudante", "Profissional"],
  },
];

export const EDU_COMING_SOON = [
  { id: "anatomia", title: "Anatomia Humana", type: "Apostila / E-book", areas: ["Fisioterapia", "Medicina", "Enfermagem"], level: "Básico", public: ["Estudante"] },
  { id: "fisiologia", title: "Fisiologia Humana", type: "Apostila / E-book", areas: ["Fisioterapia", "Medicina", "Enfermagem"], level: "Básico", public: ["Estudante"] },
  { id: "neuroanatomia", title: "Neuroanatomia", type: "Apostila / E-book", areas: ["Fisioterapia", "Medicina"], level: "Intermediário", public: ["Estudante"] },
  { id: "patologia", title: "Patologia", type: "Apostila / E-book", areas: ["Fisioterapia", "Medicina", "Enfermagem"], level: "Básico", public: ["Estudante"] },
  { id: "bioquimica", title: "Bioquímica Humana", type: "Apostila / E-book", areas: ["Fisioterapia", "Medicina", "Enfermagem"], level: "Básico", public: ["Estudante"] },
  { id: "imunologia", title: "Imunologia", type: "Apostila / E-book", areas: ["Fisioterapia", "Medicina", "Enfermagem"], level: "Básico", public: ["Estudante"] },
];

export const EDU_COMBOS = [
  { id: "gasometria", title: "Combo Gasometria", items: "Curso + apostila + questões + casos clínicos" },
  { id: "fisioterapia", title: "Combo Fisioterapia", items: "E-book + apostila + materiais complementares" },
  { id: "academico", title: "Combo Preparação Acadêmica", items: "Apostilas + questões + mapas mentais" },
];

export const EDU_TESTIMONIALS = [
  { id: "t1", quote: "O material me ajudou muito a compreender o conteúdo do ciclo básico aplicado à prática. Caiu direto na prova.", name: "M. Alves", context: "Estudante de Fisioterapia" },
  { id: "t2", quote: "Didática direta e objetiva — exatamente o que precisava para revisar antes da residência.", name: "C. Ferreira", context: "Fisioterapeuta" },
  { id: "t3", quote: "Consegui conectar gasometria com a rotina da UTI pela primeira vez sem me perder.", name: "R. Lima", context: "Enfermeiro — UTI" },
];

export const EDU_ABOUT = {
  title: "EduSaude",
  text: "Plataforma educacional para estudantes e profissionais da saúde que precisam conectar o conhecimento estrutural básico com as práticas assistenciais da área da saúde. Uma plataforma que integra uma trilha educacional de conteúdo de ciclo básico — anatomia, fisiologia, bioquímica, semiologia, patologia, imunologia, parasitologia — ao contexto clínico, raciocínio e procedimentos das práticas das áreas da saúde.",
  purpose: "O propósito da plataforma é facilitar a compreensão do conteúdo do ciclo básico com sua aplicabilidade no contexto específico da formação e atuação como profissional.",
};

export const EDU_AUTHOR = {
  name: "Dr. Rafael Dantas",
  role: "Fisioterapeuta",
  bio: [
    "14 anos de experiência em fisioterapia assistencial no segmento hospitalar, UTI, clínica de reabilitação funcional e atendimentos domiciliares.",
    "Acadêmico de Medicina — 2º Período.",
    "11 anos de docência no ensino da área da saúde nos níveis técnico e superior, com foco nas disciplinas do ciclo básico: anatomia humana, fisiologia humana, neuroanatomia, anatomia palpatória e anatomia seccional — nos cursos técnicos de radiologia e enfermagem, massoterapia, fisioterapia, psicologia, medicina, farmácia, nutrição, terapia ocupacional, estética e cosmetologia e fonoaudiologia.",
    "Especialista em Fisioterapia Intensiva Adulto; Especialista em Fisioterapia Neurofuncional; Mestre em Terapia Intensiva Adulto.",
  ],
};

export const EDU_FAQ = [
  { q: "Como recebo meu produto após a compra?", a: "Após a confirmação do pagamento, você recebe os dados de acesso por e-mail e WhatsApp." },
  { q: "O acesso é imediato?", a: "O acesso é liberado após a confirmação do pagamento, normalmente em poucos minutos." },
  { q: "Por quanto tempo terei acesso?", a: "O prazo de acesso é informado em cada produto na hora da compra." },
  { q: "Os cursos possuem certificado?", a: "Sim, quando aplicável. O certificado é emitido após a conclusão do curso conforme a carga horária." },
  { q: "Os materiais são digitais?", a: "Sim. Apostilas, e-books, mapas mentais, questões e casos clínicos são 100% digitais." },
  { q: "Posso acessar pelo celular?", a: "Sim, a plataforma funciona no navegador do computador e do celular." },
  { q: "Qual plataforma será utilizada?", a: "O acesso aos produtos é feito por plataforma online, sem necessidade de instalação." },
  { q: "Posso estudar no meu próprio ritmo?", a: "Sim, os conteúdos ficam disponíveis para você estudar no seu ritmo, dentro do prazo de acesso." },
  { q: "Como funciona o pagamento?", a: "A compra é feita de forma segura, com pagamento processado em ambiente protegido." },
  { q: "Como funciona o suporte?", a: "Você fala diretamente com a equipe pelo WhatsApp e e-mail informados no site." },
  { q: "Posso solicitar reembolso?", a: "Consulte a Política de Reembolso — o consumidor tem direito de desistência em compras online conforme a legislação vigente." },
];

export const EDU_SECURITY = [
  { icon: "Lock", text: "Compra segura" },
  { icon: "CreditCard", text: "Pagamento protegido" },
  { icon: "Smartphone", text: "Acesso online" },
  { icon: "FileCheck", text: "Certificação quando aplicável" },
  { icon: "ShieldCheck", text: "Política de privacidade" },
];
