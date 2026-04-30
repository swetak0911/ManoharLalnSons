import newhdpeB from "@/assets/newhdpegranule.jpg";
import ldpeB from "@/assets/ldpe-granuals.jpg";
import newpp from "@/assets/newnaturalpp.jpg";
import cpWhite from "@/assets/cp-white.jpg";
import hdpeWhite from "@/assets/hdpe-white.png";
import hdpeRed from "@/assets/hdpe-red.png";
import hdpeGreen from "@/assets/hdpe-green.png";
import hdpeYellow from "@/assets/hdpe-yellow.png";
import ppSilver from "@/assets/pp-silver.jpg";
import ppBlack from "@/assets/pp-black.jpg";
import ppNatural from "@/assets/pp-natural.jpg";
import ppWhite from "@/assets/pp-white.jpg";
import ppBrown from "@/assets/pp-brown.jpg";
import hdBlue from "@/assets/hd-blue.jpg";
import hdPink from "@/assets/hd-pink.jpg";
import hdWhite from "@/assets/hd-white.jpg";
import hdYellow from "@/assets/hd-yellow.jpg";
import hdGreen from "@/assets/hd-green.jpg";

export interface ProductVariant {
  name: string;
  price: string;
  moq: string;
  image: string;
  applications: string[];
  specifications: Record<string, string>;
  description: string[];
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription?: string;
  image: string;
  gallery: string[];
  moq: string;
  applications: string[];
  specifications: Record<string, string>;
  variants?: ProductVariant[];
  features?: { title: string; description: string }[];
}

export const products: Product[] = [
  {
    id: "hdpe-granules",
    name: "HDPE Granules",
    shortDescription: "High-density polyethylene granules for robust industrial applications including pipes, containers, and packaging.",
    detailedDescription: "HDPE (High-Density Polyethylene) granules are high-performance thermoplastic raw materials known for excellent strength, chemical resistance, and durability. Suitable for blow molding, pipe extrusion, injection molding, and packaging applications, our HDPE granules ensure consistent quality, superior processing, and long-term industrial performance.",
    image: newhdpeB,
    gallery: [newhdpeB],
    moq: "1000 Kg",
    applications: [
      "Blow Molding",
      "Pipe Extrusion",
      "Film & Sheet Extrusion",
      "Injection Molding",
      "Industrial Containers",
    ],
    specifications: {
      "Density": "0.941–0.965 g/cm³",
      "Melt Flow Index": "0.1–30 g/10 min",
      "Tensile Strength": "25–45 MPa",
      "Elongation at Break": "100–1000%",
      "Vicat Softening Point": "124–132 °C",
    },
    features: [
      { title: "Recycled Content", description: "Made from recycled HDPE, making it an eco-friendly and sustainable material option." },
      { title: "Durability", description: "Strong, rigid, and impact-resistant, offering long-lasting performance even in demanding environments." },
      { title: "Chemical Resistance", description: "Excellent resistance to chemicals, oils, and solvents, making it ideal for industrial and outdoor applications." },
      { title: "Heat Resistance", description: "Good heat resistance, making it suitable for products exposed to moderate temperatures." },
      { title: "Applications", description: "Commonly used in industrial containers, piping, bottles, automotive parts, storage solutions, plastic parts, and packaging." },
      { title: "Cost-Effective", description: "More affordable than virgin HDPE granules, thanks to its recycled nature, providing a cost-effective solution for high-volume manufacturing." },
    ],
    variants: [
      {
        name: "White Reprocessed HDPE Granules",
        price: "Rs 74 / Kg",
        moq: "100 Kg",
        image: hdpeWhite,
        specifications: {
          "Color": "Natural",
          "Packaging Size": "25 Kg",
          "Packaging Type": "Bag",
          "Form": "Granules",
          "Material": "HDPE",
        },
        applications: ["Blow Moulding", "Containers", "Bottles", "Piping", "Storage Solutions", "Automotive Parts", "Industrial Components"],
        description: [
          "Material: Reprocessed High-Density Polyethylene (HDPE) granules.",
          "Color: White, offering a clean, neutral appearance ideal for various applications.",
          "Recycled Content: Made from recycled HDPE, making it an eco-friendly and sustainable material choice.",
          "Durability: Strong, rigid, and impact-resistant, providing long-lasting performance in diverse environments.",
          "Chemical Resistance: Excellent resistance to chemicals, oils, and solvents, suitable for industrial and outdoor applications.",
          "Heat Resistance: Offers good thermal stability, making it suitable for products exposed to moderate temperatures.",
          "Applications: Commonly used in containers, bottles, piping, plastic products, storage solutions, automotive parts, and industrial components.",
          "Cost-Effective: More affordable than virgin HDPE granules due to its recycled nature.",
          "Flexibility: Provides moderate flexibility while maintaining rigidity and strength for various product needs.",
        ],
      },
      {
        name: "Red Reprocessed HDPE Granules",
        price: "Rs 60 / Kg",
        moq: "1000 Kg",
        image: hdpeRed,
        specifications: {
          "Color": "Red",
          "Packaging Size": "25 Kg",
          "Packaging Type": "Bag",
          "Form": "Granules",
          "Material": "HDPE",
        },
        applications: ["Blow Moulding", "Industrial Containers", "Piping", "Bottles", "Automotive Parts", "Packaging", "Storage Solutions"],
        description: [
          "Material: Reprocessed High-Density Polyethylene (HDPE) granules.",
          "Color: Red, providing a vibrant and noticeable appearance, often used for color-coded applications or aesthetic purposes.",
          "Recycled Content: Made from recycled HDPE, making it an eco-friendly and sustainable material option.",
          "Durability: Strong, rigid, and impact-resistant, offering long-lasting performance even in demanding environments.",
          "Chemical Resistance: Excellent resistance to chemicals, oils, and solvents, making it ideal for industrial and outdoor applications.",
          "Heat Resistance: Good heat resistance, making it suitable for products exposed to moderate temperatures.",
          "Applications: Commonly used in industrial containers, piping, bottles, automotive parts, storage solutions, plastic parts, and packaging.",
          "Cost-Effective: More affordable than virgin HDPE granules, thanks to its recycled nature.",
        ],
      },
      {
        name: "Green Reprocessed HDPE Granules",
        price: "Rs 74 / Kg",
        moq: "1000 Kg",
        image: hdpeGreen,
        specifications: {
          "Color": "Green",
          "Packaging Size": "25 Kg",
          "Packaging Type": "Loose",
          "Form": "Granules",
          "Material": "HDPE",
        },
        applications: ["Blow Moulding", "Industrial Containers", "Piping", "Bottles", "Automotive Parts", "Packaging", "Storage Solutions"],
        description: [
          "Material: Reprocessed High-Density Polyethylene (HDPE) granules.",
          "Color: Green, providing a vibrant and distinctive appearance, often used for both functional and aesthetic purposes.",
          "Recycled Content: Made from recycled HDPE, making it an eco-friendly and sustainable choice.",
          "Durability: Strong, rigid, and impact-resistant, ensuring long-lasting performance even in demanding environments.",
          "Chemical Resistance: Excellent resistance to chemicals, oils, and solvents, making it suitable for industrial and outdoor applications.",
          "Heat Resistance: Good heat resistance, making it suitable for applications that do not require extreme temperature tolerance.",
          "Applications: Commonly used in industrial containers, piping, bottles, automotive parts, packaging, and storage solutions.",
        ],
      },
      {
        name: "Yellow Reprocessed HDPE Granules",
        price: "Rs 74 / Kg",
        moq: "1000 Kg",
        image: hdpeYellow,
        specifications: {
          "Color": "Yellow",
          "Packaging Size": "25 Kg",
          "Packaging Type": "Loose",
          "Form": "Granules",
          "Material": "HDPE",
        },
        applications: ["Plastic Industry", "Industrial Containers", "Pipes", "Bottles", "Storage Solutions", "Packaging", "Automotive Parts"],
        description: [
          "Material: Reprocessed High-Density Polyethylene (HDPE) granules.",
          "Color: Yellow, providing a bright and vibrant finish suitable for various industrial and consumer applications.",
          "Recycled Content: Made from recycled HDPE, making it an eco-friendly and sustainable material choice.",
          "Durability: Strong, rigid, and impact-resistant, offering long-lasting performance in challenging environments.",
          "Chemical Resistance: Excellent resistance to chemicals, oils, and solvents, making it ideal for use in industrial applications.",
          "Heat Resistance: Good thermal stability, capable of withstanding moderate temperatures.",
          "Applications: Commonly used in industrial containers, pipes, bottles, storage solutions, packaging, and automotive parts.",
          "Cost-Effective: More affordable than virgin HDPE granules, due to its recycled nature.",
          "Flexibility: Provides moderate flexibility while maintaining rigidity and strength for various applications.",
        ],
      },
    ],
  },
  {
    id: "ldpe-granules",
    name: "LDPE Granules",
    shortDescription: "Low-density polyethylene granules with excellent flexibility, ideal for films, packaging, and coatings.",
    image: ldpeB,
    gallery: [ldpeB],
    moq: "1000 Kg",
    applications: [
      "Packaging Films",
      "Agricultural Films",
      "Shrink Wraps",
      "Wire & Cable Insulation",
      "Squeeze Bottles",
    ],
    specifications: {
      "Density": "0.910–0.940 g/cm³",
      "Melt Flow Index": "0.2–100 g/10 min",
      "Tensile Strength": "8–25 MPa",
      "Elongation at Break": "200–600%",
      "Vicat Softening Point": "85–110 °C",
    },
  },
  {
    id: "pp-granules",
    name: "PP Granules",
    shortDescription: "Polypropylene granules offering high chemical resistance for automotive, textiles, and consumer goods.",
    detailedDescription: "PP (Polypropylene) Granules are versatile, reprocessed thermoplastic raw materials known for their excellent chemical resistance, durability, and heat stability. Ideal for injection molding, extrusion, and blow molding applications, our PP granules deliver consistent quality and cost-effective performance for automotive parts, packaging, containers, household goods, and industrial components.",
    image: newpp,
    gallery: [newpp],
    moq: "1000 Kg",
    applications: [
      "Injection Molding",
      "Extrusion",
      "Blow Molding",
      "Automotive Parts",
      "Household Goods",
      "Packaging",
    ],
    specifications: {
      "Density": "0.895–0.920 g/cm³",
      "Melt Flow Index": "0.5–100 g/10 min",
      "Tensile Strength": "30–40 MPa",
      "Elongation at Break": "100–600%",
      "Heat Deflection Temp": "100–150 °C",
    },
    features: [
      { title: "Recycled Content", description: "Made from recycled PP, making it an eco-friendly and cost-effective material option." },
      { title: "Durability", description: "Strong, rigid, and impact-resistant material, with good longevity in various applications." },
      { title: "Heat Resistance", description: "Good resistance to high temperatures, suitable for applications requiring thermal stability." },
      { title: "Chemical Resistance", description: "Offers resistance to many chemicals, oils, and solvents." },
      { title: "Applications", description: "Commonly used in injection molding, extrusion, and blow molding for containers, automotive parts, packaging, and household goods." },
      { title: "Cost-Effective", description: "Affordable compared to virgin PP granules, due to the recycled nature of the material." },
    ],
    variants: [
      {
        name: "Silver Reprocessed PP Granules",
        price: "Rs 55 / Kg",
        moq: "1000 Kg",
        image: ppSilver,
        specifications: {
          "Types Of PP Granules": "Reprocessed",
          "Color": "Silver",
          "Usage/Application": "Injection Molding",
          "Material": "Poly Propylene",
          "Packaging Type": "Bag",
          "Packaging Size": "25 Kg",
        },
        applications: ["Injection Molding", "Containers", "Automotive Parts", "Packaging", "Household Goods", "Industrial Components"],
        description: [
          "Material: Reprocessed Polypropylene (PP) granules.",
          "Color: Silver, giving a metallic finish.",
          "Recycled Content: Made from recycled PP, making it an eco-friendly and cost-effective material.",
          "Durability: Strong, rigid, and impact-resistant material, with good longevity in various applications.",
          "Heat Resistance: Good resistance to high temperatures, suitable for applications requiring thermal stability.",
          "Chemical Resistance: Offers resistance to many chemicals, oils, and solvents.",
          "Applications: Commonly used in injection molding, extrusion, and blow molding for products such as containers, automotive parts, packaging, household goods, and industrial components.",
          "Cost-Effective: Affordable compared to virgin PP granules, due to the recycled nature of the material.",
        ],
      },
      {
        name: "Black Reprocessed PP Granules",
        price: "Rs 55 / Kg",
        moq: "1000 Kg",
        image: ppBlack,
        specifications: {
          "Type of PP Granules": "Recycled",
          "Color": "Black",
          "Usage/Application": "Injection Molding",
          "Packaging Size": "25 Kg",
          "Packaging Type": "Bags",
          "Types Of PP Granules": "Natural",
        },
        applications: ["Automotive Parts", "Industrial Containers", "Packaging", "Household Items", "Storage Solutions", "Electrical Components"],
        description: [
          "Material: Reprocessed Polypropylene (PP) granules.",
          "Color: Black, offering a sleek and versatile finish, often used for industrial and functional products.",
          "Recycled Content: Made from recycled PP, making it an eco-friendly and cost-efficient choice.",
          "Durability: Impact-resistant and strong, providing long-lasting performance even in demanding environments.",
          "Heat Resistance: Good resistance to high temperatures, suitable for products that require thermal stability.",
          "Chemical Resistance: Offers resistance to various chemicals, oils, and solvents, making it ideal for industrial applications.",
          "Applications: Commonly used in automotive parts, industrial containers, packaging, household items, storage solutions, and electrical components.",
          "Cost-Effective: More affordable than virgin PP granules, thanks to its recycled nature, making it a budget-friendly option for mass production.",
        ],
      },
      {
        name: "Natural PP Granule (Transparent)",
        price: "Rs 82 / Kg",
        moq: "500 Kg",
        image: ppNatural,
        specifications: {
          "Color": "Transparent",
          "Usage/Application": "Injection Molding",
          "Packaging Size": "25 Kg",
          "Packaging Type": "Loose",
          "Material": "PP",
          "Form": "Granules",
        },
        applications: ["Packaging", "Containers", "Bottles", "Storage Bins", "Food Containers", "Clear Plastic Products"],
        description: [
          "Material: Reprocessed Polypropylene (PP) granules.",
          "Color: Transparent, offering a clear, see-through finish ideal for visual appeal and product transparency.",
          "Recycled Content: Made from recycled PP, making it an eco-friendly and sustainable material choice.",
          "Durability: Strong and impact-resistant, providing long-lasting performance even in demanding applications.",
          "Heat Resistance: Good heat resistance, making it suitable for products exposed to moderate temperatures.",
          "Chemical Resistance: Offers resistance to various chemicals, oils, and solvents, suitable for industrial and household products.",
          "Applications: Commonly used in packaging, containers, bottles, storage bins, food containers, and other clear plastic products.",
          "Cost-Effective: More affordable compared to virgin PP granules due to its recycled nature.",
        ],
      },
      {
        name: "White Reprocessed PP Granules",
        price: "Rs 82 / Kg",
        moq: "500 Kg",
        image: ppWhite,
        specifications: {
          "Color": "White",
          "Usage/Application": "Injection Molding",
          "Material": "PP",
          "Packaging Size": "25 Kg",
          "Packaging Type": "Bag",
          "Types Of PP Granules": "Natural",
        },
        applications: ["Automotive Parts", "Household Items", "Containers", "Bottles", "Packaging", "Industrial Components"],
        description: [
          "Material: Reprocessed Polypropylene (PP) granules, designed specifically for injection molding applications.",
          "Color: White, providing a clean and neutral appearance ideal for a variety of products.",
          "Recycled Content: Made from recycled PP, making it a more eco-friendly and sustainable choice.",
          "Durability: Strong, rigid, and impact-resistant, suitable for long-lasting performance in various molded products.",
          "Chemical Resistance: Offers good resistance to chemicals, oils, and solvents, making it suitable for a variety of industrial applications.",
          "Heat Resistance: Moderate heat resistance, making it ideal for products exposed to typical processing temperatures in injection molding.",
          "Applications: Commonly used for producing automotive parts, household items, containers, bottles, packaging, and industrial components via injection molding.",
        ],
      },
      {
        name: "Brown Reprocessed PP Granules",
        price: "Rs 55 / Kg",
        moq: "1000 Kg",
        image: ppBrown,
        specifications: {
          "Types Of PP Granules": "Reprocessed",
          "Color": "Brown",
          "Usage/Application": "Injection Molding",
          "Material": "Poly Propylene",
          "Packaging Type": "Bag",
          "Packaging Size": "25 Kg",
        },
        applications: ["Containers", "Packaging", "Automotive Parts", "Furniture", "Industrial Components", "Outdoor Products"],
        description: [
          "Material: Reprocessed Polypropylene (PP) granules.",
          "Color: Brown, offering a natural or earthy tone, often used for industrial or outdoor applications.",
          "Recycled Content: Made from recycled PP, making it an eco-friendly and cost-effective option.",
          "Durability: Sturdy and impact-resistant, offering long-lasting performance in various applications.",
          "Heat Resistance: Good heat resistance, making it suitable for products that need to endure higher temperatures.",
          "Chemical Resistance: Resistant to a wide range of chemicals, oils, and solvents, making it useful in industrial settings.",
          "Applications: Commonly used in the production of containers, packaging, automotive parts, furniture, industrial components, and outdoor products.",
          "Cost-Effective: Typically less expensive than virgin PP granules due to its recycled nature.",
        ],
      },
    ],
  },
  {
    id: "pvc-compound",
    name: "CP Plastic Granules",
    shortDescription: "Premium CP plastic granules engineered for pipes, profiles, cables, and construction applications.",
    detailedDescription: "HD (High-Density) Plastic Granules are versatile, high-performance thermoplastic raw materials made from recycled HDPE. Known for their exceptional strength, rigidity, and chemical resistance, these granules are ideal for injection molding, extrusion, and blow molding processes. Our CP plastic granules deliver consistent quality for containers, bottles, pipes, plastic films, toys, furniture, automotive parts, and a wide range of industrial applications.",
    image: cpWhite,
    gallery: [cpWhite],
    moq: "1000 Kg",
    applications: [
      "Containers",
      "Bottles",
      "Pipes",
      "Plastic Films",
      "Toys",
      "Furniture",
      "Automotive Parts",
    ],
    specifications: {
      "Density": "0.941–0.965 g/cm³",
      "Melt Flow Index": "0.1–30 g/10 min",
      "Tensile Strength": "25–45 MPa",
      "Elongation at Break": "100–1000%",
      "Vicat Softening Point": "124–132 °C",
    },
    features: [
      { title: "Recycled Content", description: "Made from recycled HDPE, making it an eco-friendly and sustainable material option for mass production." },
      { title: "Durability", description: "Known for high strength, rigidity, and resilience against impact and wear in demanding environments." },
      { title: "Chemical Resistance", description: "Offers excellent resistance to chemicals, moisture, and solvents for industrial and outdoor use." },
      { title: "Heat Resistance", description: "Performs well in a wide range of temperatures without degradation or loss of structural integrity." },
      { title: "Flexibility", description: "Provides moderate flexibility while maintaining rigidity, suitable for products requiring strength and bendability." },
      { title: "Cost-Effective", description: "Affordable and cost-efficient solution for large-scale manufacturing of plastic products." },
    ],
    variants: [
      {
        name: "Blue HD Plastic Granules",
        price: "Rs 60 / Kg",
        moq: "1000 Kg",
        image: hdBlue,
        specifications: {
          "Color": "Blue",
          "Usage/Application": "Plastic Industry",
          "Packaging Type": "Bag",
          "Form": "Granules",
          "Material": "HD Plastic",
          "Packaging Size": "25 Kg",
        },
        applications: ["Containers", "Bottles", "Plastic Films", "Pipes", "Toys", "Automotive Components", "Industrial Applications"],
        description: [
          "Material: High-density polyethylene (HDPE) plastic granules.",
          "Color: Blue, providing a vibrant and distinctive appearance for color-coded or aesthetic applications.",
          "Durability: Known for high strength, rigidity, and resilience against impact and wear.",
          "Applications: Used in injection molding, extrusion, and blow molding for a variety of products.",
          "Recyclability: Recyclable, making it an eco-friendly option.",
          "Chemical Resistance: Offers excellent resistance to chemicals, moisture, and solvents.",
          "Temperature Resistance: Performs well in a wide range of temperatures.",
          "Uses: Commonly used for containers, bottles, plastic films, pipes, toys, automotive components, and industrial applications.",
          "Cost-Effective: Affordable, offering a cost-efficient solution for mass production of blue-colored plastic products.",
        ],
      },
      {
        name: "Pink HD Plastic Granules",
        price: "Rs 60 / Kg",
        moq: "1000 Kg",
        image: hdPink,
        specifications: {
          "Color": "Pink",
          "Usage/Application": "Blow Moulding",
          "Packaging Size": "25 Kg",
          "Packaging Type": "Bag",
          "Form": "Granules",
          "Material": "HD Plastic",
        },
        applications: ["Industrial Containers", "Bottles", "Pipes", "Automotive Parts", "Plastic Components", "Packaging", "Storage Solutions"],
        description: [
          "Material: High-Density Polyethylene (HDPE) plastic granules.",
          "Color: Pink, providing a vibrant and eye-catching appearance, often used for color-coded applications or aesthetic purposes.",
          "Durability: Strong, rigid, and impact-resistant, offering long-lasting performance even in tough environments.",
          "Chemical Resistance: Excellent resistance to chemicals, oils, and solvents, making it suitable for industrial, outdoor, and commercial applications.",
          "Heat Resistance: Good heat resistance, capable of withstanding moderate temperatures without degradation.",
          "Applications: Commonly used in the production of industrial containers, bottles, pipes, automotive parts, plastic components, packaging, and storage solutions.",
          "Environmental Impact: Recyclable, contributing to sustainability by reducing plastic waste and supporting a circular economy.",
          "Cost-Effective: Typically more affordable than many other high-performance plastics, making it a cost-efficient solution for large-scale manufacturing.",
        ],
      },
      {
        name: "White HD Plastic Granules",
        price: "Rs 75 / Kg",
        moq: "1000 Kg",
        image: hdWhite,
        specifications: {
          "Packaging Type": "25 Kg",
          "Packaging Size": "Bag",
          "Usage/Application": "Pipes, Brooms, Cans",
          "Color": "White",
          "Material": "HDPE",
          "Types Of PP Granules": "Colored",
        },
        applications: ["Containers", "Bottles", "Pipes", "Plastic Films", "Toys", "Furniture", "Automotive Parts"],
        description: [
          "Material: High-density polyethylene (HDPE) plastic granules.",
          "Color: White, offering a clean and neutral appearance for versatile applications.",
          "Durability: Known for high strength, rigidity, and long-lasting performance.",
          "Applications: Commonly used in injection molding, extrusion, and blow molding for creating various products.",
          "Recyclability: Recyclable, making it an eco-friendly material choice.",
          "Chemical Resistance: Strong resistance to chemicals, moisture, and solvents.",
          "Temperature Range: Performs well across a wide range of temperatures.",
          "Uses: Ideal for containers, bottles, pipes, plastic films, toys, furniture, and automotive parts.",
          "Cost-Effective: Typically affordable compared to other high-performance plastics, offering good value for mass production.",
        ],
      },
      {
        name: "Yellow HD Plastic Granules",
        price: "Rs 65 / Kg",
        moq: "1000 Kg",
        image: hdYellow,
        specifications: {
          "Usage/Application": "Plastic Industry",
          "Color": "Yellow",
          "Packaging Size": "25 Kg",
          "Packaging Type": "Loose",
          "Material": "HD Plastic",
          "Form": "Granules",
        },
        applications: ["Containers", "Bottles", "Pipes", "Storage Solutions", "Automotive Parts", "Industrial Products", "Packaging"],
        description: [
          "Material: High-Density Polyethylene (HDPE) plastic granules.",
          "Color: Yellow, providing a bright and vibrant finish, often used for color-coded or attention-grabbing applications.",
          "Durability: Strong, rigid, and impact-resistant, offering long-lasting performance in various industrial and consumer products.",
          "Chemical Resistance: Excellent resistance to chemicals, oils, and solvents, making it suitable for demanding industrial environments.",
          "Heat Resistance: Good heat resistance, capable of withstanding moderate temperatures without losing structural integrity.",
          "Applications: Commonly used for containers, bottles, pipes, storage solutions, automotive parts, industrial products, and packaging.",
          "Environmental Impact: Recyclable, making it an eco-friendly and sustainable choice for reducing plastic waste.",
        ],
      },
      {
        name: "Green HD Plastic Granules",
        price: "Rs 70 / Kg",
        moq: "1000 Kg",
        image: hdGreen,
        specifications: {
          "Color": "Green",
          "Usage/Application": "Plastic Industry",
          "Packaging Type": "Back",
          "Packaging Size": "25 Kg",
          "Form": "Granules",
          "Material": "HD Plastic",
        },
        applications: ["Industrial Containers", "Bottles", "Pipes", "Automotive Components", "Storage Solutions", "Plastic Parts"],
        description: [
          "Material: High-Density Polyethylene (HDPE) plastic granules.",
          "Color: Green, providing a vibrant and distinctive appearance, often used for color-coding or aesthetic purposes.",
          "Durability: Strong, rigid, and impact-resistant, ensuring long-lasting performance in a wide range of applications.",
          "Chemical Resistance: Excellent resistance to chemicals, oils, and solvents, making it suitable for harsh industrial and outdoor environments.",
          "Heat Resistance: Good thermal stability, able to withstand moderate temperatures without losing structural integrity.",
          "Applications: Commonly used in industrial containers, bottles, pipes, automotive components, storage solutions, and plastic parts.",
          "Environmental Impact: Recyclable, making it an eco-friendly option and contributing to sustainability by reducing waste.",
        ],
      },
    ],
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);
