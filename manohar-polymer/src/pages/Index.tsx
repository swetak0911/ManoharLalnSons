import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Shield, Truck, Recycle, Award, Users } from "lucide-react";
import heroImg from "@/assets/hero-factory.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
const features = [{
  icon: Factory,
  title: "Modern Manufacturing",
  desc: "State-of-the-art production facilities ensuring consistent quality at every scale."
}, {
  icon: Shield,
  title: "Quality Assured",
  desc: "ISO-compliant processes with rigorous testing at every stage of production."
}, {
  icon: Truck,
  title: "Reliable Supply Chain",
  desc: "Timely deliveries with pan-India logistics and export-ready capabilities."
}];
const stats = [{
  value: "40+",
  label: "Years Experience",
  icon: Award
}, {
  value: "500+",
  label: "Clients Served",
  icon: Users
}, {
  value: "4",
  label: "Product Lines",
  icon: Recycle
}, {
  value: "Pan-India",
  label: "Delivery Network",
  icon: Truck
}];
const Index = () => <div>
    {/* Hero */}
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Polymer manufacturing facility" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="container relative mx-auto px-4 py-24 md:py-36">
        <div className="max-w-2xl fade-in-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Trusted Since 1985
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Premium Polymer
            <br />
            <span className="gradient-text">Solutions</span>
          </h1>
          <p className="mt-5 text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
            Manohar Lal & Sons — a trusted name in polymer manufacturing, delivering
            high-grade granules and compounds to industries across India and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/products">
                Explore Products <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="relative -mt-16 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => <ScrollReveal key={s.label} delay={i * 80}>
              <div className="stat-card bg-background shadow-lg">
                <s.icon size={24} className="mx-auto text-primary" />
                <p className="mt-3 text-2xl font-bold text-foreground md:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            </ScrollReveal>)}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="bg-background">
      <div className="container mx-auto grid gap-8 px-4 py-20 md:grid-cols-3 opacity-80">
        {features.map((f, i) => <ScrollReveal key={f.title} delay={i * 100}>
            <div className="rounded-xl border border-primary/20 bg-card p-8 shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:shadow-[0_12px_40px_-2px_hsl(var(--primary)/0.55)] hover:border-primary/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </ScrollReveal>)}
      </div>
    </section>

    {/* Featured Products */}
    <section className="bg-muted/50">
      <div className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">What We Offer</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Our Products</h2>
              <p className="mt-2 text-muted-foreground max-w-lg">Explore our range of premium polymer materials engineered for performance.</p>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex rounded-full">
              <Link to="/products">View All <ArrowRight size={14} className="ml-1" /></Link>
            </Button>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => <ScrollReveal key={p.id} delay={i * 100}>
              <ProductCard product={p} />
            </ScrollReveal>)}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-hero">
      <ScrollReveal>
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Ready to Partner With Us?</h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            Get competitive quotes for bulk orders. Our team responds within 24 hours.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full px-10">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  </div>;
export default Index;