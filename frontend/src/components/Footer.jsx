import logo from "@/assets/logo.png";
import { NAV_LINKS, SITE, WHATSAPP_DISPLAY, scrollToId } from "@/lib/site";

const Footer = () => (
  <footer data-testid="site-footer" className="relative overflow-hidden bg-brand-deep text-[#FBFBF9]">
    <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-brand-teal/15 blur-3xl" />
    <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-28">
      <p
        data-testid="footer-signoff"
        className="font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
      >
        Movimento <span className="text-brand-glow">•</span> Saúde
        <br />
        <span className="text-outline">Qualidade de Vida.</span>
      </p>

      <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/10 pt-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-flex rounded-2xl bg-white p-3">
            <img src={logo} alt="Dr Rafael Dantas — Fisioterapia" className="h-12 w-auto mix-blend-multiply" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Dr. Francisco Rafael Pinheiro Dantas — Fisioterapeuta. Especialista
            Albert Einstein-SP · Mestre SOBRATI · Gerente do Centro Estadual de
            Simulação em Saúde (CSS/ESP.CE).
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow">
            Navegação
          </p>
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
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow">
            Contato
          </p>
          <p className="mt-5 text-sm text-white/70">{WHATSAPP_DISPLAY} (placeholder)</p>
          <p className="mt-2 text-sm text-white/70">{SITE.tagline}</p>
          <p className="mt-4 text-xs leading-relaxed text-white/40">
            {SITE.lattesNote}. O Escavador não cria, edita ou altera o conteúdo
            exibido — dados públicos via Lei nº 12.527/2011.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
        <p className="text-xs text-white/45">
          © {new Date().getFullYear()} {SITE.fullName}. Todos os direitos reservados.
        </p>
        <p className="text-xs text-white/45">
          {SITE.name} — Fisioterapia | {SITE.role}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
