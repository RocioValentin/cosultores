import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, ChevronRight, Users, ClipboardCheck, Search as SearchIcon,
  FileText, Mail, Monitor, Award,
  Settings, FileCheck, Cog, CheckCircle2, Rocket,
  ClipboardList, FileSearch, AlertCircle, CheckSquare, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Servicios = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location.hash]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const servicioCards = [
    { id: "consultorias", icon: Users, title: "Consultorías", description: "Asesoría experta para laboratorios" },
    { id: "implementaciones", icon: ClipboardCheck, title: "Implementaciones", description: "Sistemas de gestión a medida" },
    { id: "auditoria", icon: SearchIcon, title: "Auditorías", description: "Evaluación objetiva de sistemas" },
  ];

  const etapasConsultorias = [
    { icon: SearchIcon, title: "Etapa I", description: "Diagnóstico y Planeación de la Implementación" },
    { icon: FileText, title: "Etapa II", description: "Elaboración de documentación del sistema de gestión y técnica específica" },
    { icon: Mail, title: "Etapa III", description: "Solicitud de acreditación" },
    { icon: Monitor, title: "Etapa IV", description: "Evaluación Inicial" },
    { icon: ClipboardList, title: "Etapa V", description: "Levantamiento de No Conformidades" },
    { icon: Award, title: "Etapa VI", description: "Obtención del Certificado de Acreditación" },
  ];

  const etapasImplementaciones = [
    { icon: ClipboardCheck, title: "Etapa I", description: "Diagnóstico inicial y evaluación del estado actual" },
    { icon: FileCheck, title: "Etapa II", description: "Diseño del sistema de gestión personalizado" },
    { icon: Settings, title: "Etapa III", description: "Desarrollo de documentación y procedimientos" },
    { icon: Cog, title: "Etapa IV", description: "Implementación y puesta en marcha" },
    { icon: CheckCircle2, title: "Etapa V", description: "Verificación y ajustes del sistema" },
    { icon: Rocket, title: "Etapa VI", description: "Preparación para certificación/acreditación" },
  ];

  const etapasAuditoria = [
    { icon: ClipboardList, title: "Etapa I", description: "Planificación y alcance de la auditoría" },
    { icon: FileSearch, title: "Etapa II", description: "Revisión documental del sistema de gestión" },
    { icon: AlertCircle, title: "Etapa III", description: "Ejecución de la auditoría in situ" },
    { icon: CheckSquare, title: "Etapa IV", description: "Identificación de hallazgos y evidencias" },
    { icon: FileText, title: "Etapa V", description: "Elaboración del informe de auditoría" },
    { icon: Shield, title: "Etapa VI", description: "Seguimiento de acciones correctivas" },
  ];

  const EtapasGrid = ({ etapas }: { etapas: typeof etapasConsultorias }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
      {etapas.map((etapa, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <etapa.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
          <h4 className="font-semibold text-foreground mb-2">{etapa.title}</h4>
          <p className="text-sm text-muted-foreground">{etapa.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="hero-gradient">
        <Header />
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
              Servicios
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Impulsamos la calidad de tu laboratorio a través de soluciones integrales.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link to="/" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Inicio</Link>
              <ChevronRight size={16} className="text-primary-foreground/60" />
              <ChevronRight size={16} className="text-primary-foreground/60 -ml-3" />
              <span className="text-primary-foreground font-medium">Servicios</span>
            </div>
          </div>
        </section>
      </div>

      <main>
        {/* Intro + Quick Nav Cards */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">Servicios que proveemos</span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Garantizamos la calidad<br />
              <span className="text-primary">y acreditación en tu laboratorio</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-12">
              En CORMA Consultores brindamos consultorías, implementaciones y auditorías especializadas
              para laboratorios que buscan alcanzar o mantener la acreditación bajo la norma ISO 17025.
            </p>

            {/* Clickable Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {servicioCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => scrollTo(card.id)}
                  className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl border border-border hover:border-primary/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <card.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                  <span className="text-accent font-semibold text-sm flex items-center justify-center gap-1">
                    Ver más <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ CONSULTORÍAS ═══════ */}
        <section id="consultorias" className="scroll-mt-24 py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12">
              <div>
                <span className="text-accent font-semibold uppercase tracking-widest text-sm">01</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 leading-tight">
                  Consultorías
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Brindamos asesoría experta para laboratorios, asegurando cumplimiento normativo y calidad operativa. Nuestro equipo de consultores altamente capacitados ofrece soluciones a medida que aseguran la eficiencia y mejora continua de sus procesos.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=500&fit=crop" alt="Laboratorio consultores" className="w-full h-[350px] md:h-[450px] object-cover" />
            </div>

            {/* Beneficios */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">¿Qué incluye?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Consultoría especializada en ISO/IEC 17025",
                  "Acompañamiento en proceso de acreditación",
                  "Certificación ISO 9001, ISO 14001, ISO 45001",
                  "Evaluación y diagnóstico inicial gratuito"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Etapas */}
            <h3 className="text-2xl font-bold text-foreground mb-2">Proceso de Acreditación</h3>
            <p className="text-muted-foreground mb-4">Te acompañamos desde el diagnóstico hasta la obtención de tu certificado.</p>
            <EtapasGrid etapas={etapasConsultorias} />

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link to="/contacto">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 h-auto font-medium text-lg">
                  Solicitar Consultoría
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════ IMPLEMENTACIONES ═══════ */}
        <section id="implementaciones" className="scroll-mt-24 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12">
              <div>
                <span className="text-accent font-semibold uppercase tracking-widest text-sm">02</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 leading-tight">
                  Implementaciones
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Implementamos sistemas de gestión adaptados a las necesidades de su organización. Trabajamos de la mano con su equipo para asegurar una transición fluida y efectiva hacia un sistema robusto y eficiente.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop" alt="Implementación de sistemas" className="w-full h-[350px] md:h-[450px] object-cover" />
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">¿Qué incluye?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "ISO/IEC 17025 – Laboratorios de Ensayo y Calibración",
                  "ISO 9001 – Sistemas de Gestión de la Calidad",
                  "ISO 14001 e ISO 45001 – Sistemas Integrados",
                  "Metodología probada con alto índice de éxito"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">Proceso de Implementación</h3>
            <p className="text-muted-foreground mb-4">Desde el diagnóstico hasta que su sistema esté completamente operativo.</p>
            <EtapasGrid etapas={etapasImplementaciones} />

            <div className="mt-12 text-center">
              <Link to="/contacto">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 h-auto font-medium text-lg">
                  Solicitar Implementación
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════ AUDITORÍAS ═══════ */}
        <section id="auditoria" className="scroll-mt-24 py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12">
              <div>
                <span className="text-accent font-semibold uppercase tracking-widest text-sm">03</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 leading-tight">
                  Auditorías
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Evaluamos objetivamente sus sistemas para asegurar el cumplimiento normativo. Nuestro equipo de auditores certificados garantiza evaluaciones rigurosas y orientadas a la mejora continua.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=500&fit=crop" alt="Auditoría profesional" className="w-full h-[350px] md:h-[450px] object-cover" />
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Tipos de Auditoría</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Auditoría Interna", desc: "Evaluación interna del cumplimiento del sistema de gestión." },
                  { title: "Auditoría de Diagnóstico", desc: "Determinar el estado actual del sistema como punto de partida." },
                  { title: "Auditoría de Pre-certificación", desc: "Simulación para identificar brechas antes del proceso oficial." },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">Proceso de Auditoría</h3>
            <p className="text-muted-foreground mb-4">Metodología sistemática para una evaluación efectiva.</p>
            <EtapasGrid etapas={etapasAuditoria} />

            <div className="mt-12 text-center">
              <Link to="/contacto">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 h-auto font-medium text-lg">
                  Solicitar Auditoría
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative bg-gradient-to-br from-[hsl(var(--primary-dark))] via-[hsl(var(--primary))] to-[hsl(var(--primary-dark))] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2">
                  ¿Listo para llevar tu
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                  laboratorio al <span className="border-b-4 border-white">siguiente nivel</span>?
                </h2>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contacto">
                    <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-3 h-auto font-medium">
                      Contáctanos
                      <div className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Button>
                  </Link>
                  <Link to="/nosotros">
                    <Button variant="outline" className="bg-white hover:bg-gray-100 text-foreground rounded-full px-6 py-3 h-auto font-medium border-0">
                      Nosotros
                      <div className="ml-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop" alt="Profesional de laboratorio" className="rounded-lg max-w-[300px] md:max-w-[350px]" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicios;
