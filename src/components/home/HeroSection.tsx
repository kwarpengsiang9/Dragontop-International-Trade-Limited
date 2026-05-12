import Image from "next/image";
import Button from "@/components/ui/Button";
import { company } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="relative text-white py-32 md:py-44 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80"
        alt="Shipping port with cargo containers"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-brand-sky font-semibold text-sm uppercase tracking-widest mb-4">
            International Trade &amp; Logistics
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {company.tagline}
          </h1>
          <p className="text-blue-200 text-lg md:text-xl mb-10 leading-relaxed">
            From freight forwarding to customs clearance, {company.shortName} delivers
            end-to-end logistics solutions that keep global trade moving — reliably,
            efficiently, and on time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/services" variant="primary" className="text-base px-8 py-4">
              Our Services
            </Button>
            <Button href="/contact" variant="outline" className="text-base px-8 py-4">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
