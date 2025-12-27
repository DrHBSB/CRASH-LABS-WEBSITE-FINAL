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
    name:"Dr. Nishtha Mahajan",
    role:"Researcher",
    initials:"NM",
    image:"/images/team/nishtha-mahajan.jpeg",
    isLead:false
  },
  {
    name: "Dr. Lakshmi Vennela Chowdary Kaza",
    role: "Researcher",
    initials: "LK",
    image: "/images/team/lakshmi-vennela.jpeg",
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
  },
  {
    name:"Gadha Lekshmi P",
    role:"Researcher",
    initials:"LP",
    image:"/images/team/gadha-lekshmi.jpeg",
    isLead:false
  },
  {
    name:"Swarna Radhakrishnan",
    role:"Researcher",
    initials:"SR",
    image:"/images/team/swarna-radhakrishnan.jpeg",
    isLead:false
  }
];

const Team: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Handle scroll progress
  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const scrollProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setProgress(scrollProgress);
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    if (sliderRef.current) {
      startX.current = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft.current = sliderRef.current.scrollLeft;
      sliderRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll-fast multiplier
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      // On mobile, scroll the full view width (since we show 1 item roughly). 
      // On desktop, scroll half view width.
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile 
        ? sliderRef.current.clientWidth 
        : sliderRef.current.clientWidth / 2;
        
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // GSAP animation on mount - animating cards in
  useEffect(() => {
    const cards = document.querySelectorAll('.team-card-wrapper');
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sliderRef.current,
          start: 'top bottom-=100',
        }
      }
    );
  }, []);

  return (
    <section id="team" className="py-24 bg-paper overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif font-semibold text-navy-900 tracking-tight">
              <AnimatedHeading text="Our Team" />
            </h2>
          </FadeIn>
          
          {/* Controls - Top Right on Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Draggable Slider */}
        <div className="relative -mx-6 md:-mx-12 px-6 md:px-12">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-12 pt-4 cursor-grab scrollbar-hide select-none"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' 
            }}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card-wrapper flex-shrink-0 w-[85vw] md:w-[45%] lg:w-[32%] transition-colors duration-300"
              >
                <TeamCard member={member} index={index} />
              </div>
            ))}
            
             {/* Spacer for right padlock feeling */}
             <div className="w-1 flex-shrink-0" />
          </div>
          
           {/* Custom Scrollbar / Progress */}
           <div className="mt-4 h-[2px] w-full bg-navy-900/10 rounded-full overflow-hidden relative max-w-md mx-auto md:mx-0">
              <div 
                className="absolute left-0 top-0 h-full bg-brand-blue transition-all duration-100 ease-out"
                style={{ width: `${Math.max(5, progress)}%` }} // Minimum 5% width for visibility
              />
           </div>
        </div>
        
        {/* Mobile Controls - Bottom */}
         <div className="flex md:hidden justify-center items-center gap-4 mt-8">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
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
                href="https://forms.cloud.microsoft/r/bMKyZtTX6r"
                target="_blank"
                rel="noopener noreferrer"
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
                // { name: 'RSNA', src: '/images/logos/optimized/RSNA.webp', className: 'h-8 md:h-10 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300' }
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
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out"
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
                  backgroundColor: member.isLead ? '#234C6A' : (isHovered ? '#0F172A' : '#D1D5DB'),
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
              color: isHovered ? '#234C6A' : '#0F172A'
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
