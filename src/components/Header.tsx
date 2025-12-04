import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background-hero py-4 relative z-50">
      <div className="container-section">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shadow-soft">
              <span className="text-primary font-heading font-bold text-xl">C</span>
            </div>
            <div className="text-primary-foreground">
              <span className="font-heading font-bold text-xl tracking-wide">CORMA</span>
              <span className="block text-xs text-primary-foreground/70 tracking-widest uppercase">Consultores</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-accent font-medium flex items-center gap-1 border-b-2 border-accent pb-1">
              Servicios <ChevronDown size={16} />
            </a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors flex items-center gap-1">
              Cursos <ChevronDown size={16} />
            </a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
              Tienda
            </a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
              Contacto
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+51906993769" className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              <Phone size={18} />
              <span className="font-medium">(+51) 906 993 769</span>
            </a>
            <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent-dark transition-colors">
              <MessageCircle size={20} className="text-accent-foreground" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-primary-foreground/10 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground font-medium">Inicio</a>
              <a href="#servicios" className="text-accent font-medium">Servicios</a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground font-medium">Cursos</a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground font-medium">Tienda</a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground font-medium">Nosotros</a>
              <a href="#contacto" className="text-primary-foreground/90 hover:text-primary-foreground font-medium">Contacto</a>
              <a href="tel:+51906993769" className="flex items-center gap-2 text-primary-foreground/90 mt-2">
                <Phone size={18} />
                <span>(+51) 906 993 769</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
