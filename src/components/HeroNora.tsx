"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Menu, ChevronLeft, ChevronRight, X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroNora() {
  const containerRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const noraTextRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    // Animações de entrada do Hero
    const heroTl = gsap.timeline({ delay: 0.3 });

    // Imagem faz zoom suave
    heroTl.fromTo(heroImageRef.current, 
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Título aparece de baixo
    heroTl.fromTo(heroTextRef.current?.querySelector("h1"), 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.8"
    );

    // Parágrafo aparece
    heroTl.fromTo(heroTextRef.current?.querySelector("p"), 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // Botão aparece
    heroTl.fromTo(heroTextRef.current?.querySelector("button"), 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // Parallax na imagem ao scrollar
    gsap.to(heroImageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Timeline para transição entre seções
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
      },
    });

    // Seção 1 desaparece
    tl.to(heroSectionRef.current, {
      opacity: 0,
      y: -100,
      duration: 1,
    }, 0);

    // Seção 2 (vídeo) aparece
    tl.fromTo(videoSectionRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
      0.3
    );

    // Texto "Rode a Nora" aparece
    tl.fromTo(noraTextRef.current, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 },
      0.8
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
      
      {/* ==================== SEÇÃO 1: HERO COM FOTO ==================== */}
      <div 
        ref={heroSectionRef}
        className="absolute inset-0 w-full h-full"
      >
        {/* Container para a Imagem de Fundo com Parallax */}
        <div 
          ref={heroImageRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-full min-h-full aspect-[1195/896] flex items-center justify-center pointer-events-none opacity-0"
        >
          {/* A foto do restaurante */}
          <img 
            src="/casa-da-nova-bg.png" 
            alt="Restaurante Casa da Nora" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 z-0" />
        </div>

        {/* Texto do Hero */}
        <div 
          ref={heroTextRef}
          className="absolute top-[30%] left-[5%] md:left-[10%] z-20 flex flex-col items-start max-w-2xl text-white pointer-events-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 drop-shadow-lg uppercase opacity-0">
            Hotel Rural &<br /> Restaurante
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-10 drop-shadow-md text-white/90 opacity-0">
            Às portas de Leiria, na localidade das Cortes, descubra o cómodo encanto da Casa da Nora, um espaço de poetas e pintores junto ao Rio Lis.
          </p>
          <button className="px-8 py-3 bg-[#8b6b4a] text-sm font-bold tracking-widest uppercase rounded hover:bg-[#6e5337] transition-colors shadow-lg opacity-0">
            Reservar Agora
          </button>
        </div>
      </div>

      {/* ==================== SEÇÃO 2: VÍDEO DA NORA ==================== */}
      <div 
        ref={videoSectionRef}
        className="absolute inset-0 w-full h-full opacity-0"
      >
        {/* Vídeo de fundo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/nora-real-photo.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/nora-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradiente para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

        {/* Texto "Rode a Nora" */}
        <div 
          ref={noraTextRef}
          className="absolute top-[40%] left-[8%] md:left-[15%] z-20 flex flex-col items-start gap-6 text-white opacity-0 pointer-events-auto"
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
