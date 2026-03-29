import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link
    to={`/products/${product.id}`}
    className="group block rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
  >
    <div className="aspect-square overflow-hidden bg-muted">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
        {product.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors">
        View Details <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);

export default ProductCard;
