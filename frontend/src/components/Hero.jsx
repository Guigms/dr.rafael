import { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { HERO, WHATSAPP_LINK, buildWaLink, scrollToId } from "@/lib/site";

const MINIS = [
  { img: HERO.images.neuro, label: "Reabilitação neurológica" },
  { img: HERO.images.resp, label: "Fisioterapia respiratória" },
  { img: HERO.images.elderly, label: "Idoso em atividade funcional" },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yStrip = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rX = useTransform(my, [-0.5, 0.5], [3, -3]);
  const rY = useTransform(mx, [-0.5, 0.5], [-4, 4]);

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
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 lg:pt-24"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-brand-teallight opacity-80 blur-3xl" />
      <div className="pointer-events-none absolute -left-56 top-1/3 h-[440px] w-[440px] rounded-full bg-brand-teal/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-brand-teal" />
            <span className="eyebrow whitespace-normal">{HERO.eyebrow}</span>
          </motion.div>

          <h1 className="font-serif text-3xl font-light leading-[1.12] tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {HERO.headline.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg"
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-cta-agendar"
              onClick={() => scrollToId("contato")}
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand-teal px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(39,148,139,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-petrol"
            >
              <CalendarCheck className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
              {HERO.primaryCta}
            </button>
            <a
              data-testid="hero-cta-whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border hairline bg-white/60 px-7 py-4 text-sm font-semibold text-brand-petrol backdrop-blur transition-all duration-300 hover:border-brand-teal hover:text-brand-teal"
            >
              <MessageCircle className="h-4 w-4" />
              {HERO.secondaryCta}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t hairline pt-7"
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">CREFITO 170532-F</p>
            <p className="text-sm text-brand-muted">Neurofuncional • Respiratória • Geriátrica</p>
            <p className="text-sm text-brand-muted">Maracanaú/CE e home care na região</p>
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
                    src={HERO.images.resp}
                    alt="Fisioterapia respiratória em atendimento"
                    className="h-[400px] w-full object-cover sm:h-[470px]"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/50 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div style={{ y: yStrip }} className="relative z-10 -mt-14 grid grid-cols-3 gap-3 px-2">
              {MINIS.map((m, i) => (
                <motion.div
                  key={m.label}
                  data-testid={`hero-mini-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-2xl border border-white/60 shadow-[0_18px_44px_rgba(24,78,96,0.16)]"
                >
                  <img src={m.img} alt={m.label} className="h-20 w-full object-cover sm:h-24" />
                  <p className="bg-white/90 px-2 py-2 text-[10px] font-semibold leading-tight text-brand-petrol backdrop-blur">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
