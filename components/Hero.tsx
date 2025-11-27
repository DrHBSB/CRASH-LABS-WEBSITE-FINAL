import React from 'react';
import { ArrowRight, Activity, FileText, Database, ShieldCheck } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full relative pt-12 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             opacity: 0.4
           }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col items-start max-w-2xl">
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-navy-900 leading-[0.95] mb-8 tracking-tight">
                    <AnimatedHeading text="Responsible AI" delay={0} className="block" />
                    <span className="block mt-2">
                        <AnimatedHeading text="built for" delay={300} wordMode={true} /> <span className="text-brand-blue"><AnimatedHeading text="Healthcare." delay={500} /></span>
                    </span>
                </h1>
                
                <FadeIn delay={600}>
                    <p className="text-lg md:text-xl text-navy-800/80 leading-relaxed font-sans mb-10 max-w-lg font-normal">
                        CRASH Lab builds context-aware foundation models and federated data platforms that automate clinical workflows while ensuring safety, equity, and privacy.
                    </p>
                </FadeIn>

                <FadeIn delay={700}>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="#contact" className="group flex items-center justify-center gap-3 px-8 py-4 bg-navy-900 text-white text-sm font-medium rounded-full hover:bg-brand-blue transition-all duration-300">
                            Join the Team
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-navy-900 text-sm font-medium rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200">
                            Industry Partners
                        </a>
                    </div>
                </FadeIn>

                <FadeIn delay={800} className="w-full">
                    <div className="mt-20 pt-8 border-t border-gray-200/60 w-full">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                            Collaborating with leading institutions
                        </p>
                        <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-xl font-serif font-medium text-navy-900 tracking-tight">Koita Foundation</span>
                            <span className="text-lg font-bold font-sans text-navy-900 tracking-tight">IIT Bombay</span>
                            <span className="text-lg font-serif italic text-navy-900">The Lancet</span>
                            <span className="text-xl font-mono font-bold text-navy-900">RSNA</span>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Right Column: Research Highlight Card */}
            <FadeIn delay={400} className="w-full mt-16 lg:mt-0">
                <div className="relative h-[500px] w-full perspective-[2000px]">
                    {/* Main Transform Container with Tilt Effect */}
                    <div className="relative w-full h-full transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">
                        
                        {/* The Card */}
                        <div className="absolute inset-0 bg-navy-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer hover:shadow-brand-blue/20 transition-shadow">
                            {/* Background Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2664&auto=format&fit=crop" 
                                alt="Radiology Scan" 
                                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" 
                            />
                            
                            {/* Content */}
                            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex justify-between items-center mb-8">
                                         <span className="px-3 py-1 bg-brand-blue/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">Benchmark Update</span>
                                         <span className="text-white/40 text-[10px] font-mono tracking-widest">NOV 20, 2025</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif text-white leading-[1.1] tracking-tight">
                                        Gemini 3.0 Pro <br/>
                                        <span className="text-blue-200">Surpasses Radiology</span> <br/>
                                        <span className="text-white">Trainees on RadLE</span>
                                    </h2>
                                </div>

                                <div className="self-end w-full max-w-[240px] bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                         <FileText className="text-brand-blue w-4 h-4" />
                                         <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Accuracy Delta</span>
                                    </div>
                                    <div className="text-4xl font-serif text-white font-medium mb-1">+6.0%</div>
                                    <div className="text-xs font-bold text-green-400 uppercase tracking-wider flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                        vs Trainees
                                    </div>
                                </div>
                            </div>
                            
                             {/* CTA Hover Reveal */}
                             <div className="absolute inset-0 bg-brand-blue/90 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                        </div>

                        {/* Floating Element: Connector */}
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-brand-blue hidden lg:block"></div>
                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-blue hidden lg:block animate-pulse"></div>

                    </div>
                </div>
            </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Hero;