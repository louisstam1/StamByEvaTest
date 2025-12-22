
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onViewChange: (view: 'home' | 'brands' | 'story') => void;
  currentView: 'home' | 'brands' | 'story';
}

const Header: React.FC<HeaderProps> = ({ onViewChange, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'INSTAGRAM', href: 'https://www.instagram.com/p/DNFaEN-sWBP/', isExternal: true },
    { label: 'BRANDS', id: 'brands', isExternal: false },
    { label: 'STORY', id: 'story', isExternal: false },
    { label: 'CONTACT', id: 'contact', isExternal: false }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent, item: any) => {
    if (item.isExternal) return;
    
    e.preventDefault();
    setIsMenuOpen(false);

    if (item.id === 'brands') {
      onViewChange('brands');
      return;
    }
    
    if (item.id === 'story') {
      onViewChange('story');
      return;
    }

    if (currentView !== 'home') {
      onViewChange('home');
      // Delay scrolling until view has rendered
      setTimeout(() => {
        const element = document.getElementById(item.id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      if (item.id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(item.id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-gradient-to-b from-[#1a0808] to-transparent">
      <div className="flex-1">
        <button 
          onClick={() => onViewChange('home')}
          className="font-black text-xl md:text-2xl tracking-tighter cursor-pointer hover:opacity-80 transition-opacity uppercase"
        >
          STAMBYEVA
        </button>
      </div>
      
      <nav className="hidden md:flex gap-8 justify-center">
        {navItems.map((item) => (
          item.isExternal ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold tracking-[0.2em] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <button
              key={item.label}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-[10px] font-bold tracking-[0.2em] hover:text-white transition-colors uppercase ${currentView === item.id ? 'text-white underline underline-offset-8' : ''}`}
            >
              {item.label}
            </button>
          )
        ))}
      </nav>

      <div className="flex flex-1 justify-end">
        <button 
          className="md:hidden text-[#ffc2d1] hover:text-white transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={`fixed inset-0 bg-[#1a0808] z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <nav className="flex flex-col gap-10 items-center">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-black tracking-tighter hover:text-white transition-colors uppercase"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                onClick={(e) => handleNavClick(e, item)}
                className="text-4xl font-black tracking-tighter hover:text-white transition-colors uppercase"
              >
                {item.label}
              </button>
            )
          ))}
        </nav>
        
        <button 
          onClick={toggleMenu}
          className="absolute top-10 right-6 text-[#ffc2d1]"
        >
          <X size={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
