import { Home, CheckCircle2, Users } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { HOMECARE, FOR_WHO, buildWaLink } from "@/lib/site";

const ICONS = { Baby: Baby, UserRound: UserRound, PersonStanding: PersonStanding };
import { Baby, UserRound, PersonStanding } from "lucide-react";

const HomeCare = () => (
  <section id="domiciliar" data-testid="homecare-section" className="relative bg-white py-24 lg:py-32">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
      <Reveal className="lg:col-span-5">
        <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(24,78,96,0.16)]">
          <img src={HOMECARE.image} alt="Atendimento domiciliar" loading="lazy" className="h-[420px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 bg-white/85 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2.5">
              <Home className="h-5 w-5 text-brand-teal" />
              <p className="text-sm font-bold text-brand-ink">home care • Maracanaú e região</p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="lg:col-span-7">
        <Reveal>
          <Eyebrow>Atendimento domiciliar</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            {HOMECARE.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-muted">{HOMECARE.lead}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Para pessoas</p>
              <ul className="mt-4 space-y-2" data-testid="homecare-forwhom">
                {HOMECARE.forWhom.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-brand-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Benefícios</p>
              <ul className="mt-4 space-y-2" data-testid="homecare-benefits">
                {HOMECARE.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-brand-muted">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            data-testid="homecare-cta"
            onClick={() => window.open(buildWaLink(HOMECARE.cta.wa), "_blank")}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-teal px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(39,148,139,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-petrol"
          >
            <Home className="h-4 w-4" />
            {HOMECARE.cta.label}
          </button>
        </Reveal>
      </div>
    </div>
  </section>
);

const ForWho = () => (
  <section data-testid="forwho-section" className="relative py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow><span className="text-center">Para quem é a fisioterapia?</span></Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            Cada fase da vida pede um cuidado específico.
          </h2>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {FOR_WHO.map((f, i) => {
          const Icon = ICONS[f.icon];
          return (
            <Reveal key={f.title} delay={0.06 * i}>
              <div
                data-testid={`forwho-card-${i}`}
                className="flex h-full flex-col items-center rounded-3xl border hairline bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(24,78,96,0.1)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-teallight">
                  <Icon className="h-6 w-6 text-brand-teal" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-medium text-brand-petrol">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{f.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default HomeCare;
export { ForWho };
