import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67bd0bc48c6b1235e305d19c_pexels-felixmittermeier-2832061%20(1)%20copy%20(1).jpg"
              alt="Castle interior"
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading text-primary">
              Uncover hidden passageways, immerse yourself in the stories.
            </h2>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              About Us
            </Button>

            <div className="space-y-6 mt-8">
              <div>
                <h5 className="text-xl font-heading text-primary mb-2">Events & Experiences</h5>
                <p className="text-foreground/80">
                  Whether you're drawn by history, mystery, or breathtaking views, we welcome you to step back in time.
                </p>
              </div>
              
              <div>
                <h5 className="text-xl font-heading text-primary mb-2">Private Tours & Exclusive Access</h5>
                <p className="text-foreground/80">
                  Whether you're drawn by history, mystery, or breathtaking views, we welcome you to step back in time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
