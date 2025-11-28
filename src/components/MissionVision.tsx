import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionVision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderRef1 = useRef<HTMLDivElement>(null);
  const borderRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate border lines expanding on scroll
    [borderRef1, borderRef2].forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(ref.current, 
          { scaleX: 0, transformOrigin: 'left' },
          { 
            scaleX: 1, 
            duration: 1.2, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="mission" className="py-20 md:py-32 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section 1: Mission */}
        <div className="py-12 md:py-20 grid md:grid-cols-12 gap-6 md:gap-12 relative">
            <div ref={borderRef1} className="absolute top-0 left-0 right-0 h-px bg-navy-900/10" />
            <div className="md:col-span-4">
                <FadeIn>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">01 — Mission</p>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy-900 tracking-tight">
                      <AnimatedHeading text="Our Mission" />
                  </h2>
                </FadeIn>
            </div>
            <div className="md:col-span-8">
                <FadeIn delay={200}>
                    <p className="text-xl md:text-2xl font-serif text-navy-900 leading-relaxed tracking-tight font-normal">
                        To create responsible healthcare AI that improves care through ethical innovation, transparent data, and collaboration — making quality healthcare fair and accessible for everyone.
                    </p>
                </FadeIn>
            </div>
        </div>

        {/* Section 2: Vision */}
        <div className="py-12 md:py-20 grid md:grid-cols-12 gap-6 md:gap-12 relative">
            <div ref={borderRef2} className="absolute top-0 left-0 right-0 h-px bg-navy-900/10" />
            <div className="md:col-span-4 flex justify-between items-start">
                 <FadeIn>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">02 — Vision</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy-900 tracking-tight">
                        <AnimatedHeading text="Our Vision" />
                    </h2>
                 </FadeIn>
                <ArrowUpRight className="w-6 h-6 text-navy-900/30 md:hidden" />
            </div>
            <div className="md:col-span-8">
                <FadeIn delay={200}>
                    <p className="text-xl md:text-2xl font-serif text-navy-900 leading-relaxed tracking-tight font-normal">
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
