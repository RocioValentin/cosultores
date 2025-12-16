import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface Course {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  subtitle?: string;
  features: string[];
  instructor: string;
  instructorRole: string;
  startDate: string;
}

const courses: Course[] = [
  {
    id: 1,
    tag: "CURSO ONLINE",
    tagColor: "bg-primary",
    title: "INTRODUCCIÓN A LA METROLOGÍA Y SISTEMAS DE MEDICIÓN",
    features: ["Incluye certificado digital", "Materiales de clase", "Clases grabadas"],
    instructor: "Fís. José Sánchez",
    instructorRole: "Jefe de Laboratorio de Metrología",
    startDate: "Inicio 29 de junio",
  },
  {
    id: 2,
    tag: "WEBINAR GRATUITO",
    tagColor: "bg-accent",
    title: "ESTADÍSTICA APLICADA A LABORATORIOS DE CALIBRACIÓN",
    subtitle: "Bajo la ISO/IEC 17025",
    features: ["Viernes 21 de junio", "20:00 horas"],
    instructor: "José Sánchez",
    instructorRole: "Jefe de Laboratorio de Metrología",
    startDate: "SORTEO 25% de dsc. en el programa de Metrología",
  },
  {
    id: 3,
    tag: "CURSO ESPECIALIZADO",
    tagColor: "bg-accent",
    title: "INTERPRETACIÓN DE LA NORMA ISO/IEC 17025:2017",
    subtitle: "REQUISITOS GENERALES PARA LA COMPETENCIA DE LOS LABORATORIOS DE ENSAYO Y CALIBRACIÓN",
    features: ["Incluye certificado digital", "Materiales de clase", "Clases grabadas"],
    instructor: "Ing. Erika Bustamante",
    instructorRole: "EXPERTO TÉCNICO INACAL",
    startDate: "Inicio 23 de mayo",
  },
];

const OnlineCoursesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(courses.length - 2, 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(courses.length - 2, 1)) % Math.max(courses.length - 2, 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block italic">
            CURSOS ONLINE
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
            Cursos online disponibles
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-background border border-border rounded-2xl overflow-hidden shadow-soft"
                >
                  {/* Course Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative p-4">
                    <span className={`inline-block ${course.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {course.tag}
                    </span>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-background rounded-lg flex items-center justify-center shadow-soft">
                      <span className="text-primary font-bold text-sm">C</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-primary font-bold text-lg leading-tight">
                        {course.title}
                      </h3>
                      {course.subtitle && (
                        <p className="text-primary/70 text-sm mt-1">{course.subtitle}</p>
                      )}
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-primary text-xs font-bold">JS</span>
                      </div>
                      <div>
                        <span className="text-foreground font-semibold text-sm block">{course.instructor}</span>
                        <span className="text-muted-foreground text-xs">{course.instructorRole}</span>
                      </div>
                    </div>
                    <div className={`${course.tagColor} text-white text-center py-2 rounded-lg text-sm font-medium`}>
                      {course.startDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-border shadow-soft flex items-center justify-center text-foreground hover:bg-secondary transition-all z-10"
            aria-label="Previous course"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-border shadow-soft flex items-center justify-center text-foreground hover:bg-secondary transition-all z-10"
            aria-label="Next course"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all group"
          >
            Ver Todos
            <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-dark transition-colors">
              <ArrowUpRight size={16} className="text-foreground" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OnlineCoursesCarousel;
