import Image from "next/image";
import { company } from "@/data/company";

export default function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-blue font-semibold uppercase tracking-widest text-sm mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Six Years of Moving the World
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in {company.founded}, Dragontop International Trade Limited was established
                in Hong Kong with a clear mission: to make international trade accessible,
                transparent, and reliable for businesses of all sizes.
              </p>
              <p>
                In six years, we have rapidly expanded our network across more than 50 countries,
                building strong partnerships with leading carriers, customs authorities, and
                logistics operators worldwide. Today, we handle over 10,000 shipments annually,
                spanning air, sea, and land freight.
              </p>
              <p>
                Our growth is driven by a simple belief — that great logistics is built on trust,
                precision, and people. Every shipment we handle represents a relationship we
                honour.
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=80"
              alt="Logistics operations"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-brand-navy/90 text-white px-4 py-2 rounded-lg text-sm font-medium">
              📍 Tsim Sha Tsui, Hong Kong
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
