import drRafaelPhoto from "@/assets/dr-rafael.png";

export const SITE = {
  name: "Dr Rafael Dantas",
  fullName: "Francisco Rafael Pinheiro Dantas",
  tagline: "Movimento • Saúde • Qualidade de Vida",
  role: "Fisioterapeuta — Especialista em Terapia Intensiva Adulto",
  lattesNote: "Currículo público (Lattes), coletado em 04/03/2024",
};

/* CONTACT PLACEHOLDERS — substitua aqui pelos contatos reais */
export const WHATSAPP_NUMBER = "5585999999999"; // placeholder
export const WHATSAPP_DISPLAY = "+55 (85) 99999-9999";
export const EMAIL_DISPLAY = "contato@seudominio.com.br"; // placeholder
export const REGION_DISPLAY = "Maracanaú / CE — Consultório e atendimento domiciliar";

export const buildWaLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINK = buildWaLink(
  "Olá, Dr. Rafael Dantas! Gostaria de agendar uma consulta para avaliação fisioterapêutica."
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
  { id: "servicos", label: "Serviços" },
  { id: "abordagem", label: "Abordagem" },
  { id: "trajetoria", label: "Trajetória" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "contato", label: "Contato" },
];

export const MARQUEE_ITEMS = [
  "Especialista em UTI Adulto — Albert Einstein-SP",
  "Mestre em Terapia Intensiva — SOBRATI",
  "Reabilitação Pós-COVID & Respiratória",
  "Atendimento Domiciliar Personalizado",
  "Gestão em Saúde & Simulação Clínica — ESP/CE",
  "Movimento • Saúde • Qualidade de Vida",
];

export const MANIFESTO_CHAPTERS = [
  {
    number: "01",
    title: "Fisiologia Respiratória Aplicada",
    text: "Da alta complexidade hospitalar de UTI ao domicílio: estratégias respiratórias fundamentadas em ventilação protetora e reexpansão pulmonar.",
  },
  {
    number: "02",
    title: "Biomecânica e Reabilitação Funcional",
    text: "Cada vértebra, articulação e cadeia muscular integrada para restaurar a dignidade e a independência de movimentos sem dor.",
  },
  {
    number: "03",
    title: "Humanização e Base Científica",
    text: "Mais de uma década na linha de frente do SUS, preceptoria de residência e gestão de centro de simulação traduzidos em escuta atenta e conduta ética.",
  },
];

export const SERVICES = [
  {
    id: "respiratoria",
    testId: "service-card-respiratory",
    number: "01",
    title: "Fisioterapia Respiratória Avançada",
    badge: "Alta Complexidade",
    description:
      "Desobstrução brônquica, fortalecimento da musculatura ventilatória, treinamento muscular inspiratório (TMI) e recondicionamento cardiorrespiratório para quadros agudos e crônicos.",
    image:
      "https://images.pexels.com/photos/32351204/pexels-photo-32351204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "pos-covid",
    testId: "service-card-pos-covid",
    number: "02",
    title: "Reabilitação Pós-COVID & Pós-Intubação",
    badge: "Recuperação Integrada",
    description:
      "Protocolos específicos para fadiga persistente, dispneia residual, sequelas fibróticas e polineuropatia do doente crítico — com histórico de liderança em UTI COVID.",
    image:
      "https://images.unsplash.com/photo-1688565631550-ff8aa569f71a?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    id: "domiciliar",
    testId: "service-card-home-care",
    number: "03",
    title: "Atendimento Fisioterapêutico Domiciliar",
    badge: "Conforto & Segurança",
    description:
      "Assistência no conforto do lar para pacientes idosos, pós-cirúrgicos ou com restrição severa de mobilidade, garantindo continuidade terapêutica sem desgaste de locomoção.",
    image:
      "https://images.unsplash.com/photo-1723433892471-62f113c8c9a0?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    id: "coluna",
    testId: "service-card-spine",
    number: "04",
    title: "Coluna & Reeducação Postural",
    badge: "Alívio & Movimento",
    description:
      "Tratamento de lombalgias, cervicalgias e desequilíbrios miofasciais por meio de terapia manual, cinesioterapia específica e exercícios terapêuticos orientados.",
    image:
      "https://images.unsplash.com/photo-1699523229487-bddb965a3307?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    id: "educacao",
    testId: "service-card-education",
    number: "05",
    title: "Educação em Saúde & Simulação Clínica",
    badge: "Acadêmico & Consultoria",
    description:
      "Capacitação de cuidadores e equipes multiprofissionais, workshops de ergonomia e consultoria em simulação realística — experiência de quem gere o centro estadual de simulação da ESP/CE.",
    image:
      "https://images.pexels.com/photos/20860590/pexels-photo-20860590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const TIMELINE = [
  {
    period: "Especialização de Referência",
    institution: "Instituto Israelita Albert Einstein (SP)",
    role: "Especialista em Fisioterapia em Terapia Intensiva Adulto",
    details:
      "Treinamento intensivo em ventilação mecânica invasiva e não invasiva, mobilização precoce do doente crítico e monitorização hemodinâmica.",
  },
  {
    period: "Mestrado Profissional",
    institution: "SOBRATI — Sociedade Brasileira de Terapia Intensiva",
    role: "Mestre em Terapia Intensiva Adulto",
    details:
      "Dissertação sobre interfaces tipo capacete/helmet: eficácia, funcionalidade e conforto na ventilação de suporte.",
  },
  {
    period: "Gestão & Saúde Pública",
    institution: "Escola de Saúde Pública do Ceará (ESP/CE)",
    role: "Especialista em Saúde da Família e em Gestão para Resultados (GpR)",
    details:
      "Formação em saúde coletiva, gestão estratégica e decisão fundamentada em dados e impacto populacional.",
  },
  {
    period: "Linha de Frente Hospitalar",
    institution: "Hospital Municipal Dr. João Elísio de Holanda",
    role: "Fisioterapeuta Intensivista — UTI COVID e Clínica Adulto",
    details:
      "Atuação decisiva na pandemia: ventilação de resgate, manejo do paciente crítico e reabilitação funcional pós-extubação.",
  },
  {
    period: "Gestão e Simulação em Saúde",
    institution: "CSS / ESP.CE",
    role: "Gerente do Centro Estadual de Simulação em Saúde & Membro do CODES",
    details:
      "Liderança em tecnologia educacional, metodologias ativas e simulação realística para equipes multidisciplinares.",
  },
  {
    period: "Saúde da Família & Comunidade",
    institution: "NASF Maracanaú (2013 – 2018)",
    role: "Fisioterapeuta do Núcleo de Apoio à Saúde da Família — 5 anos",
    details:
      "Cinco anos de cuidado comunitário direto, prevenção de incapacidades e apoio a idosos e famílias.",
  },
  {
    period: "Docência & Formação",
    institution: "Faculdade Uninassau, CEEDS e ESP.CE/RIS",
    role: "Docente e Preceptor da Residência Integrada em Saúde",
    details:
      "Formação de novas gerações de fisioterapeutas com ênfase em Saúde da Família, ética profissional e evidência científica.",
  },
];

export const TRIAGE_OPTIONS = [
  {
    id: "respiratoria",
    label: "Reabilitação respiratória / falta de ar pós-infecção",
    match: "Fisioterapia Respiratória Avançada",
    reason:
      "Condutas de reexpansão pulmonar e treinamento muscular inspiratório indicadas para recuperar o fôlego com segurança.",
    wa: "Olá, Dr. Rafael! Tenho falta de ar / quadro respiratório após uma infecção e gostaria de agendar uma avaliação.",
  },
  {
    id: "domiciliar",
    label: "Atendimento domiciliar para familiar idoso ou acamado",
    match: "Atendimento Fisioterapêutico Domiciliar",
    reason:
      "Assistência completa no conforto de casa, com plano de cuidados desenhado para a rotina da família.",
    wa: "Olá, Dr. Rafael! Procuro atendimento fisioterapêutico domiciliar para um familiar idoso/acamado. Podemos conversar?",
  },
  {
    id: "coluna",
    label: "Dores crônicas na coluna e restrição de movimento",
    match: "Coluna & Reeducação Postural",
    reason:
      "Terapia manual e cinesioterapia específica para aliviar a dor e devolver autonomia aos movimentos do dia a dia.",
    wa: "Olá, Dr. Rafael! Sinto dores na coluna e limitação de movimento. Gostaria de agendar uma avaliação.",
  },
  {
    id: "pos-alta",
    label: "Pós-alta hospitalar ou pós-cirúrgico",
    match: "Reabilitação Pós-COVID & Pós-Intubação",
    reason:
      "Recondicionamento progressivo pós-internação, incluindo fadiga, perda de força e cansaço ao esforço.",
    wa: "Olá, Dr. Rafael! Estou em recuperação pós-alta hospitalar/pós-cirúrgica e procuro reabilitação fisioterapêutica.",
  },
  {
    id: "capacitacao",
    label: "Capacitação institucional ou educação em saúde",
    match: "Educação em Saúde & Simulação Clínica",
    reason:
      "Trilhas de capacitação para equipes, cuidadores e instituições — da ergonomia à simulação realística.",
    wa: "Olá, Dr. Rafael! Tenho interesse em capacitação/educação em saúde para minha equipe ou instituição.",
  },
];

export const HERO_IMAGE = drRafaelPhoto;

export const TESTIMONIALS = [
  {
    id: "pos-covid",
    quote:
      "Depois da alta da UTI, eu não conseguia subir um lance de escada sem me perder no fôlego. O Dr. Rafael montou um plano que me devolveu o ar e a confiança. Hoje voltei a caminhar com minha família.",
    name: "Ana C.",
    context: "Paciente — Reabilitação pós-COVID e pós-intubação",
    initials: "AC",
  },
  {
    id: "domiciliar",
    quote:
      "O cuidado com minha mãe em casa mudou tudo: sem desgaste de deslocamento e sempre explicando cada etapa para a família. Profissionalismo e carinho no mesmo atendimento.",
    name: "João P.",
    context: "Familiar de paciente acamada — atendimento domiciliar",
    initials: "JP",
  },
  {
    id: "respiratoria",
    quote:
      "Anos de bronquite crônica e ninguém tinha me ensinado a respirar de verdade. O treinamento que fiz muda meu dia a dia até hoje.",
    name: "Maria S.",
    context: "Paciente — Fisioterapia respiratória",
    initials: "MS",
  },
  {
    id: "institucional",
    quote:
      "A capacitação em simulação realística transformou a segurança das nossas equipes. Didática impecável de quem gere um centro estadual de referência.",
    name: "Coordenação de equipe multiprofissional",
    context: "Instituição de saúde — capacitação em serviço",
    initials: "CE",
  },
];
