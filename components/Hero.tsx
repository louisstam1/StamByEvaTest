
import React, { useState, useEffect } from 'react';

const images = [
  "https://i.imgur.com/F11OctU.jpeg",
  "https://i.imgur.com/D4BGikz.jpeg",
  "https://i.imgur.com/eykk5o6.jpeg",
  "https://i.imgur.com/XuosXOM.jpeg",
  "https://i.imgur.com/xLECENr.jpeg",
  "https://i.imgur.com/pvrPnkh.jpeg"
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#1a0808]">
      {/* Slideshow Container */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt={`Stam by Eva - Slide ${index + 1}`} 
              className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
            />
            {/* Neutral 15% Overlay for legibility */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Stylized Sub-header with Border and Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-10 w-full px-6 flex flex-col items-center">
        <div className="inline-block border-2 border-[#ffc2d1]/60 px-10 py-4 mb-8 backdrop-blur-sm">
          <p className="text-2xl md:text-5xl lg:text-6xl tracking-[0.4em] font-black text-[#ffc2d1] uppercase drop-shadow-lg">
            Heide belgium
          </p>
        </div>
        <div className="h-24 w-px bg-gradient-to-b from-[#ffc2d1] to-transparent mx-auto"></div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s linear infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Hero;
