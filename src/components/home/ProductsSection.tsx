import { Cpu, Lightbulb, ArrowUpRight } from "lucide-react";

const stats = [
  {
    icon: Cpu,
    value: "398+",
    label: "Items Vendidos",
  },
  {
    icon: Lightbulb,
    value: "120+",
    label: "Implementaciones",
  },
];

const ProductsSection = () => {
  return (
    <section className="hero-gradient py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <div className="absolute right-10 top-10 w-96 h-96 rounded-full border border-primary-foreground/30" />
        <div className="absolute -right-20 bottom-0 w-64 h-64 rounded-full border border-accent/50" />
      </div>

      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block italic">
              PRODUCTOS QUE NECESITAS
            </span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Encuentra los insumos y equipos que necesitas
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Venta de reactivos, materiales y equipos de laboratorio, fabricación y mantenimiento de equipos de monitoreo ambiental y ocupacional, ofrecemos soluciones integrales adaptadas a las necesidades específicas de cada cliente.
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-6 py-4"
                >
                  <stat.icon size={32} className="text-accent" strokeWidth={1.5} />
                  <div>
                    <span className="text-3xl font-heading font-bold text-primary-foreground">
                      {stat.value}
                    </span>
                    <span className="block text-primary-foreground/70 text-sm">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition-all group"
            >
              Ver Productos
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/80 transition-colors">
                <ArrowUpRight size={16} className="text-primary-foreground" />
              </span>
            </a>
          </div>

          {/* Right - Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-primary-foreground/10 rounded-2xl overflow-hidden border border-primary-foreground/20">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-primary-foreground/50">Imagen de productos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
