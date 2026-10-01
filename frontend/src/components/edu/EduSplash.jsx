import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.25 + i * 0.55, duration: 0.8, ease: "easeInOut" },
      opacity: { delay: 0.25 + i * 0.55, duration: 0.05 },
    },
  }),
};

const BrainIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="h-16 w-16 sm:h-24 sm:w-24"
    fill="none"
    stroke="#FBFBF9"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    data-testid="edu-intro-brain"
    aria-hidden="true"
  >
    <motion.path
      d="M24 8c-3 0-5.2 1.8-5.2 4-3.2.2-5.8 2.6-5.8 6-2 1.2-3.2 3.8-2 6.2-1.6 2.2-1.2 6 1.6 7.6.2 3.2 3.4 5.8 7.4 4.6 1.2 2 3 3.2 4 3.2"
      variants={draw}
      initial="hidden"
      animate="visible"
      custom={0}
    />
    <motion.path
      d="M24 8c3 0 5.2 1.8 5.2 4 3.2.2 5.8 2.6 5.8 6 2 1.2 3.2 3.8 2 6.2 1.6 2.2 1.2 6-1.6 7.6-.2 3.2-3.4 5.8-7.4 4.6-1.2 2-3 3.2-4 3.2"
      variants={draw}
      initial="hidden"
      animate="visible"
      custom={1}
    />
    <motion.path d="M24 8v33" variants={draw} initial="hidden" animate="visible" custom={2} />
    <motion.path d="M17.5 19c2.2 1 4.3 1 6.5 0" variants={draw} initial="hidden" animate="visible" custom={3} />
    <motion.path d="M24.5 27c2.4 1.2 5 1 7-1" variants={draw} initial="hidden" animate="visible" custom={4} />
  </svg>
);

const LungIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="h-16 w-16 sm:h-24 sm:w-24"
    fill="none"
    stroke="#45B5AA"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    data-testid="edu-intro-lung"
    aria-hidden="true"
  >
    <motion.path d="M24 5.5v11" variants={draw} initial="hidden" animate="visible" custom={0} />
    <motion.path
      d="M23 17c-4 1-8 3-9.5 9C12 32 13 40 18 41c4 1 6-3 6-8V17z"
      variants={draw}
      initial="hidden"
      animate="visible"
      custom={1}
    />
    <motion.path
      d="M25 17c4 1 8 3 9.5 9C36 32 35 40 30 41c-4 1-6-3-6-8V17z"
      variants={draw}
      initial="hidden"
      animate="visible"
      custom={2}
    />
    <motion.path d="M19.5 12.5l4 4.5" variants={draw} initial="hidden" animate="visible" custom={3} />
    <motion.path d="M28.5 12.5l-4 4.5" variants={draw} initial="hidden" animate="visible" custom={4} />
  </svg>
);

const EduSplash = () => (
  <div className="relative flex flex-col items-center px-6" data-testid="edu-intro">
    <div className="flex items-center gap-8 sm:gap-14">
      <BrainIcon />
      <span className="h-10 w-px bg-white/20" />
      <LungIcon />
    </div>

    <div className="mt-9 overflow-hidden">
      <div className="font-mono text-2xl font-bold tracking-[0.3em] text-[#FBFBF9] sm:text-3xl">
        {"EDUSAUDE".split("").map((ch, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "112%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55, delay: 1.5 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch}
            </motion.span>
          </span>
        ))}
      </div>
    </div>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.15 }}
      className="mt-4 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-glow sm:text-xs"
      data-testid="edu-intro-slogan"
    >
      Conhecimento que transforma a prática em saúde.
    </motion.p>
  </div>
);

export default EduSplash;
