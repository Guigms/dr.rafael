import { Reveal, Eyebrow } from "@/components/Reveal";
import { SERVICES } from "@/lib/site";

const Services = () => (
  <section id="servicos" data-testid="services-section" className="relative py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <Eyebrow>Especialidades clínicas & serviços</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            Tratamentos baseados em evidência para
            <em className="not-italic text-brand-teal"> restaurar vigor</em>,
            oxigenação e mobilidade.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="text-base leading-relaxed text-brand-muted lg:pb-2">
            Da unidade de terapia intensiva ao domicílio: planos terapêuticos
            individuais conduzidos por quem ensina fisioterapia em hospitais,
            escolas e centros de simulação.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={0.04}>
            <article
              data-testid={s.testId}
              className="group grid grid-cols-1 items-center gap-7 border-t hairline py-10 transition-all duration-500 last:border-b hover:bg-white md:grid-cols-12 md:py-12"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-teal">
                  {s.number}
                </span>
              </div>

              <div
                className={`md:col-span-4 ${
                  i % 2 === 1 ? "md:order-3" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] md:h-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-petrol/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-petrol backdrop-blur">
                    {s.badge}
                  </span>
                </div>
              </div>

              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2 md:pr-10" : "md:pl-4"}`}>
                <h3 className="font-serif text-xl font-medium text-brand-petrol transition-colors duration-300 group-hover:text-brand-teal sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-muted sm:text-base">
                  {s.description}
                </p>
                <span className="mt-5 inline-flex h-px w-14 bg-brand-teal/40 transition-all duration-500 group-hover:w-24 group-hover:bg-brand-teal" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
