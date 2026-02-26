import React from "react";
import { Mail, MapPin, Building2 } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-28 bg-[#0B1D3A] scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-l-2 border-[#0E7C86] pl-6 mb-14">
          <p className="text-xs text-[#0E7C86] font-semibold tracking-widest uppercase mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-white/60 leading-relaxed mb-8">
              For further information about our services and how we can support your business, please feel free to contact us directly.
            </p>
            <a
              href="mailto:s.kovacevic@seacont.ch"
              className="inline-flex items-center gap-3 px-7 py-3 bg-[#0E7C86] text-white text-sm font-medium hover:bg-[#0a6670] transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              Send an Email
            </a>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-4 h-4 text-[#0E7C86] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:s.kovacevic@seacont.ch" className="text-white hover:text-[#0E7C86] transition-colors text-sm">
                  s.kovacevic@seacont.ch
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-[#0E7C86] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Headquarters</p>
                <p className="text-white text-sm">Belgrade, Serbia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Building2 className="w-4 h-4 text-[#0E7C86] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Industry</p>
                <p className="text-white text-sm">Maritime Transportation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}