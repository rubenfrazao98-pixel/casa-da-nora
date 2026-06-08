"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animação da roda
    if (wheelRef.current) {
      gsap.to(wheelRef.current, {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "none",
      });
    }

    // Barra de progresso
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        return next > 100 ? 100 : next;
      });
    }, 200);

    // Fim do loading
    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);

      // Fade out
      setTimeout(() => {
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => setIsLoading(false),
          });
        }
      }, 400);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1a1a1a]"
    >
      {/* Roda da Nora SVG */}
      <div ref={wheelRef} className="mb-8">
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Círculo externo */}
          <circle cx="50" cy="50" r="45" stroke="#8b6b4a" strokeWidth="2" fill="none" opacity="0.5" />
          
          {/* Raios da roda */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 35 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
              stroke="#8b6b4a"
              strokeWidth="1.5"
              opacity={0.6}
            />
          ))}
          
          {/* Anel interno */}
          <circle cx="50" cy="50" r="20" stroke="#8b6b4a" strokeWidth="1.5" fill="none" opacity="0.4" />
          
          {/* Centro */}
          <circle cx="50" cy="50" r="5" fill="#8b6b4a" />
          
          {/* Círculo externo (mais visível) */}
          <circle cx="50" cy="50" r="42" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.3" />
        </svg>
      </div>

      {/* Texto */}
      <div ref={textRef} className="text-center">
        <h2 className="font-serif text-2xl text-white mb-2">Casa da Nora</h2>
        <p className="text-sm text-white/50">Restaurante & Hotel Rural</p>
      </div>

      {/* Barra de progresso */}
      <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-[#8b6b4a] to-[#d4af37] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
