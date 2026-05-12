import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/ui/ServiceIcons";
import { services } from "@/data/services";

export default function ServicesPreview() {
  const preview = services.slice(0, 4);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Core Services"
          subtitle="Comprehensive logistics solutions designed to meet the demands of modern international trade."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {preview.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5 text-brand-blue">
                <ServiceIcon id={service.id} />
              </div>
              <h3 className="font-semibold text-brand-navy text-lg mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-navy transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
