import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import SubmitCaseModal from "./SubmitCaseModal";

const WHATSAPP_URL = "https://wa.me/553231980374?text=Ola,%20vim%20pela%20pagina%20da%20Vestigio%20e%20quero%20entender%20como%20funciona";

const CtaSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-slate-deep relative overflow-hidden">
      {/* Top copper accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-copper/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
            Precisa de clareza técnica para um caso que envolve tecnologia?
          </h2>

          <p className="text-base md:text-lg text-muted-foreground font-body mb-10 max-w-xl mx-auto">
            Antes de qualquer parecer ou reunião, a Vestígio realiza uma leitura técnica inicial 
            para compreender o contexto e a natureza das evidências.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-dark text-primary-foreground font-body font-medium px-8 py-4 rounded-md transition-all duration-300 text-sm tracking-wide"
            >
              <Send className="w-4 h-4" />
              Submeter caso para análise técnica
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-mineral/30 text-white/70 hover:text-primary-foreground hover:border-mineral font-body font-medium px-8 py-4 rounded-md transition-all duration-300 text-sm tracking-wide"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <SubmitCaseModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default CtaSection;
