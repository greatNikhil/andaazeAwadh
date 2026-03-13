import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Clock, Users, User, Phone } from "lucide-react";
import heroBg from "@/assets/images/2026-02-16.webp";

const bookingSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  date: z.string().min(1, { message: "Please select a date." }),
  time: z.string().min(1, { message: "Please select a time." }),
  guests: z.coerce.number().min(1).max(20),
  specialRequests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function Booking() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: 2,
      specialRequests: "",
    },
  });

  function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      console.log("Booking submitted:", data);
      
      // Store in local storage to simulate DB for the admin dashboard mockup
      const existingBookings = JSON.parse(localStorage.getItem("awadh_bookings") || "[]");
      const newBooking = {
        id: Math.random().toString(36).substring(7),
        ...data,
        status: "Confirmed",
        createdAt: new Date().toISOString()
      };
      localStorage.setItem("awadh_bookings", JSON.stringify([newBooking, ...existingBookings]));

      toast({
        title: "Table Reserved Successfully!",
        description: `We look forward to hosting you on ${data.date} at ${data.time}.`,
        className: "bg-primary text-white border-accent border-2",
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex bg-background">
      {/* Image Side - Hidden on mobile */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background z-20" />
        <img 
          src={heroBg} 
          alt="Restaurant Interior" 
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute bottom-16 left-16 z-30 max-w-md">
          <h2 className="font-serif text-5xl text-white font-bold mb-4 drop-shadow-md">
            Reserve Your Experience
          </h2>
          <p className="text-white/90 text-lg font-light drop-shadow-md">
            Step into an era of elegance. Join us for a royal dining experience that celebrates the true spirit of Awadh.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left mb-8">
            <h1 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">Book a Table</h1>
            <p className="text-muted-foreground font-light">
              Fill out the form below to secure your reservation. For parties larger than 20, please contact us directly.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold uppercase tracking-wider text-xs">Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Nawab Wajid Ali Shah" className="pl-10 h-12 bg-card border-border/50 focus-visible:ring-accent" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold uppercase tracking-wider text-xs">Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="+91 98765 43210" className="pl-10 h-12 bg-card border-border/50 focus-visible:ring-accent" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-semibold uppercase tracking-wider text-xs">Date</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input type="date" className="pl-10 h-12 bg-card border-border/50 focus-visible:ring-accent" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-semibold uppercase tracking-wider text-xs">Time</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input type="time" className="pl-10 h-12 bg-card border-border/50 focus-visible:ring-accent" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold uppercase tracking-wider text-xs">Number of Guests</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input type="number" min={1} max={20} className="pl-10 h-12 bg-card border-border/50 focus-visible:ring-accent" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold uppercase tracking-wider text-xs">Special Requests (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Anniversary, dietary restrictions, etc." 
                        className="resize-none bg-card border-border/50 focus-visible:ring-accent min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg uppercase tracking-widest rounded-none border border-primary mt-4"
              >
                {isSubmitting ? "Confirming..." : "Confirm Reservation"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}