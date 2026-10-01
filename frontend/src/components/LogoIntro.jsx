import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";

const LogoIntro = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 2300);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="logo-intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FBFBF9]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand-teallight blur-3xl opacity-70" />
          <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-teal/10 blur-3xl" />

          <div className="relative flex flex-col items-center px-6">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl bg-white px-8 py-6 shadow-[0_24px_60px_rgba(24,78,96,0.14)] sm:px-12 sm:py-8"
              >
                <motion.img
                  src={logo}
                  alt="Dr. Rafael Dantas — Atendimento e Consultoria em Fisioterapia"
                  className="h-16 w-auto sm:h-20"
                  initial={{ scale: 0.94 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 h-px w-40 origin-center bg-brand-teal sm:w-56"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-5 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-petrol/70 sm:text-xs"
            >
              Fisioterapia Neurofuncional • Respiratória • Geriátrica
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-brand-teal"
              data-testid="logo-intro-tagline"
            >
              Movimento • Saúde • Qualidade de Vida
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none absolute inset-0"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoIntro;
