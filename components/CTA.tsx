import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './Animations';

const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-blue relative overflow-hidden">
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight mb-6 leading-tight">
              Let's Accelerate Healthcare AI Innovation Together
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Whether you're a clinician, researcher, or industry partner — we'd love to collaborate.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@crashlab.in" 
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-blue font-semibold rounded-full hover:bg-navy-900 hover:text-white transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#research" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Our Research
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTA;

