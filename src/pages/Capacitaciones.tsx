import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, BookOpen, Users, Award, Target, Lightbulb, TrendingUp } from "lucide-react";
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

const Capacitaciones = () => {
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
    { icon: BookOpen, title: "Contenido Actualizado", description: "Material basado en las últimas normativas y mejores prácticas" },
    { icon: Users, title: "Instructores Expertos", description: "Profesionales con amplia experiencia en el sector" },
    { icon: Award, title: "Certificación", description: "Obtén certificados reconocidos en la industria" },
    { icon: Target, title: "Enfoque Práctico", description: "Casos reales y ejercicios aplicables" },
    { icon: Lightbulb, title: "Metodología Innovadora", description: "Técnicas de aprendizaje efectivas" },
    { icon: TrendingUp, title: "Mejora Continua", description: "Actualización constante de conocimientos" },
  ];

  const faqs = [
    { question: "¿Cuánto duran los cursos de capacitación?", answer: "La duración varía según el curso, desde talleres de 8 horas hasta programas completos de varias semanas." },
    { question: "¿Las capacitaciones son presenciales o virtuales?", answer: "Ofrecemos ambas modalidades, adaptándonos a las necesidades de cada organización." },
    { question: "¿Qué certificación se obtiene al finalizar?", answer: "Se entrega un certificado de participación avalado por CORMA Consultores con validez profesional." },
    { question: "¿Pueden hacer capacitaciones in-company?", answer: "Sí, diseñamos programas personalizados para empresas en sus instalaciones." },
    { question: "¿Cuáles son los requisitos previos?", answer: "Depende del nivel del curso. Los cursos básicos no requieren conocimientos previos." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="hero-gradient">
        <Header />
        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic">
              Capacitaciones
            </h1>
            <div className="inline-flex items-center gap-2 bg-[#0d2847]/50 border border-white/20 rounded-full px-6 py-3 text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <span>Capacitaciones</span>
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
                  Formamos profesionales competentes para la gestión de calidad en laboratorios.
                </h2>
              </div>
              <div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  En CORMA Consultores, ofrecemos programas de capacitación diseñados para fortalecer las competencias técnicas y de gestión de su equipo. Nuestros cursos están desarrollados por expertos en normativas internacionales y adaptados a las necesidades específicas de cada organización.
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
                alt="Capacitación profesional"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Capacitación Especializada */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              CAPACITACIÓN ESPECIALIZADA
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              Nuestros programas de formación abarcan desde conceptos fundamentales hasta técnicas avanzadas en sistemas de gestión de calidad, metrología, validación de métodos y auditorías internas. Cada curso está diseñado para proporcionar herramientas prácticas aplicables inmediatamente en su entorno laboral.
            </p>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              BENEFICIOS DE NUESTRAS CAPACITACIONES
            </h2>
            <p className="text-gray-600 mb-4">
              Invertir en la formación de su equipo es invertir en el éxito de su organización. Nuestras capacitaciones están diseñadas para generar impacto real en sus operaciones.
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
          </div>
        </section>

        {/* Áreas de Capacitación Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-8">
              ÁREAS DE CAPACITACIÓN
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Sistemas de Gestión de Calidad
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Incluye:</span> ISO 9001, ISO/IEC 17025, Buenas Prácticas de Laboratorio (BPL) y gestión documental.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Metrología y Calibración
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Incluye:</span> Fundamentos de metrología, incertidumbre de medición, calibración de equipos y trazabilidad metrológica.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Auditorías y Mejora Continua
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Incluye:</span> Formación de auditores internos, técnicas de auditoría, análisis de causa raíz y acciones correctivas.
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
                  <span className="border-b-4 border-white">capacitar</span> a tu equipo?
                </h2>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contacto">
                    <Button className="bg-[#7cb93e] hover:bg-[#6aa832] text-white rounded-full px-6 py-3 h-auto font-medium">
                      Contáctanos
                      <div className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Button>
                  </Link>
                  <Link to="/nosotros">
                    <Button variant="outline" className="bg-white hover:bg-gray-100 text-[#0a1628] rounded-full px-6 py-3 h-auto font-medium border-0">
                      Nosotros
                      <div className="ml-2 w-6 h-6 bg-[#7cb93e] rounded-full flex items-center justify-center">
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

        {/* Nuestra Experiencia Section */}
        <section className="py-16 md:py-24 bg-[#e8eef5]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=400&fit=crop"
                  alt="Sesión de capacitación"
                  className="rounded-lg max-w-full"
                />
              </div>
              <div>
                <p className="text-[#7cb93e] font-medium mb-2 uppercase tracking-wider">Nuestra Experiencia</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] mb-6">
                  Más de 500 profesionales capacitados en gestión de calidad
                </h2>
                <p className="text-gray-600 mb-8">
                  Nuestros programas de capacitación han formado a profesionales de diversas industrias, contribuyendo al fortalecimiento de sus sistemas de gestión y al desarrollo de competencias técnicas especializadas.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Instructores con certificaciones internacionales</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Metodología práctica y participativa</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Material didáctico actualizado y de calidad</span>
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
                  Preguntas frecuentes sobre capacitaciones
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
                    Te enviamos el catálogo completo de cursos disponibles.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Tu Nombre:"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-lg border-gray-200 py-3 px-4"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Tu Email:"
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
                      placeholder="Mensaje:"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-lg border-gray-200 py-3 px-4 min-h-[100px]"
                      rows={4}
                    />
                    <Button
                      type="submit"
                      className="w-auto bg-[#0a1628] hover:bg-[#0d2847] text-white rounded-full px-6 py-3 h-auto font-medium"
                    >
                      Enviar
                      <div className="ml-2 w-6 h-6 bg-[#7cb93e] rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
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

export default Capacitaciones;
