import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';

const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section 1: Mission */}
        <div className="border-t border-navy-900/10 py-16 md:py-24 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
                <FadeIn>
                  <h2 className="text-4xl md:text-5xl font-serif font-medium text-navy-900 tracking-tight">
                      <AnimatedHeading text="Our Mission" />
                  </h2>
                </FadeIn>
            </div>
            <div className="md:col-span-8">
                <FadeIn delay={200}>
                    <p className="text-2xl md:text-3xl font-serif text-navy-900 leading-snug tracking-tight font-normal">
                        To create responsible healthcare AI that improves care through ethical innovation, transparent data, and collaboration — making quality healthcare fair and accessible for everyone.
                    </p>
                </FadeIn>
            </div>
        </div>

        {/* Section 2: Vision */}
        <div className="border-t border-navy-900/10 py-16 md:py-24 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 flex justify-between items-start">
                 <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-navy-900 tracking-tight">
                        <AnimatedHeading text="Our Vision" />
                    </h2>
                 </FadeIn>
                <ArrowUpRight className="w-8 h-8 text-navy-900 md:hidden" />
            </div>
            <div className="md:col-span-8">
                <FadeIn delay={200}>
                    <p className="text-2xl md:text-3xl font-serif text-navy-900 leading-snug tracking-tight font-normal">
                        To make CRASH Lab a global leader in responsible, clinician-driven healthcare AI — advancing ethical, transparent, and inclusive innovation that strengthens data infrastructure and makes high-quality care accessible to everyone.
                    </p>
                </FadeIn>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;