import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';

      // Reset items for animation
      gsap.set(menuItemsRef.current, { y: 20, opacity: 0 });

      const tl = gsap.timeline();
      tl.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power3.inOut'
      })
        .to(menuItemsRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.2');

    } else {
      document.body.style.overflow = '';

      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.inOut'
      });
    }
  }, [isMobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  const menuItems = ['Research', 'Mission', 'Team', 'Publications'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 backdrop-blur-md border-b border-navy-900/5 ${isMobileMenuOpen ? 'bg-white py-6 md:py-8' : (isScrolled ? 'bg-white/90 py-4 shadow-sm' : 'py-6 md:py-8')
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer z-[9002] group relative">
          <div className="text-navy-900 group-hover:text-brand-blue transition-colors duration-300">
            <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10 fill-none stroke-current" strokeWidth="10" strokeLinecap="square">
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
          <span className="text-xl md:text-2xl font-sans font-bold text-navy-900 uppercase tracking-tight group-hover:text-brand-blue transition-colors duration-300">
            CRASH Lab
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
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
              className="text-xs font-medium uppercase tracking-[0.05em] text-navy-900 hover:text-brand-blue transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
          <a href="mailto:suvrankar.datta@ashoka.edu.in" className="text-xs font-medium uppercase tracking-[0.05em] text-brand-blue border border-brand-blue/30 px-6 py-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300 bg-transparent">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-[9002] relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-navy-900 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {createPortal(
        <div
          ref={menuRef}
          style={{ backgroundColor: '#ffffff' }}
          className="fixed inset-0 bg-white z-[9998] flex flex-col pt-32 px-8 md:hidden translate-x-full shadow-2xl"
        >
          <div className="flex flex-col gap-8">
            {menuItems.map((item, index) => (
              <a
                key={item}
                ref={(el) => { menuItemsRef.current[index] = el; }}
                href={`#${item.toLowerCase()}`}
                className="group flex items-center justify-between text-3xl font-serif font-medium text-navy-900 tracking-tight border-b border-navy-900/10 pb-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onNavigateHome) onNavigateHome();
                }}
              >
                <span className="group-hover:text-brand-blue transition-colors duration-300">{item}</span>
                <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-blue" />
              </a>
            ))}

            <a
              ref={(el) => { menuItemsRef.current[menuItems.length] = el; }}
              href="mailto:suvrankar.datta@ashoka.edu.in"
              className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-brand-blue text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-lg active:scale-95 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in touch
            </a>

            <div
              ref={(el) => { menuItemsRef.current[menuItems.length + 1] = el; }}
              className="mt-8 flex justify-center gap-8"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-navy-900/40 hover:text-brand-blue transition-colors text-sm font-bold uppercase tracking-wider">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-navy-900/40 hover:text-brand-blue transition-colors text-sm font-bold uppercase tracking-wider">Twitter</a>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-64 h-64 fill-none stroke-current text-navy-900" strokeWidth="2">
              <path d="M 85 28 A 42 42 0 1 0 85 72" />
              <rect x="32" y="32" width="36" height="36" />
            </svg>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;