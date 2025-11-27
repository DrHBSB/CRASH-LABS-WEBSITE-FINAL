import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';
import gsap from 'gsap';

const teamMembers = [
  { 
    name: "Dr. Suvrankar Datta", 
    role: "Group Lead", 
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLead: true
  },
  { 
    name: "Dr. Hakikat Bir Singh Bhatti", 
    role: "Researcher", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLead: false
  },
  { 
    name: "Kautik Singh", 
    role: "Researcher", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLead: false
  },
  { 
    name: "Dr. Mrudula Bhalke", 
    role: "Researcher", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLead: false
  },
  { 
    name: "Dr. Lakshmi Vennela Chowdary Kaza", 
    role: "Researcher", 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLead: false
  },
  { 
    name: "Siddharth Reddy Anthireddy", 
    role: "Researcher", 
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLead: false
  },
  { 
    name: "Upasana Karnwal", 
    role: "Researcher", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLead: false
  },
];

const Team: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const getItemsPerView = () => {
    if (typeof window === 'undefined') return itemsPerView.desktop;
    if (window.innerWidth < 768) return itemsPerView.mobile;
    if (window.innerWidth < 1024) return itemsPerView.tablet;
    return itemsPerView.desktop;
  };

  const [visibleItems, setVisibleItems] = useState(itemsPerView.desktop);

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getItemsPerView());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - visibleItems);

  const nextSlide = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || currentIndex <= 0) return;
    setIsAnimating(true);
    setCurrentIndex(prev => Math.max(prev - 1, 0));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // GSAP animation on mount
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            delay: index * 0.1,
            ease: 'power3.out'
          }
        );
      }
    });
  }, []);

  return (
    <section id="team" className="py-24 bg-paper overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <FadeIn>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">The People Behind CRASH Lab</p>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-navy-900 tracking-tight">
              <AnimatedHeading text="Our Team" />
            </h2>
          </FadeIn>
          
          {/* Navigation Controls */}
          <FadeIn delay={200}>
            <div className="flex gap-3 mt-6 md:mt-0">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                    : 'border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900'
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  currentIndex >= maxIndex 
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                    : 'border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Slider */}
        <div className="relative">
          <div 
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  ref={el => { cardsRef.current[index] = el; }}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <TeamCard member={member} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(idx);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-brand-blue w-8' 
                    : 'bg-gray-200 w-4 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* As Seen In Section */}
        <FadeIn delay={600}>
          <div className="mt-32 border-t border-navy-900/10 pt-16">
            <div className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
              In Collaboration With
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
              <h3 className="text-3xl font-serif font-bold text-navy-900/80 tracking-tighter">RSNA</h3>
              <h3 className="text-xl font-sans font-bold text-navy-900/80 tracking-tight">NeurIPS</h3>
              <h3 className="text-2xl font-serif italic text-navy-900/80">The Lancet</h3>
              <h3 className="text-xl font-mono font-bold text-navy-900/80">ICML</h3>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

interface TeamCardProps {
  member: typeof teamMembers[0];
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    gsap.to(cardRef.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div 
      className="group cursor-pointer perspective-[1000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className="relative transition-shadow duration-500"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden mb-5 rounded-2xl bg-gray-100">
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent z-10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Image */}
          <img 
            src={member.image} 
            alt={member.name}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              isHovered ? 'scale-110 grayscale-0' : 'scale-100 grayscale'
            }`}
          />
          
          {/* Lead Badge */}
          {member.isLead && (
            <div className="absolute top-4 left-4 z-20">
              <div className="px-3 py-1 bg-brand-blue text-white text-[9px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                Lead
              </div>
            </div>
          )}

          {/* Hover Content */}
          <div className={`absolute bottom-0 left-0 right-0 p-5 z-20 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {/* Social Links */}
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-navy-900 transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-navy-900 transition-all duration-300">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Shine Effect */}
          <div 
            className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 55%, transparent 60%)',
              transform: 'translateX(-100%)',
              animation: isHovered ? 'shine 0.8s ease-out forwards' : 'none'
            }}
          />
        </div>

        {/* Info */}
        <div className={`transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
          <h3 className={`text-lg font-bold font-serif leading-tight mb-1 transition-colors duration-300 ${
            isHovered ? 'text-brand-blue' : 'text-navy-900'
          }`}>
            {member.name}
          </h3>
          <p className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${
            member.isLead ? 'text-brand-blue' : 'text-gray-500'
          }`}>
            {member.role}
          </p>
        </div>

        {/* Accent Line */}
        <div className={`absolute -left-1 top-0 bottom-0 w-1 rounded-full bg-brand-blue transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`} style={{ transformOrigin: 'top' }} />
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Team;
