import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';

interface FooterProps {
    onNavigateHome?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-navy-900 text-white">
      
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-white tracking-tight mb-6 leading-tight">
              Let's Accelerate Healthcare AI Innovation Together
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-xl">
              Whether you're a clinician, researcher, or industry partner — we'd love to collaborate.
            </p>
            <a 
              href="mailto:Suvrankar.datta@ashoka.edu.in" 
              className="group inline-flex items-center gap-3 px-6 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 py-12 lg:py-16 border-b border-white/10 gap-8 lg:gap-12">
          
          {/* Logo */}
          <div 
            className="cursor-pointer group"
            onClick={() => { if(onNavigateHome) onNavigateHome(); scrollToTop(); }}
          >
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-none stroke-current text-white group-hover:text-brand-blue transition-colors" strokeWidth="6" strokeLinecap="square">
                <path d="M 85 28 A 42 42 0 1 0 85 72" />
                <rect x="32" y="32" width="36" height="36" strokeWidth="5" />
                <line x1="50" y1="50" x2="92" y2="50" strokeWidth="5" />
                <circle cx="50" cy="50" r="6" className="fill-current stroke-none" />
              </svg>
              <span className="text-xl font-serif font-semibold text-white tracking-tight">
                CRASH Lab
              </span>
            </div>
            <p className="text-sm text-white/50 mt-4 max-w-xs">
              Centre for Responsible AI in Healthcare at Koita Centre for Digital Health
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-white/70">
              <p>Koita Centre for Digital Health</p>
              <p>Ashoka University</p>
              <a 
                href="mailto:Suvrankar.datta@ashoka.edu.in" 
                className="hover:text-brand-blue transition-colors block"
              >
                Suvrankar.datta@ashoka.edu.in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#research" className="text-white/70 hover:text-white transition-colors">Research</a>
              <a href="#publications" className="text-white/70 hover:text-white transition-colors">Publications</a>
              <a href="#mission" className="text-white/70 hover:text-white transition-colors">Mission</a>
              <a href="#team" className="text-white/70 hover:text-white transition-colors">Team</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2024 CRASH Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">
              Twitter
            </a>
            <button 
              onClick={scrollToTop}
              className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowUp size={12} />
              Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
