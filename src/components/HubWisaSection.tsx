import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-wisa.png";

const HubWisaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="container max-w-4xl mx-auto px-4">
        <div
          className="rounded-2xl p-8 md:p-12 text-center border shadow-lg"
          style={{
            background: "linear-gradient(135deg, hsl(215 60% 15%) 0%, hsl(215 50% 10%) 100%)",
            borderColor: "hsl(215 30% 30%)",
          }}
        >
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center bg-white shadow-lg">
              <img src={logo} alt="Hub WiSa" className="w-[110px] h-[85px] object-contain" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
           Sobre a WiSa Inteligência para Negócios
          </h3>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: "hsl(215 20% 70%)" }}>
            Somos um ecossistema de inteligência B2B focado em crescimento escalável. 
            Unimos gestão, vendas, tecnologia e educação corporativa para acabar com o seu retrabalho operacional.
          </p>
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-lg font-semibold hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg, hsl(25 38% 44%), hsl(25 50% 55%))", color: "white" }}>
            <a href="https://hubwisa.com.br" target="_blank" rel="noopener noreferrer">
              Acessar Nosso Site
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HubWisaSection;
