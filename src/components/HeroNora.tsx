"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroNora() {
  const containerRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    // Animação de entrada
    const heroTl = gsap.timeline({ delay: 0.3 });

    // Foto com zoom suave
    heroTl.fromTo(heroImageRef.current,
      { scale: 1.15, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" }
    );

    // Título
    const h1 = heroTextRef.current?.querySelector("h1");
    if (h1) {
      heroTl.fromTo(h1,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
        "-=1.0"
      );
    }

    // Parágrafo
    const p = heroTextRef.current?.querySelector("p");
    if (p) {
      heroTl.fromTo(p,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }

    // Botão
    const btn = heroTextRef.current?.querySelector("button");
    if (btn) {
      heroTl.fromTo(btn,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );
    }

    // Parallax na imagem ao scroll
    gsap.to(heroImageRef.current, {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Overlay escurece ligeiramente ao scroll
    gsap.to(".hero-overlay", {
      opacity: 0.6,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

  }, { scope: containerRef });

  const toggleMenu = () => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => setIsMenuOpen(false),
      });
    } else {
      setIsMenuOpen(true);
      gsap.fromTo(mobileMenuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power2.inOut" }
      );
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#1a1a1a] overflow-hidden">
      
      {/* ===== IMAGEM DE FUNDO COM PARALLAX ===== */}
      <div 
        ref={heroImageRef}
        className="absolute inset-0 w-full h-full opacity-0"
      >
        <img 
          src="/casa-da-nova-bg.png" 
          alt="Restaurante Casa da Nora" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
      </div>

      {/* ===== CONTEÚDO ===== */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 z-10">
        <div ref={heroTextRef} className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-white/60 text-xs tracking-wider uppercase">
              Restaurante & Hotel Rural
            </span>
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6 opacity-0">
            Casa da Nora
          </h1>

          <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-10 font-light opacity-0">
            Às portas de Leiria, nas margens do Rio Lis, um refúgio de charme 
            onde a história e a natureza se encontram.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 opacity-0">
            <button className="px-8 py-3 bg-[#8b6b4a] text-white text-sm font-bold tracking-widest uppercase rounded-lg hover:bg-[#6e5337] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
              Reservar Agora
            </button>
            <button className="px-8 py-3 border border-white/30 text-white/80 text-sm font-bold tracking-widest uppercase rounded-lg hover:bg-white/10 hover:text-white transition-all">
              Saber Mais
            </button>
          </div>
        </div>
      </div>

      {/* ===== HEADER ===== */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-10 z-30 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <div className="text-sm tracking-widest uppercase font-light text-white/60">
            <span className="font-serif text-xl md:text-2xl font-bold text-white">Casa da Nora</span>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
          <a href="#nora" className="text-white/70 hover:text-[#d4af37] transition-colors">A Roda</a>
          <a href="#quartos" className="text-white/70 hover:text-[#d4af37] transition-colors">Quartos</a>
          <a href="#restaurante" className="text-white/70 hover:text-[#d4af37] transition-colors">Restaurante</a>
          <a href="#contactos" className="text-white/70 hover:text-[#d4af37] transition-colors">Contactos</a>
          <button className="px-6 py-2 bg-[#8b6b4a] text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#6e5337] transition-all shadow-lg hover:shadow-xl">
            Reservar
          </button>
        </nav>

        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <Menu className="w-7 h-7" />
        </button>
      </header>

      {/* ===== MOBILE MENU ===== */}
      {isMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-[#2c2825] z-50 flex flex-col p-8 md:hidden"
        >
          <button className="self-end text-white mb-8" onClick={toggleMenu}>
            <X className="w-7 h-7" />
          </button>
          
          <nav className="flex flex-col gap-6 text-white">
            <a href="#nora" className="text-lg font-serif hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              A Roda
            </a>
            <a href="#quartos" className="text-lg font-serif hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Quartos
            </a>
            <a href="#restaurante" className="text-lg font-serif hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Restaurante
            </a>
            <a href="#contactos" className="text-lg font-serif hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Contactos
            </a>
            <button onClick={toggleMenu} className="mt-4 px-6 py-3 bg-[#8b6b4a] text-white text-sm font-bold tracking-widest uppercase rounded-lg hover:bg-[#6e5337] transition-colors">
              Reservar
            </button>
          </nav>

          <div className="mt-auto pt-8 border-t border-white/20">
            <p className="text-sm text-white/70 mb-2">+351 244 891 189</p>
            <p className="text-sm text-white/70">geral@casadanora.pt</p>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMenu} />
      )}

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
