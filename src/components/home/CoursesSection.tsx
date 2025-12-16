import { CheckCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Variedad de cursos para distintos tipos de laboratorio.",
  "Certificación reconocida que te respaldará.",
  "Clases en vivo y asincrónicas disponibles en todo momento.",
];

const CoursesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden shadow-soft">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-muted-foreground">Imagen de curso</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              CERTIFÍCATE Y CRECE
            </span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Cursos online dictados<br />
              por expertos profesionales
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nuestros cursos están diseñados para impulsar tu desarrollo profesional y personal desde la comodidad de tu hogar. Nuestro objetivo es brindarte acceso a la educación de calidad, sin importar tu ubicación o tu horario.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={22} />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              to="/servicios"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all group"
            >
              Ver Cursos
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-dark transition-colors">
                <ArrowUpRight size={16} className="text-foreground" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
