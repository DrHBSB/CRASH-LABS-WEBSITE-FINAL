import React, { useEffect, useRef } from 'react';
import { ArrowRight, BarChart3 } from 'lucide-react';
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
    <section id="home" className="w-full relative min-h-[80vh] md:min-h-screen flex flex-col overflow-hidden bg-paper py-10 md:py-0">
      
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
                    <a href="mailto:suvrankar.datta@ashoka.edu.in" className="group flex items-center justify-center gap-3 px-8 py-4 bg-navy-900 text-white text-sm font-medium rounded-full hover:bg-brand-blue transition-all duration-300">
                        Join the Team
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button 
                      onClick={onPartnerClick}
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-navy-900 text-sm font-medium rounded-full hover:bg-navy-900 hover:text-white transition-all duration-300 border border-navy-900/20"
                    >
                        Industry Partners
                    </button>
                </div>
            </div>

            {/* Right Column: Futuristic 3D Dashboard */}
            <div className="hidden lg:flex justify-end w-full">
                <div className="relative h-[500px] w-full max-w-[540px] group" style={{ perspective: '1200px' }}>
                    
                    {/* 3D Transform Container */}
                    <div 
                        className="relative w-full h-full transition-transform duration-700 ease-out"
                        style={{ 
                            transform: 'rotateX(8deg) rotateY(-12deg)',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* Glow Effect Behind */}
                        <div className="absolute inset-4 bg-gradient-to-br from-brand-blue/20 via-purple-500/10 to-transparent rounded-3xl blur-2xl"></div>
                        
                        {/* Main Dashboard Panel */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1321] via-[#111827] to-[#0f172a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                            
                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-30 opacity-30"></div>
                            
                            {/* Header Bar */}
                            <div className="h-12 border-b border-white/10 flex items-center px-5 justify-between bg-white/5 backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-steel-500/60"></div>
                                    </div>
                                    <div className="h-4 w-px bg-white/10 mx-2"></div>
                                    <BarChart3 size={14} className="text-brand-blue" />
                                    <span className="text-[11px] font-bold text-white/90 tracking-wide">RadLE Benchmark</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-steel-400 animate-pulse"></div>
                                    <span className="text-[9px] font-mono text-steel-400/80 uppercase tracking-wider">Live</span>
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-3 px-5 py-4 border-b border-white/5">
                                <div className="text-center p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="text-xl font-bold text-white font-mono">83%</div>
                                    <div className="text-[8px] text-white/40 uppercase tracking-widest mt-1">Human Best</div>
                                </div>
                                <div className="text-center p-3 bg-brand-blue/10 rounded-lg border border-brand-blue/20">
                                    <div className="text-xl font-bold text-brand-blue font-mono">57%</div>
                                    <div className="text-[8px] text-brand-blue/60 uppercase tracking-widest mt-1">AI Best</div>
                                </div>
                                <div className="text-center p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="text-xl font-bold text-white/60 font-mono">26</div>
                                    <div className="text-[8px] text-white/40 uppercase tracking-widest mt-1">Point Gap</div>
                                </div>
                            </div>

                            {/* Chart Area */}
                            <div className="p-5 pt-6 relative">
                                {/* Bar Chart */}
                                <div className="flex items-end justify-between gap-2.5 px-1 pb-6">
                                    {/* Expert Radiologists */}
                                    <div className="flex flex-col items-center flex-1 group/bar">
                                        <div className="text-[10px] font-mono font-bold text-white mb-2">83%</div>
                                        <div className="w-full bg-gradient-to-t from-brand-dark via-brand-blue to-brand-light rounded-t-md shadow-lg shadow-brand-blue/30 group-hover/bar:shadow-brand-blue/50 transition-shadow" style={{ height: '180px' }}></div>
                                        <div className="text-[8px] text-white/50 text-center leading-tight mt-2 font-medium">Expert<br/>Radiologists</div>
                                    </div>
                                    
                                    {/* Gemini 3.0 Pro API */}
                                    <div className="flex flex-col items-center flex-1 relative group/bar">
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-steel-500 text-white text-[6px] font-bold rounded uppercase tracking-wider">New</div>
                                        <div className="text-[10px] font-mono font-bold text-steel-400 mb-2">57%</div>
                                        <div className="w-full bg-gradient-to-t from-steel-600/80 to-steel-400/60 rounded-t-md" style={{ height: '124px' }}></div>
                                        <div className="text-[8px] text-white/50 text-center leading-tight mt-2 font-medium">Gemini 3.0<br/>Pro</div>
                                    </div>
                                    
                                    {/* Gemini Web */}
                                    <div className="flex flex-col items-center flex-1">
                                        <div className="text-[10px] font-mono font-bold text-white/50 mb-2">51%</div>
                                        <div className="w-full bg-gradient-to-t from-white/20 to-white/10 rounded-t-md" style={{ height: '110px' }}></div>
                                        <div className="text-[8px] text-white/40 text-center leading-tight mt-2 font-medium">Gemini<br/>(Web)</div>
                                    </div>
                                    
                                    {/* Radiology Trainees */}
                                    <div className="flex flex-col items-center flex-1">
                                        <div className="text-[10px] font-mono font-bold text-white/50 mb-2">45%</div>
                                        <div className="w-full bg-gradient-to-t from-white/15 to-white/8 rounded-t-md" style={{ height: '97px' }}></div>
                                        <div className="text-[8px] text-white/40 text-center leading-tight mt-2 font-medium">Radiology<br/>Trainees</div>
                                    </div>
                                    
                                    {/* GPT-5 */}
                                    <div className="flex flex-col items-center flex-1">
                                        <div className="text-[10px] font-mono font-bold text-white/50 mb-2">30%</div>
                                        <div className="w-full bg-gradient-to-t from-white/12 to-white/6 rounded-t-md" style={{ height: '65px' }}></div>
                                        <div className="text-[8px] text-white/40 text-center leading-tight mt-2 font-medium">GPT-5<br/>Thinking</div>
                                    </div>
                                </div>
                                
                                {/* Grid Lines */}
                                <div className="absolute inset-x-5 top-6 bottom-12 pointer-events-none">
                                    <div className="h-full flex flex-col justify-between">
                                        {[100, 75, 50, 25, 0].map((val) => (
                                            <div key={val} className="flex items-center gap-2">
                                                <span className="text-[7px] font-mono text-white/20 w-6 text-right">{val}%</span>
                                                <div className="flex-1 h-px bg-white/5"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="absolute bottom-0 left-0 right-0 px-5 py-3 border-t border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-between">
                                <span className="text-[8px] font-mono text-white/30 uppercase tracking-wider">RSNA 2025 • Cutting Edge Oral</span>
                                <span className="text-[8px] font-mono text-brand-blue/60">crashlab.in/radle</span>
                            </div>
                            
                            {/* Reflection/Glow at bottom */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-brand-blue/20 blur-3xl rounded-full"></div>
                        </div>
                        
                        {/* Side Edge Effect */}
                        <div className="absolute top-4 bottom-4 -right-1 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full" style={{ transform: 'translateZ(-10px)' }}></div>
                        <div className="absolute -bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full" style={{ transform: 'translateZ(-10px)' }}></div>
                    </div>
                </div>
            </div>

        </div>
        
      </div>
      {/* Logo Slider Section - At bottom of hero */}
      <LogoSlider />
    </section>
  );
};

// PartnerLogo Component handles lazy loading and fallback - Refactored for GSAP control
const PartnerLogo = React.forwardRef<HTMLDivElement, { logo: { name: string; src: string; style: string } }>(({ logo }, ref) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  return (
    <div
      ref={ref}
      className="flex-shrink-0 cursor-pointer flex items-center justify-center relative group logo-item"
      title={logo.name}
    >
      {/* Text Fallback (visible while loading or on error) */}
      <div 
        className={`text-navy-900 font-serif font-semibold whitespace-nowrap transition-opacity duration-300 absolute inset-0 flex items-center justify-center ${
          isLoaded && !hasError ? 'opacity-0' : 'opacity-40'
        }`}
      >
        {logo.name}
      </div>

      {/* Optimized Logo Image */}
      <img 
        src={logo.src} 
        alt={logo.name} 
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        // Removed default grayscale/opacity classes here; they will be controlled by the parent ticker
        // initialized with base styles for SSR/initial render
        className={`w-auto object-contain mix-blend-multiply transition-opacity duration-500 
          ${isLoaded && !hasError ? 'opacity-100' : 'opacity-0'} 
          ${logo.style}`}
        style={{ filter: 'grayscale(100%) contrast(1.2) brightness(1.1)', opacity: 0.4 }} 
      />
    </div>
  );
});

PartnerLogo.displayName = 'PartnerLogo';

// Logo Slider Component with GSAP
const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
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

  // Quadruple the logos to ensure enough buffer for the loop and viewport coverage
  const displayLogos = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    
    // Set up infinite scroll animation
    const tween = gsap.to(track, {
      x: "-50%",
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    // Dynamic coloring based on position
    const updateLogoStyles = () => {
      const viewportWidth = window.innerWidth;
      const centerMin = viewportWidth * 0.25; // Start of center zone (25%)
      const centerMax = viewportWidth * 0.75; // End of center zone (75%)
      
      logoRefs.current.forEach((logo) => {
        if (!logo) return;
        
        const rect = logo.getBoundingClientRect();
        const logoCenter = rect.left + rect.width / 2;
        const img = logo.querySelector('img');
        
        if (!img) return;

        // Check if logo is within the center ("color") zone
        // We add a little feathering/transition area
        
        let grayscale = 1; // Default fully grayscale
        let opacity = 0.4; // Default low opacity

        if (logoCenter >= centerMin && logoCenter <= centerMax) {
          // Inside the zone: Full color, Full opacity
          grayscale = 0;
          opacity = 1;
        } else {
           // Outside zone: Calculate distance from nearest edge for smooth transition (optional)
           // For now, per requirement: "automatically... when they are outside the middel... use the filters"
           // To make it smooth, we can interpolate slightly near the edges
           
           const distToZone = logoCenter < centerMin 
              ? centerMin - logoCenter 
              : logoCenter - centerMax;
            
           // Transition over 100px pixels
           const transitionRange = 100;
           const factor = Math.min(distToZone / transitionRange, 1); // 0 (at edge) -> 1 (far away)
           
           // Simple smoothstep-like transition
           grayscale = factor; 
           opacity = 1 - (factor * 0.6); // 1 -> 0.4
        }
        
        // Apply styles directly for performance
        // Added contrast and brightness to help remove background artifacts (make white backgrounds pure white for blend mode)
        gsap.set(img, { 
            filter: `grayscale(${grayscale}) contrast(1.2) brightness(1.1)`,
            opacity: opacity
        });
      });
    };

    // Add listener to GSAP ticker for performance (runs every frame)
    gsap.ticker.add(updateLogoStyles);

    return () => {
      tween.kill();
      gsap.ticker.remove(updateLogoStyles);
    };
  }, []);

  return (
    <div className="w-full py-6 border-t border-gray-200/60 overflow-hidden bg-paper relative mt-auto">
      {/* Heading */}
      <div className="container mx-auto px-6 md:px-12 mb-6 text-center">
        {/* <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900/40">
          Trusted by leading research institutions
        </p> */}
      </div>

      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none"></div>
      
      <div ref={sliderRef} className="relative overflow-hidden">
        <div ref={trackRef} className="flex items-center gap-16 whitespace-nowrap w-fit px-8">
          {displayLogos.map((logo, index) => (
            <PartnerLogo 
                key={`${logo.name}-${index}`} 
                logo={logo} 
                ref={el => logoRefs.current[index] = el}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
