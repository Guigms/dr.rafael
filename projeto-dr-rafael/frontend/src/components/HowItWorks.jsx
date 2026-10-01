import { ClipboardList, AlertTriangle, ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { STEPS, SIGNS, SIGNS_CALL, WHATSAPP_LINK } from "@/lib/site";

const HowItWorks = () => (
  <section data-testid="howitworks-section" className="relative bg-white py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow>Como funciona o atendimento?</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            Um caminho claro da avaliação à evolução.
          </h2>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={0.05 * i}>
            <div
              data-testid={`step-card-${s.n}`}
              className="flex h-full flex-col rounded-3xl border hairline bg-brand-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal"
            >
              <span className="font-serif text-4xl font-light italic text-brand-teal/70">{s.n}</span>
              <h3 className="mt-4 text-base font-bold text-brand-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const WarningSigns = () => (
  <section data-testid="signs-section" className="relative overflow-hidden py-24 lg:py-32">
    <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-brand-teal/10 blur-3xl" />
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Fique atento aos sinais</Eyebrow>
            <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
              Sinais de que é hora de procurar uma avaliação
            </h2>
            <p className="mt-6 border-l-2 border-brand-teal pl-5 text-base leading-relaxed text-brand-muted" data-testid="signs-call">
              {SIGNS_CALL}
            </p>
            <a
              data-testid="signs-cta"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-petrol px-7 py-4 text-sm font-semibold text-[#FBFBF9] transition-all duration-300 hover:bg-brand-teal"
            >
              Procurar avaliação
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <ul className="grid gap-3 sm:grid-cols-2" data-testid="signs-list">
            {SIGNS.map((s, i) => (
              <Reveal key={s} delay={0.03 * i}>
                <li className="flex h-full items-start gap-3 rounded-2xl border hairline bg-white p-4 transition-colors duration-300 hover:border-brand-teal">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                  <span className="text-sm leading-relaxed text-brand-ink/80">{s}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export { ClipboardList };
export default HowItWorks;
export { WarningSigns };
