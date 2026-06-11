import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import imagemetro from "../../assets/images/carrusel2.png";

const features = [
  "Especialistas en laboratorios de ensayo y calibración",
  "Enfoque práctico y orientado a acreditación",
  "Experiencia en ISO/IEC 17025 y trinorma",
  "Metodología clara y acompañamiento real",
];

const ExperienceSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/4] bg-background rounded-2xl overflow-hidden shadow-soft max-w-md mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img src={imagemetro} alt="CORMA metro" className="w-full h-full object-contain" />
                {/* <span className="text-muted-foreground">Imagen de experiencia</span> */}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              ¿POR QUÉ CORMA?
            </span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Brindamos servicios y productos a laboratorios de ensayo y calibración.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Impulsamos el desarrollo de laboratorios mediante servicios de consultoría, capacitación y equipamiento especializado, proporcionando soluciones confiables y adaptadas a los requerimientos de cada cliente y sector.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-md bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChevronRight size={14} className="text-primary-foreground" />
                  </span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all"
              >
                Conoce más
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
