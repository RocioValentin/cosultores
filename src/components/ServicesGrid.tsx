import { Users, GraduationCap, ClipboardCheck, Search } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Consultorías",
    description: "Acompañamos a tu laboratorio en la implementación o mejora de sistemas basados en ISO 17025. Asesoramiento técnico completo.",
    hoverClass: "service-card-consultoria",
    href: "/servicios#consultorias",
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones",
    description: "Programas personalizados para fortalecer las competencias del personal técnico. Modalidad in-house y virtual.",
    hoverClass: "service-card-capacitacion",
    href: "/capacitaciones",
  },
  {
    icon: ClipboardCheck,
    title: "Implementaciones",
    description: "Implementamos sistemas de gestión ISO 17025, trazabilidad y procedimientos de aseguramiento de calidad.",
    hoverClass: "service-card-implementacion",
    href: "/servicios#implementaciones",
  },
  {
    icon: Search,
    title: "Auditorías",
    description: "Realizamos auditorías internas que identifican brechas, no conformidades y oportunidades de mejora.",
    hoverClass: "service-card-auditoria",
    href: "/servicios#auditoria",
  },
];

const ServicesGrid = () => {
  return (
    <section id="servicios" className="bg-secondary py-20 lg:py-32">
      <div className="container-section">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {services.map((service, index) => (
            <Link
              to={service.href}
              key={service.title}
              className={`service-card ${service.hoverClass} group animate-fade-in cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="icon-circle mb-5 group-hover:bg-white/20">
                  <service.icon 
                    size={28} 
                    className="text-primary group-hover:text-white transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mb-5 leading-relaxed text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
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

export default ServicesGrid;
