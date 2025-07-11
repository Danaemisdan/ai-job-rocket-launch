
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
    <section className="py-20 bg-accent px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-deep-black text-center mb-16">
          Increase Your Chances of Getting Hired by <span className="text-primary">100%</span>
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-accent rounded-full">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-deep-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-text leading-relaxed">
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
