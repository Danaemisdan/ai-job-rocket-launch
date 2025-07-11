import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Sparkles, Chrome, Bot } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl floating-animation" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-secondary/20 rounded-full blur-lg floating-animation" style={{ animationDelay: '4s' }} />
      
      <div className="text-center max-w-6xl mx-auto animate-fade-in relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-primary/20 mb-8">
          <Sparkles className="h-4 w-4 text-primary mr-2" />
          <span className="text-sm font-medium gradient-text">AI-Powered Job Application</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-shadow">
          Apply to <span className="gradient-text">1000s of Jobs</span><br />
          <span className="text-foreground">Instantly with AI</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          Automate your entire job search. Let AI apply to jobs, write cover letters, and 
          <span className="text-primary font-semibold"> boost your chances of getting hired</span> while you sleep.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="glow-button bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Start Applying on WhatsApp
          </Button>
          <Button 
            size="lg" 
            className="glow-button bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Send className="mr-3 h-6 w-6" />
            Try on Telegram
          </Button>
        </div>

        {/* Secondary CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Button 
            variant="secondary" 
            size="sm" 
            className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300"
          >
            <Chrome className="mr-2 h-4 w-4" />
            Chrome Extension
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            className="glass-card border-border/50 hover:border-accent/50 transition-all duration-300"
          >
            <Bot className="mr-2 h-4 w-4" />
            AI Assistant
          </Button>
        </div>

        {/* Features list */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
            No signup needed
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-accent rounded-full mr-2" />
            Start in 30 seconds
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            100% automated
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;