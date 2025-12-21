import React from 'react';
import { FadeIn } from './Animations';

const Commitment: React.FC = () => {
  return (
    <section className="py-12 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="relative w-full rounded-2xl overflow-hidden bg-navy-900 text-white p-8 md:p-20 min-h-[550px] flex items-center">

            {/* Background Pattern - Safari Safe */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/95 to-[#1a2744]"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <FadeIn delay={200}>
                <p className="font-serif font-semibold text-3xl md:text-5xl lg:text-6xl leading-[1.15] mb-8 text-white tracking-tight">
                  <span className="font-sans">"</span>We believe in open science, ethical AI development, and radical collaboration. Every tool we build is designed with safety, fairness, and real-world impact at its core.<span className="font-sans">"</span>
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-white/70 mt-12 font-bold">
                  <span className="text-brand-blue">Our Commitment</span>
                  <span className="hidden md:block w-8 h-px bg-brand-blue/50"></span>
                  <span>Supported by the Koita Foundation</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Commitment;