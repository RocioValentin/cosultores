import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="hero-gradient">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
        <div className="container-section text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Contacto
          </h1>
          <div className="inline-flex items-center gap-2 bg-primary/80 px-6 py-3 rounded-full text-primary-foreground">
            <a href="/" className="hover:underline">Inicio</a>
            <span className="text-xl">»</span>
            <span>Contacto</span>
          </div>
        </div>
        </section>
      </div>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <p className="text-accent font-semibold tracking-wide uppercase mb-2">
                NUESTRA INFORMACIÓN
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                {/* Phone Card */}
                <div className="flex items-start gap-5 p-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone size={28} className="text-primary-foreground" />
                  </div>
                  <div className="border-l-2 border-accent pl-5">
                    <h3 className="font-bold text-foreground text-lg mb-2">Teléfono:</h3>
                    <p className="text-muted-foreground">(+51 972 103 384)</p>
                    <p className="text-muted-foreground">(+51 906 993 769)</p>
                    <p className="text-muted-foreground">(+51 956 341 568)</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-5 p-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={28} className="text-primary-foreground" />
                  </div>
                  <div className="border-l-2 border-accent pl-5">
                    <h3 className="font-bold text-foreground text-lg mb-2">Email:</h3>
                    <p className="text-muted-foreground">info@cormaconsultores.com</p>
                    {/* <p className="text-muted-foreground">cormaconsult@gmail.com</p> */}
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-start gap-5 p-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin size={28} className="text-primary-foreground" />
                  </div>
                  <div className="border-l-2 border-accent pl-5">
                    <h3 className="font-bold text-foreground text-lg mb-2">Ubicación:</h3>
                    <p className="text-muted-foreground">Presencial: Av. Buenos Aires N° 115 – Puente Piedra. Lima, Perú.</p>
                    <p className="text-muted-foreground">Virtual: Latinoamérica.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-tl-[60px] rounded-br-[60px] hidden lg:block" />
              
              <div className="bg-background rounded-2xl border border-border shadow-lg p-8 relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-muted-foreground mb-8">
                  Coméntanos sobre lo que tienes en mente para tu laboratorio.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Tu Nombre:"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Tu Email:"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Tu Teléfono:"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tu Mensaje:"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
                  >
                    Enviar Ahora
                    <span className="w-8 h-8 rounded-full bg-accent-dark/30 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <ArrowUpRight size={18} />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499477.80633083374!2d-77.30211573851!3d-12.02623099728969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452f4a!2sLima!5e0!3m2!1ses-419!2spe!4v1734355200000!5m2!1ses-419!2spe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de CORMA Consultores en Lima, Perú"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
