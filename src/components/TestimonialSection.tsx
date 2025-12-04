import { Quote, MessageSquare } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Title */}
          <div className="animate-fade-in">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Testimonios
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-4 mb-8">
              Opiniones de<br />nuestros clientes
            </h2>
            
            {/* Decorative Icon */}
            <div className="relative">
              <div className="w-24 h-24 bg-primary-light/20 rounded-2xl flex items-center justify-center">
                <MessageSquare size={40} className="text-primary" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <Quote size={20} className="text-accent" />
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <Quote size={40} className="text-muted/50 absolute -top-4 -left-2" />
              <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed pl-8">
                Mi experiencia con CORMA CONSULTORES fue muy satisfactoria, cumplió con mis 
                expectativas, lo aprendido me permitió aplicarlo en mi centro laboral. 
                Asimismo, agradezco al grupo humano de profesionales que tienen, por la 
                asesoría brindada oportunamente a la empresa de CALITEST S.A.C.
              </blockquote>
            </div>
            
            <div className="mt-8 pl-8">
              <p className="font-heading font-bold text-primary text-lg">
                Ing. Armando Pizango
              </p>
              <p className="text-muted-foreground">
                Jefe de Laboratorio – CALITEST S.A.C.
              </p>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 mt-8 pl-8">
              <span className="w-8 h-1 rounded-full bg-primary"></span>
              <span className="w-2 h-1 rounded-full bg-muted"></span>
              <span className="w-2 h-1 rounded-full bg-muted"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
