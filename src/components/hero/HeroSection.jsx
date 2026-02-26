import React from "react";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B1D3A]">
      {/* Subtle background image overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A]/60 via-transparent to-[#0B1D3A]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
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
            onClick={scrollToAbout}
            className="px-7 py-3 bg-[#0E7C86] text-white text-sm font-medium hover:bg-[#0a6670] transition-colors duration-200"
          >
            Learn More
          </button>
          <a
            href="mailto:s.kovacevic@seacont.ch"
            className="px-7 py-3 border border-white/25 text-white text-sm font-medium hover:border-white/50 transition-colors duration-200 text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}