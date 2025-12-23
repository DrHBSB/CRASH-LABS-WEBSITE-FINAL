import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';
import gsap from 'gsap';

const teamMembers = [
  {
    name: "Dr. Suvrankar Datta",
    role: "Group Lead",
    initials: "SD",
    image: "/images/team/suvrankar-datta.jpeg",
    isLead: true
  },
  {
    name: "Dr. Hakikat Bir Singh Bhatti",
    role: "Researcher",
    initials: "HB",
    image: "/images/team/hakikat-bhatti.jpeg",
    isLead: false
  },
  {
    name: "Dr. Mrudula Bhalke",
    role: "Researcher",
    initials: "MB",
    image: "/images/team/mrudula-bhalke.jpeg",
    isLead: false
  },
  {
    name: "Dr. Lakshmi Vennela Chowdary Kaza",
    role: "Researcher",
    initials: "LK",
    image: "/images/team/lakshmi-kaza.jpeg",
    isLead: false
  },
  {
    name: "Dr. Shreyas Reddy K",
    role: "Researcher",
    initials: "SR",
    image: "/images/team/shreyas-reddy.jpeg",
    isLead: false
  },
   {
    name:"Dr. Bhavya Ratan Maroo",
    role:"Researcher",
    initials:"BR",
    image:"/images/team/bhavya-ratan.jpeg",
    isLead:false
  },
  {
    name:"Dr. Divya Buchireddygari",
    role:"Researcher",
    initials:"DB",
    image:"/images/team/divya-buchireddygari.jpeg",
    isLead:false
  },
  {
    name: "Kautik Singh",
    role: "Researcher",
    initials: "KS",
    image: "/images/team/kautik-singh.jpeg",
    isLead: false
  },
  {
    name: "Siddharth Reddy Anthireddy",
    role: "Researcher",
    initials: "SA",
    image: "/images/team/siddharth-reddy.jpeg",
    isLead: false
  },
  {
    name: "Upasana Karnwal",
    role: "Researcher",
    initials: "UK",
    isLead: false,
    image:"/images/team/upasana-karnwal.jpeg"
  },
  {
    name:"Haritha R",
    role:"Researcher",
    initials:"HR",
    image:"/images/team/haritha.jpeg",
    isLead:false
  }
];

const Team: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
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
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif font-semibold text-navy-900 tracking-tight">
              <AnimatedHeading text="Our Team" />
            </h2>
          </FadeIn>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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

          {/* Navigation Controls with Progress Indicator */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mt-10">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous slide"
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${currentIndex === 0
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900'
                }`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2">
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
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                      ? 'bg-brand-blue w-8'
                      : 'bg-gray-200 w-4 hover:bg-gray-300'
                    }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              aria-label="Next slide"
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${currentIndex >= maxIndex
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900'
                }`}
            >
              <ChevronRight size={20} />
            </button>
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
                href="mailto:suvrankar.datta@ashoka.edu.in"
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
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
              {[
                { name: 'Koita Foundation', src: '/images/logos/optimized/KoitaFoundation.webp', className: 'h-8 md:h-10 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300' },
                { name: 'Ashoka University', src: '/images/logos/optimized/AshokaUni.webp', className: 'h-10 md:h-12 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300' },
                { name: 'IIT Bombay', src: '/images/logos/optimized/IITBombayText.webp', className: 'h-12 md:h-16 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply' },
                { name: 'RSNA', src: '/images/logos/optimized/RSNA.webp', className: 'h-8 md:h-10 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300' }
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  className={`w-auto object-contain cursor-pointer ${logo.className}`}
                />
              ))}
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
        {/* Photo Container */}
        <div className="relative aspect-[3/4] overflow-hidden mb-5 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
          {member.image ? (
            <>
              {/* Actual Photo */}
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out"
                style={{
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-navy-900/0 transition-all duration-300"
                style={{
                  backgroundColor: isHovered ? 'rgba(15, 23, 42, 0.1)' : 'rgba(15, 23, 42, 0)'
                }}
              />
            </>
          ) : (
            /* Fallback with Initials */
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
          )}

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
          <p className={`text-[10px] uppercase tracking-[0.2em] font-bold ${member.isLead ? 'text-brand-blue' : 'text-gray-500'
            }`}>
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
