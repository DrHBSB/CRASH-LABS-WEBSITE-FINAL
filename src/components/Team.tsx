import React from 'react';

const leaders = [
  { name: "Siddharth Reddy Anthireddy", role: "Leader", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Kautik Singh", role: "Leader", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Dr. Mrudula Bhalke", role: "Leader", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Lakshmi Vennela Kaza", role: "Leader", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-center text-navy-900 mb-20 tracking-tight">
            Leadership
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-200 rounded-sm">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
              
              <div className="border-l-2 border-transparent group-hover:border-brand-blue pl-4 transition-all duration-300">
                <h3 className="text-lg font-bold font-serif text-navy-900 leading-tight mb-1 group-hover:text-brand-blue transition-colors">
                    {leader.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                    {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* As Seen In Section */}
        <div className="mt-32 border-t border-navy-900/10 pt-16">
            <div className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
                In Collaboration With
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
                {/* Simplified Text Logos for Editorial Feel */}
                <h3 className="text-3xl font-serif font-bold text-navy-900/80 tracking-tighter">RSNA</h3>
                <h3 className="text-xl font-sans font-bold text-navy-900/80 tracking-tight">NeurIPS</h3>
                <h3 className="text-2xl font-serif italic text-navy-900/80">The Lancet</h3>
                <h3 className="text-xl font-mono font-bold text-navy-900/80">ICML</h3>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;