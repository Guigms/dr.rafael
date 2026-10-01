import { BadgeCheck, MapPin } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { ABOUT } from "@/lib/site";

const About = () => (
  <section id="sobre" data-testid="about-section" className="relative bg-white py-24 lg:py-32">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
      <Reveal className="lg:col-span-5">
        <div className="relative mx-auto max-w-md">
          <div className="arch-frame relative overflow-hidden shadow-[0_30px_70px_rgba(24,78,96,0.16)] ring-1 ring-brand-hairline">
            <img src={ABOUT.photo} alt="Dr. Rafael Dantas" className="h-[420px] w-full object-cover object-top sm:h-[500px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border hairline bg-white px-5 py-2.5 shadow-[0_16px_40px_rgba(24,78,96,0.14)]">
            <BadgeCheck className="h-4 w-4 text-brand-teal" />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-petrol">
              14 anos de experiência
            </p>
          </div>
        </div>
      </Reveal>

      <div className="lg:col-span-7">
        <Reveal>
          <Eyebrow>Sobre o profissional</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            {ABOUT.title}
          </h2>
          <div className="mt-7 flex flex-wrap gap-2.5" data-testid="about-credentials">
            {ABOUT.credentials.map((c) => (
              <span key={c} className="rounded-full border hairline bg-brand-paper px-4 py-2 text-xs font-semibold text-brand-petrol">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3" data-testid="about-areas">
            {ABOUT.areas.map((a) => (
              <div key={a} className="rounded-2xl border hairline bg-brand-teallight/50 p-5">
                <p className="text-sm font-bold leading-snug text-brand-ink">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {ABOUT.text.map((t, i) => (
              <p key={i} className="max-w-2xl text-base leading-relaxed text-brand-muted">
                {t}
              </p>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border hairline bg-brand-paper p-5">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
            <p className="text-sm leading-relaxed text-brand-muted">{ABOUT.region}</p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
