import React, { useEffect, useRef } from 'react';
import { ArrowRight, BarChart3 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroBProps {
  onPartnerClick?: () => void;
}

const HeroB: React.FC<HeroBProps> = ({ onPartnerClick }) => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(headlineRef.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.9 }
    )
    .fromTo(descRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.7 }, 
      '-=0.5'
    )
    .fromTo(ctaRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6 }, 
      '-=0.4'
    )
    .fromTo(visualRef.current, 
      { opacity: 0, y: 60, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1 }, 
      '-=0.3'
    );

    // Scroll-based tilt animation - starts tilted, becomes flat on scroll
    if (dashboardRef.current) {
      gsap.fromTo(dashboardRef.current,
        { rotateX: 8 },
        {
          rotateX: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: visualRef.current,
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: 1,
          }
        }
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="home" className="w-full relative overflow-hidden bg-paper">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             opacity: 0.3
           }}>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 md:px-10 lg:px-16 pt-6 md:pt-8 pb-12 relative z-10">
        
        {/* Centered Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-navy-900 leading-[1.05] mb-6"
            style={{ opacity: 0, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
          >
            Responsible AI,<br />
            <span className="text-brand-blue">built for Healthcare.</span>
          </h1>
          
          <p 
            ref={descRef}
            className="text-lg md:text-xl text-navy-800/70 leading-relaxed font-sans max-w-2xl mx-auto mb-8"
            style={{ opacity: 0 }}
          >
            CRASH Lab builds context-aware foundation models and federated data platforms that automate clinical workflows while ensuring safety, equity, and privacy.
          </p>

          <div 
            ref={ctaRef} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ opacity: 0 }}
          >
            <a 
              href="https://forms.cloud.microsoft/r/bMKyZtTX6r"
              target="_blank"
              rel="noopener noreferrer" 
              className="group flex items-center justify-center gap-3 px-7 py-3.5 bg-navy-900 text-white text-sm font-medium rounded-full hover:bg-brand-blue transition-all duration-300"
            >
              Join the Team
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={onPartnerClick}
              className="flex items-center justify-center gap-3 px-7 py-3.5 text-navy-900 text-sm font-medium border border-navy-900/30 rounded-full hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
              Industry Partners
            </button>
          </div>
        </div>

        {/* Full-Width RadLE Dashboard with 3D Effect */}
        <div 
          ref={visualRef}
          className="w-full"
          style={{ opacity: 0, perspective: '2000px' }}
        >
          <div 
            ref={dashboardRef}
            className="relative w-full"
            style={{ 
              transform: 'rotateX(8deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Subtle Blue Glow */}
            <div className="absolute -inset-1 bg-brand-blue/10 rounded-3xl blur-xl"></div>
            
            {/* Main Dashboard Container */}
            <div className="relative bg-gradient-to-br from-[#0d1321] via-[#111827] to-[#0f172a] rounded-2xl border border-white/10 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_40px_rgba(35,76,106,0.15)]">
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px] pointer-events-none z-30 opacity-40"></div>
              
              {/* Header Bar */}
              <div className="h-10 md:h-12 border-b border-white/10 flex items-center px-4 md:px-6 justify-between bg-white/5">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/60"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/60"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-steel-500/60"></div>
                  </div>
                  <div className="h-4 md:h-5 w-px bg-white/10"></div>
                  <BarChart3 size={14} className="text-brand-blue md:hidden" />
                  <BarChart3 size={16} className="text-brand-blue hidden md:block" />
                  <span className="text-xs md:text-sm font-bold text-white/90 tracking-wide">RadLE Benchmark</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 rounded-full bg-steel-400 animate-pulse"></div>
                  <span className="text-[9px] md:text-[10px] font-mono text-steel-400/80 uppercase tracking-wider">Live</span>
                </div>
              </div>

              {/* Dashboard Content - Stack on mobile, 70/30 on desktop */}
              <div className="flex flex-col lg:flex-row lg:min-h-[520px]">
                
                {/* Left Section - Chart */}
                <div className="w-full lg:w-[70%] p-4 md:p-6 lg:p-10 lg:border-r border-white/5">
                  {/* Chart Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 md:mb-6">
                    <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wider">Performance Comparison</h3>
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-steel-500/20 text-steel-300 text-[10px] md:text-xs font-bold rounded-full uppercase w-fit">RSNA 2025</span>
                  </div>
                  
                  {/* Bar Chart */}
                  <div className="pt-8 md:pt-12 relative">
                    <div className="flex items-end justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px]">
                      {/* Expert Radiologists */}
                      <div className="flex flex-col items-center flex-1 group relative" style={{ height: '100%' }}>
                        <div className="absolute -top-6 md:-top-9 left-1/2 -translate-x-1/2 text-xs md:text-base font-mono font-bold text-white whitespace-nowrap">83%</div>
                        <div className="w-full h-full bg-gradient-to-t from-brand-dark via-brand-blue to-brand-light rounded-t-md md:rounded-t-lg shadow-lg shadow-brand-blue/30"></div>
                        <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 text-[9px] md:text-xs text-white/60 text-center leading-tight font-medium whitespace-nowrap">Experts</div>
                      </div>
                      
                      {/* Gemini 3.0 Pro */}
                      <div className="flex flex-col items-center flex-1 relative group" style={{ height: '69%' }}>
                        <div className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 px-1.5 md:px-2.5 py-0.5 md:py-1 bg-steel-500 text-white text-[6px] md:text-[8px] font-bold rounded uppercase">New</div>
                        <div className="absolute -top-6 md:-top-9 left-1/2 -translate-x-1/2 text-xs md:text-base font-mono font-bold text-steel-300 whitespace-nowrap">57%</div>
                        <div className="w-full h-full bg-gradient-to-t from-steel-700 via-steel-500 to-steel-400 rounded-t-md md:rounded-t-lg shadow-lg shadow-steel-500/20"></div>
                        <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 text-[9px] md:text-xs text-white/60 text-center leading-tight font-medium whitespace-nowrap">Gemini</div>
                      </div>
                      
                      {/* Gemini Web */}
                      <div className="flex flex-col items-center flex-1 relative" style={{ height: '61%' }}>
                        <div className="absolute -top-6 md:-top-9 left-1/2 -translate-x-1/2 text-xs md:text-base font-mono font-bold text-white/50 whitespace-nowrap">51%</div>
                        <div className="w-full h-full bg-gradient-to-t from-white/25 to-white/15 rounded-t-md md:rounded-t-lg"></div>
                        <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 text-[9px] md:text-xs text-white/40 text-center leading-tight font-medium whitespace-nowrap">Web</div>
                      </div>
                      
                      {/* Radiology Trainees */}
                      <div className="flex flex-col items-center flex-1 relative" style={{ height: '54%' }}>
                        <div className="absolute -top-6 md:-top-9 left-1/2 -translate-x-1/2 text-xs md:text-base font-mono font-bold text-white/50 whitespace-nowrap">45%</div>
                        <div className="w-full h-full bg-gradient-to-t from-white/20 to-white/10 rounded-t-md md:rounded-t-lg"></div>
                        <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 text-[9px] md:text-xs text-white/40 text-center leading-tight font-medium whitespace-nowrap">Trainees</div>
                      </div>
                      
                      {/* GPT-5 */}
                      <div className="flex flex-col items-center flex-1 relative" style={{ height: '36%' }}>
                        <div className="absolute -top-6 md:-top-9 left-1/2 -translate-x-1/2 text-xs md:text-base font-mono font-bold text-white/50 whitespace-nowrap">30%</div>
                        <div className="w-full h-full bg-gradient-to-t from-white/15 to-white/8 rounded-t-md md:rounded-t-lg"></div>
                        <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 text-[9px] md:text-xs text-white/40 text-center leading-tight font-medium whitespace-nowrap">GPT-5</div>
                      </div>
                    </div>
                  </div>
                  {/* Spacer for bottom labels */}
                  <div className="h-10 md:h-16"></div>
                </div>

                {/* Right Section - Stats Panels */}
                <div className="w-full lg:w-[30%] flex flex-col border-t lg:border-t-0 border-white/5">
                  
                  {/* Key Metrics - Horizontal on mobile, vertical on desktop */}
                  <div className="p-4 md:p-6 border-b border-white/5">
                    <div className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest mb-3 md:mb-5">Key Metrics</div>
                    
                    <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 md:gap-4">
                      {/* Human Best */}
                      <div className="p-2.5 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/5">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-wide mb-0.5 md:mb-1">Human</div>
                            <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white font-mono">83%</div>
                          </div>
                          <div className="hidden lg:flex w-12 h-12 rounded-full bg-brand-blue/20 items-center justify-center">
                            <span className="text-xl">👨‍⚕️</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* AI Best */}
                      <div className="p-2.5 md:p-4 bg-brand-blue/10 rounded-lg md:rounded-xl border border-brand-blue/20">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <div className="text-[8px] md:text-[10px] text-brand-blue/60 uppercase tracking-wide mb-0.5 md:mb-1">Best AI</div>
                            <div className="text-lg md:text-2xl lg:text-3xl font-bold text-brand-blue font-mono">57%</div>
                          </div>
                          <div className="hidden lg:flex w-12 h-12 rounded-full bg-brand-blue/20 items-center justify-center">
                            <span className="text-xl">🤖</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Gap */}
                      <div className="p-2.5 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/5">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-wide mb-0.5 md:mb-1">Gap</div>
                            <div className="text-lg md:text-2xl lg:text-3xl font-bold text-steel-300 font-mono">26pt</div>
                          </div>
                          <div className="hidden lg:flex w-12 h-12 rounded-full bg-steel-500/20 items-center justify-center">
                            <span className="text-xl">📊</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Panel - Insight */}
                  <div className="p-4 md:p-6 flex-1">
                    <div className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest mb-2 md:mb-4">Insight</div>
                    
                    <div className="p-3 md:p-5 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-lg md:rounded-xl border border-brand-blue/20">
                      <div className="text-sm md:text-base font-medium text-white/80 leading-relaxed mb-2 md:mb-4">
                        First AI to beat radiology trainees
                      </div>
                      <div className="px-2 md:px-3 py-1 md:py-1.5 bg-steel-500/20 rounded md:rounded-lg text-[8px] md:text-[9px] font-bold text-steel-300 uppercase w-fit">+12% vs Trainees</div>
                    </div>
                    
                    <span className="mt-3 md:mt-5 text-[10px] md:text-xs font-medium text-brand-blue/60 flex items-center gap-1 md:gap-1.5">
                      Read full analysis <ArrowRight size={10} className="md:hidden" /><ArrowRight size={12} className="hidden md:block" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 border-t border-white/5 bg-white/5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider">RSNA 2025 • Cutting Edge Oral Presentation</span>
                <span className="text-[9px] font-mono text-brand-blue/60">crashlab.in/radle</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Spacer between dashboard and logos */}
      <div className="h-16 md:h-20 bg-paper"></div>

      {/* Logo Slider */}
      <LogoSlider />
    </section>
  );
};

// Logo Slider Component (same as original)
const LogoSlider: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const logos = [
    { name: 'Koita Foundation', src: '/images/logos/optimized/KoitaFoundation.webp', style: 'h-8 md:h-10' },
    { name: 'Ashoka University', src: '/images/logos/optimized/AshokaUni.webp', style: 'h-10 md:h-12' },
    { name: 'AIIMS', src: '/images/logos/optimized/AIIMS.webp', style: 'h-12 md:h-16' },
    { name: 'IIT Bombay', src: '/images/logos/optimized/IITBombay.webp', style: 'h-12 md:h-16' },
    { name: 'IIT Delhi', src: '/images/logos/optimized/IITDelhi.webp', style: 'h-12 md:h-16' },
    { name: 'IISc', src: '/images/logos/optimized/IISc.webp', style: 'h-12 md:h-16' },
    { name: 'RSNA', src: '/images/logos/optimized/RSNA.webp', style: 'h-8 md:h-10' },
  ];

  const displayLogos = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    
    const tween = gsap.to(track, {
      x: "-50%",
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    const updateLogoStyles = () => {
      const viewportWidth = window.innerWidth;
      const centerMin = viewportWidth * 0.25;
      const centerMax = viewportWidth * 0.75;
      
      logoRefs.current.forEach((logo) => {
        if (!logo) return;
        
        const rect = logo.getBoundingClientRect();
        const logoCenter = rect.left + rect.width / 2;
        const img = logo.querySelector('img');
        
        if (!img) return;

        let grayscale = 1;
        let opacity = 0.4;

        if (logoCenter >= centerMin && logoCenter <= centerMax) {
          grayscale = 0;
          opacity = 1;
        } else {
           const distToZone = logoCenter < centerMin 
              ? centerMin - logoCenter 
              : logoCenter - centerMax;
            
           const transitionRange = 100;
           const factor = Math.min(distToZone / transitionRange, 1);
           
           grayscale = factor; 
           opacity = 1 - (factor * 0.6);
        }
        
        gsap.set(img, { 
            filter: `grayscale(${grayscale}) contrast(1.2) brightness(1.1)`,
            opacity: opacity
        });
      });
    };

    gsap.ticker.add(updateLogoStyles);

    return () => {
      tween.kill();
      gsap.ticker.remove(updateLogoStyles);
    };
  }, []);

  return (
    <div className="w-full py-5 border-t border-gray-200/60 overflow-hidden bg-paper relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none"></div>
      
      <div className="relative overflow-hidden">
        <div ref={trackRef} className="flex items-center gap-16 whitespace-nowrap w-fit px-8">
          {displayLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              ref={el => logoRefs.current[index] = el}
              className="flex-shrink-0 cursor-pointer flex items-center justify-center relative group"
              title={logo.name}
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                loading="lazy"
                className={`w-auto object-contain mix-blend-multiply ${logo.style}`}
                style={{ filter: 'grayscale(100%) contrast(1.2) brightness(1.1)', opacity: 0.4 }} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroB;

