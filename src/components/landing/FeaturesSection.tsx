
import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Auto Apply to Jobs",
    description: "Upload once. Apply everywhere, instantly."
  },
  {
    icon: TrendingUp,
    title: "Boost Your Conversion Rate",
    description: "Get seen by more employers. Increase callbacks."
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Your job applications keep running even while you sleep."
  },
  {
    icon: Shield,
    title: "Verified Listings Only",
    description: "We focus on authentic, scam-free job listings."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-shadow">
            Increase Your Chances of Getting Hired by <span className="gradient-text">10x</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered automation handles the tedious job application process, so you can focus on what matters most.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl backdrop-blur-sm group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
