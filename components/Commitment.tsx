import React from 'react';

const Commitment: React.FC = () => {
  return (
    <section className="py-12 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative w-full rounded-2xl overflow-hidden bg-navy-900 text-white p-8 md:p-20 min-h-[600px] flex items-end">
            
            {/* Background Image with texture */}
            <img 
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Commitment Texture" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            
            <div className="relative z-10 max-w-4xl">
                 <p className="font-serif font-medium text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-white tracking-tight">
                    “We believe in open science, ethical AI development, and radical collaboration. Every tool we build is designed with safety, fairness, and real-world impact at its core.”
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-white/70 mt-12 font-bold">
                    <span className="text-white">Our Commitment</span>
                    <span className="hidden md:block w-8 h-px bg-white/30"></span>
                    <span>Supported by the Koita Foundation</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;