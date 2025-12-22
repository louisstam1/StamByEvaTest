
import React, { useEffect, useState } from 'react';
import { ArrowLeft, MoveUpRight } from 'lucide-react';

const brands = [
  { name: "STIEGLITZ", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop", category: "Apparel", size: "large" },
  { name: "mbyM", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", category: "Copenhagen Style", size: "small" },
  { name: "Co 'coutoure", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop", category: "Parisian Chic", size: "medium" },
  { name: "SAMSOE SAMSOE", img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800&auto=format&fit=crop", category: "Nordic Minimal", size: "large" },
  { name: "SELECTED FEMME", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", category: "Essentials", size: "small" },
  { name: "MOSS COPENHAGEN", img: "https://images.unsplash.com/photo-1529139513477-323c66b6229b?q=80&w=800&auto=format&fit=crop", category: "Basics", size: "medium" },
  { name: "AMERICAN VINTAGE", img: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=800&auto=format&fit=crop", category: "Knitwear", size: "large" },
  { name: "ESSENTIEL ANTWERP", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop", category: "Bold Colors", size: "small" },
  { name: "STAM EXCLUSIVES", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", category: "Special Picks", size: "medium" },
  { name: "NUKUS", img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=800&auto=format&fit=crop", category: "Daily Wear", size: "large" },
  { name: "FABIENNE CHAPOT", img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=800&auto=format&fit=crop", category: "Prints", size: "small" }
];

interface BrandsPageProps {
  onBack: () => void;
}

const BrandsPage: React.FC<BrandsPageProps> = ({ onBack }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen pt-32 pb-40 px-6 md:px-12 bg-[#1a0808] text-[#ffc2d1] overflow-x-hidden">
      {/* Dynamic Background Title */}
      <div 
        className="fixed top-20 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none z-0"
        style={{ transform: `translateX(calc(-50% + ${scrollY * 0.1}px))` }}
      >
        <h1 className="text-[40vw] font-black leading-none">COLLECTION</h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24">
          <button 
            onClick={onBack}
            className="flex items-center gap-4 group hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Return Home</span>
          </button>
          
          <div className="text-right">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              The<br/><span className="text-white">Brands</span>
            </h2>
          </div>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-32">
          {brands.map((brand, index) => (
            <div 
              key={brand.name} 
              className={`group flex flex-col relative ${index % 2 !== 0 ? 'md:mt-40' : ''}`}
            >
              {/* Image Container with Parallax and Hover */}
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
                <img 
                  src={brand.img} 
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                  style={{ transform: `translateY(${(scrollY * 0.02) * (index % 2 === 0 ? 1 : -1)}px)` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Floating Category Label */}
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {brand.category}
                   </span>
                </div>

                {/* Corner Icon */}
                <div className="absolute bottom-6 right-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 bg-[#ffc2d1] text-[#1a0808] rounded-full flex items-center justify-center">
                    <MoveUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Brand Branding */}
              <div className="mt-8 flex items-baseline justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.4em] opacity-40 uppercase mb-2">0{index + 1}</p>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase group-hover:text-white transition-colors">
                    {brand.name}
                  </h3>
                </div>
                <div className="h-px flex-1 bg-[#ffc2d1]/10 mx-6 hidden md:block group-hover:bg-[#ffc2d1]/30 transition-colors"></div>
                <p className="text-[10px] font-black tracking-widest opacity-30 group-hover:opacity-100 transition-opacity whitespace-nowrap">VIEW LOOKS</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-60 text-center border-t border-[#ffc2d1]/10 pt-40">
           <h4 className="text-[8vw] font-black tracking-tighter opacity-10 mb-10">THE TRIBE</h4>
           <p className="max-w-xl mx-auto text-lg mb-12 opacity-60">
             Our selection is constantly evolving. Visit our shop in Kalmthout to discover the full range of exclusives and new arrivals.
           </p>
           <button 
             onClick={onBack}
             className="px-10 py-5 bg-[#ffc2d1] text-[#1a0808] font-black tracking-[0.2em] uppercase rounded-full hover:bg-white transition-colors"
           >
             Book a Session
           </button>
        </div>
      </div>

      {/* Kinetic Background Lines */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-[#ffc2d1]"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-[#ffc2d1]"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-[#ffc2d1]"></div>
      </div>
    </div>
  );
};

export default BrandsPage;
