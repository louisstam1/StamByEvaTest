
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

const LocationContact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
      {/* Contact & Info */}
      <div className="flex flex-col justify-between space-y-12">
        <div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">FIND US</h2>
          <div className="space-y-6 text-lg">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold uppercase tracking-tight text-xl">Stam By Eva</p>
                <p className="opacity-70">Heidestatiestraat 77, 2920 Kalmthout</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold uppercase tracking-tight text-xl">Opening Hours</p>
                <p className="opacity-70">Tue - Sat: 11:00 - 18:00</p>
                <p className="opacity-70">Sun - Mon: Closed</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 flex-shrink-0" />
              <p className="opacity-70 text-xl font-bold tracking-tight">03 666 35 76</p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 flex-shrink-0" />
              <p className="opacity-70">lounoa@hotmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <a href="https://www.instagram.com/p/DNFaEN-sWBP/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-[#ffc2d1]/30 hover:bg-[#ffc2d1] hover:text-[#1a0808] transition-all">
            <Instagram size={24} />
          </a>
          <a href="#" className="flex-1 flex items-center justify-center border border-[#ffc2d1]/30 rounded-full font-bold tracking-widest hover:bg-[#ffc2d1] hover:text-[#1a0808] transition-all text-xs">
            BOOK A STYLING SESSION
          </a>
        </div>
      </div>

      {/* Visual / Form / Map Placeholder */}
      <div className="relative group">
        <div className="aspect-[4/5] bg-[#2a1212] rounded-3xl overflow-hidden relative border border-[#ffc2d1]/10">
          <img 
             src="https://picsum.photos/id/1073/800/1000" 
             alt="The Shop" 
             className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-3xl font-black mb-4">GET IN TOUCH</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                className="w-full bg-white/5 border-b border-white/20 p-4 focus:outline-none focus:border-[#ffc2d1] transition-colors placeholder:text-white/30 text-xs tracking-widest uppercase"
              />
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border-b border-white/20 p-4 focus:outline-none focus:border-[#ffc2d1] transition-colors placeholder:text-white/30 text-xs tracking-widest uppercase"
              />
              <button className="w-full py-4 mt-6 bg-[#ffc2d1] text-[#1a0808] font-black tracking-[0.2em] text-xs hover:bg-white transition-colors">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
        
        {/* Floating element */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#ffc2d1] text-[#1a0808] rounded-full flex items-center justify-center text-center p-4 leading-tight font-black text-xs tracking-tighter rotate-12 group-hover:rotate-0 transition-transform shadow-2xl z-20">
          VISIT THE TRIBE
        </div>
      </div>
    </div>
  );
};

export default LocationContact;
