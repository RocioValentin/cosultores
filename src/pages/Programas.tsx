import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Layers, Calendar, TrendingUp, Award, Users, BookOpen } from "lucide-react";
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

const Programas = () => {
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

  const caracteristicas = [
    { icon: Layers, title: "Módulos integrados", description: "Contenido estructurado en módulos progresivos" },
    { icon: Calendar, title: "Duración extendida", description: "Programas de 3 a 6 meses de formación" },
    { icon: TrendingUp, title: "Desarrollo continuo", description: "Seguimiento y evaluación constante" },
    { icon: Award, title: "Certificación integral", description: "Diploma de programa completo" },
    { icon: Users, title: "Comunidad", description: "Networking con profesionales del sector" },
    { icon: BookOpen, title: "Recursos exclusivos", description: "Acceso a biblioteca digital especializada" },
  ];

  const faqs = [
    { question: "¿Cuál es la diferencia entre un curso y un programa?", answer: "Un programa es una formación estructurada de mayor duración que integra varios módulos relacionados, mientras que un curso es una capacitación específica de menor duración." },
    { question: "¿Cuánto tiempo dura un programa completo?", answer: "Nuestros programas tienen una duración de 3 a 6 meses, dependiendo del área de especialización y la profundidad del contenido." },
    { question: "¿Puedo inscribirme en módulos individuales?", answer: "Algunos programas permiten inscripción modular. Consulta con nuestro equipo para conocer las opciones disponibles." },
    { question: "¿Los programas tienen requisitos de admisión?", answer: "Sí, algunos programas requieren experiencia previa o conocimientos básicos. Cada programa especifica sus requisitos en la descripción." },
    { question: "¿Hay opciones de financiamiento?", answer: "Ofrecemos facilidades de pago y descuentos para inscripciones anticipadas o grupales. Contáctanos para más información." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="hero-gradient">
        <Header />
        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic">
              Programas
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Formación estructurada para el desarrollo integral de competencias.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#0d2847]/50 border border-white/20 rounded-full px-6 py-3 text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <Link to="/aprendizaje" className="hover:text-white transition-colors">Aprendizaje</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <span>Programas</span>
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
                  Programas integrales que transforman profesionales en expertos.
                </h2>
              </div>
              <div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nuestros programas de formación están diseñados para proporcionar una experiencia de aprendizaje completa y estructurada. Cada programa combina teoría, práctica y aplicación real, permitiendo un desarrollo profesional profundo y sostenido en el tiempo.
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
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop"
                alt="Programa de formación"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Programas Disponibles */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              NUESTROS PROGRAMAS
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              Desarrollamos programas de formación continua que integran múltiples competencias relacionadas con la gestión de calidad y la acreditación de laboratorios. Cada programa está diseñado para proporcionar una visión integral y habilidades aplicables desde el primer día.
            </p>
          </div>
        </section>

        {/* Características Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              CARACTERÍSTICAS DE NUESTROS PROGRAMAS
            </h2>
            <h3 className="text-xl font-semibold text-[#0a1628] mb-4">
              Formación integral diseñada para el éxito profesional
            </h3>
            <p className="text-gray-600 mb-4">
              Cada programa está cuidadosamente estructurado para maximizar el aprendizaje y la aplicación práctica de los conocimientos adquiridos.
            </p>

            {/* Características Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
              {caracteristicas.map((caracteristica, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <caracteristica.icon className="w-10 h-10 text-[#0a1628]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-[#0a1628] mb-2">{caracteristica.title}</h4>
                  <p className="text-sm text-gray-600">{caracteristica.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-8 italic">
              *Todos nuestros programas incluyen tutoría personalizada y acceso a recursos exclusivos.
            </p>
          </div>
        </section>

        {/* Programas Disponibles */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-8">
              PROGRAMAS DISPONIBLES
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Programa de Formación en Gestión de Calidad de Laboratorios
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Duración:</span> 4 meses | <span className="font-semibold text-[#0a1628]">Modalidad:</span> Virtual sincrónico con sesiones prácticas presenciales.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Programa de Auditor Interno de Laboratorios
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Duración:</span> 3 meses | <span className="font-semibold text-[#0a1628]">Modalidad:</span> Híbrido con talleres prácticos de auditoría.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  Programa de Metrología Aplicada
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Duración:</span> 5 meses | <span className="font-semibold text-[#0a1628]">Modalidad:</span> Presencial con prácticas en laboratorio.
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
                  <span className="border-b-4 border-white">transformar</span> tu carrera?
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
                      Ver todos los programas
                      <div className="ml-2 w-6 h-6 bg-[#7cb93e] rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop"
                  alt="Equipo de profesionales"
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
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=400&fit=crop"
                  alt="Sesión de formación"
                  className="rounded-lg max-w-full"
                />
              </div>
              <div>
                <p className="text-[#7cb93e] font-medium mb-2 uppercase tracking-wider">Nuestra Experiencia</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] mb-6">
                  Programas diseñados por expertos de la industria
                </h2>
                <p className="text-gray-600 mb-8">
                  Cada programa es desarrollado en colaboración con profesionales activos en el sector, garantizando contenido relevante y actualizado según las demandas del mercado.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Contenido desarrollado por expertos del sector</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Proyectos aplicados a casos reales</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Red de egresados y oportunidades laborales</span>
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
                  Preguntas frecuentes sobre nuestros programas
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
                    Cuéntanos qué programa te interesa y te enviaremos toda la información.
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
                      placeholder="¿Qué programa te interesa?"
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

export default Programas;
