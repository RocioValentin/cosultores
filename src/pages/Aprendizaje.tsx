import Header from "@/components/Header";
import LearningHeroSection from "@/components/LearningHeroSection";
import LearningIntro from "@/components/LearningIntro";
import LearningGrid from "@/components/LearningGrid";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Aprendizaje = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="hero-gradient">
        <Header />
        <LearningHeroSection />
      </div>
      <main>
        <LearningIntro />
        <LearningGrid />
        <TestimonialSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Aprendizaje;
