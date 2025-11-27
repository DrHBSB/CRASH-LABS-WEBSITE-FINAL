import React from 'react';
import { FadeIn, AnimatedHeading } from './Animations';

interface WhyCrashLabProps {
    onReadMore?: () => void;
}

const WhyCrashLab: React.FC<WhyCrashLabProps> = ({ onReadMore }) => {
  return (
    <section className="py-24 bg-paper">
      <div className="container mx-auto px-6 md:px-12">

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