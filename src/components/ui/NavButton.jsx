import React, { useState, useCallback, useRef } from "react";

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

export default function NavButton({ label, onClick, className = "" }) {
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

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className={`relative overflow-visible px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-[#0B1D3A] hover:text-white ${className}`}
    >
      {label}
      {particles.map((p) => (
        <Particle key={p.id} x={p.x} y={p.y} color={p.color} />
      ))}
    </button>
  );
}
