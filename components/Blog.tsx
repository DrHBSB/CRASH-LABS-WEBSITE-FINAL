import React, { useState } from 'react';
import { ArrowRight, BarChart3, TrendingUp, FileText } from 'lucide-react';
import { FadeIn, AnimatedHeading } from './Animations';

const featuredPost = {
  id: 0,
  category: "Benchmark Update",
  date: "NOV 20, 2025",
  title: "Gemini 3.0 Pro Surpasses Radiology Trainees on Radiology's Last Exam (RadLE)",
  description: "For the first time, a generalist AI model has crossed trainee-level performance. Read the full analysis by...",
  author: "CRASH Research Team",
  stats: {
    accuracyDelta: "+6.0%",
    comparison: "vs Trainees"
  }
};

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

        {/* Featured Post with 3D Isometric Design */}
        <FadeIn className="mb-12">
          <FeaturedBlogCard post={featuredPost} />
        </FadeIn>

        {/* Regular Posts Grid */}
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

// Featured Blog Card with 3D Isometric Illustration
interface FeaturedPostProps {
  post: typeof featuredPost;
}

const FeaturedBlogCard: React.FC<FeaturedPostProps> = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-navy-900 rounded-3xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid lg:grid-cols-2 min-h-[520px]">
        
        {/* Left Side: 3D Isometric Illustration */}
        <div className="relative min-h-[420px] lg:min-h-[520px] bg-gradient-to-br from-navy-950 via-navy-900 to-[#1a2744] flex items-center justify-center p-6 lg:p-10 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none overflow-hidden">
          
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl"></div>

          {/* 3D Isometric Elements Container */}
          <div className="relative w-full max-w-sm h-[360px]" style={{ perspective: '1200px' }}>
            <div className="relative w-full h-full transition-all duration-1000" style={{ transform: isHovered ? 'rotateX(0deg) rotateY(0deg)' : 'rotateX(8deg) rotateY(-8deg)', transformStyle: 'preserve-3d' }}>
              
              {/* Main Dashboard Panel */}
              <div className="absolute top-12 left-2 right-2 h-64 bg-navy-800/95 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10">
                
                {/* Window Header */}
                <div className="h-8 border-b border-white/10 bg-navy-950/50 flex items-center px-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  <span className="ml-auto text-[8px] font-mono text-white/30">radle_benchmark.json</span>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 size={14} className="text-brand-blue" />
                    <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest">RadLE Benchmark</span>
                  </div>

                  {/* Leaderboard */}
                  <div className="space-y-2">
                    {/* Row 1 - Gemini (Winner) */}
                    <div className="relative group/row">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-purple-600 rounded-lg opacity-40 blur"></div>
                      <div className="relative flex items-center gap-3 p-3 bg-navy-900 border border-brand-blue/40 rounded-lg">
                        <div className="w-6 h-6 rounded bg-brand-blue flex items-center justify-center text-white font-bold text-[10px]">01</div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-white">Gemini 3.0 Pro</div>
                          <div className="text-[9px] text-blue-200/60">Google DeepMind</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-mono font-bold text-green-400">92.3%</div>
                        </div>
                      </div>
                    </div>

                    {/* Row 2 - Trainees */}
                    <div className="flex items-center gap-3 p-2.5 bg-white/5 border border-white/5 rounded-lg">
                      <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-white/60 font-bold text-[9px]">02</div>
                      <div className="flex-1">
                        <div className="text-[11px] font-medium text-gray-300">Radiology Trainees</div>
                        <div className="text-[9px] text-gray-500">Human Baseline</div>
                      </div>
                      <div className="text-xs font-mono text-gray-400">86.3%</div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex items-center gap-3 p-2.5 bg-white/5 border border-white/5 rounded-lg opacity-60">
                      <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-white/60 font-bold text-[9px]">03</div>
                      <div className="flex-1">
                        <div className="text-[11px] font-medium text-gray-300">GPT-4 Vision</div>
                        <div className="text-[9px] text-gray-500">OpenAI</div>
                      </div>
                      <div className="text-xs font-mono text-gray-400">81.7%</div>
                    </div>
                  </div>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent animate-[scanDown_4s_linear_infinite]"></div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className={`absolute -right-2 -top-2 bg-navy-800/95 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-white/10 z-20 transition-all duration-500 ${isHovered ? 'translate-x-1' : ''}`} style={{ animation: 'floatCard 5s ease-in-out infinite' }}>
                <div className="flex items-center gap-2 mb-1">
                  <FileText size={10} className="text-white/60" />
                  <span className="text-[8px] font-bold text-white/60 uppercase tracking-wider">Accuracy Delta</span>
                </div>
                <div className="text-2xl font-mono font-bold text-green-400">+6.0%</div>
                <div className="text-[9px] text-green-400/60 mt-0.5">vs Trainees</div>
              </div>

              {/* Floating Chart Element */}
              <div className={`absolute -left-2 bottom-8 bg-white rounded-xl p-2.5 shadow-2xl border border-gray-100 z-20 transition-all duration-500 ${isHovered ? '-translate-x-1' : ''}`} style={{ animation: 'floatCardAlt 6s ease-in-out infinite' }}>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-brand-blue/10 rounded-lg">
                    <TrendingUp size={14} className="text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-navy-900">First AI</div>
                    <div className="text-[7px] text-gray-500">Above Trainee Level</div>
                  </div>
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
                <line x1="50%" y1="30%" x2="85%" y2="15%" stroke="#2C3E96" strokeWidth="1" strokeDasharray="4 4" style={{ animation: 'dashMove 3s linear infinite' }} />
                <line x1="50%" y1="70%" x2="15%" y2="85%" stroke="#2C3E96" strokeWidth="1" strokeDasharray="4 4" style={{ animation: 'dashMove 3s linear infinite reverse' }} />
              </svg>

              {/* Floating Data Particles */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-brand-blue/60 rounded-full"
                  style={{
                    left: `${15 + (i % 3) * 30}%`,
                    top: `${20 + Math.floor(i / 3) * 60}%`,
                    animation: `particleFloat ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center relative">
          
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1.5 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              {post.category}
            </span>
            <span className="text-[11px] font-mono text-gray-400 tracking-wider">
              {post.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white leading-[1.1] mb-6 group-hover:text-blue-100 transition-colors">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
            {post.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="group/btn flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-white hover:text-brand-blue transition-colors">
              Read Full Analysis
              <span className="w-10 h-10 rounded-full border border-white/20 group-hover/btn:border-brand-blue group-hover/btn:bg-brand-blue flex items-center justify-center transition-all">
                <ArrowRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes scanDown {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatCardAlt {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 24; }
        }
        @keyframes particleFloat {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 0.8; transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Blog;
