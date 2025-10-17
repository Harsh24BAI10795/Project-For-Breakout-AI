import { useState } from "react";
import { Menu, X, ShoppingCart, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-castle.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const images = [
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67bd81f86576d2ac55c1883e_pexels-osviel-rodriguez-valdes-716702230-30867434.jpg",
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67be27d9230ea40c60444e64_christian-von-koenig-uMlKWBC3G9I-unsplash.jpg",
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67bd827f46b4b45368c028fd_pexels-victor-lavaud-302543-2431436.jpg",
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67be27795b78e1de8d89af36_robby-mccullough-ZWGexQLecAI-unsplash.jpg",
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67be274a1c4b87b60987325a_sergio-locatelli-ZXH-dowxLV0-unsplash.jpg",
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67bd827f1653b0b26690a8ac_pexels-gioele-fazzeri-2735282-7695127.jpg",
  ];

  const blogPosts = [
    {
      image: "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf63/67be93d49625c783da4178de_rahul-chowdhury-6e3UfxOSw08-unsplash.jpg",
      date: "March 5, 2025",
      title: "Medieval Life at Blackthorn Castle",
      excerpt: "In 1745, Prince Alistair vanished without a trace. Murder, escape, or something more? The truth awaits within the castle walls.",
    },
    {
      image: "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf63/67be93e214b3d0450e9e0495_jared-subia-Qxxwd3jYv0M-unsplash.jpg",
      date: "March 5, 2025",
      title: "The Lost Heir: A Royal Mystery",
      excerpt: "In 1745, Prince Alistair vanished without a trace. Murder, escape, or something more? The truth awaits within the castle walls.",
    },
    {
      image: "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf63/67be93f185168bcaf5153d96_matthias-koch-q3mmiEXrDuo-unsplash.jpg",
      date: "March 5, 2025",
      title: "Secrets of the Castle's Hidden Passages",
      excerpt: "In 1745, Prince Alistair vanished without a trace. Murder, escape, or something more? The truth awaits within the castle walls.",
    },
  ];

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

  const prices = [
    {
      title: "Adults",
      daily: "$9",
      yearly: "$90",
    },
    {
      title: "Seniors (65+)",
      daily: "$59",
      yearly: "$590",
    },
    {
      title: "Students",
      daily: "$19",
      yearly: "$190",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-dark/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <div className="w-4 h-6 border-2 border-slate-dark"></div>
              </div>
              <span className="text-xl font-heading text-primary tracking-wider">HISTORY</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About Us</a>
              <a href="#events" className="text-foreground/80 hover:text-primary transition-colors">Events</a>
              <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
              <a href="#blog" className="text-foreground/80 hover:text-primary transition-colors">Blog</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" className="text-foreground hover:text-primary">Contact Us</Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">0</span>
              </Button>
            </div>

            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gold/20">
              <div className="flex flex-col gap-4">
                <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About Us</a>
                <a href="#events" className="text-foreground/80 hover:text-primary transition-colors">Events</a>
                <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
                <a href="#blog" className="text-foreground/80 hover:text-primary transition-colors">Blog</a>
                <Button variant="ghost" className="text-foreground hover:text-primary justify-start">Contact Us</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path d="M0,0 Q50,50 0,100" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <path d="M0,0 Q50,50 100,0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-30 rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path d="M0,0 Q50,50 0,100" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <path d="M0,0 Q50,50 100,0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-30 -rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path d="M0,0 Q50,50 0,100" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <path d="M0,0 Q50,50 100,0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30 rotate-180">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path d="M0,0 Q50,50 0,100" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <path d="M0,0 Q50,50 100,0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>

        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-slate-dark/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary mb-6 animate-fade-in tracking-wide">
            A FORTRESS OF LEGENDS,
            <br />
            HISTORY & MYSTERY
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto mb-12 animate-fade-in">
            Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
          </p>

          <div className="relative max-w-5xl mx-auto mb-8">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {images.map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden border-2 border-gold/30 hover:border-gold transition-all">
                  <img src={img} alt={`Castle view ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate/80 hover:bg-slate text-primary"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate/80 hover:bg-slate text-primary"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
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

      {/* Timeline */}
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

      {/* Events */}
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

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
              Ticket Prices & Admissions
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              From immersive night tours to seasonal festivals, We offer unforgettable events throughout the year. Step into history and discover something extraordinary. Book a private tour & explore the castle like never before.
            </p>
          </div>

          <Tabs defaultValue="ticket" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-slate">
              <TabsTrigger value="ticket" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Ticket
              </TabsTrigger>
              <TabsTrigger value="membership" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Membership
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ticket">
              <div className="grid md:grid-cols-3 gap-6">
                {prices.map((price, idx) => (
                  <Card key={idx} className="bg-slate border-gold/20 hover:border-gold transition-all">
                    <CardHeader>
                      <CardTitle className="text-primary text-sm font-heading">{price.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-3xl font-heading text-primary">{price.daily}/Day</div>
                      <p className="text-foreground/60 text-sm">
                        We accept cash, credit/debit cards, and online payments.
                      </p>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Explore More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="membership">
              <div className="grid md:grid-cols-3 gap-6">
                {prices.map((price, idx) => (
                  <Card key={idx} className="bg-slate border-gold/20 hover:border-gold transition-all">
                    <CardHeader>
                      <CardTitle className="text-primary text-sm font-heading">{price.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-3xl font-heading text-primary">{price.yearly}/Year</div>
                      <p className="text-foreground/60 text-sm">
                        We accept cash, credit/debit cards, and online payments.
                      </p>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Explore More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-slate border border-gold/20 rounded-lg p-8">
              <p className="text-center text-foreground/80 mb-8">
                Experience the magic of Fortress of Legends at your own pace
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-foreground/60 mb-2">Jan - Feb - Mar - Oct - Nov - Dec</p>
                  <h4 className="text-2xl font-heading text-primary">9:00 – 20:00</h4>
                </div>
                <div className="text-center">
                  <p className="text-foreground/60 mb-2">April - May - June - July - Aug - Sept</p>
                  <h4 className="text-2xl font-heading text-primary">8:00 – 22:00</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-slate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
              Discover the Stories Etched in Stone
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              From immersive night tours to seasonal festivals, We offer unforgettable events throughout the year. Step into history and discover something extraordinary. Book a private tour and explore the castle like never before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post, idx) => (
              <article key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 border-2 border-gold/20 group-hover:border-gold transition-all">
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gold/40 z-10"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-gold/40 z-10"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-gold/40 z-10"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gold/40 z-10"></div>
                  
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-foreground/60 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-heading text-primary mb-3 group-hover:text-gold-light transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                <Button variant="link" className="text-primary hover:text-gold-light p-0">
                  Read full post →
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Footer */}
      <footer className="bg-slate-dark border-t border-gold/20 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <div className="w-4 h-6 border-2 border-slate-dark"></div>
                </div>
                <span className="text-xl font-heading text-primary tracking-wider">HISTORY</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Perched high atop the misty cliffs of Raven's Hollow, Blackthorn Castle has stood as a guardian of the land for over 800 years.
              </p>
            </div>

            <div>
              <h4 className="font-heading text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#events" className="hover:text-primary transition-colors">Events</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-primary mb-4">Visit Us</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li>Raven's Hollow</li>
                <li>Castle District</li>
                <li>Medieval Quarter</li>
                <li>contact@fortress.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-primary mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li>Winter: 9:00 – 20:00</li>
                <li>Summer: 8:00 – 22:00</li>
                <li>Closed: Dec 24-25</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gold/20 pt-8 text-center text-foreground/60 text-sm">
            <p>© 2025 Fortress of Legends. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
