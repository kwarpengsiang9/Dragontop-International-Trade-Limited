import type { Service } from "@/types";
import { ServiceIcon } from "@/components/ui/ServiceIcons";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5 text-brand-blue">
        <ServiceIcon id={service.id} />
      </div>
      <h3 className="text-xl font-semibold text-brand-navy mb-3">{service.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.description}</p>
      <ul className="space-y-2">
        {service.details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="text-brand-blue mt-0.5">✓</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
