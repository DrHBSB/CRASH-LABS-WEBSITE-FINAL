import React from 'react';
import { ArrowLeft, Share2, Download, FileText } from 'lucide-react';
import { FadeIn } from './Animations';

interface BlogPostProps {
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ onBack }) => {
  return (
    <article className="bg-paper min-h-screen pt-24 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Navigation / Header */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-navy-900 hover:text-brand-blue transition-colors mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Research
        </button>

        <FadeIn className="max-w-5xl mx-auto">
            
            {/* Featured Image Card */}
            <div className="w-full bg-navy-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative h-[400px] mb-12 group">
                 <img 
                    src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2664&auto=format&fit=crop" 
                    alt="Radiology Scan" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" 
                />
                 {/* Overlay UI */}
                 <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
                 
                 {/* Floating UI Elements inside the card */}
                 <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Benchmark Update</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                            Gemini 3.0 Pro <span className="text-blue-200">Surpasses Trainees</span>
                        </h2>
                    </div>
                    
                    <div className="hidden md:block bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
                         <div className="flex items-center gap-2 mb-2">
                             <FileText className="text-brand-blue w-4 h-4" />
                             <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Accuracy Delta</span>
                         </div>
                         <div className="text-4xl font-serif text-white font-medium mb-1">+6.0%</div>
                         <div className="text-xs font-bold text-green-400 uppercase tracking-wider flex items-center gap-1">
                             <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                             vs Trainees
                         </div>
                    </div>
                 </div>
                 
                 {/* Scan Lines Overlay */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,99,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
            </div>

            <div className="flex flex-wrap gap-4 items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                <span className="text-brand-blue">Nov 20, 2025</span>
                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                <span>5 Min Read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-navy-900 leading-[1.1] mb-8 tracking-tight">
                Gemini 3.0 Pro Surpasses Radiology Trainees on Radiology's Last Exam (RadLE)
            </h1>

            <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-gray-200 py-6 gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center text-white font-serif font-bold text-lg">
                        SD
                    </div>
                    <div>
                        <div className="text-navy-900 font-bold font-sans text-sm">Dr. Suvrankar Datta</div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider">Group Lead, CRASH Lab</div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="p-2 rounded-full border border-gray-200 hover:bg-navy-900 hover:text-white transition-colors text-navy-900">
                        <Share2 size={18} />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-navy-900 hover:text-white transition-colors text-navy-900 text-xs font-bold uppercase tracking-wider">
                        <Download size={16} />
                        PDF
                    </button>
                </div>
            </div>
        </FadeIn>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8 max-w-none mx-auto lg:mx-0">
            
            <FadeIn delay={100} className="bg-navy-900/5 p-8 rounded-xl border border-navy-900/10 mb-12">
                <h3 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">TL;DR</h3>
                <p className="text-xl font-serif text-navy-900 italic leading-relaxed">
                    On our RadLE v1 benchmark of complex radiology cases, Gemini 3.0 Pro is now the first generalist AI model to outperform radiology trainees (51% vs 45%), but it still performs below board certified radiologists (83%).
                </p>
            </FadeIn>

            <FadeIn delay={200}>
                <h2 className="text-3xl font-serif font-medium text-navy-900 mt-12 mb-6 tracking-tight">Background</h2>
                <p className="text-lg font-sans font-light text-navy-800 leading-relaxed mb-6">
                    Over the last few months, at the Centre for Responsible Autonomous Systems in Healthcare (CRASH Lab), we have been systematically benchmarking frontier AI models on Radiology's Last Exam (RadLE v1), a spectrum biased diagnostic dataset designed to reflect the kind of complex, multi-system cases radiologists routinely struggle with. In our previous analysis done on September 2025, every major model: GPT-5, Gemini 2.5 Pro, o3, Claude Opus 4.1, had performed below radiology trainees.
                </p>
                <p className="text-lg font-sans font-light text-navy-800 leading-relaxed">
                    In our current blog, we share a small but important update. With the release of Gemini 3.0 Pro, we tested the model on our privately held same benchmark, using the same prompt, the same 50 cases from v1 dataset, and following the same evaluation rubric. The results demonstrate a clear upward shift and significant advancement in the multimodal reasoning capabilities of Gemini 3.0 Pro.
                </p>
            </FadeIn>

            <FadeIn delay={300}>
                <h2 className="text-3xl font-serif font-medium text-navy-900 mt-12 mb-6 tracking-tight">Benchmarking Setup</h2>
                <ul className="list-disc pl-5 space-y-3 text-lg font-sans font-light text-navy-800 leading-relaxed marker:text-brand-blue">
                    <li><strong className="font-medium">Dataset:</strong> RadLE v1 (50 difficult radiology cases; CT, MRI, radiographs).</li>
                    <li><strong className="font-medium">New Models tested:</strong>
                        <ul className="list-circle pl-5 mt-2 space-y-1 text-gray-600">
                            <li>Gemini 3.0 Pro (Preview) on Google AI Studio</li>
                            <li>Gemini 3.0 Pro via API high-thinking mode, repeated three times for reproducibility.</li>
                        </ul>
                    </li>
                </ul>
                <p className="text-sm font-sans text-gray-500 mt-4">All other settings remained unchanged from the original RadLE v1 experiment. This ensures the comparison is direct and fair.</p>
            </FadeIn>

            <FadeIn delay={400}>
                <h2 className="text-3xl font-serif font-medium text-navy-900 mt-12 mb-8 tracking-tight">Results</h2>
                
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm mb-12">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500">Group / Model</th>
                                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Accuracy (%)</th>
                                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Score (/50)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="bg-white">
                                <td className="py-4 px-6 font-medium text-navy-900">Expert Radiologists</td>
                                <td className="py-4 px-6 text-right font-bold text-green-600">83%</td>
                                <td className="py-4 px-6 text-right text-gray-600">41.5</td>
                            </tr>
                            <tr className="bg-brand-blue/5">
                                <td className="py-4 px-6 font-medium text-brand-blue flex items-center gap-2">
                                    Gemini 3.0 Pro (API High Thinking)
                                    <span className="px-2 py-0.5 bg-brand-blue text-white text-[9px] rounded-full uppercase tracking-wide">New</span>
                                </td>
                                <td className="py-4 px-6 text-right font-bold text-brand-blue">57%</td>
                                <td className="py-4 px-6 text-right text-brand-blue">28.5</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="py-4 px-6 font-medium text-navy-900">Gemini 3.0 Pro (Web)</td>
                                <td className="py-4 px-6 text-right font-bold text-navy-900">51%</td>
                                <td className="py-4 px-6 text-right text-gray-600">25.5</td>
                            </tr>
                            <tr className="bg-gray-50/50">
                                <td className="py-4 px-6 font-medium text-gray-700">Radiology Trainees</td>
                                <td className="py-4 px-6 text-right font-bold text-gray-700">45%</td>
                                <td className="py-4 px-6 text-right text-gray-600">22.5</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="py-4 px-6 font-medium text-gray-500">Prior SOTA GPT-5 Thinking</td>
                                <td className="py-4 px-6 text-right font-bold text-gray-500">30%</td>
                                <td className="py-4 px-6 text-right text-gray-400">15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-lg font-sans font-light text-navy-800 leading-relaxed">
                    These results are significant, because for the first time in our evaluations, a generalist AI model has crossed radiology-trainee level performance on our benchmark (51% vs 45%). While still far from expert radiologist-level performance, the jump from previous models is noteworthy and demonstrates significant progress of generalist models.
                </p>
            </FadeIn>

            <FadeIn delay={500}>
                <h2 className="text-3xl font-serif font-medium text-navy-900 mt-12 mb-6 tracking-tight">An Example where Gemini 3.0 outperformed prior SOTA</h2>
                <p className="text-lg font-sans font-light text-navy-800 leading-relaxed mb-6">
                    One of the clearest improvements appeared in an acute appendicitis case. This was a case that earlier frontier models, including GPT-5 (reasoning-high), had not been able to diagnose. In our prior experiment GPT-5 had shown poor anatomical localisation and premature diagnostic closure.
                </p>
                <p className="text-lg font-sans font-light text-navy-800 leading-relaxed">
                    In contrast, Gemini 3.0 Pro demonstrated a noticeably more structured and radiologist-like approach:
                </p>
                <ul className="space-y-4 my-8">
                    {[
                        { title: "Correct anatomical identification", desc: 'It located the appendix in the "right lower quadrant, anterior to the psoas, near the caecum".' },
                        { title: "Clear description of imaging features", desc: '"Dilated tubular appendix, wall enhancement, periappendiceal fat stranding, fluid-filled lumen."' },
                        { title: "Systematic exclusion of mimics", desc: 'Explicitly ruled out "mucocele, Crohn disease, epiploic appendagitis, diverticulitis, and ureteric stone."' },
                        { title: "Cohesive chain-of-thought", desc: 'The reasoning progressed in stable, sequential steps rather than jumping between diagnoses.' }
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                            <div className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                            <div>
                                <span className="block font-bold text-navy-900 text-sm mb-1">{item.title}</span>
                                <span className="text-gray-600 text-sm leading-relaxed">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </FadeIn>

            <FadeIn delay={600}>
                <h2 className="text-3xl font-serif font-medium text-navy-900 mt-12 mb-6 tracking-tight">Conclusion</h2>
                <p className="text-lg font-sans font-light text-navy-800 leading-relaxed mb-6">
                    We update the results on the Radiology's Last Exam (RadLE v1) dataset. We show significant progress of generalist models but still short of readiness for deployment, autonomy or diagnostic replacement.
                </p>
                <p className="text-lg font-sans font-medium text-navy-900 leading-relaxed">
                    Gemini 3.0 Pro becomes the first generalist AI model to surpass radiology trainees on the RadLE v1 benchmark.
                </p>

                <div className="mt-16 p-8 bg-brand-blue text-white rounded-2xl">
                    <h3 className="text-2xl font-serif font-medium mb-4">Join Us to shape India's Healthcare AI Story</h3>
                    <p className="text-white/80 font-sans font-light mb-6">
                        If you're a physician, resident or medical student who wants hands-on experience with responsible AI in real clinical workflows, feel free to reach out. We have spots for motivated trainees who want to shape how healthcare evolves.
                    </p>
                    <a href="mailto:suvrankar.datta@ashoka.edu.in" className="inline-block px-6 py-3 bg-white text-brand-blue font-bold rounded-full hover:bg-navy-900 hover:text-white transition-all">
                        Apply as Researcher
                    </a>
                </div>
            </FadeIn>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32">
                <FadeIn delay={200}>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Authors</h4>
                        <ul className="space-y-3">
                            {["Suvrankar Datta", "Divya Buchireddygari", "Lakshmi Vennela Chowdary Kaza", "Upasana Karnwal", "Hakikat Bir Singh Bhatti", "Kautik Singh"].map((author, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                                        {author.split(' ')[0][0]}{author.split(' ')[1][0]}
                                    </div>
                                    <span className="text-sm font-medium text-navy-900">{author}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>

                <FadeIn delay={300}>
                    <div className="bg-navy-900 text-white p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-serif font-medium mb-2">CRASH Lab</h4>
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