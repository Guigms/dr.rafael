import { Brain, Wind, PersonStanding, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { SPECIALTIES, buildWaLink, scrollToId } from "@/lib/site";

const ICONS = { Brain, Wind, PersonStanding };

const SpecialtyBlock = ({ s, i }) => {
  const Icon = ICONS[s.icon];
  const reverse = i % 2 === 1;
  return (
    <Reveal>
      <article
        data-testid={`specialty-${s.id}`}
        className="grid grid-cols-1 items-center gap-10 border-t hairline py-14 lg:grid-cols-12 lg:py-16"
      >
        <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
          <div className="relative overflow-hidden rounded-3xl">
            <img src={s.image} alt={s.title} loading="lazy" className="h-64 w-full object-cover sm:h-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-petrol backdrop-blur">
              Especialidade {s.number}
            </span>
          </div>
        </div>

        <div className={`lg:col-span-7 ${reverse ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teallight">
              <Icon className="h-5 w-5 text-brand-teal" />
            </span>
          </div>
          <h3 className="mt-5 font-serif text-xl font-medium leading-snug text-brand-petrol sm:text-2xl">
            {s.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-muted sm:text-base">
            {s.lead}
          </p>

          <div className="mt-7 grid gap-7 sm:grid-cols-2">
            <div>
              <p className="eyebrow">{s.conditionsTitle}</p>
              <ul className="mt-4 flex flex-wrap gap-2" data-testid={`specialty-${s.id}-conditions`}>
                {s.conditions.map((c) => (
                  <li key={c} className="rounded-full border hairline bg-white px-3 py-1.5 text-xs font-medium text-brand-ink/75">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            {s.goalsTitle && (
              <div>
                <p className="eyebrow">{s.goalsTitle}</p>
                <ul className="mt-4 space-y-2" data-testid={`specialty-${s.id}-goals`}>
                  {s.goals.map((g) => (
                    <li key={g} className="flex items-start gap-2 text-sm text-brand-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {s.callout && (
            <p className="mt-8 border-l-2 border-brand-teal pl-5 font-serif text-lg italic text-brand-petrol sm:text-xl" data-testid={`specialty-${s.id}-callout`}>
              “{s.callout}”
            </p>
          )}

          <button
            data-testid={`specialty-${s.id}-cta`}
            onClick={() => window.open(buildWaLink(s.cta.wa), "_blank")}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-petrol px-6 py-3.5 text-sm font-semibold text-[#FBFBF9] transition-all duration-300 hover:bg-brand-teal"
          >
            {s.cta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </article>
    </Reveal>
  );
};

const Specialties = () => (
  <section id="especialidades" data-testid="specialties-section" className="relative py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow>Minhas especialidades</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            Três frentes de cuidado, um mesmo compromisso:
            <em className="not-italic text-brand-teal"> devolver funcionalidade</em> ao
            dia a dia.
          </h2>
        </div>
      </Reveal>
      <div className="mt-10">
        {SPECIALTIES.map((s, i) => (
          <SpecialtyBlock key={s.id} s={s} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Specialties;
