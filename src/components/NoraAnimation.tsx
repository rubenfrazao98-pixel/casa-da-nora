"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function NoraAnimation() {
  const containerRef = useRef<HTMLElement>(null);
  const waterRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // ===== ONDULAÇÃO DA ÁGUA =====
    gsap.to(waterRef.current, {
      x: 8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    if (waterRef.current?.nextElementSibling) {
      gsap.to(waterRef.current.nextElementSibling, {
        x: -6,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }

    // ===== SCROLL REVEAL =====
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });

    tl.fromTo(contentRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="nora"
      className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a]"
    >
      {/* ===== FUNDO DE VÍDEO ===== */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/nora-real-photo.jpg"
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/nora-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
      </div>

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
        <div ref={contentRef} className="text-center max-w-4xl mx-auto">
          {/* Badge temático */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-white/70 text-sm tracking-wider uppercase font-light">
              A Nossa História
            </span>
          </div>

          {/* Título principal */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Tradição<br />
            <span className="text-[#d4af37]">junto ao Rio Lis</span>
          </h2>
          
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Uma antiga azenha recuperada, onde a roda de água ainda gira 
            ao som do rio. Um refúgio que combina a sobriedade da arquitetura 
            tradicional com o conforto moderno.
          </p>

          {/* Setas de navegação */}
          <div className="flex items-center justify-center gap-4">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-white/30 text-xs tracking-widest uppercase">Galeria</span>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ===== EFEITO DE ÁGUA NA BASE ===== */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none overflow-hidden">
        <div 
          ref={waterRef}
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(100, 180, 255, 0.15) 50%, rgba(100, 180, 255, 0.08) 100%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: 'linear-gradient(180deg, transparent 30%, rgba(100, 180, 255, 0.1) 100%)',
            maskImage: 'linear-gradient(90deg, transparent 10%, black 30%, black 70%, transparent 90%)',
          }}
        />
        <div className="absolute bottom-4 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="absolute bottom-8 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ===== DECORAÇÃO: ARCO ===== */}
      <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-white/5 rounded-tl-[100px] pointer-events-none z-10" />
      
      <div className="absolute bottom-10 left-10 w-16 h-[1px] bg-gradient-to-r from-[#d4af37]/50 to-transparent pointer-events-none z-10" />

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none">
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
