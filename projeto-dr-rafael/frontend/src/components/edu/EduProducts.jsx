import axios from "axios";
import { toast } from "sonner";
import { CheckCircle2, Lock, Microscope, Target, Lightbulb, Smartphone, Rocket, ShoppingCart, MessageCircle, Flame } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { EDU_COMBOS, EDU_PRODUCTS, EDU_STEPS, EDU_WHY } from "@/lib/edu";
import { buildWaLink } from "@/lib/site";

const WHY_ICONS = { Microscope, Target, Lightbulb, Smartphone, Rocket };
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Why = () => (
  <section data-testid="edu-why-section" className="relative py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Reveal>
        <Eyebrow>Por que estudar com a EDUSAUDE?</Eyebrow>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {EDU_WHY.map((w, i) => {
          const Icon = WHY_ICONS[w.icon];
          return (
            <Reveal key={w.title} delay={0.05 * i}>
              <div data-testid={`edu-why-card-${i}`} className="flex h-full flex-col rounded-3xl border hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(24,78,96,0.09)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teallight">
                  <Icon className="h-5 w-5 text-brand-teal" />
                </span>
                <h3 className="mt-4 text-sm font-bold leading-snug text-brand-ink">{w.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-muted">{w.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section data-testid="edu-how-section" className="bg-white py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Reveal>
        <Eyebrow>Como funciona?</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-xl font-medium text-brand-ink sm:text-2xl">
          Quatro passos entre você e o seu próximo nível profissional.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {EDU_STEPS.map((s, i) => (
          <Reveal key={s.n} delay={0.05 * i}>
            <div data-testid={`edu-step-${s.n}`} className="flex h-full items-start gap-4 rounded-3xl border hairline bg-brand-paper p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-teal font-mono text-sm font-bold text-white">{s.n}</span>
              <div>
                <h3 className="text-sm font-bold text-brand-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ProductCard = ({ p, i }) => {
  const buy = async () => {
    try {
      await axios.post(`${API}/edu-lead`, { product: p.title, price: p.price });
      toast.success(`Interesse em “${p.title}” registrado! Finalize pelo WhatsApp.`);
    } catch {
      toast.error("Não foi possível registrar agora. Fale conosco pelo WhatsApp.");
    }
  };

  return (
    <Reveal delay={0.05 * i}>
      <article
        data-testid={`edu-product-card-${p.id}`}
        className="flex h-full flex-col overflow-hidden rounded-3xl border hairline bg-white shadow-[0_24px_60px_rgba(24,78,96,0.07)]"
      >
        <div className="bg-brand-deep p-8 text-[#FBFBF9]">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-brand-teal/25 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-glow">
              Curso livre • {p.hours}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-white/50">
              <Lock className="h-3.5 w-3.5" /> Compra segura
            </span>
          </div>
          <h3 className="mt-5 font-serif text-xl font-medium leading-snug sm:text-2xl">{p.title}</h3>
          <p className="mt-3 text-sm italic text-white/65">“{p.impact}”</p>
        </div>

        <div className="flex flex-1 flex-col p-8">
          <div>
            <p className="eyebrow">O que você vai aprender?</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {p.learn.map((l) => (
                <li key={l} className="flex items-start gap-2 text-sm text-brand-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow">O que está incluso?</p>
              <ul className="mt-4 space-y-2">
                {p.includes.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-brand-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Informações do produto</p>
              <dl className="mt-4 space-y-1.5" data-testid={`edu-product-info-${p.id}`}>
                {p.info.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 border-b border-brand-hairline pb-1.5 text-xs">
                    <dt className="text-brand-muted">{k}</dt>
                    <dd className="text-right font-semibold text-brand-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <p className="mt-6 rounded-xl bg-brand-teallight/60 px-4 py-3 text-xs leading-relaxed text-brand-petrol">
            <strong className="font-semibold">Para quem é?</strong> {p.forWho}
          </p>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t hairline pt-6" style={{ marginTop: "1.5rem" }}>
            <div>
              <p className="text-xs text-brand-muted line-through">{p.oldPrice}</p>
              <p className="font-serif text-3xl font-semibold text-brand-petrol" data-testid={`edu-product-price-${p.id}`}>
                {p.price}
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-2">
              <button
                data-testid={`edu-product-buy-${p.id}`}
                onClick={buy}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-7 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-petrol"
              >
                <ShoppingCart className="h-4 w-4" />
                Comprar agora
              </button>
              <a
                data-testid={`edu-product-wa-${p.id}`}
                href={buildWaLink(`Olá! Tenho interesse no curso "${p.title}" da EDUSAUDE.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#1da851] transition-colors hover:text-brand-teal"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                ou fale pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const Combos = () => (
  <div className="mt-20">
    <Reveal>
      <div className="flex items-center gap-3">
        <Flame className="h-5 w-5 text-brand-teal" />
        <p className="eyebrow">Combos educacionais</p>
      </div>
      <h3 className="mt-5 font-serif text-xl font-medium text-brand-ink sm:text-2xl">
        Economize estudando completo.
      </h3>
    </Reveal>
    <div className="mt-8 grid gap-5 lg:grid-cols-3">
      {EDU_COMBOS.map((c, i) => (
        <Reveal key={c.id} delay={0.05 * i}>
          <div data-testid={`edu-combo-${c.id}`} className="flex h-full flex-col justify-between rounded-3xl border-2 border-dashed border-brand-teal/40 bg-brand-teallight/40 p-7 transition-all duration-300 hover:border-brand-teal">
            <div>
              <h4 className="font-serif text-lg font-medium text-brand-petrol">{c.title}</h4>
              <p className="mt-2 text-sm text-brand-muted">{c.items}</p>
            </div>
            <button
              data-testid={`edu-combo-cta-${c.id}`}
              onClick={() => document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 w-fit rounded-full border border-brand-teal px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
            >
              Ver combos
            </button>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

const EduProducts = () => (
  <section data-testid="edu-products-section" className="relative py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow>Produtos em destaque</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            Cursos livres com início imediato.
          </h2>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {EDU_PRODUCTS.map((p, i) => (
          <ProductCard key={p.id} p={p} i={i} />
        ))}
      </div>
      <Combos />
      <Why />
    </div>
  </section>
);

export { HowItWorks };
export default EduProducts;
