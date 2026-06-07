"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function OptionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animação para os cards de opções
    gsap.utils.toArray(".animate-card").forEach((card) => {
      gsap.fromTo(card, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animação para a galeria
    gsap.utils.toArray(".gallery-item").forEach((item, i) => {
      gsap.fromTo(item, 
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animação para o footer
    gsap.fromTo(".footer-content", 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-content",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-[#fdfbf7]">
      
      {/* ==================== GALERIA DE FOTOS ==================== */}
      <div className="w-full py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2825] mb-4 text-center">
            A CASA DA NORA
          </h2>
          <p className="text-center text-[#2c2825]/70 mb-12 max-w-2xl mx-auto">
            Descubra os nossos espaços, desde quartos acolhedores até o restaurante com vista para o canal.
          </p>
          
          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="gallery-item col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <img 
                src="/casa-da-nova-bg.png" 
                alt="Casa da Nora - Exterior" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="gallery-item rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400&auto=format&fit=crop" 
                alt="Quarto" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="gallery-item rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=400&auto=format&fit=crop" 
                alt="Restaurante" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="gallery-item rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=400&auto=format&fit=crop" 
                alt="Piscina" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="gallery-item rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop" 
                alt="Jardim" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-[#8b6b4a] text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-[#6e5337] transition-colors shadow-md">
              Ver Galeria Completa
            </button>
          </div>
        </div>
      </div>

      {/* ==================== OPÇÕES ==================== */}
      <div className="w-full py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2825] mb-12 text-center">
            AS NOSSAS OPÇÕES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quartos */}
            <div className="animate-card flex flex-col group cursor-pointer">
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Quarto" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif text-[#2c2825] mb-3">Quartos</h3>
              <p className="text-[#2c2825]/70 mb-6">
                Quartos acolhedores com vista para o canal, decorados com character rústico e todas as comodidades modernas.
              </p>
              <button className="self-start px-8 py-3 bg-[#8b6b4a] text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-[#6e5337] transition-colors shadow-md flex items-center gap-2">
                Reservar <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Restaurante */}
            <div className="animate-card flex flex-col group cursor-pointer">
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Restaurante" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif text-[#2c2825] mb-3">Restaurante</h3>
              <p className="text-[#2c2825]/70 mb-6">
                Cozinha tradicional portuguesa com ingredientes frescos locais. Vista panorâmica para o canal e a nora histórica.
              </p>
              <button className="self-start px-8 py-3 bg-[#8b6b4a] text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-[#6e5337] transition-colors shadow-md flex items-center gap-2">
                Ver Menu <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== FOOTER COMPLETO ==================== */}
      <footer id="contactos" className="w-full bg-[#2c2825] text-[#e8e4db] py-16">
        <div className="footer-content max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Coluna 1: Info */}
            <div>
              <h3 className="text-xl font-serif mb-6 text-[#d4af37]">CASA DA NORA</h3>
              <p className="text-sm font-light leading-relaxed mb-6">
                Restaurante e hotel com caráter rústico clássico, situado junto ao canal das Cortes. Uma autêntica viagem pelo tempo no conforto dos nossos dias.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Coluna 2: Contactos */}
            <div>
              <h3 className="text-xl font-serif mb-6 text-[#d4af37]">CONTACTOS</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-[#d4af37]" />
                  <span>Largo José Marques da Cruz 6<br />2415-406 Cortes, Leiria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>+351 244 891 189</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <span>geral@casadanora.pt</span>
                </div>
              </div>
            </div>

            {/* Coluna 3: Horários */}
            <div>
              <h3 className="text-xl font-serif mb-6 text-[#d4af37]">HORÁRIOS</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-[#d4af37]" />
                  <div>
                    <p className="font-medium">Restaurante</p>
                    <p className="text-white/70">Terça a Domingo: 12:00 - 22:00</p>
                    <p className="text-white/70">Segunda: Encerrado</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-[#d4af37]" />
                  <div>
                    <p className="font-medium">Recepção</p>
                    <p className="text-white/70">24 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Linha de separação */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/50">
                © 2026 Casa da Nora. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-xs text-white/50">
                <a href="#" className="hover:text-[#d4af37] transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-[#d4af37] transition-colors">Termos e Condições</a>
                <a href="#" className="hover:text-[#d4af37] transition-colors">Livro de Reclamações</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
