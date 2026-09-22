import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { TIMELINE, SITE } from "@/lib/site";

const Trajectory = () => {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.55"],
  });

  return (
    <section
      id="trajetoria"
      data-testid="experience-timeline-section"
      className="relative bg-white py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>Trajetória e rigor científico</Eyebrow>
              <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
                Um currículo construído nos mais prestigiados centros de
                ensino — e na prática intensiva hospitalar.
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border hairline bg-brand-teallight/60 px-5 py-4">
                <GraduationCap className="h-5 w-5 shrink-0 text-brand-teal" />
                <p className="text-xs leading-relaxed text-brand-muted sm:text-sm">
                  {SITE.lattesNote} — verifique o histórico completo no
                 Currículo Lattes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div ref={listRef} className="relative lg:col-span-7">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-brand-hairline" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-brand-teal"
          />
          <ol className="flex flex-col gap-10 pl-10">
            {TIMELINE.map((m, i) => (
              <Reveal key={i} delay={0.03 * i}>
                <li
                  data-testid={`experience-timeline-item-${i}`}
                  className="group relative"
                >
                  <span className="absolute -left-10 top-1.5 flex h-[15px] w-[15px] items-center justify-center">
                    <span className="absolute h-full w-full rounded-full bg-brand-teal/25 transition-transform duration-500 group-hover:scale-[1.9]" />
                    <span className="relative h-[7px] w-[7px] rounded-full bg-brand-teal ring-4 ring-white" />
                  </span>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
                    {m.period}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-medium text-brand-petrol sm:text-xl">
                    {m.institution}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand-ink/80">
                    {m.role}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-muted">
                    {m.details}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Trajectory;
