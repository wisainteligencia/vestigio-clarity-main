import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const items = [
  "Advogados e escritórios jurídicos",
  "Empresas com conflitos ou discussões ligadas a tecnologia",
  "Negócios que dependem de registros, logs, sistemas e integrações",
  "Casos em que a leitura técnica precisa deixar de ser opinião e virar clareza",
];

const AudienceSection = () => (
  <section className="py-24 lg:py-32 bg-graphite relative">
    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-12 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Quem normalmente busca esse tipo de apoio
      </motion.h2>

      <div className="max-w-2xl space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ArrowRight className="w-5 h-5 text-copper mt-0.5 shrink-0" />
            <p className="text-base md:text-lg text-white/80 font-body">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
