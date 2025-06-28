
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import { useState, useEffect } from "react";

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-lg md:hidden">
      <div className="flex gap-2">
        <Button 
          className="flex-1 bg-success hover:bg-success/90 text-white"
          size="lg"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </Button>
        <Button 
          className="flex-1 bg-primary hover:bg-primary/90 text-white"
          size="lg"
        >
          <Send className="mr-2 h-4 w-4" />
          Telegram
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
