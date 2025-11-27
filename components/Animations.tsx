import React, { useEffect, useRef, useState, ReactNode } from 'react';

/**
 * FadeIn Component
 * Triggers a fade-up animation when the element enters the viewport.
 */
interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  threshold = 0.2 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/**
 * ParallaxImage Component
 * An image wrapper that creates a parallax scrolling effect.
 */
interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // 0 to 1
  className?: string;
  imageClassName?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({ 
  src, 
  alt, 
  speed = 0.1, 
  className = "",
  imageClassName = ""
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only animate if in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const centerPosition = windowHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = elementCenter - centerPosition;
        
        setOffset(distanceFromCenter * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className={`absolute w-full h-[120%] -top-[10%] object-cover transition-transform duration-75 ease-linear will-change-transform ${imageClassName}`}
        style={{ transform: `translateY(${offset}px)` }} 
      />
    </div>
  );
};

/**
 * AnimatedHeading Component
 * Staggers the reveal of letters/words.
 */
interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
  wordMode?: boolean; 
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  wordMode = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = wordMode ? text.split(" ") : text.split("");

  return (
    <span ref={ref} className={`inline-block ${className}`} aria-label={text}>
      {items.map((item, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] ${
            isVisible 
              ? 'opacity-100 translate-y-0 tracking-normal blur-0' 
              : 'opacity-0 translate-y-8 tracking-widest blur-sm'
          }`}
          style={{ 
            transitionDelay: `${delay + (i * (wordMode ? 50 : 30))}ms`,
            marginRight: wordMode ? '0.25em' : (item === " " ? '0.25em' : '0')
          }}
        >
          {item === " " && !wordMode ? "\u00A0" : item}
        </span>
      ))}
    </span>
  );
};