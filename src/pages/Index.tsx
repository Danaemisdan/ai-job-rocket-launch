
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import FloatingBlobs from "@/components/landing/FloatingBlobs";
import MobileStickyCTA from "@/components/landing/MobileStickyCTA";
import SEOTextSection from "@/components/landing/SEOTextSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter relative overflow-hidden">
      <FloatingBlobs />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <FinalCTASection />
      <SEOTextSection />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
