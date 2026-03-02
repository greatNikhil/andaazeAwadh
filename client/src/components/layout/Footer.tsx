import { Facebook, Instagram, Twitter, MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-[8px] border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold text-accent tracking-wider">Andaaz E Awadh</h3>
            <p className="text-primary-foreground/80 leading-relaxed font-light">
              Experience the royal culinary heritage of Lucknow. Our master chefs bring you authentic Nawabi flavors, crafted with passion and generations-old recipes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-2xl font-semibold text-accent">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-primary-foreground/90">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <p className="font-light">123 Nawabi Road, Hazratganj<br/>Lucknow, Uttar Pradesh 226001</p>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/90">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <p className="font-light">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/90">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <p className="font-light">reservations@andaazeawadh.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-2xl font-semibold text-accent">Opening Hours</h4>
            <div className="space-y-4 font-light text-primary-foreground/90">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white mb-1">Lunch</p>
                  <p>Mon - Sun: 12:30 PM - 3:30 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pt-2">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5 opacity-0" />
                <div>
                  <p className="font-medium text-white mb-1">Dinner</p>
                  <p>Mon - Sun: 7:00 PM - 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-accent/20 text-center flex flex-col items-center">
          <div className="mb-4">
            <img src="/favicon.png" alt="Icon" className="w-8 h-8 opacity-50 sepia brightness-50 hue-rotate-50" />
          </div>
          <p className="text-primary-foreground/60 text-sm font-light">
            &copy; {new Date().getFullYear()} Andaaz E Awadh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}