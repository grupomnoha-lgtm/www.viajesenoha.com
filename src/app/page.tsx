'use client';

import React, { useState, useEffect } from 'react';

const heroImages = [
  "/WhatsApp Image 2026-03-30 at 19.55.07.jpeg",
  "/WhatsApp Image 2026-03-30 at 19.55.36.jpeg",
  "/WhatsApp Image 2026-03-30 at 19.55.10.jpeg",
  "/WhatsApp Image 2026-03-30 at 19.54.53.jpeg"
];

const features = [
  { icon: "🌴", title: "Naturaleza Pura", desc: "Ecosistemas intactos y especies endémicas fascinantes." },
  { icon: "🏛️", title: "Cultura e Historia", desc: "Un puente único entre África y la herencia hispana." },
  { icon: "🍲", title: "Gastronomía Local", desc: "Saborea los pescados del Atlántico y especias africanas." },
  { icon: "🛡️", title: "Seguridad y Confianza", desc: "Guías expertos y traslados seguros en todo el país." }
];

const galleryImages = [
  { url: "/playa1.jpeg", title: "Playas de Aleñá", category: "Playas" },
  { url: "/catedral malabo.jpeg", title: "Catedral de Malabo", category: "Cultura" },
  { url: "/cascada ureka.jpeg", title: "Cascadas de Ureka", category: "Naturaleza" },
  { url: "/aventuras en un cayuco.jpeg", title: "Travesía en Cayuco", category: "Aventura" },
  { url: "/gastronomia.jpeg", title: "Sabores Locales", category: "Gastronomía" },
  { url: "/paseo_maritimo.jpeg", title: "Paseo Marítimo de Malabo", category: "Ciudad" },
  { url: "/cacao.jpeg", title: "Tradición del Cacao", category: "Cultura" },
  { url: "/mongomo.jpeg", title: "Basílica de Mongomo", category: "Arquitectura" },
  { url: "/luba.jpeg", title: "Conde de Argelejos", category: "Costa" }
];

const fashionImages = [
  "/moda1.jpeg", "/moda2.jpeg", "/moda3.jpeg", "/moda4.jpeg"
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-green-200 selection:text-green-900 overflow-x-hidden">
      {/* Dynamic Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200' : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-green-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg">
              <span className="text-white text-xl font-black">VE</span>
            </div>
            <h1 className={`text-2xl font-black tracking-tighter transition-colors ${
              scrolled ? 'text-green-900' : 'text-white'
            }`}>Viajes Enoha</h1>
          </div>
          
          <nav className="hidden md:block">
            <ul className={`flex space-x-10 text-sm font-bold uppercase tracking-widest transition-colors ${
              scrolled ? 'text-slate-600' : 'text-white/90'
            }`}>
              <li><a href="#destinos" className="hover:text-green-500 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all hover:after:w-full">Destinos</a></li>
              <li><a href="#galeria" className="hover:text-green-500 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all hover:after:w-full">Galería</a></li>
              <li><a href="#aventuras" className="hover:text-green-500 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all hover:after:w-full">Aventuras</a></li>
            </ul>
          </nav>

          <a href="#contacto" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-green-500/20 active:scale-95 transition-all">
            Reservar Viaje
          </a>
        </div>
      </header>

      {/* Hero Ultra Modern Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 transition-all duration-[2000ms] ease-out pointer-events-none ${
              index === currentImage ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-1'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-slate-50 z-10 transition-opacity duration-1000"></div>
            <img 
              src={img} 
              alt={`Slide ${index}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-black uppercase tracking-[0.3em] mb-6 border border-white/20 select-none shadow-2xl">
            Bienvenidos al Corazón de África
          </span>
          <h2 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.8] drop-shadow-2xl">
            GUINEA <br/> <span className="text-green-400">ECUATORIAL</span>
          </h2>
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg">
            Siente la magia de la última frontera salvaje de África. Selvas esmeralda, playas de cristal y una cultura que late.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#destinos" className="group relative bg-white text-green-900 px-10 py-5 rounded-2xl text-lg font-black shadow-2xl transition-all hover:shadow-white/20 hover:scale-105 active:scale-95 overflow-hidden">
              <span className="relative z-10">DESCUBRIR DESTINOS</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
             <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Modern Value Bento Grid */}
      <section id="aventuras" className="py-32 px-4 relative text-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h3 className="text-sm font-black text-green-600 uppercase tracking-widest mb-4">¿Por qué con nosotros?</h3>
              <h4 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">Redefiniendo el <br/> <span className="text-slate-400">Lujo Salvaje.</span></h4>
            </div>
            <p className="text-slate-500 font-medium max-w-xs leading-relaxed">
              En Viajes Enoha no solo organizamos viajes, creamos legados visuales y memorias imborrables.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-green-500/30 shadow-none hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 text-slate-900">
                <div className="text-5xl mb-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 block w-fit">{f.icon}</div>
                <h5 className="text-xl font-black text-slate-900 mb-4">{f.title}</h5>
                <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Gallery Section */}
      <section id="galeria" className="py-32 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-10">
           <div>
              <h3 className="text-sm font-black text-green-500 uppercase tracking-[0.4em] mb-4">Exploración Visual</h3>
              <h4 className="text-5xl md:text-7xl font-black text-white tracking-tighter">EL ALMA DE <br/> <span className="text-outline italic">GUINEA.</span></h4>
           </div>
           <p className="text-slate-400 max-w-sm font-medium leading-relaxed">
             Selecciona una imagen para explorar los detalles de nuestra tierra a través del visor interactivo.
           </p>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Main Viewer */}
            <div className="lg:col-span-8 relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10 bg-black">
              <img 
                src={galleryImages[selectedGalleryIdx].url} 
                alt={galleryImages[selectedGalleryIdx].title} 
                className="w-full h-full object-cover transition-all duration-700 animate-in fade-in zoom-in-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                <span className="text-green-400 font-black text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
                  {galleryImages[selectedGalleryIdx].category}
                </span>
                <h5 className="text-white font-black text-3xl md:text-5xl tracking-tight mb-2">
                  {galleryImages[selectedGalleryIdx].title}
                </h5>
              </div>
              
              {/* Navigation Arrows on Viewer */}
              <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => setSelectedGalleryIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-green-600 transition-all"
                >
                  ←
                </button>
                <button 
                  onClick={() => setSelectedGalleryIdx((prev) => (prev + 1) % galleryImages.length)}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-green-600 transition-all"
                >
                  →
                </button>
              </div>
            </div>

            {/* Selection Grid (Limited Height scrollable) */}
            <div className="lg:col-span-4 h-full max-h-[500px] overflow-y-auto no-scrollbar pr-2 flex flex-col gap-4">
              {galleryImages.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedGalleryIdx(i)}
                  className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all border-2 ${
                    i === selectedGalleryIdx 
                    ? 'bg-green-600/20 border-green-500' 
                    : 'bg-white/5 border-transparent hover:bg-white/10'
                  }`}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-green-500 font-bold text-[10px] tracking-widest uppercase truncate">{item.category}</span>
                    <h6 className="text-white font-black text-sm md:text-md truncate">{item.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Local Fashion/Vibe Section */}
        <div className="container mx-auto px-6 mt-24 mb-10">
          <h5 className="text-white font-black text-xl mb-8 tracking-[0.2em] uppercase">Vibe & Lifestyle</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {fashionImages.map((img, i) => (
               <div key={i} className="aspect-square rounded-3xl overflow-hidden group border border-white/5">
                  <img src={img} alt="Estilo Local" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Destinations Cards High Modern */}
      <section id="destinos" className="py-32 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-4">LOS IMPRESCINDIBLES</h3>
            <div className="w-32 h-2 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Isla de Bioko", img: "/WhatsApp Image 2026-03-30 at 19.55.51.jpeg", theme: "COLONIAL VIBE" },
              { name: "Región Continental", img: "/plaza bata.jpeg", theme: "OCEAN PULSE" },
              { name: "Playas de Aleñá", img: "/playa4.jpeg", theme: "PARADISE SOUL" }
            ].map((d, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 group-hover:rounded-[1rem]">
                   <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                   <div className="absolute bottom-10 left-10">
                      <span className="text-green-400 font-bold tracking-widest text-xs uppercase mb-2 block">{d.theme}</span>
                      <h4 className="text-4xl font-black text-white">{d.name}</h4>
                   </div>
                </div>
                <button className="flex items-center gap-4 text-slate-900 group-hover:text-green-600 font-black tracking-widest uppercase transition-colors">
                  Explorar Guía <span className="w-12 h-0.5 bg-slate-900 group-hover:bg-green-600 transition-all duration-500 group-hover:w-20"></span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimalist Tech Footer */}
      <footer id="contacto" className="bg-slate-950 text-white pt-40 pb-10 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-20 mb-40">
            <div>
              <h4 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-none">HABLEMOS <br/> <span className="text-green-500 italic underline decoration-1">AHORA.</span></h4>
              <p className="text-slate-400 text-xl font-medium max-w-md">Tu próxima historia épica comienza con un simple hola. Estamos listos para guiarte.</p>
            </div>
            <div className="flex flex-col justify-end space-y-10">
              <div className="border-b border-white/10 pb-6 group cursor-pointer hover:border-green-500 transition-colors text-white">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2 font-bold">WhatsApp & Contacto</p>
                <p className="text-2xl font-black text-white">+240 555 913 303</p>
              </div>
              <div className="border-b border-white/10 pb-6 group cursor-pointer hover:border-green-500 transition-colors text-white">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2 font-bold">Email</p>
                <p className="text-2xl font-black text-white">info@viajesenoha.com</p>
              </div>
              <div className="flex gap-10">
                <a href="#" className="font-black hover:text-green-500 transition-colors text-white text-xs tracking-widest">INSTAGRAM</a>
                <a href="#" className="font-black hover:text-green-500 transition-colors text-white text-xs tracking-widest">FACEBOOK</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] font-black tracking-[0.3em] border-t border-white/5 pt-10">
            <p>&copy; {new Date().getFullYear()} VIAJES ENOHA CORP.</p>
            <p>EL FUTURO DEL TURISMO AFRICANO.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
    
  );

}




