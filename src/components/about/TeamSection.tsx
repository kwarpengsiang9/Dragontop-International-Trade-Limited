import SectionHeader from "@/components/ui/SectionHeader";
import { team } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Meet Our Leadership"
          subtitle="Experienced professionals dedicated to delivering excellence in global logistics."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-brand-blue/10 border-2 border-brand-blue/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="font-semibold text-brand-navy text-lg mb-1">{member.name}</h3>
              <p className="text-brand-blue text-sm font-medium mb-3">{member.title}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
