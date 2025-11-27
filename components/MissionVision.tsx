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
    if (borderRef1.current) {
      gsap.fromTo(borderRef1.current, 
        { scaleX: 0, transformOrigin: 'left' },
        { 
          scaleX: 1, 
          duration: 1.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: borderRef1.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }
    if (borderRef2.current) {
      gsap.fromTo(borderRef2.current, 
        { scaleX: 0, transformOrigin: 'left' },
        { 
          scaleX: 1, 
          duration: 1.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: borderRef2.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="mission" className="py-24 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section 1: Mission */}
        <div className="py-16 md:py-24 grid md:grid-cols-12 gap-8 relative">
            <div ref={borderRef1} className="absolute top-0 left-0 right-0 h-px bg-navy-900/10" />
            <div className="md:col-span-4">
                <FadeIn>
                  <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-900 tracking-tight">
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
        <div className="py-16 md:py-24 grid md:grid-cols-12 gap-8 relative">
            <div ref={borderRef2} className="absolute top-0 left-0 right-0 h-px bg-navy-900/10" />
            <div className="md:col-span-4 flex justify-between items-start">
                 <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-900 tracking-tight">
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
