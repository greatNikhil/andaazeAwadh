import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBg from "@/assets/images/2026-02-16.webp";
import kebabImg from "@/assets/images/kebab.png";
import biryaniImg from "@/assets/images/biryani.png";
import shahiTukdaImg from "@/assets/images/shahi-tukda.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background z-20" />
          <img
            src={heroBg}
            alt="Royal Awadhi Restaurant Interior"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        <div className="relative z-30 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-accent tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-6 animate-in slide-in-from-bottom-4 duration-700">
            Welcome to the Royal Cuisine
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-tight drop-shadow-lg animate-in slide-in-from-bottom-6 duration-1000">
            Andaaz <span className="text-accent italic">E</span> Awadh
          </h1>
          <p className="text-blue-200 text-lg md:text-xl font-light max-w-2xl mb-12 drop-shadow-md animate-in slide-in-from-bottom-8 duration-1000 delay-150">
            Experience the culinary heritage of the Nawabs. Authentic flavors, royal ambiance, and unmatched hospitality.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-bold px-10 py-7 text-lg uppercase tracking-widest rounded-none border-2 border-accent hover:border-white transition-all duration-300 animate-in slide-in-from-bottom-10 duration-1000 delay-300"
          >
            <Link href="/book" data-testid="hero-book-btn">Book a Table</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="w-full md:w-1/2">
            <img
              src={biryaniImg}
              alt="Authentic Awadhi Biryani"
              className="w-full h-[500px] object-cover rounded-t-full shadow-2xl border-4 border-border/50"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent uppercase tracking-widest text-sm font-semibold">Our Heritage</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold leading-tight">
              A Legacy of <br /><span className="text-accent">Nawabi</span> Flavors
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Originating from the city of Nawabs, Lucknow, Awadhi cuisine is a beautiful blend of complex spices, slow-cooking techniques (Dum Pukht), and rich ingredients like saffron, nuts, and cream.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              At Andaaz E Awadh, we preserve these centuries-old culinary traditions, bringing you dishes that once graced the royal dastarkhwans (dining spreads) of the Nawabs.
            </p>
            <div className="pt-4">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none uppercase tracking-widest px-8 py-6">
                <Link href="/menu">Explore Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground relative border-y-[8px] border-accent">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-accent uppercase tracking-widest text-sm font-semibold">Signature Delicacies</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Nawabi Specialties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Galouti Kebab",
                desc: "Finely minced lamb kebabs that melt in your mouth, infused with over 150 spices.",
                img: kebabImg
              },
              {
                title: "Awadhi Dum Biryani",
                desc: "Fragrant basmati rice cooked with succulent meat and spices in a sealed handi.",
                img: biryaniImg
              },
              {
                title: "Shahi Tukda",
                desc: "Rich bread pudding flavored with saffron, cardamom, and topped with dry fruits.",
                img: shahiTukdaImg
              }
            ].map((dish, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-80 overflow-hidden mb-6 border-2 border-accent/20">
                  <img
                    src={dish.img}
                    alt={dish.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="link" className="text-accent p-0 font-serif text-lg italic">View details &rarr;</Button>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-accent mb-3">{dish.title}</h3>
                <p className="text-primary-foreground/80 font-light leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-background">
        <div className="flex flex-col md:flex-row h-[600px]">
          <div className="w-full md:w-1/2 bg-card p-12 md:p-24 flex flex-col justify-center">
            <h2 className="font-serif text-4xl font-bold text-primary mb-8">Visit Us</h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light">
              <div>
                <strong className="text-primary font-semibold block mb-1 uppercase tracking-wider text-sm">Location</strong>
                123 Nawabi Road, Hazratganj<br />Lucknow, Uttar Pradesh 226001
              </div>
              <div>
                <strong className="text-primary font-semibold block mb-1 uppercase tracking-wider text-sm">Hours</strong>
                Lunch: 12:30 PM - 3:30 PM<br />
                Dinner: 7:00 PM - 11:30 PM
              </div>
              <div>
                <strong className="text-primary font-semibold block mb-1 uppercase tracking-wider text-sm">Contact</strong>
                +91 98765 43210<br />
                reservations@andaazeawadh.com
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full bg-muted grayscale contrast-125 sepia-[.3]">
            {/* Mock map embed since we can't use real Google Maps easily without an API key */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.23303649666!2d80.86551694242697!3d26.848694089906473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709420000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}