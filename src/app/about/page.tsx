import type { Metadata } from "next";
import Image from "next/image";
import CompanyStory from "@/components/about/CompanyStory";
import MissionValues from "@/components/about/MissionValues";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dragontop International Trade Limited — our story, mission, values, and the team behind our global logistics success.",
};

function PageHero() {
  return (
    <div className="relative bg-brand-navy text-white py-20 md:py-28 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
        alt="Team working on logistics operations"
        fill
        className="object-cover object-center opacity-20"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-2">
          Company
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="text-blue-200 mt-4 text-lg max-w-xl">
          Six years of excellence in international trade and logistics, headquartered in Hong Kong.
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <CompanyStory />
      <MissionValues />
      <TeamSection />
    </>
  );
}
