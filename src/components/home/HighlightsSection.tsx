import Image from "next/image";

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-brand-sky">
      <path d="M6 9H4a2 2 0 01-2-2V5a1 1 0 011-1h3M18 9h2a2 2 0 002-2V5a1 1 0 00-1-1h-3" />
      <path d="M6 4h12v6a6 6 0 01-12 0V4z" />
      <path d="M12 16v4M8 20h8" />
      <path d="M9 16.5a6 6 0 006 0" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-brand-sky">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-brand-sky">
      <path d="M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16v-2" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-brand-sky">
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z" />
      <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
    </svg>
  );
}

const stats = [
  { value: "6+", label: "Years of Experience", Icon: TrophyIcon },
  { value: "50+", label: "Countries Served", Icon: GlobeIcon },
  { value: "10,000+", label: "Shipments per Year", Icon: BoxIcon },
  { value: "24/7", label: "Customer Support", Icon: HeadsetIcon },
];

export default function HighlightsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Aerial port / logistics photo */}
      <Image
        src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80"
        alt="Aerial view of cargo port"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-navy/82" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map(({ value, label, Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
            >
              <Icon />
              <div className="text-4xl md:text-5xl font-bold text-white mt-4 mb-2">
                {value}
              </div>
              <div className="text-blue-200 text-sm font-medium tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
