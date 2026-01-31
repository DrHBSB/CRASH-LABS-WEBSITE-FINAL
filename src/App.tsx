import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Original hero saved as Hero.original.tsx
import MissionVision from './components/MissionVision';
import WhyCrashLab from './components/WhyCrashLab';
import Commitment from './components/Commitment';
import Pillars from './components/Pillars';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import { blogPosts } from './data/blogPosts';
import CustomCursor from './components/CustomCursor';
import PartnershipModal from './components/PartnershipModal';
import { ApplicationModal } from './components/forms/ApplicationForm';
import BrandKit from './components/BrandKit';
// import Advisors from './components/Advisors';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage: React.FC<{ onPartnerClick: () => void; onJoinClick: () => void }> = ({ onPartnerClick, onJoinClick }) => {
  return (
    <>
      <Hero onPartnerClick={onPartnerClick} onJoinClick={onJoinClick} />
      <MissionVision />
      <WhyCrashLab onReadMore={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })} />
      <Commitment />
      <Pillars />
      <Timeline />
      <Team />
      {/* <Advisors /> */}
      <Blog />
    </>
  );
};

const AppContent: React.FC = () => {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const location = useLocation();
  const isBrandPage = location.pathname === '/brand';

  return (
    <div className="w-full min-h-screen flex flex-col font-sans bg-paper selection:bg-brand-blue selection:text-white relative">
      {/* Subtle Film Grain Overlay - Now using static texture instead of SVG filter */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
        style={{
          backgroundImage: 'url("/noise.png")',
          backgroundRepeat: 'repeat',
        }}
      />

      <ScrollToTop />
      <CustomCursor />

      {/* Navbar is always present */}
      <Navbar onNavigateHome={() => { /* Handled by Link in Navbar usually, or keep empty if standard nav */ }} />

      {isBrandPage ? (
        <main className="flex-grow">
          <Routes>
            <Route path="/brand" element={<BrandKit />} />
          </Routes>
        </main>
      ) : (
        <>
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<HomePage onPartnerClick={() => setIsPartnerModalOpen(true)} onJoinClick={() => setIsJoinModalOpen(true)} />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer onNavigateHome={() => { }} onPartnerClick={() => setIsPartnerModalOpen(true)} />
        </>
      )}

      {/* Partnership Modal */}
      <PartnershipModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />

      {/* Application Modal */}
      <ApplicationModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;