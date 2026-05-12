import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dragontop International Trade Limited for freight inquiries, customs support, or a custom logistics quote.",
};

function PageHero() {
  return (
    <div className="relative bg-brand-navy text-white py-20 md:py-28 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
        alt="Business communication"
        fill
        className="object-cover object-center opacity-20"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-2">
          Let&apos;s Talk
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="text-blue-200 mt-4 text-lg max-w-xl">
          Our team is ready to assist with your logistics needs. Reach out and we&apos;ll respond within 1 business day.
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-2">Send Us a Message</h2>
              <p className="text-slate-600 text-sm mb-8">
                Fill in the form below and our team will respond within 1 business day.
              </p>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
