"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, Phone, Mail, Clock, ChevronRight, Wifi, Car, Utensils, Bed } from "lucide-react";

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
      
      {/* ==================== APRESENTAÇÃO ==================== */}
      <div className="w-full py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2825] mb-8">
            BEM-VINDO À CASA DA NORA
          </h2>
          <p className="text-lg text-[#2c2825]/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Às portas de Leiria, na localidade das Cortes, descubra o cómodo encanto da <strong>Casa da Nora</strong>, um espaço de poetas e pintores. 
            Por entre a harmonia das velhas casas agrícolas e o sereno serpentear do Rio Lis, convidamo-lo a viver momentos de lazer, 
            num espaço marcado pela sobriedade da casa, pelo verdejante jardim e pelos recantos que o espaço nos convida a descobrir.
          </p>
          <p className="text-lg text-[#2c2825]/80 max-w-3xl mx-auto leading-relaxed">
            Temos para lhe proporcionar um alojamento de superior qualidade, a tradição da gastronomia portuguesa e o requinte de um serviço informal, 
            tudo isto num ambiente discreto.
          </p>
        </div>
      </div>

      {/* ==================== GALERIA DE FOTOS ==================== */}
      <div className="w-full py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2825] mb-4 text-center">
            A CASA DA NORA
          </h2>
          <p className="text-center text-[#2c2825]/70 mb-12 max-w-2xl mx-auto">
            Um pequeno hotel rural com 13 unidades de alojamento, restaurante, piscina e jardim junto ao Rio Lis.
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

      {/* ==================== HOTEL ==================== */}
      <div id="quartos" className="w-full py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2825] mb-12 text-center">
            HOTEL RURAL
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-card">
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Quarto Casa da Nora" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="animate-card">
              <h3 className="text-2xl font-serif text-[#2c2825] mb-4">Conforto e Tradição</h3>
              <p className="text-[#2c2825]/70 mb-6 leading-relaxed">
                A Casa da Nora é um pequeno hotel rural, com um ambiente familiar e que dispõe de <strong>13 unidades de alojamento</strong>, 
                com uma capacidade máxima de 40 pessoas. Desde quartos duplos standard, a quartos familiares e suites, 
                todos eles se encontram equipados com TV, A/C, aquecimento, Wi-fi gratuito e WC privativo.
              </p>
              <p className="text-[#2c2825]/70 mb-6 leading-relaxed">
                Os quartos têm uma decoração suave e piso em parquet. Foi dada especial atenção aos detalhes, 
                principalmente ao extremo conforto e qualidade das camas, lençóis e toalhados…tudo para que se sinta bem!!!
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-[#2c2825]/70">
                  <Wifi className="w-4 h-4 text-[#8b6b4a]" />
                  <span>Wi-fi gratuito</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#2c2825]/70">
                  <Car className="w-4 h-4 text-[#8b6b4a]" />
                  <span>Estacionamento grátis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#2c2825]/70">
                  <Bed className="w-4 h-4 text-[#8b6b4a]" />
                  <span>Camas premium</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#2c2825]/70">
                  <Utensils className="w-4 h-4 text-[#8b6b4a]" />
                  <span>Ar condicionado</span>
                </div>
              </div>
              
              <button className="self-start px-8 py-3 bg-[#8b6b4a] text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-[#6e5337] transition-colors shadow-md flex items-center gap-2">
                Reservar Quarto <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== RESTAURANTE ==================== */}
      <div id="restaurante" className="w-full py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2825] mb-12 text-center">
            RESTAURANTE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-card order-2 md:order-1">
              <h3 className="text-2xl font-serif text-[#2c2825] mb-4">Gastronomia Portuguesa</h3>
              <p className="text-[#2c2825]/70 mb-6 leading-relaxed">
                O Restaurante Casa da Nora é um espaço familiar, que o convida a deixar-se encantar pela maravilhosa gastronomia 
                e pelo verdejante espaço exterior que se estende à beira-rio. Aqui as paredes exalam tranquilidade e harmonia, 
                sendo o ambiente ideal para encontros de negócios, momentos em família ou simplesmente para "fugir" do stress do seu dia-a-dia.
              </p>
              
              <div className="bg-[#fdfbf7] rounded-xl p-6 mb-6">
                <h4 className="font-serif text-lg text-[#2c2825] mb-4">Horários</h4>
                <div className="space-y-2 text-sm text-[#2c2825]/70">
                  <p><strong>Restaurante:</strong> 12h00 às 15h00 / 19h00 às 23h00</p>
                  <p><strong>Bar:</strong> 10h30 às 23h00</p>
                  <p><strong>Pequeno-Almoço:</strong> 08h00 às 10h30</p>
                  <p className="text-xs text-[#2c2825]/50 mt-2">Aberto todos os dias</p>
                </div>
              </div>
              
              <button className="self-start px-8 py-3 bg-[#8b6b4a] text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-[#6e5337] transition-colors shadow-md flex items-center gap-2">
                Ver Ementa <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="animate-card order-1 md:order-2">
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Restaurante Casa da Nora" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== PONTOS DE INTERESSE ==================== */}
      <div className="w-full py-24 px-6 bg-[#2c2825] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
            PONTOS DE INTERESSE
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            A Casa da Nora está perto das mais importantes atracções turísticas portuguesas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-card text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8b6b4a] flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl mb-2">Castelos</h3>
              <p className="text-white/70 text-sm">Leiria, Porto Mós e Ourém</p>
            </div>
            
            <div className="animate-card text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8b6b4a] flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl mb-2">Mosteiros</h3>
              <p className="text-white/70 text-sm">Batalha e Alcobaça</p>
            </div>
            
            <div className="animate-card text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8b6b4a] flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl mb-2">Santuário</h3>
              <p className="text-white/70 text-sm">Fátima</p>
            </div>
            
            <div className="animate-card text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8b6b4a] flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl mb-2">Parque Natural</h3>
              <p className="text-white/70 text-sm">Serra d'Aire e Candeeiros</p>
            </div>
            
            <div className="animate-card text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8b6b4a] flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl mb-2">Pinhal</h3>
              <p className="text-white/70 text-sm">Pinhal de Leiria</p>
            </div>
            
            <div className="animate-card text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8b6b4a] flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl mb-2">Praias</h3>
              <p className="text-white/70 text-sm">Nazaré, São Pedro de Moel, Vieira</p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== FOOTER COMPLETO ==================== */}
      <footer id="contactos" className="w-full bg-[#1a1a1a] text-[#e8e4db] py-16">
        <div className="footer-content max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Coluna 1: Info */}
            <div>
              <h3 className="text-xl font-serif mb-6 text-[#d4af37]">CASA DA NORA</h3>
              <p className="text-sm font-light leading-relaxed mb-6">
                Hotel rural e restaurante com caráter rústico clássico, situado junto ao Rio Lis em Cortes, Leiria. 
                Uma autêntica viagem pelo tempo no conforto dos nossos dias.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/CasaDaNora.Restaurante.Hotel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-all">
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
                  <span>Largo Poeta José Marques da Cruz, 8<br />2410-506 Cortes, Leiria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>+351 244 891 189</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>+351 919 703 731</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <span>geral@casadanora.com</span>
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
                    <p className="text-white/70">Almoço: 12h00 - 15h00</p>
                    <p className="text-white/70">Jantar: 19h00 - 23h00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-[#d4af37]" />
                  <div>
                    <p className="font-medium">Bar</p>
                    <p className="text-white/70">10h30 - 23h00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-[#d4af37]" />
                  <div>
                    <p className="font-medium">Pequeno-Almoço</p>
                    <p className="text-white/70">08h00 - 10h30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 4: Links */}
            <div>
              <h3 className="text-xl font-serif mb-6 text-[#d4af37]">EXPLORAR</h3>
              <div className="space-y-3 text-sm">
                <a href="#quartos" className="block text-white/70 hover:text-[#d4af37] transition-colors">Quartos</a>
                <a href="#restaurante" className="block text-white/70 hover:text-[#d4af37] transition-colors">Restaurante</a>
                <a href="#contactos" className="block text-white/70 hover:text-[#d4af37] transition-colors">Contactos</a>
                <a href="http://www.casadanora.com" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-[#d4af37] transition-colors">Website Oficial</a>
              </div>
            </div>
          </div>

          {/* Linha de separação */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/50">
                © 2012 - {new Date().getFullYear()} Casa da Nora. Todos os direitos reservados. RNET Nº 6940
              </p>
              <div className="flex gap-6 text-xs text-white/50">
                <a href="https://www.livroreclamacoes.pt/inicio" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">Livro de Reclamações</a>
                <a href="#" className="hover:text-[#d4af37] transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
