import React, { useState } from 'react';
import { Target, Eye, Sparkles, Globe, Heart, Shield } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';

const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-paper overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">What Drives Us</p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-navy-900 tracking-tight">
            <AnimatedHeading text="Our Purpose" />
          </h2>
        </FadeIn>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <FadeIn delay={100}>
            <Interactive3DCard 
              type="mission"
              title="Our Mission"
              description="To create responsible healthcare AI that improves care through ethical innovation, transparent data, and collaboration — making quality healthcare fair and accessible for everyone."
              icon={<Target className="w-8 h-8" />}
              accentColor="from-brand-blue to-indigo-600"
              features={[
                { icon: <Heart size={14} />, label: "Patient-First" },
                { icon: <Shield size={14} />, label: "Ethical AI" },
                { icon: <Sparkles size={14} />, label: "Innovation" },
              ]}
            />
          </FadeIn>

          {/* Vision Card */}
          <FadeIn delay={200}>
            <Interactive3DCard 
              type="vision"
              title="Our Vision"
              description="To make CRASH Lab a global leader in responsible, clinician-driven healthcare AI — advancing ethical, transparent, and inclusive innovation that strengthens data infrastructure and makes high-quality care accessible to everyone."
              icon={<Eye className="w-8 h-8" />}
              accentColor="from-purple-600 to-pink-500"
              features={[
                { icon: <Globe size={14} />, label: "Global Impact" },
                { icon: <Sparkles size={14} />, label: "Inclusive" },
                { icon: <Shield size={14} />, label: "Transparent" },
              ]}
            />
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

interface Interactive3DCardProps {
  type: 'mission' | 'vision';
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  features: { icon: React.ReactNode; label: string }[];
}

const Interactive3DCard: React.FC<Interactive3DCardProps> = ({ 
  type, 
  title, 
  description, 
  icon, 
  accentColor,
  features 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const cardStyle = {
    transform: isHovered 
      ? `perspective(1000px) rotateX(${-mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg) translateZ(20px)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
    transition: 'transform 0.3s ease-out',
  };

  const glowStyle = {
    background: `radial-gradient(circle at ${50 + mousePosition.x * 100}% ${50 + mousePosition.y * 100}%, rgba(44, 62, 150, 0.15), transparent 50%)`,
  };

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      {/* Card Glow Effect */}
      <div 
        className={`absolute -inset-1 bg-gradient-to-r ${accentColor} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
      />
      
      {/* Main Card */}
      <div className="relative bg-white rounded-3xl border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
        
        {/* Dynamic Glow Overlay */}
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100"
            style={glowStyle}
          />
        )}

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>

        {/* Card Content */}
        <div className="relative p-8 md:p-10">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            {/* Icon Container */}
            <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${accentColor} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
              {icon}
              
              {/* Animated Ring */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-white/30 scale-100 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-700`} />
            </div>

            {/* Floating Badge */}
            <div className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
              isHovered 
                ? `bg-gradient-to-r ${accentColor} text-white` 
                : 'bg-gray-100 text-gray-500'
            }`}>
              {type === 'mission' ? '01' : '02'}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-navy-900 mb-6 tracking-tight group-hover:text-brand-blue transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
            {description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  isHovered 
                    ? 'border-brand-blue/30 bg-brand-blue/5 text-brand-blue' 
                    : 'border-gray-200 bg-gray-50 text-gray-600'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {feature.icon}
                <span className="text-xs font-semibold uppercase tracking-wider">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Bottom Accent Line */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
        </div>

        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
          <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${accentColor} opacity-5 rounded-full group-hover:opacity-10 group-hover:scale-150 transition-all duration-700`} />
        </div>

        {/* Animated Particles on Hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${accentColor} opacity-40`}
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: '0%',
                  animation: `particleRise ${1.5 + i * 0.3}s ease-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes particleRise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-200px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MissionVision;
