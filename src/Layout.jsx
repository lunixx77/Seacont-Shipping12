import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans antialiased">
      {/* Fixed navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/95 py-2"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a02208cf7c35caa743d548/0ee7bd710_image001.jpg"
              alt="Seacont Shipping LLC"
              className="h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-[#0B1D3A]/70 hover:text-[#0B1D3A] text-sm font-medium tracking-wide transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:s.kovacevic@seacont.ch"
              className="ml-2 px-5 py-2 text-sm font-medium text-white bg-[#0B1D3A] rounded-full hover:bg-[#0E7C86] transition-colors duration-300"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#0B1D3A]/70 hover:text-[#0B1D3A] p-2"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="block text-[#0B1D3A]/70 hover:text-[#0B1D3A] text-base font-medium transition-colors w-full text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="mailto:s.kovacevic@seacont.ch"
                  className="inline-block mt-2 px-6 py-2.5 text-sm font-medium text-white bg-[#0B1D3A] rounded-full"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
}