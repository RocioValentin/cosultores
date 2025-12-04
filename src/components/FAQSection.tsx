import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo saber si mi laboratorio necesita acreditarse?",
    answer: "La acreditación ISO 17025 es recomendable cuando tu laboratorio necesita demostrar competencia técnica, cuando tus clientes lo exigen, o cuando deseas participar en licitaciones públicas o privadas que requieren resultados certificados.",
  },
  {
    question: "¿Cuánto dura la implementación de ISO 17025?",
    answer: "El tiempo de implementación varía según el tamaño del laboratorio y su estado actual. Generalmente, el proceso puede tomar entre 6 a 18 meses, incluyendo capacitación, documentación, implementación y auditorías internas.",
  },
  {
    question: "¿Ofrecen capacitaciones personalizadas?",
    answer: "Sí, diseñamos programas de capacitación adaptados a las necesidades específicas de cada laboratorio. Ofrecemos modalidades in-house, virtual y mixta, con contenido práctico orientado a la norma ISO 17025.",
  },
  {
    question: "¿Qué incluye una auditoría interna?",
    answer: "Nuestras auditorías internas incluyen revisión documental, inspección de instalaciones, entrevistas con el personal, verificación de procesos de ensayo, y un informe detallado con hallazgos, no conformidades y oportunidades de mejora.",
  },
  {
    question: "¿Brindan acompañamiento hasta la acreditación?",
    answer: "Absolutamente. Ofrecemos acompañamiento integral desde el diagnóstico inicial hasta la obtención de la acreditación, incluyendo preparación para la auditoría del organismo acreditador y soporte post-acreditación.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="faq-gradient py-20 lg:py-28">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - FAQ */}
          <div className="animate-fade-in">
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">
              Información
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mt-4 mb-10">
              Preguntas y<br />respuestas frecuentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-2xl border-none shadow-soft px-6 data-[state=open]:shadow-card"
                >
                  <AccordionTrigger className="text-foreground hover:no-underline font-medium text-left py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-slide-in-right lg:pl-8" style={{ animationDelay: "0.2s" }}>
            <div className="bg-background rounded-3xl p-8 lg:p-10 shadow-card relative overflow-hidden">
              {/* Decorative Element */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
              
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                Diagnóstico gratuito
              </h3>
              <p className="text-muted-foreground mb-8">
                Te ayudamos a determinar lo que tu empresa necesita para crecer.
              </p>

              <form className="space-y-5" id="contacto">
                <div>
                  <input
                    type="text"
                    placeholder="Tu Nombre:"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Tu Email:"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono:"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensaje:"
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-accent w-full justify-center">
                  Enviar
                  <span className="w-6 h-6 rounded-full bg-accent-dark/30 flex items-center justify-center">
                    ↗
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

export default FAQSection;
