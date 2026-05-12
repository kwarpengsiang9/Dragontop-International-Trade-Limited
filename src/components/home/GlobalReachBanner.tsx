import Image from "next/image";

export default function GlobalReachBanner() {
  return (
    <section className="relative h-72 md:h-96 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80"
        alt="Global cargo ship at sea"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <p className="text-white text-2xl md:text-3xl font-bold">
          Trusted across <span className="text-brand-sky">50+ countries</span> — from Hong Kong to the world.
        </p>
      </div>
    </section>
  );
}
