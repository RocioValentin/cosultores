import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import WhatsappIcon from "../assets/images/whatsapp.png";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/servicios",
    dropdown: [
      { label: "Consultorías", href: "/servicios#consultorias" },
      { label: "Implementaciones", href: "/servicios#implementaciones" },
      { label: "Auditorías", href: "/servicios#auditoria" },
    ],
  },
  {
    label: "Capacitaciones",
    href: "/capacitaciones",
    dropdown: [
      { label: "Cursos", href: "/capacitaciones/cursos" },
      { label: "Programas", href: "/capacitaciones/programas" },
      { label: "Especializaciones", href: "/capacitaciones/especializaciones" },
    ],
  },
  // { label: "Tienda", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === label ? null : label);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-transparent py-4 relative z-50">
      <div className="container-section">
        <div className="flex items-center justify-between">
          {/* Logo - Supports image */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-20 h-20 rounded-xl bg-background flex items-center justify-center ml-5 shadow-md overflow-hidden">
              <img src={logo} alt="CORMA Logo" className="w-full h-full object-contain" />
              {/* <span className="text-primary font-heading font-bold text-xl">C</span> */}
            </div>
            {/* <div className="text-primary-foreground">
              <span className="font-heading font-bold text-xl tracking-wide">CORMA</span>
              <span className="block text-xs text-primary-foreground/70 tracking-widest uppercase">Consultores</span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <button
                    onClick={() => handleClick(item.label)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 font-medium transition-all duration-200 ${
                      openDropdown === item.label ? "bg-primary-foreground/10 text-primary-foreground" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 font-medium transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 min-w-[200px] bg-primary/95 backdrop-blur-sm rounded-xl shadow-lg border border-primary-foreground/10 py-2 z-50 transition-all duration-200 ${
                      openDropdown === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block px-4 py-3 text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+51906993769"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">(+51) 906 993 769</span>
            </a>
            <a
              href="https://wa.me/51906993769"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent-dark transition-all duration-200"
            >
              <img src={WhatsappIcon} alt="WhatsApp Icon" className="w-full h-full text-foreground" />
              {/* <MessageCircle size={20} className="text-accent-foreground" /> */}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-primary-foreground/10 pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => (item.dropdown ? toggleMobileDropdown(item.label) : null)}
                    className="w-full flex items-center justify-between px-4 py-3 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg font-medium transition-all duration-200"
                  >
                    {!item.dropdown ? (
                      <Link to={item.href} className="w-full text-left">
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileOpenDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </>
                    )}
                  </button>

                  {/* Mobile Accordion Dropdown */}
                  {item.dropdown && mobileOpenDropdown === item.label && (
                    <div className="ml-4 mt-1 mb-2 border-l-2 border-primary-foreground/20 pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className="block py-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <a
                href="tel:+51906993769"
                className="flex items-center gap-2 px-4 py-3 text-primary-foreground/90 mt-2"
              >
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
