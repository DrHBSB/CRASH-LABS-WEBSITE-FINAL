import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section 1: Mission */}
        <div className="border-t border-navy-900/10 py-16 md:py-24 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-navy-900 tracking-tight">
                    Our Mission
                </h2>
            </div>
            <div className="md:col-span-8">
                <p className="text-2xl md:text-3xl font-serif text-navy-900 leading-snug tracking-tight font-normal">
                    To create responsible healthcare AI that improves care through ethical innovation, transparent data, and collaboration — making quality healthcare fair and accessible for everyone.
                </p>
            </div>
        </div>

        {/* Section 2: Vision */}
        <div className="border-t border-navy-900/10 py-16 md:py-24 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 flex justify-between items-start">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-navy-900 tracking-tight">
                    Our Vision
                </h2>
                <ArrowUpRight className="w-8 h-8 text-navy-900 md:hidden" />
            </div>
            <div className="md:col-span-8">
                <p className="text-lg md:text-xl text-navy-800 leading-relaxed font-sans max-w-2xl font-light">
                    To make CRASH Lab a global leader in responsible, clinician-driven healthcare AI — advancing ethical, transparent, and inclusive innovation that strengthens data infrastructure and makes high-quality care accessible to everyone.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;