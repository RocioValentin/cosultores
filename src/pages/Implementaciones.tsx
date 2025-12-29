import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Settings, FileCheck, ClipboardCheck, Cog, CheckCircle2, Rocket } from "lucide-react";
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

const Implementaciones = () => {
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

  const etapas = [
    { icon: ClipboardCheck, title: "Etapa I", description: "Diagnóstico inicial y evaluación del estado actual" },
    { icon: FileCheck, title: "Etapa II", description: "Diseño del sistema de gestión personalizado" },
    { icon: Settings, title: "Etapa III", description: "Desarrollo de documentación y procedimientos" },
    { icon: Cog, title: "Etapa IV", description: "Implementación y puesta en marcha" },
    { icon: CheckCircle2, title: "Etapa V", description: "Verificación y ajustes del sistema" },
    { icon: Rocket, title: "Etapa VI", description: "Preparación para certificación/acreditación" },
  ];

  const faqs = [
    { question: "¿Cuánto tiempo toma implementar un sistema de gestión?", answer: "El tiempo varía según el alcance y complejidad, generalmente entre 6 y 12 meses para una implementación completa." },
    { question: "¿Qué recursos necesita mi organización?", answer: "Se requiere compromiso de la dirección, un equipo designado y disponibilidad para capacitaciones y reuniones." },
    { question: "¿Pueden implementar sistemas en organizaciones pequeñas?", answer: "Sí, adaptamos la implementación al tamaño y recursos de cada organización." },
    { question: "¿Qué normas pueden implementar?", answer: "ISO 9001, ISO/IEC 17025, ISO 14001, ISO 45001, entre otras normas de gestión." },
    { question: "¿Garantizan la certificación?", answer: "Preparamos completamente su organización para la auditoría de certificación con alta probabilidad de éxito." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628] py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic">
              Implementaciones
            </h1>
            <div className="inline-flex items-center gap-2 bg-[#0d2847]/50 border border-white/20 rounded-full px-6 py-3 text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <span>Implementaciones</span>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] leading-tight">
                  Implementamos sistemas de gestión adaptados a las necesidades de su organización.
                </h2>
              </div>
              <div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  En CORMA Consultores, nos especializamos en la implementación de sistemas de gestión de calidad que cumplen con los más altos estándares internacionales. Trabajamos de la mano con su equipo para asegurar una transición fluida y efectiva hacia un sistema robusto y eficiente.
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
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
                alt="Implementación de sistemas"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Implementación Especializada */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              IMPLEMENTACIÓN ESPECIALIZADA
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              Nuestro enfoque de implementación se basa en una metodología probada que garantiza resultados efectivos. Desde el diagnóstico inicial hasta la preparación para la auditoría de certificación, nuestro equipo le acompaña en cada paso del proceso, asegurando que su sistema de gestión sea funcional, eficiente y sostenible.
            </p>
          </div>
        </section>

        {/* Proceso de Implementación Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              PROCESO DE IMPLEMENTACIÓN
            </h2>
            <h3 className="text-xl font-semibold text-[#0a1628] mb-4">
              Metodología estructurada para el éxito de su sistema de gestión
            </h3>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-[#0a1628]">Objetivo:</span> Establecer un sistema de gestión funcional que cumpla con los requisitos normativos y se integre naturalmente en las operaciones diarias de su organización.
            </p>

            {/* Etapas */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
              {etapas.map((etapa, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <etapa.icon className="w-10 h-10 text-[#0a1628]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-[#0a1628] mb-2">{etapa.title}</h4>
                  <p className="text-sm text-gray-600">{etapa.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-8 italic">
              *CORMA CONSULTORES le acompaña durante todo el proceso de implementación hasta que su sistema esté completamente operativo.
            </p>
          </div>
        </section>

        {/* Normas que Implementamos Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-8">
              NORMAS QUE IMPLEMENTAMOS
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  ISO/IEC 17025 – Laboratorios de Ensayo y Calibración
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Alcance:</span> Implementación completa del sistema de gestión para laboratorios, incluyendo requisitos técnicos y de gestión para la acreditación.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  ISO 9001 – Sistemas de Gestión de la Calidad
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Alcance:</span> Diseño e implementación de sistemas que aseguran la satisfacción del cliente y la mejora continua de procesos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  ISO 14001 e ISO 45001 – Sistemas Integrados
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Alcance:</span> Implementación de sistemas de gestión ambiental y de seguridad y salud en el trabajo, de forma individual o integrada.
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
                  <span className="border-b-4 border-white">implementar</span> tu sistema?
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=500&fit=crop"
                  alt="Equipo de implementación"
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
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=400&fit=crop"
                  alt="Reunión de trabajo"
                  className="rounded-lg max-w-full"
                />
              </div>
              <div>
                <p className="text-[#7cb93e] font-medium mb-2 uppercase tracking-wider">Nuestra Experiencia</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] mb-6">
                  Más de 50 sistemas de gestión implementados exitosamente
                </h2>
                <p className="text-gray-600 mb-8">
                  Hemos acompañado a organizaciones de diversos sectores en la implementación de sus sistemas de gestión, logrando certificaciones y acreditaciones que respaldan la calidad de nuestro trabajo.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Metodología probada con alto índice de éxito</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Acompañamiento personalizado en cada etapa</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Sistemas diseñados para ser sostenibles</span>
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
                  Preguntas frecuentes sobre implementaciones
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
                    Diagnóstico gratuito
                  </h3>
                  <p className="text-gray-500 text-center mb-6">
                    Evaluamos el estado actual de su organización sin costo.
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

export default Implementaciones;
