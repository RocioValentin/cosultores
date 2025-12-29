import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, BookOpen, Video, Users, Clock, Target, CheckCircle } from "lucide-react";
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

const Cursos = () => {
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

  const modalidades = [
    { icon: Video, title: "Virtual en vivo", description: "Clases sincrónicas con interacción directa" },
    { icon: BookOpen, title: "Virtual asincrónico", description: "Aprende a tu propio ritmo" },
    { icon: Users, title: "Presencial", description: "Formación práctica en aula" },
    { icon: Clock, title: "Híbrido", description: "Combina lo mejor de ambos mundos" },
    { icon: Target, title: "In-house", description: "Capacitación en tu empresa" },
    { icon: CheckCircle, title: "Certificado", description: "Obtén tu certificación al finalizar" },
  ];

  const faqs = [
    { question: "¿Cuál es la duración promedio de los cursos?", answer: "La duración varía según el curso, desde workshops de 4 horas hasta cursos completos de 40 horas distribuidas en varias semanas." },
    { question: "¿Los cursos incluyen material de estudio?", answer: "Sí, todos nuestros cursos incluyen material digital, guías prácticas y acceso a recursos complementarios." },
    { question: "¿Puedo solicitar un curso personalizado para mi empresa?", answer: "Absolutamente. Ofrecemos cursos in-house adaptados a las necesidades específicas de tu organización." },
    { question: "¿Qué certificación recibo al completar un curso?", answer: "Recibirás un certificado de CORMA Consultores que avala tu participación y aprobación del curso." },
    { question: "¿Hay requisitos previos para inscribirse?", answer: "Depende del curso. Algunos requieren conocimientos básicos mientras que otros son introductorios sin requisitos previos." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628] py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic">
              Cursos
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Capacitación técnica práctica orientada a la mejora continua.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#0d2847]/50 border border-white/20 rounded-full px-6 py-3 text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <Link to="/aprendizaje" className="hover:text-white transition-colors">Aprendizaje</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <span>Cursos</span>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] leading-tight">
                  Formación práctica y actualizada para profesionales que buscan la excelencia.
                </h2>
              </div>
              <div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nuestros cursos están diseñados para proporcionar conocimientos técnicos sólidos y habilidades prácticas que puedas aplicar inmediatamente en tu entorno laboral. Contamos con instructores expertos y metodologías probadas que garantizan un aprendizaje efectivo.
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
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop"
                alt="Curso en aula"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Cursos Disponibles */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              NUESTROS CURSOS
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              Ofrecemos una amplia variedad de cursos especializados en gestión de calidad, normativas ISO, metrología, aseguramiento de calidad y técnicas de laboratorio. Cada curso está diseñado para abordar necesidades específicas del sector y proporcionar herramientas prácticas para la mejora continua.
            </p>
          </div>
        </section>

        {/* Modalidades Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              MODALIDADES DE FORMACIÓN
            </h2>
            <h3 className="text-xl font-semibold text-[#0a1628] mb-4">
              Flexibilidad para adaptarnos a tus necesidades
            </h3>
            <p className="text-gray-600 mb-4">
              Entendemos que cada profesional tiene diferentes disponibilidades y estilos de aprendizaje. Por eso ofrecemos múltiples modalidades para que puedas capacitarte de la manera que mejor se adapte a ti.
            </p>

            {/* Modalidades Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
              {modalidades.map((modalidad, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <modalidad.icon className="w-10 h-10 text-[#0a1628]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-[#0a1628] mb-2">{modalidad.title}</h4>
                  <p className="text-sm text-gray-600">{modalidad.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-8 italic">
              *Todos nuestros cursos incluyen material de estudio y certificado de participación.
            </p>
          </div>
        </section>

        {/* Áreas de Formación */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-8">
              ÁREAS DE FORMACIÓN
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Gestión de Calidad en Laboratorios
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Contenido:</span> Fundamentos de ISO 17025, documentación del sistema de gestión, control de documentos, auditorías internas y gestión de no conformidades.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Metrología y Calibración
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Contenido:</span> Principios de metrología, trazabilidad, incertidumbre de medición, calibración de equipos y verificación de métodos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Aseguramiento de la Calidad
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Contenido:</span> Control de calidad analítico, validación de métodos, cartas de control, ensayos de aptitud y comparaciones interlaboratorio.
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
                  <span className="border-b-4 border-white">potenciar</span> tus conocimientos?
                </h2>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contacto">
                    <Button className="bg-[#7cb93e] hover:bg-[#6aa832] text-white rounded-full px-6 py-3 h-auto font-medium">
                      Inscríbete ahora
                      <div className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Button>
                  </Link>
                  <Link to="/aprendizaje">
                    <Button variant="outline" className="bg-white hover:bg-gray-100 text-[#0a1628] rounded-full px-6 py-3 h-auto font-medium border-0">
                      Ver más cursos
                      <div className="ml-2 w-6 h-6 bg-[#7cb93e] rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=500&fit=crop"
                  alt="Estudiantes en formación"
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                  alt="Equipo de formadores"
                  className="rounded-lg max-w-full"
                />
              </div>
              <div>
                <p className="text-[#7cb93e] font-medium mb-2 uppercase tracking-wider">Nuestra Experiencia</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] mb-6">
                  Formadores expertos con experiencia práctica en la industria
                </h2>
                <p className="text-gray-600 mb-8">
                  Nuestro equipo docente está conformado por profesionales con amplia experiencia en laboratorios, consultorías y organismos de acreditación, garantizando una formación de alto nivel.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Instructores certificados con experiencia práctica</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Metodologías activas y casos prácticos reales</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Contenido actualizado según normativas vigentes</span>
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
                  Preguntas frecuentes sobre nuestros cursos
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
                    Cuéntanos qué curso te interesa y te enviaremos toda la información.
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
                      placeholder="¿Qué curso te interesa?"
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

export default Cursos;
