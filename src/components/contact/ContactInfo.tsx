import { company } from "@/data/company";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-brand-navy text-lg mb-4">Get In Touch</h3>
        <ul className="space-y-4 text-slate-600">
          <li className="flex items-start gap-3">
            <span className="text-xl mt-0.5">📍</span>
            <div>
              <p className="font-medium text-slate-800">Address</p>
              <p className="text-sm">{company.address}</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl mt-0.5">✉️</span>
            <div>
              <p className="font-medium text-slate-800">Email</p>
              <p className="text-sm">{company.email}</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl mt-0.5">🕐</span>
            <div>
              <p className="font-medium text-slate-800">Business Hours</p>
              <p className="text-sm">{company.businessHours}</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-slate-100 rounded-xl h-52 flex items-center justify-center">
        <div className="text-center text-slate-400">
          <div className="text-4xl mb-2">🗺️</div>
          <p className="text-sm">Map — Shenzhen, China</p>
        </div>
      </div>
    </div>
  );
}
