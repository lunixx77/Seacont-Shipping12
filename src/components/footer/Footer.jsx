import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#071428] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a02208cf7c35caa743d548/0ee7bd710_image001.jpg"
            alt="Seacont Shipping LLC"
            className="h-8 w-auto object-contain brightness-0 invert opacity-70"
          />
        </div>
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Seacont Shipping LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}