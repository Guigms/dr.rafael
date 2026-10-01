# PRD — Dr Rafael Dantas · Fisioterapia (Assistencial + EDUSAUDE)

## Atualização 2026-10-01 — DUAS ÁREAS
- `/` = ÁREA ASSISTENCIAL reestruturada conforme briefing: hero (headline/subtítulo/CTAs/foto + 3 miniaturas), Sobre (CREFITO 170532-F, 14 anos, áreas, região Maracanaú + home care Fortaleza/Pacatuba/Maranguape/Caucaia), 3 Especialidades (Neurofuncional/Respiratória/Geriátrica com condições + objetivos + CTAs), Atendimento Domiciliar (benefícios), Como Funciona (5 passos), Para Quem É (crianças/adultos/idosos), Sinais de Avaliação (12 + chamada), Diferenciais (6) + serviços extras (relatórios, consultoria ergonômica, treinamento de cuidadores), Depoimentos (Ariane/Imaculada — texto de exemplo), FAQ (7 perguntas com respostas do briefing), Onde Atendo (Clínica Aline Maciel 7º andar, horários ter 13-17/qua 13-20/sáb 8-12, mapa, domiciliar), CTA final, rodapé (CREFITO, WhatsApp, Instagram, LGPD/legais).
- `/edu` = PLATAFORMA EDUSAUDE: header próprio (busca funcional + carrinho visual), hero escuro "Aprenda mais. Pratique melhor.", públicos (estudantes/profissionais), 7 categorias, diferenciais (5), como funciona (4 passos), 2 produtos completos (Gasometria Arterial Descomplicada 20h e Exames Laboratoriais para Fisioterapeutas 20h — de R$109,80 por R$79,50, COMPRAR AGORA → POST /api/edu-lead + toast, FLUXO MOCKADO), combos (3), catálogo com filtros (área/nível/público) + busca, itens "em breve" (anatomia, fisiologia, neuroanatomia, patologia, bioquímica, imunologia), depoimentos de exemplo, Sobre + autor (bio completa do Dr. Rafael), FAQ (11), segurança, rodapé legal.
- Nova logo (pulmão+cérebro) em header/footer/favicon; contatos REAIS: WhatsApp (85) 98702-0755, Instagram @rafael.fisioterapeuta.dantas.
- Backend: POST /api/edu-lead grava interesses de compra; POST /api/contact mantido.

## Problem statement original
"Desenvolva um site institucional para um fisioterapeuta, onde mostre os serviços dele, mostre sua experiência, contato com ele — com essa logo, com as cores e essas informações (currículo Lattes completo de Francisco Rafael Pinheiro Dantas)."

## Escolhas do usuário
- Contatos: placeholders editáveis (+55 (85) 99999-9999, contato@seudominio.com.br)
- Serviços: baseados no currículo (Respiratória, Pós-COVID, Domiciliar, Coluna, Educação em Saúde)
- Estilo: leve e clean (fundo claro, muito respiro)
- Botão flutuante de WhatsApp: sim
- Extra: "faça o melhor site de todos" → direção Awwwards (reveal cinético, marquee editorial, parallax, lenis)

## Arquitetura
- Frontend: React (CRA + craco), Tailwind, framer-motion, lenis, lucide-react, sonner
- Design: Cormorant Garamond + Plus Jakarta Sans + JetBrains Mono; paleta da logo (#184E60 petróleo, #27948B teal, #E8F4F2, papel #FBFBF9); grão sutil, glass cards, arco hero
- Backend: FastAPI (porta 8001) + MongoDB (motor) — POST /api/contact grava mensagens; GET /api/health; GET /api/contact (listagem)
- Logo oficial em /app/frontend/src/assets/logo.png (header, footer) e /app/frontend/public/logo.png (favicon)

## Seções implementadas (2026-09-22)
0. Hero com FOTO REAL do Dr. Rafael (src/assets/dr-rafael.png, fundo preto, arco + tilt 3D)
7b. Depoimentos (2026-09-22): depoimento destaque + 3 cards, estrelas, avatares com iniciais, nav "Depoimentos" — CONTEÚDO DE EXEMPLO, substituir por avaliações reais em TESTIMONIALS (src/lib/site.js)
1. Header fixo glass com logo mix-blend-multiply, nav âncora (lenis), CTA agendar
2. Hero: reveal mascarado linha-a-linha, parallax scroll + tilt 3D na imagem, emblema SVG da coluna com pulso respiratório, glass cards (Einstein / SOBRATI), 3 credenciais
3. Marquee editorial lento com marcos do currículo
4. Manifesto: 3 capítulos numerados (coluna sticky)
5. Serviços: 5 linhas editoriais com imagem alternada, hover lift + zoom, badges
6. Trajetória: timeline vertical com linha de progresso scroll-linked, 7 marcos (Einstein, SOBRATI, ESP/CE, UTI COVID, CSS/ESP.CE, NASF 5 anos, Docência)
7. Guia clínico interativo: 5 chips → recomendação + CTA WhatsApp pré-preenchido
8. Contato: formulário (POST /api/contact + toast sonner), cards WhatsApp/e-mail/região, CTA direto
9. Footer petróleo com sign-off gigante e nota Lattes 04/03/2024
10. Botão flutuante WhatsApp com anel pulsante

## Personas
- Paciente respiratório/pós-COVID buscando reabilitação especializada
- Família de paciente idoso/acamado buscando atendimento domiciliar
- Instituições/equipes buscando capacitação e simulação clínica

## Verificado
- curl: /api/health e /api/contact locais e via URL externa (2 leads gravados)
- Screenshots desktop 1440 + mobile 390: sem overflow, animações ok, triagem clicada com sucesso

## Backlog priorizado
- P0: Substituir placeholders de contato/WhatsApp em src/lib/site.js
- P1: Foto real do Dr. Rafael no hero; endereço/mapa do consultório
- P1: Área administrativa para ler mensagens de contato
- P2: SEO local (Google Business), depoimentos, blog de educação em saúde
