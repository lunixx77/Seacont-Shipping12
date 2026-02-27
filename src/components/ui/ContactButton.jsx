import React, { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

function Particle({ x, y, color }) {
  const angle = Math.random() * Math.PI * 2;
  const distance = 30 + Math.random() * 50;
  const tx = Math.cos(angle) * distance;
  const ty = Math.sin(angle) * distance;
  const size = 3 + Math.random() * 5;

  return (
    <span
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: color,
        transform: "translate(-50%, -50%)",
        animation: "particle-burst 0.6s ease-out forwards",
        "--tx": `${tx}px`,
        "--ty": `${ty}px`,
      }}
    />
  );
}

export default function ContactButton({ variant = "dark", className = "", onClick }) {
  const [particles, setParticles] = useState([]);
  const counterRef = useRef(0);

  const handleMouseEnter = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const batch = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + counterRef.current + i,
      x: cx + (Math.random() - 0.5) * rect.width * 0.5,
      y: cy + (Math.random() - 0.5) * rect.height * 0.4,
      color: "#0E7C86",
    }));
    counterRef.current += 8;

    setParticles(batch);
    setTimeout(() => setParticles([]), 700);
  }, []);

  const base =
    variant === "outline"
      ? "px-7 py-3 border border-white/25 text-white text-sm font-medium hover:border-white/50 text-center"
      : variant === "pill"
        ? "px-5 py-2 text-sm font-medium text-white bg-[#0B1D3A] rounded-full hover:bg-[#0E7C86]"
        : variant === "pill-mobile"
          ? "inline-block mt-2 px-6 py-2.5 text-sm font-medium text-white bg-[#0B1D3A] rounded-full"
          : "px-7 py-3 bg-[#0E7C86] text-white text-sm font-medium hover:bg-[#0a6670]";

  return (
    <Link
      to="/contact"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className={`relative overflow-visible transition-all duration-200 hover:scale-105 active:scale-95 ${base} ${className}`}
    >
      Contact Us
      {particles.map((p) => (
        <Particle key={p.id} x={p.x} y={p.y} color={p.color} />
      ))}
    </Link>
  );
}
