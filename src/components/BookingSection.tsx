"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Calendar, Users, BedDouble, ChevronDown, ExternalLink } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const rooms = [
  {
    id: 15,
    name: "Duplo Uso Individual",
    description: "Quarto com cama de casal ou 2 camas individuais, A/C, aquecimento central, casa de banho, Wi-fi, TV LCD, piso em madeira.",
    maxGuests: 1,
    prices: { baixa: 74, media: 84, alta: 94 },
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Quarto Duplo",
    description: "Quarto com cama de casal ou 2 camas individuais, A/C, aquecimento central, casa de banho, Wi-fi, TV LCD, piso em madeira.",
    maxGuests: 2,
    prices: { baixa: 79, media: 89, alta: 99 },
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 16,
    name: "Duplo Superior Vista Jardim",
    description: "Quarto envolvido pelo jardim e piscina, com mais área, casa de banho maior, TV LCD, sofá, Wi-fi, sol todo o dia.",
    maxGuests: 2,
    prices: { baixa: 89, media: 99, alta: 109 },
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 17,
    name: "Duplo Superior Vista Rio c/ Terraço",
    description: "Quarto de casal com TV LCD, A/C, aquecimento central, casa de banho, piso em madeira, Wi-fi e terraço com vista para o rio.",
    maxGuests: 2,
    prices: { baixa: 89, media: 99, alta: 109 },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 20,
    name: "Quarto Mezanino",
    description: "Vistas sobre o Rio Lis. Escadas levam ao mezanino com 2 camas individuais e vista para o quarto inferior com cama de casal.",
    maxGuests: 4,
    prices: { baixa: 120, media: 135, alta: 145 },
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 18,
    name: "Suite Junior",
    description: "1 Quarto com Cama de Casal + 1 Quarto/Sala com cama individual, TV LCD, piso em madeira, casa de banho com banheira, A/C, Wi-fi.",
    maxGuests: 3,
    prices: { baixa: 110, media: 125, alta: 135 },
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 19,
    name: "Suite Rural Familiar",
    description: "1 Quarto com Cama de Casal + 1 Quarto com 2 camas individuais, vista panorâmica para a piscina, à beira-rio.",
    maxGuests: 4,
    prices: { baixa: 120, media: 135, alta: 145 },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Suite Presidencial",
    description: "Cama King Size, Jacuzzi na sala de estar toda em vidro com TV LCD, quarto intercomunicante para 2 crianças, A/C, Wi-fi.",
    maxGuests: 4,
    prices: { baixa: 175, media: 190, alta: 210 },
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=800&auto=format&fit=crop",
  },
];

const seasons = {
  baixa: "Baixa",
  media: "Média",
  alta: "Alta",
};

function getSeason(date: Date): "baixa" | "media" | "alta" {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Alta: 18/02-21/02, 05/04-08/04, 12/05-15/05, 01/07-31/08, 12/10-14/10, 28/12-01/01
  if (
    (month === 2 && day >= 18 && day <= 21) ||
    (month === 4 && day >= 5 && day <= 8) ||
    (month === 5 && day >= 12 && day <= 15) ||
    (month >= 7 && month <= 8) ||
    (month === 10 && day >= 12 && day <= 14) ||
    (month === 12 && day >= 28) ||
    (month === 1 && day <= 1)
  ) {
    return "alta";
  }
  
  // Média: 16/05-30/06, 01/09-24/09
  if (
    (month === 5 && day >= 16) ||
    (month === 6) ||
    (month === 9 && day >= 1 && day <= 24)
  ) {
    return "media";
  }
  
  return "baixa";
}

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  useGSAP(() => {
    gsap.utils.toArray(".booking-card").forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: sectionRef });

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const getCurrentSeason = () => {
    if (!checkIn) return "baixa";
    return getSeason(new Date(checkIn));
  };

  const handleBooking = (roomId: number) => {
    const url = `https://app.thebookingbutton.com/properties/casadanoradirect?room=${roomId}&checkin=${checkIn}&checkout=${checkOut}&guests=${guests}`;
    window.open(url, "_blank");
  };

  return (
    <section id="reservas" ref={sectionRef} className="w-full py-24 px-6 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2825] mb-4">
            RESERVAS
          </h2>
          <p className="text-[#2c2825]/70 max-w-2xl mx-auto">
            Reserve o seu quarto na Casa da Nora. Escolha a tipologia, selecione as datas e descubra tarifas exclusivas.
          </p>
        </div>

        {/* Formulário de Pesquisa */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Check-in */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#2c2825]/70 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b6b4a] text-[#2c2825]"
              />
            </div>

            {/* Check-out */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#2c2825]/70 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b6b4a] text-[#2c2825]"
              />
            </div>

            {/* Hóspedes */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#2c2825]/70 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Hóspedes
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b6b4a] text-[#2c2825] appearance-none"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "hóspede" : "hóspedes"}
                  </option>
                ))}
              </select>
            </div>

            {/* Botão Pesquisar */}
            <div className="flex items-end">
              <a
                href={`https://app.thebookingbutton.com/properties/casadanoradirect?checkin=${checkIn}&checkout=${checkOut}&guests=${guests}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-[#8b6b4a] text-white font-bold tracking-widest uppercase rounded-lg hover:bg-[#6e5337] transition-colors text-center flex items-center justify-center gap-2"
              >
                Pesquisar
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Temporada Atual */}
          {checkIn && (
            <div className="mt-6 p-4 bg-[#8b6b4a]/10 rounded-lg text-center">
              <p className="text-sm text-[#2c2825]/70">
                Temporada: <span className="font-bold text-[#8b6b4a]">{seasons[getCurrentSeason()]}</span>
                {calculateNights() > 0 && (
                  <span className="ml-4">
                    • {calculateNights()} {calculateNights() === 1 ? "noite" : "noites"}
                  </span>
                )}
              </p>
            </div>
          )}
        </div>

        {/* Lista de Quartos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => {
            const season = getCurrentSeason();
            const price = room.prices[season];
            const nights = calculateNights();
            const total = price * nights;

            return (
              <div 
                key={room.id}
                className={`booking-card bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl ${
                  selectedRoom === room.id ? "ring-2 ring-[#8b6b4a]" : ""
                }`}
              >
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#8b6b4a] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <BedDouble className="w-3 h-3" />
                    {room.maxGuests} {room.maxGuests === 1 ? "pessoa" : "pessoas"}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-[#2c2825] mb-2">{room.name}</h3>
                  <p className="text-sm text-[#2c2825]/60 mb-4 line-clamp-2">{room.description}</p>

                  {/* Preços */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-[#2c2825]/60">
                      <span className="line-through">€{room.prices.alta}</span>
                      <span className="ml-2 text-xl font-bold text-[#8b6b4a]">€{price}</span>
                      <span className="text-xs">/noite</span>
                    </div>
                    {nights > 0 && (
                      <div className="text-right">
                        <p className="text-xs text-[#2c2825]/50">Total</p>
                        <p className="font-bold text-[#2c2825]">€{total}</p>
                      </div>
                    )}
                  </div>

                  {/* Botão Reservar */}
                  <button
                    onClick={() => handleBooking(room.id)}
                    className="w-full px-4 py-3 bg-[#2c2825] text-white text-sm font-bold tracking-widest uppercase rounded-lg hover:bg-[#8b6b4a] transition-colors flex items-center justify-center gap-2"
                  >
                    Reservar
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#2c2825]/50">
            Será redirecionado para o sistema de reservas oficial da Casa da Nora.
            <br />
            Preços sujeitos a disponibilidade. Épocas de Alta: 18/02-21/02, 05/04-08/04, 12/05-15/05, 01/07-31/08, 12/10-14/10, 28/12-01/01.
          </p>
        </div>

      </div>
    </section>
  );
}
