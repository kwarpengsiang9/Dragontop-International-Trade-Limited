import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    icon: "🚢",
    description:
      "End-to-end freight management tailored to your cargo needs, ensuring timely and cost-effective delivery worldwide.",
    details: [
      "Full Container Load (FCL) and Less Container Load (LCL)",
      "Multimodal transport solutions",
      "Real-time shipment visibility",
      "Dedicated freight coordinators",
    ],
  },
  {
    id: "customs-clearance",
    title: "Customs Clearance",
    icon: "📋",
    description:
      "Expert customs brokerage services to navigate complex regulations and ensure smooth border crossings.",
    details: [
      "Import and export declaration",
      "Tariff classification and duty optimization",
      "Compliance with local and international trade laws",
      "Document preparation and verification",
    ],
  },
  {
    id: "warehousing",
    title: "Warehousing & Distribution",
    icon: "🏭",
    description:
      "State-of-the-art warehousing facilities with intelligent inventory management and flexible storage solutions.",
    details: [
      "Temperature-controlled storage available",
      "Inventory management system (IMS)",
      "Pick, pack, and fulfillment services",
      "Cross-docking capabilities",
    ],
  },
  {
    id: "last-mile",
    title: "Last-Mile Delivery",
    icon: "🚚",
    description:
      "Reliable last-mile logistics ensuring your goods reach their final destination safely and on schedule.",
    details: [
      "Same-day and next-day delivery options",
      "Proof of delivery (POD) tracking",
      "Urban and rural coverage",
      "Flexible delivery windows",
    ],
  },
  {
    id: "air-cargo",
    title: "Air Cargo",
    icon: "✈️",
    description:
      "Fast and secure air freight services for time-sensitive shipments across global air networks.",
    details: [
      "Express and economy air freight",
      "Charter flight arrangements",
      "Dangerous goods handling (IATA compliant)",
      "Airport-to-door service",
    ],
  },
  {
    id: "sea-freight",
    title: "Sea Freight",
    icon: "⚓",
    description:
      "Comprehensive ocean freight solutions offering competitive rates on major shipping lanes worldwide.",
    details: [
      "FCL and LCL shipments",
      "Reefer and special cargo handling",
      "Port-to-port and door-to-door options",
      "Bill of lading management",
    ],
  },
  {
    id: "land-transport",
    title: "Land Transportation",
    icon: "🛣️",
    description:
      "Extensive road and rail transport networks connecting major trade hubs across Asia and beyond.",
    details: [
      "Full truckload (FTL) and partial load (LTL)",
      "Cross-border trucking",
      "Rail freight for bulk cargo",
      "GPS-tracked fleet",
    ],
  },
  {
    id: "supply-chain",
    title: "Supply Chain Consulting",
    icon: "📊",
    description:
      "Strategic consulting to optimize your supply chain, reduce costs, and build operational resilience.",
    details: [
      "Supply chain mapping and analysis",
      "Cost reduction strategies",
      "Vendor management and sourcing",
      "Risk assessment and mitigation",
    ],
  },
];
