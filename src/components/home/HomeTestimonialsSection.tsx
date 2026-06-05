import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Mi experiencia con CORMA CONSULTORES fue satisfactoria, cumplió con mis expectativas, lo aprendido me permitió aplicarlo en mi centro laboral. Asimismo, agradezco al grupo humano de profesionales que tienen, por la asesoría brindada oportunamente a la empresa de CALITEST S.A.C",
    name: "Ing. Armando Pizango",
    role: "Jefe de Laboratorio – CALITEST S.A.C.",
  },
  {
    id: 2,
    quote: "El Programa Especializado de Metrología me pareció genial, aprendí los detalles importantes sobre la metrología, considero que los docentes saben mucho sobre calibraciones en la-boratorios. En la actualidad estoy en la búsqueda de asesoría para acreditar nuestro laboratorio y profundizar más en cursos de Metrología. CORMA es una muy buena opción.",
    name: "Carlos Antonio Castro",
    role: "Técnico Metrólogo – CELDA E.I.R.L.",
  },
  {
    id: 3,
    quote: "Me inscribí en el curso de Calibración de Pesas y Equipos de Medición, organizado por CORMA CONSULTORES, y puedo decir que ha sido súper enriquecedor todo lo que he aprendido en el curso, tanto en la parte teórica como en la práctica que tan bien nos lo demostró el expositor. He quedado muy satisfecha con lo aprendido, lo cual podré aplicar en mi centro de labores.",
    name: "Luz Apoloni Díaz",
    role: "Jefe de Validaciones de Laboratorios - Lansier S.A.C.",
  },
  {
    id: 4,
    quote: "Las capacitaciones impartidas por CORMA fueron de alto nivel profesional. Nuestro equipo técnico ahora está mucho más preparado para enfrentar auditorías.",
    name: "Ing. Carlos Mendoza",
    role: "Gerente de Calidad – METROLOGÍA S.A.",
  },
];

const HomeTestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Header */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              TESTIMONIOS
            </span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-8">
              Opiniones de<br />nuestros clientes
            </h2>
            {/* Quote Icon */}
            <div className="relative w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <text x="0" y="60" className="text-7xl fill-accent/30 font-heading">"</text>
                <text x="30" y="85" className="text-5xl fill-primary font-heading">"</text>
              </svg>
              <div className="absolute bottom-0 left-8 w-16 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <div className="w-12 h-2 bg-primary/40 rounded-full" />
                <div className="w-8 h-1.5 bg-primary/40 rounded-full absolute bottom-3" />
              </div>
            </div>
          </div>

          {/* Right - Testimonial Content */}
          <div className="lg:pl-8">
            <blockquote className="text-foreground text-lg lg:text-xl leading-relaxed mb-8 min-h-[150px]">
              "{testimonial.quote}"
            </blockquote>
            <div className="mb-8">
              <p className="font-heading font-bold text-foreground text-lg">
                {testimonial.name}
              </p>
              <p className="text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-8 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary" : "bg-primary/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialsSection;
