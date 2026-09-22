import { Reveal, Eyebrow } from "@/components/Reveal";
import { MANIFESTO_CHAPTERS } from "@/lib/site";

const Manifesto = () => (
  <section id="abordagem" data-testid="manifesto-section" className="relative py-24 lg:py-32">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <Eyebrow>Manifesto do movimento</Eyebrow>
            <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
              Três capítulos
              <br />
              de cuidado
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-brand-muted">
              Uma abordagem clínica que reconecta anatomia, respiração e
              autonomia diária — da UTI ao conforto da sua casa.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="lg:col-span-7">
        {MANIFESTO_CHAPTERS.map((c, i) => (
          <Reveal key={c.number} delay={i * 0.08}>
            <article
              data-testid={`manifesto-chapter-${c.number}`}
              className={`group border-t hairline py-10 transition-colors duration-500 first:border-t-0 first:pt-0 lg:first:pt-10 lg:first:border-t ${
                i === 0 ? "lg:border-t" : ""
              }`}
            >
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-4xl font-light italic text-brand-teal/70 transition-colors duration-500 group-hover:text-brand-teal lg:text-5xl">
                  {c.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-medium text-brand-petrol sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">
                    {c.text}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Manifesto;
