import React from "react";
import { Ship, Container, Monitor, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Sea Freight Transportation",
    description: "Our core competency: FCL (Full Container Load) and LCL (Less than Container Load) shipments via sea. We manage the entire process — booking, documentation, customs coordination, and delivery."
  },
  {
    icon: Container,
    title: "Customised Logistics Solutions",
    description: "Every client has unique needs. We design bespoke logistics workflows for B2B clients, optimising routes, carriers, and transit times to maximise efficiency and reduce costs."
  },
  {
    icon: Monitor,
    title: "IT Projects",
    description: "We bridge the gap between shipping operations and technology. From freight management systems to tracking integrations, we support the digital transformation of your logistics."
  },
  {
    icon: ShieldCheck,
    title: "Back-up Services",
    description: "When things don't go as planned, we do. Our back-up services ensure alternative routing, emergency capacity, and continuous support to keep your supply chain running."
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-28 bg-gray-50">
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