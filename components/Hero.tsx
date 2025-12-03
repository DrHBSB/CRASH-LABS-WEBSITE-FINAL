import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, BarChart3, Settings2, CheckCircle2 } from 'lucide-react';
import { ParallaxImage } from './Animations';
import gsap from 'gsap';

interface HeroProps {
  onPartnerClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPartnerClick }) => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const line4Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Staggered text reveal with smooth GSAP animation
    tl.fromTo(line1Ref.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(line2Ref.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      '-=0.6'
    )
    .fromTo(line3Ref.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      '-=0.6'
    )
    .fromTo(line4Ref.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      '-=0.6'
    )
    .fromTo(descRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.7 }, 
      '-=0.4'
    )
    .fromTo(ctaRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.7 }, 
      '-=0.5'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="home" className="w-full relative min-h-screen flex flex-col overflow-hidden bg-paper">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             opacity: 0.4
           }}>
      </div>
      
      {/* Subtle Background Image (Depth) */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none">
         <ParallaxImage 
            src="https://images.unsplash.com/photo-1631558556874-1d3550800b46?q=80&w=2533&auto=format&fit=crop"
            alt="Medical Background"
            className="w-full h-full"
            speed={0.05}
         />
      </div>

      {/* Main Hero Content - Takes up full screen */}
      <div className="flex-1 flex items-center container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            
            {/* Left Column: Text & CTA */}
            <div ref={heroTextRef} className="flex flex-col items-start max-w-xl relative z-10">
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-navy-900 leading-[0.95] mb-8 tracking-tight">
                    <span ref={line1Ref} className="block" style={{ opacity: 0 }}>Responsible</span>
                    <span ref={line2Ref} className="block" style={{ opacity: 0 }}>AI</span>
                    <span ref={line3Ref} className="block mt-1" style={{ opacity: 0 }}>built for</span>
                    <span ref={line4Ref} className="block text-brand-blue" style={{ opacity: 0 }}>Healthcare.</span>
                </h1>
                
                <p 
                  ref={descRef}
                  className="text-lg md:text-xl text-navy-800/80 leading-relaxed font-sans mb-10 max-w-lg font-normal"
                  style={{ opacity: 0 }}
                >
                    CRASH Lab builds context-aware foundation models and federated data platforms that automate clinical workflows while ensuring safety, equity, and privacy.
                </p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto" style={{ opacity: 0 }}>
                    <a href="mailto:Suvrankar.datta@ashoka.edu.in" className="group flex items-center justify-center gap-3 px-8 py-4 bg-navy-900 text-white text-sm font-medium rounded-full hover:bg-brand-blue transition-all duration-300">
                        Join the Team
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button 
                      onClick={onPartnerClick}
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-navy-900 text-sm font-medium rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200"
                    >
                        Industry Partners
                    </button>
                </div>
            </div>

            {/* Right Column: Clean 3D Illustration - Benchmark Dashboard */}
            <div className="hidden lg:flex justify-end w-full">
                <div className="relative h-[480px] w-full max-w-[520px] group">
                    
                    {/* Main Dashboard Card */}
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden z-10 transition-all duration-500 group-hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)]">
                        
                        {/* Header */}
                        <div className="h-14 border-b border-gray-100 flex items-center px-6 justify-between bg-gray-50/80">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                                    <BarChart3 size={16} className="text-brand-blue" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-navy-900">RadLE Benchmark</div>
                                    <div className="text-[10px] text-gray-400">Clinical Reasoning Evaluation</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wide">Live</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-4 bg-gray-50 rounded-xl">
                                    <div className="text-2xl font-bold text-navy-900">50</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Cases</div>
                                </div>
                                <div className="text-center p-4 bg-brand-blue/5 rounded-xl border border-brand-blue/20">
                                    <div className="text-2xl font-bold text-brand-blue">5</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">AI Models</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-xl">
                                    <div className="text-2xl font-bold text-navy-900">83%</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Human Avg</div>
                                </div>
                            </div>

                            {/* Leaderboard */}
                            <div className="space-y-3">
                                {/* Header Row */}
                                <div className="flex items-center gap-4 px-4 py-2 text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                                    <div className="w-8">Rank</div>
                                    <div className="flex-1">Model</div>
                                    <div className="w-20 text-right">Score</div>
                                </div>
                                
                                {/* Row 1 - Human Expert (Highlight) */}
                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-brand-blue/5 to-emerald-50/50 border border-brand-blue/20 rounded-xl">
                                    <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white font-bold text-xs">1</div>
                                    <div className="flex-1">
                                        <div className="text-sm font-semibold text-navy-900">Board-Certified Radiologists</div>
                                        <div className="text-[10px] text-gray-500">Human Expert Baseline</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-brand-blue">83%</div>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="flex items-center gap-4 p-3 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors">
                                    <div className="w-7 h-7 rounded bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-[10px]">2</div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-700">GPT-5</div>
                                        <div className="text-[10px] text-gray-400">OpenAI</div>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-600">30%</div>
                                </div>

                                {/* Row 3 */}
                                <div className="flex items-center gap-4 p-3 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors">
                                    <div className="w-7 h-7 rounded bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-[10px]">3</div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-700">Gemini 2.5 Pro</div>
                                        <div className="text-[10px] text-gray-400">Google</div>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-600">28%</div>
                                </div>

                                {/* Row 4 */}
                                <div className="flex items-center gap-4 p-3 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors">
                                    <div className="w-7 h-7 rounded bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-[10px]">4</div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-700">Claude Opus 4</div>
                                        <div className="text-[10px] text-gray-400">Anthropic</div>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-600">24%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge - RSNA */}
                    <div className="absolute -right-3 top-20 bg-navy-900 rounded-xl p-3 shadow-xl z-20 animate-[float_6s_ease-in-out_infinite] group-hover:translate-x-2 transition-transform duration-500">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                <CheckCircle2 size={16} className="text-emerald-400" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-white uppercase tracking-wider">RSNA 2025</div>
                                <div className="text-[9px] text-white/60">Cutting Edge</div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge - Privacy */}
                    <div className="absolute -left-2 bottom-24 bg-white rounded-xl p-3 shadow-xl border border-gray-100 z-20 animate-[floatAlt_7s_ease-in-out_infinite] group-hover:-translate-x-2 transition-transform duration-500">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-brand-blue/10 rounded-lg">
                                <ShieldCheck size={16} className="text-brand-blue" />
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-navy-900">Privacy Safe</div>
                                <div className="text-[9px] text-gray-500">No patient data</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
        <style>{`
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            @keyframes floatAlt {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(8px); }
            }
        `}</style>
      </div>
      {/* Logo Slider Section - At bottom of hero */}
      <LogoSlider />
    </section>
  );
};

// Logo Slider Component with GSAP
const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const logos = [
    { name: 'Koita Foundation', style: 'font-serif font-semibold text-xl' },
    { name: 'IIT Bombay', style: 'font-bold font-sans text-lg' },
    { name: 'RSNA', style: 'font-mono font-bold text-xl' },
    { name: 'Ashoka University', style: 'font-serif font-semibold text-lg' },
    { name: 'MIT CSAIL', style: 'font-mono font-bold text-lg' },
    { name: 'Mayo Clinic', style: 'font-serif text-xl' },
    { name: 'Johns Hopkins', style: 'font-sans font-semibold text-lg' },
  ];

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const items = track.children;
    const totalWidth: number = Array.from(items).slice(0, logos.length).reduce<number>((acc, item) => acc + (item as HTMLElement).offsetWidth + 64, 0);

    // Set up infinite scroll animation
    gsap.set(track, { x: 0 });
    
    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x: string): string => `${parseFloat(x) % totalWidth}px`
      }
    });

    return () => {
      tween.kill();
    };
  }, [logos.length]);

  return (
    <div className="w-full py-6 border-t border-gray-200/60 overflow-hidden bg-paper relative">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none"></div>
      
      <div ref={sliderRef} className="relative overflow-hidden">
        <div ref={trackRef} className="flex items-center gap-16 whitespace-nowrap">
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className={`flex-shrink-0 text-navy-900 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default select-none ${logo.style}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
