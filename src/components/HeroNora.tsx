"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, ChevronLeft, ChevronRight, X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function HeroNora() {
  const containerRef = useRef<HTMLElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const noraTextRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    // Animação de entrada do vídeo
    gsap.fromTo(videoSectionRef.current, 
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.3 }
    );

    // Texto "Tradição" aparece
    gsap.fromTo(noraTextRef.current, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 1 }
    );

  }, { scope: containerRef });

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Fechar menu
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setIsMenuOpen(false),
      });
    } else {
      // Abrir menu
      setIsMenuOpen(true);
      gsap.fromTo(mobileMenuRef.current, 
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power2.inOut" }
      );
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#1a1a1a] overflow-hidden">
      
      {/* ==================== VÍDEO DA NORA - TELA INTEIRA ==================== */}
      <div 
        ref={videoSectionRef}
        className="absolute inset-0 w-full h-full"
      >
        {/* Vídeo de fundo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/nora-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradiente para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

        {/* Texto "Rode a Nora" */}
        <div 
          ref={noraTextRef}
          className="absolute top-[40%] left-[8%] md:left-[15%] z-20 flex flex-col items-start gap-6 text-white pointer-events-auto"
        >
          <span className="text-sm font-bold tracking-widest uppercase drop-shadow-lg">
            A Nossa História
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight drop-shadow-lg">
            Tradição<br />junto ao Rio Lis
          </h2>
          <p className="text-lg font-light max-w-md drop-shadow-md text-white/90">
            Uma antiga azenha recuperada que combina a sobriedade da arquitetura tradicional com o conforto moderno.
          </p>
          <div className="flex gap-3 mt-4 drop-shadow-md">
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* ==================== HEADER ==================== */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-12 z-30 flex justify-between items-center text-white pointer-events-auto">
        <div className="text-sm tracking-widest uppercase font-medium">
          Restaurante & Hotel <br />
          <span className="font-serif text-2xl font-bold capitalize">Casa da Nora</span>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
          <a href="#nora" className="hover:text-[#d4af37] transition-colors">A Roda</a>
          <a href="#quartos" className="hover:text-[#d4af37] transition-colors">Quartos</a>
          <a href="#restaurante" className="hover:text-[#d4af37] transition-colors">Restaurante</a>
          <a href="#contactos" className="hover:text-[#d4af37] transition-colors">Contactos</a>
          <button className="px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">
            Menu
          </button>
        </nav>

        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <Menu className="w-8 h-8" />
        </button>
      </header>

      {/* ==================== MOBILE MENU ==================== */}
      {isMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-[#2c2825] z-50 flex flex-col p-8 md:hidden"
        >
          <button 
            className="self-end text-white mb-8"
            onClick={toggleMenu}
          >
            <X className="w-8 h-8" />
          </button>
          
          <nav className="flex flex-col gap-6 text-white">
            <a href="#nora" className="text-xl font-serif hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              A Roda
            </a>
            <a href="#quartos" className="text-xl font-serif hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Quartos
            </a>
            <a href="#restaurante" className="text-xl font-serif hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Restaurante
            </a>
            <a href="#contactos" className="text-xl font-serif hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Contactos
            </a>
            <button className="mt-4 px-6 py-3 bg-[#8b6b4a] text-white text-sm font-bold tracking-widest uppercase rounded hover:bg-[#6e5337] transition-colors">
              Reservar
            </button>
          </nav>

          <div className="mt-auto pt-8 border-t border-white/20">
            <p className="text-sm text-white/70 mb-2">+351 244 891 189</p>
            <p className="text-sm text-white/70">geral@casadanora.pt</p>
          </div>
        </div>
      )}

      {/* Overlay escuro quando menu está aberto */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

    </section>
  );
}
