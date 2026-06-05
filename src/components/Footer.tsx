import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin, ChevronRight, Music2, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoblanco.jpg";
import WhatsappIcon from "../assets/images/whatsapp.png";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container-section">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center justify-center">
              {/* <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shadow-soft">
                <span className="text-primary font-heading font-bold text-xl"></span>
              </div> */}
              <div className="w-50 h-50 rounded-xl bg-background flex items-center justify-center shadow-md overflow-hidden">
              <img src={logo} alt="CORMA Logo" className="w-full h-full object-contain" />
              {/* <span className="text-primary font-heading font-bold text-xl">C</span> */}
            </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Impulsando la competencia técnica de los laboratorios.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="http://bit.ly/3G6oBRQ" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://bit.ly/4l1TJRJ" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Camera size={18} />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter size={18} />
              </a> */}
              <a href="https://bit.ly/3ZHrv6g" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://bit.ly/4ne4tOu" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Music2 size={18} />
              </a>
            </div>
          </div>

          {/* Links principales */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-5">Links principales</h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "/servicios" },
                { label: "Capacitaciones", href: "/capacitaciones" },
                // { label: "Tienda", href: "/servicios" },
                { label: "Contacto", href: "/contacto" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-5">Servicios</h4>
            <ul className="space-y-3">
              {["Consultoría", "Auditoría", "Implementación", "Cursos Online"].map((link) => (
                <li key={link}>
                  <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-primary" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@cormaconsultores.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3">
                  <Mail size={18} className="text-accent" />
                  info@cormaconsultores.com
                </a>
              </li>
              <li className="text-muted-foreground flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                Av. Buenos Aires N° 115 – Puente Piedra. Lima, Perú.
              </li>
              <li>
                {/* <a href="tel:+51906993769" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3">
                  <Phone size={18} className="text-accent" />
                  +51 906 993 769
                </a>
                <a href="tel:+51919 715 800" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3">
                  <Phone size={18} className="text-accent" />
                  +51 919 715 800
                </a>
                <a href="tel:+51 972 103 384" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3">
                  <Phone size={18} className="text-accent" />
                  +51 972 103 384
                </a> */}
                <a
  href="https://wa.me/51906993769"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3"
>
  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
    <img
      src={WhatsappIcon}
      alt="WhatsApp Icon"
      className="w-6 h-6"
    />
  </div>

  <span className="font-medium">
    +51 906 993 769
  </span>
</a>
<a
  href="https://wa.me/51919715800"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3"
>
  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
    <img
      src={WhatsappIcon}
      alt="WhatsApp Icon"
      className="w-6 h-6"
    />
  </div>

  <span className="font-medium">
    +51 919 715 800
  </span>
</a>
<a
  href="https://wa.me/51972103384"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3"
>
  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
    <img
      src={WhatsappIcon}
      alt="WhatsApp Icon"
      className="w-6 h-6"
    />
  </div>

  <span className="font-medium">
    +51 972 103 384
  </span>
</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm italic">
            Copyright {new Date().getFullYear()}. Corma Consultores. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
