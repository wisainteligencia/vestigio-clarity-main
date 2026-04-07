import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const items = [
  "Relatório técnico inicial",
  "Parecer técnico complementar",
  "Revisão e estruturação de quesitos",
  "Análise crítica de laudo",
  "Suporte técnico contínuo ao caso",
];

const DeliverablesSection = () => (
  <section className="py-24 lg:py-32 bg-slate-deep relative">
    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-12 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        O que pode ser entregue
      </motion.h2>

      <div className="max-w-2xl space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <CheckCircle className="w-5 h-5 text-copper shrink-0" strokeWidth={1.5} />
            <span className="text-base md:text-lg text-white/80 font-body">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverablesSection;
