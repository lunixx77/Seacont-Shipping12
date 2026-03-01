import React from "react";
import LeadershipSection from "@/components/leadership/LeadershipSection";
import Footer from "@/components/footer/Footer";

export default function Historie() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pt-16">
        <LeadershipSection />
      </div>
      <Footer />
    </div>
  );
}
