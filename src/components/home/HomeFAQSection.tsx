import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "¿Qué servicios ofrece CORMA Consultores?",
    answer: "Ofrecemos consultorías, implementaciones, auditorías y capacitaciones especializadas para laboratorios que buscan alcanzar o mantener la acreditación bajo la norma ISO 17025.",
  },
  {
    question: "¿Cuánto tiempo toma el proceso de acreditación?",
    answer: "El tiempo varía según el estado actual del laboratorio y sus procesos. Generalmente, el proceso completo puede tomar entre 6 a 12 meses.",
  },
  {
    question: "¿Ofrecen capacitaciones virtuales?",
    answer: "Sí, ofrecemos capacitaciones tanto presenciales como virtuales, adaptándonos a las necesidades y disponibilidad de cada cliente.",
  },
  {
    question: "¿Qué tipos de laboratorios pueden beneficiarse?",
    answer: "Acompañamos a laboratorios de ensayo y calibración de los sectores farmacéutico, alimentario, ambiental, ocupacional, energético e industrial, ofreciendo equipos, reactivos y servicios especializados que garantizan precisión, confiabilidad y cumplimiento de los más altos estándares de calidad.",
  },
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer: "Puede contactarnos a través de nuestro formulario de contacto, WhatsApp o correo electrónico. Le responderemos en menos de 24 horas.",
  },
];

const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 400 400" className="absolute right-0 top-0 w-96 h-96">
          <path
            d="M50,200 Q150,50 250,200 T450,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent"
          />
          <path
            d="M50,250 Q150,100 250,250 T450,250"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent"
          />
        </svg>
      </div>

      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - FAQ */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block">
              INFORMACIÓN
            </span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-10">
              Preguntas y<br />respuestas frecuentes
            </h2>

            {/* Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <Minus size={20} className="text-primary flex-shrink-0" />
                    ) : (
                      <Plus size={20} className="text-primary flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="relative">
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-2">
                Asesoramiento gratuito
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                Te ayudamos a determinar lo que tu empresa necesita para crecer.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu Nombre:"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu Email:"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
                <input
                  type="tel"
                  placeholder="Tu Teléfono:"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <textarea
                  placeholder="Tu Mensaje:"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Enviar Ahora
                  <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
