import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import slideImage1 from "../assets/images/carrusel1.jpg";

const industries = [
  {
    title: "Industria Farmacéutica",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
  },
  {
    title: "Industria Alimentaria",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
  {
    title: "Industria Energética",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    title: "Industria Médica",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
  },
];

const missionValues = [
  "Compromiso: Estamos dedicados a satisfacer las necesidades de nuestros clientes y superar sus expectativas.",
  "Innovación: Incorporamos las últimas tecnologías y metodologías para ofrecer soluciones avanzadas.",
  "Calidad: Aseguramos un alto nivel de calidad en todos nuestros proyectos.",
];

const teamValues = [
  "Experiencia: Años de trayectoria especializada en laboratorios.",
  "Personalización: Soluciones adaptadas a cada cliente.",
  "Soporte Integral: Acompañamiento en todos los procesos.",
];

const faqs = [
  { question: "¿Qué servicios ofrece Corma Consultores?", answer: "Ofrecemos servicios de consultoría, auditoría, implementación y capacitación para laboratorios de ensayo, calibración y clínicos." },
  { question: "¿Cuánto tiempo toma una implementación?", answer: "El tiempo varía según la complejidad del proyecto, pero generalmente entre 3 a 12 meses dependiendo del alcance." },
  { question: "¿Trabajan con laboratorios de todos los tamaños?", answer: "Sí, trabajamos con laboratorios pequeños, medianos y grandes, adaptando nuestras soluciones a cada necesidad." },
  { question: "¿Ofrecen capacitaciones virtuales?", answer: "Sí, contamos con modalidad presencial y virtual para todas nuestras capacitaciones." },
  { question: "¿Cómo puedo solicitar una cotización?", answer: "Puede contactarnos a través del formulario, WhatsApp o llamando directamente a nuestro número." },
];

const testimonials = [
  {
    quote: "Mi experiencia con CORMA CONSULTORES fue satisfactoria, cumplió con mis expectativas, lo aprendido me permitió aplicarlo en mi centro laboral. Asimismo, agradezco al grupo humano de profesionales que tienen, por la asesoría brindada oportunamente a la empresa de CALITEST S.A.C",
    author: "Ing. Armando Pizango",
    role: "Jefe de Laboratorio – CALITEST S.A.C.",
  },
  {
    quote: "Excelente servicio profesional. El equipo de Corma nos ayudó a obtener nuestra acreditación en tiempo récord.",
    author: "Dra. María García",
    role: "Directora de Calidad – LabPeru S.A.",
  },
  {
    quote: "La capacitación recibida fue de primer nivel. Muy recomendados para cualquier laboratorio que busque la excelencia.",
    author: "Ing. Carlos Mendoza",
    role: "Gerente General – BioLab Solutions",
  },
];

const Nosotros = () => {
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handlePrevIndustry = () => {
    setCurrentIndustry((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
  };

  const handleNextIndustry = () => {
    setCurrentIndustry((prev) => (prev === industries.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud enviada",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="hero-gradient">
        <Header />

        {/* Hero Section */}
        <section className="py-20 lg:py-32">
        <div className="container-section text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Nosotros
          </h1>
          <div className="inline-flex items-center gap-2 bg-primary/80 px-6 py-3 rounded-full text-primary-foreground">
            <a href="/" className="hover:underline">Inicio</a>
            <span className="text-xl">»</span>
            <span>Nosotros</span>
          </div>
        </div>
        </section>
      </div>

      {/* Intro Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
                Ofrecemos servicios especializados asegurando la excelencia operativa y el cumplimiento normativo.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Corma Consultores brinda soluciones integrales y personalizadas para laboratorios de ensayo, calibración y clínico. Con un equipo de expertos altamente capacitados en diversas disciplinas y años de experiencia en el sector, que cumplen con los más altos estándares de calidad, asegurando la excelencia operativa y el cumplimiento normativo de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Carousel */}
      <section className="py-8 lg:py-16 bg-background">
        <div className="container-section">
          <div className="relative">
            <button
              onClick={handlePrevIndustry}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 rounded-full bg-background shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-foreground">{industry.title}</h3>
                </div>
              ))}
            </div>

            <button
              onClick={handleNextIndustry}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 rounded-full bg-background shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-accent/20 rounded-2xl p-4">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop"
                  alt="Profesional trabajando"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                NUESTRO TRABAJO
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Misión e identidad
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nuestra misión es asegurar resultados confiables y precisos en cada proyecto. De esta manera impulsar la excelencia operativa y el cumplimiento normativo de nuestros clientes.
              </p>
              <div className="space-y-4">
                {missionValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                NUESTRO EQUIPO
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Quienes somos y por qué elegirnos
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contamos con un equipo de expertos altamente capacitados y con amplia experiencia en diversas disciplinas, incluyendo ingenieros, químicos, físicos, biólogos, expertos técnicos del INACAL.
              </p>
              <div className="space-y-4">
                {teamValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={slideImage1}
                alt="Científico en laboratorio"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="navbar-gradient py-16 lg:py-24 relative overflow-hidden">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-heading text-primary-foreground leading-tight">
                ¿Empezamos a <span className="text-accent font-bold">certificar</span> tu laboratorio?
              </h2>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://wa.me/51906993769"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
                >
                  Contáctanos
                  <ArrowUpRight size={20} />
                </a>
                <a
                  href="/nosotros"
                  className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:bg-background/90 transition-colors"
                >
                  Nosotros
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
                alt="Profesional de laboratorio"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                TESTIMONIOS
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 mb-8">
                Opiniones de nuestros clientes
              </h2>
              <div className="bg-accent/20 w-24 h-24 rounded-2xl flex items-center justify-center">
                <span className="text-primary text-4xl font-bold">"</span>
              </div>
            </div>
            <div>
              <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="mb-8">
                <p className="font-bold text-primary text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
              </div>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-8 h-2 rounded-full transition-colors ${
                      currentTestimonial === index ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="navbar-gradient py-16 lg:py-24">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                INFORMACIÓN
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mt-2 mb-8">
                Preguntas y respuestas frecuentes
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background rounded-xl px-6 border-none"
                  >
                    <AccordionTrigger className="text-foreground font-medium hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-2">
                Diagnóstico gratuito
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                Te ayudamos a determinar lo que tu empresa necesita para crecer.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name:"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email:"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone:"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                />
                <textarea
                  placeholder="Message:"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground px-6 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                >
                  Submit Now
                  <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Nosotros;
