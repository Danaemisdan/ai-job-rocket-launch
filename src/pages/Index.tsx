
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
    <div className="min-h-screen bg-background font-inter relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-card/30" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(76,141,246,0.1),transparent_50%)]" />
      
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
