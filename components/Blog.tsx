import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Research",
    date: "OCT 12, 2024",
    title: "Federated Learning in Indian Hospitals: A Multi-site Case Study",
    author: "CRASH Team"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Publication",
    date: "SEP 28, 2024",
    title: "Bridging the Gap: Measuring AI Trust among Rural Radiologists",
    author: "Dr. Mrudula Bhalke"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Event",
    date: "AUG 15, 2024",
    title: "New Framework for Algorithmic Bias Detection released at NeurIPS",
    author: "Siddharth Reddy"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="publications" className="py-24 bg-paper border-t border-navy-900/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-navy-900 tracking-tight">
                <AnimatedHeading text="Latest" /> <span className="italic text-brand-blue"><AnimatedHeading text="Updates" delay={200} /></span>
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-navy-900 hover:text-brand-blue transition-colors pb-2 border-b border-gray-200 hover:border-brand-blue">
                View all articles <ArrowRight size={16} />
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 150} className="h-full">
                <div className="group relative bg-navy-900 rounded-2xl overflow-hidden flex flex-col h-full shadow-xl transition-transform duration-500 hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="h-48 overflow-hidden relative">
                    <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col relative">
                    
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    <span className="text-brand-blue">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-serif font-medium text-white leading-tight mb-8 group-hover:text-blue-200 transition-colors">
                    {post.title}
                    </h3>

                    {/* Bottom Area */}
                    <div className="mt-auto flex items-end justify-between">
                    <span className="text-xs text-gray-500 font-sans tracking-wider uppercase mb-2">
                        By {post.author}
                    </span>
                    <span className="text-sm text-white font-medium border-b border-white/30 pb-0.5 group-hover:border-white transition-all mb-2">
                        Read more
                    </span>
                    </div>
                </div>

                {/* Cutout Corner Button Effect */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-paper rounded-tl-3xl z-10 flex items-center justify-center pl-2 pt-2">
                    <div className="w-10 h-10 rounded-full bg-navy-900 group-hover:bg-brand-blue text-white flex items-center justify-center transition-colors shadow-lg -rotate-45 group-hover:rotate-0 duration-300">
                        <ArrowRight size={18} />
                    </div>
                </div>

                </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 md:hidden flex justify-center">
             <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-navy-900 hover:text-brand-blue transition-colors pb-2 border-b border-gray-200">
                View all articles <ArrowRight size={16} />
             </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;