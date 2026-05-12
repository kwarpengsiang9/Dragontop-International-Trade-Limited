import React from "react";

interface IconProps {
  className?: string;
}

const base = "w-7 h-7";
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function FreightIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...stroke}>
      <path d="M2 20h20" />
      <path d="M5 20V9l7-5 7 5v11" />
      <rect x="9" y="13" width="6" height="7" />
      <path d="M3 13h18" />
      <path d="M9 9h6" />
    </svg>
  );
}

export function CustomsIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...stroke}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <polyline points="9 15 11 17 15 12" />
    </svg>
  );
}

export function WarehouseIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...stroke}>
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M3 21h18" />
      <rect x="9" y="14" width="6" height="7" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <path d="M3 13h4M17 13h4" />
    </svg>
  );
}

export function DeliveryIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...stroke}>
      <rect x="1" y="4" width="14" height="12" rx="1" />
      <path d="M15 8h3.5L22 12v4h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

export function AirCargoIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...stroke}>
      <path d="M22 16.5H2" />
      <path d="M10.5 16.5V8.5l2.5-5h1.5l-1 5H17l2-2h1.5l-1 4.5L21 13H17l-1 3.5h-1.5l.5-3.5h-4z" />
      <path d="M2 19.5h20" />
    </svg>
  );
}

export function SeaFreightIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...stroke}>
      <path d="M4 18l2-8h12l2 8" />
      <path d="M7 10V7a1 1 0 011-1h8a1 1 0 011 1v3" />
      <line x1="12" y1="6" x2="12" y2="3" />
      <path d="M2 18.5c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
    </svg>
  );
}

export function LandTransportIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...stroke}>
      <path d="M1 5h14v11H1z" />
      <path d="M15 8h4.5L22 11v5h-7V8z" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M7 16h8" />
    </svg>
  );
}

export function ConsultingIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...stroke}>
      <line x1="4" y1="20" x2="4" y2="14" />
      <line x1="9" y1="20" x2="9" y2="8" />
      <line x1="14" y1="20" x2="14" y2="11" />
      <line x1="19" y1="20" x2="19" y2="4" />
      <polyline points="4 14 9 9 14 13 19 7" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

const iconMap: Record<string, (props: IconProps) => React.ReactElement> = {
  "freight-forwarding": FreightIcon,
  "customs-clearance": CustomsIcon,
  "warehousing": WarehouseIcon,
  "last-mile": DeliveryIcon,
  "air-cargo": AirCargoIcon,
  "sea-freight": SeaFreightIcon,
  "land-transport": LandTransportIcon,
  "supply-chain": ConsultingIcon,
};

export function ServiceIcon({ id, className }: { id: string; className?: string }) {
  const Icon = iconMap[id];
  if (!Icon) return null;
  return <Icon className={className} />;
}
