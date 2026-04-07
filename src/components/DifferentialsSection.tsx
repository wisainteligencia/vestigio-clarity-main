import { motion } from "framer-motion";

const bullets = [
  "Leitura técnica clara e estratégica",
  "Capacidade de traduzir complexidade em entendimento objetivo",
  "Experiência prática com sistemas e operação",
  "Atenção a consistência, rastreabilidade e interpretação",
  "Comunicação que conecta tecnologia e decisão",
];

const DifferentialsSection = () => (
  <section className="py-24 lg:py-32 bg-mist">
    <div className="container mx-auto px-6 lg:px-16">
      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Por que escolher a Vestígio?
      </motion.h2>

      <div className="max-w-2xl space-y-6">
        {bullets.map((text, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="w-2 h-2 rounded-full bg-copper mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
            <p className="text-base md:text-lg text-foreground/80 font-body">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
