
import React from 'react';

const Brands: React.FC = () => {
  const brandList = [
    "STIEGLITZ", "mbyM", "Co 'coutoure", "SAMSOE SAMSOE", 
    "SELECTED FEMME", "MOSS COPENHAGEN", "AMERICAN VINTAGE", 
    "ESSENTIEL ANTWERP", "STAM EXCLUSIVES"
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap py-10 bg-[#ffc2d1] text-[#1a0808]">
      <div className="inline-block animate-marquee flex items-center gap-20">
        {/* Repeat list for smooth loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-20 items-center">
            {brandList.map((brand) => (
              <span key={brand} className="text-4xl md:text-7xl font-black tracking-tighter px-4">
                {brand}
              </span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: inline-flex;
        }
      `}</style>
    </div>
  );
};

export default Brands;
