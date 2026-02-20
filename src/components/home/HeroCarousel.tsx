import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Facebook, Twitter, Youtube, Linkedin, Music2Icon} from "lucide-react";
import { Link } from "react-router-dom";
import slideImage1 from "../../assets/images/carrusel1.jpg";
import slideImage2 from "../../assets/images/carrusel2.png";
import slideImage3 from "../../assets/images/carrusel3.jpg";
import logo from "../../assets/images/logoblanco.jpg";

interface HeroSlide {
  id: number;
  subtitle: string;
  title: string;
  image: string;
  floatingImage: string;
  highlight: string;
  titleEnd: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    subtitle: "SERVICIOS ESPECIALIZADOS",
    title: "Consultoría y ",
    image: slideImage1,
    floatingImage:logo,
    highlight: "Auditoría",
    titleEnd: "especializada para laboratorios ISO/IEC 17025 y Sistemas integrados de gestión.",
    description: "Acompañamos a laboratorios de ensayo y calibración en su proceso de acreditación y mejora continua ante INACAL.",
    buttonText: "Ver Servicios",
    buttonLink: "/servicios",
  },
  {
    id: 2,
    subtitle: "CALIDAD GARANTIZADA",
    title: "Capacitaciones ",
    image: slideImage2,
    floatingImage:logo,
    highlight: "especializadas",
    titleEnd: "para la mejora continua de laboratorios ISO/IEC 17025 y Sistemas integrados de gestión.",
    description: "Acompañamos a laboratorios de ensayo y calibración en su proceso de acreditación y mejora continua ante INACAL.",
    buttonText: "Ver Servicios",
    buttonLink: "/servicios",
  },
  {
    id: 3,
    subtitle: "EXPERTOS EN CALIDAD",
    title: "Cursos en vivo,",
    image: slideImage3,
    floatingImage:logo,
    highlight: "presenciales",
    titleEnd: " y asíncronos alineados a la ISO/IEC 17025 y Sistemas integrados de gestión.",
    description: "Acompañamos a tu laboratorio de ensayo y calibración en su proceso de acreditación y mejora continua ante INACAL.",
    buttonText: "Ver Servicios",
    buttonLink: "/servicios",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="min-h-[600px] lg:min-h-[700px] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
        <div className="absolute right-20 top-20 w-64 h-64 rounded-full border border-primary-foreground/20" />
        <div className="absolute right-10 bottom-20 w-48 h-48 rounded-full border border-primary-foreground/20" />
      </div>

      <div className="container-section relative z-10 h-full py-2 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="text-left">
            <span className="inline-block border-l-2 border-primary-foreground/50 pl-4 text-primary-foreground/80 text-sm tracking-widest uppercase mb-6 animate-fade-in">
              {slide.subtitle}
            </span>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary-foreground mb-8 leading-tight animate-fade-in whitespace-pre-line">
              {slide.title}
              <span className="bg-accent text-foreground px-3 py-1 inline-block">{slide.highlight}</span>
            </h1>

            <span className="block text-4xl text-white mb-6 animate-fade-in whitespace-pre-line" style={{ animationDelay: "0.3s" }}>
              {slide.titleEnd}
            </span>

            <span className="block text-primary-foreground/80 mb-6 animate-fade-in whitespace-pre-line" style={{ animationDelay: "0.3s" }}>
              {slide.description}
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Music2Icon size={18} />
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to={slide.buttonLink}
              className="inline-flex items-center gap-3 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/20 transition-all group animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {slide.buttonText}
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-dark transition-colors">
                <ArrowUpRight size={16} className="text-foreground" />
              </span>
            </Link>
          </div>

          {/* Right side - Placeholder for image */}
          <div key={slide.id} className="hidden lg:flex items-center justify-center relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="
                w-[450px]
                rounded-2xl
                shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                animate-riseOnce
              "
            />
            {/* Imagen flotante en esquina */}
            <img
              src={slide.floatingImage}
              alt="Floating element"
              className="
                absolute
                -top-10
                -right-10
                w-32
                rounded-xl
                shadow-xl
                animate-float
              "
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default HeroCarousel;
