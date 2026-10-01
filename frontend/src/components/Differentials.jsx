import { CheckCircle2, Sparkles } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { DIFFERENTIALS, EXTRA_SERVICES } from "@/lib/site";

const Differentials = () => (
  <section data-testid="differentials-section" className="relative bg-white py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow>Diferenciais do atendimento</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            Por que pacientes e famílias confiam o cuidado ao Dr. Rafael.
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DIFFERENTIALS.map((d, i) => (
          <Reveal key={d.title} delay={0.05 * i}>
            <div
              data-testid={`differential-card-${i}`}
              className="flex h-full flex-col rounded-3xl border hairline bg-brand-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(24,78,96,0.09)]"
            >
              <CheckCircle2 className="h-6 w-6 text-brand-teal" />
              <h3 className="mt-4 text-base font-bold text-brand-ink">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{d.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 rounded-3xl border hairline bg-brand-teallight/60 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-brand-teal" />
            <p className="eyebrow">Demais serviços ofertados</p>
          </div>
          <div className="mt-7 grid gap-7 lg:grid-cols-3">
            {EXTRA_SERVICES.map((s, i) => (
              <div key={s.title} data-testid={`extra-service-${i}`}>
                <h3 className="font-serif text-lg font-medium leading-snug text-brand-petrol">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Differentials;
