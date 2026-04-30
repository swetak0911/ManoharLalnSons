import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, User, Building, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const { toast } = useToast();

  const FORMSPREE_CONTACT_URL = import.meta.env.VITE_FORMSPREE_CONTACT_URL as string | undefined;
  const FORMSPREE_FEEDBACK_URL = import.meta.env.VITE_FORMSPREE_FEEDBACK_URL as string | undefined;

  const postJson = async (url: string, payload: Record<string, unknown>) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }
    return res;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORMSPREE_CONTACT_URL) {
      toast({
        title: "Configuration missing",
        description: "Contact form endpoint is not configured.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const payload = {
      formType: "contact",
      submittedAt: new Date().toISOString(),
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      product: String(formData.get("product") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      await postJson(FORMSPREE_CONTACT_URL, payload);

      toast({
        title: "Message Sent!",
        description: "Owner has received your message. We'll respond within 24 hours.",
      });
      formEl.reset();
    } catch (error) {
      toast({
        title: "Send failed",
        description: "Could not send your message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact submit failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedbackSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORMSPREE_FEEDBACK_URL) {
      toast({
        title: "Configuration missing",
        description: "Feedback form endpoint is not configured.",
        variant: "destructive",
      });
      return;
    }

    setFeedbackLoading(true);
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const payload = {
      formType: "feedback",
      submittedAt: new Date().toISOString(),
      name: String(formData.get("fb-name") || ""),
      rating,
      feedback: String(formData.get("fb-message") || ""),
    };

    try {
      await postJson(FORMSPREE_FEEDBACK_URL, payload);

      setRating(0);
      toast({
        title: "Feedback Submitted!",
        description: "Thank you. Owner has received your feedback.",
      });
      formEl.reset();
    } catch (error) {
      toast({
        title: "Submit failed",
        description: "Could not submit feedback. Please try again.",
        variant: "destructive",
      });
      console.error("Feedback submit failed:", error);
    } finally {
      setFeedbackLoading(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">Contact Us</h1>
          <p className="mt-2 text-primary-foreground/80 max-w-lg mx-auto">
            We'd love to hear from you. Fill out the form or reach us directly.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold text-foreground">Send us a Message</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="product">Product (optional)</Label>
                  <Input id="product" name="product" placeholder="e.g. HDPE Granules" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Tell us about your requirements..." />
              </div>
              <Button type="submit" size="lg" className="rounded-full px-8" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-8 space-y-6">
                <h3 className="text-xl font-bold text-foreground">Get in Touch</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <User size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Contact Person</p>
                      <p className="font-medium text-foreground">Mr. Satpal | Director</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Address</p>
                      <p className="font-medium text-foreground">Manohar Lal & Sons</p>
                      <p className="text-sm text-muted-foreground">174, Mandoli Village, New Delhi - 110093, Delhi, India</p>
                      <a
                        href="https://maps.app.goo.gl/W6ue44tevew62HPYA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-1 inline-block"
                      >
                        📍 Get Directions
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Contact Number</p>
                      <p className="font-medium text-foreground">08044947763</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">info@manoharlalandsonspolymer.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Building size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Corporate Office</p>
                      <p className="font-medium text-foreground">Dheeraj Gaur</p>
                      <p className="text-sm text-muted-foreground">Delhi, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Business Hours</p>
                      <p className="font-medium text-foreground">Mon - Sat: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback Section */}
              <div className="rounded-xl border border-border bg-card p-8 space-y-4 mt-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Star size={20} className="text-primary" /> Share Your Feedback
                </h3>
                <p className="text-sm text-muted-foreground">We value your opinion. Let us know how we can serve you better.</p>
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="fb-name">Your Name</Label>
                    <Input id="fb-name" name="fb-name" required placeholder="Your full name" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="fb-rating">Rating</Label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`p-1 transition-colors ${star <= rating ? "text-primary" : "text-muted-foreground/30"}`}
                        >
                          <Star size={24} fill={star <= rating ? "currentColor" : "none"} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="fb-message">Your Feedback</Label>
                    <Textarea id="fb-message" name="fb-message" rows={3} required placeholder="Tell us about your experience..." />
                  </div>
                  <Button type="submit" variant="outline" className="rounded-full px-8" disabled={feedbackLoading}>
                    {feedbackLoading ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
