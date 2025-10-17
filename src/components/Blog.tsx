import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
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

  return (
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
          {posts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 border-2 border-gold/20 group-hover:border-gold transition-all">
                {/* Corner decorations */}
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
  );
};

export default Blog;
