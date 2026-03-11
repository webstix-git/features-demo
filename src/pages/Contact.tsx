import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "", message: "" });

  useEffect(() => {
    document.title = "Contact Us — Horizon Travels";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", destination: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="min-h-screen">
      {/* Hero with banner */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/contacthero/1920/800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">Get In Touch</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">Plan Your Dream Trip</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Ready to start your adventure? Fill out the form below and our travel specialists will craft the perfect itinerary for you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="flex-1">
              <h2 className="mb-6 text-3xl font-bold text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input type="text" placeholder="Full Name" value={form.name} onChange={update("name")} required className="rounded-xl border border-border bg-card px-4 py-3.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="email" placeholder="Email Address" value={form.email} onChange={update("email")} required className="rounded-xl border border-border bg-card px-4 py-3.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={update("phone")} className="rounded-xl border border-border bg-card px-4 py-3.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <select value={form.destination} onChange={update("destination")} className="rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option value="">Destination Interest</option>
                    <option>Bali, Indonesia</option>
                    <option>Santorini, Greece</option>
                    <option>Maldives</option>
                    <option>Swiss Alps</option>
                    <option>Tokyo, Japan</option>
                    <option>Amalfi Coast, Italy</option>
                    <option>Other</option>
                  </select>
                </div>
                <textarea placeholder="Tell us about your dream trip..." value={form.message} onChange={update("message")} rows={5} required className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:scale-105">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </div>

            <aside className="md:w-80 shrink-0 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Contact Info</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: "350 Fifth Avenue, Suite 4200\nNew York, NY 10118" },
                  { icon: Phone, label: "Phone", value: "+1 (212) 555-0147" },
                  { icon: Mail, label: "Email", value: "hello@horizontravels.com" },
                  { icon: Clock, label: "Hours", value: "Mon-Fri: 9am - 6pm EST\nSat: 10am - 4pm EST" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{c.label}</p>
                      <p className="whitespace-pre-line text-sm text-muted-foreground">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-2xl bg-card shadow-md border border-border">
                <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-5 w-5 text-primary" /> Interactive Map
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
