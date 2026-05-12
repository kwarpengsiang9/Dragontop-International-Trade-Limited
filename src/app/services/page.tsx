import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From freight forwarding to supply chain consulting — explore the full range of logistics services offered by Dragontop International.",
};

function PageHero() {
  return (
    <div className="relative bg-brand-navy text-white py-20 md:py-28 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
        alt="Warehouse and logistics operations"
        fill
        className="object-cover object-center opacity-20"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-2">
          What We Offer
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="text-blue-200 mt-4 text-lg max-w-xl">
          End-to-end logistics solutions for every stage of your supply chain.
        </p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Comprehensive Logistics Solutions"
            subtitle="We offer a full suite of services to manage every step of your supply chain — from origin to destination."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
          alt="Cargo airplane"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-navy/85" />
        <div className="relative max-w-2xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Custom Logistics Solution?
          </h2>
          <p className="text-blue-200 mb-8">
            Our team of experts is ready to design a solution tailored to your specific trade
            requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-brand-sky text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-brand-navy transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}
