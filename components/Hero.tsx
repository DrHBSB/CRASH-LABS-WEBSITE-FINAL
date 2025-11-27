import React from 'react';
import { ArrowRight, FileText, ShieldCheck, BarChart3, Settings2, CheckCircle2 } from 'lucide-react';
import { FadeIn, AnimatedHeading, ParallaxImage } from './Animations';

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full relative pt-12 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-paper">
      
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

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col items-start max-w-2xl relative z-10">
                
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

            {/* Right Column: Isometric Illustration - AI Eval Console */}
            <FadeIn delay={400} className="hidden lg:block w-full">
                <div className="relative h-[500px] w-full perspective-[2000px] group">
                    {/* Main Transform Container */}
                    <div className="relative w-full h-full transform rotate-x-12 -rotate-y-12 rotate-z-2 transition-transform duration-1000 ease-out group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0">
                        
                        {/* Floating Plane 1: Eval Dashboard Console */}
                        <div className="absolute top-10 left-10 right-10 bottom-10 bg-navy-900 rounded-xl border border-white/10 shadow-2xl overflow-hidden z-10 flex flex-col transition-all duration-500 group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
                            
                            {/* Window Header */}
                            <div className="h-10 border-b border-white/10 flex items-center px-4 justify-between bg-navy-950/50 backdrop-blur-sm relative z-20">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                </div>
                                <div className="text-[10px] font-mono text-blue-200/50 tracking-wider">eval_results_final.csv</div>
                                <div className="w-4"></div> 
                            </div>

                            {/* Dashboard Content */}
                            <div className="p-8 relative h-full">
                                {/* Header Section */}
                                <div className="flex justify-between items-end mb-8 relative z-10">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <BarChart3 size={14} className="text-brand-blue" />
                                            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Benchmark Suite</span>
                                        </div>
                                        <div className="text-2xl font-serif text-white">RadLE v1.0 <span className="text-white/40 font-sans font-light text-sm ml-2">Clinical Reasoning</span></div>
                                    </div>
                                    <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] text-green-400 font-mono flex items-center gap-2 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_infinite]"></div>
                                        RUN COMPLETE
                                    </div>
                                </div>

                                {/* Leaderboard Rows */}
                                <div className="space-y-3 relative z-10">
                                    {/* Row 1 - Gemini (Highlight) */}
                                    <div className="relative group/row">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-purple-600 rounded-lg opacity-30 blur group-hover/row:opacity-50 transition duration-500"></div>
                                        <div className="relative flex items-center gap-4 p-4 bg-navy-800 border border-brand-blue/30 rounded-lg shadow-lg">
                                            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white font-bold text-xs shadow-inner">01</div>
                                            <div className="w-32">
                                                <div className="text-sm font-bold text-white">Gemini 3.0</div>
                                                <div className="text-[10px] text-blue-200">Google DeepMind</div>
                                            </div>
                                            <div className="flex-1 flex flex-col gap-1">
                                                <div className="flex justify-between text-[10px] text-white/60">
                                                    <span>Accuracy</span>
                                                    <span>85.2%</span>
                                                </div>
                                                <div className="h-1.5 bg-navy-950 rounded-full overflow-hidden">
                                                    <div className="h-full bg-brand-blue animate-[growWidth_1.5s_ease-out_forwards]" style={{ width: '0%', '--target-width': '85.2%' } as React.CSSProperties}></div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-mono font-bold text-white animate-[pulse_4s_infinite]">A+</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                     <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/5 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                                        <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white/60 font-bold text-[10px]">02</div>
                                        <div className="w-32">
                                            <div className="text-sm font-medium text-gray-300">GPT-5 Pre</div>
                                            <div className="text-[10px] text-gray-500">OpenAI</div>
                                        </div>
                                        <div className="flex-1 h-1.5 bg-navy-950 rounded-full overflow-hidden">
                                            <div className="h-full bg-gray-500 animate-[growWidth_1.5s_ease-out_0.5s_forwards]" style={{ width: '0%', '--target-width': '78%' } as React.CSSProperties}></div>
                                        </div>
                                        <div className="text-xs font-mono text-gray-400">78.4%</div>
                                    </div>

                                    {/* Row 3 */}
                                     <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/5 rounded-lg opacity-60 hover:opacity-100 transition-opacity">
                                        <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white/60 font-bold text-[10px]">03</div>
                                        <div className="w-32">
                                            <div className="text-sm font-medium text-gray-300">Claude 3.5</div>
                                            <div className="text-[10px] text-gray-500">Anthropic</div>
                                        </div>
                                        <div className="flex-1 h-1.5 bg-navy-950 rounded-full overflow-hidden">
                                            <div className="h-full bg-gray-500 animate-[growWidth_1.5s_ease-out_0.8s_forwards]" style={{ width: '0%', '--target-width': '72%' } as React.CSSProperties}></div>
                                        </div>
                                        <div className="text-xs font-mono text-gray-400">72.1%</div>
                                    </div>
                                </div>
                                
                                {/* Background Grid Overlay inside dashboard */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>
                                
                                {/* Scanline Effect */}
                                <div className="absolute inset-0 z-0 animate-[scanline_4s_linear_infinite] pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-[20%] w-full"></div>
                            </div>
                        </div>

                        {/* Floating Element 2: Rubric Config Panel */}
                        <div className="absolute -right-8 top-16 w-48 bg-white/10 backdrop-blur-xl rounded-lg p-4 shadow-2xl border border-white/20 z-20 animate-[float_6s_ease-in-out_infinite] group-hover:translate-x-8 group-hover:translate-y-4 transition-transform duration-700">
                            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                                <Settings2 size={12} className="text-brand-blue" />
                                <span className="text-[10px] text-white font-bold uppercase tracking-wider">Rubric Config</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition-colors">
                                    <CheckCircle2 size={10} className="text-green-400" />
                                    <span>Clinical Safety</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition-colors">
                                    <CheckCircle2 size={10} className="text-green-400" />
                                    <span>Bias Mitigation</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition-colors">
                                    <CheckCircle2 size={10} className="text-green-400" />
                                    <span>Reasoning Chain</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element 3: Security Badge */}
                        <div className="absolute -left-4 bottom-24 bg-white rounded-lg p-3 shadow-2xl border border-gray-100 z-20 animate-[floatDelayed_7s_ease-in-out_infinite] group-hover:-translate-x-8 group-hover:-translate-y-4 transition-transform duration-700">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 rounded-full text-green-600">
                                    <ShieldCheck size={16} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-navy-900 font-sans">Privacy Safe</div>
                                    <div className="text-[10px] text-gray-500">Federated Eval</div>
                                </div>
                            </div>
                        </div>

                        {/* Connector Lines (Fixed to plane) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ transform: 'translateZ(-10px)' }}>
                            <line x1="20%" y1="50%" x2="0%" y2="80%" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
                            <line x1="80%" y1="30%" x2="100%" y2="40%" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
                        </svg>

                    </div>
                </div>
            </FadeIn>

        </div>
        <style>{`
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-12px) rotate(2deg); }
            }
            @keyframes floatDelayed {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(12px) rotate(-2deg); }
            }
            @keyframes growWidth {
                from { width: 0%; }
                to { width: var(--target-width); }
            }
            @keyframes scanline {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(500%); }
            }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
