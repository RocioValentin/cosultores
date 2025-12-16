import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Search, FileText, Mail, Monitor, ClipboardList, Award } from "lucide-react";
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

const Consultorias = () => {
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
    { icon: Search, title: "Etapa I", description: "Diagnóstico y Planeación de la Implementación" },
    { icon: FileText, title: "Etapa II", description: "Elaboración de documentación del sistema de gestión y técnica específica" },
    { icon: Mail, title: "Etapa III", description: "Solicitud de acreditación" },
    { icon: Monitor, title: "Etapa IV", description: "Evaluación Inicial" },
    { icon: ClipboardList, title: "Etapa V", description: "Levantamiento de No Conformidades" },
    { icon: Award, title: "Etapa VI", description: "Obtención del Certificado de Acreditación" },
  ];

  const faqs = [
    { question: "Antis unde omnis istye natus error?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Quasi sed architecto beatae vitae?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Totam rem aperiam earue iesa uate?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Duis lacinia pulvinar turpis lacinia?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Integer lobortis sem conseruat seua?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628] py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic">
              Consultorías
            </h1>
            <div className="inline-flex items-center gap-2 bg-[#0d2847]/50 border border-white/20 rounded-full px-6 py-3 text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-2" />
              <span>Consultorías</span>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] leading-tight">
                  Brindamos asesoría experta para laboratorios, asegurando cumplimiento normativo y calidad operativa.
                </h2>
              </div>
              <div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  En CORMA Consultores, entendemos que el éxito y la conformidad de su laboratorio dependen de una sólida base en normas y estándares internacionales. Nuestro equipo de consultores altamente capacitados está aquí para ofrecerle soluciones a medida que aseguren la eficiencia y la mejora continua de sus procesos.
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
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=600&fit=crop"
                alt="Laboratorio consultores"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Consultoría Especializada */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              CONSULTORÍA ESPECIALIZADA
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              Nuestro equipo de consultores trabajará en estrecha colaboración con usted para diseñar e implementar un sistema de gestión de calidad que cumpla con los rigurosos requisitos de la norma. Desde la evaluación inicial hasta la auditoría final, garantizamos que su laboratorio y/u organización esté preparado para ofrecer resultados confiables y precisos.
            </p>
          </div>
        </section>

        {/* Acreditación Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              ACREDITACIÓN
            </h2>
            <h3 className="text-xl font-semibold text-[#0a1628] mb-4">
              ISO/IEC 17025 "Requisitos generales para la competencia de los laboratorios de ensayo y calibración"
            </h3>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-[#0a1628]">Objetivo:</span> Establecer los requisitos para la competencia técnica y la gestión de calidad de los laboratorios de ensayo y calibración. La acreditación conforme a esta norma demuestra que un laboratorio es técnicamente competente y capaz de generar resultados válidos y fiables.
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
              *CORMA CONSULTORES te acompañará durante todo el proceso de acreditación hasta la obtención de su certificado de acreditación.
            </p>
          </div>
        </section>

        {/* Certificación Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-8">
              CERTIFICACIÓN
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  ISO 9001 – "Sistemas de gestión de la calidad"
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Objetivo:</span> Proporcionar un marco para garantizar que los productos y servicios cumplan consistentemente con los requisitos del cliente y mejoren la satisfacción del cliente.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  ISO 14001 –"Sistemas de gestión ambiental"
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Objetivo:</span> Ayudar a las organizaciones a mejorar su desempeño ambiental a través del uso eficiente de recursos y la reducción de residuos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  ISO 45001 – "Sistemas de gestión de seguridad y salud en el trabajo"
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1628]">Objetivo:</span> Ayudar a las organizaciones a reducir el riesgo de accidentes y enfermedades laborales, y a crear un entorno de trabajo seguro y saludable.
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
                  ¿Empezamos a
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                  <span className="border-b-4 border-white">acreditar</span> tu laboratorio?
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
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop"
                  alt="Profesional de laboratorio"
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
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&h=400&fit=crop"
                  alt="Profesional trabajando"
                  className="rounded-lg max-w-full"
                />
              </div>
              <div>
                <p className="text-[#7cb93e] font-medium mb-2 uppercase tracking-wider">Nuestra Experiencia</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] mb-6">
                  Brindamos servicios y productos a laboratorios de ensayo, calibración y clínico
                </h2>
                <p className="text-gray-600 mb-8">
                  Somos líderes en consultoría y equipamiento para laboratorios, con un equipo experto en áreas como ensayo, calibración y clínica, asegurando soluciones adaptadas a cada cliente en sectores diversos.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Experiencia especializada con años de trayectoria en la industria</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Soluciones integrales adaptadas a cada cliente.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0a1628] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Compromiso con la calidad y estándares internacionales.</span>
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
                  Preguntas y respuestas frecuentes
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
                    Te ayudamos a determinar lo que tu empresa necesita para crecer.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name:"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-lg border-gray-200 py-3 px-4"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email:"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-lg border-gray-200 py-3 px-4"
                      required
                    />
                    <Input
                      placeholder="Phone:"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-lg border-gray-200 py-3 px-4"
                    />
                    <Textarea
                      placeholder="Message:"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-lg border-gray-200 py-3 px-4 min-h-[100px]"
                      rows={4}
                    />
                    <Button
                      type="submit"
                      className="w-auto bg-[#0a1628] hover:bg-[#0d2847] text-white rounded-full px-6 py-3 h-auto font-medium"
                    >
                      Submit Now
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

export default Consultorias;
