import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "", once = true }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, light = false }) => (
  <div className="flex items-center gap-3">
    <span className={`h-px w-10 ${light ? "bg-brand-teal" : "bg-brand-teal"}`} />
    <span className="eyebrow">{children}</span>
  </div>
);

export default Reveal;
