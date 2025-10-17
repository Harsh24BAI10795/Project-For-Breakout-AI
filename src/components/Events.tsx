import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <section id="events" className="py-20 bg-slate-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            Your Journey Through Time Begins Here
          </h2>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Our Events
          </Button>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-heading text-primary mb-6">Plan Your Visit</h3>
          <p className="text-foreground/80 mb-8">
            Nestled in the heart of a forest, Fortress of Legends stands as a testament to centuries of history, legend, and architectural grandeur. Walk through its ancient halls, uncover its hidden passageways, and immerse yourself in the stories that have shaped this iconic landmark.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
