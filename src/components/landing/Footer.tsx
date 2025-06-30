import { Mail, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-footer-bg py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Left Side - Company Info */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-deep-black mb-2">
              JobFinder<span className="text-primary">AI</span>
            </div>
            <p className="text-muted-text">Apply to 1000s of Jobs in One Click</p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <a href="mailto:support@jobfinderai.in" className="flex items-center text-muted-text hover:text-primary transition-colors">
              <Mail className="mr-2 h-4 w-4" />
              support@jobfinderai.in
            </a>
            <a href="https://www.linkedin.com/company/jobfinder-ai" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-text hover:text-primary transition-colors">
              <Linkedin className="mr-2 h-4 w-4" />
              linkedin.com/company/jobfinder-ai
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8 text-sm">
          <a href="/privacypolicy" className="text-muted-text hover:text-primary transition-colors">Privacy Policy</a>
          <a href="/terms" className="text-muted-text hover:text-primary transition-colors">Terms of Service</a>
          <a href="#contact" className="text-muted-text hover:text-primary transition-colors">Contact</a>
          <a href="/signin" className="text-muted-text hover:text-primary transition-colors">Sign In</a>
          <a href="/signup" className="text-muted-text hover:text-primary transition-colors">Sign Up</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-text text-sm pt-8 border-t border-gray-200">
          © 2025 JobFinderAI. All Rights Reserved.
        </div>
      </div>
    </footer>;
};
export default Footer;