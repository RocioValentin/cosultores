import { Users, GraduationCap, ClipboardCheck, Search, FlaskConical, ArrowUpRight, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Consultoría ISO 17025",
    description: "Guiamos a su empresa en la acreditación y certificación ISO, adaptándonos a sus necesidades específicas.",
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones Especializadas",
    description: "Capacitación in-house personalizada y práctica para su equipo en su lugar de trabajo.",
  },
  {
    icon: ClipboardCheck,
    title: "Sistemas de Gestión (ISO 9001 - 14001 - 45001)",
    description: "Ayudamos a implementar y mantener la Norma ISO 17025 en su laboratorio para asegurar sus resultados.",
  },
  {
    icon: Search,
    title: "Auditorías Internas",
    description: "Nuestra auditoría interna asegura calidad y precisión en su laboratorio mediante una revisión meticulosa de procesos.",
  },
  {
    icon: FlaskConical,
    title: "Venta de Reactivos y Materiales",
    description: "Suministro de reactivos y materiales de alta calidad para laboratorios de ensayo y calibración.",
  },
  {
    icon: Settings,
    title: "Fabricación, Venta y Mantenimiento de Equipos",
    description: "Comercialización y soporte técnico de equipos de laboratorio con altos estándares de calidad y desempeño",
  },
];

const HomeServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text Content */}
          <div className="lg:sticky lg:top-32">
            <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block">
              SERVICIOS QUE PROVEEMOS
            </span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Garantiza la calidad y la acreditación de tu laboratorio
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nuestro enfoque innovador y comprometido está diseñado para ayudarle a satisfacer las demandas del mercado en su laboratorio. Contamos con expertos del INACAL, ingenieros, químicos, físicos, biólogos, y más, todos altamente capacitados y con amplia experiencia.
            </p>

            {/* CTA Button */}
            <Link
              to="/servicios"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all group"
            >
              Ver Servicios
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-dark transition-colors">
                <ArrowUpRight size={16} className="text-foreground" />
              </span>
            </Link>
          </div>

          {/* Right - Service Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full border-2 border-accent/30 flex items-center justify-center mb-6 mx-auto">
                  <service.icon size={32} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                {/* <Link
                  to="/servicios"
                  className="block text-center text-accent font-semibold uppercase text-sm tracking-wide hover:text-primary transition-colors"
                >
                  VER MÁS
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
