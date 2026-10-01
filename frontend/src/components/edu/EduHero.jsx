import { motion } from "framer-motion";
import { ArrowDownRight, Award, BadgeCheck, BookOpen, MonitorPlay, Star } from "lucide-react";
import { scrollToId } from "@/lib/site";
import { EDU } from "@/lib/edu";

const HeroEdu = () => (
  <section id="inicio" data-testid="edu-hero-section" className="relative overflow-hidden bg-brand-deep pb-24 pt-40 lg:pb-32 lg:pt-48">
    <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-brand-teal/20 blur-3xl" />
    <div className="pointer-events-none absolute -left-52 bottom-0 h-[440px] w-[440px] rounded-full bg-brand-glow/10 blur-3xl" />

    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:px-12">
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-brand-glow" />
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-brand-glow">
            {EDU.slogan}
          </span>
        </motion.div>

        <h1 className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-[#FBFBF9] sm:text-5xl lg:text-6xl">
          {["Aprenda mais. Pratique melhor.", "Evolua sua performance", "na saúde."].map((line, i) => (
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
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
        >
          {EDU.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <button
            data-testid="edu-hero-cta-explorar"
            onClick={() => scrollToId("materiais")}
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-[0.06em] text-white shadow-[0_18px_40px_rgba(39,148,139,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-glow"
          >
            Explorar produtos
            <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>
          <button
            data-testid="edu-hero-cta-cursos"
            onClick={() => scrollToId("cursos")}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.06em] text-white/85 transition-all duration-300 hover:border-brand-glow hover:text-brand-glow"
          >
            Conhecer os cursos
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7"
        >
          {[
            { icon: BookOpen, label: "Apostilas e e-books" },
            { icon: MonitorPlay, label: "Cursos online" },
            { icon: Award, label: "Certificados" },
            { icon: BadgeCheck, label: "Base científica" },
          ].map((b) => (
            <span key={b.label} className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/55">
              <b.icon className="h-4 w-4 text-brand-glow" />
              {b.label}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="lg:col-span-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="relative mx-auto max-w-md"
        >
          <div className="overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.2, delay: 0.55 }}
            >
              <img src={EDU.heroImage} alt="Estudante da área da saúde em estudo" className="h-[420px] w-full object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl"
            data-testid="edu-hero-float-card"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-brand-glow text-brand-glow" />
              ))}
            </div>
            <p className="mt-1.5 text-xs font-semibold text-white">Materiais didáticos ilustrativos</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-12 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl"
          >
            <p className="text-xs font-semibold text-white">ENAMED • ENADE • Residências</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroEdu;
