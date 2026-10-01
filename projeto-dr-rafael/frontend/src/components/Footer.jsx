import { Link } from "react-router-dom";
import { GraduationCap, Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
  SITE,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
  scrollToId,
} from "@/lib/site";

const Footer = () => (
  <footer data-testid="site-footer" className="relative overflow-hidden bg-brand-deep text-[#FBFBF9]">
    <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-brand-teal/15 blur-3xl" />
    <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-flex rounded-2xl bg-white p-3">
            <img src={logo} alt={SITE.name} className="h-11 w-auto mix-blend-multiply" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            {SITE.name} — {SITE.tagline}
            <br />
            Fisioterapia Neurofuncional | Respiratória | Geriátrica
          </p>
          <p className="mt-3 font-mono text-xs font-semibold tracking-[0.14em] text-brand-glow" data-testid="footer-crefito">
            {SITE.crefito}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow">Navegação</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  data-testid={`footer-nav-link-${l.id}`}
                  onClick={() => scrollToId(l.id)}
                  className="text-sm text-white/70 transition-colors hover:text-brand-glow"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <Link
                data-testid="footer-link-edusaude"
                to="/edu"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-glow transition-colors hover:text-white"
              >
                <GraduationCap className="h-4 w-4" />
                Área Educacional — EDUSAUDE
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow">Contato</p>
          <div className="mt-5 space-y-3">
            <a data-testid="footer-contact-whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-glow">
              <Phone className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </a>
            <a data-testid="footer-contact-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-glow">
              <Instagram className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
            <p className="text-sm text-white/50">Área de atendimento: Maracanaú / CE e região</p>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {SITE.name} — {SITE.role} • {SITE.crefito}
          </p>
          <div className="flex flex-wrap gap-5 text-xs text-white/45" data-testid="footer-legal-links">
            <span>Termos de Uso</span>
            <span>Política de Privacidade</span>
            <span>LGPD</span>
          </div>
        </div>
        <p className="text-[11px] leading-relaxed text-white/35">
          As informações deste site têm caráter informativo e não substituem a
          avaliação individualizada. Seus dados são tratados conforme a Lei
          Geral de Proteção de Dados (Lei nº 13.709/2018).
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
