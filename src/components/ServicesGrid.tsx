import { Users, GraduationCap, ClipboardCheck, Search } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Consultorías",
    description: "Acompañamos a tu laboratorio en la implementación o mejora de sistemas basados en ISO 17025. Asesoramiento técnico completo.",
    highlighted: false,
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones",
    description: "Programas personalizados para fortalecer las competencias del personal técnico. Modalidad in-house y virtual.",
    highlighted: false,
  },
  {
    icon: ClipboardCheck,
    title: "Implementaciones",
    description: "Implementamos sistemas de gestión ISO 17025, trazabilidad y procedimientos de aseguramiento de calidad.",
    highlighted: false,
  },
  {
    icon: Search,
    title: "Auditorías",
    description: "Realizamos auditorías internas que identifican brechas, no conformidades y oportunidades de mejora.",
    highlighted: true,
  },
];

const ServicesGrid = () => {
  return (
    <section id="servicios" className="section-soft-bg pb-20 lg:pb-32">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${service.highlighted ? "service-card-dark" : "service-card"} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className={service.highlighted ? "icon-circle-dark" : "icon-circle"}>
                  <service.icon 
                    size={28} 
                    className={service.highlighted ? "text-accent" : "text-accent"} 
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1">
                  <h3 className={`font-heading font-bold text-xl mb-3 ${service.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-4 leading-relaxed ${service.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {service.description}
                  </p>
                  <button className="link-accent uppercase text-sm tracking-wide flex items-center gap-1 group">
                    Ver más
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
