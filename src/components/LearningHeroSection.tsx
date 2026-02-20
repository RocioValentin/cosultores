import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const LearningHeroSection = () => {
  return (
    <section className="hero-gradient py-20 lg:py-32">
      <div className="container-section text-center">
        <h1 className="text-5xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
          Capacitaciones
        </h1>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Formación especializada para el desarrollo de competencias técnicas.
        </p>
        
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Link to="/" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            Inicio
          </Link>
          <ChevronRight size={16} className="text-primary-foreground/60" />
          <ChevronRight size={16} className="text-primary-foreground/60 -ml-3" />
          <span className="text-primary-foreground font-medium">Capacitaciones</span>
        </div>
      </div>
    </section>
  );
};

export default LearningHeroSection;
