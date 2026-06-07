import { Menu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Background Image - Placeholder Unsplash matching "Hotel/Nature" */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c6a4d1429dd4?q=80&w=2500&auto=format&fit=crop')" }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-12 z-20 flex justify-between items-center" style={{ color: '#ffffff' }}>
        <div className="text-sm tracking-widest uppercase font-medium">
          Restaurante & Hotel <br />
          <span className="font-serif text-2xl font-bold capitalize">Casa da Nora</span>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
          <a href="#nora" className="hover:text-brand-accent transition-colors">A Roda</a>
          <a href="#quartos" className="hover:text-brand-accent transition-colors">Quartos</a>
          <a href="#restaurante" className="hover:text-brand-accent transition-colors">Restaurante</a>
          <a href="#contactos" className="hover:text-brand-accent transition-colors">Contactos</a>
          <button className="px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">
            Menu
          </button>
        </nav>

        <button className="md:hidden">
          <Menu className="w-8 h-8" />
        </button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-24 flex flex-col items-start mt-20 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6 drop-shadow-lg" style={{ color: '#ffffff' }}>
          BEM-VINDO À<br /> CASA DA NORA.
        </h1>
        <p className="text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10 drop-shadow-md" style={{ color: 'rgba(255,255,255,0.9)' }}>
          Um refúgio de charme onde a história se cruza com a natureza. Antiga azenha recuperada sobre o rio Lis, oferecendo gastronomia de excelência e alojamento boutique.
        </p>
        <button className="px-8 py-4 bg-[#8b6b4a] text-sm font-bold tracking-widest uppercase rounded hover:bg-[#6e5337] transition-colors shadow-lg" style={{ color: '#ffffff' }}>
          Casa da Nora
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-xs tracking-widest uppercase" style={{ color: '#ffffff' }}>Scroll</span>
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
}
