"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function NoraAnimation() {
  const containerRef = useRef<HTMLElement>(null);
  const wheelRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Rotação 2D pura e simples, mas ajustada para ser realista
    gsap.to(wheelRef.current, {
      rotation: -360, // Girar no sentido anti-horário (normal para a direção do rio)
      repeat: -1,
      ease: "none",
      duration: 30, // Rotação majestosa e lenta, típica de uma nora pesada
      transformOrigin: "center center"
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="nora"
      className="relative w-full h-screen overflow-hidden bg-[#e0d8c3]"
    >
      {/* Imagem de fundo real do restaurante */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/restaurant-bg.jpg" 
          alt="Restaurante Casa da Nora" 
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0" />
      </div>

      {/* Título Principal */}
      <div className="absolute top-[15%] left-[5%] md:left-[10%] z-20 text-white drop-shadow-lg pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-serif mb-4">Casa da Nora</h1>
        <p className="text-xl md:text-2xl font-light max-w-md">Uma experiência gastronómica única sobre as águas do Rio Lis.</p>
      </div>

      {/* A Roda 2D perfeitamente posicionada no canal da água */}
      {/* Ajustado o 'right' e 'bottom' para coincidir com o buraco entre a parede e o pilar de pedra */}
      <div className="absolute bottom-[2%] right-[2%] md:bottom-[5%] md:right-[5%] z-10 w-[50vmin] h-[50vmin] max-w-[450px] max-h-[450px]">
        <img 
          ref={wheelRef}
          src="/nora-wheel.png" 
          alt="Roda da Nora" 
          className="w-full h-full object-contain"
        />
        
        {/* Sombra da nora projetada na parede/água para dar profundidade 2D */}
        <div className="absolute inset-0 bg-black/20 rounded-full blur-2xl -z-10 translate-x-4 translate-y-4" />
        
        {/* Efeito de neblina/água apenas na parte de baixo onde toca no rio */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[30%] bg-gradient-to-t from-white/30 to-transparent blur-xl mix-blend-screen pointer-events-none" />
      </div>
    </section>
  );
}
