import { Link } from "react-router-dom";
import { Search, ShoppingCart, Stethoscope } from "lucide-react";
import { EDU_NAV } from "@/lib/edu";
import { scrollToId } from "@/lib/site";

const EduHeader = ({ onSearch }) => {
  const go = (id) => scrollToId(id);

  return (
    <header
      data-testid="edu-header"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-deep/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-12">
        <button
          data-testid="edu-logo-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal text-white">
            <Stethoscope className="h-5 w-5" />
          </span>
          <span className="text-left">
            <span className="block font-mono text-base font-bold tracking-[0.18em] text-[#FBFBF9]">EDUSAUDE</span>
            <span className="block text-[10px] leading-tight text-white/50">Educação em saúde</span>
          </span>
        </button>

        <nav className="hidden xl:flex items-center gap-7">
          {EDU_NAV.map((l) => (
            <button
              key={l.id}
              data-testid={`edu-nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="text-sm font-medium text-white/70 transition-colors hover:text-brand-glow"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              data-testid="edu-search-input"
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Buscar produto..."
              className="w-44 rounded-full border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-brand-glow focus:w-56"
            />
          </div>
          
          <button
            data-testid="edu-cta-products"
            onClick={() => go("materiais")}
            className="rounded-full bg-brand-teal px-5 py-2.5 text-sm font-bold uppercase tracking-[0.06em] text-white transition-all duration-300 hover:bg-brand-glow"
          >
            Ver produtos
          </button>
          <Link
            data-testid="edu-link-assistencial"
            to="/"
            className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:border-brand-glow hover:text-brand-glow"
          >
            Atendimento
          </Link>
        </div>
      </div>
    </header>
  );
};

export default EduHeader;
