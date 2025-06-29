
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-deep-black">
            TheJobFinder<span className="text-primary">AI</span>
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-deep-black hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-deep-black hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-deep-black hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Right side - Contact & Auth */}
        <div className="flex items-center space-x-4">
          {/* Contact Icons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a 
              href="mailto:support@jobfinderai.in" 
              className="text-muted-text hover:text-primary transition-colors"
              title="Email Support"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/company/jobfinderai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-text hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-deep-black hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
