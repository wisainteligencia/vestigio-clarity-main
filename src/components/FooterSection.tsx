import logo from "@/assets/logo-branca.png";
import { Instagram, Facebook } from "lucide-react";

const FooterSection = () => (
  <footer className="py-12 bg-graphite border-t border-mineral/10">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Vestígio" className="h-14 md:h-16 w-auto opacity-70" />
        <p className="text-xs text-copper font-body text-center md:text-right">
          Transformamos vestígios digitais em clareza técnica para o processo e para a decisão.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-mineral/10">
        <a
          href="https://instagram.com/hubwisa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://facebook.com/hubwisa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper hover:text-white transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
