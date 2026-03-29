import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => (
  <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
    {/* Creative hexagonal polymer molecule logo */}
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Outer hexagon */}
      <path
        d="M24 2L43.0526 13V35L24 46L4.94744 35V13L24 2Z"
        className="fill-primary"
        opacity="0.12"
      />
      {/* Inner molecule structure */}
      <path
        d="M24 2L43.0526 13V35L24 46L4.94744 35V13L24 2Z"
        className="stroke-primary"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Center circle */}
      <circle cx="24" cy="24" r="5" className="fill-primary" />
      {/* Molecule bonds */}
      <line x1="24" y1="19" x2="24" y2="8" className="stroke-primary" strokeWidth="2" />
      <line x1="24" y1="29" x2="24" y2="40" className="stroke-primary" strokeWidth="2" />
      <line x1="19.5" y1="21.5" x2="11" y2="15" className="stroke-primary" strokeWidth="2" />
      <line x1="28.5" y1="21.5" x2="37" y2="15" className="stroke-primary" strokeWidth="2" />
      <line x1="19.5" y1="26.5" x2="11" y2="33" className="stroke-primary" strokeWidth="2" />
      <line x1="28.5" y1="26.5" x2="37" y2="33" className="stroke-primary" strokeWidth="2" />
      {/* Bond endpoints */}
      <circle cx="24" cy="8" r="2.5" className="fill-accent" />
      <circle cx="24" cy="40" r="2.5" className="fill-accent" />
      <circle cx="11" cy="15" r="2.5" className="fill-accent" />
      <circle cx="37" cy="15" r="2.5" className="fill-accent" />
      <circle cx="11" cy="33" r="2.5" className="fill-accent" />
      <circle cx="37" cy="33" r="2.5" className="fill-accent" />
    </svg>
    <div className="leading-tight">
      <span className="block text-base font-bold tracking-tight text-foreground">
        Manohar Lal & Sons
      </span>
      <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
        Polymer
      </span>
    </div>
  </Link>
);

export default Logo;
