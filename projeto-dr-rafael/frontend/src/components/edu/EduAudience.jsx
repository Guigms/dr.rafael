import { GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { EDU_AUDIENCES, EDU_CATEGORIES } from "@/lib/edu";
import { scrollToId } from "@/lib/site";

const ICONS = {
  GraduationCap,
  Stethoscope,
  BookOpen,
  MonitorPlay,
  Tablet,
  FileQuestion,
  Brain,
  ClipboardList,
  Package,
};
import { BookOpen, MonitorPlay, Tablet, FileQuestion, Brain, ClipboardList, Package } from "lucide-react";

const EduAudience = () => (
  <section id="publico" data-testid="edu-audience-section" className="relative bg-white py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow>Encontre o material ideal para você</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            Feito para quem estuda e para quem pratica.
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {EDU_AUDIENCES.map((a, i) => {
          const Icon = ICONS[a.icon];
          return (
            <Reveal key={a.id} delay={0.06 * i}>
              <div
                data-testid={`edu-audience-card-${a.id}`}
                className="flex h-full flex-col rounded-3xl border hairline bg-brand-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(24,78,96,0.1)] sm:p-10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-teallight">
                  <Icon className="h-6 w-6 text-brand-teal" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-medium text-brand-petrol sm:text-2xl">{a.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-muted sm:text-base">{a.text}</p>
                <button
                  data-testid={`edu-audience-cta-${a.id}`}
                  onClick={() => {
                    const el = document.getElementById("materiais");
                    if (el) scrollToId("materiais");
                  }}
                  className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border hairline bg-white px-6 py-3.5 text-sm font-semibold text-brand-petrol transition-all duration-300 hover:border-brand-teal hover:text-brand-teal"
                >
                  {a.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div id="materiais" data-testid="edu-categories" className="mt-24">
          <Eyebrow>Categorias de produtos</Eyebrow>
          <h3 className="mt-6 font-serif text-xl font-medium text-brand-ink sm:text-2xl">
            Do ciclo básico à prática clínica.
          </h3>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EDU_CATEGORIES.map((c, i) => {
              const Icon = ICONS[c.icon];
              return (
                <div
                  key={c.id}
                  data-testid={`edu-category-card-${c.id}`}
                  className="group flex h-full flex-col rounded-3xl border hairline bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal hover:shadow-[0_20px_50px_rgba(24,78,96,0.09)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teallight transition-colors duration-300 group-hover:bg-brand-teal">
                    <Icon className="h-5 w-5 text-brand-teal transition-colors duration-300 group-hover:text-white" />
                  </span>
                  <h4 className="mt-5 font-serif text-lg font-medium text-brand-petrol">{c.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default EduAudience;
