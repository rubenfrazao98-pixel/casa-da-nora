"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "./SocialIcons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function FooterSection() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="w-full bg-[#2c2825] text-white">
      {/* CTA Section */}
      <div className="w-full py-16 px-6 bg-gradient-to-r from-[#8b6b4a] to-[#6e5337]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Reserve a sua estadia
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Descubra o conforto e a tradição da Casa da Nora. Faça já a sua reserva e viva uma experiência única junto ao Rio Lis.
          </p>
          <a
            href="#reservas"
            className="inline-block px-10 py-4 bg-white text-[#8b6b4a] font-bold tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Reservar Agora
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">CASA DA NORA</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Restaurante & Hotel Rural. Um refúgio de charme onde a história se cruza com a natureza. Antiga azenha recuperada sobre o rio Lis.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/casadanora/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2c2825] transition-all"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/casadanora/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2c2825] transition-all"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
            </div>
          </div>

          {/* Contactos */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-sm mb-6 text-white/80">
              Contactos
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href={`https://wa.me/351919703731`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+351 919 703 731</span>
              </a>
              <a
                href="tel:+351244891189"
                className="flex items-start gap-3 text-white/60 hover:text-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+351 244 891 189</span>
              </a>
              <a
                href="mailto:geral@casadanora.com"
                className="flex items-start gap-3 text-white/60 hover:text-[#d4af37] transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>geral@casadanora.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Largo Poeta José Marques da Cruz, 8<br />
                  2410-506 Cortes, Leiria
                </span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-sm mb-6 text-white/80">
              Horários
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-white/60">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white/80">Restaurante</p>
                  <p>Almoço: 12h00 - 15h00</p>
                  <p>Jantar: 19h00 - 23h00</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/60">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white/80">Fim de Semana</p>
                  <p>10h30 - 23h00</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/60">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white/80">Pequeno-Almoço</p>
                  <p>08h00 - 10h30</p>
                </div>
              </div>
              <p className="text-white/50 text-xs italic">Aberto todos os dias</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-sm mb-6 text-white/80">
              Explorar
            </h4>
            <nav className="space-y-3 text-sm">
              <a href="#quartos" className="block text-white/60 hover:text-[#d4af37] transition-colors">
                Quartos
              </a>
              <a href="#restaurante" className="block text-white/60 hover:text-[#d4af37] transition-colors">
                Restaurante
              </a>
              <a href="#contactos" className="block text-white/60 hover:text-[#d4af37] transition-colors">
                Contactos
              </a>
              <a
                href="https://www.casadanora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/60 hover:text-[#d4af37] transition-colors"
              >
                Website Oficial
              </a>
              <a
                href="https://www.livroreclamacoes.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/60 hover:text-[#d4af37] transition-colors"
              >
                Livro de Reclamações
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-white/10 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Casa da Nora. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos e Condições
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
