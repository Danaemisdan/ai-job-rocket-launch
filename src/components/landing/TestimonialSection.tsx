
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "JobFinderAI applied to 150+ jobs for me in just two days. Got 3 interviews in one week!",
    author: "Priya S., Mumbai"
  },
  {
    rating: 5,
    text: "Best tool for job hunting. Saved me hours of time.",
    author: "Rohan M., Bangalore"
  },
  {
    rating: 5,
    text: "I landed a job within 10 days, all automated. Highly recommended!",
    author: "Aisha K., Delhi"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-deep-black text-center mb-16">
          Loved by Thousands of <span className="text-primary">Job Seekers</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-muted-text mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <p className="text-deep-black font-semibold">
                  — {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
