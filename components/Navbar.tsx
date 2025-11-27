import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-paper/90 backdrop-blur-md py-4 border-b border-gray-200/50' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <span className="text-2xl md:text-3xl font-serif font-medium text-navy-900 tracking-tight">
            Crash Lab<span className="text-brand-blue">.</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['Research', 'Mission', 'Team', 'Publications'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
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
            onClick={() => setIsMobileMenuOpen(false)}
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