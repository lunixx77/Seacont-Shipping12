import React from "react";
import seacontLogo from "@/assets/seacont-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#071428] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={seacontLogo}
            alt="Seacont Shipping LLC"
            className="h-10 w-auto object-contain"
          />
        </div>
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Seacont Shipping LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}