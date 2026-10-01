import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, GraduationCap, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV_LINKS, WHATSAPP_LINK, scrollToId } from "@/lib/site";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FBFBF9]/85 backdrop-blur-xl border-b hairline shadow-[0_10px_40px_rgba(24,78,96,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-[76px] flex items-center justify-between gap-4">
        <button
          data-testid="header-logo-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center shrink-0"
          aria-label="Ir para o topo"
        >
          <img src={logo} alt="Dr. Rafael Dantas — Atendimento e Consultoria em Fisioterapia" className="h-12 w-auto mix-blend-multiply" />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`header-nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="relative text-sm font-medium text-brand-ink/70 hover:text-brand-petrol transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-brand-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            data-testid="header-link-edusaude"
            to="/edu"
            className="inline-flex items-center gap-2 rounded-full border hairline bg-white/70 px-4 py-2.5 text-sm font-semibold text-brand-teal transition-all duration-300 hover:border-brand-teal"
          >
            <GraduationCap className="h-4 w-4" />
            EDUSAUDE
          </Link>
          <a
            data-testid="header-cta-whatsapp"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-petrol px-5 py-2.5 text-sm font-semibold text-[#FBFBF9] transition-all duration-300 hover:bg-brand-teal hover:shadow-[0_12px_30px_rgba(39,148,139,0.35)]"
          >
            <CalendarCheck className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
            Agendar
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-brand-petrol"
          data-testid="header-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#FBFBF9]/95 backdrop-blur-xl border-b hairline"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`header-mobile-link-${l.id}`}
                  onClick={() => go(l.id)}
                  className="text-left text-base font-semibold text-brand-ink/80 hover:text-brand-teal transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <Link
                data-testid="header-mobile-link-edusaude"
                to="/edu"
                className="inline-flex items-center gap-2 text-left text-base font-semibold text-brand-teal"
                onClick={() => setOpen(false)}
              >
                <GraduationCap className="h-4 w-4" />
                Área Educacional — EDUSAUDE
              </Link>
              <a
                data-testid="header-mobile-cta-whatsapp"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-petrol px-5 py-3 text-sm font-semibold text-[#FBFBF9]"
              >
                <CalendarCheck className="h-4 w-4" />
                Agendar avaliação
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
