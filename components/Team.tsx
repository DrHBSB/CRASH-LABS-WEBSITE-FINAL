import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';
import gsap from 'gsap';

const teamMembers = [
  { 
    name: "Dr. Suvrankar Datta", 
    role: "Group Lead", 
    initials: "SD",
    isLead: true
  },
  { 
    name: "Dr. Hakikat Bir Singh Bhatti", 
    role: "Researcher", 
    initials: "HB",
    isLead: false
  },
  { 
    name: "Kautik Singh", 
    role: "Researcher", 
    initials: "KS",
    isLead: false
  },
  { 
    name: "Dr. Mrudula Bhalke", 
    role: "Researcher", 
    initials: "MB",
    isLead: false
  },
  { 
    name: "Dr. Lakshmi Vennela Chowdary Kaza", 
    role: "Researcher", 
    initials: "LK",
    isLead: false
  },
  { 
    name: "Siddharth Reddy Anthireddy", 
    role: "Researcher", 
    initials: "SA",
    isLead: false
  },
  { 
    name: "Upasana Karnwal", 
    role: "Researcher", 
    initials: "UK",
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
            <h2 className="text-4xl md:text-6xl font-serif font-semibold text-navy-900 tracking-tight">
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

        {/* Join the Team Section */}
        <FadeIn delay={400}>
          <div className="mt-20 p-8 md:p-12 bg-navy-900 rounded-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-3">
                  Join the Team
                </h3>
                <p className="text-gray-400 max-w-lg">
                  We're always looking for passionate researchers, engineers, and clinicians to help shape the future of healthcare AI.
                </p>
              </div>
              <a 
                href="#contact" 
                className="group flex items-center gap-3 px-8 py-4 bg-white text-navy-900 text-sm font-bold uppercase tracking-wider rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                Get in Touch
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </FadeIn>

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

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -8,
        duration: 0.4,
        ease: 'power3.out'
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        duration: 0.4,
        ease: 'power3.out'
      });
    }
  };

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className="relative">
        {/* Placeholder Container */}
        <div className="relative aspect-[3/4] overflow-hidden mb-5 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Placeholder with Initials */}
          <div className="w-full h-full flex items-center justify-center">
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-300 text-gray-600"
              style={{
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                backgroundColor: member.isLead ? '#1a5f4a' : (isHovered ? '#0F172A' : '#D1D5DB'),
                color: member.isLead || isHovered ? '#FFFFFF' : '#4B5563'
              }}
            >
              <span className="text-2xl font-bold font-serif tracking-tight">{member.initials}</span>
            </div>
          </div>
          
          {/* Lead Badge */}
          {member.isLead && (
            <div className="absolute top-4 left-4 z-20">
              <div className="px-3 py-1 bg-brand-blue text-white text-[9px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                Lead
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <h3 
            className="text-lg font-bold font-serif leading-tight mb-1 text-navy-900"
            style={{
              transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              color: isHovered ? '#1a5f4a' : '#0F172A'
            }}
          >
            {member.name}
          </h3>
          <p className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
            member.isLead ? 'text-brand-blue' : 'text-gray-500'
          }`}>
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
