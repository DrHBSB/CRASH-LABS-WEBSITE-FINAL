import React from 'react';

const WhyCrashLab: React.FC = () => {
  return (
    <section className="py-24 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Large Visual Block (Like the video player in reference) */}
        <div className="w-full bg-black aspect-video rounded-lg mb-24 relative overflow-hidden group shadow-2xl">
            <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80" 
                alt="Data Visualization"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                 </div>
            </div>
            <div className="absolute bottom-8 left-8 text-white font-mono text-xs uppercase tracking-widest">
                Data Commons v1.0 Preview
            </div>
        </div>

        {/* Content Split */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-navy-900 mb-8 tracking-tight leading-tight">
                    The challenges, and why they chose <span className="text-brand-blue">Crash Lab.</span>
                </h2>
                <div className="flex gap-4 mb-8">
                     <span className="px-4 py-1.5 border border-navy-900/20 text-navy-900 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full">
                        Beyond Inheriting
                    </span>
                    <span className="px-4 py-1.5 bg-navy-900 text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full">
                        We're Inventing
                    </span>
                </div>
            </div>

            <div className="space-y-8 text-lg text-navy-800 leading-relaxed font-sans font-light">
                <p>
                    India's healthcare needs demand that we invent, not just inherit, how AI is developed and deployed. We're built to enable busy clinicians to pioneer new frameworks and collaborative practices that set the standard for ethical, responsible healthcare AI.
                </p>
                
                <ul className="grid grid-cols-1 gap-6 pt-8 border-t border-gray-200">
                  {[
                    "Flexible research environment for busy clinicians",
                    "Focus on problems unique to Indian healthcare",
                    "Ethics and equity at the foundation",
                    "Real-world validation in diverse settings"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <span className="text-brand-blue font-serif font-medium text-xl">0{index + 1}</span>
                      <span className="text-navy-900 font-medium group-hover:text-brand-blue transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyCrashLab;