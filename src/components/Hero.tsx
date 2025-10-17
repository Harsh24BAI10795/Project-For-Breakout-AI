import heroImage from "@/assets/hero-castle.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const images = [
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67bd81f86576d2ac55c1883e_pexels-osviel-rodriguez-valdes-716702230-30867434.jpg",
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67be27d9230ea40c60444e64_christian-von-koenig-uMlKWBC3G9I-unsplash.jpg",
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67bd827f46b4b45368c028fd_pexels-victor-lavaud-302543-2431436.jpg",
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67be27795b78e1de8d89af36_robby-mccullough-ZWGexQLecAI-unsplash.jpg",
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67be274a1c4b87b60987325a_sergio-locatelli-ZXH-dowxLV0-unsplash.jpg",
    "https://cdn.prod.website-files.com/67bafeaa5944e1c1e6decf3d/67bd827f1653b0b26690a8ac_pexels-gioele-fazzeri-2735282-7695127.jpg",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative corner flourishes */}
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

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-slate-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary mb-6 animate-fade-in tracking-wide">
          A FORTRESS OF LEGENDS,
          <br />
          HISTORY & MYSTERY
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto mb-12 animate-fade-in">
          Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
        </p>

        {/* Image Gallery Carousel */}
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
  );
};

export default Hero;
