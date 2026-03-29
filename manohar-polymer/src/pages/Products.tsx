import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

const Products = () => (
  <div>
    {/* Page Header */}
    <section className="gradient-hero py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">Our Products</h1>
        <p className="mt-2 text-primary-foreground/80 max-w-lg mx-auto">
          High-quality polymer granules and compounds for every industrial need.
        </p>
      </div>
    </section>

    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 100}>
            <ProductCard product={p} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </div>
);

export default Products;
