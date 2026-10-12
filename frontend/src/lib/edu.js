export const EDU = {
  name: "EDUSAUDE",
  slogan: "Conhecimento que transforma a prática em saúde.",
  headline: "Aprenda mais. Pratique melhor. Evolua sua performance na saúde.",
  sub: "Cursos, apostilas, e-books, materiais de estudo e conteúdos educacionais desenvolvidos para estudantes e profissionais da área da saúde, mentorias VIP para estudantes e profissionais da saúde.",
  // Imagem de destaque de estudante de saúde com jaleco e livros/estudos
  heroImage: "/fisio-estuda.jpg",
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
    id: "questoes",
    icon: "FileQuestion",
    title: "Banco de Questões",
    text: "Questões para revisão, preparação para provas e consolidação do conhecimento das disciplinas do ciclo básico da área da saúde.",
    buyUrl: "",
  },
  {
    id: "mapas",
    icon: "Brain",
    title: "Mapas Mentais",
    text: "Materiais visuais para facilitar a compreensão e memorização.",
    buyUrl: "",
  },
  {
    id: "casos",
    icon: "ClipboardList",
    title: "Casos Clínicos",
    text: "Situações práticas para estimular o raciocínio clínico.",
    buyUrl: "",
  },
  {
    id: "kits",
    icon: "Package",
    title: "Kits Educacionais",
    text: "Combinações de cursos + apostilas + materiais complementares.",
    buyUrl: "",
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
    buyUrl: "https://gex.goexplosion.com/link/checkout?utm=desvendando-a-gasometria-arterial-",
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
    price: "R$ 59,90",
    areas: ["Fisioterapia", "Medicina", "Enfermagem", "Terapia Intensiva", "Pneumologia", "Exames laboratoriais"],
    level: "Básico / Intermediário",
    public: ["Estudante", "Profissional"],
  },
  {
    id: "exames",
    // NOME ATUALIZADO
    title: "Exames Laboratoriais na Fisioterapia: Do Resultado à Conduta",
    hours: "20h",
    impact: "Aprenda a interpretar exames laboratoriais de maneira sistematizada, prática e descomplicada aplicada à conduta fisioterapêutica.",
    buyUrl: "https://pay.hotmart.com/L107745336B",
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
    price: "R$ 74,90",
    areas: ["Fisioterapia", "Exames laboratoriais", "Terapia Intensiva"],
    level: "Básico / Intermediário",
    public: ["Estudante", "Profissional"],
  },
  {
    id: "fisioterapia-hospitalar",
    // NOVO CURSO ADICIONADO
    title: "Fisioterapia Hospitalar — Guia Prático e Descomplicado",
    hours: "30h",
    impact: "Domine a rotina assistencial, avaliação e condutas fisioterapêuticas no ambiente hospitalar e enfermarias.",
    buyUrl: "https://gex.goexplosion.com/link/checkout?utm=fisioterapia-hospitalar-guia-pratico-e-descomplicado-",
    learn: LEARN_LIST,
    includes: INCLUDES_LIST,
    forWho: "Indicado para acadêmicos de Fisioterapia, estagiários e fisioterapeutas recém-formados que atuam ou desejam atuar no contexto hospitalar.",
    info: [
      ["Modalidade", "Online (EAD)"],
      ["Carga horária", "30h"],
      ["Formato", "Curso online + materiais digitais"],
      ["Acesso", "Após confirmação do pagamento"],
      ["Certificação", "Sim, quando aplicável"],
      ["Plataforma", "Navegador e celular"],
      ["Requisitos", "Nenhum pré-requisito"],
    ],
    oldPrice: "R$ 149,80",
    price: "R$ 79,90",
    areas: ["Fisioterapia", "Hospitalar", "Enfermaria", "Avaliando o Paciente Crítico"],
    level: "Básico / Intermediário",
    public: ["Estudante", "Profissional"],
  },
  {
    id: "fisio-rumo-residencia",
    title: "Fisio Rumo à Residência",
    hours: "E-book",
    impact: "Guia completo e direcionado para aprovação nos processos seletivos de residência em Fisioterapia.",
    // LINK DE VENDA DA HOTMART:
    buyUrl: "https://go.hotmart.com/E107966243Y", 
    learn: [
      "Conteúdos mais cobrados nas provas de residência",
      "Resolução e raciocínio de questões",
      "Estratégia de estudo direcionada",
      "Revisão rápida dos principais pontos clínicos",
    ],
    includes: [
      "E-book digital completo (PDF)",
      "Acesso imediato no e-mail",
      "Material 100% otimizado para leitura no celular ou tablet",
    ],
    forWho: "Indicado para acadêmicos dos últimos semestres e fisioterapeutas graduados que buscam a aprovação na Residência Multiprofissional.",
    info: [
      ["Modalidade", "Digital (E-book)"],
      ["Formato", "PDF / Download imediato"],
      ["Acesso", "Imediato após confirmação"],
      ["Plataforma", "Hotmart"],
    ],
    oldPrice: "R$ 97,00",
    price: "R$ 62,50", // Ajuste o preço conforme cadastrado na Hotmart
    areas: ["Fisioterapia", "Residência", "Provas & Seleções"],
    level: "Preparatório",
    public: ["Estudante", "Profissional"],
  },
  {
    id: "atlas-neuroanatomia",
    title: "Atlas Visual: Neuroanatomia Funcional e Clínica — Ciclo Básico",
    hours: "E-book",
    impact: "Compreenda a estrutura e o funcionamento do sistema nervoso de forma visual, descomplicada e aplicada à prática clínica.",
    buyUrl: "https://go.hotmart.com/Q107973398M",
    learn: [
      "Anatomia e organização do Sistema Nervoso Central e Periférico",
      "Vias motoras e sensitivas com esquemas visuais",
      "Correlação neuroanatômica com casos clínicos do cotidiano",
      "Didática facilitada para revisão e provas do ciclo básico",
    ],
    includes: [
      "E-book digital em alta resolução (PDF)",
      "Acesso imediato via Hotmart",
      "Ilustrações e esquemas práticos para fixação",
    ],
    forWho: "Estudantes do ciclo básico da área da saúde (Medicina, Fisioterapia, Enfermagem, Psicologia) e profissionais que buscam revisar a neuroanatomia.",
    info: [
      ["Modalidade", "Digital (E-book)"],
      ["Formato", "PDF / Download imediato"],
      ["Acesso", "Imediato após confirmação"],
      ["Plataforma", "Hotmart"],
    ],
    oldPrice: "R$ 89,90",
    price: "R$ 61,90", // Ajuste o valor conforme cadastrado na Hotmart
    areas: ["Neuroanatomia", "Ciclo Básico", "Fisioterapia", "Medicina"],
    level: "Básico / Intermediário",
    public: ["Estudante", "Profissional"],
  },
  {
    id: "atlas-trauma",
    title: "Atlas Visual de Trauma",
    hours: "Digital (E-book)",
    impact: "Guia prático e ilustrado sobre atendimento, identificação e condutas nas principais emergências e lesões traumáticas.",
    buyUrl: "https://go.hotmart.com/J107974648I",
    learn: [
      "Mecanismos de trauma e avaliação inicial sistematizada",
      "Abordagem de traumas ortopédicos, torácicos e abdominais",
      "Raciocínio clínico e tomada de decisão em urgência/emergência",
      "Esquemas visuais focados em retenção rápida de conteúdo",
    ],
    includes: [
      "Acesso completo ao material na plataforma",
      "Estudo no seu próprio ritmo",
      "Conteúdo 100% focado na prática hospitalar e pré-hospitalar",
    ],
    forWho: "Estudantes e profissionais da saúde que atuam ou desejam atuar em pronto-socorro, UTI, emergências e atendimento pré-hospitalar.",
    info: [
      ["Modalidade", "Digital (E-book)"],
      ["Formato", "Conteúdo Digital"],
      ["Acesso", "Imediato após confirmação"],
      ["Plataforma", "Hotmart"],
    ],
    oldPrice: "R$ 79,90",
    price: "R$ 37,80", // Ajuste o valor conforme cadastrado na Hotmart
    areas: ["Trauma", "Urgência e Emergência", "Hospitalar", "Fisioterapia", "Medicina", "Enfermagem"],
    level: "Intermediário",
    public: ["Estudante", "Profissional"],
  },

];

export const EDU_COMING_SOON = [

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
  role: "Fisioterapeuta e Acadêmico de Medicina",
  bio: [
    "14 anos de experiência em fisioterapia assistencial no segmento hospitalar, UTI, clínica de reabilitação funcional e atendimentos domiciliares.",
    "Acadêmico de Medicina — UNINASSAU Maracanaú.",
    "Coordenador do curso de Fisioterapia — UNINASSAU Maracanaú.",
    "Especialista em Fisioterapia Intensiva Adulto (Hospital Israelita Albert Einstein - SP) e Mestre em Terapia Intensiva Adulto (SOBRATI - SP).",
    "Especialista em Saúde da Família e Comunidade — ESP-CE.",
    "Especialista em Gestão para Resultados — ESP-CE.",
    "Docente universitário no ensino da área da saúde com foco em disciplinas do ciclo básico e vivência clínica.",
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
