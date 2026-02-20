import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Award, Target, Star, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Especializaciones = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const beneficios = [
    { icon: Award, title: "Certificación avanzada", description: "Diploma de especialista reconocido" },
    { icon: Target, title: "Enfoque profundo", description: "Dominio completo del área elegida" },
    { icon: Star, title: "Exclusividad", description: "Grupos reducidos de alto nivel" },
    { icon: Briefcase, title: "Aplicación directa", description: "Proyectos con empresas reales" },
    { icon: GraduationCap, title: "Mentoría experta", description: "Acompañamiento de líderes del sector" },
    { icon: Trophy, title: "Reconocimiento", description: "Posicionamiento como experto" },
  ];

  const faqs = [
    { question: "¿Qué requisitos necesito para inscribirme en una especialización?", answer: "Las especializaciones requieren experiencia previa en el área o haber completado programas de formación relacionados. Se evalúa cada caso de forma individual." },
    { question: "¿Cuál es la duración de una especialización?", answer: "Las especializaciones tienen una duración de 6 a 12 meses, dependiendo del área de expertise y la profundidad del contenido." },
    { question: "¿Las especializaciones incluyen proyecto final?", answer: "Sí, todas las especializaciones culminan con un proyecto aplicado que se desarrolla en una organización real, bajo supervisión de tutores expertos." },
    { question: "¿Qué diferencia hay entre un programa y una especialización?", answer: "Las especializaciones son formaciones de mayor profundidad y duración, enfocadas en convertirte en un experto reconocido en un área muy específica." },
    { question: "¿Hay becas disponibles para especializaciones?", answer: "Ofrecemos un programa de becas parciales para profesionales destacados. Consulta los requisitos y disponibilidad con nuestro equipo." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="hero-gradient">
        <Header />
        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic">
              Especializaciones
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Formación avanzada para profesionales que buscan profundizar su expertise.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#0d2847]/50 border border-white/20 rounded-full px-6 py-3 text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <Link to="/aprendizaje" className="hover:text-white transition-colors">Aprendizaje</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <span>Especializaciones</span>
            </div>
          </div>
        </section>
      </div>
      <main>
        {/* Intro Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] leading-tight">
                  Conviértete en un referente de tu industria con formación de élite.
                </h2>
              </div>
              <div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nuestras especializaciones están diseñadas para profesionales que buscan alcanzar el más alto nivel de expertise en su campo. Con un enfoque intensivo y práctico, te preparamos para liderar y transformar tu área de trabajo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="px-4 md:px-8">
          <div className="container mx-auto">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop"
                alt="Especialización profesional"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Descripción */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              ESPECIALIZACIONES DE ALTO NIVEL
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              Las especializaciones de CORMA Consultores representan el nivel más avanzado de nuestra oferta formativa. Están diseñadas para profesionales con experiencia que buscan posicionarse como expertos en áreas específicas de la gestión de calidad, acreditación y normativas de laboratorio.
            </p>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              BENEFICIOS DE NUESTRAS ESPECIALIZACIONES
            </h2>
            <h3 className="text-xl font-semibold text-[#0a1628] mb-4">
              Formación de élite para profesionales excepcionales
            </h3>
            <p className="text-gray-600 mb-4">
              Cada especialización está diseñada para proporcionar una experiencia transformadora que te posicione como líder en tu área de expertise.
            </p>

            {/* Beneficios Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <beneficio.icon className="w-10 h-10 text-[#0a1628]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-[#0a1628] mb-2">{beneficio.title}</h4>
                  <p className="text-sm text-gray-600">{beneficio.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-8 italic">
              *Las especializaciones incluyen mentoría personalizada y acceso a nuestra red de expertos.
            </p>
          </div>
        </section>

        {/* Especializaciones Disponibles */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-8">
              ESPECIALIZACIONES DISPONIBLES
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Especialización en Auditoría de Sistemas de Gestión ISO 17025
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Duración:</span> 8 meses | <span className="font-semibold text-[#0a1628]">Modalidad:</span> Híbrido con auditorías supervisadas en laboratorios reales.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Especialización en Metrología Avanzada y Trazabilidad
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Duración:</span> 10 meses | <span className="font-semibold text-[#0a1628]">Modalidad:</span> Presencial con prácticas en laboratorios de calibración acreditados.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Especialización en Gestión de Calidad para Laboratorios Clínicos
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Duración:</span> 12 meses | <span className="font-semibold text-[#0a1628]">Modalidad:</span> Híbrido con rotaciones en laboratorios clínicos acreditados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2">
                  ¿Listo para
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                  <span className="border-b-4 border-white">especializarte</span> al máximo nivel?
                </h2>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contacto">
                    <Button className="bg-[#7cb93e] hover:bg-[#6aa832] text-white rounded-full px-6 py-3 h-auto font-medium">
                      Solicitar información
                      <div className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Button>
                  </Link>
                  <Link to="/aprendizaje">
                    <Button variant="outline" className="bg-white hover:bg-gray-100 text-[#0a1628] rounded-full px-6 py-3 h-auto font-medium border-0">
                      Ver todas las opciones
                      <div className="ml-2 w-6 h-6 bg-[#7cb93e] rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
                  alt="Profesional especializado"
                  className="rounded-lg max-w-[300px] md:max-w-[350px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Experiencia Section */}
        <section className="py-16 md:py-24 bg-[#e8eef5]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=400&fit=crop"
                  alt="Experto en laboratorio"
                  className="rounded-lg max-w-full"
                />
              </div>
              <div>
                <p className="text-[#7cb93e] font-medium mb-2 uppercase tracking-wider">Nuestra Experiencia</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] mb-6">
                  Formamos a los líderes del sector
                </h2>
                <p className="text-gray-600 mb-8">
                  Nuestras especializaciones han formado a profesionales que hoy lideran equipos de calidad, dirigen laboratorios acreditados y asesoran a organizaciones de primer nivel.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Egresados en posiciones de liderazgo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Proyectos implementados en empresas reales</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Red de alumni activa en Latinoamérica</span>
                  </li>
                </ul>
                <Link to="/nosotros">
                  <Button className="bg-[#0a1628] hover:bg-[#0d2847] text-white rounded-full px-6 py-3 h-auto font-medium">
                    Sobre Nosotros
                    <div className="ml-2 w-6 h-6 bg-[#7cb93e] rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628] py-16 md:py-24 overflow-hidden">
          {/* Decorative waves */}
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <path d="M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z" fill="url(#gradient1)" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7cb93e" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0d2847" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-[#7cb93e] font-medium mb-2 uppercase tracking-wider">Información</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
                  Preguntas frecuentes sobre especializaciones
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-white rounded-xl px-6 border-0"
                    >
                      <AccordionTrigger className="text-[#0a1628] hover:no-underline py-4 text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="flex items-start justify-center">
                <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
                  <h3 className="text-2xl font-bold text-[#0a1628] text-center mb-2">
                    Solicita información
                  </h3>
                  <p className="text-gray-500 text-center mb-6">
                    Cuéntanos qué especialización te interesa y te enviaremos toda la información.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Tu nombre:"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-lg border-gray-200 py-3 px-4"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Tu email:"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-lg border-gray-200 py-3 px-4"
                      required
                    />
                    <Input
                      placeholder="Teléfono:"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-lg border-gray-200 py-3 px-4"
                    />
                    <Textarea
                      placeholder="¿Qué especialización te interesa?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-lg border-gray-200 py-3 px-4 min-h-[100px]"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#7cb93e] hover:bg-[#6aa832] text-white rounded-full py-3 h-auto font-medium"
                    >
                      Enviar solicitud
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </div>
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

export default Especializaciones;
