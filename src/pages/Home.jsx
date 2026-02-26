import React from "react";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import ServicesSection from "../components/services/ServicesSection";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}