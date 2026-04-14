import { BookOpen, Layers, Award } from "lucide-react";
import { Link } from "react-router-dom";

const learningItems = [
  {
    icon: BookOpen,
    title: "Cursos",
    description: "Cursos especializados en normativas de calidad, metrología y técnicas de laboratorio. Modalidad presencial y virtual.",
    hoverClass: "learning-card-cursos",
    href: "/capacitaciones#cursos",
  },
  {
    icon: Layers,
    title: "Programas",
    description: "Programas integrales de formación continua diseñados para el desarrollo profesional en gestión de calidad.",
    hoverClass: "learning-card-programas",
    href: "/capacitaciones#programas",
  },
  {
    icon: Award,
    title: "Especializaciones",
    description: "Especializaciones avanzadas para profesionales que buscan profundizar en áreas específicas de acreditación.",
    hoverClass: "learning-card-especializaciones",
    href: "/capacitaciones#especializaciones",
  },
];

const LearningGrid = () => {
  return (
    <section id="aprendizaje" className="bg-secondary py-20 lg:py-32">
      <div className="container-section">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto">
          {learningItems.map((item, index) => (
            <Link
              key={item.title}
              to={item.href}
              className={`service-card ${item.hoverClass} group animate-fade-in cursor-pointer w-full`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="icon-circle mb-5 group-hover:bg-white/20">
                  <item.icon 
                    size={28} 
                    className="text-primary group-hover:text-white transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mb-5 leading-relaxed text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                  {item.description}
                </p>
                <span className="uppercase text-sm tracking-wide font-semibold text-accent group-hover:text-white flex items-center gap-1 transition-colors duration-300">
                  Ver más
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningGrid;
