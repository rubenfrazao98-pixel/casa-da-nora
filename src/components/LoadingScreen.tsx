"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Espera a página carregar
    const timer = setTimeout(() => {
      // Começa a animação de fade out
      setOpacity(0);
      
      // Remove o loading screen depois da animação
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1a1a1a] transition-opacity duration-500"
      style={{ opacity }}
    >
      {/* Logo/Texto animado */}
      <div className="flex flex-col items-center gap-4">
        {/* Animação da roda */}
        <div className="relative w-20 h-20">
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full animate-spin-slow"
            style={{ animationDuration: "3s" }}
          >
            <circle 
              cx="50" cy="50" r="40" 
              fill="none" 
              stroke="#8b6b4a" 
              strokeWidth="2"
              strokeDasharray="8 4"
            />
            <circle 
              cx="50" cy="50" r="25" 
              fill="none" 
              stroke="#8b6b4a" 
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <circle 
              cx="50" cy="50" r="8" 
              fill="#8b6b4a"
            />
          </svg>
        </div>

        {/* Texto */}
        <h1 className="text-2xl font-serif text-white tracking-widest">
          CASA DA NORA
        </h1>
        <p className="text-xs text-white/60 tracking-[0.3em] uppercase">
          Restaurante & Hotel
        </p>
      </div>

      {/* Barra de carregamento */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/20 overflow-hidden">
        <div className="h-full bg-[#8b6b4a] animate-loading-bar" />
      </div>
    </div>
  );
}
