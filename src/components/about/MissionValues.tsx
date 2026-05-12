import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    icon: "🤝",
    title: "Integrity",
    description:
      "We operate with full transparency — no hidden fees, no surprises. Our clients trust us because we earn it every day.",
  },
  {
    icon: "⏱️",
    title: "Reliability",
    description:
      "Deadlines matter in logistics. We deliver on our commitments, even when circumstances are challenging.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We continuously invest in technology and process improvements to give our clients a competitive edge.",
  },
  {
    icon: "🎯",
    title: "Customer Focus",
    description:
      "Every solution we build is tailored to the specific needs of our clients. Your success is our success.",
  },
];

export default function MissionValues() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-2xl p-8 md:p-12 mb-16 text-center">
          <p className="text-brand-sky font-semibold uppercase tracking-widest text-sm mb-4">
            Our Mission
          </p>
          <p className="text-2xl md:text-3xl font-bold leading-relaxed max-w-3xl mx-auto">
            &ldquo;To empower global trade by delivering logistics solutions that are seamless,
            sustainable, and built on lasting partnerships.&rdquo;
          </p>
        </div>

        <SectionHeader
          title="Our Core Values"
          subtitle="The principles that guide every decision we make."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm text-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-semibold text-brand-navy text-lg mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
