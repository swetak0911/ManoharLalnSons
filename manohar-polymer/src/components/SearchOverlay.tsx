import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface SearchOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const navPages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Company Profile", path: "/company-profile" },
  { name: "Contact", path: "/contact" },
];

const SearchOverlay = ({ open, onOpenChange }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredPages = query.trim()
    ? navPages.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleSelect = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
        <div className="flex items-center border-b border-border px-4">
          <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, pages..."
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-12"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
              <X size={16} />
            </button>
          )}
        </div>

        <div className="max-h-[300px] overflow-y-auto p-2">
          {!query.trim() && (
            <p className="py-6 text-center text-sm text-muted-foreground">
              Start typing to search...
            </p>
          )}

          {query.trim() && filteredPages.length === 0 && filteredProducts.length === 0 && (
            <p className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </p>
          )}

          {filteredPages.length > 0 && (
            <div className="mb-2">
              <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Pages</p>
              {filteredPages.map((page) => (
                <button
                  key={page.path}
                  onClick={() => handleSelect(page.path)}
                  className="flex w-full items-center rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {page.name}
                </button>
              ))}
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div>
              <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Products</p>
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleSelect(`/products/${product.id}`)}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-8 w-8 rounded object-cover"
                  />
                  <div className="text-left">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {product.shortDescription}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchOverlay;
