import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

// Actual logo SVG component used on the website
import Logo from './Logo';

// Actual logo SVG component used on the website
const CrashLabLogo = Logo;

const BrandKit: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(label);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    { name: 'Navy 900', hex: '#0F172A', tailwind: 'navy-900', usage: 'Primary text, headings, dark backgrounds' },
    { name: 'Navy 800', hex: '#1E293B', tailwind: 'navy-800', usage: 'Secondary dark elements' },
    { name: 'Brand Blue', hex: '#234C6A', tailwind: 'brand-blue', usage: 'Primary accent, CTAs, links, hover states' },
    { name: 'Steel 500', hex: '#456882', tailwind: 'steel-500', usage: 'Secondary accent, highlights, status indicators' },
    { name: 'Brand Dark', hex: '#1B3C53', tailwind: 'brand-dark', usage: 'Deep blue accents, dark cards' },
    { name: 'Paper', hex: '#FAFAF8', tailwind: 'paper', usage: 'Main background color' },
    { name: 'Brand Muted', hex: '#E3E3E3', tailwind: 'brand-muted', usage: 'Light backgrounds, subtle elements' },
    { name: 'Slate 700', hex: '#334155', tailwind: 'slate-700', usage: 'Body text (paragraphs)' },
  ];


  return (
    <div className="min-h-screen bg-paper">
      {/* Logo Section */}
      <section className="pt-24 pb-20 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-serif font-semibold text-navy-900 mb-2">Logo</h2>
          <p className="text-gray-500 mb-12">Primary logo and variations</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dark Logo on Light */}
            <div className="bg-white rounded-2xl p-12 border border-gray-200 flex flex-col items-center justify-center min-h-[300px]">
              <div className="flex items-center gap-3 mb-8">
                <CrashLabLogo className="w-12 h-12" color="#0F172A" />
                <span className="text-2xl font-sans font-bold text-navy-900 uppercase tracking-tight">CRASH Lab</span>
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Primary • Light Background</span>
            </div>

            {/* Light Logo on Dark */}
            <div className="bg-navy-900 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[300px]">
              <div className="flex items-center gap-3 mb-8">
                <CrashLabLogo className="w-12 h-12" color="#FFFFFF" />
                <span className="text-2xl font-sans font-bold text-white uppercase tracking-tight">Crash Lab</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Primary • Dark Background</span>
            </div>

            {/* Icon Only Variations */}
            <div className="bg-gray-100 rounded-2xl p-12 flex flex-col items-center justify-center">
              <div className="flex gap-8 mb-8">
                <div className="text-navy-900">
                  <CrashLabLogo className="w-16 h-16" />
                </div>
                <div className="text-brand-blue">
                  <CrashLabLogo className="w-16 h-16" />
                </div>
                <div className="text-gray-400">
                  <CrashLabLogo className="w-16 h-16" />
                </div>
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Icon Only • Color Variants</span>
            </div>

            {/* Clearspace */}
            <div className="bg-white rounded-2xl p-12 border border-gray-200 flex flex-col items-center justify-center">
              <div className="relative p-8 border-2 border-dashed border-brand-blue/30 rounded-xl">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 bg-white text-[8px] font-mono text-brand-blue uppercase">Min clearspace: 1x icon width</div>
                <div className="flex items-center gap-3">
                  <CrashLabLogo className="w-10 h-10" color="#0F172A" />
                  <span className="text-lg font-sans font-bold text-navy-900 uppercase tracking-tight">Crash Lab</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-6">Minimum Clearspace</span>
            </div>
          </div>

          {/* Logo Anatomy */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-lg font-serif font-semibold text-navy-900 mb-6">Logo Anatomy</h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-navy-900">
                <CrashLabLogo className="w-32 h-32" />
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-navy-900 mt-1 shrink-0"></div>
                  <span className="text-gray-600"><strong>Outer C:</strong> Arc representing "CRASH" and openness to collaboration</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded bg-navy-900 mt-1 shrink-0"></div>
                  <span className="text-gray-600"><strong>Inner Square + Circle:</strong> Represents a stethoscope (clinical care), a neural circuit (AI/ML), and methodological rigor</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-1 bg-navy-900 mt-2 shrink-0"></div>
                  <span className="text-gray-600"><strong>Center Line:</strong> Connection between research and real-world impact</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-navy-900 mt-1 shrink-0"></div>
                  <span className="text-gray-600"><strong>Center Dot:</strong> Focus on the core mission — human-centric healthcare AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-serif font-semibold text-navy-900 mb-2">Colors</h2>
          <p className="text-gray-500 mb-12">Click any color to copy its hex value</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => copyToClipboard(color.hex, color.name)}
                className="group text-left"
              >
                <div
                  className="aspect-square rounded-2xl mb-4 flex items-end p-4 transition-transform group-hover:scale-[1.02] shadow-lg"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className={`flex items-center gap-2 ${color.hex === '#FFFFFF' || color.hex === '#FAFAF9' || color.hex === '#F3F4F6' ? 'text-navy-900' : 'text-white'}`}>
                    {copiedColor === color.name ? (
                      <Check size={14} />
                    ) : (
                      <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                    <span className="text-xs font-mono opacity-80">{color.hex}</span>
                  </div>
                </div>
                <div className="font-semibold text-navy-900 mb-1">{color.name}</div>
                <div className="text-xs text-gray-500 font-mono mb-1">{color.tailwind}</div>
                <div className="text-xs text-gray-400">{color.usage}</div>
              </button>
            ))}
          </div>

          {/* Gradient Examples */}
          <div className="mt-16">
            <h3 className="text-xl font-serif font-semibold text-navy-900 mb-6">Gradients</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="h-32 rounded-2xl bg-gradient-to-r from-navy-900 to-[#1a2744] flex items-end p-4">
                <span className="text-xs font-mono text-white/70">navy-900 → #1a2744</span>
              </div>
              <div className="h-32 rounded-2xl bg-gradient-to-r from-brand-dark via-brand-blue to-brand-light flex items-end p-4">
                <span className="text-xs font-mono text-white/70">brand-dark → brand-light</span>
              </div>
              <div className="h-32 rounded-2xl bg-gradient-to-br from-[#0d1321] via-[#111827] to-[#0f172a] flex items-end p-4">
                <span className="text-xs font-mono text-white/70">Dashboard gradient</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-serif font-semibold text-navy-900 mb-2">Typography</h2>
          <p className="text-gray-500 mb-12">Font families and usage guidelines</p>

          <div className="space-y-12">
            {/* Space Grotesk */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-navy-900 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Space Grotesk</h3>
                  <p className="text-sm text-gray-500">Headlines, titles, display text</p>
                  <p className="text-xs font-mono text-gray-400 mt-2">Tailwind class: <code className="bg-gray-100 px-1.5 py-0.5 rounded">font-serif</code></p>
                  <p className="text-xs font-mono text-gray-400 mt-1">Google Font: <code className="bg-gray-100 px-1.5 py-0.5 rounded">Space+Grotesk:wght@300;400;500;600;700</code></p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['300 Light', '400 Regular', '500 Medium', '600 Semibold', '700 Bold'].map((weight) => (
                    <span key={weight} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                      {weight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <p className="text-5xl text-navy-900 font-semibold" style={{ letterSpacing: '-0.02em' }}>The quick brown fox jumps over the lazy dog</p>
                <p className="text-3xl text-navy-900/80 font-medium" style={{ letterSpacing: '-0.02em' }}>The quick brown fox jumps over the lazy dog</p>
                <p className="text-xl text-navy-900/60" style={{ letterSpacing: '-0.02em' }}>The quick brown fox jumps over the lazy dog</p>
                <p className="text-base text-navy-900/50">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
              </div>
            </div>

            {/* Inter */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-navy-900 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Inter</h3>
                  <p className="text-sm text-gray-500">Body text, UI elements, navigation, buttons</p>
                  <p className="text-xs font-mono text-gray-400 mt-2">Tailwind class: <code className="bg-gray-100 px-1.5 py-0.5 rounded">font-sans</code></p>
                  <p className="text-xs font-mono text-gray-400 mt-1">Google Font: <code className="bg-gray-100 px-1.5 py-0.5 rounded">Inter:wght@300;400;500;600</code></p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['300 Light', '400 Regular', '500 Medium', '600 Semibold'].map((weight) => (
                    <span key={weight} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                      {weight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p className="text-3xl text-navy-900 font-medium">The quick brown fox jumps over the lazy dog</p>
                <p className="text-xl text-navy-900/80">The quick brown fox jumps over the lazy dog</p>
                <p className="text-base text-navy-900/60">The quick brown fox jumps over the lazy dog</p>
                <p className="text-sm text-navy-900/50">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
              </div>
            </div>
          </div>

          {/* Type Scale */}
          <div className="mt-16">
            <h3 className="text-xl font-serif font-semibold text-navy-900 mb-6">Type Scale</h3>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-6">
              <div className="flex items-baseline gap-4 border-b border-gray-100 pb-4">
                <span className="text-xs font-mono text-gray-400 w-32">h1 / clamp</span>
                <span className="text-5xl font-serif text-navy-900">Hero Headline</span>
              </div>
              <div className="flex items-baseline gap-4 border-b border-gray-100 pb-4">
                <span className="text-xs font-mono text-gray-400 w-32">h2 / clamp</span>
                <span className="text-4xl font-serif text-navy-900">Section Title</span>
              </div>
              <div className="flex items-baseline gap-4 border-b border-gray-100 pb-4">
                <span className="text-xs font-mono text-gray-400 w-32">h3 / clamp</span>
                <span className="text-2xl font-serif text-navy-900">Card Heading</span>
              </div>
              <div className="flex items-baseline gap-4 border-b border-gray-100 pb-4">
                <span className="text-xs font-mono text-gray-400 w-32">body / 16-18px</span>
                <span className="text-lg font-sans text-slate-700">Body text for paragraphs and descriptions</span>
              </div>
              <div className="flex items-baseline gap-4 border-b border-gray-100 pb-4">
                <span className="text-xs font-mono text-gray-400 w-32">small / 14px</span>
                <span className="text-sm font-sans text-gray-600">Small text and labels</span>
              </div>
              <div className="flex items-baseline gap-4 border-b border-gray-100 pb-4">
                <span className="text-xs font-mono text-gray-400 w-32">caption / 12px</span>
                <span className="text-xs font-sans text-gray-500">Captions and metadata</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-gray-400 w-32">tag / 10px</span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-navy-900">TAG / LABEL TEXT</span>
              </div>
            </div>
          </div>

          {/* Font Import Code */}
          <div className="mt-12 bg-navy-900 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white mb-4">Google Fonts Import</h3>
            <pre className="text-xs font-mono text-steel-400 overflow-x-auto">
              {`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">`}
            </pre>
          </div>
        </div>
      </section>

      {/* UI Components Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-serif font-semibold text-navy-900 mb-2">UI Elements</h2>
          <p className="text-gray-500 mb-12">Common component styles</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Buttons */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-navy-900 mb-6">Buttons</h3>
              <div className="space-y-4">
                <button className="px-8 py-4 bg-navy-900 text-white text-sm font-medium rounded-full hover:bg-brand-blue transition-all">
                  Primary Button
                </button>
                <button className="px-8 py-4 bg-white text-navy-900 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-all ml-4">
                  Secondary Button
                </button>
                <div className="pt-4">
                  <button className="px-6 py-2.5 text-xs font-medium uppercase tracking-[0.05em] text-brand-blue border border-brand-blue/30 rounded-full hover:bg-brand-blue hover:text-white transition-all">
                    Outline Button
                  </button>
                </div>
              </div>
            </div>

            {/* Tags/Badges */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-navy-900 mb-6">Tags & Badges</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-navy-900 text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full">
                  Primary Tag
                </span>
                <span className="px-4 py-1.5 border border-navy-900/20 text-navy-900 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full">
                  Outline Tag
                </span>
                <span className="px-4 py-1.5 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full">
                  Accent Tag
                </span>
                <span className="px-3 py-1.5 bg-brand-blue/10 text-brand-blue text-xs font-medium rounded-full">
                  Coming Soon
                </span>
                <span className="px-2 py-0.5 bg-steel-500 text-white text-[7px] font-bold rounded uppercase">
                  New
                </span>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 md:col-span-2">
              <h3 className="text-lg font-semibold text-navy-900 mb-6">Card Styles</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-sm font-semibold text-navy-900 mb-2">Light Card</div>
                  <div className="text-xs text-gray-500">White background with subtle border</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="text-sm font-semibold text-navy-900 mb-2">Muted Card</div>
                  <div className="text-xs text-gray-500">Gray background for grouping</div>
                </div>
                <div className="bg-navy-900 rounded-xl p-6">
                  <div className="text-sm font-semibold text-white mb-2">Dark Card</div>
                  <div className="text-xs text-white/60">Navy background for contrast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-gray-400">
            CRASH Lab Brand Kit • Internal Use Only • <span className="font-mono">crashlab.in/brand</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BrandKit;

