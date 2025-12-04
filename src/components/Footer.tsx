import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background-soft pt-16 pb-8">
      <div className="container-section">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-heading font-bold text-xl">C</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-primary tracking-wide">CORMA</span>
                <span className="block text-xs text-muted-foreground tracking-widest uppercase">Consultores</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Expertos en asegurar la calidad en laboratorios.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links principales */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-5">Links principales</h4>
            <ul className="space-y-3">
              {["Inicio", "Servicios", "Cursos", "Tienda", "Contacto"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-primary" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-5">Servicios</h4>
            <ul className="space-y-3">
              {["Consultoría", "Auditoría", "Implementación", "Capacitación", "Cursos Online"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-primary" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+51906993769" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  +51 906993769
                </a>
              </li>
              <li>
                <a href="mailto:info@cormaconsultores.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  info@cormaconsultores.com
                </a>
              </li>
              <li className="text-muted-foreground flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                Lima, Perú
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} CORMA Consultores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
