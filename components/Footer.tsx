import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-blue pt-24 pb-12 text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
                <h2 className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] mb-8 tracking-tighter">
                    Got a project <br/> <span className="italic opacity-70">in mind?</span>
                </h2>
            </div>
            <div className="flex flex-col justify-end items-start lg:items-end">
                <p className="text-xl md:text-2xl font-sans text-white/80 max-w-md text-left lg:text-right mb-8 font-light">
                    Tell us your idea and we'll get things in motion.
                </p>
                <a href="mailto:contact@crashlab.in" className="px-8 py-4 bg-white text-brand-blue font-bold rounded-full text-lg hover:bg-navy-900 hover:text-white transition-all duration-300">
                    Get in touch
                </a>
            </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/20 pt-16 mb-24">
            
            <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="text-white">
                        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-none stroke-current" strokeWidth="10" strokeLinecap="square">
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
                    <span className="text-3xl font-sans font-bold text-white uppercase tracking-tight">
                        Crash Lab
                    </span>
                </div>
                <p className="text-white/60 text-sm font-sans">
                    Responsible AI for Indian Healthcare.
                </p>
            </div>

            <div className="md:col-span-4">
                <a href="mailto:hola@crashlab.in" className="text-2xl md:text-3xl font-sans font-medium hover:opacity-70 transition-opacity block mb-2 tracking-tight">
                    contact@crashlab.in
                </a>
                <p className="text-white/60 text-lg">
                    +91 22 2576 7000
                </p>
            </div>

             <div className="md:col-span-3 text-right">
                <p className="text-2xl font-serif">
                    IIT Bombay, Powai<br/>
                    Mumbai — 400076
                </p>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
            <div className="flex gap-6 mb-4 md:mb-0">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
            
            <div className="flex gap-6">
                <span>© 2024 CRASH Lab</span>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;