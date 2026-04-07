import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import SubmitCaseModal from "./SubmitCaseModal";
import slogandourado from "@/assets/slogan-dourado.png";
const WHATSAPP_URL = "https://wa.me/553231980374?text=Ola,%20vim%20pela%20pagina%20da%20Vestigio%20e%20quero%20entender%20como%20funciona";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center bg-slate-deep overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 59px, hsl(210 20% 96% / 0.5) 59px, hsl(210 20% 96% / 0.5) 60px),
          repeating-linear-gradient(90deg, transparent, transparent 59px, hsl(210 20% 96% / 0.5) 59px, hsl(210 20% 96% / 0.5) 60px)`
      }} />

      {/* Copper accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-copper to-transparent opacity-60" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 py-24 lg:py-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={slogandourado} alt="Vestígio — Inteligência Técnica em Evidências Digitais" className="h-20 md:h-35 mb-8 w-auto" />
          </motion.div>

          <motion.h1
            className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quando a discussão envolve tecnologia,{" "}
            <span className="text-copper">opinião não basta.</span>
            <br />
            É preciso leitura técnica.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A Vestígio interpreta evidências digitais, registros e sistemas com clareza técnica para apoiar estrategicamente casos, processos e decisões.
          </motion.p>

          <motion.p
            className="text-sm md:text-base text-muted-foreground font-body leading-relaxed max-w-2xl mb-10 border-l-2 border-copper/40 pl-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Atuação especializada como assistente técnico da parte em casos que envolvem tecnologia, registros, sistemas e provas digitais.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
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
              className="inline-flex items-center justify-center gap-2 border border-mineral/100 text-muted-foreground hover:text-primary-foreground hover:border-mineral/60 font-body font-medium px-8 py-4 rounded-md transition-all duration-300 text-sm tracking-wide"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-graphite/50 to-transparent" />

      <SubmitCaseModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default HeroSection;
