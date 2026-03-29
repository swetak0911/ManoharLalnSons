import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Search } from "lucide-react";
import Logo from "@/components/Logo";
import SearchOverlay from "@/components/SearchOverlay";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Company Profile", path: "/company-profile" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="hidden border-b border-border bg-primary text-primary-foreground md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-xs">
          <a href="https://maps.app.goo.gl/W6ue44tevew62HPYA" target="_blank" rel="noopener noreferrer" className="hover:underline">174, Mandoli Village, New Delhi - 110093, India</a>
          <a href="tel:+918044947763" className="flex items-center gap-1.5 font-medium hover:underline">
            <Phone size={12} /> +91-8044947763
          </a>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className={`relative text-sm font-medium transition-colors hover:text-primary ${
                      pathname === l.path
                        ? "text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary after:rounded-full"
                        : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button aria-label="Search" onClick={() => setSearchOpen(true)} className="text-muted-foreground hover:text-primary transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background md:hidden animate-fade-in">
            <ul className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                      pathname === l.path
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default Navbar;
