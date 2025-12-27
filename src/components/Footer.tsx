import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface FooterProps {
  onPartnerClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPartnerClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId: string) => {
    // Check if we're on the home page
    const isHome = location.pathname === '/';
    
    if (isHome) {
      // Already on home, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash without jumping
        window.history.pushState(null, '', `/#${sectionId}`);
      }
    } else {
      // Navigate to home first, then scroll to section (handled by Navbar's useEffect usually, or need to pass hash)
      navigate(`/#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
      if (location.pathname !== '/') {
          navigate('/');
      } else {
          scrollToTop();
      }
  };

  return (
    <footer id="contact" className="bg-navy-900 text-white">

      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-white tracking-tight mb-6 leading-tight">
              Let's Accelerate Healthcare AI Innovation Together
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Whether you're a clinician, researcher, or industry partner — we'd love to collaborate.
            </p>
            <button
              onClick={onPartnerClick}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12">

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 py-12 lg:py-16 border-b border-white/10 gap-8 lg:gap-12">

          {/* Logo */}
          <div
            className="cursor-pointer group"
            onClick={handleLogoClick}
          >
            <div className="flex items-center gap-3">
<Logo className="w-10 h-10 text-white group-hover:text-brand-blue transition-colors" />
              <span className="text-xl font-serif font-semibold text-white tracking-tight">
                CRASH Lab
              </span>
            </div>
            <p className="text-sm text-white/70 mt-4 max-w-xs">
              Centre for Responsible AI in Healthcare at Koita Centre for Digital Health
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <a href="https://www.ashoka.edu.in/page/koita-centre-for-digital-health-at-ashoka/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                  Koita Centre for Digital Health
                </a>
              </p>
              <p>
                <a href="https://www.ashoka.edu.in" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                  Ashoka University
                </a>
              </p>
              <p>
                <a
                  href="mailto:suvrankar.datta@ashoka.edu.in"
                  className="text-white/90 hover:text-white transition-colors block"
                >
                  suvrankar.datta@ashoka.edu.in
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <button 
                onClick={() => handleSectionClick('research')} 
                className="text-white/90 hover:text-white transition-colors text-left w-fit"
              >
                Research
              </button>
              <button 
                onClick={() => handleSectionClick('publications')} 
                className="text-white/90 hover:text-white transition-colors text-left w-fit"
              >
                Publications
              </button>
              <button 
                onClick={() => handleSectionClick('mission')} 
                className="text-white/90 hover:text-white transition-colors text-left w-fit"
              >
                Mission
              </button>
              <button 
                onClick={() => handleSectionClick('team')} 
                className="text-white/90 hover:text-white transition-colors text-left w-fit"
              >
                Team
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2025 CRASH Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
              Twitter
            </a>
            <button
              onClick={scrollToTop}
              className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowUp size={12} />
              Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
