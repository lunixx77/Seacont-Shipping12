import React from "react";
import ContactButton from "@/components/ui/ContactButton";

export default function HeroSection() {
  const scrollToAbout = () => {
    const target = document.getElementById("about");
    if (!target) return;

    const headerOffset = 96;
    const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#0B1D3A]">
      {/* Container ship background */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A]/70 via-[#0B1D3A]/45 to-[#0B1D3A] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pointer-events-auto">
        <p className="text-[#0E7C86] text-sm font-medium tracking-widest uppercase mb-6">
          Sea Freight · Container Shipping · B2B Logistics
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-3xl">
          Seacont Shipping LLC
        </h1>
        <p className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed">
          Your dedicated B2B partner for container shipping and sea freight — delivering reliable, customised solutions at competitive rates.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={scrollToAbout}
            className="px-7 py-3 bg-[#0E7C86] text-white text-sm font-medium hover:bg-[#0a6670] transition-colors duration-200"
          >
            Learn More
          </button>
          <ContactButton variant="outline" />
        </div>
      </div>
    </section>
  );
}