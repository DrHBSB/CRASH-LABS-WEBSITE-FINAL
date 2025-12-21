import React, { useState, useRef } from 'react';
import { FadeIn, AnimatedHeading } from './Animations';
import gsap from 'gsap';

const advisors = [
    {
        name: "Dr. Advisor Name",
        role: "Scientific Advisor",
        affiliation: "Institute Name",
        image: ""
    },
    {
        name: "Prof. Mentor Name",
        role: "Clinical Mentor",
        affiliation: "Hospital / University",
        image: ""
    },
    {
        name: "Dr. Expert Name",
        role: "Technical Advisor",
        affiliation: "Tech Organization",
        image: ""
    }
];

const Advisors: React.FC = () => {
    return (
        <section id="advisors" className="py-24 bg-paper border-t border-navy-900/5">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-navy-900 tracking-tight">
                            <AnimatedHeading text="Lab Advisors &" /> <span className="text-brand-blue"><AnimatedHeading text="Mentors" delay={200} /></span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {advisors.map((advisor, index) => (
                        <FadeIn key={index} delay={index * 100}>
                            <AdvisorCard advisor={advisor} />
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
};

const AdvisorCard: React.FC<{ advisor: typeof advisors[0] }> = ({ advisor }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative aspect-[3/4] overflow-hidden mb-5 rounded-2xl bg-gray-100">
                {advisor.image ? (
                    <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out"
                        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                        <span className="text-4xl font-serif opacity-20">Advisor</span>
                    </div>
                )}
            </div>

            <div>
                <h3
                    className="text-xl font-bold font-serif leading-tight mb-1"
                    style={{
                        color: isHovered ? '#1a5f4a' : '#0F172A',
                        transition: 'color 0.3s ease'
                    }}
                >
                    {advisor.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
                    {advisor.role}
                </p>
                <p className="text-sm text-gray-500">
                    {advisor.affiliation}
                </p>
            </div>
        </div>
    );
};

export default Advisors;
