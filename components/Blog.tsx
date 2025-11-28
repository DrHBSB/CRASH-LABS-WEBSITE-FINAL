import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';

const posts = [
  {
    id: 1,
    category: "Research Paper",
    date: "OCT 2024",
    title: "Federated Learning in Indian Hospitals: A Multi-site Case Study",
    venue: "NeurIPS 2024",
    author: "CRASH Team"
  },
  {
    id: 2,
    category: "Publication",
    date: "SEP 2024",
    title: "Bridging the Gap: Measuring AI Trust among Rural Radiologists",
    venue: "The Lancet Digital Health",
    author: "Dr. Mrudula Bhalke"
  },
  {
    id: 3,
    category: "Conference",
    date: "AUG 2024",
    title: "New Framework for Algorithmic Bias Detection in Medical Imaging",
    venue: "RSNA 2024",
    author: "Siddharth Reddy"
  },
  {
    id: 4,
    category: "Preprint",
    date: "JUL 2024",
    title: "Context-Aware Foundation Models for South Asian Healthcare",
    venue: "arXiv",
    author: "Dr. Suvrankar Datta"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="publications" className="py-20 md:py-32 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pb-8 border-b border-brand-blue/15">
          <FadeIn>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">Publications & Research</p>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-navy-900 tracking-tight">
                <AnimatedHeading text="Our Research Work" />
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-brand-blue transition-colors group mt-4 md:mt-0">
                View all publications 
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </FadeIn>
        </div>

        {/* Publications List */}
        <div className="space-y-0">
          {posts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 100}>
              <a 
                href="#" 
                className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-brand-blue/10 hover:bg-brand-blue/[0.03] -mx-4 px-4 transition-colors"
              >
                <div className="flex-1 mb-4 md:mb-0">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-2 text-[10px] font-bold uppercase tracking-[0.15em]">
                    <span className="text-brand-blue">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-gray-400">{post.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-navy-900 leading-snug group-hover:text-brand-blue transition-colors pr-8">
                    {post.title}
                  </h3>
                </div>
                
                {/* Right side info */}
                <div className="flex items-center gap-6 md:gap-8">
                  <div className="hidden md:block text-right">
                    <div className="text-sm font-medium text-navy-900">{post.venue}</div>
                    <div className="text-xs text-gray-500">{post.author}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-navy-900/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white text-navy-900 transition-all">
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden flex justify-center">
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-brand-blue transition-colors">
            View all publications <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;
