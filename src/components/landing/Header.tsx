
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Menu, X, Mail, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card border-b border-border/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/74297065-04fa-42cd-b939-a8c62e422203.png" 
            alt="JobFinderAI" 
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold gradient-text">
            JobFinderAI
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300">Features</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors duration-300">Testimonials</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-300">How it Works</a>
        </nav>

        {/* Right side - CTA Buttons */}
        <div className="flex items-center space-x-4">
          {/* Contact Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="mailto:danny@thejobfinderai.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              title="Email Support"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/jobfinder-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="secondary" size="sm" className="glow-button hover:shadow-glow">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            <Button size="sm" className="glow-button bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
              <Send className="mr-2 h-4 w-4" />
              Telegram
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card border-t border-border/30 p-4 mx-4 mt-2 rounded-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
            </nav>
            <div className="flex flex-col space-y-3 mt-4">
              <Button variant="secondary" size="sm" className="glow-button">
                <MessageCircle className="mr-2 h-4 w-4" />
                Try on WhatsApp
              </Button>
              <Button size="sm" className="glow-button bg-gradient-to-r from-primary to-accent text-white">
                <Send className="mr-2 h-4 w-4" />
                Try on Telegram
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
