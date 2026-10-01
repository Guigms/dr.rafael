# Dr. Rafael Dantas — Site Institucional + EDUSAUDE

Site completo dividido em duas áreas:

- **`/` — Área Assistencial**: site do fisioterapeuta Dr. Rafael Dantas (hero animado, sobre, 3 especialidades, atendimento domiciliar, como funciona, sinais de avaliação, diferenciais, depoimentos, FAQ, localização com mapa, contatos).
- **`/edu` — Área Educacional EDUSAUDE**: plataforma de produtos educacionais (catálogo com filtros e busca, cursos, combos, FAQ, autor).

Cada área tem sua própria animação de abertura (logo clínica / pulmão + cérebro desenhando).

## Stack

- **Frontend**: React (react-scripts + craco), Tailwind CSS, framer-motion, lenis, lucide-react, sonner, react-router-dom
- **Backend**: FastAPI + MongoDB (motor)

## Estrutura

```
projeto-dr-rafael/
├── backend/
│   ├── server.py            # API: /api/health, /api/contact, /api/edu-lead
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── App.js           # Rotas: / e /edu + intro + lenis
    │   ├── lib/site.js      # DADOS DA ÁREA ASSISTENCIAL (textos, contatos, FAQ...)
    │   ├── lib/edu.js       # DADOS DA EDUSAUDE (produtos, combos, FAQ...)
    │   └── components/      # Header, Hero, Specialties, edu/, etc.
    └── public/              # logo.png (favicon)
```

## Como rodar

### Backend
```bash
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
```
Crie um arquivo `.env` em `backend/` com:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=dr_rafael
```
Depois: `uvicorn server:app --host 0.0.0.0 --port 8001`

### Frontend
```bash
cd frontend
yarn install
```
Crie um arquivo `.env` em `frontend/` com:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```
Depois: `yarn start` (abre em http://localhost:3000)

## Onde editar

- **Contatos / WhatsApp / Instagram / textos assistenciais**: `frontend/src/lib/site.js`
- **Produtos, preços e textos da EDUSAUDE**: `frontend/src/lib/edu.js`
- **Depoimentos** (substituir os exemplos por reais): nos dois arquivos acima (`TESTIMONIALS` e `EDU_TESTIMONIALS`)
- **Logo / fotos**: `frontend/src/assets/`

## Credito de identidade

Dr. Francisco Rafael Pinheiro Dantas — Fisioterapeuta e Acadêmico de Medicina, CREFITO 170532-F.
