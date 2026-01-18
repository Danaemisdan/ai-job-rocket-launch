
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-accent px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-deep-black mb-6">
          Ready to Land Your <span className="text-primary">Next Job?</span>
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-text mb-12">
          Join 5000+ job seekers already using JobFinderAI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-success hover:bg-success/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Try Now on WhatsApp
          </Button>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Send className="mr-2 h-5 w-5" />
            Try Now on Telegram
          </Button>
        </div>

        {/* Small Text */}
        <p className="text-muted-text">
          Instant, effortless job applications — powered by AI.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
