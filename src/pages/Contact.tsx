import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SalesRepBubble from "@/components/SalesRepBubble";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", destination: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="min-h-screen pt-16">
      <section className="border-b border-border bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">Get In Touch</p>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up-delay-1">Plan Your Dream Trip</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in-up-delay-2">
            Ready to start your adventure? Fill out the form below and our travel specialists will craft the perfect itinerary for you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 md:flex-row">
            {/* Form */}
            <div className="flex-1">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input type="text" placeholder="Full Name" value={form.name} onChange={update("name")} required className="rounded-lg border border-input bg-background px-4 py-3 text-sm" />
                  <input type="email" placeholder="Email Address" value={form.email} onChange={update("email")} required className="rounded-lg border border-input bg-background px-4 py-3 text-sm" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={update("phone")} className="rounded-lg border border-input bg-background px-4 py-3 text-sm" />
                  <select value={form.destination} onChange={update("destination")} className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-muted-foreground">
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
                <textarea placeholder="Tell us about your dream trip..." value={form.message} onChange={update("message")} rows={5} required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm" />
                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <aside className="md:w-80 shrink-0 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Contact Info</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: "350 Fifth Avenue, Suite 4200\nNew York, NY 10118" },
                  { icon: Phone, label: "Phone", value: "+1 (212) 555-0147" },
                  { icon: Mail, label: "Email", value: "hello@horizontravels.com" },
                  { icon: Clock, label: "Hours", value: "Mon-Fri: 9am - 6pm EST\nSat: 10am - 4pm EST" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{c.label}</p>
                      <p className="whitespace-pre-line text-sm text-muted-foreground">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="overflow-hidden rounded-xl border border-border bg-secondary/50">
                <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-5 w-5 text-primary" /> Interactive Map
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <SalesRepBubble feature="Contact Form" tip="A well-structured contact form with specific fields (destination interest, phone) converts 25% better than a generic name+email form. Include business hours and multiple contact methods to build trust." />
    </div>
  );
};

export default Contact;
