import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Database, Server, Shield, CheckCircle, BarChart3, Cpu, Network, User, MessageSquare } from 'lucide-react';

const Pillars: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pillars = [
    {
      title: "Data Commons",
      description: "Building national-scale, federated platforms for secure healthcare data sharing. We're addressing India's healthcare data fragmentation challenge while ensuring privacy at every layer.",
      features: [
        "Federated health data platforms",
        "Privacy-preserving collaboration",
        "Infrastructure for national-scale AI benchmarking"
      ],
      theme: "dark", 
      visual: <DataCommonsVisual />
    },
    {
      title: "Standards & Benchmarks",
      description: "Creating robust evaluation frameworks for AI systems that go beyond accuracy. We're setting new gold standards for fairness, reliability, and clinical utility in healthcare AI.",
      features: [
        "Beyond accuracy metrics",
        "Interactive monitoring tools",
        "Gold standard development for regulators and innovators"
      ],
      theme: "light",
      visual: <StandardsVisual />
    },
    {
      title: "AI Models for India",
      description: "Developing context-aware foundation models tailored to South Asian healthcare. Our models integrate bias mitigation, cultural relevance, and explainability from the ground up.",
      features: [
        "Context-aware architectures",
        "Geometric and topology-driven learning",
        "Bias-aware innovation from inception"
      ],
      theme: "light",
      visual: <AIModelsVisual />
    },
    {
      title: "Human-Centric Design",
      description: "Co-creating intuitive AI tools with frontline clinicians. Through hyper-personalized workflows, we're reducing burnout and enhancing care quality.",
      features: [
        "Co-creation with clinicians",
        "Personalized documentation systems",
        "Trusted AI-driven assistants"
      ],
      theme: "dark",
      visual: <HumanCentricVisual />
    }
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Grid for Technical Feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <h2 className="text-5xl md:text-7xl font-serif font-medium text-white leading-tight tracking-tight">
                Our <span className="text-brand-blue italic">Four Pillars</span>
            </h2>
            
            {/* Desktop Controls */}
            <div className="hidden md:flex gap-4">
                <button 
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

        {/* Slider Track */}
        <div className="relative w-full overflow-hidden">
            <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {pillars.map((pillar, index) => (
                    <div key={index} className="w-full shrink-0 px-2 md:px-4 box-border">
                        <Card {...pillar} />
                    </div>
                ))}
            </div>
        </div>

        {/* Mobile Controls / Pagination */}
        <div className="flex justify-between items-center mt-8 md:hidden">
             <div className="flex gap-2">
                {pillars.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-blue w-6' : 'bg-white/20'}`}
                    />
                ))}
            </div>
            <div className="flex gap-4">
                <button 
                    onClick={prevSlide}
                    className="p-3 rounded-full border border-white/20 text-white active:bg-white/10"
                >
                    <ChevronLeft size={20} />
                </button>
                <button 
                    onClick={nextSlide}
                    className="p-3 rounded-full border border-white/20 text-white active:bg-white/10"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>

         {/* Desktop Pagination Dots */}
         <div className="hidden md:flex justify-center mt-12 gap-3">
             {pillars.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-brand-blue w-12' : 'bg-white/20 w-8 hover:bg-white/40'}`}
                />
            ))}
         </div>

      </div>
    </section>
  );
};

interface CardProps {
    title: string;
    description: string;
    features: string[];
    theme: string;
    visual: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, features, theme, visual }) => {
    const isDark = theme === 'dark';
    
    return (
        <div className={`w-full mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row h-auto min-h-[500px] shadow-2xl transition-all duration-500 border ${isDark ? 'bg-navy-900 border-white/10 text-white' : 'bg-paper border-gray-200 text-navy-900'}`}>
            
            {/* Illustration Section */}
            <div className={`w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden flex items-center justify-center p-8 md:p-12 ${isDark ? 'bg-black/20' : 'bg-gray-100'}`}>
               <div className="w-full h-full max-w-sm mx-auto relative perspective-[1000px]">
                   {visual}
               </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
                <h3 className="text-3xl md:text-5xl font-serif font-medium mb-6 leading-tight tracking-tight">
                    {title}
                </h3>
                <p className={`text-base md:text-lg leading-relaxed mb-8 font-light ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {description}
                </p>
                <div className="mt-auto">
                    <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border-b pb-2 inline-block ${isDark ? 'text-gray-500 border-gray-800' : 'text-gray-400 border-gray-200'}`}>
                        Key Features
                    </p>
                    <ul className="space-y-3">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm md:text-base font-medium">
                                <ArrowRight size={16} className={`mt-1 shrink-0 ${isDark ? 'text-brand-blue' : 'text-brand-blue'}`} />
                                <span className={isDark ? 'text-gray-200' : 'text-navy-800'}>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

// --- Illustration Components ---

// Shared Isometric Container Style
const IsoContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="relative w-full h-full transform rotate-x-12 -rotate-y-12 rotate-z-2 transition-transform duration-700 hover:rotate-x-0 hover:rotate-y-0 hover:rotate-z-0 ease-out">
        {children}
    </div>
);

const DataCommonsVisual = () => (
    <IsoContainer>
        {/* Central Node */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-2xl flex items-center justify-center z-20">
             <div className="text-brand-blue">
                 <Database size={48} strokeWidth={1} />
             </div>
             {/* Floating Badge */}
             <div className="absolute -top-3 -right-3 bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg border border-white/20">
                 CORE
             </div>
        </div>

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {/* Satellite Nodes */}
        <div className="absolute top-[10%] left-[10%] w-16 h-16 bg-[#252525] border border-gray-700 rounded-lg flex items-center justify-center shadow-xl animate-[float_4s_ease-in-out_infinite]">
            <Server size={20} className="text-gray-400" />
        </div>
        <div className="absolute top-[10%] right-[10%] w-16 h-16 bg-[#252525] border border-gray-700 rounded-lg flex items-center justify-center shadow-xl animate-[float_5s_ease-in-out_infinite_reverse]">
             <Server size={20} className="text-gray-400" />
        </div>
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#252525] border border-gray-700 rounded-lg flex items-center justify-center shadow-xl animate-[float_6s_ease-in-out_infinite]">
             <Shield size={20} className="text-green-500" />
        </div>
    </IsoContainer>
);

const StandardsVisual = () => (
    <IsoContainer>
        {/* Main Dashboard Card */}
        <div className="absolute inset-x-4 inset-y-12 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col overflow-hidden">
             <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-3 space-x-2">
                 <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                 <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             </div>
             <div className="p-6 space-y-4">
                 <div className="flex items-center justify-between">
                     <span className="text-xs font-bold text-gray-400 uppercase">Compliance</span>
                     <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Pass</span>
                 </div>
                 
                 {/* Progress Bars */}
                 {[0.9, 0.75, 0.95].map((val, i) => (
                     <div key={i} className="space-y-1">
                         <div className="flex justify-between text-[10px] text-gray-500">
                             <span>Metric 0{i+1}</span>
                             <span>{val * 100}%</span>
                         </div>
                         <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                             <div className="h-full bg-brand-blue rounded-full" style={{ width: `${val * 100}%` }}></div>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* Floating Stamp */}
        <div className="absolute -right-2 top-8 w-20 h-20 bg-brand-blue rounded-full border-4 border-white shadow-xl flex items-center justify-center z-20 animate-[float_4s_ease-in-out_infinite]">
             <CheckCircle className="text-white w-10 h-10" />
        </div>

        {/* Floating Chart */}
        <div className="absolute -left-4 bottom-20 w-24 h-24 bg-white rounded-lg border border-gray-200 shadow-lg p-3 z-20 animate-[float_5s_ease-in-out_infinite_reverse]">
             <BarChart3 className="text-navy-900 w-full h-full opacity-80" strokeWidth={1} />
        </div>
    </IsoContainer>
);

const AIModelsVisual = () => (
    <IsoContainer>
        {/* Layer 1 */}
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-48 h-32 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg z-10 flex items-center justify-center">
             <div className="grid grid-cols-4 gap-2 opacity-30">
                 {[...Array(8)].map((_, i) => <div key={i} className="w-2 h-2 bg-navy-900 rounded-full"></div>)}
             </div>
        </div>
        
        {/* Layer 2 (Middle) */}
        <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 w-48 h-32 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl z-20 flex items-center justify-center">
             <Network className="text-brand-blue w-12 h-12 opacity-80" strokeWidth={1.5} />
        </div>

        {/* Layer 3 (Top) */}
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 w-48 h-32 bg-white border border-brand-blue/30 rounded-xl shadow-2xl z-30 flex flex-col items-center justify-center space-y-2">
             <Cpu className="text-navy-900 w-10 h-10" strokeWidth={1.5} />
             <div className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-mono text-gray-500">model_v2.pt</div>
        </div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
             <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#2C3E96" strokeWidth="2" opacity="0.1" />
        </svg>
    </IsoContainer>
);

const HumanCentricVisual = () => (
    <IsoContainer>
        {/* Main Interface Window */}
        <div className="absolute inset-x-8 inset-y-16 bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-2xl flex flex-col overflow-hidden">
             {/* Header */}
             <div className="h-8 bg-[#252525] border-b border-gray-700 flex items-center px-3 justify-between">
                 <div className="flex space-x-1.5">
                     <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                     <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                 </div>
                 <div className="text-[8px] text-gray-500 font-mono">Clinician_View</div>
             </div>
             
             {/* Body */}
             <div className="p-4 space-y-3 relative">
                 {/* Chat Bubbles */}
                 <div className="flex items-start gap-2">
                     <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                         <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
                     </div>
                     <div className="bg-[#252525] rounded-r-lg rounded-bl-lg p-2 text-[10px] text-gray-300 w-3/4 border border-gray-700">
                         Patient showing signs of...
                     </div>
                 </div>
                 <div className="flex items-start gap-2 flex-row-reverse">
                     <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                         <User size={12} className="text-gray-400" />
                     </div>
                     <div className="bg-brand-blue text-white rounded-l-lg rounded-br-lg p-2 text-[10px] w-1/2">
                         Recommended protocol:
                     </div>
                 </div>
             </div>
        </div>

        {/* Floating Tooltips/Cursor */}
        <div className="absolute bottom-24 right-12 w-8 h-8 pointer-events-none z-30 animate-[bounce_2s_infinite]">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none" className="drop-shadow-lg">
                 <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
             </svg>
        </div>
        
        <div className="absolute top-20 -left-4 bg-white text-navy-900 px-3 py-1.5 rounded-lg shadow-xl text-xs font-bold flex items-center gap-2 animate-[float_4s_ease-in-out_infinite]">
            <MessageSquare size={12} className="text-brand-blue" />
            <span>Simplify</span>
        </div>
    </IsoContainer>
);

export default Pillars;