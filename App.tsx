
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InstagramFeed from './components/InstagramFeed';
import BrandsTeaser from './components/Brands';
import LocationContact from './components/LocationContact';
import BrandsPage from './components/BrandsPage';
import StoryPage from './components/StoryPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'brands' | 'story'>('home');

  useEffect(() => {
    // Scroll to top when switching views
    window.scrollTo(0, 0);
  }, [view]);

  // Navigation handlers
  const navigateToHome = () => setView('home');
  const navigateToBrands = () => setView('brands');
  const navigateToStory = () => setView('story');

  return (
    <div className="flex flex-col min-h-screen bg-[#1a0808]">
      <Header onViewChange={setView} currentView={view} />
      
      <main className="transition-opacity duration-500">
        {view === 'home' ? (
          <>
            <section id="home">
              <Hero />
            </section>
            
            <section id="instagram" className="py-20 px-4 md:px-10 scroll-mt-32">
              <div className="max-w-7xl mx-auto text-center md:text-left">
                <h2 className="text-7xl md:text-[12vw] font-black mb-12 tracking-tighter uppercase leading-[0.85]">OUR LOOKS</h2>
                <InstagramFeed />
              </div>
            </section>

            <section id="brands-teaser" className="py-20 border-t border-[#ffc2d1]/10 scroll-mt-32 cursor-pointer" onClick={navigateToBrands}>
              <div className="text-center mb-10">
                <p className="text-[10px] tracking-[0.5em] opacity-50 uppercase mb-4">Click to explore brands</p>
              </div>
              <BrandsTeaser />
            </section>

            <section id="contact" className="py-20 scroll-mt-32">
              <LocationContact />
            </section>
          </>
        ) : view === 'brands' ? (
          <BrandsPage onBack={navigateToHome} />
        ) : (
          <StoryPage onBack={navigateToHome} />
        )}
      </main>

      <footer className="py-10 text-center text-xs opacity-50 uppercase tracking-widest border-t border-[#ffc2d1]/10">
        &copy; {new Date().getFullYear()} Stam by Eva. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
