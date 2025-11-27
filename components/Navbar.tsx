import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
      // If we are on home page (no onNavigateHome passed or just href="#home"), let default behavior happen
      // If we are on blog page, prevent default and go home
      if (onNavigateHome) {
          e.preventDefault();
          onNavigateHome();
      }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-paper/90 backdrop-blur-md py-4 border-b border-gray-200/50' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer z-50 group">
          <div className="text-navy-900 group-hover:text-brand-blue transition-colors duration-300">
            <svg viewBox="0 0 100 100" className="w-10 h-10 fill-none stroke-current" strokeWidth="10" strokeLinecap="square">
              {/* Outer C */}
              <path d="M 85 28 A 42 42 0 1 0 85 72" />
              {/* Inner Square */}
              <rect x="32" y="32" width="36" height="36" strokeWidth="8" />
              {/* Center Line */}
              <line x1="50" y1="50" x2="92" y2="50" strokeWidth="8" />
              {/* Center Dot (Filled) */}
              <circle cx="50" cy="50" r="8" className="fill-current stroke-none" />
            </svg>
          </div>
          <span className="text-2xl font-sans font-bold text-navy-900 uppercase tracking-tight group-hover:text-brand-blue transition-colors duration-300">
            Crash Lab
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['Research', 'Mission', 'Team', 'Publications'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                  if (onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome();
                      setTimeout(() => {
                          const element = document.getElementById(item.toLowerCase());
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                  }
              }}
              className="text-xs font-medium uppercase tracking-[0.05em] text-navy-900 hover:text-brand-blue transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="text-xs font-medium uppercase tracking-[0.05em] text-brand-blue border border-brand-blue/30 px-6 py-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-all">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-navy-900"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-paper z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {['Research', 'Mission', 'Team', 'Publications'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-4xl font-serif font-medium text-navy-900 tracking-tight hover:text-brand-blue"
            onClick={() => {
                setIsMobileMenuOpen(false);
                if (onNavigateHome) onNavigateHome();
            }}
          >
            {item}
          </a>
        ))}
        <a 
            href="#contact"
            className="text-xl font-sans font-medium text-brand-blue mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
        >
            Get in touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;