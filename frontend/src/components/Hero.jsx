import { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, CalendarCheck, ShieldCheck } from "lucide-react";
import { HERO_IMAGE, WHATSAPP_LINK, scrollToId } from "@/lib/site";

const HERO_LINES = [
  "Onde o rigor científico",
  "intensivo encontra o",
  "cuidado humano do movimento.",
];

const CREDENTIALS = [
  { top: "Albert Einstein-SP", bottom: "Especialista — Terapia Intensiva Adulto" },
  { top: "SOBRATI", bottom: "Mestre em Terapia Intensiva Adulto" },
  { top: "NASF Maracanaú", bottom: "5 anos na Saúde da Família" },
];

const SpineEmblem = () => {
  const dots = Array.from({ length: 12 }, (_, i) => ({
    x: 80 + Math.sin(i / 2.1) * 30,
    y: 26 + i * 21,
  }));
  const path = dots.map((d, i) => `${i === 0 ? "M" : "L"}${d.x},${d.y}`).join(" ");
  return (
    <svg viewBox="0 0 160 280" className="h-full w-full" fill="none" aria-hidden="true">
      <path d={path} stroke="#184E60" strokeOpacity="0.2" strokeWidth="1.5" />
      {dots.map((d, i) => (
        <motion.circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={3.5 + (i % 3)}
          fill={i % 2 ? "#27948B" : "#184E60"}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.35, 1] }}
          transition={{ duration: 3.4, delay: i * 0.18, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: `${d.x}px ${d.y}px` }}
        />
      ))}
    </svg>
  );
};

const Hero = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yGlass = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rX = useTransform(my, [-0.5, 0.5], [4, -4]);
  const rY = useTransform(mx, [-0.5, 0.5], [-5, 5]);

  const onMove = (e) => {
    const r = imgRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="inicio"
      data-testid="hero-section"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 lg:pt-24"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-brand-teallight opacity-80 blur-3xl" />
      <div className="pointer-events-none absolute -left-56 top-1/3 h-[440px] w-[440px] rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[6%] left-[3%] hidden h-64 w-40 opacity-60 lg:block">
        <SpineEmblem />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-brand-teal" />
            <span className="eyebrow whitespace-normal">Fisioterapia institucional & clínica avançada</span>
          </motion.div>

          <h1 className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            {HERO_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg"
          >
            <strong className="font-semibold text-brand-petrol">
              Dr. Francisco Rafael Pinheiro Dantas
            </strong>{" "}
            — Especialista pelo Albert Einstein-SP e Mestre pela SOBRATI.
            Reabilitação respiratória de alta precisão, atendimento domiciliar
            e excelência em saúde.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              data-testid="hero-cta-whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand-teal px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(39,148,139,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-petrol"
            >
              <CalendarCheck className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
              Agendar consulta via WhatsApp
            </a>
            <button
              data-testid="hero-cta-services"
              onClick={() => scrollToId("servicos")}
              className="inline-flex items-center gap-2 rounded-full border hairline bg-white/60 px-7 py-4 text-sm font-semibold text-brand-petrol backdrop-blur transition-all duration-300 hover:border-brand-teal hover:text-brand-teal"
            >
              Conhecer trajetória & serviços
              <ArrowDownRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 grid grid-cols-1 gap-6 border-t hairline pt-8 sm:grid-cols-3"
          >
            {CREDENTIALS.map((c) => (
              <div key={c.top}>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-teal">
                  {c.top}
                </p>
                <p className="mt-1.5 text-sm text-brand-muted">{c.bottom}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5" style={{ perspective: "1200px" }}>
          <motion.div
            ref={imgRef}
            data-testid="hero-visual"
            onMouseMove={onMove}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
            style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md"
          >
            <motion.div style={{ y: yImg }} className="relative">
              <div className="arch-frame relative overflow-hidden shadow-[0_30px_70px_rgba(24,78,96,0.18)] ring-1 ring-brand-hairline">
                <motion.div
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  transition={{ duration: 1.2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={HERO_IMAGE}
                    alt="Dr. Rafael Dantas — Fisioterapeuta"
                    className="h-[460px] w-full object-cover object-top sm:h-[540px]"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              style={{ y: yGlass }}
              className="absolute -left-4 top-14 sm:-left-10"
            >
              <div
                data-testid="hero-glass-card-credentials"
                className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-[0_20px_50px_rgba(24,78,96,0.14)] backdrop-blur-xl"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teallight">
                  <ShieldCheck className="h-4 w-4 text-brand-teal" />
                </span>
                <div>
                  <p className="text-xs font-bold text-brand-ink">Fisioterapia em UTI Adulto</p>
                  <p className="text-[11px] text-brand-muted">Especialista Albert Einstein-SP</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: yGlass }}
              className="absolute -right-3 bottom-10 sm:-right-8"
            >
              <div
                data-testid="hero-glass-card-master"
                className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-[0_20px_50px_rgba(24,78,96,0.14)] backdrop-blur-xl"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/15 font-serif text-base font-semibold text-brand-petrol">
                  M
                </span>
                <div>
                  <p className="text-xs font-bold text-brand-ink">Mestre em Terapia Intensiva</p>
                  <p className="text-[11px] text-brand-muted">SOBRATI</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
