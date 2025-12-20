import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';

const posts = [
  {
    id: 1,
    category: "Benchmark",
    date: "2025",
    title: "Radiology's Last Exam (RadLE)",
    venue: "arXiv",
    author: "CRASH Lab",
    description: "Benchmarking frontier multimodal AI against human experts with a taxonomy of visual reasoning errors in radiology. Part of work accepted at RSNA 2025 (Cutting Edge Oral Presentation).",
    link: "https://arxiv.org/abs/2509.25559"
  },
  {
    id: 2,
    category: "Accepted Abstract",
    date: "RSNA 2025",
    title: "Learning to Write Like a Radiologist: Multidimensional Evaluation and Benchmarking of Autonomous Optimization Pipelines for Hyper-Personalized Head CT Report Generation",
    venue: "RSNA 2025",
    author: "CRASH Lab",
    description: "Multidimensional evaluation framework for autonomous optimization pipelines in personalized head CT report generation"
  },
  {
    id: 3,
    category: "Accepted Abstract",
    date: "RSNA 2025",
    title: "Stress-Test and Radiologist Blinded Validation of Multimodal Foundation Models on an Unseen Chest Radiograph Dataset Using a Novel Multi-Metric Evaluation Framework",
    venue: "RSNA 2025",
    author: "CRASH Lab",
    description: "Comprehensive evaluation framework for multimodal foundation models in chest radiograph analysis with radiologist-blinded validation"
  },
  {
    id: 4,
    category: "Accepted Abstract",
    date: "RSNA 2025",
    title: "Style-Aware Radiology Reporting: A Scalable Autonomous Optimisation Pipeline for Improving Head CT Report Generation Quality",
    venue: "RSNA 2025",
    author: "CRASH Lab",
    description: "Scalable autonomous optimization pipeline focused on style-aware improvements in head CT report generation"
  },
  {
    id: 5,
    category: "Accepted Abstract",
    date: "RSNA 2025",
    title: "Towards Hyper-Personalised Radiology Reporting: A Scalable Autonomous Optimisation Pipeline for Improving Chest X-Ray Report Generation Quality",
    venue: "RSNA 2025",
    author: "CRASH Lab",
    description: "Autonomous optimization pipeline for hyper-personalized chest X-ray report generation with quality improvements"
  },
  {
    id: 6,
    category: "Accepted Abstract",
    date: "RSNA 2025",
    title: "TRUST: A Novel Five-Point Scale for Assessment of Reliability and Referencing Integrity in AI Agent Generated Radiology Reports",
    venue: "RSNA 2025",
    author: "CRASH Lab",
    description: "Novel assessment scale for evaluating reliability and referencing integrity in AI-generated radiology reports"
  },
  {
    id: 7,
    category: "Accepted Abstract",
    date: "RSNA 2025",
    title: "Validation of RADAR and TRUST Metrics: Analyzing Inter-Reader Agreement and Draft Variability in Agentic Radiology Reporting",
    venue: "RSNA 2025",
    author: "CRASH Lab",
    description: "Analysis of inter-reader agreement and draft variability using RADAR and TRUST metrics in agentic radiology reporting"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="publications" className="py-20 md:py-32 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pb-8 border-b border-navy-900/10">
          <FadeIn>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">Publications & Research</p>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-navy-900 tracking-tight">
                <AnimatedHeading text="Our Research Work" />
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <span className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500 mt-4 md:mt-0">
                6 RSNA 2025 Accepted Abstracts
            </span>
          </FadeIn>
        </div>

        {/* Publications List */}
        <div className="space-y-0">
          {posts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 100}>
              {post.link ? (
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-start justify-between py-6 md:py-8 border-b border-navy-900/10 -mx-4 px-4 hover:bg-navy-900/[0.02] transition-colors"
                >
                  <div className="flex-1 mb-4 md:mb-0">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-2 text-[10px] font-bold uppercase tracking-[0.15em]">
                      <span className="text-brand-blue">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="text-gray-400">{post.date}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-serif font-semibold text-navy-900 leading-snug pr-8 group-hover:text-brand-blue transition-colors">
                      {post.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-500 mt-2 pr-8 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  
                  {/* Right side info */}
                  <div className="flex items-center gap-6 md:gap-8 md:mt-6">
                    <div className="hidden md:block text-right">
                      <div className="text-sm font-medium text-navy-900">{post.venue}</div>
                      <div className="text-xs text-gray-500">{post.author}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-navy-900/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white text-navy-900 transition-all">
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              ) : (
                <div 
                  className="group flex flex-col md:flex-row md:items-start justify-between py-6 md:py-8 border-b border-navy-900/10 -mx-4 px-4"
                >
                  <div className="flex-1 mb-4 md:mb-0">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-2 text-[10px] font-bold uppercase tracking-[0.15em]">
                      <span className="text-brand-blue">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="text-gray-400">{post.date}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-serif font-semibold text-navy-900 leading-snug pr-8">
                      {post.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-500 mt-2 pr-8 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  
                  {/* Right side info */}
                  <div className="flex items-center gap-6 md:gap-8 md:mt-6">
                    <div className="hidden md:block text-right">
                      <div className="text-sm font-medium text-navy-900">{post.venue}</div>
                      <div className="text-xs text-gray-500">{post.author}</div>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-medium">
                      Coming Soon
                    </div>
                  </div>
                </div>
              )}
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
