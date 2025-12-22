
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Full-width Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop" 
          alt="Stam by Eva - Hero" 
          className="w-full h-full object-cover object-center"
        />
        {/* Neutral 15% Overlay */}
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      {/* Hero Typography removed as requested in the screenshot */}

      {/* Stylized Sub-header with Border and Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-10 w-full px-6 flex flex-col items-center">
        <div className="inline-block border-2 border-[#ffc2d1]/60 px-10 py-4 mb-8 backdrop-blur-sm">
          <p className="text-2xl md:text-5xl lg:text-6xl tracking-[0.4em] font-black text-[#ffc2d1] uppercase drop-shadow-lg">
            Heide belgium
          </p>
        </div>
        <div className="h-24 w-px bg-gradient-to-b from-[#ffc2d1] to-transparent mx-auto"></div>
      </div>
    </div>
  );
};

export default Hero;
