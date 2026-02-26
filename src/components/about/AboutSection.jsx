import React from "react";

const facts = [
  { label: "Founded", value: "2018" },
  { label: "Employees", value: "11–50" },
  { label: "Headquarters", value: "Belgrade" },
  { label: "Speciality", value: "Sea Freight / Container" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-28 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-l-2 border-[#0E7C86] pl-6 mb-14">
          <p className="text-xs text-[#0E7C86] font-semibold tracking-widest uppercase mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D3A]">
            Who We Are
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Text — wider column */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-gray-700 leading-relaxed">
              Seacont Shipping LLC was founded in 2018, focusing on servicing B2B channels. Our customised solutions exceed our customers' expectations by providing solutions to further enhance their business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We offer back-up services, customized logistic solutions, and are specialised in seafreight transportation and IT projects. We work closely with our clients in a true working partnership, with the philosophy of being agile and nimble to exceed expectations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our culture is to provide excellent customer service, leverage the latest technologies, and offer flexibility to all customers — which differentiates Seacont Shipping from other providers. We guarantee to deliver value at the most competitive price.
            </p>
          </div>

          {/* Facts — narrower column */}
          <div className="md:col-span-2 divide-y divide-gray-100 border border-gray-100">
            {facts.map((fact) => (
              <div key={fact.label} className="px-6 py-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{fact.label}</p>
                <p className="text-[#0B1D3A] font-semibold">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}