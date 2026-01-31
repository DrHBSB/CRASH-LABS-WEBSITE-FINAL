import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FadeIn, AnimatedHeading } from './Animations';
import { blogPosts } from '../data/blogPosts';

const POSTS_PER_PAGE = 5;

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Count RSNA accepted abstracts
  const rsnaAcceptedCount = blogPosts.filter(
    post => post.category === 'Accepted Abstract' && post.venue?.startsWith('RSNA')
  ).length;

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePostClick = (postId: string, hasLink?: string) => {
    if (hasLink) {
      window.open(hasLink, '_blank');
    } else {
      navigate(`/blog/${postId}`);
    }
  };

  return (
    <section id="publications" className="py-20 md:py-32 bg-paper">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pb-8 border-b border-navy-900/10">
          <FadeIn>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">Publications & Research</p>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-navy-900 tracking-tight">
              <AnimatedHeading text="Blogs, Papers &" /> <br className="md:hidden" /> <span className="text-brand-blue"><AnimatedHeading text="Presentations" delay={200} /></span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <span className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-500 mt-4 md:mt-0">
              {rsnaAcceptedCount} RSNA Accepted Abstracts
            </span>
          </FadeIn>
        </div>

        {/* Publications List */}
        <div className="space-y-0">
          {currentPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 100}>
              <div
                onClick={() => handlePostClick(post.id, post.link)}
                className="w-full group flex flex-col md:flex-row md:items-start justify-between py-6 md:py-8 border-b border-navy-900/10 -mx-4 px-4 hover:bg-navy-900/[0.02] transition-colors text-left cursor-pointer"
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
                  {post.description && (
                    <p className="text-sm text-gray-500 mt-2 pr-8 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                </div>

                {/* Right side info */}
                <div className="flex items-center gap-6 md:gap-8 md:mt-6">
                  <div className="hidden md:block text-right">
                    {post.venue && <div className="text-sm font-medium text-navy-900">{post.venue}</div>}
                    <div className="text-xs text-gray-500">{post.author.name}</div>
                  </div>
                  {post.link ? (
                    <div className="w-10 h-10 rounded-full border border-navy-900/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white text-navy-900 transition-all">
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  ) : post.content.length > 0 ? (
                    <div className="w-10 h-10 rounded-full border border-navy-900/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white text-navy-900 transition-all">
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  ) : (
                    <div className="px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-medium">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 hover:bg-navy-900 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy-900 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg font-medium text-sm transition-all ${currentPage === page
                  ? 'bg-brand-blue text-white'
                  : 'border border-gray-200 hover:bg-navy-900 hover:text-white text-navy-900'
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 hover:bg-navy-900 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy-900 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};


export default Blog;
