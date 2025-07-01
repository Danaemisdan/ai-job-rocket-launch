import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        {/* Main Headline - SEO Optimized */}
        <h1 className="text-5xl md:text-7xl font-bold text-deep-black mb-6 leading-tight">
          Apply to <span className="text-primary">100s of Jobs</span> Instantly<br />
          <span className="text-3xl md:text-4xl text-muted-text"></span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-text mb-12 leading-relaxed">
          Automate your job search. Save time. Boost your chances of getting hired.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="bg-success hover:bg-success/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <MessageCircle className="mr-2 h-5 w-5" />
            Try Now on WhatsApp
          </Button>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Send className="mr-2 h-5 w-5" />
            Try Now on Telegram
          </Button>
        </div>

        {/* Small Text */}
        <p className="text-muted-text text-sm">
          No signup needed. Just chat to start applying instantly.
        </p>
      </div>
    </section>;
};
export default HeroSection;