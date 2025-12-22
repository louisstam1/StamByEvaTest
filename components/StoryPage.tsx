
import React from 'react';
import { ArrowLeft, Quote, Sparkles, UserCheck, Coffee, Heart } from 'lucide-react';

interface StoryPageProps {
  onBack: () => void;
}

const StoryPage: React.FC<StoryPageProps> = ({ onBack }) => {
  // De authentieke foto van Eva
  const evaImage = "https://i.imgur.com/l4GcQmi.jpeg";
  
  // Frank's placeholder image - a friendly, stylish man to fit the vibe
  const frankImage = "https://i.imgur.com/JDg8gdD.jpeg";

  return (
    <div className="relative min-h-screen pt-32 pb-40 px-6 md:px-12 bg-[#1a0808] text-[#ffc2d1] overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[60vw] h-full bg-[#ffc2d1]/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-4 mb-16 group hover:text-white transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Back to Boutique</span>
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-40">
          <div className="order-2 lg:order-1">
            <h1 className="text-7xl md:text-[8vw] font-black tracking-tighter leading-[0.85] uppercase mb-10">
              More than<br/>
              <span className="text-white">Just shopping.</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-80 leading-relaxed mb-12 max-w-lg">
              Stam by Eva is a small boutique with a big heart. We don't just sell fashion; we curate moments and build confidence. 
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="group p-8 border border-[#ffc2d1]/20 bg-white/5 rounded-3xl hover:bg-[#ffc2d1] hover:text-[#1a0808] transition-all duration-500 cursor-default shadow-xl">
                <Sparkles size={32} className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">Unique Clothes</h3>
                <p className="opacity-60 group-hover:opacity-100 text-sm leading-relaxed transition-opacity">Hand-picked treasures from Europe's most exclusive labels, ensuring you stand out from the crowd.</p>
              </div>
              <div className="group p-8 border border-[#ffc2d1]/20 bg-white/5 rounded-3xl hover:bg-[#ffc2d1] hover:text-[#1a0808] transition-all duration-500 cursor-default shadow-xl">
                <UserCheck size={32} className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">Honest Advice</h3>
                <p className="opacity-60 group-hover:opacity-100 text-sm leading-relaxed transition-opacity">Personal styling sessions that celebrate your silhouette with sincere, expert guidance tailored to you.</p>
              </div>
            </div>

            <div className="flex gap-10 items-center border-t border-[#ffc2d1]/10 pt-10">
              <div>
                <span className="block text-4xl font-black">15+</span>
                <span className="text-[10px] font-bold tracking-widest opacity-50 uppercase">Years of Style</span>
              </div>
              <div className="w-px h-10 bg-[#ffc2d1]/20"></div>
              <div>
                <span className="block text-4xl font-black">1-on-1</span>
                <span className="text-[10px] font-bold tracking-widest opacity-50 uppercase">Personal Styling</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative lg:sticky lg:top-32">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative group border border-white/5">
              <img 
                src={evaImage} 
                alt="Eva - Founder" 
                className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-xs font-bold tracking-[0.5em] uppercase opacity-70 mb-2">The Visionary</p>
                <h2 className="text-4xl font-black tracking-tighter uppercase text-white">Eva // Founder</h2>
              </div>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-[#ffc2d1]/10 rounded-[3rem] -z-10 translate-x-4 translate-y-4"></div>
          </div>
        </div>

        {/* Frank Section - The Friendly Face */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40 pt-20 border-t border-[#ffc2d1]/10">
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
              <img 
                src={frankImage} 
                alt="Frank - The Friendly Face" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-xs font-bold tracking-[0.5em] uppercase opacity-70 mb-2">The Heart of the Shop</p>
                <h2 className="text-4xl font-black tracking-tighter uppercase text-white">Frank // Partner</h2>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ffc2d1] text-[#1a0808] rounded-full flex items-center justify-center p-6 text-center font-black text-xs tracking-tighter rotate-[-15deg] shadow-2xl pointer-events-none group-hover:rotate-0 transition-transform duration-500">
              BEST DOG IN TOWN
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4 mb-4">
               <Coffee className="text-[#ffc2d1]" size={28} />
               <Heart className="text-[#ffc2d1]" size={28} />
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Meet<br/><span className="text-white">Frank.</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-80 leading-relaxed max-w-xl">
              When you walk into our boutique in Heide, you'll often be greeted by a friendly face alongside Eva. That's Frank.
            </p>
            <div className="space-y-6 opacity-60 text-lg leading-relaxed max-w-xl">
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40 border-y border-[#ffc2d1]/10 py-24 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[20vw] font-black pointer-events-none select-none">SOUL</div>
           
           <div className="space-y-6">
              <span className="text-xs font-black px-3 py-1 bg-[#ffc2d1]/10 rounded-full tracking-widest uppercase text-[#ffc2d1]">01 // Personal</span>
              <h3 className="text-3xl font-black tracking-tighter uppercase">Tailored to You</h3>
              <p className="opacity-60 leading-relaxed text-lg">
                Every customer is unique. We take the time to understand your silhouette, your personality, and your lifestyle. At Stam, you're not a number; you're part of the tribe.
              </p>
           </div>

           <div className="space-y-6">
              <span className="text-xs font-black px-3 py-1 bg-[#ffc2d1]/10 rounded-full tracking-widest uppercase text-[#ffc2d1]">02 // Curation</span>
              <h3 className="text-3xl font-black tracking-tighter uppercase">Selected with Love</h3>
              <p className="opacity-60 leading-relaxed text-lg">
                Eva personally travels to discover labels that stand out. From Copenhagen to Paris, our collection is a mix of high-end quality and exclusive finds.
              </p>
           </div>

           <div className="space-y-6">
              <span className="text-xs font-black px-3 py-1 bg-[#ffc2d1]/10 rounded-full tracking-widest uppercase text-[#ffc2d1]">03 // Experience</span>
              <h3 className="text-3xl font-black tracking-tighter uppercase">Beyond the Rack</h3>
              <p className="opacity-60 leading-relaxed text-lg">
                Expect honest advice, a warm atmosphere, and a coffee (or glass of bubbles). We turn shopping into an inspiring styling session that leaves you glowing.
              </p>
           </div>
        </div>

        {/* Quote Section */}
        <div className="text-center py-24 bg-[#ffc2d1] text-[#1a0808] rounded-[3rem] relative overflow-hidden shadow-2xl">
          <Quote className="absolute top-10 left-10 opacity-10" size={160} />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10 relative z-10 px-10">
            "FASHION IS WHAT YOU BUY, STYLE IS WHAT YOU DO WITH IT."
          </h2>
          <p className="font-bold tracking-[0.5em] uppercase text-sm opacity-60">— EVA, STAM BY EVA</p>
        </div>

        {/* Boutique Detail Grid */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop" 
                alt="Boutique Interior" 
                className="w-full aspect-video object-cover"
              />
            </div>
            <h3 className="text-5xl font-black tracking-tighter uppercase">A Boutique Sanctuary</h3>
            <p className="text-lg opacity-70 leading-relaxed">
              Located in the heart of Heide, our shop is designed to be a haven. A place where you can take your time, explore textures, and discover the perfect fit without the rush of big retail chains.
            </p>
          </div>
          <div className="relative pt-20 md:pt-0">
             <div className="bg-[#2a1212] p-12 md:p-16 rounded-[3rem] border border-[#ffc2d1]/10 shadow-2xl">
               <h4 className="text-3xl font-black tracking-tighter uppercase mb-6">Want the full experience?</h4>
               <p className="opacity-60 mb-12 text-lg">
                 Book a private styling session where the shop is all yours. Together, we'll build a capsule wardrobe or find that one statement piece for your special event.
               </p>
               <button 
                 onClick={onBack}
                 className="w-full py-6 bg-[#ffc2d1] text-[#1a0808] font-black tracking-[0.3em] rounded-full hover:bg-white transition-all transform hover:-translate-y-1 uppercase text-xs shadow-lg"
               >
                 Visit our Tribe in Kalmthout
               </button>
             </div>
             {/* Floating text background */}
             <div className="absolute -bottom-10 -right-10 opacity-[0.05] text-9xl font-black select-none pointer-events-none">HEIDE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
