import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Database, Shield, Cpu, Users } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';

const Pillars: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const pillars = [
        {
            title: "Data Commons",
            description: "Building national-scale, federated platforms for secure healthcare data sharing. We're addressing India's healthcare data fragmentation challenge while ensuring privacy at every layer.",
            features: [
                "Federated healthcare data platforms",
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

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }

        setTouchEnd(0);
        setTouchStart(0);
    };

    return (
        <section id="research" className="py-24 bg-navy-900 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />

            {/* Background Grid for Technical Feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="mb-16">
                    <FadeIn>
                        <h2 className="text-5xl md:text-7xl font-serif font-semibold text-white leading-tight tracking-tight">
                            <AnimatedHeading text="Our" /> <span className="text-brand-blue"><AnimatedHeading text="Four Pillars" /></span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Pillars Summary Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {pillars.map((pillar, index) => {
                        const Icon = index === 0 ? Database : index === 1 ? Shield : index === 2 ? Cpu : Users;
                        return (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                data-no-cursor="true"
                                className="p-4 rounded-xl border border-white/10 transition-all duration-300 text-left"
                            >
                                <Icon
                                    size={20}
                                    className={`mb-3 transition-colors ${currentIndex === index ? 'text-brand-blue' : 'text-white/50'
                                        }`}
                                />
                                <h3 className={`text-sm font-semibold mb-2 transition-colors ${currentIndex === index ? 'text-white' : 'text-white/70'
                                    }`}>
                                    {pillar.title}
                                </h3>
                                {/* Only show indicator bar for active item */}
                                <div className={`h-0.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-full bg-brand-blue' : 'w-0 bg-transparent'
                                    }`} />
                            </button>
                        );
                    })}
                </div>

                {/* Slider Track */}
                <FadeIn delay={200} className="w-full">
                    <div
                        className="relative w-full overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
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
                                className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-brand-blue w-6' : 'bg-white/10 w-3'}`}
                            />
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="p-2.5 rounded-full border border-white/10 text-white/70 active:bg-white/10 transition-colors"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2.5 rounded-full border border-white/10 text-white/70 active:bg-white/10 transition-colors"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation & Pagination */}
                <div className="hidden md:flex justify-center items-center mt-10 gap-6">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-navy-900 hover:border-white transition-all duration-300"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex gap-2">
                        {pillars.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-brand-blue w-8' : 'bg-white/10 w-6 hover:bg-white/20'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-navy-900 hover:border-white transition-all duration-300"
                    >
                        <ChevronRight size={20} />
                    </button>
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
        <div className={`w-full mx-auto rounded-2xl overflow-hidden flex flex-col md:flex-row h-auto min-h-[420px] transition-all duration-500 ${isDark ? 'bg-[#0a0f1a] border border-white/5 text-white' : 'bg-white border border-gray-100 text-navy-900 shadow-xl'}`}>

            {/* Illustration Section - Fixed mobile height and padding */}
            <div className={`w-full md:w-1/2 h-80 md:h-auto relative overflow-visible flex items-center justify-center p-4 md:p-10 ${isDark ? 'bg-[#0d1424]' : 'bg-gray-50'}`}>
                <div className="w-full h-full relative perspective-[1000px] flex items-center justify-center">
                    {visual}
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative z-10">
                <h3 className={`text-3xl md:text-4xl font-serif font-semibold mb-5 leading-tight tracking-tight ${isDark ? 'text-white' : 'text-navy-900'}`}>
                    {title}
                </h3>
                <p className={`text-base leading-relaxed mb-8 font-normal ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {description}
                </p>
                <div className="mt-6">
                    <p className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                        Key Features
                    </p>
                    <ul className="space-y-2.5">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-medium">
                                <ArrowRight size={14} className={`mt-0.5 shrink-0 ${isDark ? 'text-brand-blue' : 'text-brand-blue'}`} />
                                <span className={isDark ? 'text-gray-300' : 'text-navy-800'}>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

// --- Clean Professional Illustrations ---

const DataCommonsIso = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="relative w-full h-full flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative w-full max-w-[320px] transition-transform duration-500 ${isHovered ? 'scale-[1.02]' : ''}`}>

                {/* Main Card - Dark themed to match background */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">

                    {/* Header */}
                    <div className="h-12 border-b border-white/10 flex items-center px-4 bg-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-brand-blue/20 flex items-center justify-center">
                                <Database size={12} className="text-brand-blue" />
                            </div>
                            <span className="text-xs font-semibold text-white">Federated Network</span>
                        </div>
                        <div className="ml-auto flex items-center gap-1.5 px-2 py-1 bg-emerald-500/20 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                            <span className="text-[9px] text-emerald-400 font-medium">Connected</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        {/* Network Visualization */}
                        <div className="relative h-40 mb-4">
                            {/* Central Hub */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-16 h-16 rounded-2xl bg-brand-blue shadow-lg flex items-center justify-center">
                                    <Database size={24} className="text-white" />
                                </div>
                            </div>

                            {/* Satellite Nodes */}
                            {['Hospital A', 'Clinic B', 'Lab C', 'Hospital D'].map((label, i) => {
                                const positions = [
                                    { x: -70, y: -50 },
                                    { x: 70, y: -50 },
                                    { x: -70, y: 50 },
                                    { x: 70, y: 50 },
                                ];
                                const pos = positions[i];
                                return (
                                    <div key={i} className="absolute left-1/2 top-1/2" style={{ transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}>
                                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:border-brand-blue/50 transition-colors">
                                            <Database size={16} className="text-white/70" />
                                        </div>
                                        <div className="text-[8px] text-white/50 text-center mt-1 font-medium">{label}</div>
                                    </div>
                                );
                            })}

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="text-center p-2 bg-white/5 rounded-lg">
                                <div className="text-lg font-bold text-white">47</div>
                                <div className="text-[9px] text-white/50 uppercase">Sources</div>
                            </div>
                            <div className="text-center p-2 bg-brand-blue/20 rounded-lg">
                                <div className="text-lg font-bold text-brand-blue">100%</div>
                                <div className="text-[9px] text-white/50 uppercase">Private</div>
                            </div>
                            <div className="text-center p-2 bg-white/5 rounded-lg">
                                <div className="text-lg font-bold text-white">24/7</div>
                                <div className="text-[9px] text-white/50 uppercase">Sync</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Badge */}
                <div className={`absolute -right-3 -top-3 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/20 z-20 transition-all duration-500 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} style={{ animation: 'gentleFloat 4s ease-in-out infinite' }}>
                    <div className="flex items-center gap-2">
                        <Shield size={14} className="text-emerald-400" />
                        <span className="text-[9px] text-white font-semibold">End-to-End Encrypted</span>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes gentleFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
            `}</style>
        </div>
    );
};

const StandardsIso = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const metrics = [
        { name: 'Clinical Accuracy', score: 94.2, grade: 'A+' },
        { name: 'Fairness Index', score: 98.0, grade: 'A+' },
        { name: 'Safety Score', score: 99.9, grade: 'A+' },
        { name: 'Explainability', score: 87.5, grade: 'A' },
    ];

    return (
        <div
            className="relative w-full h-full flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative w-full max-w-[320px] transition-transform duration-500 ${isHovered ? 'scale-[1.02]' : ''}`}>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200/60 overflow-hidden">

                    {/* Header */}
                    <div className="h-12 border-b border-gray-100 flex items-center px-4 bg-gray-50/80">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                                <Shield size={12} className="text-brand-blue" />
                            </div>
                            <span className="text-xs font-semibold text-navy-900">Evaluation Suite</span>
                        </div>
                        <div className="ml-auto flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-full">
                            <span className="text-[9px] text-emerald-700 font-semibold">ALL PASS</span>
                        </div>
                    </div>

                    {/* Metrics List */}
                    <div className="p-4 space-y-2">
                        {metrics.map((metric, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors">
                                <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-[10px]">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs font-medium text-gray-700">{metric.name}</div>
                                </div>
                                <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-blue rounded-full" style={{ width: `${metric.score}%` }}></div>
                                </div>
                                <div className="text-xs font-semibold text-gray-600 w-12 text-right">{metric.score}%</div>
                                <div className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] font-bold rounded">
                                    {metric.grade}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">Overall Score</span>
                        <span className="text-lg font-bold text-brand-blue">94.9%</span>
                    </div>
                </div>

                {/* Floating Badge */}
                <div className={`absolute -left-3 bottom-8 bg-white rounded-xl p-2.5 shadow-xl border border-gray-100 z-20 transition-all duration-500 ${isHovered ? '-translate-x-1 translate-y-1' : ''}`} style={{ animation: 'gentleFloat 5s ease-in-out infinite' }}>
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-emerald-100 rounded-lg">
                            <Shield size={12} className="text-emerald-600" />
                        </div>
                        <div>
                            <div className="text-[9px] font-semibold text-navy-900">FDA Ready</div>
                            <div className="text-[8px] text-gray-500">Compliant</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes gentleFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
            `}</style>
        </div>
    );
};

const ModelsIso = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const features = [
        { label: 'Context-Aware', icon: Cpu },
        { label: 'Bias Mitigation', icon: Shield },
        { label: 'Explainable', icon: Database },
        { label: 'Privacy-First', icon: Shield },
    ];

    return (
        <div
            className="relative w-full h-full flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative w-full max-w-[320px] transition-transform duration-500 ${isHovered ? 'scale-[1.02]' : ''}`}>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200/60 overflow-hidden">

                    {/* Header */}
                    <div className="h-12 border-b border-gray-100 flex items-center px-4 bg-gray-50/80">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                                <Cpu size={12} className="text-brand-blue" />
                            </div>
                            <span className="text-xs font-semibold text-navy-900">Foundation Model</span>
                        </div>
                        <div className="ml-auto px-2 py-1 bg-amber-50 border border-amber-200 rounded-full">
                            <span className="text-[9px] text-amber-700 font-semibold">Training</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        {/* Model Visualization */}
                        <div className="relative h-32 mb-4 flex items-center justify-center">
                            {/* Central Model Icon */}
                            <div className="w-20 h-20 rounded-2xl bg-navy-900 shadow-xl flex items-center justify-center relative z-10">
                                <Cpu size={32} className="text-white" />
                                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-blue flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                                </div>
                            </div>

                            {/* Feature Icons */}
                            {features.map((feature, i) => {
                                const positions = [
                                    { x: -65, y: -35 },
                                    { x: 65, y: -35 },
                                    { x: -65, y: 35 },
                                    { x: 65, y: 35 },
                                ];
                                const pos = positions[i];
                                const Icon = feature.icon;
                                return (
                                    <div key={i} className="absolute left-1/2 top-1/2" style={{ transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}>
                                        <div className="w-10 h-10 rounded-xl bg-white border-2 border-gray-200 shadow-md flex items-center justify-center hover:border-brand-blue transition-colors">
                                            <Icon size={16} className="text-gray-500" />
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <line x1="50%" y1="50%" x2="28%" y2="30%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="72%" y2="30%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="28%" y2="70%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="72%" y2="70%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>
                        </div>

                        {/* Feature Labels */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            {['Context-Aware', 'Bias Mitigation', 'Explainable', 'Privacy-First'].map((label, i) => (
                                <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                                    <span className="text-[10px] text-gray-600 font-medium">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between p-3 bg-navy-900 rounded-xl">
                            <div>
                                <div className="text-[9px] text-white/60 uppercase tracking-wider">Parameters</div>
                                <div className="text-lg font-bold text-white">7B</div>
                            </div>
                            <div className="w-px h-8 bg-white/20"></div>
                            <div className="text-right">
                                <div className="text-[9px] text-white/60 uppercase tracking-wider">Status</div>
                                <div className="text-sm font-semibold text-brand-blue">Training</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Badge */}
                <div className={`absolute -right-3 -top-3 bg-white rounded-xl p-2 shadow-xl border border-gray-100 z-20 transition-all duration-500 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} style={{ animation: 'gentleFloat 4s ease-in-out infinite' }}>
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-gradient-to-r from-orange-100 via-white to-green-100 rounded-lg">
                        <span className="text-[9px] font-bold text-navy-900 uppercase tracking-wider">Made for India</span>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes gentleFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
            `}</style>
        </div>
    );
};

const HumanIso = () => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isTyping, setIsTyping] = React.useState(true);

    const messages = [
        { type: 'user', text: 'Patient reports chest pain...' },
        { type: 'ai', text: 'Analyzing symptoms. Recommend ECG and cardiac enzymes.' },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIsTyping(prev => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative w-full h-full flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative w-full max-w-[320px] transition-transform duration-500 ${isHovered ? 'scale-[1.02]' : ''}`}>

                {/* Main Card - Dark themed Chat Interface */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">

                    {/* Header */}
                    <div className="h-12 border-b border-white/10 flex items-center px-4 bg-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-brand-blue/20 flex items-center justify-center">
                                <Users size={12} className="text-brand-blue" />
                            </div>
                            <span className="text-xs font-semibold text-white">Clinical Assistant</span>
                        </div>
                        <div className="ml-auto flex items-center gap-1.5 px-2 py-1 bg-emerald-500/20 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                            <span className="text-[9px] text-emerald-400 font-medium">Online</span>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="p-4 space-y-3 min-h-[180px]">
                        {/* User Message */}
                        <div className="flex justify-end">
                            <div className="max-w-[80%] px-3 py-2 bg-white/10 rounded-xl rounded-br-none">
                                <p className="text-xs text-white/80">{messages[0].text}</p>
                            </div>
                        </div>

                        {/* AI Response */}
                        <div className="flex justify-start">
                            <div className="max-w-[80%] px-3 py-2 bg-brand-blue/20 border border-brand-blue/30 rounded-xl rounded-bl-none">
                                <div className="flex items-center gap-1 mb-1">
                                    <Cpu size={10} className="text-brand-blue" />
                                    <span className="text-[9px] font-semibold text-brand-blue">AI Assistant</span>
                                </div>
                                <p className="text-xs text-white/80">{messages[1].text}</p>
                            </div>
                        </div>

                        {/* Typing Indicator */}
                        <div className={`flex justify-start transition-opacity duration-300 ${isTyping ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl rounded-bl-none">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-t border-white/10 bg-white/5">
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-9 bg-white/5 border border-white/10 rounded-full px-4 flex items-center">
                                <span className="text-xs text-white/40">Type a message...</span>
                            </div>
                            <button className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center hover:bg-brand-blue/90 transition-colors">
                                <ArrowRight size={14} className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Clinician Badge */}
                <div className={`absolute -right-3 bottom-12 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/20 z-20 transition-all duration-500 ${isHovered ? 'translate-x-1' : ''}`} style={{ animation: 'gentleFloat 5s ease-in-out infinite' }}>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center">
                            <Users size={14} className="text-white" />
                        </div>
                        <div>
                            <div className="text-[9px] font-semibold text-white">Dr. Sharma</div>
                            <div className="text-[8px] text-white/60">Radiologist</div>
                        </div>
                    </div>
                </div>

                {/* Floating AI Badge */}
                <div className={`absolute -left-3 -top-3 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/20 z-20 transition-all duration-500 ${isHovered ? '-translate-x-1 -translate-y-1' : ''}`} style={{ animation: 'gentleFloat 4s ease-in-out infinite' }}>
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-brand-blue/20 flex items-center justify-center">
                            <Cpu size={14} className="text-brand-blue" />
                        </div>
                        <div>
                            <div className="text-[9px] font-semibold text-white">AI Copilot</div>
                            <div className="text-[8px] text-white/60">Always Learning</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes gentleFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
            `}</style>
        </div>
    );
};

export default Pillars;