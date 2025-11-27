import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Database, Shield, Cpu, Users } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';

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
      visual: <DataCommonsIso />
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
      visual: <StandardsIso />
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
      visual: <ModelsIso />
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
      visual: <HumanIso />
    }
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="research" className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Grid for Technical Feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <FadeIn>
                <h2 className="text-5xl md:text-7xl font-serif font-medium text-white leading-tight tracking-tight">
                    <AnimatedHeading text="Our" /> <span className="text-brand-blue italic"><AnimatedHeading text="Four Pillars" /></span>
                </h2>
             </FadeIn>
            
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
        <FadeIn delay={200} className="w-full">
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
        </FadeIn>

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
        <div className={`w-full mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row h-auto min-h-[550px] shadow-2xl transition-all duration-500 border ${isDark ? 'bg-navy-900 border-white/10 text-white' : 'bg-paper border-gray-200 text-navy-900'}`}>
            
            {/* Illustration Section */}
            <div className={`w-full md:w-1/2 h-80 md:h-auto relative overflow-hidden flex items-center justify-center p-8 md:p-12 ${isDark ? 'bg-[#151c2d]' : 'bg-[#f0f0f0]'}`}>
               <div className="w-full h-full relative perspective-[1000px]">
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

// --- CSS 3D Isometric Components (Matching Hero Style) ---

const DataCommonsIso = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Main Container rotated */}
            <div className="relative w-48 h-48 transform rotate-x-12 rotate-y-12 rotate-z-0 transition-transform hover:rotate-y-0 duration-700">
                
                {/* Central Server Block */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-navy-900 rounded-xl shadow-2xl border border-white/10 z-10 flex items-center justify-center flex-col">
                    <Database className="text-white w-12 h-12 mb-2 opacity-90" strokeWidth={1.5} />
                    <div className="text-[10px] font-mono text-blue-200 uppercase tracking-widest">Federated</div>
                </div>

                {/* Satellite Nodes */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg animate-[float_4s_ease-in-out_infinite] z-20 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 w-28 h-20 bg-navy-800/80 backdrop-blur-md rounded-lg border border-white/10 shadow-lg animate-[float_5s_ease-in-out_infinite_reverse] z-20 p-3">
                    <div className="space-y-2">
                        <div className="h-1.5 w-full bg-white/20 rounded-full"></div>
                        <div className="h-1.5 w-2/3 bg-white/20 rounded-full"></div>
                    </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-brand-blue to-transparent transform -translate-x-1/2 -rotate-45 -z-10"></div>
            </div>
        </div>
    );
};

const StandardsIso = () => {
    return (
         <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-48 h-64 transform rotate-x-6 -rotate-y-12 hover:rotate-0 transition-transform duration-700">
                
                {/* Stacked Panels */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-white rounded-lg shadow-xl border border-gray-100 transform translate-y-0 z-30 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-8 h-8 rounded bg-blue-50 text-brand-blue flex items-center justify-center">
                            <Shield size={16} />
                        </div>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">PASS</span>
                    </div>
                    <div className="space-y-3">
                         <div className="flex justify-between text-[10px] uppercase text-gray-400 font-bold">
                            <span>Fairness</span>
                            <span>98%</span>
                         </div>
                         <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                             <div className="h-full w-[98%] bg-brand-blue"></div>
                         </div>
                         <div className="flex justify-between text-[10px] uppercase text-gray-400 font-bold">
                            <span>Safety</span>
                            <span>99.9%</span>
                         </div>
                         <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                             <div className="h-full w-[99.9%] bg-green-500"></div>
                         </div>
                    </div>
                </div>

                {/* Background Sheets */}
                <div className="absolute top-4 left-4 right-[-1rem] h-40 bg-gray-50 rounded-lg shadow-lg border border-gray-200 transform translate-z-[-20px] z-20 opacity-80"></div>
                <div className="absolute top-8 left-8 right-[-2rem] h-40 bg-gray-100 rounded-lg shadow-md border border-gray-200 transform translate-z-[-40px] z-10 opacity-60"></div>
            </div>
        </div>
    );
};

const ModelsIso = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center perspective-[800px]">
             <div className="relative w-40 h-40 transform rotate-x-12 rotate-y-45 hover:rotate-y-[60deg] transition-transform duration-1000">
                 
                 {/* Neural Cube Concept */}
                 <div className="absolute inset-0 border-2 border-brand-blue/20 bg-blue-50/10 rounded-xl backdrop-blur-sm z-10"></div>
                 <div className="absolute inset-0 transform translate-x-4 translate-y-4 -translate-z-4 border-2 border-brand-blue/20 rounded-xl bg-blue-50/10 z-0"></div>
                 
                 {/* Internal Brain/Chip */}
                 <div className="absolute inset-0 flex items-center justify-center transform translate-z-10">
                     <div className="w-20 h-20 bg-gradient-to-tr from-brand-blue to-purple-600 rounded-lg shadow-2xl flex items-center justify-center animate-pulse">
                        <Cpu className="text-white w-10 h-10" />
                     </div>
                 </div>

                 {/* Orbiting Elements */}
                 <div className="absolute top-1/2 left-1/2 w-60 h-60 border border-brand-blue/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-x-60 animate-[spin_10s_linear_infinite]"></div>
                 <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-purple-500/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-y-60 animate-[spin_15s_linear_infinite_reverse]"></div>
             </div>
        </div>
    );
};

const HumanIso = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
             <div className="relative w-64 h-48 transform rotate-x-20 rotate-y-0 rotate-z-2 hover:rotate-x-0 transition-transform duration-700">
                 
                 {/* Interface Panel */}
                 <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                     <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-3 gap-2">
                         <div className="w-2 h-2 rounded-full bg-red-400"></div>
                         <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                         <div className="w-2 h-2 rounded-full bg-green-400"></div>
                     </div>
                     <div className="p-4 flex gap-4 h-full">
                         <div className="w-1/3 h-full bg-white/5 rounded"></div>
                         <div className="w-2/3 space-y-3">
                             <div className="h-8 bg-white/10 rounded w-full"></div>
                             <div className="h-20 bg-brand-blue/20 border border-brand-blue/30 rounded w-full flex items-center justify-center">
                                 <span className="text-[10px] text-brand-blue font-mono">ASSISTANT ACTIVE</span>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Interaction Cursor */}
                 <div className="absolute -bottom-6 -right-6 bg-white text-navy-900 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-bounce z-20">
                     <Users size={14} />
                     <span className="text-xs font-bold uppercase tracking-wider">Clinician</span>
                 </div>
             </div>
        </div>
    );
};

export default Pillars;