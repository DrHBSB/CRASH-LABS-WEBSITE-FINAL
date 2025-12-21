import React from 'react';
import { ArrowLeft, Share2, Download, FileText } from 'lucide-react';
import { FadeIn } from './Animations';
import ScrollableTable from './ScrollableTable';
import { BlogPostData, ContentSection, TableData, CalloutData } from '../data/blogPosts';

interface BlogPostProps {
    post: BlogPostData;
    onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
    const renderContentSection = (section: ContentSection, index: number) => {
        switch (section.type) {
            case 'heading':
                return (
                    <FadeIn key={index} delay={index * 100}>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-navy-900 mt-8 md:mt-12 mb-4 md:mb-6 tracking-tight">
                            {section.content as string}
                        </h2>
                    </FadeIn>
                );

            case 'text':
                return (
                    <FadeIn key={index} delay={index * 100}>
                        <p
                            className="text-base md:text-lg font-sans font-light text-navy-800 leading-relaxed mb-4 md:mb-6 break-words"
                            dangerouslySetInnerHTML={{ __html: (section.content as string).replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium">$1</strong>') }}
                        />
                    </FadeIn>
                );

            case 'list':
                const items = section.content as string[];
                return (
                    <FadeIn key={index} delay={index * 100}>
                        <ul className="space-y-4 my-8">
                            {items.map((item, i) => (
                                <li key={i} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                                    <div className="flex-1 min-w-0">
                                        <span
                                            className="text-gray-600 text-sm leading-relaxed break-words"
                                            dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<span class="block font-bold text-navy-900 text-sm mb-1">$1</span>').replace(/\n/g, '<br/>') }}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                );

            case 'table':
                const tableData = section.content as TableData;
                return (
                    <FadeIn key={index} delay={index * 100}>
                        <ScrollableTable
                            headers={tableData.headers}
                            rows={tableData.rows}
                        />
                    </FadeIn>
                );

            case 'callout':
                const calloutData = section.content as CalloutData;
                return (
                    <FadeIn key={index} delay={index * 100}>
                        <div className="mt-8 md:mt-16 p-6 md:p-8 bg-brand-blue text-white rounded-xl md:rounded-2xl">
                            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 md:mb-4">{calloutData.title}</h3>
                            <p className="text-sm md:text-base text-white/80 font-sans font-light mb-4 md:mb-6">
                                {calloutData.description}
                            </p>
                            {calloutData.buttonText && calloutData.buttonLink && (
                                <a
                                    href={calloutData.buttonLink}
                                    className="inline-block px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base bg-white text-brand-blue font-bold rounded-full hover:bg-navy-900 hover:text-white transition-all"
                                >
                                    {calloutData.buttonText}
                                </a>
                            )}
                        </div>
                    </FadeIn>
                );

            default:
                return null;
        }
    };

    return (
        <article className="bg-paper min-h-screen pt-20 md:pt-24 pb-16 md:pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-x-hidden">
            {/* Navigation / Header */}
            <div className="container mx-auto px-4 md:px-6 lg:px-12 mb-8 md:mb-12">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-navy-900 hover:text-brand-blue transition-colors mb-12"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Research
                </button>

                <FadeIn className="max-w-5xl mx-auto">
                    {/* Featured Image Card */}
                    {post.featuredImage && (
                        <div className="w-full bg-navy-900 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative h-[250px] md:h-[400px] mb-8 md:mb-12 group">
                            <img
                                src={post.featuredImage}
                                alt={post.imageAlt || post.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>

                            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex justify-between items-end">
                                <div>
                                    {post.imageOverlay?.badge && (
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-3 py-1 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                                {post.imageOverlay.badge}
                                            </span>
                                        </div>
                                    )}
                                    <h2 className="text-lg md:text-3xl lg:text-5xl font-serif text-white leading-tight">
                                        {post.subtitle || post.title}
                                    </h2>
                                </div>

                                {post.imageOverlay?.stat && (
                                    <div className="hidden md:block bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FileText className="text-brand-blue w-4 h-4" />
                                            <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">
                                                {post.imageOverlay.stat.label}
                                            </span>
                                        </div>
                                        <div className="text-4xl font-serif text-white font-medium mb-1">
                                            {post.imageOverlay.stat.value}
                                        </div>
                                        <div className="text-xs font-bold text-green-400 uppercase tracking-wider flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                            {post.imageOverlay.stat.sublabel}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,99,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 md:gap-4 items-center text-[9px] md:text-xs font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-400 mb-4 md:mb-6">
                        <span className="text-brand-blue">{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                        <span>{post.readTime}</span>
                    </div>

                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-navy-900 leading-[1.15] md:leading-[1.1] mb-6 md:mb-8 tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-gray-200 py-6 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center text-white font-serif font-bold text-lg">
                                {post.author.initials}
                            </div>
                            <div>
                                <div className="text-navy-900 font-bold font-sans text-sm">{post.author.name}</div>
                                {post.author.role && (
                                    <div className="text-gray-500 text-xs uppercase tracking-wider">{post.author.role}</div>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: post.title,
                                            text: post.tldr || post.description || `Check out this research from CRASH Lab!`,
                                            url: window.location.href,
                                        }).catch((error) => console.log('Error sharing', error));
                                    } else {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert('Link copied to clipboard!');
                                    }
                                }}
                                className="group p-2 rounded-full border border-gray-200 hover:bg-navy-900 hover:text-white transition-all duration-300 text-navy-900"
                                aria-label="Share this post"
                            >
                                <Share2 size={18} className="group-hover:scale-110 transition-transform" />
                            </button>
                            <button
                                onClick={() => {
                                    alert("PDF version coming soon! Please check back later.");
                                }}
                                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-navy-900 hover:text-white transition-all duration-300 text-navy-900 text-xs font-bold uppercase tracking-wider"
                            >
                                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                                PDF
                            </button>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                <div className="lg:col-span-8 max-w-none mx-auto lg:mx-0 min-w-0 w-full">
                    {post.tldr && (
                        <FadeIn delay={100} className="bg-navy-900/5 p-6 md:p-8 rounded-xl border border-navy-900/10 mb-8 md:mb-12">
                            <h3 className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-brand-blue mb-3 md:mb-4">TL;DR</h3>
                            <p className="text-base md:text-lg lg:text-xl font-serif text-navy-900 italic leading-relaxed">
                                {post.tldr}
                            </p>
                        </FadeIn>
                    )}

                    {post.content.map((section, index) => renderContentSection(section, index))}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="sticky top-32">
                        {post.authors && post.authors.length > 0 && (
                            <FadeIn delay={200}>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Authors</h4>
                                    <ul className="space-y-3">
                                        {post.authors.map((author, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                                                    {author.initials}
                                                </div>
                                                <span className="text-sm font-medium text-navy-900">{author.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        )}

                        <FadeIn delay={300}>
                            <div className="bg-navy-900 text-white p-6 rounded-xl shadow-lg">
                                <h4 className="text-xl font-serif font-semibold mb-2">CRASH Lab</h4>
                                <p className="text-sm text-white/60 mb-4">Koita Centre for Digital Health, Ashoka University</p>
                                <div className="h-px bg-white/20 w-full mb-4"></div>
                                <p className="text-xs leading-relaxed text-white/70">
                                    Advancing responsible autonomous systems in healthcare through rigorous benchmarking and clinical collaboration.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;