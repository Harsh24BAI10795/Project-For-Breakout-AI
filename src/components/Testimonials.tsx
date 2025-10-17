import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "A breathtaking experience! Walking through the ancient halls felt like stepping back in time. The stories surrounding the castle made the visit truly unforgettable.",
      name: "Emma R.",
      location: "Our visitor from UK",
    },
    {
      text: "The night tour was absolutely thrilling! The dimly lit corridors, the eerie atmosphere, and the rich history made it a one-of-a-kind adventure. Highly recommend!",
      name: "Olivia J.",
      location: "Our visitor from USA",
    },
    {
      text: "Stunning architecture, and fascinating history. Whether you're a history lover or just looking for a magical experience, this place is a must-visit!",
      name: "Harper A.",
      location: "Our visitor from France",
    },
  ];

  return (
    <section className="py-20 bg-slate-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-slate border-gold/20 hover:border-gold transition-all">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-heading text-primary">{testimonial.name}</p>
                  <p className="text-foreground/60 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
