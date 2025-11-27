import React from 'react';
import { ArrowRight, Activity, FileText, Database, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="w-full relative pt-12 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      
      {/* Background Grid Pattern (Subtle) */}
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
                <div className="mb-8 flex items-center gap-2">
                    <span className="px-3 py-1 bg-brand-blue/5 text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-brand-blue/10">
                        New Research
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-navy-900 leading-[0.95] mb-8 tracking-tight">
                    Responsible AI <br/>
                    built for <span className="text-brand-blue">Healthcare.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-navy-800/80 leading-relaxed font-sans mb-10 max-w-lg font-normal">
                    CRASH Lab builds context-aware foundation models and federated data platforms that automate clinical workflows while ensuring safety, equity, and privacy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a href="#join" className="group flex items-center justify-center gap-3 px-8 py-4 bg-navy-900 text-white text-sm font-medium rounded-full hover:bg-brand-blue transition-all duration-300">
                        Request Access
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#research" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-navy-900 text-sm font-medium rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200">
                        Explore The Lab
                    </a>
                </div>

                <div className="mt-20 pt-8 border-t border-gray-200/60 w-full">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                        Collaborating with leading institutions
                    </p>
                    <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                         {/* Text-based logos to keep it clean/editorial */}
                        <span className="text-xl font-serif font-medium text-navy-900 tracking-tight">Koita Foundation</span>
                        <span className="text-lg font-bold font-sans text-navy-900 tracking-tight">IIT Bombay</span>
                        <span className="text-lg font-serif italic text-navy-900">The Lancet</span>
                        <span className="text-xl font-mono font-bold text-navy-900">RSNA</span>
                    </div>
                </div>
            </div>

            {/* Right Column: Isometric Illustration */}
            <div className="relative h-[500px] w-full hidden lg:block perspective-[2000px]">
                {/* Main Transform Container */}
                <div className="relative w-full h-full transform rotate-x-12 -rotate-y-12 rotate-z-2 transition-transform duration-700 hover:rotate-x-0 hover:rotate-y-0 hover:rotate-z-0 ease-out">
                    
                    {/* Floating Plane 1: Main Dashboard */}
                    <div className="absolute top-10 left-10 right-10 bottom-10 bg-white rounded-xl border border-gray-200 shadow-2xl overflow-hidden z-10 flex flex-col">
                        {/* Fake Browser Header */}
                        <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                            <div className="ml-4 px-3 py-1 bg-white rounded-md text-[10px] text-gray-400 border border-gray-100 font-mono flex-grow text-center">
                                crashlab.ai/dashboard/analytics
                            </div>
                        </div>
                        
                        {/* Dashboard Content */}
                        <div className="p-6 grid grid-cols-3 gap-4 h-full bg-white/50">
                            {/* Panel 1 */}
                            <div className="col-span-2 space-y-4">
                                <div className="h-32 rounded-lg border border-gray-100 bg-gray-50/50 p-4 relative overflow-hidden group">
                                    <div className="absolute top-3 left-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Frequency Analysis</div>
                                    {/* Animated SVG Wave */}
                                    <svg className="absolute bottom-0 left-0 w-full h-20 text-brand-blue opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                                        <path d="M0,10 Q20,20 40,10 T80,10 T120,10" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-pulse" />
                                        <path d="M0,15 Q25,5 50,15 T100,15" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-50" />
                                    </svg>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                     <div className="h-24 rounded-lg border border-gray-100 bg-blue-50/30 p-4">
                                        <Activity size={20} className="text-brand-blue mb-2" />
                                        <div className="text-2xl font-serif font-medium text-navy-900">98.2%</div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Accuracy Score</div>
                                     </div>
                                     <div className="h-24 rounded-lg border border-gray-100 bg-gray-50 p-4">
                                        <Database size={20} className="text-gray-400 mb-2" />
                                        <div className="text-lg font-serif font-medium text-navy-900">1.2 TB</div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Dataset Size</div>
                                     </div>
                                </div>
                            </div>
                            
                            {/* Panel 2 (Sidebar) */}
                            <div className="col-span-1 h-full rounded-lg border border-gray-100 bg-gray-50 p-4 space-y-3">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Live Queue</div>
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="flex items-center gap-2 p-2 bg-white rounded border border-gray-100 shadow-sm">
                                        <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse"></div>
                                        <div className="w-12 h-2 bg-gray-100 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Floating Element 2: Code Snippet */}
                    <div className="absolute -right-8 top-32 w-48 bg-navy-900 rounded-lg p-4 shadow-xl z-20 transform translate-z-12 animate-[float_4s_ease-in-out_infinite]">
                        <div className="flex items-center gap-2 mb-3 border-b border-gray-700 pb-2">
                             <FileText size={12} className="text-gray-400" />
                             <span className="text-[10px] text-gray-400 font-mono">model_config.py</span>
                        </div>
                        <div className="space-y-1">
                            <div className="h-1.5 w-3/4 bg-purple-500 rounded-full opacity-80"></div>
                            <div className="h-1.5 w-1/2 bg-blue-400 rounded-full opacity-80"></div>
                            <div className="h-1.5 w-full bg-gray-600 rounded-full opacity-50"></div>
                            <div className="h-1.5 w-2/3 bg-green-400 rounded-full opacity-80"></div>
                        </div>
                    </div>

                    {/* Floating Element 3: Security Badge */}
                    <div className="absolute -left-4 bottom-20 w-40 bg-white rounded-lg p-3 shadow-xl border border-gray-100 z-20 transform translate-z-8 animate-[float_5s_ease-in-out_infinite_reverse]">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-full text-green-600">
                                <ShieldCheck size={16} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-navy-900 font-sans">Privacy Safe</div>
                                <div className="text-[10px] text-gray-500">Federated Learning</div>
                            </div>
                        </div>
                    </div>

                    {/* Connector Lines (SVG Overlay) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ transform: 'translateZ(-10px)' }}>
                        <line x1="20%" y1="50%" x2="0%" y2="80%" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="80%" y1="30%" x2="100%" y2="40%" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>

                </div>
            </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;