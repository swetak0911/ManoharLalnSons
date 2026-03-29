import { useParams, Link } from "react-router-dom";
import { getProductById, ProductVariant } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import ScrollReveal from "@/components/ScrollReveal";


const VariantCard = ({ variant, index }: {variant: ProductVariant;index: number;}) =>
<ScrollReveal delay={index * 80}>
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="bg-muted/30 flex items-center justify-center p-4">
          <img
          src={variant.image}
          alt={variant.name}
          className="w-full object-cover rounded-xl aspect-square" />

        </div>

        {/* Right: Details */}
        <div className="p-6 lg:p-8 space-y-5">
          <h3 className="text-2xl font-bold text-foreground">{variant.name}</h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {variant.description[0]}
          </p>

          {/* Price & MOQ box */}
          <div className="flex items-center gap-8 rounded-xl bg-muted/50 p-4">
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Price</span>
              <p className="text-base font-semibold text-primary">{variant.price}</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">MOQ</span>
              <p className="text-base font-semibold text-foreground">{variant.moq}</p>
            </div>
          </div>

          {/* CTA */}
          <ContactModal
          productName={variant.name}
          trigger={<Button className="rounded-full px-6">Yes, I'm Interested</Button>} />


          {/* Applications */}
          {variant.applications && variant.applications.length > 0 &&
        <div>
              <h4 className="mb-2 text-xs font-semibold text-foreground uppercase tracking-wider">Applications</h4>
              <div className="flex flex-wrap gap-2">
                {variant.applications.map((a) =>
            <span key={a} className="rounded-full bg-primary/8 border border-primary/15 px-3 py-1.5 text-xs font-medium text-primary">
                    {a}
                  </span>
            )}
              </div>
            </div>
        }

          {/* Specifications table */}
          <div>
            <h4 className="mb-2 text-xs font-semibold text-foreground uppercase tracking-wider">Specifications</h4>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(variant.specifications).map(([key, val], i) =>
                <tr key={key} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                      <td className="px-4 py-2.5 font-medium text-foreground">{key}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{val}</td>
                    </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ScrollReveal>;


const ProductDetails = () => {
  const { id } = useParams<{id: string;}>();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
          <Button asChild variant="outline" className="mt-4 rounded-full">
            <Link to="/products"><ArrowLeft size={14} className="mr-1" /> Back to Products</Link>
          </Button>
        </div>
      </div>);

  }

  const hasVariants = product.variants && product.variants.length > 0;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/50">
        <div className="container mx-auto flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight size={14} />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero section */}
        <div className="grid gap-12 lg:grid-cols-2 mb-12">
          {/* Image */}
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={product.gallery[0]}
                alt={product.name}
                className="w-full object-cover aspect-square" />

            </div>
          </ScrollReveal>

          {/* Details */}
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground lg:text-4xl">{product.name}</h1>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {product.detailedDescription || product.shortDescription}
                </p>
              </div>

              <div className="flex items-center gap-8 rounded-xl bg-muted/50 p-5">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Price</span>
                  <p className="text-lg font-semibold text-primary">₹60/kg</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">MOQ</span>
                  <p className="text-lg font-semibold text-foreground">{product.moq}</p>
                </div>
              </div>

              <ContactModal productName={product.name}
              trigger={<Button size="lg" className="rounded-full px-8">Yes, I'm Interested</Button>} />


              {/* Applications */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground uppercase tracking-wider">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((a) =>
                  <span key={a} className="rounded-full bg-primary/8 border border-primary/15 px-3.5 py-1.5 text-xs font-medium text-primary">
                      {a}
                    </span>
                  )}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground uppercase tracking-wider">Specifications</h3>
                <div className="rounded-xl border border-border overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, val], i) =>
                      <tr key={key} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                          <td className="px-5 py-3 font-medium text-foreground">{key}</td>
                          <td className="px-5 py-3 text-muted-foreground">{val}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Variants Section */}
        {hasVariants &&
        <div>
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-6">Available Variants</h2>
            </ScrollReveal>

            {/* Features */}
            {product.features && product.features.length > 0 &&
          <ScrollReveal delay={50}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                  {product.features.map((feature) =>
              <div key={feature.title} className="rounded-xl border border-border bg-card p-5 space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
              )}
                </div>
              </ScrollReveal>
          }

            <div className="space-y-6">
              {product.variants!.map((variant, index) =>
            <VariantCard key={variant.name} variant={variant} index={index} />
            )}
            </div>
          </div>
        }
      </div>
    </div>);

};

export default ProductDetails;