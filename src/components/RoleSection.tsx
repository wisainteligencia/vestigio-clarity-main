import { motion } from "framer-motion";

const RoleSection = () => (
  <section className="py-24 lg:py-32 bg-graphite relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(210 20% 96%) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }} />

    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-8 leading-tight">
          Como a Vestígio atua
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
          A Vestígio atua na leitura técnica de evidências digitais e registros ligados a tecnologia, apoiando estrategicamente a compreensão do caso e a construção de clareza técnica. 
          A atuação ocorre como assistente técnico da parte em contextos que envolvem sistemas, logs, integrações, trilhas de auditoria e outros vestígios digitais.
        </p>
      </motion.div>
    </div>
  </section>
);

export default RoleSection;
