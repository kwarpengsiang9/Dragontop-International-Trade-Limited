import Image from "next/image";

const stats = [
  { value: "6+", label: "Years of Experience", icon: "🏆" },
  { value: "50+", label: "Countries Served", icon: "🌍" },
  { value: "10,000+", label: "Shipments per Year", icon: "📦" },
  { value: "24/7", label: "Customer Support", icon: "🛎️" },
];

export default function HighlightsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Aerial shipping containers — colourful & vibrant */}
      <Image
        src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1920&q=80"
        alt="Aerial view of colourful shipping containers"
        fill
        className="object-cover object-center"
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-brand-navy/78" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center px-6 py-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-200 text-sm font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
