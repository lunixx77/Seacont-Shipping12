import React from "react";
import { Container, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Container,
    title: "Customised Solutions",
    description: "Every client has unique needs. We design bespoke workflows for B2B clients, maximising efficiency and reducing costs."
  },
  {
    icon: ShieldCheck,
    title: "Back-up Services",
    description: "When things don't go as planned, we do. Our back-up services ensure alternative routing, emergency capacity, and continuous support to keep your supply chain running."
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-28 bg-gray-50 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-l-2 border-[#0E7C86] pl-6 mb-14">
          <p className="text-xs text-[#0E7C86] font-semibold tracking-widest uppercase mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D3A]">
            What We Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gray-200">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 md:p-10"
            >
              <service.icon className="w-6 h-6 text-[#0E7C86] mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-[#0B1D3A] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}