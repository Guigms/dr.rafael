import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Stethoscope } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { TRIAGE_OPTIONS, buildWaLink } from "@/lib/site";

const Triage = () => {
  const [selected, setSelected] = useState(null);
  const option = TRIAGE_OPTIONS.find((o) => o.id === selected);

  return (
    <section
      id="avaliacao"
      data-testid="interactive-assessment-tool"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute right-[-160px] top-[-120px] h-[420px] w-[420px] rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-brand-teal" />
              <span className="eyebrow">Guia clínico interativo</span>
              <span className="h-px w-10 bg-brand-teal" />
            </div>
            <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
              Qual é o seu objetivo terapêutico hoje?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-muted">
              Selecione o seu quadro atual e receba uma recomendação direta de
              conduta — para agilizar seu contato com o Dr. Rafael.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {TRIAGE_OPTIONS.map((o, i) => (
              <button
                key={o.id}
                data-testid={`triage-option-${i}`}
                onClick={() => setSelected(o.id)}
                className={`rounded-full border px-5 py-3 text-left text-sm font-medium transition-all duration-300 ${
                  selected === o.id
                    ? "border-brand-teal bg-brand-teal text-white shadow-[0_14px_30px_rgba(39,148,139,0.3)]"
                    : "hairline bg-white text-brand-ink/75 hover:border-brand-teal hover:text-brand-teal"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {option && (
            <motion.div
              key={option.id}
              data-testid="triage-recommendation"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border hairline bg-white shadow-[0_24px_60px_rgba(24,78,96,0.08)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="flex flex-col justify-center bg-brand-petrol p-8 md:col-span-2 md:p-10">
                  <Stethoscope className="h-6 w-6 text-brand-glow" />
                  <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-glow">
                    Recomendação de conduta
                  </p>
                  <p className="mt-3 font-serif text-xl font-medium leading-snug text-[#FBFBF9] sm:text-2xl">
                    {option.match}
                  </p>
                </div>
                <div className="flex flex-col justify-between p-8 md:col-span-3 md:p-10">
                  <p className="text-sm leading-relaxed text-brand-muted sm:text-base">
                    {option.reason} O passo seguinte é uma avaliação
                    individualizada com o Dr. Rafael — presencial ou pelo
                    WhatsApp.
                  </p>
                  <a
                    data-testid="triage-cta-whatsapp"
                    href={buildWaLink(option.wa)}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-brand-teal px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-petrol"
                  >
                    Agendar avaliação pelo WhatsApp
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!option && (
          <p className="mt-10 text-center text-sm text-brand-muted" data-testid="triage-empty-hint">
            Toque em uma das opções acima para ver a recomendação.
          </p>
        )}
      </div>
    </section>
  );
};

export default Triage;
