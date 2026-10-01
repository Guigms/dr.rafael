import { CalendarCheck, Clock, Home, Instagram, MapPin, Phone } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import {
  FINAL_CTA,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
  scrollToId,
} from "@/lib/site";

const Location = () => (
  <section id="contato" data-testid="location-section" className="relative py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow>Área de atuação / Localização</Eyebrow>
          <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
            Onde atendo
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div
            data-testid="location-clinic-card"
            className="flex h-full flex-col rounded-3xl border hairline bg-white p-8 shadow-[0_24px_60px_rgba(24,78,96,0.07)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teallight">
              <MapPin className="h-5 w-5 text-brand-teal" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-medium text-brand-petrol">{LOCATION.clinic.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">{LOCATION.clinic.address}</p>
            <div className="mt-6 space-y-2" data-testid="location-clinic-hours">
              {LOCATION.clinic.hours.map((h) => (
                <div key={h.day} className="flex items-center gap-3 rounded-xl border hairline bg-brand-paper px-4 py-2.5">
                  <Clock className="h-4 w-4 text-brand-teal" />
                  <p className="text-sm text-brand-ink/80">
                    <strong className="font-semibold">{h.day}:</strong> {h.time}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border hairline" data-testid="location-map">
              <iframe
                title="Mapa — Clínica Aline Maciel, Maracanaú"
                src={`https://www.google.com/maps?q=${encodeURIComponent(LOCATION.clinic.mapQuery)}&output=embed`}
                className="h-52 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col gap-6">
            <div className="rounded-3xl border hairline bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teallight">
                <Home className="h-5 w-5 text-brand-teal" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-medium text-brand-petrol">Atendimento domiciliar</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted" data-testid="location-home">
                {LOCATION.home}
              </p>
              <p className="mt-4 rounded-xl bg-brand-teallight/60 px-4 py-3 text-sm text-brand-petrol">
                Regiões: Maracanaú • Fortaleza • Pacatuba • Maranguape • Caucaia
              </p>
            </div>

            <div className="rounded-3xl border hairline bg-brand-deep p-8 text-[#FBFBF9]">
              <h3 className="font-serif text-xl font-medium">Contato</h3>
              <div className="mt-5 space-y-4">
                <a
                  data-testid="location-contact-whatsapp"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3.5 transition-colors hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-brand-glow" />
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-glow">WhatsApp</p>
                    <p className="text-sm font-bold">{WHATSAPP_DISPLAY}</p>
                  </div>
                </a>
                <a
                  data-testid="location-contact-instagram"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3.5 transition-colors hover:bg-white/10"
                >
                  <Instagram className="h-5 w-5 text-brand-glow" />
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-glow">Instagram</p>
                    <p className="text-sm font-bold">{INSTAGRAM_HANDLE}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const FinalCta = () => (
  <section data-testid="final-cta-section" className="relative overflow-hidden bg-brand-deep py-20 lg:py-24">
    <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-brand-teal/20 blur-3xl" />
    <Reveal>
      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <h2 className="font-serif text-3xl font-light leading-[1.15] tracking-tight text-[#FBFBF9] sm:text-4xl lg:text-5xl">
          {FINAL_CTA.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/60">{FINAL_CTA.sub}</p>
        <button
          data-testid="final-cta-button"
          onClick={() => scrollToId("contato")}
          className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-brand-teal px-9 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_18px_40px_rgba(39,148,139,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-glow"
        >
          <CalendarCheck className="h-4 w-4" />
          {FINAL_CTA.button}
        </button>
      </div>
    </Reveal>
  </section>
);

export default Location;
export { FinalCta };
