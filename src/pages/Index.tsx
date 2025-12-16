import Header from "@/components/Header";
import HeroCarousel from "@/components/home/HeroCarousel";
import CoursesSection from "@/components/home/CoursesSection";
import HomeServicesSection from "@/components/home/HomeServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import OnlineCoursesCarousel from "@/components/home/OnlineCoursesCarousel";
import ExperienceSection from "@/components/home/ExperienceSection";
import HomeTestimonialsSection from "@/components/home/HomeTestimonialsSection";
import HomeFAQSection from "@/components/home/HomeFAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <CoursesSection />
        <HomeServicesSection />
        <ProductsSection />
        <OnlineCoursesCarousel />
        <ExperienceSection />
        <HomeTestimonialsSection />
        <HomeFAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
