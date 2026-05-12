import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import GlobalReachBanner from "@/components/home/GlobalReachBanner";
import ServicesPreview from "@/components/home/ServicesPreview";

export const metadata: Metadata = {
  title: "Dragontop International Trade Limited — Global Logistics Solutions",
  description:
    "Connecting the world through seamless logistics. Freight forwarding, customs clearance, warehousing, and more.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <GlobalReachBanner />
      <ServicesPreview />

      <section className="py-20 bg-brand-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Streamline Your Supply Chain?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Talk to our logistics experts and get a tailored solution for your business today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-brand-blue font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </>
  );
}
