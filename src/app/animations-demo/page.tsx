"use client";

import AnimatedText from "@/components/AnimatedText";
import MagneticButton from "@/components/MagneticButton";

export default function AnimationsDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-800 flex flex-col items-center justify-center p-8 gap-12">
      <h1 className="text-white text-2xl font-bold mb-8">
        Demo de Animações GSAP
      </h1>

      {/* Texto Animado */}
      <div className="text-center">
        <AnimatedText 
          text="Casa da Nora" 
          className="text-5xl md:text-7xl font-bold text-gold"
          delay={0.2}
        />
        <AnimatedText 
          text="Hotel & Spa" 
          className="text-3xl md:text-4xl text-white/80 mt-4"
          delay={0.8}
        />
      </div>

      {/* Botões Magnéticos */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <MagneticButton className="bg-gold text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-400 transition-colors">
          Reservar Quarto
        </MagneticButton>
        
        <MagneticButton className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
          Ver Quartos
        </MagneticButton>
        
        <MagneticButton className="bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm border border-white/20">
          Contactar
        </MagneticButton>
      </div>

      {/* Instruções */}
      <div className="mt-12 text-white/60 text-sm text-center max-w-md">
        <p>✨ move o rato sobre os botões para ver o efeito magnético</p>
        <p>🎬 o texto aparece letra a letra com animação 3D</p>
      </div>
    </div>
  );
}
