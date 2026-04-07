import { motion } from "framer-motion";
import { Monitor, Phone, Cloud, FileSearch } from "lucide-react";

const scopes = [
  {
    icon: Monitor,
    title: "Sistemas e software",
    text: "Logs, registros de acesso, comportamento de sistemas, configurações e automatizações",
  },
  {
    icon: Phone,
    title: "Telecom e comunicação",
    text: "Registros de chamadas, status de ligações, APIs, históricos e evidências de comunicação",
  },
  {
    icon: Cloud,
    title: "Infraestrutura e cloud",
    text: "Integridade de dados, trilhas de auditoria, eventos em nuvem e segurança da informação",
  },
  {
    icon: FileSearch,
    title: "Evidências digitais",
    text: "Registros, históricos, inconsistências, validação técnica de fatos e leitura de vestígios",
  },
];

const ScopeSection = () => (
  <section className="py-24 lg:py-32 bg-mist">
    <div className="container mx-auto px-6 lg:px-16">
      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-16 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Campos de análise
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {scopes.map((scope, i) => (
          <motion.div
            key={i}
            className="bg-card p-8 rounded-lg border border-border/60 hover:border-copper/30 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <scope.icon className="w-8 h-8 text-copper mb-5" strokeWidth={1.5} />
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">{scope.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">{scope.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ScopeSection;
