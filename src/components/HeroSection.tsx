import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 lg:py-32">
      <div className="container-section text-center">
        <h1 className="text-5xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
          Servicios
        </h1>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Impulsamos la calidad de tu laboratorio a través de soluciones integrales.
        </p>
        
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            Inicio
          </a>
          <ChevronRight size={16} className="text-primary-foreground/60" />
          <ChevronRight size={16} className="text-primary-foreground/60 -ml-3" />
          <span className="text-primary-foreground font-medium">Servicios</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
