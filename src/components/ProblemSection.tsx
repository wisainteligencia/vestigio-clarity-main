import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const bullets = [
  "Logs e registros podem ser mal interpretados",
  "Sistemas e integrações podem gerar leituras equivocadas",
  "Fatos técnicos se perdem quando não são traduzidos com clareza",
  "A parte contrária pode sustentar uma leitura incompleta ou enviesada",
  "Decisões podem ser impactadas por interpretação técnica fraca",
];

const ProblemSection = () => (
  <section className="py-24 lg:py-32 bg-mist">
    <div className="container mx-auto px-6 lg:px-16">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12 leading-tight">
          Vestígios digitais não se explicam sozinhos
        </h2>

        <div className="space-y-5 mb-12">
          {bullets.map((text, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AlertTriangle className="w-5 h-5 text-copper mt-0.5 shrink-0" />
              <p className="text-base md:text-lg text-foreground/80 font-body">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-l-2 border-copper pl-6">
          <p className="text-lg md:text-xl font-display italic text-foreground/90">
            "O risco não está apenas no dado técnico. Está na forma como ele é lido, explicado e defendido."
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
