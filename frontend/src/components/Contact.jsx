import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CalendarCheck, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import {
  EMAIL_DISPLAY,
  REGION_DISPLAY,
  SERVICES,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full rounded-xl border hairline bg-white px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-muted/60 outline-none transition-all duration-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    modality: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Mensagem recebida! O Dr. Rafael entrará em contato em breve.");
      setForm({ name: "", phone: "", service: "", modality: "", message: "" });
    } catch {
      toast.error("Não foi possível enviar agora. Tente pelo WhatsApp abaixo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contato" data-testid="contact-section" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Contato</Eyebrow>
            <h2 className="mt-6 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
              Inicie seu plano de reabilitação
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-muted">
              Atendimento humanizado com hora marcada em consultório ou no
              conforto do seu domicílio.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form
              data-testid="contact-form"
              onSubmit={submit}
              className="grid grid-cols-1 gap-5 rounded-3xl border hairline bg-brand-paper p-7 sm:grid-cols-2 sm:p-9"
            >
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-brand-petrol">
                  Nome completo
                </label>
                <input
                  id="name"
                  data-testid="contact-input-name"
                  className={inputCls}
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={set("name")}
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-brand-petrol">
                  Telefone / WhatsApp
                </label>
                <input
                  id="phone"
                  data-testid="contact-input-phone"
                  type="tel"
                  className={inputCls}
                  placeholder="(85) 90000-0000"
                  value={form.phone}
                  onChange={set("phone")}
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-brand-petrol">
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  data-testid="contact-select-service"
                  className={inputCls}
                  value={form.service}
                  onChange={set("service")}
                  required
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Ainda não sei">Ainda não sei / preciso de orientação</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="modality" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-brand-petrol">
                  Tipo de atendimento
                </label>
                <select
                  id="modality"
                  data-testid="contact-select-modality"
                  className={inputCls}
                  value={form.modality}
                  onChange={set("modality")}
                  required
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="Domiciliar">Domiciliar</option>
                  <option value="Consultório">Consultório</option>
                  <option value="A definir na avaliação">A definir na avaliação</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-brand-petrol">
                  Breve relato do quadro ou sintomas
                </label>
                <textarea
                  id="message"
                  data-testid="contact-input-message"
                  rows={4}
                  className={`${inputCls} resize-none`}
                  placeholder="Conte em poucas palavras o que você sente há quanto tempo..."
                  value={form.message}
                  onChange={set("message")}
                />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <button
                  data-testid="contact-submit-button"
                  type="submit"
                  disabled={sending}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand-petrol px-8 py-4 text-sm font-semibold text-[#FBFBF9] transition-all duration-300 hover:bg-brand-teal disabled:opacity-60"
                >
                  {sending ? "Enviando..." : "Enviar mensagem"}
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
                <span className="text-xs text-brand-muted">
                  Retorno em até 1 dia útil.
                </span>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex flex-col gap-5">
              <a
                data-testid="contact-card-whatsapp"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border hairline bg-brand-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal hover:shadow-[0_18px_44px_rgba(24,78,96,0.1)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15">
                  <Phone className="h-5 w-5 text-[#1da851]" />
                </span>
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-sm font-bold text-brand-ink">{WHATSAPP_DISPLAY}</p>
                  <p className="text-xs text-brand-muted">Resposta rápida em horário comercial</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border hairline bg-brand-paper p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-teallight">
                  <Mail className="h-5 w-5 text-brand-teal" />
                </span>
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
                    E-mail
                  </p>
                  <p className="mt-1 text-sm font-bold text-brand-ink">{EMAIL_DISPLAY}</p>
                  <p className="text-xs text-brand-muted">Espaço configurável — placeholder</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border hairline bg-brand-paper p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-teallight">
                  <MapPin className="h-5 w-5 text-brand-teal" />
                </span>
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
                    Atendimento
                  </p>
                  <p className="mt-1 text-sm font-bold text-brand-ink">{REGION_DISPLAY}</p>
                  <p className="text-xs text-brand-muted">Endereço do consultório sob consulta</p>
                </div>
              </div>

              <a
                data-testid="contact-cta-whatsapp-direct"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a]"
              >
                <CalendarCheck className="h-4 w-4" />
                Prefere WhatsApp? Agende aqui
              </a>

              <p className="text-xs leading-relaxed text-brand-muted/80" data-testid="contact-disclaimer">
                Informações de contato e endereço apresentadas como espaço
                configurável institucional — placeholders editáveis.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
