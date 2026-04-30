import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
      <div className="md:col-span-1">
        {/* Override logo colors for dark footer */}
        <div className="flex items-center gap-2.5">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2L43.0526 13V35L24 46L4.94744 35V13L24 2Z" fill="hsl(215 90% 52%)" opacity="0.2" />
            <path d="M24 2L43.0526 13V35L24 46L4.94744 35V13L24 2Z" stroke="hsl(215 90% 52%)" strokeWidth="2.5" fill="none" />
            <circle cx="24" cy="24" r="5" fill="hsl(215 90% 52%)" />
            <line x1="24" y1="19" x2="24" y2="8" stroke="hsl(215 90% 52%)" strokeWidth="2" />
            <line x1="24" y1="29" x2="24" y2="40" stroke="hsl(215 90% 52%)" strokeWidth="2" />
            <line x1="19.5" y1="21.5" x2="11" y2="15" stroke="hsl(215 90% 52%)" strokeWidth="2" />
            <line x1="28.5" y1="21.5" x2="37" y2="15" stroke="hsl(215 90% 52%)" strokeWidth="2" />
            <line x1="19.5" y1="26.5" x2="11" y2="33" stroke="hsl(215 90% 52%)" strokeWidth="2" />
            <line x1="28.5" y1="26.5" x2="37" y2="33" stroke="hsl(215 90% 52%)" strokeWidth="2" />
            <circle cx="24" cy="8" r="2.5" fill="hsl(160 70% 45%)" />
            <circle cx="24" cy="40" r="2.5" fill="hsl(160 70% 45%)" />
            <circle cx="11" cy="15" r="2.5" fill="hsl(160 70% 45%)" />
            <circle cx="37" cy="15" r="2.5" fill="hsl(160 70% 45%)" />
            <circle cx="11" cy="33" r="2.5" fill="hsl(160 70% 45%)" />
            <circle cx="37" cy="33" r="2.5" fill="hsl(160 70% 45%)" />
          </svg>
          <div className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-background">Manohar Lal & Sons</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Polymer</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-background/60 leading-relaxed">
          Trusted manufacturer and supplier of premium polymer granules and compounds for diverse industrial applications since 1985.
        </p>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold text-background uppercase tracking-wider">Quick Links</h4>
        <ul className="space-y-2.5 text-sm text-background/60">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
          <li><Link to="/company-profile" className="hover:text-primary transition-colors">Company Profile</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold text-background uppercase tracking-wider">Products</h4>
        <ul className="space-y-2.5 text-sm text-background/60">
          <li><Link to="/products/hdpe-granules" className="hover:text-primary transition-colors">HDPE Granules</Link></li>
          <li><Link to="/products/ldpe-granules" className="hover:text-primary transition-colors">LDPE Granules</Link></li>
          <li><Link to="/products/pp-granules" className="hover:text-primary transition-colors">PP Granules</Link></li>
          <li><Link to="/products/pvc-compound" className="hover:text-primary transition-colors">PVC Compound</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold text-background uppercase tracking-wider">Contact</h4>
        <ul className="space-y-3 text-sm text-background/60">
          <li className="flex items-center gap-2.5">
            <Phone size={14} className="text-primary shrink-0" />
            +91-8044947763
          </li>
          <li className="flex items-center gap-2.5">
            <Mail size={14} className="text-primary shrink-0" />
            info@manoharlalandsonspolymer.com
          </li>
          <li className="flex items-start gap-2.5">
            <MapPin size={14} className="mt-0.5 text-primary shrink-0" />
            174, Mandoli Village, New Delhi - 110093, Delhi, India
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-background/10 py-5 text-center text-xs text-background/40">
      © {new Date().getFullYear()} Manohar Lal & Sons. All rights reserved.
    </div>
  </footer>
);

export default Footer;
