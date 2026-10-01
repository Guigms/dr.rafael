import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { FAQ } from "@/lib/site";

const Faq = () => (
  <section id="faq" data-testid="faq-section" className="relative bg-white py-24 lg:py-32">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:px-12">
      <Reveal className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            Dúvidas sobre o atendimento
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-brand-muted">
            Não encontrou sua dúvida? Fale diretamente com o Dr. Rafael pelo
            WhatsApp.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.08} className="lg:col-span-8">
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-brand-hairline">
              <AccordionTrigger
                data-testid={`faq-trigger-${i}`}
                className="py-5 text-left font-sans text-base font-semibold text-brand-ink hover:text-brand-teal hover:no-underline"
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-brand-muted" data-testid={`faq-answer-${i}`}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);

export default Faq;
