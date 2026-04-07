import logo from "@/assets/logo-branca.png";

const FooterSection = () => (
  <footer className="py-12 bg-graphite border-t border-mineral/10">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Vestígio" className="h-14 md:h-16 w-auto opacity-70" />
        <p className="text-xs text-copper font-body text-center md:text-right">
          Transformamos vestígios digitais em clareza técnica para o processo e para a decisão.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
