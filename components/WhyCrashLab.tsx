import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { FadeIn, ParallaxImage, AnimatedHeading } from './Animations';

interface WhyCrashLabProps {
    onReadMore?: () => void;
}

const WhyCrashLab: React.FC<WhyCrashLabProps> = ({ onReadMore }) => {
  return (
    <section className="py-24 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Featured Research Block with Parallax */}
        <FadeIn className="w-full h-full">
            <div 
                onClick={onReadMore}
                className="w-full bg-navy-900 rounded-2xl mb-24 relative overflow-hidden group shadow-2xl cursor-pointer min-h-[500px] flex items-end"
            >
                {/* Parallax Background Image */}
                <ParallaxImage 
                    src="https://images.unsplash.com/photo-1576091160550-217358c7e618?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Medical AI Analysis"
                    className="absolute inset-0 w-full h-full"
                    imageClassName="opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000 ease-out"
                    speed={0.15}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent pointer-events-none"></div>

                <div className="relative z-10 p-8 md:p-16 w-full max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full">
                            Benchmark Update
                        </span>
                        <span className="text-white/60 text-xs font-mono uppercase tracking-widest">
                            Nov 20, 2025
                        </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] mb-6 tracking-tight group-hover:text-blue-200 transition-colors">
                        Gemini 3.0 Pro Surpasses Radiology Trainees on Radiology's Last Exam (RadLE)
                    </h2>

                    <p className="text-white/70 text-lg md:text-xl font-sans font-light leading-relaxed mb-8 max-w-2xl line-clamp-2">
                        For the first time, a generalist AI model has crossed trainee-level performance. Read the full analysis by Dr. Suvrankar Datta and team.
                    </p>

                    <div className="flex items-center gap-4 text-white font-bold uppercase tracking-[0.2em] text-xs group/btn">
                        <span>Read Full Analysis</span>
                        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-navy-900 transition-all">
                            <ArrowRight size={16} />
                        </div>
                    </div>
                </div>

                {/* Decorative Floating UI Elements */}
                <div className="absolute top-12 right-12 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10 hidden md:block animate-[float_6s_ease-in-out_infinite]">
                    <div className="flex items-center gap-3 mb-2">
                        <FileText size={16} className="text-brand-blue" />
                        <span className="text-[10px] font-bold text-white uppercase">Accuracy Delta</span>
                    </div>
                    <div className="text-3xl font-serif text-white font-medium">+6.0%</div>
                    <div className="text-[10px] text-green-400 mt-1">vs Trainees</div>
                </div>
            </div>
        </FadeIn>

        {/* Content Split */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-navy-900 mb-8 tracking-tight leading-tight">
                        <AnimatedHeading text="The challenges," wordMode={true} /> <br/>
                        <AnimatedHeading text="and why they chose" wordMode={true} /> <span className="text-brand-blue"><AnimatedHeading text="Crash Lab." wordMode={true} /></span>
                    </h2>
                </FadeIn>
                <FadeIn delay={200}>
                    <div className="flex gap-4 mb-8">
                        <span className="px-4 py-1.5 border border-navy-900/20 text-navy-900 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full">
                            Beyond Inheriting
                        </span>
                        <span className="px-4 py-1.5 bg-navy-900 text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full">
                            We're Inventing
                        </span>
                    </div>
                </FadeIn>
            </div>

            <div className="space-y-8 text-lg text-navy-800 leading-relaxed font-sans font-light">
                <FadeIn delay={300}>
                    <p>
                        India's healthcare needs demand that we invent, not just inherit, how AI is developed and deployed. We're built to enable busy clinicians to pioneer new frameworks and collaborative practices that set the standard for ethical, responsible healthcare AI.
                    </p>
                </FadeIn>
                
                <ul className="grid grid-cols-1 gap-6 pt-8 border-t border-gray-200">
                  {[
                    "Flexible research environment for busy clinicians",
                    "Focus on problems unique to Indian healthcare",
                    "Ethics and equity at the foundation",
                    "Real-world validation in diverse settings"
                  ].map((item, index) => (
                    <FadeIn key={index} delay={400 + (index * 100)}>
                        <li className="flex items-start gap-4 group">
                            <span className="text-brand-blue font-serif font-medium text-xl">0{index + 1}</span>
                            <span className="text-navy-900 font-medium group-hover:text-brand-blue transition-colors">{item}</span>
                        </li>
                    </FadeIn>
                  ))}
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyCrashLab;