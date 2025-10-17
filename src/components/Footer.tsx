const Footer = () => {
  return (
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
  );
};

export default Footer;
