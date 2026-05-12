interface LogoIconProps {
  className?: string;
  size?: number;
}

export default function LogoIcon({ className = "", size = 36 }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B9EE2" />
          <stop offset="100%" stopColor="#0A1F44" />
        </linearGradient>
      </defs>

      {/* Rounded square background */}
      <rect width="44" height="44" rx="10" fill="url(#logoGrad)" />

      {/* Vertical stem of the "D" */}
      <rect x="10" y="10" width="5" height="24" rx="2.5" fill="white" />

      {/* Globe arc — forms the curved part of the "D" */}
      <path
        d="M15 10 Q35 10 35 22 Q35 34 15 34"
        stroke="white"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Latitude lines inside the globe */}
      <path d="M15 22 H34" stroke="white" strokeWidth="1.5" opacity="0.35" />
      <path d="M15 16 Q27 13.5 33.5 18" stroke="white" strokeWidth="1.2" opacity="0.25" />
      <path d="M15 28 Q27 30.5 33.5 26" stroke="white" strokeWidth="1.2" opacity="0.25" />
    </svg>
  );
}
