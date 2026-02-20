import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesIntro from "@/components/ServicesIntro";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="hero-gradient">
        <Header />
        <HeroSection />
      </div>
      <main>
        <ServicesIntro />
        <ServicesGrid />
        <TestimonialSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
