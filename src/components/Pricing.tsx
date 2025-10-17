import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pricing = () => {
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

        {/* Opening Hours */}
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
  );
};

export default Pricing;
