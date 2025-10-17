import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Events from "@/components/Events";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Events />
      <Pricing />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
