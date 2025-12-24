import React, { useEffect, useRef } from 'react';
import { FadeIn, AnimatedHeading } from './Animations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  { date: "April 2025", title: "CRASH Lab Founded at Koita Centre for Digital Health", active: true },
  { date: "Q3 2025", title: "First RSNA Research Cohort Launched", active: true },
  { date: "Q4 2025", title: "15 Papers Accepted at Major Conferences", active: true, highlight: "(Target: Highest from any Indian lab)" },
  { date: "Q1 2026", title: "NeurIPS Research Cohort Initiated", active: false },
  { date: "Q2 2026", title: "RSNA Cutting-Edge Track", active: false },
  { date: "Q3 2026", title: "Radiology's Last Exam v1.0 Publication", active: false },
];

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const items = timelineRef.current.querySelectorAll('.timeline-item');

    items.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-24 bg-paper border-t border-navy-900/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12">

          {/* Left Header */}
          <div className="md:col-span-4">
            <div className="sticky top-32">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-900 tracking-tight">
                  <AnimatedHeading text="Journey &" /> <br /> <span className="text-brand-blue italic"><AnimatedHeading text="Outlook" delay={200} /></span>
                </h2>
              </FadeIn>
            </div>
          </div>

          {/* Right List */}
          <div ref={timelineRef} className="md:col-span-8">
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`timeline-item group flex flex-col md:flex-row gap-4 md:gap-12 items-baseline pb-12 border-b border-navy-900/10 ${!event.active ? 'opacity-50' : ''}`}
                  style={{ opacity: 0 }}
                >
                  <div className="w-24 shrink-0">
                    <span className="font-sans text-xs text-brand-blue uppercase tracking-[0.1em] font-bold">
                      {event.date}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-serif font-normal text-navy-900 leading-tight tracking-tight"
                      style={{ transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#234C6A'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}
                    >
                      {event.title}
                    </h3>
                    {event.highlight && (
                      <p className="mt-2 font-serif text-sm text-navy-800/70 italic">
                        {event.highlight}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <FadeIn delay={600}>
              <div className="mt-24 bg-navy-900 text-white p-10 md:p-16 rounded-2xl">
                <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-white">Future Outlook</h3>
                <p className="text-lg md:text-xl font-sans font-normal leading-relaxed text-white/90">
                  Expanding collaborations across India and internationally, building the infrastructure for the next generation of responsible healthcare AI. We aim to scale our "Data Commons" to 50+ hospitals by 2027.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;