import drRafaelPhoto from "@/assets/dr-rafael.png";

export const SITE = {
  name: "Dr. Rafael Dantas",
  tagline: "Atendimento e Consultoria em Fisioterapia",
  crefito: "CREFITO 170532-F",
  role: "Fisioterapeuta e Acadêmico de Medicina",
  experience: "14 anos de experiência profissional em atendimento de fisioterapia domiciliar, em hospitais, unidades de terapia intensiva e ambiente de clínica.",
};

export const WHATSAPP_NUMBER = "5585987020755";
export const WHATSAPP_DISPLAY = "(85) 98702-0755";
export const INSTAGRAM_HANDLE = "@rafael.fisioterapeuta.dantas";
export const INSTAGRAM_URL = "https://instagram.com/rafael.fisioterapeuta.dantas";

export const buildWaLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINK = buildWaLink(
  "Olá, Dr. Rafael Dantas! Gostaria de agendar uma avaliação fisioterapêutica."
);

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -76, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const NAV_LINKS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "especialidades", label: "Especialidades" },
  { id: "domiciliar", label: "Domiciliar" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

export const HERO = {
  eyebrow: "Fisioterapia Neurofuncional • Respiratória • Geriátrica",
  headline: [
    "Fisioterapia especializada para",
    "recuperar movimentos, melhorar",
    "a respiração e promover mais",
    "independência.",
  ],
  sub: "Atendimento fisioterapêutico especializado para adultos, crianças e idosos, com foco em Fisioterapia Neurofuncional, Respiratória e Geriátrica.",
  primaryCta: "Agendar avaliação",
  secondaryCta: "Falar pelo WhatsApp",
  images: {
    neuro: "https://images.unsplash.com/photo-1645005513751-e22717a66ae6?crop=entropy&cs=srgb&fm=jpg&q=85",
    resp: "https://images.pexels.com/photos/32351204/pexels-photo-32351204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    elderly: "https://images.unsplash.com/photo-1781698334159-d92aaaa0eef6?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
};

export const MARQUEE_ITEMS = [
  "Fisioterapia Neurofuncional",
  "Fisioterapia Respiratória — adulto e pediátrico",
  "Fisioterapia em Geriatria",
  "Atendimento domiciliar • home care",
  "Especialista em Terapia Intensiva — Albert Einstein-SP",
  "Movimento • Saúde • Qualidade de Vida",
];

export const ABOUT = {
  title: "Conheça o Dr. Rafael Dantas",
  credentials: [
    "Fisioterapeuta e Acadêmico de Medicina",
    "CREFITO 170532-F",
    "Especialista em Fisioterapia Intensiva Adulto",
    "Especialista em Fisioterapia Neurofuncional",
    "Mestre em Terapia Intensiva Adulto",
  ],
  areas: [
    "Fisioterapia Neurofuncional adulto",
    "Fisioterapia Respiratória adulto e pediátrico",
    "Fisioterapia em Geriatria (idosos)",
  ],
  region: "Região de atendimento em Maracanaú / home care em regiões próximas: Fortaleza, Pacatuba, Maranguape e Caucaia.",
  text: [
    "Atendimento fisioterapêutico individualizado, baseado na avaliação clínica e nas necessidades específicas de cada paciente.",
    "O objetivo é compreender as limitações funcionais de cada pessoa e estabelecer um plano terapêutico adequado, buscando evolução, segurança, autonomia e qualidade de vida.",
  ],
  photo: drRafaelPhoto,
};

export const SPECIALTIES = [
  {
    id: "neurofuncional",
    number: "01",
    icon: "Brain",
    title: "Fisioterapia Neurofuncional",
    lead:
      "Reabilitação de pessoas com alterações neurológicas que podem comprometer movimento, equilíbrio, força, coordenação e independência funcional.",
    conditionsTitle: "Exemplos de condições",
    conditions: ["AVC", "Parkinson", "Esclerose múltipla", "Lesão medular", "Traumatismo cranioencefálico", "Neuropatias", "Doenças neuromusculares", "Alterações de equilíbrio e marcha", "Déficits motores"],
    goalsTitle: "Objetivos",
    goals: ["melhorar mobilidade", "trabalhar equilíbrio e coordenação", "desenvolver força e controle motor", "melhorar marcha", "prevenir complicações", "favorecer maior independência funcional"],
    cta: { label: "Conheça a Fisioterapia Neurofuncional", wa: "Olá, Dr. Rafael! Gostaria de saber mais sobre a Fisioterapia Neurofuncional." },
    image: HERO.images.neuro,
  },
  {
    id: "respiratoria",
    number: "02",
    icon: "Wind",
    title: "Fisioterapia Respiratória — Mais conforto e eficiência para respirar",
    lead:
      "Atendimento para adultos e crianças, com avaliação individualizada da função respiratória e definição da conduta de acordo com as necessidades de cada paciente.",
    conditionsTitle: "Pode incluir pacientes com",
    conditions: ["DPOC", "asma", "pneumonias", "bronquiolites", "doenças respiratórias recorrentes", "fibrose cística", "redução da capacidade respiratória", "condições neurológicas associadas a comprometimento respiratório", "pacientes acamados ou com mobilidade reduzida"],
    goalsTitle: "Objetivos",
    goals: ["melhorar a ventilação pulmonar", "auxiliar na mobilização e eliminação de secreções", "favorecer expansão pulmonar", "melhorar condicionamento respiratório", "reduzir complicações decorrentes da imobilidade", "promover maior conforto respiratório"],
    cta: { label: "Conheça a Fisioterapia Respiratória", wa: "Olá, Dr. Rafael! Gostaria de saber mais sobre a Fisioterapia Respiratória." },
    image: HERO.images.resp,
  },
  {
    id: "geriatrica",
    number: "03",
    icon: "PersonStanding",
    title: "Fisioterapia Geriátrica — Mais autonomia para viver melhor",
    lead:
      "Uma abordagem voltada para preservar e recuperar a capacidade funcional da pessoa idosa, considerando suas necessidades individuais.",
    conditionsTitle: "Principais objetivos",
    conditions: ["prevenir quedas", "melhorar equilíbrio", "melhorar força muscular", "trabalhar marcha", "preservar mobilidade", "reduzir os impactos do sedentarismo", "favorecer independência nas atividades diárias", "auxiliar na recuperação após internações", "prevenir perdas funcionais"],
    goalsTitle: null,
    goals: [],
    callout: "Envelhecer faz parte da vida. Perder independência não precisa fazer parte do processo.",
    cta: { label: "Agendar avaliação geriátrica", wa: "Olá, Dr. Rafael! Gostaria de agendar uma avaliação de fisioterapia geriátrica." },
    image: HERO.images.elderly,
  },
];

export const HOMECARE = {
  title: "Fisioterapia no conforto da sua casa",
  lead:
    "Nem sempre o paciente consegue se deslocar até uma clínica. Por isso, o atendimento domiciliar permite levar a fisioterapia até o ambiente onde o paciente vive.",
  forWhom: [
    "com dificuldade de locomoção",
    "acamadas",
    "idosas",
    "em recuperação",
    "com limitações neurológicas",
    "com necessidades respiratórias específicas",
  ],
  benefits: [
    "maior comodidade",
    "atendimento individualizado",
    "participação da família/cuidador",
    "avaliação do paciente no ambiente em que vive",
    "continuidade do tratamento",
  ],
  cta: { label: "Verificar disponibilidade para atendimento domiciliar", wa: "Olá, Dr. Rafael! Gostaria de verificar a disponibilidade para atendimento domiciliar na minha região." },
  image: "https://images.unsplash.com/photo-1723433892471-62f113c8c9a0?crop=entropy&cs=srgb&fm=jpg&q=85",
};

export const STEPS = [
  { n: "1", title: "Avaliação", text: "Primeiro, entendemos as necessidades e limitações do paciente." },
  { n: "2", title: "Definição dos objetivos", text: "Estabelecemos objetivos terapêuticos individualizados." },
  { n: "3", title: "Plano de tratamento", text: "As estratégias fisioterapêuticas são definidas de acordo com a avaliação." },
  { n: "4", title: "Acompanhamento", text: "A evolução é acompanhada ao longo do tratamento." },
  { n: "5", title: "Orientação", text: "Paciente, familiares e cuidadores recebem orientações quando necessário." },
];

export const FOR_WHO = [
  { icon: "Baby", title: "Crianças", text: "Fisioterapia respiratória pediátrica" },
  { icon: "UserRound", title: "Adultos", text: "Fisioterapia neurofuncional e respiratória" },
  { icon: "PersonStanding", title: "Idosos", text: "Fisioterapia geriátrica, neurofuncional e respiratória" },
];

export const SIGNS = [
  "dificuldade para caminhar",
  "perda de equilíbrio",
  "quedas frequentes",
  "redução de força",
  "dificuldade para realizar atividades do dia a dia",
  "perda de independência",
  "dificuldade respiratória",
  "excesso de secreção",
  "redução da mobilidade",
  "recuperação após internação",
  "alterações após AVC, Parkinson, Esclerose Múltipla, Polineuropatias ou outras condições neurológicas",
  "dificuldade para realizar atividades que antes eram fáceis",
];

export const SIGNS_CALL =
  "Não espere uma limitação se tornar uma perda de independência. Uma avaliação pode ajudar a identificar necessidades e possibilidades de intervenção.";

export const DIFFERENTIALS = [
  { title: "Atendimento individualizado", text: "Cada paciente possui necessidades e objetivos diferentes." },
  { title: "Avaliação antes da conduta", text: "O tratamento é definido a partir das necessidades identificadas." },
  { title: "Atendimento humanizado", text: "Respeito ao ritmo, às limitações e aos objetivos do paciente." },
  { title: "Orientação para familiares e cuidadores", text: "Quando necessário, a família participa do processo de cuidado." },
  { title: "Abordagem baseada em funcionalidade", text: "Foco não apenas na condição clínica, mas também no que o paciente precisa realizar no cotidiano." },
  { title: "Acompanhamento da evolução", text: "O progresso é acompanhado durante o tratamento." },
];

export const EXTRA_SERVICES = [
  {
    title: "Relatórios de incapacidade funcional",
    text: "Emissão de relatórios de incapacidades funcionais para benefícios do governo, mediante avaliação fisioterapêutica e diagnóstico de incapacidade funcional.",
  },
  {
    title: "Consultoria de adaptação ergonômica domiciliar",
    text: "Avaliação e consultoria para adaptação do ambiente domiciliar às limitações funcionais do paciente. Mapeamos toda a casa (quarto, banheiro, rotinas de cuidado e mobilidade) e entregamos uma lista de materiais a providenciar e como usá-los — pensando na qualidade do movimento e na prevenção de lesões do paciente e dos cuidadores.",
  },
  {
    title: "Treinamento individualizado de cuidadores",
    text: "Treinamento no manejo de transferências (sentar, levantar, deitar), redução de quedas, aspiração de secreção, prevenção de lesões por pressão, trocas de sondas e cateteres e cuidados respiratórios contínuos domiciliares.",
  },
];

export const TESTIMONIALS = [
  {
    id: "ariane",
    quote: "Depois da alta da UTI, eu não conseguia subir um lance de escada sem me perder no fôlego. O Dr. Rafael montou um plano que me devolveu o ar e a confiança.",
    name: "Ariane",
    context: "Paciente — Reabilitação respiratória",
    initials: "A",
  },
  {
    id: "imaculada",
    quote: "O cuidado com minha mãe em casa mudou tudo: sem desgaste de deslocamento e sempre explicando cada etapa para a família. Profissionalismo e carinho no mesmo atendimento.",
    name: "Imaculada",
    context: "Familiar de paciente — atendimento domiciliar",
    initials: "I",
  },
  {
    id: "neuro",
    quote: "Após o AVC, cada pequeno progresso era comemorado. Hoje volto a fazer minhas atividades com muito mais segurança e equilíbrio.",
    name: "J. S.",
    context: "Paciente — Reabilitação neurofuncional",
    initials: "JS",
  },
];

export const FAQ = [
  { q: "A fisioterapia é indicada para idosos?", a: "Sim. A fisioterapia pode atuar na manutenção e recuperação da capacidade funcional, equilíbrio, força, mobilidade e independência." },
  { q: "Atende crianças?", a: "Sim, com foco em fisioterapia respiratória pediátrica, conforme avaliação e indicação." },
  { q: "O atendimento é domiciliar?", a: "Temos também o serviço de atendimento domiciliar que abrange os seguintes locais: Maracanaú, Maranguape, Fortaleza, Pacatuba e Caucaia. Agende uma avaliação domiciliar: o profissional vai até a residência do paciente, realiza a avaliação fisioterapêutica, prescreve o plano de tratamento individualizado e agenda os dias e horários dos atendimentos." },
  { q: "Preciso de encaminhamento médico?", a: "Não. Segundo a Resolução COFFITO nº 80/1987, o fisioterapeuta é um profissional de primeiro contato, com autonomia para avaliar, diagnosticar e tratar pacientes sem obrigatoriedade de encaminhamento médico ou de outro profissional da saúde." },
  { q: "Como é feita a primeira avaliação?", a: "O paciente passará por uma avaliação cinética funcional (fisioterapêutica) conforme suas queixas principais, a história da doença e seus diversos sintomas. Com essa avaliação, o fisioterapeuta fecha o diagnóstico cinético funcional e traça um plano fisioterapêutico individualizado." },
  { q: "Atende pacientes acamados?", a: "Sim, faz parte dos serviços especializados ofertados." },
  { q: "Familiares podem acompanhar?", a: "Sim, quando pertinente." },
];

export const LOCATION = {
  clinic: {
    title: "Espaço Físico — Clínica Aline Maciel (7º Andar)",
    address: "Edifício Business Place, Av. Contorno Norte, nº 57 — Torre II, Jereissati I — Setor B, Maracanaú/CE",
    hours: [
      { day: "Terças", time: "13h às 17h" },
      { day: "Quartas", time: "13h às 20h" },
      { day: "Sábados", time: "8h às 12h" },
    ],
    mapQuery: "Edifício Business Place, Av. Contorno Norte 57, Jereissati I, Maracanaú CE",
  },
  home: "Atendimento domiciliar: manhã ou tarde, conforme agendamento, após avaliação.",
};

export const FINAL_CTA = {
  title: "Seu próximo passo pode começar com uma avaliação.",
  sub: "Entre em contato e verifique a disponibilidade de atendimento.",
  button: "AGENDAR AVALIAÇÃO",
};
