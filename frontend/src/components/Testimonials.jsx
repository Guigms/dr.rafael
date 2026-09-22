import { Reveal, Eyebrow } from "@/components/Reveal";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";

const Stars = ({ testId }) => (
  <div className="flex gap-1" data-testid={testId}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-brand-teal text-brand-teal" />
    ))}
  </div>
);

const Testimonials = () => {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section
      id="depoimentos"
      data-testid="testimonials-section"
      className="relative overflow-hidden bg-[#F4F7F6] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Depoimentos</Eyebrow>
            <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
              A confiança de quem já
              <em className="not-italic text-brand-teal"> recuperou o movimento</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-muted">
              Avaliações de pacientes e instituições acompanhadas pelo Dr.
              Rafael ao longo da trajetória clínica e acadêmica.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure
              data-testid={`testimonial-card-${featured.id}`}
              className="flex h-full flex-col justify-between rounded-3xl border hairline bg-white p-8 shadow-[0_24px_60px_rgba(24,78,96,0.07)] sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <Stars testId="testimonial-stars-featured" />
                  <Quote className="h-8 w-8 text-brand-teal/25" />
                </div>
                <blockquote className="mt-6 font-serif text-xl font-light leading-relaxed text-brand-ink sm:text-2xl">
                  “{featured.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-4 border-t hairline pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-teallight font-serif text-lg font-semibold text-brand-petrol">
                  {featured.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-ink">{featured.name}</p>
                  <p className="text-xs text-brand-muted">{featured.context}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.map((t, i) => (
              <Reveal key={t.id} delay={0.08 * (i + 1)} className="flex-1">
                <figure
                  data-testid={`testimonial-card-${t.id}`}
                  className="flex h-full flex-col justify-between rounded-3xl border hairline bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(24,78,96,0.09)]"
                >
                  <div>
                    <Stars testId={`testimonial-stars-${t.id}`} />
                    <blockquote className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                      “{t.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teallight font-serif text-sm font-semibold text-brand-petrol">
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-brand-ink">{t.name}</p>
                      <p className="text-xs text-brand-muted">{t.context}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
