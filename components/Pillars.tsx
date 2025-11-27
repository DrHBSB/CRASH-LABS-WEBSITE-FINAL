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
    const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);
    
    const benchmarkData = [
        { metric: 'Clinical Accuracy', score: 94.2, grade: 'A+', status: 'pass' },
        { metric: 'Fairness Index', score: 98.0, grade: 'A+', status: 'pass' },
        { metric: 'Safety Score', score: 99.9, grade: 'A+', status: 'pass' },
        { metric: 'Explainability', score: 87.5, grade: 'A', status: 'pass' },
    ];

    return (
         <div className="relative w-full h-full flex items-center justify-center group">
            {/* Animated Data Flow Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-1 h-1 bg-brand-blue rounded-full opacity-60"
                        style={{
                            left: `${10 + (i * 12)}%`,
                            animation: `dataFlow ${3 + (i * 0.5)}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative w-72 h-80 transform rotate-x-6 -rotate-y-8 group-hover:rotate-x-0 group-hover:rotate-y-0 transition-transform duration-700 perspective-[1000px]">
                
                {/* Main Dashboard Panel */}
                <div className="absolute inset-0 bg-navy-900 rounded-xl shadow-2xl border border-white/10 overflow-hidden z-30">
                    
                    {/* Header Bar */}
                    <div className="h-10 border-b border-white/10 bg-navy-950/50 flex items-center px-4 justify-between">
                        <div className="flex gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <div className="text-[9px] font-mono text-blue-200/50 tracking-wider">benchmark_v2.json</div>
                        <div className="w-4"></div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-4 relative">
                        {/* Title Section */}
                    <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <Shield size={14} className="text-brand-blue" />
                                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Eval Suite</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[9px] text-green-400 font-mono">ALL PASS</span>
                            </div>
                        </div>

                        {/* Benchmark Results Table */}
                        <div className="space-y-2">
                            {benchmarkData.map((item, index) => (
                                <div 
                                    key={index}
                                    className={`relative flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all duration-300 ${
                                        hoveredRow === index 
                                            ? 'bg-brand-blue/20 border border-brand-blue/40 scale-[1.02]' 
                                            : 'bg-white/5 border border-transparent hover:bg-white/10'
                                    }`}
                                    onMouseEnter={() => setHoveredRow(index)}
                                    onMouseLeave={() => setHoveredRow(null)}
                                >
                                    {/* Rank */}
                                    <div className={`w-5 h-5 rounded text-[9px] font-bold flex items-center justify-center transition-colors ${
                                        hoveredRow === index ? 'bg-brand-blue text-white' : 'bg-white/10 text-white/60'
                                    }`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    
                                    {/* Metric Name */}
                                    <div className="flex-1 min-w-0">
                                        <div className={`text-[11px] font-medium truncate transition-colors ${
                                            hoveredRow === index ? 'text-white' : 'text-gray-300'
                                        }`}>
                                            {item.metric}
                                        </div>
                                    </div>
                                    
                                    {/* Progress Bar */}
                                    <div className="w-16 h-1.5 bg-navy-950 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full transition-all duration-500 ${
                                                hoveredRow === index ? 'bg-brand-blue' : 'bg-gray-500'
                                            }`}
                                            style={{ 
                                                width: hoveredRow === index ? `${item.score}%` : `${item.score * 0.8}%`,
                                                transition: 'width 0.5s ease-out'
                                            }}
                                        />
                                    </div>
                                    
                                    {/* Score */}
                                    <div className={`text-[10px] font-mono w-10 text-right transition-colors ${
                                        hoveredRow === index ? 'text-white' : 'text-gray-400'
                                    }`}>
                                        {item.score}%
                                    </div>
                                    
                                    {/* Grade Badge */}
                                    <div className={`text-[9px] font-bold px-1.5 py-0.5 rounded transition-all ${
                                        hoveredRow === index 
                                            ? 'bg-green-500 text-white scale-110' 
                                            : 'bg-green-500/20 text-green-400'
                                    }`}>
                                        {item.grade}
                                    </div>

                                    {/* Hover Glow Effect */}
                                    {hoveredRow === index && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-purple-500/10 rounded-lg pointer-events-none animate-pulse"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Animated Scan Line */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent animate-[scanlineVertical_3s_linear_infinite]"></div>
                        </div>

                        {/* Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                    </div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -right-6 top-8 w-24 bg-white/10 backdrop-blur-xl rounded-lg p-3 shadow-2xl border border-white/20 z-40 animate-[float_5s_ease-in-out_infinite] group-hover:translate-x-2 transition-transform duration-500">
                    <div className="text-[9px] text-white/60 uppercase tracking-wider mb-1">Avg Score</div>
                    <div className="text-xl font-mono font-bold text-white">94.9<span className="text-brand-blue text-sm">%</span></div>
                    <div className="flex items-center gap-1 mt-1">
                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-green-400"></div>
                        <span className="text-[9px] text-green-400 font-mono">+2.3%</span>
                         </div>
                         </div>

                {/* Floating Compliance Badge */}
                <div className="absolute -left-4 bottom-12 bg-white rounded-lg p-2.5 shadow-2xl border border-gray-100 z-40 animate-[floatDelayed_6s_ease-in-out_infinite] group-hover:-translate-x-2 transition-transform duration-500">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-green-100 rounded-full text-green-600">
                            <Shield size={12} />
                         </div>
                        <div>
                            <div className="text-[10px] font-bold text-navy-900">FDA Ready</div>
                            <div className="text-[8px] text-gray-500">Compliant</div>
                         </div>
                    </div>
                </div>

                {/* Data Stream Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" style={{ transform: 'translateZ(-20px)' }}>
                    <defs>
                        <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2C3E96" stopOpacity="0" />
                            <stop offset="50%" stopColor="#2C3E96" stopOpacity="1" />
                            <stop offset="100%" stopColor="#2C3E96" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="url(#dataGradient)" strokeWidth="1" strokeDasharray="4 4" className="animate-[dashMove_2s_linear_infinite]" />
                    <line x1="10%" y1="80%" x2="90%" y2="80%" stroke="url(#dataGradient)" strokeWidth="1" strokeDasharray="4 4" className="animate-[dashMove_2.5s_linear_infinite_reverse]" />
                </svg>
            </div>

            {/* Custom Animations */}
            <style>{`
                @keyframes dataFlow {
                    0%, 100% { 
                        top: 100%; 
                        opacity: 0;
                    }
                    10% { opacity: 0.6; }
                    90% { opacity: 0.6; }
                    50% { 
                        top: 0%; 
                    }
                }
                @keyframes scanlineVertical {
                    0% { top: -10%; }
                    100% { top: 110%; }
                }
                @keyframes dashMove {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: 40; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes floatDelayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(8px); }
                }
            `}</style>
        </div>
    );
};

const ModelsIso = () => {
    const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(null);
    const [isHovered, setIsHovered] = React.useState(false);

    const features = [
        { label: 'Context-Aware', icon: '🎯', color: 'from-brand-blue to-indigo-600' },
        { label: 'Bias Mitigation', icon: '⚖️', color: 'from-purple-500 to-pink-500' },
        { label: 'Explainable', icon: '💡', color: 'from-amber-500 to-orange-500' },
        { label: 'Privacy-First', icon: '🔒', color: 'from-green-500 to-emerald-500' },
    ];

    return (
        <div 
            className="relative w-full h-full flex items-center justify-center perspective-[1200px] group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setHoveredFeature(null); }}
        >
            {/* Animated Neural Network Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                    {/* Neural network nodes */}
                    {[...Array(12)].map((_, i) => {
                        const x = 30 + (i % 4) * 50;
                        const y = 40 + Math.floor(i / 4) * 60;
                        return (
                            <g key={i}>
                                <circle 
                                    cx={x} 
                                    cy={y} 
                                    r="4" 
                                    fill="#2C3E96"
                                    className="animate-[nodePulse_2s_ease-in-out_infinite]"
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                />
                                {/* Connection lines */}
                                {i < 8 && (
                                    <line 
                                        x1={x} 
                                        y1={y} 
                                        x2={30 + ((i + 4) % 4) * 50} 
                                        y2={y + 60}
                                        stroke="#2C3E96"
                                        strokeWidth="0.5"
                                        strokeOpacity="0.3"
                                        className="animate-[lineFlow_3s_linear_infinite]"
                                        style={{ animationDelay: `${i * 0.2}s` }}
                                    />
                                )}
                            </g>
                        );
                    })}
                </svg>
            </div>

            {/* Main Container */}
            <div className={`relative w-64 h-72 transform transition-all duration-700 ${isHovered ? 'rotate-x-0 rotate-y-0 scale-105' : 'rotate-x-8 -rotate-y-12'}`}>
                
                {/* Central AI Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`relative w-32 h-32 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
                        
                        {/* Outer Glow Ring */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-blue via-purple-500 to-pink-500 opacity-20 blur-xl transition-all duration-500 ${isHovered ? 'scale-150 opacity-40' : ''}`}></div>
                        
                        {/* Hexagonal Core */}
                        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                            
                            {/* Inner Grid Pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(44,62,150,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(44,62,150,0.1)_1px,transparent_1px)] bg-[size:8px_8px]"></div>
                            
                            {/* Animated Circuit Lines */}
                            <svg className="absolute inset-0 w-full h-full">
                                <defs>
                                    <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#2C3E96" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#2C3E96" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path 
                                    d="M 20 64 L 44 64 L 64 44 L 64 20" 
                                    stroke="url(#circuitGrad)" 
                                    strokeWidth="2" 
                                    fill="none"
                                    className="animate-[circuitFlow_2s_linear_infinite]"
                                />
                                <path 
                                    d="M 108 64 L 84 64 L 64 84 L 64 108" 
                                    stroke="url(#circuitGrad)" 
                                    strokeWidth="2" 
                                    fill="none"
                                    className="animate-[circuitFlow_2s_linear_infinite_reverse]"
                                    style={{ animationDelay: '1s' }}
                                />
                            </svg>
                            
                            {/* Central Chip Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
                                    <Cpu className={`w-12 h-12 transition-all duration-500 ${isHovered ? 'text-brand-blue' : 'text-white/80'}`} strokeWidth={1.5} />
                                    
                                    {/* Pulsing Core */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-4 h-4 rounded-full bg-brand-blue transition-all duration-300 ${isHovered ? 'animate-ping' : 'animate-pulse'}`}></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Scan Line Effect */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-brand-blue/20 via-brand-blue/10 to-transparent animate-[coreScan_3s_ease-in-out_infinite]"></div>
                            </div>
                        </div>
                        
                        {/* Corner Accents */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-brand-blue rounded-tl"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-brand-blue rounded-tr"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-purple-500 rounded-bl"></div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-500 rounded-br"></div>
                    </div>
                </div>

                {/* Orbiting Feature Nodes */}
                {features.map((feature, index) => {
                    const angle = (index * 90) - 45; // Position at corners
                    const radius = 100;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                        <div
                            key={index}
                            className={`absolute left-1/2 top-1/2 transition-all duration-500 cursor-pointer z-20`}
                            style={{
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${hoveredFeature === index ? 'scale(1.2)' : 'scale(1)'}`,
                                animation: isHovered ? 'none' : `orbitFloat_${index} 4s ease-in-out infinite`,
                                animationDelay: `${index * 0.5}s`
                            }}
                            onMouseEnter={() => setHoveredFeature(index)}
                            onMouseLeave={() => setHoveredFeature(null)}
                        >
                            <div className={`relative group/node`}>
                                {/* Node Glow */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color} blur-md transition-opacity duration-300 ${hoveredFeature === index ? 'opacity-60' : 'opacity-0'}`}></div>
                                
                                {/* Node Body */}
                                <div className={`relative w-14 h-14 rounded-xl bg-white shadow-xl border-2 transition-all duration-300 flex items-center justify-center ${hoveredFeature === index ? 'border-brand-blue bg-brand-blue/5' : 'border-gray-100'}`}>
                                    <span className="text-xl">{feature.icon}</span>
                                    
                                    {/* Active Indicator */}
                                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-300 ${hoveredFeature === index ? 'bg-green-500 scale-100' : 'bg-gray-300 scale-75'}`}>
                                        {hoveredFeature === index && (
                                            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping"></div>
                                        )}
                     </div>
                 </div>

                                {/* Label Tooltip */}
                                <div className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-navy-900 text-white text-[9px] font-bold uppercase tracking-wider rounded transition-all duration-300 ${hoveredFeature === index ? 'opacity-100 -bottom-8' : 'opacity-0 -bottom-6 pointer-events-none'}`}>
                                    {feature.label}
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-navy-900 rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Connection Lines to Features */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                    <defs>
                        <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2C3E96" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    {features.map((_, index) => {
                        const angle = (index * 90) - 45;
                        const startRadius = 50;
                        const endRadius = 85;
                        const startX = 128 + Math.cos((angle * Math.PI) / 180) * startRadius;
                        const startY = 144 + Math.sin((angle * Math.PI) / 180) * startRadius;
                        const endX = 128 + Math.cos((angle * Math.PI) / 180) * endRadius;
                        const endY = 144 + Math.sin((angle * Math.PI) / 180) * endRadius;
                        
                        return (
                            <line
                                key={index}
                                x1={startX}
                                y1={startY}
                                x2={endX}
                                y2={endY}
                                stroke="url(#connectionGrad)"
                                strokeWidth={hoveredFeature === index ? "2" : "1"}
                                strokeDasharray={hoveredFeature === index ? "0" : "4 4"}
                                className={`transition-all duration-300 ${hoveredFeature === index ? 'opacity-100' : 'opacity-40'}`}
                            />
                        );
                    })}
                </svg>

                {/* Floating "India" Badge */}
                <div className={`absolute -right-4 top-4 bg-gradient-to-r from-orange-500 via-white to-green-500 p-[2px] rounded-lg shadow-xl z-30 transition-all duration-500 ${isHovered ? 'translate-x-2 scale-110' : ''} animate-[float_5s_ease-in-out_infinite]`}>
                    <div className="bg-white px-3 py-1.5 rounded-md">
                        <span className="text-[10px] font-bold text-navy-900 uppercase tracking-wider">Made for India</span>
                    </div>
                </div>

                {/* Floating Stats */}
                <div className={`absolute -left-6 bottom-8 bg-navy-900 rounded-lg p-3 shadow-2xl border border-white/10 z-30 transition-all duration-500 ${isHovered ? '-translate-x-2' : ''} animate-[floatDelayed_6s_ease-in-out_infinite]`}>
                    <div className="text-[9px] text-white/60 uppercase tracking-wider mb-1">Parameters</div>
                    <div className="text-lg font-mono font-bold text-white">7<span className="text-brand-blue text-sm">B</span></div>
                    <div className="flex items-center gap-1 mt-1">
                        <div className="w-8 h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-brand-blue rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-[8px] text-brand-blue font-mono">Training</span>
                    </div>
                </div>
             </div>

            {/* Custom Animations */}
            <style>{`
                @keyframes nodePulse {
                    0%, 100% { opacity: 0.4; r: 4; }
                    50% { opacity: 1; r: 6; }
                }
                @keyframes lineFlow {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: 20; }
                }
                @keyframes circuitFlow {
                    0% { stroke-dashoffset: 100; }
                    100% { stroke-dashoffset: 0; }
                }
                @keyframes coreScan {
                    0%, 100% { top: -20%; }
                    50% { top: 100%; }
                }
                @keyframes orbitFloat_0 {
                    0%, 100% { transform: translate(calc(-50% + 71px), calc(-50% + -71px)) translateY(0); }
                    50% { transform: translate(calc(-50% + 71px), calc(-50% + -71px)) translateY(-6px); }
                }
                @keyframes orbitFloat_1 {
                    0%, 100% { transform: translate(calc(-50% + 71px), calc(-50% + 71px)) translateY(0); }
                    50% { transform: translate(calc(-50% + 71px), calc(-50% + 71px)) translateY(6px); }
                }
                @keyframes orbitFloat_2 {
                    0%, 100% { transform: translate(calc(-50% + -71px), calc(-50% + 71px)) translateY(0); }
                    50% { transform: translate(calc(-50% + -71px), calc(-50% + 71px)) translateY(-6px); }
                }
                @keyframes orbitFloat_3 {
                    0%, 100% { transform: translate(calc(-50% + -71px), calc(-50% + -71px)) translateY(0); }
                    50% { transform: translate(calc(-50% + -71px), calc(-50% + -71px)) translateY(6px); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes floatDelayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(8px); }
                }
            `}</style>
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