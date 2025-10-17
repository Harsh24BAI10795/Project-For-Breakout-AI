const Timeline = () => {
  return (
    <section className="py-20 bg-slate-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading text-primary">
              Centuries of Legend & Power
            </h2>
            <p className="text-foreground/80 text-lg">
              Perched high atop the misty cliffs of Raven's Hollow, Blackthorn Castle has stood as a guardian of the land for over 800 years. Built in 1247, this medieval stronghold has witnessed centuries of royal feuds, legendary battles, and whispered secrets that still linger within its stone walls.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h6 className="text-sm font-heading text-primary mb-2">1247 – The Castle is Born</h6>
                <p className="text-foreground/70">
                  Construction of Blackthorn Castle begins under the command of Lord Edric Blackthorn, establishing a stronghold that will shape the region's history for centuries.
                </p>
              </div>
              
              <div className="border-l-2 border-primary pl-6">
                <h6 className="text-sm font-heading text-primary mb-2">1892 – The Grand Restoration</h6>
                <p className="text-foreground/70">
                  After decades of abandonment, Blackthorn Castle is restored, reviving its former grandeur and opening its gates to the world once again.
                </p>
              </div>
            </div>

            <p className="text-foreground/80">
              Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
            </p>
          </div>

          <div>
            <img 
              src="https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67bf0d049a4b415fb012378e_birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg"
              alt="Historical artifacts"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
