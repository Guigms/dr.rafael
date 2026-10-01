import { Instagram, Mail, MessageCircle } from "lucide-react";
import { EDU } from "@/lib/edu";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/lib/site";
import { scrollToId } from "@/lib/site";

const LINKS = [
  { id: "inicio", label: "Início" },
  { id: "cursos", label: "Cursos" },
  { id: "materiais", label: "Materiais" },
  { id: "publico", label: "Para Estudantes" },
  { id: "sobre", label: "Sobre" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

const EduFooter = () => (
  <footer id="contato" data-testid="edu-footer" className="relative overflow-hidden bg-brand-deep text-[#FBFBF9]">
    <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-2xl font-bold tracking-[0.18em]">{EDU.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Educação, conhecimento e atualização para profissionais e
            estudantes da saúde. {EDU.slogan}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow">Links</p>
          <ul className="mt-5 grid grid-cols-1 gap-2.5">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  data-testid={`edu-footer-link-${l.id}`}
                  onClick={() => scrollToId(l.id)}
                  className="text-sm text-white/70 transition-colors hover:text-brand-glow"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow">Atendimento</p>
          <div className="mt-5 space-y-3">
            <a data-testid="edu-footer-whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-glow">
              <MessageCircle className="h-4 w-4" />
              WhatsApp — {WHATSAPP_DISPLAY}
            </a>
            <a data-testid="edu-footer-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-glow">
              <Instagram className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
            <p className="flex items-center gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4" />
              contato@edusaude.com.br (a definir)
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-white/45" data-testid="edu-footer-legal">
            <span>Termos de Uso</span>
            <span>Política de Privacidade</span>
            <span>Política de Reembolso</span>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
        <p className="text-xs text-white/45">
          © {new Date().getFullYear()} {EDU.name} — Dr. Rafael Dantas. Todos os direitos reservados.
        </p>
        <p className="text-xs text-white/45">Conteúdo produzido por profissionais da área da saúde.</p>
      </div>
    </div>
  </footer>
);

export default EduFooter;
