import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CreditCard, FileCheck, Lock, ShieldCheck, Smartphone } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { EDU_ABOUT, EDU_AUTHOR, EDU_FAQ, EDU_SECURITY } from "@/lib/edu";
import drRafaelPhoto from "@/assets/dr-rafael.png";

const SEC_ICONS = { Lock, CreditCard, Smartphone, FileCheck, ShieldCheck };

const EduAbout = () => (
  <section id="sobre" data-testid="edu-about-section" className="relative bg-white py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow>Sobre nós</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            {EDU_ABOUT.title} — conhecimento que transforma a prática em saúde.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-muted">{EDU_ABOUT.text}</p>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">{EDU_ABOUT.purpose}</p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-16 grid items-center gap-10 rounded-3xl border hairline bg-brand-paper p-8 lg:grid-cols-12 sm:p-10">
          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(24,78,96,0.14)]">
              <img src={drRafaelPhoto} alt={EDU_AUTHOR.name} className="h-72 w-full object-cover object-top" />
            </div>
          </div>
          <div className="lg:col-span-8" data-testid="edu-author">
            <Eyebrow>Quem produz os conteúdos?</Eyebrow>
            <h3 className="mt-5 font-serif text-xl font-medium text-brand-petrol sm:text-2xl">
              {EDU_AUTHOR.name} <span className="text-base text-brand-muted">— {EDU_AUTHOR.role}</span>
            </h3>
            <div className="mt-5 space-y-3">
              {EDU_AUTHOR.bio.map((b, i) => (
                <p key={i} className="text-sm leading-relaxed text-brand-muted">{b}</p>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-16 flex flex-wrap justify-center gap-4" data-testid="edu-security">
          {EDU_SECURITY.map((s) => {
            const Icon = SEC_ICONS[s.icon];
            return (
              <span key={s.text} className="inline-flex items-center gap-2.5 rounded-full border hairline bg-white px-5 py-3 text-xs font-semibold text-brand-petrol">
                <Icon className="h-4 w-4 text-brand-teal" />
                {s.text}
              </span>
            );
          })}
        </div>
      </Reveal>

      <div id="faq" className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow>FAQ — Perguntas frequentes</Eyebrow>
          <h3 className="mt-6 font-serif text-xl font-medium text-brand-ink sm:text-2xl">
            Tudo o que você precisa saber antes de comprar.
          </h3>
        </Reveal>
        <Reveal delay={0.06} className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {EDU_FAQ.map((f, i) => (
              <AccordionItem key={i} value={`edufaq-${i}`} className="border-brand-hairline">
                <AccordionTrigger
                  data-testid={`edu-faq-trigger-${i}`}
                  className="py-4 text-left font-sans text-sm font-semibold text-brand-ink hover:text-brand-teal hover:no-underline sm:text-base"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-brand-muted">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

export default EduAbout;
