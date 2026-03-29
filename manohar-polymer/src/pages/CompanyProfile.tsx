import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, Building2, Award, Users, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const tabs = ["About Us", "Why Us?", "Download Brochure"] as const;
type Tab = (typeof tabs)[number];

const factsheet = [
  { label: "Nature of Business", value: "Trader - Wholesaler/Distributor" },
  { label: "Additional Business", value: "Wholesale Business" },
  { label: "Company CEO", value: "Mr. Satpal" },
  { label: "Registered Address", value: "174, Mandoli Village, New Delhi - 110093, Delhi, India" },
  { label: "Total Number of Employees", value: "26 to 50 People" },
  { label: "GST Registration Date", value: "01-07-2017" },
  { label: "Legal Status of Firm", value: "Proprietorship" },
  { label: "Annual Turnover", value: "1.5 - 5 Cr" },
  { label: "GST Partner Name", value: "Satpal" },
];

const statutory = [
  { label: "Import Export Code (IEC)", value: "AMSPS2241K" },
  { label: "GST No.", value: "07AMSPS2241K1ZK" },
];

const whyUsPoints = [
  {
    icon: Award,
    title: "Decades of Experience",
    desc: "With a legacy spanning over half a century, we bring unparalleled expertise and deep industry knowledge to every product we manufacture.",
  },
  {
    icon: CheckCircle,
    title: "Superior Quality Standards",
    desc: "Our stringent quality control processes ensure that every polymer product meets the highest industry standards, delivering durability and performance you can trust.",
  },
  {
    icon: Globe,
    title: "Innovative & Sustainable Solutions",
    desc: "We are committed to innovation, including the production of Co-Polymer granules, Bio-PP granules as well, supporting eco-friendly and sustainable manufacturing practices.",
  },
  {
    icon: Building2,
    title: "Cutting-Edge Manufacturing",
    desc: "Equipped with state-of-the-art facilities, we utilize advanced technology to deliver precision-engineered polymer solutions tailored to modern industry demands.",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    desc: "Our customers are at the heart of everything we do. We prioritize your requirements and offer customized solutions to meet your specific needs.",
  },
  {
    icon: CheckCircle,
    title: "Strong Industry Presence",
    desc: "From supplying railway components to serving the automotive and commercial sectors, our products cater to diverse industries, reinforcing our reputation as a reliable supplier.",
  },
];

const coreValues = [
  "Quality: Every product is a testament to our unwavering commitment to the highest standards.",
  "Integrity: Our legacy is built on transparency, reliability, and ethical practices.",
  "Customer-Centricity: We value the trust placed in us by our clients and continuously strive to exceed expectations.",
];

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState<Tab>("About Us");

  return (
    <div>
      {/* Page Header */}
      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">Company Profile</h1>
          <p className="mt-2 text-primary-foreground/80 max-w-lg mx-auto">
            Learn more about Manohar Lal & Sons — our history, values, and vision.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Tab navigation */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 border-b border-border pb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px rounded-t-lg ${
                  activeTab === tab
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-10">
          {activeTab === "About Us" && <AboutSection />}
          {activeTab === "Why Us?" && <WhyUsSection />}
          {activeTab === "Download Brochure" && <BrochureSection />}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => (
  <div className="space-y-12">
    <ScrollReveal>
      <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
        <p>
          Founded in 1985, <span className="text-foreground font-semibold">Manohar Lal & Sons</span> has built a legacy of excellence in the polymer industry. From humble beginnings, we have grown into a trusted name in manufacturing and trading high-quality polymer-based products. Our journey started with a commitment to innovation and quality, serving industries such as railways, automotive and commercial sectors.
        </p>
        <p>
          Today, we specialize in producing PP (Polypropylene), HDPE (High Density Polyethylene), LDPE (Low Density Polyethylene) Granules, supporting sustainable manufacturing solutions for the future.
        </p>
        <p>
          With decades of experience, strong industry partnerships, and a vision for growth, we continue to adapt to evolving market needs while maintaining the trust of our customers. At Manohar Lal & Sons, we don't just provide products — we deliver reliability, sustainability, and innovation.
        </p>
        <p>
          For our accomplishment story, we are grateful to our CEO, <span className="text-foreground font-semibold">Mr. Satpal</span>, whose continual backing and direction have been useful to us for attaining exponential development in the current market.
        </p>
      </div>
    </ScrollReveal>

    {/* Factsheet */}
    <ScrollReveal delay={100}>
      <h2 className="text-2xl font-bold text-foreground mb-6">Factsheet</h2>

      <div className="rounded-xl border border-border overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-primary/5">
          <h3 className="text-lg font-semibold text-foreground">Basic Information</h3>
        </div>
        <table className="w-full text-sm">
          <tbody>
            {factsheet.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                <td className="px-6 py-3.5 font-medium text-muted-foreground w-1/3">{row.label}</td>
                <td className="px-6 py-3.5 text-foreground">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-6 py-4 border-t border-border bg-primary/5">
          <h3 className="text-lg font-semibold text-foreground">Statutory Profile</h3>
        </div>
        <table className="w-full text-sm">
          <tbody>
            {statutory.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                <td className="px-6 py-3.5 font-medium text-muted-foreground w-1/3">{row.label}</td>
                <td className="px-6 py-3.5 text-foreground">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollReveal>
  </div>
);

const WhyUsSection = () => (
  <div className="space-y-12">
    <ScrollReveal>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        With over 40 years of industry expertise, Manohar Lal & Sons is a trusted name in the polymer and plastics sector. Our commitment to quality, innovation, and sustainability sets us apart.
      </p>
    </ScrollReveal>

    <div className="grid gap-6 md:grid-cols-2">
      {whyUsPoints.map((point, i) => (
        <ScrollReveal key={point.title} delay={i * 80}>
          <div className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-primary/30">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <point.icon size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{point.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>

    <ScrollReveal delay={200}>
      <div className="rounded-xl bg-primary/5 border border-primary/15 p-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Our Core Values</h2>
        <ul className="space-y-3">
          {coreValues.map((v) => (
            <li key={v} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              {v}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  </div>
);

const BrochureSection = () => (
  <ScrollReveal>
    <div className="rounded-xl border border-border bg-card p-10 text-center max-w-lg mx-auto shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto">
        <Download size={32} className="text-primary" />
      </div>
      <h2 className="mt-5 text-xl font-bold text-foreground">Company Brochure</h2>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        Download our detailed company brochure to learn more about our products, capabilities, and manufacturing facilities.
      </p>
      <Button size="lg" className="mt-6 rounded-full px-8">
        <Download size={16} className="mr-2" />
        Download Brochure (PDF)
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">PDF • Coming soon</p>
    </div>
  </ScrollReveal>
);

export default CompanyProfile;
