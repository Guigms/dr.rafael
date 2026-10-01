import { useMemo, useState } from "react";
import { Star, Clock3, GraduationCap, Briefcase } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { EDU_COMING_SOON, EDU_PRODUCTS, EDU_TESTIMONIALS } from "@/lib/edu";

const AREAS = ["Fisioterapia", "Medicina", "Enfermagem", "Terapia Intensiva", "Pneumologia", "Cardiologia", "Neurofuncional", "Saúde do Idoso", "Exames laboratoriais", "Outros"];
const LEVELS = ["Básico", "Intermediário", "Avançado"];
const PUBLICS = ["Estudante", "Profissional"];

const EduCourses = ({ query = "" }) => {
  const [area, setArea] = useState("");
  const [level, setLevel] = useState("");
  const [pub, setPub] = useState("");

  const matches = (item) => {
    if (area && !(item.areas || []).some((a) => a.toLowerCase().includes(area.toLowerCase()))) return false;
    if (level && !(item.level || "").toLowerCase().includes(level.toLowerCase())) return false;
    if (pub && !(item.public || []).includes(pub)) return false;
    if (query && !`${item.title} ${item.type || "curso"}`.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  };

  const available = useMemo(() => EDU_PRODUCTS.filter(matches), [area, level, pub, query]);
  const soon = useMemo(() => EDU_COMING_SOON.filter(matches), [area, level, pub, query]);
  const empty = available.length === 0 && soon.length === 0;

  return (
    <section id="cursos" data-testid="edu-courses-section" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Cursos livres em saúde</Eyebrow>
            <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
              Capacite-se e amplie seus conhecimentos com cursos desenvolvidos
              para estudantes e profissionais da saúde.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-4 rounded-3xl border hairline bg-brand-paper p-6" data-testid="edu-filters">
            <select
              data-testid="edu-filter-area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="rounded-full border hairline bg-white px-5 py-2.5 text-sm font-medium text-brand-ink outline-none focus:border-brand-teal"
            >
              <option value="">Área: todas</option>
              {AREAS.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
            <select
              data-testid="edu-filter-level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="rounded-full border hairline bg-white px-5 py-2.5 text-sm font-medium text-brand-ink outline-none focus:border-brand-teal"
            >
              <option value="">Nível: todos</option>
              {LEVELS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <select
              data-testid="edu-filter-public"
              value={pub}
              onChange={(e) => setPub(e.target.value)}
              className="rounded-full border hairline bg-white px-5 py-2.5 text-sm font-medium text-brand-ink outline-none focus:border-brand-teal"
            >
              <option value="">Público: todos</option>
              {PUBLICS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            {(area || level || pub || query) && (
              <button
                data-testid="edu-filters-clear"
                onClick={() => {
                  setArea("");
                  setLevel("");
                  setPub("");
                }}
                className="rounded-full px-4 py-2.5 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-petrol"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </Reveal>

        {empty && (
          <p className="mt-10 text-center text-sm text-brand-muted" data-testid="edu-catalog-empty">
            Nenhum material encontrado com esses filtros — limpe os filtros ou fale com a gente.
          </p>
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {available.map((p) => (
            <Reveal key={p.id}>
              <article
                data-testid={`edu-catalog-card-${p.id}`}
                className="flex h-full flex-col justify-between rounded-3xl border hairline bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(24,78,96,0.1)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 rounded-full bg-brand-teallight px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-petrol">
                      <Clock3 className="h-3 w-3" /> {p.hours}
                    </span>
                    <span className="text-xs font-semibold text-brand-teal">{p.level}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-medium leading-snug text-brand-petrol">{p.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.areas.slice(0, 3).map((a) => (
                      <span key={a} className="rounded-full border hairline px-2.5 py-1 text-[10px] font-medium text-brand-muted">{a}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t hairline pt-5">
                  <div>
                    <p className="text-[11px] text-brand-muted line-through">{p.oldPrice}</p>
                    <p className="font-serif text-xl font-semibold text-brand-petrol">{p.price}</p>
                  </div>
                  <button
                    data-testid={`edu-catalog-buy-${p.id}`}
                    onClick={() => document.getElementById("materiais")?.scrollIntoView({ behavior: "smooth" })}
                    className="rounded-full bg-brand-petrol px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-teal"
                  >
                    Comprar
                  </button>
                </div>
              </article>
            </Reveal>
          ))}

          {soon.map((p) => (
            <Reveal key={p.id}>
              <article
                data-testid={`edu-catalog-soon-${p.id}`}
                className="flex h-full flex-col justify-between rounded-3xl border border-dashed border-brand-teal/40 bg-brand-paper p-7"
              >
                <div>
                  <span className="rounded-full bg-white px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                    Em breve
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-medium text-brand-petrol">{p.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{p.type}</p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-brand-hairline pt-5 text-xs text-brand-muted">
                  {p.public.includes("Estudante") && <GraduationCap className="h-4 w-4" />}
                  {p.public.includes("Profissional") && <Briefcase className="h-4 w-4" />}
                  {p.level}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div id="depoimentos-edu" className="mt-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Depoimentos</Eyebrow>
              <h3 className="mt-6 font-serif text-xl font-medium text-brand-ink sm:text-2xl">
                Quem estuda com a gente, recomenda
              </h3>
              <p className="mt-3 text-xs text-brand-muted">Depoimentos ilustrativos — serão substituídos por avaliações reais e autorizadas.</p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {EDU_TESTIMONIALS.map((t, i) => (
              <Reveal key={t.id} delay={0.05 * i}>
                <figure data-testid={`edu-testimonial-${t.id}`} className="flex h-full flex-col justify-between rounded-3xl border hairline bg-white p-7">
                  <div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-brand-teal text-brand-teal" />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-brand-muted">“{t.quote}”</blockquote>
                  </div>
                  <figcaption className="mt-5 border-t hairline pt-4">
                    <p className="text-sm font-bold text-brand-ink">{t.name}</p>
                    <p className="text-xs text-brand-muted">{t.context}</p>
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

export default EduCourses;
