import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight, ChevronRight, BookOpen, Video, Users, Clock, Target, CheckCircle,
  CheckCircle2, Layers, Calendar, TrendingUp, Award, GraduationCap,
  Star, Briefcase, Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Capacitaciones = () => {
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

  const capacitacionCards = [
    { id: "cursos", icon: BookOpen, title: "Cursos", description: "Capacitación técnica práctica" },
    { id: "programas", icon: Layers, title: "Programas", description: "Formación integral estructurada" },
    { id: "especializaciones", icon: Award, title: "Especializaciones", description: "Formación avanzada de élite" },
  ];

  const modalidadesCursos = [
    { icon: Video, title: "Virtual en vivo", description: "Clases sincrónicas con interacción directa" },
    { icon: BookOpen, title: "Virtual asincrónico", description: "Aprende a tu propio ritmo" },
    { icon: Users, title: "Presencial", description: "Formación práctica en aula" },
    { icon: Clock, title: "Híbrido", description: "Combina lo mejor de ambos mundos" },
    { icon: Target, title: "In-house", description: "Capacitación en tu empresa" },
    { icon: CheckCircle, title: "Certificado", description: "Obtén tu certificación al finalizar" },
  ];

  const caracteristicasProgramas = [
    { icon: Layers, title: "Módulos integrados", description: "Contenido estructurado en módulos progresivos" },
    { icon: Calendar, title: "Duración extendida", description: "Programas de 3 a 6 meses de formación" },
    { icon: TrendingUp, title: "Desarrollo continuo", description: "Seguimiento y evaluación constante" },
    { icon: Award, title: "Certificación integral", description: "Diploma de programa completo" },
    { icon: Users, title: "Comunidad", description: "Networking con profesionales del sector" },
    { icon: BookOpen, title: "Recursos exclusivos", description: "Acceso a biblioteca digital especializada" },
  ];

  const beneficiosEspecializaciones = [
    { icon: Award, title: "Certificación avanzada", description: "Diploma de especialista reconocido" },
    { icon: Target, title: "Enfoque profundo", description: "Dominio completo del área elegida" },
    { icon: Star, title: "Exclusividad", description: "Grupos reducidos de alto nivel" },
    { icon: Briefcase, title: "Aplicación directa", description: "Proyectos con empresas reales" },
    { icon: GraduationCap, title: "Mentoría experta", description: "Acompañamiento de líderes del sector" },
    { icon: Trophy, title: "Reconocimiento", description: "Posicionamiento como experto" },
  ];

  const CardsGrid = ({ items }: { items: { icon: React.ElementType; title: string; description: string }[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <item.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
          <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
          <p className="text-sm text-muted-foreground">{item.description}</p>
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
              Capacitaciones
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Formamos profesionales competentes para la gestión de calidad en laboratorios.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link to="/" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Inicio</Link>
              <ChevronRight size={16} className="text-primary-foreground/60" />
              <ChevronRight size={16} className="text-primary-foreground/60 -ml-3" />
              <span className="text-primary-foreground font-medium">Capacitaciones</span>
            </div>
          </div>
        </section>
      </div>

      <main>
        {/* Intro + Quick Nav Cards */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">Nuestra oferta formativa</span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Capacitación integral<br />
              <span className="text-primary">para tu desarrollo profesional</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-12">
              En CORMA Consultores ofrecemos cursos, programas y especializaciones diseñados para
              fortalecer las competencias técnicas y de gestión de tu equipo.
            </p>

            {/* Clickable Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {capacitacionCards.map((card) => (
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

        {/* ═══════ CURSOS ═══════ */}
        <section id="cursos" className="scroll-mt-24 py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12">
              <div>
                <span className="text-accent font-semibold uppercase tracking-widest text-sm">01</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 leading-tight">
                  Cursos
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Capacitación técnica práctica orientada a la mejora continua. Explora nuestro catálogo de cursos y filtra por estado, modalidad o categoría.
                </p>
              </div>
            </div>

            <CursosCatalogo />
          </div>
        </section>

        {/* ═══════ PROGRAMAS ═══════ */}
        <section id="programas" className="scroll-mt-24 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12">
              <div>
                <span className="text-accent font-semibold uppercase tracking-widest text-sm">02</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 leading-tight">
                  Programas
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Formación estructurada para el desarrollo integral de competencias. Cada programa combina teoría, práctica y aplicación real, permitiendo un desarrollo profesional profundo y sostenido en el tiempo.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=500&fit=crop" alt="Programa de formación" className="w-full h-[350px] md:h-[450px] object-cover" />
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Programas Disponibles</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Gestión de Calidad de Laboratorios", desc: "4 meses · Virtual sincrónico con sesiones prácticas presenciales." },
                  { title: "Auditor Interno de Laboratorios", desc: "3 meses · Híbrido con talleres prácticos de auditoría." },
                  { title: "Metrología Aplicada", desc: "5 meses · Presencial con prácticas en laboratorio." },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">Características</h3>
            <p className="text-muted-foreground mb-4">Formación integral diseñada para el éxito profesional.</p>
            <CardsGrid items={caracteristicasProgramas} />

            <div className="mt-12 text-center">
              <Link to="/contacto">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 h-auto font-medium text-lg">
                  Solicitar Información del Programa
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════ ESPECIALIZACIONES ═══════ */}
        <section id="especializaciones" className="scroll-mt-24 py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12">
              <div>
                <span className="text-accent font-semibold uppercase tracking-widest text-sm">03</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 leading-tight">
                  Especializaciones
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Formación avanzada para profesionales que buscan profundizar su expertise. Con un enfoque intensivo y práctico, te preparamos para liderar y transformar tu área de trabajo.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=500&fit=crop" alt="Especialización profesional" className="w-full h-[350px] md:h-[450px] object-cover" />
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Especializaciones Disponibles</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Auditoría ISO 17025", desc: "8 meses · Híbrido con auditorías supervisadas en laboratorios reales." },
                  { title: "Metrología Avanzada y Trazabilidad", desc: "10 meses · Presencial con prácticas en laboratorios acreditados." },
                  { title: "Gestión de Calidad para Laboratorios Clínicos", desc: "12 meses · Híbrido con rotaciones en laboratorios clínicos." },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">Beneficios</h3>
            <p className="text-muted-foreground mb-4">Formación de élite para profesionales excepcionales.</p>
            <CardsGrid items={beneficiosEspecializaciones} />

            <div className="mt-12 text-center">
              <Link to="/contacto">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 h-auto font-medium text-lg">
                  Solicitar Especialización
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
                  ¿Listo para
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                  <span className="border-b-4 border-white">capacitar</span> a tu equipo?
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
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
                  alt="Equipo de capacitación"
                  className="rounded-lg max-w-[300px] md:max-w-[350px]"
                />
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

export default Capacitaciones;
