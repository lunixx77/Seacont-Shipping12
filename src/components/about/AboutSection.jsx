import React from "react";

const facts = [
  { label: "Founded", value: "2018" },
  { label: "Employees", value: "5+" },
  { label: "Headquarters", value: "Belgrade" },
  { label: "Speciality", value: "Backup Services" },
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
              Seacont Shipping LLC was founded in 2018 with a clear vision: to create a reliable and agile back-services partner for B2B businesses.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The company was established in response to a growing demand for structured, dependable, and customer-focused operational support. We recognized that many businesses required more than just standard service providers — they needed a strong back-office partner who ensures continuity, stability, and efficiency behind the scenes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our motivation was simple: to build a company that combines industry expertise with flexibility, fast decision-making, and a proactive mindset. From the beginning, Seacont Shipping has been dedicated to delivering customized back-services solutions that enhance our clients' operational performance and support sustainable growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We work closely with our clients in a true partnership approach. By understanding their internal processes and individual requirements, we provide tailored support services and reliable back-up structures that allow them to focus on their core business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our philosophy is rooted in agility and responsiveness. We adapt quickly to changing demands and evolving business environments — always aiming to exceed expectations.
            </p>
            <p className="text-gray-700 leading-relaxed">What differentiates Seacont Shipping is our commitment to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-1">
              <li>Exceptional customer service</li>
              <li>Efficient and structured back-office support</li>
              <li>Flexible and scalable service models</li>
              <li>Competitive pricing with guaranteed value</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              At Seacont Shipping LLC, we operate as a trusted partner in the background — ensuring that our clients' operations run smoothly, reliably, and efficiently.
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