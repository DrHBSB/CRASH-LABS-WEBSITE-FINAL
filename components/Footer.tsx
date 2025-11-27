import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
    onNavigateHome?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-navy-900 text-white">
      
      {/* Main Content Area */}
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section with Logo and Back to Top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] border-b border-white/10">
          
          {/* Left: Large Logo */}
          <div className="flex items-center py-16 lg:py-24 lg:border-r border-white/10">
            <div 
              className="cursor-pointer group"
              onClick={() => { if(onNavigateHome) onNavigateHome(); }}
            >
              {/* Large Logo Mark */}
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 fill-none stroke-current text-white group-hover:text-brand-blue transition-colors" strokeWidth="6" strokeLinecap="square">
                  {/* Outer C */}
                  <path d="M 85 28 A 42 42 0 1 0 85 72" />
                  {/* Inner Square */}
                  <rect x="32" y="32" width="36" height="36" strokeWidth="5" />
                  {/* Center Line */}
                  <line x1="50" y1="50" x2="92" y2="50" strokeWidth="5" />
                  {/* Center Dot (Filled) */}
                  <circle cx="50" cy="50" r="6" className="fill-current stroke-none" />
                </svg>
                <div>
                  <span className="text-5xl md:text-7xl font-serif font-medium text-white tracking-tight block leading-none">
                    Crash
                  </span>
                  <span className="text-5xl md:text-7xl font-serif font-medium text-white tracking-tight block leading-none">
                    Lab
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Back to Top */}
          <div className="flex items-start justify-end py-16 lg:py-12">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              Back to the top
            </button>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10">
          
          {/* Left Column: Contact */}
          <div className="py-12 lg:py-16 lg:border-r border-white/10 lg:pr-16">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-6">
              Contact
            </h3>
            <div className="border-t border-white/10 pt-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    CRASH Lab<br />
                    IIT Bombay, Powai<br />
                    Mumbai — 400076
                  </p>
                </div>
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    +91 22 2576 7000<br />
                    +91 98765 43210
                  </p>
                  <a 
                    href="mailto:contact@crashlab.in" 
                    className="text-white/80 text-sm hover:text-brand-blue transition-colors block mt-2"
                  >
                    contact@crashlab.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Links */}
          <div className="py-12 lg:py-16 lg:pl-16">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-6">
              Quick Links
            </h3>
            <div className="border-t border-white/10 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <a href="#research" className="text-white/80 text-sm hover:text-white transition-colors block">Research</a>
                  <a href="#mission" className="text-white/80 text-sm hover:text-white transition-colors block">Mission</a>
                  <a href="#team" className="text-white/80 text-sm hover:text-white transition-colors block">Team</a>
                </div>
                <div className="space-y-3">
                  <a href="#publications" className="text-white/80 text-sm hover:text-white transition-colors block">Publications</a>
                  <a href="mailto:contact@crashlab.in" className="text-white/80 text-sm hover:text-white transition-colors block">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40">
            © CRASH Lab 2024. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
